import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { IconGlyph } from "@/components/ui/IconGlyph";
import {
  Target,
  Users2,
  Building2,
  Wrench,
  GraduationCap,
  Video,
  BarChart3,
  Sparkles,
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
  "/ship-one-thing",
  "Ship One Thing",
  "A 2–4 week, end-to-end engagement that takes your team from idea to one real AI tool they use every day. From $15,000."
);

export default function ShipOneThingPage() {
  return (
    <>
      <PageHero
        eyebrow="Ship One Thing"
        title="One working AI tool. Shipped, not shelved."
        description="A focused, 2–4 week engagement that takes your team from idea to one real, end-to-end AI tool they use every day. From $15,000."
        cta={
          <>
            <Button href="/book-a-call" size="lg">
              Book a discovery call
            </Button>
            <Button href="#steps" variant="outlineLight" size="lg">
              See how it works
            </Button>
          </>
        }
      />

      <section className="border-b border-line bg-ink-900/40 py-5">
        <Container>
          <Reveal className="flex items-center justify-center gap-2.5 text-center font-mono text-xs uppercase tracking-[0.2em] text-ember-400">
            <Sparkles className="size-4 shrink-0" />
            Now booking founding clients for early 2027
          </Reveal>
        </Container>
      </section>

      <IconGrid
        eyebrow="Who it's for"
        title="For teams ready to build the real thing."
        items={[
          {
            icon: <IconGlyph icon={Target} />,
            title: "Teams with one clear use case",
            description:
              "You already know the AI workflow worth building. You need it actually built and adopted, not sketched.",
          },
          {
            icon: <IconGlyph icon={Users2} />,
            title: "Teams that validated an idea",
            description:
              "Coming out of a sprint or pilot with a direction worth committing to, ready to turn it into something daily.",
          },
          {
            icon: <IconGlyph icon={Building2} />,
            title: "Orgs that don't want a hire",
            description:
              "You need one real tool shipped without standing up an in-house AI team to build it.",
          },
        ]}
      />

      <section className="border-b border-line py-16 lg:py-20">
        <Container>
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/hacksprint-banner.jpg"
              alt="A team building an AI product together"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <div id="steps">
        <Steps
          eyebrow="How it works"
          title="Four steps, from idea to daily use."
          description="From $15,000, 2–4 weeks end to end. 50% to start, 50% on delivery."
          dark
          steps={[
            {
              label: "Step 1",
              title: "Strategy",
              description:
                "We scope the one workflow worth building, the users it's for, and what shipped actually looks like.",
            },
            {
              label: "Step 2",
              title: "Team training",
              description:
                "Your team learns the tools and workflow alongside us, so they can run and extend it after launch.",
            },
            {
              label: "Step 3",
              title: "Build",
              description:
                "We build the real, end-to-end tool, not a prototype, with your team embedded throughout.",
            },
            {
              label: "Step 4",
              title: "Launch",
              description:
                "The tool ships into your team's actual workflow, with a clear read on the impact it's having.",
            },
          ]}
        />
      </div>

      <IconGrid
        eyebrow="What you get"
        title="Not a demo. A tool your team actually uses."
        columns={4}
        items={[
          {
            icon: <IconGlyph icon={Wrench} />,
            title: "A working tool",
            description:
              "End-to-end, built for your real workflow, not a one-off demo.",
          },
          {
            icon: <IconGlyph icon={GraduationCap} />,
            title: "Team training",
            description:
              "Your team learns to run and extend it, not just hand it off and hope.",
          },
          {
            icon: <IconGlyph icon={Video} />,
            title: "AI video library",
            description:
              "Recorded walkthroughs your team can revisit and share internally.",
          },
          {
            icon: <IconGlyph icon={BarChart3} />,
            title: "ROI report",
            description:
              "A clear, honest read on the impact the tool is having after launch.",
          },
        ]}
      />

      <section className="border-b border-line bg-ink-900/40 py-14">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-paper">
                Not sure yet?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper-dim">
                Start with a 1-day AI Hack Sprint. Your fee counts toward the
                full project if you go ahead within 30 days.
              </p>
            </div>
            <Button
              href="/ai-hack-sprints"
              variant="outline"
              className="shrink-0"
            >
              See AI Hack Sprints
            </Button>
          </Reveal>
        </Container>
      </section>

      <FAQSection
        items={[
          {
            question: "What counts as \"one thing\"?",
            answer:
              "One clear, scoped AI-powered workflow or tool, end to end, built for a specific team or use case. We lock the exact scope together during strategy before any build work starts.",
          },
          {
            question: "What if we have more than one idea?",
            answer:
              "We help you pick the one with the clearest payoff first. A second engagement is always an option once the first tool is live and proving its value.",
          },
          {
            question: "Does the Hack Sprint fee really count toward this?",
            answer:
              "Yes. If you run an AI Hack Sprint and decide to move forward with Ship One Thing within 30 days, your sprint fee is credited against the project price.",
          },
          {
            question: "Do we need our own engineers?",
            answer:
              "It helps, but it's not required. Your team is embedded throughout for training and context, and we cover the technical build.",
          },
          {
            question: "What happens after launch?",
            answer:
              "You get an ROI report and a trained team who can run and extend the tool. Ongoing support is available through the Fractional AI Lead retainer if you want it.",
          },
        ]}
      />

      <CTASection
        title="Bring us the one thing worth shipping."
        description="Book a discovery call and we'll tell you if it's scoped right, and what it would take to ship it."
      />
    </>
  );
}
