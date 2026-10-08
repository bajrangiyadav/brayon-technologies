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
    title: "We Understand Before We Build",
    subtitle: "Pehle aapka business samajhte hain, phir software design karte hain",
    icon: Users,
    description:
      "Hum pehle aapka business workflow, daily bottlenecks aur processes samajhte hain, phir technology recommend karte hain. Generic solutions nahi, aapke business ke mutabiq.",
    proofPoints: [
      "In-depth workflow & operations discovery discussion",
      "Tailored system design matching how your team actually works",
      "Direct technical consultation without junior sales intermediaries",
    ],
  },
  {
    number: "02",
    title: "Clean Modular Code & Future-Proof Architecture",
    subtitle: "5+ saal tak chalne wala code — zero spaghetti, zero fragile hacks",
    icon: Code2,
    description:
      "Naye platforms ke liye strict modern architecture aur legacy systems ke liye battle-tested stability. Hum spaghetti code nahi likhte; har system maintainable aur scale-ready hota hai.",
    proofPoints: [
      "Modular components and clean separation of business logic",
      "Strict data models and predictable database schema design",
      "Easy maintenance so your internal team can scale it anytime",
    ],
  },
  {
    number: "03",
    title: "Your Data Stays Yours",
    subtitle: "Aapka code, aapka data, aapka 100% control",
    icon: Lock,
    description:
      "Hum aapko hamare platform par lock nahi karte. Complete source code repository, database credentials aur deployment aapke direct control mein rehte hain.",
    proofPoints: [
      "100% intellectual property & Git repository transfer",
      "Your database on your own cloud/hosting server",
      "Zero vendor lock-in; freedom to scale or transition anytime",
    ],
  },
  {
    number: "04",
    title: "Direct Communication",
    subtitle: "Aap directly development team aur architect se baat karte hain",
    icon: Database,
    description:
      "Account managers aur support agents ke beech communication loss nahi hota. Aap directly senior engineer aur solutions architect se connect karte hain.",
    proofPoints: [
      "Direct WhatsApp / Call channel with project lead",
      "Fast decisions and instant technical clarity",
      "Rapid turnaround on critical feedback and questions",
    ],
  },
  {
    number: "05",
    title: "Support After Launch",
    subtitle: "Software live hone ke baad bhi hum available hain",
    icon: LifeBuoy,
    description:
      "Project live deploy hone ke baad developers gayab nahi hote. Hum team training, warranty maintenance, security updates aur ongoing scaling support dete hain.",
    proofPoints: [
      "Active production monitoring and fast bug turnaround",
      "Staff onboarding and step-by-step system walkthrough",
      "Long-term feature enhancement and maintenance partnership",
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
            title="Why Businesses Choose BRAYON."
            description="We speak your business language, not agency jargon. Here is why serious founders and growing companies trust us with their critical software."
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
