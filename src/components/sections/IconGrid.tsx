import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { WARM_PATTERNS } from "./home/mosaicPattern";

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
  const gridCols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 xl:grid-cols-4"
        : "md:grid-cols-3";

  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className={`mt-16 grid grid-cols-1 gap-6 ${gridCols}`}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="h-full">
              <div
                className="h-full rounded-tl-[20px] pl-5 pt-5"
                style={WARM_PATTERNS[i % WARM_PATTERNS.length]}
              >
                <div className="flex h-full flex-col gap-3 rounded-tl-[14px] bg-ink-950/90 p-6 backdrop-blur-xl">
                  <div className="flex size-10 shrink-0 items-center justify-center text-ember-500">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-paper">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper-dim">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
