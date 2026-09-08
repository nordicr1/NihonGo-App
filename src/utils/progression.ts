export function getRequiredLevel(
  type: 'kana' | 'kanji' | 'grammar' | 'vocab',
  jlpt: string,
  category?: string
): number {
  if (type === 'kana') return 1;

  if (type === 'kanji') {
    switch (jlpt) {
      case 'N5': return 2;
      case 'N4': return 6;
      case 'N3': return 12;
      case 'N2': return 18;
      case 'N1': return 25;
      default: return 1;
    }
  }

  if (jlpt === 'N5') {
    if (!category) return 1;
    const catLower = category.toLowerCase();
    if (catLower.includes('cumprimento') || catLower.includes('básico') || catLower.includes('basico') || catLower.includes('pronomes')) return 1;
    if (catLower.includes('partícula') || catLower.includes('particula')) return 2;
    if (catLower.includes('verbo') || catLower.includes('conjugação')) return 3;
    if (catLower.includes('adjetivo')) return 4;
    return 4;
  }

  switch (jlpt) {
    case 'N4': return 6;
    case 'N3': return 12;
    case 'N2': return 18;
    case 'N1': return 25;
    default: return 1;
  }
}
