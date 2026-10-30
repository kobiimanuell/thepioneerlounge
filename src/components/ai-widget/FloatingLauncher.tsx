"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PROMPTS = [
  { text: "Search with", brand: "Pioneer" },
  { text: "Ask", brand: "Pioneer" },
  { text: "Got a Question?" },
];

export function FloatingLauncher({ onClick }: { onClick: () => void }) {
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPromptIndex((i) => (i + 1) % PROMPTS.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  const prompt = PROMPTS[promptIndex];

  return (
    <button
      type="button"
      className="plw-launcher"
      aria-label="Open Pioneer search"
      aria-haspopup="dialog"
      onClick={onClick}
    >
      <span className="plw-launcher-glow" aria-hidden="true" />
      <span className="plw-launcher-inner">
        <span className="plw-launcher-mark">
          <Image
            src="/brand/logo/icon-mark-white.png"
            alt=""
            width={22}
            height={22}
            aria-hidden="true"
          />
        </span>
        <span key={promptIndex} className="plw-launcher-label plw-launcher-label-in">
          <span>{prompt.text}</span>
          {prompt.brand && <strong>{prompt.brand}</strong>}
        </span>
      </span>
    </button>
  );
}
