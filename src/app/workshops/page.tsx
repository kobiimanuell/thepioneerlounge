import type { Metadata } from "next";
import Image from "next/image";
import { IconGlyph } from "@/components/ui/IconGlyph";
import { Users2, Building, GraduationCap, Sparkles, Wrench, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { IconGrid } from "@/components/sections/IconGrid";
import { Steps } from "@/components/sections/Steps";
import { PartnershipBanner } from "@/components/sections/PartnershipBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Hands-on sessions that build real AI fluency across your team, from first prompts to production workflows.",
};

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshops"
        title="Fluency, built by doing, not by watching a slide deck."
        description="Live, hands-on sessions where your team leaves having actually built something with AI, not just heard about it."
        cta={
          <>
            <Button href="/book-a-call" size="lg">
              Book a discovery call
            </Button>
            <Button href="#format" variant="outlineLight" size="lg">
              See the format
            </Button>
          </>
        }
      />

      <IconGrid
        eyebrow="Who it's for"
        title="Any team ready to move past the novelty phase."
        items={[
          {
            icon: <IconGlyph icon={Users2} />,
            title: "Functional teams",
            description:
              "Marketing, ops, sales, or product teams ready to fold AI into day-to-day workflows.",
          },
          {
            icon: <IconGlyph icon={Building} />,
            title: "Companies of any size",
            description:
              "From a 10-person startup to a department inside a large enterprise, the format scales.",
          },
          {
            icon: <IconGlyph icon={GraduationCap} />,
            title: "Event & community organizers",
            description:
              "Conferences, accelerators, and communities bringing in a hands-on session for their audience.",
          },
        ]}
      />

      <section className="border-b border-line py-16 lg:py-20">
        <Container>
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/workshops-banner.jpg"
              alt="A Pioneer Lounge workshop session in progress"
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
          title="One session, built around your real work."
          description="Workshops run half-day or full-day, in person or remote, capped to keep every participant hands-on."
          dark
          steps={[
            {
              label: "Before",
              title: "A short scoping call",
              description:
                "We learn your team's tools, workflows, and skill level so the workshop uses your real use cases.",
            },
            {
              label: "During",
              title: "Live, hands-on build time",
              description:
                "Short teaching blocks followed by guided build time, and every participant ships something by the end.",
            },
            {
              label: "After",
              title: "Takeaway playbook",
              description:
                "A reference guide and prompt library your team keeps using long after the session ends.",
            },
          ]}
        />
      </div>

      <IconGrid
        eyebrow="Outcomes"
        title="What your team walks away with."
        items={[
          {
            icon: <IconGlyph icon={Sparkles} />,
            title: "Working examples",
            description:
              "Real workflows built during the session, using your team's actual tools and data.",
          },
          {
            icon: <IconGlyph icon={Wrench} />,
            title: "A shared toolkit",
            description:
              "A common set of prompts, tools, and practices the whole team can build on.",
          },
          {
            icon: <IconGlyph icon={TrendingUp} />,
            title: "Momentum",
            description:
              "The confidence gap closed, so your team leaves ready to keep experimenting on their own.",
          },
        ]}
      />

      <PartnershipBanner
        title="Partnership options for communities & conferences"
        description="Running an event, cohort, or accelerator? We partner with organizers to deliver workshops as part of a broader program, with options for co-branding and revenue share."
      />

      <FAQSection
        items={[
          {
            question: "How many people can attend a workshop?",
            answer:
              "We cap workshops to keep them hands-on, typically 12 to 30 participants depending on format. Larger groups are best served by the Enterprise Program, which is built for cohorts of up to 100.",
          },
          {
            question: "Do we need any technical background?",
            answer:
              "No. Workshops are designed for working professionals, not engineers. We meet your team at their current skill level and build from there.",
          },
          {
            question: "Can a workshop be customized to our industry?",
            answer:
              "Yes. The scoping call before every workshop exists specifically to pull in your real tools, workflows, and use cases.",
          },
          {
            question: "Do you run workshops for events or conferences?",
            answer:
              "Yes, see partnership options above. We've delivered sessions as part of community events and are open to co-branded or sponsored formats.",
          },
          {
            question: "What's the difference between a workshop and an AI Hack Sprint?",
            answer:
              "A workshop is a single focused session (half or full day) building fluency. An AI Hack Sprint is a multi-day, project-based engagement where a team ships a working AI product from scratch.",
          },
        ]}
      />

      <CTASection
        title="Give your team a session they'll actually use."
        description="Book a discovery call to scope a workshop around your team's real workflows."
      />
    </>
  );
}
