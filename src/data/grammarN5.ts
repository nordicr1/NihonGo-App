import { GrammarItem } from '../types';

export const GRAMMAR_N5: GrammarItem[] = [
  {
    id: 'g_n5_1',
    pattern: 'A は B です (A wa B desu)',
    titlePt: 'Estrutura Básica de Frase: "A é B"',
    jlpt: 'N5',
    category: 'Estruturas Básicas',
    formationFormula: '[Substantivo A] + は (lê-se "wa") + [Substantivo / Adjetivo B] + です',
    explanationPt: 'A partícula は (escrita como "ha", mas pronunciada "wa") indica o Tópico da frase (aquilo sobre o qual estamos falando). O termo です (desu) é a cópula formal que equivale a "é / sou / somos".',
    keyRulePt: '• Forma Negativa: A は B ではありません (dewa arimasen) ou じゃありません (ja arimasen).\n• Forma Interrogativa: basta acrescentar a partícula か (ka) no final da frase sem ponto de interrogação.',
    examples: [
      {
        jp: '私は学生です。',
        reading: 'わたし は がくせい です。',
        romaji: 'Watashi wa gakusei desu.',
        meaningPt: 'Eu sou estudante.'
      },
      {
        jp: '田中さんは日本人です。',
        reading: 'たなかさん は にほんじん です。',
        romaji: 'Tanaka-san wa nihonjin desu.',
        meaningPt: 'O Sr. Tanaka é japonês.'
      },
      {
        jp: 'これはペンではありません。',
        reading: 'これ は ペン ではありません。',
        romaji: 'Kore wa pen dewa arimasen.',
        meaningPt: 'Isto não é uma caneta.'
      }
    ]
  },
  {
    id: 'g_n5_2_1',
    pattern: 'Partículas Básicas: は (wa), が (ga), を (o), も (mo)',
    titlePt: 'Partículas (Parte 1): Tópico, Sujeito e Objeto',
    jlpt: 'N5',
    category: 'Partículas',
    formationFormula: '[Substantivo] + は / が / を / も + [Predicado]',
    explanationPt: 'As partículas são o "coração" da gramática japonesa. Elas indicam qual o papel da palavra dentro da frase (se é o sujeito, o objeto, etc.). Esta primeira parte cobre as partículas essenciais de identificação.',
    keyRulePt: '• は (wa): Marca o Tópico (sobre o que estamos falando). Ex: 私は学生です (Eu sou estudante).\n• が (ga): Marca o Sujeito da ação ou o foco de uma nova informação (quem fez algo). Ex: 雨が降る (A chuva cai).\n• を (o): Marca o Objeto Direto (a coisa/alvo que sofre a ação). Ex: 本を読む (Ler livro).\n• も (mo): Significa "Também". Ele substitui as partículas は, が e を. Ex: 私も行く (Eu também vou).',
    examples: [
      {
        jp: '私はりんごを食べます。',
        reading: 'わたし は りんご を たべます。',
        romaji: 'Watashi wa ringo o tabemasu.',
        meaningPt: 'Quanto a mim (Tópico は), eu como maçã (Objeto を).'
      },
      {
        jp: '田中さんも行きます。',
        reading: 'たなかさん も いきます。',
        romaji: 'Tanaka-san mo ikimasu.',
        meaningPt: 'O Sr. Tanaka também vai.'
      }
    ]
  },
  {
    id: 'g_n5_2_2',
    pattern: 'Partículas de Local: に (ni), で (de), へ (e)',
    titlePt: 'Partículas (Parte 2): Local e Direção',
    jlpt: 'N5',
    category: 'Partículas',
    formationFormula: '[Local / Meio] + に / で / へ + [Verbo]',
    explanationPt: 'Estas partículas são usadas para indicar onde uma ação acontece, para onde você está indo, ou com qual ferramenta algo é feito.',
    keyRulePt: '• に (ni): Indica um destino exato (日本に行く - ir ao Japão), um local estático (部屋にいる - estar no quarto) ou um tempo pontual (7時に - às 7h).\n• で (de): Indica o local onde uma ação ocorre (学校で勉強する - estudar na escola) ou a ferramenta/meio utilizado (箸で食べる - comer com hashi; バスで行く - ir de ônibus).\n• へ (e): Indica a direção geral de um movimento. É parecido com "ni", mas enfatiza o trajeto/direção (家へ帰る - voltar em direção a casa).',
    examples: [
      {
        jp: '公園で遊びます。',
        reading: 'こうえん で あそびます。',
        romaji: 'Kouen de asobimasu.',
        meaningPt: 'Brincar no parque (Ação no local - で).'
      },
      {
        jp: '三時に学校へ行きます。',
        reading: 'さんじ に がっこう へ いきます。',
        romaji: 'Sanji ni gakkou e ikimasu.',
        meaningPt: 'Vou em direção à escola (へ) às 3 horas (に).'
      }
    ]
  },
  {
    id: 'g_n5_2_3',
    pattern: 'Partículas de Ligação: と (to), から (kara), まで (made)',
    titlePt: 'Partículas (Parte 3): Ligação e Períodos',
    jlpt: 'N5',
    category: 'Partículas',
    formationFormula: '[Substantivo] + と / から / まで',
    explanationPt: 'Aqui veremos as partículas usadas para conectar múltiplos itens, indicar companhias e determinar o início e o fim de algo (no tempo ou no espaço).',
    keyRulePt: '• と (to): Funciona como a conjunção "e" ao listar substantivos (犬と猫 - cachorro e gato) ou como "com" para indicar companhia (友達と行く - ir com o amigo).\n• から (kara): Indica o ponto de origem, equivalente a "de" ou "a partir de" (ここから - a partir daqui; 9時から - a partir das 9h).\n• まで (made): Indica o limite ou fim, equivalente a "até" (東京まで - até Tóquio; 5時まで - até as 5h).',
    examples: [
      {
        jp: '友達と東京から大阪まで行きます。',
        reading: 'ともだち と とうきょう から おおさか まで いきます。',
        romaji: 'Tomodachi to Toukyou kara Oosaka made ikimasu.',
        meaningPt: 'Vou com meu amigo de Tóquio até Osaka.'
      },
      {
        jp: 'パンと牛乳を買いました。',
        reading: 'パン と ぎゅうにゅう を かいました。',
        romaji: 'Pan to gyuunyuu o kaimashita.',
        meaningPt: 'Comprei pão e leite.'
      }
    ]
  },
  {
    id: 'g_n5_3',
    pattern: 'Conjugação Formal (〜ます / 〜ません / 〜ました / 〜ませんでした)',
    titlePt: 'Tempos Verbais Polidos na Forma MASU',
    jlpt: 'N5',
    category: 'Verbos & Conjugação',
    formationFormula: '[Raiz do Verbo] + ます (presente/futuro) / ません (negativo) / ました (passado) / ませんでした (passado negativo)',
    explanationPt: 'É o padrão de polidez (Teineigo) usado com professores, colegas de trabalho e desconhecidos.',
    keyRulePt: '• Presente / Futuro Afirmativo: 食べます (como / comerei)\n• Presente / Futuro Negativo: 食べません (não como / não comerei)\n• Passado Afirmativo: 食べました (comi)\n• Passado Negativo: 食べませんでした (não comi)',
    examples: [
      {
        jp: '昨日、日本語を勉強しました。',
        reading: 'きのう、にほんご を べんきょう しました。',
        romaji: 'Kinou, nihongo o benkyou shimashita.',
        meaningPt: 'Ontem estudei japonês.'
      },
      {
        jp: '明日は働きません。',
        reading: 'あした は はたらきません。',
        romaji: 'Ashita wa hatarakimasen.',
        meaningPt: 'Amanhã não irei trabalhar.'
      }
    ]
  },
  {
    id: 'g_n5_4',
    pattern: 'Verbo em Forma-TE + ください (~te kudasai)',
    titlePt: 'Pedidos e Instruções Polidas: "Por favor, faça..."',
    jlpt: 'N5',
    category: 'Pedidos & Ordens',
    formationFormula: '[Verbo na forma-TE] + ください',
    explanationPt: 'A forma-TE é o conector verbal universal em japonês. Adicionar ください cria um pedido educado.',
    keyRulePt: '• Grupo 1 (Godan): 待つ → 待って (matte), 飲む → 飲んで (nonde), 書く → 書いて (kaite; exceto 行く → 行って), 話す → 話して (hanashite).\n• Grupo 2 (Ichidan): 食べる → 食べて (tabete), 見る → 見て (mite).\n• Grupo 3 (Irregulares): する → して (shite), 来る → きて (kite).',
    examples: [
      {
        jp: 'ちょっと待ってください。',
        reading: 'ちょっと まってください。',
        romaji: 'Chotto matte kudasai.',
        meaningPt: 'Por favor, espere um instante.'
      },
      {
        jp: '日本語で話してください。',
        reading: 'にほんご で はなして ください。',
        romaji: 'Nihongo de hanashite kudasai.',
        meaningPt: 'Por favor, fale em japonês.'
      }
    ]
  },
  {
    id: 'g_n5_5',
    pattern: 'Verbo em Forma-TE + います (~te imasu)',
    titlePt: 'Ação Contínua / Estado Atual (Gerúndio e Condição)',
    jlpt: 'N5',
    category: 'Aspecto Verbal',
    formationFormula: '[Verbo na forma-TE] + います / いません / いました',
    explanationPt: 'Expressa duas ideias fundamentais: 1) Ação acontecendo agora mesmo ("estou comendo"), 2) Estado resultante contínuo ("estou casado", "moro em Tóquio", "conheço").',
    keyRulePt: '• Ação contínua: 今、本を読んでいます (Estou lendo um livro agora).\n• Estado contínuo: 東京に住んでいます (Moro em Tóquio - estado permanente).\n• Conhecimento: 知っています (Sei / Conheço). Negativo: 知りません (Não sei).',
    examples: [
      {
        jp: '今、日本語を勉強しています。',
        reading: 'いま、にほんご を べんきょう しています。',
        romaji: 'Ima, nihongo o benkyou shite imasu.',
        meaningPt: 'Estou estudando japonês agora.'
      },
      {
        jp: '田中さんは東京に住んでいます。',
        reading: 'たなかさん は とうきょう に すんでいます。',
        romaji: 'Tanaka-san wa Toukyou ni sunde imasu.',
        meaningPt: 'O Sr. Tanaka mora em Tóquio.'
      }
    ]
  },
  {
    id: 'g_n5_6',
    pattern: 'Verbo em Forma-TE + もいいですか (~te mo ii desu ka)',
    titlePt: 'Pedir Permissão: "Posso fazer...?"',
    jlpt: 'N5',
    category: 'Permissão & Proibição',
    formationFormula: '[Verbo na forma-TE] + もいいですか',
    explanationPt: 'Estrutura gentil usada para pedir autorização para realizar alguma ação.',
    keyRulePt: '• Para responder concedendo permissão: ええ、いいですよ (Sim, pode).\n• Para proibir (Proibição Formal): Forma-TE + は行けません / はだめです (~te wa ikemasen / wa dame desu = "Não pode fazer isso").',
    examples: [
      {
        jp: '写真を撮ってもいいですか。',
        reading: 'しゃしん を とっても いいですか。',
        romaji: 'Shashin o totte mo ii desu ka.',
        meaningPt: 'Posso tirar uma foto?'
      },
      {
        jp: 'ここでタバコを吸ってはいけません。',
        reading: 'ここで タバコ を すっては いけません。',
        romaji: 'Koko de tabako o sutte wa ikemasen.',
        meaningPt: 'Não se pode fumar aqui (É proibido fumar aqui).'
      }
    ]
  },
  {
    id: 'g_n5_7',
    pattern: 'Verbo em Forma-NAI + でください (~naide kudasai)',
    titlePt: 'Pedido Negativo: "Por favor, não faça..."',
    jlpt: 'N5',
    category: 'Pedidos & Ordens',
    formationFormula: '[Verbo na forma-NAI (negativa informal)] + でください',
    explanationPt: 'Usado para pedir encarecidamente que alguém não execute determinada ação.',
    keyRulePt: '• Godan: termina em som "a" + ない (書く → 書かない → 書かないでください).\n• Ichidan: tira o る + ない (食べる → 食べない → 食べないでください).\n• Irregulares: する → しないでください / 来る → こないでください (k兇naide kudasai).',
    examples: [
      {
        jp: 'ここで写真を撮らないでください。',
        reading: 'ここで しゃしん を とらないで ください。',
        romaji: 'Koko de shashin o toranaide kudasai.',
        meaningPt: 'Por favor, não tire fotos aqui.'
      },
      {
        jp: '忘れないでください。',
        reading: 'わすれないで ください。',
        romaji: 'Wasurenaide kudasai.',
        meaningPt: 'Por favor, não se esqueça.'
      }
    ]
  },
  {
    id: 'g_n5_8',
    pattern: 'Raiz MASU + たいです (~tai desu)',
    titlePt: 'Expressar Desejo Próprio: "Quero fazer..."',
    jlpt: 'N5',
    category: 'Desejos & Vontades',
    formationFormula: '[Raiz do Verbo (sem "masu")] + たいです',
    explanationPt: 'Expressa o desejo do próprio falante (primeira pessoa). O objeto pode ser marcado tanto por を quanto por が.',
    keyRulePt: 'Conjugação do たい segue a tabela de Adjetivos-I:\n• Negativo: 行きたくない (não quero ir)\n• Passado: 行きたかった (quis ir)\n• Passado Negativo: 行きたくなかった (não quis ir)',
    examples: [
      {
        jp: '日本へ行きたいです。',
        reading: 'にほん へ いきたい です。',
        romaji: 'Nihon e ikitai desu.',
        meaningPt: 'Eu quero ir para o Japão.'
      },
      {
        jp: '冷たい水を飲みたいです。',
        reading: 'つめたい みず を のみたい です。',
        romaji: 'Tsumetai mizu o nomitai desu.',
        meaningPt: 'Quero beber água gelada.'
      }
    ]
  },
  {
    id: 'g_n5_9',
    pattern: 'Verbo (Forma Dicionário) + ことができます (~koto ga dekimasu)',
    titlePt: 'Capacidade & Potencial: "Consigo / Posso fazer..."',
    jlpt: 'N5',
    category: 'Habilidade & Capacidade',
    formationFormula: '[Verbo na Forma Dicionário] + ことができます / できません',
    explanationPt: 'Nominaliza o verbo com こと (koto) e adiciona ができます para expressar capacidade física, habilidade aprendida ou permissão ambiental.',
    keyRulePt: 'Na negativa vira ことができません ("não consigo / não posso").',
    examples: [
      {
        jp: '日本語を話すことができます。',
        reading: 'にほんご を はなす ことが できます。',
        romaji: 'Nihongo o hanasu koto ga dekimasu.',
        meaningPt: 'Consigo falar japonês.'
      },
      {
        jp: '漢字を百個書くことができます。',
        reading: 'かんじ を ひゃっこ かく ことが できます。',
        romaji: 'Kanji o hyakko kaku koto ga dekimasu.',
        meaningPt: 'Consigo escrever 100 kanjis.'
      }
    ]
  },
  {
    id: 'g_n5_10',
    pattern: 'Verbo (Forma-TA) + ことがあります (~ta koto ga arimasu)',
    titlePt: 'Experiência de Vida: "Já fiz / Já estive em..."',
    jlpt: 'N5',
    category: 'Experiências',
    formationFormula: '[Verbo na forma-TA (passado informal)] + ことがあります / ありません',
    explanationPt: 'Usado para relatar vivências que ocorreram ao menos uma vez ao longo da vida.',
    keyRulePt: '• Afirmativo: 〜たことがあります (Já fiz)\n• Negativo: 〜たことがありません (Nunca fiz)',
    examples: [
      {
        jp: '富士山に登ったことがあります。',
        reading: 'ふじさん に のぼった ことが あります。',
        romaji: 'Fujisan ni nobotta koto ga arimasu.',
        meaningPt: 'Já subi o Monte Fuji.'
      },
      {
        jp: '納豆を食べたことがありません。',
        reading: 'なっとう を たべた ことが ありません。',
        romaji: 'Nattou o tabeta koto ga arimasen.',
        meaningPt: 'Nunca comi natto.'
      }
    ]
  },
  {
    id: 'g_n5_11',
    pattern: 'Verbo A (Forma-TA) + り, Verbo B + り します (~tari ~tari shimasu)',
    titlePt: 'Ações Exemplificativas: "Faço coisas como A e B..."',
    jlpt: 'N5',
    category: 'Listagem de Ações',
    formationFormula: '[Verbo A na forma-TA] + り, [Verbo B na forma-TA] + り + します / しました',
    explanationPt: 'Lista algumas ações não exaustivas realizadas em um determinado período sem fixar uma ordem cronológica obrigatória.',
    keyRulePt: 'O tempo verbal final da frase é determinado exclusivamente pelo verbo します / しました no final.',
    examples: [
      {
        jp: '週末は映画を見たり、本を読んだりします。',
        reading: 'しゅうまつ は えいが を みたり、ほん を よんだり します。',
        romaji: 'Shuumatsu wa eiga o mitari, hon o yondari shimasu.',
        meaningPt: 'Nos fins de semana assisto a filmes, leio livros e coisas do tipo.'
      }
    ]
  },
  {
    id: 'g_n5_12',
    pattern: 'Conjugação Completa de Adjetivos (い / な)',
    titlePt: 'Guia de Adjetivos-I e Adjetivos-NA',
    jlpt: 'N5',
    category: 'Adjetivos & Modificadores',
    formationFormula: 'Adj-I: [い → くない / かった / くなかった] | Adj-NA: [です / ではありません / でした / ではありませんでした]',
    explanationPt: 'Em japonês, os adjetivos funcionam como verbos descritivos e conjugam no tempo presente, passado e negações.',
    keyRulePt: '• Adjetivo-I (ex: 高い takai):\n  - Presente Neg: 高くない (não é caro)\n  - Passado Afir: 高かった (era caro)\n  - Passado Neg: 高くなかった (não era caro)\n  - Exceção: いい (bom) → よくない, よかった, よくなかった.\n• Adjetivo-NA (ex: 静か shizuka):\n  - Modifica substantivo com な: 静かな部屋 (quarto silencioso)\n  - Presente Neg: 静かじゃない (não é silencioso)\n  - Passado: 静かでした (era silencioso)',
    examples: [
      {
        jp: '昨日のテストは難しかったです。',
        reading: 'きのう の テスト は むずかしかった です。',
        romaji: 'Kinou no tesuto wa muzukashikatta desu.',
        meaningPt: 'A prova de ontem estava difícil.'
      },
      {
        jp: '京都はとても静かで綺麗な町です。',
        reading: 'きょうと は とても しずかで きれいな まち です。',
        romaji: 'Kyouto wa totemo shizuka de kirei na machi desu.',
        meaningPt: 'Kyoto é uma cidade muito tranquila e bonita.'
      }
    ]
  },
  {
    id: 'g_n5_13',
    pattern: 'A の ほうが B より [Adjetivo] です',
    titlePt: 'Estruturas de Comparação: "A é mais ... que B"',
    jlpt: 'N5',
    category: 'Comparações',
    formationFormula: '[Substantivo A] + の ほうが + [Substantivo B] + より + [Adjetivo] + です',
    explanationPt: 'Compara dois elementos indicando superioridade de uma qualidade no elemento A em relação a B.',
    keyRulePt: '• Pergunta entre dois: A と B と どちらが [Adjetivo] ですか (Entre A e B, qual é mais...?)\n• Superlativo no grupo: [Grupo] の中で [Elemento] が一番 [Adj] です (Dentro de tal grupo, X é o mais...).',
    examples: [
      {
        jp: '新幹線のほうが飛行機より安いです。',
        reading: 'しんかんせん の ほう が ひこうき より やすい です。',
        romaji: 'Shinkansen no hou ga hikouki yori yasui desu.',
        meaningPt: 'O trem-bala é mais barato que o avião.'
      },
      {
        jp: '日本料理の中で寿司が一番好きです。',
        reading: 'にほんりょうり の なか で すし が いちばん すき です。',
        romaji: 'Nihon ryouri no naka de sushi ga ichiban suki desu.',
        meaningPt: 'Dentre a culinária japonesa, sushi é o meu favorito.'
      }
    ]
  },
  {
    id: 'g_n5_14',
    pattern: 'Substantivo + が 好き / 嫌い / 上手 / 下手 です',
    titlePt: 'Gostos e Habilidades: "Gostar, Odiar, Ser Bom ou Ruim"',
    jlpt: 'N5',
    category: 'Gostos & Habilidades',
    formationFormula: '[Substantivo] + が + 好き (gostar) / 嫌い (não gostar) / 上手 (ser habilidoso) / 下手 (ser ruim) + です',
    explanationPt: 'Em japonês, 好き (suki), 嫌い (kirai), 上手 (jouzu) e 下手 (heta) são adjetivos-NA, e o seu objeto é marcado pela partícula が e não を.',
    keyRulePt: '• Nunca use 上手 (jouzu) para se autoelogiar em japonês; use 上手 para elogiar outros, e ao falar de si mesmo use 得意 (tokui = tenho facilidade) ou まだまだです (ainda falta muito).',
    examples: [
      {
        jp: '私はアニメが好きです。',
        reading: 'わたし は アニメ が すき です。',
        romaji: 'Watashi wa anime ga suki desu.',
        meaningPt: 'Eu gosto de animes.'
      },
      {
        jp: '田中さんは日本語が上手です。',
        reading: 'たなかさん は にほんご が じょうず です。',
        romaji: 'Tanaka-san wa nihongo ga jouzu desu.',
        meaningPt: 'O Sr. Tanaka é muito bom em japonês.'
      }
    ]
  },
  {
    id: 'g_n5_15',
    pattern: 'Raiz MASU + に 行きます / 来ます (~ni ikimasu / kimasu)',
    titlePt: 'Propósito do Deslocamento: "Ir ou Vir para fazer..."',
    jlpt: 'N5',
    category: 'Objetivo & Movimento',
    formationFormula: '[Local] + へ / に + [Raiz do Verbo (sem "masu") ou Substantivo de ação] + に + 行きます / 来ます',
    explanationPt: 'Indica a finalidade com que a pessoa se desloca até um determinado lugar.',
    keyRulePt: 'A partícula に antes do verbo de movimento marca o objetivo da ida/vinda.',
    examples: [
      {
        jp: 'デパートへ買い物に行きます。',
        reading: 'デパート へ かいもの に いきます。',
        romaji: 'Depaato e kaimono ni ikimasu.',
        meaningPt: 'Vou à loja de departamentos para fazer compras.'
      },
      {
        jp: '図書館へ本を借りに行きました。',
        reading: 'としょかん へ ほん を かりに いきました。',
        romaji: 'Toshokan e hon o kari ni ikimashita.',
        meaningPt: 'Fui à biblioteca para pegar livros emprestados.'
      }
    ]
  },
  {
    id: 'g_n5_16',
    pattern: 'あります / います (arimasu / imasu)',
    titlePt: 'Verbos de Existência: "Há / Existe / Ter"',
    jlpt: 'N5',
    category: 'Estruturas Básicas',
    formationFormula: '[Local] に + [Substantivo] が + あります / います',
    explanationPt: 'Estes verbos indicam a existência ou posse de algo. A principal diferença é que "arimasu" é usado para coisas inanimadas e plantas, enquanto "imasu" é para pessoas e animais (coisas animadas).',
    keyRulePt: '• あります (arimasu): Objetos inanimados, plantas, ideias.\n• います (imasu): Pessoas e animais (seres vivos que se movem sozinhos).\n• Partícula に indica o local de existência e が marca o que existe.',
    examples: [
      {
        jp: '机の上に本があります。',
        reading: 'つくえ の うえ に ほん が あります。',
        romaji: 'Tsukue no ue ni hon ga arimasu.',
        meaningPt: 'Há um livro em cima da mesa.'
      },
      {
        jp: '庭に犬がいます。',
        reading: 'にわ に いぬ が います。',
        romaji: 'Niwa ni inu ga imasu.',
        meaningPt: 'Tem um cachorro no quintal.'
      }
    ]
  },
  {
    id: 'g_n5_17',
    pattern: '〜ましょう / 〜ましょうか (~mashou / ~mashou ka)',
    titlePt: 'Convites e Sugestões: "Vamos... / Que tal...?"',
    jlpt: 'N5',
    category: 'Convites & Propostas',
    formationFormula: '[Raiz do Verbo] + ましょう / ましょうか',
    explanationPt: 'Usado para propor uma ação em conjunto ("Vamos fazer algo") ou para se oferecer para fazer algo por alguém ("Quer que eu faça?").',
    keyRulePt: '• ましょう (mashou): Proposta afirmativa (Vamos comer!).\n• ましょうか (mashou ka): Pergunta ou oferecimento gentil (Vamos comer? / Quer que eu carregue isso?).',
    examples: [
      {
        jp: '一緒に昼ご飯を食べましょう。',
        reading: 'いっしょ に ひるごはん を たべましょう。',
        romaji: 'Issho ni hirugohan o tabemashou.',
        meaningPt: 'Vamos almoçar juntos.'
      },
      {
        jp: '窓を開けましょうか。',
        reading: 'まど を あけましょう か。',
        romaji: 'Mado o akemashou ka.',
        meaningPt: 'Quer que eu abra a janela?'
      }
    ]
  },
  {
    id: 'g_n5_18',
    pattern: '〜ませんか (~masen ka)',
    titlePt: 'Convites Delicados: "Você não quer...?"',
    jlpt: 'N5',
    category: 'Convites & Propostas',
    formationFormula: '[Raiz do Verbo] + ませんか',
    explanationPt: 'Forma mais polida e indireta de convidar alguém do que usar "mashou". Ao fazer a pergunta na negativa, você dá à pessoa a liberdade de recusar educadamente.',
    keyRulePt: 'Embora a estrutura seja negativa, o sentido é de um convite: "Você não gostaria de...?"',
    examples: [
      {
        jp: '明日、映画を見に行きませんか。',
        reading: 'あした、えいが を みに いきませんか。',
        romaji: 'Ashita, eiga o mini ikimasen ka.',
        meaningPt: 'Você não quer ir ver um filme amanhã?'
      },
      {
        jp: 'お茶を飲みませんか。',
        reading: 'おちゃ を のみませんか。',
        romaji: 'Ocha o nomimasen ka.',
        meaningPt: 'Não gostaria de tomar um chá?'
      }
    ]
  },
  {
    id: 'g_n5_19',
    pattern: 'から / ので (kara / node)',
    titlePt: 'Razão e Causa: "Porque / Como..."',
    jlpt: 'N5',
    category: 'Causa & Efeito',
    formationFormula: '[Motivo/Razão] + から / ので + [Consequência]',
    explanationPt: 'Ambos conectam duas frases para indicar causa e efeito. "Kara" é mais subjetivo e focado na vontade do falante, enquanto "node" soa mais objetivo, suave e educado.',
    keyRulePt: '• [Frase] + から (Porque): Usado com ordens, opiniões e pedidos pessoais.\n• [Frase] + ので (Como / Visto que): Usado para explicações factuais e desculpas formais (Adjetivos-NA e Substantivos levam な antes do ので).',
    examples: [
      {
        jp: '時間がありませんから、急いでください。',
        reading: 'じかん が ありません から、いそいで ください。',
        romaji: 'Jikan ga arimasen kara, isoide kudasai.',
        meaningPt: 'Porque não temos tempo, por favor, apresse-se.'
      },
      {
        jp: '雨が降っているので、行きません。',
        reading: 'あめ が ふっている ので、いきません。',
        romaji: 'Ame ga futte iru node, ikimasen.',
        meaningPt: 'Como está chovendo, eu não vou.'
      }
    ]
  },
  {
    id: 'g_n5_20',
    pattern: 'が / けれども (ga / keredomo)',
    titlePt: 'Conjunções de Contraste: "Mas / Porém"',
    jlpt: 'N5',
    category: 'Causa & Efeito',
    formationFormula: '[Frase 1] + が / けれども + [Frase 2]',
    explanationPt: 'Ligam duas frases com sentido oposto ou contrastante. A partícula が é comum em frases formais com "masu/desu", enquanto "keredomo" (ou suas versões mais curtas "keredo/kedo") é amplamente usado na fala.',
    keyRulePt: 'Frequentemente usados não apenas para contraste, mas como uma introdução suave antes de fazer um pedido ou fazer uma pergunta.',
    examples: [
      {
        jp: '日本語は難しいですが、面白いです。',
        reading: 'にほんご は むずかしい です が、おもしろい です。',
        romaji: 'Nihongo wa muzukashii desu ga, omoshiroi desu.',
        meaningPt: 'O japonês é difícil, mas é interessante.'
      },
      {
        jp: 'すみませんが、駅はどこですか。',
        reading: 'すみません が、えき は どこ です か。',
        romaji: 'Sumimasen ga, eki wa doko desu ka.',
        meaningPt: 'Com licença (lit. me desculpe, mas...), onde fica a estação?'
      }
    ]
  },
  {
    id: 'g_n5_21',
    pattern: 'Verbo (Dicionário) + つもりです (tsumori desu)',
    titlePt: 'Intenção e Planos: "Pretendo fazer..."',
    jlpt: 'N5',
    category: 'Desejos & Vontades',
    formationFormula: '[Verbo na Forma Dicionário / NAI] + つもりです',
    explanationPt: 'Expressa uma intenção forte ou plano que já foi decidido pelo falante na sua mente.',
    keyRulePt: '• Afirmativa: 行くつもりです (Pretendo ir).\n• Negativa: 行かないつもりです (Pretendo não ir).',
    examples: [
      {
        jp: '来年、日本へ行くつもりです。',
        reading: 'らいねん、にほん へ いく つもり です。',
        romaji: 'Rainen, Nihon e iku tsumori desu.',
        meaningPt: 'Ano que vem, pretendo ir ao Japão.'
      },
      {
        jp: '今日は何もしないつもりです。',
        reading: 'きょう は なにも しない つもり です。',
        romaji: 'Kyou wa nanimo shinai tsumori desu.',
        meaningPt: 'Hoje, pretendo não fazer nada.'
      }
    ]
  },
  {
    id: 'g_n5_22',
    pattern: 'だけ / しか (dake / shika)',
    titlePt: 'Limitação: "Somente / Apenas / Nada além de"',
    jlpt: 'N5',
    category: 'Partículas',
    formationFormula: '[Substantivo] + だけ (afirmativa) / しか (com verbo negativo)',
    explanationPt: 'Palavras usadas para delimitar quantidades ou opções. A diferença principal está na construção da frase ao seu redor.',
    keyRulePt: '• だけ (dake) = Pode ser usado com verbos afirmativos. Ex: 100円だけあります (Tenho apenas 100 ienes).\n• しか (shika) = OBRIGATORIAMENTE pede o verbo na negativa, carregando um tom de escassez ou insuficiência. Ex: 100円しかありません (Não tenho nada além de 100 ienes).',
    examples: [
      {
        jp: '日曜日だけ休みます。',
        reading: 'にちようび だけ やすみます。',
        romaji: 'Nichiyoubi dake yasumimasu.',
        meaningPt: 'Eu descanso apenas no domingo.'
      },
      {
        jp: '水しか飲みませんでした。',
        reading: 'みず しか のみません でした。',
        romaji: 'Mizu shika nomimasen deshita.',
        meaningPt: 'Não bebi nada além de água (Só bebi água).'
      }
    ]
  },
  {
    id: 'g_n5_23',
    pattern: 'もう / まだ (mou / mada)',
    titlePt: 'Tempo: "Já / Ainda não"',
    jlpt: 'N5',
    category: 'Marcadores de Tempo',
    formationFormula: 'もう + [Passado] / まだ + [Negativa ou Forma-TE います]',
    explanationPt: 'Advérbios usados para expressar a conclusão de uma ação ou um estado que permanece incompleto.',
    keyRulePt: '• もう (mou) + Passado: A ação já foi concluída. (Já comi).\n• まだ (mada) + Verbo Negativo / Forma-TE います: A ação ainda não aconteceu ou o estado continua ocorrendo (Ainda não comi / Ainda está chovendo).',
    examples: [
      {
        jp: 'もう宿題をしました。',
        reading: 'もう しゅくだい を しました。',
        romaji: 'Mou shukudai o shimashita.',
        meaningPt: 'Eu já fiz a lição de casa.'
      },
      {
        jp: '田中さんはまだ来ていません。',
        reading: 'たなかさん は まだ きて いません。',
        romaji: 'Tanaka-san wa mada kite imasen.',
        meaningPt: 'O Sr. Tanaka ainda não chegou.'
      }
    ]
  }
];
