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
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg,#4F46E5,#4338CA); color: white; padding: 24px; text-align:center;">
          ${logoImg}
          <h1 style="margin: 0; font-size: 22px;">New Demo Request 🚀</h1>
          <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">
            A new potential customer has requested a product demo.
          </p>
        </div>

        <div style="padding: 24px;">

            <h2 style="margin-top: 0; color: #111827;">Lead Details</h2>

            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
                <tr><td><strong>Name:</strong></td><td>${fullName}</td></tr>
                <tr><td><strong>Email:</strong></td><td>${workEmail}</td></tr>
                <tr><td><strong>Company:</strong></td><td>${company}</td></tr>
                <tr><td><strong>Team Size:</strong></td><td>${teamSize}</td></tr>
                <tr><td><strong>Phone:</strong></td><td>${phone || "Not provided"}</td></tr>
                <tr><td><strong>Preferred Date:</strong></td><td>${preferredDate}</td></tr>
            </table>

            <div style="margin-top: 24px;">
                <h3 style="margin-bottom: 8px;">Customer Message</h3>
                <div style="background: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
                    ${safeMessage || "No message provided"}
                </div>
            </div>

            <div style="margin-top: 24px; padding: 16px; background: #eff2ff; border-left: 4px solid #4f46e5; border-radius: 6px;">
                <p style="margin: 0; font-size: 13px;">
                    💡 <strong>Action Tip:</strong> Reach out within 24 hours to maximize conversion chances.
                </p>
            </div>

        </div>

        <div style="background: #f3f4f6; padding: 14px; text-align: center; font-size: 12px; color: #6b7280;">
            ${brandConfig.company.name} • Lead Notification System
        </div>

    </div>
    `,
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: workEmail,
            subject: `🎉 Your Demo Request is Confirmed - ${brandConfig.product.name}`,
            attachments,
            html: `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">

        <!-- Header -->
        <div style="background: linear-gradient(135deg,#4F46E5,#4338CA); color: white; text-align: center; padding: 32px;">
            ${logoImg}
            <h1 style="margin: 0;">We’ve Received Your Request 🎉</h1>
            <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.9;">
                Thanks for showing interest in ${brandConfig.product.name}
            </p>
        </div>

        <!-- Body -->
        <div style="padding: 28px;">

            <p style="font-size: 15px;">Hi <strong>${fullName}</strong>,</p>

            <p style="font-size: 15px; line-height: 1.6;">
                Thank you for requesting a personalized demo of <strong>${brandConfig.product.name}</strong>.
                We’re excited to show you how it can help your team improve productivity, streamline workflows, and achieve better results.
            </p>

            <!-- Expectation Box -->
            <div style="margin: 20px 0; padding: 16px; background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px;">
                <p style="margin: 0; font-size: 14px;">
                    ⏱ <strong>What happens next?</strong><br/>
                    Our team will review your request and reach out within <strong>24 hours</strong> to schedule your demo at a convenient time.
                </p>
            </div>

            <!-- Summary -->
            <h3 style="margin-bottom: 10px;">Your Request Summary</h3>
            <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
                <p style="margin: 6px 0;"><strong>Company:</strong> ${company}</p>
                <p style="margin: 6px 0;"><strong>Team Size:</strong> ${teamSize}</p>
                <p style="margin: 6px 0;"><strong>Preferred Date:</strong> ${preferredDate}</p>
            </div>

            <!-- CTA Section -->
            <div style="margin-top: 24px; text-align: center;">
                <p style="font-size: 14px; margin-bottom: 12px;">
                    Need faster assistance or have questions?
                </p>
                <a href="mailto:${process.env.EMAIL_USER}" 
                   style="display: inline-block; padding: 12px 20px; background: #4f46e5; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">
                    Contact our Team
                </a>
            </div>

            <p style="margin-top: 28px; font-size: 14px; line-height: 1.6;">
                We look forward to speaking with you soon and helping your team get started with ${brandConfig.product.name}.
            </p>

            <p style="font-size: 14px;">
                Best regards,<br/>
                <strong>${brandConfig.company.name} Team</strong>
            </p>

        </div>

        <!-- Footer -->
        <div style="background: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #6b7280;">
            © ${new Date().getFullYear()} ${brandConfig.company.name}. All rights reserved.
        </div>

    </div>
    `,
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