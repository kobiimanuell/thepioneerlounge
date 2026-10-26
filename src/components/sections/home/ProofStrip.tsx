"use client";

import Image from "next/image";
import { Container } from "../../ui/Container";
import { Reveal } from "../../ui/Reveal";
import { LogoMarquee } from "./LogoMarquee";

export function ProofStrip() {
  return (
    <section className="relative border-b border-line py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[20rem] overflow-hidden">
        <Image
          src="/images/section-proof.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/70 to-ink-950" />
      </div>

      <Container className="relative">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-paper-dim/60">
            Trusted by & collaborated with
          </p>
          <div className="mt-6">
            <LogoMarquee />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
