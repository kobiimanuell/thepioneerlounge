import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/metadata";
import { WARM_PATTERNS } from "@/components/sections/home/mosaicPattern";

export const metadata: Metadata = pageMetadata(
  "/services",
  "Services",
  "We help teams adopt AI through practical advice, hands-on workshops, and build sprints. Explore AI Consulting, AI Hack Sprints, and AI Workshops."
);

const services = [
  {
    name: "AI Consulting",
    tagline: "Business-first guidance on where AI actually fits.",
    audience:
      "Founders, executives, and product or ops leaders who need to decide where AI belongs on the roadmap, evaluate tools and vendors, or get an organization unstuck mid-pilot.",
    description:
      "Strategic, 1:1 guidance on AI strategy, use cases, tool selection, adoption, and workflows. Includes Fractional AI Lead for organizations that need ongoing AI leadership on a monthly retainer, not a one-off session.",
    outcomes: [
      "A clear, prioritized AI roadmap",
      "A risk-aware adoption plan",
      "A vetted shortlist of tools or vendors",
      "Ongoing leadership, if you need it",
    ],
    href: "/consultations",
    cta: "Explore AI Consulting",
  },
  {
    name: "AI Hack Sprints",
    tagline: "Build a real prototype, not another slide deck.",
    audience:
      "Startups validating an idea, internal innovation teams proving a use case, and enterprise teams who want a dedicated day to actually ship something new.",
    description:
      "Facilitated sessions where participants build a practical AI solution or prototype for their work or business, half a day to a full day, for a team of up to 15.",
    outcomes: [
      "A working AI prototype, demoed live",
      "Real, fast signal on whether an idea is worth pursuing",
      "A clear next step toward production",
    ],
    href: "/ai-hack-sprints",
    cta: "Explore AI Hack Sprints",
  },
  {
    name: "AI Workshops",
    tagline: "Practical training your team actually finishes.",
    audience:
      "Functional teams and companies of any size ready to move past the novelty phase, from a single team workshop to an organization-wide rollout.",
    description:
      "Hands-on training built around your team's real tools and workflows. Includes the Team AI Workshop, Ship One Thing build sessions, and tailored Custom Enterprise Programs combining learning, strategy, and implementation support.",
    outcomes: [
      "Working examples built with your real tools and data",
      "A shared toolkit the whole team builds on",
      "Momentum to keep experimenting independently",
    ],
    href: "/workshops",
    cta: "Explore AI Workshops",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three ways to work with us."
        description="We help teams adopt AI through practical advice, hands-on workshops, and build sprints."
        cta={
          <Button href="/book-a-call" size="lg">
            Book a free discovery call
          </Button>
        }
      />

      {services.map((service, i) => (
        <section
          key={service.name}
          className="border-b border-line py-20 lg:py-28"
        >
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal delay={i * 0.05}>
                <SectionHeading
                  eyebrow={`0${i + 1}`}
                  title={service.name}
                  description={service.tagline}
                />
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper-dim">
                  {service.description}
                </p>
                <p className="mt-6 text-sm font-medium text-paper">
                  Who it&apos;s for
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper-dim">
                  {service.audience}
                </p>
                <Button href={service.href} className="mt-8" showArrow>
                  {service.cta}
                </Button>
              </Reveal>

              <Reveal delay={i * 0.05 + 0.08}>
                <div
                  className="rounded-tl-[24px] pl-6 pt-6"
                  style={WARM_PATTERNS[i % WARM_PATTERNS.length]}
                >
                  <div className="rounded-tl-[18px] bg-ink-950/90 p-8 backdrop-blur-xl lg:p-10">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">
                      Expected outcomes
                    </p>
                    <ul className="mt-6 flex flex-col gap-3.5">
                      {service.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-3 text-sm text-paper-dim"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-ember-500"
                            strokeWidth={2.5}
                          />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href="/book-a-call"
                      variant="outline"
                      className="mt-8 w-full"
                    >
                      Book a discovery call
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <CTASection
        title="Not sure which one fits?"
        description="Book a free 15-minute discovery call and we'll help you map the right engagement."
      />
    </>
  );
}
