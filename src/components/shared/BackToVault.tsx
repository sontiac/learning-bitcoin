"use client";

import Link from "next/link";

export default function BackToVault() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#D4A843] transition-colors"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="rotate-180"
      >
        <path
          d="M6 3l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to the Vault
    </Link>
  );
}
