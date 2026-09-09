export const SRS_COOLDOWN_MS = 60 * 1000; // 1 minuto (para testes)

export function isReadyForReview(lastStudiedMs: number | undefined): boolean {
  if (!lastStudiedMs) return false;
  return Date.now() - lastStudiedMs >= SRS_COOLDOWN_MS;
}
