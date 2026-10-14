import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Accordion, FaqItem } from "../ui/Accordion";
import { Reveal } from "../ui/Reveal";

function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function FAQSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            description="Still unsure about something? Reach out and we'll walk you through it."
          />
          <Reveal delay={0.1}>
            <Accordion items={items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
