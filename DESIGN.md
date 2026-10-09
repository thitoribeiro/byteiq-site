---
name: ByteIQ
description: AI Engineering & Software Development studio — institutional, editorial, blueprint-precise
colors:
  deep-navy: "#10243E"
  byte-blue: "#1769E0"
  byte-blue-hover: "#1354B5"
  byte-blue-active: "#124491"
  byte-blue-subtle: "#EDF4FF"
  electric-cyan: "#13B8D1"
  electric-cyan-text: "#0D6373"
  electric-cyan-subtle: "#E8FAFD"
  ai-violet: "#7257E8"
  ai-violet-text: "#4B34AB"
  ai-violet-subtle: "#F3F0FE"
  paper-white: "#FFFFFF"
  paper-subtle: "#F7F9FC"
  ink-primary: "#10243E"
  ink-secondary: "#4B5A70"
  ink-muted: "#5F6B80"
  hairline: "#D9E0EA"
  hairline-strong: "#7B879B"
  error: "#D92D20"
typography:
  display:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(0.875rem, 1vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.16em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  "2xl": "24px"
components:
  button-primary:
    backgroundColor: "{colors.byte-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.byte-blue-hover}"
  button-secondary:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "48px"
  button-nav-cta:
    backgroundColor: "{colors.byte-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "40px"
  cta-banner:
    backgroundColor: "{colors.paper-subtle}"
    rounded: "{rounded.xl}"
    padding: "32px 40px"
---

# Design System: ByteIQ

## Overview

**Creative North Star: "The Blueprint Studio"**

ByteIQ's visual language borrows its grammar from technical drafting rather than from marketing design. A large number stands in for a plan reference (`01`, `02`…), a hairline stands in for a ruled line, and a faint blueprint-pattern texture sits behind the Hero and a few deeper pages — the site reads as an engineering studio's working document, not a product showcase. The system is confirmed to reject neon, glow, cyberpunk aesthetics, glassmorphism, and generic "AI startup" visual clichés; these are settled rejections carried from the brand, not open stylistic choices for future work to revisit.

Voice is precise, contained, confident, and editorial — the register of a serious technical publication, not a SaaS landing page. Site copy is Portuguese (pt-BR); body-copy containers are kept narrow (max-width in the 2xl/3xl range) so line length stays readable at that register. One typeface (Inter) carries the entire hierarchy through size and weight alone. Color is used with the same restraint: one blue carries almost all interactive weight, and the two reserved accents are locked to exactly one semantic meaning each.

**Key Characteristics:**
- Numbered hairline lists replace bordered cards as the default way to present 3+ comparable items (capabilities, principles, portfolio entries, process phases, technical deliverables).
- Light institutional theme is the only theme for this marketing site; dark mode is reserved for dashboards and dev tools elsewhere in the ByteIQ product family, never here.
- Byte Blue is the one color that carries interactive/action weight anywhere on the site. AI Violet and Electric Cyan are reserved accents, each locked to a single semantic domain.
- The Hero's B symbol — a scroll-driven 3D `rotateY`, eased with a 220ms spring-free transition rather than a free-running loop — is the system's one genuinely animated, proprietary signature; everything else is deliberately restrained.
- Flat by default: hairlines and whitespace build hierarchy. Shadow is reserved for content that floats above the page, not for resting cards or sections.

## Colors

The palette is a disciplined, mostly-neutral institutional system: one blue does nearly all interactive work, and the two reserved accents are never used outside their domain, even decoratively.

### Primary
- **Byte Blue** (#1769E0): the only recurring action color — primary buttons, links, active nav states, focus rings, the numbered labels on most capability/process lists. Hover state is **Byte Blue Hover** (#1354B5), one step darker on the same scale.

### Secondary
- **AI Violet** (#7257E8): reserved exclusively for content that is literally about AI (the "Sistemas Inteligentes" capability number, the AI Agents solution's accent). Never used for emphasis or decoration outside that domain.

### Tertiary
- **Electric Cyan** (#13B8D1, applied as the darker **Electric Cyan Text** #0D6373 for AA contrast on light backgrounds): reserved exclusively for content that is literally about data, flow, or automation. Currently under-expressed on the live site relative to its reserved role — a real token with very few live callers, not a token to repurpose.

### Neutral
- **Paper White** (#FFFFFF): the default page background.
- **Paper Subtle** (#F7F9FC): alternate section background (Home alternates White/Paper Subtle by section for scroll rhythm) and the fill for non-bordered contained blocks (CTA banners, the contact form panel).
- **Deep Navy** (#10243E) as **Ink Primary**: all heading and primary text.
- **Ink Secondary** (#4B5A70): body copy.
- **Ink Muted** (#5F6B80): captions, labels, metadata, secondary list text.
- **Hairline** (#D9E0EA) / **Hairline Strong** (#7B879B): the two border weights — decorative dividers use Hairline; interactive borders (secondary-button outline, input borders) use Hairline Strong.

### Named Rules
**The Reserved Accent Rule.** AI Violet appears only where the subject is literally AI; Electric Cyan appears only where the subject is literally data, flow, or automation. Neither is ever used for decoration, emphasis, or variety outside its domain — confirm the subject matter before reaching for either.

**The One Voice Rule.** Byte Blue is the only color asked to carry interactive weight. A second "also clickable" color is never introduced for variety.

## Typography

**Display Font:** Inter (with Helvetica Neue, Arial fallback)
**Body Font:** Inter — same family as Display; the system is single-typeface by design, with hierarchy built entirely from size, weight, and letter-spacing.

**Character:** Confident and editorial at the top of the scale (bold, tight-tracked display type), quiet and generous at the bottom (relaxed-leading body copy) — the contrast between the two is the hierarchy, not a second typeface.

### Hierarchy
- **Display** (700, 44px → 60px → 72px across breakpoints, leading 1.03, tracking -0.02em): the Hero H1 only. Deliberately the one place the system goes this large.
- **Headline** (600, 30px → 48px, tight tracking): page H1s and major section H2s.
- **Title** (600, 20px → 24px): sub-section headings, numbered-list item titles, card/component titles.
- **Body** (400, 14px → 16px, leading 1.625): paragraph copy. Containers cap body text around a 2xl/3xl max-width so line length stays comfortable in Portuguese.
- **Label** (500, 11px, 16px line-height, 0.16em tracking, uppercase): the one sanctioned uppercase/tracked treatment anywhere in the system (`.text-overline`), used sparingly for eyebrow labels above a headline.

### Named Rules
**The One Uppercase Rule.** `.text-overline` is the only place the system turns on uppercase and letter-spacing. Headings and body copy never do, no matter how much emphasis a screen seems to want.

## Layout

Container width is content-density-dependent, not fixed: `max-w-5xl` for text-heavy pages (About, Process, Cases), `max-w-7xl` for grid-heavy pages (Portfolio, Technologies, the Solutions hub), with `px-4 sm:px-6 lg:px-8` horizontal padding throughout. Inner pages clear the fixed header with `pt-48 sm:pt-56` top padding; section rhythm on the Home page uses `py-24 sm:py-32` per section.

Grids are asymmetric by default on the Home page — a 7/5 split for the Positioning statement, a 4/8 split for intro copy, alternating left/right detail columns in Selected Work — rather than even halves or thirds. Inner pages currently default to simpler single-column or symmetric 3-column grids; extending Home's asymmetry to inner pages is a known, intentional next step, not an inconsistency to silently "fix."

Section backgrounds alternate White/Paper Subtle on the Home page to create scroll rhythm; this alternation has not yet been extended to inner pages.

Mobile composition is deliberately redesigned per surface, not a shrunk desktop layout: the Hero's B symbol becomes a low-opacity background watermark below `lg` rather than a smaller version of its desktop foreground treatment, and the Capabilities accordion collapses its detail row by default on mobile (always open on desktop) rather than cramming the same density into a narrow viewport.

## Elevation & Depth

Flat by default. Hairlines (1px, Hairline or Hairline Strong) build hierarchy everywhere in the normal document flow. Shadow exists for exactly one purpose: signaling that content is floating above the page. The "Capacidades" navigation mega-menu is currently the only component that uses one (`shadow-e3`). `shadow-e1`, `shadow-e2`, and `shadow-e4` are defined tokens with no live callers yet — reserved for future floating UI (toasts, popovers, modals), not for giving a resting card or section visual weight.

### Shadow Vocabulary
- **e1** (`0 1px 2px rgba(16, 36, 62, 0.06)`): reserved, lightest tier — not yet used.
- **e2** (`0 1px 3px rgba(16, 36, 62, 0.08), 0 1px 2px rgba(16, 36, 62, 0.04)`): reserved — not yet used.
- **e3** (`0 4px 12px rgba(16, 36, 62, 0.08), 0 2px 4px rgba(16, 36, 62, 0.04)`): the mega-menu dropdown's floating panel. The system's one live shadow use.
- **e4** (`0 12px 24px rgba(16, 36, 62, 0.10), 0 4px 8px rgba(16, 36, 62, 0.05)`): reserved, heaviest tier — not yet used.

### Named Rules
**The Floating-Only Shadow Rule.** A shadow means an element is overlaying the page, not resting on it. Nothing in the normal document flow — a card, a section, a button at rest — ever carries one.

## Shapes

Radius scale runs xs (2px) through 2xl (24px), used by context rather than uniformly: `md` (8px) for buttons, inputs, and the mega-menu panel; `xl` (16px) for larger non-bordered contained blocks (CTA banners, the contact form panel). Nothing in the system is fully square (0px) or fully pill-shaped (9999px) — radius sits in a deliberately restrained middle register throughout. Borders, where used, are always 1px and always drawn from the Hairline or Hairline Strong tokens — never a heavier decorative border weight.

## Components

### Buttons
- **Shape:** rounded-md (8px) at every size.
- **Sizing:** three heights by context, not one universal button — 40px for the compact nav CTA, 44px for inner-page CTA-banner buttons, 48px for the Hero's two CTAs (the tallest, most prominent button is reserved for the Hero).
- **Primary:** Byte Blue background, white text, 24px horizontal padding (16px for the compact nav variant).
- **Secondary / Ghost:** white/surface background, 1px Hairline Strong border, Deep Navy text; hover background shifts to Paper Subtle rather than a color change.
- **Hover / Focus:** a 2px upward lift (`-translate-y-0.5`) plus, for the primary variant, a one-step-darker background — both over 200ms ease-out. Active/press returns to the resting position instantly. A paired icon (when present) shifts 2px on hover via `group-hover:translate-x-0.5`. Every hover/press transform carries a matching `motion-reduce:` reset so reduced-motion users land on the resting state, never a stuck mid-transition frame.

### Links
- **Style:** `.link-underline` — an underline that expands from the left edge on hover over 200ms, rather than a static underline or a color-only hover state.
- **Icon-paired links** ("Ver documentação", "Explorar Nosso Trabalho"): the underline plus a trailing arrow icon that shifts 2px on hover.

### Numbered Hairline List (signature component)
The system's one genuinely original list pattern, reused across capabilities, differentiation principles, portfolio entries, technology deliverables, and process phases alike: a large number in Byte Blue (or the relevant reserved accent — AI Violet for the one AI-specific entry) sits beside a title and description, separated from the next item by a hairline top rule. No card border, no background fill, no icon. This is the system's default answer to "how do I show a list of comparable things" — a bordered card is the exception, not the baseline.

### CTA Banner (signature component)
Every inner page ends with the same contained block: Paper Subtle background, `rounded-xl` (16px), generous padding (32–40px), a title and one-line subtitle on the left, a primary button on the right. Two heading treatments coexist by page — `h3`/20px (About, Portfolio, Cases, Technologies, Process, the Solutions hub) and `h2`/24px (the five Solutions sub-pages) — both are intentional variants of the same component, not drift to quietly unify.

### Cards / Containers
- The system avoids bordered "cards" as a default container. Where a contained block is genuinely needed (the contact form panel, CTA banners), it signals "contained" with a Paper Subtle background fill alone — never a border, never a shadow.
- **Corner style:** rounded-xl (16px) for these background-tinted containers.

### Navigation
Fixed header, translucent white background with backdrop blur; gains a 1px bottom hairline once the page scrolls (no color or height change). Primary links use `.link-underline`; "Capacidades" is a mega-menu flyout — the system's one shadow-bearing component. Mobile collapses into a slide-down panel with the same flyout content inlined rather than hidden behind a second tap.

### Scroll Reveal (signature motion pattern)
A generic viewport-reveal system (not a visual component, but load-bearing for the system's motion identity): content fades up 8–16px on scroll into view via IntersectionObserver, 600ms ease-out — deliberately slower than the 150/200/300ms interaction-timing system, so it reads as editorial pacing rather than a UI response. Server-rendered content is visible by default; JavaScript only ever adds the "in view" state, and a `<noscript>` override forces full visibility when JS never runs.

## Do's and Don'ts

### Do:
- **Do** use a number + hairline instead of a bordered card whenever presenting a list of three or more comparable items.
- **Do** keep Byte Blue (#1769E0) as the only color carrying interactive/action weight across the site.
- **Do** reserve AI Violet (#7257E8) exclusively for content that is literally about AI, and Electric Cyan (#13B8D1) exclusively for content that is literally about data, flow, or automation.
- **Do** pair every hover/press transform with a `motion-reduce:` reset.
- **Do** keep the B symbol's rotation scroll-driven — tied to user input, never a free-running animation loop.
- **Do** state an absence (a missing metric, client, or testimonial) rather than filling it — see PRODUCT.md's Evidence on Hand.

### Don't:
- **Don't** add a bordered-and-shadowed "card" as the default container — hairlines plus whitespace are this system's hierarchy tool.
- **Don't** use AI Violet or Electric Cyan decoratively, even once, outside their reserved domains.
- **Don't** introduce neon, glow, cyberpunk aesthetics, glassmorphism, or generic "AI startup" visual clichés — these are confirmed rejections of this brand, not open stylistic choices.
- **Don't** give a card, section, or button at rest a shadow — shadow is reserved for content floating above the page.
- **Don't** redesign, recolor, rotate, or distort the B symbol or logo; the official source of truth lives in the sibling `byteiq-master-branding` repository.
