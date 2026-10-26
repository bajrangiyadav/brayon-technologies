import React from "react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Business & Workflow First",
    description:
      "We understand your business operations, daily bottlenecks, and exact requirements before writing a single line of code.",
    deliverables: ["Requirement Analysis", "User Workflow Mapping", "Problem Definition"],
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Scope, Timeline & Cost",
    description:
      "You receive a transparent project scope, clear milestone timeline, and exact estimated cost with zero hidden clauses.",
    deliverables: ["Transparent Project Scope", "Milestone Roadmap", "Fixed Timeline & Estimate"],
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Milestone-Based Development",
    description:
      "Development happens in transparent milestones with regular working demo updates so you always know what is being built.",
    deliverables: ["Milestone Sprints", "Regular Demo Updates", "Weekly Staging Releases"],
  },
  {
    step: "04",
    title: "Launch & Support",
    subtitle: "Deploy, Train & Support",
    description:
      "We deploy to production, train your team to use the software seamlessly, and provide dedicated post-launch maintenance.",
    deliverables: ["Zero-Downtime Deployment", "Team Training & Walkthrough", "Post-Launch Support & Bug Fixing"],
  },
];

export function ProcessSection() {
  return (
    <Section id="process" variant="surface" spacing="lg" borderBottom>
      <Container>
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="Simple, Transparent 4-Step Process."
          description="Software engineering should never be a black box. We maintain radical milestone transparency with weekly staging demos so you always have total clarity on progress."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step, idx) => {
            return (
              <FadeUp
                key={step.step}
                delay={0.05 * idx}
                className=""
              >
                <div className="p-5 sm:p-6 rounded-xl bg-[#090e1b] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between h-full text-left">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold text-blue-500">
                        {step.step}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      KEY DELIVERABLES
                    </div>
                    <ul className="space-y-1">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5"
                        >
                          <span className="h-1 w-1 rounded-full bg-blue-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default ProcessSection;
