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
    <div className="shrink-0 w-[340px] bg-white rounded-2xl p-6 border border-outline-variant/40 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      <Stars count={review.rating} />
      <p className="text-sm text-on-surface-variant leading-[1.7] mt-3 mb-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-primary/8 flex items-center justify-center text-primary text-xs font-bold">
            {review.name.charAt(0)}
          </div>
          <span className="text-sm font-semibold text-on-surface">{review.name}</span>
        </div>
        <span className="text-[10px] font-medium text-on-surface-variant/60 uppercase tracking-wider">{review.source}</span>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, direction }: { reviews: typeof reviewsRow1; direction: "left" | "right" }) {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-low to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-low to-transparent z-10 pointer-events-none" />

      <div className={`flex gap-5 ${animationClass}`}>
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
            <p className="text-base text-on-surface-variant leading-relaxed stagger-2">
              Trusted by thousands of patients in Hackensack and across New Jersey for over a decade.
            </p>
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
