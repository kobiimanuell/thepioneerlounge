import { NextResponse } from "next/server";
import { sendEmail, notifyEmail } from "@/lib/email";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, role, budget, timeline, details, website } =
    body ?? {};

  // Honeypot: bots fill every field, humans never see this one.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !company || !details) {
    return NextResponse.json(
      {
        ok: false,
        error: "Name, email, company, and project details are required.",
      },
      { status: 400 }
    );
  }

  const summary = `
    <h2>New quote request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Role:</strong> ${escapeHtml(role ?? "Not provided")}</p>
    <p><strong>Budget band:</strong> ${escapeHtml(budget ?? "Not provided")}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(timeline ?? "Not provided")}</p>
    <p><strong>Project details:</strong></p>
    <p>${escapeHtml(details).replace(/\n/g, "<br />")}</p>
  `;

  await sendEmail({
    to: notifyEmail(),
    subject: `New quote request from ${company}`,
    html: summary,
  });

  await sendEmail({
    to: email,
    subject: `Your quote request has been received by ${site.name}`,
    html: `<p>Hi ${escapeHtml(name)},</p><p>Thanks for requesting a quote from ${site.name}. We've received the details below and will follow up with pricing shortly.</p><blockquote>${escapeHtml(details).replace(/\n/g, "<br />")}</blockquote>`,
  });

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
