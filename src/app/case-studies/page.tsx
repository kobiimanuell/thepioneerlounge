import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "/case-studies",
  "Our Work",
  "Selected work and impact from The Pioneer Lounge: AI education, strategy, and hands-on build sprints."
);

const caseStudies = [
  {
    name: "interactED",
    title: "Build a Website With Just Prompts",
    tags: ["AI Education", "Digital Skills", "Hands-On Training"],
    challenge:
      "Making website development accessible to learners without traditional coding experience.",
    approach:
      "Designed and delivered a practical course teaching participants to create websites using AI and natural-language prompts.",
    outcome:
      "Participants gained hands-on experience with AI-assisted website creation. Learner numbers, completed projects, and feedback will be added once verified.",
    cta: { label: "Explore AI Workshops", href: "/workshops" },
    image: undefined,
  },
  {
    name: "Specific Engineering Solutions",
    title: "Using AI to Reactivate Dormant Sales Leads",
    tags: ["AI Strategy", "Sales Enablement", "Workflow Optimization"],
    challenge:
      "Reconnecting with inactive prospects and improving sales outreach efficiency.",
    approach:
      "Provided AI strategy and sales enablement recommendations, including tools such as Alta AI for personalized outreach, follow-ups, and lead reactivation.",
    outcome:
      "Developed a practical roadmap for incorporating AI into existing business development workflows. This was an advisory engagement; we don't claim a measured revenue or lead-conversion improvement without supporting evidence.",
    cta: { label: "Book a Free Discovery Call", href: "/book-a-call" },
    image: undefined,
  },
  {
    name: "AI Hack Sprints",
    title: "From Ideas to Working Prototypes in One Sprint",
    tags: ["AI Innovation", "Experiential Learning", "Hack Sprints"],
    challenge:
      "Helping participants apply AI through practical building, while supporting adoption of participating technology platforms.",
    approach:
      "Designed and facilitated hack sprints with guided building, collaborative problem-solving, and live demonstrations.",
    outcome:
      "Participants worked on practical AI projects and demonstrations. Participation and completion figures will be published once verified against event records.",
    cta: { label: "Explore AI Hack Sprints", href: "/ai-hack-sprints" },
    image: "/images/events/heygen-hackathon/heygen-hackathon-03.jpg",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Selected Work & Impact"
        description="A look at how we've helped learners, businesses, and teams put AI to practical use."
      />

      <div className="flex flex-col">
        {caseStudies.map((study, i) => (
          <section
            key={study.name}
            className="border-b border-line py-20 lg:py-28"
          >
            <Container>
              <div
                className={`grid grid-cols-1 gap-10 lg:gap-16 ${
                  study.image ? "lg:grid-cols-2 lg:items-center" : ""
                }`}
              >
                {study.image && (
                  <Reveal
                    delay={i * 0.05}
                    className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={study.image}
                      alt="Participants collaborating during a hands-on AI hack sprint"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </Reveal>
                )}

                <Reveal
                  delay={i * 0.05 + 0.05}
                  className={study.image && i % 2 === 1 ? "lg:order-1" : ""}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">
                    {study.name}
                  </p>
                  <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-paper md:text-4xl">
                    {study.title}
                  </h2>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs font-medium text-paper-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-5">
                    <div>
                      <p className="text-sm font-semibold text-paper">
                        Challenge
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-paper">
                        Our Approach
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">
                        {study.approach}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-paper">
                        Outcome
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  <Button href={study.cta.href} className="mt-8" showArrow>
                    {study.cta.label}
                  </Button>
                </Reveal>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <CTASection
        title="Want results like this for your team?"
        description="Book a free discovery call and we'll map the right engagement for where you are today."
      />
    </>
  );
}
