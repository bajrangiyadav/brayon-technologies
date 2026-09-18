'use client';

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/services/analytics/analytics';
import { storeUTMParameters } from '@/utils/utm';
import { storeInitialReferrer } from '@/utils/referrer';
import { AnalyticsProperties } from '@/services/analytics/types';

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    analytics.init();
    storeUTMParameters();
    storeInitialReferrer();
  }, []);

  useEffect(() => {
    if (pathname) {
      analytics.trackPageView(pathname, typeof document !== 'undefined' ? document.title : undefined);
    }
  }, [pathname]);

  const trackEvent = useCallback((eventName: string, properties?: AnalyticsProperties) => {
    analytics.track(eventName, properties);
  }, []);

  const trackCTA = useCallback((ctaName: string, location: string, targetUrl?: string) => {
    analytics.trackCTA(ctaName, location, targetUrl);
  }, []);

  const trackCaseStudyView = useCallback((slug: string, clientName?: string, industry?: string) => {
    analytics.trackCaseStudyView(slug, clientName, industry);
  }, []);

  const trackInsightView = useCallback((slug: string, category: string, readingTimeMinutes?: number) => {
    analytics.trackInsightView(slug, category, readingTimeMinutes);
  }, []);

  const trackLeadSubmit = useCallback((projectType: string, budgetTier: string, hasTimeline?: boolean) => {
    analytics.trackLeadSubmit(projectType, budgetTier, hasTimeline);
  }, []);

  return {
    trackEvent,
    trackCTA,
    trackCaseStudyView,
    trackInsightView,
    trackLeadSubmit,
  };
}
