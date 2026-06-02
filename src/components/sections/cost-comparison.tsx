import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CostComparison() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left — copy */}
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-600 text-xs font-semibold tracking-widest uppercase mb-6 stagger-1">
                Patient Cost Awareness
              </span>
              <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-bold text-on-surface tracking-[-0.01em] mb-4 stagger-1">
                Same Scan. Same Quality.{" "}
                <span className="text-primary">Fraction of the Cost.</span>
              </h2>
              <p className="text-base text-on-surface-variant leading-[1.7] mb-8 stagger-2">
                Hospitals charge facility fees and negotiate higher rates with insurers — meaning
                you pay more out of pocket for the same exact scan. At Affinity Radiology, there
                are no facility fees and lower contracted rates, so more of your money stays in
                your wallet.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 stagger-3">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-primary tracking-tight">2–4×</div>
                  <div className="text-[11px] text-on-surface-variant mt-1">Hospital rates higher</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-primary tracking-tight">$0</div>
                  <div className="text-[11px] text-on-surface-variant mt-1">Facility fee here</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-primary tracking-tight">Same</div>
                  <div className="text-[11px] text-on-surface-variant mt-1">Quality & equipment</div>
                </div>
              </div>

              <Link
                href="/why-affinity"
                className="inline-flex items-center text-primary text-sm font-semibold tracking-wide hover:gap-2.5 gap-1.5 transition-all duration-300 ease-out-expo stagger-4"
              >
                Learn why patients save here
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </Link>
            </div>

            {/* Right — comparison cards */}
            <div className="space-y-4 stagger-2">
              {/* Hospital */}
              <div className="rounded-2xl border border-error/15 bg-error/[0.02] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-error/70">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                  </svg>
                  <span className="text-[10px] font-semibold text-error/70 uppercase tracking-widest">Hospital</span>
                </div>
                <ul className="space-y-2">
                  {["Facility fees added to your bill", "Higher negotiated insurer rates", "More applied to deductible"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-error/50 shrink-0">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Affinity */}
              <div className="rounded-2xl border border-primary/15 bg-primary/[0.02] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">Affinity Radiology</span>
                </div>
                <ul className="space-y-2">
                  {["No hospital facility fee", "Lower contracted insurer rates", "Less applied to your deductible"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-primary shrink-0">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
