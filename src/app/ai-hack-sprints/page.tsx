import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { IconGlyph } from "@/components/ui/IconGlyph";
import {
  Rocket,
  Users2,
  Building2,
  PackageCheck,
  Gauge,
  Flag,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { IconGrid } from "@/components/sections/IconGrid";
import { Steps } from "@/components/sections/Steps";
import { PartnershipBanner } from "@/components/sections/PartnershipBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = pageMetadata(
  "/ai-hack-sprints",
  "AI Hack Sprints",
  "A focused, high-energy sprint, half a day to a full day, that takes a team of up to 15 from idea to a working AI prototype."
);

export default function AIHackSprintsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Hack Sprints"
        title="One day. One real prototype. Zero slideware."
        description="A focused sprint, half a day to a full day, that takes your team of up to 15 from a rough idea to a working AI prototype, built and demoed by the people who'll actually use it."
        cta={
          <>
            <Button href="/book-a-call" size="lg">
              Book a discovery call
            </Button>
            <Button href="#structure" variant="outlineLight" size="lg">
              See the format
            </Button>
          </>
        }
      />

      <IconGrid
        eyebrow="Who it's for"
        title="For teams who'd rather build than deliberate."
        items={[
          {
            icon: <IconGlyph icon={Rocket} />,
            title: "Startups validating an idea",
            description:
              "Early teams who need a working AI prototype in front of users fast, not in a future roadmap.",
          },
          {
            icon: <IconGlyph icon={Users2} />,
            title: "Internal innovation teams",
            description:
              "Groups tasked with proving an AI use case inside a larger organization, with a deadline attached.",
          },
          {
            icon: <IconGlyph icon={Building2} />,
            title: "Enterprise teams, off-cycle",
            description:
              "A dedicated day to break out of quarterly planning and actually ship something new.",
          },
        ]}
      />

      <section className="border-b border-line py-16 lg:py-20">
        <Container>
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/hacksprint-banner.jpg"
              alt="Participants collaborating during a hands-on AI hack sprint"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <div id="structure">
        <Steps
          eyebrow="Format"
          title="One format, built for speed."
          description="Half a day to a full day, for a team of up to 15. The sprint is tightly structured so momentum never stalls."
          dark
          steps={[
            {
              label: "Start",
              title: "Define & scope",
              description:
                "Lock the problem, the user, and a scoped version of the prototype that can realistically ship today.",
            },
            {
              label: "Build",
              title: "Prototype, hands-on",
              description:
                "Heads-down build time with facilitators embedded, focused on one core AI workflow end to end.",
            },
            {
              label: "Finish",
              title: "Demo & next steps",
              description:
                "A live demo to stakeholders, plus a clear-eyed read on what it takes to take this further.",
            },
          ]}
        />
      </div>

      <section className="border-b border-line bg-ink-900/40 py-14">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-paper">
                Ready to go further?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper-dim">
                A strong prototype can turn straight into a shipped product.
                Ship One Thing takes it from validated idea to something your
                team uses every day.
              </p>
            </div>
            <Button
              href="/workshops#formats"
              variant="outline"
              className="shrink-0"
              showArrow
            >
              See Ship One Thing
            </Button>
          </Reveal>
        </Container>
      </section>

      <IconGrid
        eyebrow="Outcomes"
        title="You leave with a prototype, not a slide deck."
        items={[
          {
            icon: <IconGlyph icon={PackageCheck} />,
            title: "A working AI prototype",
            description:
              "Demoed live, used by real stakeholders, not a mockup described in slides.",
          },
          {
            icon: <IconGlyph icon={Gauge} />,
            title: "Validated direction",
            description:
              "Real signal on whether the idea is worth continued investment, fast and cheaply.",
          },
          {
            icon: <IconGlyph icon={Flag} />,
            title: "A clear next step",
            description:
              "An honest read on what it takes to go from prototype to shipped product with Ship One Thing.",
          },
        ]}
      />

      <PartnershipBanner
        title="Partnership options for accelerators & studios"
        description="We partner with accelerators, studios, and venture teams to run hack sprints across portfolio companies or cohorts, with options for bundled pricing and co-delivery."
      />

      <FAQSection
        items={[
          {
            question: "Who needs to be in the room for a sprint?",
            answer:
              "A small, empowered team of up to 15 people who can make decisions without waiting on approvals. That's what keeps the day moving.",
          },
          {
            question: "Do we need our own engineers?",
            answer:
              "It helps, but it's not required. Depending on scope, our team can pair directly with yours to cover technical gaps for the day.",
          },
          {
            question: "What happens to the prototype after the sprint?",
            answer:
              "It's yours. The sprint ends with a working build; what you do with it from there is entirely up to your team.",
          },
          {
            question: "Can a sprint run remotely?",
            answer:
              "Yes. Sprints run in person, remote, or hybrid. In-person tends to move faster, but remote sprints with the right structure work well too.",
          },
          {
            question: "How is this different from Ship One Thing?",
            answer:
              "A Hack Sprint is a single focused day to validate one idea as a working prototype. Ship One Thing, one of our AI Workshops formats, is a multi-week engagement to turn that idea into a product your team actually uses every day.",
          },
        ]}
      />

      <CTASection
        title="Bring us the idea you keep putting off."
        description="Book a discovery call and we'll tell you if it's sprint-shaped, and what it would take to prototype it in a day."
      />
    </>
  );
}
