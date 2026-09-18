/**
 * Analytics Type Definitions
 * 
 * Defines standard schemas for events, properties, and provider integrations.
 * Strictly adheres to privacy compliance: NO personally identifiable information (PII)
 * such as email, phone, or message text is permitted in analytics payloads.
 */

export interface AnalyticsProperties {
  [key: string]: string | number | boolean | null | undefined;
}

export interface CTAProperties extends AnalyticsProperties {
  ctaName: string;
  location: string;
  targetUrl?: string;
}

export interface CaseStudyViewProperties extends AnalyticsProperties {
  slug: string;
  clientName?: string;
  industry?: string;
}

export interface InsightViewProperties extends AnalyticsProperties {
  slug: string;
  category: string;
  readingTimeMinutes?: number;
}

export interface LeadSubmitProperties extends AnalyticsProperties {
  projectType: string;
  budgetTier: string;
  hasTimeline: boolean;
  utmSource?: string;
  utmCampaign?: string;
}

export interface AnalyticsProvider {
  name: string;
  init?: () => void;
  trackEvent: (eventName: string, properties?: AnalyticsProperties) => void;
  trackPageView?: (path: string, title?: string) => void;
}
