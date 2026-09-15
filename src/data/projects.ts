export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: "E-Commerce" | "Web Apps" | "Enterprise Systems";
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
    slug: "safegrowtrade",
    title: "SafeGrowTrade: Agricultural Commodity Trading & E-Commerce Platform",
    client: "SafeGrowTrade Enterprises",
    category: "E-Commerce",
    industry: "Agricultural Commodities & B2B Trading",
    duration: "6 Weeks",
    tagline: "Scalable B2B commodity trading and direct wholesale catalog with real-time stock and automated GST billing.",
    overview:
      "SafeGrowTrade connects commodity producers, bulk buyers, and retail distributors across India. BRAYON Technologies engineered the core trading backend, dynamic pricing engine, and payment checkout flow to replace manual spreadsheet and phone order management.",
    challenge: {
      title: "Manual Order Processing & Unreliable Inventory Synchronization",
      description:
        "The client managed commodity orders and wholesale bids through phone calls and disorganized WhatsApp groups. As order volume scaled past 300 orders daily, inventory mismatches, delayed quotes, and manual GST calculation errors resulted in lost deals and cash flow friction.",
      painPoints: [
        "Inability to provide real-time dynamic commodity market prices to buyers.",
        "Manual calculation of interstate GST, freight charges, and bulk order discounts.",
        "High risk of overselling stock due to disjointed warehouse updates.",
        "Payment reconciliation delays with manual bank wire confirmations.",
      ],
    },
    solution: {
      title: "Custom Laravel Architecture with Razorpay Integration & Real-Time Stock Engine",
      description:
        "We architected a high-throughput platform powered by Laravel, MySQL, and Redis caching. The platform provides tier-based pricing for wholesale vs. retail buyers, instant payment processing via Razorpay, and automated PDF invoice generation.",
      architecturalHighlights: [
        "Laravel REST backend with optimized Eloquent database indexing for sub-second query response.",
        "Redis cache layer for real-time commodity pricing and instant inventory reservation during checkout.",
        "Razorpay payment gateway integration supporting UPI, NetBanking, and corporate credit lines.",
        "Automated GST-compliant tax breakdown and instant PDF invoice dispatch via email and SMS.",
        "Role-based administrative portal for warehouse managers to update dispatches and track shipments.",
      ],
    },
    results: [
      {
        metric: "3x",
        label: "Order Processing Speed",
        description: "Orders moved from multi-hour manual approvals to instant digital checkout.",
      },
      {
        metric: "100%",
        label: "Inventory Accuracy",
        description: "Zero overselling incidents across regional warehouses after Redis locking deployment.",
      },
      {
        metric: "< 1.2s",
        label: "Catalog Load Time",
        description: "Sub-second catalog search across thousands of commodity SKUs.",
      },
      {
        metric: "+42%",
        label: "Repeat Wholesale Volume",
        description: "Wholesale buyers shifted to 24/7 automated self-service reordering.",
      },
    ],
    techStack: [
      { name: "Laravel", category: "Backend Framework" },
      { name: "PHP 8.2", category: "Core Language" },
      { name: "MySQL", category: "Relational Database" },
      { name: "Redis", category: "Cache & Session Storage" },
      { name: "Tailwind CSS", category: "Responsive UI" },
      { name: "Razorpay API", category: "Payment Gateway" },
      { name: "AWS EC2 & RDS", category: "Cloud Infrastructure" },
    ],
    testimonial: {
      quote:
        "BRAYON Technologies transformed our trading operations from chaotic phone calls into a seamless digital marketplace. The system handles hundreds of bulk orders effortlessly with zero downtime.",
      author: "Operations Lead",
      role: "Director of Supply Chain",
      company: "SafeGrowTrade",
    },
  },
  {
    slug: "ashapura-dry-fruits",
    title: "Ashapura Dry Fruits: Direct-to-Consumer Gourmet E-Commerce Experience",
    client: "Ashapura Dry Fruits",
    category: "E-Commerce",
    industry: "Retail & Gourmet Food Commerce",
    duration: "4 Weeks",
    liveUrl: "https://ashapuradryfruits.com/",
    tagline: "High-conversion D2C storefront featuring instant catalog filtering, mobile-first UX, and seamless Razorpay payments.",
    overview:
      "Ashapura Dry Fruits is a premier brand delivering premium nuts, dried fruits, and gift hampers. BRAYON Technologies delivered a responsive, high-speed storefront built to convert social traffic into paid orders with zero friction.",
    challenge: {
      title: "Slow Mobile Load Times & High Cart Abandonment",
      description:
        "Their previous website suffered from bloated third-party scripts, slow mobile load times exceeding 5 seconds on 4G connections, and a multi-step checkout funnel that led to a 68% cart abandonment rate.",
      painPoints: [
        "Mobile page load speeds averaging 5.2 seconds, causing high bounce rates from Instagram ads.",
        "Clunky checkout experience with too many form fields causing drop-offs.",
        "Lack of quick product weight selection (250g, 500g, 1kg) on product cards.",
        "Unreliable tracking of order statuses and courier shipping updates.",
      ],
    },
    solution: {
      title: "Optimized Modern Storefront with 1-Click Weight Select & Streamlined Checkout",
      description:
        "We engineered a clean, mobile-first storefront featuring sub-second image delivery, instant variant switching, and a streamlined 2-step checkout integrated directly with Razorpay and courier dispatch tracking.",
      architecturalHighlights: [
        "Next-generation WebP image optimization and lazy loading reducing page payload by 72%.",
        "Interactive product card variant selector allowing 1-click cart addition without full page reloads.",
        "Integrated Razorpay modal checkout with UPI intent routing for rapid mobile completion.",
        "Automated WhatsApp order confirmation and dispatch notification pipeline.",
        "Clean, semantic SEO structure ranking core category pages on page 1 of Google Search.",
      ],
    },
    results: [
      {
        metric: "1.1s",
        label: "Mobile Page Load Time",
        description: "Down from 5.2 seconds, achieving a 94+ Google PageSpeed Mobile score.",
      },
      {
        metric: "-38%",
        label: "Cart Abandonment",
        description: "Simplified 2-step checkout funnel drastically reduced drop-offs.",
      },
      {
        metric: "+54%",
        label: "Mobile Conversion Rate",
        description: "Direct conversion lift from paid advertising campaigns within 30 days of launch.",
      },
      {
        metric: "99.9%",
        label: "Production Uptime",
        description: "Flawless uptime during festive promotion flash sales.",
      },
    ],
    techStack: [
      { name: "Next.js / React", category: "Frontend Engine" },
      { name: "Tailwind CSS", category: "Modern Styling" },
      { name: "Node.js", category: "Serverless Backend" },
      { name: "Razorpay API", category: "Payment Infrastructure" },
      { name: "WhatsApp Business API", category: "Order Messaging" },
      { name: "PostgreSQL", category: "Primary Database" },
    ],
    testimonial: {
      quote:
        "The speed improvement was night and day. Our mobile customers love how fast they can pick weight options and pay via UPI in seconds. Our conversion numbers speak for themselves.",
      author: "Managing Partner",
      role: "E-Commerce Director",
      company: "Ashapura Dry Fruits",
    },
  },
  {
    slug: "brayon-crm",
    title: "BRAYON Enterprise CRM: High-Ticket Lead Engine & Pipeline Automation",
    client: "Internal Agency Platform & B2B Consulting Clients",
    category: "Enterprise Systems",
    industry: "B2B Professional Services & Technology",
    duration: "4 Weeks",
    tagline: "Lightweight sales cadence engine with visual deal progression, 1-click PDF proposals, and automated WhatsApp follow-ups.",
    overview:
      "Engineered internally by BRAYON Technologies and adapted for consulting clients to eliminate the bloat and complexity of conventional CRM systems while boosting closing velocity on high-ticket proposals.",
    challenge: {
      title: "Lead Leakage & Fragmented Communication Channels",
      description:
        "Consulting firms frequently lose deals because inbound inquiries sit unaddressed for hours, follow-ups are forgotten across personal WhatsApp chats, and proposal creation requires hours of manual document formatting.",
      painPoints: [
        "Inbound leads waiting over 4 hours for initial contact, slashing conversion odds by 70%.",
        "Disorganized follow-up trails across disparate team spreadsheets.",
        "Manual proposal drafting taking 3+ hours per prospect.",
        "Lack of executive visibility into monthly deal pipeline stages.",
      ],
    },
    solution: {
      title: "Real-Time Pipeline Architecture with Automated Multi-Channel Triggers",
      description:
        "We built an ultra-fast, reactive dashboard featuring drag-and-drop Kanban deal progression, automated instant alerts to leadership via Gmail and WhatsApp, and a dynamic 1-click PDF Statement of Work generator.",
      architecturalHighlights: [
        "Responsive Kanban board interface with optimistic UI updates for zero perceptible latency.",
        "Real-time webhook dispatcher triggering instant multi-channel alerts upon form completion.",
        "Serverless PDF generator producing branded SOW agreements in under 500 milliseconds.",
        "Integrated activity timeline tracking email opens, link clicks, and contract approvals.",
        "End-to-end data isolation with role-based team permissions.",
      ],
    },
    results: [
      {
        metric: "< 3 Mins",
        label: "Lead Response Time",
        description: "Automated instant alerts enable outreach while prospect interest is peak.",
      },
      {
        metric: "1-Click",
        label: "Proposal Generation",
        description: "Cut proposal turnaround from 3 hours to under 60 seconds.",
      },
      {
        metric: "+26%",
        label: "Lead-to-Close Rate",
        description: "Consistent 3-stage automated follow-up cadences prevent deal stagnation.",
      },
      {
        metric: "20+ Hrs",
        label: "Saved Every Week",
        description: "Eliminated repetitive manual status updates and manual data entry.",
      },
    ],
    techStack: [
      { name: "Next.js 16", category: "Application Framework" },
      { name: "TypeScript", category: "Type Safety" },
      { name: "Node.js", category: "Event Engine" },
      { name: "PostgreSQL", category: "Relational Store" },
      { name: "Tailwind CSS", category: "UI Design" },
      { name: "Nodemailer", category: "Email Dispatch" },
      { name: "WhatsApp Cloud API", category: "Messaging Bridge" },
    ],
  },
];
