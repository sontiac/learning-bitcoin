"use client";

import dynamic from "next/dynamic";

const VaultScene = dynamic(
  () => import("@/components/vault/VaultScene"),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <VaultScene />
    </main>
  );
}
