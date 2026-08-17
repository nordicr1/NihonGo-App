import { UserStats, Badge } from '../types';

const STATS_STORAGE_KEY = 'nihongo_app_user_stats_v1';

export const INITIAL_BADGES: Badge[] = [
  {
    id: 'first_step',
    title: 'Hajimemashite (初めまして)',
    description: 'Deu os primeiros passos na jornada do Japonês.',
    icon: '🌱',
    condition: 'Completar a primeira atividade'
  },
  {
    id: 'kana_novice',
    title: 'Iniciante do Kana (仮名)',
    description: 'Explorou caracteres de Hiragana e Katakana.',
    icon: '🌸',
    condition: 'Ouvir ou praticar 10 kanas'
  },
  {
    id: 'kanji_hunter',
    title: 'Caçador de Kanjis (漢字)',
    description: 'Estudou ou desenhou seus primeiros kanjis.',
    icon: '⛩️',
    condition: 'Estudar kanjis no dicionário'
  },
  {
    id: 'memory_master',
    title: 'Mestre da Memória (神経衰弱)',
    description: 'Venceu uma partida no Jogo da Memória.',
    icon: '🧠',
    condition: 'Completar uma partida do jogo da memória'
  },
  {
    id: 'jlpt_challenger',
    title: 'Aspirante ao JLPT (日本語能力試験)',
    description: 'Respondeu a questões do teste de proficiência JLPT.',
    icon: '🏆',
    condition: 'Completar um Quiz JLPT'
  },
  {
    id: 'sentence_builder',
    title: 'Arquiteto de Frases (文法)',
    description: 'Montou frases completas com sucesso no jogo de frases.',
    icon: '📜',
    condition: 'Acertar um desafio de construção de frase'
  }
];

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STATS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return parsed;
    }
  } catch (err) {
    console.error('Failed to load user stats:', err);
  }

  return {
    xp: 50,
    level: 1,
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    gamesPlayed: 0,
    quizzesCompleted: 0,
    kanjisLearned: [],
    kanasMastered: [],
    unlockedBadges: ['first_step']
  };
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    console.error('Failed to save user stats:', err);
  }
}

export function calculateLevel(xp: number): number {
  return Math.floor(Math.sqrt(xp / 100)) + 1;
}

export function getLevelTitle(level: number): string {
  if (level === 1) return 'Iniciante (初心者 - Shoshinsha)';
  if (level === 2) return 'Aprendiz Ninja (見習い - Minarai)';
  if (level === 3) return 'Guerreiro da Gramática (武士 - Bushi)';
  if (level === 4) return 'Samurai do JLPT (侍 - Samurai)';
  if (level === 5) return 'Mestre Sensei (先生 - Sensei)';
  return 'Shogun do Japonês (将軍 - Shogun)';
}
