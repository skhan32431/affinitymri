# Architecture & Implementation Plan

## Phase 1: Visual Prototype (Current)
Build a pixel-perfect, visually stunning static site. All interactive features are visual-only (forms don't submit, portals are placeholder links, payments are mock UI).

### Deliverables
- Responsive homepage with hero, services grid, testimonials, insurance info
- Service detail pages (MRI, PET/CT, X-Ray, Ultrasound, DEXA)
- Team/radiologists page
- Contact page with embedded map
- Navigation with mobile hamburger menu
- Footer with all links, contact info, hours
- Mock UI for: RX Upload, Appointment Request, Pay Online, CD Request

### Design Approach
1. **Start with Google Stitch** — generate initial high-fidelity mockups
   - Create hero section concepts
   - Generate service cards and layouts
   - Export code as starting point
2. **Build in Next.js** — use exported designs as reference
3. **Pull from 21st.dev** — use community components for common patterns
4. **Apply skills** — run Impeccable audit + Taste Skill rules throughout

---

## Phase 2: Core Functionality
Add real form submissions and basic interactivity.

### Appointment Request System
- Form: patient name, phone, email, preferred date/time, exam type, insurance, referring physician
- Backend: API route → email to appointments@affinitymri.com + confirmation email to patient
- Optional: integrate with scheduling system if they have one

### RX Upload
- Drag-and-drop file upload (images + PDFs)
- File validation (type, size limits)
- Backend: store in secure cloud storage (S3/GCS), notify staff
- HIPAA considerations: encryption at rest + in transit, access logging

### Contact / CD Request / Survey Forms
- Standard form → email notification pattern
- Store submissions in database for staff dashboard (future)

---

## Phase 3: Integrations
Connect to external systems.

### Portal Links
- Physician Portal → exa.affinityrad.com/phy (external, just link)
- Patient Portal → exa.affinityrad.com/p (external, just link)
- Consider: embed in iframe or keep as external redirect

### Payment Integration
- Provider options: Stripe, Square, or existing processor
- 3% convenience fee logic
- PCI compliance requirements
- Receipt generation and email confirmation

### Insurance Verification (Future)
- API integration with insurance eligibility checking
- Real-time verification during appointment booking

---

## Phase 4: Advanced Features
Polish and optimize.

### SEO & Performance
- Structured data (LocalBusiness, MedicalOrganization schemas)
- sitemap.xml, robots.txt
- Open Graph / social media meta tags
- Core Web Vitals optimization
- Google Business Profile integration

### Analytics & Monitoring
- Google Analytics 4 or Plausible
- Form submission tracking
- Heatmaps (optional: Hotjar/PostHog)

### Accessibility
- WCAG AA compliance minimum
- Screen reader testing
- Keyboard navigation
- Color contrast validation

### Content Management (Future)
- Headless CMS (Sanity, Contentful, or Payload) for:
  - Service descriptions
  - Team bios
  - Blog/news posts
  - Insurance plan updates
  - Exam prep instructions

---

## HIPAA Compliance Notes
Since this is a medical facility:
- No PHI (Protected Health Information) stored on the website server
- RX Upload must use encrypted storage with access controls
- Forms collecting patient info need TLS, privacy policy, BAA with hosting provider
- Consider: separate HIPAA-compliant infrastructure for file uploads
- Patient portal and EMR remain on exa.affinityrad.com (already compliant)

## Hosting Recommendation
- **Vercel** — excellent for Next.js, global CDN, automatic HTTPS
- **Alternative:** AWS Amplify or Cloudflare Pages
- **File storage:** AWS S3 with encryption (for RX uploads)
- **Email:** SendGrid or AWS SES for transactional emails
- **Database (future):** PlanetScale, Supabase, or Neon (PostgreSQL)
