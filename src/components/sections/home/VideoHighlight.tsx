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

      <Reveal delay={0.1} className="mt-12 lg:mt-16">
        <video
          src="/videos/heygen-hackathon-highlight.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          className="h-auto w-full lg:mx-auto lg:w-1/2"
        />
      </Reveal>
    </section>
  );
}
