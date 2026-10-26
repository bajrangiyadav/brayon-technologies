"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What are your payment terms? (Advance vs Milestones)",
    answer:
      "We follow a transparent, milestone-based payment structure: typically 30% upon project kickoff, 40% upon staging demo and core feature completion, and the remaining 30% upon final production deployment, staff walkthrough, and complete source code handover. No hidden fees or surprise invoices.",
  },
  {
    question: "How many revisions or scope adjustments are included?",
    answer:
      "Every milestone stage (architecture wireframes, core functionality, and staging deployment) includes structured review rounds. We refine and iterate until the delivered module matches the agreed specification. Post-launch warranty support is included to resolve any bugs.",
  },
  {
    question: "Who provides hosting, servers, and domain setup?",
    answer:
      "You retain direct ownership of your hosting and domain accounts. We assist with full server provisioning and architecture on your preferred provider (AWS, DigitalOcean, Hetzner, Hostinger, or Vercel). All accounts remain registered under your organization's credentials.",
  },
  {
    question: "How do maintenance and post-launch support work?",
    answer:
      "Every project includes a dedicated post-launch warranty covering bug fixes and operational guidance. Following the warranty period, we offer proactive monthly SLA retainers covering security updates, server monitoring, database backups, and new feature development.",
  },
  {
    question: "How does source code ownership transfer work?",
    answer:
      "Upon final milestone settlement, 100% of the private Git repositories, cloud deployment credentials, database scripts, and administrative access are officially transferred to your organization. You own all intellectual property outright with zero vendor lock-in.",
  },
  {
    question: "How much does custom software cost?",
    answer:
      "Cost depends strictly on complexity and feature scope. A focused business website starts from ₹15,000+, an e-commerce platform from ₹35,000+, custom operational software from ₹75,000+, and complex CRM/ERP platforms from ₹1,00,000+. We provide a fixed, milestone-based quote after reviewing your requirements with zero hidden surprises.",
  },
  {
    question: "How long does development take?",
    answer:
      "A standard business portal or MVP typically takes 2 to 4 weeks. Full custom software or multi-role CRM/ERP systems generally require 4 to 8 weeks. We divide the timeline into structured milestones with working sprint demos every week.",
  },
  {
    question: "Can you improve my existing software or migrate legacy systems?",
    answer:
      "Yes. If your current software is slow, outdated, has unresolved bugs, or lacks mobile responsiveness, we can audit the codebase, fix operational bottlenecks, and add modern modules without breaking your existing database. We migrate legacy data safely with zero data loss.",
  },
  {
    question: "Can I start with a small version (MVP) and add features later?",
    answer:
      "Yes, and we strongly recommend this! Starting with core daily operations allows you to go live quickly, validate workflows with your team or customers, and then add advanced automations in Phase 2 based on real user feedback.",
  },
];

export function SoftwareFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section spacing="lg" borderBottom className="bg-[#060913]">
      <Container>
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Questions Business Owners Ask Us."
          description="Straightforward answers to the most common questions about pricing, timelines, source code ownership, and post-launch support."
        />

        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeUp key={faq.question} delay={0.03 * idx}>
                <div
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? "bg-[#0c1426] border-blue-500/40 shadow-lg shadow-blue-950/20"
                      : "bg-[#080e1b] border-white/[0.08] hover:border-white/[0.2]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg border border-white/[0.08] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-blue-600/20 text-blue-400 border-blue-500/40" : "text-slate-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.05] pt-4 text-left">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <FadeUp delay={0.3}>
          <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-semibold text-white">
                Have a specific requirement not covered here?
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Speak directly with solutions architect Bajrangi Yadav for technical clarity.
              </div>
            </div>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-medium transition-colors shrink-0"
            >
              Ask Us Directly &rarr;
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default SoftwareFAQSection;
