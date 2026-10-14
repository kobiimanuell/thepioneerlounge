"use client";

import Link from "next/link";
import Image from "next/image";
import { Compass, Users, Zap, ArrowUpRight } from "lucide-react";
import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";
import { RevealGroup, revealItem } from "../../ui/Reveal";
import { motion } from "motion/react";

const cards = [
  {
    icon: Compass,
    title: "Consultations",
    description:
      "Strategic, 1:1 guidance for leaders deciding where AI fits in their roadmap, and where it doesn't.",
    href: "/consultations",
    image: "/images/service-consultations.jpg",
  },
  {
    icon: Users,
    title: "Workshops",
    description:
      "Hands-on sessions that build real fluency across your team, from first prompts to production workflows.",
    href: "/workshops",
    image: "/images/service-workshop.jpg",
  },
  {
    icon: Zap,
    title: "AI Hack Sprints",
    description:
      "A focused, high-energy week that takes a team from idea to a working AI product they actually shipped.",
    href: "/ai-hack-sprints",
    image: "/images/service-hacksprint.jpg",
  },
];

export function ServiceCards() {
  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Three ways in, one outcome: your team actually using AI."
          description="Every engagement is built to leave your team with something working, not just a deck."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <motion.div key={card.href} variants={revealItem}>
              <Link
                href={card.href}
                className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5 transition-opacity duration-300 group-hover:from-black/90" />

                <div className="relative flex flex-col p-7">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-white/20 bg-black/30 text-ember-400 backdrop-blur-sm">
                    <card.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                    {card.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
                    Learn more
                    <ArrowUpRight
                      className="size-4 text-ember-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.25}
                    />
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
