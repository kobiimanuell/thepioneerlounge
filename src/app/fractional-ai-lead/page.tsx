import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { IconGlyph } from "@/components/ui/IconGlyph";
import {
  Compass,
  Building2,
  Users2,
  Map,
  CalendarClock,
  Network,
  ClipboardCheck,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { IconGrid } from "@/components/sections/IconGrid";
import { Steps } from "@/components/sections/Steps";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = pageMetadata(
  "/fractional-ai-lead",
  "Fractional AI Lead",
  "An embedded AI lead for your organization, driving strategy, rollout, and adoption without a full-time hire. From $4,000/month."
);

export default function FractionalAILeadPage() {
  return (
    <>
      <PageHero
        eyebrow="Fractional AI Lead"
        title="Embedded AI leadership, without the full-time hire."
        description="A monthly retainer that gives your organization dedicated AI strategy, rollout, and adoption support. From $4,000/month, 3-month minimum."
        cta={
          <>
            <Button href="/book-a-call" size="lg">
              Book a discovery call
            </Button>
            <Button href="#included" variant="outlineLight" size="lg">
              See what's included
            </Button>
          </>
        }
      />

      <IconGrid
        eyebrow="Who it's for"
        title="For orgs that need steady AI leadership, not another consultant."
        items={[
          {
            icon: <IconGlyph icon={Building2} />,
            title: "Orgs without a dedicated AI lead",
            description:
              "You need someone driving AI strategy and rollout, but aren't ready for a full-time executive hire.",
          },
          {
            icon: <IconGlyph icon={Users2} />,
            title: "Teams mid-rollout",
            description:
              "AI adoption has started, but needs steady, ongoing hands to keep it from stalling out.",
          },
          {
            icon: <IconGlyph icon={Compass} />,
            title: "Leaders who want execution, not just advice",
            description:
              "You want a partner embedded in the work, not another slide deck handed off at the end of an engagement.",
          },
        ]}
      />

      <section className="border-b border-line py-16 lg:py-20">
        <Container>
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/consultations-banner.jpg"
              alt="A strategy session in progress"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <div id="included">
        <Steps
          eyebrow="How it works"
          title="Ongoing leadership, not a one-off engagement."
          description="Billed monthly, 3-month minimum, scoped to your organization's priorities on an ongoing basis."
          dark
          steps={[
            {
              label: "Step 1",
              title: "Strategy & roadmap",
              description:
                "We set the AI roadmap together: what to prioritize, what to skip, and how to sequence it.",
            },
            {
              label: "Step 2",
              title: "Embedded execution",
              description:
                "We work alongside your team to actually drive adoption, not just advise on it from the outside.",
            },
            {
              label: "Step 3",
              title: "Ongoing office hours",
              description:
                "Regular check-ins keep momentum going and unblock whatever comes up between sessions.",
            },
          ]}
        />
      </div>

      <IconGrid
        eyebrow="What you get"
        title="Everything a full-time AI lead would own, fractionally."
        columns={4}
        items={[
          {
            icon: <IconGlyph icon={Map} />,
            title: "Executive strategy & roadmap",
            description:
              "A clear, prioritized plan for where AI should show up across your organization.",
          },
          {
            icon: <IconGlyph icon={CalendarClock} />,
            title: "Ongoing advisory & office hours",
            description:
              "Regular, scheduled time to keep initiatives moving and answer what comes up in between.",
          },
          {
            icon: <IconGlyph icon={Network} />,
            title: "Embedded org support",
            description:
              "Direct support across teams and functions, not a single point of contact at the top.",
          },
          {
            icon: <IconGlyph icon={ClipboardCheck} />,
            title: "Monthly reporting",
            description:
              "A clear, honest read each month on what's shipped, what's adopted, and what's next.",
          },
        ]}
      />

      <FAQSection
        items={[
          {
            question: "How is this different from hiring a full-time AI lead?",
            answer:
              "You get senior AI leadership and execution without the cost, ramp-up time, or commitment of a full-time hire, scoped to exactly what your org needs right now.",
          },
          {
            question: "What's the minimum commitment?",
            answer:
              "Three months, billed monthly. That's enough time to set a real roadmap and start showing adoption, without locking you into a long-term contract upfront.",
          },
          {
            question: "How much time does this involve each week?",
            answer:
              "Scoped together on the discovery call based on your priorities. Most engagements combine scheduled strategy time with ongoing availability for your team.",
          },
          {
            question: "Can we pause or end the retainer after the minimum?",
            answer:
              "Yes. After the 3-month minimum, the retainer continues month to month and can be paused or ended with notice.",
          },
          {
            question: "What does onboarding look like?",
            answer:
              "We start with a discovery call to understand your organization's structure, tools, and goals, then set the first 90-day roadmap together.",
          },
        ]}
      />

      <CTASection
        title="Get an AI lead without the full-time hire."
        description="Book a discovery call and we'll map what a Fractional AI Lead engagement would look like for your org."
      />
    </>
  );
}
