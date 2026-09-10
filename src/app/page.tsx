"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Layers,
  Cpu,
  Globe,
  Smartphone,
  Cloud,
  Database,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Clock,
  Award,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  MessageSquare,
  Send,
  Sparkles,
  Check,
  Terminal,
  FileText,
  BarChart3,
  Server,
  Workflow,
  Building2,
  Truck,
  HeartPulse,
  Briefcase,
  Store,
  Star,
  Play,
  MonitorCheck,
  Sliders,
  Users,
  Lock,
  ChevronDown,
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [activeDemo, setActiveDemo] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [auditFormSubmitted, setAuditFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web & SaaS Development",
    budget: "₹75k - ₹1.5 Lakh ($1,000 - $2,000)",
    details: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuditFormSubmitted(true);
  };

  // 1. Tech Stack Badges
  const techStack = [
    {
      name: "Next.js 16",
      tag: "Frontend Framework",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#404040" strokeWidth="1.5" />
          <path d="M7.5 7.5v9M7.5 7.5l9 10M16.5 7.5v5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "React 19",
      tag: "UI Component Architecture",
      icon: (
        <svg className="w-4 h-4 shrink-0 text-[#61DAFB]" viewBox="-11.5 -10.23 23 20.46" fill="currentColor">
          <circle cx="0" cy="0" r="2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Vue.js",
      tag: "Progressive Web Framework",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <polygon points="12,21 0,3.5 4.5,3.5 12,14.5 19.5,3.5 24,3.5" fill="#42B883" />
          <polygon points="12,14.5 6.5,3.5 9.5,3.5 12,7.8 14.5,3.5 17.5,3.5" fill="#35495E" />
        </svg>
      ),
    },
    {
      name: "Laravel",
      tag: "Enterprise PHP & REST Backend",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M11.64 2.11a1.5 1.5 0 0 0-1.28 0l-7.5 3.75A1.5 1.5 0 0 0 2 7.2v9.6a1.5 1.5 0 0 0 .86 1.34l7.5 3.75a1.5 1.5 0 0 0 1.28 0l7.5-3.75a1.5 1.5 0 0 0 .86-1.34V7.2a1.5 1.5 0 0 0-.86-1.34l-7.5-3.75z" fill="#FF2D20" />
          <path d="M12 4.5l-6 3v7l6 3v-13z" fill="#FFFFFF" fillOpacity="0.25" />
          <path d="M12 4.5l6 3v7l-6 3v-13z" fill="#000000" fillOpacity="0.15" />
          <path d="M12 4.5l-5 2.5 5 2.5 5-2.5-5-2.5z" fill="#FFFFFF" fillOpacity="0.4" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      tag: "High-Throughput Backend",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.5 4.9v9.8L12 21.5 3.5 16.7V6.9L12 2z" fill="#5FA04E" />
          <path d="M12 4l6.5 3.75v7.5L12 19 5.5 15.25v-7.5L12 4z" fill="#182A16" />
          <text x="12" y="14" fontSize="7" fontWeight="bold" fill="#5FA04E" textAnchor="middle" fontFamily="system-ui, sans-serif">JS</text>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      tag: "End-to-End Type Safety",
      icon: (
        <svg className="w-4 h-4 shrink-0 rounded-[3px]" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <text x="12" y="16.5" fontSize="11" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="system-ui, sans-serif">TS</text>
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      tag: "Relational Database",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791" />
          <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#41B3FF" strokeWidth="1.5" fill="none" />
          <path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#41B3FF" strokeWidth="1.5" fill="none" />
          <circle cx="15.5" cy="14.5" r="1.5" fill="#41B3FF" />
        </svg>
      ),
    },
    {
      name: "Redis",
      tag: "Edge Caching & PubSub",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.5 4.5v3L12 14 3.5 9.5v-3L12 2z" fill="#DC382D" />
          <path d="M12 8l8.5 4.5v3L12 20 3.5 15.5v-3L12 8z" fill="#A81D14" />
          <circle cx="12" cy="6.5" r="1.5" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      tag: "Responsive Design System",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: "AWS & Docker",
      tag: "Scalable Cloud Hosting",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13.98 11.08h2.12v-1.9h-2.12v1.9zm-2.95-5.43h2.12V3.57h-2.12v2.08zm0 2.71h2.12V6.29h-2.12v2.07zm-2.93 0h2.12V6.29H8.1v2.07zm-2.96 0h2.12V6.29H5.14v2.07zm5.89 2.72h2.12V9.01h-2.12v2.07zm-2.93 0h2.12V9.01h-2.12v2.07zm-2.96 0h2.12V9.01H5.14v2.07zm-2.93 0h2.12V9.01H2.21v2.07zM23.9 12.03c-.22-.16-.62-.26-1.12-.26-.14 0-.3.01-.46.03-.4.07-.88.22-1.42.44-.33-.78-.88-1.4-1.63-1.85-.08-.05-.17-.09-.25-.13l-.2-.08-.12.18c-.46.68-.7 1.48-.7 2.37 0 .34.04.68.11 1.01-.45.21-.99.33-1.6.33H1.05c-.17 0-.32.07-.44.18-.12.12-.19.27-.19.44 0 2.21.75 4.14 2.24 5.75 1.54 1.66 3.51 2.5 5.86 2.5 4.83 0 8.79-3.03 10.45-7.53 1.12-.04 2.2-.42 3.12-1.11.75-.56 1.25-1.29 1.48-2.15.06-.21-.02-.43-.17-.55z" />
        </svg>
      ),
    },
    {
      name: "React Native",
      tag: "Cross-Platform Mobile",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="2" width="14" height="20" rx="3" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="18.5" r="0.8" fill="#61DAFB" />
          <circle cx="12" cy="10" r="1.5" fill="#61DAFB" />
          <ellipse cx="12" cy="10" rx="4.5" ry="1.8" stroke="#61DAFB" strokeWidth="0.8" />
          <ellipse cx="12" cy="10" rx="4.5" ry="1.8" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(60 12 10)" />
          <ellipse cx="12" cy="10" rx="4.5" ry="1.8" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(120 12 10)" />
        </svg>
      ),
    },
  ];

  // 2. Services
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: "Custom Web & SaaS Engineering",
      badge: "High Scalability",
      description:
        "Bespoke web applications built with Next.js, React, Node.js, and TypeScript. Optimized for sub-second load times, dynamic caching, and effortless scaling.",
      features: [
        "Server-Side Rendering (SSR) & Edge Computing",
        "Type-Safe Robust APIs (REST & GraphQL)",
        "Secure Role-Based Authentication & Permissions",
        "Clean, Maintainable & Audited Codebases",
      ],
    },
    {
      icon: <Layers className="w-8 h-8 text-cyan-400" />,
      title: "Enterprise ERP & Automation",
      badge: "Operational ROI",
      description:
        "Transform messy spreadsheets and fragmented communication into unified, role-based internal ERPs, billing engines, and automated workflow hubs.",
      features: [
        "Multi-Branch & Multi-Warehouse Tracking",
        "Automated GST-Compliant Invoicing & P&L Reports",
        "Real-Time Audit Trails & Granular RBAC",
        "Saves 20+ hours of manual overhead weekly",
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      title: "Headless E-Commerce Engines",
      badge: "Sub-Second Speed",
      description:
        "Decoupled e-commerce architectures engineered to eliminate cart abandonment, withstand flash-sale traffic spikes, and boost checkout conversions.",
      features: [
        "Sub-second catalog browsing & instant search",
        "One-click frictionless checkout flows",
        "Razorpay, Stripe & WhatsApp notifications sync",
        "Inventory sync across offline & online channels",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "Cross-Platform Mobile Apps",
      badge: "iOS & Android",
      description:
        "High-performance native-feel mobile applications crafted with React Native. Single codebase efficiency with zero compromise on smoothness.",
      features: [
        "Real-time GPS tracking & interactive maps",
        "Instant push notifications (FCM / APNs)",
        "Offline-first data sync & secure local storage",
        "Full App Store & Google Play publishing support",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8 text-sky-400" />,
      title: "Cloud Architecture & APIs",
      badge: "99.9% Uptime",
      description:
        "Resilient cloud setups on AWS, GCP, and Docker. Microservices, automated CI/CD deployment pipelines, and Redis caching layers.",
      features: [
        "Auto-scaling Docker containers & serverless nodes",
        "PostgreSQL & Redis query optimization",
        "Cloudflare edge CDN & DDoS protection",
        "Automated backups & disaster recovery protocols",
      ],
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-400" />,
      title: "Free Tech & Performance Audit",
      badge: "Zero Commitment",
      description:
        "Get a complimentary 5-point technical inspection of your current website, slow database queries, security headers, and conversion bottlenecks.",
      features: [
        "Core Web Vitals & Google PageSpeed analysis",
        "Mobile responsiveness & UX drop-off review",
        "API latency & database query bottleneck check",
        "Actionable PDF report with immediate fixes",
      ],
    },
  ];

  // 3. Solutions Architecture
  const solutions = [
    {
      title: "Startup Minimum Viable Product (MVP)",
      subtitle: "Idea to Live Market in 30 Days",
      description:
        "Designed specifically for founders needing to validate ideas quickly without accumulating technical debt. We build lean, scalable MVPs ready for initial traction and seed funding.",
      metrics: "30-Day Delivery • Full Code Ownership • Investor Ready",
      icon: <RocketIcon className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Legacy System Modernization & Revamp",
      subtitle: "Migrate Slow Monoliths to Modern Web",
      description:
        "Upgrade aging PHP or slow WordPress portals to lightning-fast Next.js architectures with sub-second page loads, higher Google SEO ranks, and rock-solid uptime.",
      metrics: "3x Faster Page Loads • 40% Server Cost Savings",
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Internal Business Automation & Workflows",
      subtitle: "Eliminate 80% of Repetitive Operations",
      description:
        "Custom web portals that connect orders, inventory, billing, and team tasks. Replace chaotic WhatsApp chats and spreadsheets with real-time dashboards.",
      metrics: "20+ Hours Saved / Week • Zero Human Entry Errors",
      icon: <Workflow className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "Enterprise Headless Commerce",
      subtitle: "Built for High-Volume Checkouts",
      description:
        "Microservices-based e-commerce with decoupled edge frontends. Handles thousands of concurrent buyers during peak promotion flash sales seamlessly.",
      metrics: "99.99% Flash Sale Uptime • +34% Conversion Lift",
      icon: <Store className="w-6 h-6 text-purple-400" />,
    },
  ];

  // 4. Industries We Serve
  const industries = [
    {
      name: "Retail & E-Commerce",
      desc: "Fast catalog discovery, omnichannel inventory sync, and conversion-optimized checkout funnels.",
      icon: <Store className="w-6 h-6 text-blue-400" />,
    },
    {
      name: "Logistics & Fleet Management",
      desc: "Branch tracking, automated dispatch notes, driver routing, and instant GST bill generation.",
      icon: <Truck className="w-6 h-6 text-cyan-400" />,
    },
    {
      name: "Healthcare & Diagnostics",
      desc: "Patient appointment scheduling, secure lab reports delivery, and multi-location clinic management.",
      icon: <HeartPulse className="w-6 h-6 text-emerald-400" />,
    },
    {
      name: "Real Estate & Housing",
      desc: "Interactive property listing portals, virtual tour embeds, and automated lead capture CRM pipelines.",
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
    },
    {
      name: "Professional Services & Agencies",
      desc: "Client onboarding portals, retainer invoicing, milestone tracking, and shared document vaults.",
      icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
    },
  ];

  // 5. Why BRAYON (The 4 Pillars of Distinction)
  const whyBrayon = [
    {
      title: "Direct Founder Engineering Leadership",
      desc: "No sales reps or junior interns handling your codebase. Founder Bajrangi Yadav personally architects your systems and reviews every line of code.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Zero Bloat, High-Performance Code",
      desc: "We write clean, typed TypeScript and modern Next.js apps that score 95+ on Google PageSpeed. Every millisecond saved translates directly to customer conversions.",
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Transparent Sprint Milestones",
      desc: "No vague deadlines. We work in 2-week agile sprints with staged demo environments and weekly video reviews, so you always see working software.",
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "100% Intellectual Property Handover",
      desc: "You own all code, repositories, and credentials from day one. Plus, we back every deployment with our standard 30-Day Hypercare Bug Warranty.",
      icon: <Award className="w-6 h-6 text-purple-400" />,
    },
  ];

  // 6. Interactive Demo Products (Day 23 Blueprint)
  const demos = [
    {
      title: "BRAYON CRM Platform",
      tag: "Sales Pipeline & Cadence",
      headline: "Visual Deal Kanban & Automated 1-Click SOW Proposals",
      description:
        "A lightweight, ultra-responsive CRM built for service agencies and B2B teams. Features interactive drag-and-drop deal progression, automated WhatsApp reminders, and instant quotation exports.",
      features: [
        "Drag-and-Drop Deal Pipeline Stages",
        "1-Click PDF Proposal & SOW Generator",
        "Automated 3-Stage Follow-Up Triggers",
        "Real-Time Pipeline Revenue Forecaster",
      ],
      mockScreen: {
        stage1: "New Leads (14) • ₹4.2L",
        stage2: "Discovery Scheduled (6) • ₹2.8L",
        stage3: "Proposal Sent (3) • ₹1.9L",
        stat: "Lead Win Rate: 26% (+136%)",
      },
    },
    {
      title: "BRAYON Business ERP",
      tag: "Multi-Branch Operations",
      headline: "Unified Inventory, Fleet Dispatch & GST Invoicing",
      description:
        "Centralizes warehouse stocks across multiple locations, tracks shipment vehicles in real time, and automates tax-compliant invoicing in seconds.",
      features: [
        "Multi-Warehouse Inventory Reconciliation",
        "Automated GST & E-Way Bill PDF Generation",
        "Role-Based Access (Manager, Staff, Auditor)",
        "Saves 22+ Hours of Manual Work Per Week",
      ],
      mockScreen: {
        stage1: "Central Warehouse: 1,420 Units",
        stage2: "Branch 2: 380 Units (Low Stock)",
        stage3: "Today's Dispatches: 48 Orders",
        stat: "Stock Accuracy: 99.7%",
      },
    },
    {
      title: "BRAYON AI Assistant",
      tag: "Intelligent Workflows",
      headline: "Natural Language Analytics & Enterprise Support Bot",
      description:
        "Connects directly with your company's database and knowledge base to answer operational queries, draft responses, and surface business insights instantly.",
      features: [
        "Query SQL Databases using Plain English",
        "Automated Customer Ticket Drafting",
        "Secure Enterprise Data Isolation",
        "Zero Cloud Model Training on Private Data",
      ],
      mockScreen: {
        stage1: "Q: 'Show top 5 pending orders from Mumbai'",
        stage2: "AI: Fetched 5 records in 240ms",
        stage3: "Auto-Drafted WhatsApp Dispatch Note",
        stat: "Support Ticket Deflection: 52%",
      },
    },
  ];

  // 7. Case Studies
  const caseStudies = [
    {
      id: "cs-1",
      title: "High-Performance Headless E-Commerce Platform",
      clientType: "Multi-Category Retail Enterprise",
      problem:
        "Sluggish page load speeds of 5.8s on an outdated monolithic platform caused 68% cart abandonment and database crashes during festive flash sales.",
      solution:
        "Re-engineered the storefront using a decoupled Next.js frontend deployed on the edge, backed by a microservices order processing API with Redis caching and multi-gateway failover.",
      impacts: [
        { metric: "0.9s", label: "Page Load Speed (from 5.8s)" },
        { metric: "+34%", label: "Checkout Conversion Lift" },
        { metric: "-45%", label: "Monthly Server Costs" },
        { metric: "99.99%", label: "Uptime During Peak Flash Sales" },
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Redis", "PostgreSQL", "Razorpay"],
    },
    {
      id: "cs-2",
      title: "Enterprise Multi-Branch Logistics & Operations ERP",
      clientType: "Distribution & Fleet Network",
      problem:
        "Operations across 6 branches were crippled by disconnected spreadsheets, manual phone dispatches, and an 8.5% inventory discrepancy rate.",
      solution:
        "Engineered a centralized, role-based Web ERP portal unifying vendor procurement, fleet tracking, automated GST invoice generation, and real-time inventory reconciliation.",
      impacts: [
        { metric: "22+ hrs", label: "Saved Per Week / Branch" },
        { metric: "<0.3%", label: "Stock Discrepancy (from 8.5%)" },
        { metric: "Instant", label: "P&L Executive Reporting" },
        { metric: "6 Branches", label: "Synchronized Real-Time" },
      ],
      stack: ["React", "Node.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Docker"],
    },
    {
      id: "cs-3",
      title: "Real-Time Warehouse & Barcode Inventory Management",
      clientType: "Wholesale & FMCG Distributor",
      problem:
        "Frequent stockouts on high-velocity SKUs alongside 28% capital locked in dead stock due to zero predictive tracking and manual barcode errors.",
      solution:
        "Built a cloud-native Inventory & Warehouse Management System with barcode/QR scanning integration, batch expiration alerts, and automated FIFO stock rotation.",
      impacts: [
        { metric: "-40%", label: "Order Picking Time" },
        { metric: "-28%", label: "Dead Stock Holding Capital" },
        { metric: "100%", label: "Batch Traceability" },
        { metric: "Zero", label: "Manual Entry Errors" },
      ],
      stack: ["React Native", "Node.js", "WebSockets", "Redis", "MongoDB", "Thermal API"],
    },
    {
      id: "cs-4",
      title: "Cross-Platform On-Demand Home Services App",
      clientType: "On-Demand Services Marketplace",
      problem:
        "Unreliable third-party web wrapper suffered from dropped push notifications, broken GPS tracking, and a high customer service complaint rate.",
      solution:
        "Delivered a performant cross-platform mobile application with live GPS technician tracking, socket-based booking dispatch, and in-app instant payments.",
      impacts: [
        { metric: "4.8 / 5.0", label: "App Store & Play Store Rating" },
        { metric: "65%", label: "Bookings Shifted to Mobile App" },
        { metric: "-52%", label: "Customer Support Calls" },
        { metric: "5,000+", label: "Active Mobile Users" },
      ],
      stack: ["React Native", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Google Maps"],
    },
    {
      id: "cs-5",
      title: "High-Ticket Client Pipeline & Automated Sales CRM",
      clientType: "B2B Consulting & Professional Services Agency",
      problem:
        "Losing 40% of qualified leads due to sluggish 4-hour response times, chaotic WhatsApp messages, and lack of visual pipeline tracking.",
      solution:
        "Constructed a lightweight, ultra-responsive Custom CRM with drag-and-drop Kanban deal stages, 1-click PDF proposals, and automated multi-channel follow-up cadences.",
      impacts: [
        { metric: "26%", label: "Lead Win Rate (from 11%)" },
        { metric: "<3 Mins", label: "Average Response Time" },
        { metric: "1-Click", label: "Automated SOW Generation" },
        { metric: "+136%", label: "Revenue Pipeline Growth" },
      ],
      stack: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "SendGrid API", "WhatsApp API"],
    },
  ];

  // 8. Client Testimonials
  const testimonials = [
    {
      quote:
        "BRAYON Technologies completely overhauled our slow retail website into a sub-second Next.js powerhouse. Our cart abandonments dropped by 34% in the very first month.",
      author: "Director of Operations",
      company: "OmniRetail Enterprise",
      rating: 5,
    },
    {
      quote:
        "Bajrangi and the BRAYON team built our multi-branch logistics dashboard on schedule without a single technical surprise. We saved over 20 hours of manual spreadsheet work every week.",
      author: "Managing Director",
      company: "Express Logistics Group",
      rating: 5,
    },
    {
      quote:
        "Working directly with senior engineering leadership makes an enormous difference. Clear milestone demos every Friday and flawless production code.",
      author: "Co-Founder & CEO",
      company: "FinTech Venture Lab",
      rating: 5,
    },
  ];

  // 9. Packages
  const packages = [
    {
      name: "Starter Web Foundation",
      target: "SMBs, Consultants & Growing Brands",
      priceINR: "₹35,000",
      priceUSD: "$550",
      timeline: "7 – 10 Business Days",
      popular: false,
      features: [
        "5-Page Modern Responsive Website",
        "Next.js / React + Tailwind CSS",
        "Google PageSpeed 90+ Score Guarantee",
        "Contact & Lead Capture Form with Alerts",
        "Basic On-Page SEO (Meta tags, Sitemap)",
        "14 Days Post-Launch Bug Warranty",
      ],
    },
    {
      name: "Business Growth Portal",
      target: "Scaling Companies & Service Firms",
      priceINR: "₹75,000",
      priceUSD: "$1,100",
      timeline: "2 – 3 Weeks",
      popular: true,
      features: [
        "Up to 10 Custom Designed Pages",
        "Headless CMS Integration for Easy Edits",
        "Lead Generation Forms + CRM Webhook Sync",
        "Dynamic Case Studies / Blog Architecture",
        "Google Analytics 4 & Pixel Setup",
        "30 Days Post-Launch Hypercare Support",
      ],
    },
    {
      name: "Startup MVP in 30 Days",
      target: "Founders & Venture-Backed Teams",
      priceINR: "₹1,50,000 – ₹3,50,000",
      priceUSD: "$2,000 – $4,500",
      timeline: "4 Weeks (Sprint Cycles)",
      popular: false,
      features: [
        "Full-Stack Web App / SaaS Architecture",
        "User Auth, RBAC & Role Dashboards",
        "Database Design (PostgreSQL / Redis)",
        "Stripe / Razorpay Payment Subscription Flow",
        "Cloud Deployment on AWS / Vercel",
        "Complete Source Code & Architecture Handover",
      ],
    },
    {
      name: "Enterprise ERP / Automation",
      target: "Mid-Sized Enterprises & Operations",
      priceINR: "₹2,50,000+",
      priceUSD: "$3,500+",
      timeline: "6 – 10 Weeks",
      popular: false,
      features: [
        "Custom Workflow & Multi-Branch Engine",
        "Inventory, Invoicing & GST Accounting",
        "Granular Role Permissions & Audit Trails",
        "Third-Party API & Hardware Scanner Sync",
        "Dedicated Engineering Lead & Weekly Sprints",
        "60 Days Enterprise Support & Staff Training",
      ],
    },
  ];

  // 7. Frequently Asked Questions (Matches Google FAQPage JSON-LD Schema)
  const faqs = [
    {
      question: "How much does custom software or an MVP cost at BRAYON Technologies?",
      answer:
        "Our transparent packages start at ₹35,000 ($550) for a modern 5-page web foundation. Startup MVPs typically range between ₹1,50,000 and ₹3,50,000 ($2,000 – $4,500), while comprehensive enterprise ERPs start at ₹2,50,000 ($3,500+). We operate strictly on milestone-based payments with zero hidden fees.",
      badge: "Transparent Pricing",
    },
    {
      question: "How fast can BRAYON Technologies launch our web platform or MVP?",
      answer:
        "Starter web projects are delivered in 7–10 business days. Full-stack startup MVPs are delivered in 30 days through two-week agile sprint cycles. Enterprise custom ERPs take between 6 to 10 weeks with weekly staging demos.",
      badge: "Rapid Delivery",
    },
    {
      question: "Do we get 100% ownership of the source code and intellectual property?",
      answer:
        "Yes. Upon completion of milestone payments, BRAYON Technologies transfers 100% worldwide intellectual property (IP), copyright, and GitHub source code repository ownership to your company, protected by our standard Master Services Agreement (MSA).",
      badge: "100% IP Handover",
    },
    {
      question: "What technologies does BRAYON Technologies specialize in?",
      answer:
        "We specialize in modern, high-performance technologies: Next.js 16, React 19, Vue.js, Laravel, Node.js, TypeScript, PostgreSQL, Redis, Tailwind CSS, Docker, AWS Cloud, and React Native for mobile applications.",
      badge: "Modern Tech Stack",
    },
    {
      question: "What is BRAYON's payment milestone structure?",
      answer:
        "We never ask for 100% upfront or accept risky post-completion terms. Standard projects operate on a 50% advance to initiate architecture and 50% upon User Acceptance Testing (UAT) sign-off. Enterprise projects follow a 30% Advance / 30% Alpha Demo / 30% Beta Review / 10% Production Deployment schedule.",
      badge: "Milestone Safety",
    },
    {
      question: "How does the free 15-minute architecture audit work?",
      answer:
        "You share your current website or software requirements. Founder & Technology Lead Bajrangi Yadav conducts a 5-point technical inspection (Core Web Vitals, mobile UX, API speed, security headers, and conversion bottlenecks) and delivers an actionable 1-page PDF report within 24 hours with zero sales pressure.",
      badge: "Zero-Risk Value",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 border-b border-blue-500/20 text-xs py-2.5 px-4 text-center font-medium text-blue-200">
        <span className="inline-flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Now accepting 2 client projects for this sprint • Free 15-Minute Architecture Audit Included
        </span>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070B19]/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group">
            <div className="relative h-11 sm:h-12 w-48 sm:w-56">
              <Image
                src="/brayon-logo-horizontal.png"
                alt="BRAYON Technologies - Technology. Innovation. Beyond."
                fill
                className="object-contain object-left group-hover:scale-[1.02] transition-transform"
                priority
                unoptimized
              />
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
            <a href="#industries" className="hover:text-blue-400 transition-colors">Industries</a>
            <a href="#demos" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <span>Live Demos</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">New</span>
            </a>
            <a href="#case-studies" className="hover:text-blue-400 transition-colors">Case Studies</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            <a href="#founder" className="hover:text-blue-400 transition-colors">Founder</a>
          </nav>

          {/* Nav CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center gap-2"
            >
              Book Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1128] border-b border-slate-800 px-6 py-5 space-y-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Services</a>
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Solutions</a>
            <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Industries</a>
            <a href="#demos" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Live Demos</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Case Studies</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">FAQ</a>
            <a href="#founder" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Founder</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-blue-600 text-white rounded-xl font-semibold mt-4"
            >
              Book Discovery Call
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative pt-16 pb-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-blue-600/15 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Official Emblem */}
          <div className="flex justify-center mb-6">
            <div className="relative w-72 sm:w-96 h-20 sm:h-24">
              <Image
                src="/brayon-logo-horizontal.png"
                alt="BRAYON Technologies - Technology. Innovation. Beyond."
                fill
                className="object-contain drop-shadow-[0_0_35px_rgba(0,102,255,0.6)]"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            BRAYON TECHNOLOGIES • ENTERPRISE ENGINEERING & CLOUD
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
            Engineering Scalable Software,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              Modern Web Systems
            </span>{" "}
            & Business Automation.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            We partner with visionary founders and growing companies to architect high-performance web applications,
            custom enterprise ERPs, and resilient cloud systems. Faster time-to-market with zero technical debt.
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/35 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3"
            >
              Schedule a 15-Min Discovery Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#demos"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-cyan-400" />
              Explore Interactive Demos
            </a>
          </div>

          {/* Live Trust Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
              <div className="text-3xl font-extrabold text-blue-400">99.9%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Uptime Guarantee</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
              <div className="text-3xl font-extrabold text-cyan-400">&lt;1.0s</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Sub-Second Speed</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
              <div className="text-3xl font-extrabold text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Sprint Milestones Met</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
              <div className="text-3xl font-extrabold text-indigo-400">30 Days</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">MVP Delivery Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUSTED TECHNOLOGY PARTNER BANNER */}
      <section className="py-12 bg-[#050814] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Trusted Technology Stack & Architecture Standards
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all flex items-center gap-2.5 text-xs font-mono text-slate-300 group shadow-sm"
              >
                <span className="group-hover:scale-110 transition-transform">
                  {tech.icon}
                </span>
                <span className="font-semibold text-white group-hover:text-blue-200 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">
                  ({tech.tag})
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
            ENGINEERING CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Tech Solutions Built for Measurable Business Growth
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            We don’t build generic templates. Every solution is custom-architected for maximum speed, security, and
            scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0A1128] border border-slate-800 p-8 hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-blue-950/70 border border-blue-800/40 group-hover:scale-110 transition-transform">
                    {srv.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-800/80 text-blue-300 border border-slate-700">
                    {srv.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Key Deliverables:
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SOLUTIONS SECTION */}
      <section id="solutions" className="py-24 bg-[#050814] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
              TARGETED OUTCOMES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Purpose-Built Solutions for Every Business Stage
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              Whether you are an early-stage startup needing validation or an established business drowning in manual
              work, we have a tailored solution blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#0C142B] to-[#080D21] border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800/40">
                      {sol.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{sol.title}</h3>
                      <div className="text-xs text-blue-400 font-medium">{sol.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{sol.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-300 font-semibold">{sol.metrics}</span>
                  <a href="#contact" className="text-blue-400 hover:text-white flex items-center gap-1 font-medium">
                    Discuss Scope <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section id="industries" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
            INDUSTRY VERTICALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Deep Domain Expertise Across Key Sectors
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            We understand the unique compliance, operational speed, and customer conversion demands of your specific industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090F24] border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-800/60 w-fit mb-4">{ind.icon}</div>
                <h4 className="text-base font-bold text-white mb-2">{ind.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-blue-400 font-medium">
                Domain Ready ➔
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. WHY BRAYON (4 PILLARS OF DISTINCTION) */}
      <section className="py-24 bg-[#050814] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
              THE BRAYON ADVANTAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why High-Growth Companies Choose BRAYON
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              The anti-agency approach: senior technical leadership, transparent sprint cycles, and software engineered to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBrayon.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#090F24] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/40 w-fit mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Guaranteed Standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. REUSABLE DEMO PRODUCTS (DAY 23 BLUEPRINT) */}
      <section id="demos" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase mb-3">
            <MonitorCheck className="w-3.5 h-3.5" /> Live Ready-to-Deploy Assets
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Ready-to-Customize Demo Platforms
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Instead of building from absolute zero, we customize battle-tested proprietary modules to cut your launch
            timeline in half.
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {demos.map((dm, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDemo(idx)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeDemo === idx
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>{dm.title}</span>
            </button>
          ))}
        </div>

        {/* Active Demo Box */}
        {(() => {
          const curDemo = demos[activeDemo];
          return (
            <div className="rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#0A1128] border border-blue-500/30 p-8 sm:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-800/50">
                    {curDemo.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{curDemo.headline}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{curDemo.description}</p>

                  <div className="space-y-2.5 pt-2">
                    {curDemo.features.map((ft, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{ft}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#contact"
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                    >
                      Request a 10-Min Live Demo Walkthrough
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Simulated UI Preview */}
                <div className="lg:col-span-6 rounded-2xl bg-[#060A19] border border-slate-800 p-6 font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span>brayon-live-preview.internal</span>
                  </div>

                  <div className="py-6 space-y-4">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300">
                      <span>{curDemo.mockScreen.stage1}</span>
                      <span className="text-emerald-400 font-bold">Active</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300">
                      <span>{curDemo.mockScreen.stage2}</span>
                      <span className="text-blue-400 font-bold">In-Progress</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300">
                      <span>{curDemo.mockScreen.stage3}</span>
                      <span className="text-purple-400 font-bold">Dispatched</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-cyan-300 font-semibold">
                    <span>Performance Benchmark:</span>
                    <span>{curDemo.mockScreen.stat}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 10. CASE STUDIES SHOWCASE */}
      <section id="case-studies" className="py-24 bg-[#050814] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
              PROVEN TRACK RECORD
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              5 Core Production Case Studies
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              Real engineering challenges solved with measurable revenue, operational speed, and architecture efficiency.
            </p>
          </div>

          {/* Case Study Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {caseStudies.map((cs, idx) => (
              <button
                key={cs.id}
                onClick={() => setActiveCaseStudy(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCaseStudy === idx
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                Case Study #{idx + 1}
              </button>
            ))}
          </div>

          {/* Active Case Study Detail Box */}
          {(() => {
            const current = caseStudies[activeCaseStudy];
            return (
              <div className="rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#0A1128] border border-blue-500/30 p-8 sm:p-12 shadow-2xl">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-md border border-blue-800/50">
                      {current.clientType}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                      {current.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/30">
                      <div className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        The Business Problem
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{current.problem}</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-900/30">
                      <div className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        BRAYON Engineering Solution
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{current.solution}</p>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="flex flex-col justify-center">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                      Validated Business Results
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {current.impacts.map((imp, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors"
                        >
                          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            {imp.metric}
                          </div>
                          <div className="text-xs text-slate-400 font-medium mt-1">
                            {imp.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Need a similar high-performance architecture for your company?
                  </div>
                  <a
                    href="#contact"
                    className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                  >
                    Discuss This Solution With Our Tech Lead
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 11. ENGINEERING PROCESS (AGILE 5-STEP LIFECYCLE) */}
      <section id="process" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 5-Step Sprint Engineering Method
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            No endless delays or scope creep. Clear milestone architecture, weekly live demos, and zero technical surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            {
              step: "01",
              title: "Discovery & Blueprint",
              desc: "Deep diagnostic call, tech feasibility audit, database ER diagrams, and clear Scope of Work (SOW).",
            },
            {
              step: "02",
              title: "Clickable Prototype",
              desc: "High-fidelity Figma user flows and system architecture sign-off before a single line of code is written.",
            },
            {
              step: "03",
              title: "Agile Sprints Build",
              desc: "2-week rapid development sprints with working staged demo environments and weekly founder updates.",
            },
            {
              step: "04",
              title: "QA & Benchmark",
              desc: "Stress testing, automated tests, Core Web Vitals audit, and role permission security verifications.",
            },
            {
              step: "05",
              title: "Deploy & Hypercare",
              desc: "Production DNS switchover, full source code handover, staff training, and 30-day bug warranty.",
            },
          ].map((st, sIdx) => (
            <div
              key={sIdx}
              className="p-6 rounded-2xl bg-[#0B1226] border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl font-black text-slate-700 mb-4">{st.step}</div>
                <h4 className="text-lg font-bold text-white mb-2">{st.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-blue-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Stage Verified
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. CLIENT TESTIMONIALS */}
      <section className="py-24 bg-[#050814] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
              CLIENT TRUST
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Endorsed by Business Leaders & Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((tst, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0A1128] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(tst.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                    &ldquo;{tst.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="font-bold text-white text-sm">{tst.author}</div>
                  <div className="text-xs text-blue-400">{tst.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. TRANSPARENT SERVICE PACKAGES & PRICING */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
            PREDICTABLE INVESTMENT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Standardized Packages. Zero Hidden Fees.
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Milestone-based payments aligned with tangible deliverables. Clear expectations for both parties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? "bg-gradient-to-b from-[#111C3A] to-[#0A1128] border-2 border-blue-500 shadow-2xl shadow-blue-500/20 relative"
                  : "bg-[#090F24] border border-slate-800"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                <div className="text-xs text-slate-400 mb-6">{pkg.target}</div>

                <div className="mb-6">
                  <div className="text-3xl font-extrabold text-white tracking-tight">
                    {pkg.priceINR}
                  </div>
                  <div className="text-xs text-blue-400 font-medium mt-1">
                    or {pkg.priceUSD} for global clients
                  </div>
                  <div className="mt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    Timeline: {pkg.timeline}
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-6 space-y-3">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="#contact"
                  className={`w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider block transition-all ${
                    pkg.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  Select Package
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Milestone Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-950/30 border border-blue-900/40 text-center max-w-3xl mx-auto text-xs text-slate-300">
          <span className="font-semibold text-blue-300">🛡️ Fair Milestone Payment Terms:</span> Standard projects are split into 50% Advance & 50% on UAT Approval. Larger enterprise projects operate on a 30% / 30% / 30% / 10% milestone structure.
        </div>
      </section>

      {/* 14. FOUNDER & LEADERSHIP SECTION */}
      <section id="founder" className="py-24 bg-[#050814] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0E172F] via-[#0A1128] to-[#080D21] border border-blue-500/20 p-8 sm:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Founder Avatar & Badge */}
              <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="w-36 h-36 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-1 shadow-2xl shadow-blue-500/30">
                  <div className="w-full h-full rounded-2xl bg-[#0A1128] p-3 flex items-center justify-center">
                    <Image
                      src="/brayon-icon-clean.png"
                      alt="BRAYON Technologies Icon"
                      width={120}
                      height={70}
                      className="object-contain drop-shadow-[0_0_15px_rgba(0,102,255,0.6)]"
                      unoptimized
                    />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">Bajrangi Yadav</h3>
                <p className="text-blue-400 font-semibold text-sm">
                  Founder & Technology Lead
                </p>
                <div className="text-xs text-slate-400 mt-1">BRAYON Technologies</div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="mailto:bajrangi@brayontech.com"
                    className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                    title="Direct Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Founder Statement */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase">
                  Founder Engineering Guarantee
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  &ldquo;You don&apos;t get passed around to junior account managers. You work directly with senior engineering leadership.&rdquo;
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Most agencies sell with their best leaders and delegate the actual code to inexperienced interns. At BRAYON
                  Technologies, I personally architect every database schema, oversee sprint execution, and guarantee that
                  every line of code meets strict production performance, security, and maintainability benchmarks.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct code review by Technology Lead</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>30-day post-launch bug warranty included</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% intellectual property & source code rights</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Transparent weekly video sprint updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14.5. FREQUENTLY ASKED QUESTIONS (FAQ) - SEO & CONVERSION */}
      <section id="faq" className="py-24 bg-[#080E21] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Everything You Need to Know Before Partnering With Us
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Straightforward answers about pricing, launch timelines, code ownership, sprint cadence, and our risk-free architecture audit.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#0C1530] border-blue-500/40 shadow-lg shadow-blue-500/5"
                      : "bg-[#090F24] border-slate-800/90 hover:border-slate-700"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/15 text-blue-300 border border-blue-500/25 shrink-0">
                        {faq.badge}
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-white">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-6 rounded-2xl bg-blue-950/30 border border-blue-500/20">
            <p className="text-sm text-slate-300">
              Have a specific technical question or need an NDA before sharing details?{" "}
              <a
                href="#contact"
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4"
              >
                Request a 15-minute consultation with our Founder →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 15. LEAD MAGNET & AUDIT FORM */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
            FREE 15-MINUTE LEAD MAGNET
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Claim Your Free 5-Point Performance & Tech Audit
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Share your website URL or project requirements. We conduct a 5-point performance, security, and UX inspection
            and send a concrete PDF action report within 24 hours. Zero sales pressure.
          </p>
        </div>

        <div className="rounded-3xl bg-[#090F24] border border-slate-800 p-8 sm:p-10 shadow-2xl">
          {auditFormSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Requirement Received!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our Founder & Technology
                Lead will review your requirements and respond at{" "}
                <span className="text-blue-400 font-semibold">{formData.email}</span> within 24 hours.
              </p>
              <div className="pt-6">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Bajrangi,%20I%20just%20submitted%20a%20project%20inquiry%20on%20BRAYON%20Technologies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  Instant Connect on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Sharma / Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-[#060A19] border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#060A19] border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Company or Existing Website URL
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. yourcompany.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#060A19] border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060A19] border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option>Web & SaaS Development</option>
                    <option>Enterprise ERP & Automation</option>
                    <option>Headless E-Commerce</option>
                    <option>Mobile App (React Native)</option>
                    <option>Free 5-Point Performance & Tech Audit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Estimated Project Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#060A19] border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option>₹35,000 – ₹60,000 ($500 – $800) [Starter Web]</option>
                  <option>₹75,000 – ₹1.5 Lakh ($1,000 – $2,000) [Portal/Store]</option>
                  <option>₹1.5 Lakh – ₹3.5 Lakh ($2,000 – $4,500) [MVP/SaaS]</option>
                  <option>₹3.5 Lakh+ ($4,500+) [Custom ERP / Enterprise]</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Brief Project Details or Technical Bottleneck
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us what you want to build or what bottleneck your current software is facing..."
                  className="w-full px-4 py-3 rounded-xl bg-[#060A19] border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/35 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Audit & Discovery Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 16. CORPORATE FOOTER */}
      <footer className="bg-[#03060E] border-t border-slate-900 py-16 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1 space-y-4">
              <div className="relative w-48 sm:w-56 h-12">
                <Image
                  src="/brayon-logo-horizontal.png"
                  alt="BRAYON Technologies - Technology. Innovation. Beyond."
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Technology. Innovation. Beyond. High-performance custom software engineering, scalable cloud systems, and
                business automation.
              </p>
            </div>

            <div>
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
                Solutions & Services
              </div>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Custom Web Platforms</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Enterprise ERP Systems</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Headless E-Commerce</a></li>
                <li><a href="#demos" className="hover:text-blue-400 transition-colors">BRAYON Demo Platforms</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
                Company & Process
              </div>
              <ul className="space-y-2">
                <li><a href="#case-studies" className="hover:text-blue-400 transition-colors">5 Core Case Studies</a></li>
                <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Packages & Pricing</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ & Code Ownership</a></li>
                <li><a href="#founder" className="hover:text-blue-400 transition-colors">Founder Leadership</a></li>
                <li><a href="#process" className="hover:text-blue-400 transition-colors">5-Step Sprint Method</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
                Direct Contact & Inboxes
              </div>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>bajrangi@brayontech.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>hello@brayontech.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>brayontech.com / brayon.tech</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>
              © {new Date().getFullYear()} BRAYON Technologies. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Master Services Agreement (MSA)</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Security Hygiene</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
