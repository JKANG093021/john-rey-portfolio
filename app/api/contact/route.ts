import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  workType?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function cleanSingleLine(value: unknown, max = 500) {
  return clean(value, max).replace(/[\r\n]+/g, " ");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = cleanSingleLine(body.name, 80);
    const email = clean(body.email, 120).toLowerCase();
    const company = cleanSingleLine(body.company, 100);
    const workType = cleanSingleLine(body.workType, 80);
    const message = clean(body.message, 2500);
    const website = clean(body.website, 200); // hidden honeypot

    if (website) {
      return NextResponse.json({ message: "Thanks. Your message was received." });
    }

    if (!name || !validEmail(email) || !workType || message.length < 15) {
      return NextResponse.json(
        { message: "Please complete your name, valid email, support type, and a short message." },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error("Contact form email environment variables are missing.");
      return NextResponse.json(
        { message: "The contact form is not configured yet. Please email me directly instead." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeWorkType = escapeHtml(workType);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: `"John Rey Portfolio" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Portfolio inquiry: ${workType} - ${name}`,
      text: [
        `New portfolio inquiry from ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Support type: ${workType}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#142033;line-height:1.6">
          <h2 style="margin-bottom:8px">New portfolio inquiry</h2>
          <p style="margin-top:0;color:#5c6878">A visitor submitted the contact form on your portfolio.</p>
          <table style="width:100%;border-collapse:collapse;margin:20px 0">
            <tr><td style="padding:8px 0;font-weight:700">Name</td><td>${safeName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Email</td><td>${safeEmail}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Company</td><td>${safeCompany}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Support</td><td>${safeWorkType}</td></tr>
          </table>
          <div style="padding:16px;border-radius:10px;background:#f3f6fa">${safeMessage}</div>
          <p style="margin-top:20px;color:#5c6878">Reply to this email in Gmail and it will reply directly to ${safeName}.</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"John Rey Baliguat" <${gmailUser}>`,
      to: email,
      replyTo: gmailUser,
      subject: "Thanks for reaching out - John Rey Baliguat",
      text: `Hi ${name},\n\nThanks for reaching out through my portfolio. I received your inquiry about ${workType}.\n\nI'll review the details you sent and get back to you as soon as I can. If there is anything important I should know, such as a deadline, system link, or specific issue, you can reply directly to this email.\n\nBest,\nJohn Rey Baliguat\nTechnical Support | Admin Operations | Customer Support | Web Systems\n${gmailUser}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#172033;line-height:1.7">
          <p>Hi ${safeName},</p>
          <p>Thanks for reaching out through my portfolio. I received your inquiry about <strong>${safeWorkType}</strong>.</p>
          <p>I&apos;ll review the details you sent and get back to you as soon as I can. If there is anything important I should know, such as a deadline, system link, or specific issue, you can reply directly to this email.</p>
          <p style="margin-top:28px">Best,<br /><strong>John Rey Baliguat</strong><br />Technical Support | Admin Operations | Customer Support | Web Systems<br />${escapeHtml(gmailUser)}</p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Thanks! Your inquiry was sent, and I also emailed you a confirmation.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "I couldn't send the inquiry right now. Please try again or email me directly." },
      { status: 500 },
    );
  }
}
