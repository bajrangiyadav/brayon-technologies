import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import Eyebrow from "../common/Eyebrow";
import HeroVisual from "./HeroVisual";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden border-b border-white/[0.08] bg-gradient-to-b from-[#060913] via-[#080d1a] to-[#070b16]">
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Subtle radial ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-cyan-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Messaging */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <FadeUp delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[11px] sm:text-xs tracking-wider uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DIGITAL ENGINEERING &amp; BUSINESS SOLUTIONS</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Turning Ambitious Ideas Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  Powerful Digital Products.
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
                From intelligent software and scalable platforms to beautiful digital experiences, we help businesses build technology that creates real impact.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  href="#inquiry"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/work"
                >
                  Explore Our Work
                </Button>
              </div>
            </FadeUp>

            {/* Trust Line & Key Standards */}
            <FadeUp delay={0.25}>
              <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-slate-300">
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Business-First Thinking</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Senior Engineering Oversight</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% IP &amp; Code Transfer</span>
                </span>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Layered Dashboard UI Visual System */}
          <div className="lg:col-span-6 xl:col-span-6">
            <FadeIn delay={0.2}>
              <HeroVisual />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;