import ScrollSection from "@/components/chapter/ScrollSection";

export default function BitcoinVsGold() {
  return (
    <div className="space-y-12">
      <ScrollSection>
        <p className="text-lg text-white/80 leading-relaxed">
          For thousands of years, gold was the ultimate store of value. It&apos;s
          scarce, durable, and universally recognized. Then Bitcoin came along
          and asked: can we do better?
        </p>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-6">
          The Comparison
        </h2>
        <div className="overflow-hidden rounded-lg border border-[#D4A843]/20">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#D4A843]/20 bg-[#1a1a2e]/50">
                <th className="text-left p-4 text-white/50 font-normal">
                  Property
                </th>
                <th className="text-left p-4 text-[#F5C542] font-semibold">
                  Bitcoin
                </th>
                <th className="text-left p-4 text-[#D4A843] font-semibold">
                  Gold
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              {[
                ["Supply", "21 million (fixed forever)", "~200,000 tonnes (growing ~1.5%/yr)"],
                ["Portability", "Send anywhere in minutes", "Heavy, expensive to move"],
                ["Divisibility", "Down to 0.00000001 BTC", "Difficult to divide"],
                ["Verification", "Instant, anyone can verify", "Requires expert assay"],
                ["Seizure resistance", "Only you hold your keys", "Can be confiscated"],
                ["Track record", "~15 years", "~5,000 years"],
              ].map(([property, btc, gold], i) => (
                <tr
                  key={i}
                  className="border-b border-[#D4A843]/10 last:border-0"
                >
                  <td className="p-4 text-white/50">{property}</td>
                  <td className="p-4">{btc}</td>
                  <td className="p-4">{gold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollSection>

      <ScrollSection delay={0.1}>
        <h2 className="text-gold-gradient font-serif text-2xl font-semibold mb-4">
          Digital Scarcity
        </h2>
        <p className="text-white/70 leading-relaxed">
          Before Bitcoin, digital things could always be copied. A photo, a
          song, a document — copy and paste. Bitcoin solved this with
          mathematics. When you own a bitcoin, the entire network agrees it&apos;s
          yours. It can&apos;t be duplicated. For the first time in history,
          we have something digital that&apos;s truly scarce.
        </p>
      </ScrollSection>
    </div>
  );
}
