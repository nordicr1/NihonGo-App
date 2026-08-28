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
      return {
        xp: 50,
        level: 1,
        streakDays: 1,
        lastActiveDate: new Date().toISOString().split('T')[0],
        gamesPlayed: 0,
        quizzesCompleted: 0,
        kanjisLearned: [],
        kanasMastered: [],
        unlockedBadges: ['first_step'],
        ...parsed
      };
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
  const calculatedLevel = Math.floor(Math.sqrt(xp / 100)) + 1;
  return Math.min(calculatedLevel, 150); // Nível máximo 150
}

export function getLevelTitle(level: number): string {
  if (level < 8) return 'Aldeão de Isekai (異世界の村人)';
  if (level < 15) return 'Genin (下忍)';
  if (level < 22) return 'Chunin (中忍)';
  if (level < 29) return 'Jonin (上忍)';
  if (level < 36) return 'Caçador de Demônios (鬼殺隊)';
  if (level < 43) return 'Hashira (柱)';
  if (level < 50) return 'Habilidoso de Shikai (始解)';
  if (level < 57) return 'Dominador da Bankai (卍解)';
  if (level < 64) return 'Cavaleiro de Atena (青銅聖闘士)';
  if (level < 71) return 'Cavaleiro de Ouro (黄金聖闘士)';
  if (level < 78) return 'Mestre do Santuário (教皇)';
  if (level < 85) return 'Super Sayajin 1 (超サイヤ人)';
  if (level < 92) return 'Super Sayajin 2 (超サイヤ人2)';
  if (level < 99) return 'Super Sayajin 3 (超サイヤ人3)';
  if (level < 106) return 'Super Sayajin 4 (超サイヤ人4)';
  if (level < 113) return 'Gear 4 (ギア4)';
  if (level < 120) return 'Gear 5 (ギア5)';
  if (level < 127) return 'Yonkou (四皇)';
  if (level < 134) return 'Deus do Submundo (冥王)';
  if (level < 141) return 'Instinto Superior (身勝手の極意)';
  if (level < 150) return 'Deus da Destruição (破壊神)';
  return 'Hokage / Rei dos Piratas (火影/海賊王)';
}
