import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CountUp } from "@/components/ui/count-up";

const hospitalItems = [
  "Facility fees added on top of the imaging fee",
  "Negotiated rates with insurers are significantly higher",
  "Higher cost-sharing applied to your deductible & coinsurance",
  "Same scan — much larger bill",
];

const affinityItems = [
  "No hospital facility fee",
  "Lower contracted rates with insurers",
  "Less applied to your deductible & coinsurance",
  "Same scan — significantly lower bill",
];

const reasons = [
  {
    num: "01",
    title: "Hospitals carry a higher fee schedule.",
    text: "They negotiate reimbursement rates with insurers that can be 2–4× higher than independent centers for the identical procedure.",
  },
  {
    num: "02",
    title: "Facility fees are unique to hospitals.",
    text: 'A "facility fee" is charged simply for being on hospital property — even for a routine outpatient MRI. Independent centers don\'t charge this.',
  },
  {
    num: "03",
    title: "Your cost-sharing is based on the billed amount.",
    text: "If your insurance applies 20% coinsurance, 20% of a $3,000 hospital rate hits you much harder than 20% of a $900 outpatient rate.",
  },
  {
    num: "04",
    title: "Deductible dollars go further elsewhere.",
    text: "Every dollar you spend at a higher-rate hospital eats through your deductible faster — leaving more exposure for future care.",
  },
];

const stats = [
  { value: "2–4×", description: "Higher hospital imaging rates vs. independent centers" },
  { value: "$0", description: "Facility fee at an outpatient radiology center" },
  { value: "Same", description: "Quality of imaging equipment & radiologist reads" },
];

export default function WhyAffinityPage() {
  return (
    <div className="pt-[104px]">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-600 text-xs font-semibold tracking-widest uppercase mb-6">
              Patient Cost Awareness
            </span>
            <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-6">
              Your Wallet Feels the Difference —{" "}
              <span className="text-primary">Before You Even Get Your Scan</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-[1.7] max-w-2xl">
              Where you get your imaging done can mean hundreds — or thousands — of dollars
              in out-of-pocket costs.
            </p>
          </div>
        </div>
      </section>

      {/* Blockquote */}
      <section className="py-12 bg-surface-low">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <blockquote className="border-l-4 border-primary pl-6 py-2 stagger-1">
              <p className="text-lg md:text-xl text-on-surface leading-[1.7] font-medium">
                Not all imaging is priced equally. Hospitals and outpatient radiology
                centers often provide the same exact scan — but the bill you receive can
                look dramatically different. Here&apos;s why.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hospital */}
              <div className="rounded-2xl border-2 border-error/20 bg-error/[0.02] p-7 stagger-1">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-error">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                  </svg>
                  <span className="text-xs font-semibold text-error uppercase tracking-widest">Hospital Outpatient Dept.</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-5">Higher Fee Schedule</h3>
                <ul className="space-y-3">
                  {hospitalItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-error/60 shrink-0 mt-0.5">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Affinity */}
              <div className="rounded-2xl border-2 border-primary/20 bg-primary/[0.02] p-7 stagger-2">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">Affinity Radiology</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-5">Lower Fee Schedule</h3>
                <ul className="space-y-3">
                  {affinityItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary shrink-0 mt-0.5">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why does this happen */}
      <section className="py-20 md:py-28 bg-surface-low">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold text-primary tracking-[-0.01em] mb-12 stagger-1">
              Why Does This Happen?
            </h2>
            <div className="space-y-10 stagger-2">
              {reasons.map((r) => (
                <div key={r.num} className="flex gap-5 md:gap-8">
                  <span className="text-3xl md:text-4xl font-extrabold text-primary/15 shrink-0 leading-none mt-1 font-serif">
                    {r.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-on-surface mb-1.5">{r.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-[1.7]">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-inverse-surface text-inverse-on-surface">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.value} className="bg-white/[0.06] rounded-xl p-6 ring-1 ring-white/10 flex flex-col items-center justify-center min-h-[120px]">
                <div className="text-3xl md:text-4xl font-extrabold text-primary-fixed-dim tracking-tight mb-2">{s.value}</div>
                <div className="text-sm text-inverse-on-surface/60">{s.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(1.5rem,4vw,1.75rem)] font-bold text-on-surface tracking-tight mb-4 stagger-1">
              Before your next MRI, CT, or X-ray — ask your doctor about Affinity Radiology.
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 stagger-2">
              Same quality imaging, at a fraction of the hospital cost.
            </p>
            <div className="flex flex-wrap justify-center gap-4 stagger-3">
              <Link
                href="/appointments"
                className="inline-flex items-center bg-primary text-white px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(0,61,155,0.18)] hover:bg-primary-container btn-press transition-all duration-200"
              >
                Schedule an Appointment
              </Link>
              <a
                href="/patient-cost-awareness.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-primary/20 text-primary px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide hover:border-primary/40 hover:bg-primary/[0.03] btn-press transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
                Download PDF
              </a>
            </div>
            <p className="text-xs text-on-surface-variant mt-8">
              Same scan. Same quality. Fraction of the cost.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
