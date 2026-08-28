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
  if (level < 5) return 'Aldeão de Isekai (異世界の村人)'; // 1-4
  if (level < 9) return 'Herói Aspirante (ヒーロー候補生)'; // 5-8 - Boku no Hero
  if (level < 13) return 'Recruta do 104º Esquadrão (訓練兵団)'; // 9-12 - SNK
  if (level < 17) return 'Genin (下忍)'; // 13-16 - Naruto
  if (level < 21) return 'Alquimista Amador (錬金術師)'; // 17-20 - FMA
  if (level < 25) return 'Aprendiz de Nen (念の修業)'; // 21-24 - HxH
  if (level < 29) return 'Chunin (中忍)'; // 25-28 - Naruto
  if (level < 33) return 'Cavaleiro Mágico (魔法騎士)'; // 29-32 - Black Clover
  if (level < 37) return 'Tropa de Exploração (調査兵団)'; // 33-36 - SNK
  if (level < 41) return 'Mago da Fairy Tail (魔導士)'; // 37-40 - Fairy Tail
  if (level < 45) return 'Caçador de Demônios (鬼殺隊)'; // 41-44 - Demon Slayer
  if (level < 49) return 'Jonin (上忍)'; // 45-48 - Naruto
  if (level < 53) return 'Hunter Profissional (プロハンター)'; // 49-52 - HxH
  if (level < 57) return 'Herói Profissional (プロヒーロー)'; // 53-56 - Boku no Hero
  if (level < 61) return 'Alquimista Federal (国家錬金術師)'; // 57-60 - FMA
  if (level < 65) return 'Cavaleiro de Atena (青銅聖闘士)'; // 61-64 - CDZ
  if (level < 69) return 'Mago Classe S (S級魔導士)'; // 65-68 - Fairy Tail
  if (level < 73) return 'Habilidoso de Shikai (始解)'; // 69-72 - Bleach
  if (level < 77) return 'Hashira (柱)'; // 73-76 - Demon Slayer
  if (level < 81) return 'Dragon Slayer (滅竜魔導士)'; // 77-80 - Fairy Tail
  if (level < 85) return 'Cavaleiro de Ouro (黄金聖闘士)'; // 81-84 - CDZ
  if (level < 89) return 'Dominador da Bankai (卍解)'; // 85-88 - Bleach
  if (level < 93) return 'Hunter de Duas Estrelas (二ツ星ハンター)'; // 89-92 - HxH
  if (level < 97) return 'Portador de Titã (巨人の継承者)'; // 93-96 - SNK
  if (level < 101) return 'Mestre do Santuário (教皇)'; // 97-100 - CDZ
  if (level < 105) return 'Super Sayajin 1 (超サイヤ人)'; // 101-104 - DBZ
  if (level < 109) return 'Símbolo da Paz (平和の象徴)'; // 105-108 - Boku no Hero
  if (level < 113) return 'Rei Mago (魔法帝)'; // 109-112 - Black Clover
  if (level < 117) return 'Super Sayajin 2 (超サイヤ人2)'; // 113-116 - DBZ
  if (level < 121) return 'Gear 4 (ギア4)'; // 117-120 - One Piece
  if (level < 125) return 'Deus do Novo Mundo (新世界の神)'; // 121-124 - Death Note
  if (level < 129) return 'Super Sayajin 3 (超サイヤ人3)'; // 125-128 - DBZ
  if (level < 133) return 'Yonkou (四皇)'; // 129-132 - One Piece
  if (level < 137) return 'Super Sayajin 4 (超サイヤ人4)'; // 133-136 - DBZ
  if (level < 141) return 'Gear 5 (ギア5)'; // 137-140 - One Piece
  if (level < 145) return 'Deus do Submundo (冥王)'; // 141-144 - CDZ / Hades
  if (level < 149) return 'Instinto Superior (身勝手の極意)'; // 145-148 - DBZ
  if (level < 150) return 'Deus da Destruição (破壊神)'; // 149 - DBZ
  return 'Hokage / Rei dos Piratas (火影/海賊王)'; // 150 - Naruto/OP
}
