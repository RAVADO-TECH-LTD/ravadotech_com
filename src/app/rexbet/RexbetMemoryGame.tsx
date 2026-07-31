"use client";

import { useEffect, useMemo, useState } from "react";

type Card = {
  id: number;
  value: string;
  isMatched: boolean;
};

const baseCards: Card[] = [
  { id: 1, value: "R", isMatched: false },
  { id: 2, value: "X", isMatched: false },
  { id: 3, value: "R", isMatched: false },
  { id: 4, value: "X", isMatched: false },
];

function shuffleCards(cards: Card[]) {
  return [...cards]
    .map((card) => ({ card, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ card }, index) => ({ ...card, id: index + 1, isMatched: false }));
}

export default function RexbetMemoryGame() {
  const [cards, setCards] = useState<Card[]>(baseCards);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const matchedCount = useMemo(
    () => cards.filter((card) => card.isMatched).length,
    [cards],
  );
  const hasWon = matchedCount === cards.length;

  useEffect(() => {
    setCards(shuffleCards(baseCards));
  }, []);

  useEffect(() => {
    if (selectedIds.length !== 2) {
      return;
    }

    const [firstId, secondId] = selectedIds;
    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);

    const timeoutId = window.setTimeout(() => {
      if (firstCard?.value === secondCard?.value) {
        setCards((currentCards) =>
          currentCards.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isMatched: true }
              : card,
          ),
        );
      }

      setSelectedIds([]);
    }, 650);

    return () => window.clearTimeout(timeoutId);
  }, [cards, selectedIds]);

  function handleCardClick(card: Card) {
    if (
      card.isMatched ||
      selectedIds.includes(card.id) ||
      selectedIds.length === 2
    ) {
      return;
    }

    setSelectedIds((currentIds) => {
      const nextIds = [...currentIds, card.id];

      if (nextIds.length === 2) {
        setMoves((currentMoves) => currentMoves + 1);
      }

      return nextIds;
    });
  }

  function resetGame() {
    setCards(shuffleCards(baseCards));
    setSelectedIds([]);
    setMoves(0);
  }

  return (
    <section className="flex h-[50svh] flex-col items-center justify-center gap-3 overflow-hidden px-4 py-3">
      <div className="flex w-full max-w-[360px] items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl leading-none text-[#101828]">Rexbet</h1>
          <p className="mt-1 text-sm font-sans text-[#667085]">
            Match the pairs
          </p>
        </div>
        <button
          type="button"
          onClick={resetGame}
          className="h-10 rounded-md bg-[#101828] px-4 text-sm text-white shadow-sm transition hover:bg-[#24304a] active:scale-[0.98]"
        >
          Reset
        </button>
      </div>

      <div className="grid aspect-square w-[min(70vw,calc(50svh-116px),280px)] grid-cols-2 gap-3">
        {cards.map((card) => {
          const isOpen = card.isMatched || selectedIds.includes(card.id);

          return (
            <button
              type="button"
              key={card.id}
              onClick={() => handleCardClick(card)}
              aria-label={isOpen ? `Card ${card.value}` : "Hidden card"}
              aria-pressed={isOpen}
              className={[
                "flex aspect-square items-center justify-center rounded-lg border text-5xl shadow-sm transition",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14b8a6]",
                isOpen
                  ? "border-[#14b8a6] bg-[#ccfbf1] text-[#0f766e]"
                  : "border-[#cbd5e1] bg-white text-transparent hover:border-[#94a3b8] active:scale-[0.98]",
              ].join(" ")}
            >
              {isOpen ? card.value : "?"}
            </button>
          );
        })}
      </div>

      <div className="h-6 text-center font-sans text-sm text-[#475467]">
        {hasWon ? `Cleared in ${moves} moves` : `${moves} moves`}
      </div>
    </section>
  );
}
