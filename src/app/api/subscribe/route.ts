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
 * The actual checklist is the PDF at public/TPL_AI_Readiness_Checklist.pdf,
 * attached to the email. It's fetched from the live site's own public URL
 * rather than read off disk, since Vercel's serverless bundling doesn't
 * reliably carry arbitrary public/ files into the function at runtime, a
 * plain HTTP fetch sidesteps that entirely.
 */

const CHECKLIST_PDF_URL =
  "https://www.thepioneerlounge.com/TPL_AI_Readiness_Checklist.pdf";
const CHECKLIST_PDF_FILENAME = "The Pioneer Lounge - AI Readiness Checklist.pdf";

const CHECKLIST_EMAIL_BODY = `Thanks for requesting the AI Readiness Checklist!

It's attached to this email as a PDF, a 5-minute self-check to see where you actually stand before you spend a dollar on tools or training.

If you have any questions in the meantime, just reply to this email.

The Pioneer Lounge`;

/** Wraps a block of email-safe HTML in TPL's branded header/footer shell. */
function brandedEmailHtml(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; background-color:#faf8f3; font-family:Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#faf8f3; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:480px; background-color:#ffffff; border-radius:16px; border:1px solid #ebe7dd;">
            <tr>
              <td style="padding:32px 32px 20px; text-align:center;">
                <img src="https://thepioneerlounge.com/brand/logo/icon-mark-orange.png" width="40" height="40" alt="The Pioneer Lounge" style="display:block; margin:0 auto 10px; border:0;" />
                <div style="font-size:14px; font-weight:600; color:#16140f; letter-spacing:-0.01em;">The Pioneer Lounge</div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 32px; color:#16140f; font-size:15px; line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px; border-top:1px solid #ebe7dd; text-align:center; font-size:12px; color:#625d53;">
                The Pioneer Lounge &middot; <a href="https://thepioneerlounge.com" style="color:#f25c19; text-decoration:none;">thepioneerlounge.com</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

const CHECKLIST_EMAIL_HTML = brandedEmailHtml(`
  <h1 style="margin:0 0 16px; font-size:20px; font-weight:600; color:#16140f;">Your AI Readiness Checklist</h1>
  <p style="margin:0 0 16px;">Thanks for requesting the AI Readiness Checklist!</p>
  <p style="margin:0 0 16px;">It's attached to this email as a PDF, a 5-minute self-check to see where you actually stand before you spend a dollar on tools or training.</p>
  <p style="margin:0 0 16px;">If you have any questions in the meantime, just reply to this email.</p>
  <p style="margin:0; color:#625d53;">The Pioneer Lounge</p>
`);

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

  async function sendMessage(
    params: Record<string, string>,
    attachment?: { filename: string; data: ArrayBuffer; contentType: string }
  ) {
    let body: BodyInit;
    let headers: Record<string, string>;

    if (attachment) {
      const form = new FormData();
      for (const [key, value] of Object.entries(params)) form.append(key, value);
      form.append(
        "attachment",
        new Blob([attachment.data], { type: attachment.contentType }),
        attachment.filename
      );
      body = form;
      headers = { Authorization: auth };
    } else {
      body = new URLSearchParams(params);
      headers = {
        Authorization: auth,
        "Content-Type": "application/x-www-form-urlencoded",
      };
    }

    const res = await fetch(`${baseUrl}/${domain}/messages`, {
      method: "POST",
      headers,
      body,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Mailgun send failed (${res.status}): ${text}`);
    }
  }

  // The checklist delivery is the one thing the visitor is actually
  // waiting on, so its failure is reported back to them.
  try {
    const pdfRes = await fetch(CHECKLIST_PDF_URL);
    if (!pdfRes.ok) {
      throw new Error(`Checklist PDF fetch failed (${pdfRes.status})`);
    }
    const pdfData = await pdfRes.arrayBuffer();

    await sendMessage(
      {
        from: fromEmail,
        to: name ? `${name} <${email}>` : email,
        subject: "Your AI Readiness Checklist",
        text: CHECKLIST_EMAIL_BODY,
        html: CHECKLIST_EMAIL_HTML,
      },
      { filename: CHECKLIST_PDF_FILENAME, data: pdfData, contentType: "application/pdf" }
    );
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
