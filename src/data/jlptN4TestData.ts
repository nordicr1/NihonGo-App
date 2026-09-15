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

export const JLPT_N4_TEST: JLPTQuestion[] = [
  // --- VOCAB READING (Como se lê o Kanji) ---
  {
    id: 1,
    type: 'vocab_reading',
    question: '明日は【急行】電車に乗ります。',
    highlight: '急行',
    options: ['きゅうこ', 'きゅうこう', 'ぎゅうこ', 'ぎゅうこう'],
    correctAnswer: 1,
    translation: 'Amanhã vou pegar o trem expresso.',
    explanation: '急行 (trem expresso) lê-se きゅうこう (kyuukou).'
  },
  {
    id: 2,
    type: 'vocab_reading',
    question: 'この部屋は【危険】です。',
    highlight: '危険',
    options: ['きけん', 'きげん', 'ぎけん', 'ぎげん'],
    correctAnswer: 0,
    translation: 'Este quarto é perigoso.',
    explanation: '危険 (perigo/perigoso) lê-se きけん (kiken).'
  },
  {
    id: 3,
    type: 'vocab_reading',
    question: '【説明】をよく聞いてください。',
    highlight: '説明',
    options: ['せつめ', 'せつめい', 'しつめ', 'しつめい'],
    correctAnswer: 1,
    translation: 'Por favor, escute bem a explicação.',
    explanation: '説明 (explicação) lê-se せつめい (setsumei).'
  },
  {
    id: 4,
    type: 'vocab_reading',
    question: 'スーパーで【牛肉】を買いました。',
    highlight: '牛肉',
    options: ['ぎゅうにき', 'きゅうにく', 'ぎゅうにく', 'ぎゅにく'],
    correctAnswer: 2,
    translation: 'Comprei carne bovina no supermercado.',
    explanation: '牛肉 (carne bovina) lê-se ぎゅうにく (gyuuniku).'
  },

  // --- VOCAB KANJI (Qual o Kanji correto) ---
  {
    id: 5,
    type: 'vocab_kanji',
    question: 'えきで 友達に 【わかれました】。',
    highlight: 'わかれました',
    options: ['分かれました', '別れました', '割れました', '切れました'],
    correctAnswer: 1,
    translation: 'Me despedi do meu amigo na estação.',
    explanation: '別れる (despedir-se/separar-se) usa o kanji 別.'
  },
  {
    id: 6,
    type: 'vocab_kanji',
    question: '【じゅぎょう】は 8時に 始まります。',
    highlight: 'じゅぎょう',
    options: ['授業', '授教', '受業', '受教'],
    correctAnswer: 0,
    translation: 'A aula começa às 8 horas.',
    explanation: 'じゅぎょう (aula) escreve-se 授業.'
  },
  {
    id: 7,
    type: 'vocab_kanji',
    question: '私の【しゅみ】は 音楽を聞くことです。',
    highlight: 'しゅみ',
    options: ['興未', '趣未', '趣味', '興味'],
    correctAnswer: 2,
    translation: 'Meu hobby é ouvir música.',
    explanation: 'しゅみ (hobby/passatempo) escreve-se 趣味.'
  },

  // --- GRAMMAR (Partículas e Estruturas N4) ---
  {
    id: 8,
    type: 'grammar',
    question: '先生は 学生に 漢字を（　　　）。',
    options: ['書かれた', '書かせた', '書きさせた', '書かされた'],
    correctAnswer: 1,
    translation: 'O professor fez (obrigou) os alunos a escreverem kanji.',
    explanation: 'Voz causativa. O professor (sujeito) faz o aluno (marcado com に) realizar a ação. 書く vira 書かせる (kakaseru).'
  },
  {
    id: 9,
    type: 'grammar',
    question: '雨が（　　　）、試合は中止になります。',
    options: ['降ると', '降るなら', '降れば', '降ったら'],
    correctAnswer: 3,
    translation: 'Se chover (Quando chover), a partida será cancelada.',
    explanation: '〜たら expressa uma condicional muito natural de tempo/futuro. "Se chover (depois que chover), cancela".'
  },
  {
    id: 10,
    type: 'grammar',
    question: '私は 鈴木さんに 自転車を 直して（　　　）。',
    options: ['あげました', 'くれました', 'もらいました', 'しまいました'],
    correctAnswer: 2,
    translation: 'Eu recebi o favor do Sr. Suzuki de consertar minha bicicleta.',
    explanation: 'O sujeito é "Eu" (私は). Quem fez a ação foi Suzuki (鈴木さんに). Para dizer "Eu recebi o favor de", usa-se てもらう.'
  },
  {
    id: 11,
    type: 'grammar',
    question: '空が暗くなりました。今にも 雨が（　　　）ね。',
    options: ['降るそうです', '降りそうです', '降るらしいです', '降るかもしれません'],
    correctAnswer: 1,
    translation: 'O céu ficou escuro. Parece que vai chover a qualquer momento, né.',
    explanation: 'Previsão/impressão baseada no visual (olhando pro céu negro). Usa-se a raiz do verbo + そうだ (降りそう).'
  },
  {
    id: 12,
    type: 'grammar',
    question: '大切なテストだから、絶対（ぜったい）に 遅刻する（　　　）。',
    options: ['はずだ', 'わけだ', 'べきだ', 'はずがない'],
    correctAnswer: 3,
    translation: 'Como é um teste importante, é impossível (não há a menor lógica) que eu me atrase.',
    explanation: 'はずがない significa "é impossível / não há a menor possibilidade lógica".'
  },
  {
    id: 13,
    type: 'grammar',
    question: '母に 日記を（　　　）、とても 恥ずかしかったです。',
    options: ['読ませて', '読まれて', '読んで', '読まされて'],
    correctAnswer: 1,
    translation: 'Tive meu diário lido pela minha mãe, e fiquei com muita vergonha.',
    explanation: 'Voz passiva de sofrimento (迷惑の受身). O sujeito sofreu a ação de alguém. 読む vira 読まれる (yomareru).'
  },

  // --- READING (Interpretação Dokkai N4) ---
  {
    id: 14,
    type: 'reading',
    question: `以下の文章を読んで質問に答えてください。

「田中さんへ
明日のパーティーですが、仕事が忙しくなってしまったので、行けなくなりました。本当にごめんなさい。また今度、一緒に食事に行きましょう。 山田より」

山田さんは明日どうしますか？`,
    options: [
      '仕事が忙しいので、パーティーに行きません。',
      'パーティーに行ったあと、仕事をします。',
      '田中さんと一緒に食事に行きます。',
      '仕事を休んで、パーティーに行きます。'
    ],
    correctAnswer: 0,
    translation: 'Ao ler o bilhete: "Para Tanaka: Sobre a festa de amanhã, meu trabalho ficou corrido, então não poderei ir. Me desculpe. Vamos comer juntos da próxima vez. Ass: Yamada". O que Yamada fará amanhã?',
    explanation: 'O texto diz claramente: "行けなくなりました" (tornou-se impossível ir) devido ao trabalho. A resposta certa é 1.'
  },
  {
    id: 15,
    type: 'reading',
    question: `以下の文章を読んで質問に答えてください。

「私の家の近くに新しいスーパーができました。野菜が安くて新鮮なので、毎日たくさんの人が買い物に来ています。でも、私はまだ行ったことがありません。明日の日曜日に行ってみるつもりです。」

この人はいつ、新しいスーパーに行きますか？`,
    options: [
      '毎日行っています。',
      'もう行きました。',
      '明日の日曜日に行きます。',
      '行かないつもりです。'
    ],
    correctAnswer: 2,
    translation: 'Texto: "Abriu um supermercado perto de casa. Verduras baratas, então muita gente vai todo dia. Mas eu ainda não fui. Tenho a intenção de tentar ir amanhã, domingo." Quando essa pessoa irá ao supermercado?',
    explanation: 'A frase final "明日の日曜日に行ってみるつもりです" (Tenho intenção de tentar ir amanhã, domingo) confirma a resposta 3.'
  }
];
