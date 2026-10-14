import { NextResponse } from "next/server";
import { sendEmail, notifyEmail } from "@/lib/email";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, role, budget, timeline, website } = body ?? {};

  // Honeypot: bots fill every field, humans never see this one.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !company) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and company are required." },
      { status: 400 }
    );
  }

  const summary = `
    <h2>New discovery call request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Role:</strong> ${escapeHtml(role ?? "Not provided")}</p>
    <p><strong>Budget band:</strong> ${escapeHtml(budget ?? "Not provided")}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(timeline ?? "Not provided")}</p>
  `;

  await sendEmail({
    to: notifyEmail(),
    subject: `New discovery call request from ${company}`,
    html: summary,
  });

  await sendEmail({
    to: email,
    subject: `${site.name}: We've got your request`,
    html: `<p>Hi ${escapeHtml(name)},</p><p>Thanks for reaching out to ${site.name}. We've received your details and will follow up shortly to confirm your discovery call.</p><p>If you haven't already picked a time on the calendar, feel free to do that now. It's the fastest way to get on our calendar.</p>`,
  });

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
