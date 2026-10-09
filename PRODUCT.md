# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

CTOs and technical leadership at companies evaluating an external engineering partner for a specific AI, software, or automation project — not freelancers, not a generic digital agency. They arrive with a concrete technical problem (an AI/agent system, a platform rebuild, process automation, a legacy modernization) and are assessing technical credibility before starting a conversation.

## Product Purpose

ByteIQ Tecnologia is an AI Engineering & Software Development studio. It designs and builds intelligent software systems, autonomous agents, automation solutions, and high-reliability digital platforms for companies with complex technical demands. Success is a qualified technical lead — a contact-form submission with enough scope detail for ByteIQ's engineering leadership to return a preliminary technical assessment.

## Positioning

ByteIQ treats AI as a rigorous engineering discipline, not marketing hype: deterministic architectures, strict data contracts, and continuous observability, where most competing agencies and AI startups sell capability without engineering rigor. This is the claim a generic digital agency or AI-startup competitor could not truthfully make.

## Operating Context

- Brazilian B2B market; site content is in Portuguese (pt-BR).
- Institutional/corporate marketing site, not a SaaS product with logged-in users.
- Five solution disciplines: AI Agents & Autonomous Systems, Software & Web Applications, Automação Inteligente (Intelligent Automation), Engenharia de Qualidade (Quality Engineering), Consultoria em Tecnologia (Technology Consulting).
- Five-phase engineering methodology used across the site's process narrative: Discover, Architect, Build, Validate, Evolve.
- Contact flow makes explicit operational commitments: technical response within 24 business hours, NDA availability, a no-commitment diagnostic/architecture session.

## Capabilities and Constraints

- Next.js 16 (App Router), Tailwind CSS v4 (CSS-first `@theme` tokens, no `tailwind.config.js`), deployed via Cloudflare (`@opennextjs/cloudflare`).
- Contact form delivers email via Resend (`src/lib/email.ts`); real delivery requires `RESEND_API_KEY`/`EMAIL_FROM`/`EMAIL_TO` to be configured — the app fails visibly rather than silently if unset.
- Public contact channels (`CONTACT_EMAIL`, `CONTACT_PHONE`, `CONTACT_WHATSAPP`) are intentionally unset until ByteIQ confirms official channels — the site must keep showing no contact channel rather than a placeholder until real values are provided.
- Portfolio (`/portfolio`) and Cases (`/cases`) content is explicitly self-labeled as representative/illustrative ("catálogo estrutural, representativo", "exemplos representativos") — real engineering scenarios and real technology choices, not tied to named real clients.
- No metrics, revenue figures, user counts, client names, or testimonials exist anywhere on the site, and none should ever be fabricated — this is a deliberate, enforced content discipline, not an oversight.

## Brand Commitments

- Company name: ByteIQ Tecnologia ("ByteIQ").
- Domain: byteiq.tech (canonical `SITE_URL = https://www.byteiq.tech`).
- The logo and the B symbol are frozen. The official source of truth lives in the sibling repository `byteiq-master-branding`; never redesign, recolor, rotate, or distort the mark.
- Color discipline (from the official design system): Deep Navy `#10243E`, Byte Blue `#1769E0`, Electric Cyan `#13B8D1` (reserved for data/flow/automation contexts only), AI Violet `#7257E8` (reserved for AI contexts only).
- Typography: Inter, site-wide.
- Light institutional theme is the default for this marketing site; dark theme is reserved for dashboards/dev tools, not here.
- Explicit anti-patterns to avoid: neon, glow, cyberpunk aesthetics, glassmorphism, generic "AI startup" visual clichés.

## Evidence on Hand

- Portfolio/case-study narratives are confirmed as real anonymized work, presented as-is (not labeled as hypothetical in the rendered copy beyond the existing "representativo" framing already in place) — per explicit confirmation, do not add further disclaimers beyond what already exists.
- No confirmed public contact channel (email/phone/WhatsApp) exists yet. Do not invent one; the absence is intentional until ByteIQ provides real values.
- No clients, metrics, press, or testimonials exist to cite. State this absence to future work rather than filling it.

## Product Principles

1. AI is an engineering discipline, not a marketing accessory — determinism, data contracts, and observability over hype.
2. Never fabricate proof. No invented clients, metrics, revenue, or testimonials; absence is disclosed, never papered over.
3. Technology is a means to a business outcome, not a demonstration of sophistication — business problems drive technical decisions, not the reverse.
4. Systems are designed for the whole ecosystem the client operates in, not isolated screens or features.
5. Products are built to evolve — architecture decisions anticipate requirements and scale that haven't happened yet.
