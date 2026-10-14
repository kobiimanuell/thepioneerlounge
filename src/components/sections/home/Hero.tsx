import Image from "next/image";
import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";
import { Reveal } from "../../ui/Reveal";
import { HeroScene } from "../../three/HeroScene";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-20">
      <Image
        src="/images/hero-home.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-ink-950" />
      <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen">
        <HeroScene className="h-full w-full" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-white/80">
              <span className="size-2 shrink-0 rounded-full bg-ember-500" />
              AI enablement for teams that build
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.08] tracking-tight text-white md:text-7xl">
              AI is a <em className="font-medium not-italic text-ember-400">multiplier</em>.
              <br />
              We make your team <em className="font-medium not-italic text-ember-400">run on it</em>.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-xl text-balance text-lg leading-relaxed text-white/80 md:text-xl">
              Consultations, workshops, AI hack sprints, and enterprise
              training that take your team from talking about AI to running
              on it.
            </p>
          </Reveal>

          <Reveal
            delay={0.24}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/book-a-call" size="lg">
              Book a discovery call
            </Button>
            <Button href="/consultations" variant="outlineLight" size="lg">
              Explore our services
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
