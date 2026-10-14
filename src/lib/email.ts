import { Resend } from "resend";
import { site } from "./site";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM = process.env.EMAIL_FROM ?? "The Pioneer Lounge <notifications@thepioneerlounge.com>";

export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!resend) {
    console.warn(
      `[email] RESEND_API_KEY not set, skipping send to ${params.to}: "${params.subject}"`
    );
    return { skipped: true };
  }

  return resend.emails.send({
    from: FROM,
    to: params.to,
    subject: params.subject,
    html: params.html,
  });
}

export function notifyEmail() {
  return process.env.CONTACT_EMAIL ?? site.email;
}
