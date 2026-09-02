import { DailyQuest } from '../types';

const EASY_QUESTS: Omit<DailyQuest, 'id' | 'progress' | 'isRedeemed'>[] = [
  { title: 'Leia 1 lição de Gramática', target: 1, xpReward: 30, difficulty: 'easy', type: 'study_grammar' },
  { title: 'Estude 1 conjunto de Vocabulário', target: 1, xpReward: 30, difficulty: 'easy', type: 'study_vocab' },
  { title: 'Diga "Oi" para o Sensei Kenji', target: 1, xpReward: 30, difficulty: 'easy', type: 'talk_sensei' },
];

const MEDIUM_QUESTS: Omit<DailyQuest, 'id' | 'progress' | 'isRedeemed'>[] = [
  { title: 'Jogue 2 partidas da Memória', target: 2, xpReward: 80, difficulty: 'medium', type: 'play_memory' },
  { title: 'Resolva 10 questões do JLPT', target: 10, xpReward: 80, difficulty: 'medium', type: 'play_jlpt' },
  { title: 'Leia 3 lições de Gramática', target: 3, xpReward: 80, difficulty: 'medium', type: 'study_grammar' },
  { title: 'Acumule 100 XP', target: 100, xpReward: 80, difficulty: 'medium', type: 'gain_xp' },
];

const EPIC_QUESTS: Omit<DailyQuest, 'id' | 'progress' | 'isRedeemed'>[] = [
  { title: 'Acumule 300 XP hoje', target: 300, xpReward: 150, difficulty: 'epic', type: 'gain_xp' },
  { title: 'Resolva 30 questões do JLPT', target: 30, xpReward: 150, difficulty: 'epic', type: 'play_jlpt' },
];

function getRandomQuest(pool: Omit<DailyQuest, 'id' | 'progress' | 'isRedeemed'>[], prefixId: string): DailyQuest {
  const random = pool[Math.floor(Math.random() * pool.length)];
  return {
    ...random,
    id: `${prefixId}_${Date.now()}_${Math.random().toString(36).substring(7)}`,
    progress: 0,
    isRedeemed: false,
  };
}

export function generateDailyQuests(): DailyQuest[] {
  return [
    getRandomQuest(EASY_QUESTS, 'easy'),
    getRandomQuest(MEDIUM_QUESTS, 'medium'),
    getRandomQuest(EPIC_QUESTS, 'epic'),
  ];
}
