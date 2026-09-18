import React from "react";
import Link from "next/link";
import {
  Cpu,
  Globe,
  ShoppingCart,
  Smartphone,
  Server,
  Cloud,
  Layers,
  ArrowRight,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";
import FadeUp from "../animations/FadeUp";

export const SERVICES = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    icon: Cpu,
    tagline: "Intelligent workflows, AI agents, and voice automation systems.",
    items: [
      "Autonomous AI Agents",
      "Enterprise AI Integrations",
      "Voice AI & Telephony",
      "Document Intelligence",
      "Automated Business Workflows",
    ],
    stack: ["OpenAI / Anthropic", "Node.js", "Python", "Twilio", "WebSockets"],
  },
  {
    id: "web-applications",
    title: "Web Applications",
    icon: Globe,
    tagline: "High-performance SaaS platforms, dashboards, and portals.",
    items: [
      "Custom Business Platforms",
      "Complex Admin Systems",
      "Real-Time Analytics Dashboards",
      "SaaS Multi-Tenant MVPs",
      "Edge-Rendered Web Apps",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Systems",
    icon: ShoppingCart,
    tagline: "Sub-second B2B and D2C commerce platforms engineered for conversions.",
    items: [
      "B2B Wholesale Portals",
      "D2C Direct Storefronts",
      "Multi-Gateway Payment Integration",
      "Real-Time Inventory Reservation",
      "Automated Tax & Invoicing Engines",
    ],
    stack: ["Laravel", "MySQL", "Razorpay", "Stripe", "Redis"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    icon: Smartphone,
    tagline: "Native performance iOS and Android applications for operations.",
    items: [
      "Field Operations & Driver Apps",
      "Customer-Facing Mobile Portals",
      "Offline-First Data Sync",
      "Push Notifications & Telemetry",
      "Secure Biometric Auth",
    ],
    stack: ["React Native", "Expo", "REST APIs", "Firebase / FCM"],
  },
  {
    id: "enterprise",
    title: "Enterprise Software",
    icon: Server,
    tagline: "Custom internal tools, role-based workflows, and management systems.",
    items: [
      "Role-Based Access Control (RBAC)",
      "Multi-Department Workflows",
      "Warehouse & Supply Chain Tracking",
      "Audit Logging & Compliance",
      "Legacy System Modernization",
    ],
    stack: ["Laravel", "PostgreSQL", "MySQL", "Docker", "REST APIs"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    tagline: "Resilient infrastructure, automated CI/CD pipelines, and monitoring.",
    items: [
      "Automated CI/CD Pipelines",
      "Cloud Infrastructure Provisioning",
      "Database Optimization & Indexing",
      "Application Performance Monitoring",
      "Security Audits & Hardening",
    ],
    stack: ["AWS", "Docker", "Linux", "Vercel", "GitHub Actions"],
  },
  {
    id: "integrations",
    title: "API & Integrations",
    icon: Layers,
    tagline: "Robust communication layers connecting third-party platforms.",
    items: [
      "RESTful API Engineering",
      "Payment Gateway Architectures",
      "Maps & Geolocation Services",
      "SMS & Communication Webhooks",
      "OAuth 2.0 / JWT Auth Systems",
    ],
    stack: ["REST APIs", "Webhooks", "Razorpay", "Twilio", "Google Maps"],
  },
];

export function ServicesOverviewSection() {
  return (
    <Section spacing="lg" borderBottom>
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="ENGINEERING CAPABILITIES"
            title="End-to-End Software Engineering Services."
            description="From initial architectural planning to production cloud deployment, BRAYON Technologies builds resilient digital products designed for business growth."
            className="mb-0"
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 font-mono transition-colors shrink-0"
          >
            <span>Deep dive into services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <FadeUp key={service.id} delay={0.05 * idx}>
                <Card
                  variant="interactive"
                  padding="md"
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Icon & Category */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Key capabilities */}
                    <ul className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                      {service.items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-blue-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tech stack pills */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                      {service.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default ServicesOverviewSection;
