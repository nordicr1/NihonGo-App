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
  },
  {
    id: 'streak_3',
    title: 'Dedicação Contínua (3 Dias)',
    description: 'Estudou por 3 dias seguidos.',
    icon: '🔥',
    condition: 'Atingir uma ofensiva de 3 dias'
  },
  {
    id: 'streak_7',
    title: 'Estudioso Implacável (7 Dias)',
    description: 'Estudou por uma semana inteira!',
    icon: '☄️',
    condition: 'Atingir uma ofensiva de 7 dias'
  },
  {
    id: 'sensei_friend',
    title: 'Discípulo do Sensei Kenji',
    description: 'Conversou com a IA do Sensei Kenji.',
    icon: '🤖',
    condition: 'Usar o Sensei AI para tirar dúvidas'
  },
  {
    id: 'kanji_master_10',
    title: 'Amante de Ideogramas (10 Kanjis)',
    description: 'Desbloqueou e estudou 10 Kanjis únicos.',
    icon: '🖌️',
    condition: 'Aprender 10 Kanjis'
  },
  {
    id: 'xp_1000',
    title: 'Despertar do Poder (1.000 XP)',
    description: 'Acumulou 1.000 XP no total.',
    icon: '✨',
    condition: 'Atingir 1.000 XP'
  },
  {
    id: 'xp_5000',
    title: 'Super Saiyajin (5.000 XP)',
    description: 'O seu nível de poder é surpreendente.',
    icon: '⚡',
    condition: 'Atingir 5.000 XP'
  },
  {
    id: 'perfect_jlpt',
    title: 'Olhos de Shinigami',
    description: 'Acertou todas as perguntas em um quiz JLPT sem perder vidas.',
    icon: '🍎',
    condition: '100% de precisão em um Quiz JLPT'
  },
  {
    id: 'grammar_scholar',
    title: 'Pesquisador de Ouro',
    description: 'Mergulhou a fundo nos pontos gramaticais.',
    icon: '📚',
    condition: 'Ler 5 pontos gramaticais'
  },
  {
    id: 'heart_recovery',
    title: 'Fênix Renascida',
    description: 'Recuperou uma vida estudando a teoria após quase falhar.',
    icon: '❤️‍🔥',
    condition: 'Recuperar vida estudando'
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
        hearts: 5,
        lastHeartRegenTime: Date.now(),
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
    unlockedBadges: ['first_step'],
    hearts: 5,
    lastHeartRegenTime: Date.now()
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

const LEVEL_TITLES = [
  "Aldeão de Isekai (異世界の村人)", // 1
  "Cidadão Comum (一般市民)", // 2
  "Estudante Transferido (転校生)", // 3
  "Herói Aspirante (ヒーロー候補生)", // 4
  "Recruta do 104º (訓練兵団)", // 5
  "Genin (下忍)", // 6
  "Alquimista Amador (錬金術師)", // 7
  "Aprendiz de Nen (念の修業)", // 8
  "Detetive Espiritual (霊界探偵)", // 9
  "Herói Classe C (C級ヒーロー)", // 10
  "Xamã Aprendiz (シャーマン)", // 11
  "Membro da Toman (東卍隊員)", // 12
  "Doushi (道士)", // 13
  "Exorcista Iniciante (祓魔師)", // 14
  "Deadman (デッドマン)", // 15
  "Gênio do Basquete (バスケの天才)", // 16
  "Camisa 10 (10番)", // 17
  "Atacante Egoísta (エゴイスト)", // 18
  "Professor GTO (Great Teacher)", // 19
  "Mago da Fairy Tail (魔導士)", // 20
  "Feiticeiro Jujutsu (呪術師)", // 21
  "Jogador Compulsivo (賭け狂い)", // 22
  "Caçador de Cartas (カードキャプター)", // 23
  "Criança Escolhida (選ばれし子供)", // 24
  "Mestre de Servo (マスター)", // 25
  "Chunin (中忍)", // 26
  "Cavaleiro Mágico (魔法騎士)", // 27
  "Tropa de Exploração (調査兵団)", // 28
  "Caçador de Demônios (鬼殺隊)", // 29
  "Cavaleiro Sagrado (聖騎士)", // 30
  "Elite dos 10 (遠月十傑)", // 31
  "Deus Menor (無名神)", // 32
  "Geração dos Milagres (キセキの世代)", // 33
  "Rei do Rebote (リバウンド王)", // 34
  "Líder de Gangue (不良のトップ)", // 35
  "Devil Hunter (デビルハンター)", // 36
  "Cientista de Pedra (科学使い)", // 37
  "Faz-Tudo (万事屋)", // 38
  "Aventureiro de Akiba (冒険者)", // 39
  "Espadachim Negro (黒の剣士)", // 40
  "Esper (超能力者)", // 41
  "Ghoul (喰種)", // 42
  "Motoqueiro Sem Cabeça (首なしライダー)", // 43
  "ZET (ゼット)", // 44
  "Vampiro Otaku (吸血鬼)", // 45
  "Domador de Demônios (悪魔使い)", // 46
  "Samurai Errante (浪人)", // 47
  "Guerreira de Olhos Prateados (クレイモア)", // 48
  "Boxer Novato (新人ボクサー)", // 49
  "Piloto de Valkyrie (バルキリー)", // 50
  "Jonin (上忍)", // 51
  "Hunter Profissional (プロハンター)", // 52
  "Herói Profissional (プロヒーロー)", // 53
  "Alquimista Federal (国家錬金術師)", // 54
  "Mago de Primeira Classe (一級魔法使い)", // 55
  "Cavaleiro de Bronze (青銅聖闘士)", // 56
  "Cavaleiro de Prata (白銀聖闘士)", // 57
  "Mago Classe S (S級魔導士)", // 58
  "Habilidoso de Shikai (始解)", // 59
  "Herói Classe S (S級ヒーロー)", // 60
  "Paladino Exorcista (聖騎士)", // 61
  "Tsuguko (継子)", // 62
  "Hashira (柱)", // 63
  "Lua Inferior (下弦)", // 64
  "Lua Superior (上弦)", // 65
  "Dragon Slayer (滅竜魔導士)", // 66
  "Hitokiri Battousai (人斬り抜刀斎)", // 67
  "Mestre do Hiten Mitsurugi (飛天御剣流)", // 68
  "Campeão de Boxe (ボクシング王者)", // 69
  "Demônio da Motosserra (チェンソーの悪魔)", // 70
  "Rei da Ciência (科学王)", // 71
  "Samurai de Prata (白夜叉)", // 72
  "Estrategista de Akiba (腹黒眼鏡)", // 73
  "Kuuhaku / Blank (空白)", // 74
  "Claymore de 1 Dígito (一桁ナンバー)", // 75
  "Beater (ビーター)", // 76
  "Esper 100% (100%の超能力)", // 77
  "Ghoul de Um Olho (隻眼の喰種)", // 78
  "Líder dos Dollars (ダラーズ創始者)", // 79
  "Jogador Lendário (伝説のギャンブラー)", // 80
  "Mercenário Negro (黒い剣士)", // 81
  "Piloto do EVA (エヴァパイロット)", // 82
  "Mestre das Cartas Clow (クロウカードマスター)", // 83
  "Domador Nível Mega (究極体テイマー)", // 84
  "Invocador Classe Saber (マスター)", // 85
  "Xamã Mestre (マスターシャーマン)", // 86
  "Cavaleiro de Ouro (黄金聖闘士)", // 87
  "Pecado Capital (七つの大罪)", // 88
  "Dez Mandamentos (十戒)", // 89
  "Dominador da Bankai (卍解)", // 90
  "Feiticeiro Nível 1 (一級呪術師)", // 91
  "Grau Especial (特級呪術師)", // 92
  "Hunter de 1 Estrela (一ツ星ハンター)", // 93
  "Hunter de 2 Estrelas (二ツ星ハンター)", // 94
  "Hunter de 3 Estrelas (三ツ星ハンター)", // 95
  "Portador de Titã (巨人の継承者)", // 96
  "Titã Fundador (始祖の巨人)", // 97
  "Mestre do Santuário (教皇)", // 98
  "Super Sayajin 1 (超サイヤ人)", // 99
  "Símbolo da Paz (平和の象徴)", // 100
  "Rei Mago (魔法帝)", // 101
  "Youkai Classe S (S級妖怪)", // 102
  "Rei Xamã (シャーマンキング)", // 103
  "Super Sayajin 2 (超サイヤ人2)", // 104
  "Gear 2 (ギア2)", // 105
  "Gear 3 (ギア3)", // 106
  "Gear 4 (ギア4)", // 107
  "Deus da Calamidade (禍津神)", // 108
  "Deus do Novo Mundo (新世界の神)", // 109
  "Rei das Maldições (呪いの王)", // 110
  "Shichibukai (七武海)", // 111
  "Almirante da Marinha (海軍大将)", // 112
  "Yonkou (四皇)", // 113
  "Super Sayajin 3 (超サイヤ人3)", // 114
  "Cavaleiro Negro (狂戦士)", // 115
  "EVA Desperto (覚醒エヴァ)", // 116
  "Demônio Original (根源的悪魔)", // 117
  "Deus dos Jogos (遊戯の神)", // 118
  "Esper ???% (???%の超能力)", // 119
  "Ghoul Kakuja (赫者)", // 120
  "Mago Lendário (伝説の魔法使い)", // 121
  "Sannin Lendário (伝説の三忍)", // 122
  "Kage (影)", // 123
  "Espadachim Mais Forte (世界最強の剣士)", // 124
  "Ser Transcendental (超越者)", // 125
  "Super Sayajin 4 (超サイヤ人4)", // 126
  "Super Sayajin God (超サイヤ人ゴッド)", // 127
  "Super Sayajin Blue (超サイヤ人ブルー)", // 128
  "Gear 5 (ギア5)", // 129
  "Deus do Submundo (冥王)", // 130
  "Deus dos Mares (海皇)", // 131
  "Deusa da Sabedoria (女神アテナ)", // 132
  "Careca de Capa (ハゲマント)", // 133
  "Herói por Diversão (趣味でヒーロー)", // 134
  "Rei dos Espíritos (精霊王)", // 135
  "O Mais Forte do Mundo (最強の呪術師)", // 136
  "O Homem Mais Forte (世界最強の男)", // 137
  "O Ser Perfeito (完全体)", // 138
  "Lenda Ninja (伝説の忍者)", // 139
  "All For One (オールフォーワン)", // 140
  "One For All 100% (ワンフォーオール)", // 141
  "Cavaleiro Divino (神聖衣)", // 142
  "Instinto Superior Incompleto (兆)", // 143
  "Instinto Superior Completo (極)", // 144
  "Deus da Destruição (破壊神)", // 145
  "Anjo Guia (天使)", // 146
  "Rei dos Piratas (海賊王)", // 147
  "Hokage (火影)", // 148
  "Sumo Sacerdote (大神官)", // 149
  "Kami-sama / Zeno-sama (全王)" // 150
];

export function getLevelTitle(level: number): string {
  const safeLevel = Math.max(1, Math.min(level, 150));
  return LEVEL_TITLES[safeLevel - 1];
}
