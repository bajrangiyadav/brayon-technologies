import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, CheckCircle2, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

interface Testimonial {
  clientName: string;
  role: string;
  organization: string;
  project: string;
  quote: string;
  verifiedImpact: string;
  liveUrl?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    clientName: "Jay Balaji Computer Education (JBCE)",
    role: "Director & Management Board",
    organization: "Jay Balaji Computer Education (ISO 9001:2015)",
    project: "Student Verification & Academic Management Portal",
    quote:
      "BRAYON Technologies ne hamara student certificate verification system bilkul secure banaya. Pehle verification mein 2 din lagte the, ab instant 5 second mein online roll number se authenticate ho jata hai. Document forgery 100% khatam ho gayi.",
    verifiedImpact: "Verification speed: 2 days → 5 seconds. Zero physical forged certificates.",
    liveUrl: "https://jbce.in/",
  },
  {
    clientName: "Mumbai Hindi Vidyapeeth (MHVP)",
    role: "Examination Controller & Administrative Board",
    organization: "Mumbai Hindi Vidyapeeth (मुंबई हिन्दी विद्यापीठ)",
    project: "Multi-Center Examination & Online Result System",
    quote:
      "Annual results publish hone par server par hajaron students ek saath aate hain. BRAYON ki engineering ki wajah se site zero downtime ke saath chali aur multi-state affiliated centers ka admission data ek hi central portal se manage ho raha hai.",
    verifiedImpact: "Server downtime during peak result traffic: 0s. 100+ examination centers connected.",
    liveUrl: "https://mhvp.org/",
  },
];

export function TrustFounderSection() {
  return (
    <Section spacing="lg" borderBottom className="bg-[#050812]">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CLIENT REVIEWS & FOUNDER PROMISE"
          title="Direct Accountability. Verified Client Results."
          description="Aapka 'direct senior engineer' wala promise tabhi trustable hai jab aap real client words aur founder ki direct responsibility dekhein."
        />

        {/* Client Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {TESTIMONIALS.map((t, idx) => (
            <FadeUp key={t.organization} delay={0.05 * idx}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-[#090f1d] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Quote className="w-4 h-4" />
                    </div>
                    {t.liveUrl && (
                      <a
                        href={t.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                      >
                        Verified Production Client ↗
                      </a>
                    )}
                  </div>

                  <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-5 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Before / After Metrics Pill */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Before → After Outcome:</span>
                    </div>
                    <div className="text-xs font-semibold text-emerald-300 font-mono">
                      {t.verifiedImpact}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{t.clientName}</div>
                    <div className="text-slate-400 text-[11px] font-mono">{t.role}</div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
                    {t.project}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Founder Bio Card */}
        <FadeUp delay={0.15}>
          <div className="rounded-3xl bg-gradient-to-br from-[#0c1326] via-[#090e1c] to-[#070b16] border border-blue-500/25 p-6 sm:p-10 text-left shadow-xl shadow-blue-950/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Founder Avatar / Badge */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl shadow-blue-900/30 mb-4 bg-gradient-to-tr from-blue-900 to-indigo-950 flex items-center justify-center">
                  <div className="font-mono text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">
                    BY
                  </div>
                  <div className="absolute inset-0 bg-blue-500/10 pointer-events-none" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Bajrangi Yadav
                </h3>
                <div className="text-xs font-mono text-blue-400 mt-1 uppercase tracking-wider">
                  Founder &amp; Solutions Architect
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <a
                    href="mailto:hello@brayontech.com"
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
                    title="Email Bajrangi Yadav"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20a%20software%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                    <span>+91 73851 21432</span>
                  </a>
                </div>
              </div>

              {/* Founder Direct Pitch */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Direct Engineering Promise</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                  &ldquo;Aap mujhse baat karenge, aur main hi aapke software ka blueprint aur core code review karunga.&rdquo;
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  BRAYON Technologies ko maine isliye banaya kyunki traditional agencies mein sales pitch senior log karte hain aur kaam inexperienced juniors ko handover kar diya jata hai. Hamare yahan har client ka scope, database schema aur milestone delivery meri direct oversight mein hota hai.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Zero Junior Middlemen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>100% Code &amp; IP Transfer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Honest Milestones &amp; Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default TrustFounderSection;
