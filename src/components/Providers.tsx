"use client";

import { DifficultyProvider } from "@/lib/difficulty";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <DifficultyProvider>{children}</DifficultyProvider>;
}
