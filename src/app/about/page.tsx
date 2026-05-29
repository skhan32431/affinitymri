import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const values = [
  {
    title: "Clinical Excellence",
    description: "Every scan is interpreted by board-certified, sub-specialty radiologists with years of focused experience.",
    icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />,
  },
  {
    title: "Patient Comfort",
    description: "From our open MRI to our welcoming lobby, every detail is designed to put patients at ease during their visit.",
    icon: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />,
  },
  {
    title: "Advanced Technology",
    description: "We invest in the latest imaging equipment including the world's strongest high-field open MRI and closed 3T MRI.",
    icon: <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />,
  },
  {
    title: "Accessible Care",
    description: "We accept most major insurance plans, offer walk-in X-ray services, and provide same-day availability when possible.",
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />,
  },
];

const stats = [
  { value: "10+", label: "Years Serving NJ" },
  { value: "40+", label: "Insurance Plans Accepted" },
  { value: "12", label: "Board-Certified Radiologists" },
  { value: "6", label: "Imaging Services" },
];

export default function AboutPage() {
  return (
    <div className="pt-[104px]">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="hero-enter">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
                About Us
              </span>
              <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-6">
                Precision Imaging, <span className="text-primary">Compassionate Care</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-[1.7] mb-6">
                Affinity Radiology is a state-of-the-art diagnostic imaging center located in the heart of Hackensack, New Jersey. We combine advanced technology with a patient-first approach to deliver the highest quality diagnostic imaging services.
              </p>
              <p className="text-base text-on-surface-variant leading-[1.7] mb-8">
                Our facility is ACR-accredited and staffed by board-certified, sub-specialty trained radiologists who bring decades of combined clinical experience. From our world-class open MRI to our walk-in X-ray services, every aspect of our practice is designed around one goal: delivering accurate, timely results so your physician can provide the best care possible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/our-radiologists"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-primary-container btn-press transition-all duration-200"
                >
                  Meet Our Team
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center border-2 border-primary/20 text-primary px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:border-primary/40 hover:bg-primary/[0.03] btn-press transition-all duration-200"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="hero-enter-delayed">
              <div className="rounded-[1.5rem] bg-surface-low/60 p-1.5 ring-1 ring-black/[0.04]">
                <div className="rounded-[calc(1.5rem-6px)] overflow-hidden">
                  <Image
                    src="/lobby.jpg"
                    alt="Affinity Radiology lobby and waiting area"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-surface-low">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-bold text-on-surface tracking-[-0.01em] mb-4 stagger-1">
                What Sets Us Apart
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed stagger-2">
                We believe diagnostic imaging should be accurate, accessible, and comfortable for every patient.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <ScrollReveal key={value.title}>
                <div className="bg-white rounded-2xl p-7 border border-outline-variant/40 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">{value.icon}</svg>
                  </div>
                  <h3 className="text-lg font-semibold text-on-surface tracking-tight mb-2">{value.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-[1.7]">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility images */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-bold text-on-surface tracking-[-0.01em] mb-10 stagger-1">
              Our Facility
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-2">
              {[
                { src: "/lobby.jpg", alt: "Modern lobby and waiting area" },
                { src: "/open-mri.jpg", alt: "Oasis 1.2T High-Field Open MRI" },
                { src: "/3t-mri.jpg", alt: "Closed 3T MRI scanner" },
                { src: "/facility.jpg", alt: "Affinity Radiology facility" },
                { src: "/pet-ct.jpg", alt: "PET/CT imaging suite" },
                { src: "/xray.jpg", alt: "Digital X-Ray room" },
              ].map((img) => (
                <div key={img.src} className="rounded-2xl overflow-hidden ring-1 ring-black/[0.04]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover hover:scale-[1.03] transition-transform duration-700 ease-out-expo"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
