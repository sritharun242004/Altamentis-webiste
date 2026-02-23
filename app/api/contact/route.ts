import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "";
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const phoneSection = safePhone
    ? `
    <tr>
      <td style="padding: 20px 30px; border-bottom: 1px solid #e5e5e5;">
        <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #999;">Phone</p>
        <p style="margin: 0; font-size: 16px; color: #111;">${safePhone}</p>
      </td>
    </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background-color: #111; border-radius: 12px 12px 0 0; padding: 30px; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="vertical-align: middle; padding-right: 14px;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid #fff; text-align: center; line-height: 40px; font-size: 20px; font-weight: 700; color: #fff;">A</div>
                  </td>
                  <td style="vertical-align: middle;">
                    <span style="font-size: 20px; font-weight: 700; color: #fff; letter-spacing: 3px;">ALTAMENTIS</span>
                  </td>
                </tr>
              </table>
              <p style="margin: 12px 0 0 0; font-size: 13px; color: #999; letter-spacing: 0.5px;">New Contact Form Submission</p>
            </td>
          </tr>

          <!-- Accent Line -->
          <tr>
            <td style="height: 3px; background-color: #44cce4; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #fff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 20px 30px; border-bottom: 1px solid #e5e5e5;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #999;">From</p>
                    <p style="margin: 0; font-size: 16px; color: #111; font-weight: 600;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 30px; border-bottom: 1px solid #e5e5e5;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #999;">Email</p>
                    <p style="margin: 0; font-size: 16px;"><a href="mailto:${safeEmail}" style="color: #111; text-decoration: none;">${safeEmail}</a></p>
                  </td>
                </tr>${phoneSection}
                <tr>
                  <td style="padding: 20px 30px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #999;">Message</p>
                    <p style="margin: 0; font-size: 15px; color: #333; line-height: 1.7;">${safeMessage}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="background-color: #fff; padding: 10px 30px 30px 30px; text-align: center;">
              <a href="mailto:${safeEmail}" style="display: inline-block; background-color: #111; color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;">Reply to ${safeName}</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #111; border-radius: 0 0 12px 12px; padding: 24px 30px; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 13px; font-weight: 600; color: #fff;">AltaMentis Technologies</p>
              <p style="margin: 0 0 10px 0; font-size: 12px; color: #777;">Chennai, India</p>
              <a href="https://altamentis.in" style="font-size: 12px; color: #44cce4; text-decoration: none;">altamentis.in</a>
              <p style="margin: 12px 0 0 0; font-size: 11px; color: #555;">&copy; ${new Date().getFullYear()} AltaMentis Technologies. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const html = buildEmailHtml({ name, email, phone, message });

    const { error } = await resend.emails.send({
      from: "AltaMentis Contact Form <info@send.altamentis.in>",
      to: "chandrus@altamentis.in",
      cc: "info@altamentis.in",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
