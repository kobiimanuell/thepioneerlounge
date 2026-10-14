import type { Metadata } from "next";
import Image from "next/image";
import { Target, Users, GitBranch, Map, ShieldCheck, Compass } from "lucide-react";
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
  "Consultations",
  "Strategic, 1:1 AI guidance for leaders deciding where AI fits in their roadmap, and where it doesn't."
);

export default function ConsultationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultations"
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
        description="Consultations work best when the right decision-maker is in the room."
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
          description="Engagements range from a single working session to a short series, depending on the complexity of the problem."
          dark
          steps={[
            {
              label: "Step 1",
              title: "Discovery call (free)",
              description:
                "A 30-minute call to understand your context, constraints, and what a good outcome looks like.",
            },
            {
              label: "Step 2",
              title: "Working session(s)",
              description:
                "Focused 60–90 minute sessions with your team, working through the actual decision live.",
            },
            {
              label: "Step 3",
              title: "Recommendation brief",
              description:
                "A short, concrete write-up: what to do, what to avoid, and what to revisit later.",
            },
            {
              label: "Step 4",
              title: "Optional follow-up",
              description:
                "A check-in session once you've started implementing, to course-correct early.",
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

      <FAQSection
        items={[
          {
            question: "How long is a typical engagement?",
            answer:
              "Most consultations run from a single working session to a short series over two to three weeks. We scope this together on the discovery call based on the complexity of the decision in front of you.",
          },
          {
            question: "Do you work with early-stage startups or only enterprises?",
            answer:
              "Both. We work with founders making a first AI hire or build decision, and with enterprise leaders evaluating AI across an entire function. The format adapts; the rigor doesn't.",
          },
          {
            question: "Is this the same as the Enterprise Program?",
            answer:
              "No. Consultations are 1:1 strategic sessions with a leader or small decision-making group. The Enterprise Program is a structured, team-wide training rollout for up to 100 employees. Many clients start with a consultation and move into the Enterprise Program once direction is set.",
          },
          {
            question: "What if we just need a second opinion on a vendor?",
            answer:
              "That's a common, well-scoped use of a single working session. Bring the context and the shortlist; we'll bring an outside technical read.",
          },
          {
            question: "How do you price consultations?",
            answer:
              "Pricing depends on scope and the number of sessions involved. Share your budget band on the discovery call and we'll recommend the right format, or send a written quote on request.",
          },
        ]}
      />

      <CTASection
        title="Bring us the decision you're stuck on."
        description="Book a free 30-minute discovery call and we'll tell you honestly whether a consultation is the right next step."
      />
    </>
  );
}
