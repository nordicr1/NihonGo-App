export const SRS_COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 horas

export function isReadyForReview(lastStudiedMs: number | undefined): boolean {
  if (!lastStudiedMs) return false;
  return Date.now() - lastStudiedMs >= SRS_COOLDOWN_MS;
}
