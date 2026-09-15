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

export const JLPT_N3_TEST: JLPTQuestion[] = [
  // --- VOCAB READING (Como se lê o Kanji) ---
  {
    id: 1,
    type: 'vocab_reading',
    question: 'この機械の【操作】は簡単です。',
    highlight: '操作',
    options: ['そうさ', 'そうぞう', 'そんざい', 'そうしょく'],
    correctAnswer: 0,
    translation: 'A operação desta máquina é simples.',
    explanation: '操作 (Operação/Manuseio) lê-se そうさ.'
  },
  {
    id: 2,
    type: 'vocab_reading',
    question: '新しい法律が【発表】された。',
    highlight: '発表',
    options: ['はつひょう', 'はっぴょう', 'はっひょう', 'はつぴょう'],
    correctAnswer: 1,
    translation: 'Uma nova lei foi anunciada.',
    explanation: '発表 (Anúncio/Apresentação) lê-se はっぴょう com sokuon (tsu pequeno).'
  },
  {
    id: 3,
    type: 'vocab_reading',
    question: '地球の【温暖化】が進んでいる。',
    highlight: '温暖化',
    options: ['おんだんか', 'おんたんか', 'うんたんか', 'うんだんか'],
    correctAnswer: 0,
    translation: 'O aquecimento da Terra está avançando.',
    explanation: '温暖化 (Aquecimento) lê-se おんだんか.'
  },
  {
    id: 4,
    type: 'vocab_reading',
    question: '彼の意見に【賛成】します。',
    highlight: '賛成',
    options: ['さんせい', 'さんぜい', 'ざんせい', 'ざんぜい'],
    correctAnswer: 0,
    translation: 'Concordo com a opinião dele.',
    explanation: '賛成 (Concordância/Aprovação) lê-se さんせい.'
  },

  // --- VOCAB KANJI (Qual o Kanji correto) ---
  {
    id: 5,
    type: 'vocab_kanji',
    question: 'ここには【きけん】な動物がいます。',
    highlight: 'きけん',
    options: ['安全', '危険', '険悪', '冒険'],
    correctAnswer: 1,
    translation: 'Há animais perigosos aqui.',
    explanation: 'A palavra きけん (perigo/perigoso) escreve-se 危険.'
  },
  {
    id: 6,
    type: 'vocab_kanji',
    question: '友達の結婚式に【しょうたい】された。',
    highlight: 'しょうたい',
    options: ['招待', '紹介', '待機', '期待'],
    correctAnswer: 0,
    translation: 'Fui convidado para a cerimônia de casamento do meu amigo.',
    explanation: 'しょうたい (Convite) escreve-se 招待.'
  },
  {
    id: 7,
    type: 'vocab_kanji',
    question: '【けんこう】のために、毎日ジョギングをしています。',
    highlight: 'けんこう',
    options: ['建行', '健交', '健康', '建康'],
    correctAnswer: 2,
    translation: 'Pela minha saúde, corro todos os dias.',
    explanation: 'けんこう (Saúde) escreve-se 健康.'
  },

  // --- GRAMMAR (Partículas e Estruturas) ---
  {
    id: 8,
    type: 'grammar',
    question: '旅行にいく（　　　）、ホテルの予約をしなければならない。',
    options: ['にしては', 'にくらべて', 'にさきだって', 'にしても'],
    correctAnswer: 2,
    translation: 'Antes de (em preparação para) viajar, é preciso reservar o hotel.',
    explanation: '〜に先立って (ni sakidatte) significa "Antes de / Em preparação a algo importante".'
  },
  {
    id: 9,
    type: 'grammar',
    question: 'いくら頑張った（　　　）、1日で全部を覚えるのは無理だ。',
    options: ['としたら', 'にしても', 'にしたら', 'というより'],
    correctAnswer: 1,
    translation: 'Por mais que você se esforce, é impossível decorar tudo em 1 dia.',
    explanation: '〜にしても (ni shite mo) indica concessão: "Mesmo que / Ainda que (se esforce)".'
  },
  {
    id: 10,
    type: 'grammar',
    question: 'あのレストランは、高い（　　　）、味があまり美味しくない。',
    options: ['わりに', 'ばかりに', 'だらけで', 'っぽい'],
    correctAnswer: 0,
    translation: 'Aquele restaurante, para o quão caro é, não é muito saboroso.',
    explanation: '〜わりに (wari ni) expressa surpresa ou discrepância: "Considerando que é alto, não é saboroso".'
  },
  {
    id: 11,
    type: 'grammar',
    question: '急に雨が降ってきた。傘を持っていない（　　　）、濡れて帰るしかなかった。',
    options: ['おかげで', 'せいで', 'ばかりに', 'うえに'],
    correctAnswer: 2,
    translation: 'Começou a chover de repente. Só por eu não ter trazido o guarda-chuva, não tive escolha a não ser voltar molhado.',
    explanation: '〜ばかりに (bakari ni) indica que um pequeno fator causou um grande arrependimento ou resultado ruim.'
  },
  {
    id: 12,
    type: 'grammar',
    question: '彼は病気（　　　）をして、仕事を休んでいるらしい。',
    options: ['だらけ', 'っぽい', 'のような', 'のふり'],
    correctAnswer: 3,
    translation: 'Parece que ele fingiu estar doente para faltar ao trabalho.',
    explanation: '〜ふりをする (furi o suru) significa fingir. Aqui, 病気のふり (fingir doença).'
  },
  {
    id: 13,
    type: 'grammar',
    question: 'この部屋はゴミ（　　　）で、足の踏み場もない。',
    options: ['だらけ', 'ばかり', 'ぎみ', 'っぽい'],
    correctAnswer: 0,
    translation: 'Este quarto está coberto de lixo, não tem nem onde pisar.',
    explanation: '〜だらけ (darake) significa "coberto de / cheio de" coisas ruins (como lixo, erros, lama).'
  },

  // --- READING (Interpretação Dokkai Curta) ---
  {
    id: 14,
    type: 'reading',
    question: '以下の文章を読んで質問に答えてください。

「最近、スマートフォンを見ながら道を歩く人が増えています。これは自分だけでなく、周りの人にとっても非常に危険です。特に駅のホームや横断歩道では、絶対にやめるべきです。」

筆者が一番言いたいことは何ですか？',
    options: [
      'スマートフォンを持つ人が増えて嬉しい。',
      '駅のホームは危ないから歩かないほうがいい。',
      '歩きながらスマートフォンを見るのは危険だからやめるべきだ。',
      '横断歩道ではスマートフォンを周りの人に見せるべきだ。'
    ],
    correctAnswer: 2,
    translation: 'Ao ler o texto: "Ultimamente tem aumentado quem anda olhando o celular. Isso é muito perigoso para si e para os outros. Especialmente em estações, deve-se parar." Qual a principal ideia do autor?',
    explanation: 'A resposta 3 (Andar olhando o celular é perigoso e deve-se parar) é a única que resume exatamente a mensagem principal de alerta do autor.'
  },
  {
    id: 15,
    type: 'reading',
    question: '以下の文章を読んでください。

「明日の会議は午後2時からです。資料は各自でプリントアウトして持参してください。遅れる場合は、必ず事前に佐藤まで連絡すること。」

会議に参加する人がしなければならないことは何ですか？',
    options: [
      '佐藤さんに資料をプリントアウトしてもらうこと。',
      '自分で資料を印刷して持っていくこと。',
      '午後2時までに佐藤さんに連絡すること。',
      '会議の前に必ず資料を読むこと。'
    ],
    correctAnswer: 1,
    translation: 'Texto: "A reunião de amanhã é às 14h. Imprimam os materiais e tragam-nos. Se for atrasar, avise o Sato." O que o participante DEVE fazer?',
    explanation: '各自でプリントアウトして持参 (Cada um imprima e traga). A resposta 2 (Imprimir seus materiais e levar) é a correta.'
  }
];
