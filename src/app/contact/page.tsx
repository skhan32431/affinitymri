import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function ContactPage() {
  return (
    <div className="pt-[104px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-16 hero-enter">
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Contact Us
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed max-w-xl">
              We&apos;re here to help. Reach out by phone, email, or visit us in person.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <ScrollReveal>
              <div className="space-y-8">
                <div className="flex items-start gap-4 stagger-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-on-surface mb-1">Address</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      155 State Street<br />
                      Hackensack, NJ 07601
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 stagger-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-on-surface mb-1">Phone & Fax</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Phone: <a href="tel:2019685544" className="text-primary font-medium">(201) 968-5544</a><br />
                      Fax: (800) 707-8465
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 stagger-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-on-surface mb-1">Email</h3>
                    <p className="text-sm text-on-surface-variant">
                      <a href="mailto:appointments@affinitymri.com" className="text-primary font-medium">appointments@affinitymri.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 stagger-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-on-surface mb-1">Hours</h3>
                    <div className="text-sm text-on-surface-variant leading-relaxed space-y-1">
                      <p>Monday–Friday: 8:00 AM – 8:00 PM</p>
                      <p>Saturday: 8:00 AM – 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-primary font-medium mt-2">Walk-in X-Ray service available</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map embed placeholder */}
            <ScrollReveal>
              <div className="rounded-2xl bg-surface-low/60 p-1.5 ring-1 ring-black/[0.04] stagger-1">
                <div className="rounded-[calc(1rem-6px)] overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.234!2d-74.046!3d40.889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9a!2s155+State+St%2C+Hackensack%2C+NJ+07601!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Affinity Radiology Location"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
