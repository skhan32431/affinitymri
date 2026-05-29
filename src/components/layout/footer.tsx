import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant/50">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 md:gap-8">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="26" height="26" viewBox="0 0 1024 1024" fill="none" className="text-primary">
                <circle cx="512" cy="512" r="440" stroke="currentColor" strokeWidth="80" fill="none" />
                <circle cx="512" cy="512" r="180" fill="currentColor" opacity="0.5" />
                <line x1="512" y1="280" x2="512" y2="744" stroke="currentColor" strokeWidth="40" />
                <line x1="280" y1="512" x2="744" y2="512" stroke="currentColor" strokeWidth="40" />
              </svg>
              <span className="text-base font-bold text-on-surface tracking-tight">Affinity Radiology</span>
            </Link>
            <div className="space-y-1.5 text-sm text-on-surface-variant leading-relaxed">
              <p>155 State Street, Hackensack, NJ 07601</p>
              <p>Phone: (201) 968-5544</p>
              <p>Fax: (800) 707-8465</p>
              <p className="pt-1">Mon–Fri 8AM–8PM | Sat 8AM–4PM</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-xs font-semibold text-on-surface uppercase tracking-[0.15em] mb-4">Services</h6>
            <div className="flex flex-col gap-2.5">
              {["MRI", "PET/CT", "Digital X-Ray", "Ultrasound", "DEXA"].map((s) => (
                <Link key={s} href={`/services#${s.toLowerCase().replace(/[/ ]/g, "")}`} className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Patient Info */}
          <div>
            <h6 className="text-xs font-semibold text-on-surface uppercase tracking-[0.15em] mb-4">Patient Info</h6>
            <div className="flex flex-col gap-2.5">
              <Link href="/appointments" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Request Appointment</Link>
              <Link href="/patient-portal" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Patient Portal</Link>
              <Link href="/insurances" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Insurance Info</Link>
              <Link href="/exam-prep" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Exam Prep</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h6 className="text-xs font-semibold text-on-surface uppercase tracking-[0.15em] mb-4">Connect</h6>
            <div className="flex flex-col gap-2.5">
              <Link href="/contact" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Contact Us</Link>
              <a href="mailto:appointments@affinitymri.com" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Email Us</a>
              <Link href="/privacy-policy" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-outline-variant/50">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-on-surface-variant">
            &copy; {new Date().getFullYear()} Affinity Radiology. All rights reserved.
          </p>
          <p className="text-xs text-on-surface-variant">NPI# 1285006791</p>
        </div>
      </div>
    </footer>
  );
}
