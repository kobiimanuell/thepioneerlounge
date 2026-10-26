import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Users,
  GitBranch,
  Map,
  ShieldCheck,
  Compass,
  CalendarClock,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { IconGrid } from "@/components/sections/IconGrid";
import { Steps } from "@/components/sections/Steps";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { IconGlyph } from "@/components/ui/IconGlyph";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "/consultations",
  "AI Consulting",
  "Business-first AI strategy, use-case selection, tool evaluation, and adoption guidance, including ongoing Fractional AI Lead support."
);

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Consulting"
        title="Strategic AI guidance, one real conversation at a time."
        description="No decks full of buzzwords. We sit with your actual roadmap, your actual constraints, and tell you where AI genuinely moves the needle, and where it doesn't."
        cta={
          <>
            <Button href="/book-a-call" size="lg">
              Book a discovery call
            </Button>
            <Button href="#format" variant="outlineLight" size="lg">
              See how it works
            </Button>
          </>
        }
      />

      <IconGrid
        eyebrow="Who it's for"
        title="Built for the people making the call."
        description="Consulting engagements work best when the right decision-maker is in the room."
        items={[
          {
            icon: <IconGlyph icon={Target} />,
            title: "Founders & executives",
            description:
              "Deciding where AI belongs on the roadmap this quarter, and where it's a distraction.",
          },
          {
            icon: <IconGlyph icon={Users} />,
            title: "Product & ops leaders",
            description:
              "Evaluating tools, vendors, or build-vs-buy decisions and want an outside, technical read.",
          },
          {
            icon: <IconGlyph icon={GitBranch} />,
            title: "Teams stuck mid-pilot",
            description:
              "Somewhere between \"we tried ChatGPT once\" and a real production workflow, and need a path through.",
          },
        ]}
      />

      <section className="border-b border-line py-16 lg:py-20">
        <Container>
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/consultations-banner.jpg"
              alt="A Pioneer Lounge strategic consultation in progress"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <div id="format">
        <Steps
          eyebrow="Format"
          title="A conversation, structured to end in a decision."
          description="Engagements range from a single working session to an ongoing Fractional AI Lead retainer, depending on what your organization needs."
          dark
          steps={[
            {
              label: "Step 1",
              title: "Discovery call (free)",
              description:
                "A 15-minute call to understand your context, constraints, and what a good outcome looks like.",
            },
            {
              label: "Step 2",
              title: "Working session(s)",
              description:
                "Focused sessions with your team, working through the actual decision live.",
            },
            {
              label: "Step 3",
              title: "Recommendation brief",
              description:
                "A short, concrete write-up: what to do, what to avoid, and what to revisit later.",
            },
            {
              label: "Step 4",
              title: "Ongoing leadership, if you need it",
              description:
                "Some teams need a single decision made. Others need steady AI leadership over several months, that's Fractional AI Lead.",
            },
          ]}
        />
      </div>

      <IconGrid
        eyebrow="Outcomes"
        title="You leave with a decision, not homework."
        items={[
          {
            icon: <IconGlyph icon={Map} />,
            title: "A clear AI roadmap",
            description:
              "Prioritized, sequenced, and sized to your team's actual capacity.",
          },
          {
            icon: <IconGlyph icon={ShieldCheck} />,
            title: "A risk-aware adoption plan",
            description:
              "Data, security, and change-management considerations addressed up front, not after rollout.",
          },
          {
            icon: <IconGlyph icon={Compass} />,
            title: "A vetted shortlist",
            description:
              "Tools or vendors worth a pilot, and the ones not worth your team's time.",
          },
        ]}
      />

      <section className="border-b border-line bg-ink-900/40 py-14">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <CalendarClock
                className="mt-0.5 size-6 shrink-0 text-ember-500"
                strokeWidth={1.75}
              />
              <div>
                <h3 className="text-lg font-semibold text-paper">
                  Fractional AI Lead
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper-dim">
                  Ongoing AI leadership without a full-time hire: strategy,
                  rollout, and adoption support on a monthly retainer, for
                  organizations that need steady hands, not a one-off session.
                </p>
              </div>
            </div>
            <Button href="/book-a-call" variant="outline" className="shrink-0">
              Ask about Fractional AI Lead
            </Button>
          </Reveal>
        </Container>
      </section>

      <FAQSection
        items={[
          {
            question: "How long is a typical engagement?",
            answer:
              "Most consulting engagements run from a single working session to a short series over two to three weeks. Ongoing Fractional AI Lead support runs as a monthly retainer. We scope this together on the discovery call.",
          },
          {
            question: "Do you work with early-stage startups or only enterprises?",
            answer:
              "Both. We work with founders making a first AI hire or build decision, and with enterprise leaders evaluating AI across an entire function. The format adapts; the rigor doesn't.",
          },
          {
            question: "Is this the same as AI Workshops?",
            answer:
              "No. AI Consulting is 1:1 strategic guidance for a leader or small decision-making group. AI Workshops are hands-on team training sessions. Many clients start with a consulting conversation and move into workshops once direction is set.",
          },
          {
            question: "What if we just need a second opinion on a vendor?",
            answer:
              "That's a common, well-scoped use of a single working session. Bring the context and the shortlist; we'll bring an outside technical read.",
          },
          {
            question: "How do you price consulting engagements?",
            answer:
              "Pricing depends on scope, format, and whether it's a one-off session or an ongoing retainer. Share your context on the discovery call and we'll follow up with a written proposal.",
          },
        ]}
      />

      <CTASection
        title="Bring us the decision you're stuck on."
        description="Book a free discovery call and we'll tell you honestly whether a consulting engagement is the right next step."
      />
    </>
  );
}
