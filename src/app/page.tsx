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
            price: "From $2,000",
            cadence: "per month",
            description:
              "Live, facilitated sessions built around the tools your team already runs on, not generic AI theory.",
            features: [
              "Weekly live sessions for teams of 50+",
              "Content built around your actual stack",
              "Adoption tracked across the org",
              "Direct line to a dedicated facilitator",
            ],
            featured: true,
            cta: "Request a proposal",
          },
          {
            name: "Strategic AI Partnership",
            price: "Custom",
            cadence: "scoped on the call",
            description:
              "Fixed-scope strategy and rollout work, priced and timelined before kickoff, not after.",
            features: [
              "Executive strategy and roadmap",
              "Enterprise-wide rollout support",
              "Ongoing advisory and office hours",
              "Scoped and timelined before kickoff",
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
              "Both. AI Foundations is self-paced for individual professionals. Team AI Upskilling and the Strategic AI Partnership are built for teams of 50+ and full organizations.",
          },
          {
            question: "How long does a typical engagement take?",
            answer:
              "Workshops run in a single session. Enterprise rollouts and strategic partnerships are scoped together on a discovery call, based on the size of your team and the complexity of the goal.",
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
