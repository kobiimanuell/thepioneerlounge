import { ReactNode } from "react";
import { Check } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import clsx from "clsx";

export type Tier = {
  name: string;
  kicker?: string;
  price?: string;
  cadence?: string;
  note?: string;
  description: string;
  features?: string[];
  featured?: boolean;
  badge?: string;
  cta?: string;
  href?: string;
};

export function TierCards({
  tiers,
  eyebrow = "Program tiers",
  title,
  description = "Final scope, cohort size, and timeline are confirmed together during your briefing call. Here's the shape of each tier.",
  footnote,
  belowNote,
}: {
  tiers: Tier[];
  eyebrow?: string;
  title?: string;
  description?: string;
  footnote?: string;
  belowNote?: ReactNode;
}) {
  const countWords: Record<number, string> = {
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
  };
  const resolvedTitle =
    title ??
    (tiers.length === 2
      ? "Two tiers, scoped to your organization."
      : `${countWords[tiers.length] ?? tiers.length} ways to work with us.`);

  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={resolvedTitle}
          description={description}
        />

        <div
          className={clsx(
            "mt-14 grid grid-cols-1 gap-6",
            tiers.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
          )}
        >
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 0.08}
              className={clsx(
                "relative flex flex-col rounded-3xl p-8 lg:p-10",
                tier.featured
                  ? "border border-ember-500/50 bg-ink-900"
                  : "bg-ink-900/50"
              )}
            >
              {(tier.badge || tier.featured) && (
                <span className="absolute -top-3 left-8 rounded-full bg-ember-500 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-950">
                  {tier.badge ?? "Most popular"}
                </span>
              )}
              {tier.kicker && (
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-ember-500">
                  {tier.kicker}
                </span>
              )}
              <h3
                className={clsx(
                  "text-2xl font-semibold text-paper",
                  tier.kicker ? "mt-2" : ""
                )}
              >
                {tier.name}
              </h3>
              {tier.price && (
                <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-3xl font-semibold text-paper">
                    {tier.price}
                  </span>
                </p>
              )}
              {tier.cadence && (
                <p className="mt-1.5 text-sm text-paper-dim">{tier.cadence}</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                {tier.description}
              </p>
              {tier.note && (
                <p className="mt-2 text-xs text-paper-dim/70">{tier.note}</p>
              )}
              {tier.features && tier.features.length > 0 && (
                <ul className="mt-8 flex flex-col gap-3.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-paper-dim"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-ember-500"
                        strokeWidth={2.5}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex-1" />
              <Button
                href={tier.href ?? "/book-a-call"}
                variant={tier.featured ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                {tier.cta ?? "Request a quote"}
              </Button>
            </Reveal>
          ))}
        </div>

        {footnote && (
          <p className="mt-8 text-xs text-paper-dim/60">{footnote}</p>
        )}
        {belowNote && <div className="mt-6">{belowNote}</div>}
      </Container>
    </section>
  );
}
