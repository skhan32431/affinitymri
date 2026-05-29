import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const services = [
  {
    title: "High-Field Open MRI",
    description: "World's strongest 1.2T open MRI — no tunnel, no compromise on image quality. Claustrophobia-friendly.",
    href: "/services#mri",
    badge: "Featured",
    image: "/open-mri.jpg",
  },
  {
    title: "Closed 3T MRI",
    description: "Twice the strength of standard MRI with superior resolution, shorter scan times, and exceptional clarity.",
    href: "/services#mri",
    image: "/3t-mri.jpg",
  },
  {
    title: "PET/CT Imaging",
    description: "Combined functional and anatomical imaging for oncology, surgical planning, and cancer staging.",
    href: "/services#petct",
    image: "/pet-ct.jpg",
  },
  {
    title: "Digital X-Ray",
    description: "State-of-the-art digital imaging with reduced radiation. Walk-in service available.",
    href: "/services#xray",
    badge: "Walk-In",
    image: "/xray.jpg",
  },
  {
    title: "Ultrasound",
    description: "Non-invasive diagnostic sonography for obstetric, abdominal, vascular, and cardiac care.",
    href: "/services#ultrasound",
    image: "/ultrasound.jpg",
  },
  {
    title: "DEXA Scan",
    description: "Gold standard bone mineral density testing for osteoporosis screening. Minimal radiation.",
    href: "/services#dexa",
    image: "/dexa.jpg",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-bold text-on-surface tracking-[-0.01em] mb-4 stagger-1">
              Our Diagnostic Services
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed stagger-2">
              Utilizing the latest generation of scanning technology to provide
              unparalleled visual data for accurate medical intervention.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title}>
              <Link
                href={service.href}
                className="group block bg-white rounded-2xl overflow-hidden border border-outline-variant/60 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(0,61,155,0.06)] transition-all duration-500 ease-out-expo h-full"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out-expo"
                  />
                  {service.badge && (
                    <span className="absolute top-3 right-3 bg-primary text-white rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-on-surface tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-[1.7] mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold tracking-wide group-hover:gap-2.5 transition-all duration-300 ease-out-expo">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
