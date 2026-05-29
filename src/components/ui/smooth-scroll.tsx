"use client";

import { useEffect } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function smoothScrollTo(targetY: number, duration = 800) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const start = performance.now();

  function tick(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutExpo(progress);
    window.scrollTo(0, startY + diff * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

export function SmoothScroll() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Handle same-page anchors (#id)
      if (href.startsWith("#")) {
        const el = document.getElementById(href.slice(1));
        if (el) {
          e.preventDefault();
          const top = el.getBoundingClientRect().top + window.scrollY - 120;
          smoothScrollTo(top);
        }
        return;
      }

      // Handle cross-page anchors (/page#id) — only if same page
      if (href.includes("#")) {
        const [path, hash] = href.split("#");
        if (path === window.location.pathname || path === window.location.pathname + "/") {
          const el = document.getElementById(hash);
          if (el) {
            e.preventDefault();
            const top = el.getBoundingClientRect().top + window.scrollY - 120;
            smoothScrollTo(top);
          }
        }
      }
    }

    // Handle hash on page load (e.g. navigating to /services#xray)
    function handleLoad() {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to let the page render
        setTimeout(() => {
          const el = document.getElementById(hash.slice(1));
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 120;
            smoothScrollTo(top, 600);
          }
        }, 100);
      }
    }

    document.addEventListener("click", handleClick);
    handleLoad();

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
