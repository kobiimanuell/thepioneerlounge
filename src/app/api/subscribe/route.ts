import { NextResponse } from "next/server";

/**
 * Handles a checklist signup. Three things happen on a real submission,
 * all through Mailgun:
 *   1. The checklist is emailed straight to the person who signed up.
 *   2. A notification lands in the team's inbox so a new lead doesn't
 *      go unnoticed.
 *   3. The signup is added to a Mailgun mailing list, purely for
 *      record-keeping (Mailgun's lists are basic, there's no campaign
 *      or newsletter tooling behind them like Mailchimp had).
 *
 * Set these env vars in Vercel to go live, no code changes needed:
 *   MAILGUN_API_KEY      Settings -> API Keys -> Private API key
 *   MAILGUN_DOMAIN        the sending domain, e.g. mg.thepioneerlounge.com
 *   MAILGUN_LIST_ADDRESS  optional, a mailing list address on that domain
 *                         for record-keeping, e.g. checklist@mg.thepioneerlounge.com
 *                         (skipped if unset)
 *   MAILGUN_FROM_EMAIL    optional, defaults to hello@<MAILGUN_DOMAIN>
 *   MAILGUN_BASE_URL      optional, defaults to https://api.mailgun.net/v3
 *                         (EU accounts use https://api.eu.mailgun.net/v3)
 *
 * Until MAILGUN_API_KEY and MAILGUN_DOMAIN are set, submissions are
 * accepted and logged server-side (so the form never breaks for
 * visitors) but nothing is actually sent, so don't rely on it collecting
 * real leads yet.
 *
 * The checklist email body below is placeholder copy. Swap
 * CHECKLIST_EMAIL_BODY for the real "AI Readiness Checklist" content
 * once it exists.
 */

const CHECKLIST_EMAIL_BODY = `Thanks for requesting the AI Readiness Checklist!

(Placeholder: the real checklist content goes here once it's finalized.)

If you have any questions in the meantime, just reply to this email.

— The Pioneer Lounge`;

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

  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;

  if (!apiKey || !domain) {
    console.warn(
      `[subscribe] Mailgun not configured, skipping: ${email} (${name || "no name"})`
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const baseUrl = process.env.MAILGUN_BASE_URL || "https://api.mailgun.net/v3";
  const fromEmail =
    process.env.MAILGUN_FROM_EMAIL || `The Pioneer Lounge <hello@${domain}>`;
  const auth = `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`;

  async function sendMessage(params: Record<string, string>) {
    const form = new URLSearchParams(params);
    const res = await fetch(`${baseUrl}/${domain}/messages`, {
      method: "POST",
      headers: {
        Authorization: auth,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Mailgun send failed (${res.status}): ${text}`);
    }
  }

  // The checklist delivery is the one thing the visitor is actually
  // waiting on, so its failure is reported back to them.
  try {
    await sendMessage({
      from: fromEmail,
      to: name ? `${name} <${email}>` : email,
      subject: "Your AI Readiness Checklist",
      text: CHECKLIST_EMAIL_BODY,
    });
  } catch (err) {
    console.error("[subscribe] Mailgun checklist send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }

  // The internal notification and the record-keeping list are both
  // best-effort: a visitor who already got their checklist shouldn't
  // see an error because either of these had a hiccup.
  await sendMessage({
    from: fromEmail,
    to: "admin@thepioneerlounge.com",
    subject: "New AI Readiness Checklist signup",
    text: `Name: ${name || "(not provided)"}\nEmail: ${email}`,
  }).catch((err) => {
    console.error("[subscribe] Mailgun notification send failed:", err);
  });

  const listAddress = process.env.MAILGUN_LIST_ADDRESS;
  if (listAddress) {
    const form = new URLSearchParams({
      address: email,
      name,
      subscribed: "true",
      upsert: "true",
    });
    await fetch(`${baseUrl}/lists/${listAddress}/members`, {
      method: "POST",
      headers: {
        Authorization: auth,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`List add failed (${res.status})`);
      })
      .catch((err) => {
        console.error("[subscribe] Mailgun list add failed:", err);
      });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
