import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";
import { BookingTabs } from "@/components/sections/BookingTabs";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = pageMetadata(
  "/book-a-call",
  "Book a Call",
  "Book a free 15-minute discovery call with The Pioneer Lounge to scope the right AI engagement for your team."
);

export default function BookACallPage() {
  return (
    <>
      <PageHero
        eyebrow="Get started"
        title="Book a free discovery call."
        description="15 minutes to understand your context and map the right engagement, no forms, no waiting on an email back."
      />

      <section className="border-b border-line py-16 lg:py-20">
        <Container>
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/bookacall-banner.jpg"
              alt="A speaker presenting at a Pioneer Lounge event"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-line py-20 lg:py-28">
        <Container>
          <BookingTabs />
        </Container>
      </section>

      <FAQSection
        items={[
          {
            question: "What happens on the discovery call?",
            answer:
              "A 15-minute conversation to understand your context and goals, so we can recommend the right engagement: AI Consulting, AI Workshops, or AI Hack Sprints.",
          },
          {
            question: "Is the discovery call free?",
            answer: "Yes, always. No cost and no obligation.",
          },
          {
            question: "Can I get a written quote from this call?",
            answer:
              "Yes. Mention it on the call and we'll follow up with a written proposal, usually within two business days.",
          },
          {
            question: "What if I need to reschedule?",
            answer:
              "Use the reschedule or cancel link in your confirmation email, no need to email us directly.",
          },
        ]}
      />
    </>
  );
}
