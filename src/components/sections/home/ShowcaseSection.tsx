"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { Container } from "../../ui/Container";
import { Eyebrow } from "../../ui/Eyebrow";
import { Reveal } from "../../ui/Reveal";

const panels = [
  {
    key: "sprints",
    label: "AI Hack Sprints",
    title: "A working prototype by the end of the day.",
    description:
      "Cross-functional teams pair with facilitators to ship a real AI-powered prototype in hours, not quarters.",
    image: "/clipmate-frames/voice-view.png",
    imageFit: "contain" as const,
  },
  {
    key: "workshops",
    label: "AI Workshops",
    title: "Hands-on sessions your team actually finishes.",
    description:
      "Live, facilitated sessions built around your team's real tools and real workflows, not generic slides.",
    image: "/images/workshops-banner.jpg",
    imageFit: "cover" as const,
  },
  {
    key: "enterprise",
    label: "Custom Enterprise Program",
    title: "A rollout built for a hundred people, not ten.",
    description:
      "Structured, cohort-based training that scales AI fluency across an entire org without losing rigor.",
    image: "/images/enterprise-banner.jpg",
    imageFit: "cover" as const,
  },
];

export function ShowcaseSection() {
  const [active, setActive] = useState(0);
  const panel = panels[active];

  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <Reveal className="flex justify-center">
            <Eyebrow>Inside an engagement</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-paper md:text-5xl">
              What running on AI actually looks like.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <div className="no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-line bg-ink-900/60 p-1.5">
            {panels.map((p, i) => (
              <button
                key={p.key}
                onClick={(e) => {
                  setActive(i);
                  e.currentTarget.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                  });
                }}
                className="relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium sm:px-5"
              >
                {active === i && (
                  <motion.span
                    layoutId="showcase-tab-pill"
                    className="absolute inset-0 rounded-full bg-paper"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span
                  className={clsx(
                    "relative z-10 transition-colors",
                    active === i
                      ? "text-ink-950"
                      : "text-paper-dim hover:text-paper"
                  )}
                >
                  {p.label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-line bg-ink-900/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={panel.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 items-center gap-0 lg:grid-cols-2"
            >
              <div className="relative h-[280px] w-full bg-ink-800 lg:h-[420px]">
                <Image
                  src={panel.image}
                  alt={panel.label}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={
                    panel.imageFit === "cover"
                      ? "object-cover"
                      : "object-contain p-8"
                  }
                />
              </div>
              <div className="p-8 lg:p-14">
                <h3 className="text-2xl font-semibold leading-tight text-paper lg:text-3xl">
                  {panel.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-paper-dim">
                  {panel.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
