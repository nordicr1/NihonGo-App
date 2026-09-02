export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export type KanaType = 'hiragana' | 'katakana';
export type KanaCategory = 'gojuon' | 'dakuon' | 'handakuon' | 'yoon';

export interface KanaItem {
  id: string;
  char: string;
  romaji: string;
  type: KanaType;
  category: KanaCategory;
  mnemonicPt: string;
  exampleWord: string;
  exampleReading: string;
  exampleMeaningPt: string;
}

export interface KanjiItem {
  id: string;
  kanji: string;
  onyomi: string[];
  kunyomi: string[];
  meaningPt: string;
  strokes: number;
  radical: string;
  jlpt: JLPTLevel;
  examples: {
    word: string;
    reading: string;
    meaningPt: string;
  }[];
}

export type VocabCategory = 
  | 'substantivo'
  | 'verbo_godan'
  | 'verbo_ichidan'
  | 'verbo_irregular'
  | 'adjetivo_i'
  | 'adjetivo_na'
  | 'adverbio'
  | 'expressao';

export interface VocabItem {
  id: string;
  word: string;
  reading: string;
  romaji: string;
  meaningPt: string;
  category: VocabCategory;
  jlpt: JLPTLevel;
  categoryLabelPt: string;
  exampleSentence: {
    jp: string;
    reading: string;
    romaji: string;
    meaningPt: string;
  };
}

export interface GrammarItem {
  id: string;
  pattern: string;
  titlePt: string;
  jlpt: JLPTLevel;
  category: string;
  formationFormula: string;
  explanationPt: string;
  keyRulePt: string;
  examples: {
    jp: string;
    reading: string;
    romaji: string;
    meaningPt: string;
  }[];
}

export interface SentenceChallenge {
  id: string;
  jlpt: JLPTLevel;
  meaningPt: string;
  fullJp: string;
  fullReading: string;
  fullRomaji: string;
  parts: string[]; // Shuffled tokens
  correctOrder: string[]; // Correct sequence of tokens
  grammarHintPt: string;
}

export interface QuizQuestion {
  id: string;
  jlpt: JLPTLevel;
  category: 'Gramática' | 'Vocabulário' | 'Kanji' | 'Partículas';
  question: string;
  questionRomaji?: string;
  questionPt: string;
  options: string[];
  correctIndex: number;
  explanationPt: string;
}

export interface UserStats {
  xp: number;
  level: number;
  streakDays: number;
  lastActiveDate: string;
  gamesPlayed: number;
  quizzesCompleted: number;
  kanjisLearned: string[];
  kanasMastered: string[];
  unlockedBadges: string[];
  hearts: number;
  lastHeartRegenTime: number;
  dailyQuests: DailyQuest[];
  lastQuestDate: string;
  kanaForHeartProgress?: number;
}

export interface DailyQuest {
  id: string;
  title: string;
  target: number;
  progress: number;
  xpReward: number;
  difficulty: 'easy' | 'medium' | 'epic';
  isRedeemed: boolean;
  type: 'study_grammar' | 'study_vocab' | 'play_memory' | 'play_jlpt' | 'gain_xp' | 'talk_sensei';
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  requiredXp?: number;
  condition: string;
}
