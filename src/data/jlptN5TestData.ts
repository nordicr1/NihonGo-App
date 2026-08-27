export interface JLPTQuestion {
  id: number;
  type: 'vocab_reading' | 'vocab_kanji' | 'grammar' | 'reading';
  question: string;
  highlight?: string;
  options: string[];
  correctAnswer: number;
  translation: string;
  explanation: string;
}

export const JLPT_N5_TEST: JLPTQuestion[] = [
  {
    id: 1,
    type: 'vocab_reading',
    question: '先週 デパートに かいものに いきました。',
    highlight: '先週',
    options: ['せんしゅ', 'せんしゅう', 'ぜんしゅ', 'ぜんしゅう'],
    correctAnswer: 1,
    translation: 'Fui fazer compras na loja de departamentos na semana passada.',
    explanation: 'A palavra 先週 (semana passada) lê-se せんしゅう (senshuu).'
  },
  {
    id: 2,
    type: 'vocab_reading',
    question: 'ごはんの 後で さんぽします。',
    highlight: '後',
    options: ['つぎ', 'うしろ', 'まえ', 'あと'],
    correctAnswer: 3,
    translation: 'Vou passear depois da refeição.',
    explanation: 'A palavra 後 (depois) neste contexto (depois de algo) lê-se あと (ato).'
  },
  {
    id: 3,
    type: 'vocab_reading',
    question: 'もう いちど 言って ください。',
    highlight: '言って',
    options: ['いって', 'きって', 'まって', 'たって'],
    correctAnswer: 0,
    translation: 'Por favor, diga mais uma vez.',
    explanation: 'O verbo 言う (dizer) na forma-te fica 言って (itte).'
  },
  {
    id: 4,
    type: 'vocab_reading',
    question: 'ちかくに 山が あります。',
    highlight: '山',
    options: ['かわ', 'やま', 'いけ', 'うみ'],
    correctAnswer: 1,
    translation: 'Há uma montanha perto daqui.',
    explanation: 'O kanji 山 (montanha) sozinho lê-se やま (yama).'
  },
  {
    id: 5,
    type: 'vocab_reading',
    question: 'この ホテルは へやが 多いです。',
    highlight: '多い',
    options: ['すくない', 'おおい', 'せまい', 'ひろい'],
    correctAnswer: 1,
    translation: 'Este hotel tem muitos quartos.',
    explanation: 'O adjetivo 多い (muitos) lê-se おおい (ooi).'
  },
  {
    id: 6,
    type: 'vocab_reading',
    question: 'ともだちと いっしょに 学校に いきます。',
    highlight: '学校',
    options: ['がこう', 'がこお', 'がっこう', 'がっこお'],
    correctAnswer: 2,
    translation: 'Vou para a escola junto com meu amigo.',
    explanation: 'A palavra 学校 (escola) lê-se がっこう (gakkou).'
  },
  {
    id: 7,
    type: 'vocab_reading',
    question: 'えんぴつが 六本 あります。',
    highlight: '六本',
    options: ['ろくぼん', 'ろくぽん', 'ろっぼん', 'ろっぽん'],
    correctAnswer: 3,
    translation: 'Há seis lápis.',
    explanation: 'O contador de objetos longos (本 - hon) para 6 (六 - roku) sofre alteração fonética para ろっぽん (roppon).'
  },
  {
    id: 8,
    type: 'vocab_reading',
    question: 'この 新聞は いくらですか。',
    highlight: '新聞',
    options: ['しんむん', 'しんぶん', 'しむん', 'しぶん'],
    correctAnswer: 1,
    translation: 'Quanto custa este jornal?',
    explanation: 'A palavra 新聞 (jornal) lê-se しんぶん (shinbun).'
  },
  {
    id: 9,
    type: 'vocab_reading',
    question: 'この カメラは 安いです。',
    highlight: '安い',
    options: ['たかい', 'やすい', 'おもい', 'かるい'],
    correctAnswer: 1,
    translation: 'Esta câmera é barata.',
    explanation: 'O adjetivo 安い (barato) lê-se やすい (yasui).'
  },
  {
    id: 10,
    type: 'vocab_reading',
    question: 'かさは 外に あります。',
    highlight: '外',
    options: ['いえ', 'なか', 'そと', 'にわ'],
    correctAnswer: 2,
    translation: 'O guarda-chuva está lá fora.',
    explanation: 'O kanji 外 (fora) sozinho lê-se そと (soto).'
  }
];
