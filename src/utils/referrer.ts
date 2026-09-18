const REFERRER_STORAGE_KEY = "brayon_initial_referrer";
const LANDING_PAGE_STORAGE_KEY = "brayon_initial_landing_page";

export function storeInitialReferrer(): void {
  if (typeof window === "undefined") return;

  try {
    // Only store on the first visit of the session
    if (!sessionStorage.getItem(REFERRER_STORAGE_KEY)) {
      const initialReferrer = document.referrer || "direct";
      sessionStorage.setItem(REFERRER_STORAGE_KEY, initialReferrer);
    }

    if (!sessionStorage.getItem(LANDING_PAGE_STORAGE_KEY)) {
      const initialLandingPage = window.location.pathname + window.location.search;
      sessionStorage.setItem(LANDING_PAGE_STORAGE_KEY, initialLandingPage);
    }
  } catch {
    // Graceful fallback
  }
}

export function getInitialReferrer(): string {
  if (typeof window === "undefined") return "direct";

  try {
    const stored = sessionStorage.getItem(REFERRER_STORAGE_KEY);
    if (stored) return stored;
    return document.referrer || "direct";
  } catch {
    return "direct";
  }
}

export function getInitialLandingPage(): string {
  if (typeof window === "undefined") return "/";

  try {
    const stored = sessionStorage.getItem(LANDING_PAGE_STORAGE_KEY);
    if (stored) return stored;
    return window.location.pathname || "/";
  } catch {
    return "/";
  }
}
