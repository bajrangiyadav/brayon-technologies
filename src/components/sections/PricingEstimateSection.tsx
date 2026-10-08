import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import FadeUp from "../animations/FadeUp";

interface PricingTier {
  title: string;
  category: string;
  price: string;
  popular?: boolean;
  description: string;
  features: string[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    title: "Business Website",
    category: "Corporate & Brand Presence",
    price: "₹15,000+",
    description: "Modern, responsive, high-speed website for businesses looking to showcase services & capture inquiries.",
    features: [
      "Custom responsive design (Mobile + Desktop)",
      "Lead generation & inquiry forms",
      "Fast loading speed & SEO basics",
      "Domain & hosting configuration help",
      "WhatsApp & call click-to-chat integration",
    ],
  },
  {
    title: "E-commerce Platform",
    category: "Online Store & B2B Ordering",
    price: "₹35,000+",
    popular: true,
    description: "Sell products online with cart, payment gateway, inventory view, and full administration dashboard.",
    features: [
      "Product catalog & category management",
      "Shopping cart & checkout funnel",
      "Razorpay / Cashfree payment gateway",
      "Order status & tracking dashboard",
      "Admin panel for product & price updates",
    ],
  },
  {
    title: "Custom Software",
    category: "Bespoke Business Workflows",
    price: "₹75,000+",
    description: "Software tailored strictly around your daily business operations, records, and staff management.",
    features: [
      "Tailored operational database architecture",
      "Role-based multi-user access (Admin/Staff)",
      "Daily reports, ledgers & analytics",
      "Automated notifications (Email / WhatsApp)",
      "100% source code & database ownership",
    ],
  },
  {
    title: "CRM / ERP Systems",
    category: "Enterprise Operational Backbone",
    price: "₹1,00,000+",
    description: "Complete management engine handling leads, customer lifecycle, billing, inventory, and branch operations.",
    features: [
      "Multi-branch & franchise controls",
      "Complete inventory & vendor ledgers",
      "Automated GST invoicing & billing",
      "Lead scoring, assignment & pipelines",
      "Dedicated staging, training & warranty support",
    ],
  },
  {
    title: "Mobile App",
    category: "Android & iOS Applications",
    price: "₹75,000+",
    description: "Native-feel cross-platform mobile apps for customer ordering, field staff, or internal team operations.",
    features: [
      "Android & iOS cross-platform codebase",
      "Push notifications & offline support",
      "Secure API backend & auth sync",
      "Play Store / App Store release assistance",
      "Post-launch bug fix & maintenance warranty",
    ],
  },
];

export function PricingEstimateSection() {
  return (
    <Section spacing="lg" borderBottom className="bg-[#050811]">
      <Container>
        <SectionHeading
          eyebrow="TRANSPARENT PRICING"
          title="Clear Starting Range. Zero Hidden Surprises."
          description="Exact price har project ka requirement par depend karta hai, but we believe in 100% transparency so you can plan your budget realistically."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {PRICING_TIERS.map((tier, idx) => (
            <FadeUp key={tier.title} delay={0.05 * idx}>
              <div
                className={`h-full p-5 rounded-2xl flex flex-col justify-between text-left transition-all relative ${
                  tier.popular
                    ? "bg-[#0b1429] border-2 border-blue-500 shadow-xl shadow-blue-950/30"
                    : "bg-[#080d1a] border border-white/[0.08] hover:border-white/[0.2]"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-blue-500 text-white uppercase tracking-wider">
                    Most Requested
                  </span>
                )}

                <div>
                  <div className="text-[11px] font-mono text-slate-400 mb-1">
                    {tier.category}
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">
                    {tier.title}
                  </h3>

                  <div className="pb-4 mb-4 border-b border-white/[0.08]">
                    <div className="text-[11px] font-mono text-slate-400">Starting From</div>
                    <div className="text-2xl font-bold font-mono text-white text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
                      {tier.price}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {tier.description}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <Link
                    href={`/contact?interest=${encodeURIComponent(tier.title)}`}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      tier.popular
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : "bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white"
                    }`}
                  >
                    <span>Get Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Reassurance Banner */}
        <FadeUp delay={0.25}>
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Every project is quoted with a fixed milestone schedule based on your actual requirements.
              </span>
            </div>
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 underline underline-offset-4"
            >
              <span>Share requirements for exact quote</span>
              <span>→</span>
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default PricingEstimateSection;
