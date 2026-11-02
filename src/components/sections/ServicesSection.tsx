import React from "react";
import Link from "next/link";
import {
  Code2,
  Globe,
  Database,
  ShoppingCart,
  Smartphone,
  Bot,
  Cpu,
  Palette,
  ArrowRight,
  CheckCircle2,
  Server,
  Zap,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import FadeUp from "../animations/FadeUp";

export function ServicesSection() {
  return (
    <Section id="services" spacing="xl" borderBottom className="bg-[#050813] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <FadeUp delay={0.05}>
            <Eyebrow>COMPREHENSIVE ENGINEERING PRACTICE</Eyebrow>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Solutions Designed Around Your Business.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              We do not force your operations into generic cookie-cutter templates. We engineer purpose-built software architectures tailored to how your business actually runs.
            </p>
          </FadeUp>
        </div>

        {/* INDIVIDUALLY DESIGNED SERVICE LAYOUTS */}
        <div className="space-y-6 sm:space-y-8">
          {/* SERVICE 1 — CUSTOM SOFTWARE DEVELOPMENT (Flagship Full-Width Heroic Layout) */}
          <FadeUp delay={0.2}>
            <div className="rounded-3xl bg-gradient-to-br from-[#0c1326] via-[#090e1c] to-[#070b16] border border-blue-500/25 p-5 sm:p-8 lg:p-12 text-left relative overflow-hidden shadow-2xl shadow-blue-950/20">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>01 · FLAGSHIP ENGINEERING</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    Custom Software Development
                  </h3>

                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-xl">
                    Tailored operational platforms, customer portals, and internal business engines designed to replace fragmented spreadsheets, eliminate bottlenecks, and scale with your exact business logic.
                  </p>

                  {/* Key Capabilities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                    {[
                      "Bespoke Business Process Portals",
                      "Multi-Role Permission Systems (RBAC)",
                      "Sub-Second Data Verification Engines",
                      "100% Intellectual Property & Code Ownership",
                    ].map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <Link
                      href="/services/custom-software-development"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all group w-full sm:w-auto"
                    >
                      <span>Explore Custom Software</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                      Next.js · TypeScript · PostgreSQL
                    </span>
                  </div>
                </div>

                {/* Right: Technical Visual Architecture Spec */}
                <div className="lg:col-span-5">
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#060913] border border-white/[0.1] space-y-2.5 sm:space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-slate-400">
                      <span className="text-[11px] uppercase tracking-wider text-blue-400 font-semibold">
                        Architecture Blueprint
                      </span>
                      <span className="text-emerald-400 text-[10px]">Production Grade</span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-2">
                        <span className="text-slate-300 shrink-0">Client Tier:</span>
                        <span className="text-blue-300 truncate text-right">Next.js 16 SSR / Edge</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-2">
                        <span className="text-slate-300 shrink-0">Service Layer:</span>
                        <span className="text-cyan-300 truncate text-right">TypeScript Microservices</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-2">
                        <span className="text-slate-300 shrink-0">Persistence:</span>
                        <span className="text-emerald-300 truncate text-right">ACID PostgreSQL / MySQL</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-2">
                        <span className="text-slate-300 shrink-0">IP Transfer:</span>
                        <span className="text-emerald-400 font-bold truncate text-right">100% Private Repo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* DUAL ASYMMETRIC GRID: SERVICE 2 & SERVICE 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* SERVICE 2 — WEB APPLICATION DEVELOPMENT */}
            <FadeUp delay={0.25}>
              <div className="h-full rounded-2xl bg-[#0c1224] border border-white/[0.08] hover:border-blue-500/40 p-5 sm:p-8 transition-all flex flex-col justify-between text-left group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 group-hover:text-blue-400 transition-colors">
                      02 · WEB PLATFORMS
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Web Application Development
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Ultra-fast, high-converting web applications and cloud portals engineered for zero layout shift, seamless responsiveness, and 95+ Core Web Vitals on mobile and desktop.
                  </p>

                  {/* Custom Visual: Mini telemetry block */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#060913] border border-white/[0.06] space-y-2 font-mono text-xs">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Mobile Performance</span>
                      <span className="text-emerald-400 font-bold">98 / 100 PageSpeed</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full w-[98%]" />
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Next.js App Router &amp; Server Components</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Responsive Touch-Optimized Layouts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Built-in Technical SEO &amp; Rich Schema</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href="/services/web-application-development"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore Web Apps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-slate-500">React · Next.js</span>
                </div>
              </div>
            </FadeUp>

            {/* SERVICE 3 — CRM & ERP SOLUTIONS */}
            <FadeUp delay={0.3}>
              <div className="h-full rounded-2xl bg-[#0c1224] border border-white/[0.08] hover:border-blue-500/40 p-5 sm:p-8 transition-all flex flex-col justify-between text-left group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 group-hover:text-cyan-400 transition-colors">
                      03 · ENTERPRISE OPERATIONS
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    CRM &amp; ERP Solutions
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Custom business operating systems unifying inventory control, GST invoicing, automated sales lead pipelines, multi-branch tracking, and role-based staff access into one dashboard.
                  </p>

                  {/* Custom Visual: Multi-Branch Sync Indicator */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#060913] border border-white/[0.06] flex items-center justify-between font-mono text-xs">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">Multi-Branch Sync</div>
                      <div className="text-slate-200 font-semibold">6 Regional Branches</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-[10px] text-emerald-300 border border-emerald-500/30">
                      Real-Time Active
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Custom Sales Funnel &amp; WhatsApp Lead Capture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>GST Invoicing &amp; Automated PDF Billing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Inventory Reorder Triggers &amp; Audit Logs</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href="/services/crm-development"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore CRM &amp; ERP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-slate-500">PostgreSQL · Node.js</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* DUAL ASYMMETRIC GRID: SERVICE 4 & SERVICE 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* SERVICE 4 — E-COMMERCE DEVELOPMENT */}
            <FadeUp delay={0.35}>
              <div className="h-full rounded-2xl bg-[#0c1224] border border-white/[0.08] hover:border-emerald-500/40 p-5 sm:p-8 transition-all flex flex-col justify-between text-left group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 group-hover:text-emerald-400 transition-colors">
                      04 · TRANSACTIONAL COMMERCE
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    E-commerce Development
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Custom high-conversion storefronts for wholesale (B2B) and direct-to-consumer (D2C) brands with dynamic tiered pricing, zero overselling, and automated checkout failovers.
                  </p>

                  {/* Custom Visual: Fast Checkout Metric */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#060913] border border-white/[0.06] grid grid-cols-2 gap-2 font-mono text-xs text-center">
                    <div className="p-2 rounded bg-white/[0.02]">
                      <div className="text-[10px] text-slate-500 uppercase">Page Load</div>
                      <div className="text-emerald-400 font-bold">0.9 Seconds</div>
                    </div>
                    <div className="p-2 rounded bg-white/[0.02]">
                      <div className="text-[10px] text-slate-500 uppercase">Cart Abandonment</div>
                      <div className="text-emerald-400 font-bold">-34% Drop</div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Wholesale B2B Tier Pricing &amp; Buyer Accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Razorpay, Stripe &amp; UPI Seamless Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Automated Packing Slips &amp; Dispatch Tracking</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href="/services/ecommerce-development"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore E-commerce</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-slate-500">Next.js · Laravel</span>
                </div>
              </div>
            </FadeUp>

            {/* SERVICE 5 — MOBILE APPLICATION DEVELOPMENT */}
            <FadeUp delay={0.4}>
              <div className="h-full rounded-2xl bg-[#0c1224] border border-white/[0.08] hover:border-purple-500/40 p-5 sm:p-8 transition-all flex flex-col justify-between text-left group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 group-hover:text-purple-400 transition-colors">
                      05 · CROSS-PLATFORM MOBILE
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Mobile Application Development
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Native-performance iOS and Android applications built with React Native and Flutter for field workforces, customer portals, offline-first data synchronization, and push notifications.
                  </p>

                  {/* Custom Visual: Device Platform Pill */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#060913] border border-white/[0.06] flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                      <span>Unified iOS + Android Codebase</span>
                    </div>
                    <span className="text-purple-300 text-[11px]">60 FPS Smooth</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>Cross-Platform React Native &amp; Flutter</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>Offline-First Data Storage &amp; Background Sync</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>Real-time GPS Tracking &amp; Push Notifications</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href="/services/mobile-app-development"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore Mobile Apps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-slate-500">React Native · iOS & Android</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* SERVICE 6 — AI & BUSINESS AUTOMATION (Featured Automation Showcase) */}
          <FadeUp delay={0.45}>
            <div className="rounded-3xl bg-gradient-to-br from-[#0e172e] via-[#091024] to-[#060a16] border border-indigo-500/25 p-5 sm:p-8 lg:p-10 text-left relative overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <Bot className="w-3.5 h-3.5" />
                    <span>06 · PRACTICAL AI IMPLEMENTATIONS</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                    AI &amp; Business Automation
                  </h3>

                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
                    Automate tedious manual workflows with practical, enterprise-grade AI: intelligent WhatsApp customer copilots, document extraction pipelines, and automated CRM triage that actually drive measurable ROI.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>WhatsApp Business AI Copilots</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Automated Document &amp; Invoice Parsing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Customer Support Ticket Triage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Zero Hallucination Retrieval (RAG)</span>
                    </div>
                  </div>

                  <div className="pt-2 sm:pt-3">
                    <Link
                      href="/services/ai-automation"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs font-mono transition-all group w-full sm:w-auto"
                    >
                      <span>Explore AI Automation</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right: AI Flow Diagram Preview */}
                <div className="lg:col-span-5">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#060913] border border-white/[0.08] space-y-2 font-mono text-[11px]">
                    <div className="text-slate-400 pb-1 border-b border-white/[0.06] flex justify-between">
                      <span>Workflow Pipeline</span>
                      <span className="text-indigo-400">Automated</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03] text-slate-300 flex items-center justify-between gap-2">
                      <span className="truncate">1. Customer (WhatsApp)</span>
                      <span className="text-emerald-400 shrink-0">✓ Ingested</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03] text-slate-300 flex items-center justify-between gap-2">
                      <span className="truncate">2. Intent Classification</span>
                      <span className="text-indigo-300 shrink-0">Fast LLM</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03] text-slate-300 flex items-center justify-between gap-2">
                      <span className="truncate">3. CRM Auto-Creation</span>
                      <span className="text-cyan-300 shrink-0">&lt;100ms</span>
                    </div>
                    <div className="p-2 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 flex items-center justify-between gap-2">
                      <span className="truncate">4. Response Dispatched</span>
                      <span className="text-emerald-400 font-bold shrink-0">2.1s Total</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* DUAL ASYMMETRIC GRID: SERVICE 7 & SERVICE 8 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* SERVICE 7 — API DEVELOPMENT & INTEGRATION */}
            <FadeUp delay={0.5}>
              <div className="h-full rounded-2xl bg-[#0c1224] border border-white/[0.08] hover:border-amber-500/40 p-5 sm:p-8 transition-all flex flex-col justify-between text-left group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 group-hover:text-amber-400 transition-colors">
                      07 · BACKEND ARCHITECTURE
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    API Development &amp; Integration
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Deterministic, well-documented RESTful &amp; GraphQL APIs engineered for high concurrency, strict input validation, webhook reliability, and seamless third-party gateway bridges.
                  </p>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#060913] border border-white/[0.06] font-mono text-[11px] space-y-1.5 text-slate-300">
                    <div className="text-slate-500 pb-1 border-b border-white/[0.06] flex justify-between">
                      <span>Endpoint Contract</span>
                      <span className="text-emerald-400">200 OK</span>
                    </div>
                    <div className="text-amber-300 break-all">POST /api/v1/verification/verify</div>
                    <div className="text-slate-400">Latency: 24ms · HMAC Signed</div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>Enterprise Laravel &amp; Node.js Microservices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>Payment Gateway, SMS &amp; Webhook Bridges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>Token Authentication &amp; Rate-Limiting</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href="/services/api-development"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore API Engineering</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-slate-500">REST · GraphQL</span>
                </div>
              </div>
            </FadeUp>

            {/* SERVICE 8 — UI/UX DESIGN */}
            <FadeUp delay={0.55}>
              <div className="h-full rounded-2xl bg-[#0c1224] border border-white/[0.08] hover:border-pink-500/40 p-5 sm:p-8 transition-all flex flex-col justify-between text-left group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
                      <Palette className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 group-hover:text-pink-400 transition-colors">
                      08 · PRODUCT DESIGN
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    UI/UX Design &amp; Prototyping
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    User-centric digital interfaces designed to maximize conversion, eliminate cognitive friction, and establish an authoritative, unmistakable visual identity for your brand.
                  </p>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#060913] border border-white/[0.06] flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-pink-400 shrink-0" />
                      <span>Design System Tokens</span>
                    </div>
                    <span className="text-pink-300 text-[11px]">WCAG AAA Accessible</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                      <span>Wireframing &amp; Interactive Prototypes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                      <span>Conversion-Optimized Checkout &amp; Funnels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                      <span>Component Libraries &amp; Design Systems</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href="/services/ui-ux-design"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-400 hover:text-pink-300 font-semibold group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore UI/UX Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-slate-500">Figma · Tokens</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ServicesSection;