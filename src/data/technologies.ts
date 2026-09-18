import { Technology } from "@/types/technology";

export const technologies: Technology[] = [
  // Frontend
  {
    id: "react",
    name: "React 19",
    category: "frontend",
    description: "Component-driven user interface architecture with optimized concurrent rendering.",
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "frontend",
    description: "Progressive JavaScript framework for building reactive, high-speed user interfaces.",
  },
  {
    id: "nextjs",
    name: "Next.js 16",
    category: "frontend",
    description: "Production React framework with Server Components, Edge static generation, and Turbopack.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    description: "Strict compile-time type safety preventing runtime null and undefined defects.",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "frontend",
    description: "Modern ECMAScript standards with asynchronous pipelines and DOM optimization.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    description: "Utility-first design tokens providing predictable, lightweight responsive layouts.",
  },
  {
    id: "html-css",
    name: "HTML5 & Semantic CSS",
    category: "frontend",
    description: "Accessible, semantic document markup compliant with WCAG 2.1 standards.",
  },

  // Backend
  {
    id: "laravel",
    name: "Laravel",
    category: "backend",
    description: "Enterprise PHP framework with Eloquent ORM, job queues, and robust auth scaffolding.",
  },
  {
    id: "php",
    name: "PHP 8.2+",
    category: "backend",
    description: "High-throughput server-side scripting language with JIT compilation and strict typing.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    description: "Asynchronous non-blocking event-driven runtime for high-concurrency microservices.",
  },
  {
    id: "express",
    name: "Express",
    category: "backend",
    description: "Minimalist server framework for constructing resilient, lightweight REST endpoints.",
  },

  // Database
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    description: "ACID-compliant relational database engine with composite indexing and query optimization.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    description: "Document-oriented NoSQL database optimized for flexible data structures and high ingest.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    description: "Advanced open-source relational database with JSONB indexing and complex aggregations.",
  },
  {
    id: "redis",
    name: "Redis",
    category: "database",
    description: "In-memory data store for sub-millisecond caching, session locks, and pub/sub queues.",
  },

  // AI
  {
    id: "ai-apis",
    name: "AI APIs",
    category: "ai",
    description: "Integration with frontier LLM providers (OpenAI, Anthropic) via authenticated REST APIs.",
  },
  {
    id: "llm-integrations",
    name: "LLM Integrations",
    category: "ai",
    description: "System prompt engineering, tool calling, structured JSON output, and context handling.",
  },
  {
    id: "voice-ai",
    name: "Voice AI",
    category: "ai",
    description: "Full-duplex audio stream orchestration with low-latency speech-to-text and text-to-speech.",
  },
  {
    id: "ai-automation",
    name: "Workflow Automation",
    category: "ai",
    description: "Chaining AI evaluation stages with background workers and transactional databases.",
  },

  // Cloud & Infrastructure
  {
    id: "linux",
    name: "Linux (Ubuntu/Debian)",
    category: "cloud",
    description: "Hardened server configurations, systemd process supervision, and firewall security.",
  },
  {
    id: "aws",
    name: "AWS Infrastructure",
    category: "cloud",
    description: "Cloud computing, storage, and networking using EC2, S3, RDS, and CloudFront CDN.",
  },
  {
    id: "docker",
    name: "Docker Containerization",
    category: "cloud",
    description: "Deterministic container packaging ensuring parity between development and production.",
  },
  {
    id: "cicd",
    name: "CI/CD Automation",
    category: "cloud",
    description: "Automated test suites, security checks, and zero-downtime deployment pipelines.",
  },

  // Integrations
  {
    id: "razorpay",
    name: "Razorpay Payment Gateway",
    category: "integration",
    description: "Multi-mode payments (UPI, Cards, NetBanking) with automated webhook reconciliation.",
  },
  {
    id: "twilio",
    name: "Twilio Telephony",
    category: "integration",
    description: "Programmable voice, SMS routing, and WebSocket media stream interfaces.",
  },
  {
    id: "google-maps",
    name: "Google Maps Platform",
    category: "integration",
    description: "Geocoding, distance matrix calculations, and real-time interactive mapping.",
  },
  {
    id: "fcm",
    name: "Firebase Cloud Messaging",
    category: "integration",
    description: "Cross-platform push notification delivery for web and native mobile applications.",
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "integration",
    description: "Predictable, documented HTTP interfaces following OpenAPI / Swagger specifications.",
  },
  {
    id: "webhooks",
    name: "Webhooks Architecture",
    category: "integration",
    description: "Idempotent event dispatchers and receivers with signature verification and retry queues.",
  },
];

export function getTechnologyById(id: string): Technology | undefined {
  return technologies.find((t) => t.id === id);
}

export function getTechnologiesByCategory(category: string): Technology[] {
  return technologies.filter((t) => t.category === category);
}
