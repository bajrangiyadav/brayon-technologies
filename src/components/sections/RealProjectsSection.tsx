import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

interface ProjectCardData {
  title: string;
  category: string;
  slug: string;
  badge?: string;
  liveUrl?: string;
  features: string[];
  impact: string;
}

const FEATURED_PROJECTS: ProjectCardData[] = [
  {
    title: "SafeGrowTrade",
    category: "E-commerce & Wholesale Platform",
    slug: "safegrowtrade",
    liveUrl: "https://safegrowtrade.com",
    badge: "Live & Active",
    features: [
      "Product Management & Cataloging",
      "Wholesale Tiered Pricing",
      "Order Management & Tracking",
      "Online Payment Gateway Integration",
      "Comprehensive Admin Control Panel",
    ],
    impact: "Centralized order processing and B2B pricing, cutting 15+ hours weekly manual effort.",
  },
  {
    title: "Ashapura Dry Fruits",
    category: "D2C Food & Retail Ordering",
    slug: "ashapura-dry-fruits",
    badge: "Delivered",
    features: [
      "Dynamic Product Weights (250g/500g/1kg)",
      "Festive Gift Hamper Customizer",
      "Automated Packing Slips & Dispatches",
      "Integrated Digital UPI & Card Checkout",
      "Stock Alerts & Inventory Tracking",
    ],
    impact: "Processed 3x higher volume during peak festive seasons with zero inventory mismatch.",
  },
  {
    title: "Jay Balaji Computer Education (JBCE)",
    category: "Student Verification & Institute Portal",
    slug: "jbce",
    liveUrl: "https://jbce.in/",
    badge: "Live Production",
    features: [
      "Online Roll-Number Verification Engine",
      "Student Admission & Inquiry Funnels",
      "Multi-Branch Center Administration",
      "Centralized IT Course Catalog",
      "Automated Certificate Generation",
    ],
    impact: "Serving thousands of student lookups with 100% digital verification preventing certificate fraud.",
  },
  {
    title: "Mumbai Hindi Vidyapeeth (MHVP)",
    category: "Examination & Result System",
    slug: "mhvp",
    liveUrl: "https://mhvp.org/",
    badge: "Live Production",
    features: [
      "High-Concurrency Student Result Query Engine",
      "Multi-Center Examination Administration",
      "Central Admin & Center Login Portals",
      "Pariksha Panchang (Calendar) Distribution",
      "Bilingual Institutional Web Experience",
    ],
    impact: "Flawless zero-downtime execution during annual result announcement traffic surges.",
  },
  {
    title: "DriveZone",
    category: "Automotive Service & Booking Portal",
    slug: "drivezone",
    badge: "Delivered",
    features: [
      "Workshop Bay Allocation Calendar",
      "Digital Inspection Job Cards",
      "Real-Time Vehicle Repair Status Tracker",
      "Parts Inventory Auto-Deduction",
      "Automated Service & Due Reminders",
    ],
    impact: "Eliminated workshop booking clashes and reduced check-in turnaround by 40%.",
  },
  {
    title: "HR SaaS & Team Workforce Platform",
    category: "B2B SaaS HR & Payroll",
    slug: "hr-saas",
    badge: "Delivered",
    features: [
      "Employee Directory & Profile Records",
      "Leave Request & Multi-Level Approval Flow",
      "Automated Monthly Payroll Calculation",
      "Batch PDF Payslip Generation",
      "Role-Based Access for Admins & Employees",
    ],
    impact: "Reduced monthly salary calculation and compliance time from 2 days to under 15 minutes.",
  },
];

export function RealProjectsSection() {
  return (
    <Section spacing="lg" borderBottom className="bg-[#050811]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="PROVEN DELIVERIES"
            title="Projects We've Built."
            description="Real systems built for real operations — no fake client logos or fictional case studies. Here is software we have actually architected, built, and deployed."
            className="mb-0"
          />
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 font-mono transition-colors shrink-0"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <FadeUp key={proj.title} delay={0.04 * idx}>
              <div className="group h-full p-6 sm:p-7 rounded-2xl bg-[#090e1b] border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0c1426] transition-all flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-blue-400 font-medium">
                      {proj.category}
                    </span>
                    {proj.badge && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {proj.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3 flex items-center justify-between">
                    <span>{proj.title}</span>
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="Visit Live Platform"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </h3>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-5">
                    {proj.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] text-[11px] text-slate-300 mb-6 leading-relaxed">
                    <span className="text-slate-400 font-mono block text-[10px] uppercase mb-0.5">
                      Business Outcome:
                    </span>
                    {proj.impact}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-blue-400 group-hover:text-blue-300">
                  <Link
                    href={`/case-studies/${proj.slug}`}
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-200 text-[11px] font-mono"
                    >
                      Visit Live ↗
                    </a>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default RealProjectsSection;
