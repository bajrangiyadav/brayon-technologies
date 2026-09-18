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
