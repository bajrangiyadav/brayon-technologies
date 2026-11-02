import React from "react";
import {
  Quote,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
  GraduationCap,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import FadeUp from "../animations/FadeUp";

interface VerifiedTestimonial {
  clientName: string;
  role: string;
  company: string;
  projectContext: string;
  quote: string;
  impactMetric: string;
  liveUrl: string;
  icon: React.ElementType;
}

const VERIFIED_TESTIMONIALS: VerifiedTestimonial[] = [
  {
    clientName: "Executive & Administrative Board",
    role: "Institutional Leadership",
    company: "Jay Balaji Computer Education (JBCE)",
    projectContext: "ISO 9001:2015 Student Verification & Institute Web Portal",
    quote:
      "BRAYON Technologies engineered our student certificate verification system to be completely tamper-proof. Verification previously took 2 days through manual paperwork; it now authenticates in under 5 seconds by roll number online. Physical document forgery has been completely eliminated.",
    impactMetric: "Verification turnaround: 2 Days → Sub-5 Seconds online",
    liveUrl: "https://jbce.in/",
    icon: GraduationCap,
  },
  {
    clientName: "Examination Controller & Academic Committee",
    role: "Academic Governance",
    company: "Mumbai Hindi Vidyapeeth (मुंबई हिन्दी विद्यापीठ)",
    projectContext: "Multi-Center Examination & Online Student Result Publishing Engine",
    quote:
      "When annual examination results are published, thousands of students access the portal concurrently. Thanks to BRAYON's architecture, the site operated with zero downtime during peak loads, and admission workflows across our multi-state affiliated centers are seamlessly managed from a unified portal.",
    impactMetric: "Zero downtime during peak result traffic surges across 100+ centers",
    liveUrl: "https://mhvp.org/",
    icon: Building2,
  },
];

export function TestimonialsSection() {
  return (
    <Section spacing="xl" borderBottom className="bg-[#050813] relative overflow-hidden">
      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <FadeUp delay={0.05}>
            <Eyebrow>VERIFIED CLIENT TESTIMONIALS</Eyebrow>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              What Our Clients Say.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We present only authentic testimonials from real production systems actively running in the real world. No fabricated reviews, no inflated numbers.
            </p>
          </FadeUp>
        </div>

        {/* Testimonials Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VERIFIED_TESTIMONIALS.map((t, idx) => {
            const Icon = t.icon;
            return (
              <FadeUp key={t.company} delay={0.1 * (idx + 1)}>
                <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#090f1f] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between text-left shadow-xl shadow-blue-950/20 group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Quote className="w-5 h-5" />
                      </div>

                      <a
                        href={t.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Verified Live Portal ↗</span>
                      </a>
                    </div>

                    {/* Feedback Quote */}
                    <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Operational Impact Pill */}
                    <div className="p-3.5 rounded-xl bg-[#060913] border border-white/[0.06] mb-6">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Verified Operational Outcome:</span>
                      </div>
                      <div className="text-xs font-semibold text-emerald-300 font-mono">
                        {t.impactMetric}
                      </div>
                    </div>
                  </div>

                  {/* Client Identification */}
                  <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm sm:text-base">
                        {t.company}
                      </div>
                      <div className="text-xs text-blue-400 font-mono mt-0.5">
                        {t.role} · {t.clientName}
                      </div>
                    </div>
                    <div className="hidden sm:block text-[11px] font-mono text-slate-500 max-w-[180px] text-right truncate">
                      {t.projectContext}
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;