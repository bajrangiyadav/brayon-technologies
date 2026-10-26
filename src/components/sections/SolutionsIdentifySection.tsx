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
  href: string;
}

const SOLUTIONS: SolutionCard[] = [
  {
    title: "Business Management Software",
    icon: Building2,
    description: "Custom operational systems to manage internal workflows, approvals, staff roles, and daily operations in one place.",
    tag: "Operations & Admin",
    href: "/crm-erp-development",
  },
  {
    title: "Inventory & Warehouse Software",
    icon: Package,
    description: "Real-time stock tracking, warehouse management, automated low-stock alerts, and multi-location inventory control.",
    tag: "Supply & Warehousing",
    href: "/crm-erp-development",
  },
  {
    title: "Billing & GST Invoicing",
    icon: Receipt,
    description: "GST-compliant invoicing, automated PDF creation, vendor credit ledgers, and real-time payment reconciliation.",
    tag: "Finance & Invoicing",
    href: "/crm-erp-development",
  },
  {
    title: "Custom CRM & Lead Management",
    icon: Users,
    description: "Capture leads from web & WhatsApp, assign sales agents, track pipeline stages, and accelerate deal closures.",
    tag: "Sales & Pipelines",
    href: "/crm-erp-development",
  },
  {
    title: "E-Commerce Platforms & Storefronts",
    icon: ShoppingCart,
    description: "Custom B2B wholesale portals and D2C online storefronts with sub-second catalog search and secure payment checkout.",
    tag: "Online Stores & B2B",
    href: "/ecommerce-development",
  },
  {
    title: "Institutional & Verification Portals",
    icon: GraduationCap,
    description: "Student admission portals, roll verification engines, examination results, fee tracking, and multi-center controls.",
    tag: "Education & Verification",
    href: "/case-studies/jbce",
  },
  {
    title: "Logistics & Fleet Dispatch",
    icon: Truck,
    description: "Order dispatch tracking, route allocation, delivery agent management, and real-time shipment status updates.",
    tag: "Transport & Dispatch",
    href: "/custom-software-development",
  },
  {
    title: "Mobile Applications (iOS & Android)",
    icon: Smartphone,
    description: "High-performance cross-platform applications built with React Native for field operations and customer engagement.",
    tag: "iOS & Android",
    href: "/mobile-app-development",
  },
  {
    title: "AI Workflows & Automation",
    icon: Bot,
    description: "Automate repetitive business workflows with practical AI: WhatsApp copilots, document parsing, and voice bots.",
    tag: "AI & Smart Bots",
    href: "/brayon-ai",
  },
];

export function SolutionsIdentifySection() {
  return (
    <Section id="solutions" spacing="lg" borderBottom className="bg-[#060913]">
      <Container>
        <SectionHeading
          eyebrow="TAILORED BUSINESS SOFTWARE"
          title="Identify The Software Solution Your Business Needs"
          description="Every business operates differently. Explore targeted digital architectures designed around real operational bottlenecks, workflow automation, and revenue acceleration."
        />

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={0.03 * idx}>
                <Link
                  href={item.href}
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
                    <span>Explore this solution</span>
                    <ArrowRight className="w-4 h-4 text-blue-400 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default SolutionsIdentifySection;
