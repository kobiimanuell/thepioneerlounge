import type { LucideIcon } from "lucide-react";

export function IconGlyph({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="size-5" strokeWidth={1.75} />;
}
