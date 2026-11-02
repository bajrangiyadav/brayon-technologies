import React from "react";
import Link from "next/link";
import {
  Compass,
  Code2,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Layers,
  Cpu,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import FadeUp from "../animations/FadeUp";

export function CompanyIntroSection() {
  const pillars = [
    {
      number: "01",
      title: "Strategic Discovery",
      icon: Compass,
      tagline: "Aligning software directly with business goals.",
      description:
        "We analyze your operations, customer journeys, and commercial objectives first. We engineer solutions that eliminate friction and unlock measurable revenue, rather than creating unnecessary complexity.",
    },
    {
      number: "02",
      title: "Senior Engineering",
      icon: Code2,
      tagline: "Architecture designed by experienced hands.",
      description:
        "Every database schema, API contract, and cloud configuration is designed and led by senior engineering architects. No junior intermediaries, no brittle templates, and no technical debt.",
    },
    {
      number: "03",
      title: "Long-Term Scalability",
      icon: TrendingUp,
      tagline: "Built for growth, security, and independence.",
      description:
        "From day one, we build with modular architectures that scale effortlessly as your business expands. You receive 100% ownership of source code, repositories, and deployment keys upon delivery.",
    },
  ];

  return (
    <Section spacing="xl" borderBottom className="bg-[#080d1a] relative overflow-hidden">
      {/* Subtle geometric line accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-16">
          <FadeUp delay={0.05}>
            <Eyebrow>WHO WE ARE &amp; HOW WE THINK</Eyebrow>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Technology Should Move Your Business Forward.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed">
              At BRAYON Technologies, we turn complex business challenges into practical digital solutions. We work closely with our clients to understand their goals, design the right strategy, and deliver technology built for long-term growth.
            </p>
          </FadeUp>
        </div>

        {/* Sophisticated Editorial Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <FadeUp key={pillar.number} delay={0.1 * (idx + 1)}>
                <div className="group relative h-full p-8 rounded-2xl bg-[#0c1326] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-950/30 text-left">
                  {/* Subtle hover accent light */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600/20 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-sm font-semibold text-slate-500 group-hover:text-blue-400 transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-mono text-blue-400 mb-4 font-medium">
                      {pillar.tagline}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span>Engineering Principle {pillar.number}</span>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Operational Commitment Banner */}
        <FadeUp delay={0.35}>
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0b1224] via-[#0e172e] to-[#0b1224] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                Direct Engineering Accountability
              </div>
              <div className="text-base sm:text-lg font-bold text-white">
                Looking for a technical partner who treats your software like their own?
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] text-white font-medium text-xs font-mono transition-all group shrink-0"
            >
              <span>Learn About Our Model</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default CompanyIntroSection;