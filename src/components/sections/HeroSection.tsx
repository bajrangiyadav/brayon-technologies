import React from "react";
import { ArrowRight, Terminal } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import Eyebrow from "../common/Eyebrow";
import HeroVisual from "./HeroVisual";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden border-b border-white/[0.08]">
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Messaging */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <FadeUp delay={0.05}>
              <Eyebrow>BRAYON TECHNOLOGIES · CUSTOM SOFTWARE &amp; DIGITAL SYSTEMS</Eyebrow>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-white leading-[1.14]">
                Your Business Idea. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  Our Technology.
                </span>{" "}
                <br className="hidden sm:inline" />
                One Complete Solution.
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
                Custom Software, CRM, ERP, E-commerce &amp; Mobile Apps — built around the way your business actually works.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss My Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20book%20a%20free%2030-minute%20call%20for%20my%20software%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  iconLeft={<WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />}
                >
                  Book a Free 30-Min Call
                </Button>
              </div>
            </FadeUp>

            {/* Trust Line */}
            <FadeUp delay={0.25}>
              <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-slate-300">
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <span>✓</span> Clear Pricing &amp; Timeline
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <span>✓</span> Milestone Based Development
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <span>✓</span> Post-Launch Support
                </span>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Original Technical Visual System */}
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
