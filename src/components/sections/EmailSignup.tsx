"use client";

import { useState } from "react";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import clsx from "clsx";

const benefits = [
  "Where your team's AI skills actually stand today",
  "The 3 workflows worth automating first",
  "The red flags that mean you're not ready to scale AI yet",
];

export function EmailSignup({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={clsx(
          "flex items-center gap-3 border border-ember-500/30 bg-ember-500/10 p-5",
          !compact && "lg:rounded-2xl",
          compact && "rounded-2xl text-white"
        )}
      >
        <Check className="size-5 shrink-0 text-ember-500" strokeWidth={2.5} />
        <p className={clsx("text-sm", compact ? "text-white/80" : "text-paper-dim")}>
          You&apos;re in. Check your inbox for the AI Readiness Checklist.
        </p>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        compact
          ? "text-white"
          : "bg-ink-900 p-8 text-paper lg:rounded-3xl lg:p-10"
      )}
    >
      <p
        className={clsx(
          "font-mono text-xs uppercase tracking-[0.2em]",
          compact ? "text-white/50" : "text-ember-500"
        )}
      >
        Free download
      </p>
      <h3
        className={clsx(
          "mt-3 font-semibold leading-tight",
          compact ? "text-xl text-white" : "text-2xl text-paper"
        )}
      >
        Get the AI Readiness Checklist
      </h3>
      <p
        className={clsx(
          "mt-2 text-sm leading-relaxed",
          compact ? "text-white/60" : "text-paper-dim"
        )}
      >
        A short, practical checklist to see where your team actually stands
        with AI, before you spend a dollar on tools or training.
      </p>

      {!compact && (
        <ul className="mt-5 flex flex-col gap-2.5">
          {benefits.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-sm text-paper-dim"
            >
              <Check
                className="mt-0.5 size-4 shrink-0 text-ember-500"
                strokeWidth={2.5}
              />
              {b}
            </li>
          ))}
        </ul>
      )}

      <form
        onSubmit={handleSubmit}
        className={clsx(
          "mt-6 flex flex-col gap-3",
          !compact && "sm:flex-row sm:items-start"
        )}
      >
        <div className={clsx("flex flex-1 flex-col gap-3", !compact && "sm:flex-row")}>
          <input
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={clsx(
              "w-full rounded-full border px-4 py-2.5 text-sm outline-none transition-colors",
              compact
                ? "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-ember-400"
                : "border-line bg-ink-950 text-paper placeholder:text-paper-dim/50 focus:border-ember-500/60"
            )}
          />
          <input
            type="email"
            required
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={clsx(
              "w-full rounded-full border px-4 py-2.5 text-sm outline-none transition-colors",
              compact
                ? "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-ember-400"
                : "border-line bg-ink-950 text-paper placeholder:text-paper-dim/50 focus:border-ember-500/60"
            )}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ember-500 px-5 py-2.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-ember-400 disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              Send me the checklist
              <ArrowRight className="size-4" strokeWidth={2.25} />
            </>
          )}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
