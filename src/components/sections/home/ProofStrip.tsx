"use client";

import Image from "next/image";
import { Rocket, Building2, Users2, Lightbulb, Mic2, GraduationCap } from "lucide-react";
import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";
import { Reveal, RevealGroup, revealItem } from "../../ui/Reveal";
import { LogoMarquee } from "./LogoMarquee";
import { motion } from "motion/react";

const segments = [
  { label: "AI Startup Founders", icon: Rocket },
  { label: "Enterprise Product Teams", icon: Building2 },
  { label: "People & Talent Leaders", icon: Users2 },
  { label: "Innovation & Strategy Teams", icon: Lightbulb },
  { label: "Event & Conference Organizers", icon: Mic2 },
  { label: "Early-Career Builders", icon: GraduationCap },
];

export function ProofStrip() {
  return (
    <section className="relative border-b border-line py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] overflow-hidden">
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
        <SectionHeading
          align="center"
          eyebrow="Who we work with"
          title="Trusted by the people building the AI-native workplace."
        />

        <Reveal delay={0.12} className="mt-16">
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-paper-dim/60">
            Trusted by and collaborated with
          </p>
          <div className="mt-6">
            <LogoMarquee />
          </div>
        </Reveal>

        <RevealGroup
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
          stagger={0.05}
        >
          {segments.map(({ label, icon: Icon }) => (
            <motion.span
              key={label}
              variants={revealItem}
              className="group flex items-center gap-2 rounded-full border border-line bg-ink-900/40 px-4 py-2 transition-colors hover:border-ember-500/40 hover:bg-ink-900"
            >
              <Icon
                className="size-3.5 shrink-0 text-ember-500"
                strokeWidth={2}
              />
              <span className="text-sm font-medium text-paper-dim transition-colors group-hover:text-paper">
                {label}
              </span>
            </motion.span>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
