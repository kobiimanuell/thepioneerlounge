import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { EventSlideshow } from "@/components/sections/EventSlideshow";
import { pageMetadata } from "@/lib/metadata";
import { getUpcomingEvents, getPastEvents } from "@/lib/events";

export const metadata: Metadata = pageMetadata(
  "/events",
  "Events",
  "Upcoming talks, workshops, and sprints from The Pioneer Lounge, plus photos from past events."
);

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Where we show up, and where we've already been."
        description="Talks, sprints, and sessions from The Pioneer Lounge and the people we build alongside."
      />

      <section className="border-b border-line py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Upcoming"
            title="What's next."
            description={
              upcoming.length > 0
                ? undefined
                : "Nothing scheduled right now. Join the community to hear about the next one first."
            }
          />

          {upcoming.length > 0 ? (
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {upcoming.map((event, i) => (
                <Reveal
                  key={event.slug}
                  delay={i * 0.08}
                  className="flex flex-col overflow-hidden rounded-3xl bg-ink-900/50"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl font-semibold text-paper">
                      {event.title}
                    </h3>
                    <div className="mt-3 flex flex-col gap-1.5 text-sm text-paper-dim">
                      <span className="flex items-center gap-2">
                        <Calendar className="size-4 shrink-0 text-ember-500" />
                        {event.dateLabel}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="size-4 shrink-0 text-ember-500" />
                        {event.location}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-dim">
                      {event.description}
                    </p>
                    {event.externalUrl && (
                      <Button
                        href={event.externalUrl}
                        variant="outline"
                        className="mt-6 w-full"
                        showArrow
                      >
                        Register
                      </Button>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={0.1} className="mt-10">
              <Button href="/community">Join the community</Button>
            </Reveal>
          )}
        </Container>
      </section>

      <section className="border-b border-line py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Past events" title="Where we've been." />

          <div className="mt-14 flex flex-col divide-y divide-line border-t border-line">
            {past.map((event, i) => (
              <Reveal
                key={event.slug}
                delay={i * 0.05}
                className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-paper">
                    {event.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-paper-dim">
                    <span className="flex items-center gap-2">
                      <Calendar className="size-4 shrink-0 text-ember-500" />
                      {event.dateLabel}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="size-4 shrink-0 text-ember-500" />
                      {event.location}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                    {event.description}
                  </p>
                  {event.photos && event.photos.length > 0 && (
                    <div className="mt-5">
                      <EventSlideshow photos={event.photos} alt={event.title} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want us to speak at or sponsor your event?"
        description="Book a call and tell us about it."
        secondary={{ label: "See speaking topics", href: "/speaking-media" }}
      />
    </>
  );
}
