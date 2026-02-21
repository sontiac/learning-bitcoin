import ScrollSection from "@/components/chapter/ScrollSection";

export default function AddressesAndWallets() {
  return (
    <div className="space-y-12">
      <ScrollSection>
        <p className="text-lg text-white/80 leading-relaxed">
          You don&apos;t need a bank account to use Bitcoin. You don&apos;t need
          permission from anyone. All you need is a pair of keys.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          Public & Private Keys
        </h2>
        <p className="text-white/70 leading-relaxed">
          Think of it like a mailbox. Your{" "}
          <span className="text-[#F5C542] font-medium">public key</span>{" "}
          (address) is the slot on the front — anyone can drop mail in. Your{" "}
          <span className="text-[#F5C542] font-medium">private key</span> is
          the only key that opens the box. Share your address freely; guard your
          private key with your life.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          What Does an Address Look Like?
        </h2>
        <div className="bg-[#1a1a2e]/50 border border-[#D4A843]/20 rounded-lg p-4 font-mono text-sm break-all">
          <span className="text-[#F5C542]">bc1q</span>
          <span className="text-white/60">
            xy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
          </span>
        </div>
        <p className="text-white/50 text-sm mt-3">
          A Bitcoin address is a string of letters and numbers derived from your
          public key. The{" "}
          <code className="text-[#F5C542] bg-[#1a1a2e] px-1.5 py-0.5 rounded text-xs">
            bc1q
          </code>{" "}
          prefix means it&apos;s a modern SegWit address.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          Wallets
        </h2>
        <p className="text-white/70 leading-relaxed">
          A Bitcoin wallet doesn&apos;t actually hold your coins — the
          blockchain does. Your wallet holds your <em>keys</em>. It&apos;s more
          like a keychain than a wallet. Wallets come in many forms: apps on
          your phone, hardware devices, even a piece of paper. The important
          thing is that <em>you</em> control the keys — not a company, not a
          bank. Your keys, your coins.
        </p>
      </ScrollSection>
    </div>
  );
}
