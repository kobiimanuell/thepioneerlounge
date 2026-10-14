import Image from "next/image";
import { Building2, BarChart3, Users2 } from "lucide-react";
import { Button } from "../../ui/Button";
import { Reveal } from "../../ui/Reveal";

const features = [
  {
    icon: Users2,
    label: "Up to 100 employees",
    description: "Cohort-based training sized for a full department or company.",
  },
  {
    icon: Building2,
    label: "Community access included",
    description: "Every participant gets a seat inside the Pioneer Lounge community.",
  },
  {
    icon: BarChart3,
    label: "Measurement & reporting",
    description: "Track adoption and outcomes with reporting built for stakeholders.",
  },
];

export function EnterpriseHighlight() {
  return (
    <section className="border-b border-line py-24 lg:py-32">
      <Reveal className="relative overflow-hidden lg:mx-auto lg:max-w-7xl lg:rounded-[2rem] lg:border lg:border-line lg:px-0">
        <Image
          src="/images/section-enterprise.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 1152px, 100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/40" />

        <div className="relative grid grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-16 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-white/80">
              <span className="size-2 shrink-0 rounded-full bg-ember-500" />
              For organizations
            </div>
            <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              The Enterprise Program: team-wide AI fluency, built to measure.
            </h2>
            <p className="mt-5 max-w-lg text-balance leading-relaxed text-white/75">
              A structured training program for up to 100 employees, with
              two tiers, built-in community access, and reporting your
              leadership team can actually use.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/enterprise-program" size="lg">
                <span className="sm:hidden">Explore</span>
                <span className="hidden sm:inline">Explore the Enterprise Program</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-white/15 border-t border-white/15">
            {features.map((f) => (
              <div key={f.label} className="flex items-start gap-4 py-5">
                <f.icon
                  className="mt-0.5 size-5 shrink-0 text-ember-400"
                  strokeWidth={1.75}
                />
                <div>
                  <div className="font-medium text-white">{f.label}</div>
                  <div className="mt-1 text-sm text-white/70">
                    {f.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
