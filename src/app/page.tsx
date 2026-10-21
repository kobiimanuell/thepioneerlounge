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
        tiers={[
          {
            name: "AI Foundations",
            price: "$29–47",
            cadence: "per person · self-paced",
            description:
              "The prompts, workflows, and guardrails that take AI from novelty to daily habit, at your own pace.",
            features: [
              "Self-paced modules, a few hours total",
              "Prompts and workflows for your actual tools",
              "Certificate of completion",
              "Lifetime access to updates",
            ],
            cta: "Enroll now",
            href: site.stripeFoundationsUrl,
          },
          {
            name: "Team AI Upskilling",
            price: "From $3,500",
            cadence: "half-day session",
            description:
              "Live, facilitated sessions built around the tools your team already runs on, not generic AI theory. Full multi-session programs from $9,500.",
            features: [
              "Half-day, hands-on session for your team",
              "Content built around your actual stack",
              "Full multi-session programs from $9,500",
              "Direct line to a dedicated facilitator",
            ],
            featured: true,
            cta: "Request a proposal",
          },
          {
            name: "Hack-Sprints",
            price: "From $2,000",
            cadence: "half-day",
            description:
              "A mini-hackathon for your team: a focused half-day sprint to prototype a real AI use case together.",
            features: [
              "Cross-functional team paired with facilitators",
              "A working prototype by the end of the day",
              "Scoped to one clear use case",
              "Half-day format, in person or remote",
            ],
            cta: "See how it works",
            href: "/ai-hack-sprints",
          },
          {
            name: "Ship One Thing",
            price: "From $15,000",
            cadence: "2–4 weeks",
            description:
              "A focused sprint to design, build, and ship one real, end-to-end AI-powered product or workflow.",
            features: [
              "A working, shippable product, not a demo",
              "Scoped to one clear outcome",
              "2–4 week delivery timeline",
              "Direct collaboration with your team throughout",
            ],
            cta: "Schedule a discovery call",
          },
          {
            name: "Fractional AI Lead",
            price: "From $4,000",
            cadence: "per month · 3-month minimum",
            description:
              "An embedded AI lead for your organization, driving strategy, rollout, and adoption without a full-time hire.",
            features: [
              "Monthly retainer, 3-month minimum",
              "Executive strategy and roadmap",
              "Ongoing advisory and office hours",
              "Embedded support across your organization",
            ],
            cta: "Schedule a discovery call",
          },
        ]}
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
              "Both. AI Foundations is self-paced for individual professionals. Team AI Upskilling, Hack-Sprints, Ship One Thing, and the Fractional AI Lead retainer are built for teams and full organizations.",
          },
          {
            question: "How long does a typical engagement take?",
            answer:
              "Workshops and Hack-Sprints run in a single half-day session. Ship One Thing runs 2–4 weeks. Fractional AI Lead and enterprise rollouts are ongoing, scoped together on a discovery call.",
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
