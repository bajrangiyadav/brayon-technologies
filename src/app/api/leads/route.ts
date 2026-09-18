import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { z } from "zod";
import nodemailer from "nodemailer";

const LeadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(120),
  company: z.string().max(120).optional(),
  phone: z.string().max(30).optional(),
  country: z.string().max(60).optional(),
  projectType: z.string().min(1, "Project type is required").max(60),
  budget: z.string().max(60).optional(),
  timeline: z.string().max(60).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
  source: z.string().max(100).optional(),
  landingPage: z.string().max(200).optional(),
  referrer: z.string().max(300).optional(),
  utmSource: z.string().max(100).optional(),
  utmMedium: z.string().max(100).optional(),
  utmCampaign: z.string().max(100).optional(),
  utmTerm: z.string().max(100).optional(),
  utmContent: z.string().max(100).optional(),
  createdAt: z.string().optional(),
  captchaToken: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json();
    const validationResult = LeadSchema.safeParse(rawBody);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        if (issue.path.length > 0) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      }

      return NextResponse.json(
        {
          error: "Validation failed. Please verify your inputs.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const leadId = `LEAD-${Date.now()}`;
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const leadRecord = {
      id: leadId,
      ...data,
      ip,
      userAgent,
      receivedAt: new Date().toISOString(),
    };

    // 1. Persistent Storage in data/leads.json (Zero Lead Loss Guarantee)
    const dataDir = path.join(process.cwd(), "data");
    const leadsFilePath = path.join(dataDir, "leads.json");

    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let existingLeads = [];
      if (fs.existsSync(leadsFilePath)) {
        const fileContent = fs.readFileSync(leadsFilePath, "utf8");
        try {
          existingLeads = JSON.parse(fileContent);
          if (!Array.isArray(existingLeads)) existingLeads = [];
        } catch {
          existingLeads = [];
        }
      }

      existingLeads.unshift(leadRecord);
      fs.writeFileSync(leadsFilePath, JSON.stringify(existingLeads, null, 2), "utf8");
    } catch (fsErr) {
      console.error("[LEAD STORAGE ERROR]", fsErr);
    }

    // 2. Automated Notification Dispatch (if credentials available)
    let emailSent = false;
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: `"BRAYON CRM" <${process.env.GMAIL_USER}>`,
          to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER,
          subject: `[NEW INQUIRY] ${data.projectType} — ${data.name}${data.company ? ` (${data.company})` : ""}`,
          text: `
Lead ID: ${leadId}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not specified"}
Company: ${data.company || "Not specified"}
Project Type: ${data.projectType}
Budget: ${data.budget || "Not specified"}
Timeline: ${data.timeline || "Not specified"}
Landing Page: ${data.landingPage || "/"}
Referrer: ${data.referrer || "direct"}
UTM: ${data.utmSource || "none"} / ${data.utmCampaign || "none"}

Message:
${data.message}
          `,
        });
        emailSent = true;
      } catch (mailErr) {
        console.error("[LEAD EMAIL DISPATCH FAILED]", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      leadId,
      message: "Your project enquiry has been received successfully.",
      emailSent,
    });
  } catch (err: unknown) {
    console.error("[CRM API ERROR]", err);
    const errorMessage = err instanceof Error ? err.message : "Failed to process lead";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
