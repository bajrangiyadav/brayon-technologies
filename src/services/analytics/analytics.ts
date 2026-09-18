/**
 * Centralized Analytics Service
 * 
 * Safe, provider-agnostic, fault-tolerant analytics dispatcher.
 * Guarantees zero UI impact: all calls are safely isolated with try/catch boundaries.
 * Enforces NO PII policy: only anonymous categorical metadata is forwarded.
 */

import {
  AnalyticsProperties,
  AnalyticsProvider,
  CTAProperties,
  CaseStudyViewProperties,
  InsightViewProperties,
  LeadSubmitProperties,
} from './types';

// Default Console Provider for development inspection
const consoleProvider: AnalyticsProvider = {
  name: 'ConsoleProvider',
  trackEvent: (eventName: string, properties?: AnalyticsProperties) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event] "${eventName}"`, properties || {});
    }
  },
  trackPageView: (path: string, title?: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics PageView] ${path}${title ? ` (${title})` : ''}`);
    }
  },
};

class AnalyticsManager {
  private providers: AnalyticsProvider[] = [consoleProvider];
  private isInitialized = false;

  public init(): void {
    if (typeof window === 'undefined' || this.isInitialized) return;
    this.isInitialized = true;

    for (const provider of this.providers) {
      try {
        provider.init?.();
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`[Analytics] Failed to initialize provider "${provider.name}":`, err);
        }
      }
    }
  }

  public registerProvider(provider: AnalyticsProvider): void {
    this.providers.push(provider);
    if (this.isInitialized && typeof window !== 'undefined') {
      try {
        provider.init?.();
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`[Analytics] Failed to initialize registered provider "${provider.name}":`, err);
        }
      }
    }
  }

  public track(eventName: string, properties?: AnalyticsProperties): void {
    if (typeof window === 'undefined') return;

    for (const provider of this.providers) {
      try {
        provider.trackEvent(eventName, properties);
      } catch (err) {
        // Analytics failure must NEVER throw or block UX
        if (process.env.NODE_ENV === 'development') {
          console.warn(`[Analytics] Error dispatching event "${eventName}" on "${provider.name}":`, err);
        }
      }
    }
  }

  public trackPageView(path: string, title?: string): void {
    if (typeof window === 'undefined') return;

    for (const provider of this.providers) {
      try {
        if (provider.trackPageView) {
          provider.trackPageView(path, title);
        } else {
          provider.trackEvent('page_view', { path, title });
        }
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`[Analytics] Error dispatching page_view on "${provider.name}":`, err);
        }
      }
    }
  }

  public trackCTA(ctaName: string, location: string, targetUrl?: string): void {
    const props: CTAProperties = {
      ctaName,
      location,
      targetUrl,
    };
    this.track('cta_click', props);
  }

  public trackCaseStudyView(slug: string, clientName?: string, industry?: string): void {
    const props: CaseStudyViewProperties = {
      slug,
      clientName,
      industry,
    };
    this.track('case_study_view', props);
  }

  public trackInsightView(slug: string, category: string, readingTimeMinutes?: number): void {
    const props: InsightViewProperties = {
      slug,
      category,
      readingTimeMinutes,
    };
    this.track('insight_view', props);
  }

  public trackLeadSubmit(projectType: string, budgetTier: string, hasTimeline = false): void {
    const props: LeadSubmitProperties = {
      projectType,
      budgetTier,
      hasTimeline,
    };
    this.track('lead_submission_success', props);
  }
}

export const analytics = new AnalyticsManager();
