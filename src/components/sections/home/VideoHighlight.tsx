import { Eyebrow } from "../../ui/Eyebrow";
import { Reveal } from "../../ui/Reveal";

export function VideoHighlight() {
  return (
    <section className="border-b border-line py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal className="flex justify-center">
          <Eyebrow>From the room</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-paper md:text-5xl">
            What building together actually looks like.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative mt-12 aspect-video w-full overflow-hidden lg:mt-16">
        <video
          src="/videos/heygen-hackathon-highlight.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </Reveal>
    </section>
  );
}
