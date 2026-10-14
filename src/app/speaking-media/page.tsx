import type { Metadata } from "next";
import Image from "next/image";
import { Mic2, FileDown, Quote, Lightbulb, Rocket, Target, Users2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconGrid } from "@/components/sections/IconGrid";
import { IconGlyph } from "@/components/ui/IconGlyph";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Speaking & Media",
  description:
    "Book The Pioneer Lounge to speak on AI adoption, enablement, and building an AI-fluent culture.",
};

const topics = [
  {
    icon: <IconGlyph icon={Lightbulb} />,
    title: "AI Adoption for Teams That Don't Want Another Tool",
    description:
      "Why most AI rollouts stall at the pilot stage, and the structural changes that actually move teams to daily use.",
  },
  {
    icon: <IconGlyph icon={Rocket} />,
    title: "From Pilot to Production: Making AI Stick",
    description:
      "A practical framework for turning a promising AI experiment into a workflow your team won't abandon in a month.",
  },
  {
    icon: <IconGlyph icon={Target} />,
    title: "The Enterprise AI Readiness Gap",
    description:
      "What separates organizations that are actually AI-ready from those that only look ready on a slide.",
  },
  {
    icon: <IconGlyph icon={Users2} />,
    title: "Building an AI-Fluent Culture",
    description:
      "Why AI fluency is a culture problem before it's a tooling problem, and how to build it deliberately.",
  },
];

const stageFit = [
  "AI & technology conferences",
  "Corporate all-hands and offsites",
  "Leadership summits",
  "Podcasts & panel discussions",
  "Startup and founder communities",
];

export default function SpeakingMediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Speaking & Media"
        title="Talks on AI adoption, built for people who have to act on them."
        description="Practical, experience-driven talks for teams and leaders navigating what AI actually changes about how they work."
        cta={
          <>
            <Button href="/book-a-call" size="lg">
              Book for your event
            </Button>
            <Button
              href={`mailto:${site.email}?subject=Speaker one-sheet request`}
              variant="outlineLight"
              size="lg"
              showArrow={false}
            >
              <FileDown className="size-4" />
              Request speaker one-sheet
            </Button>
          </>
        }
      />

      <section className="border-b border-line py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/images/speaking-stage.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Mic2 className="size-7 text-ember-500" strokeWidth={1.5} />
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-paper">
                A voice trusted by builders, not just audiences.
              </h2>
              <p className="mt-5 leading-relaxed text-paper-dim">
                The Pioneer Lounge was founded by a practitioner, not a
                commentator, someone who has built a trusted following on
                LinkedIn by consistently sharing hands-on, practical takes on
                where AI actually works inside real businesses. That same
                directness is what shows up on stage: no hype, no vague
                futurism, just what&apos;s working right now and what to do
                about it.
              </p>

              <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-ember-500">
                Where these talks fit
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {stageFit.map((stage) => (
                  <span
                    key={stage}
                    className="rounded-full bg-ink-900 px-3.5 py-1.5 text-sm text-paper-dim"
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <IconGrid
        eyebrow="Topics"
        title="Talks built around one idea: make AI useful, not impressive."
        columns={2}
        items={topics}
      />

      <section className="border-b border-line py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="What people say"
            title="Testimonials from past talks."
          />
          <Reveal
            delay={0.1}
            className="mt-14 flex flex-col items-center gap-4 py-10 text-center"
          >
            <Quote className="size-7 text-paper-dim/40" />
            <p className="max-w-md text-balance text-paper-dim/70">
              Speaker testimonials will appear here as events are added. Have
              a quote from a past talk? Send it our way to feature it.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Book a talk"
        title="Bring a practical AI talk to your next event."
        description="Tell us about your audience and format, and we'll put together the right topic and talk length."
      />
    </>
  );
}
