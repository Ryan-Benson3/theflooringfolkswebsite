import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, flooringType, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Build email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1c1917; padding: 24px; border-radius: 12px 12px 0 0;">
          <h2 style="color: #ea580c; margin: 0;">🔨 New Estimate Request</h2>
          <p style="color: #a8a29e; margin: 4px 0 0;">The Flooring Folks Website</p>
        </div>
        <div style="background: #fafaf9; padding: 24px; border: 1px solid #e7e5e4; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #57534e; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 8px 0; color: #1c1917;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #57534e; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; color: #1c1917;"><a href="tel:${phone}" style="color: #ea580c;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #57534e; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #1c1917;">${email ? `<a href="mailto:${email}" style="color: #ea580c;">${email}</a>` : "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #57534e; font-weight: bold;">Flooring Type:</td>
              <td style="padding: 8px 0; color: #1c1917;">${flooringType || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #57534e; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; color: #1c1917;">${message || "No message"}</td>
            </tr>
          </table>
        </div>
        <div style="background: #1c1917; padding: 16px; border-radius: 0 0 12px 12px; text-align: center;">
          <p style="color: #a8a29e; margin: 0; font-size: 12px;">Sent from theflooringfolks.com</p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"The Flooring Folks Website" <${process.env.GMAIL_USER}>`,
      to: "theflooringfolks@gmail.com",
      replyTo: email || undefined,
      subject: `🔨 New Estimate Request from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
