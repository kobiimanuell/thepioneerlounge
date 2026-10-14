"use client";

import { useEffect, useState } from "react";

export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only value, no external store to subscribe to
    setYear(new Date().getFullYear());
  }, []);

  return <>{year ?? 2026}</>;
}
