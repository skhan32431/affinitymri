import Link from "next/link";
import Image from "next/image";

const trustItems = [
  {
    icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />,
    title: "ACR Accredited",
    description: "Meeting the highest standards in diagnostic safety and quality.",
    border: "border-l-primary",
    bg: "bg-primary/10 text-primary",
  },
  {
    icon: <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z" />,
    title: "Fast Results",
    description: "Reports delivered to your physician within 24–48 hours.",
    border: "border-l-tertiary",
    bg: "bg-tertiary/10 text-tertiary",
  },
  {
    icon: <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />,
    title: "HIPAA Compliant",
    description: "Secure digital portal for all your medical records.",
    border: "border-l-secondary",
    bg: "bg-secondary/10 text-secondary",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white pt-[104px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/lobby.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-8">
              Advanced Diagnostic Center
            </span>

            <h1 className="text-[clamp(2.25rem,5vw,3rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-6">
              Precision Imaging for{" "}
              <span className="text-primary">Clinical Clarity</span>
            </h1>

            <p className="text-lg text-on-surface-variant leading-[1.7] mb-10 max-w-[480px]">
              Delivering high-fidelity diagnostic reports with state-of-the-art
              technology and expert sub-specialty radiologist oversight.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/appointments"
                className="inline-flex items-center bg-primary text-white px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(0,61,155,0.18)] hover:bg-primary-container btn-press transition-all duration-300 ease-out-expo"
              >
                Schedule an Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border-2 border-primary/20 text-primary px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide hover:border-primary/40 hover:bg-primary/[0.03] btn-press transition-all duration-300 ease-out-expo"
              >
                View Services
              </Link>
            </div>

            {/* ACR badges */}
            <div className="flex items-center gap-4 opacity-70">
              <Image src="/acr-mri-badge.png" alt="ACR MRI Accredited" width={48} height={48} />
              <Image src="/acr-ct-badge.png" alt="ACR CT Accredited" width={48} height={48} />
              <span className="text-xs text-on-surface-variant">ACR Accredited Facility</span>
            </div>
          </div>

          {/* Right — trust cards with staggered entrance */}
          <div className="flex flex-col gap-4 hero-enter-delayed">
            {trustItems.map((item, i) => (
              <div
                key={item.title}
                className={`glass-card p-5 rounded-2xl flex items-center gap-5 border-l-4 ${item.border} ${i === 1 ? "lg:translate-x-8" : ""}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">{item.icon}</svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-on-surface">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
