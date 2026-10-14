import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export type Step = {
  label: string;
  title: string;
  description: string;
};

export function Steps({
  eyebrow,
  title,
  description,
  steps,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  steps: Step[];
  dark?: boolean;
}) {
  return (
    <section
      className={`border-b border-line py-24 lg:py-32 ${dark ? "bg-ink-900/40" : ""}`}
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="relative mt-16 grid grid-cols-1 gap-0 lg:grid-cols-[auto_1fr]">
          <div className="hidden lg:block" />
          <div className="relative flex flex-col">
            <div className="absolute bottom-0 left-[15px] top-0 w-px bg-line" />
            {steps.map((step, i) => (
              <Reveal
                key={step.label}
                delay={i * 0.06}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-ember-500/50 bg-ink-950 font-mono text-xs text-ember-400">
                  {i + 1}
                </div>
                <div className="pt-0.5">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember-400">
                    {step.label}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper-dim">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
