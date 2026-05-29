import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const features = [
  {
    icon: <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />,
    title: "Sub-specialty Oversight",
    description: "Your scans are routed to specialists in neuro, cardiac, or orthopedic radiology.",
  },
  {
    icon: <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />,
    title: "Comparative Analysis",
    description: "We cross-reference current findings with your historical imaging for longitudinal tracking.",
  },
  {
    icon: <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />,
    title: "Physician Consultation",
    description: "Direct line of communication between our radiologists and your referring doctor.",
  },
];

export function ExpertReports() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image — double-bezel */}
            <div className="relative order-2 lg:order-1 stagger-1">
              <div className="rounded-[1.5rem] bg-surface-low/60 p-1.5 ring-1 ring-black/[0.04]">
                <div className="rounded-[calc(1.5rem-6px)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                  <Image
                    src="/facility.jpg"
                    alt="Affinity Radiology facility"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary/[0.04] rounded-full blur-[60px]" />
              <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-tertiary/[0.03] rounded-full blur-[60px]" />
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-bold text-on-surface tracking-[-0.01em] mb-5 stagger-2">
                Expert Radiologist Reports
              </h2>
              <p className="text-lg text-on-surface-variant leading-[1.7] mb-10 max-w-[500px] stagger-3">
                Images are only as good as the eyes that interpret them. At
                Affinity Radiology, every scan is reviewed by our team of
                Board-Certified, sub-specialty radiologists who bring years of
                clinical experience to your diagnosis.
              </p>
              <div className="space-y-5 stagger-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">{feature.icon}</svg>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold tracking-wide text-on-surface mb-0.5">{feature.title}</h5>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
