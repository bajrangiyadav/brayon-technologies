import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  FileCheck,
  Layout,
  Globe,
  Upload,
  ArrowRight,
  Clock,
  UserCheck,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

interface TimelineMilestone {
  day: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const TIMELINE: TimelineMilestone[] = [
  {
    day: "Day 1",
    title: "Discovery Call & Workflow Audit",
    description: "30-min focused call to understand your business operations, daily bottlenecks, and required features.",
    icon: PhoneCall,
  },
  {
    day: "Day 2",
    title: "Scope, Architecture & Fixed Quote",
    description: "You receive a clear scope document, milestone timeline, and fixed price quote with zero hidden clauses.",
    icon: FileCheck,
  },
  {
    day: "Day 5",
    title: "UI Design & Clickable Preview",
    description: "Review interactive screens and user workflows on mobile and desktop before backend development starts.",
    icon: Layout,
  },
  {
    day: "Week 2+",
    title: "First Working Staging Link",
    description: "Access your private staging server URL to test working features, login roles, and database entries.",
    icon: Globe,
  },
];

const CLIENT_NEEDS = [
  {
    title: "Brand Assets",
    desc: "Aapka business logo, brand colors, aur basic brand preferences.",
  },
  {
    title: "Content & Information",
    desc: "Service/product list, descriptions, business contact details, aur pricing.",
  },
  {
    title: "Existing Data (If Any)",
    desc: "Old software data, Excel customer lists, product catalogs, ya database backup.",
  },
  {
    title: "Domain / Server Access",
    desc: "Aapke domain registrar ya server provider ke login credentials (we assist step-by-step).",
  },
];

export function ProjectOnboardingRoadmapSection() {
  return (
    <Section spacing="lg" borderBottom className="bg-[#060a15]">
      <Container>
        <SectionHeading
          eyebrow="TRANSPARENT CLIENT JOURNEY"
          title="Aage Kya Hoga? (Timeline &amp; Your Role)"
          description="Customer ko pehle hi pata hona chahiye ki Day 1 se lekar launch tak process kaise chalegi, aur unko kab kya provide karna hoga."
        />

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {TIMELINE.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.day} delay={0.04 * idx}>
                <div className="h-full p-6 rounded-2xl bg-[#090f1f] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-blue-600/15 text-blue-400 font-mono text-xs font-semibold border border-blue-500/30">
                        {item.day}
                      </span>
                      <Icon className="w-5 h-5 text-slate-400" />
                    </div>

                    <h3 className="text-base font-semibold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* 'Aapse Kya Chahiye' Box */}
        <FadeUp delay={0.2}>
          <div className="rounded-3xl bg-gradient-to-r from-[#0d162d] via-[#0a1226] to-[#0d162d] border border-blue-500/20 p-6 sm:p-8 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>CLIENT COOPERATION CHECKLIST</span>
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Aapse Kya Chahiye (Simple Deliverables from You)
                </h4>
              </div>
              <p className="text-xs text-slate-400 max-w-md">
                Aapko coding ya technical configuration ki chinta nahi karni. Sirf ye 4 basic business inputs chahiye hote hain:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CLIENT_NEEDS.map((need, idx) => (
                <div
                  key={need.title}
                  className="p-4 rounded-xl bg-black/40 border border-white/[0.06]"
                >
                  <div className="text-xs font-mono text-emerald-400 font-semibold mb-1">
                    0{idx + 1}. {need.title}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {need.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default ProjectOnboardingRoadmapSection;
