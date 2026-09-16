import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Zap,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  Code2,
  Mail,
  Phone,
  Workflow,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "About Us & Engineering Leadership | BRAYON Technologies",
  description:
    "Meet BRAYON Technologies and Founder Bajrangi Yadav. Direct engineering leadership, production-ready architectures, and zero bloated agency overhead.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us & Engineering Leadership | BRAYON Technologies",
    description:
      "Direct senior engineering leadership by Founder Bajrangi Yadav. 5-step agile delivery model, sub-second performance, and 100% code ownership.",
    url: "https://brayontech.com/about",
  },
};

const deliverySteps = [
  {
    step: "01",
    title: "Discovery & Technical Architecture Blueprint",
    duration: "Days 1 – 3",
    description:
      "We dissect your business goals, target user flows, and technical requirements. Founder Bajrangi Yadav architects the database schemas, API specs, and deployment infrastructure before a single line of code is written.",
  },
  {
    step: "02",
    title: "Interactive Prototype & UX Validation",
    duration: "Week 1",
    description:
      "We build responsive, interactive prototypes so you can click through real screens, validate workflows, and confirm business logic before entering full backend engineering.",
  },
  {
    step: "03",
    title: "Agile Two-Week Sprints & Staged Demos",
    duration: "Weeks 2 – 4",
    description:
      "We build in transparent 2-week sprint cycles. Every Friday, you receive a video breakdown and a live staging link to inspect working software, not static slide decks.",
  },
  {
    step: "04",
    title: "Security, Core Web Vitals & Load Testing",
    duration: "Pre-Launch",
    description:
      "Before production cutover, we audit security headers, test database indexing under simulated concurrent load, and optimize assets to guarantee Google PageSpeed scores above 90.",
  },
  {
    step: "05",
    title: "Production Deployment, 100% IP Handover & Hypercare",
    duration: "Post-Launch",
    description:
      "We deploy to your AWS, Vercel, or custom cloud environment, transfer complete Git repository ownership and credentials, and back everything with our 30-Day Hypercare Bug Warranty.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero */}
        <section className="relative py-20 border-b border-slate-800/80 bg-gradient-to-b from-[#0A1128] to-[#070B19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-mono mb-6">
              <span>SENIOR ENGINEERING • ZERO BLOAT</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
              Engineering Over Sales Pitches:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                The BRAYON Standard
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We started BRAYON Technologies to fix what is broken in the agency industry: sluggish templates, hidden markups, and junior developers practicing on client budgets.
            </p>
          </div>
        </section>

        {/* Founder & Engineering Lead Spotlight */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-900/60 border border-slate-800/90 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Bio */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-mono">
                  <span>FOUNDER & TECHNOLOGY LEAD</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Bajrangi Yadav
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  I am a Full-Stack Solutions Architect and Developer. Over years of engineering production applications, I watched agencies pitch modern solutions only to deliver sluggish WordPress themes with 50 bloated plugins.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  At BRAYON Technologies, I personally lead the technical architecture for every client project. I write, review, and benchmark our codebases — ensuring every system is built for sub-second page loads, clean relational integrity, and high-concurrency scale.
                </p>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    My Engineering Commitments to You:
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Direct access to me — zero account manager telephone games.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Clean, modern tech stack: Next.js 16, React 19, Laravel, Node.js, and PostgreSQL.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Complete source code and cloud ownership transferred upon project milestones.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="mailto:bajrangiyadav330@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-slate-200 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>bajrangiyadav330@gmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20a%20project%20with%20BRAYON."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>+91 73851 21432</span>
                  </a>
                </div>
              </div>

              {/* Right Technical Credentials */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Core Technical Competencies
                  </div>

                  <div className="space-y-4 text-xs font-mono">
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Frontend Architecture (Next.js, React, Tailwind)</span>
                        <span className="text-blue-400 font-bold">100%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full w-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Backend & Microservices (Laravel, Node.js)</span>
                        <span className="text-cyan-400 font-bold">95%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5">
                        <div className="bg-cyan-400 h-1.5 rounded-full w-[95%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Relational DB & Caching (PostgreSQL, Redis, MySQL)</span>
                        <span className="text-emerald-400 font-bold">95%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5">
                        <div className="bg-emerald-400 h-1.5 rounded-full w-[95%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Payment Gateways & APIs (Razorpay, Stripe, Webhooks)</span>
                        <span className="text-purple-400 font-bold">98%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5">
                        <div className="bg-purple-400 h-1.5 rounded-full w-[98%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                    Based in Maharashtra, India (Mumbai / Pune tech corridor). Supporting clients globally across India, the Middle East, and North America.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Step Delivery Framework */}
        <section id="process" className="py-20 bg-[#050814] border-t border-b border-slate-800/80 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-mono mb-4">
                <span>OUR AGILE DELIVERY MODEL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                How We Deliver Without Surprises
              </h2>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                From initial architecture to production cutover, our 5-step process ensures transparency, milestone safety, and zero unexpected delays.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {deliverySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
                >
                  <div className="flex sm:flex-col items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">
                      {step.step}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700 whitespace-nowrap">
                      {step.duration}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to partner with an engineering-first agency?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Schedule a 15-minute introductory call directly with Bajrangi Yadav. We will examine your codebase or specifications with zero sales pressure.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <span>Schedule Introductory Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-all border border-slate-700"
            >
              <span>View Verified Projects</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
