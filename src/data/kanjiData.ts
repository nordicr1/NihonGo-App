import { KanjiItem } from '../types';
import { KANJI_N5 } from './kanjiN5';
import { KANJI_N4 } from './kanjiN4';
import { KANJI_N3 } from './kanjiN3';
import { KANJI_N2_N1 } from './kanjiN2N1';

export { KANJI_N5 } from './kanjiN5';
export { KANJI_N4 } from './kanjiN4';
export { KANJI_N3 } from './kanjiN3';
export { KANJI_N2_N1 } from './kanjiN2N1';

export const KANJI_DATA: KanjiItem[] = [
  ...KANJI_N5,
  ...KANJI_N4,
  ...KANJI_N3,
  ...KANJI_N2_N1
];
