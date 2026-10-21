import type { Metadata } from "next";
import { IconGlyph } from "@/components/ui/IconGlyph";
import { pageMetadata } from "@/lib/metadata";
import { Compass, Heart, ShieldCheck, Flame } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconGrid } from "@/components/sections/IconGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = pageMetadata(
  "/about",
  "About",
  "The story, mission, and values behind The Pioneer Lounge."
);

const values = [
  {
    icon: <IconGlyph icon={ShieldCheck} />,
    title: "Substance over hype",
    description:
      "We say no to trends that don't hold up and yes to what actually works, even when it's less exciting to post about.",
  },
  {
    icon: <IconGlyph icon={Compass} />,
    title: "Clarity first",
    description:
      "Every engagement ends in a decision or a working thing, not a longer list of options.",
  },
  {
    icon: <IconGlyph icon={Heart} />,
    title: "Teach to replace ourselves",
    description:
      "Our job is done well when your team no longer needs us in the room to keep moving.",
  },
  {
    icon: <IconGlyph icon={Flame} />,
    title: "Built in public, with you",
    description:
      "We work alongside your team, not above it, visibly, honestly, and with real accountability.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built by a practitioner who got tired of the AI theater."
        description="The Pioneer Lounge exists because most AI advice is either too vague to act on, or too hyped to trust."
      />

      <section className="border-b border-line py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-900" />
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-ember-400">
                  Founder story
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-paper md:text-4xl">
                  From answering the same AI questions on LinkedIn to
                  building a business around the answer.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="flex flex-col gap-4 text-paper-dim">
                <p className="leading-relaxed">
                  The Pioneer Lounge started the way a lot of good
                  businesses do: with a pattern that was impossible to
                  ignore. Founders, operators, and enterprise leaders kept
                  asking the same question in different words, not
                  &ldquo;what is AI,&rdquo; but &ldquo;what do I actually do
                  about it, starting Monday.&rdquo;
                </p>
                <p className="leading-relaxed">
                  Answering that question consistently, in public, is what
                  built a trusted following long before it became a company.
                  The Pioneer Lounge turns that same directness into
                  consultations, workshops, hack sprints, and enterprise
                  programs, built for people who are done reading about AI
                  and ready to run on it.
                </p>
                <p className="leading-relaxed">
                  No theater, no vague futurism. Just what&apos;s working
                  right now, taught by someone who has actually built it.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Mission"
              title="Make AI fluency as ordinary as spreadsheet fluency."
              description="Not because AI is a trend worth chasing, but because teams that can actually use it will simply outrun the ones that can't. We exist to close that gap, for individuals and organizations alike."
            />
          </div>
        </Container>
      </section>

      <IconGrid
        eyebrow="Values"
        title="What guides how we work."
        columns={4}
        items={values}
      />

      <CTASection
        title="Want to work with us directly?"
        description="Book a discovery call and let's talk about where your team actually is with AI."
      />
    </>
  );
}
