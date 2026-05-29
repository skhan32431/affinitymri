import { ScrollReveal } from "@/components/ui/scroll-reveal";

const reviewsRow1 = [
  { name: "Yvonne L.", text: "Exceptional customer service from the minute you walk in. Highly recommend.", rating: 5, source: "Google" },
  { name: "Carmen R.", text: "This was the first time in my life I did not have an anxiety attack during an MRI. The open MRI made all the difference. Highly recommend!", rating: 5, source: "Yelp" },
  { name: "Rafael C.", text: "Greatest place I've ever been. Professional treatment from start to finish. Will definitely recommend.", rating: 5, source: "Google" },
  { name: "Sara P.", text: "The staff was extremely kind and accommodating. I was nervous about my first MRI but they made me feel completely at ease. I recommend Affinity to everyone.", rating: 5, source: "Yelp" },
  { name: "Sean M.", text: "Staff was very attentive and the facility is extremely clean. You can tell they genuinely care about their work!", rating: 5, source: "Google" },
  { name: "Hailey J.", text: "Such ridiculously cheap and affordable services! The staff is friendly and the facility is state-of-the-art. Highly recommend!", rating: 5, source: "Yelp" },
  { name: "Carolyn G.", text: "Most professional medical office I've ever visited. Just amazing!", rating: 5, source: "Google" },
  { name: "Karen M.", text: "I can't tell you how pleased I was with my experience. Would definitely recommend this location to anyone.", rating: 5, source: "Google" },
];

const reviewsRow2 = [
  { name: "Julie M.", text: "Best of the best! Always quick, easy, and precise work. Everyone is always so pleasant.", rating: 5, source: "Yelp" },
  { name: "Gerald Z.", text: "Very professional, everyone was great. 10 stars!", rating: 5, source: "Google" },
  { name: "Melvin J.", text: "The place is super clean and big. Shoutout to my tech for trying to make me comfortable during the whole scan.", rating: 5, source: "Yelp" },
  { name: "Tara G.", text: "Excellent facility with top-notch customer service. Would definitely recommend to anyone needing imaging services.", rating: 5, source: "Google" },
  { name: "Nan S.", text: "Staff was excellent, friendly and courteous. The MRI experience was much better than I expected. Highly recommend Affinity to anyone.", rating: 5, source: "Yelp" },
  { name: "Emily W.", text: "Very friendly and attentive staff. Great experience overall. Made a stressful situation much easier.", rating: 5, source: "Google" },
  { name: "Ruthy B.", text: "My husband and I have been there twice. Friendly and professional every single time.", rating: 5, source: "Yelp" },
  { name: "Sonia A.", text: "Very good experience: cordiality, no waiting line, and respect for the patient.", rating: 5, source: "Google" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviewsRow1[0] }) {
  return (
    <div className="shrink-0 w-[240px] sm:w-[300px] md:w-[340px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-outline-variant/40 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      <Stars count={review.rating} />
      <p className="text-xs sm:text-sm text-on-surface-variant leading-[1.7] mt-2 sm:mt-3 mb-3 sm:mb-4 line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/8 flex items-center justify-center text-primary text-[10px] sm:text-xs font-bold">
            {review.name.charAt(0)}
          </div>
          <span className="text-xs sm:text-sm font-semibold text-on-surface">{review.name}</span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-medium text-on-surface-variant/60 uppercase tracking-wider">{review.source}</span>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, direction }: { reviews: typeof reviewsRow1; direction: "left" | "right" }) {
  // Use mid-size card width for duration calculation (300px + 16px gap)
  const totalWidth = reviews.length * (300 + 16);
  const speed = 35; // pixels per second
  const duration = totalWidth / speed;

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-surface-low to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-surface-low to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-3 sm:gap-4 md:gap-5 hover:[animation-play-state:paused]"
        style={{
          animation: `${direction === "left" ? "marqueeLeft" : "marqueeRight"} ${duration}s linear infinite`,
        }}
      >
        {/* Duplicate for seamless loop */}
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export function ReviewsMarquee() {
  return (
    <section className="py-24 md:py-32 bg-surface-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-14">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-bold text-on-surface tracking-[-0.01em] mb-4 stagger-1">
              What Our Patients Say
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed mb-6 stagger-2">
              Trusted by thousands of patients in Hackensack and across New Jersey for over a decade.
            </p>
            {/* Rating badges */}
            <div className="flex flex-wrap justify-center gap-6 stagger-3">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 ring-1 ring-black/[0.06] shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#4285F4]" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold text-on-surface">4.9</span>
                <span className="text-xs text-on-surface-variant">on Google</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 ring-1 ring-black/[0.06] shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF1A1A">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.57.05-1-.38-1.56-.74-.87-.58-1.36-.94-2.2-1.5-.97-.65-.34-1.01.21-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
                </svg>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold text-on-surface">4.8</span>
                <span className="text-xs text-on-surface-variant">on Yelp</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="space-y-5">
        <MarqueeRow reviews={reviewsRow1} direction="left" />
        <MarqueeRow reviews={reviewsRow2} direction="right" />
      </div>
    </section>
  );
}
