"use client";

import Image from "next/image";
import { Lock, Play } from "lucide-react";
import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";
import { RevealGroup, revealItem } from "../../ui/Reveal";
import { motion } from "motion/react";

const episodes = [
  { label: "Episode 01", image: "/images/card-episode-1.jpg" },
  { label: "Episode 02", image: "/images/card-episode-2.jpg" },
  { label: "Episode 03", image: "/images/card-episode-3.jpg" },
];

export function EpisodesSection() {
  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Latest episodes"
            title="Conversations from inside the lounge."
            description="Candid talks on building with AI, releasing soon."
          />
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {episodes.map((ep) => (
            <motion.div
              key={ep.label}
              variants={revealItem}
              className="group overflow-hidden rounded-2xl border border-line bg-ink-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={ep.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale-[20%] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                  <Lock className="size-3" />
                  {ep.label}
                </span>
                <div className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white/80 backdrop-blur-sm">
                  <Play className="size-4" fill="currentColor" strokeWidth={0} />
                </div>
              </div>
              <div className="p-5">
                <span className="text-sm font-medium text-paper-dim">
                  Coming soon
                </span>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
