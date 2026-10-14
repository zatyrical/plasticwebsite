declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAcceptedEnquiry(responseOk: boolean, data: { accepted?: unknown } | null) {
  if (!responseOk || data?.accepted !== true || typeof window === 'undefined') return;

  try {
    if (window.location.hostname !== 'www.drjeremysun.com' || typeof window.gtag !== 'function') return;

    window.gtag('event', 'generate_lead', {
      event_category: 'enquiry',
      method: 'drjeremysun_contact_form',
      page_location: `${window.location.origin}${window.location.pathname}`
    });
  } catch {
    // Optional measurement must never change an accepted enquiry's receipt.
  }
}
