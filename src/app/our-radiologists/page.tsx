import { ScrollReveal } from "@/components/ui/scroll-reveal";

const radiologists = [
  { name: "Sasan Azar, M.D.", specialty: "Neuroradiology" },
  { name: "Shari Friedman, M.D.", specialty: "Musculoskeletal Radiology" },
  { name: "Michael Green, M.D.", specialty: "Musculoskeletal Radiology" },
  { name: "Judah Goldschmiedt, M.D.", specialty: "Musculoskeletal / Body Imaging" },
  { name: "Thurairasah Vijayanathan, M.D.", specialty: "General / Body Imaging" },
  { name: "Priyesh Patel, M.D.", specialty: "General / Body Imaging" },
  { name: "Ming He, M.D., Ph.D.", specialty: "Nuclear Medicine (PET/CT)" },
  { name: "Andrew Kim, M.D.", specialty: "Diagnostic Radiology" },
  { name: "Stephen Pomeranz, M.D.", specialty: "Diagnostic Radiology" },
  { name: "Brij Reddy, M.D.", specialty: "Diagnostic Radiology" },
  { name: "Michael Yuz, M.D.", specialty: "Diagnostic Radiology" },
  { name: "Mark J. Decker, M.D.", specialty: "Diagnostic Radiology" },
];

export default function OurRadiologistsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="max-w-2xl mb-16 hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Our Team
            </span>
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Board-Certified Radiologists
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Every scan is interpreted by a sub-specialty trained, board-certified radiologist. Our team brings decades of combined clinical expertise across neuro, musculoskeletal, body, and nuclear imaging.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {radiologists.map((doc) => (
              <ScrollReveal key={doc.name}>
                <div className="bg-surface-low rounded-2xl p-6 ring-1 ring-black/[0.04] h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/8 flex items-center justify-center text-primary mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-on-surface">{doc.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{doc.specialty}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
