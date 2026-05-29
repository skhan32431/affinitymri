import { ScrollReveal } from "@/components/ui/scroll-reveal";

const inNetwork = [
  "AARP", "Accelerated Health", "Aetna (all plans)", "Aetna Better Health",
  "AmeriHealth", "American Choice Provider Network", "Amerigroup", "Anthem PPO",
  "Ancillary Care Services", "Atlantic Imaging Group", "BCBS Out of State PPO",
  "Care IQ", "Cigna (all plans)", "Clover Health", "CoreCel",
  "Department of Veteran Affairs", "EmblemHealth", "Empire PPO",
  "Fellowship Radiology LLC", "Galaxy Health Plans", "GHI", "HealthNet",
  "HealthFirst", "Horizon NJ Health", "1199 (Through OCM)",
  "Medicare", "Medicaid", "MedRisk", "MedSolutions", "One Call Care",
  "Oscar Corporation/Qualcare", "Oxford Health Plans", "POMCO",
  "Premier Comp Solutions", "Procura", "SMG Seoul Medical Group",
  "Spreemo", "Qualcare", "TRICARE",
  "United Healthcare", "United Healthcare Community Plan", "WellCare",
];

const outOfNetwork = [
  "Horizon Omnia", "Horizon EPO", "Horizon Advantage HMO",
  "Horizon BCBS NJ Direct", "Horizon BCBS PPO/POS",
];

export default function InsurancesPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="mb-16 hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Coverage
            </span>
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Accepted Insurance Plans
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed max-w-xl">
              We accept most major insurance plans. If you don&apos;t see your plan listed, please call us — we may still be able to accommodate you.
            </p>
          </div>

          {/* In-network highlight */}
          <div className="bg-primary/[0.03] border border-primary/10 rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Now Participating</span>
            </div>
            <p className="text-lg font-bold text-on-surface">United Healthcare & Oxford Health Plans</p>
            <p className="text-sm text-on-surface-variant mt-1">Recently added to our in-network providers.</p>
          </div>

          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-lg font-bold text-on-surface mb-6 stagger-1">In-Network Plans</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 stagger-2">
                {inNetwork.map((plan) => (
                  <div key={plan} className="flex items-center gap-2 text-sm text-on-surface-variant py-2 px-3 rounded-lg hover:bg-surface-low transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-primary shrink-0">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {plan}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="stagger-1">
              <h2 className="text-lg font-bold text-on-surface mb-6">Out-of-Network Plans</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {outOfNetwork.map((plan) => (
                  <div key={plan} className="flex items-center gap-2 text-sm text-on-surface-variant py-2 px-3 rounded-lg">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-outline shrink-0">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    {plan}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-12 text-center text-sm text-on-surface-variant">
            Don&apos;t see your plan? Call <a href="tel:2019685544" className="text-primary font-semibold">(201) 968-5544</a> to verify coverage.
          </div>
        </div>
      </section>
    </div>
  );
}
