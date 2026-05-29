import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function InsuranceBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <ScrollReveal>
          <div className="rounded-2xl bg-primary/[0.03] border border-primary/10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2.5 mb-3 stagger-1">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-[10px] font-semibold tracking-widest uppercase">
                  New
                </span>
                <span className="text-sm font-semibold text-primary">Insurance Update</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-on-surface tracking-tight mb-3 stagger-2">
                Now Participating with United Healthcare &amp; Oxford
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-lg stagger-3">
                We are proud to announce that Affinity Radiology is now an in-network provider for United Healthcare and Oxford Health Plans. Most major insurance plans are accepted.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 stagger-4">
              <Link
                href="/insurances"
                className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-primary-container btn-press transition-all duration-200"
              >
                View All Plans
              </Link>
              <a
                href="tel:2019685544"
                className="inline-flex items-center justify-center border-2 border-primary/20 text-primary px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:border-primary/40 hover:bg-primary/[0.03] btn-press transition-all duration-200"
              >
                Verify Coverage
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
