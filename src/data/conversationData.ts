import { JLPTLevel } from '../types';

export interface ConversationItem {
  id: string;
  jlpt: JLPTLevel;
  topic: 'Verbos' | 'Adjetivos' | 'Substantivos' | 'Partículas' | 'Frases Úteis' | 'Situações Cotidianas';
  jp: string;
  reading: string;
  romaji: string;
  meaningPt: string;
  explanationPt: string;
}

export const CONVERSATION_DATA: ConversationItem[] = [
  // N5 Examples
  {
    id: 'conv_n5_1',
    jlpt: 'N5',
    topic: 'Frases Úteis',
    jp: 'ありがとうございます。',
    reading: 'ありがとうございます。',
    romaji: 'Arigatou gozaimasu.',
    meaningPt: 'Muito obrigado.',
    explanationPt: 'Expressão padrão de agradecimento formal.'
  },
  {
    id: 'conv_n5_2',
    jlpt: 'N5',
    topic: 'Partículas',
    jp: '私は学生です。',
    reading: 'わたし は がくせい です。',
    romaji: 'Watashi wa gakusei desu.',
    meaningPt: 'Eu sou estudante.',
    explanationPt: 'A partícula は (wa) indica o tópico da frase (Eu).'
  },
  {
    id: 'conv_n5_3',
    jlpt: 'N5',
    topic: 'Verbos',
    jp: '毎日りんごを食べます。',
    reading: 'まいにち りんご を たべます。',
    romaji: 'Mainichi ringo o tabemasu.',
    meaningPt: 'Todos os dias eu como maçã.',
    explanationPt: 'Uso do verbo 食べます (tabemasu - comer) com a partícula de objeto を (o).'
  },
  {
    id: 'conv_n5_4',
    jlpt: 'N5',
    topic: 'Adjetivos',
    jp: 'この本は面白いです。',
    reading: 'この ほん は おもしろい です。',
    romaji: 'Kono hon wa omoshiroi desu.',
    meaningPt: 'Este livro é interessante.',
    explanationPt: 'Adjetivo い (omoshiroi) descrevendo um substantivo.'
  },

  // N4 Examples
  {
    id: 'conv_n4_1',
    jlpt: 'N4',
    topic: 'Verbos',
    jp: '日本へ行ったことがあります。',
    reading: 'にほん へ いった こと が あります。',
    romaji: 'Nihon e itta koto ga arimasu.',
    meaningPt: 'Eu já fui ao Japão.',
    explanationPt: 'Gramática たことがある (ter a experiência de fazer algo).'
  },
  {
    id: 'conv_n4_2',
    jlpt: 'N4',
    topic: 'Situações Cotidianas',
    jp: '窓を開けてもいいですか。',
    reading: 'まど を あけて も いい です か。',
    romaji: 'Mado o akete mo ii desu ka.',
    meaningPt: 'Posso abrir a janela?',
    explanationPt: 'Uso de てもいいですか para pedir permissão.'
  },

  // N3 Examples
  {
    id: 'conv_n3_1',
    jlpt: 'N3',
    topic: 'Verbos',
    jp: '雨が降っているので、試合は中止になった。',
    reading: 'あめ が ふっている ので、しあい は ちゅうし に なった。',
    romaji: 'Ame ga futte iru node, shiai wa chuushi ni natta.',
    meaningPt: 'Como está chovendo, a partida foi cancelada.',
    explanationPt: 'Uso de ので para indicar causa/razão de forma objetiva.'
  },

  // N2 Examples
  {
    id: 'conv_n2_1',
    jlpt: 'N2',
    topic: 'Situações Cotidianas',
    jp: '会議の最中に、携帯電話が鳴ってしまった。',
    reading: 'かいぎ の さいちゅう に、けいたいでんわ が なって しまった。',
    romaji: 'Kaigi no saichuu ni, keitaidenwa ga natte shimatta.',
    meaningPt: 'Bem no meio da reunião, o celular tocou.',
    explanationPt: 'Gramática 最中 (saichuu): "bem no meio de algo".'
  },

  // N1 Examples
  {
    id: 'conv_n1_1',
    jlpt: 'N1',
    topic: 'Verbos',
    jp: '彼の努力には感心させられるものがある。',
    reading: 'かれ の どりょく に は かんしん させられる もの が ある。',
    romaji: 'Kare no doryoku ni wa kanshin saserareru mono ga aru.',
    meaningPt: 'Há algo no esforço dele que me faz admirá-lo profundamente.',
    explanationPt: 'Estrutura causal passiva indicando que uma emoção é forçada a surgir.'
  }
,
  {
    id: "conv_n5_5",
    jlpt: "N5",
    topic: "Substantivos",
    jp: "家族は何人ですか。",
    reading: "かぞく は なんにん です か。",
    romaji: "Kazoku wa nannin desu ka.",
    meaningPt: "Quantas pessoas há na sua família?",
    explanationPt: "Uso de substantivos básicos (família) e o contador para pessoas (nannin)."
  },
  {
    id: "conv_n5_6",
    jlpt: "N5",
    topic: "Verbos",
    jp: "週末に映画を見ます。",
    reading: "しゅうまつ に えいが を みます。",
    romaji: "Shuumatsu ni eiga o mimasu.",
    meaningPt: "No fim de semana eu assisto a um filme.",
    explanationPt: "Uso do verbo 見ます (ver/assistir) e a partícula に indicando o tempo."
  },
  {
    id: "conv_n5_7",
    jlpt: "N5",
    topic: "Situações Cotidianas",
    jp: "駅はどこですか。",
    reading: "えき は どこ です か。",
    romaji: "Eki wa doko desu ka.",
    meaningPt: "Onde fica a estação?",
    explanationPt: "Frase clássica de direção usando o pronome interrogativo どこ (onde)."
  },
  {
    id: "conv_n4_3",
    jlpt: "N4",
    topic: "Verbos",
    jp: "晩ご飯を食べてから、勉強します。",
    reading: "ばんごはん を たべて から、べんきょう します。",
    romaji: "Bangohan o tabete kara, benkyou shimasu.",
    meaningPt: "Depois de comer o jantar, eu estudo.",
    explanationPt: "A gramática てから (te kara) indica que uma ação acontece logo após a outra."
  },
  {
    id: "conv_n4_4",
    jlpt: "N4",
    topic: "Adjetivos",
    jp: "この靴は小さすぎて、足が痛いです。",
    reading: "この くつ は ちいさすぎて、あし が いたい です。",
    romaji: "Kono kutsu wa chiisasugite, ashi ga itai desu.",
    meaningPt: "Este sapato é pequeno demais, meu pé dói.",
    explanationPt: "Uso do sufixo すぎる (sugiru), que significa \"fazer/ser algo em excesso\"."
  },
  {
    id: "conv_n4_5",
    jlpt: "N4",
    topic: "Partículas",
    jp: "誰かに手紙をもらいましたか。",
    reading: "だれか に てがみ を もらいました か。",
    romaji: "Dareka ni tegami o moraimashita ka.",
    meaningPt: "Você recebeu uma carta de alguém?",
    explanationPt: "A partícula に (ni) é usada com o verbo もらう (receber) para indicar de quem se recebe."
  },
  {
    id: "conv_n3_2",
    jlpt: "N3",
    topic: "Verbos",
    jp: "雨が降っているのに、傘をささないで歩いている。",
    reading: "あめ が ふっている のに、かさ を ささないで あるいて いる。",
    romaji: "Ame ga futte iru noni, kasa o sasanaide aruite iru.",
    meaningPt: "Embora esteja chovendo, está andando sem usar o guarda-chuva.",
    explanationPt: "Gramática のに (embora) e ないで (fazer algo sem realizar outra ação)."
  },
  {
    id: "conv_n3_3",
    jlpt: "N3",
    topic: "Situações Cotidianas",
    jp: "会議は午後3時に始まることになっています。",
    reading: "かいぎ は ごご さんじ に はじまる こと に なって います。",
    romaji: "Kaigi wa gogo sanji ni hajimaru koto ni natte imasu.",
    meaningPt: "A reunião está marcada para começar às 3 da tarde.",
    explanationPt: "A expressão ことになっている expressa uma regra, costume ou decisão já definida por outros."
  },
  {
    id: "conv_n3_4",
    jlpt: "N3",
    topic: "Adjetivos",
    jp: "彼の話はいつも面白くて、時間が経つのが早い。",
    reading: "かれ の はなし は いつも おもしろくて、じかん が たつ の が はやい。",
    romaji: "Kare no hanashi wa itsumo omoshirokute, jikan ga tatsu no ga hayai.",
    meaningPt: "A história dele é sempre interessante, o tempo passa rápido.",
    explanationPt: "Uso do adjetivo na forma て para conectar frases e nominalização com の (o ato de o tempo passar)."
  },
  {
    id: "conv_n2_2",
    jlpt: "N2",
    topic: "Verbos",
    jp: "事故のせいで、電車が遅れがちだ。",
    reading: "じこ の せい で、でんしゃ が おくれがち だ。",
    romaji: "Jiko no sei de, densha ga okuregachi da.",
    meaningPt: "Por causa do acidente, os trens tendem a atrasar.",
    explanationPt: "Gramática がち (gachi) indica a tendência de que algo (geralmente negativo) ocorra com frequência."
  },
  {
    id: "conv_n2_3",
    jlpt: "N2",
    topic: "Frases Úteis",
    jp: "ご迷惑をおかけして、誠に申し訳ございません。",
    reading: "ごめいわく を おかけして、まこと に もうしわけございません。",
    romaji: "Gomeiwaku o okakeshite, makoto ni moushiwake gozaimasen.",
    meaningPt: "Peço sinceras desculpas pelo incômodo causado.",
    explanationPt: "Keigo (Linguagem polida): Expressão padrão e formal para pedir desculpas em ambientes de negócios."
  },
  {
    id: "conv_n2_4",
    jlpt: "N2",
    topic: "Substantivos",
    jp: "経験をもとに、新しいビジネスを始める。",
    reading: "けいけん を もと に、あたらしい ビジネス を はじめる。",
    romaji: "Keiken o moto ni, atarashii bijinesu o hajimeru.",
    meaningPt: "Iniciar um novo negócio com base na experiência.",
    explanationPt: "Gramática をもとに (o moto ni): significa \"baseado em\" ou \"com base no alicerce de\"."
  },
  {
    id: "conv_n1_2",
    jlpt: "N1",
    topic: "Situações Cotidianas",
    jp: "彼の無責任な態度には、怒りを禁じ得ない。",
    reading: "かれ の むせきにんな たいど に は、いかり を きんじえない。",
    romaji: "Kare no musekinin na taido ni wa, ikari o kinjienai.",
    meaningPt: "Não consigo evitar a raiva em relação à atitude irresponsável dele.",
    explanationPt: "Expressão literária 禁じ得ない (kinjienai): não conseguir conter uma emoção."
  },
  {
    id: "conv_n1_3",
    jlpt: "N1",
    topic: "Verbos",
    jp: "どんなに困難であろうと、最後までやり抜く覚悟だ。",
    reading: "どんな に こんなん であろう と、さいご まで やりぬく かくご だ。",
    romaji: "Donna ni konnan de arou to, saigo made yarinuku kakugo da.",
    meaningPt: "Por mais difícil que seja, estou determinado a ir até o fim.",
    explanationPt: "Gramática であろうと (mesmo que seja) e o verbo auxiliar 抜く (nuku) que significa \"fazer algo até o fim enfrentando dificuldades\"."
  },
  {
    id: "conv_n1_4",
    jlpt: "N1",
    topic: "Substantivos",
    jp: "この計画は、住民の理解なくしては実現できない。",
    reading: "この けいかく は、じゅうみん の りかい なくして は じつげん できない。",
    romaji: "Kono keikaku wa, juumin no rikai nakushite wa jitsugen dekinai.",
    meaningPt: "Este plano não pode ser realizado sem a compreensão dos moradores.",
    explanationPt: "A gramática なくしては～ない (nakushite wa... nai) enfatiza que \"sem A, B é absolutamente impossível\"."
  }

,
  {
    id: "conv_n5_adj_v_adj_i_n5_1",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "ここは危ないです。",
    reading: "ここ は あぶない です。",
    romaji: "Koko wa abunai desu.",
    meaningPt: "Aqui é perigoso.",
    explanationPt: "Uso do adjetivo 危ない (Perigoso)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_2",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "赤い車が好きです。",
    reading: "あかい くるま が すき です。",
    romaji: "Akai kuruma ga suki desu.",
    meaningPt: "Gosto de carros vermelhos.",
    explanationPt: "Uso do adjetivo 赤い (Vermelho)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_3",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "部屋が明るい。",
    reading: "へや が あかるい。",
    romaji: "Heya ga akarui.",
    meaningPt: "O quarto é iluminado.",
    explanationPt: "Uso do adjetivo 明るい (Claro, iluminado)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_4",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "このケーキは甘いです。",
    reading: "この ケーキ は あまい です。",
    romaji: "Kono keeki wa amai desu.",
    meaningPt: "Este bolo é doce.",
    explanationPt: "Uso do adjetivo 甘い (Doce)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_5",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "空が青いです。",
    reading: "そら が あおい です。",
    romaji: "Sora ga aoi desu.",
    meaningPt: "O céu é azul.",
    explanationPt: "Uso do adjetivo 青い (Azul)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_6",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "新しい靴を買いました。",
    reading: "あたらしい くつ を かいました。",
    romaji: "Atarashii kutsu o kaimashita.",
    meaningPt: "Comprei sapatos novos.",
    explanationPt: "Uso do adjetivo 新しい (Novo)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_7",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "今日は暖かいです。",
    reading: "きょう は あたたかい です。",
    romaji: "Kyou wa atatakai desu.",
    meaningPt: "Hoje está quente/agradável.",
    explanationPt: "Uso do adjetivo 暖かい (Quente (clima, objetos))."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_8",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "厚い本を読みます。",
    reading: "あつい ほん を よみます。",
    romaji: "Atsui hon o yomimasu.",
    meaningPt: "Vou ler um livro grosso.",
    explanationPt: "Uso do adjetivo 厚い (Espesso, grosso)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_9",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "夏は暑いです。",
    reading: "なつ は あつい です。",
    romaji: "Natsu wa atsui desu.",
    meaningPt: "O verão é quente.",
    explanationPt: "Uso do adjetivo 暑い (Quente (clima))."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_10",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "お茶が熱いです。",
    reading: "おちゃ が あつい です。",
    romaji: "Ocha ga atsui desu.",
    meaningPt: "O chá está quente.",
    explanationPt: "Uso do adjetivo 熱い (Quente (ao toque))."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_11",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "小さい犬がいます。",
    reading: "ちいさい いぬ が います。",
    romaji: "Chiisai inu ga imasu.",
    meaningPt: "Tem um cachorro pequeno.",
    explanationPt: "Uso do adjetivo 小さい (Pequeno)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_12",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "駅は近いです。",
    reading: "えき は ちかい です。",
    romaji: "Eki wa chikai desu.",
    meaningPt: "A estação é perto.",
    explanationPt: "Uso do adjetivo 近い (Perto)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_13",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "古いカメラです。",
    reading: "ふるい カメラ です。",
    romaji: "Furui kamera desu.",
    meaningPt: "É uma câmera velha.",
    explanationPt: "Uso do adjetivo 古い (Velho (objetos))."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_14",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "太い木があります。",
    reading: "ふとい き が あります。",
    romaji: "Futoi ki ga arimasu.",
    meaningPt: "Há uma árvore grossa.",
    explanationPt: "Uso do adjetivo 太い (Gordo, espesso)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_15",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "朝早く起きます。",
    reading: "あさ はやく おきます。",
    romaji: "Asa hayaku okimasu.",
    meaningPt: "Acordo cedo de manhã.",
    explanationPt: "Uso do adjetivo 早い (Cedo)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_16",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "走るのが速いです。",
    reading: "はしる の が はやい です。",
    romaji: "Hashiru no ga hayai desu.",
    meaningPt: "É rápido para correr.",
    explanationPt: "Uso do adjetivo 速い (Rápido)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_17",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "背が低いです。",
    reading: "せ が ひくい です。",
    romaji: "Se ga hikui desu.",
    meaningPt: "Minha estatura é baixa.",
    explanationPt: "Uso do adjetivo 低い (Baixo)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_18",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "広い部屋ですね。",
    reading: "ひろい へや ですね。",
    romaji: "Hiroi heya desu ne.",
    meaningPt: "É um quarto espaçoso.",
    explanationPt: "Uso do adjetivo 広い (Largo, espaçoso)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_19",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "車が欲しいです。",
    reading: "くるま が ほしい です。",
    romaji: "Kuruma ga hoshii desu.",
    meaningPt: "Eu quero um carro.",
    explanationPt: "Uso do adjetivo 欲しい (Querer)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_20",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "細い道を行く。",
    reading: "ほそい みち を いく。",
    romaji: "Hosoi michi o iku.",
    meaningPt: "Vá pela estrada estreita.",
    explanationPt: "Uso do adjetivo 細い (Fino)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_21",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "今日は忙しいです。",
    reading: "きょう は いそがしい です。",
    romaji: "Kyou wa isogashii desu.",
    meaningPt: "Hoje estou ocupado.",
    explanationPt: "Uso do adjetivo 忙しい (Ocupado)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_22",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "頭が痛いです。",
    reading: "あたま が いたい です。",
    romaji: "Atama ga itai desu.",
    meaningPt: "Minha cabeça dói.",
    explanationPt: "Uso do adjetivo 痛い (Doloroso)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_23",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "カレーが辛いです。",
    reading: "カレー が からい です。",
    romaji: "Karee ga karai desu.",
    meaningPt: "O curry está picante.",
    explanationPt: "Uso do adjetivo 辛い (Picante)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_24",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "軽いカバンです。",
    reading: "かるい カバン です。",
    romaji: "Karui kaban desu.",
    meaningPt: "É uma bolsa leve.",
    explanationPt: "Uso do adjetivo 軽い (Leve)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_25",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "可愛い猫ですね。",
    reading: "かわいい ねこ ですね。",
    romaji: "Kawaii neko desu ne.",
    meaningPt: "É um gato fofo, não é?",
    explanationPt: "Uso do adjetivo 可愛い (Fofo, bonito)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_26",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "黄色い花です。",
    reading: "きいろい はな です。",
    romaji: "Kiiroi hana desu.",
    meaningPt: "É uma flor amarela.",
    explanationPt: "Uso do adjetivo 黄色い (Amarelo)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_27",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "部屋が汚いです。",
    reading: "へや が きたない です。",
    romaji: "Heya ga kitanai desu.",
    meaningPt: "O quarto está sujo.",
    explanationPt: "Uso do adjetivo 汚い (Sujo)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_28",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "外は暗いです。",
    reading: "そと は くらい です。",
    romaji: "Soto wa kurai desu.",
    meaningPt: "Lá fora está escuro.",
    explanationPt: "Uso do adjetivo 暗い (Escuro)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_29",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "黒い犬を見ました。",
    reading: "くろい いぬ を みました。",
    romaji: "Kuroi inu o mimashita.",
    meaningPt: "Vi um cachorro preto.",
    explanationPt: "Uso do adjetivo 黒い (Preto)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_30",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "丸いテーブルです。",
    reading: "まるい テーブル です。",
    romaji: "Marui teeburu desu.",
    meaningPt: "É uma mesa redonda.",
    explanationPt: "Uso do adjetivo 丸い (Redondo)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_31",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "この料理は不味い。",
    reading: "この りょうり は まずい。",
    romaji: "Kono ryouri wa mazui.",
    meaningPt: "Essa comida é ruim.",
    explanationPt: "Uso do adjetivo 不味い (Ruim (sabor))."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_32",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "髪が短いです。",
    reading: "かみ が みじかい です。",
    romaji: "Kami ga mijikai desu.",
    meaningPt: "O cabelo está curto.",
    explanationPt: "Uso do adjetivo 短い (Curto)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_33",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "テストは難しい。",
    reading: "テスト は むずかしい。",
    romaji: "Tesuto wa muzukashii.",
    meaningPt: "O teste é difícil.",
    explanationPt: "Uso do adjetivo 難しい (Difícil)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_34",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "長い話でした。",
    reading: "ながい はなし でした。",
    romaji: "Nagai hanashi deshita.",
    meaningPt: "Foi uma conversa longa.",
    explanationPt: "Uso do adjetivo 長い (Longo)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_35",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "お茶が温いです。",
    reading: "おちゃ が ぬるい です。",
    romaji: "Ocha ga nurui desu.",
    meaningPt: "O chá está morno.",
    explanationPt: "Uso do adjetivo 温い (Morno)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_36",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "美味しいパンです。",
    reading: "おいしい パン です。",
    romaji: "Oishii pan desu.",
    meaningPt: "É um pão delicioso.",
    explanationPt: "Uso do adjetivo 美味しい (Delicioso)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_37",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "荷物が重いです。",
    reading: "にもつ が おもい です。",
    romaji: "Nimotsu ga omoi desu.",
    meaningPt: "A bagagem está pesada.",
    explanationPt: "Uso do adjetivo 重い (Pesado)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_38",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "面白い映画ですね。",
    reading: "おもしろい えいが ですね。",
    romaji: "Omoshiroi eiga desu ne.",
    meaningPt: "É um filme interessante.",
    explanationPt: "Uso do adjetivo 面白い (Interessante, engraçado)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_39",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "人が多いです。",
    reading: "ひと が おおい です。",
    romaji: "Hito ga ooi desu.",
    meaningPt: "Há muitas pessoas.",
    explanationPt: "Uso do adjetivo 多い (Muitos)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_40",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "大きい家です。",
    reading: "おおきい いえ です。",
    romaji: "Ookii ie desu.",
    meaningPt: "É uma casa grande.",
    explanationPt: "Uso do adjetivo 大きい (Grande)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_41",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "遅い時間ですね。",
    reading: "おそい じかん ですね。",
    romaji: "Osoi jikan desu ne.",
    meaningPt: "É uma hora tardia, não é?",
    explanationPt: "Uso do adjetivo 遅い (Lento, tarde)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_42",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "今日は寒いです。",
    reading: "きょう は さむい です。",
    romaji: "Kyou wa samui desu.",
    meaningPt: "Hoje está frio.",
    explanationPt: "Uso do adjetivo 寒い (Frio (clima))."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_43",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "狭い部屋です。",
    reading: "せまい へや です。",
    romaji: "Semai heya desu.",
    meaningPt: "É um quarto estreito.",
    explanationPt: "Uso do adjetivo 狭い (Estreito)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_44",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "白い雪が降る。",
    reading: "しろい ゆき が ふる。",
    romaji: "Shiroi yuki ga furu.",
    meaningPt: "Cai a neve branca.",
    explanationPt: "Uso do adjetivo 白い (Branco)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_45",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "人が少ないです。",
    reading: "ひと が すくない です。",
    romaji: "Hito ga sukunai desu.",
    meaningPt: "Há poucas pessoas.",
    explanationPt: "Uso do adjetivo 少ない (Poucos)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_46",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "涼しい風が吹く。",
    reading: "すずしい かぜ が ふく。",
    romaji: "Suzushii kaze ga fuku.",
    meaningPt: "Sopra um vento fresco.",
    explanationPt: "Uso do adjetivo 涼しい (Fresco)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_47",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "高い山です。",
    reading: "たかい やま です。",
    romaji: "Takai yama desu.",
    meaningPt: "É uma montanha alta.",
    explanationPt: "Uso do adjetivo 高い (Alto, caro)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_48",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "楽しいパーティーでした。",
    reading: "たのしい パーティー でした。",
    romaji: "Tanoshii paatii deshita.",
    meaningPt: "Foi uma festa divertida.",
    explanationPt: "Uso do adjetivo 楽しい (Divertido)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_49",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "家が遠いです。",
    reading: "いえ が とおい です。",
    romaji: "Ie ga tooi desu.",
    meaningPt: "Minha casa é longe.",
    explanationPt: "Uso do adjetivo 遠い (Longe)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_50",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "詰まらない本です。",
    reading: "つまらない ほん です。",
    romaji: "Tsumaranai hon desu.",
    meaningPt: "É um livro chato.",
    explanationPt: "Uso do adjetivo 詰まらない (Chato, entediante)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_51",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "冷たい水が飲みたい。",
    reading: "つめたい みず が のみたい。",
    romaji: "Tsumetai mizu ga nomitai.",
    meaningPt: "Quero beber água fria.",
    explanationPt: "Uso do adjetivo 冷たい (Frio (ao toque))."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_52",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "強い風が吹く。",
    reading: "つよい かぜ が ふく。",
    romaji: "Tsuyoi kaze ga fuku.",
    meaningPt: "Sopra um vento forte.",
    explanationPt: "Uso do adjetivo 強い (Forte)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_53",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "隣の部屋が煩いです。",
    reading: "となりの へや が うるさい です。",
    romaji: "Tonari no heya ga urusai desu.",
    meaningPt: "O quarto ao lado é barulhento.",
    explanationPt: "Uso do adjetivo 煩い (Barulhento, irritante)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_54",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "薄い紙です。",
    reading: "うすい かみ です。",
    romaji: "Usui kami desu.",
    meaningPt: "É um papel fino.",
    explanationPt: "Uso do adjetivo 薄い (Fino (espessura))."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_55",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "若い先生です。",
    reading: "わかい せんせい です。",
    romaji: "Wakai sensei desu.",
    meaningPt: "É um professor jovem.",
    explanationPt: "Uso do adjetivo 若い (Jovem)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_56",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "悪い天気ですね。",
    reading: "わるい てんき ですね。",
    romaji: "Warui tenki desu ne.",
    meaningPt: "O tempo está ruim, né.",
    explanationPt: "Uso do adjetivo 悪い (Mau, ruim)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_57",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "易しい問題です。",
    reading: "やさしい もんだい です。",
    romaji: "Yasashii mondai desu.",
    meaningPt: "É um problema fácil.",
    explanationPt: "Uso do adjetivo 易しい (Fácil)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_58",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "この鞄は安いです。",
    reading: "この かばん は やすい です。",
    romaji: "Kono kaban wa yasui desu.",
    meaningPt: "Esta bolsa é barata.",
    explanationPt: "Uso do adjetivo 安い (Barato)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_59",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "良い天気です。",
    reading: "いい てんき です。",
    romaji: "Ii tenki desu.",
    meaningPt: "Está um tempo bom.",
    explanationPt: "Uso do adjetivo 良い (Bom)."
  },
  {
    id: "conv_n5_adj_v_adj_i_n5_60",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "私は体が弱いです。",
    reading: "わたし は からだ が よわい です。",
    romaji: "Watashi wa karada ga yowai desu.",
    meaningPt: "Meu corpo é fraco.",
    explanationPt: "Uso do adjetivo 弱い (Fraco)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_1",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "とても便利です。",
    reading: "とても べんり です。",
    romaji: "Totemo benri desu.",
    meaningPt: "É muito conveniente.",
    explanationPt: "Uso do adjetivo 便利 (Conveniente, útil)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_2",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "大丈夫ですか。",
    reading: "だいじょうぶ ですか。",
    romaji: "Daijoubu desu ka?",
    meaningPt: "Você está bem?",
    explanationPt: "Uso do adjetivo 大丈夫 (Tudo bem, OK)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_3",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "猫が大好きです。",
    reading: "ねこ が だいすき です。",
    romaji: "Neko ga daisuki desu.",
    meaningPt: "Amo gatos.",
    explanationPt: "Uso do adjetivo 大好き (Amar, gostar muito)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_4",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "お元気ですか。",
    reading: "おげんき ですか。",
    romaji: "Ogenki desu ka?",
    meaningPt: "Como você está?",
    explanationPt: "Uso do adjetivo 元気 (Saudável, com energia)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_5",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "歌が下手です。",
    reading: "うた が へた です。",
    romaji: "Uta ga heta desu.",
    meaningPt: "Sou ruim em cantar.",
    explanationPt: "Uso do adjetivo 下手 (Ruim (em algo))."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_6",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "明日は暇です。",
    reading: "あした は ひま です。",
    romaji: "Ashita wa hima desu.",
    meaningPt: "Amanhã estarei livre.",
    explanationPt: "Uso do adjetivo 暇 (Livre (tempo))."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_7",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "それは本当ですか。",
    reading: "それ は ほんとう ですか。",
    romaji: "Sore wa hontou desu ka?",
    meaningPt: "Isso é verdade?",
    explanationPt: "Uso do adjetivo 本当 (Verdade)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_8",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "色々な人がいます。",
    reading: "いろいろな ひと が います。",
    romaji: "Iroiro na hito ga imasu.",
    meaningPt: "Existem várias pessoas.",
    explanationPt: "Uso do adjetivo 色々 (Vários)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_9",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "雨は嫌です。",
    reading: "あめ は いや です。",
    romaji: "Ame wa iya desu.",
    meaningPt: "Não gosto de chuva.",
    explanationPt: "Uso do adjetivo 嫌 (Desagradável)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_10",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "この鞄は丈夫です。",
    reading: "この かばん は じょうぶ です。",
    romaji: "Kono kaban wa joubu desu.",
    meaningPt: "Esta bolsa é resistente.",
    explanationPt: "Uso do adjetivo 丈夫 (Forte, resistente)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_11",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "日本語が上手ですね。",
    reading: "にほんご が じょうず ですね。",
    romaji: "Nihongo ga jouzu desu ne.",
    meaningPt: "Você é bom em japonês, né.",
    explanationPt: "Uso do adjetivo 上手 (Habilidoso, bom)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_12",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "もう結構です。",
    reading: "もう けっこう です。",
    romaji: "Mou kekkou desu.",
    meaningPt: "Já é o suficiente / Não, obrigado.",
    explanationPt: "Uso do adjetivo 結構 (Suficiente, esplêndido)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_13",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "野菜が嫌いです。",
    reading: "やさい が きらい です。",
    romaji: "Yasai ga kirai desu.",
    meaningPt: "Odeio vegetais.",
    explanationPt: "Uso do adjetivo 嫌い (Odiar, não gostar)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_14",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "綺麗な花ですね。",
    reading: "きれいな はな ですね。",
    romaji: "Kirei na hana desu ne.",
    meaningPt: "É uma flor bonita, não é?",
    explanationPt: "Uso do adjetivo 綺麗 (Bonito, limpo)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_15",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "真っ直ぐ行ってください。",
    reading: "まっすぐ いって ください。",
    romaji: "Massugu itte kudasai.",
    meaningPt: "Por favor, siga em frente.",
    explanationPt: "Uso do adjetivo 真っ直ぐ (Reto, em frente)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_16",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "賑やかな町です。",
    reading: "にぎやかな まち です。",
    romaji: "Nigiyaka na machi desu.",
    meaningPt: "É uma cidade movimentada.",
    explanationPt: "Uso do adjetivo 賑やか (Movimentado, animado)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_17",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "立派な家ですね。",
    reading: "りっぱな いえ ですね。",
    romaji: "Rippa na ie desu ne.",
    meaningPt: "É uma casa esplêndida.",
    explanationPt: "Uso do adjetivo 立派 (Esplêndido, excelente)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_18",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "静かな部屋です。",
    reading: "しずかな へや です。",
    romaji: "Shizuka na heya desu.",
    meaningPt: "É um quarto silencioso.",
    explanationPt: "Uso do adjetivo 静か (Silencioso, quieto)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_19",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "音楽が好きです。",
    reading: "おんがく が すき です。",
    romaji: "Ongaku ga suki desu.",
    meaningPt: "Gosto de música.",
    explanationPt: "Uso do adjetivo 好き (Gostar)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_20",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "明日は多分雨です。",
    reading: "あした は たぶん あめ です。",
    romaji: "Ashita wa tabun ame desu.",
    meaningPt: "Amanhã provavelmente choverá.",
    explanationPt: "Uso do adjetivo 多分 (Provavelmente, talvez)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_21",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "仕事が大変です。",
    reading: "しごと が たいへん です。",
    romaji: "Shigoto ga taihen desu.",
    meaningPt: "O trabalho é difícil.",
    explanationPt: "Uso do adjetivo 大変 (Difícil, muito)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_22",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "家族は大切です。",
    reading: "かぞく は たいせつ です。",
    romaji: "Kazoku wa taisetsu desu.",
    meaningPt: "A família é importante.",
    explanationPt: "Uso do adjetivo 大切 (Importante)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_23",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "人が沢山います。",
    reading: "ひと が たくさん います。",
    romaji: "Hito ga takusan imasu.",
    meaningPt: "Há muitas pessoas.",
    explanationPt: "Uso do adjetivo 沢山 (Muitos, bastante)."
  },
  {
    id: "conv_n5_adj_v_adj_na_n5_24",
    jlpt: "N5",
    topic: "Adjetivos",
    jp: "有名な人です。",
    reading: "ゆうめいな ひと です。",
    romaji: "Yuumei na hito desu.",
    meaningPt: "É uma pessoa famosa.",
    explanationPt: "Uso do adjetivo 有名 (Famoso)."
  }

];