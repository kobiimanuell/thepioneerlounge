import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { IconGlyph } from "@/components/ui/IconGlyph";
import { Rocket, Users2, Building2, PackageCheck, Gauge, Flag } from "lucide-react";
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
  "A focused, high-energy week that takes a team from idea to a working AI product they actually shipped."
);

export default function AIHackSprintsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Hack Sprints"
        title="One week. One real product. Zero slideware."
        description="A focused sprint that takes your team from a rough idea to a working AI product, built, tested, and demoed by the people who'll actually use it."
        cta={
          <>
            <Button href="/book-a-call" size="lg">
              Book a discovery call
            </Button>
            <Button href="#structure" variant="outlineLight" size="lg">
              See the sprint week
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
              "A dedicated week to break out of quarterly planning and actually ship something new.",
          },
        ]}
      />

      <section className="border-b border-line py-16 lg:py-20">
        <Container>
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/hacksprint-banner.jpg"
              alt="A team collaborating during an AI Hack Sprint"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <div id="structure">
        <Steps
          eyebrow="Sprint week structure"
          title="Five days, each with a clear job to do."
          description="The sprint is tightly structured so momentum never stalls, and every day ends with something concrete."
          dark
          steps={[
            {
              label: "Day 1",
              title: "Define & scope",
              description:
                "Lock the problem, the user, and a scoped version of the product that can realistically ship by Friday.",
            },
            {
              label: "Day 2",
              title: "Architect & prototype",
              description:
                "Technical approach locked, first working scaffold in place, core AI workflow wired up.",
            },
            {
              label: "Day 3",
              title: "Build",
              description:
                "Heads-down build time with hands-on support, focused on the core user flow end to end.",
            },
            {
              label: "Day 4",
              title: "Test & refine",
              description:
                "Real users or stakeholders try it; the team fixes what's broken and cuts what isn't essential.",
            },
            {
              label: "Day 5",
              title: "Demo & roadmap",
              description:
                "A live demo to stakeholders, plus a clear-eyed roadmap for what it takes to take this to production.",
            },
          ]}
        />
      </div>

      <IconGrid
        eyebrow="Outcomes"
        title="You leave with a product, not a prototype deck."
        items={[
          {
            icon: <IconGlyph icon={PackageCheck} />,
            title: "A working AI product",
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
            title: "A production roadmap",
            description:
              "A clear, honest plan for what it takes to go from sprint build to shipped feature.",
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
              "A small, empowered team of 3 to 6 people who can make decisions without waiting on approvals. That's what keeps the week moving.",
          },
          {
            question: "Do we need our own engineers?",
            answer:
              "It helps, but it's not required. Depending on scope, our team can pair directly with yours to cover technical gaps for the week.",
          },
          {
            question: "What happens to the product after the sprint?",
            answer:
              "It's yours. The sprint ends with a working build and a roadmap; what you do with it from there is entirely up to your team.",
          },
          {
            question: "Can a sprint run remotely?",
            answer:
              "Yes. Sprints run in person, remote, or hybrid. In-person tends to move faster, but remote sprints with the right structure work well too.",
          },
          {
            question: "How is this different from a hackathon?",
            answer:
              "A hackathon is exploratory and often disposable. A sprint is scoped against a real problem your team already has, with a roadmap built in so the output doesn't die on Friday.",
          },
        ]}
      />

      <CTASection
        title="Bring us the idea you keep putting off."
        description="Book a discovery call and we'll tell you if it's sprint-shaped, and what it would take to ship it in a week."
      />
    </>
  );
}
