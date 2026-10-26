"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";
import { Reveal, RevealGroup, revealItem } from "../../ui/Reveal";
import { motion } from "motion/react";
import { EMBER_PATTERN, AMBER_PATTERN, RUST_PATTERN } from "./mosaicPattern";

const work = [
  {
    name: "interactED",
    title: "Build a Website With Just Prompts",
    outcome:
      "Participants gained hands-on experience with AI-assisted website creation.",
    tags: ["AI Education", "Digital Skills"],
    pattern: EMBER_PATTERN,
  },
  {
    name: "Specific Engineering Solutions",
    title: "Using AI to Reactivate Dormant Sales Leads",
    outcome:
      "A practical roadmap for incorporating AI into existing business development workflows.",
    tags: ["AI Strategy", "Sales Enablement"],
    pattern: AMBER_PATTERN,
  },
  {
    name: "AI Hack Sprints",
    title: "From Ideas to Working Prototypes in One Sprint",
    outcome: "Participants worked on practical AI projects and demonstrations.",
    tags: ["AI Innovation", "Hack Sprints"],
    pattern: RUST_PATTERN,
  },
];

export function SelectedWork() {
  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work & Impact"
            title="Real engagements, real outcomes."
          />
          <Reveal delay={0.1}>
            <Link
              href="/case-studies"
              className="group flex shrink-0 items-center gap-2 text-sm font-medium text-ember-500 transition-colors hover:text-ember-400"
            >
              See all work
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {work.map((item) => (
            <motion.div key={item.name} variants={revealItem} className="h-full">
              <Link
                href="/case-studies"
                className="group block h-full rounded-tl-[20px] pl-5 pt-5 transition-transform duration-300 hover:-translate-y-1"
                style={item.pattern}
              >
                <div className="flex h-full flex-col rounded-tl-[14px] bg-ink-950/90 p-6 backdrop-blur-xl">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">
                    {item.name}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-dim">
                    {item.outcome}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs font-medium text-paper-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
