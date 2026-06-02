"use client";

import { useEffect, useRef } from "react";

export function ScrollReveal({
  children,
  className = "",
  gentle = false,
}: {
  children: React.ReactNode;
  className?: string;
  gentle?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { rootMargin: gentle ? "-40px" : "-80px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [gentle]);

  return (
    <div ref={ref} className={`${gentle ? "scroll-reveal-gentle" : "scroll-reveal"} ${className}`}>
      {children}
    </div>
  );
}
