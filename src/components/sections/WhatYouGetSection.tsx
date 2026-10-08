import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Cpu,
  LayoutDashboard,
  Smartphone,
  Database,
  Cloud,
  FileText,
  GraduationCap,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

interface DeliverableItem {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const DELIVERABLES: DeliverableItem[] = [
  {
    title: "Production-ready software",
    desc: "Clean, thoroughly tested application ready to handle real live users from day one.",
    icon: Cpu,
  },
  {
    title: "Admin panel",
    desc: "Intuitive back-office dashboard to manage users, orders, products, and system settings.",
    icon: LayoutDashboard,
  },
  {
    title: "Responsive interface",
    desc: "Flawless mobile, tablet, and desktop layout optimized for high speed and accessibility.",
    icon: Smartphone,
  },
  {
    title: "Database & API",
    desc: "Normalized, indexed database tables with documented and secure API endpoints.",
    icon: Database,
  },
  {
    title: "Deployment",
    desc: "Zero-downtime production deployment on hardened Linux servers or cloud infrastructure.",
    icon: Cloud,
  },
  {
    title: "Domain / hosting setup assistance",
    desc: "We configure DNS records, SSL certificates, business emails, and hosting environments.",
    icon: CheckCircle2,
  },
  {
    title: "Basic documentation",
    desc: "Easy-to-understand system manual, admin guide, and developer handover documentation.",
    icon: FileText,
  },
  {
    title: "Training",
    desc: "Live walkthrough and video onboarding session so your team can use the software easily.",
    icon: GraduationCap,
  },
  {
    title: "Post-launch support",
    desc: "Dedicated warranty period covering bug fixing, operational guidance, and smooth adoption.",
    icon: LifeBuoy,
  },
];

export function WhatYouGetSection() {
  return (
    <Section spacing="lg" borderBottom className="bg-[#060a15]">
      <Container>
        <SectionHeading
          eyebrow="COMPLETE DELIVERABLES"
          title="When Your Project Goes Live, You Get."
          description="Customer ko feel hota hai ki 'mujhe complete solution milega' — no hidden parts left for you to figure out alone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DELIVERABLES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={0.03 * idx}>
                <div className="p-6 rounded-2xl bg-[#090f1f] border border-white/[0.08] hover:border-emerald-500/40 transition-all flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white flex items-center gap-2">
                      <span>✓ {item.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Action strip */}
        <FadeUp delay={0.25}>
          <div className="mt-10 p-6 rounded-2xl bg-[#0a1224] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300">
              <span className="text-white font-semibold">Everything included.</span> No surprising extra charges for essential deliverables.
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all shrink-0"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default WhatYouGetSection;
