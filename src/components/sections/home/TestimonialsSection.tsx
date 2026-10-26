"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";
import { Avatar } from "../../ui/Avatar";

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  // Path to the company's logo file, once supplied and verified. Left
  // unset rather than guessed, since using the wrong or an unverified
  // company mark is worse than no logo, falls back to an initials avatar.
  logo?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The Pioneer Lounge's events were always very interactive and the entire team made sure everyone feels included even if participants don't have much knowledge on the topic. The entire vibe of the event was very warm and every participant was appreciated. Of course the snacks and good music were a cherry on top!",
    name: "Kashvi Jain",
    role: "Campus Coordinator",
    company: "BrainStation",
  },
  {
    quote: "The students absolutely loved the usecase and asked SO MANY questions!",
    name: "Sayli",
    company: "Clay",
  },
  {
    quote:
      "It was great to see the creativity attendees brought to their AI projects and how they presented the vision and ideas behind them. I also enjoyed seeing attendees having the opportunity to connect and collaborate with like-minded individuals in teams.",
    name: "Mahdiyar Saber",
    role: "AI-Native GTM",
    company: "Origin",
  },
  {
    quote:
      "Maureen's 1:1 guidance on HeyGen was exactly what I needed, clear, thoughtful, and tailored to my business use case. I truly appreciated her generosity with her time and the actionable insights she shared.",
    name: "Ashley MacArthur",
  },
  {
    quote:
      "It was a pleasure being a part of two very successful events with Maureen and her team. They created engaging, collaborative spaces where professionals and curious individuals could explore technological programs and applications, share knowledge, and build meaningful connections.",
    name: "Lucy Lai",
  },
  {
    quote:
      "It was an amazing, well-organized event. The organizers created a seamless experience and a truly supportive space for women in tech to build, collaborate, and connect. I'd jump at the chance to be part of the next one.",
    name: "Kehinde Fawumi",
    role: "Director of Product",
    company: "Mastercard",
  },
  {
    quote:
      "Facilitating the AI Hackathon at the Pioneer Lounge introduced me to new AI tools and practical ways to apply them to everyday tasks and problem-solving. It was a valuable experience that reinforced the power of learning by doing and being part of an innovative community.",
    name: "Stephanie George",
  },
];

const backLayers = [
  { rotate: -10, translate: -18, bg: "bg-ink-700" },
  { rotate: 8, translate: 14, bg: "bg-ember-500/20" },
  { rotate: -5, translate: -8, bg: "bg-ember-400/15" },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const active = testimonials[index];
  const meta = [active.role, active.company].filter(Boolean).join(", ");

  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container className="flex flex-col items-center">
        <SectionHeading
          align="center"
          eyebrow="What people say"
          title="We are spoken of kindly."
          className="mx-auto max-w-xl"
        />

        <div className="relative mt-16 flex h-[380px] w-full max-w-lg items-center justify-center sm:h-[340px]">
          {backLayers.map((layer, i) => (
            <div
              key={i}
              style={{
                transform: `rotate(${layer.rotate}deg) translateX(${layer.translate}px)`,
              }}
              className={clsx(
                "absolute inset-x-4 top-2 h-[300px] rounded-[1.75rem] shadow-xl sm:h-[280px]",
                layer.bg
              )}
            />
          ))}

          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 24, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -24, rotate: 3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-[300px] w-full flex-col justify-between rounded-[1.75rem] border border-line bg-ink-950 p-8 shadow-2xl sm:h-[280px]"
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="text-ember-500">
                <path
                  d="M0 22V13.2C0 8.8 1.2 5.2 3.6 2.4C6 -0.4 9.2 -0.2 13.2 3L10.4 8.2C8.4 8.4 7 9.2 6.2 10.6C5.4 12 5.2 13.4 5.6 14.8H12V22H0ZM15.2 22V13.2C15.2 8.8 16.4 5.2 18.8 2.4C21.2 -0.4 24.4 -0.2 28.4 3L25.6 8.2C23.6 8.4 22.2 9.2 21.4 10.6C20.6 12 20.4 13.4 20.8 14.8H27.2V22H15.2Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-lg leading-snug tracking-tight text-paper">
                {active.quote}
              </p>
              <div className="flex items-center gap-3">
                {active.logo ? (
                  <Image
                    src={active.logo}
                    alt={active.company ?? ""}
                    width={44}
                    height={44}
                    className="size-11 shrink-0 rounded-full border border-line object-contain p-1.5"
                  />
                ) : (
                  <Avatar name={active.name} className="h-11 w-11" />
                )}
                <div>
                  <p className="text-sm font-semibold text-paper">{active.name}</p>
                  {meta && <p className="text-xs text-paper-dim">{meta}</p>}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                i === index ? "w-7 bg-ember-500" : "w-2 bg-ink-700"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
