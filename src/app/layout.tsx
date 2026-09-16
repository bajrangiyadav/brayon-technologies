import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    canonical: "./",
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
    telephone: "+91-7385121432",
    email: "bajrangiyadav330@gmail.com",
    address: {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+91-7385121432",
        email: "bajrangiyadav330@gmail.com",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+91-7385121432",
        email: "bajrangiyadav330@gmail.com",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://github.com/bajrangiyadav/brayon-technologies",
      "https://www.linkedin.com",
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

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        {/* Global Organization JSON-LD for Google Knowledge Graph & Brand Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#070B19] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
