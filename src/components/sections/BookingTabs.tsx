"use client";

import { useState } from "react";
import clsx from "clsx";
import { DiscoveryForm } from "./forms/DiscoveryForm";
import { QuoteForm } from "./forms/QuoteForm";
import { CalendarEmbed } from "./CalendarEmbed";

export function BookingTabs() {
  const [tab, setTab] = useState<"discovery" | "quote">("discovery");

  return (
    <div>
      <div className="inline-flex rounded-full border border-line bg-ink-900 p-1">
        {(
          [
            { key: "discovery", label: "Book a discovery call" },
            { key: "quote", label: "Request a quote" },
          ] as const
        ).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={clsx(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
              tab === t.key
                ? "bg-ember-500 text-ink-950"
                : "text-paper-dim hover:text-paper"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {tab === "discovery" ? (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-line bg-ink-900 p-7 lg:p-9">
              <h3 className="text-lg font-semibold text-paper">
                Tell us a bit about you
              </h3>
              <p className="mt-1.5 text-sm text-paper-dim">
                Takes under a minute and helps us prepare for the call.
              </p>
              <div className="mt-7">
                <DiscoveryForm />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-paper">
                Then, pick a time
              </h3>
              <p className="mt-1.5 text-sm text-paper-dim">
                30 minutes, no prep required on your end.
              </p>
              <div className="mt-7">
                <CalendarEmbed />
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-ink-900 p-7 lg:p-9">
            <h3 className="text-lg font-semibold text-paper">
              Tell us about the project
            </h3>
            <p className="mt-1.5 text-sm text-paper-dim">
              We&apos;ll follow up with a written quote, usually within two
              business days.
            </p>
            <div className="mt-7">
              <QuoteForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
