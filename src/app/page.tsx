"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import {
  Code2,
  Server,
  Store,
  Workflow,
  Zap,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Award,
  ExternalLink,
  ChevronRight,
  MessageSquare,
  Send,
  Sparkles,
  Check,
  TrendingUp,
  Terminal,
  ChevronDown,
  Building2,
  Truck,
  HeartPulse,
  Briefcase,
  Layers,
  Mail,
} from "lucide-react";

export default function HomePage() {
  const [heroActiveTab, setHeroActiveTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [auditFormSubmitted, setAuditFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web & SaaS Development",
    budget: "₹75k - ₹1.5 Lakh ($1,000 - $2,000)",
    details: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
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
        throw new Error(result.error || "Failed to dispatch inquiry");
      }

      setWhatsappUrl(result.whatsappUrl || "");
      setAuditFormSubmitted(true);
    } catch (err: any) {
      setSubmitError(
        err?.message || "Could not dispatch automatically. Please contact us via WhatsApp directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Tech Stack Badges
  const techStack = [
    {
      name: "Next.js 16",
      tag: "Frontend Framework",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#404040" strokeWidth="1.5" />
          <path d="M7.5 7.5v9M7.5 7.5l9 10M16.5 7.5v5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "React 19",
      tag: "UI Architecture",
      icon: (
        <svg className="w-4 h-4 shrink-0 text-[#61DAFB]" viewBox="-11.5 -10.23 23 20.46" fill="currentColor">
          <circle cx="0" cy="0" r="2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Vue.js",
      tag: "Progressive Web",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <polygon points="12,21 0,3.5 4.5,3.5 12,14.5 19.5,3.5 24,3.5" fill="#42B883" />
          <polygon points="12,14.5 6.5,3.5 9.5,3.5 12,7.8 14.5,3.5 17.5,3.5" fill="#35495E" />
        </svg>
      ),
    },
    {
      name: "Laravel",
      tag: "Enterprise Backend",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M11.64 2.11a1.5 1.5 0 0 0-1.28 0l-7.5 3.75A1.5 1.5 0 0 0 2 7.2v9.6a1.5 1.5 0 0 0 .86 1.34l7.5 3.75a1.5 1.5 0 0 0 1.28 0l7.5-3.75a1.5 1.5 0 0 0 .86-1.34V7.2a1.5 1.5 0 0 0-.86-1.34l-7.5-3.75z" fill="#FF2D20" />
          <path d="M12 4.5l-6 3v7l6 3v-13z" fill="#FFFFFF" fillOpacity="0.25" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      tag: "High-Throughput API",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.5 4.9v9.8L12 21.5 3.5 16.7V6.9L12 2z" fill="#5FA04E" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      tag: "Type Safety",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M6 10h5M8.5 10v9M13 14c.5-1 2-1.5 3-1 1.5.7 1.5 2.5 0 3.2-1.2.6-2.5 1-2.5 2.8 0 1.5 1.3 2.5 3 2 1-.3 1.8-1 2-1.5" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      tag: "Relational DB",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 3C7 3 4 6 4 11c0 4 2 7 5 8.5V21l3-1 3 1v-1.5c3-1.5 5-4.5 5-8.5 0-5-3-8-8-8z" fill="#336791" />
        </svg>
      ),
    },
    {
      name: "Redis",
      tag: "Cache & Session",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#DC382D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      tag: "Design System",
      icon: (
        <svg className="w-4 h-4 shrink-0 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.975,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.975,12,6.001,12z" />
        </svg>
      ),
    },
    {
      name: "AWS & Docker",
      tag: "Cloud Infrastructure",
      icon: (
        <svg className="w-4 h-4 shrink-0 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.8 15.6c-.6.5-1.5.8-2.6.8-1.7 0-3.1-.7-4.2-2.1l-.8 1c1.3 1.6 3 2.5 5 2.5 1.5 0 2.8-.5 3.7-1.4.3-.3.5-.7.5-1.1 0-.6-.4-1.1-1.1-1.4l-.5 1.7zm-8-3.4c-.6-.7-1.4-1.1-2.4-1.1-1.8 0-3.2 1.4-3.2 3.3 0 1.9 1.4 3.3 3.2 3.3 1 0 1.8-.4 2.4-1.1v.9h1.5v-7.1H10.8v1.8zm-2.3 4.2c-1 0-1.8-.8-1.8-2 0-1.1.8-2 1.8-2s1.8.8 1.8 2c0 1.1-.8 2-1.8 2z" />
        </svg>
      ),
    },
  ];

  // Core Services
  const services = [
    {
      title: "High-Performance Web Applications",
      badge: "Next.js 16 & React 19",
      description:
        "Sub-second web portals, SaaS platforms, and customer-facing interfaces engineered with modern React server components and edge rendering.",
      features: ["Google Core Web Vitals 95+ Score", "Sub-second dynamic page transitions", "Enterprise TypeScript architecture"],
      link: "/services#web-apps",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Enterprise Backend & REST APIs",
      badge: "Laravel & Node.js",
      description:
        "High-throughput transactional APIs, queuing systems, and resilient database architectures built for zero downtime and strict data security.",
      features: ["Sub-second database query indexing", "Redis session & price cache engines", "Razorpay / Stripe payment integrations"],
      link: "/services#backend-apis",
      icon: <Server className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "High-Converting Custom E-Commerce",
      badge: "Direct-to-Consumer & B2B",
      description:
        "Custom shopping storefronts with rapid catalog search, 1-click weight/variant switches, and streamlined UPI/Card checkout funnels.",
      features: ["Verified -38% cart abandonment", "Automated GST invoices & PDF generation", "WhatsApp order confirmation dispatch"],
      link: "/services#ecommerce",
      icon: <Store className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "Startup MVP in 30 Days",
      badge: "Agile Rapid Launch",
      description:
        "From validated idea to live production software in 4 weeks. Full code ownership, investor-ready architecture, and zero technical debt.",
      features: ["Full-stack authentication & RBAC", "Stripe / Razorpay subscription flow", "100% intellectual property handover"],
      link: "/services#startup-mvp",
      icon: <Zap className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Business Automation & ERPs",
      badge: "Operations Command Center",
      description:
        "Custom internal portals connecting inventory, dispatch, billing, and team tasks. Eliminate repetitive spreadsheets and WhatsApp chaos.",
      features: ["Multi-warehouse inventory sync", "Automated E-Way & GST invoice PDFs", "Saves 20+ hours of manual work weekly"],
      link: "/services#business-erp",
      icon: <Workflow className="w-6 h-6 text-amber-400" />,
    },
    {
      title: "Performance & Architecture Audits",
      badge: "Sub-Second Revamp",
      description:
        "Forensic inspection and modernization of sluggish legacy monoliths. We diagnose bottlenecks and elevate conversion rates.",
      features: ["Deep database query optimization", "Payload & asset weight reduction", "Actionable PDF remediation blueprint"],
      link: "/services#performance-modernization",
      icon: <TrendingUp className="w-6 h-6 text-indigo-400" />,
    },
  ];

  // The 4 Pillars of Distinction
  const whyBrayon = [
    {
      title: "Direct Founder Engineering Leadership",
      desc: "No sales reps or junior interns practicing on your project. Founder Bajrangi Yadav personally architects your systems and reviews every line of code.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Zero Bloat, High-Performance Code",
      desc: "We write clean, typed TypeScript and modern Next.js/Laravel apps scoring 95+ on Google PageSpeed. Every millisecond saved translates directly to customer conversions.",
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Transparent Sprint Milestones",
      desc: "No vague promises. We work in 2-week agile sprints with staged demo environments and weekly video reviews, so you always see working software.",
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "100% Intellectual Property Handover",
      desc: "You own all code, repositories, and credentials from day one. Plus, we back every deployment with our standard 30-Day Hypercare Bug Warranty.",
      icon: <Award className="w-6 h-6 text-purple-400" />,
    },
  ];

  // Transparent Packages
  const packages = [
    {
      name: "Starter Web Foundation",
      target: "SMBs, Consultants & Growing Brands",
      priceINR: "₹35,000",
      priceUSD: "$550",
      timeline: "7 – 10 Business Days",
      popular: false,
      features: [
        "5-Page Modern Responsive Website",
        "Next.js / React + Tailwind CSS",
        "Google PageSpeed 90+ Score Guarantee",
        "Contact & Lead Capture Form with Alerts",
        "Basic On-Page SEO (Meta tags, Sitemap)",
        "14 Days Post-Launch Bug Warranty",
      ],
    },
    {
      name: "Business Growth Portal",
      target: "Scaling Companies & Service Firms",
      priceINR: "₹75,000",
      priceUSD: "$1,100",
      timeline: "2 – 3 Weeks",
      popular: true,
      features: [
        "Up to 10 Custom Designed Pages",
        "Headless CMS Integration for Easy Edits",
        "Lead Generation Forms + Direct Email Alerts",
        "Dynamic Case Studies & Portfolio",
        "Google Analytics 4 & Pixel Setup",
        "30 Days Post-Launch Hypercare Support",
      ],
    },
    {
      name: "Startup MVP in 30 Days",
      target: "Founders & Venture-Backed Teams",
      priceINR: "₹1,50,000 – ₹3,50,000",
      priceUSD: "$2,000 – $4,500",
      timeline: "4 Weeks (Sprint Cycles)",
      popular: false,
      features: [
        "Full-Stack Web App / SaaS Architecture",
        "User Auth, RBAC & Role Dashboards",
        "Database Design (PostgreSQL / Redis)",
        "Stripe / Razorpay Payment Subscription Flow",
        "Cloud Deployment on AWS / Vercel",
        "Complete Source Code & Architecture Handover",
      ],
    },
    {
      name: "Enterprise ERP / Automation",
      target: "Mid-Sized Enterprises & Operations",
      priceINR: "₹2,50,000+",
      priceUSD: "$3,500+",
      timeline: "6 – 10 Weeks",
      popular: false,
      features: [
        "Custom Workflow & Multi-Branch Engine",
        "Inventory, Invoicing & GST Accounting",
        "Granular Role Permissions & Audit Trails",
        "Third-Party API & Hardware Scanner Sync",
        "Dedicated Engineering Lead & Weekly Sprints",
        "60 Days Enterprise Support & Staff Training",
      ],
    },
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      question: "How much does custom software or an MVP cost at BRAYON Technologies?",
      answer:
        "Our transparent packages start at ₹35,000 ($550) for a modern 5-page web foundation. Startup MVPs typically range between ₹1,50,000 and ₹3,50,000 ($2,000 – $4,500), while comprehensive enterprise ERPs start at ₹2,50,000 ($3,500+). We operate strictly on milestone-based payments with zero hidden fees.",
      badge: "Transparent Pricing",
    },
    {
      question: "How fast can BRAYON Technologies launch our web platform or MVP?",
      answer:
        "Starter web projects are delivered in 7–10 business days. Full-stack startup MVPs are delivered in 30 days through two-week agile sprint cycles. Enterprise custom ERPs take between 6 to 10 weeks with weekly staging demos.",
      badge: "Rapid Delivery",
    },
    {
      question: "Do we get 100% ownership of the source code and intellectual property?",
      answer:
        "Yes. Upon completion of milestone payments, BRAYON Technologies transfers 100% worldwide intellectual property (IP), copyright, and GitHub source code repository ownership to your company, protected by our standard Master Services Agreement (MSA).",
      badge: "100% IP Handover",
    },
    {
      question: "What technologies does BRAYON Technologies specialize in?",
      answer:
        "We specialize in modern, high-performance technologies: Next.js 16, React 19, Vue.js, Laravel, Node.js, TypeScript, PostgreSQL, Redis, Tailwind CSS, Docker, AWS Cloud, and React Native for mobile applications.",
      badge: "Modern Tech Stack",
    },
    {
      question: "What is BRAYON's payment milestone structure?",
      answer:
        "We never ask for 100% upfront or accept risky post-completion terms. Standard projects operate on a 50% advance to initiate architecture and 50% upon User Acceptance Testing (UAT) sign-off. Enterprise projects follow a 30% Advance / 30% Alpha Demo / 30% Beta Review / 10% Production Deployment schedule.",
      badge: "Milestone Safety",
    },
    {
      question: "How does the free 15-minute architecture audit work?",
      answer:
        "You share your current website or software requirements. Founder & Technology Lead Bajrangi Yadav conducts a 5-point technical inspection (Core Web Vitals, mobile UX, API speed, security headers, and conversion bottlenecks) and delivers an actionable 1-page PDF report within 24 hours with zero sales pressure.",
      badge: "Zero-Risk Value",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION WITH AUTHENTIC PRODUCT UI PREVIEW */}
        <section className="relative pt-16 pb-24 border-b border-slate-800/80 bg-gradient-to-b from-[#0A1128] via-[#070B19] to-[#070B19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-mono mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>DIRECT SENIOR ENGINEERING • ZERO BLOAT</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
                We Build Digital Products That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  Grow Businesses.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                Custom web applications, modern e-commerce, and enterprise automation engineered with direct senior leadership, sub-second speeds, and zero technical debt.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/35 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3"
                >
                  <span>Schedule 15-Min Discovery Call</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Verified Case Studies</span>
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                </Link>
              </div>
            </div>

            {/* LIVE PRODUCT / DASHBOARD UI PREVIEW (REPLACES GENERIC AI ORB) */}
            <div className="mt-16 rounded-3xl bg-slate-950/80 border border-slate-800 p-4 sm:p-6 shadow-2xl shadow-blue-950/50 max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                    brayon-production-telemetry.sys
                  </span>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <button
                    onClick={() => setHeroActiveTab(0)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      heroActiveTab === 0
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:text-white bg-slate-900"
                    }`}
                  >
                    SafeGrowTrade B2B
                  </button>
                  <button
                    onClick={() => setHeroActiveTab(1)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      heroActiveTab === 1
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:text-white bg-slate-900"
                    }`}
                  >
                    Ashapura Dry Fruits D2C
                  </button>
                  <button
                    onClick={() => setHeroActiveTab(2)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      heroActiveTab === 2
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:text-white bg-slate-900"
                    }`}
                  >
                    Performance Metrics
                  </button>
                </div>
              </div>

              {/* Tab 0: SafeGrowTrade */}
              {heroActiveTab === 0 && (
                <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono">
                      <span>LIVE CLIENT ARCHITECTURE</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      SafeGrowTrade: Agricultural Commodity Trading Engine
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Custom Laravel & Redis backend handling dynamic pricing, bulk inventory locks, and automated GST invoice dispatch.
                    </p>
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                        <div className="text-xl font-extrabold text-blue-400">3x</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Order Speed</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                        <div className="text-xl font-extrabold text-emerald-400">100%</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Stock Accuracy</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                        <div className="text-xl font-extrabold text-cyan-400">+42%</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Reorders</div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Link
                        href="/work/safegrowtrade"
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
                      >
                        <span>Inspect Full SafeGrowTrade Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="md:col-span-5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-xs space-y-3">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                      Live Transaction Feed
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-slate-200">Order #SG-9842 (Bulk Wheat)</div>
                        <div className="text-[10px] text-slate-400">Razorpay Auto-Settled</div>
                      </div>
                      <span className="text-emerald-400 font-semibold">₹1,42,000</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-slate-200">Stock Lock: Redis Cluster</div>
                        <div className="text-[10px] text-slate-400">Lock latency: 4ms</div>
                      </div>
                      <span className="text-blue-400 font-semibold">Verified</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-slate-200">GST Invoice PDF Generator</div>
                        <div className="text-[10px] text-slate-400">Interstate IGST calculation</div>
                      </div>
                      <span className="text-purple-400 font-semibold">0.3s</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 1: Ashapura Dry Fruits */}
              {heroActiveTab === 1 && (
                <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-mono">
                      <span>PRODUCTION COMMERCE PLATFORM</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Ashapura Dry Fruits: Gourmet D2C Storefront
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      High-converting Next.js storefront with 1-click weight selector and integrated Razorpay checkout for fast social ad conversions.
                    </p>
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                        <div className="text-xl font-extrabold text-blue-400">1.1s</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Mobile Load</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                        <div className="text-xl font-extrabold text-emerald-400">-38%</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Drop-offs</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                        <div className="text-xl font-extrabold text-cyan-400">+54%</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Ad ROI</div>
                      </div>
                    </div>
                    <div className="pt-2 flex items-center gap-4">
                      <Link
                        href="/work/ashapura-dry-fruits"
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href="https://ashapuradryfruits.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </a>
                    </div>
                  </div>

                  <div className="md:col-span-5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-xs space-y-3">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                      Checkout Funnel Diagnostics
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-slate-200">Catalog Variant Switching</div>
                        <div className="text-[10px] text-slate-400">250g / 500g / 1kg instant</div>
                      </div>
                      <span className="text-emerald-400 font-semibold">0ms reload</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-slate-200">Razorpay Mobile UPI Routing</div>
                        <div className="text-[10px] text-slate-400">GPay, PhonePe, Paytm intent</div>
                      </div>
                      <span className="text-blue-400 font-semibold">99.4% Success</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-slate-200">WhatsApp Dispatch Triggers</div>
                        <div className="text-[10px] text-slate-400">Instant tracking links</div>
                      </div>
                      <span className="text-purple-400 font-semibold">Automated</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Performance Telemetry */}
              {heroActiveTab === 2 && (
                <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-mono">
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="text-3xl font-extrabold text-emerald-400">98 / 100</div>
                    <div className="text-xs text-slate-200 mt-1 font-sans font-semibold">Google PageSpeed</div>
                    <div className="text-[10px] text-slate-400 mt-1">Mobile & Desktop</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="text-3xl font-extrabold text-blue-400">0.8s</div>
                    <div className="text-xs text-slate-200 mt-1 font-sans font-semibold">Largest Contentful Paint</div>
                    <div className="text-[10px] text-slate-400 mt-1">Sub-second benchmark</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="text-3xl font-extrabold text-cyan-400">99.99%</div>
                    <div className="text-xs text-slate-200 mt-1 font-sans font-semibold">Uptime SLA</div>
                    <div className="text-[10px] text-slate-400 mt-1">Production monitoring</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="text-3xl font-extrabold text-indigo-400">0ms</div>
                    <div className="text-xs text-slate-200 mt-1 font-sans font-semibold">Cumulative Layout Shift</div>
                    <div className="text-[10px] text-slate-400 mt-1">Rock-solid layout</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* TRUSTED TECH STACK BANNER */}
        <section className="py-12 bg-[#050814] border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
              Production Stack & Architectural Standards
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all flex items-center gap-2.5 text-xs font-mono text-slate-300 group shadow-sm"
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <span className="font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-slate-400 hidden sm:inline">
                    ({tech.tag})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED WORK & REAL CASE STUDIES */}
        <section id="case-studies" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 font-mono">
                AUTHENTIC CLIENT PROOF
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Engineering Case Studies
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
                We believe in proof over promises. See how we resolved genuine operational bottlenecks for real companies.
              </p>
            </div>
            <Link
              href="/work"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 self-start md:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.slug}
                className="rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 p-8 flex flex-col justify-between transition-all hover:bg-slate-900/90 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-mono">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{project.duration}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Quantified Metrics Box */}
                  <div className="grid grid-cols-2 gap-3 py-2">
                    {project.results.slice(0, 2).map((res, rIdx) => (
                      <div key={rIdx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                        <div className="text-2xl font-extrabold text-blue-400">{res.metric}</div>
                        <div className="text-xs font-medium text-slate-300">{res.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700/80"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Architecture Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE SERVICES */}
        <section id="services" className="py-24 bg-[#050814] border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 font-mono">
                ENGINEERING CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Specialized Web & Software Engineering
              </h2>
              <p className="mt-4 text-slate-300 text-base">
                We do not sell generic templates. Every solution is purpose-built for speed, security, and measurable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((srv, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#090F24] border border-slate-800 p-8 hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-xl hover:shadow-blue-600/10"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-xl bg-blue-950/70 border border-blue-800/40 group-hover:scale-110 transition-transform">
                        {srv.icon}
                      </div>
                      <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-800/80 text-blue-300 border border-slate-700">
                        {srv.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-800/80">
                    <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={srv.link}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Service Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY BRAYON (THE 4 PILLARS) */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 font-mono">
              THE BRAYON ADVANTAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Companies Trust BRAYON
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              The anti-agency model: direct senior technical leadership, transparent sprint cycles, and software engineered for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBrayon.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/40 w-fit mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Guaranteed Standard
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOUNDER & LEADERSHIP SHOWCASE */}
        <section id="founder" className="py-24 bg-[#050814] border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-900/70 border border-slate-800 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Founder Info */}
                <div className="lg:col-span-4 text-center lg:text-left space-y-4">
                  <div className="relative w-32 h-32 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-500 p-1 shadow-xl">
                    <div className="w-full h-full bg-[#080D21] rounded-xl flex items-center justify-center text-4xl font-extrabold text-blue-400">
                      BY
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Bajrangi Yadav</h3>
                    <p className="text-blue-400 font-semibold text-sm">
                      Founder & Technology Lead
                    </p>
                    <div className="text-xs text-slate-400 mt-1">BRAYON Technologies</div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
                    <a
                      href="mailto:bajrangiyadav330@gmail.com"
                      className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                      title="Direct Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="https://wa.me/917385121432"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/60 transition-colors"
                      title="WhatsApp Direct"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Founder Statement */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase">
                    Founder Engineering Guarantee
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    &ldquo;You don&apos;t get passed around to junior account managers. You work directly with senior engineering leadership.&rdquo;
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Most agencies sell with their best leaders and delegate the actual code to inexperienced interns. At BRAYON
                    Technologies, I personally architect every database schema, oversee sprint execution, and guarantee that
                    every line of code meets strict production performance, security, and maintainability benchmarks.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Direct code review by Technology Lead</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>30-day post-launch bug warranty included</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>100% intellectual property & source code rights</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Transparent weekly video sprint updates</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/about"
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
                    >
                      <span>Read About BRAYON and Our Full Engineering Philosophy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING & PACKAGES */}
        <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 font-mono">
              TRANSPARENT ENGAGEMENT
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Milestone-Based Investment Tiers
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              No hidden fees, no hourly padding. Fixed milestones tied to working software demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-2xl border flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? "bg-gradient-to-b from-blue-950/50 via-slate-900 to-[#0A1128] border-blue-500/50 shadow-xl shadow-blue-600/10"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  {pkg.popular && (
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider mb-4">
                      Most Popular Choice
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <div className="text-xs text-slate-400 mt-1">{pkg.target}</div>

                  <div className="my-6">
                    <div className="text-3xl font-extrabold text-white">{pkg.priceINR}</div>
                    <div className="text-xs text-slate-400 mt-1">Approx. {pkg.priceUSD} • {pkg.timeline}</div>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-300 pt-4 border-t border-slate-800">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all ${
                      pkg.popular
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                    }`}
                  >
                    Select Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section id="faq" className="py-24 bg-[#050814] border-t border-slate-800/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Everything You Need to Know Before Partnering With Us
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                Straightforward answers about pricing, launch timelines, code ownership, sprint cadence, and our risk-free architecture audit.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-[#0C1530] border-blue-500/40 shadow-lg shadow-blue-500/5"
                        : "bg-[#090F24] border-slate-800/90 hover:border-slate-700"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/15 text-blue-300 border border-blue-500/25 shrink-0">
                          {faq.badge}
                        </span>
                        <span className="text-base sm:text-lg font-semibold text-white">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "transform rotate-180 text-blue-400" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/50">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INQUIRY & ARCHITECTURE AUDIT FORM */}
        <section id="contact" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 font-mono">
              FREE 15-MINUTE ARCHITECTURE AUDIT
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Claim Your Free 5-Point Performance & Tech Audit
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              Share your website URL or project requirements. We conduct a 5-point performance, security, and UX inspection
              and send a concrete PDF action report within 24 hours. Zero sales pressure.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 shadow-2xl">
            {auditFormSubmitted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Inquiry Dispatched to Founder!
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your requirements have been logged and dispatched to Founder & Technology Lead Bajrangi Yadav (<span className="text-blue-400 font-semibold">bajrangiyadav330@gmail.com</span>).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0C1736] border border-emerald-500/30 max-w-md mx-auto space-y-3 text-left">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <MessageSquare className="w-5 h-5 shrink-0" />
                    <span>Instant WhatsApp Priority Connect</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Need a faster response? Click below to start a direct WhatsApp conversation with Bajrangi Yadav with your inquiry pre-loaded.
                  </p>
                  <a
                    href={
                      whatsappUrl ||
                      `https://wa.me/917385121432?text=${encodeURIComponent(
                        `Hi Bajrangi, I just submitted an inquiry on BRAYON Technologies for ${formData.service}.`
                      )}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/30"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp (+91 73851 21432)</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setAuditFormSubmitted(false);
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
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {submitError && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                    {submitError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                      Full Name *
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
                      Work Email *
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
                      Company / Organization
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
                      Service of Interest
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
                    Current Platform URL or Project Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Enter your current website URL for the free audit, or describe the software requirements you are looking to architect..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Dispatching to Founder...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Free Architecture Audit</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
