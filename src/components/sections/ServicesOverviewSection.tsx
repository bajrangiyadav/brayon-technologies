import React from "react";
import Link from "next/link";
import {
  Globe,
  Server,
  Database,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

interface EngineeringCapability {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: React.ElementType;
  tagline: string;
  whatWeBuild: string[];
  operationalImpact: string;
  stack: string[];
  featured?: boolean;
}

export const CAPABILITIES: EngineeringCapability[] = [
  {
    id: "web-platforms",
    number: "01",
    title: "Custom Web Applications & Enterprise Portals",
    category: "FLAGSHIP ENGINEERING",
    icon: Globe,
    featured: true,
    tagline:
      "Engineered web applications built for zero-downtime operations, complex multi-user permission systems, and sub-second page delivery across all devices.",
    whatWeBuild: [
      "Custom Enterprise Portals & Admin Management Dashboards",
      "Public Verification Engines & Searchable Registries",
      "Multi-Role Access Control (Admins, Branch Managers, End-Users)",
      "High-Performance Web Platforms with Next.js & TypeScript",
    ],
    operationalImpact:
      "Eliminates manual verification bottlenecks, powers daily institutional operations, and guarantees 100% responsive reliability across desktop and mobile.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
  },
  {
    id: "backend-api",
    number: "02",
    title: "API Systems & Backend Architecture",
    category: "CORE BACKEND",
    icon: Server,
    tagline:
      "Resilient server-side services, deterministic API contracts, and secure session management designed for high-concurrency business logic.",
    whatWeBuild: [
      "RESTful API Handlers with Parameterized Validation",
      "Session Security & JWT Token Verification Systems",
      "Rate-Limiting & Anti-Scraping Protection Layers",
      "Third-Party Integration Gateways (Payment, SMS, Mail)",
    ],
    operationalImpact:
      "Ensures sub-100ms API response latency and prevents unauthorized access to sensitive institutional records.",
    stack: ["Node.js", "PHP / Laravel", "Python", "REST", "WebSockets"],
  },
  {
    id: "database-engineering",
    number: "03",
    title: "Database Engineering & Relational Verification",
    category: "PERSISTENCE & INTEGRITY",
    icon: Database,
    tagline:
      "Normalized relational database schemas engineered for ACID transactional guarantees, indexed search execution, and clean data modeling.",
    whatWeBuild: [
      "Indexed Academic & Student Record Schemas",
      "High-Throughput Certificate & Roll-Number Lookup Tables",
      "Audit Logging & Immutable Verification Ledgers",
      "Zero Data Loss Migration & Backup Retention Pipelines",
    ],
    operationalImpact:
      "Guarantees data correctness with foreign-key constraints and instantaneous search lookups over historical registries.",
    stack: ["PostgreSQL", "MySQL", "B-Tree Indexing", "Redis", "ACID Transactions"],
  },
  {
    id: "devops-security",
    number: "04",
    title: "Cloud Infrastructure & Security Hardening",
    category: "INFRASTRUCTURE & DEVOPS",
    icon: Shield,
    tagline:
      "Hardened Linux hosting, edge caching, automated deployment pipelines, and active security monitoring with direct engineer accountability.",
    whatWeBuild: [
      "Production Linux & NGINX Web Server Configuration",
      "Automated Daily Database Backups & Offsite Archives",
      "Full TLS 1.3 Encryption & Strict Security Headers",
      "Continuous Monitoring, Patching & Performance Auditing",
    ],
    operationalImpact:
      "Ensures 99.9% measured availability, rock-solid security posture, and zero reliance on fragile shared-hosting setups.",
    stack: ["Linux Host", "NGINX", "Cloudflare Edge", "SSL/TLS", "GitHub Actions"],
  },
  {
    id: "workflow-automation",
    number: "05",
    title: "Operational Workflow Automation",
    category: "BUSINESS MODERNIZATION",
    icon: Layers,
    tagline:
      "Replacing error-prone manual spreadsheets, paperwork, and fragmented tools with unified, bespoke digital operational software.",
    whatWeBuild: [
      "Multi-Branch Institutional Management Systems",
      "Automated Certificate & Marksheet Generation Engines",
      "Student Enrollment & Fee Tracking Pipelines",
      "Custom Internal Tools for Operational Teams",
    ],
    operationalImpact:
      "Cuts administrative turnaround time from days to seconds, empowering management to scale without expanding overhead.",
    stack: ["Custom Web Apps", "PDF Generation", "Dynamic Workflows", "Reporting"],
  },
];

export function ServicesOverviewSection() {
  const featured = CAPABILITIES.find((c) => c.featured);
  const regular = CAPABILITIES.filter((c) => !c.featured);

  return (
    <Section spacing="lg" borderBottom>
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="ENGINEERING CAPABILITIES"
            title="Disciplined Software Engineering Services."
            description="We design, architect, and deploy reliable software platforms with direct senior engineering oversight and zero agency fluff."
            className="mb-0"
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 font-mono transition-colors shrink-0"
          >
            <span>Detailed Services Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {/* Featured Flagship Capability */}
          {featured && (
            <FadeUp delay={0.05}>
              <div className="relative rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#0a1224] to-[#070b16] p-6 sm:p-8 lg:p-10 shadow-xl shadow-blue-950/20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-7 space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                        {featured.category}
                      </span>
                      <span className="font-mono text-xs text-slate-500">{featured.number}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                      {featured.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {featured.tagline}
                    </p>

                    <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs">
                      <div className="font-mono text-slate-400 uppercase tracking-wider text-[11px] mb-1.5">
                        Operational Impact
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        {featured.operationalImpact}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: What We Build & Stack */}
                  <div className="lg:col-span-5 space-y-5 text-left border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                        What We Deliver:
                      </div>
                      <ul className="space-y-2.5 text-xs text-slate-200">
                        {featured.whatWeBuild.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08]">
                      <div className="text-[11px] font-mono text-slate-400 mb-2">Technology Stack:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {featured.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          )}

          {/* 4 Supporting Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regular.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <FadeUp key={capability.id} delay={0.1 + idx * 0.05}>
                  <div className="h-full flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#070b16] p-6 sm:p-7 hover:border-white/[0.2] transition-colors text-left">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-mono text-blue-400 font-medium">
                            {capability.category}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-slate-500">{capability.number}</span>
                      </div>

                      <h4 className="text-lg font-semibold text-white mb-2">
                        {capability.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                        {capability.tagline}
                      </p>

                      <div className="space-y-1.5 mb-5 text-xs text-slate-300">
                        {capability.whatWeBuild.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono mt-0.5">›</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06]">
                      <div className="flex flex-wrap gap-1.5">
                        {capability.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ServicesOverviewSection;
