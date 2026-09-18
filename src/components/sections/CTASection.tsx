import React from "react";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Button from "../common/Button";
import FadeUp from "../animations/FadeUp";

export function CTASection() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0e162a] to-[#090d18] border border-blue-500/20 p-6 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-blue-950/30">
          {/* Subtle geometric background decoration */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, #3b82f6 1px, transparent 1px),
                linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <FadeUp delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>DIRECT SENIOR ENGINEERING COLLABORATION</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                Ready to Build Software That Moves Your Business Forward?
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Skip the bloated agency overhead and sales intermediaries. Partner directly with experienced engineers who write production code and take ownership of results.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                  href="/services"
                >
                  Review Our Services
                </Button>
              </div>
            </FadeUp>

            {/* Reassurance pills */}
            <FadeUp delay={0.25}>
              <div className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>100% IP & Git Ownership</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>24-Hour Scope Turnaround</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Transparent Milestones</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default CTASection;
