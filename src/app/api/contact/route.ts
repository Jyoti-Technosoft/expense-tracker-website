import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import { brandConfig } from "@/config/brand";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, message } = body;

    // validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : "Not provided";
    const safeMessage = escapeHtml(message);

    const logoImg = `
  <img
    src="cid:logo"
    width="70"
    style="margin-bottom:10px;display:block;margin-left:auto;margin-right:auto;border-radius:8px;"
    alt="${brandConfig.company.name}"
  />
`;

    const attachments = [
      {
        filename: "logo2.png",
        path: "./public/logos/logo2.png",
        cid: "logo",
      },
    ];

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      attachments,
      subject: `New Inquiry from ${safeName}`,
      html: `
<div style="background:#f4f6f8;padding:30px;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

    <div style="background:linear-gradient(135deg,#4F46E5,#4338CA);padding:20px;text-align:center;color:#fff;">
      ${logoImg}
      <h2 style="margin:0;font-size:20px;">New Contact Form Submission</h2>
      <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">Website Inquiry Notification</p>
    </div>

    <div style="padding:25px;color:#111827;">

      <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:15px;border-radius:10px;">
        <p style="margin:6px 0;"><strong>Name:</strong> ${safeName}</p>
        <p style="margin:6px 0;"><strong>Email:</strong> ${safeEmail}</p>
        <p style="margin:6px 0;"><strong>Company:</strong> ${safeCompany}</p>
      </div>

      <h3 style="margin-top:20px;margin-bottom:10px;">Message</h3>

      <div style="background:#fff;border-left:4px solid #4f46e5;padding:15px;border-radius:8px;white-space:pre-line;color:#374151;">
        ${safeMessage}
      </div>

    </div>

    <div style="background:#f3f4f6;padding:15px;text-align:center;font-size:12px;color:#6b7280;">
      ${brandConfig.company.name} • Automated Notification
    </div>

  </div>
</div>
`
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      replyTo: process.env.EMAIL_USER,
      attachments,
      subject: `Thanks for contacting ${brandConfig.company.name}`,
      html: `
<div style="background:#f4f6f8;padding:30px;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

    <div style="background:linear-gradient(135deg,#4f46e5,#4338ca);padding:30px;text-align:center;color:#fff;">
      ${logoImg}
      <h1 style="margin:0;font-size:24px;">Thanks for reaching out!</h1>
      <p style="margin-top:8px;font-size:14px;opacity:0.9;">
        We’ve received your message successfully
      </p>
    </div>

    <div style="padding:25px;color:#111827;">

      <p>Hi <strong>${safeName}</strong>,</p>

      <p style="line-height:1.6;">
        Thank you for contacting <strong>${brandConfig.company.name}</strong>.
        Our team will review your message and respond shortly.
      </p>

      <div style="margin:20px 0;padding:15px;border-radius:10px;background:#f9fafb;border-left:4px solid #4f46e5;">
        <p style="margin:0;font-size:13px;color:#6b7280;">Your message:</p>
        <p style="margin-top:8px;white-space:pre-line;color:#374151;">
          ${safeMessage}
        </p>
      </div>

      <div style="padding:12px;background:#eef2ff;border-radius:8px;margin-bottom:10px;">
        ⏱️ Response time: <strong>within 24 hours</strong>
      </div>

    </div>

    <div style="background:#f3f4f6;padding:15px;text-align:center;font-size:12px;color:#6b7280;">
      © ${new Date().getFullYear()} ${brandConfig.company.name}
    </div>

  </div>
</div>
`
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Email Failed" },
      { status: 500 }
    );
  }
}