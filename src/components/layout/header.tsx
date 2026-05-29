"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/appointments", label: "Appointments" },
  { href: "/patient-portal", label: "Patient Portal" },
  { href: "/our-radiologists", label: "Our Radiologists" },
  { href: "/insurances", label: "Insurances" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-[32px] left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-outline-variant/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 h-16 md:h-[72px]">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 -ml-1 py-1 px-1 rounded-lg active:opacity-70 transition-opacity">
          <Image
            src="/logo.jpg"
            alt="Affinity Radiology — Go to homepage"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-secondary hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/appointments"
            className="hidden sm:inline-flex bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-primary-container btn-press transition-all duration-200 ease-out-expo"
          >
            Book Now
          </Link>

          <button
            className="xl:hidden p-2 -mr-2 text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-white border-b border-outline-variant/50 shadow-lg">
          <nav className="flex flex-col px-5 py-5 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary text-[15px] font-medium py-2.5 px-3 rounded-lg hover:bg-surface-low hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointments"
              className="mt-3 bg-primary text-white px-5 py-3 rounded-lg text-sm font-semibold text-center btn-press transition-all sm:hidden"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
