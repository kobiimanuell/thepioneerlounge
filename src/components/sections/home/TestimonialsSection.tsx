import { Quote } from "lucide-react";
import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";
import { Reveal } from "../../ui/Reveal";

const slots = [1, 2, 3];

export function TestimonialsSection() {
  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="What people say"
          title="We are spoken of kindly."
          description="Testimonials from consultations, workshops, and hack sprints will land here as engagements wrap."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-10 md:grid-cols-3 md:gap-8">
          {slots.map((slot, i) => (
            <Reveal key={slot} delay={i * 0.06} className="flex flex-col gap-5">
              <Quote className="size-5 text-ember-500/60" />
              <p className="flex-1 text-sm leading-relaxed text-paper-dim/70">
                Coming soon. This spot is reserved for a client or
                participant quote.
              </p>
              <div>
                <div className="h-2.5 w-24 rounded-full bg-ink-800" />
                <div className="mt-2 h-2 w-32 rounded-full bg-ink-800/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
