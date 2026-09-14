import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const fallbackPortfolioUrl = "https://john-rey-portfolio-wsj7.vercel.app";
const facebookUrl = "https://facebook.com/JanuareyB";

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
    const safeGmailUser = escapeHtml(gmailUser);
    const safePortfolioUrl = escapeHtml(
      process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackPortfolioUrl,
    );
    const safeFacebookUrl = escapeHtml(facebookUrl);

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
      from: `"John Rey Baliguat | Portfolio" <${gmailUser}>`,
      to: email,
      replyTo: gmailUser,
      subject: "Your inquiry was received | John Rey Baliguat",
      text: [
        `Hi ${name},`,
        "",
        "Thank you for reaching out through my portfolio. Your message reached me successfully.",
        `Inquiry type: ${workType}`,
        `Company: ${company || "Not provided"}`,
        "",
        "I'll review your inquiry and reply directly to this email. If you would like to add a deadline, system link, or other important detail, simply reply to this message.",
        "",
        `Portfolio: ${process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackPortfolioUrl}`,
        `Facebook: ${facebookUrl}`,
        "",
        "Best,",
        "John Rey Baliguat",
        "Technical VA | Web and Business System Support",
        gmailUser,
      ].join("\n"),
      html: `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>Your inquiry was received</title>
          </head>
          <body style="margin:0;padding:0;background:#f3f5f8;color:#172033;font-family:Arial,Helvetica,sans-serif;">
            <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
              Your message reached John Rey successfully. Here is what happens next.
            </div>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#f3f5f8;">
              <tr>
                <td align="center" style="padding:34px 16px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;overflow:hidden;border:1px solid #e1e6ed;border-radius:16px;background:#ffffff;">
                    <tr>
                      <td style="height:4px;background:#6f8eff;font-size:0;line-height:0;">&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="padding:30px 32px 18px;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td align="left">
                              <span style="display:inline-block;padding:9px 10px;border-radius:9px;background:#111827;color:#ffffff;font-size:13px;font-weight:800;letter-spacing:0.08em;">JR</span>
                            </td>
                            <td align="right">
                              <span style="display:inline-block;padding:7px 9px;border:1px solid #ccebdc;border-radius:999px;background:#f0fbf5;color:#18794e;font-size:10px;font-weight:800;letter-spacing:0.08em;">MESSAGE RECEIVED</span>
                            </td>
                          </tr>
                        </table>

                        <h1 style="margin:27px 0 12px;color:#101827;font-size:28px;line-height:1.2;letter-spacing:-0.03em;">Thanks for reaching out, ${safeName}.</h1>
                        <p style="margin:0;color:#5f6b7a;font-size:15px;line-height:1.75;">
                          Your message reached me successfully. I appreciate your interest and will review the details you submitted.
                        </p>

                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;margin-top:24px;border:1px solid #e6eaf0;border-radius:11px;background:#f8fafc;">
                          <tr>
                            <td style="padding:14px 16px;color:#7a8593;font-size:11px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;">Inquiry type</td>
                            <td align="right" style="padding:14px 16px;color:#202b3a;font-size:13px;font-weight:700;">${safeWorkType}</td>
                          </tr>
                          ${company ? `
                          <tr>
                            <td style="padding:0 16px 14px;color:#7a8593;font-size:11px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;">Company</td>
                            <td align="right" style="padding:0 16px 14px;color:#202b3a;font-size:13px;font-weight:700;">${safeCompany}</td>
                          </tr>` : ""}
                        </table>

                        <div style="margin-top:18px;padding:18px;border-left:3px solid #6f8eff;border-radius:8px;background:#f5f7ff;">
                          <p style="margin:0 0 6px;color:#354fc7;font-size:11px;font-weight:800;letter-spacing:0.09em;text-transform:uppercase;">What happens next</p>
                          <p style="margin:0;color:#4f5d6d;font-size:14px;line-height:1.7;">
                            I&#39;ll review your inquiry and reply directly to this email. If you want to add a deadline, system link, or another important detail, simply reply to this message.
                          </p>
                        </div>

                        <a href="${safePortfolioUrl}" style="display:inline-block;margin-top:24px;padding:12px 17px;border-radius:9px;background:#172033;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;">View my portfolio</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 32px 26px;border-top:1px solid #e8ebf0;">
                        <p style="margin:0;color:#172033;font-size:14px;font-weight:800;">John Rey Baliguat</p>
                        <p style="margin:5px 0 12px;color:#788392;font-size:12px;line-height:1.55;">Technical VA · Web &amp; Business System Support</p>
                        <p style="margin:0;color:#788392;font-size:12px;line-height:1.6;">
                          <a href="mailto:${safeGmailUser}" style="color:#526bd8;text-decoration:none;">Email</a>
                          <span style="padding:0 7px;color:#c2c8d0;">·</span>
                          <a href="${safeFacebookUrl}" style="color:#526bd8;text-decoration:none;">Facebook</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
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
