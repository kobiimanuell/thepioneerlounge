"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Fires a checkout-completed conversion once, on landing here.
 * Set this page as the Stripe Payment Link's post-payment redirect URL
 * (thepioneerlounge.vercel.app/thank-you) to track real checkouts.
 */
export function ConversionPing() {
  useEffect(() => {
    trackEvent("checkout_completed");
  }, []);

  return null;
}
