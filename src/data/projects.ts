export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: "Web Apps" | "Enterprise Systems" | "Education";
  industry: string;
  duration: string;
  liveUrl?: string;
  tagline: string;
  overview: string;
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    architecturalHighlights: string[];
  };
  results: {
    metric: string;
    label: string;
    description: string;
  }[];
  techStack: {
    name: string;
    category: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const projects: CaseStudy[] = [
  {
    slug: "jbce",
    title: "Jay Balaji Computer Education: Student Verification & Institute Web Portal",
    client: "Jay Balaji Computer Education (JBCE)",
    category: "Web Apps",
    industry: "Education & IT Training",
    duration: "Production Active",
    liveUrl: "https://jbce.in/",
    tagline: "Centralized IT certification and student verification platform with instant online certificate lookup.",
    overview:
      "Jay Balaji Computer Education (JBCE) is an ISO 9001:2015 certified IT education institution. BRAYON Technologies delivered the official web portal, centralized student registration pipeline, and instant roll-number verification engine to prevent certificate counterfeiting.",
    challenge: {
      title: "Manual Record Keeping & Physical Certificate Verification",
      description:
        "Branch centers operated with fragmented paperwork, making it difficult for students, institutions, and employers to confirm course accreditations and credentials rapidly.",
      painPoints: [
        "No real-time online verification for issued computer training certificates.",
        "Dispersed student records across regional training centers.",
        "Manual inquiry and student enrollment workflows.",
      ],
    },
    solution: {
      title: "Centralized Verification Engine & Modern Institutional Portal",
      description:
        "BRAYON Technologies architected an instant online roll number query system, responsive course directory, and digital admission enquiry pipeline.",
      architecturalHighlights: [
        "Sub-second certificate and student mark verification lookups.",
        "Responsive, mobile-first design optimized for all screen sizes.",
        "Tamper-proof student record indexing and administrative controls.",
      ],
    },
    results: [
      {
        metric: "100%",
        label: "Digital Verification",
        description: "Zero physical certificate fraud with instant digital lookup.",
      },
      {
        metric: "Sub-1s",
        label: "Lookup Speed",
        description: "Instantaneous certificate verification queries.",
      },
      {
        metric: "Active",
        label: "Live in Production",
        description: "Actively serving students and center coordinators at jbce.in.",
      },
    ],
    techStack: [
      { name: "PHP", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "JavaScript", category: "Frontend" },
      { name: "Bootstrap", category: "Styling" },
      { name: "REST APIs", category: "Integration" },
    ],
  },
  {
    slug: "mhvp",
    title: "Mumbai Hindi Vidyapeeth: Multi-Center Examination & Academic Result Portal",
    client: "Mumbai Hindi Vidyapeeth (मुंबई हिन्दी विद्यापीठ)",
    category: "Enterprise Systems",
    industry: "Higher Education & Examination Systems",
    duration: "Production Active",
    liveUrl: "https://mhvp.org/",
    tagline: "High-concurrency academic portal powering multi-center examination management and online student result publications.",
    overview:
      "Mumbai Hindi Vidyapeeth (MHVP) conducts recognized Hindi examinations across multi-state affiliated centers. BRAYON Technologies developed and supports the institutional portal, center registration network, and high-concurrency student examination result publishing infrastructure.",
    challenge: {
      title: "Multi-Center Examination Coordination & Peak Result Traffic",
      description:
        "Managing hundreds of exam centers and publishing examination marks manually resulted in delays and extreme server strain during annual result announcements.",
      painPoints: [
        "Traffic surges when thousands of students concurrently check examination results.",
        "Manual mark tabulation and result dispatch across regional centers.",
        "Managing center affiliations and examination schedules via paper notices.",
      ],
    },
    solution: {
      title: "High-Throughput Result Query Engine & Center Administrative Scaffolding",
      description:
        "We engineered dedicated center and admin login portals, an optimized result publishing lookup engine, and structured curriculum dissemination.",
      architecturalHighlights: [
        "Indexed student result search engine handling high concurrency with zero downtime.",
        "Role-based access separating central administration from center supervisors.",
        "Bilingual Hindi/English digital institutional presence.",
      ],
    },
    results: [
      {
        metric: "100+",
        label: "Examination Centers",
        description: "Coordinated centers across Maharashtra and other states.",
      },
      {
        metric: "0s",
        label: "Downtime at Peak",
        description: "High-concurrency result lookups without service interruptions.",
      },
      {
        metric: "Active",
        label: "Live in Production",
        description: "Actively serving examination candidates and centers at mhvp.org.",
      },
    ],
    techStack: [
      { name: "ASP.NET / C#", category: "Backend" },
      { name: "SQL Server", category: "Database" },
      { name: "JavaScript", category: "Frontend" },
      { name: "Bootstrap", category: "Styling" },
      { name: "REST APIs", category: "Integration" },
    ],
  },
];
