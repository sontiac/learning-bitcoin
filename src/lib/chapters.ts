export interface Chapter {
  slug: string;
  title: string;
  tagline: string;
  shape: "icosahedron" | "torus" | "octahedron" | "dodecahedron";
  position: [number, number, number];
}

export const chapters: Chapter[] = [
  {
    slug: "what-is-bitcoin",
    title: "What is Bitcoin?",
    tagline: "The money that changed everything",
    shape: "icosahedron",
    position: [-2.2, 1.2, -1],
  },
  {
    slug: "bitcoin-vs-gold",
    title: "Bitcoin vs Gold",
    tagline: "Digital scarcity meets physical scarcity",
    shape: "torus",
    position: [2.2, 1.6, -2],
  },
  {
    slug: "how-does-it-work",
    title: "How Does It Work?",
    tagline: "Blocks, chains, and proof of work",
    shape: "octahedron",
    position: [-1.8, 2.4, -3.5],
  },
  {
    slug: "addresses-and-wallets",
    title: "Addresses & Wallets",
    tagline: "Your keys, your coins",
    shape: "dodecahedron",
    position: [1.8, 1.0, -4],
  },
];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}
