import RexbetAdBanner from "./RexbetAdBanner";
import RexbetMemoryGame from "./RexbetMemoryGame";

export default function RexbetPage() {
  return (
    <main className="min-h-svh bg-[#f8fafc] text-[#172033]">
      <RexbetMemoryGame />

      <section className="flex h-[50svh] items-start justify-center overflow-hidden border-t border-[#e2e8f0] bg-white px-2 py-3">
        <RexbetAdBanner />
      </section>
    </main>
  );
}
