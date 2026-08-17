import { GrammarItem } from '../types';
import { GRAMMAR_N5 } from './grammarN5';
import { GRAMMAR_N4 } from './grammarN4';
import { GRAMMAR_N3 } from './grammarN3';
import { GRAMMAR_N2_N1 } from './grammarN2N1';

export { GRAMMAR_N5 } from './grammarN5';
export { GRAMMAR_N4 } from './grammarN4';
export { GRAMMAR_N3 } from './grammarN3';
export { GRAMMAR_N2_N1 } from './grammarN2N1';

export const GRAMMAR_DATA: GrammarItem[] = [
  ...GRAMMAR_N5,
  ...GRAMMAR_N4,
  ...GRAMMAR_N3,
  ...GRAMMAR_N2_N1
];
