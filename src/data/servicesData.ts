export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  headline: string;
  description: string;
  targetAudience: string;
  problemsSolved: string[];
  brayonApproach: string;
  keyCapabilities: string[];
  techStack: { name: string; category: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedCaseStudySlugs: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development Services",
    shortTitle: "Custom Software Development",
    category: "Full-Stack Platforms",
    seoTitle: "Custom Software Development Services | BRAYON Technologies",
    seoDescription:
      "Enterprise custom software development by senior software architects. We build bespoke operational software, verification engines, and scalable web platforms with 100% IP ownership.",
    keywords: [
      "Custom Software Development Services",
      "Custom Software Development Company",
      "Software Development Company in India",
      "Bespoke Business Software",
      "Enterprise Software Engineering",
    ],
    headline: "Bespoke Software Architectures Built Around Your Actual Business Operations.",
    description:
      "Off-the-shelf software forces growing companies into rigid operational constraints, expensive recurring licenses, and manual spreadsheet workarounds. BRAYON Technologies designs and engineers custom software platforms tailored to your specific business workflows, proprietary competitive advantages, and multi-user administrative needs.",
    targetAudience:
      "Growing enterprises, institutional operations, SMBs eliminating spreadsheet chaos, and founders needing dedicated software engines.",
    problemsSolved: [
      "Fragmented data scattered across multiple spreadsheets and manual registers",
      "Inflexible commercial SaaS subscriptions charging per-user fees that eat into margins",
      "Lack of automated verification, audit trails, and multi-branch synchronization",
      "Slow legacy systems vulnerable to data corruption and security breaches",
    ],
    brayonApproach:
      "We begin with deep operational workflow mapping before writing code. Our architectures feature normalized relational databases, clean TypeScript interfaces, strict role-based access control, and 100% intellectual property transfer to your organization.",
    keyCapabilities: [
      "Bespoke Business Management & Operational Backoffices",
      "Sub-Second Data & Document Verification Engines",
      "Multi-Role Permission Architectures (RBAC)",
      "Automated PDF Invoicing, GST & Reporting Engines",
      "Branch & Franchise Administration Portals",
      "Real-Time Analytics Dashboards & Activity Telemetry",
    ],
    techStack: [
      { name: "Next.js 16", category: "Frontend" },
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Laravel / PHP", category: "Backend" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL / MySQL", category: "Database" },
      { name: "Redis", category: "Cache" },
      { name: "Docker", category: "DevOps" },
    ],
    process: [
      {
        step: "01",
        title: "Workflow Audit & Scope",
        description: "We document existing operational bottlenecks, data flows, and define clear MVP deliverables.",
      },
      {
        step: "02",
        title: "Architecture & Schema",
        description: "Designing normalized database schemas, UI wireframes, and API contracts for client review.",
      },
      {
        step: "03",
        title: "Sprint Build & Demos",
        description: "Two-week agile sprint cycles with live staging demos so you test working software every 7 days.",
      },
      {
        step: "04",
        title: "Deploy & Hypercare",
        description: "Hardened deployment, complete repository transfer, staff training, and 30-day warranty.",
      },
    ],
    faqs: [
      {
        question: "How long does custom software development take?",
        answer:
          "Focused business portals and MVPs typically take 2 to 4 weeks. Full enterprise software or multi-role management systems usually require 4 to 8 weeks, delivered in weekly testable milestones.",
      },
      {
        question: "Do we own the source code and database?",
        answer:
          "Yes, 100%. Upon milestone completion and settlement, the private Git repository, database schemas, cloud infrastructure keys, and full intellectual property are transferred to your organization.",
      },
      {
        question: "Can custom software integrate with our existing tools?",
        answer:
          "Absolutely. We build deterministic RESTful APIs and webhook integrations for payment gateways, WhatsApp notifications, accounting tools, and legacy databases.",
      },
      {
        question: "How do you handle post-launch maintenance?",
        answer:
          "Every deployment includes 30 days of complimentary hypercare support covering bug remediation and performance monitoring. Extended ongoing SLA maintenance packages are also available.",
      },
    ],
    relatedCaseStudySlugs: ["jbce", "mhvp", "safegrowtrade"],
  },

  "web-development": {
    slug: "web-development",
    title: "Web Development Services",
    shortTitle: "Web Development",
    category: "Full-Stack Web",
    seoTitle: "Web Development Company | BRAYON Technologies",
    seoDescription:
      "Full-stack web development company in India. We engineer high-performance business websites, customer portals, and web platforms built for speed, SEO, and conversion.",
    keywords: [
      "Web Development Company",
      "Web Development Company in India",
      "Professional Web Development",
      "Full Stack Web Development",
      "Business Website Development",
    ],
    headline: "Fast, Search-Optimized Web Platforms Engineered For High Conversion.",
    description:
      "A modern corporate website is your primary international business asset. BRAYON Technologies builds responsive, accessible, and lightning-fast web experiences combining senior technical discipline, clean semantic HTML5, and built-in technical SEO that search engines reward.",
    targetAudience:
      "Enterprises, institutions, B2B companies, and businesses requiring an authoritative digital presence that converts visitors into qualified inquiries.",
    problemsSolved: [
      "Sluggish page loads resulting in high bounce rates and lost customer inquiries",
      "Poor mobile responsiveness and broken viewports across modern smartphones",
      "Missing technical SEO architecture, structured data, and slow indexing",
      "Fragile CMS templates that break upon plugin updates",
    ],
    brayonApproach:
      "We replace bloated website templates with modern, handcrafted component architectures using Next.js and Tailwind CSS. Every page achieves 95+ Core Web Vitals, zero cumulative layout shift, and clean JSON-LD structured schema.",
    keyCapabilities: [
      "Custom Corporate Websites & Digital Brand Portals",
      "Technical SEO Architecture (Structured Data, OpenGraph, Canonical URLs)",
      "Mobile-First Responsive Layouts with Zero Layout Shift",
      "Interactive Project & Product Catalogs",
      "Lead Capture Funnels Integrated with WhatsApp & CRM",
      "Sub-Second Edge Page Delivery with Global CDN",
    ],
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Node.js", category: "Backend" },
      { name: "Vercel Edge", category: "Cloud" },
    ],
    process: [
      { step: "01", title: "Brand & Wireframe", description: "Information architecture, conversion strategy, and content hierarchy." },
      { step: "02", title: "Design System", description: "Art-directed component systems, accessible typography, and high-contrast color palette." },
      { step: "03", title: "Next.js Engineering", description: "Semantic HTML5, responsive CSS, interactive forms, and schema markup." },
      { step: "04", title: "Lighthouse QA & Launch", description: "Rigorous Core Web Vitals audits, cross-device testing, and DNS deployment." },
    ],
    faqs: [
      {
        question: "Why should we choose custom code over WordPress or Wix?",
        answer:
          "Custom Next.js platforms load in under 1 second, have zero vulnerability to plugin hacks, achieve superior Google Core Web Vitals scores, and can scale to millions of monthly hits without server crashes.",
      },
      {
        question: "Will our website be mobile-friendly?",
        answer:
          "Yes, we test viewports across mobile (320px–767px), tablets (768px–1023px), laptops (1024px–1366px), and desktop (1440px+) with zero horizontal overflow.",
      },
      {
        question: "How does the lead capture form work?",
        answer:
          "Inquiry forms automatically validate inputs, save lead records persistently in a structured database, send email notifications, and provide instant WhatsApp redirection.",
      },
    ],
    relatedCaseStudySlugs: ["jbce", "mhvp"],
  },

  "web-application-development": {
    slug: "web-application-development",
    title: "Web Application Development Services",
    shortTitle: "Web Application Development",
    category: "Cloud Applications",
    seoTitle: "Web Application Development Company | BRAYON Technologies",
    seoDescription:
      "Custom web application development company. We build high-throughput SaaS platforms, administrative portals, and interactive business tools using Next.js, React, and Node.js.",
    keywords: [
      "Web Application Development Company",
      "Custom Web Application Development",
      "SaaS Product Development",
      "React Web Application",
      "Next.js Web Applications",
    ],
    headline: "High-Throughput Web Applications Engineered For Mission-Critical Workflows.",
    description:
      "Modern web applications must handle dynamic state, secure user sessions, concurrent transactions, and complex business logic without slowing down. BRAYON Technologies architects scalable web applications utilizing React, Next.js server components, and resilient backend microservices.",
    targetAudience:
      "SaaS founders, growing enterprises, logistics operators, and organizations requiring high-performance customer portals.",
    problemsSolved: [
      "Slow monolithic applications struggling under multi-user concurrency",
      "Complicated user interfaces that require excessive training for staff",
      "Insecure authentication and lack of granular role permissions",
      "High server hosting bills caused by inefficient database queries",
    ],
    brayonApproach:
      "We build decoupled web applications with server-side rendering for speed and client-side hydration for reactivity. By implementing Redis caching and indexed database schemas, our applications maintain sub-second response times under peak concurrency.",
    keyCapabilities: [
      "Multi-Tenant SaaS Application Engineering",
      "Role-Based Administrative Backoffices & Dashboards",
      "Real-Time Data Streaming with WebSockets",
      "Transactional Payment Checkout & Subscription Billing",
      "Complex Filter & Dynamic Data Grid Implementations",
      "Automated Unit & Integration Test Suites",
    ],
    techStack: [
      { name: "React 19", category: "Frontend" },
      { name: "Next.js 16", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Node.js / Express", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Cache" },
      { name: "Prisma ORM", category: "Database" },
    ],
    process: [
      { step: "01", title: "Product Blueprint", description: "User journey mapping, state management architecture, and data contracts." },
      { step: "02", title: "API & Data Layer", description: "Database schema normalization, indexing, and authentication endpoints." },
      { step: "03", title: "Frontend Engineering", description: "Reusable UI components, real-time feedback, and optimistic UI updates." },
      { step: "04", title: "Load Testing & Deploy", description: "Simulating concurrent user traffic, security audits, and production rollout." },
    ],
    faqs: [
      {
        question: "Can you build a multi-tenant SaaS application?",
        answer:
          "Yes. We specialize in multi-tenant architectures with schema-isolated or tenant-keyed databases, subscription billing (Stripe/Razorpay), and role-based permissions.",
      },
      {
        question: "How do you ensure application security?",
        answer:
          "We enforce strict input sanitization, CSRF tokens, parameter binding to prevent SQL injection, rate limiting, and encrypted session cookies.",
      },
    ],
    relatedCaseStudySlugs: ["safegrowtrade", "hr-saas"],
  },

  "crm-development": {
    slug: "crm-development",
    title: "Custom CRM Development Company",
    shortTitle: "CRM Development",
    category: "Sales & Pipelines",
    seoTitle: "Custom CRM Development Company | BRAYON Technologies",
    seoDescription:
      "Custom CRM software development services. We build tailored customer relationship management platforms, automated lead capture pipelines, and WhatsApp integration.",
    keywords: [
      "CRM Development Company",
      "Custom CRM Development Company",
      "CRM Development Company India",
      "Custom CRM Software Development",
      "Sales Pipeline Automation",
    ],
    headline: "Custom CRM Software Tailored To Your Exact Sales Pipeline.",
    description:
      "Off-the-shelf CRMs charge exorbitant per-seat monthly fees while overwhelming your team with hundreds of unnecessary features. BRAYON Technologies engineers streamlined, proprietary CRM systems built around your specific deal stages, lead sources, quotation workflows, and follow-up automations.",
    targetAudience:
      "B2B service providers, manufacturing firms, trading companies, and businesses managing high-touch sales pipelines.",
    problemsSolved: [
      "Leads falling through cracks due to fragmented manual tracking",
      "Paying thousands of dollars monthly for bloated SaaS CRM seats",
      "Sales agents wasting hours manually entering lead details across multiple tools",
      "Zero management visibility into actual pipeline conversion metrics",
    ],
    brayonApproach:
      "We design custom CRMs that integrate directly with your website, WhatsApp, and email inboxes. Every lead is automatically captured, assigned to an agent, and tracked through customized deal stages with one-click quotation generation.",
    keyCapabilities: [
      "Automated WhatsApp & Web Lead Capture",
      "Custom Kanban Pipeline & Deal Stage Management",
      "Automated Follow-Up Reminders & Activity Timelines",
      "Dynamic PDF Quotation & Proposal Generator",
      "Agent Performance & Conversion Analytics",
      "Role-Based Sales Manager vs Representative Access",
    ],
    techStack: [
      { name: "Laravel", category: "Backend" },
      { name: "PHP", category: "Language" },
      { name: "React", category: "Frontend" },
      { name: "MySQL / PostgreSQL", category: "Database" },
      { name: "WhatsApp Business API", category: "Integration" },
      { name: "Redis", category: "Queue" },
    ],
    process: [
      { step: "01", title: "Sales Flow Mapping", description: "Auditing current lead sources, qualification steps, and conversion stages." },
      { step: "02", title: "CRM Data Architecture", description: "Modeling contacts, organizations, deals, quotations, and activity logs." },
      { step: "03", title: "Integration & Build", description: "Connecting WhatsApp webhooks, form listeners, and PDF generators." },
      { step: "04", title: "Team Onboarding", description: "Staff workflow training, data migration from spreadsheets, and go-live." },
    ],
    faqs: [
      {
        question: "How does a custom CRM save us money compared to Salesforce or HubSpot?",
        answer:
          "Off-the-shelf CRMs charge ₹3,000–₹10,000 per user every single month. A custom BRAYON CRM has zero recurring per-user licensing fees; you own the software completely forever.",
      },
      {
        question: "Can we import our existing customer spreadsheet?",
        answer:
          "Yes. We build automated data migration scripts that clean, deduplicate, and import your existing customer contacts and historical deals seamlessly.",
      },
    ],
    relatedCaseStudySlugs: ["safegrowtrade", "drivezone"],
  },

  "erp-development": {
    slug: "erp-development",
    title: "Custom ERP Software Development Services",
    shortTitle: "ERP Software Development",
    category: "Enterprise Operations",
    seoTitle: "ERP Software Development Company | BRAYON Technologies",
    seoDescription:
      "Custom ERP development company in India. We engineer unified business operating systems for multi-branch operations, warehouse inventory, GST billing, and procurement.",
    keywords: [
      "ERP Software Development Company",
      "Custom ERP Development",
      "Enterprise ERP Software Development",
      "ERP Software for Small Business",
      "Inventory and Accounting ERP",
    ],
    headline: "Unified Enterprise ERP Systems Connecting Operations, Inventory & Accounts.",
    description:
      "When business operations outgrow disconnected accounting software and manual spreadsheets, operational friction spikes. BRAYON Technologies designs centralized web ERP portals that unify inventory reconciliation, vendor purchase orders, GST invoicing, and branch logistics into a single source of truth.",
    targetAudience:
      "Wholesale distributors, multi-branch retailers, logistics providers, and manufacturing businesses needing consolidated operational visibility.",
    problemsSolved: [
      "Multi-branch inventory discrepancies and stockouts on high-demand items",
      "Delayed financial consolidation and manual GST calculation errors",
      "Lack of accountability across warehouse bin locations and order dispatch",
      "Paper-dependent purchase orders and delayed vendor payments",
    ],
    brayonApproach:
      "We architect modular ERP systems with ACID transactional guarantees. Every inventory deduction, dispatch milestone, and invoice creation is recorded in an immutable audit ledger, giving executive leadership real-time P&L visibility.",
    keyCapabilities: [
      "Multi-Branch Real-Time Inventory Tracking",
      "Automated Reorder Point Triggers & Low-Stock Alerts",
      "GST-Compliant E-Invoicing & Automated PDF Billing",
      "Vendor Management & Purchase Order Lifecycles",
      "Warehouse Bin Management & Barcode/QR Scanning",
      "Granular Multi-Department Permissions & Audit Trails",
    ],
    techStack: [
      { name: "Node.js / Laravel", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "React", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Redis", category: "Queue" },
      { name: "Docker", category: "Infrastructure" },
    ],
    process: [
      { step: "01", title: "Operational Audit", description: "Mapping department boundaries, inventory flows, and approval hierarchies." },
      { step: "02", title: "Transactional Modeling", description: "ACID database schema design for stock movements, invoices, and ledgers." },
      { step: "03", title: "Modular Build", description: "Building Inventory, Billing, and Warehouse modules in iterative sprints." },
      { step: "04", title: "Reconciliation & Deployment", description: "Data audit, legacy balance migration, and 30-day operational hypercare." },
    ],
    faqs: [
      {
        question: "Can our ERP connect multiple branch warehouses?",
        answer:
          "Yes. Our ERP architectures support centralized multi-branch databases with branch-level permission filters and inter-branch stock transfer workflows.",
      },
      {
        question: "Is the system GST-compliant in India?",
        answer:
          "Yes. We build automated HSN code mapping, CGST/SGST/IGST tax calculation, and automated GST invoice generation matching statutory standards.",
      },
    ],
    relatedCaseStudySlugs: ["safegrowtrade", "ashapura-dry-fruits"],
  },

  "ecommerce-development": {
    slug: "ecommerce-development",
    title: "E-Commerce Website Development Services",
    shortTitle: "E-Commerce Development",
    category: "Transactional Commerce",
    seoTitle: "E-commerce Website Development Services | BRAYON Technologies",
    seoDescription:
      "E-commerce website development company. We build high-converting B2B wholesale portals and D2C online stores with sub-second page loads and seamless payment checkout.",
    keywords: [
      "E-commerce Website Development Company",
      "E-commerce Website Development Services",
      "E-commerce Development Company India",
      "Custom E-commerce Platform",
      "B2B Wholesale E-commerce Portal",
    ],
    headline: "High-Conversion E-Commerce Infrastructure Built For High Order Volume.",
    description:
      "Sluggish checkout flows and clunky product filters kill conversions. BRAYON Technologies engineers decoupled, high-performance e-commerce platforms for wholesale (B2B) trade and direct-to-consumer (D2C) brands, supporting high order concurrency with zero inventory overselling.",
    targetAudience:
      "B2B distributors, manufacturers selling wholesale online, and growing D2C brands that have outgrown basic Shopify limitations.",
    problemsSolved: [
      "High shopping cart abandonment rates caused by slow checkout steps",
      "Inability to handle tiered wholesale bulk pricing alongside retail sales",
      "Payment gateway failures and lack of automatic webhook reconciliation",
      "Inventory mismatches between online storefront and physical warehouse",
    ],
    brayonApproach:
      "We build modern headless storefronts deployed on the edge, backed by transactional inventory state machines. Razorpay, Stripe, and UPI integrations ensure frictionless payments with instant digital confirmation.",
    keyCapabilities: [
      "B2B Wholesale Tiered Pricing Rules & Minimum Order Quantities",
      "Sub-Second Faceted Search & Category Filtering",
      "Automated Packing Slips & Warehouse Dispatch Integration",
      "Seamless Payment Gateways (UPI, Cards, NetBanking, Razorpay, Stripe)",
      "Dynamic Product Variants (Weight, Size, Pack Dimensions)",
      "Automated Order Status Notifications via WhatsApp & Email",
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "Laravel", category: "Backend" },
      { name: "MySQL / PostgreSQL", category: "Database" },
      { name: "Redis", category: "Cache" },
      { name: "Razorpay / Stripe", category: "Payment" },
      { name: "Tailwind CSS", category: "Styling" },
    ],
    process: [
      { step: "01", title: "Catalog & Pricing Architecture", description: "Designing SKU taxonomies, weight variants, and wholesale discount matrices." },
      { step: "02", title: "Frictionless Checkout UX", description: "1-page mobile-first checkout with address autofill and payment failovers." },
      { step: "03", title: "Backend State Machine", description: "Cart reservation locks, order statuses, and automated invoice PDF generation." },
      { step: "04", title: "Load Testing & Launch", description: "Simulating flash sales, payment webhook verification, and go-live." },
    ],
    faqs: [
      {
        question: "Can we offer wholesale pricing to approved buyers only?",
        answer:
          "Yes. Registered B2B accounts can view tiered wholesale volume pricing, MOQ rules, and credit terms, while retail guests see standard catalog pricing.",
      },
      {
        question: "How fast will the online store load?",
        answer:
          "Our headless Next.js storefronts load in under 1 second on mobile networks, achieving 95+ scores on Google PageSpeed Insights.",
      },
    ],
    relatedCaseStudySlugs: ["safegrowtrade", "ashapura-dry-fruits"],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development Services",
    shortTitle: "Mobile App Development",
    category: "Cross-Platform Mobile",
    seoTitle: "Mobile App Development Company | BRAYON Technologies",
    seoDescription:
      "Mobile app development company in India. We engineer high-performance cross-platform iOS and Android apps using React Native and Flutter with senior engineering oversight.",
    keywords: [
      "Mobile App Development Company",
      "Mobile App Development Company India",
      "React Native App Development",
      "Cross Platform Mobile App",
      "iOS and Android App Developers",
    ],
    headline: "Native-Speed Mobile Applications Built For Real-World Field Use.",
    description:
      "Whether powering field operations, customer loyalty portals, or on-demand service dispatch, your mobile app must be resilient to spotty network coverage. BRAYON Technologies engineers cross-platform mobile apps using React Native and Flutter with offline-first synchronization and 60 FPS performance.",
    targetAudience:
      "Service businesses, logistics dispatchers, on-demand platforms, and enterprises empowering mobile workforces.",
    problemsSolved: [
      "App crashes and freezes when field workers lose cellular connectivity",
      "Maintaining two disconnected codebases for iOS and Android doubling costs",
      "Dropped push notifications and delayed real-time geolocation tracking",
      "Unintuitive mobile navigation that frustrates end users",
    ],
    brayonApproach:
      "We engineer a single, clean TypeScript codebase that runs natively on both iOS and Android. Local SQLite caching ensures your app functions seamlessly offline and synchronizes in the background once connectivity is restored.",
    keyCapabilities: [
      "Unified iOS & Android Cross-Platform Development (React Native / Flutter)",
      "Offline-First SQLite Architecture with Background Sync",
      "Real-Time GPS Location Tracking & Map Integrations",
      "Push Notifications via Firebase Cloud Messaging (FCM)",
      "Hardware Integrations: Camera, Barcode / QR Scanning & Bluetooth",
      "In-App Digital Payment & One-Click Billing",
    ],
    techStack: [
      { name: "React Native", category: "Mobile" },
      { name: "Flutter", category: "Mobile" },
      { name: "TypeScript", category: "Language" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL / SQLite", category: "Database" },
      { name: "Firebase (FCM)", category: "Cloud" },
    ],
    process: [
      { step: "01", title: "Mobile UX Prototyping", description: "Thumb-zone ergonomic design, touch gestures, and screen navigation flows." },
      { step: "02", title: "Offline Data Engine", description: "Configuring local storage, sync queues, and background worker threads." },
      { step: "03", title: "Native Feature Build", description: "Push notifications, biometric login, GPS tracking, and payment gateways." },
      { step: "04", title: "App Store & Play Store", description: "Production bundling, binary signing, store compliance reviews, and launch." },
    ],
    faqs: [
      {
        question: "Do you publish our app to the Google Play Store and Apple App Store?",
        answer:
          "Yes. We handle end-to-end binary compilation, app asset generation, developer account submission, and approval review guidelines.",
      },
      {
        question: "Will the app work without internet?",
        answer:
          "Yes, we build offline-first architectures that allow users to inspect data, complete forms, and queue actions locally while offline.",
      },
    ],
    relatedCaseStudySlugs: ["drivezone", "safegrowtrade"],
  },

  "ai-automation": {
    slug: "ai-automation",
    title: "AI & Business Automation Solutions",
    shortTitle: "AI & Business Automation",
    category: "Intelligent Workflows",
    seoTitle: "Business Automation Solutions & AI | BRAYON Technologies",
    seoDescription:
      "Practical AI and business process automation solutions. We engineer intelligent WhatsApp copilots, document extraction pipelines, and automated customer qualification engines.",
    keywords: [
      "Business Automation Solutions",
      "Business Process Automation",
      "AI Workflow Automation",
      "WhatsApp AI Copilot Development",
      "Document Extraction AI",
    ],
    headline: "Practical AI & Automation Systems Built For Measurable Business ROI.",
    description:
      "Most AI initiatives fail because they chase hype instead of operational utility. BRAYON Technologies builds grounded, deterministic AI workflows: intelligent WhatsApp customer service copilots, automated invoice parsing, and CRM lead triage that eliminate hundreds of hours of manual labor.",
    targetAudience:
      "Growing companies buried in repetitive customer chat inquiries, manual document entry, or multi-step administrative workflows.",
    problemsSolved: [
      "Customer inquiries sitting unaddressed on WhatsApp for hours outside business hours",
      "Staff spending entire days re-typing invoice and order data from PDFs into ERPs",
      "Inconsistent sales qualification and delayed response to prospective leads",
      "Expensive call center overhead for basic status queries",
    ],
    brayonApproach:
      "We pair modern language models with strict retrieval-augmented generation (RAG) and deterministic API triggers. Your AI copilot answers with 100% verified company facts and directly updates your internal database without hallucinations.",
    keyCapabilities: [
      "WhatsApp Business AI Copilots with Database Lookups",
      "Automated PDF Invoice & Receipt Data Extraction",
      "24/7 Autonomous Lead Qualification & CRM Ingestion",
      "Zero-Hallucination Retrieval Augmented Generation (RAG)",
      "Event-Driven Webhook Automation Pipelines",
      "Voice & Audio Telemetry Integration",
    ],
    techStack: [
      { name: "Node.js / Python", category: "Backend" },
      { name: "OpenAI / Claude APIs", category: "AI Models" },
      { name: "WhatsApp Cloud API", category: "Integration" },
      { name: "PostgreSQL / pgvector", category: "Database" },
      { name: "Redis", category: "Queue" },
    ],
    process: [
      { step: "01", title: "Workflow Friction Audit", description: "Identifying high-volume repetitive tasks where automation yields immediate ROI." },
      { step: "02", title: "Knowledge & Guardrails", description: "Structuring verified business documentation and strict system prompts." },
      { step: "03", title: "API Integration Build", description: "Connecting LLM reasoning with internal database lookups and webhooks." },
      { step: "04", title: "Supervised Tuning", description: "Shadow testing alongside human operators before deploying to autonomous production." },
    ],
    faqs: [
      {
        question: "How do you prevent the AI from making up false answers?",
        answer:
          "We implement strict retrieval guardrails (RAG): the model only answers from verified internal data and falls back gracefully to a human representative when unsure.",
      },
      {
        question: "Can the AI interact with our WhatsApp Business number?",
        answer:
          "Yes. Using the official WhatsApp Business API, we configure automated intelligent conversations that look up student roll numbers, order statuses, or book appointments directly.",
      },
    ],
    relatedCaseStudySlugs: ["jbce", "safegrowtrade"],
  },

  "api-development": {
    slug: "api-development",
    title: "API Development & Integration Services",
    shortTitle: "API Development & Integration",
    category: "Backend Architecture",
    seoTitle: "API Development Services & Integration | BRAYON Technologies",
    seoDescription:
      "High-throughput RESTful and GraphQL API development services. We engineer secure API gateways, payment integrations, and microservices architectures with senior discipline.",
    keywords: [
      "API Development Services",
      "RESTful API Development",
      "API Integration Services",
      "Enterprise API Engineering",
      "Microservices Architecture",
    ],
    headline: "Resilient, Sub-100ms APIs Engineered For High-Concurrency Data Exchange.",
    description:
      "Modern digital products live and die by the speed, security, and predictability of their API contracts. BRAYON Technologies architects robust RESTful and GraphQL APIs featuring strict input validation, token-based authentication, rate limiting, and comprehensive OpenAPI documentation.",
    targetAudience:
      "Enterprises connecting distributed systems, mobile app backends, third-party integration partners, and organizations modernizing legacy databases.",
    problemsSolved: [
      "Unpredictable API endpoint latency causing sluggish frontend user experiences",
      "Insecure endpoints exposed to injection attacks and scraping bots",
      "Inconsistent data contracts breaking client mobile and web apps",
      "Lack of idempotency resulting in duplicate financial transactions",
    ],
    brayonApproach:
      "We design deterministic API endpoints with parameterized queries, structured JSON contracts, and sub-100ms response targets. Comprehensive automated test suites ensure zero regressions across releases.",
    keyCapabilities: [
      "RESTful & GraphQL Endpoint Architecture",
      "JWT & Bearer Token Authentication (Sanctum/Passport/OAuth)",
      "Third-Party Payment & SMS Gateway Integration",
      "HMAC Webhook Generation & Consumer Verification",
      "Redis Caching & Token Bucket Rate Limiting",
      "OpenAPI / Swagger Interactive Documentation",
    ],
    techStack: [
      { name: "Laravel", category: "Backend" },
      { name: "Node.js", category: "Backend" },
      { name: "PHP", category: "Language" },
      { name: "TypeScript", category: "Language" },
      { name: "PostgreSQL / MySQL", category: "Database" },
      { name: "Redis", category: "Cache" },
    ],
    process: [
      { step: "01", title: "API Contract Design", description: "Defining JSON schemas, status codes, and error payloads before coding." },
      { step: "02", title: "Backend Logic & Security", description: "Building handlers with parameterized validation, RBAC, and rate limits." },
      { step: "03", title: "Testing & Documentation", description: "Automated test suites, load testing, and OpenAPI documentation." },
      { step: "04", title: "Deployment & Monitoring", description: "Deploying behind NGINX reverse proxy with continuous latency telemetry." },
    ],
    faqs: [
      {
        question: "Do you provide complete documentation for internal developers?",
        answer:
          "Yes. Every API comes with interactive OpenAPI / Swagger specifications and Postman collections with sample payloads and error status codes.",
      },
      {
        question: "How do you prevent duplicate requests during checkout?",
        answer:
          "We enforce idempotency keys on all critical write endpoints, ensuring network retries never trigger duplicate orders or duplicate credit card charges.",
      },
    ],
    relatedCaseStudySlugs: ["jbce", "mhvp", "safegrowtrade"],
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design & Product Strategy",
    shortTitle: "UI/UX Design",
    category: "Product Design",
    seoTitle: "UI/UX Design Company | BRAYON Technologies",
    seoDescription:
      "User-centered UI/UX design services. We craft intuitive web and mobile interfaces, responsive design systems, and conversion-focused customer journeys in Figma.",
    keywords: [
      "UI UX Design Company",
      "UI UX Design Services",
      "Product Design Studio",
      "Figma UI UX Design",
      "Conversion Rate Optimization Design",
    ],
    headline: "Art-Directed Digital Interfaces Engineered For High Conversion & Usability.",
    description:
      "Great software design is not merely decorative styling—it is how the user thinks, navigates, and completes high-value transactions. BRAYON Technologies combines human-centered user experience design with rigorous design systems in Figma, ensuring effortless usability and brand distinction.",
    targetAudience:
      "Founders turning conceptual ideas into prototypes, and established companies redesigning cluttered legacy applications into intuitive tools.",
    problemsSolved: [
      "High drop-off rates on sign-up and checkout funnels due to cognitive clutter",
      "Inconsistent UI elements across screens confusing users and slowing development",
      "Accessibility violations that exclude users and harm brand reputation",
      "Building the wrong features by writing code before validating user flows",
    ],
    brayonApproach:
      "We design interactive prototypes in Figma with complete component variants and responsive auto-layout. You test every interaction before a single line of backend code is committed, saving thousands in development revisions.",
    keyCapabilities: [
      "Interactive Wireframing & Clickable Prototypes in Figma",
      "Comprehensive Design Systems & Token Architecture",
      "Conversion Rate Optimization (CRO) Funnel Design",
      "High-Density Administrative Dashboard UX",
      "WCAG 2.1 AAA Accessibility & High-Contrast Typography",
      "Developer Handover Specifications & Asset Kits",
    ],
    techStack: [
      { name: "Figma", category: "Design Tool" },
      { name: "Tailwind CSS", category: "Design Tokens" },
      { name: "Component Systems", category: "Architecture" },
      { name: "WCAG AAA", category: "Accessibility" },
    ],
    process: [
      { step: "01", title: "User Journey Audit", description: "Mapping key tasks, user personas, and conversion hurdles." },
      { step: "02", title: "Wireframes & Flows", description: "Low-fidelity wireframes confirming layout hierarchy and logical flow." },
      { step: "03", title: "Visual Art Direction", description: "High-fidelity screens with typography, color palettes, and micro-interactions." },
      { step: "04", title: "Design System Delivery", description: "Complete component library with developer handover notes." },
    ],
    faqs: [
      {
        question: "Do we receive the original Figma files?",
        answer:
          "Yes. You receive 100% ownership of all Figma source files, reusable component libraries, design tokens, and exportable vector assets.",
      },
      {
        question: "Can you redesign our existing application without breaking backend logic?",
        answer:
          "Yes. We specialize in interface modernization that maps cleanly onto existing database schemas and backend APIs without requiring total rewrites.",
      },
    ],
    relatedCaseStudySlugs: ["jbce", "safegrowtrade"],
  },
};

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}