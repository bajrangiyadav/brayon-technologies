import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, details } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { error: "A valid email address is required" },
        { status: 400 }
      );
    }

    // 2. Build Lead Object
    const leadId = `LEAD-${Date.now()}`;
    const newLead = {
      id: leadId,
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: (company || "").trim() || "Not specified",
      service: service || "Web & SaaS Development",
      budget: budget || "Not specified",
      details: (details || "").trim() || "No additional details provided",
      ip: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    // 3. Persistent Local Storage in data/leads.json (Zero Lead Loss Guarantee)
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

      existingLeads.unshift(newLead);
      fs.writeFileSync(leadsFilePath, JSON.stringify(existingLeads, null, 2), "utf8");
      console.log(`[BRAYON LEAD SAVED] ID: ${leadId} | Client: ${newLead.name} (${newLead.email})`);
    } catch (fsErr) {
      console.error("[BRAYON LEAD DB ERROR] Failed to save lead locally:", fsErr);
    }

    // 4. Generate Pre-Filled WhatsApp URL for +91 73851 21432
    const whatsappMessage = `Hi Bajrangi, I just submitted an inquiry on BRAYON Technologies!

*Name:* ${newLead.name}
*Email:* ${newLead.email}
*Company / URL:* ${newLead.company}
*Service:* ${newLead.service}
*Budget:* ${newLead.budget}
*Requirements:* ${newLead.details}

Looking forward to connecting with you.`;

    const whatsappUrl = `https://wa.me/917385121432?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // 5. Send Direct Email Notification to bajrangiyadav330@gmail.com
    let emailSent = false;
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

    if (gmailUser && gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #070B19; color: #E2E8F0; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #0A1128; border: 1px solid #1E293B; border-radius: 16px; padding: 32px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); }
    .badge { display: inline-block; background: #0066FF20; color: #38BDF8; border: 1px solid #0066FF40; border-radius: 9999px; padding: 4px 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
    h1 { color: #FFFFFF; font-size: 24px; margin: 16px 0 8px 0; }
    .row { display: flex; border-bottom: 1px solid #1E293B; padding: 12px 0; }
    .label { width: 140px; color: #94A3B8; font-size: 13px; font-weight: 600; text-transform: uppercase; }
    .val { color: #F8FAFC; font-size: 14px; flex: 1; }
    .highlight { color: #38BDF8; font-weight: 600; }
    .cta-btn { display: inline-block; background: #0066FF; color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: 600; font-size: 14px; margin-top: 24px; }
    .wa-btn { display: inline-block; background: #10B981; color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: 600; font-size: 14px; margin-top: 24px; margin-left: 10px; }
    .footer { font-size: 12px; color: #64748B; margin-top: 32px; text-align: center; border-top: 1px solid #1E293B; padding-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">New Client Lead Captured</div>
    <h1>BRAYON Technologies Lead</h1>
    <p style="color: #94A3B8; font-size: 14px; margin-bottom: 24px;">A prospect just submitted a project inquiry on <a href="https://brayontech.com" style="color: #38BDF8;">brayontech.com</a>.</p>

    <div style="background: #060A19; border-radius: 12px; padding: 16px 20px; border: 1px solid #1E293B;">
      <div class="row">
        <div class="label">Client Name:</div>
        <div class="val highlight">${newLead.name}</div>
      </div>
      <div class="row">
        <div class="label">Email:</div>
        <div class="val"><a href="mailto:${newLead.email}" style="color: #38BDF8;">${newLead.email}</a></div>
      </div>
      <div class="row">
        <div class="label">Company / URL:</div>
        <div class="val">${newLead.company}</div>
      </div>
      <div class="row">
        <div class="label">Service Needed:</div>
        <div class="val highlight">${newLead.service}</div>
      </div>
      <div class="row">
        <div class="label">Budget:</div>
        <div class="val" style="color: #34D399; font-weight: 700;">${newLead.budget}</div>
      </div>
      <div class="row" style="border-bottom: none;">
        <div class="label">Project Details:</div>
        <div class="val" style="white-space: pre-wrap; line-height: 1.5;">${newLead.details}</div>
      </div>
    </div>

    <div style="margin-top: 24px;">
      <a href="mailto:${newLead.email}?subject=Re:%20BRAYON%20Technologies%20Discovery%20Call%20-%20${encodeURIComponent(newLead.name)}" class="cta-btn">
        Reply to Client (${newLead.email})
      </a>
      <a href="${whatsappUrl}" class="wa-btn">
        Open in WhatsApp
      </a>
    </div>

    <div class="footer">
      Lead ID: ${leadId} • Captured at ${newLead.timestamp} • BRAYON Technologies
    </div>
  </div>
</body>
</html>`;

        await transporter.sendMail({
          from: `"BRAYON Leads" <${gmailUser}>`,
          to: "bajrangiyadav330@gmail.com",
          replyTo: newLead.email,
          subject: `New Lead: ${newLead.name} - ${newLead.service} [${newLead.budget}]`,
          html: htmlEmail,
        });

        emailSent = true;
        console.log(`[BRAYON EMAIL DISPATCHED] Successfully delivered to bajrangiyadav330@gmail.com`);
      } catch (emailErr) {
        console.error("[BRAYON EMAIL DISPATCH FAILED]", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      leadId,
      message: "Lead recorded successfully",
      emailSent,
      whatsappUrl,
      lead: newLead,
    });
  } catch (err: unknown) {
    console.error("[BRAYON API ERROR]", err);
    const errorMessage = err instanceof Error ? err.message : "Failed to process inquiry";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
