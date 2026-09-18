import React from "react";
import Link from "next/link";
import {
  Users,
  Code2,
  Lock,
  Database,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

interface Reason {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  proofPoints: string[];
}

const REASONS: Reason[] = [
  {
    number: "01",
    title: "Direct Senior Engineering Oversight",
    subtitle: "Zero Junior Handoffs · No Account Manager Middlemen",
    icon: Users,
    description:
      "At traditional agencies, senior architects pitch the project and junior developers execute it. At BRAYON, every line of core code and system schema is authored and reviewed by experienced senior engineers.",
    proofPoints: [
      "Direct technical communication via private Slack/Discord/WhatsApp",
      "Fast decision-making without multiple management layers",
      "Immediate problem resolution from day one of sprint execution",
    ],
  },
  {
    number: "02",
    title: "Clean TypeScript & Modular Architecture",
    subtitle: "Designed for 5+ Year Codebase Longevity",
    icon: Code2,
    description:
      "We avoid throwaway spaghetti code and fragile AI scaffolding. All codebases are written in strict TypeScript with component modularity, strict linting, and predictable data contracts.",
    proofPoints: [
      "Explicit data models, typed API responses, and zero implicit anys",
      "Modular components reusable across subsequent product iterations",
      "Automated CI linting and zero-warning build standards",
    ],
  },
  {
    number: "03",
    title: "100% Source Code & IP Ownership",
    subtitle: "Zero Vendor Lock-In · Full Asset Transfer",
    icon: Lock,
    description:
      "You own everything we build. All git repositories, database schemas, deployment pipelines, environment configurations, and assets are fully transferred to your accounts upon completion.",
    proofPoints: [
      "Full ownership of Git repositories, commit histories, and branches",
      "Complete deployment documentation and environment runbooks",
      "Freedom to transition or scale with any internal team anytime",
    ],
  },
  {
    number: "04",
    title: "ACID Relational Integrity & Security",
    subtitle: "Defensive Architecture for Institutional Reliability",
    icon: Database,
    description:
      "We prioritize real-world security and data consistency. Your verification databases and customer records use normalized schemas, indexed lookups, and parameterized queries.",
    proofPoints: [
      "Strict parameterization preventing SQL and XSS injection attacks",
      "Foreign-key relational constraints preventing data corruption",
      "Automated daily backup schedules with offsite redundancy",
    ],
  },
  {
    number: "05",
    title: "Active Production Maintenance & Reliability",
    subtitle: "Long-Term Partnership Beyond Initial Launch",
    icon: LifeBuoy,
    description:
      "Launching the software is only the first step. We actively monitor, maintain, and support production systems like JBCE and MHVP to ensure sustained uptime, SSL validity, and rapid bug resolution.",
    proofPoints: [
      "Real-world active client maintenance on live production portals",
      "Proactive OS/package security updates and SSL certificate renewal",
      "Direct founder availability for urgent production escalations",
    ],
  },
];

export function WhyWorkWithUsSection() {
  return (
    <Section spacing="lg" borderBottom className="bg-[#060913]">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="WHY CHOOSE BRAYON"
            title="Engineering Standards Built for Serious Companies."
            description="We reject generic agency fluff. Here is why established institutions and growing businesses trust BRAYON with their mission-critical software systems."
            className="mb-0"
          />
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 font-mono transition-colors shrink-0"
          >
            <span>Learn about our engineering philosophy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Pillars Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Top 2 Highlighted Pillars */}
          <div className="lg:col-span-6 space-y-6">
            {REASONS.slice(0, 2).map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <FadeUp key={reason.number} delay={0.05 * idx}>
                  <div className="rounded-xl border border-white/[0.08] bg-[#080e1c] p-6 sm:p-7 hover:border-blue-500/40 transition-all text-left h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-mono text-blue-400 font-medium">
                            PILLAR {reason.number}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-1.5">
                        {reason.title}
                      </h3>
                      <div className="text-xs font-mono text-slate-400 mb-3.5">
                        {reason.subtitle}
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed mb-5">
                        {reason.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] space-y-2">
                      {reason.proofPoints.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Right Column: Remaining 3 Pillars */}
          <div className="lg:col-span-6 space-y-6">
            {REASONS.slice(2, 5).map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <FadeUp key={reason.number} delay={0.1 + 0.05 * idx}>
                  <div className="rounded-xl border border-white/[0.08] bg-[#080e1c] p-5 sm:p-6 hover:border-blue-500/40 transition-all text-left">
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-base font-semibold text-white truncate">
                            {reason.title}
                          </h4>
                          <span className="font-mono text-[11px] text-slate-500 shrink-0">
                            {reason.number}
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mb-2">
                          {reason.subtitle}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed mb-3">
                          {reason.description}
                        </p>
                        <div className="space-y-1.5 pt-2 border-t border-white/[0.04]">
                          {reason.proofPoints.slice(0, 2).map((point) => (
                            <div key={point} className="flex items-start gap-2 text-[11px] text-slate-400">
                              <span className="text-blue-400 font-mono">›</span>
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
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

export default WhyWorkWithUsSection;
