import type { Metadata } from "next";
import { Cpu, GraduationCap, Building2, ShieldCheck, Users2, Handshake } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconGlyph } from "@/components/ui/IconGlyph";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { WARM_PATTERNS } from "@/components/sections/home/mosaicPattern";

export const metadata: Metadata = pageMetadata(
  "/partner-with-us",
  "Partner With Us",
  "We work with technology platforms, educators, businesses, and innovation communities to make practical AI adoption more accessible and impactful."
);

const partnershipMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Partnership inquiry"
)}&body=${encodeURIComponent(
  `Organization:\n\nPartnership type (Product / Specialist / Delivery):\n\nWhat we'd like to do together:\n\nTimeline:\n`
)}`;

const orgGroups = [
  {
    heading: "Technology & Ecosystem",
    description: "Platforms involved in our workshops, hack sprints, and AI enablement activities.",
    orgs: ["Microsoft", "Manus", "HeyGen", "Clay"],
  },
  {
    heading: "Education & Community",
    description: "Organizations involved in educational programs and learning initiatives.",
    orgs: ["interactED", "BrainStation", "WIT Regatta"],
  },
  {
    heading: "Corporate & Strategic",
    description: "Organizations supported through consulting, training, and innovation engagements.",
    orgs: ["Specific Engineering Solutions"],
  },
];

const opportunities = [
  {
    icon: Cpu,
    title: "Product Partners",
    description:
      "AI technology providers interested in adoption, demonstrations, and training with our community and clients.",
  },
  {
    icon: ShieldCheck,
    title: "Specialist Partners",
    description:
      "Privacy, cybersecurity, compliance, and other subject-matter experts who complement our delivery.",
  },
  {
    icon: Users2,
    title: "Delivery Partners",
    description:
      "AI builders, facilitators, and consultants supporting client engagements alongside our team.",
  },
];

const collaborations = [
  "Sponsored AI hack sprints",
  "Corporate and educational AI programs",
  "AI product demonstrations and adoption workshops",
  "Co-hosted innovation events",
  "Referrals and project delivery partnerships",
];

export default function PartnerWithUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Our Ecosystem of Collaboration"
        description="We work with technology platforms, educators, businesses, and innovation communities to make practical AI adoption more accessible and impactful."
        cta={
          <Button href={partnershipMailto} size="lg">
            Explore a partnership
          </Button>
        }
      />

      <section className="border-b border-line py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Trusted By & Collaborated With"
            title="Organizations we've worked with."
            description="Identified by the nature of the relationship, client, sponsor, collaborator, venue host, or participating organization, not as formal partnerships or endorsements. Final list and logo permissions pending confirmation."
          />

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {orgGroups
              .filter((group) => group.orgs.length > 0)
              .map((group, i) => (
                <Reveal key={group.heading} delay={i * 0.06}>
                  <h3 className="text-lg font-semibold text-paper">
                    {group.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-dim">
                    {group.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                    {group.orgs.map((org) => (
                      <li key={org} className="text-sm text-paper">
                        {org}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Partner with The Pioneer Lounge"
            title="Partnership opportunities."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {opportunities.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="h-full">
                <div
                  className="h-full rounded-tl-[20px] pl-5 pt-5"
                  style={WARM_PATTERNS[i % WARM_PATTERNS.length]}
                >
                  <div className="flex h-full flex-col gap-3 rounded-tl-[14px] bg-ink-950/90 p-6 backdrop-blur-xl">
                    <div className="flex size-10 shrink-0 items-center justify-center text-ember-500">
                      <IconGlyph icon={item.icon} />
                    </div>
                    <h3 className="text-lg font-semibold text-paper">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-paper-dim">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 rounded-3xl bg-ink-900/50 p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <Handshake
                className="mt-0.5 size-6 shrink-0 text-ember-500"
                strokeWidth={1.75}
              />
              <div>
                <h3 className="text-lg font-semibold text-paper">
                  Ways to collaborate
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {collaborations.map((item) => (
                    <li key={item} className="text-sm text-paper-dim">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="max-w-lg text-sm leading-relaxed text-paper-dim">
              Tell us about your organization, the kind of partnership you have
              in mind, and your timeline, and we&apos;ll take it from there.
            </p>
            <Button href={partnershipMailto} size="lg">
              Explore a partnership
            </Button>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Have a different kind of collaboration in mind?"
        description="Book a free discovery call and tell us what you're thinking."
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  );
}
