import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const features = [
  { label: "1.2 Tesla", description: "High-field strength" },
  { label: "660 lbs", description: "Patient capacity" },
  { label: "12–15 min", description: "Average scan time" },
  { label: "Open Design", description: "No tunnel anxiety" },
];

const benefits = [
  "Boreless design eliminates claustrophobia",
  "Companion can stay with you during the scan",
  "Music and lighting for patient comfort",
  "Accommodates all body shapes and sizes",
  "Preferred by neuro and orthopedic surgeons",
  "Centered positioning for sharper images",
];

export function OpenMriShowcase() {
  return (
    <section className="py-24 md:py-32 bg-inverse-surface text-inverse-on-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — image with double-bezel */}
            <div className="relative stagger-1">
              <div className="rounded-[1.5rem] bg-white/[0.06] p-1.5 ring-1 ring-white/10">
                <div className="rounded-[calc(1.5rem-6px)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                  <Image
                    src="/open-mri.jpg"
                    alt="Oasis 1.2T High-Field Open MRI"
                    width={1280}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* Glow accent */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-[60px]" />
            </div>

            {/* Right — content */}
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-primary-fixed-dim text-xs font-semibold tracking-widest uppercase mb-6 stagger-2">
                Now Offering
              </span>

              <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.01em] mb-3 stagger-2">
                The World&apos;s Strongest{" "}
                <span className="text-primary-fixed-dim">High-Field Open MRI</span>
              </h2>

              <p className="text-base text-inverse-on-surface/70 leading-[1.7] mb-8 max-w-[460px] stagger-3">
                No more compromising on image quality due to outdated open MRI machines.
                Our Oasis 1.2T delivers closed-bore quality with an open, comfortable design.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 stagger-3">
                {features.map((f) => (
                  <div key={f.label} className="bg-white/[0.06] rounded-xl p-4 ring-1 ring-white/10 text-center">
                    <div className="text-lg font-bold text-primary-fixed-dim">{f.label}</div>
                    <div className="text-xs text-inverse-on-surface/60 mt-0.5">{f.description}</div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <ul className="space-y-2.5 mb-10 stagger-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-inverse-on-surface/80">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary-fixed-dim shrink-0 mt-0.5">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/appointments"
                className="inline-flex items-center bg-primary-fixed-dim text-inverse-surface px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide hover:opacity-90 btn-press transition-all duration-200 stagger-5"
              >
                Request an Appointment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-2">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
