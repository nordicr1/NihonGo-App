import { VocabItem } from '../types';
import { VOCAB_N5 } from './vocabN5';
import { VOCAB_N4 } from './vocabN4';
import { VOCAB_N3 } from './vocabN3';
import { VOCAB_N2_N1 } from './vocabN2N1';

export { VOCAB_N5 } from './vocabN5';
export { VOCAB_N4 } from './vocabN4';
export { VOCAB_N3 } from './vocabN3';
export { VOCAB_N2_N1 } from './vocabN2N1';

export const VOCAB_DATA: VocabItem[] = [
  ...VOCAB_N5,
  ...VOCAB_N4,
  ...VOCAB_N3,
  ...VOCAB_N2_N1
];
