# ByteIQ — Marketing Site

The public marketing site for **ByteIQ Tecnologia**, an AI Engineering & Software Development studio. Built with the Next.js App Router and deployed to Cloudflare Workers.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment target**: Cloudflare Workers, via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) and [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- **Contact form email delivery**: [Resend](https://resend.com), called directly via `fetch` (no SDK dependency)

## Local Setup

```bash
npm install
cp .env.example .env.local   # fill in the values you need locally — see below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server auto-reloads on file changes.

### Environment variables

Defined in `.env.example` (names only, no real values are committed). Copy it to `.env.local` for local development; in production these are set as Cloudflare Worker secrets (see Deployment below), not read from any `.env` file.

**Contact form email delivery** (`src/lib/email.ts`) — the form degrades gracefully (returns a clear error, never a false success) if any of these are missing:
- `EMAIL_PROVIDER` — currently only `resend` is implemented
- `RESEND_API_KEY`
- `EMAIL_FROM` — must be on a domain verified with the provider above
- `EMAIL_TO` — where contact-form submissions are delivered

**Public contact channels** (`src/lib/site.ts`) — optional; the site shows no contact info at all (never a placeholder) until these are set:
- `CONTACT_EMAIL`
- `CONTACT_PHONE`
- `CONTACT_WHATSAPP`

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server (`next dev`) |
| `npm run build` | Production Next.js build (`next build`) — used for local/Node hosting and as the first stage of the Cloudflare build |
| `npm run start` | Serve the production Next.js build locally (`next start`) |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | TypeScript type checking |

## Cloudflare / OpenNext Deployment Workflow

This project deploys to Cloudflare Workers, **not** Vercel. The adapter is [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare); routing, assets, and bindings are configured in `wrangler.jsonc`.

```bash
# 1. Build the Next.js app, then bundle it for the Cloudflare Workers runtime
npx opennextjs-cloudflare build

# 2. Preview the built Worker locally against a real Wrangler dev server
#    (closer to production behavior than `next dev`/`next start` — exercises
#    the actual Workers runtime, not Node)
npx opennextjs-cloudflare preview

# 3. Deploy to Cloudflare Workers
npx opennextjs-cloudflare deploy
# or, equivalently, once step 1 has produced .open-next/:
npx wrangler deploy
```

**Static assets and headers**: files under `public/` are served directly by Cloudflare's Workers Static Assets binding, bypassing the Next.js request pipeline entirely. Response headers (security headers, cache control) for those paths are controlled by `public/_headers`, **not** by `next.config.ts`'s `headers()` — that config only applies to local `next dev`/`next start`/Node hosting. Keep the two in sync if you change caching or security policy.

**Secrets**: production environment variables are Cloudflare Worker secrets, set independently of this repository and of `.env.local`:

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put EMAIL_FROM
npx wrangler secret put EMAIL_TO
npx wrangler secret put EMAIL_PROVIDER
```

Check what's currently provisioned (names only, values are never shown) with:

```bash
npx wrangler secret list
```

## Validation

Before merging or deploying, all of the following should pass clean:

```bash
npx tsc --noEmit                    # type check
npx eslint src/                     # lint
npm run build                       # Next.js production build
npx opennextjs-cloudflare build     # Cloudflare Workers bundle
npx wrangler deploy --dry-run       # validates the deploy config without deploying
```

There is no automated browser test suite in this repository. Visual, accessibility, and cross-browser regressions are currently verified manually (Chromium/Firefox/WebKit, standard breakpoints: 375 / 768 / 1024 / 1280 / 1440px) before merging UI changes.

## Deployment Troubleshooting

- **`wrangler deploy` fails with an auth error**: run `npx wrangler login`, then `npx wrangler whoami` to confirm the active account.
- **Contact form returns a 503 in production**: one or more of the `EMAIL_*` secrets isn't set on the Worker. Check with `npx wrangler secret list` and set any missing ones (see above). A 503 is the app failing closed by design, not a crash.
- **A brand/static asset 404s or serves stale content in production but works locally**: confirm the file exists under `public/` and that `public/_headers` doesn't have an unintentionally aggressive `Cache-Control` for its path — Workers Static Assets, not `next.config.ts`, governs these responses.
- **Local build works but `opennextjs-cloudflare build` fails**: delete `.open-next/` and `.next/` and rebuild from a clean state; check the installed `@opennextjs/cloudflare` version against the [compatibility table](https://opennext.js.org/cloudflare) for the Next.js version in `package.json`.
- **Changes to `public/` assets don't appear after deploying**: `.open-next/` is a generated build artifact (gitignored) — it must be regenerated (`npx opennextjs-cloudflare build`) after any change under `public/`, it does not update incrementally from source.
