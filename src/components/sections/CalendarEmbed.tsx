import { CalendarDays } from "lucide-react";

export function CalendarEmbed() {
  const calUrl = process.env.NEXT_PUBLIC_CAL_URL;

  if (!calUrl) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line bg-ink-900/40 px-6 py-14 text-center">
        <CalendarDays className="size-7 text-paper-dim/50" />
        <p className="max-w-xs text-sm text-paper-dim/70">
          Calendar booking will appear here once connected to Cal.com or
          Calendly. Set{" "}
          <code className="rounded bg-ink-800 px-1.5 py-0.5 text-xs">
            NEXT_PUBLIC_CAL_URL
          </code>{" "}
          to enable it.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <iframe
        src={calUrl}
        title="Book a discovery call"
        className="h-[720px] w-full"
      />
    </div>
  );
}
