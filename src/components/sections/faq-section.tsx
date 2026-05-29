"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const faqs = [
  {
    q: "Do I need a referral to get an imaging exam?",
    a: "Most imaging exams require a physician's referral or prescription. Walk-in X-ray services are available without an appointment. Contact us at (201) 968-5544 if you're unsure.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Please bring your photo ID, insurance card, physician's referral/prescription, and any completed patient forms. If you have prior imaging from another facility, bring those CDs as well.",
  },
  {
    q: "Will I feel claustrophobic during my MRI?",
    a: "Our Oasis 1.2T Open MRI is specifically designed for patients who experience claustrophobia. It has no tunnel — the open design allows for a comfortable experience with music and lighting options. A companion can also stay with you during the scan.",
  },
  {
    q: "How long does an MRI take?",
    a: "A typical MRI scan takes 12–15 minutes with our high-field open MRI, and 20–45 minutes with our closed 3T MRI depending on the body part and study type. Plan to be at our facility for about an hour total.",
  },
  {
    q: "When will I receive my results?",
    a: "Reports are typically delivered to your referring physician within 24–48 hours. Your doctor will review the results and discuss them with you. You can also access your reports through our patient portal.",
  },
  {
    q: "Do you accept my insurance?",
    a: "We accept over 40 insurance plans including Aetna, Cigna, United Healthcare, Oxford, Medicare, Medicaid, and many more. Visit our Insurances page for the full list or call us to verify your coverage.",
  },
  {
    q: "Can I walk in for an X-ray?",
    a: "Yes! We offer walk-in digital X-ray services during business hours. No appointment is necessary. Simply bring your prescription and insurance information.",
  },
  {
    q: "Is the facility wheelchair accessible?",
    a: "Yes, our facility is fully ADA-compliant and wheelchair accessible. Our Open MRI can accommodate patients up to 660 lbs.",
  },
];

function FaqItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-outline-variant/50 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 py-5 text-left group"
      >
        <span className="flex-1 text-[15px] font-semibold text-on-surface group-hover:text-primary transition-colors leading-snug">
          {faq.q}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`text-on-surface-variant shrink-0 mt-0.5 transition-transform duration-300 ease-out-expo ${open ? "rotate-180" : ""}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300 ease-out-expo"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-on-surface-variant leading-[1.7] pb-5">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-5 md:px-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-bold text-on-surface tracking-[-0.01em] mb-4 stagger-1">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed stagger-2">
              Everything you need to know before your visit.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl bg-surface-low p-1.5 ring-1 ring-black/[0.04] stagger-1">
            <div className="rounded-[calc(1rem-6px)] bg-white px-6 md:px-8">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} faq={faq} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-center text-sm text-on-surface-variant mt-8 stagger-1">
            Still have questions? Call <a href="tel:2019685544" className="text-primary font-semibold">(201) 968-5544</a> or{" "}
            <a href="mailto:appointments@affinitymri.com" className="text-primary font-semibold">email us</a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
