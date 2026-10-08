import React from "react";
import Link from "next/link";
import {
  Building2,
  Package,
  Receipt,
  Users,
  ShoppingCart,
  GraduationCap,
  Truck,
  Smartphone,
  Bot,
  ArrowRight,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

interface SolutionCard {
  title: string;
  icon: React.ElementType;
  description: string;
  badge?: string;
  tag: string;
}

const SOLUTIONS: SolutionCard[] = [
  {
    title: "Business Management Software",
    icon: Building2,
    description: "Custom operational systems to manage internal workflows, approvals, staff roles, and daily operations in one place.",
    tag: "Operations & Admin",
  },
  {
    title: "Inventory / Stock Software",
    icon: Package,
    description: "Real-time stock tracking, warehouse management, automated low-stock alerts, and multi-location inventory control.",
    tag: "Supply & Warehousing",
  },
  {
    title: "Billing & Accounting",
    icon: Receipt,
    description: "GST-compliant invoicing, payment tracking, vendor ledgers, quotations, and automated financial reports.",
    tag: "Finance & Invoicing",
  },
  {
    title: "CRM / Lead Management",
    icon: Users,
    description: "Capture leads from web/WhatsApp, assign sales agents, track follow-ups, and convert prospects faster.",
    tag: "Sales & Pipelines",
  },
  {
    title: "E-commerce Platform",
    icon: ShoppingCart,
    description: "Custom B2B wholesale portals and B2C online stores with catalog management, cart, and payment gateway integration.",
    tag: "Online Stores & B2B",
  },
  {
    title: "School / College Management",
    icon: GraduationCap,
    description: "Student admission portals, roll verification, examination results, fee tracking, and multi-center branch controls.",
    tag: "Education Portals",
  },
  {
    title: "Logistics & Delivery",
    icon: Truck,
    description: "Order dispatch tracking, route allocation, delivery agent management, and real-time status updates.",
    tag: "Transport & Dispatch",
  },
  {
    title: "Mobile App",
    icon: Smartphone,
    description: "High-performance iOS & Android applications for your customers, field agents, or internal workforce.",
    tag: "iOS & Android",
  },
  {
    title: "AI Automation",
    icon: Bot,
    description: "Automate repetitive customer support with WhatsApp bots, AI document parsing, and voice/data workflows.",
    tag: "AI & Smart Bots",
  },
];

export function SolutionsIdentifySection() {
  return (
    <Section spacing="lg" borderBottom className="bg-[#060913]">
      <Container>
        <SectionHeading
          eyebrow="TAILORED BUSINESS SOFTWARE"
          title="Aapko kis type ka software chahiye?"
          description="Customer ko services ki list se zyada apni business problem identify karni hai. Select what matches your exact requirement."
        />

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={0.03 * idx}>
                <Link
                  href={`/contact?interest=${encodeURIComponent(item.title)}`}
                  className="group h-full p-6 rounded-2xl bg-[#090e1b] border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0c1426] transition-all flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:bg-blue-600/25 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white">
                    <span>Discuss this solution</span>
                    <ArrowRight className="w-4 h-4 text-blue-400 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>

        {/* Guided CTA Banner */}
        <FadeUp delay={0.25}>
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#0d172e] to-blue-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
                CONFUSED BETWEEN OFF-THE-SHELF VS CUSTOM?
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white">
                Not sure what you need?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Tell us about your business workflow → We&apos;ll suggest the right architecture and cost-effective approach.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all shrink-0"
            >
              <span>Get Free Solution Advice</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default SolutionsIdentifySection;
