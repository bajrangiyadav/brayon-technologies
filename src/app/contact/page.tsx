"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web & SaaS Development",
    budget: "₹75k - ₹1.5 Lakh ($1,000 - $2,000)",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit your project inquiry.");
      }

      setWhatsappUrl(result.whatsappUrl || "");
      setFormSubmitted(true);
    } catch (err: any) {
      setSubmitError(
        err?.message || "Could not dispatch automatically. Please contact us via WhatsApp directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero */}
        <section className="relative py-20 border-b border-slate-800/80 bg-gradient-to-b from-[#0A1128] to-[#070B19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-mono mb-6">
              <span>DIRECT FOUNDER CONSULTATION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
              Start Your Project With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                BRAYON Technologies
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Skip the sales representatives. Share your project requirements directly with Founder & Solutions Architect Bajrangi Yadav.
            </p>
          </div>
        </section>

        {/* Contact Form & Contact Details Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Information & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Direct Engineering Access
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Every inquiry is reviewed directly by senior engineering leadership. We will respond with an initial technical perspective and availability within 3 business hours.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Direct Email</div>
                      <a
                        href="mailto:bajrangiyadav330@gmail.com"
                        className="text-sm font-semibold text-white hover:text-blue-400 break-all transition-colors"
                      >
                        bajrangiyadav330@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Founder Direct Phone & WhatsApp</div>
                      <a
                        href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        +91 73851 21432
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Engineering Hub</div>
                      <div className="text-sm font-semibold text-white">
                        Mumbai & Pune Tech Corridor, Maharashtra, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Badge List */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-3.5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Our Engagement Standard:
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strict NDA and confidentiality protection on all shared project details.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Transparent milestone payments (50/50 or staged sprint milestones).</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Free 15-Minute Technical Architecture Inspection included.</span>
                </div>
              </div>
            </div>

            {/* Right: Lead Generation Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 shadow-2xl relative">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Project Inquiry Dispatched!</h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. Founder Bajrangi Yadav has been notified via email and SMS and will review your specifications shortly.
                      </p>
                    </div>

                    {whatsappUrl && (
                      <div className="pt-4">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 transition-all"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Chat on WhatsApp Directly</span>
                        </a>
                      </div>
                    )}

                    <div className="pt-6">
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            service: "Web & SaaS Development",
                            budget: "₹75k - ₹1.5 Lakh ($1,000 - $2,000)",
                            details: "",
                          });
                        }}
                        className="text-xs text-slate-400 hover:text-white underline font-mono"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        Request Project Scope & Architecture Consultation
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        Fill out the details below to receive a response within 3 business hours.
                      </p>
                    </div>

                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                        {submitError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Rajesh Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g., rajesh@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g., Apex Logistics"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        >
                          <option value="Web & SaaS Development">Web & SaaS Development</option>
                          <option value="Enterprise Backend & REST APIs">Enterprise Backend & REST APIs</option>
                          <option value="Custom Headless E-Commerce">Custom Headless E-Commerce</option>
                          <option value="Startup MVP in 30 Days">Startup MVP in 30 Days</option>
                          <option value="Internal ERP & Business Automation">Internal ERP & Business Automation</option>
                          <option value="Performance & Core Web Vitals Revamp">Performance & Core Web Vitals Revamp</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                        Estimated Budget Bracket
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                      >
                        <option value="₹35,000 - ₹75,000 (Starter Web)">₹35,000 - ₹75,000 (Starter Web)</option>
                        <option value="₹75k - ₹1.5 Lakh ($1,000 - $2,000)">₹75k - ₹1.5 Lakh ($1,000 - $2,000)</option>
                        <option value="₹1.5 Lakh - ₹3.5 Lakh (Startup MVP)">₹1.5 Lakh - ₹3.5 Lakh (Startup MVP)</option>
                        <option value="₹2.5 Lakh+ (Custom Enterprise / ERP)">₹2.5 Lakh+ (Custom Enterprise / ERP)</option>
                        <option value="Undecided / Need Architecture Consultation">Undecided / Need Architecture Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                        Project Overview & Key Requirements *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Describe what you want to build, any existing website/platform URL, pain points you want to solve, and your target timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Dispatching Inquiry to Founder...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry for Immediate Review</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
