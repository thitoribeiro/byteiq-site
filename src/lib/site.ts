/**
 * Single source of truth for the site's public URL and contact channels.
 * Centralized so the domain and contact info are never duplicated across
 * metadata exports, sitemap.ts, robots.ts, the footer, etc.
 */
export const SITE_URL = "https://www.byteiq.com.br";

export function absoluteUrl(path: string = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}` || SITE_URL;
}

/**
 * Real contact channels, read from environment configuration.
 * None are hard-coded: until these are set, the UI shows no channel
 * rather than a fabricated one. Populate them in `.env.local` (see
 * `.env.example`) once ByteIQ confirms the official address/number.
 */
export const CONTACT = {
  email: process.env.CONTACT_EMAIL || undefined,
  phone: process.env.CONTACT_PHONE || undefined,
  whatsapp: process.env.CONTACT_WHATSAPP || undefined,
} as const;
