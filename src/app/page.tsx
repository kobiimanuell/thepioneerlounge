import { Hero } from "@/components/sections/home/Hero";
import { ShowcaseSection } from "@/components/sections/home/ShowcaseSection";
import { ProofStrip } from "@/components/sections/home/ProofStrip";
import { ServiceCards } from "@/components/sections/home/ServiceCards";
import { SelectedWork } from "@/components/sections/home/SelectedWork";
import { VideoHighlight } from "@/components/sections/home/VideoHighlight";
// import { AudienceScroll } from "@/components/sections/home/AudienceScroll";
import { EnterpriseHighlight } from "@/components/sections/home/EnterpriseHighlight";
import { PioneerHighlight } from "@/components/sections/home/PioneerHighlight";
import { EpisodesSection } from "@/components/sections/home/EpisodesSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ShowcaseSection />
      <ProofStrip />
      <ServiceCards />
      <SelectedWork />
      <VideoHighlight />
      {/* Commented out for now, per founder request: */}
      {/* <AudienceScroll /> */}
      <EnterpriseHighlight />
      <PioneerHighlight />
      <EpisodesSection />
      <TestimonialsSection />
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
              "Both. Our self-led AI Foundations course is built for individual professionals. AI Consulting, AI Hack Sprints, and AI Workshops are built for teams and full organizations.",
          },
          {
            question: "How long does a typical engagement take?",
            answer:
              "AI Hack Sprints and the Team AI Workshop run half a day to a full day. Ship One Thing and Custom Enterprise Programs run longer and are scoped together on a discovery call. Fractional AI Lead is an ongoing monthly retainer.",
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
        description="Book a free 15-minute discovery call and we'll map the right engagement for where you are today."
      />
    </>
  );
}
