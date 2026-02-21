"use client";

import BackToVault from "@/components/shared/BackToVault";
import CircuitBorder from "@/components/shared/CircuitBorder";
import type { Chapter } from "@/lib/chapters";

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
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#D4A843]/10">
        <BackToVault />
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
