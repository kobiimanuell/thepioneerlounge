"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

export function CalendarEmbed({ calendarUrl }: { calendarUrl?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const url = calendarUrl ?? site.calendarUrl;
  const embedUrl = `${url}?background_color=16140f&text_color=faf8f3&primary_color=f25c19&hide_gdpr_banner=1`;

  useEffect(() => {
    const init = () => {
      if (containerRef.current && window.Calendly) {
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: embedUrl,
          parentElement: containerRef.current,
        });
      }
    };

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    );

    if (window.Calendly) {
      init();
    } else if (script) {
      script.addEventListener("load", init);
    } else {
      script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      script.addEventListener("load", init);
      document.body.appendChild(script);
    }

    return () => {
      script?.removeEventListener("load", init);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- re-init only when the URL changes
  }, [embedUrl]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (
        event.origin.includes("calendly.com") &&
        event.data?.event === "calendly.event_scheduled"
      ) {
        trackEvent("discovery_call_booked");
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-2xl border border-line bg-ink-900"
      style={{ minWidth: "280px", height: "720px" }}
    />
  );
}
