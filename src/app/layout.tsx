import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL, COMPANY_INFO } from "@/utils/siteConfig";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BRAYON Technologies | Custom Software, Web & Cloud Engineering",
    template: "%s | BRAYON Technologies",
  },
  description:
    "Enterprise custom software development company in India. BRAYON Technologies engineers scalable web applications, Laravel backends, custom CRM & ERP systems, high-converting e-commerce stores, and cross-platform mobile apps with 100% IP ownership.",
  applicationName: COMPANY_INFO.name,
  authors: [{ name: COMPANY_INFO.founder.name, url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "custom software development company India",
    "software development agency India",
    "Laravel development company in Mumbai",
    "Laravel developer India",
    "hire Laravel developers",
    "Next.js development company",
    "hire Next.js developers",
    "custom CRM software development",
    "enterprise ERP software development",
    "ecommerce website development company",
    "mobile app development company",
    "React Native app developers",
    "business workflow automation",
    "API development services",
    "cloud engineering AWS Docker",
    "Bajrangi Yadav technology lead",
    "BRAYON Technologies",
    "brayon tech",
  ],
  referrer: "origin-when-cross-origin",
  creator: COMPANY_INFO.founder.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "./",
    languages: {
      "en-IN": SITE_URL,
      "en-US": SITE_URL,
      "en-GB": SITE_URL,
      "x-default": SITE_URL,
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
      "Enterprise software development, Laravel backends, high-performance cloud systems, and custom CRM/ERP automation. Partner directly with senior engineering leadership.",
    url: SITE_URL,
    siteName: COMPANY_INFO.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "BRAYON Technologies - Technology. Innovation. Beyond.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAYON Technologies | Enterprise Software & Cloud Engineering",
    description:
      "We build high-performance web platforms, SaaS MVPs, and business automation that accelerate revenue. Sub-second load times & 100% IP ownership.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive Schema.org JSON-LD Structured Data for Google Rich Snippets & Knowledge Graph
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.alternateNames,
    legalName: COMPANY_INFO.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/brayon-icon-square.png`,
    image: `${SITE_URL}/brayon-logo-showcase.png`,
    description: COMPANY_INFO.description,
    slogan: COMPANY_INFO.slogan,
    sameAs: [
      COMPANY_INFO.social.github,
      COMPANY_INFO.social.githubRepo,
    ],
    founder: {
      "@type": "Person",
      name: COMPANY_INFO.founder.name,
      jobTitle: COMPANY_INFO.founder.role,
      url: `${SITE_URL}/about`,
    },
    telephone: COMPANY_INFO.contact.phone,
    email: COMPANY_INFO.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY_INFO.contact.address.locality,
      addressRegion: COMPANY_INFO.contact.address.region,
      addressCountry: COMPANY_INFO.contact.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: COMPANY_INFO.contact.phone,
        email: COMPANY_INFO.contact.email,
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: COMPANY_INFO.contact.phone,
        email: COMPANY_INFO.contact.email,
        availableLanguage: ["English", "Hindi"],
      },
    ],
    priceRange: "₹35,000 - ₹5,00,000+ ($550 - $6,000+)",
    currenciesAccepted: "INR, USD, EUR, GBP, AED",
    paymentAccepted: "Wire Transfer, Stripe, Razorpay, Bank Transfer",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
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
            name: "Enterprise Laravel Development",
            url: `${SITE_URL}/laravel-development`,
            description:
              "High-throughput enterprise Laravel web backends, RESTful APIs, and relational database architectures.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            url: `${SITE_URL}/custom-software-development`,
            description:
              "Bespoke SaaS platforms and web applications built with Next.js, React, Node.js, and TypeScript.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom CRM & ERP Software Development",
            url: `${SITE_URL}/crm-erp-development`,
            description:
              "Role-based multi-branch ERP systems, warehouse tracking, and automated GST-compliant invoicing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-Converting E-Commerce Development",
            url: `${SITE_URL}/ecommerce-development`,
            description:
              "Sub-second decoupled storefronts, wholesale B2B ordering portals, and multi-gateway checkout optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cross-Platform Mobile App Development",
            url: `${SITE_URL}/mobile-app-development`,
            description:
              "Native-performance iOS and Android applications built with React Native.",
          },
        },
      ],
    },
  };

  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Global Organization JSON-LD for Google Knowledge Graph & Brand Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Privacy-Compliant Google Analytics 4 (Only loaded when valid ID is configured) */}
        {gaMeasurementId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className="min-h-screen bg-[#070B19] text-slate-100 antialiased selection:bg-blue-600 selection:text-white"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
