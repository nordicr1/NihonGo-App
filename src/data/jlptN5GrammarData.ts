import { JLPTQuestion } from './jlptN5TestData';

export const JLPT_N5_GRAMMAR_TEST: JLPTQuestion[] = [
  {
    id: 34,
    type: 'grammar',
    question: '日本（　　）ラーメンは おいしいです。',
    options: ['に', 'の', 'を', 'へ'],
    correctAnswer: 1,
    translation: 'O lámen do Japão é gostoso.',
    explanation: 'Para indicar a origem/pertencimento do lámen (lámen do Japão), usa-se a partícula の (no).'
  },
  {
    id: 35,
    type: 'grammar',
    question: 'わたしには きょうだいが 二人 います。弟（　　）妹です。',
    options: ['は', 'も', 'と', 'か'],
    correctAnswer: 2,
    translation: 'Eu tenho dois irmãos. Um irmão mais novo e uma irmã mais nova.',
    explanation: 'Para listar itens de forma exata e completa (irmão E irmã), usa-se a partícula と (to).'
  },
  {
    id: 36,
    type: 'grammar',
    question: '山下「田中さん（　　）きのう どこかに 出かけましたか。」田中「いいえ、いえに いました。」',
    options: ['で', 'は', 'を', 'に'],
    correctAnswer: 1,
    translation: 'Yamashita: "Sr. Tanaka, você saiu para algum lugar ontem?" Tanaka: "Não, eu estava em casa."',
    explanation: 'A partícula は (wa) é usada para marcar o tópico da frase, neste caso, perguntando sobre as ações do Tanaka-san.'
  },
  {
    id: 37,
    type: 'grammar',
    question: '（タクシーで）\nA「つぎの かどを 右（　　）まがって ください。」\nB「わかりました。」',
    options: ['が', 'や', 'か', 'に'],
    correctAnswer: 3,
    translation: 'A: "Por favor, vire à direita na próxima esquina." B: "Entendido."',
    explanation: 'Com o verbo 曲がる (magaru - virar), a direção para onde se vira é indicada pela partícula に (ni) ou へ (e). Aqui, に.'
  },
  {
    id: 38,
    type: 'grammar',
    question: 'きのう、わたしは ひとり（　　）えいがを 見に 行きました。',
    options: ['が', 'を', 'で', 'は'],
    correctAnswer: 2,
    translation: 'Ontem, eu fui ver um filme sozinho.',
    explanation: 'A partícula で (de) após ひとり (uma pessoa) significa "sozinho/por si só" (ひとりで).'
  },
  {
    id: 39,
    type: 'grammar',
    question: '山下「今日 パーティーが ありますから、田中さん（　　）来て ください。」田中「ありがとうございます。」',
    options: ['に', 'も', 'や', 'で'],
    correctAnswer: 1,
    translation: 'Yamashita: "Como hoje tem festa, Sr. Tanaka, venha também, por favor." Tanaka: "Muito obrigado."',
    explanation: 'O uso de も (mo) adiciona o sentido de "também" (venha também).'
  },
  {
    id: 40,
    type: 'grammar',
    question: '田中「この ぼうしは 山田さん（　　）ですか。」\n山田「はい。」',
    options: ['や', 'は', 'の', 'か'],
    correctAnswer: 2,
    translation: 'Tanaka: "Este chapéu é do Sr. Yamada?" Yamada: "Sim."',
    explanation: 'A partícula の (no) é usada para indicar posse. 山田さんの (do Yamada-san).'
  },
  {
    id: 41,
    type: 'grammar',
    question: '駅まで タクシーで 1000円（　　）です。',
    options: ['ぐらい', 'など', 'ごろ', 'も'],
    correctAnswer: 0,
    translation: 'Até a estação, de táxi, custa mais ou menos 1000 ienes.',
    explanation: 'Para quantidades ou preços aproximados, usa-se ぐらい/くらい (gurai). ごろ (goro) é só para pontos no tempo.'
  },
  {
    id: 42,
    type: 'grammar',
    question: 'A「さようなら。」\nB「さようなら。また（　　）。」',
    options: ['おととい', '今日', '来週', '今月'],
    correctAnswer: 2,
    translation: 'A: "Tchau." B: "Tchau. Até a semana que vem."',
    explanation: 'A despedida "また来週" (mata raishuu) significa "até a semana que vem".'
  },
  {
    id: 43,
    type: 'grammar',
    question: 'わたしの 母は 50さいです。父は 55さいです。母は 父（　　）5さい わかいです。',
    options: ['から', 'まで', 'より', 'のほうが'],
    correctAnswer: 2,
    translation: 'Minha mãe tem 50 anos. Meu pai tem 55 anos. Minha mãe é 5 anos mais jovem que meu pai.',
    explanation: 'Em frases de comparação, usa-se より (yori) que significa "do que". "Mais jovem que o pai" = 父より若い.'
  },
  {
    id: 44,
    type: 'grammar',
    question: '子ども「いただきます。」\n母「あ、食べる（　　）手を あらいましょう。」',
    options: ['まえに', 'のまえに', 'あとに', 'のあとに'],
    correctAnswer: 0,
    translation: 'Filho: "Vou comer." Mãe: "Ah, vamos lavar as mãos antes de comer."',
    explanation: 'Antes de uma ação de um verbo usa-se a forma de dicionário do verbo + まえに (mae ni). 食べるまえに (taberu mae ni).'
  },
  {
    id: 45,
    type: 'grammar',
    question: 'A「東京でも 雪が ふりますか。」\nB「ええ、ふりますよ。でも、きょねんは あまり（　　）。」',
    options: ['ふりませんでした', 'ふりません', 'ふりました', 'ふります'],
    correctAnswer: 0,
    translation: 'A: "Em Tóquio também neva?" B: "Sim, neva. Mas no ano passado não nevou muito."',
    explanation: 'A frase fala do ano passado (きょねん) com "あまり" (muito), exigindo verbo no passado e na forma negativa: ふりませんでした.'
  },
  {
    id: 46,
    type: 'grammar',
    question: '（川で）\nA「見て ください。小さな 魚が たくさん（　　）よ。」\nB「ほんとうですね。30ぴきくらい いますね。」',
    options: ['およぎます', 'およぎません', 'およぎました', 'およいで います'],
    correctAnswer: 3,
    translation: 'A: "Olhe. Têm muitos peixes pequenos nadando!" B: "É verdade. Têm uns 30."',
    explanation: 'A ação está acontecendo neste exato momento (V-te imasu). 泳いでいます (oyoide imasu - estão nadando).'
  },
  {
    id: 47,
    type: 'grammar',
    question: '中川「山田さんの その カメラは いいですね。どこで かいましたか。」\n山田「いえ、これは 兄に（　　）。」',
    options: ['あげました', 'もらいました', 'うりました', 'かいました'],
    correctAnswer: 1,
    translation: 'Nakagawa: "Essa sua câmera é boa. Onde você comprou?" Yamada: "Não comprei, eu recebi do meu irmão mais velho."',
    explanation: 'A partícula に (ou から) depois de "irmão" indica a fonte de onde ele recebeu a câmera. O verbo receber é もらいました (moraimashita).'
  },
  {
    id: 48,
    type: 'grammar',
    question: 'たまごりょうりの じょうずな 作りかたを（　　）読みました。',
    options: ['何に', '何も', '何かへ', '何かで'],
    correctAnswer: 3,
    translation: 'Eu li como fazer um bom prato de ovos em algum lugar.',
    explanation: '何かで (nani ka de) significa "em alguma coisa / em algum lugar". A partícula で indica o meio (ex: em um livro ou revista).'
  },
  {
    id: 49,
    type: 'grammar',
    question: '（電話で）\n本田「はい、本田です。」\n北山「あ、北山花子です。すみません、（　　）。」\n本田「はい。ちょっと まって くださいね。」',
    options: ['ひろこさんを おねがいします', 'ひろこさんを ください', 'ひろこさんと 話しますか', 'ひろこさんと 話しませんか'],
    correctAnswer: 0,
    translation: 'Honda: "Alô, aqui é Honda." Kitayama: "Ah, aqui é a Hanako Kitayama. Com licença, poderia chamar a Hiroko?" Honda: "Sim, um momento."',
    explanation: 'A expressão correta no telefone para pedir para chamar alguém é "[Nome] を お願いします" (o onegaishimasu).'
  },
  {
    id: 60,
    type: 'reading',
    question: '【読解 - Texto 3】\nわたしは 今日、友だちと 買い物に 行きました。3か月前に 見た えいがの DVDが ほしかったからです。買った DVDは、友だちや 姉と いっしょに 見ます。\n\n--- 27 「わたし」は 今日、何を しましたか。',
    options: [
      '友だちと えいがを 見に 行きました。',
      '友だちと DVDを 買いに 行きました。',
      '姉と えいがを 見に 行きました。',
      '姉と DVDを 買いに 行きました。'
    ],
    correctAnswer: 1,
    translation: 'Pergunta 27: O que "eu" fiz hoje?',
    explanation: 'O texto diz explicitamente "わたしは 今日、友だちと 買い物に 行きました" (Hoje eu fui fazer compras com meu amigo) e logo depois cita que foi comprar o DVD. Portanto: Foi comprar o DVD com o amigo.'
  },
  {
    id: 62,
    type: 'reading',
    question: '【読解 - Texto 5】\n森さんの 机の 上に、山口先生の メモと 本が あります。\n[MEMO]\n森さん\nクラスで 使う 本を 中川先生に かりました。5ページを 25枚 コピーして ください。コピーは 南さんに わたして ください。本は、わたしが あした かえしますから、わたしの 机の 上に おいて ください。 -- 山口\n\n--- 29 森さんは コピーを した あとで、本を どうしますか。',
    options: [
      'クラスで 使います。',
      '南さんに わたします。',
      '中川先生に かえします。',
      '山口先生の 机の 上に おきます。'
    ],
    correctAnswer: 3,
    translation: 'Pergunta 29: O que o sr. Mori fará com o livro DEPOIS de tirar as cópias?',
    explanation: 'O bilhete do professor Yamaguchi diz: "本は(...) わたしの 机の 上に おいて ください" (O livro, por favor, coloque em cima da MINHA mesa). Apenas as cópias vão para o sr. Minami.'
  },
  {
    id: 63,
    type: 'reading',
    question: '【読解 - Texto 6】\nきのうの 夜は おそくまで しごとを しました。とても つかれました。しごとの あと、電車で 帰りました。家の 近くの 駅で 電車を おりました。外は 雨でしたが、わたしは かさが ありませんでした。とても こまりました。駅の 人が わたしを 見て、「あの はこの 中の かさを 使って ください」と 言いました。(...) 「お金は いりません。あした、あの はこに かえして ください」と。\n\n--- 30 どうして こまりましたか。',
    options: [
      'おそい 時間に 駅に 着いたから',
      'しごとが たくさん あったから',
      'とても つかれたから',
      'かさが なかったから'
    ],
    correctAnswer: 3,
    translation: 'Pergunta 30: Por que ele ficou em apuros (komarimashita)?',
    explanation: 'O texto diz "外は 雨でしたが、わたしは かさが ありませんでした。とても こまりました" (Lá fora chovia, mas eu não tinha guarda-chuva. Fiquei muito em apuros). A causa é a falta de guarda-chuva.'
  }
];
