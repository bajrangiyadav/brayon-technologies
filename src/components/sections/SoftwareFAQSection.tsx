"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
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
    question: "Payment terms kya hain? (Advance vs Milestones)",
    answer:
      "Hum transparent milestone-based payment follow karte hain. Typically: 30% project kickoff par, 40% core features aur staging review par, aur final 30% production deployment, training aur complete code handover ke waqt. Koi hidden ya surprise charge nahi hota.",
  },
  {
    question: "Revisions kitne milenge?",
    answer:
      "Har milestone stage (UI wireframes, core functionality, aur launch staging) par aapko revisions aur changes milte hain. Jab tak delivered milestone approved scope se match nahi karta, hum refine karte hain. Launch ke baad bhi warranty support include rehta hai.",
  },
  {
    question: "Hosting aur domain kaun provide karega?",
    answer:
      "Aap apna domain aur hosting account rakh sakte hain, ya hum aapke liye setup karwa dete hain (AWS, DigitalOcean, Hostinger, etc.). Sab accounts aapke khud ke card aur email par register hote hain taaki ownership hamesha aapke paas rahe.",
  },
  {
    question: "Maintenance charges kitne hote hain?",
    answer:
      "Har project ke saath free post-launch support and bug warranty include hoti hai. Uske baad agar aapko monthly ongoing technical updates, server security monitoring, aur nayi feature development chahiye, to hamare low-cost monthly retainer packages available hain.",
  },
  {
    question: "Source code ownership kaise transfer hota hai?",
    answer:
      "Final settlement ke saath hi complete GitHub/GitLab private repository ownership, production server credentials, database migration scripts, aur admin passwords aapke email par officially transfer kar diye jaate hain. 100% intellectual property aapki rehti hai.",
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
    question: "Can you improve my existing software or migrate old .NET/PHP?",
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
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle
                        className={`w-5 h-5 shrink-0 ${
                          isOpen ? "text-blue-400" : "text-slate-500"
                        }`}
                      />
                      <span className="text-base sm:text-lg font-semibold text-white">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <FadeUp delay={0.25}>
          <div className="mt-10 text-center">
            <p className="text-xs sm:text-sm text-slate-400">
              Have a specific question about your project?{" "}
              <Link
                href="/contact"
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 inline-flex items-center gap-1"
              >
                <span>Ask our solutions architect directly</span>
                <MessageSquare className="w-3.5 h-3.5" />
              </Link>
            </p>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default SoftwareFAQSection;
