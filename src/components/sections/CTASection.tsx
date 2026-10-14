import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function CTASection({
  eyebrow = "Let's build",
  title,
  description,
  primary = { label: "Book a discovery call", href: "/book-a-call" },
  secondary,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative border-t border-line py-24 lg:py-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-ink-900 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/60 to-transparent" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-ember-500/20 blur-[100px]" />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-ember-400">
              {eyebrow}
            </span>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-paper md:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="text-balance text-base leading-relaxed text-paper-dim">
                {description}
              </p>
            )}
            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <Button href={primary.href} size="lg">
                {primary.label}
              </Button>
              {secondary && (
                <Button href={secondary.href} variant="outline" size="lg">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
