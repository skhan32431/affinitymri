export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[51] bg-inverse-surface text-inverse-on-surface text-xs">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a href="tel:2019685544" className="flex items-center gap-1.5 hover:text-primary-fixed-dim transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            (201) 968-5544
          </a>
          <span className="hidden sm:flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            155 State St, Hackensack, NJ 07601
          </span>
          <a href="mailto:appointments@affinitymri.com" className="hidden md:flex items-center gap-1.5 hover:text-primary-fixed-dim transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.89 2-2V6c0-1.1-.89-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            appointments@affinitymri.com
          </a>
        </div>

        <div className="flex items-center gap-1.5 font-semibold text-primary-fixed-dim">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 2v11h3v9l7-12h-4l4-8z" />
          </svg>
          WALK-IN X-RAY AVAILABLE
        </div>
      </div>
    </div>
  );
}
