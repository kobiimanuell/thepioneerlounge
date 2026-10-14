import { Check } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import clsx from "clsx";

export type Tier = {
  name: string;
  price?: string;
  cadence?: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta?: string;
};

export function TierCards({ tiers }: { tiers: Tier[] }) {
  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Program tiers"
          title="Two tiers, scoped to your organization."
          description="Final scope, cohort size, and timeline are confirmed together during your briefing call. Here's the shape of each tier."
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
              {tier.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-ember-500 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-950">
                  Most popular
                </span>
              )}
              <h3 className="text-2xl font-semibold text-paper">{tier.name}</h3>
              {tier.price && (
                <p className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-3xl font-semibold text-paper">
                    {tier.price}
                  </span>
                  {tier.cadence && (
                    <span className="text-sm text-paper-dim">
                      {tier.cadence}
                    </span>
                  )}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                {tier.description}
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3.5">
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
              <Button
                href="/book-a-call"
                variant={tier.featured ? "primary" : "outline"}
                className="mt-9 w-full"
              >
                {tier.cta ?? "Request a quote"}
              </Button>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
