import React from "react";
import { ArrowRight, Terminal } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import Eyebrow from "../common/Eyebrow";
import HeroVisual from "./HeroVisual";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";

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
              <Eyebrow>BRAYON TECHNOLOGIES · PRODUCT & AI ENGINEERING</Eyebrow>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
                We Build Digital Products That Move Businesses Forward.
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
                BRAYON Technologies designs and builds scalable digital products, business platforms and AI-powered solutions for modern companies.
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
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/case-studies"
                >
                  Explore Our Work
                </Button>
              </div>
            </FadeUp>

            {/* Technical Subtext / Engineering Maturity */}
            <FadeUp delay={0.25}>
              <div className="pt-4 flex items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>We don&apos;t just talk about technology. We build it.</span>
                </div>
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
