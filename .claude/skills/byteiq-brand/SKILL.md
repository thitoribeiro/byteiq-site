---
name: byteiq-brand
description: Use when designing, redesigning, critiquing, or implementing any part of the ByteIQ marketing site (byteiq.tech) — Home, inner pages, navigation, footer, components, copy, imagery, or motion. Enforces ByteIQ's official brand identity, product positioning, visual design system ("The Blueprint Studio"), content integrity (no fabricated proof), and engineering quality (accessibility, responsiveness, performance, reduced motion) for every website design and implementation task in this repository.
version: 1.0.0
user-invocable: true
argument-hint: "[target]"
license: Proprietary
---

ByteIQ Tecnologia is an AI Engineering & Software Development studio. This site's job is to read like a serious engineering studio's working document, not a generic AI-startup landing page — and to never claim proof it doesn't have. This skill carries the brand/product authority that every design and implementation decision on this site must check against. It governs *what the brand allows*; the `impeccable` skill (if present) governs *how a design task is run* — use both together, this one supplies the ByteIQ-specific facts and constraints.

**Brand consistency is not layout preservation.** What's frozen is a short, specific list: the official B symbol/wordmark/logo files, the color tokens, Inter typography, the product positioning in PRODUCT.md, and The Blueprint Studio as the creative direction/north star. Everything else — section structure, component choice, layout, composition, motion, interaction — is open to meaningfully ambitious redesign. The objective is a premium, distinctive, visually memorable Technology & AI Engineering Studio website that still unmistakably belongs to this brand, not a site frozen at its current layout.

## Setup — read before writing anything

1. Read `PRODUCT.md` and `DESIGN.md` at the project root, completely.
2. Inspect `.impeccable/design.json`, `src/app/globals.css`, the brand assets under `public/brand/`, and the existing UI components relevant to the task.
3. If the sibling repository `../byteiq-master-branding` is accessible, read its `DESIGN.md` and skim `01_BRAND/` (frozen logo/symbol/pattern assets, forbidden-imagery list) and `02_DESIGN_SYSTEM/tokens/` (primitive color/typography/spacing tokens). It is the frozen brand authority behind everything in this repo's own DESIGN.md.
4. Read `AGENTS.md` and `CLAUDE.md` — they carry an unrelated but load-bearing caveat: this project's Next.js may differ from training data, and the resolved `node_modules/next/dist/docs/` must be checked before writing framework code.
5. Only then write or edit. Re-read this skill's checklists (sections 7–8 below) before marking any brand/design task complete.

## 1. When to activate

Activate on any task that touches:
- Site copy, page structure, navigation, or footer content in `src/app/`, `src/components/`.
- Visual design: color, typography, spacing, shadows, radii, layout, imagery, icons, or motion anywhere in the codebase.
- New pages, sections, or components for the ByteIQ site.
- Design review, critique, audit, or "redesign" requests for this site.
- Brand asset usage (logo, symbol, patterns) from `public/brand/` or the sibling `byteiq-master-branding` repo.
- Accessibility, responsiveness, or performance work on rendered UI.
- Any content change that could touch claims, evidence, metrics, or testimonials.

Do **not** treat this skill as a freeze order. The user has explicitly allowed meaningful improvements to layout, composition, typography, motion, and UX — this skill exists to keep those improvements on-brand and truthful, not to block them.

## 2. Source-of-truth hierarchy

When sources agree, follow all of them. When they conflict, resolve in this order:

1. **`../byteiq-master-branding` (sibling repo)** — the frozen brand authority. Logo/symbol files, the forbidden-imagery list, the primitive color/typography/spacing tokens, and the WCAG standard originate here and are never overridden by anything in this repo.
2. **This repo's `DESIGN.md`** — the confirmed, deliberate *application* of that brand to this specific marketing site ("The Blueprint Studio"). The master repo's own design system targets a broader product family (dashboards, AI chat/agent components, dark theme) that mostly doesn't apply here; where this site's DESIGN.md makes a specific, documented choice (numbered hairline lists over cards, light-only theme, asymmetric grids, the named rules), that choice wins for this site.
3. **`PRODUCT.md`** — product truth: audience, positioning, operating context, evidence constraints, brand commitments. Governs what the site is allowed to *say* and *claim*, independent of how it looks.
4. **`.impeccable/design.json`** — a machine-readable mirror of DESIGN.md (tonal ramps, shadow/motion values, breakpoints, canonical component snippets). Use it for exact values; it is not an independent authority.
5. **`src/app/globals.css`** — the living implementation: the actual Tailwind v4 `@theme` tokens and semantic classes (`--color-brand`, `--color-ai`, `--color-data`, `.text-overline`, `.reveal`, etc.) to reach for in code. Never hand-invent a hex value or a new ad-hoc class when a token already exists here.
6. **Existing components/pages** — concrete precedent. Reuse an existing pattern (`CTABanner`, `Breadcrumb`, the numbered-hairline-list markup, `Reveal`) before inventing a new one for the same job.

The B symbol, wordmark, and logo files are frozen at the top of this hierarchy and are never redesigned, recolored, rotated, or distorted by anything lower in the list — including a future redesign brief. Motion applied *to* a frozen asset is a different question from altering the asset itself: the Hero's scroll-driven `rotateY` (`HeroSymbol.tsx`) remains the signature anchor, and additional purposeful motion elsewhere on the site is open territory — see the Motion principle in section 4 and the discipline required in section 5.

## 3. Brand identity rules

- Company: **ByteIQ Tecnologia** ("ByteIQ"). Domain: byteiq.tech.
- The **B symbol** and **wordmark/logo** are approved and frozen. Never redesign, recolor, rotate, distort, or recreate them — use the existing files under `public/brand/` (or the sibling repo's `01_BRAND/logo/` and `01_BRAND/symbol/` as source when a new export is genuinely needed).
- **Forbidden imagery**, confirmed rejections of this brand, not open stylistic choices: brain, robot, eye, globe, lightbulb, generic chip/circuit, humanoid figures, neon/glow, cyberpunk aesthetics, excessive glassmorphism, permanent dark backgrounds, "AI purple gradient."
- **Color hierarchy and ratio**: Neutrals → Deep Navy → Byte Blue → Electric Cyan → AI Violet → semantic colors (error, etc.), in roughly 70–80% neutral / 15–20% navy-blue / ≤5% accent visual proportion.
- **Byte Blue** (`--color-brand`, #1769E0) is the only color carrying interactive/action weight anywhere on the site (The One Voice Rule).
- **AI Violet** (`--color-ai`, #7257E8) is reserved exclusively for content that is literally about AI. **Electric Cyan** (`--color-data`, #13B8D1) is reserved exclusively for content that is literally about data, flow, or automation (The Reserved Accent Rule). Neither is ever used decoratively outside its domain.
- **Gradients** are an accent reserved for the symbol itself, a punctual institutional hero, campaigns, motion, or special visualizations — never in standard backgrounds, cards, inputs, tables, navbar, or ordinary buttons.
- **Theme**: light institutional is the only theme for this marketing site. Dark theme is reserved for dashboards/dev tools/AI interfaces elsewhere in the ByteIQ product family — never here.
- **Typography**: Inter only, site-wide. Hierarchy is built from size/weight/letter-spacing alone, never a second typeface.

## 4. Visual design principles

- **North Star: "The Blueprint Studio."** Visual grammar borrows from technical drafting — large reference numbers, hairlines as ruled lines, a faint blueprint-pattern texture behind the Hero and select deeper pages. The site reads as an engineering studio's working document, not a product showcase.
- **Numbered Hairline List** is the system's preferred, established pattern for presenting a list of 3+ comparable items (capabilities, principles, portfolio entries, process phases, deliverables) — a default starting point, not a mandatory layout. Use an alternative composition when it gives a demonstrable improvement in hierarchy, storytelling, usability, or visual sophistication for that specific content; don't reach for an alternative just for novelty. A bordered-and-shadowed card as the generic, unconsidered default container is still discouraged (see the Floating-Only Shadow Rule below); a genuinely contained block (CTA banners, the contact form panel) still signals "contained" with a `Paper Subtle`/`bg-subtle` fill alone, not a border or shadow, whichever layout pattern surrounds it.
- **Flat by default; shadow is floating-only** (The Floating-Only Shadow Rule). `shadow-e3` is currently the system's one live shadow use (the mega-menu panel). Nothing resting in normal document flow — a card, section, or button at rest — ever carries a shadow.
- **The One Uppercase Rule**: `.text-overline` is the only sanctioned uppercase/tracked treatment anywhere in the system, used sparingly for eyebrow labels above a headline.
- **Layout**: container width is content-density-dependent (`max-w-5xl` for text-heavy pages, `max-w-7xl` for grid-heavy pages). Home's grids are asymmetric by default (7/5, 4/8 splits, alternating left/right); extending that asymmetry to inner pages is a known intentional next step, not an inconsistency to silently "fix" without discussing scope.
- **Mobile is redesigned per surface**, not a shrunk desktop layout (e.g. the Hero symbol becomes a background watermark below `lg`, not a smaller foreground version).
- **Motion**: the Hero B-symbol's scroll-driven `rotateY` (never time-based or free-running) remains the system's signature motion and stays untouched in mechanism. Beyond it, additional purposeful, engineering-inspired motion — interactive diagrams, scroll-driven transitions, microinteractions — is encouraged where it genuinely improves the experience; motion isn't limited to hover lifts and scroll reveals. Every new motion must still clear the accessibility, reduced-motion, and performance discipline in section 5 before it ships — motion that can't meet that bar doesn't ship, however impressive it looks.
- Improving any of the above is allowed and encouraged when it serves the brief — the constraint is staying recognizably ByteIQ (the frozen assets, color tokens, typography, and positioning), not preserving today's specific layout or component choices unchanged.

## 5. UX and accessibility requirements

- **Contrast**: WCAG AA minimum — 4.5:1 for normal text, 3:1 for large text/UI components. Check any new text-on-background pairing against the actual token hex values before shipping; don't assume a color "reads fine."
- **Focus**: every interactive element keeps a visible focus indicator (`:focus-visible` outline, 2px, Byte Blue) — never remove it for aesthetics.
- **Keyboard**: everything operable by mouse must be operable by keyboard; don't ship click-only interactions.
- **Reduced motion**: respect `prefers-reduced-motion` in two independent layers — a JS `matchMedia` early-return before attaching motion listeners/logic, and a CSS media query that force-resets `transform`/`transition`/`animation` regardless of JS state (match Tailwind v4's actual property name, e.g. standalone `translate`, not `transform`, for `-translate-y-*` utilities). Both layers must be present for any new motion, not just one.
- **Responsive**: verify at 375 / 768 / 1024 / 1280 / 1440px. No horizontal overflow, no content clipped or crowded at any of these.
- **Performance**: keep Server Components the default; add `"use client"` only where real interactivity requires it. Don't introduce heavy client JS for what a CSS-only or server-rendered solution can do (see the existing `Reveal`/IntersectionObserver pattern, which is server-rendered-visible-by-default with a `<noscript>` override).
- **Touch targets**: interactive elements should be comfortably tappable (≥44px touch target where feasible).
- **Color is never the only signal**: status, state, or category distinctions pair color with text or an icon, never color alone.

## 6. Content integrity requirements

- All site copy is **Brazilian Portuguese (pt-BR)**. Don't introduce English strings into running copy (category labels, section headers, body text) without a deliberate, stated reason.
- **Never fabricate** clients, testimonials, metrics, revenue figures, user counts, press mentions, or commercial claims. If evidence doesn't exist, say so in the work rather than inventing it or silently dropping the gap — PRODUCT.md's "Evidence on Hand" section is the record of what's real and what's deliberately absent.
- Portfolio/Cases content is explicitly self-labeled representative/illustrative ("catálogo estrutural, representativo") — preserve that framing; don't present it as unlabeled real client work, and don't add further hedging disclaimers beyond what's already there without being asked.
- Keep terminology **consistent across surfaces** that describe the same thing — e.g. a capability/solution named one way in the header mega-menu and footer should not be presented as a different, unreconciled list elsewhere on the same page; if a shorter or curated version is intentional, label it as such rather than leaving two silently conflicting frameworks.
- **Distinguish a verified commercial commitment from a claim merely present in existing copy.** PRODUCT.md records the 24-business-hour response, NDA availability, and no-commitment diagnostic session as current site copy, not as independently confirmed, permanent brand facts. Where they already appear, preserve them accurately — don't soften, exaggerate, or silently drop them. But don't promote them into new sections, headlines, or additional surfaces, and don't treat their presence in copy as license to formalize or intensify them further (e.g. turning "24 business hours" into a harder SLA, or adding them somewhere new) unless the business owner explicitly confirms the commitment first.
- Public contact channels (email/phone/WhatsApp) stay absent rather than placeholder values until PRODUCT.md records real ones.

## 7. Implementation workflow

1. **Investigate before editing.** Check the literal request against DESIGN.md/PRODUCT.md/the actual rendered code before complying — if a request's premise is wrong or it would violate a frozen rule (forbidden imagery, logo/symbol integrity, fabricated proof), say so and ask rather than either silently expanding scope or mechanically complying with something that won't work.
2. **Reuse before inventing.** Check `src/components/` and the Numbered Hairline List / CTA Banner / Breadcrumb / Reveal patterns before writing a new component or token for a job an existing one already does.
3. **No duplicate or conflicting design systems.** Don't introduce a second button/card/shadow/color vocabulary alongside the one in `globals.css` and DESIGN.md, even for a single new section.
4. **Minimal-scope diffs.** Touch only what the task requires; don't bundle unrelated refactors or "while I'm here" improvements into a brand/content fix.
5. **Disclose deviations.** If a recommendation from a prior audit/critique or a literal instruction would conflict with a rule in this skill once you're actually implementing it, implement the safe subset and say plainly what was deviated from and why — don't force a color/content rule to "comply" with a brief that didn't anticipate the conflict.
6. **Never commit or push** unless the user explicitly asks in that turn.

## 8. Quality gates and validation checklist

Before calling any brand/design/content task on this site done:

- [ ] `npx tsc --noEmit`, `npm run lint` (or `npx eslint src/`), and `npm run build` all pass clean.
- [ ] Real-browser check (not just a mental read of the JSX) at 375 / 768 / 1024 / 1280 / 1440px — no console errors, no horizontal overflow, no broken reveal/motion state.
- [ ] `prefers-reduced-motion` verified for any new or touched motion — both the JS and CSS layers.
- [ ] No forbidden imagery introduced (brain/robot/eye/globe/neon/glow/cyberpunk/glassmorphism/permanent dark/"AI purple gradient").
- [ ] AI Violet used only where the subject is literally AI; Electric Cyan used only where the subject is literally data/flow/automation; no new gradient outside the symbol/hero/campaign exception.
- [ ] Any new or changed text-on-background color pairing meets WCAG AA contrast (checked against actual token hex values, not assumed).
- [ ] No fabricated client, metric, testimonial, or commercial claim introduced; any evidence gap is stated, not papered over.
- [ ] No operational/commercial commitment (response time, NDA, guarantees) was promoted into a new location or formalized further without explicit business-owner confirmation.
- [ ] All new copy is pt-BR, and terminology matches equivalent lists/labels elsewhere on the site (nav, footer, related sections).
- [ ] The B symbol/wordmark/logo files are unmodified, unless the task is explicitly about them and still routes through the sibling `byteiq-master-branding` repo as source.
- [ ] Color tokens, Inter typography, and The Blueprint Studio creative direction remain intact even where layout, components, or motion changed meaningfully.
- [ ] No commit or push made unless explicitly requested in the current turn.
