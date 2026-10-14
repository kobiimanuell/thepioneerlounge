import type { Metadata } from "next";
import Image from "next/image";
import { IconGlyph } from "@/components/ui/IconGlyph";
import { Users2, BarChart3, MessagesSquare } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { IconGrid } from "@/components/sections/IconGrid";
import { TierCards } from "@/components/sections/TierCards";
import { PartnershipBanner } from "@/components/sections/PartnershipBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Enterprise Program",
  description:
    "A structured, team-wide AI training program for up to 100 employees, with community access and built-in measurement.",
};

export default function EnterpriseProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise Program"
        title="Team-wide AI fluency, rolled out like a real program."
        description="A structured training program for up to 100 employees. Not a one-off workshop, but a measured rollout with community access built in from day one."
        cta={
          <>
            <Button href="/book-a-call" size="lg">
              Request a quote
            </Button>
            <Button href="#tiers" variant="outlineLight" size="lg">
              Compare tiers
            </Button>
          </>
        }
      />

      <IconGrid
        eyebrow="What's included"
        title="Built to outlast a single training day."
        items={[
          {
            icon: <IconGlyph icon={Users2} />,
            title: "Cohorts up to 100 employees",
            description:
              "Structured for a full department or company, with scheduling that fits around real workloads.",
          },
          {
            icon: <IconGlyph icon={MessagesSquare} />,
            title: "Community access, included",
            description:
              "Every participant gets a seat inside the Pioneer Lounge community to keep learning after the program ends.",
          },
          {
            icon: <IconGlyph icon={BarChart3} />,
            title: "Measurement & reporting",
            description:
              "Adoption and outcome reporting built for stakeholders, not just a satisfaction survey at the end.",
          },
        ]}
      />

      <section className="border-b border-line py-16 lg:py-20">
        <Container>
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/enterprise-banner.jpg"
              alt="A panel discussion at a Pioneer Lounge enterprise event"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <div id="tiers">
        <TierCards
          tiers={[
            {
              name: "Foundations",
              description:
                "Company-wide AI literacy: the baseline every team needs before AI tools become part of daily work.",
              features: [
                "Cohort-based training sessions for up to 100 employees",
                "Shared prompt and workflow playbooks",
                "Community access for every participant",
                "Post-program adoption summary",
              ],
            },
            {
              name: "Transformation",
              description:
                "Foundations, plus role-specific tracks and hands-on application for teams ready to operationalize AI.",
              features: [
                "Everything in Foundations",
                "Role-specific tracks for key functions",
                "An embedded AI Hack Sprint for a pilot team",
                "Full measurement & reporting dashboard",
                "Dedicated program lead for the engagement",
              ],
              featured: true,
            },
          ]}
        />
      </div>

      <PartnershipBanner
        title="Partnership options for HR & L&D platforms"
        description="We partner with learning platforms and HR teams to deliver the Enterprise Program as part of an existing L&D offering, with co-branding and integration options available."
      />

      <FAQSection
        items={[
          {
            question: "How is the Enterprise Program different from a workshop?",
            answer:
              "A workshop is a single session for one team. The Enterprise Program is a structured, multi-session rollout across an entire organization or department, with reporting and community access built in.",
          },
          {
            question: "What does the briefing call cover?",
            answer:
              "Before scoping a proposal, we run a briefing call to understand your organization's structure, tools, timeline, and goals so the program tiers reflect your actual context, not a generic template.",
          },
          {
            question: "How is adoption measured?",
            answer:
              "Reporting is scoped to your goals during the briefing call, and can include participation, workflow adoption, and outcome indicators your leadership team actually cares about.",
          },
          {
            question: "Can the program run across multiple locations or time zones?",
            answer:
              "Yes. Cohorts can be split by location, function, or time zone, with the same curriculum and reporting applied consistently across all of them.",
          },
          {
            question: "How do we get a quote?",
            answer:
              "Use the Request a Quote form on the Book a Call page, or book a discovery call directly. We'll schedule a briefing call before sending a proposal.",
          },
        ]}
      />

      <CTASection
        eyebrow="For organizations"
        title="Ready to roll AI fluency out company-wide?"
        description="Book a briefing call and we'll scope the right tier for your organization."
        primary={{ label: "Request a quote", href: "/book-a-call" }}
      />
    </>
  );
}
