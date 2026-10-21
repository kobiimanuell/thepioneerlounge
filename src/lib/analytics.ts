"use client";

import { track as vercelTrack } from "@vercel/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a conversion/event across whichever analytics tools are configured.
 * Safe to call even when none are set up yet, it just no-ops.
 */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
) {
  try {
    vercelTrack(name, params);
  } catch {
    // Vercel Analytics not active (e.g. local dev) — ignore.
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}

/** Fires a LinkedIn Insight Tag conversion. Requires a conversion ID from the LinkedIn Campaign Manager. */
export function trackLinkedInConversion(conversionId: string) {
  if (typeof window !== "undefined" && window.lintrk) {
    window.lintrk("track", { conversion_id: conversionId });
  }
}
