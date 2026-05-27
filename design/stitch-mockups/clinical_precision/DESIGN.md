---
name: Clinical Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434654'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#004964'
  on-tertiary: '#ffffff'
  tertiary-container: '#006285'
  on-tertiary-container: '#9fdbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is anchored in the principles of clinical precision, absolute clarity, and patient-centered empathy. It targets a demographic that ranges from medical professionals requiring technical accuracy to patients seeking reassurance and ease of use. 

The aesthetic is a refined **Corporate Modern** style with a focus on "Optical Clarity." This is achieved through generous whitespace, a strict adherence to a logical hierarchy, and a high-fidelity finish that avoids unnecessary ornamentation. The emotional response should be one of calm confidence—reassuring the user that they are in a professional, state-of-the-art environment.

## Colors

The color palette is built on a foundation of "Trustworthy Blues."
- **Primary (Medical Blue):** A vibrant yet professional blue used for primary actions (CTAs), active states, and key navigational elements.
- **Secondary (Deep Navy):** Reserved for high-level headings and structural elements to provide a grounded, authoritative feel.
- **Tertiary (Sky Blue):** Used sparingly for accents, informative icons, or secondary highlights to prevent the UI from feeling too heavy.
- **Neutral (Slate):** A range of grays used for body text, borders, and background surfaces to maintain high legibility and a clean environment.

The default mode is **Light**, utilizing pure white (#FFFFFF) for primary surfaces and soft, cool grays (#F8FAFC) for secondary containers to reduce eye strain.

## Typography

This design system utilizes **Manrope** for all typographic roles. Manrope was selected for its modern geometric construction which remains highly legible in technical contexts. 

- **Headings:** Use the Deep Navy color. Bold and ExtraBold weights are used for larger headlines to establish an immediate hierarchy.
- **Body Text:** Use the Neutral Slate color (#334155) to ensure sufficient contrast against white backgrounds while feeling softer than pure black.
- **Labels:** Small caps or increased letter spacing should be used for metadata and utility labels to distinguish them from prose.

## Layout & Spacing

The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The spacing rhythm is strictly based on an 8px baseline grid to maintain mathematical harmony.

- **Generous Whitespace:** Sections are separated by 'xl' spacing (80px) to give content room to breathe and reduce cognitive load for patients.
- **Consistency:** Use 'md' (24px) for internal padding within cards and containers.
- **Alignment:** All text elements must align to the baseline grid. On mobile, margins reduce to 16px to maximize screen real estate while maintaining a safe touch area.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layers**. The design system avoids heavy shadows, instead using subtle, highly diffused blurs to suggest elevation without feeling "heavy."

- **Level 0 (Floor):** Soft gray background (#F8FAFC).
- **Level 1 (Cards/Surfaces):** Pure white with a 1px border (#E2E8F0) and a very soft shadow (0px 4px 12px rgba(0, 0, 0, 0.03)).
- **Level 2 (Active Elements/Popovers):** Slightly more pronounced shadow (0px 8px 24px rgba(0, 0, 0, 0.06)) to indicate interaction or temporary overlays.

Internal dividers should be low-contrast (1px solid #F1F5F9) to maintain a clean, clinical appearance.

## Shapes

The shape language is defined by **Rounded (0.5rem)** corners. This creates an "approachable clinical" feel—avoiding the harshness of sharp corners (which can feel aggressive in a medical context) without becoming too playful or soft like a consumer social app.

- **Standard Elements:** 8px (0.5rem) radius for buttons and inputs.
- **Large Containers:** 16px (1rem) radius for service cards and doctor profile modules.
- **Media:** Photography of medical equipment or staff should also follow the 16px radius.

## Components

### Buttons & Actions
- **Primary:** Medical Blue background, White text. High contrast, 8px radius.
- **Secondary:** Deep Navy outline with Navy text. Used for less critical actions.
- **Tertiary:** Text-only with an underline or icon, used for navigation within content blocks.

### Service Cards
Cards should feature a subtle 1px border and an icon or image at the top. The title uses 'headline-md' in Deep Navy. Content is brief, leading to a "Learn More" primary-style link.

### Doctor Profiles
Profiles should use a circular or 16px rounded-square avatar. Name, specialty, and availability should be clear, utilizing 'label-md' for the specialty to provide visual distinction.

### Input Fields & Forms
Fields must have a clear 1px border. On focus, the border transitions to Primary Medical Blue with a soft 3px outer glow. Labels must always be visible above the input, never replaced by placeholders, to ensure accessibility.

### Navigation
The header is a fixed white bar with a subtle bottom border. Links are in Deep Navy with a Primary Blue indicator for the active state. A prominent "Book Appointment" CTA is positioned at the top right.