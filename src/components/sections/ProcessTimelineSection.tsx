"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Layout,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileCheck,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import FadeUp from "../animations/FadeUp";

interface ProcessStep {
  number: string;
  name: string;
  phase: string;
  summary: string;
  icon: React.ElementType;
  timeframe: string;
  deliverables: string[];
  keyHighlight: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    name: "Discover",
    phase: "Phase 01 · Strategic Discovery",
    summary:
      "Understand business goals, challenges, requirements, and opportunities.",
    icon: Search,
    timeframe: "Week 1 · Days 1–5",
    deliverables: [
      "In-depth operational workflow audit & bottleneck identification",
      "Feature prioritization & MVP scope definition",
      "Target audience journey mapping & edge cases",
      "Fixed milestone timeline & transparent cost breakdown",
    ],
    keyHighlight: "Clear, written project scope document with zero ambiguous assumptions.",
  },
  {
    number: "02",
    name: "Design",
    phase: "Phase 02 · Architecture & UX",
    summary:
      "Create the product strategy, architecture, UX, and technical roadmap.",
    icon: Layout,
    timeframe: "Week 2 · Days 6–12",
    deliverables: [
      "Interactive Figma wireframes and mobile-first responsive prototypes",
      "Normalized relational database schemas & indexing blueprint",
      "Deterministic API contracts and integration specifications",
      "Security policies, RBAC access control definitions & cloud topology",
    ],
    keyHighlight: "Interactive prototypes approved before a single line of backend code is committed.",
  },
  {
    number: "03",
    name: "Develop",
    phase: "Phase 03 · Agile Engineering",
    summary:
      "Build, test, integrate, and refine the solution.",
    icon: Code2,
    timeframe: "Weeks 3–6 · Sprint Cycles",
    deliverables: [
      "2-week agile sprint development cycles with working live demos",
      "Clean TypeScript & server component implementation",
      "Automated testing, error boundaries, and security audits",
      "Staging preview environment updated after every milestone",
    ],
    keyHighlight: "You see and test working software every 7 days, eliminating last-minute surprises.",
  },
  {
    number: "04",
    name: "Launch & Grow",
    phase: "Phase 04 · Deployment & Hypercare",
    summary:
      "Deploy, monitor, maintain, and continuously improve.",
    icon: Rocket,
    timeframe: "Launch Day + 30 Days Hypercare",
    deliverables: [
      "Zero-downtime production deployment on hardened cloud infrastructure",
      "100% intellectual property, private Git repo & credentials transfer",
      "Staff onboarding training and operational handover documentation",
      "30 days of complimentary post-launch bug fixing & performance monitoring",
    ],
    keyHighlight: "Complete code independence with direct engineer hypercare coverage.",
  },
];

export function ProcessTimelineSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section id="process" spacing="xl" borderBottom className="bg-[#050813] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <FadeUp delay={0.05}>
            <Eyebrow>OUR DEVELOPMENT PROCESS</Eyebrow>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              From First Conversation To Successful Launch.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-sm sm:text-lg text-slate-300 font-normal leading-relaxed">
              We replace chaotic, unpredictable development cycles with a disciplined 4-stage engineering sprint methodology engineered for certainty and speed.
            </p>
          </FadeUp>
        </div>

        {/* Elegant Timeline Process Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;

            return (
              <FadeUp key={step.number} delay={0.08 * (idx + 1)}>
                <div
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`h-full p-5 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between text-left cursor-pointer ${
                    isCurrent
                      ? "bg-[#0d1428] border-blue-500/60 shadow-xl shadow-blue-950/30"
                      : "bg-[#090e1c] border-white/[0.08] hover:border-white/[0.2]"
                  }`}
                >
                  <div>
                    {/* Step Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all ${
                          isCurrent
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "bg-white/[0.05] text-slate-400 border border-white/[0.08]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xl font-bold text-slate-500">
                        {step.number}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-1 font-semibold">
                      {step.phase}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                      {step.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-5 font-normal">
                      {step.summary}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                      {step.deliverables.map((del) => (
                        <div key={del} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeframe & Key Highlight pill */}
                  <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/[0.06] space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{step.timeframe}</span>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      {step.keyHighlight}
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Process Guarantee Banner */}
        <FadeUp delay={0.4}>
          <div className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-[#090e1c] border border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Fixed Milestones. Predictable Delivery. Zero Vendor Lock-In.
                </div>
                <div className="text-xs text-slate-400">
                  You own 100% of your code, cloud assets, and databases at every stage.
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] text-white font-mono text-xs transition-colors shrink-0 w-full sm:w-auto"
            >
              <span>Discuss Your Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default ProcessTimelineSection;