import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import { brandConfig } from "@/config/brand";
import path from "path";

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
        path: path.join(process.cwd(), "public/logos/logo2.png"),
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
        <div style="margin:0;padding:40px 20px;background:#eef2ff;font-family:Arial,Helvetica,sans-serif;">

        <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 15px 40px rgba(0,0,0,.08);">

          <!--Header -- >
      <div style="background:linear-gradient(135deg,#4F46E5,#4338CA);padding:40px 20px;text-align:center;">

    <div style="width:90px;height:90px;background:#ffffff;border-radius:20px;margin:0 auto 18px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 25px rgba(0,0,0,.15);">
    ${logoImg}
    </div>

    <h1 style = "margin:0;color:#ffffff;font-size:26px;font-weight:700;" >
    New Contact Form Submission
    </h1>

    <p style = "margin:10px 0 0;color:#E0E7FF;font-size:14px;" >
    A new inquiry has been received from your website.
      </p>

    </div>

    < !--Body -->
    <div style="padding:35px;">

    <h2 style="margin:0 0 20px;color:#111827;font-size:20px;">
    Contact Details
    </h2>

    <table width = "100%" cellpadding = "0" cellspacing = "0" style = "border-collapse:collapse;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">

    <tr>
    <td style="padding:16px;border-bottom:1px solid #E5E7EB;width:140px;font-weight:bold;color:#4F46E5;" >
    Name
    </td>
    < td style = "padding:16px;border-bottom:1px solid #E5E7EB;color:#374151;" >
    ${safeName}
    </td>
    </tr>

    <tr>
    <td style="padding:16px;border-bottom:1px solid #E5E7EB;font-weight:bold;color:#4F46E5;" >
    Email
    </td>
    < td style = "padding:16px;border-bottom:1px solid #E5E7EB;color:#374151;" >
    ${safeEmail}
    </td>
    </tr>

    <tr>
    <td style="padding:16px;font-weight:bold;color:#4F46E5;">
    Company
    </td>
    <td style = "padding:16px;color:#374151;" >
    ${safeCompany}
    </td>
    </tr>

    </table>

    <h2 style = "margin:35px 0 15px;color:#111827;font-size:20px;">
    Message
    </h2>

    <div style = "background:#FAFBFF;border:1px solid #DBEAFE;border-left:5px solid #4F46E5;border-radius:12px;padding:20px;color:#374151;white-space:pre-line;line-height:1.8;font-size:15px;">
    ${safeMessage}
    </div>

    <div style = "margin-top:30px;padding:18px;background:#EEF2FF;border-radius:12px;border:1px solid #C7D2FE;">

    <p style="margin:0;color:#4338CA;font-size:14px;" >
          📩 <strong>Reply directly to this email </strong> to respond to
    < strong > ${safeName} </strong>.
    </p>

    </div>

    </div>

    < !--Footer -->
    <div style="background:#F9FAFB;padding:25px;text-align:center;border-top:1px solid #E5E7EB;">

    <p style="margin:0;font-size:14px;font-weight:600;color:#111827;" >
    ${brandConfig.company.name}
    </p>

    <p style = "margin:8px 0 0;font-size:12px;color:#6B7280;" >
    This is an automated notification generated from your website contact form.
      </p>

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
<div style="margin:0;padding:40px 20px;background:#EEF2FF;font-family:Arial,Helvetica,sans-serif;">

  <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #E5E7EB;box-shadow:0 15px 40px rgba(0,0,0,.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#4F46E5,#4338CA);padding:45px 25px;text-align:center;">

      <div style="width:90px;height:90px;background:#ffffff;border-radius:20px;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 25px rgba(0,0,0,.15);">
        ${logoImg}
      </div>

      <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">
        Thank You!
      </h1>

      <p style="margin:12px 0 0;color:#E0E7FF;font-size:15px;line-height:1.6;">
        We've successfully received your message and appreciate you reaching out.
      </p>

    </div>

    <!-- Body -->
    <div style="padding:35px;">

      <p style="margin-top:0;font-size:16px;color:#111827;">
        Hi <strong>${safeName}</strong>,
      </p>

      <p style="color:#4B5563;line-height:1.8;font-size:15px;">
        Thank you for contacting
        <strong>${brandConfig.company.name}</strong>.
        Your inquiry has been received successfully, and one of our team members
        will review it carefully and get back to you as soon as possible.
      </p>

      <!-- Response Time -->
      <div style="margin:30px 0;padding:18px;background:#EEF2FF;border:1px solid #C7D2FE;border-radius:12px;">

        <div style="font-size:16px;font-weight:600;color:#4338CA;">
          ⏱️ Expected Response Time
        </div>

        <p style="margin:10px 0 0;color:#374151;line-height:1.6;">
          We usually respond within
          <strong>24 business hours</strong>.
        </p>

      </div>

      <!-- Message -->
      <h2 style="margin:35px 0 15px;color:#111827;font-size:20px;">
        Your Message
      </h2>

      <div style="background:#FAFBFF;border:1px solid #DBEAFE;border-left:5px solid #4F46E5;border-radius:12px;padding:20px;color:#374151;white-space:pre-line;line-height:1.8;font-size:15px;">
        ${safeMessage}
      </div>

      <!-- Closing -->
      <div style="margin-top:35px;padding:20px;background:#F9FAFB;border-radius:12px;border:1px solid #E5E7EB;">

        <p style="margin:0;color:#374151;line-height:1.7;">
          If you have any additional information to share before we respond,
          simply reply to this email—we'll receive it directly.
        </p>

      </div>

      <p style="margin-top:35px;color:#111827;line-height:1.8;">
        Best regards,<br>
        <strong>${brandConfig.company.name}</strong>
      </p>

    </div>

    <!-- Footer -->
    <div style="background:#F9FAFB;padding:25px;text-align:center;border-top:1px solid #E5E7EB;">

      <p style="margin:0;font-size:14px;font-weight:600;color:#111827;">
        ${brandConfig.company.name}
      </p>

      <p style="margin:8px 0 0;font-size:12px;color:#6B7280;">
        © ${new Date().getFullYear()} ${brandConfig.company.name}. All rights reserved.
      </p>

      <p style="margin:6px 0 0;font-size:12px;color:#9CA3AF;">
        This is an automated confirmation email. Please do not worry if you don't receive an immediate response—our team will contact you shortly.
      </p>

    </div>

  </div>

</div>
`
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Email Error : ", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Email Failed"
      },
      { status: 500 }
    );
  }
}