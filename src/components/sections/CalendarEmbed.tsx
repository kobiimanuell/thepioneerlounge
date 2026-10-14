import { site } from "@/lib/site";

export function CalendarEmbed() {
  const embedUrl = `${site.calendarUrl}?background_color=16140f&text_color=faf8f3&primary_color=f25c19&hide_gdpr_banner=1`;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-ink-900">
      <iframe
        src={embedUrl}
        title="Book a call with The Pioneer Lounge"
        className="h-[720px] w-full"
        loading="lazy"
      />
    </div>
  );
}
