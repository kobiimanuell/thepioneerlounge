import { AiSearchWidget } from "@/components/ai-widget/AiSearchWidget";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function AiWidgetLabPage() {
  return (
    <main className="min-h-screen bg-ink-950 px-6 py-24 text-paper">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">
          Internal preview
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Pioneer — UI shell
        </h1>
        <p className="mt-4 text-paper-dim">
          Visual duplicate of the floating launcher and expanded voice search
          panel, reskinned with our logo and colors. Click the launcher in the
          bottom-right corner to preview it, then try the mic or a suggestion
          chip to see the placeholder response. No real search, AI, or
          indexing is wired up yet.
        </p>
      </div>
      <AiSearchWidget />
    </main>
  );
}
