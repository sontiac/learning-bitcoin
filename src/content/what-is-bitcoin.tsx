import ScrollSection from "@/components/chapter/ScrollSection";

export default function WhatIsBitcoin() {
  return (
    <div className="space-y-12">
      <ScrollSection>
        <p className="text-lg text-white/80 leading-relaxed">
          In 2008, the global financial system was on the brink of collapse.
          Banks had gambled with people&apos;s money, and when the bets went bad,
          governments used <em>your</em> tax dollars to bail them out. Trust in
          institutions was shattered.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          A Mysterious Whitepaper
        </h2>
        <p className="text-white/70 leading-relaxed">
          On October 31, 2008, someone calling themselves{" "}
          <span className="text-[#F5C542] font-medium">Satoshi Nakamoto</span>{" "}
          published a nine-page paper titled &ldquo;Bitcoin: A Peer-to-Peer
          Electronic Cash System.&rdquo; It proposed something radical — money
          that doesn&apos;t need banks. Money that no government controls. Money
          that belongs to <em>you</em>.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          The Genesis Block
        </h2>
        <p className="text-white/70 leading-relaxed">
          On January 3, 2009, the first Bitcoin block was mined. Embedded in it
          was a message — a headline from that day&apos;s{" "}
          <em>Times of London</em>:
        </p>
        <blockquote className="my-6 border-l-2 border-[#D4A843]/50 pl-6 text-white/60 italic">
          &ldquo;Chancellor on brink of second bailout for banks&rdquo;
        </blockquote>
        <p className="text-white/70 leading-relaxed">
          It wasn&apos;t just a timestamp. It was a statement of purpose.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          So What <em>Is</em> Bitcoin?
        </h2>
        <p className="text-white/70 leading-relaxed">
          Bitcoin is digital money. But not like the numbers in your bank
          account — those are IOUs from your bank. Bitcoin is something you
          actually <em>own</em>. No bank can freeze it. No government can
          inflate it away. There will only ever be{" "}
          <span className="text-[#F5C542] font-semibold">21 million</span>{" "}
          bitcoins. It&apos;s scarce, like gold — but you can send it anywhere
          in the world in minutes.
        </p>
      </ScrollSection>
    </div>
  );
}
