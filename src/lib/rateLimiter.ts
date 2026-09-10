/**
 * In-memory sliding window rate limiter
 * 3 requests per 15 minutes per IP address
 */

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 3;

/**
 * Periodically purge stale entries from memory to prevent memory leaks
 */
function cleanupStore(now: number) {
  for (const [ip, record] of rateLimitStore.entries()) {
    const validTimestamps = record.timestamps.filter((ts) => now - ts < WINDOW_MS);
    if (validTimestamps.length === 0) {
      rateLimitStore.delete(ip);
    } else {
      rateLimitStore.set(ip, { timestamps: validTimestamps });
    }
  }
}

/**
 * Checks if a given IP has exceeded the allowed rate limit.
 * Returns { success: true } if allowed, or { success: false, retryAfterSeconds } if blocked.
 */
export async function checkRateLimit(ip: string): Promise<{ success: boolean; retryAfterSeconds?: number }> {
  const now = Date.now();
  
  // Cleanup occasionally
  if (Math.random() < 0.1) {
    cleanupStore(now);
  }

  const record = rateLimitStore.get(ip) || { timestamps: [] };
  const recentTimestamps = record.timestamps.filter((ts) => now - ts < WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS) {
    const oldestTimestamp = recentTimestamps[0];
    const retryAfterMs = WINDOW_MS - (now - oldestTimestamp);
    const retryAfterSeconds = Math.max(1, Math.ceil(retryAfterMs / 1000));
    return {
      success: false,
      retryAfterSeconds,
    };
  }

  recentTimestamps.push(now);
  rateLimitStore.set(ip, { timestamps: recentTimestamps });

  return { success: true };
}
