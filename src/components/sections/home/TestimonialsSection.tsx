"use client";

import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";
import { Reveal } from "../../ui/Reveal";
import clsx from "clsx";

const testimonials = [
  {
    quote:
      "The Pioneer Lounge's events were always very interactive and the entire team made sure everyone feels included even if participants don't have much knowledge on the topic. The entire vibe of the event was very warm and every participant was appreciated. Of course the snacks and good music were a cherry on top!",
    name: "Kashvi Jain",
    role: "Campus Coordinator, BrainStation",
  },
  {
    quote: "The students absolutely loved the usecase and asked SO MANY questions!",
    name: "Sayli",
    role: "Clay",
  },
  {
    quote:
      "It was great to see the creativity attendees brought to their AI projects and how they presented the vision and ideas behind them. I also enjoyed seeing attendees having the opportunity to connect and collaborate with like-minded individuals in teams.",
    name: "Mahdiyar Saber",
    role: "AI-Native GTM, Origin",
  },
  {
    quote:
      "Maureen's 1:1 guidance on HeyGen was exactly what I needed, clear, thoughtful, and tailored to my business use case. I truly appreciated her generosity with her time and the actionable insights she shared.",
    name: "Ashley MacArthur",
    role: "",
  },
  {
    quote:
      "It was a pleasure being a part of two very successful events with Maureen and her team. They created engaging, collaborative spaces where professionals and curious individuals could explore technological programs and applications, share knowledge, and build meaningful connections.",
    name: "Lucy Lai",
    role: "",
  },
  {
    quote:
      "It was an amazing, well-organized event. The organizers created a seamless experience and a truly supportive space for women in tech to build, collaborate, and connect. I'd jump at the chance to be part of the next one.",
    name: "Kehinde Fawumi",
    role: "",
  },
  {
    quote:
      "Facilitating the AI Hackathon at the Pioneer Lounge introduced me to new AI tools and practical ways to apply them to everyday tasks and problem-solving. It was a valuable experience that reinforced the power of learning by doing and being part of an innovative community.",
    name: "Stephanie George",
    role: "",
  },
];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (i + testimonials.length) % testimonials.length;
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    setIndex(clamped);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    if (i !== index) setIndex(i);
  };

  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What people say"
            title="We are spoken of kindly."
          />
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-line text-paper-dim transition-colors hover:border-ember-500/60 hover:text-paper"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-line text-paper-dim transition-colors hover:border-ember-500/60 hover:text-paper"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-14 border-t border-line pt-10">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex w-full shrink-0 snap-center justify-center px-1"
              >
                <div className="flex max-w-xl flex-col items-center gap-5 text-center">
                  <Quote className="size-6 text-ember-500/60" />
                  <p className="text-balance text-lg leading-relaxed text-paper-dim">
                    {t.quote}
                  </p>
                  <div>
                    <div className="text-sm font-medium text-paper">
                      {t.name}
                    </div>
                    {t.role && (
                      <div className="mt-0.5 text-xs text-paper-dim/70">
                        {t.role}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={clsx(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-ember-500" : "w-1.5 bg-ink-700"
                )}
              />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
            <button
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-line text-paper-dim transition-colors hover:border-ember-500/60 hover:text-paper"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-line text-paper-dim transition-colors hover:border-ember-500/60 hover:text-paper"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
