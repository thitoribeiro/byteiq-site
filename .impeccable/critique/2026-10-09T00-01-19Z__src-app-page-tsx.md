---
target: the homepage (src/app/page.tsx)
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/thitoribeiro/Workspace/byteiq-site/src/app/page.tsx"
target_fingerprint: "sha256:3e085d7e349845dcb4c1112532f24db24b4d4454f4951e07742b4dc22ceef146"
target_path: /Users/thitoribeiro/Workspace/byteiq-site/src/app/page.tsx
timestamp: 2026-10-09T00-01-19Z
slug: src-app-page-tsx
---
Method: dual-agent (A: aac27c6377f07303b · B: aa4365a05c68facab)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Hover/focus/scroll feedback all work; no in-page "current section" indicator (minor, typical for marketing pages) |
| 2 | Match System / Real World | 3/4 | Strong technical vocabulary for the audience, but Portfolio section's English category labels break an otherwise all-Portuguese register |
| 3 | User Control and Freedom | 3/4 | Standard nav/back behavior; mega-menu Escape-dismiss not verified |
| 4 | Consistency and Standards | 2/4 | Hero CTA hierarchy inverts the site's own convention; homepage capability list (4 items) doesn't match the real 5-item solutions taxonomy used in nav/footer |
| 5 | Error Prevention | 4/4 | No error-prone flows on this page (no form on the homepage) |
| 6 | Recognition Rather Than Recall | 3/4 | Good icon/label use in nav; the taxonomy mismatch forces visitors to reconcile two mental models |
| 7 | Flexibility and Efficiency | n/a | Not applicable — Persuade-mode landing page, no repeat-use workflow |
| 8 | Aesthetic and Minimalist Design | 4/4 | Flat-by-default, disciplined whitespace and hairline use, strongly on-brand |
| 9 | Error Recovery | 4/4* | *Untested — no error-prone interaction exists on this page to evaluate; reflects absence of problems, not verified recovery design |
| 10 | Help and Documentation | n/a | Not applicable — Persuade-mode landing page |
| **Total** | | **26/32** | **Good (81%)** |

## Design Specificity Verdict

**LLM assessment**: Mostly grounded, with one weak spot. The numbered-hairline-list pattern, the blueprint/technical-drafting voice, the restrained blue-only interactive palette, and the Hero's scroll-driven B rotation are specific enough that a generic SaaS/agency template could not use this composition unchanged. The Portfolio section in particular (real-sounding architecture decisions, named technologies, explicit "Desafio/Arquitetura/Resultado" structure) is convincingly engineering-specific. The weak spot: the Hero headline/subhead and the Positioning statement are well-written but generic enough that most competent software consultancies — AI-focused or not — could run them verbatim. The specificity lives below the fold; the first screen a visitor sees is comparatively interchangeable copy, just well-typeset.

**Deterministic scan**: `impeccable detect --json` against `src/app/page.tsx`, `src/components/home`, and `src/components/layout` returned a clean `[]` (exit 0) — confirmed not a broken/misconfigured run via a sanity check against a throwaway file with an obvious bounce-easing anti-pattern, which the same binary correctly flagged. The live browser overlay (injected via the detector's own `detect.js`, not the static CLI pass) surfaced 13–14 itemized findings, but nearly all trace to patterns this project's own DESIGN.md explicitly sanctions:
- `overused-font` ("Inter, 100% of text") — DESIGN.md: "single-typeface by design."
- `oversized-h1` (72px Hero H1) — DESIGN.md's documented Display token, for exactly the one element it names.
- `kicker-above-heading` ×5 (every section eyebrow) — DESIGN.md's documented Label/eyebrow pattern.
- `hero-eyebrow-chip` + `all-caps-body` — both trace to the same Hero eyebrow span styled at DESIGN.md's 11px Label spec; the length-based heuristic appears to misclassify it as body copy by character count despite its font-size.
- `buried-raster` (Hero's 5%-opacity blueprint texture) — DESIGN.md's named signature texture at its documented faint opacity.

One finding is **not** a false positive and has no DESIGN.md basis to excuse it: `low-contrast` ×4, footer `text-navy-400` (#5A78A0) on `navy-900` (#10243E) = **3.44:1**, below the 4.5:1 AA threshold for normal-size text. This is independently corroborated by Assessment A's own manual contrast computation from the same hex values — two independent methods agree.

Minor deterministic note: the overlay's own group header claimed "13 anti-patterns found" while the itemized lines inside it total 14 — a count-mismatch in the tool's own output, not a project defect.

**Visual overlays**: Injection into the live page succeeded (DOM mutation preflight passed, the detector script loaded and logged its findings to the console), but the browser session Assessment B used was headless and was closed immediately after capturing console output, and its preview server was stopped per protocol. There is currently no live **[Human]** tab with a visible overlay for you to inspect — the findings above are a faithful transcript of the console output, not a claim that an overlay is sitting open in your browser right now.

## Overall Impression

This is a disciplined, on-brand page that mostly earns its "engineering studio" positioning — the Portfolio and Technologies sections do real persuasive work for a skeptical technical buyer, and the visual system (numbered hairline lists, restrained color, flat surfaces) is applied consistently. The gap is at the two moments that matter most for conversion: the Hero's first-viewport button hierarchy contradicts the site's own stated success metric, and the Final CTA — the highest-stakes click on the page — offers no reassurance even though the product itself defines specific friction-reducers (24-business-hour response, NDA, no-commitment session) that simply never surface near the button that would benefit from them most.

## What's Working

1. **The numbered-hairline-list pattern, executed consistently** — Capabilities, Principles, and Process all use the same large-number-plus-hairline grammar with zero bordered cards, reading as one disciplined system rather than four different component authors.
2. **Portfolio section's Desafio/Arquitetura/Resultado structure** — the single best piece of persuasion on the page for a CTO audience: falsifiable, architecture-level detail (LangGraph orchestration, tenant-isolated Postgres partitioning, RabbitMQ retry semantics) builds credibility without a single fabricated metric, consistent with the product's deliberate no-fake-proof discipline.
3. **The Hero B-symbol's scroll-driven rotation** — confirmed rendering correctly at rest, a genuinely distinctive and restrained motion signature rather than a generic loop, and respects `prefers-reduced-motion` per the code.

## Priority Issues

**[P1] Footer text fails WCAG AA contrast.** `src/components/layout/SiteFooter.tsx` — the `text-navy-400` (#5A78A0) on `bg-navy-900` (#10243E) combination computes to 3.44:1, against a 4.5:1 requirement for normal-size text. It affects the city/availability line, the URL, and the copyright row — i.e. it's live on every page's footer, not just the homepage. Confirmed by two independent methods (manual hex computation and the live detector), which is why it's ranked above the subjective findings below despite being a "minor-sounding" visual issue.
**Why it matters**: a real accessibility failure that's easy to miss because it "reads fine" at a glance; it's exactly the kind of gap a methodical evaluator (or an actual low-vision visitor) will catch immediately.
**Fix**: swap to `navy-300` (#8AA2C2), which computes to 5.97:1 against the same background.
**Suggested command**: `/impeccable polish src/components/layout/SiteFooter.tsx`

**[P1] Hero's primary CTA contradicts the site's own conversion goal.** `src/components/home/Hero.tsx` — "Explorar Nosso Trabalho" (→ `/portfolio`) is the filled primary button and "Iniciar uma Conversa" (→ `/contact`) is the secondary outline button. Everywhere else on the page (header nav, Final CTA) "Iniciar uma Conversa" is the primary filled action. PRODUCT.md defines success as a contact-form lead, yet the very first decision offered visually subordinates that action.
**Why it matters**: the first-viewport button a visitor sees is the one most likely to be clicked reflexively; right now it points attention away from the action the business actually needs.
**Fix**: swap the Hero's two button treatments so "Iniciar uma Conversa" is primary-filled, matching the header/Final-CTA convention.
**Suggested command**: `/impeccable layout src/components/home/Hero.tsx`

**[P1] Homepage capability taxonomy doesn't match the site's real solutions taxonomy.** `src/components/home/CapabilitiesSection.tsx` lists 4 items (Produtos Digitais / Sistemas Inteligentes / Engenharia de Software / Engenharia de Produto); `SiteHeader.tsx` and `SiteFooter.tsx` list a different, 5-item set (Agentes de IA & Sistemas Autônomos / Software & Aplicações Web / Automação Inteligente / Engenharia de Qualidade / Consultoria em Tecnologia). A visitor who reads "O que construímos" then opens "Capacidades" in the nav is looking at two unrelated frameworks for the same question.
**Why it matters**: this is exactly the kind of inconsistency a careful evaluator uses to judge whether a site was proofread end-to-end — and it undermines the "rigorous engineering discipline" positioning claim from PRODUCT.md by looking unrigorous about its own structure.
**Fix**: either visibly label the homepage list as a curated subset of the 5 solutions (with matching names), or expand it to the same 5.
**Suggested command**: `/impeccable clarify src/components/home/CapabilitiesSection.tsx`

**[P2] No reassurance copy at the Final CTA, the page's highest-stakes decision point.** `src/components/home/FinalCtaSection.tsx` — "Tem um problema complexo? / Vamos transformá-lo em algo que funciona." carries no mention of the 24-business-hour response, NDA availability, or no-commitment diagnostic session that PRODUCT.md defines as this site's actual friction-reducers at the point of contact.
**Why it matters**: by the time a visitor reaches this section they've been reading architecture detail for a while; this is the one moment that should lower the remaining risk of clicking, and right now it does none of that work.
**Fix**: add one reassurance line near the CTA buttons, e.g. "Resposta técnica em até 24h úteis. NDA disponível."
**Suggested command**: `/impeccable clarify src/components/home/FinalCtaSection.tsx`

**[P3] English category labels in an otherwise all-Portuguese Portfolio section.** `src/components/home/PortfolioSection.tsx`'s `category` values ("AI Agents & Knowledge Systems," "SaaS & Cloud Platforms," "Intelligent Automation") are the only English strings on the entire homepage.
**Why it matters**: for a pt-BR institutional voice, this reads as unlocalized placeholder text rather than a deliberate choice.
**Fix**: translate to pt-BR, or confirm this is an intentional industry-tag convention and state that intent somewhere.
**Suggested command**: `/impeccable clarify src/components/home/PortfolioSection.tsx`

## Persona Red Flags

**Jordan (confused first-timer)**: Reads "Capacidades" in the nav, then scrolls to "O que construímos" and sees a 4-item list with different names than the menu he just saw — seeds low-grade confusion right at the point he's forming a mental model of what ByteIQ does. The Hero's two buttons being visually equal-but-inverted-priority also means Jordan's eye is drawn to "go look at work" before "talk to someone," even though talking to someone is the intended outcome.

**Riley (deliberate stress tester)**: Will specifically cross-reference "Capacidades" against "O que construímos" — the 4-vs-5 taxonomy mismatch is exactly what this persona is built to catch, and reads as a sign the site wasn't proofread end-to-end. Riley will also notice the Final CTA offers no operational specifics (response time, NDA) despite the rest of the site clearly being written by people who think in explicit commitments — the absence reads as inconsistent rigor, not restraint.

**Casey (distracted mobile user)**: On the 375px view, the Hero's B-symbol watermark sits behind the H1 at 10% opacity without hurting legibility — that part is fine. Casey's real friction point is the Portfolio section on mobile: each case study stacks category/title/description/tech-list, then Desafio/Arquitetura/Resultado as three more text blocks — roughly 10–12 short paragraphs per case, 30+ total before reaching the CTA. A distracted scroller is unlikely to read all three in full, and the Final CTA (per the P2 finding above) gives Casey nothing extra to tip the decision once there.

## Minor Observations

- `src/components/home/ProcessSection.tsx` renders all 5 phases (Discover…Evolve) in a single `sm:grid-cols-5` row, one item over the cognitive-load chunking guideline (≤4/group). Low severity — each item is a single word plus one short line — but a real deviation worth noting if this section is revisited.
- The mega-menu panel ("Capacidades") correctly uses the system's one sanctioned shadow (`shadow-e3`) and solidly occludes content behind it — no transparency bleed-through.
- Footer contact block correctly shows no email/phone/WhatsApp (intentionally unset per PRODUCT.md) rather than a placeholder — correct behavior, not a bug.
- "Ver Catálogo Completo" and "Estudos de caso detalhados" are two competing "see more" links in the same row in the Portfolio section; not confirmed as a real issue, but worth a second look.
- Several detector findings (overused-font, oversized-h1, kicker-above-heading ×5, hero-eyebrow-chip, all-caps-body, buried-raster) are false positives against this project's own DESIGN.md — see Design Specificity Verdict above for the reasoning per finding.

## Questions to Consider

1. If the stated success metric is a qualified contact-form lead, why does the Hero spend its one primary-button slot on "Explorar Nosso Trabalho" instead of the contact action — is "see proof first" genuinely a better-converting sequence for this audience, or did the button hierarchy just drift from the header's own convention?
2. The homepage's capability list and the site's actual 5-discipline solutions taxonomy disagree — is the homepage list meant to be a curated "greatest hits" subset, and if so, should it say that explicitly, or should it just be the same five?
3. PRODUCT.md treats the 24-hour response / NDA / no-commitment-session trio as the site's core trust mechanism for reducing contact friction — why does none of that appear within view of the one button whose entire job is to get someone to click it?
