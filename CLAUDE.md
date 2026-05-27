# Affinity Radiology — Website Rebuild

## Project Overview
Full rebuild of [AffinityMRI.com](https://affinitymri.com/) — a radiology center in Hackensack, NJ.
Current site is outdated. Goal: create a modern, visually stunning, professional medical website.
**Current phase: Prototype / Visual Design** — functionality comes later.

## Business Info
- **Name:** Affinity Radiology (also branded as HRC / Hackensack Radiology Center)
- **Address:** 155 State Street, Hackensack, NJ 07601
- **Phone:** 201-968-5544 | **Fax:** 800-707-8465
- **Email:** appointments@affinitymri.com
- **NPI#:** 1285006791
- **Hours:** Mon–Fri 8AM–8PM | Sat 8AM–4PM | Sun Closed
- **Brand Colors:** Blue (#51b8f2), Purple (#7f64b5)
- **Certifications:** ACR accredited (MRI, CT)

## Services Offered
1. **MRI** — High Field 1.2 OPEN MRI (for claustrophobic/larger patients) + Closed 3T MRI
2. **PET/CT Imaging** — combined functional + anatomical imaging
3. **Digital X-Ray** — walk-in service available, reduced radiation exposure
4. **Ultrasound** — diagnostic sound wave imaging
5. **DEXA / Bone Density** — osteoporosis screening via dual-energy X-ray

## Functional Features (Plan for Future Implementation)
These are currently visual-only in the prototype but must be architected for real implementation:
- **RX Upload** — patients upload prescription images/PDFs
- **Physician Portal** — links to exa.affinityrad.com/phy (external EMR)
- **Patient Portal** — links to exa.affinityrad.com/p (external EMR)
- **Pay Online** — integrated payment (3% convenience fee)
- **Request Appointment** — form submission to appointments@affinitymri.com
- **Request CD/Films** — patient record request form
- **Patient Survey** — feedback collection
- **Forms** — downloadable/fillable patient forms
- **Newsletter Signup**
- **Insurance Info** — list of accepted plans (recently added United Healthcare & Oxford)

## Site Pages (from current site)
- Home (hero, services overview, reviews, insurance info)
- Services (MRI, PET/CT, X-Ray, Ultrasound, DEXA — each with sub-page)
- Our Radiologists (team profiles)
- Exam Prep (preparation instructions per exam type)
- Patient Info (appointment request, CD request, survey, forms)
- Insurances (accepted plans list)
- Contact (map, phone, email, hours)

## Tech Stack (Planned)
- **Framework:** Next.js 15 (App Router) + React 19
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui + 21st.dev community components
- **Animations:** Framer Motion + CSS transitions (per Emil Kowalski principles)
- **Design System:** Custom, informed by Impeccable + Taste Skill guidelines
- **Deployment:** Vercel (recommended) or similar
- **Future Backend:** API routes for forms, file uploads, payment integration

## Design Tools & References
- **Google Stitch** — AI UI design tool for generating high-fidelity mockups and prototyping
  - Free at stitch.withgoogle.com, uses Gemini models
  - Export production-ready code directly
  - Use for initial layout exploration and component design
- **21st.dev** — shadcn/ui-based component registry
  - Browse at 21st.dev/community/components
  - Install with `npx shadcn` commands

## AI Skills Installed
- **emilkowalski/skill** — UI polish, animation decisions, component design philosophy
- **pbakaus/impeccable** — design language for anti-pattern detection and design quality
- **taste-skill** — anti-slop frontend framework, prevents generic AI-generated UI
- **claude-mem** — persistent context across coding sessions

## Design Principles (from installed skills)
1. **No AI slop** — avoid centered headers, 3-column card grids, gradient buttons, emoji headers
2. **Animation budget** — UI animations under 300ms, buttons 100-160ms, modals 200-500ms
3. **Only animate transform + opacity** — no layout-triggering animations
4. **Custom easing curves** — never use default `ease-in` for UI
5. **Scale on press** — buttons get `transform: scale(0.97)` on `:active`
6. **Blur masks imperfect transitions** — use `filter: blur(2px)` during crossfades
7. **Respect prefers-reduced-motion**
8. **Medical industry appropriate** — trustworthy, clean, accessible, WCAG AA minimum
9. **Performance first** — Core Web Vitals must be excellent

## Coding Standards
- TypeScript strict mode
- Component-based architecture with clear separation
- Server Components by default, Client Components only when needed
- Semantic HTML for accessibility
- Mobile-first responsive design
- Image optimization via next/image
- SEO metadata on every page

## File Structure Convention
```
src/
  app/                  # Next.js App Router pages
    (marketing)/        # Public-facing pages grouped
    api/                # API routes (future)
  components/
    ui/                 # shadcn/ui primitives
    sections/           # Page sections (hero, services, etc.)
    layout/             # Header, footer, navigation
    forms/              # Contact, appointment, upload forms
  lib/                  # Utilities, constants, types
  styles/               # Global styles, design tokens
  content/              # Static content, copy, service descriptions
  public/               # Static assets, images, favicons
```
