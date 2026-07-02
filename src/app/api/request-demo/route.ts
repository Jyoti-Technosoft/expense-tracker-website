import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import { brandConfig } from "@/config/brand";

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            fullName,
            workEmail,
            company,
            teamSize,
            phone,
            preferredDate,
            message,
        } = body;

        const logoImg =
            `
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

        if (!fullName || !workEmail || !company || !teamSize || !preferredDate) {
            return NextResponse.json(
                { success: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!isValidEmail(workEmail)) {
            return NextResponse.json(
                { success: false, error: "Invalid email format" },
                { status: 400 }
            );
        }

        const safeMessage = (message || "").replace(/\n/g, "<br/>");
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "🚀 New Demo Request Received",
            attachments,
            html: `
<div style="margin:0;padding:40px 20px;background:#EEF2FF;font-family:Arial,Helvetica,sans-serif;">

  <div style="max-width:650px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #E5E7EB;box-shadow:0 15px 40px rgba(0,0,0,.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#4F46E5,#4338CA);padding:40px 25px;text-align:center;">

      <div style="width:90px;height:90px;background:#ffffff;border-radius:20px;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 25px rgba(0,0,0,.15);">
        ${logoImg}
      </div>

      <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">
        🚀 New Demo Request
      </h1>

      <p style="margin:12px 0 0;color:#E0E7FF;font-size:15px;line-height:1.6;">
        A new potential customer has requested a product demo.
      </p>

    </div>

    <!-- Body -->
    <div style="padding:35px;">

      <h2 style="margin:0 0 20px;color:#111827;font-size:20px;">
        Lead Information
      </h2>

      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">

        <tr>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;width:180px;font-weight:600;color:#4F46E5;">
            Full Name
          </td>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;color:#374151;">
            ${fullName}
          </td>
        </tr>

        <tr>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;font-weight:600;color:#4F46E5;">
            Work Email
          </td>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;color:#374151;">
            ${workEmail}
          </td>
        </tr>

        <tr>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;font-weight:600;color:#4F46E5;">
            Company
          </td>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;color:#374151;">
            ${company}
          </td>
        </tr>

        <tr>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;font-weight:600;color:#4F46E5;">
            Team Size
          </td>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;color:#374151;">
            ${teamSize}
          </td>
        </tr>

        <tr>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;font-weight:600;color:#4F46E5;">
            Phone Number
          </td>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;color:#374151;">
            ${phone || "Not provided"}
          </td>
        </tr>

        <tr>
          <td style="padding:16px;font-weight:600;color:#4F46E5;">
            Preferred Demo Date
          </td>
          <td style="padding:16px;color:#374151;">
            ${preferredDate}
          </td>
        </tr>

      </table>

      <h2 style="margin:35px 0 15px;color:#111827;font-size:20px;">
        Customer Message
      </h2>

      <div style="background:#FAFBFF;border:1px solid #DBEAFE;border-left:5px solid #4F46E5;border-radius:12px;padding:20px;color:#374151;white-space:pre-line;line-height:1.8;font-size:15px;">
        ${safeMessage || "No message provided."}
      </div>

      <div style="margin-top:30px;padding:18px;background:#EEF2FF;border:1px solid #C7D2FE;border-radius:12px;">

        <div style="font-size:16px;font-weight:600;color:#4338CA;">
          💡 Follow-up Recommendation
        </div>

        <p style="margin:10px 0 0;color:#374151;line-height:1.6;">
          Contact this lead within
          <strong>24 hours</strong>
          to maximize engagement and conversion opportunities.
        </p>

      </div>

    </div>

    <!-- Footer -->
    <div style="background:#F9FAFB;padding:25px;text-align:center;border-top:1px solid #E5E7EB;">

      <p style="margin:0;font-size:14px;font-weight:600;color:#111827;">
        ${brandConfig.company.name}
      </p>

      <p style="margin:8px 0 0;font-size:12px;color:#6B7280;">
        Demo Request Notification System
      </p>

      <p style="margin:6px 0 0;font-size:12px;color:#9CA3AF;">
        This email was automatically generated from your website's demo request form.
      </p>

    </div>

  </div>

</div>
`
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: workEmail,
            subject: `🎉 Your Demo Request is Confirmed - ${brandConfig.product.name}`,
            attachments,
            html: `
<div style="margin:0;padding:40px 20px;background:#EEF2FF;font-family:Arial,Helvetica,sans-serif;">

  <div style="max-width:650px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #E5E7EB;box-shadow:0 15px 40px rgba(0,0,0,.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#4F46E5,#4338CA);padding:45px 25px;text-align:center;">

      <div style="width:90px;height:90px;background:#ffffff;border-radius:20px;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 25px rgba(0,0,0,.15);">
        ${logoImg}
      </div>

      <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">
        🎉 Demo Request Confirmed
      </h1>

      <p style="margin:12px 0 0;color:#E0E7FF;font-size:15px;line-height:1.6;">
        Thank you for your interest in
        <strong>${brandConfig.product.name}</strong>.
      </p>

    </div>

    <!-- Body -->
    <div style="padding:35px;">

      <p style="margin-top:0;font-size:16px;color:#111827;">
        Hi <strong>${fullName}</strong>,
      </p>

      <p style="color:#4B5563;line-height:1.8;font-size:15px;">
        We've successfully received your demo request for
        <strong>${brandConfig.product.name}</strong>.
        Our team is excited to show you how our platform can help streamline your workflow and improve your team's productivity.
      </p>

      <!-- Response Card -->
      <div style="margin:30px 0;padding:18px;background:#EEF2FF;border:1px solid #C7D2FE;border-radius:12px;">

        <div style="font-size:16px;font-weight:600;color:#4338CA;">
          ⏱️ What Happens Next?
        </div>

        <p style="margin:10px 0 0;color:#374151;line-height:1.6;">
          Our specialists will review your request and contact you within
          <strong>24 business hours</strong>
          to arrange a demo at a time that works best for you.
        </p>

      </div>

      <!-- Summary -->
      <h2 style="margin:35px 0 15px;color:#111827;font-size:20px;">
        Your Demo Request
      </h2>

      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">

        <tr>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;width:180px;font-weight:600;color:#4F46E5;">
            Company
          </td>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;color:#374151;">
            ${company}
          </td>
        </tr>

        <tr>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;font-weight:600;color:#4F46E5;">
            Team Size
          </td>
          <td style="padding:16px;border-bottom:1px solid #E5E7EB;color:#374151;">
            ${teamSize}
          </td>
        </tr>

        <tr>
          <td style="padding:16px;font-weight:600;color:#4F46E5;">
            Preferred Demo Date
          </td>
          <td style="padding:16px;color:#374151;">
            ${preferredDate}
          </td>
        </tr>

      </table>

      <!-- Contact -->
      <div style="margin-top:30px;padding:20px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;">

        <p style="margin:0;color:#374151;line-height:1.7;">
          Have additional questions or need to update your request?
          Simply reply to this email and our team will be happy to assist you.
        </p>

      </div>

      <!-- Closing -->
      <p style="margin-top:35px;color:#4B5563;line-height:1.8;font-size:15px;">
        Thank you again for choosing
        <strong>${brandConfig.company.name}</strong>.
        We look forward to meeting with you and helping your team get the most from
        <strong>${brandConfig.product.name}</strong>.
      </p>

      <p style="margin-top:30px;color:#111827;line-height:1.8;">
        Best regards,<br>
        <strong>${brandConfig.company.name} Team</strong>
      </p>

    </div>

    <!-- Footer -->
    <div style="background:#F9FAFB;padding:25px;text-align:center;border-top:1px solid #E5E7EB;">

      <p style="margin:0;font-size:14px;font-weight:600;color:#111827;">
        ${brandConfig.company.name}
      </p>

      <p style="margin:8px 0 0;font-size:12px;color:#6B7280;">
        Thank you for requesting a demo of ${brandConfig.product.name}.
      </p>

      <p style="margin:6px 0 0;font-size:12px;color:#9CA3AF;">
        © ${new Date().getFullYear()} ${brandConfig.company.name}. All rights reserved.
      </p>

    </div>

  </div>

</div>
`
        });

        return NextResponse.json({
            success: true,
            message: "Demo request sent successfully",
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { success: false, error: "Failed to send demo request" },
            { status: 500 }
        );
    }
}