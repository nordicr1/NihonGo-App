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
  if (level < 3) return 'Aldeão de Isekai (異世界の村人)'; // 1-2
  if (level < 5) return 'Herói Aspirante (ヒーロー候補生)'; // 3-4 (BNHA)
  if (level < 7) return 'Recruta do 104º (訓練兵団)'; // 5-6 (SNK)
  if (level < 9) return 'Genin (下忍)'; // 7-8 (Naruto)
  if (level < 11) return 'Alquimista Amador (錬金術師)'; // 9-10 (FMA)
  if (level < 13) return 'Aprendiz de Nen (念の修業)'; // 11-12 (HxH)
  if (level < 15) return 'Detetive Espiritual (霊界探偵)'; // 13-14 (YYH)
  if (level < 17) return 'Herói Classe C (C級ヒーロー)'; // 15-16 (OPM)
  if (level < 19) return 'Xamã Aprendiz (シャーマン)'; // 17-18 (Shaman King)
  if (level < 21) return 'Membro da Toman (東卍隊員)'; // 19-20 (Tokyo Rev)
  if (level < 23) return 'Doushi (道士)'; // 21-22 (Soul Hunter)
  if (level < 25) return 'Exorcista (祓魔師)'; // 23-24 (Ao no Exorcist)
  if (level < 27) return 'Deadman (デッドマン)'; // 25-26 (Deadman W.)
  if (level < 29) return 'Gênio do Basquete (天才)'; // 27-28 (Slam Dunk)
  if (level < 31) return 'Camisa 10 (10番)'; // 29-30 (Super Campeões)
  if (level < 33) return 'Atacante Egoísta (エゴイスト)'; // 31-32 (Blue Lock)
  if (level < 35) return 'Great Teacher (GTO)'; // 33-34 (GTO)
  if (level < 37) return 'Mago da Fairy Tail (魔導士)'; // 35-36 (Fairy Tail)
  if (level < 39) return 'Feiticeiro Jujutsu (呪術師)'; // 37-38 (JJK)
  if (level < 41) return 'Chunin (中忍)'; // 39-40 (Naruto)
  if (level < 43) return 'Cavaleiro Mágico (魔法騎士)'; // 41-42 (Black Clover)
  if (level < 45) return 'Tropa de Exploração (調査兵団)'; // 43-44 (SNK)
  if (level < 47) return 'Caçador de Demônios (鬼殺隊)'; // 45-46 (KNY)
  if (level < 49) return 'Cavaleiro Sagrado (聖騎士)'; // 47-48 (Nanatsu)
  if (level < 51) return 'Elite dos 10 (遠月十傑)'; // 49-50 (Shokugeki)
  if (level < 53) return 'Deus Menor (無名神)'; // 51-52 (Noragami)
  if (level < 55) return 'Geração dos Milagres (キセキの世代)'; // 53-54 (Kuroko)
  if (level < 57) return 'Rei do Rebote (リバウンド王)'; // 55-56 (Slam Dunk)
  if (level < 59) return 'Líder de Gangue (総長)'; // 57-58 (Tokyo Rev)
  if (level < 61) return 'Jonin (上忍)'; // 59-60 (Naruto)
  if (level < 63) return 'Hunter Profissional (プロハンター)'; // 61-62 (HxH)
  if (level < 65) return 'Herói Profissional (プロヒーロー)'; // 63-64 (BNHA)
  if (level < 67) return 'Alquimista Federal (国家錬金術師)'; // 65-66 (FMA)
  if (level < 69) return 'Mago de Primeira Classe (一級魔法使い)'; // 67-68 (Frieren)
  if (level < 71) return 'Cavaleiro de Atena (青銅聖闘士)'; // 69-70 (CDZ)
  if (level < 73) return 'Mago Classe S (S級魔導士)'; // 71-72 (Fairy Tail)
  if (level < 75) return 'Habilidoso de Shikai (始解)'; // 73-74 (Bleach)
  if (level < 77) return 'Herói Classe S (S級ヒーロー)'; // 75-76 (OPM)
  if (level < 79) return 'Paladino Exorcista (聖騎士)'; // 77-78 (Ao no Exorcist)
  if (level < 81) return 'Tsuguko (継子)'; // 79-80 (KNY)
  if (level < 83) return 'Hashira (柱)'; // 81-82 (KNY)
  if (level < 85) return 'Lua Superior (上弦)'; // 83-84 (KNY)
  if (level < 87) return 'Dragon Slayer (滅竜魔導士)'; // 85-86 (Fairy Tail)
  if (level < 89) return 'Hitokiri Battousai (人斬り抜刀斎)'; // 87-88 (Samurai X)
  if (level < 91) return 'Mestre do Hiten Mitsurugi (飛天御剣流)'; // 89-90 (Samurai X)
  if (level < 93) return 'Cavaleiro de Ouro (黄金聖闘士)'; // 91-92 (CDZ)
  if (level < 95) return 'Pecado Capital (七つの大罪)'; // 93-94 (Nanatsu)
  if (level < 97) return 'Dominador da Bankai (卍解)'; // 95-96 (Bleach)
  if (level < 99) return 'Grau Especial (特級呪術師)'; // 97-98 (JJK)
  if (level < 101) return 'Hunter de 2 Estrelas (二ツ星)'; // 99-100 (HxH)
  if (level < 103) return 'Portador de Titã (巨人の継承者)'; // 101-102 (SNK)
  if (level < 105) return 'Mestre do Santuário (教皇)'; // 103-104 (CDZ)
  if (level < 107) return 'Super Sayajin 1 (超サイヤ人)'; // 105-106 (DBZ)
  if (level < 109) return 'Símbolo da Paz (平和の象徴)'; // 107-108 (BNHA)
  if (level < 111) return 'Rei Mago (魔法帝)'; // 109-110 (Black Clover)
  if (level < 113) return 'Youkai Classe S (S級妖怪)'; // 111-112 (YYH)
  if (level < 115) return 'Rei Xamã (シャーマンキング)'; // 113-114 (Shaman King)
  if (level < 117) return 'Super Sayajin 2 (超サイヤ人2)'; // 115-116 (DBZ)
  if (level < 119) return 'Gear 4 (ギア4)'; // 117-118 (One Piece)
  if (level < 121) return 'Deus da Calamidade (禍津神)'; // 119-120 (Noragami)
  if (level < 123) return 'Deus do Novo Mundo (新世界の神)'; // 121-122 (Death Note)
  if (level < 125) return 'Dez Mandamentos (十戒)'; // 123-124 (Nanatsu)
  if (level < 127) return 'Super Sayajin 3 (超サイヤ人3)'; // 125-126 (DBZ)
  if (level < 129) return 'Rei das Maldições (呪いの王)'; // 127-128 (JJK)
  if (level < 131) return 'Yonkou (四皇)'; // 129-130 (One Piece)
  if (level < 133) return 'Titã Fundador (始祖の巨人)'; // 131-132 (SNK)
  if (level < 135) return 'Super Sayajin 4 (超サイヤ人4)'; // 133-134 (DBZ)
  if (level < 137) return 'Gear 5 (ギア5)'; // 135-136 (One Piece)
  if (level < 139) return 'Deus do Submundo (冥王)'; // 137-138 (CDZ/Hades)
  if (level < 141) return 'Herói por Diversão (趣味でヒーロー)'; // 139-140 (OPM)
  if (level < 143) return 'Instinto Superior (身勝手の極意)'; // 141-142 (DBS)
  if (level < 145) return 'Deus da Destruição (破壊神)'; // 143-144 (DBS)
  if (level < 147) return 'Rei dos Piratas (海賊王)'; // 145-146 (OP)
  if (level < 149) return 'Hokage (火影)'; // 147-148 (Naruto)
  return 'Kami-sama / Ser Supremo (神様)'; // 149-150
}
