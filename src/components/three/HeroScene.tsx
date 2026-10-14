"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export function HeroScene({ className }: { className?: string }) {
  return <HeroCanvas className={className} />;
}
