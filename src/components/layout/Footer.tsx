import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { footerNav, site } from "@/lib/site";
import { CurrentYear } from "./CurrentYear";

const askPrompt = encodeURIComponent(
  "What does The Pioneer Lounge do, and how can they help my team adopt AI?"
);

const agents = [
  { label: "ChatGPT", href: `https://chat.openai.com/?q=${askPrompt}` },
  { label: "Claude", href: `https://claude.ai/new?q=${askPrompt}` },
  { label: "Perplexity", href: `https://www.perplexity.ai/?q=${askPrompt}` },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
      <Image
        src="/images/footer-dark.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <Container className="relative py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white transition-opacity hover:opacity-80"
            >
              <Image
                src="/brand/logo/icon-mark-white.png"
                alt="The Pioneer Lounge"
                width={32}
                height={32}
                className="size-8"
              />
              <span className="font-sans text-[15px] font-semibold leading-tight tracking-tight">
                The Pioneer
                <br />
                Lounge
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <Button href="/book-a-call" size="md" className="w-fit">
              Book a discovery call
            </Button>
          </div>

          {Object.entries(footerNav).map(([heading, items]) => (
            <div key={heading}>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                <span className="size-1.5 rounded-full bg-ember-500" />
                {heading}
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              <span className="size-1.5 rounded-full bg-ember-500" />
              Ask an agent
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Ask your favorite AI agent about The Pioneer Lounge.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {agents.map((agent) => (
                <a
                  key={agent.label}
                  href={agent.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-ember-500/50 hover:text-white"
                >
                  {agent.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-white"
            >
              {site.email}
            </a>
            <Link href="/community" className="transition-colors hover:text-white">
              Join the community
            </Link>
          </div>
        </div>
      </Container>

      <div
        aria-hidden
        className="relative select-none pb-4 text-center font-sans text-[18vw] font-bold leading-none tracking-tighter text-white/[0.04] sm:text-[12vw] lg:text-[9rem]"
      >
        pioneer lounge
      </div>
    </footer>
  );
}
