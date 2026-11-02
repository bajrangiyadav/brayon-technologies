import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import FadeUp from "../animations/FadeUp";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { GitHubIcon } from "../icons/GitHubIcon";

export function FounderSection() {
  return (
    <Section spacing="xl" borderBottom className="bg-[#070b16] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0.05}>
            <div className="text-center mb-8 sm:mb-12">
              <Eyebrow>LEADERSHIP &amp; ACCOUNTABILITY</Eyebrow>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mt-3">
                Engineered Under Direct Senior Leadership.
              </h2>
            </div>
          </FadeUp>

          {/* Founder Executive Presentation Card */}
          <FadeUp delay={0.15}>
            <div className="rounded-3xl bg-gradient-to-br from-[#0c1428] via-[#091022] to-[#070b16] border border-blue-500/25 p-5 sm:p-10 lg:p-14 text-left shadow-2xl shadow-blue-950/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Monogram & Profile Badge */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                  {/* Distinctive Executive Monogram Visual */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-2xl shadow-blue-900/40 bg-gradient-to-tr from-[#0a1228] via-[#0d1a3a] to-[#152854] flex flex-col items-center justify-center p-4 group">
                    <div className="font-mono text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white tracking-tighter">
                      BY
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-blue-300/80 mt-1">
                      Lead Architect
                    </div>
                    <div className="absolute inset-0 bg-blue-500/10 pointer-events-none group-hover:bg-blue-500/20 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Bajrangi Yadav
                    </h3>
                    <div className="text-xs font-mono text-blue-400 mt-1 uppercase tracking-wider font-semibold">
                      Founder — BRAYON Technologies
                    </div>
                  </div>

                  {/* Verified Links */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2">
                    <a
                      href="mailto:hello@brayontech.com"
                      className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
                      title="Send Email to Bajrangi Yadav"
                    >
                      <Mail className="w-4 h-4" />
                    </a>

                    <a
                      href="https://github.com/bajrangiyadav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
                      title="GitHub Profile"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>

                    <a
                      href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20a%20software%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono font-medium transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Founder Vision & Architectural Standards */}
                <div className="lg:col-span-8 space-y-4 sm:space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>FOUNDER VISION</span>
                  </div>

                  {/* Exact Suggested Copy from Prompt */}
                  <blockquote className="text-base sm:text-xl md:text-2xl font-medium text-slate-100 leading-snug italic border-l-2 border-blue-500 pl-3 sm:pl-4 py-1">
                    &ldquo;Building technology with a focus on solving real business challenges. My vision is to make reliable, scalable, and meaningful digital solutions accessible to businesses of every size.&rdquo;
                  </blockquote>

                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
                    Traditional agency models suffer from a fundamental disconnection: sales teams sell promises, and then hand off code delivery to rotating junior developers. At BRAYON Technologies, you consult directly with senior engineering leadership. Your database architecture, security policies, and sprint milestones are overseen personally to ensure rock-solid production quality.
                  </p>

                  {/* Commitments Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Zero Agency Fluff</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Direct dialogue with the builder. No commission intermediaries.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>100% IP Transfer</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        All private Git repos and cloud keys belong strictly to you.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Fixed Milestone Terms</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Honest, predictable sprint billing with no hidden surprises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}

export default FounderSection;