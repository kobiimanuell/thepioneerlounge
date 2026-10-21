import { Hero } from "@/components/sections/home/Hero";
import { ShowcaseSection } from "@/components/sections/home/ShowcaseSection";
import { ProofStrip } from "@/components/sections/home/ProofStrip";
import { ServiceCards } from "@/components/sections/home/ServiceCards";
import { VideoHighlight } from "@/components/sections/home/VideoHighlight";
import { AudienceScroll } from "@/components/sections/home/AudienceScroll";
import { EnterpriseHighlight } from "@/components/sections/home/EnterpriseHighlight";
import { EpisodesSection } from "@/components/sections/home/EpisodesSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { TierCards } from "@/components/sections/TierCards";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <ShowcaseSection />
      <ProofStrip />
      <ServiceCards />
      <VideoHighlight />
      <AudienceScroll />
      <EnterpriseHighlight />
      <EpisodesSection />
      <TestimonialsSection />
      <TierCards
        eyebrow="Pricing"
        title="Three ways to work with us."
        description=""
        tiers={[
          {
            kicker: "Learn",
            name: "Team AI Workshop",
            price: "From $3,500*",
            cadence: "Half-day session. Full programs from $9,500.",
            description: "Your team leaves using AI in their real work.",
            note: "About $230 per person for a team of 15",
            featured: true,
            badge: "Most teams start here",
            cta: "Book a workshop",
            href: "/workshops",
          },
          {
            kicker: "Build",
            name: "Ship One Thing",
            price: "From $15,000*",
            cadence: "2–4 weeks, end to end.",
            description: "One working AI tool your team uses every day.",
            note: "50% to start, 50% on delivery",
            badge: "Limited spots: founding-client pricing for early 2027",
            cta: "Book a discovery call",
            href: "/ship-one-thing",
          },
          {
            kicker: "Lead",
            name: "Fractional AI Lead",
            price: "From $4,000/mo*",
            cadence: "Monthly retainer, 3-month minimum.",
            description: "Ongoing AI leadership without a full-time hire.",
            note: "Billed monthly",
            cta: "Book a discovery call",
            href: "/fractional-ai-lead",
          },
        ]}
        footnote="*Final price depends on team size and scope, and is confirmed on your discovery call."
        belowNote={
          <p className="text-sm text-paper-dim">
            Not ready for a team program? Start with our{" "}
            <a href="/community" className="text-ember-500 underline underline-offset-4 hover:text-ember-400">
              free community
            </a>{" "}
            or our self-led course from{" "}
            <a
              href={site.stripeFoundationsUrl}
              className="text-ember-500 underline underline-offset-4 hover:text-ember-400"
            >
              $29
            </a>
            .
          </p>
        }
      />
      <FAQSection
        items={[
          {
            question: "How is The Pioneer Lounge different from a generic AI course?",
            answer:
              "We don't teach AI in the abstract. Every session is built around your team's actual tools, workflows, and goals, so what people learn on day one shows up in their work on day two.",
          },
          {
            question: "Do you work with individuals or only teams?",
            answer:
              "Both. Our self-led course is built for individual professionals. The Team AI Workshop, Ship One Thing, and the Fractional AI Lead retainer are built for teams and full organizations.",
          },
          {
            question: "How long does a typical engagement take?",
            answer:
              "The Team AI Workshop runs a single half-day session. Ship One Thing runs 2–4 weeks, end to end. Fractional AI Lead is an ongoing monthly retainer, scoped together on a discovery call.",
          },
          {
            question: "Can you train a team on a specific AI tool we already use?",
            answer:
              "Yes. We regularly build custom content around the specific stack a team already runs on, rather than teaching generic, tool-agnostic theory.",
          },
          {
            question: "What happens after the discovery call?",
            answer:
              "We send a short, concrete proposal: scope, format, timeline, and price. No pressure to sign on the call itself.",
          },
        ]}
      />
      <CTASection
        title="Ready to make AI fluency your team's default?"
        description="Book a 30-minute discovery call and we'll map the right engagement for where you are today."
      />
    </>
  );
}
