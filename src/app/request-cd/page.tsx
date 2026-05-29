import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function RequestCdPage() {
  return (
    <div className="pt-[104px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12 hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Medical Records
            </span>
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Request CD / Films
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed max-w-md mx-auto">
              Request copies of your diagnostic images on CD or film. Allow 3–5 business days for processing.
            </p>
          </div>

          <ScrollReveal>
            <form className="space-y-6 stagger-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Patient First Name *</label>
                  <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Patient Last Name *</label>
                  <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Date of Birth *</label>
                  <input type="date" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Phone *</label>
                  <input type="tel" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Email *</label>
                <input type="email" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Exam Date(s) *</label>
                <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" placeholder="e.g. October 15, 2024" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Exam Type *</label>
                <select className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                  <option value="">Select exam type...</option>
                  <option>MRI</option>
                  <option>CT / PET-CT</option>
                  <option>X-Ray</option>
                  <option>Ultrasound</option>
                  <option>DEXA</option>
                  <option>All Records</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Format Requested *</label>
                <div className="flex flex-wrap gap-3">
                  {["CD", "Film", "Digital (Portal Access)"].map((format) => (
                    <label key={format} className="flex items-center gap-2 bg-surface-low rounded-xl px-4 py-3 ring-1 ring-black/[0.04] cursor-pointer hover:ring-primary/20 transition-all">
                      <input type="radio" name="format" value={format} className="accent-primary" />
                      <span className="text-sm text-on-surface">{format}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Delivery Method *</label>
                <div className="flex flex-wrap gap-3">
                  {["Pick up in person", "Mail to my address", "Send to another provider"].map((method) => (
                    <label key={method} className="flex items-center gap-2 bg-surface-low rounded-xl px-4 py-3 ring-1 ring-black/[0.04] cursor-pointer hover:ring-primary/20 transition-all">
                      <input type="radio" name="delivery" value={method} className="accent-primary" />
                      <span className="text-sm text-on-surface">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Mailing Address (if applicable)</label>
                <textarea rows={2} className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white resize-none" placeholder="Street, City, State, ZIP" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Additional Notes</label>
                <textarea rows={2} className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white resize-none" />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(0,61,155,0.18)] hover:bg-primary-container btn-press transition-all duration-200"
              >
                Submit Request
              </button>

              <p className="text-xs text-on-surface-variant text-center">
                Processing takes 3–5 business days. For urgent requests, call <a href="tel:2019685544" className="text-primary font-semibold">(201) 968-5544</a>
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
