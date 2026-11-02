export interface IndustryDetail {
  slug: string;
  name: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  headline: string;
  overview: string;
  domainChallenges: string[];
  tailoredSolutions: { title: string; description: string }[];
  keyCapabilities: string[];
  architectureStack: string[];
  faqs: { question: string; answer: string }[];
  caseStudySlugs: string[];
}

export const industryDetailData: Record<string, IndustryDetail> = {
  education: {
    slug: "education",
    name: "Education & EdTech",
    category: "Academic & Institutional Systems",
    seoTitle: "Education Software & Examination Portal Development | BRAYON Technologies",
    seoDescription:
      "Educational web portal and examination management development. Tamper-proof certificate verification, student admission funnels, and high-concurrency result publishing.",
    keywords: [
      "Education Software Development",
      "Student Certificate Verification System",
      "Examination Result Portal Development",
      "Institute Management Software",
      "EdTech Web Development",
    ],
    headline: "Tamper-Proof Student Verification & High-Concurrency Academic Portals.",
    overview:
      "Educational institutions face unique technological challenges: coordinating multiple regional training branches, preventing certificate counterfeiting, and publishing student examination results to thousands of concurrent candidates on announcement day without server crashes.",
    domainChallenges: [
      "Employers unable to verify issued computer training and degree certificates online in real time",
      "Extreme traffic surges causing server downtime when thousands of students check annual results concurrently",
      "Fragmented student admissions and syllabus distribution handled through slow physical paperwork",
      "Lack of centralized multi-branch franchise coordination and fee reconciliation",
    ],
    tailoredSolutions: [
      {
        title: "Sub-Second Certificate Verification Engine",
        description:
          "Instant roll-number lookups with cryptographic hashing, preventing paper certificate forgery and giving employers 100% digital verification confidence.",
      },
      {
        title: "High-Throughput Examination Result Engine",
        description:
          "Relational databases indexed for B-tree query execution, connection pooling, and edge caching ensuring zero downtime during peak publication spikes.",
      },
      {
        title: "Multi-Center Branch Administration",
        description:
          "Role-separated portals allowing central administrative committees to oversee multi-state branch accreditations, exam calendars, and syllabi.",
      },
    ],
    keyCapabilities: [
      "Online Roll Number & Certificate Query Engine",
      "High-Concurrency Result Publishing Infrastructure",
      "Centralized Admission & Student Inquiry Funnels",
      "Franchise Center Management & Registration Portals",
      "Examination Calendar & Syllabus Dissemination",
      "Bilingual Institutional Typography (Hindi & English)",
    ],
    architectureStack: ["PHP", "ASP.NET / C#", "MySQL", "SQL Server", "REST APIs", "NGINX"],
    faqs: [
      {
        question: "How does the student verification engine prevent forged certificates?",
        answer:
          "Each student record is stored in a normalized relational database with an indexed roll number. Employers enter the roll number to view the official accredited marks and photo, making paper alterations immediately obvious.",
      },
      {
        question: "Can the result portal survive heavy viral traffic spikes?",
        answer:
          "Yes. In our live deployment for Mumbai Hindi Vidyapeeth (mhvp.org), the portal handles concurrent result surges with zero downtime using indexed queries and connection pooling.",
      },
    ],
    caseStudySlugs: ["jbce", "mhvp"],
  },

  "retail-ecommerce": {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    category: "Transactional Commerce",
    seoTitle: "E-Commerce & Wholesale Retail Software Development | BRAYON Technologies",
    seoDescription:
      "Custom wholesale B2B portals and D2C e-commerce systems with sub-second catalog search, dynamic tiered pricing, and automated inventory sync.",
    keywords: [
      "Retail Software Development",
      "B2B Wholesale Portal",
      "Custom E-commerce Software",
      "Inventory Management Retail",
      "High Speed Storefront",
    ],
    headline: "Sub-Second Storefronts & High-Volume B2B Wholesale Commerce Platforms.",
    overview:
      "Modern retail requires instant page loads, dynamic wholesale tier discounts, accurate multi-location stock counts, and friction-free mobile checkout. BRAYON Technologies engineers high-conversion transactional commerce software built for high order volumes.",
    domainChallenges: [
      "Slow monolithic platforms with 5+ second load times causing cart abandonment",
      "Inability to handle wholesale bulk discounts and credit terms alongside consumer retail",
      "Inventory overselling when online sales and warehouse stock are not synchronized in real time",
      "Manual dispatch slips causing errors in packing and delivery turnaround",
    ],
    tailoredSolutions: [
      {
        title: "Decoupled Edge Storefronts",
        description:
          "Next.js headless frontends loading in under 1 second with instant faceted search and category filtering.",
      },
      {
        title: "Wholesale Tier Pricing Engine",
        description:
          "Custom B2B pricing matrices with volume brackets, minimum order rules, and approval-based business buyer accounts.",
      },
      {
        title: "Real-Time Warehouse Stock Sync",
        description:
          "Automated stock threshold alerts, barcode picking slips, and instant deduction upon verified checkout.",
      },
    ],
    keyCapabilities: [
      "Headless E-Commerce Frontends (0.9s PageSpeed)",
      "B2B Wholesale Portals & Buyer Account Approvals",
      "Razorpay, Stripe & Multi-Mode Digital Payment Gateways",
      "Dynamic Weight-Based Variants & Custom Gift Builders",
      "Automated Packing Slips & Warehouse Waybills",
      "Automated WhatsApp Order & Delivery Notifications",
    ],
    architectureStack: ["Next.js", "Laravel", "MySQL", "Redis", "Razorpay", "Tailwind CSS"],
    faqs: [
      {
        question: "Can we support both B2B wholesale and direct consumer retail on the same platform?",
        answer:
          "Yes. Our platforms enforce role-based catalog views: guest consumers see standard retail prices, while approved B2B buyers see wholesale pricing tiers and bulk order tools.",
      },
      {
        question: "How do you protect against duplicate checkout charges?",
        answer:
          "We use idempotent payment handlers with automated webhook verification, ensuring customers are never double-charged during connection drops.",
      },
    ],
    caseStudySlugs: ["safegrowtrade", "ashapura-dry-fruits"],
  },

  healthcare: {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    category: "Clinical & Patient Portals",
    seoTitle: "Healthcare Software Development & Patient Portals | BRAYON Technologies",
    seoDescription:
      "Secure healthcare software development: patient appointment scheduling, encrypted consultation histories, diagnostic record management, and privacy compliance.",
    keywords: [
      "Healthcare Software Development",
      "Patient Portal Development",
      "Clinic Appointment Scheduling Software",
      "Telehealth Web Application",
      "Medical Software Development",
    ],
    headline: "Secure, Privacy-First Patient Portals & Clinical Scheduling Engines.",
    overview:
      "Healthcare workflows demand strict data confidentiality, zero scheduling double-bookings, and intuitive interfaces accessible to both medical professionals and patients of all tech proficiencies.",
    domainChallenges: [
      "Clashing clinic appointments and long patient waiting room delays",
      "Unencrypted patient records and lack of audit logging for regulatory compliance",
      "Difficulty sharing lab reports and diagnostic histories securely with patients",
      "Manual phone appointment reminders taking hours of front-desk staff time",
    ],
    tailoredSolutions: [
      {
        title: "Doctor & Bay Allocation Calendar",
        description:
          "Automated booking rules preventing overlapping doctor appointments and matching consultation durations to specialty needs.",
      },
      {
        title: "Encrypted Patient Portals",
        description:
          "Role-based access separating patient self-service views from physician notes, backed by TLS 1.3 encryption and audit trails.",
      },
      {
        title: "Automated SMS & WhatsApp Reminders",
        description:
          "Proactive consultation reminders sent automatically, reducing clinic no-show rates by up to 35%.",
      },
    ],
    keyCapabilities: [
      "Doctor & Clinic Bay Allocation Calendar",
      "Encrypted Patient Diagnostic Record Storage",
      "Automated Appointment Confirmation & Reminders",
      "Digital Prescription & Medical Certificate Generation",
      "Role-Based Physician, Nurse & Admin Access Controls",
      "HIPAA-Aware Architectural Security Patterns",
    ],
    architectureStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "TLS 1.3"],
    faqs: [
      {
        question: "How do you protect sensitive medical records?",
        answer:
          "All patient records are encrypted at rest with AES-256 and transmitted over TLS 1.3. We log all access events in an immutable audit ledger.",
      },
    ],
    caseStudySlugs: ["drivezone"],
  },

  logistics: {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    category: "Fleet & Dispatch Management",
    seoTitle: "Logistics & Fleet Management Software Development | BRAYON Technologies",
    seoDescription:
      "Custom logistics software, fleet dispatch tracking, barcode warehouse bin management, and route planning systems engineered for operational speed.",
    keywords: [
      "Logistics Software Development",
      "Fleet Management System",
      "Warehouse Management System WMS",
      "Driver Dispatch Software",
      "Route Optimization Portal",
    ],
    headline: "Real-Time Fleet Dispatch, Route Planning & Warehouse Bin Systems.",
    overview:
      "Transportation and warehousing businesses operate in fast-moving physical environments. BRAYON Technologies builds operational systems that give dispatchers, warehouse pickers, and fleet drivers synchronized real-time visibility.",
    domainChallenges: [
      "Fleet dispatch delays caused by phone call confirmations and missing waybills",
      "Dead stock and expired inventory caused by manual bin recording errors",
      "Lack of real-time GPS milestone tracking for high-value client shipments",
      "Disjointed branch warehouses lacking unified stock transfer procedures",
    ],
    tailoredSolutions: [
      {
        title: "Real-Time Dispatch Dashboard",
        description:
          "Interactive fleet dispatch console with driver status, OTP handover confirmation, and live route mapping.",
      },
      {
        title: "Barcode / QR Warehouse Bin Engine",
        description:
          "Mobile-friendly scanning for receiving, FIFO stock rotation, and automated pick-list generation.",
      },
      {
        title: "Digital Proof of Delivery",
        description:
          "Instant digital signature, photo capture of delivered goods, and automated invoice trigger.",
      },
    ],
    keyCapabilities: [
      "Fleet Dispatch & Driver Trip Allocation",
      "Barcode Warehouse Picking & FIFO Stock Rotation",
      "Digital Proof of Delivery with Photo Capture",
      "Automated Waybill & Handover PDF Generation",
      "Low-Stock Alerts & Automated Purchase Reorders",
      "Real-Time WebSocket State Updates",
    ],
    architectureStack: ["Node.js", "PostgreSQL", "React", "WebSockets", "Redis", "Docker"],
    faqs: [
      {
        question: "Can warehouse staff use handheld mobile barcode scanners?",
        answer:
          "Yes. Our warehouse modules support mobile camera scanning as well as Bluetooth Zebra and industrial barcode scanners.",
      },
    ],
    caseStudySlugs: ["safegrowtrade", "drivezone"],
  },

  finance: {
    slug: "finance",
    name: "Finance & Professional Services",
    category: "Fintech & Operational Accounting",
    seoTitle: "Fintech & Billing Software Development | BRAYON Technologies",
    seoDescription:
      "Custom financial software, GST billing engines, client accounting portals, and automated quotation pipelines built with enterprise security.",
    keywords: [
      "Fintech Software Development",
      "GST Billing Software Development",
      "Client Accounting Portal",
      "Automated Invoicing Software",
      "Financial Software Company",
    ],
    headline: "Automated GST Invoicing, Ledgers & Secure Client Accounting Portals.",
    overview:
      "Financial consultancies, accountants, and service firms waste countless hours cross-referencing bank statements, computing GST manually, and chasing overdue invoices. BRAYON builds automated billing and client ledger software that eliminates bookkeeping errors.",
    domainChallenges: [
      "Manual calculation of GST breakdowns (CGST, SGST, IGST) leading to filing errors",
      "Chasing overdue client payments with disconnected manual reminders",
      "Scattered client financial documents and unencrypted tax records",
      "Lack of role-based permissions between accountants and company directors",
    ],
    tailoredSolutions: [
      {
        title: "Automated GST Invoice Engine",
        description:
          "Statutory GST compliance with automated tax calculation, HSN code lookups, and instant PDF invoice dispatch.",
      },
      {
        title: "Secure Client Document Portal",
        description:
          "Encrypted self-service portal where clients view statements, download invoices, and settle balances online.",
      },
      {
        title: "Automated Payment Reminders",
        description:
          "Scheduled WhatsApp and email payment follow-ups triggered before and after due dates.",
      },
    ],
    keyCapabilities: [
      "GST-Compliant Automated Invoicing Engine",
      "Multi-Currency & Razorpay/Stripe Payment Integration",
      "Customer Account Balance & Ledger Portals",
      "Immutable Audit Trails & Access Logging",
      "Automated Overdue Payment Reminders",
      "One-Click P&L & Tax Filing Summary Reports",
    ],
    architectureStack: ["Laravel", "PHP", "PostgreSQL", "React", "Redis", "PDF Engine"],
    faqs: [
      {
        question: "Can the system generate statutory GST compliant invoices?",
        answer:
          "Yes. Invoices include GSTIN validation, HSN/SAC codes, state code routing, and appropriate tax categorization.",
      },
    ],
    caseStudySlugs: ["safegrowtrade", "hr-saas"],
  },

  startups: {
    slug: "startups",
    name: "Startups & Growing Enterprises",
    category: "High-Speed Product Engineering",
    seoTitle: "Startup Software Development & MVP Engineering | BRAYON Technologies",
    seoDescription:
      "Rapid MVP engineering and SaaS product development for ambitious startups. We take you from idea to production deployment in 30 days with 100% IP ownership.",
    keywords: [
      "Startup Software Development",
      "MVP Development Company",
      "SaaS Product Development",
      "Hire Startup Developers",
      "Full Stack MVP Engineering",
    ],
    headline: "From Idea to Production-Ready MVP in 30 Days with 100% IP Ownership.",
    overview:
      "Startups cannot afford months of bloated agency meetings or buggy prototypes that require complete rewrites when customer traction hits. BRAYON Technologies engineers scalable, production-grade MVPs with clean TypeScript and modern cloud architectures.",
    domainChallenges: [
      "Slow development cycles causing startups to miss market windows",
      "Agencies building on low-code wrappers that cannot scale beyond 100 users",
      "Hidden vendor lock-in where agencies hold the source code hostage",
      "Excessive technical debt requiring expensive rewrites after launch",
    ],
    tailoredSolutions: [
      {
        title: "30-Day Agile MVP Sprint",
        description:
          "Focused feature scoping, interactive Figma prototyping, and rapid sprint engineering to launch your product in 30 days.",
      },
      {
        title: "Production Architecture from Day One",
        description:
          "Built on Next.js, TypeScript, and normalized PostgreSQL—the exact stack used by high-growth venture-backed companies.",
      },
      {
        title: "100% Private Repository & Cloud Transfer",
        description:
          "You own all Git repositories, infrastructure keys, and database schemas with zero vendor lock-in.",
      },
    ],
    keyCapabilities: [
      "30-Day Production-Ready MVP Launch",
      "Multi-Tenant SaaS Architecture with Auth & Billing",
      "Interactive Figma Prototypes Before Code",
      "Stripe & Razorpay Subscription Checkout",
      "100% Intellectual Property & Git Ownership",
      "30-Day Post-Launch Hypercare Support",
    ],
    architectureStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    faqs: [
      {
        question: "How fast can you build our startup MVP?",
        answer:
          "A focused, investor-ready MVP typically takes 3 to 4 weeks, delivered in weekly testable milestone demos.",
      },
      {
        question: "Do you take equity or only milestone cash?",
        answer:
          "We operate on transparent, fixed milestone cash billing so you retain 100% of your company equity and 100% of your source code.",
      },
    ],
    caseStudySlugs: ["safegrowtrade", "hr-saas"],
  },
};

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return industryDetailData[slug];
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(industryDetailData);
}