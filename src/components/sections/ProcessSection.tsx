import React from "react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    subtitle: "Workflow & Technical Audit",
    description:
      "We analyze business operations, existing legacy systems, data structures, and user requirements to establish clear technical boundaries before writing any code.",
    deliverables: ["Scope Definition", "Legacy System Audit", "Technical Feasibility"],
  },
  {
    step: "02",
    title: "Planning",
    subtitle: "Architecture & Schema Design",
    description:
      "We design the complete system blueprint: normalized relational database schemas, API contracts, third-party integrations, and milestone timelines.",
    deliverables: ["Database ERD Schema", "API Contract Spec", "Sprint Roadmap"],
  },
  {
    step: "03",
    title: "UI/UX",
    subtitle: "Design System & Usability",
    description:
      "We craft high-contrast, accessible, responsive design systems and wireframes that prioritize task completion speed and zero visual clutter.",
    deliverables: ["Component Tokens", "High-Fidelity Wireframes", "Mobile-First Layouts"],
  },
  {
    step: "04",
    title: "Development",
    subtitle: "Disciplined Senior Engineering",
    description:
      "We build in transparent sprints. Every line of code adheres to strict TypeScript typing, modular component boundaries, and relational integrity.",
    deliverables: ["Strict TypeScript Codebase", "Weekly Staging Releases", "Documented Code Handover"],
  },
  {
    step: "05",
    title: "QA & Testing",
    subtitle: "Security, Speed & Multi-Device Testing",
    description:
      "We test across desktop and mobile devices, run Core Web Vitals audits, parameterize input security checks, and verify database lookups.",
    deliverables: ["Cross-Device Verification", "Sub-second LCP Audit", "SQL/XSS Vulnerability Checks"],
  },
  {
    step: "06",
    title: "Deployment",
    subtitle: "Zero-Downtime Production Release",
    description:
      "We configure hardened Linux web servers, NGINX reverse proxies, SSL/TLS certificates, and automated daily backup routines for stable launch.",
    deliverables: ["Production Linux Setup", "Full SSL/TLS Encryption", "Automated Backup Pipelines"],
  },
  {
    step: "07",
    title: "Support & Maintenance",
    subtitle: "Long-Term Reliability & Scaling",
    description:
      "We maintain our delivered systems in active production (like JBCE and MHVP), providing regular security updates, uptime monitoring, and feature iteration.",
    deliverables: ["Active Production Support", "Proactive OS Patching", "Direct Founder Escalation"],
  },
];

export function ProcessSection() {
  return (
    <Section variant="surface" spacing="lg" borderBottom>
      <Container>
        <SectionHeading
          eyebrow="ENGINEERING METHODOLOGY"
          title="Predictable 7-Stage Delivery Framework."
          description="A disciplined, transparent engineering process that takes your requirements from initial architectural scoping to long-term production reliability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step, idx) => {
            const isLast = idx === PROCESS_STEPS.length - 1;
            return (
              <FadeUp
                key={step.step}
                delay={0.05 * idx}
                className={isLast ? "md:col-span-2 lg:col-span-3 xl:col-span-1" : ""}
              >
                <div className="p-5 sm:p-6 rounded-xl bg-[#090e1b] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between h-full text-left">
                  <div>
                    <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-white/[0.06]">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-blue-400">
                        {step.step}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        PHASE {step.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <div className="font-mono text-xs text-blue-400 mb-3">{step.subtitle}</div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      KEY DELIVERABLES
                    </div>
                    <ul className="space-y-1 text-xs font-mono text-slate-300">
                      {step.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-blue-400 shrink-0" />
                          <span className="truncate">{item}</span>
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
