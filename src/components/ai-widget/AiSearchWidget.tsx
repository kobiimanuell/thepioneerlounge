"use client";

import { useState } from "react";
import "./ai-widget.css";
import { FloatingLauncher } from "./FloatingLauncher";
import { VoiceOverlay } from "./VoiceOverlay";

export function AiSearchWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FloatingLauncher onClick={() => setOpen(true)} />
      <VoiceOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
