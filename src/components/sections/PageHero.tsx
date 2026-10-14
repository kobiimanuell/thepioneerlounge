import { ReactNode } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { HeroScene } from "../three/HeroScene";

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 lg:pb-28 lg:pt-48">
      <Image
        src="/images/hero-page.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-ink-950" />
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <HeroScene className="h-full w-full" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-white/80">
              <span className="size-2 shrink-0 rounded-full bg-ember-500" />
              {eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/80">
                {description}
              </p>
            </Reveal>
          )}
          {cta && (
            <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-4">
              {cta}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
