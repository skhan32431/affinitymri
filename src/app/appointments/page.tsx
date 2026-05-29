import { ScrollReveal } from "@/components/ui/scroll-reveal";

const services = [
  { name: "MRI Scan", duration: "45–60 min", icon: "🔬" },
  { name: "CT Scan", duration: "20–30 min", icon: "🔍" },
  { name: "X-Ray", duration: "10–15 min", icon: "⚡" },
  { name: "Ultrasound", duration: "30–45 min", icon: "🔊" },
  { name: "PET/CT", duration: "60–90 min", icon: "🧬" },
  { name: "DEXA Scan", duration: "15–20 min", icon: "🦴" },
];

export default function AppointmentsPage() {
  return (
    <div className="pt-[104px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12 hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Book Your Visit
            </span>
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Request an Appointment
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Fill out the form below and our scheduling team will contact you within one business day to confirm your appointment.
            </p>
          </div>

          <ScrollReveal>
            <form className="space-y-6 stagger-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">First Name *</label>
                  <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Last Name *</label>
                  <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Phone *</label>
                  <input type="tel" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Email *</label>
                  <input type="email" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Service Required *</label>
                <select className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name}>{s.name} ({s.duration})</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Preferred Date</label>
                  <input type="date" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Preferred Time</label>
                  <select className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                    <option value="">Select time...</option>
                    <option>Morning (8AM–12PM)</option>
                    <option>Afternoon (12PM–4PM)</option>
                    <option>Evening (4PM–8PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Referring Physician</label>
                <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" placeholder="Dr. name" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Insurance Provider</label>
                <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Additional Notes</label>
                <textarea rows={3} className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white resize-none" />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(0,61,155,0.18)] hover:bg-primary-container btn-press transition-all duration-200"
              >
                Submit Appointment Request
              </button>

              <p className="text-xs text-on-surface-variant text-center">
                Or call us directly at <a href="tel:2019685544" className="text-primary font-semibold">(201) 968-5544</a>
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
