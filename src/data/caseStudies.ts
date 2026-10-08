import { CaseStudy } from "@/types/caseStudy";

export const caseStudies: CaseStudy[] = [
  {
    id: "PROJECT_01",
    slug: "jbce",
    title: "Jay Balaji Computer Education (JBCE)",
    projectType: "Educational Institute & Student Verification Portal",
    category: "Web Applications",
    industry: "Education & IT Training",
    clientId: "CLIENT_01",
    clientDisplayName: "Jay Balaji Computer Education (ISO 9001:2015 Certified)",
    liveUrl: "https://jbce.in/",
    shortDescription:
      "A centralized educational web platform engineered for student lifecycle management, course administration, franchise branch operations, and tamper-proof online certificate verification.",
    overview:
      "Jay Balaji Computer Education (JBCE) is a premier IT education and certification provider running under government registration with ISO 9001:2015 accreditation. BRAYON Technologies architected and built the public web platform, centralized student enrollment workflows, franchise center management, and real-time online certificate verification engine to ensure zero document forgery.",
    challenge: {
      title: "Manual Student Record Keeping & Physical Certificate Verification Delays",
      description:
        "As JBCE expanded across multiple training centers, managing student admissions, course schedules, and certificate issuance through manual paperwork caused significant operational bottlenecks. Employers and regulatory bodies required an instant, reliable digital mechanism to verify student certificates without physical branch visits.",
      painPoints: [
        "Inability for employers and institutions to verify student completion certificates in real time.",
        "Manual record keeping across dispersed branch centers causing duplicated student entries.",
        "Paper-dependent examination scheduling and delayed notification dispatch for students.",
        "Lack of a centralized digital course catalog with online registration and lead capture.",
      ],
    },
    solution: {
      title: "Secure Verification Database, Role-Based Center Management & Dynamic Course Portal",
      description:
        "BRAYON Technologies engineered a high-availability web platform featuring an instant roll-number verification engine, a centralized student management system, dynamic course curriculum management, and dedicated branch inquiry funnels.",
      highlights: [
        "Architected an instant online certificate & student verification engine with tamper-proof roll-number indexing.",
        "Engineered branch center registration workflows with standardized documentation and approval gates.",
        "Built responsive, mobile-first course catalog showcasing web development, programming, and advanced certification syllabi.",
        "Integrated dynamic student enquiry capture pipelines with automated branch routing.",
        "Delivered lightweight, optimized frontend assets achieving sub-second page loads on 3G/4G mobile networks.",
      ],
    },
    features: [
      "Online Student Verification Engine",
      "Roll Number & Certificate Search",
      "Dynamic IT Course Directory",
      "Branch & Franchise Enquiry Workflow",
      "Online Student Admission Forms",
      "Examination Calendar & Notices",
      "Administrative Management Scaffolding",
      "SEO & Mobile-First Responsive Layout",
    ],
    technologies: [
      "php",
      "mysql",
      "javascript",
      "html-css",
      "bootstrap",
      "rest-apis",
    ],
    architecture: {
      frontend: ["Responsive HTML5 / CSS3", "Bootstrap Responsive Grid", "Vanilla JavaScript (ES6+)"],
      backend: ["PHP Server Runtime", "Structured Query Handlers", "Input Sanitization & CSRF Security"],
      database: ["MySQL Relational Store", "Indexed Roll Number Records", "Student & Course Schema"],
      cloud: ["Apache Web Server", "Linux Host Environment", "SSL/TLS Security"],
      integrations: ["Tawk.to Live Messaging", "Google Tag Manager", "Google Analytics 4"],
    },
    heroImage: "/brayon-logo-showcase.png",
    thumbnailImage: "/brayon-logo-showcase.png",
    gallery: [
      {
        src: "/brayon-logo-showcase.png",
        caption: "JBCE Student & Certificate Verification Architecture",
        alt: "JBCE System Architecture",
      },
      {
        src: "/brayon-logo-showcase.png",
        caption: "Centralized IT Course & Training Catalog",
        alt: "JBCE Course Catalog",
      },
      {
        src: "/brayon-logo-showcase.png",
        caption: "Multi-Branch Franchise & Student Registration Workflow",
        alt: "JBCE Registration Workflow",
      },
    ],
    results: [
      "Active in production serving thousands of student lookups",
      "100% digital verification eliminating physical certificate fraud",
      "Sub-second verification response times across mobile and desktop",
      "Seamless branch center expansion and centralized inquiry logging",
    ],
    featured: true,
    published: true,
    seo: {
      title: "Jay Balaji Computer Education (JBCE) Case Study | BRAYON Technologies",
      description:
        "How BRAYON Technologies engineered the educational portal and instant certificate verification platform for Jay Balaji Computer Education (https://jbce.in/).",
      keywords: [
        "Jay Balaji Computer Education",
        "jbce.in case study",
        "student certificate verification system",
        "educational web portal engineering",
        "BRAYON Technologies portfolio",
      ],
    },
  },
  {
    id: "PROJECT_02",
    slug: "mhvp",
    title: "Mumbai Hindi Vidyapeeth (MHVP)",
    projectType: "Academic Portal & Examination Management System",
    category: "Enterprise",
    industry: "Higher Education & Examination Systems",
    clientId: "CLIENT_02",
    clientDisplayName: "Mumbai Hindi Vidyapeeth (मुंबई हिन्दी विद्यापीठ)",
    liveUrl: "https://mhvp.org/",
    shortDescription:
      "A high-concurrency multi-center academic examination platform powering student registrations, examination center administration, and instant online student result publishing.",
    overview:
      "Mumbai Hindi Vidyapeeth (MHVP) is a historic academic institution administering recognized Hindi examinations including Uttama, Bhasharatna, Sahitya Sudhakar, Sahitya Ratnakar, and Shiksha Acharya across multi-state centers. BRAYON Technologies engineered and supports their digital academic portal, center registration network, and high-concurrency online student examination result publishing infrastructure.",
    challenge: {
      title: "Multi-Center Examination Coordination & Peak Result Traffic Surges",
      description:
        "With hundreds of affiliated examination centers across Maharashtra and other states, managing paper-based student enrollments and distributing exam results manually created weeks of operational delay. During annual result announcement days, thousands of students accessed the portal concurrently, requiring bulletproof backend query efficiency.",
      painPoints: [
        "Extreme server traffic spikes when thousands of candidates check results simultaneously.",
        "Manual, error-prone tabulation and distribution of examination marks across multi-state centers.",
        "Coordinating affiliated examination center accreditations, enrollments, and syllabus distribution.",
        "Strict requirement for role separation between central Vidyapeeth admins, center coordinators, and students.",
      ],
    },
    solution: {
      title: "High-Throughput Result Query Engine & Distributed Center Administration Portal",
      description:
        "We engineered an enterprise academic portal featuring dedicated center login areas, automated candidate enrollment pipelines, an online result lookup engine, and comprehensive academic rulebook (Upanityam) and examination calendar distribution.",
      highlights: [
        "Architected an indexed student result engine capable of sub-second mark retrieval under concurrent result-day traffic.",
        "Engineered multi-level administrative control panels separating central committee governance from center-level operations.",
        "Delivered online student inquiry, center affiliation application, and hall-ticket roll distribution workflows.",
        "Built responsive Hindi/English bilingual typography and institutional layout honoring Vidyapeeth heritage.",
        "Ensured zero downtime and resilient database connection pooling during peak examination season.",
      ],
    },
    features: [
      "Student Online Examination Result Engine",
      "Affiliated Center Registration & Directory",
      "Central Admin & Center Login Portals",
      "Examination Calendar (Pariksha Panchang)",
      "Curriculum & Syllabus Digital Dissemination",
      "Bilingual Institutional Web Experience",
      "Computer Skill Certification (OCC Uttama)",
      "Student Inquiry & Admission Routing",
    ],
    technologies: [
      "javascript",
      "html-css",
      "bootstrap",
      "rest-apis",
      "sql-server",
    ],
    architecture: {
      frontend: ["Responsive Semantic HTML5", "Bilingual Typography System", "Bootstrap Modular CSS"],
      backend: ["Enterprise Web Application Framework", "Role-Based Authentication Filters", "Structured Data Query APIs"],
      database: ["Relational Examination Database", "Indexed Roll Numbers & Center IDs", "Historic Result Archives"],
      cloud: ["Secure Hosted Infrastructure", "Connection Pooling & Traffic Balancing", "Continuous Data Backup"],
      integrations: ["Student Result Verification Service", "Center Login Scaffolding", "Online Registration Webhooks"],
    },
    heroImage: "/brayon-logo-showcase.png",
    thumbnailImage: "/brayon-logo-showcase.png",
    gallery: [
      {
        src: "/brayon-logo-showcase.png",
        caption: "MHVP Multi-Center Examination & Result Architecture",
        alt: "MHVP System Architecture",
      },
      {
        src: "/brayon-logo-showcase.png",
        caption: "Online Student Examination Result Verification Portal",
        alt: "MHVP Result Portal",
      },
      {
        src: "/brayon-logo-showcase.png",
        caption: "Affiliated Center Registration & Administrative Network",
        alt: "MHVP Center Network",
      },
    ],
    results: [
      "Live and active in production serving multi-state examination centers",
      "Seamless result lookup with zero downtime during peak publication windows",
      "Elimination of manual result tabulation delays across affiliated centers",
      "Centralized oversight for administrative committees and center supervisors",
    ],
    featured: true,
    published: true,
    seo: {
      title: "Mumbai Hindi Vidyapeeth (MHVP) Case Study | BRAYON Technologies",
      description:
        "How BRAYON Technologies engineered the examination management portal and online student result system for Mumbai Hindi Vidyapeeth (https://mhvp.org/).",
      keywords: [
        "Mumbai Hindi Vidyapeeth",
        "mhvp.org case study",
        "examination result system engineering",
        "academic portal development",
        "BRAYON Technologies case studies",
      ],
    },
  },
  {
    id: "PROJECT_03",
    slug: "safegrowtrade",
    title: "SafeGrowTrade",
    projectType: "E-Commerce & Wholesale B2B Platform",
    category: "E-commerce",
    industry: "B2B Trade & Commerce",
    clientId: "CLIENT_03",
    clientDisplayName: "SafeGrowTrade",
    liveUrl: "https://safegrowtrade.com",
    shortDescription:
      "A complete e-commerce and wholesale trade management platform featuring automated ordering, wholesale tier pricing, secure online payments, and centralized admin panel.",
    overview:
      "SafeGrowTrade operates in product supply and commercial trade. Before partnering with BRAYON, product inventories, orders, and wholesale buyer quotations were handled manually across chat and spreadsheets. BRAYON architected and deployed a centralized web application and admin management suite.",
    challenge: {
      title: "Manual Product & Order Management Bottlenecks",
      description:
        "Manual product listing, disjointed buyer inquiries, paper-based order management, and delayed payment confirmations were creating severe operational bottlenecks as order volume scaled.",
      painPoints: [
        "Manual product catalog updates across multiple channels.",
        "Disorganized order tracking leading to fulfillment delays.",
        "No tiered wholesale pricing mechanism for bulk vs retail buyers.",
        "Manual payment reconciliation through bank screenshots.",
      ],
    },
    solution: {
      title: "Centralized E-Commerce Engine & Comprehensive Admin Control Suite",
      description:
        "We built a robust e-commerce platform with automated order pipelines, dynamic wholesale price tiers, secure payment gateway integrations, and an intuitive administrative backend.",
      highlights: [
        "Centralized product management with categorized inventory controls.",
        "Automated order lifecycle tracking from checkout to dispatch.",
        "Tiered wholesale pricing rules for registered business accounts.",
        "Seamless online payment gateway integration with instant status verification.",
        "Full administrative control panel with daily sales reporting.",
      ],
    },
    features: [
      "Product Management & Cataloging",
      "Wholesale Pricing Engine",
      "Order Management & Status Tracking",
      "Payment Gateway Integration",
      "Comprehensive Admin Control Panel",
      "Customer Account & Invoicing Portal",
      "Mobile-Responsive Storefront",
      "Automated Email & SMS Order Confirmations",
    ],
    technologies: ["php", "laravel", "mysql", "javascript", "tailwind", "rest-apis", "razorpay"],
    architecture: {
      frontend: ["Responsive Blade / Tailwind Layouts", "Vanilla JS & Alpine State Handlers"],
      backend: ["Laravel PHP Runtime", "Eloquent ORM", "Transactional Payment Handlers"],
      database: ["MySQL Relational Store", "Indexed Orders & Inventory Tables"],
      cloud: ["Hardened Linux Hosting", "SSL Encryption", "Automated Daily Database Backups"],
      integrations: ["Payment Gateway", "WhatsApp Notifications", "Transactional Email Service"],
    },
    heroImage: "/brayon-logo-showcase.png",
    thumbnailImage: "/brayon-logo-showcase.png",
    gallery: [
      {
        src: "/brayon-logo-showcase.png",
        caption: "SafeGrowTrade Storefront & Product Catalog",
        alt: "SafeGrowTrade Storefront",
      },
      {
        src: "/brayon-logo-showcase.png",
        caption: "Centralized Admin Dashboard & Order Management",
        alt: "SafeGrowTrade Admin Panel",
      },
    ],
    results: [
      "Centralized product management eliminating manual spreadsheets",
      "Automated order processing saving 15+ hours weekly",
      "Online payments with 100% instant digital confirmation",
      "Seamless wholesale pricing tiers driving higher B2B deal sizes",
      "Full admin controls for stock, pricing, and invoice generation",
    ],
    featured: true,
    published: true,
    seo: {
      title: "SafeGrowTrade E-Commerce Case Study | BRAYON Technologies",
      description:
        "How BRAYON Technologies engineered the centralized e-commerce and wholesale management platform for SafeGrowTrade.",
      keywords: ["SafeGrowTrade", "e-commerce case study", "wholesale platform development", "BRAYON Technologies"],
    },
  },
  {
    id: "PROJECT_04",
    slug: "ashapura-dry-fruits",
    title: "Ashapura Dry Fruits",
    projectType: "E-Commerce & Retail Packaging Platform",
    category: "E-commerce",
    industry: "FMCG & Dry Fruits Retail",
    clientId: "CLIENT_04",
    clientDisplayName: "Ashapura Dry Fruits",
    shortDescription:
      "A fast, high-converting digital storefront and back-office order fulfillment system for premium dry fruits retail and gift hampers.",
    overview:
      "Ashapura Dry Fruits wanted to digitize their premium dry fruit trade, corporate festive gifting orders, and direct-to-consumer delivery across India. BRAYON developed their responsive web catalog, cart checkout, and admin dispatch portal.",
    challenge: {
      title: "Festive Rush Bottlenecks & Scattered Order Logs",
      description:
        "High volumes during festive seasons made manual phone and messaging orders impossible to fulfill accurately without item mix-ups and stock discrepancies.",
      painPoints: [
        "Inability to handle peak seasonal ordering volume via WhatsApp alone.",
        "Frequent out-of-stock orders caused by unsynchronized inventory.",
        "Lack of custom gift hamper configuration options for buyers.",
      ],
    },
    solution: {
      title: "Modern D2C Storefront with Dynamic Weight & Packaging Variants",
      description:
        "Engineered a lightning-fast responsive storefront with weight-based pricing, custom gift box builders, and direct delivery slip generation for packing staff.",
      highlights: [
        "Variable weight selection (250g, 500g, 1kg) with real-time price updates.",
        "Instant checkout flow integrated with UPI & Card payment options.",
        "Printable dispatch orders with barcode packaging tracking.",
        "Mobile-first design optimized for quick repeat orders.",
      ],
    },
    features: [
      "Dynamic Product Variants & Weight Selection",
      "Corporate & Festive Gift Hamper Builder",
      "Automated Dispatch & Packing Slips",
      "Integrated Digital Payments (UPI / Cards)",
      "Stock Threshold & Restock Alerts",
    ],
    technologies: ["react", "nextjs", "typescript", "tailwind", "nodejs", "mysql"],
    architecture: {
      frontend: ["Next.js App Router", "Tailwind CSS", "Optimized Product Images"],
      backend: ["Node.js API Microservices", "Order State Machine"],
      database: ["MySQL Relational Store", "Inventory & Order Schemas"],
      cloud: ["Vercel Edge & Cloud Hosting", "Cloudflare CDN"],
      integrations: ["Payment Gateway", "Shipment Tracking API", "SMS Dispatch"],
    },
    heroImage: "/brayon-logo-showcase.png",
    thumbnailImage: "/brayon-logo-showcase.png",
    gallery: [
      {
        src: "/brayon-logo-showcase.png",
        caption: "Ashapura Dry Fruits Online Catalog",
        alt: "Ashapura Online Store",
      },
    ],
    results: [
      "3x faster order processing turnaround during festive seasons",
      "Zero inventory discrepancies between online and warehouse stock",
      "Streamlined dispatch flow with automated invoice and packing slips",
    ],
    featured: true,
    published: true,
    seo: {
      title: "Ashapura Dry Fruits Case Study | BRAYON Technologies",
      description: "How BRAYON built the digital ordering platform for Ashapura Dry Fruits.",
      keywords: ["Ashapura Dry Fruits", "D2C food retail website", "custom e-commerce software"],
    },
  },
  {
    id: "PROJECT_05",
    slug: "drivezone",
    title: "DriveZone",
    projectType: "Automotive Services & Booking Platform",
    category: "Web Applications",
    industry: "Automotive & Fleet Care",
    clientId: "CLIENT_05",
    clientDisplayName: "DriveZone Mobility",
    shortDescription:
      "A digital service booking, workshop bay allocation, and customer vehicle history platform for multi-branch auto service providers.",
    overview:
      "DriveZone operates vehicle service and maintenance workshops. They required a unified customer appointment portal and mechanic bay scheduling engine to prevent service overbooking and customer wait times.",
    challenge: {
      title: "Double Bookings & Untracked Vehicle Service Histories",
      description:
        "Paper service registers led to lost customer service histories, mismanaged technician time slots, and unpredictable vehicle delivery estimates.",
      painPoints: [
        "Unsynchronized customer service bookings across physical workshop bays.",
        "Customers had no visibility into real-time job-card progress.",
        "Missing historic records of previously replaced parts.",
      ],
    },
    solution: {
      title: "Unified Booking Engine, Digital Job-Cards & Service Tracker",
      description:
        "BRAYON built an end-to-end digital workshop platform allowing vehicle owners to book service packages online and track job-card inspection steps in real time.",
      highlights: [
        "Automated bay calendar preventing overlapping bookings.",
        "Digital job-card creation with photo upload of vehicle condition.",
        "Transparent cost estimates sent to customer phone before starting repair.",
        "Complete digital service history linked to vehicle registration numbers.",
      ],
    },
    features: [
      "Online Service Slot & Bay Booking",
      "Digital Inspection Job Cards",
      "Customer Real-Time Vehicle Status Tracker",
      "Parts Inventory Deduction Upon Service",
      "Automated Service Due & Insurance Reminders",
    ],
    technologies: ["react", "typescript", "nodejs", "postgresql", "tailwind", "rest-apis"],
    architecture: {
      frontend: ["React SPA", "Mobile-Optimized Workshop Tablet View"],
      backend: ["Node.js Express", "RESTful Job-Card Architecture"],
      database: ["PostgreSQL", "Relational Vehicle & Bay Models"],
      cloud: ["Dockerized Linux Deployment", "SSL TLS 1.3"],
      integrations: ["WhatsApp Message Webhooks", "Automated SMS"],
    },
    heroImage: "/brayon-logo-showcase.png",
    thumbnailImage: "/brayon-logo-showcase.png",
    gallery: [
      {
        src: "/brayon-logo-showcase.png",
        caption: "DriveZone Service Booking & Bay Allocation Interface",
        alt: "DriveZone Interface",
      },
    ],
    results: [
      "Eliminated workshop bay scheduling conflicts completely",
      "40% reduction in vehicle check-in time through digital job cards",
      "Higher repeat bookings through automated service reminder alerts",
    ],
    featured: true,
    published: true,
    seo: {
      title: "DriveZone Automotive Platform Case Study | BRAYON Technologies",
      description: "How BRAYON built the workshop management and booking system for DriveZone.",
      keywords: ["DriveZone", "automotive software", "service booking portal development"],
    },
  },
  {
    id: "PROJECT_06",
    slug: "hr-saas",
    title: "HR SaaS & Team Workforce Platform",
    projectType: "B2B SaaS HR & Payroll Management",
    category: "Enterprise",
    industry: "Enterprise SaaS & HR Tech",
    clientId: "CLIENT_06",
    clientDisplayName: "Enterprise HR SaaS Client",
    shortDescription:
      "A multi-tenant employee lifecycle, attendance tracking, leave management, and automated salary slip generator built for growing businesses.",
    overview:
      "A B2B SaaS platform engineered by BRAYON to solve everyday HR friction for growing SMBs and companies with distributed teams without paying exorbitant enterprise subscription fees.",
    challenge: {
      title: "Fragmented Attendance Logs & Manual Payroll Calculation",
      description:
        "Companies were losing hours every month matching biometric logs with leave requests and manually producing salary slips in Excel.",
      painPoints: [
        "Manual calculation of payroll deductions, PF, and leaves in spreadsheets.",
        "Scattered employee documentation and compliance files.",
        "No self-service employee portal for leave requests and payslip downloads.",
      ],
    },
    solution: {
      title: "Cloud HR Platform with Multi-Tenant Access & One-Click Payroll",
      description:
        "Engineered a scalable multi-tenant SaaS application providing role-based portals for company HR admins, managers, and employees.",
      highlights: [
        "Employee self-service dashboard for leave requests and salary slips.",
        "Configurable leave policies (Casual, Sick, Paid) with manager approval chains.",
        "One-click monthly payroll generation with PDF payslip batch downloads.",
        "Role-based security ensuring complete data privacy across departments.",
      ],
    },
    features: [
      "Employee Directory & Profile Records",
      "Leave Request & Multi-Level Approval Flow",
      "Automated Monthly Payroll Calculation",
      "Instant PDF Payslip Generation",
      "Biometric & Clock-in Log Synchronization",
    ],
    technologies: ["nextjs", "typescript", "laravel", "mysql", "redis", "tailwind"],
    architecture: {
      frontend: ["Next.js 16", "Tailwind CSS", "Component-Based UI"],
      backend: ["Laravel REST API", "Queue-Driven Batch PDF Generation"],
      database: ["MySQL Enterprise Store", "Multi-Tenant Separation Schema"],
      cloud: ["Linux Hardened Servers", "Redis In-Memory Queue Store"],
      integrations: ["Transactional Email Service", "PDF Generation Engine"],
    },
    heroImage: "/brayon-logo-showcase.png",
    thumbnailImage: "/brayon-logo-showcase.png",
    gallery: [
      {
        src: "/brayon-logo-showcase.png",
        caption: "HR SaaS Employee Dashboard & Leave Approval System",
        alt: "HR SaaS Dashboard",
      },
    ],
    results: [
      "Cut monthly payroll calculation time from 2 days to under 15 minutes",
      "Zero employee friction for leave applications and payslip access",
      "99.9% uptime with enterprise role-based security isolation",
    ],
    featured: true,
    published: true,
    seo: {
      title: "HR SaaS & Workforce Platform Case Study | BRAYON Technologies",
      description: "How BRAYON engineered a multi-tenant HR and payroll platform.",
      keywords: ["HR SaaS software", "payroll management portal", "custom B2B SaaS development"],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedCaseStudies(currentSlug: string, count = 2): CaseStudy[] {
  return caseStudies
    .filter((cs) => cs.slug !== currentSlug && cs.published)
    .slice(0, count);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured && cs.published);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  if (category === "All") return caseStudies.filter((cs) => cs.published);
  return caseStudies.filter((cs) => cs.category === category && cs.published);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  if (industry === "All") return caseStudies.filter((cs) => cs.published);
  return caseStudies.filter((cs) => cs.industry === industry && cs.published);
}
