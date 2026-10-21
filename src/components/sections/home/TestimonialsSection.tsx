import { Quote } from "lucide-react";
import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";
import { Reveal } from "../../ui/Reveal";

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
];

export function TestimonialsSection() {
  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="What people say"
          title="We are spoken of kindly."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.06}
              className="flex flex-col gap-5"
            >
              <Quote className="size-5 text-ember-500/60" />
              <p className="flex-1 text-sm leading-relaxed text-paper-dim">
                {t.quote}
              </p>
              <div>
                <div className="text-sm font-medium text-paper">{t.name}</div>
                <div className="mt-0.5 text-xs text-paper-dim/70">{t.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
