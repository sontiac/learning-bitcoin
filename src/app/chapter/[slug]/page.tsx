import { notFound } from "next/navigation";
import { chapters, getChapter } from "@/lib/chapters";
import ChapterLayout from "@/components/chapter/ChapterLayout";
import WhatIsBitcoin from "@/content/what-is-bitcoin";
import BitcoinVsGold from "@/content/bitcoin-vs-gold";
import HowDoesItWork from "@/content/how-does-it-work";
import AddressesAndWallets from "@/content/addresses-and-wallets";

export function generateStaticParams() {
  return chapters.map((ch) => ({ slug: ch.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) return {};
  return {
    title: `${chapter.title} — Learning Bitcoin`,
    description: chapter.tagline,
    openGraph: {
      title: `${chapter.title} — Learning Bitcoin`,
      description: chapter.tagline,
    },
  };
}

const contentMap: Record<string, React.ComponentType> = {
  "what-is-bitcoin": WhatIsBitcoin,
  "bitcoin-vs-gold": BitcoinVsGold,
  "how-does-it-work": HowDoesItWork,
  "addresses-and-wallets": AddressesAndWallets,
};

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const Content = contentMap[slug];
  if (!Content) notFound();

  return (
    <ChapterLayout chapter={chapter}>
      <Content />
    </ChapterLayout>
  );
}
