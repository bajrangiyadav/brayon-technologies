export interface UTMParameters {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

const STORAGE_KEY = "brayon_utm_parameters";

export function getUTMParameters(): UTMParameters {
  if (typeof window === "undefined") return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const params: UTMParameters = {};

    const utmSource = urlParams.get("utm_source");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");
    const utmTerm = urlParams.get("utm_term");
    const utmContent = urlParams.get("utm_content");

    if (utmSource) params.utmSource = utmSource;
    if (utmMedium) params.utmMedium = utmMedium;
    if (utmCampaign) params.utmCampaign = utmCampaign;
    if (utmTerm) params.utmTerm = utmTerm;
    if (utmContent) params.utmContent = utmContent;

    return params;
  } catch {
    return {};
  }
}

export function storeUTMParameters(): void {
  if (typeof window === "undefined") return;

  try {
    const current = getUTMParameters();
    // Only store if at least one parameter is present in current URL
    if (Object.keys(current).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    }
  } catch {
    // Storage access might be restricted in private browsing
  }
}

export function getStoredUTMParameters(): UTMParameters {
  if (typeof window === "undefined") return {};

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as UTMParameters;
    }
  } catch {
    // Graceful fallback
  }

  // Fallback to active URL params if available
  return getUTMParameters();
}
