import { CalendarEmbed } from "./CalendarEmbed";

export function BookingTabs() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-paper">
          Pick a time that works for you
        </h2>
        <p className="mt-2 text-sm text-paper-dim">
          30 minutes, no prep required. We&apos;ll figure out the right fit
          together, whether that&apos;s a consultation, workshop, hack
          sprint, or the Enterprise Program.
        </p>
      </div>
      <div className="mt-8">
        <CalendarEmbed />
      </div>
    </div>
  );
}
