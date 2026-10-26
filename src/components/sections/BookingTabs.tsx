import { CalendarEmbed } from "./CalendarEmbed";

export function BookingTabs() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-paper">
          Pick a time that works for you
        </h2>
        <p className="mt-2 text-sm text-paper-dim">
          15 minutes, no prep required. We&apos;ll figure out the right fit
          together, whether that&apos;s AI Consulting, AI Workshops, or AI
          Hack Sprints.
        </p>
      </div>
      <div className="mt-8">
        <CalendarEmbed />
      </div>
    </div>
  );
}
