import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";
import Button from "@/components/common/Button";
import FadeUp from "@/components/animations/FadeUp";
import {
  Cpu,
  Globe,
  ShoppingCart,
  Smartphone,
  Server,
  Cloud,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & Software Development Services | BRAYON Technologies",
  description:
    "Explore BRAYON Technologies' software engineering services: AI & Automation, Web Applications, E-Commerce, Mobile Apps, Enterprise Systems, Cloud & DevOps, and API Integrations.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Engineering & Software Development Services | BRAYON Technologies",
    description:
      "Production-ready web applications, AI automation, and scalable cloud architectures engineered with senior discipline.",
    url: "https://brayontech.com/services",
  },
};

const DETAILED_SERVICES = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    icon: Cpu,
    category: "INTELLIGENCE & WORKFLOWS",
    description:
      "We design and deploy practical AI solutions that automate high-friction operational workflows, parse complex unstructured documents, and handle conversational voice inquiries.",
    capabilities: [
      "Autonomous AI agents with tool-calling capabilities",
      "Custom LLM API integrations and fine-tuned system prompts",
      "Real-time voice AI bots with Twilio and WebSocket streaming",
      "Intelligent document extraction and structured parsing",
      "Event-driven business automation pipelines",
      "Automated customer support routing and triage",
    ],
    techStack: ["OpenAI / Anthropic", "Node.js", "Python", "Twilio", "WebSockets", "MongoDB"],
  },
  {
    id: "web-applications",
    title: "Web Applications",
    icon: Globe,
    category: "FULL-STACK PLATFORMS",
    description:
      "We engineer responsive, sub-second web platforms and multi-tenant SaaS products using modern server components, strict typing, and optimized caching.",
    capabilities: [
      "Custom business portals and transactional platforms",
      "High-density administrative backoffices and consoles",
      "Real-time analytics and telemetry dashboards",
      "SaaS MVPs engineered for rapid customer validation",
      "Edge-rendered architectures with 95+ Core Web Vitals",
      "Role-based authentication with granular permissions",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Systems",
    icon: ShoppingCart,
    category: "TRANSACTIONAL COMMERCE",
    description:
      "We construct high-conversion commerce infrastructure for wholesale (B2B) and direct-to-consumer (D2C) brands, supporting high order concurrency with zero inventory overselling.",
    capabilities: [
      "B2B commodity trading and bulk wholesale portals",
      "High-speed D2C storefronts with instant variant switching",
      "Payment gateway architectures (Razorpay, Stripe, NetBanking)",
      "Real-time inventory reservation and lock management",
      "Automated tax calculation, invoice dispatch, and shipping tracking",
      "Custom discount matrices and tiered pricing structures",
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Redis", "Razorpay API", "Tailwind CSS"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    icon: Smartphone,
    category: "CROSS-PLATFORM MOBILE",
    description:
      "We build native-performance iOS and Android applications tailored for field operations, on-demand driver dispatch, and customer mobile portals.",
    capabilities: [
      "Real-time driver dispatch and mobility platforms",
      "Customer-facing mobile storefronts and booking flows",
      "Biometric security and persistent offline cache sync",
      "Push notification systems via Firebase Cloud Messaging",
      "Integrated map routing and live GPS location tracking",
      "Modular design systems shared across platforms",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Firebase / FCM", "Google Maps SDK"],
  },
  {
    id: "enterprise",
    title: "Enterprise Software",
    icon: Server,
    category: "SYSTEMS & GOVERNANCE",
    description:
      "We replace fragile spreadsheets and disjointed tools with tailored enterprise platforms engineered for multi-department workflows, data governance, and role security.",
    capabilities: [
      "Role-Based Access Control (RBAC) with audit logs",
      "Multi-branch and multi-warehouse operational software",
      "Custom internal workflow and approval engines",
      "Automated financial reconciliation and reporting",
      "Legacy system modernization and data migration",
      "Enterprise database schema design and optimization",
    ],
    techStack: ["Laravel", "PostgreSQL", "MySQL", "Docker", "REST APIs", "Redis"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    category: "INFRASTRUCTURE & RELIABILITY",
    description:
      "We architect secure, scalable cloud environments with automated continuous deployment pipelines, active server telemetry, and rock-solid uptime guarantees.",
    capabilities: [
      "Automated zero-downtime CI/CD deployment pipelines",
      "AWS / Linux server configuration and hardening",
      "Database indexing, connection pooling, and replication",
      "Real-time application performance monitoring (APM)",
      "Automated daily encrypted database backups",
      "SSL, CORS, and security header compliance",
    ],
    techStack: ["AWS (EC2, RDS, S3)", "Docker", "Linux", "GitHub Actions", "Vercel"],
  },
  {
    id: "integrations",
    title: "API & Integrations",
    icon: Layers,
    category: "CONNECTIVITY & PROTOCOLS",
    description:
      "We construct resilient RESTful APIs, webhook receivers, and third-party communication bridges designed with strict validation and idempotent request processing.",
    capabilities: [
      "RESTful API design with comprehensive OpenAPI documentation",
      "Payment gateway integrations with automated webhook verification",
      "Mapping, geocoding, and routing services integration",
      "Transactional email, SMS, and WhatsApp messaging gateways",
      "OAuth 2.0, JWT, and API key management layers",
      "Asynchronous webhook dispatchers and dead-letter queues",
    ],
    techStack: ["REST APIs", "Webhooks", "Razorpay", "Twilio", "Google Maps API", "Sanctum"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Header */}
        <section className="py-16 md:py-24 border-b border-white/[0.08] relative">
          <Container>
            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>BRAYON TECHNOLOGIES · ENGINEERING SERVICES</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  Comprehensive Software Engineering Capabilities.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  We specialize in building scalable digital products, high-throughput backend systems, and AI automation engines. Every service is delivered with direct senior engineering oversight and 100% code ownership.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Detailed Service Blocks */}
        <Section spacing="lg">
          <Container>
            <div className="space-y-12">
              {DETAILED_SERVICES.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="p-8 sm:p-10 rounded-3xl bg-[#0d1322] border border-white/[0.08] scroll-mt-28"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      {/* Left: Summary */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                        </div>

                        <div className="text-xs font-mono tracking-wider uppercase text-blue-400">
                          {service.category}
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                          {service.title}
                        </h2>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="pt-4">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                            PRIMARY TECHNOLOGIES
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button
                            variant="primary"
                            size="sm"
                            href="/contact"
                            iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                          >
                            Inquire About {service.title}
                          </Button>
                        </div>
                      </div>

                      {/* Right: Core Capabilities Checklist */}
                      <div className="lg:col-span-7 bg-[#090e1b] rounded-2xl p-6 sm:p-8 border border-white/[0.06] flex flex-col justify-between">
                        <div>
                          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-5">
                            ENGINEERING CAPABILITIES & DELIVERABLES
                          </h3>
                          <ul className="space-y-3.5">
                            {service.capabilities.map((cap) => (
                              <li key={cap} className="flex items-start gap-3 text-sm text-slate-200">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                          <span>CODE OWNERSHIP: 100% INCLUDED</span>
                          <span>PRODUCTION READY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Bottom CTA */}
        <Section variant="surface" spacing="lg">
          <Container>
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Need a Custom Architectural Assessment?
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Share your requirements, existing stack, or target timeline. We will provide a direct technical evaluation with recommended architecture.
              </p>
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
