import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 text-center">
        <ScrollReveal>
          <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-bold tracking-[-0.01em] mb-4 stagger-1">
            Ready to schedule your visit?
          </h2>
          <p className="text-base text-white/80 mb-12 max-w-lg mx-auto leading-relaxed stagger-2">
            Book your appointment through our secure online portal or call us
            directly at (201) 968-5544.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 stagger-3">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-white/90 btn-press transition-all duration-200 shadow-xl"
            >
              Request an Appointment
            </Link>
            <a
              href="tel:2019685544"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-white/10 btn-press transition-all duration-200"
            >
              Call (201) 968-5544
            </a>
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
