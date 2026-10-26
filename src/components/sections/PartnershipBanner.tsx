import { Handshake } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function PartnershipBanner({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-line bg-ink-900/40 py-14">
      <Container>
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-5">
            <Handshake
              className="mt-0.5 size-6 shrink-0 text-ember-500"
              strokeWidth={1.75}
            />
            <div>
              <h3 className="text-lg font-semibold text-paper">{title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper-dim">
                {description}
              </p>
            </div>
          </div>
          <Button href="/partner-with-us" variant="outline" className="shrink-0">
            Discuss a partnership
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
