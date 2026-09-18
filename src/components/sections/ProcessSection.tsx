import React from "react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Architecture & Requirements",
    description:
      "We dissect business operations, user flows, and system requirements. Schemas, API contracts, and technology matrices are defined before writing a single line of code.",
    deliverables: ["Technical Specification", "Database Schema", "Architecture Diagram"],
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Design Systems & User Experience",
    description:
      "We establish cohesive design systems, interactive component prototypes, and accessible user interfaces that prioritize speed and clarity over superficial decoration.",
    deliverables: ["Figma Design System", "Interactive Prototype", "UX Flow Validation"],
  },
  {
    step: "03",
    title: "Engineer",
    subtitle: "Production Full-Stack Development",
    description:
      "We build in disciplined two-week agile sprints. Every commit follows strict TypeScript typing, modular component boundaries, and comprehensive test coverage.",
    deliverables: ["Weekly Staging Builds", "Clean Git Repository", "Test Automation"],
  },
  {
    step: "04",
    title: "Integrate",
    subtitle: "APIs, Security & Data Bridges",
    description:
      "We connect external APIs, payment processors, communication gateways, and database pipelines with robust error handling and webhook reconciliation.",
    deliverables: ["Payment Gateways", "Third-Party APIs", "Webhooks & Sync"],
  },
  {
    step: "05",
    title: "Launch",
    subtitle: "Optimization & Zero-Downtime Deploy",
    description:
      "We perform rigorous Core Web Vitals audits, database query indexing, and security hardening before executing automated zero-downtime production deployment.",
    deliverables: ["Core Web Vitals 90+", "Security Audit", "Production Deployment"],
  },
  {
    step: "06",
    title: "Scale",
    subtitle: "Monitoring & Continuous Iteration",
    description:
      "We monitor server telemetry, query latencies, and user analytics to optimize throughput, handle traffic spikes, and roll out feature iterations cleanly.",
    deliverables: ["Telemetry & Monitoring", "100% Code Handover", "Post-Launch Support"],
  },
];

export function ProcessSection() {
  return (
    <Section variant="surface" spacing="lg" borderBottom>
      <Container>
        <SectionHeading
          eyebrow="ENGINEERING METHODOLOGY"
          title="Predictable Delivery. Zero Surprises."
          description="A battle-tested six-stage execution framework that turns complex operational requirements into high-performance software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <FadeUp key={step.step} delay={0.06 * idx}>
              <div className="p-6 rounded-2xl bg-[#090e1b] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-white/[0.06]">
                    <span className="font-mono text-3xl font-bold text-blue-500/80">
                      {step.step}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                      PHASE {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-1">{step.title}</h3>
                  <div className="font-mono text-xs text-blue-400 mb-3">{step.subtitle}</div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                    KEY DELIVERABLES
                  </div>
                  <ul className="space-y-1 text-xs font-mono text-slate-300">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ProcessSection;
