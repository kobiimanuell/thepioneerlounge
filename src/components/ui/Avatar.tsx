import clsx from "clsx";

const PALETTE = [
  "bg-ember-500 text-ink-950",
  "bg-ember-400 text-ink-950",
  "bg-ink-800 text-paper",
  "bg-ink-700 text-paper",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function paletteIndex(name: string) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return sum % PALETTE.length;
}

export function Avatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "flex shrink-0 items-center justify-center rounded-full text-sm font-semibold",
        PALETTE[paletteIndex(name)],
        className
      )}
    >
      {initials(name)}
    </span>
  );
}
