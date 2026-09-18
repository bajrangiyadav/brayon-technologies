# BRAYON Technologies — Website

> **We Build Digital Products That Move Businesses Forward.**

Enterprise-grade company website and lead acquisition platform built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS 4.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.3 (App Router, Turbopack) |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5 (strict) |
| Animation | Framer Motion 13 |
| Icons | Lucide React |
| Form Handling | React Hook Form + Zod |
| Email Dispatch | Nodemailer (Gmail App Password) |
| Analytics | @vercel/analytics + custom provider abstraction |
| Performance | @vercel/speed-insights |
| Font | Geist Sans + Geist Mono |
| Deployment | Vercel |

---

## Installation

```bash
npm install
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values:

```bash
cp .env.example .env.local
```

Required for email notifications (optional — leads are always stored locally):

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

See `.env.example` for full documentation.

---

## Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

---

## Production Build

```bash
npm run build
npm start
```

Or preview on a different port:

```bash
npx next start -p 3001
```

---

## Linting

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & API routes
│   ├── api/
│   │   ├── contact/        # Legacy contact API (WhatsApp dispatch)
│   │   └── leads/          # CRM lead storage & email notification
│   ├── about/
│   ├── brayon-ai/
│   ├── case-studies/
│   │   └── [slug]/         # Dynamic case study detail pages
│   ├── contact/
│   ├── cookies/
│   ├── industries/
│   ├── insights/
│   │   └── [slug]/         # Dynamic insight detail pages
│   ├── privacy/
│   ├── services/
│   ├── technology/
│   ├── terms/
│   ├── work/               # Redirects to /case-studies
│   ├── error.tsx           # Route error boundary
│   ├── global-error.tsx    # Global error boundary
│   ├── layout.tsx          # Root layout with JSON-LD
│   ├── loading.tsx         # Route loading indicator
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # robots.txt generator
│   └── sitemap.ts          # Dynamic XML sitemap
├── components/
│   ├── animations/         # FadeUp, FadeIn, RevealText, ScaleIn, StaggerChildren
│   ├── brayon-ai/          # BRAYON AI page components
│   ├── case-studies/       # CaseStudyCard, ProjectGallery, TechStackGrid
│   ├── common/             # Button, Card, Container, Eyebrow, Section, etc.
│   ├── insights/           # InsightCard, InsightFilters, SocialShare, ArticleContent
│   ├── layout/             # Footer
│   ├── navigation/         # Navbar, MobileMenu
│   └── sections/           # HeroSection, HeroVisual, TrustProofSection, etc.
├── data/
│   ├── caseStudies.ts      # 2 active production project records (JBCE, MHVP)
│   ├── clients.ts          # 2 active client records
│   ├── insights.ts         # 5 technical articles
│   └── leads.json          # Auto-generated lead storage (gitignored)
├── hooks/
│   └── useAnalytics.ts     # Unified analytics hook
├── services/
│   ├── analytics/          # Provider-agnostic analytics abstraction
│   ├── api/                # API client with timeout & error handling
│   └── crm/                # contactService.ts — lead submission
├── types/
│   ├── caseStudy.ts
│   └── insight.ts
└── utils/
    ├── referrer.ts         # Initial referrer capture
    ├── tracking.ts         # Lead attribution assembly
    └── utm.ts              # UTM parameter capture & storage
```

---

## Routes

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage |
| `/about` | Static | Company & founder |
| `/services` | Static | Service offerings |
| `/industries` | Static | Industry verticals |
| `/brayon-ai` | Static | BRAYON AI capabilities |
| `/technology` | Static | Technology stack |
| `/case-studies` | Static | All case studies |
| `/case-studies/:slug` | SSG | Individual case study |
| `/insights` | Static (Client) | Engineering articles |
| `/insights/:slug` | SSG | Individual article |
| `/contact` | Static (Client) | Lead generation form |
| `/privacy` | Static | Privacy policy |
| `/terms` | Static | Terms of service |
| `/cookies` | Static | Cookie policy |
| `/work` | Redirect | → /case-studies |

---

## CRM Integration

All form submissions flow through:

```
ContactClient → submitLead() → apiClient → POST /api/leads
```

Leads are stored to `data/leads.json` for zero lead-loss persistence, then an email notification is dispatched via Gmail if credentials are configured in `.env.local`.

Lead fields include full UTM attribution, referrer, and landing page capture.

---

## Analytics Integration

Custom provider-agnostic analytics abstraction at `src/services/analytics/`. Strictly enforces **no PII** — only categorical metadata (project type, budget tier, slug) is tracked.

Events tracked:
- `page_view`
- `cta_click`
- `case_study_view`
- `insight_view`
- `lead_submission_success`

---

## SEO

- Per-page `Metadata` with unique titles, descriptions, and canonical URLs
- `sitemap.xml` — dynamic, includes all case studies and published insights
- `robots.txt` — disallows `/api/` and `/_next/`
- JSON-LD structured data: `Organization`, `WebSite`, `TechArticle`, `BreadcrumbList`, `ContactPage`, `CollectionPage`

---

## Deployment

Optimized for Vercel deployment. Set environment variables in Vercel Project Settings → Environment Variables.

```bash
vercel deploy
```
