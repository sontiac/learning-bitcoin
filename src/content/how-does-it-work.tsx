import ScrollSection from "@/components/chapter/ScrollSection";

export default function HowDoesItWork() {
  return (
    <div className="space-y-12">
      <ScrollSection>
        <p className="text-lg text-white/80 leading-relaxed">
          Imagine a giant notebook that everyone in the world can read, but no
          one can erase. Every transaction ever made is written in this notebook.
          That&apos;s the blockchain.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          Blocks and Chains
        </h2>
        <p className="text-white/70 leading-relaxed">
          About every 10 minutes, a new &ldquo;page&rdquo; (block) is added to
          the notebook. Each block contains a bundle of recent transactions.
          Every block includes a fingerprint of the previous block, chaining
          them together. Change one old transaction, and every block after it
          breaks — making fraud practically impossible.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          Mining
        </h2>
        <p className="text-white/70 leading-relaxed">
          Who writes these pages? <em>Miners</em>. Computers around the world
          compete to solve a mathematical puzzle. The winner gets to write the
          next block and earns newly created bitcoin as a reward. This is how
          new bitcoins enter circulation — not printed by a central bank, but
          earned through computational work.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          The Network
        </h2>
        <p className="text-white/70 leading-relaxed">
          There&apos;s no Bitcoin headquarters. No CEO. The network is thousands
          of computers (nodes) all over the world, each holding a complete copy
          of the blockchain. They all verify each other&apos;s work. To cheat
          the system, you&apos;d need to overpower all of them simultaneously —
          a feat that grows more impossible every day.
        </p>
      </ScrollSection>
    </div>
  );
}
