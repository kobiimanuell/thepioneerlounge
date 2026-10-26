import { Hero } from "@/components/sections/home/Hero";
import { ProofStrip } from "@/components/sections/home/ProofStrip";
import { ServiceCards } from "@/components/sections/home/ServiceCards";
import { SelectedWork } from "@/components/sections/home/SelectedWork";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { Steps } from "@/components/sections/Steps";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ServiceCards />
      <SelectedWork />
      <TestimonialsSection />
      <Steps
        eyebrow="How it works"
        title="How engagements work."
        description="A short, honest path from a conversation to a shipped outcome."
        steps={[
          {
            label: "Step 1",
            title: "Free discovery call",
            description:
              "A 15-minute conversation to understand your context and map the right engagement.",
          },
          {
            label: "Step 2",
            title: "A short, concrete proposal",
            description:
              "Scope, format, timeline, and price, no pressure to sign on the call itself.",
          },
          {
            label: "Step 3",
            title: "Delivery",
            description:
              "A consultation, hack sprint, or workshop, run by the people who scoped it with you.",
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
