import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://brayontech.com"),
  title: "BRAYON Technologies | Technology. Innovation. Beyond.",
  description:
    "Enterprise software development, modern web applications, high-performance cloud solutions, and custom business automation engineered for ambitious brands.",
  keywords: [
    "BRAYON Technologies",
    "Software Development Company",
    "Custom Web Applications",
    "Next.js Development",
    "Enterprise ERP",
    "Business Automation",
    "SaaS MVP",
    "Mobile Apps",
    "Bajrangi Yadav",
  ],
  authors: [{ name: "Bajrangi Yadav" }],
  icons: {
    icon: "/brayon-icon-square.png",
    apple: "/brayon-icon-square.png",
  },
  openGraph: {
    title: "BRAYON Technologies | Technology. Innovation. Beyond.",
    description:
      "Enterprise software development, modern web applications, and custom business automation engineered for scale.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/brayon-logo.png",
        width: 1024,
        height: 682,
        alt: "BRAYON Technologies - Technology. Innovation. Beyond.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#070B19] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

