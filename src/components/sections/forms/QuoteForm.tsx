"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { FormField, Input, Select, Textarea } from "../../ui/FormField";
import { Button } from "../../ui/Button";

const budgetBands = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
];

const timelines = [
  "Immediately",
  "Within a month",
  "1–3 months",
  "Just exploring",
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-ember-500/30 bg-ink-900 px-6 py-14 text-center">
        <CheckCircle2 className="size-8 text-ember-500" />
        <h3 className="text-lg font-semibold text-paper">Quote request sent</h3>
        <p className="max-w-sm text-sm text-paper-dim">
          Check your inbox for a confirmation. We&apos;ll follow up with
          pricing shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Full name" htmlFor="q-name">
          <Input id="q-name" name="name" required placeholder="Jordan Smith" />
        </FormField>
        <FormField label="Work email" htmlFor="q-email">
          <Input
            id="q-email"
            type="email"
            name="email"
            required
            placeholder="jordan@company.com"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Company" htmlFor="q-company">
          <Input id="q-company" name="company" required placeholder="Company name" />
        </FormField>
        <FormField label="Your role" htmlFor="q-role">
          <Input id="q-role" name="role" placeholder="Head of People" />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Budget band" htmlFor="q-budget">
          <Select id="q-budget" name="budget" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgetBands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Timeline" htmlFor="q-timeline">
          <Select id="q-timeline" name="timeline" defaultValue="">
            <option value="" disabled>
              Select a timeline
            </option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField label="Project details" htmlFor="q-details">
        <Textarea
          id="q-details"
          name="details"
          required
          rows={5}
          placeholder="Tell us what you're looking for: team size, goals, anything that helps us scope a quote."
        />
      </FormField>

      {status === "error" && (
        <p className="text-sm text-ember-600">
          Something went wrong sending your request. Please try again or
          email {" "}
          <a href="mailto:hello@thepioneerlounge.com" className="underline">
            hello@thepioneerlounge.com
          </a>
          .
        </p>
      )}

      <Button type="submit" size="lg" showArrow={false} className="w-fit">
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Request a quote"
        )}
      </Button>
    </form>
  );
}
