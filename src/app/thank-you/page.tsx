import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";
import { ConversionPing } from "./ConversionPing";

export const metadata: Metadata = {
  ...pageMetadata(
    "/thank-you",
    "You're In",
    "Thanks for enrolling in AI Foundations."
  ),
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70svh] items-center border-b border-line py-24">
      <ConversionPing />
      <Container>
        <div className="mx-auto flex max-w-lg flex-col items-center gap-5 text-center">
          <CheckCircle2 className="size-12 text-ember-500" strokeWidth={1.5} />
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            You&apos;re in. Check your email.
          </h1>
          <p className="text-balance leading-relaxed text-paper-dim">
            Your AI Foundations access is on its way to your inbox. If it
            doesn&apos;t show up in a few minutes, check spam or reach out
            and we&apos;ll sort it out.
          </p>
          <Button href="/" className="mt-2">
            Back to the homepage
          </Button>
        </div>
      </Container>
    </section>
  );
}
