import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export type IconGridItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function IconGrid({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: IconGridItem[];
  columns?: 2 | 3 | 4;
}) {
  const twoColumn = columns === 2 || columns === 4;

  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div
          className={`mt-16 border-t border-line ${twoColumn ? "grid grid-cols-1 md:grid-cols-2 md:gap-x-12" : ""}`}
        >
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className="flex items-start gap-5 border-b border-line py-7 md:gap-6"
            >
              <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center text-ember-500">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-paper">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-paper-dim">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
