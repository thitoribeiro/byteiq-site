import type { NextConfig } from "next";

/**
 * Security + caching headers. This is the parallel, non-authoritative copy:
 * the real deployment target (Cloudflare Workers Static Assets, see
 * wrangler.jsonc) serves /public/* files straight from the Assets binding,
 * bypassing this Next.js server entirely — `public/_headers` is what
 * actually governs those responses in production. This config exists so
 * `next dev`/`next start` (and any future non-Cloudflare hosting) see the
 * same headers, and so these can be verified against a real local server.
 */
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=15552000" },
  {
    key: "Content-Security-Policy",
    // 'unsafe-inline' on script/style is required today: this app has no
    // nonce-issuing middleware, and Next.js's App Router hydration payload
    // ships as inline <script> tags, while several components use inline
    // style={{}} for background-image positioning. Tightening this further
    // needs a nonce-based middleware pass — a larger, separate change, not
    // bundled into a headers-only hardening pass.
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
};

export default nextConfig;
