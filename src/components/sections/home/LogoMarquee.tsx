import Image from "next/image";

type Client = {
  name: string;
  logo?: string;
};

const clients: Client[] = [
  { name: "Microsoft", logo: "/brand/clients/microsoft.svg" },
  { name: "Manus", logo: "/brand/clients/manus.ico" },
  { name: "HeyGen", logo: "/brand/clients/heygen.ico" },
  { name: "BrainStation" },
  { name: "Clay" },
  { name: "interactED" },
  { name: "Specific Engineering Solutions" },
  { name: "Dress for Success" },
  { name: "Ethos Lab" },
  { name: "WIT Regatta" },
];

export function LogoMarquee() {
  const loop = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden mask-fade-x">
      <div className="flex w-max animate-marquee items-center gap-14 py-2">
        {loop.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap text-paper-dim/70 transition-colors hover:text-paper"
          >
            {client.logo ? (
              <Image
                src={client.logo}
                alt={client.name}
                width={24}
                height={24}
                className="size-6 shrink-0 object-contain opacity-80 grayscale"
                unoptimized
              />
            ) : (
              <span className="size-1.5 shrink-0 rounded-full bg-ember-500/60" />
            )}
            <span className="text-base font-medium">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
