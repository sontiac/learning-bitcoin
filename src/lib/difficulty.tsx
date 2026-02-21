"use client";

import { createContext, useContext, useState, useCallback } from "react";

export type Difficulty = "curious" | "informed" | "maximalist";

export const DIFFICULTIES: { key: Difficulty; label: string; tagline: string }[] = [
  { key: "curious", label: "Curious", tagline: "Start from zero" },
  { key: "informed", label: "Informed", tagline: "Ready to go deeper" },
  { key: "maximalist", label: "Maximalist", tagline: "Full signal, no noise" },
];

interface DifficultyContextType {
  difficulty: Difficulty;
  cycle: () => void;
  label: string;
  tagline: string;
}

const DifficultyContext = createContext<DifficultyContextType>({
  difficulty: "curious",
  cycle: () => {},
  label: "Curious",
  tagline: "Start from zero",
});

export function DifficultyProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);

  const cycle = useCallback(() => {
    setIndex((prev) => (prev + 1) % DIFFICULTIES.length);
  }, []);

  const current = DIFFICULTIES[index];

  return (
    <DifficultyContext.Provider
      value={{
        difficulty: current.key,
        cycle,
        label: current.label,
        tagline: current.tagline,
      }}
    >
      {children}
    </DifficultyContext.Provider>
  );
}

export function useDifficulty() {
  return useContext(DifficultyContext);
}
