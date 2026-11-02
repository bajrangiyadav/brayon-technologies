import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Sliders,
  MessageSquare,
  Network,
  ShieldCheck,
  LifeBuoy,
  CheckCircle2,
  ArrowRight,
  Lock,
  GitBranch,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import FadeUp from "../animations/FadeUp";

export function WhyBrayonSection() {
  const pillars = [
    {
      id: "business-first",
      title: "Business-First Thinking",
      icon: Briefcase,
      badge: "Commercial Alignment",
      description:
        "We don't build features just to pad hours. We analyze your commercial model, customer friction, and bottom-line bottlenecks to engineer solutions that deliver measurable ROI.",
      proof: "Direct focus on revenue, conversion, and operational time saved.",
    },
    {
      id: "tailored-solutions",
      title: "Tailored Solutions",
      icon: Sliders,
      badge: "Zero Generic Templates",
      description:
        "Every company operates with distinct advantages. We build custom software around your competitive moat—never forcing you into generic, rigid off-the-shelf templates.",
      proof: "Purpose-engineered data models matching your exact operational workflows.",
    },
    {
      id: "transparent-communication",
      title: "Transparent Communication",
      icon: MessageSquare,
      badge: "Predictable Cadence",
      description:
        "Weekly working demos, staging environment access from Day 7, clear milestone updates, and direct WhatsApp / Slack access to your lead solutions architect.",
      proof: "Fixed sprint scopes, zero surprise billings, complete visibility.",
    },
    {
      id: "scalable-architecture",
      title: "Scalable Architecture",
      icon: Network,
      badge: "Engineered for Growth",
      description:
        "Decoupled edge-ready frontends, clean REST API boundaries, normalized relational schemas, and asynchronous caching engineered for 10x traffic expansion.",
      proof: "Sub-second response times, zero server lock-ups during peak surges.",
    },
    {
      id: "quality-driven",
      title: "Quality-Driven Engineering",
      icon: ShieldCheck,
      badge: "Senior Technical Rigor",
      description:
        "Strict TypeScript types, automated schema validation, comprehensive error boundaries, and OWASP security practices. Clean code built to last for years.",
      proof: "98+ PageSpeed metrics, resilient database connection pooling.",
    },
    {
      id: "long-term-support",
      title: "Long-Term Support",
      icon: LifeBuoy,
      badge: "Hypercare Warranty",
      description:
        "Launch is not the end of our partnership. Every project includes a 30-day complimentary hypercare warranty, proactive server monitoring, and ongoing feature advisory.",
      proof: "Direct engineering accountability well beyond deployment day.",
    },
  ];

  return (
    <Section spacing="xl" borderBottom className="bg-[#060914] relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <FadeUp delay={0.05}>
            <Eyebrow>OUR PARTNERSHIP ADVANTAGE</Eyebrow>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              More Than Development. A Technology Partner.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Most software agencies treat projects as one-off transactions. We operate as an invested technical extension of your team, providing architectural vision and long-term peace of mind.
            </p>
          </FadeUp>
        </div>

        {/* Visually Interesting Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Anchor Feature: The BRAYON Engineering Guarantee */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#0c1428] via-[#091022] to-[#070b18] border border-blue-500/30 p-8 sm:p-10 shadow-2xl shadow-blue-950/20 text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>NON-NEGOTIABLE STANDARDS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Built on Senior Technical Leadership &amp; 100% Client Ownership.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Unlike agencies that assign sales reps to pitch you and junior freelancers to write your code, at BRAYON your technical roadmap is designed and overseen by our founder and solutions architect.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "100% Source Code & Private Git Repository Transfer",
                  "Direct Access to Senior Solutions Architect",
                  "Fixed Milestone Pricing with Zero Hidden Costs",
                  "30-Day Complimentary Post-Launch Hypercare",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/[0.08] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs font-mono text-slate-400">Ready to consult?</div>
                <div className="text-sm font-bold text-white">Let&apos;s evaluate your project</div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium transition-all group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: 6 Pillars in an Asymmetric Connected Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <FadeUp key={pillar.id} delay={0.08 * (idx + 1)}>
                  <div className="h-full p-6 rounded-2xl bg-[#090e1c] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between text-left group hover:shadow-lg hover:shadow-blue-950/20">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:scale-105 transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 group-hover:text-blue-400 transition-colors uppercase">
                          {pillar.badge}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white tracking-tight mb-2">
                        {pillar.title}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-emerald-300/90 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="truncate">{pillar.proof}</span>
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

export default WhyBrayonSection;