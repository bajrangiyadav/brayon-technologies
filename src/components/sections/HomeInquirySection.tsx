"use client";

import React, { useState } from "react";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Mail,
  Clock,
  ShieldCheck,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import FadeUp from "../animations/FadeUp";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  details: string;
}

const SERVICE_OPTIONS = [
  "Custom Software Development",
  "Web Application Development",
  "CRM & ERP Solutions",
  "E-commerce Development",
  "Mobile Application Development",
  "AI & Business Automation",
  "API Development & Integration",
  "UI/UX Design",
  "Other / Multi-Service Scope",
];

const BUDGET_OPTIONS = [
  "₹35,000 – ₹75,000 (Early MVP / Focused Tool)",
  "₹75,000 – ₹1,50,000 (Custom Web App / Portal)",
  "₹1,50,000 – ₹3,00,000 (Full CRM / ERP Platform)",
  "₹3,00,000+ (Multi-Tenant / Enterprise System)",
  "International Budget ($1,500 – $5,000 USD)",
  "International Budget ($5,000 – $15,000+ USD)",
  "To Be Decided After Architecture Consultation",
];

export function HomeInquirySection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Custom Software Development",
    budget: "₹75,000 – ₹1,50,000 (Custom Web App / Portal)",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [leadId, setLeadId] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid business email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your phone or WhatsApp number.");
      return;
    }
    if (!formData.details.trim() || formData.details.trim().length < 10) {
      setErrorMessage("Please share a brief description of your project (at least 10 characters).");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setLeadId(data.leadId || `LEAD-${Date.now()}`);
        setWhatsappUrl(data.whatsappUrl || "");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong while submitting. Please try again or chat with us on WhatsApp.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error occurred. Please contact us directly via WhatsApp or email.");
    }
  };

  return (
    <Section id="inquiry" spacing="xl" borderBottom className="bg-[#04060d] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <FadeUp delay={0.05}>
            <Eyebrow>START A CONVERSATION</Eyebrow>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Have an Idea? Let&apos;s Build Something Great.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Tell us about your business goals and challenges. Let&apos;s explore how the right technology can move your business forward.
            </p>
          </FadeUp>
        </div>

        {/* Conversion Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info & Reassurance Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090f1f] border border-white/[0.08] space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Engineering Access
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                No salespeople. No confusing jargon. You consult directly with senior solutions architect Bajrangi Yadav to map out your software architecture, timeline, and exact milestone costs.
              </p>

              {/* Quick Contacts */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20a%20software%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-emerald-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-emerald-400 font-semibold">
                      WhatsApp Instant Chat
                    </div>
                    <div className="text-sm font-bold font-mono text-white">
                      +91 73851 21432
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:hello@brayontech.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold">
                      Official Project Inquiries
                    </div>
                    <div className="text-sm font-bold font-mono text-white">
                      hello@brayontech.com
                    </div>
                  </div>
                </a>
              </div>

              {/* Guarantees */}
              <div className="space-y-3 pt-4 border-t border-white/[0.06] text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>24-Hour Scope &amp; Architecture Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Strict NDA &amp; Intellectual Property Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>100% Private Git &amp; Cloud Keys Transfer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Professional Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#090e1d] border border-blue-500/25 shadow-2xl shadow-blue-950/30 text-left">
              {status === "success" ? (
                <div className="text-center py-8 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-semibold">
                      Inquiry Received · {leadId}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been logged directly with our senior engineering team. We will review your requirements and reach out within 24 hours.
                    </p>
                  </div>

                  {whatsappUrl && (
                    <div className="pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm font-mono transition-all shadow-lg shadow-emerald-950/40"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-black shrink-0" />
                        <span>Accelerate: Open Details on WhatsApp ↗</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/[0.08]">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          phone: "",
                          service: "Custom Software Development",
                          budget: "₹75,000 – ₹1,50,000 (Custom Web App / Portal)",
                          details: "",
                        });
                      }}
                      className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      &larr; Submit Another Project Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Project Inquiry Form</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      * Required fields
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2 font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="home-name"
                        className="block text-xs font-mono text-slate-300 font-medium"
                      >
                        Full Name *
                      </label>
                      <input
                        id="home-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rahul Sharma / David Miller"
                        className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="home-email"
                        className="block text-xs font-mono text-slate-300 font-medium"
                      >
                        Business Email *
                      </label>
                      <input
                        id="home-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="home-company"
                        className="block text-xs font-mono text-slate-300 font-medium"
                      >
                        Company / Organization
                      </label>
                      <input
                        id="home-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corp / JBCE"
                        className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="home-phone"
                        className="block text-xs font-mono text-slate-300 font-medium"
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="home-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Required & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="home-service"
                        className="block text-xs font-mono text-slate-300 font-medium"
                      >
                        Service Required *
                      </label>
                      <select
                        id="home-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        {SERVICE_OPTIONS.map((srv) => (
                          <option key={srv} value={srv} className="bg-[#0c1224] text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="home-budget"
                        className="block text-xs font-mono text-slate-300 font-medium"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="home-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b} className="bg-[#0c1224] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Description */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="home-details"
                      className="block text-xs font-mono text-slate-300 font-medium"
                    >
                      Project Description &amp; Business Goals *
                    </label>
                    <textarea
                      id="home-details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      required
                      placeholder="Briefly describe what you are building, your operational goals, or current bottlenecks you want software to solve..."
                      className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm font-mono tracking-wide transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Project Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-center text-slate-500">
                    By submitting, your data is handled under strict NDA confidentiality. Zero spam guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HomeInquirySection;