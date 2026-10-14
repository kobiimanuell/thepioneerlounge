import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "outline" | "outlineLight" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";

const variants: Record<Variant, string> = {
  primary:
    "bg-ember-500 text-ink-950 hover:bg-ember-400 shadow-[0_0_0_1px_rgba(242,119,15,0.4),0_8px_30px_-8px_rgba(242,119,15,0.6)] hover:shadow-[0_0_0_1px_rgba(255,157,77,0.6),0_12px_40px_-8px_rgba(242,119,15,0.8)]",
  outline:
    "border border-line text-paper hover:border-ember-500/60 hover:bg-ember-500/5",
  outlineLight:
    "border border-white/30 text-white hover:border-ember-400/70 hover:bg-white/10",
  ghost: "text-paper-dim hover:text-paper",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
  onClick,
  type,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = clsx(base, variants[variant], sizes[size], "group", className);

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.25}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
