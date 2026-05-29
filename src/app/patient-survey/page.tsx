"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const questions = [
  "How would you rate the scheduling process?",
  "How would you rate the friendliness of our staff?",
  "How would you rate the cleanliness of the facility?",
  "How would you rate the wait time?",
  "How would you rate your overall experience?",
];

function StarRating({ question }: { question: string }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="py-4 border-b border-outline-variant/50 last:border-b-0">
      <p className="text-sm font-medium text-on-surface mb-2">{question}</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="p-0.5 transition-transform hover:scale-110"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`transition-colors ${
                star <= (hover || rating) ? "text-amber-400" : "text-outline-variant/40"
              }`}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PatientSurveyPage() {
  return (
    <div className="pt-[104px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12 hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Feedback
            </span>
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Patient Survey
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed max-w-md mx-auto">
              Your feedback helps us improve. Please take a moment to rate your experience at Affinity Radiology.
            </p>
          </div>

          <ScrollReveal>
            <form className="space-y-6 stagger-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Name (optional)</label>
                  <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Date of Visit</label>
                  <input type="date" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Service Received</label>
                <select className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                  <option value="">Select service...</option>
                  <option>MRI</option>
                  <option>PET/CT</option>
                  <option>X-Ray</option>
                  <option>Ultrasound</option>
                  <option>DEXA</option>
                </select>
              </div>

              {/* Star ratings */}
              <div className="rounded-2xl bg-surface-low p-1.5 ring-1 ring-black/[0.04]">
                <div className="rounded-[calc(1rem-6px)] bg-white px-6">
                  {questions.map((q) => (
                    <StarRating key={q} question={q} />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Would you recommend Affinity Radiology?</label>
                <div className="flex gap-3">
                  {["Definitely", "Probably", "Not sure", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 bg-surface-low rounded-xl px-4 py-3 ring-1 ring-black/[0.04] cursor-pointer hover:ring-primary/20 transition-all">
                      <input type="radio" name="recommend" value={opt} className="accent-primary" />
                      <span className="text-sm text-on-surface">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Additional Comments</label>
                <textarea rows={4} className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white resize-none" placeholder="Tell us about your experience..." />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(0,61,155,0.18)] hover:bg-primary-container btn-press transition-all duration-200"
              >
                Submit Survey
              </button>

              <p className="text-xs text-on-surface-variant text-center">
                Your feedback is anonymous unless you choose to provide your name. Thank you for helping us improve.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
