import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const services = [
  {
    id: "open-mri",
    title: "High-Field 1.2T Open MRI",
    subtitle: "The World's Strongest Open MRI",
    description: "Our Oasis 1.2T High-Field Open MRI delivers closed-bore image quality with an open, boreless design. No tunnel means no claustrophobia — patients can have a companion present, enjoy music and ambient lighting, and feel comfortable throughout the entire scan.",
    features: ["Boreless design — no tunnel anxiety", "1.2 Tesla high-field strength", "660 lb patient capacity", "12–15 minute scan times", "Music & ambient lighting for comfort", "Companion can stay during scan", "Preferred by neuro & orthopedic surgeons"],
    image: "/open-mri.jpg",
    secondImage: "/open-mri-2.jpg",
  },
  {
    id: "3t-mri",
    title: "Closed 3T MRI",
    subtitle: "Maximum Resolution & Clarity",
    description: "Our 3 Tesla closed MRI provides twice the magnetic field strength of standard 1.5T scanners, delivering superior image resolution with shorter scan times. Ideal for detailed neurological, musculoskeletal, and cardiac imaging where the highest level of detail is required.",
    features: ["3 Tesla — twice standard MRI strength", "Superior image resolution & clarity", "Shorter scan times", "Ideal for neuro & cardiac studies", "Advanced imaging protocols", "Detailed soft tissue visualization"],
    image: "/3t-mri-new.jpg",
  },
  {
    id: "petct",
    title: "PET/CT Imaging",
    subtitle: "Combined Functional & Anatomical Imaging",
    description: "Our PET/CT scanner combines functional imaging (how the body works) with anatomical imaging (what the body looks like) for comprehensive disease diagnosis. Essential for oncology, surgical planning, and cancer staging.",
    features: ["Combined PET + CT in one session", "Cancer detection & staging", "Treatment monitoring", "Surgical planning support"],
    image: "/pet-ct.jpg",
  },
  {
    id: "xray",
    title: "Digital X-Ray",
    subtitle: "Walk-In Service Available",
    description: "State-of-the-art digital radiography with significantly reduced radiation exposure compared to conventional X-ray. Immediate image preview enables faster diagnosis.",
    features: ["Walk-in service — no appointment needed", "Reduced radiation vs. conventional", "Immediate digital image preview", "Bone, chest & routine screenings"],
    image: "/xray.jpg",
  },
  {
    id: "ultrasound",
    title: "Ultrasound",
    subtitle: "Non-Invasive Diagnostic Sonography",
    description: "Using advanced sound wave technology for real-time diagnostic imaging. No radiation exposure makes ultrasound safe for all patients including pregnant women.",
    features: ["Zero radiation exposure", "Obstetric & prenatal imaging", "Abdominal & vascular studies", "Real-time imaging results"],
    image: "/ultrasound.jpg",
  },
  {
    id: "dexa",
    title: "DEXA Bone Density Scan",
    subtitle: "Osteoporosis Screening & Monitoring",
    description: "Dual-energy X-ray absorptiometry (DXA) is the gold standard for measuring bone mineral density. Essential for diagnosing osteoporosis and assessing fracture risk.",
    features: ["Gold standard bone density test", "Minimal radiation exposure", "Total body composition analysis", "Osteoporosis risk assessment"],
    image: "/dexa.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[104px]">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6 hero-enter">
            Clinical Excellence
          </span>
          <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4 hero-enter">
            Imaging Services Directory
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl hero-enter-delayed">
            Experience state-of-the-art diagnostic technology coupled with compassionate care. Explore our comprehensive range of specialized imaging services.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-surface-low" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div className={i % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <h2 className="text-[clamp(1.5rem,3.5vw,1.75rem)] font-bold text-on-surface tracking-tight mb-2 stagger-1">
                    {service.title}
                  </h2>
                  <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-5 stagger-1">
                    {service.subtitle}
                  </p>
                  <p className="text-base text-on-surface-variant leading-[1.7] mb-8 stagger-2">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 mb-8 stagger-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-on-surface-variant">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary shrink-0 mt-0.5">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/appointments"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-primary-container btn-press transition-all duration-200 stagger-4"
                  >
                    Book This Service
                  </Link>
                </div>

                <div className={`relative stagger-2 ${i % 2 === 0 ? "order-2" : "order-2 lg:order-1"}`}>
                  <div className="rounded-2xl bg-surface-low/60 p-1.5 ring-1 ring-black/[0.04]">
                    <div className="rounded-[calc(1rem-6px)] overflow-hidden">
                      <Image src={service.image} alt={service.title} width={800} height={500} className="w-full h-auto" />
                    </div>
                  </div>
                  {service.secondImage && (
                    <div className="absolute -bottom-6 -right-4 w-[45%] rounded-xl bg-white p-1 ring-1 ring-black/[0.06] shadow-xl">
                      <div className="rounded-[calc(0.75rem-4px)] overflow-hidden">
                        <Image src={service.secondImage} alt={`${service.title} — alternate view`} width={400} height={300} className="w-full h-auto" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h2 className="text-2xl font-bold mb-4">Need help choosing a service?</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">Our clinical advisors are available to guide you based on your physician&apos;s referral.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:2019685544" className="bg-white text-primary px-6 py-3 rounded-xl text-sm font-semibold btn-press transition-all">
              Call (201) 968-5544
            </a>
            <Link href="/appointments" className="border-2 border-white/30 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/10 btn-press transition-all">
              Request Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
