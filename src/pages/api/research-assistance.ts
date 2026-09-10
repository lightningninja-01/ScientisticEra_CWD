import type { NextApiRequest, NextApiResponse } from "next";
import { checkRateLimit } from "@/lib/rateLimiter";

interface ResearchAssistanceRequestBody {
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  researchProblem?: string;
  hp_website_url?: string; // Invisible honeypot field
}

type ApiResponse = {
  success: boolean;
  message: string;
};

// Simple email regex for validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone number validation: matches numbers with optional country code, spaces, hyphens (Indian / International)
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  // 1. Identify client IP for rate limiting
  const forwardedFor = req.headers["x-forwarded-for"];
  const clientIp = typeof forwardedFor === "string"
    ? forwardedFor.split(",")[0].trim()
    : req.socket.remoteAddress || "127.0.0.1";

  // 2. Rate limit check (3 requests per 15 mins per IP)
  const rateLimitResult = await checkRateLimit(clientIp);
  if (!rateLimitResult.success) {
    res.setHeader("Retry-After", String(rateLimitResult.retryAfterSeconds || 900));
    return res.status(429).json({
      success: false,
      message: "Too many requests. Please try again after a few minutes.",
    });
  }

  // 3. Parse & sanitize inputs
  const {
    fullName,
    mobileNumber,
    email,
    researchProblem,
    hp_website_url,
  }: ResearchAssistanceRequestBody = req.body || {};

  // 4. Honeypot check (anti-spam)
  if (hp_website_url && hp_website_url.trim() !== "") {
    // Silently ignore bots without sending email
    return res.status(200).json({
      success: true,
      message: "Thank you! Your request has been received. Our team will get back to you soon.",
    });
  }

  const cleanName = typeof fullName === "string" ? fullName.trim() : "";
  const cleanMobile = typeof mobileNumber === "string" ? mobileNumber.trim() : "";
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  const cleanProblem = typeof researchProblem === "string" ? researchProblem.trim() : "";

  // 5. Backend Validation
  if (!cleanName || cleanName.length > 100) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid full name (up to 100 characters).",
    });
  }

  if (!cleanMobile || !PHONE_REGEX.test(cleanMobile.replace(/\s+/g, ""))) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid mobile number.",
    });
  }

  if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  if (!cleanProblem || cleanProblem.length < 5 || cleanProblem.length > 3000) {
    return res.status(400).json({
      success: false,
      message: "Please provide a brief description of your research problem (at least 5 characters).",
    });
  }

  // 6. Environment configuration check
  const isProduction = process.env.NODE_ENV === "production";
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.RESEARCH_ASSISTANCE_EMAIL;
  const senderEmail = process.env.SENDER_EMAIL;

  // In production, strictly fail if configuration is missing
  if (isProduction && (!resendApiKey || !recipientEmail || !senderEmail)) {
    console.error("[Research Assistance API] Missing required email environment variables in production.");
    return res.status(500).json({
      success: false,
      message: "Service is temporarily misconfigured. Please contact support.",
    });
  }

  // Format email content exactly as requested
  const emailSubject = `New Research Assistance Request - ${cleanName}`;
  const plainTextContent = `New Research Assistance Request

Full Name: ${cleanName}
Mobile Number: ${cleanMobile}
Email Address: ${cleanEmail}

Research Problem:
${cleanProblem}

Source:
Scientistic Era Website`;

  // 7. Development fallback (simulation & logging)
  if (!resendApiKey || !recipientEmail || !senderEmail) {
    console.log("--------------------------------------------------");
    console.log("📨 [DEV MODE] Research Assistance Email Simulated:");
    console.log(`To: ${recipientEmail || "[RESEARCH_ASSISTANCE_EMAIL not set]"}`);
    console.log(`From: ${senderEmail || "[SENDER_EMAIL not set]"}`);
    console.log(`Reply-To: ${cleanEmail}`);
    console.log(`Subject: ${emailSubject}`);
    console.log("\n" + plainTextContent);
    console.log("--------------------------------------------------");

    return res.status(200).json({
      success: true,
      message: "Thank you! Your request has been received. Our team will get back to you soon.",
    });
  }

  // 8. Dispatch Email via Resend REST API
  try {
    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #2563eb, #9333ea); padding: 24px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">Scientistic Era</h2>
          <p style="margin: 6px 0 0 0; font-size: 15px; opacity: 0.95;">New Research Assistance Request</p>
        </div>
        <div style="padding: 28px 24px;">
          <h3 style="margin: 0 0 20px 0; font-size: 18px; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">
            New Research Assistance Request
          </h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 140px; color: #475569; font-size: 14px;">Full Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 500;">${escapeHtml(cleanName)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569; font-size: 14px;">Mobile Number:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 500;">${escapeHtml(cleanMobile)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569; font-size: 14px;">Email Address:</td>
              <td style="padding: 8px 0; font-size: 14px;">
                <a href="mailto:${escapeHtml(cleanEmail)}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${escapeHtml(cleanEmail)}</a>
              </td>
            </tr>
          </table>

          <div style="margin-bottom: 24px;">
            <div style="font-weight: 600; color: #475569; font-size: 14px; margin-bottom: 8px;">Research Problem:</div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px 16px; color: #0f172a; font-size: 14px; white-space: pre-wrap; word-break: break-word;">${escapeHtml(cleanProblem)}</div>
          </div>

          <div style="padding-top: 16px; border-top: 1px solid #f1f5f9;">
            <span style="font-weight: 600; color: #475569; font-size: 14px;">Source: </span>
            <span style="color: #0f172a; font-size: 14px; font-weight: 500;">Scientistic Era Website</span>
          </div>
        </div>
        <div style="background: #f8fafc; padding: 14px 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
          This enquiry was submitted from the Scientistic Era website.
        </div>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: senderEmail,
        to: [recipientEmail],
        reply_to: cleanEmail,
        subject: emailSubject,
        text: plainTextContent,
        html: htmlContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error("[Research Assistance API] Resend API error:", errorData);
      return res.status(502).json({
        success: false,
        message: "Failed to deliver email through provider. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Thank you! Your request has been received. Our team will get back to you soon.",
    });
  } catch (error) {
    console.error("[Research Assistance API] Unexpected error:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred while sending your request. Please try again.",
    });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
