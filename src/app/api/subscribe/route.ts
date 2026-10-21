import { NextResponse } from "next/server";

/**
 * Subscribes a lead to the mailing list.
 *
 * Wired for Mailchimp (the team's existing provider). Set these env vars
 * in Vercel to go live, no code changes needed:
 *   MAILCHIMP_API_KEY        e.g. abc123...-us21
 *   MAILCHIMP_SERVER_PREFIX  the "us21" suffix on the API key
 *   MAILCHIMP_AUDIENCE_ID    the target audience/list ID
 *
 * Until those are set, submissions are accepted and logged server-side
 * (so the form never breaks for visitors) but not actually delivered
 * anywhere, so don't rely on it collecting real leads yet.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !serverPrefix || !audienceId) {
    console.warn(
      `[subscribe] Mailchimp not configured, skipping: ${email} (${name || "no name"})`
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const [firstName, ...rest] = name.split(" ");

  const res = await fetch(
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName ?? "",
          LNAME: rest.join(" "),
        },
      }),
    }
  );

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    // Mailchimp returns 400 for an email already on the list; treat that as a success.
    if (data?.title === "Member Exists") {
      return NextResponse.json({ ok: true, delivered: true });
    }
    console.error("[subscribe] Mailchimp error:", data);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
