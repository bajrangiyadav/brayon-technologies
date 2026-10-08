"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  Sparkles,
  Check,
  RotateCcw,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

interface Option {
  label: string;
  price: number;
}

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: "type",
    title: "1. What do you need to build?",
    subtitle: "Select the primary category of your project",
    options: [
      { label: "Business Website", price: 15000 },
      { label: "E-Commerce / Online Store", price: 35000 },
      { label: "Custom Business Software / Portal", price: 75000 },
      { label: "CRM / Multi-Branch ERP", price: 100000 },
      { label: "Mobile App (iOS & Android)", price: 75000 },
    ],
  },
  {
    id: "users",
    title: "2. Who will use the platform?",
    subtitle: "Determine the user access and permissions complexity",
    options: [
      { label: "Single Admin / Internal Staff", price: 0 },
      { label: "Multi-Role (Admins + Branch Managers + Customers)", price: 20000 },
      { label: "High-Traffic Public Users (Thousands of Visitors)", price: 35000 },
    ],
  },
  {
    id: "integrations",
    title: "3. Required integrations & automation?",
    subtitle: "Payment gateways, WhatsApp bots, SMS, or external APIs",
    options: [
      { label: "Basic (Email inquiries + Contact Forms)", price: 0 },
      { label: "Payment Gateway + Invoicing (Razorpay/Stripe)", price: 15000 },
      { label: "Full Automation (Payment + WhatsApp Bot + Cloud Backups)", price: 30000 },
    ],
  },
  {
    id: "timeline",
    title: "4. Target launch timeline?",
    subtitle: "Select your preferred delivery speed",
    options: [
      { label: "Standard Sprint (3–6 Weeks)", price: 0 },
      { label: "Express MVP Delivery (Under 3 Weeks)", price: 20000 },
      { label: "Flexible Roadmap / Phased Rollout", price: 0 },
    ],
  },
];

export function ProjectCostEstimator() {
  const [selections, setSelections] = useState<Record<string, number>>({
    type: 0,
    users: 0,
    integrations: 1,
    timeline: 0,
  });

  const selectOption = (questionId: string, optionIndex: number) => {
    setSelections((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  // Calculate Base + Addons
  const selectedTypeOption = QUESTIONS[0].options[selections.type || 0];
  const selectedUsersOption = QUESTIONS[1].options[selections.users || 0];
  const selectedIntegOption = QUESTIONS[2].options[selections.integrations || 0];
  const selectedTimelineOption = QUESTIONS[3].options[selections.timeline || 0];

  const estimatedMin =
    selectedTypeOption.price +
    selectedUsersOption.price +
    selectedIntegOption.price +
    selectedTimelineOption.price;

  const estimatedMax = Math.round(estimatedMin * 1.35);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <Section spacing="lg" borderBottom className="bg-[#050811]">
      <Container>
        <SectionHeading
          eyebrow="INSTANT COST ESTIMATOR"
          title="Estimate Your Project Cost in 4 Clicks."
          description="Aapko kitna budget prepare karna chahiye? Select your project needs below to get an instant ballpark range with zero waiting."
        />

        <div className="max-w-4xl mx-auto rounded-3xl bg-[#090f1d] border border-white/[0.08] p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 4 Questions */}
            <div className="lg:col-span-7 space-y-6">
              {QUESTIONS.map((q) => (
                <div key={q.id} className="space-y-2 text-left">
                  <div className="text-sm font-semibold text-white">
                    {q.title}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {q.subtitle}
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = (selections[q.id] ?? 0) === optIdx;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => selectOption(q.id, optIdx)}
                          className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "bg-blue-600/20 border-blue-500 text-white shadow-sm ring-1 ring-blue-500"
                              : "bg-[#060a14] border-white/[0.08] text-slate-300 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? "border-blue-400 bg-blue-500" : "border-white/30"
                              }`}
                            >
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                            <span>{opt.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Real-Time Calculated Estimate Card */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0e172e] via-[#091122] to-[#070d1a] border border-blue-500/30 text-left shadow-2xl space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ESTIMATED BALLPARK</span>
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setSelections({ type: 0, users: 0, integrations: 1, timeline: 0 })
                    }
                    className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1">
                    Approximate Cost Range:
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-blue-300">
                    {formatCurrency(estimatedMin)} – {formatCurrency(estimatedMax)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Based on typical development sprint hours &amp; deliverables.
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/[0.08] text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Source Code &amp; IP Transfer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Dedicated Staging Demos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Post-Launch Bug Warranty</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?interest=${encodeURIComponent(
                      selectedTypeOption.label
                    )}&budget=${encodeURIComponent(
                      `${formatCurrency(estimatedMin)} - ${formatCurrency(estimatedMax)}`
                    )}`}
                    className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Lock In This Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-[11px] font-mono text-slate-500 text-center mt-2.5">
                    No advance commitment required to explore scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ProjectCostEstimator;
