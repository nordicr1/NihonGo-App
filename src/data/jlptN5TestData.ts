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
    explanation: 'A palavra 後 (depois) neste contexto lê-se あと (ato).'
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
  },
  {
    id: 11,
    type: 'vocab_kanji',
    question: 'けさ しゃわーを あびました。',
    highlight: 'しゃわー',
    options: ['シャワー', 'シャウー', 'ツャワー', 'ツャウー'],
    correctAnswer: 0,
    translation: 'Tomei banho de chuveiro esta manhã.',
    explanation: 'A palavra "chuveiro" (shower) escreve-se em katakana como シャワー (shawaa).'
  },
  {
    id: 12,
    type: 'vocab_kanji',
    question: 'コーヒーを のみました。',
    highlight: 'のみました',
    options: ['飯みました', '飲みました', '餃みました', '飮みました'],
    correctAnswer: 1,
    translation: 'Bebi café.',
    explanation: 'O verbo beber (nomu) usa o kanji 飲, formando 飲みました (nomimashita).'
  },
  {
    id: 13,
    type: 'vocab_kanji',
    question: 'あたらしい くるまを かいました。',
    highlight: 'くるま',
    options: ['卓', '庫', '車', '軍'],
    correctAnswer: 2,
    translation: 'Comprei um carro novo.',
    explanation: 'O kanji para carro (kuruma) é 車.'
  },
  {
    id: 14,
    type: 'vocab_kanji',
    question: 'この ぼうしは 1000えんです。',
    highlight: 'えん',
    options: ['1000内', '1000用', '1000冊', '1000円'],
    correctAnswer: 3,
    translation: 'Este chapéu custa 1000 ienes.',
    explanation: 'A moeda do Japão (iene / en) usa o kanji 円.'
  },
  {
    id: 15,
    type: 'vocab_kanji',
    question: 'しゅくだいが はんぶん おわりました。',
    highlight: 'はんぶん',
    options: ['了分', '乎分', '羊分', '半分'],
    correctAnswer: 3,
    translation: 'O dever de casa terminou pela metade.',
    explanation: 'A palavra "metade" (hanbun) escreve-se 半分.'
  },
  {
    id: 16,
    type: 'vocab_kanji',
    question: 'わたしの うちに きませんか。',
    highlight: 'きません',
    options: ['来ませんか', '采ませんか', '木ませんか', '未ませんか'],
    correctAnswer: 0,
    translation: 'Você não quer vir à minha casa?',
    explanation: 'O verbo vir (kuru/kimasen) usa o kanji 来.'
  },
  {
    id: 17,
    type: 'vocab_kanji',
    question: 'きのう たなかさんと あいました。',
    highlight: 'あいました',
    options: ['見いました', '書いました', '会いました', '話いました'],
    correctAnswer: 2,
    translation: 'Ontem encontrei com o sr. Tanaka.',
    explanation: 'O verbo encontrar (au) usa o kanji 会, formando 会いました (aimashita).'
  },
  {
    id: 18,
    type: 'vocab_kanji',
    question: 'いもうとと おなじ ふくを かいました。',
    highlight: 'おなじ',
    options: ['同じ', '回じ', '向じ', '司じ'],
    correctAnswer: 0,
    translation: 'Comprei a mesma roupa que minha irmã mais nova.',
    explanation: 'A palavra "mesmo/igual" (onaji) escreve-se 同じ.'
  },
  {
    id: 19,
    type: 'vocab_reading',
    question: 'わたしの へやは この （　　）の 2かいです。',
    options: ['エレベーター', 'プール', 'エアコン', 'アパート'],
    correctAnswer: 3,
    translation: 'Meu quarto fica no segundo andar deste apartamento.',
    explanation: 'O contexto fala de "2º andar" (2かい). A única construção lógica é アパート (apartamento).'
  },
  {
    id: 20,
    type: 'vocab_reading',
    question: 'さとうさんは ギターを じょうずに （　　）。',
    options: ['うたいます', 'ききます', 'ひきます', 'あそびます'],
    correctAnswer: 2,
    translation: 'O sr. Sato toca guitarra muito bem.',
    explanation: 'O verbo usado para tocar instrumentos de corda (como guitarra) é 弾く (hiku) -> ひきます.'
  },
  {
    id: 21,
    type: 'vocab_reading',
    question: 'テーブルに おさらと はしを （　　）ください。',
    options: ['ならべて', 'とって', 'たべて', 'あらって'],
    correctAnswer: 0,
    translation: 'Por favor, alinhe os pratos e os hashis na mesa.',
    explanation: 'O verbo 并べる (naraberu - alinhar, dispor) faz sentido ao preparar a mesa.'
  },
  {
    id: 22,
    type: 'vocab_reading',
    question: 'けさ そうじを したから へやは （　　）です。',
    options: ['きれい', 'きたない', 'あかるい', 'くらい'],
    correctAnswer: 0,
    translation: 'Como fiz a limpeza esta manhã, o quarto está limpo.',
    explanation: 'Se a pessoa fez a limpeza (そうじ), o quarto fica limpo/bonito (きれい - kirei).'
  },
  {
    id: 23,
    type: 'vocab_reading',
    question: 'きょうは 500（　　） およぎました。',
    options: ['ど', 'ばん', 'メートル', 'グラム'],
    correctAnswer: 2,
    translation: 'Hoje nadei 500 metros.',
    explanation: 'A unidade de medida para distância nadada é metros (メートル - meetoru).'
  },
  {
    id: 24,
    type: 'vocab_reading',
    question: 'えきから たいしかんまでの （　　）を かいて ください。',
    options: ['しゃしん', 'ちず', 'てがみ', 'きっぷ'],
    correctAnswer: 1,
    translation: 'Por favor, desenhe um mapa da estação até a embaixada.',
    explanation: 'Pedir para desenhar/escrever (かいて) o caminho significa pedir um mapa (ちず - chizu).'
  },
  {
    id: 25,
    type: 'vocab_reading',
    question: 'うるさいから テレビを （　　）ください。',
    options: ['けして', 'つけて', 'しめて', 'あけて'],
    correctAnswer: 0,
    translation: 'Como está barulhento, por favor, desligue a televisão.',
    explanation: 'Como a TV está fazendo barulho (うるさい), pede-se para desligar: 消す (kesu) -> けして (keshite).'
  },
  {
    id: 26,
    type: 'vocab_reading',
    question: 'きょうは （　　）が ふって います。',
    options: ['くもり', 'はれ', 'かぜ', 'ゆき'],
    correctAnswer: 3,
    translation: 'Hoje está caindo neve (nevando).',
    explanation: 'O verbo 降る (furu - cair do céu) é usado com chuva (あめ) ou neve (ゆき). Das opções, apenas ゆき faz sentido.'
  },
  {
    id: 27,
    type: 'vocab_reading',
    question: 'はこに りんごが （　　）あります。',
    options: ['よっつ', 'いつつ', 'むっつ', 'ななつ'],
    correctAnswer: 1,
    translation: 'Há cinco maçãs na caixa.',
    explanation: 'Na imagem original do teste, a caixa contém 5 maçãs, portanto: 5 objetos (いつつ - itsutsu).'
  },
  {
    id: 28,
    type: 'vocab_reading',
    question: 'めがねは つくえの （　　）に あります。',
    options: ['そば', 'よこ', 'した', 'うえ'],
    correctAnswer: 3,
    translation: 'Os óculos estão em cima da mesa.',
    explanation: 'Na imagem, os óculos estão em cima (うえ - ue) da mesa.'
  },
  {
    id: 29,
    type: 'grammar',
    question: 'まいばん くにの かぞくに でんわします。',
    options: [
      'よるは ときどき くにの かぞくに でんわします。',
      'あさは ときどき くにの かぞくに でんわします。',
      'よるは いつも くにの かぞくに でんわします。',
      'あさは いつも くにの かぞくに でんわします。'
    ],
    correctAnswer: 2,
    translation: 'Qual frase tem o mesmo significado de: Telefono todas as noites para a minha família no meu país.',
    explanation: 'まいばん (todas as noites) equivale a よるは いつも (à noite, sempre).'
  },
  {
    id: 30,
    type: 'grammar',
    question: 'この まちには ゆうめいな たてものが あります。',
    options: [
      'この まちには ゆうめいな ビルが あります。',
      'この まちには ゆうめいな おちゃが あります。',
      'この まちには ゆうめいな ケーキが あります。',
      'この まちには ゆうめいな こうえんが あります。'
    ],
    correctAnswer: 0,
    translation: 'Qual frase tem o mesmo significado de: Há edifícios famosos nesta cidade.',
    explanation: 'A palavra 建物 (たてもの - edifício/prédio) é sinônima de ビル (biru - prédio em katakana).'
  },
  {
    id: 31,
    type: 'grammar',
    question: 'その えいがは おもしろくなかったです。',
    options: [
      'その えいがは たのしかったです。',
      'その えいがは つまらなかったです。',
      'その えいがは みじかかったです。',
      'その えいがは ながかったです。'
    ],
    correctAnswer: 1,
    translation: 'Qual frase tem o mesmo significado de: Aquele filme não foi interessante.',
    explanation: 'Dizer que não foi interessante (おもしろくなかった) é o mesmo que dizer que foi chato (つまらなかった).'
  },
  {
    id: 32,
    type: 'grammar',
    question: 'たんじょうびは 6がつ15にちです。',
    options: [
      '6がつ15にちに けっこんしました。',
      '6がつ15にちに テストが はじまりました。',
      '6がつ15にちに うまれました。',
      '6がつ15にちに くにへ かえりました。'
    ],
    correctAnswer: 2,
    translation: 'Qual frase tem o mesmo significado de: O aniversário é em 15 de junho.',
    explanation: 'O dia do aniversário (たんじょうび) é o mesmo dia em que se nasceu (うまれました - nasceu).'
  },
  {
    id: 33,
    type: 'grammar',
    question: 'にねんまえに きょうとへ いきました。',
    options: [
      'きのう きょうとへ いきました。',
      'おととい きょうとへ いきました。',
      'きょねん きょうとへ いきました。',
      'おととし きょうとへ いきました。'
    ],
    correctAnswer: 3,
    translation: 'Qual frase tem o mesmo significado de: Fui para Quioto há dois anos.',
    explanation: 'A expressão にねんまえ (dois anos atrás) é o mesmo que おととし (ano retrasado / há dois anos).'
  }
];
