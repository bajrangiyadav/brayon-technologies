import { Industry } from "@/types/industry";

export const industries: Industry[] = [
  {
    id: "education",
    slug: "education",
    name: "Education & EdTech",
    description:
      "Student lifecycle platforms, institutional portals, multi-center examination administration, and instant certificate verification engines.",
    capabilities: [
      "Online Student Certification & Roll Number Verification",
      "Multi-Center Examination Scheduling & Result Publishing",
      "Branch & Franchise Center Management Portals",
      "Dynamic Course Catalog & Syllabus Dissemination",
      "Student Inquiry Routing & Automated Admission Workflows",
    ],
    caseStudyIds: ["jbce", "mhvp"],
    hasDirectExperience: true,
    featured: true,
  },
  {
    id: "ecommerce-retail",
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    description:
      "Digital commerce platforms, wholesale systems, product catalogues, payments, orders and customer checkout experiences.",
    capabilities: [
      "B2B Wholesale Portals & Commodity Trading",
      "D2C Direct Storefronts with Sub-Second Filtering",
      "Razorpay & Multi-Mode Payment Gateways",
      "Real-Time Inventory Reservation & Stock Tracking",
      "Automated Tax Calculation & GST Invoicing",
    ],
    caseStudyIds: [],
    hasDirectExperience: false,
    featured: false,
  },
  {
    id: "logistics-mobility",
    slug: "logistics-mobility",
    name: "Logistics & Mobility",
    description:
      "Driver dispatch platforms, fleet management, real-time routing, handover documentation, and automated trip dispatching.",
    capabilities: [
      "On-Demand Driver Dispatch & OTP Verification",
      "Google Maps Geocoding & Distance Matrix",
      "Real-Time WebSocket State Synchronization",
      "Digital Handover Inspection & PDF Generation",
      "Cross-Platform Push Notifications via FCM",
    ],
    caseStudyIds: [],
    hasDirectExperience: false,
    featured: false,
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    name: "AI & Automation",
    description:
      "Voice automation, conversational lead qualification, media transformation pipelines, and event-driven enterprise workflows.",
    capabilities: [
      "Twilio Media Stream Voice Automation",
      "Autonomous Lead Qualification & CRM Ingest",
      "Automated Video Processing & Metadata Tagging",
      "Full-Duplex Audio Stream Handling",
      "Secure API Bridge Engineering",
    ],
    caseStudyIds: [],
    hasDirectExperience: false,
    featured: false,
  },
  {
    id: "startups-digital",
    slug: "startups-digital",
    name: "Startups & Digital Businesses",
    description:
      "Technology solutions adaptable to your business requirements. High-speed MVP delivery, scalable serverless architectures, and investor-ready prototypes.",
    capabilities: [
      "Rapid Full-Stack MVP Engineering",
      "Multi-Tenant SaaS Architecture",
      "Role-Based Authentication & Permissions",
      "Staged Staging Environments & Demos",
    ],
    caseStudyIds: [],
    hasDirectExperience: false,
    featured: false,
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    description:
      "Technology solutions adaptable to your business requirements. Secure appointment portals, patient record synchronization, and audit logging.",
    capabilities: [
      "Strict Data Privacy & HIPAA-Aware Patterns",
      "Telehealth Scheduling & Calendar Sync",
      "Document Digitization & Diagnostic Logs",
      "Audit Trail & Event Verification",
    ],
    caseStudyIds: [],
    hasDirectExperience: false,
    featured: false,
  },
  {
    id: "finance",
    slug: "finance",
    name: "Finance & FinTech",
    description:
      "Technology solutions adaptable to your business requirements. Secure transaction gateways, audit trails, reconciliation workflows, and reporting.",
    capabilities: [
      "Double-Entry Ledger Architectures",
      "Payment Gateway Multi-Routing",
      "Automated Daily Reconciliation",
      "Role-Based Financial Authorization",
    ],
    caseStudyIds: [],
    hasDirectExperience: false,
    featured: false,
  },
  {
    id: "legal-technology",
    slug: "legal-technology",
    name: "Legal Technology",
    description:
      "Technology solutions adaptable to your business requirements. Contract workflows, digital sign-offs, matter management, and document parsing.",
    capabilities: [
      "Document Generation & Watermarking",
      "Versioned Contract Storage & Audit Logs",
      "Role-Protected Matter Records",
      "Client Intake & Form Automation",
    ],
    caseStudyIds: [],
    hasDirectExperience: false,
    featured: false,
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate & Property",
    description:
      "Technology solutions adaptable to your business requirements. Property listing directories, tenant lease tracking, and inquiry management.",
    capabilities: [
      "Map-Based Property Search & Filters",
      "Inquiry Routing & WhatsApp Cadences",
      "Tenant Documentation Portals",
      "Scheduled Maintenance Workflow Tracking",
    ],
    caseStudyIds: [],
    hasDirectExperience: false,
    featured: false,
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
