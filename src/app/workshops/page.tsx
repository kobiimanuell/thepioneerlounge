import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { IconGlyph } from "@/components/ui/IconGlyph";
import {
  Users2,
  Building,
  GraduationCap,
  Sparkles,
  Wrench,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { IconGrid } from "@/components/sections/IconGrid";
import { Steps } from "@/components/sections/Steps";
import { TierCards } from "@/components/sections/TierCards";
import { PartnershipBanner } from "@/components/sections/PartnershipBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/workshops",
  "AI Workshops",
  "Practical AI training for teams, from a single half-day workshop to a tailored, multi-week enterprise program."
);

// Enrollment isn't open yet, so no `offers` field, no price, no dates:
// only the verified course facts below.
const aiFoundationsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI Foundations",
  description:
    "A self-paced learning option for individuals who want to build AI fluency on their own schedule.",
  provider: {
    "@type": "Organization",
    name: site.name,
    sameAs: site.url,
  },
  url: `${site.url}/workshops`,
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "Self-paced",
  },
};

export default function WorkshopsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiFoundationsJsonLd) }}
      />

      <PageHero
        eyebrow="AI Workshops"
        title="Fluency, built by doing, not by watching a slide deck."
        description="Live, hands-on sessions where your team leaves having actually built something with AI, not just heard about it. From a single half-day workshop to a tailored enterprise program."
        cta={
          <>
            <Button href="/book-a-call" size="lg">
              Book a discovery call
            </Button>
            <Button href="#formats" variant="outlineLight" size="lg">
              See the formats
            </Button>
          </>
        }
      />

      <IconGrid
        eyebrow="Who it's for"
        title="Any team ready to move past the novelty phase."
        items={[
          {
            icon: <IconGlyph icon={Users2} />,
            title: "Functional teams",
            description:
              "Marketing, ops, sales, or product teams ready to fold AI into day-to-day workflows.",
          },
          {
            icon: <IconGlyph icon={Building} />,
            title: "Companies of any size",
            description:
              "From a 10-person startup to a full department inside a large enterprise, the format scales.",
          },
          {
            icon: <IconGlyph icon={GraduationCap} />,
            title: "Event & community organizers",
            description:
              "Conferences, accelerators, and communities bringing in a hands-on session for their audience.",
          },
        ]}
      />

      <section className="border-b border-line py-16 lg:py-20">
        <Container>
          <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/workshops-banner.jpg"
              alt="Professionals learning to apply AI tools during an interactive training session"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <div id="format">
        <Steps
          eyebrow="Format"
          title="One session, built around your real work."
          description="In person or remote, capped to keep every participant hands-on. Topics range from prompting fundamentals to specialized sessions like AI Video for Teams."
          dark
          steps={[
            {
              label: "Before",
              title: "A short scoping call",
              description:
                "We learn your team's tools, workflows, and skill level so the workshop uses your real use cases.",
            },
            {
              label: "During",
              title: "Live, hands-on build time",
              description:
                "Short teaching blocks followed by guided build time, and every participant ships something by the end.",
            },
            {
              label: "After",
              title: "Takeaway playbook",
              description:
                "A reference guide and prompt library your team keeps using long after the session ends.",
            },
          ]}
        />
      </div>

      <div id="formats">
        <TierCards
          eyebrow="Pick a format"
          title="Three ways to train your team."
          description="Final scope, cohort size, and timeline are confirmed together on your discovery call."
          tiers={[
            {
              name: "Team AI Workshop",
              price: "From $3,500*",
              cadence: "Half-day session. Full programs from $9,500.",
              description:
                "A live, hands-on session built around the tools your team already runs on.",
              featured: true,
              badge: "Most teams start here",
              cta: "Book a workshop",
            },
            {
              name: "Ship One Thing",
              cadence: "A focused, multi-week build.",
              description:
                "Your team leaves a workshop with a direction. Ship One Thing turns it into one real AI tool they use every day, built alongside your team end to end.",
              cta: "Book a discovery call",
            },
            {
              name: "Custom Enterprise Program",
              cadence: "A tailored, multi-session rollout.",
              description:
                "Learning, strategy, and implementation support combined into one program, scoped for a cohort of up to 100 employees.",
              cta: "Book a discovery call",
            },
          ]}
          footnote="*Final price depends on team size and scope, and is confirmed on your discovery call. Ship One Thing and Custom Enterprise Program pricing is scoped individually."
        />
      </div>

      <section className="border-b border-line bg-ink-900/40 py-14">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <BookOpen
                className="mt-0.5 size-6 shrink-0 text-ember-500"
                strokeWidth={1.75}
              />
              <div>
                <h3 className="text-lg font-semibold text-paper">
                  AI Foundations
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper-dim">
                  A self-paced learning option for individuals who want to
                  build AI fluency on their own schedule. Enrollment isn&apos;t
                  open yet, details are coming soon.
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-full border border-line px-4 py-2 text-xs font-medium uppercase tracking-wide text-paper-dim">
              Coming soon
            </span>
          </Reveal>
        </Container>
      </section>

      <IconGrid
        eyebrow="Outcomes"
        title="What your team walks away with."
        items={[
          {
            icon: <IconGlyph icon={Sparkles} />,
            title: "Working examples",
            description:
              "Real workflows built during the session, using your team's actual tools and data.",
          },
          {
            icon: <IconGlyph icon={Wrench} />,
            title: "A shared toolkit",
            description:
              "A common set of prompts, tools, and practices the whole team can build on.",
          },
          {
            icon: <IconGlyph icon={TrendingUp} />,
            title: "Momentum",
            description:
              "The confidence gap closed, so your team leaves ready to keep experimenting on their own.",
          },
        ]}
      />

      <PartnershipBanner
        title="Partnership options for communities & conferences"
        description="Running an event, cohort, or accelerator? We partner with organizers to deliver workshops as part of a broader program, with options for co-branding and revenue share."
      />

      <FAQSection
        items={[
          {
            question: "How many people can attend a workshop?",
            answer:
              "We cap single workshops to keep them hands-on, typically 12 to 30 participants. Larger groups are best served by a Custom Enterprise Program, built for cohorts of up to 100.",
          },
          {
            question: "Do we need any technical background?",
            answer:
              "No. Workshops are designed for working professionals, not engineers. We meet your team at their current skill level and build from there.",
          },
          {
            question: "Can a workshop be customized to our industry?",
            answer:
              "Yes. The scoping call before every workshop exists specifically to pull in your real tools, workflows, and use cases.",
          },
          {
            question: "Do you run workshops for events or conferences?",
            answer:
              "Yes, see partnership options above. We've delivered sessions as part of community events and are open to co-branded or sponsored formats.",
          },
          {
            question: "What's the difference between a workshop and an AI Hack Sprint?",
            answer:
              "A workshop builds fluency across a team. An AI Hack Sprint is a focused, facilitated session where participants build a working AI prototype.",
          },
          {
            question: "What if we need more than one workshop?",
            answer:
              "That's what Ship One Thing and the Custom Enterprise Program are for, whether you need one real tool built end to end, or a structured, multi-session rollout across your organization.",
          },
        ]}
      />

      <CTASection
        title="Give your team a session they'll actually use."
        description="Book a discovery call to scope a workshop around your team's real workflows."
      />
    </>
  );
}
