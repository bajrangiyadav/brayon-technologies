import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code2,
  Server,
  Store,
  Rocket,
  Workflow,
  Zap,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Award,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Engineering & Web Development Services | BRAYON Technologies",
  description:
    "Explore BRAYON Technologies' production-ready engineering services: Next.js web applications, Laravel backends, headless e-commerce, startup MVPs, and business automation ERPs.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Engineering & Web Development Services | BRAYON Technologies",
    description:
      "Production-ready Next.js web apps, Laravel APIs, high-converting e-commerce, and custom ERP automation engineered for scale.",
    url: "https://brayontech.com/services",
  },
};

const services = [
  {
    id: "web-apps",
    title: "High-Performance Web Applications & SaaS",
    subtitle: "Next-generation frontend architecture engineered for speed, conversion, and global scale.",
    icon: <Code2 className="w-7 h-7 text-blue-400" />,
    description:
      "We build resilient, responsive web applications utilizing Next.js 16 and React 19. By shifting from bloated legacy code to modern server components and optimized caching, we deliver sub-second interactions that directly lift conversion rates.",
    deliverables: [
      "Custom UI/UX component library with Tailwind CSS",
      "Full server-side rendering (SSR) and edge static generation",
      "Google Core Web Vitals optimization (95+ PageSpeed)",
      "Role-based authentication and secure session management",
      "Comprehensive TypeScript type coverage and clean Git architecture",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel / AWS"],
    timeline: "2 to 4 Weeks",
  },
  {
    id: "backend-apis",
    title: "Enterprise Backends, Microservices & REST APIs",
    subtitle: "High-throughput server architectures with rock-solid database integrity and zero downtime.",
    icon: <Server className="w-7 h-7 text-cyan-400" />,
    description:
      "Leveraging Laravel and Node.js, we construct secure, scalable RESTful APIs and asynchronous queue workers. Whether orchestrating complex transactional workflows or synchronizing third-party APIs, our systems are built for 99.9% uptime.",
    deliverables: [
      "RESTful API architecture with OpenAPI / Swagger documentation",
      "PostgreSQL and MySQL schema design with indexing and query tuning",
      "Redis caching layer for high-volume session and real-time state",
      "Third-party webhook ingestion and fault-tolerant retry workers",
      "Automated automated database backup and health monitoring pipelines",
    ],
    techStack: ["Laravel", "PHP 8.2", "Node.js", "PostgreSQL", "Redis", "Docker"],
    timeline: "3 to 6 Weeks",
  },
  {
    id: "ecommerce",
    title: "High-Converting Custom E-Commerce Platforms",
    subtitle: "Fast, frictionless shopping funnels with integrated Razorpay/Stripe and instant catalog search.",
    icon: <Store className="w-7 h-7 text-emerald-400" />,
    description:
      "Generic template stores slow down buyers and leak revenue at checkout. We engineer custom e-commerce engines with sub-second product filtering, 1-click weight/variant selection, and instant UPI/card payment completion.",
    deliverables: [
      "Instant variant and weight selection without full page refreshes",
      "Integrated Razorpay modal checkout with UPI intent routing",
      "Automated GST billing, interstate tax logic, and PDF invoice generation",
      "Inventory synchronization with real-time stock reservation",
      "Automated WhatsApp order confirmation and dispatch alerts",
    ],
    techStack: ["Laravel", "Next.js", "Razorpay API", "MySQL", "Tailwind CSS", "WhatsApp API"],
    timeline: "3 to 5 Weeks",
  },
  {
    id: "startup-mvp",
    title: "Startup MVP in 30 Days",
    subtitle: "From validated concept to live market production in two rapid sprint cycles.",
    icon: <Rocket className="w-7 h-7 text-purple-400" />,
    description:
      "Designed specifically for founders who need to enter the market fast without piling on technical debt. We deliver a production-ready MVP with authentic user auth, payment processing, and core business logic in 30 days.",
    deliverables: [
      "User onboarding, authentication, and permission management",
      "Core SaaS application workflows and responsive dashboard",
      "Integrated Stripe or Razorpay subscription billing",
      "Automated transaction receipts and onboarding email cadences",
      "Complete GitHub source code repository and cloud deployment handover",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS"],
    timeline: "Strict 30-Day Sprint",
  },
  {
    id: "business-erp",
    title: "Custom ERP & Internal Business Automation",
    subtitle: "Replace chaotic spreadsheets and WhatsApp threads with a centralized operations portal.",
    icon: <Workflow className="w-7 h-7 text-amber-400" />,
    description:
      "We design purpose-built internal tools that connect procurement, branch inventory, field dispatch, and tax accounting into a single real-time operations command center.",
    deliverables: [
      "Multi-warehouse inventory reconciliation and low-stock alerts",
      "Automated GST and E-Way Bill PDF generation",
      "Role-based access controls (Executive, Branch Manager, Billing Staff)",
      "Barcode and dispatch label printing integration",
      "Executive KPI dashboard tracking daily margin and order velocity",
    ],
    techStack: ["Laravel", "PostgreSQL", "Node.js", "Redis", "Tailwind CSS", "PDF Engine"],
    timeline: "4 to 8 Weeks",
  },
  {
    id: "performance-modernization",
    title: "Legacy Modernization & Performance Audits",
    subtitle: "Transform sluggish legacy portals into sub-second web experiences.",
    icon: <Zap className="w-7 h-7 text-indigo-400" />,
    description:
      "If your current website takes over 3 seconds to load or frequently crashes during marketing spikes, we perform a deep forensic audit and migrate critical funnels to modern edge architecture.",
    deliverables: [
      "Full forensic code, database, and asset bundle payload audit",
      "Image and script modernization reducing total page weight by up to 70%",
      "Server-level caching and CDN configuration",
      "Database query bottleneck identification and indexing fixes",
      "Guaranteed Google Core Web Vitals score improvement",
    ],
    techStack: ["Next.js Edge", "Redis", "Cloudflare CDN", "PostgreSQL Tuning", "Lighthouse"],
    timeline: "1 to 2 Weeks",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero */}
        <section className="relative py-20 border-b border-slate-800/80 bg-gradient-to-b from-[#0A1128] to-[#070B19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-mono mb-6">
              <span>PRODUCTION-READY AGENCY ENGINEERING</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
              Software & Web Services Built For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                Verifiable Business ROI
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We reject generic templates and abstract glowing cards. Every service we provide is engineered by senior architects to solve specific revenue and operational bottlenecks.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                id={svc.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 p-8 flex flex-col justify-between transition-all hover:bg-slate-900/90 group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-800/70 w-fit mb-5 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-xs font-mono text-blue-300 mb-4">{svc.subtitle}</p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{svc.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Deliverables:</div>
                    {svc.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 space-y-4">
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Primary Stack:</div>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {svc.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2">
                    <span className="text-slate-400 font-mono">Timeline: {svc.timeline}</span>
                    <Link
                      href="/contact"
                      className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Guarantees */}
        <section className="py-16 bg-[#050814] border-t border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">The BRAYON Engineering Guarantee</h2>
              <p className="text-sm text-slate-400 mt-2">
                We back every deployment with standard operational safeguards so you never bear risk alone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
                <h4 className="text-base font-bold text-white">100% IP Ownership</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Full worldwide copyright, GitHub repositories, and cloud credentials transferred upon milestone completion.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                <Zap className="w-6 h-6 text-cyan-400" />
                <h4 className="text-base font-bold text-white">PageSpeed 90+ Score</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sub-second interactions with guaranteed Google Core Web Vitals compliance on production launch.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                <Award className="w-6 h-6 text-emerald-400" />
                <h4 className="text-base font-bold text-white">30-Day Hypercare</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dedicated bug fixing and performance monitoring included for a full month after production go-live.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                <Clock className="w-6 h-6 text-purple-400" />
                <h4 className="text-base font-bold text-white">Milestone Safety</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Transparent 2-week sprint deliverables with staged demo environments before any payment release.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">Need a customized scope or technical proposal?</h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Discuss your technical architecture directly with Founder Bajrangi Yadav. We will deliver an actionable scope within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>Explore Verified Work</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
