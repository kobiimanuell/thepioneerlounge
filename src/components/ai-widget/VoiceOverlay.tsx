"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SUGGESTIONS = [
  "Find a product",
  "Tell me about this company",
  "Compare options",
  "Find something specific",
];

const IDLE_STATUS = "Ask anything about this site, by voice or text.";
const COMING_SOON_STATUS =
  "Pioneer is still in training. Real AI powered search and voice are coming soon. In the meantime, use the menu above to get around.";

export function VoiceOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [tried, setTried] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="plw-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Pioneer site search"
    >
      <button
        type="button"
        className="plw-overlay-backdrop"
        aria-hidden="true"
        onClick={onClose}
      />
      <button
        type="button"
        className="plw-overlay-close"
        aria-label="Close Pioneer search"
        onClick={onClose}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M4.5 4.5l9 9M13.5 4.5l-9 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="plw-panel" onClick={(e) => e.stopPropagation()}>
        <div className="plw-brand">
          <Image
            src="/brand/logo/icon-mark-white.png"
            alt=""
            width={24}
            height={24}
            className="plw-brand-mark"
            aria-hidden="true"
          />
          <span>Pioneer</span>
        </div>

        <h2 className="plw-greeting">
          Hi, what do you <em>need</em>?
        </h2>

        <div className="plw-voice-wave" aria-hidden="true">
          <span className="plw-voice-ring plw-voice-ring--outer" />
          <span className="plw-voice-ring plw-voice-ring--mid" />
          <span className="plw-voice-core">
            <Image
              src="/brand/logo/icon-mark-orange.png"
              alt=""
              width={40}
              height={40}
            />
          </span>
          <div className="plw-voice-bars">
            {[0, 0.12, 0.24, 0.36, 0.48].map((delay) => (
              <span
                key={delay}
                className="plw-voice-bar"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </div>
        </div>

        <p className="plw-voice-status" aria-live="polite">
          {tried ? COMING_SOON_STATUS : IDLE_STATUS}
        </p>

        <div className="plw-voice-controls">
          <button
            type="button"
            className="plw-mute-btn"
            aria-pressed="false"
            onClick={() => setTried(true)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect
                x="6.25"
                y="2.5"
                width="5.5"
                height="9"
                rx="2.75"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M4.5 8.5a4.5 4.5 0 0 0 9 0M9 13v2.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span>Mute</span>
          </button>
        </div>

        <div className="plw-suggestions">
          <p className="plw-suggestions-label">Try asking</p>
          <ul className="plw-suggestion-list">
            {SUGGESTIONS.map((prompt) => (
              <li key={prompt}>
                <button
                  type="button"
                  className="plw-suggestion-chip"
                  onClick={() => setTried(true)}
                >
                  {prompt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
