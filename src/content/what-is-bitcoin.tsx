"use client";

import ScrollSection from "@/components/chapter/ScrollSection";
import { useDifficulty } from "@/lib/difficulty";

export default function WhatIsBitcoin() {
  const { difficulty } = useDifficulty();

  return (
    <div className="space-y-12">
      <ScrollSection>
        {difficulty === "curious" && (
          <p className="text-lg text-white/80 leading-relaxed">
            Imagine if you could send money to anyone in the world — no bank, no
            app, no permission needed. Just you and them. That&apos;s Bitcoin. It&apos;s
            digital money that works like cash on the internet. Nobody owns it,
            nobody controls it, and nobody can stop you from using it.
          </p>
        )}
        {difficulty === "informed" && (
          <p className="text-lg text-white/80 leading-relaxed">
            In 2008, the global financial system was on the brink of collapse.
            Banks had gambled with people&apos;s money, and when the bets went bad,
            governments used <em>your</em> tax dollars to bail them out. Trust in
            institutions was shattered. A pseudonymous developer saw an
            opportunity to build something better.
          </p>
        )}
        {difficulty === "maximalist" && (
          <p className="text-lg text-white/80 leading-relaxed">
            The 2008 financial crisis wasn&apos;t a bug — it was a feature of
            fractional reserve banking and moral hazard. Central banks printed
            trillions, debasing savings to prop up insolvent institutions. The
            Cantillon effect transferred wealth from the many to the few. Bitcoin
            was engineered as the exit.
          </p>
        )}
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          {difficulty === "curious"
            ? "Where Did It Come From?"
            : difficulty === "informed"
              ? "A Mysterious Whitepaper"
              : "The Whitepaper"}
        </h2>
        {difficulty === "curious" && (
          <p className="text-white/70 leading-relaxed">
            In 2008, someone using the name{" "}
            <span className="text-[#F5C542] font-medium">Satoshi Nakamoto</span>{" "}
            wrote a short paper describing how Bitcoin would work. Nobody knows
            who Satoshi really is — they could be one person or a group. They
            built Bitcoin, gave it to the world, and then disappeared. No
            company owns Bitcoin. It just... runs.
          </p>
        )}
        {difficulty === "informed" && (
          <p className="text-white/70 leading-relaxed">
            On October 31, 2008, someone calling themselves{" "}
            <span className="text-[#F5C542] font-medium">Satoshi Nakamoto</span>{" "}
            published a nine-page paper titled &ldquo;Bitcoin: A Peer-to-Peer
            Electronic Cash System.&rdquo; It proposed something radical — money
            that doesn&apos;t need banks. Money that no government controls. The
            key innovation: solving the double-spend problem without a trusted
            third party, using a chain of cryptographic hashes and proof-of-work.
          </p>
        )}
        {difficulty === "maximalist" && (
          <p className="text-white/70 leading-relaxed">
            Satoshi&apos;s whitepaper solved the Byzantine Generals&apos; Problem for
            digital money through a novel combination of hash-based
            proof-of-work, Merkle trees, and a UTXO transaction model. The
            paper built on decades of cypherpunk research — Adam Back&apos;s
            Hashcash, Wei Dai&apos;s b-money, Nick Szabo&apos;s Bit Gold — but
            synthesized them into a system with real-world incentive
            compatibility. Published October 31, 2008. Code shipped January 3,
            2009. Satoshi mined for two years, never spent a single coin, then
            vanished. There has never been a fairer launch.
          </p>
        )}
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
        {difficulty === "curious" && (
          <p className="text-white/70 leading-relaxed">
            It was a message to the world: <em>this is why Bitcoin exists.</em>
          </p>
        )}
        {difficulty === "informed" && (
          <p className="text-white/70 leading-relaxed">
            It wasn&apos;t just a timestamp proving the block wasn&apos;t pre-mined. It was
            a statement of purpose — a permanent, immutable indictment of the
            system Bitcoin was designed to replace.
          </p>
        )}
        {difficulty === "maximalist" && (
          <p className="text-white/70 leading-relaxed">
            Block 0. The coinbase transaction encodes the message in its
            scriptSig as hex. The 50 BTC reward is provably unspendable. This
            wasn&apos;t just a timestamp — it was a proof of no pre-mine and a
            permanent declaration of Bitcoin&apos;s <em>raison d&apos;être</em>,
            immutably recorded in the only ledger that matters.
          </p>
        )}
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          {difficulty === "curious"
            ? "So What Is Bitcoin, Really?"
            : difficulty === "informed"
              ? "So What Is Bitcoin?"
              : "First Principles"}
        </h2>
        {difficulty === "curious" && (
          <p className="text-white/70 leading-relaxed">
            Bitcoin is digital money that belongs to <em>you</em>. Not to a
            bank, not to a company — you. There will only ever be{" "}
            <span className="text-[#F5C542] font-semibold">21 million</span>{" "}
            bitcoins. Nobody can make more. Nobody can take yours away (as long
            as you keep your password safe). And you can send it to anyone,
            anywhere, anytime — no permission needed.
          </p>
        )}
        {difficulty === "informed" && (
          <p className="text-white/70 leading-relaxed">
            Bitcoin is a decentralized digital currency with a fixed supply of{" "}
            <span className="text-[#F5C542] font-semibold">21 million</span>{" "}
            coins. It&apos;s scarce like gold — but you can send it anywhere in the
            world in minutes. No bank can freeze it. No government can inflate
            it away. Ownership is enforced by cryptographic keys, not
            institutions. It&apos;s the first digital asset that is truly bearer —
            if you hold the keys, you hold the coins.
          </p>
        )}
        {difficulty === "maximalist" && (
          <p className="text-white/70 leading-relaxed">
            Bitcoin is a timestamped, append-only ledger secured by the largest
            computation network in human history. Its monetary policy is
            algorithmically enforced:{" "}
            <span className="text-[#F5C542] font-semibold">21 million</span>{" "}
            coins, halving every 210,000 blocks, approaching zero issuance
            asymptotically. It&apos;s the hardest money ever created — stock-to-flow
            ratio surpassing gold after the 2024 halving. Self-sovereign,
            censorship-resistant, seizure-resistant, inflation-proof. Not your
            keys, not your coins.
          </p>
        )}
      </ScrollSection>
    </div>
  );
}
