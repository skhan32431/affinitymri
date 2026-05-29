import { ScrollReveal } from "@/components/ui/scroll-reveal";

const forms = [
  {
    title: "New Patient Registration",
    description: "Required for all first-time patients. Includes demographic info, medical history, and consent.",
    filename: "new-patient-registration.pdf",
  },
  {
    title: "MRI Screening Questionnaire",
    description: "Safety screening form required before any MRI exam. Lists contraindications and implant history.",
    filename: "mri-screening-form.pdf",
  },
  {
    title: "CT/PET Consent Form",
    description: "Informed consent for CT and PET/CT imaging procedures including contrast administration.",
    filename: "ct-pet-consent.pdf",
  },
  {
    title: "Patient Medical History",
    description: "Comprehensive medical history form including current medications, allergies, and prior surgeries.",
    filename: "medical-history.pdf",
  },
  {
    title: "Insurance Authorization Form",
    description: "Required for insurance pre-authorization. Includes policyholder info and referral details.",
    filename: "insurance-authorization.pdf",
  },
  {
    title: "HIPAA Privacy Notice",
    description: "Notice of privacy practices describing how your medical information may be used and disclosed.",
    filename: "hipaa-privacy-notice.pdf",
  },
  {
    title: "Patient Rights & Responsibilities",
    description: "Overview of your rights as a patient and responsibilities during your visit.",
    filename: "patient-rights.pdf",
  },
  {
    title: "Release of Medical Records",
    description: "Authorization to release your diagnostic images and reports to another provider or facility.",
    filename: "records-release.pdf",
  },
];

export default function FormsPage() {
  return (
    <div className="pt-[104px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <div className="mb-16 hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Patient Resources
            </span>
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Downloadable Forms
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Save time at your visit by downloading and completing these forms in advance. Bring them with you on the day of your appointment.
            </p>
          </div>

          <div className="space-y-3">
            {forms.map((form) => (
              <ScrollReveal key={form.title}>
                <div className="flex items-center gap-4 bg-surface-low rounded-2xl p-5 ring-1 ring-black/[0.04] hover:ring-primary/20 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-on-surface">{form.title}</h3>
                    <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{form.description}</p>
                  </div>
                  <button className="shrink-0 flex items-center gap-1.5 text-primary text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/5 btn-press transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                    <span className="hidden sm:inline">Download</span>
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-on-surface-variant">
            Need help with a form? Call <a href="tel:2019685544" className="text-primary font-semibold">(201) 968-5544</a>
          </div>
        </div>
      </section>
    </div>
  );
}
