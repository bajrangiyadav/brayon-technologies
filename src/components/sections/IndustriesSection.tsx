import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Truck,
  Landmark,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import FadeUp from "../animations/FadeUp";

interface IndustryItem {
  id: string;
  name: string;
  slug: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  solutions: string[];
  tag: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "education",
    name: "Education & EdTech",
    slug: "education",
    icon: GraduationCap,
    tagline: "Student lifecycle, multi-center exam systems & instant verification",
    description:
      "Public verification engines, student enrollment workflows, franchise center administration, and high-concurrency exam result publishing.",
    solutions: [
      "Online Student Certification Verification (100% fraud-proof)",
      "Multi-Center Examination & Result Publishing Engine",
      "Branch & Franchise Administration Portals",
    ],
    tag: "Proven Production Case Studies",
  },
  {
    id: "retail-ecommerce",
    name: "Retail & E-commerce",
    slug: "retail-ecommerce",
    icon: ShoppingCart,
    tagline: "High-volume wholesale trade portals & D2C storefronts",
    description:
      "Decoupled fast-loading commerce architectures, dynamic weight-based packaging, wholesale pricing tiers, and automated multi-branch inventory sync.",
    solutions: [
      "Sub-Second Headless Commerce & Instant Search",
      "B2B Wholesale Tier Pricing & Buyer Portals",
      "Payment Gateway Integration & Automated GST Invoicing",
    ],
    tag: "Transactional Trade Systems",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    slug: "healthcare",
    icon: HeartPulse,
    tagline: "Appointment booking, diagnostic records & patient privacy",
    description:
      "Secure patient appointment workflows, doctor consultation schedules, digital diagnostic records, and encrypted operational backoffices.",
    solutions: [
      "Doctor Appointment Scheduling & Bay Allocation",
      "Encrypted Patient Records & Audit Trail Logging",
      "Telehealth Consultation & Automated SMS Reminders",
    ],
    tag: "Privacy & Compliance",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    slug: "logistics",
    icon: Truck,
    tagline: "Fleet management, dispatch tracking & warehouse operations",
    description:
      "Real-time driver dispatch tracking, barcode-enabled warehouse picking, route planning, and multi-location inventory reconciliation.",
    solutions: [
      "Real-Time Vehicle Tracking & Route Allocation",
      "Barcode/QR Warehouse Bin Management & FIFO Picking",
      "Automated Proof of Delivery & Digital Waybills",
    ],
    tag: "Fleet & Inventory",
  },
  {
    id: "finance",
    name: "Finance & Professional Services",
    slug: "finance",
    icon: Landmark,
    tagline: "Client billing portals, GST accounting & automated ledgers",
    description:
      "Eliminate Excel friction with secure client portals, automated GST invoice dispatch, recurring billing, and immutable transaction histories.",
    solutions: [
      "GST-Compliant Automated Invoicing & PDF Billing",
      "Multi-Role Financial Approvals & Accounting Ledgers",
      "Secure Document Sharing & Client Portals",
    ],
    tag: "Fintech & Invoicing",
  },
  {
    id: "startups",
    name: "Startups & Growing Enterprises",
    slug: "startups",
    icon: Rocket,
    tagline: "Investor-ready MVPs & scalable multi-tenant SaaS products",
    description:
      "Turn product concepts into production MVPs in 30 days. Scalable cloud architectures built with Next.js, TypeScript, and 100% intellectual property transfer.",
    solutions: [
      "30-Day Agile MVP Engineering & Deployment",
      "Multi-Tenant SaaS Architecture with Stripe/Razorpay",
      "100% Private Repository & Cloud Transfer",
    ],
    tag: "High-Speed Execution",
  },
];

export function IndustriesSection() {
  return (
    <Section id="industries" spacing="xl" borderBottom className="bg-[#050812] relative overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <FadeUp delay={0.05}>
            <Eyebrow>DOMAIN EXPERTISE</Eyebrow>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Technology For Every Business Ambition.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Every industry has distinct regulatory requirements, operational models, and customer workflows. We build software shaped directly by your domain realities.
            </p>
          </FadeUp>
        </div>

        {/* Sophisticated Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <FadeUp key={industry.id} delay={0.05 * (idx + 1)}>
                <div className="group h-full p-8 rounded-2xl bg-[#0a0f20] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between text-left hover:shadow-xl hover:shadow-blue-950/20">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:scale-105 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 group-hover:text-blue-400 transition-colors">
                        {industry.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      {industry.name}
                    </h3>
                    <div className="text-xs font-mono text-blue-400 mb-4 font-medium">
                      {industry.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {industry.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                      {industry.solutions.map((sol) => (
                        <div key={sol} className="flex items-start gap-2 text-xs text-slate-300 font-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore Domain</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] font-mono text-slate-500">Tailored Architecture</span>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Bottom Industry Index Link */}
        <FadeUp delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              <span>View all supported industries and operational blueprints &rarr;</span>
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default IndustriesSection;