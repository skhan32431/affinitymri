import Link from "next/link";

const portals = [
  {
    title: "Patient Portal",
    description: "Access your medical records, view scan results, and manage your appointments through our secure HIPAA-compliant portal.",
    href: "https://exa.affinityrad.com/p",
    features: ["View diagnostic reports", "Access scan images", "Manage appointments", "Update personal information", "Message your care team"],
    icon: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
  },
  {
    title: "Physician Portal",
    description: "Referring physicians can access patient imaging results, submit referrals, and communicate directly with our radiologists.",
    href: "https://exa.affinityrad.com/phy",
    features: ["Access patient imaging", "Submit referrals online", "Consult with radiologists", "Track referral status", "Download reports"],
    icon: <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zm1 10h-2v2H9v-2H7v-2h2v-2h2v2h2v2z" />,
  },
];

const quickLinks = [
  { title: "Pay Online", description: "Make a secure payment for your imaging services. 3% convenience fee applies.", href: "/pay-online", icon: <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /> },
  { title: "RX Upload", description: "Upload your prescription securely for faster appointment processing.", href: "/rx-upload", icon: <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" /> },
  { title: "Request CD/Films", description: "Request copies of your diagnostic images on CD or film.", href: "/request-cd", icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" /> },
  { title: "Patient Survey", description: "Help us improve by sharing your experience at our facility.", href: "/patient-survey", icon: <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /> },
];

export default function PatientPortalPage() {
  return (
    <div className="pt-[104px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16 hero-enter">
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Patient & Physician Portals
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              Securely access your records, results, and manage your care online.
            </p>
          </div>

          {/* Portal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 hero-enter-delayed">
            {portals.map((portal) => (
              <div key={portal.title} className="rounded-2xl bg-surface-low/60 p-1.5 ring-1 ring-black/[0.04]">
                <div className="rounded-[calc(1rem-6px)] bg-white p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">{portal.icon}</svg>
                  </div>
                  <h2 className="text-xl font-bold text-on-surface mb-2">{portal.title}</h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{portal.description}</p>
                  <ul className="space-y-2 mb-8">
                    {portal.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary shrink-0">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-primary-container btn-press transition-all duration-200"
                  >
                    Access Portal
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-2">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <h2 className="text-xl font-bold text-on-surface text-center mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group bg-white rounded-2xl p-6 border border-outline-variant/60 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(0,61,155,0.06)] transition-all duration-500 ease-out-expo"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">{link.icon}</svg>
                </div>
                <h3 className="text-base font-semibold text-on-surface mb-1">{link.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
