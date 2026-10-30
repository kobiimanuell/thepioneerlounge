import { Code2, ScanSearch, ShieldCheck } from "lucide-react";
import { Button } from "../../ui/Button";
import { Reveal } from "../../ui/Reveal";
import { Eyebrow } from "../../ui/Eyebrow";
import { WARM_PATTERNS } from "./mosaicPattern";

const features = [
  {
    icon: Code2,
    label: "One script tag",
    description: "Drop it in the header. No rebuild, no app to maintain.",
  },
  {
    icon: ScanSearch,
    label: "Indexes the page automatically",
    description: "Pioneer reads the live site and keeps itself up to date.",
  },
  {
    icon: ShieldCheck,
    label: "Grounded in real content only",
    description: "Answers come from the site itself, never a guess.",
  },
];

export function PioneerHighlight() {
  return (
    <section className="border-b border-line py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Introducing Pioneer</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-paper md:text-4xl">
              Your website, searchable and ready to answer questions.
            </h2>
            <p className="mt-5 max-w-lg text-balance leading-relaxed text-paper-dim">
              Pioneer is a floating assistant any company can add to their
              site with a single script tag. Visitors ask questions in plain
              language and get answers grounded in that site&apos;s actual
              content, instead of digging through menus.
            </p>
            <p className="mt-5 max-w-lg text-balance text-sm leading-relaxed text-paper-dim">
              You&apos;re looking at an early preview of it right now, click
              the icon in the corner of this page to try it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/book-a-call" size="lg">
                Interested in Pioneer for your company?
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="rounded-tl-[24px] pl-6 pt-6"
              style={WARM_PATTERNS[0]}
            >
              <div className="rounded-tl-[18px] bg-ink-950/90 p-8 backdrop-blur-xl lg:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">
                  How it works
                </p>
                <div className="mt-6 flex flex-col divide-y divide-line">
                  {features.map((f) => (
                    <div key={f.label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                      <f.icon
                        className="mt-0.5 size-5 shrink-0 text-ember-500"
                        strokeWidth={1.75}
                      />
                      <div>
                        <div className="font-medium text-paper">{f.label}</div>
                        <div className="mt-1 text-sm text-paper-dim">
                          {f.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
