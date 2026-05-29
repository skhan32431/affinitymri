import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
        <ScrollReveal>
          <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-bold tracking-[-0.01em] mb-4 stagger-1">
            Ready to schedule your visit?
          </h2>
          <p className="text-base text-white/80 mb-12 max-w-lg mx-auto leading-relaxed stagger-2">
            Book your appointment through our secure online portal or call us
            directly at (201) 968-5544.
          </p>

          <div className="max-w-xl mx-auto rounded-2xl bg-white/10 p-1 ring-1 ring-white/20 stagger-3">
            <div className="flex flex-col sm:flex-row gap-2 bg-white rounded-[calc(1rem-4px)] p-1.5 shadow-xl">
              <div className="flex-1 flex items-center px-4 text-on-surface">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-outline shrink-0 mr-3">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <input
                  type="text"
                  placeholder="Enter zip code or city"
                  className="w-full border-none focus:outline-none text-[15px] text-on-surface placeholder:text-outline bg-transparent py-3"
                />
              </div>
              <Link
                href="/contact"
                className="bg-primary-container text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:opacity-90 btn-press transition-all duration-200 text-center whitespace-nowrap"
              >
                Find Location
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/70 stagger-4">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-sm">Insurance Accepted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-sm">Walk-In X-Ray Available</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-sm">Same-day Availability</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
