"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container } from "../../ui/Container";
import { Eyebrow } from "../../ui/Eyebrow";

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    title: "AI Startup Founders",
    description:
      "Move from scattered AI experiments to a roadmap your whole team can execute on.",
    image: "/images/audience-founders.jpg",
  },
  {
    title: "Enterprise Product Teams",
    description:
      "Ship AI features with the governance and rigor a large organization actually needs.",
    image: "/images/audience-enterprise.jpg",
  },
  {
    title: "People & Talent Leaders",
    description:
      "Build AI fluency into onboarding and L&D so adoption outlasts the workshop.",
    image: "/images/audience-talent.jpg",
  },
  {
    title: "Innovation & Strategy Teams",
    description:
      "Turn AI ambition into a prioritized, sequenced plan the executive team will back.",
    image: "/images/audience-strategy.jpg",
  },
  {
    title: "Event & Conference Organizers",
    description:
      "Bring a speaker and a session format that leaves the room with something to act on.",
    image: "/images/audience-events.jpg",
  },
  {
    title: "Early-Career Builders",
    description:
      "Learn the workflows that make AI a career advantage instead of a vague buzzword.",
    image: "/images/audience-builders.jpg",
  },
];

export function AudienceScroll() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const check = () => setIsCompact(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isCompact) return;
    const section = sectionRef.current;
    const header = headerRef.current;
    const track = trackRef.current;
    if (!section || !header || !track) return;

    const distance = track.scrollWidth - window.innerWidth + 160;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: `+=${Math.max(distance, 600) * 1.4}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    tl.to(header, { opacity: 0, duration: 0.25 });
    tl.to(track, { x: -distance, duration: 3, ease: "none" }, "-=0.1");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isCompact]);

  return (
    <section
      ref={sectionRef}
      className="border-b border-line py-24 lg:py-32 overflow-hidden"
    >
      <div ref={headerRef}>
        <Container>
          <div className="flex max-w-2xl flex-col gap-5">
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-paper md:text-5xl">
              Built for every kind of team pushing on AI.
            </h2>
          </div>
        </Container>
      </div>

      <div
        ref={trackRef}
        className="mt-14 flex gap-6 px-6 lg:px-10 max-[900px]:flex-col max-[900px]:px-6"
      >
        {audiences.map((a) => (
          <div
            key={a.title}
            className="group relative flex h-[420px] w-[340px] shrink-0 flex-col justify-end overflow-hidden rounded-3xl max-[900px]:h-[320px] max-[900px]:w-full"
          >
            <Image
              src={a.image}
              alt=""
              fill
              sizes="340px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
            <div className="relative p-7">
              <h3 className="text-xl font-semibold text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {a.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
