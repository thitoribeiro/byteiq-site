/**
 * Best-effort, in-memory sliding-window rate limit. No external store
 * (Redis/Upstash) is configured for this project, so this is process-local:
 * it resets on redeploy/cold start and does NOT share state across
 * serverless instances or regions. That's a real limitation, not a
 * theoretical one — on a multi-instance deployment an attacker distributed
 * across instances isn't meaningfully throttled. It still stops the common
 * case (a single client hammering the endpoint) at zero infra cost. Upgrade
 * to a shared store (e.g. Upstash Redis) if abuse is observed in production.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return false;
}
