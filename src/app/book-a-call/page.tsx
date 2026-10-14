import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BookingTabs } from "@/components/sections/BookingTabs";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a discovery call or request a written quote from The Pioneer Lounge.",
};

export default function BookACallPage() {
  return (
    <>
      <PageHero
        eyebrow="Get started"
        title="Book a call, or get a quote in writing."
        description="Two ways to start. Pick whichever fits how your organization moves."
      />

      <section className="border-b border-line py-16 lg:py-20">
        <Container>
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/bookacall-banner.jpg"
              alt="A Pioneer Lounge speaker at a podium"
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
              "A 30-minute conversation to understand your context and goals, so we can recommend the right engagement: consultation, workshop, hack sprint, or the Enterprise Program.",
          },
          {
            question: "How fast do I hear back after requesting a quote?",
            answer:
              "Within two business days. For the Enterprise Program, we'll typically schedule a short briefing call before sending a final proposal.",
          },
          {
            question: "Is the discovery call free?",
            answer: "Yes, always. No cost and no obligation.",
          },
          {
            question: "Can I request a quote without booking a call first?",
            answer:
              "Yes. Use the Request a Quote tab above and share as much detail as you can; we'll follow up directly.",
          },
        ]}
      />
    </>
  );
}
