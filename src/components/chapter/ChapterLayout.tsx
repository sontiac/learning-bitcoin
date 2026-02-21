"use client";

import BackToVault from "@/components/shared/BackToVault";
import CircuitBorder from "@/components/shared/CircuitBorder";
import { useDifficulty, DIFFICULTIES } from "@/lib/difficulty";
import type { Chapter } from "@/lib/chapters";

function DifficultyPill() {
  const { difficulty, cycle, label } = useDifficulty();
  const diffIndex = DIFFICULTIES.findIndex((d) => d.key === difficulty);

  return (
    <button
      onClick={cycle}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4A843]/30 bg-[#1a1a2e]/50 hover:border-[#D4A843]/60 transition-colors cursor-pointer"
    >
      <div className="flex gap-1">
        {DIFFICULTIES.map((d, i) => (
          <div
            key={d.key}
            className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
            style={{
              background: i <= diffIndex ? "#F5C542" : "rgba(212,168,67,0.2)",
            }}
          />
        ))}
      </div>
      <span className="text-xs text-[#D4A843] font-medium">{label}</span>
    </button>
  );
}

export default function ChapterLayout({
  chapter,
  children,
}: {
  chapter: Chapter;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Fixed nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#D4A843]/10 flex items-center justify-between">
        <BackToVault />
        <DifficultyPill />
      </nav>

      {/* Content */}
      <CircuitBorder className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <header className="mb-12">
          <h1 className="text-gold-gradient font-serif text-4xl md:text-5xl font-bold mb-3">
            {chapter.title}
          </h1>
          <p className="text-white/50 text-lg">{chapter.tagline}</p>
        </header>

        <div className="prose-vault">{children}</div>
      </CircuitBorder>
    </div>
  );
}
