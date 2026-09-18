import { getStoredUTMParameters } from "./utm";
import { getInitialReferrer, getInitialLandingPage } from "./referrer";

export interface LeadTrackingMetadata {
  source: string;
  landingPage: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  createdAt: string;
}

export function assembleLeadTrackingMetadata(): LeadTrackingMetadata {
  const utms = getStoredUTMParameters();

  return {
    source: "website",
    landingPage: getInitialLandingPage(),
    referrer: getInitialReferrer(),
    utmSource: utms.utmSource,
    utmMedium: utms.utmMedium,
    utmCampaign: utms.utmCampaign,
    utmTerm: utms.utmTerm,
    utmContent: utms.utmContent,
    createdAt: new Date().toISOString(),
  };
}
