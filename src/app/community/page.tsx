import type { Metadata } from "next";
import Image from "next/image";
import { Users2, Hash, Sparkles, Users, Calendar, Library, BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconGrid } from "@/components/sections/IconGrid";
import { IconGlyph } from "@/components/ui/IconGlyph";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join The Pioneer Lounge community, free in Facebook and Slack, or go deeper with paid membership.",
};

const paidBenefits = [
  {
    icon: <IconGlyph icon={Library} />,
    title: "A curated resource library",
    description:
      "Templates, prompt libraries, and workflows pulled directly from paid engagements.",
  },
  {
    icon: <IconGlyph icon={Calendar} />,
    title: "Members-only sessions",
    description:
      "Recurring live sessions and office hours not open to the free tier.",
  },
  {
    icon: <IconGlyph icon={Users} />,
    title: "Direct access to practitioners",
    description:
      "A closer line to the Pioneer Lounge team for questions, reviews, and feedback.",
  },
  {
    icon: <IconGlyph icon={BadgeCheck} />,
    title: "Priority on events & sprints",
    description:
      "First access and member pricing on workshops, hack sprints, and speaking events.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="A place to keep building, between engagements."
        description="The Pioneer Lounge community is where practitioners trade what's actually working, free to join, with a deeper tier for those who want more."
        cta={
          <>
            <Button href="#free" size="lg">
              Join for free
            </Button>
            <Button href="#membership" variant="outlineLight" size="lg">
              See membership benefits
            </Button>
          </>
        }
      />

      <section id="free" className="border-b border-line py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Free tier"
              title="Open to anyone building with AI."
              description="Join the conversation in Facebook or Slack. Ask questions, share wins, and learn alongside other practitioners, free."
            />

            <Reveal delay={0.1}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                <Image
                  src="/images/community-event.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              </div>

              <div className="mt-6 flex flex-col divide-y divide-line border-t border-line">
                <a
                  href="#"
                  className="group flex items-center gap-4 py-5 transition-colors"
                >
                  <Users2
                    className="size-5 shrink-0 text-ember-500"
                    strokeWidth={1.75}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-paper">
                      Facebook Group
                    </div>
                    <div className="text-sm text-paper-dim">
                      Discussions, resources, and announcements.
                    </div>
                  </div>
                  <span className="text-sm font-medium text-ember-500 opacity-0 transition-opacity group-hover:opacity-100">
                    Join →
                  </span>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-4 py-5 transition-colors"
                >
                  <Hash
                    className="size-5 shrink-0 text-ember-500"
                    strokeWidth={1.75}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-paper">
                      Slack Workspace
                    </div>
                    <div className="text-sm text-paper-dim">
                      Real-time chat for quick questions and faster feedback.
                    </div>
                  </div>
                  <span className="text-sm font-medium text-ember-500 opacity-0 transition-opacity group-hover:opacity-100">
                    Join →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div id="membership">
        <IconGrid
          eyebrow="Membership"
          title="For practitioners who want more than the free tier."
          description="Membership is sold on access and benefit, not headcount. Here's exactly what you get."
          columns={2}
          items={paidBenefits}
        />
      </div>

      <section className="border-b border-line pb-16">
        <Container>
          <Reveal
            delay={0.1}
            className="flex flex-col items-start gap-5 rounded-3xl bg-ink-900 p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10"
          >
            <div className="flex items-start gap-4">
              <Sparkles
                className="mt-0.5 size-6 shrink-0 text-ember-500"
                strokeWidth={1.75}
              />
              <div>
                <h3 className="font-semibold text-paper">
                  Ready to go deeper?
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-paper-dim">
                  Request access to membership and we&apos;ll follow up with
                  pricing and onboarding details.
                </p>
              </div>
            </div>
            <Button href="/book-a-call" className="shrink-0">
              Request membership access
            </Button>
          </Reveal>
        </Container>
      </section>

      <FAQSection
        items={[
          {
            question: "Is the free community really free?",
            answer:
              "Yes. The Facebook group and Slack workspace are free to join for anyone building with or exploring AI.",
          },
          {
            question: "What's the difference between free and paid?",
            answer:
              "The free tier is open discussion and shared resources. Membership adds a curated resource library, members-only live sessions, direct access to our team, and priority on events and sprints.",
          },
          {
            question: "How do I request membership access?",
            answer:
              "Use the \"Request membership access\" button above, or book a discovery call. We'll follow up with pricing and next steps.",
          },
          {
            question: "Can my whole team join?",
            answer:
              "Individual members are welcome from any team. If you're looking to bring your whole organization into a structured program, see the Enterprise Program instead.",
          },
        ]}
      />

      <CTASection
        title="Come build alongside people doing the same thing."
        description="Join the free community today, or ask about membership."
        primary={{ label: "Join for free", href: "#free" }}
        secondary={{ label: "Request membership", href: "/book-a-call" }}
      />
    </>
  );
}
