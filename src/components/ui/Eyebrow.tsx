import { ReactNode } from "react";
import clsx from "clsx";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-paper-dim",
        className
      )}
    >
      <span className="size-2 shrink-0 rounded-full bg-ember-500" />
      {children}
    </div>
  );
}
