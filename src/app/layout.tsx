import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#070B19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brayontech.com"),
  title: {
    default: "BRAYON Technologies | Custom Software, Web & Cloud Engineering",
    template: "%s | BRAYON Technologies",
  },
  description:
    "Looking for a serious technology partner? BRAYON Technologies builds high-performance custom web applications, Next.js SaaS platforms, enterprise ERPs, and cloud automation. Delivered in agile sprints with 100% code ownership. Request a free 15-minute architecture audit.",
  applicationName: "BRAYON Technologies",
  authors: [{ name: "Bajrangi Yadav", url: "https://brayontech.com" }],
  generator: "Next.js",
  keywords: [
    "custom software development company",
    "software development agency",
    "Next.js development company",
    "hire Next.js developers",
    "Laravel development company",
    "hire Laravel developers",
    "Vue.js development agency",
    "hire Vue.js developers",
    "React full stack developers",
    "SaaS MVP development in 30 days",
    "enterprise ERP development",
    "business workflow automation",
    "headless ecommerce developers",
    "React Native mobile app development",
    "cloud engineering AWS Docker",
    "hire software team India US UK UAE",
    "Bajrangi Yadav technology lead",
    "BRAYON Technologies",
    "brayon tech",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Bajrangi Yadav",
  publisher: "BRAYON Technologies",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://brayontech.com",
    languages: {
      "en-US": "https://brayontech.com",
      "en-GB": "https://brayontech.com",
      "en-IN": "https://brayontech.com",
      "x-default": "https://brayontech.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brayon-icon-square.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [{ url: "/brayon-icon-square.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "BRAYON Technologies | Custom Software, Web & Cloud Engineering",
    description:
      "Enterprise software development, modern web applications, high-performance cloud systems, and custom business automation. Partner directly with senior engineering leadership.",
    url: "https://brayontech.com",
    siteName: "BRAYON Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1024,
        height: 512,
        alt: "BRAYON Technologies - Technology. Innovation. Beyond.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAYON Technologies | Enterprise Software & Cloud Engineering",
    description:
      "We build high-performance web platforms, SaaS MVPs, and business automation that accelerate revenue. Sub-second load times & 100% IP ownership.",
    creator: "@brayontech",
    site: "@brayontech",
    images: ["/brayon-logo-showcase.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive Schema.org JSON-LD Structured Data for Google Rich Snippets
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://brayontech.com/#organization",
    name: "BRAYON Technologies",
    alternateName: ["BRAYON Tech", "BRAYON"],
    legalName: "BRAYON Technologies",
    url: "https://brayontech.com",
    logo: "https://brayontech.com/brayon-icon-square.png",
    image: "https://brayontech.com/brayon-logo-showcase.png",
    description:
      "BRAYON Technologies is an enterprise custom software development company engineering scalable web applications, SaaS MVPs, ERP automation, and cloud platforms.",
    slogan: "Technology. Innovation. Beyond.",
    founder: {
      "@type": "Person",
      name: "Bajrangi Yadav",
      jobTitle: "Founder & Technology Lead",
      url: "https://brayontech.com/#founder",
      sameAs: ["https://www.linkedin.com"],
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@brayontech.com",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "bajrangi@brayontech.com",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/brayon-technologies",
      "https://github.com/brayon-technologies",
      "https://twitter.com/brayontech",
    ],
    priceRange: "₹35,000 - ₹5,00,000+ ($550 - $6,000+)",
    currenciesAccepted: "USD, INR, EUR, GBP, AED",
    paymentAccepted: "Wire Transfer, Stripe, Razorpay, Bank Transfer",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Singapore" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web & SaaS Engineering",
            description:
              "Bespoke full-stack web applications and SaaS platforms built with Next.js, React, Node.js, and TypeScript.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise ERP & Workflow Automation",
            description:
              "Role-based multi-branch ERP systems, warehouse tracking, and automated GST-compliant invoicing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-Converting Headless E-Commerce",
            description:
              "Sub-second decoupled storefronts with instant catalog search and multi-gateway checkout optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cross-Platform Mobile App Development",
            description:
              "Native-performance iOS and Android applications built with React Native.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free 15-Minute Architecture & Performance Audit",
            description:
              "Complimentary 5-point inspection of website speed, database queries, and conversion bottlenecks.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "28",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does custom software or an MVP cost at BRAYON Technologies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our transparent packages start at ₹35,000 ($550) for a modern 5-page web foundation. Startup MVPs typically range between ₹1,50,000 and ₹3,50,000 ($2,000 – $4,500), while comprehensive enterprise ERPs start at ₹2,50,000 ($3,500+). We operate strictly on milestone-based payments with zero hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can BRAYON Technologies launch our web platform or MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter web projects are delivered in 7–10 business days. Full-stack startup MVPs are delivered in 30 days through two-week agile sprint cycles. Enterprise custom ERPs take between 6 to 10 weeks with weekly staging demos.",
        },
      },
      {
        "@type": "Question",
        name: "Do we get 100% ownership of the source code and intellectual property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Upon completion of milestone payments, BRAYON Technologies transfers 100% worldwide intellectual property (IP), copyright, and GitHub source code repository ownership to your company, protected by our standard Master Services Agreement (MSA).",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does BRAYON Technologies specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in modern, high-performance technologies: Next.js 16, React 19, Vue.js, Laravel, Node.js, TypeScript, PostgreSQL, Redis, Tailwind CSS, Docker, AWS Cloud, and React Native for mobile applications.",
        },
      },
      {
        "@type": "Question",
        name: "What is BRAYON's payment milestone structure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We never ask for 100% upfront or accept risky post-completion terms. Standard projects operate on a 50% advance to initiate architecture and 50% upon User Acceptance Testing (UAT) sign-off. Enterprise projects follow a 30% Advance / 30% Alpha Demo / 30% Beta Review / 10% Production Deployment schedule.",
        },
      },
      {
        "@type": "Question",
        name: "How does the free 15-minute architecture audit work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You share your current website or software requirements. Founder & Technology Lead Bajrangi Yadav conducts a 5-point technical inspection (Core Web Vitals, mobile UX, API speed, security headers, and conversion bottlenecks) and delivers an actionable 1-page PDF report within 24 hours with zero sales pressure.",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://brayontech.com/#website",
    url: "https://brayontech.com",
    name: "BRAYON Technologies",
    description: "Technology. Innovation. Beyond. Enterprise Software, Web & Cloud Engineering.",
    publisher: {
      "@id": "https://brayontech.com/#organization",
    },
    inLanguage: "en-US",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        {/* JSON-LD Structured Data Scripts for Google Search Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#070B19] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
