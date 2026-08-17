import { GrammarItem } from '../types';

export const GRAMMAR_N4: GrammarItem[] = [
  {
    id: 'g_n4_1',
    pattern: '〜なければならない / 〜なくてはいけない (~nakereba naranai / nakute wa ikenai)',
    titlePt: 'Obrigação e Dever: "Ter que fazer / É obrigatório"',
    jlpt: 'N4',
    category: 'Obrigação & Dever',
    formationFormula: '[Verbo na forma-Nai] sem o "い" + ければならない / ければいけません',
    explanationPt: 'Expressa obrigações legais, sociais, de saúde ou regras que não podem ser evitadas. Literalmente "se não fizer, não vai".',
    keyRulePt: '• No dia a dia casual, costuma ser abreviado para: 〜なきゃ (nakya) ou 〜なくちゃ (nakucha).\n• Para dizer "não precisa fazer": 〜なくてもいいです (~nakute mo ii desu).',
    examples: [
      {
        jp: '毎日、漢字を復習しなければなりません。',
        reading: 'まいにち、かんじ を ふくしゅう しなければ なりません。',
        romaji: 'Mainichi, kanji o fukushuu shinakereba narimasen.',
        meaningPt: 'Tenho que revisar kanji todos os dias.'
      },
      {
        jp: '明日は休みだから、早く起きなくてもいいです。',
        reading: 'あした は やすみ だから、はやく おきなくても いいです。',
        romaji: 'Ashita wa yasumi dakara, hayaku okinakute mo ii desu.',
        meaningPt: 'Como amanhã é folga, não preciso acordar cedo.'
      }
    ]
  },
  {
    id: 'g_n4_2',
    pattern: 'Verbo (Forma Dicionário / Forma-NAI) + つもりです (~tsumori desu)',
    titlePt: 'Intenção e Decisão Pessoal: "Pretendo fazer..."',
    jlpt: 'N4',
    category: 'Planos & Intenções',
    formationFormula: '[Verbo na Forma Dicionário ou Forma-Nai] + つもりです',
    explanationPt: 'Indica um plano ou intenção pessoal que o falante já decidiu e pretende executar no futuro.',
    keyRulePt: '• Afirmativo: 行くつもりです (pretendo ir)\n• Negativo: 行かないつもりです (pretendo não ir) ou 行くつもりはありません (não tenho qualquer intenção de ir).',
    examples: [
      {
        jp: '来年、日本へ留学するつもりです。',
        reading: 'らいねん、にほん へ りゅうがく する つもり です。',
        romaji: 'Rainen, nihon e ryuugaku suru tsumori desu.',
        meaningPt: 'Pretendo fazer intercâmbio no Japão no ano que vem.'
      },
      {
        jp: 'タバコをやめるつもりです。',
        reading: 'タバコ を やめる つもり です。',
        romaji: 'Tabako o yameru tsumori desu.',
        meaningPt: 'Pretendo parar de fumar.'
      }
    ]
  },
  {
    id: 'g_n4_3',
    pattern: 'Verbo / Substantivo + 予定です (~yotei desu)',
    titlePt: 'Plano ou Cronograma Oficial: "Está programado para..."',
    jlpt: 'N4',
    category: 'Planos & Intenções',
    formationFormula: '[Verbo na Forma Dicionário] + 予定です | [Substantivo] + の + 予定です',
    explanationPt: 'Diferente de つもり (que é intenção pessoal), 予定 (yotei) expressa um compromisso oficial, agenda pública ou itinerário já definido.',
    keyRulePt: 'Muito usado em contextos corporativos, viagens e eventos com hora e data agendadas.',
    examples: [
      {
        jp: '会議は三時から始まる予定です。',
        reading: 'かいぎ は さんじ から はじまる よてい です。',
        romaji: 'Kaigi wa sanji kara hajimaru yotei desu.',
        meaningPt: 'A reunião está agendada para começar às 15h.'
      },
      {
        jp: '来週、出張の予定です。',
        reading: 'らいしゅう、しゅっちょう の よてい です。',
        romaji: 'Raishuu, shutchou no yotei desu.',
        meaningPt: 'Estou com viagem a negócios programada para a próxima semana.'
      }
    ]
  },
  {
    id: 'g_n4_4',
    pattern: 'Forma Simples + と思います (~to omoimasu)',
    titlePt: 'Opinião & Pensamento: "Acho que / Penso que..."',
    jlpt: 'N4',
    category: 'Opiniões & Julgamento',
    formationFormula: '[Forma Simples (Futsuukei)] + と思います',
    explanationPt: 'Utilizado para expressar a opinião pessoal do falante de maneira polida e não impositiva, ou para amenizar uma afirmação.',
    keyRulePt: '• Para Adjetivo-NA e Substantivo no presente afirmativo, adiciona-se だ (da): 明日は雨だと思います (Acho que amanhã chove).\n• Com a Forma Volitiva (〜ようと思う): expressa uma decisão que acabou de tomar ("estou pensando em fazer").',
    examples: [
      {
        jp: '明日の試験は難しいと思います。',
        reading: 'あした の しけん は むずかしい と おもいます。',
        romaji: 'Ashita no shiken wa muzukashii to omoimasu.',
        meaningPt: 'Acho que a prova de amanhã será difícil.'
      },
      {
        jp: '新しいパソコンを買おうと思っています。',
        reading: 'あたらしい パソコン を かおう と おもっています。',
        romaji: 'Atarashii pasokon o kaou to omotte imasu.',
        meaningPt: 'Estou pensando em comprar um computador novo.'
      }
    ]
  },
  {
    id: 'g_n4_5',
    pattern: 'As 4 Condicionais do Japonês (〜たら, 〜ば, 〜なら, 〜と)',
    titlePt: 'Guia Definitivo das Condicionais em Japonês',
    jlpt: 'N4',
    category: 'Condicionais',
    formationFormula: '1) 〜たら (Passado + ら) | 2) 〜ば (troca "u" por "eba") | 3) 〜なら (Substantivo/Adj direto) | 4) 〜と (Forma Dicionário + と)',
    explanationPt: 'Cada condicional possui um tom e aplicação lógica distinta no dia a dia:',
    keyRulePt: '• 〜たら (tara): Condicional universal ("Se/Quando"). Muito natural e usada para sequências temporais (雨が降ったら行かない).\n• 〜ば (ba): Condicional lógica ("Se e somente se"): 安ければ買います (Se for barato, eu compro).\n• 〜なら (nara): Condicional contextual ("Se for o caso de... / Se você for..."): 京都に行くなら、金閣寺がおすすめ.\n• 〜と (to): Condicional natural/mecânica ("Sempre que acontece A, inevitavelmente ocorre B"): ボタンを押すと、水が出ます (Ao apertar o botão, a água sai).',
    examples: [
      {
        jp: '時間が合ったら、映画を見に行きましょう。',
        reading: 'じかん が あったら、えいが を み に いきましょう。',
        romaji: 'Jikan ga attara, eiga o mi ni ikimashou.',
        meaningPt: 'Se tivermos tempo, vamos ao cinema.'
      },
      {
        jp: 'このボタンを押すと、ドアが開きます。',
        reading: 'この ボタン を おす と、ドア が あきます。',
        romaji: 'Kono botan o osu to, doa ga akimasu.',
        meaningPt: 'Ao apertar este botão, a porta se abre.'
      }
    ]
  },
  {
    id: 'g_n4_6',
    pattern: 'Raiz MASU + すぎます (~sugimasu)',
    titlePt: 'Excesso / Exagero: "Demais / Em excesso"',
    jlpt: 'N4',
    category: 'Intensificadores',
    formationFormula: '[Raiz do Verbo] / [Raiz de Adj-I sem い] / [Adj-NA] + すぎる / すぎます',
    explanationPt: 'Expressa que uma ação ou estado ultrapassou o limite saudável ou desejável, gerando um resultado negativo ou incômodo.',
    keyRulePt: '• Verbo: 食べすぎる (comer demais) / 飲みすぎた (bebi demais)\n• Adjetivo-I: 高すぎる (caro demais) / 辛すぎる (apimentado demais)\n• Adjetivo-NA: 静かすぎる (calmo/silencioso demais)',
    examples: [
      {
        jp: '夕食を食べすぎて、お腹が痛いです。',
        reading: 'ゆうしょく を たべすぎて、おなか が いたい です。',
        romaji: 'Yuushoku o tabesugite, onaka ga itai desu.',
        meaningPt: 'Comi demais no jantar e agora estou com dor de barriga.'
      },
      {
        jp: 'この問題は難しすぎます。',
        reading: 'この もんだい は むずかしすぎます。',
        romaji: 'Kono mondai wa muzukashisugimasu.',
        meaningPt: 'Este problema é difícil demais.'
      }
    ]
  },
  {
    id: 'g_n4_7',
    pattern: 'Raiz MASU + やすい / にくい (~yasui / ~nikui)',
    titlePt: 'Facilidade e Dificuldade: "Fácil / Difícil de fazer"',
    jlpt: 'N4',
    category: 'Grau & Tendência',
    formationFormula: '[Raiz do Verbo (sem "masu")] + やすい (fácil) / にくい (difícil)',
    explanationPt: 'Comporta-se como um Adjetivo-I após a junção com o verbo.',
    keyRulePt: '• 読みやすい (fácil de ler) → 読みやすかった (foi fácil de ler)\n• わかりにくい (difícil de entender) → わかりにくかった (foi difícil de entender)',
    examples: [
      {
        jp: 'このペンはとても書きやすいです。',
        reading: 'この ペン は とても かきやすい です。',
        romaji: 'Kono pen wa totemo kakiyasui desu.',
        meaningPt: 'Esta caneta é muito macia / fácil de escrever.'
      },
      {
        jp: '彼の説明は少しわかりにくいです。',
        reading: 'かれ の せつめい は すこし わかりにくい です。',
        romaji: 'Kare no setsumei wa sukoshi wakarinikui desu.',
        meaningPt: 'A explicação dele é um pouco difícil de entender.'
      }
    ]
  },
  {
    id: 'g_n4_8',
    pattern: 'Verbo (Forma-TE) + みます (~te mimasu)',
    titlePt: 'Tentativa / Experiência: "Tentar fazer / Ver no que dá"',
    jlpt: 'N4',
    category: 'Tentativa & Ação',
    formationFormula: '[Verbo na forma-TE] + みる / みます',
    explanationPt: 'Expressa a ideia de fazer algo a título de teste para descobrir como é ou qual será o resultado.',
    keyRulePt: 'Derivado do verbo 見る (miru - ver/olhar).',
    examples: [
      {
        jp: 'この靴を履いてみてもいいですか。',
        reading: 'この くつ を はいてみても いいですか。',
        romaji: 'Kono kutsu o haite mite mo ii desu ka.',
        meaningPt: 'Posso experimentar este calçado?'
      },
      {
        jp: '新しい料理を作ってみました。',
        reading: 'あたらしい りょうり を つくってみました。',
        romaji: 'Atarashii ryouri o tsukutte mimashita.',
        meaningPt: 'Tentei preparar um prato novo.'
      }
    ]
  },
  {
    id: 'g_n4_9',
    pattern: 'Verbo (Forma-TE) + しまいます (~te shimaimasu)',
    titlePt: 'Conclusão Total ou Arrependimento: "Fiz sem querer / Concluí tudo"',
    jlpt: 'N4',
    category: 'Aspecto Verbal & Emoção',
    formationFormula: '[Verbo na forma-TE] + しまう / しまいました',
    explanationPt: 'Tem dois sentidos centrais: 1) Ação completamente finalizada (com foco no término), 2) Acontecimento indesejado que gera frustração ou remorso.',
    keyRulePt: 'Na linguagem coloquial casual torna-se: 〜ちゃう (chau) para てしまう e 〜じゃう (jau) para でしまう.\n(ex: 忘れてしまった → 忘れちゃった).',
    examples: [
      {
        jp: '電車に財布を忘れてしまいました。',
        reading: 'でんしゃ に さいふ を わすれて しまいました。',
        romaji: 'Densha ni saifu o wasurete shimaimashita.',
        meaningPt: 'Esqueci minha carteira no trem (e lamento muito por isso).'
      },
      {
        jp: '宿題を全部やってしまいました。',
        reading: 'しゅくだい を ぜんぶ やって しまいました。',
        romaji: 'Shukudai o zenbu yatte shimaimashita.',
        meaningPt: 'Terminei toda a lição de casa de uma vez por todas.'
      }
    ]
  },
  {
    id: 'g_n4_10',
    pattern: 'Verbo (Forma-TE) + おきます (~te okimasu)',
    titlePt: 'Preparação Antecipada: "Deixar pronto com antecedência"',
    jlpt: 'N4',
    category: 'Ações Preparatórias',
    formationFormula: '[Verbo na forma-TE] + おく / おきます',
    explanationPt: 'Realizar uma ação agora para que ela seja útil ou esteja pronta para uma situação futura.',
    keyRulePt: 'Na fala casual frequentemente vira 〜とく (toku). Exemplo: 買っておく → 買っとく (kattoku).',
    examples: [
      {
        jp: '旅行の前にホテルの予約をしておきます。',
        reading: 'りょこう の まえ に ホテル の よやく を して おきます。',
        romaji: 'Ryokou no mae ni hoteru no yoyaku o shite okimasu.',
        meaningPt: 'Vou deixar o hotel reservado com antecedência antes da viagem.'
      }
    ]
  },
  {
    id: 'g_n4_11',
    pattern: 'Ações de Dar e Receber Favor (〜てあげる, 〜てくれる, 〜てもらう)',
    titlePt: 'O Sistema de Favores e Benefícios em Japonês',
    jlpt: 'N4',
    category: 'Dar & Receber',
    formationFormula: '[Verbo na forma-TE] + あげる (eu faço para outro) / くれる (alguém faz para mim) / もらう (eu recebo a gentileza de alguém)',
    explanationPt: 'Em japonês é fundamental explicitar a direção da gentileza e o sentimento de gratidão em relação a quem realizou o favor.',
    keyRulePt: '• 〜てあげる: Eu ou alguém do meu grupo faz em benefício de outro.\n• 〜てくれる: Alguém faz espontaneamente em meu benefício (sou o recebedor).\n• 〜てもらう: Eu solicito/recebo a ação de outra pessoa (marcada por に).',
    examples: [
      {
        jp: '友達が日本語を教えてくれました。',
        reading: 'ともだち が にほんご を おしえて くれました。',
        romaji: 'Tomodachi ga nihongo o oshiete kuremashita.',
        meaningPt: 'Meu amigo me ensinou japonês (fez esse favor para mim).'
      },
      {
        jp: '先生に推薦状を書いてもらいました。',
        reading: 'せんせい に すいせんじょう を かいて もらいました。',
        romaji: 'Sensei ni suisenjou o kaite moraimashita.',
        meaningPt: 'Recebi do professor a gentileza de escrever a carta de recomendação.'
      }
    ]
  },
  {
    id: 'g_n4_12',
    pattern: 'Voz Passiva (〜れる / 〜られる)',
    titlePt: 'Voz Passiva: "Ser feito por alguém"',
    jlpt: 'N4',
    category: 'Vozes Verbais',
    formationFormula: 'Godan: troca "u" por "a" + れる (書く → 書かれる) | Ichidan: tira る + られる (褒める → 褒められる) | Irregulares: する → される / 来る → こられる',
    explanationPt: 'Expressa que o sujeito sofre a ação praticada por um agente (marcado pela partícula に). Além da passiva neutra, em japonês existe a famosa "Passiva de Aflição / Infortúnio" (Miwaku Ukemi), onde a ação de alguém incomodou o sujeito.',
    keyRulePt: '• Exemplo de Passiva de Infortúnio: 雨に降られた (Fui pego pela chuva / A chuva me prejudicou).',
    examples: [
      {
        jp: '先生に褒められました。',
        reading: 'せんせい に ほめられました。',
        romaji: 'Sensei ni homeraremashita.',
        meaningPt: 'Fui elogiado pelo professor.'
      },
      {
        jp: '泥棒に自転車を盗まれました。',
        reading: 'どろぼう に じてんしゃ を ぬすまれました。',
        romaji: 'Dorobou ni jitensha o nusumaremashita.',
        meaningPt: 'Tive minha bicicleta roubada por um ladrão.'
      }
    ]
  },
  {
    id: 'g_n4_13',
    pattern: 'Voz Causativa (〜せる / 〜させる)',
    titlePt: 'Voz Causativa: "Fazer ou Deixar alguém fazer algo"',
    jlpt: 'N4',
    category: 'Vozes Verbais',
    formationFormula: 'Godan: troca "u" por "a" + せる (飲ませる) | Ichidan: tira る + させる (食べさせる) | Irregulares: させる / こさせる',
    explanationPt: 'Expressa coerção ("mandar/fazer alguém executar") ou permissão ("permitir/deixar alguém fazer").',
    keyRulePt: 'Ao combinar causativa com passiva surge a Causativa-Passiva (〜させられる = "ser forçado a fazer contra a vontade").',
    examples: [
      {
        jp: '母は子供に野菜を食べさせます。',
        reading: 'はは は こども に やさい を たべさせます。',
        romaji: 'Haha wa kodomo ni yasai o tabesasemasu.',
        meaningPt: 'A mãe faz o filho comer vegetais.'
      }
    ]
  },
  {
    id: 'g_n4_14',
    pattern: 'Verbo (Potencial) + ようになる / ようにする (~you ni naru / you ni suru)',
    titlePt: 'Mudança de Habilidade & Esforço Contínuo',
    jlpt: 'N4',
    category: 'Evolução & Hábitos',
    formationFormula: '[Verbo na forma Dicionário / Potencial] + ようになる (mudança que ocorreu) / ようにする (esforçar-se ativamente para)',
    explanationPt: 'Distinção crucial para o JLPT N4:\n• 〜ようになる: Passou a conseguir fazer (transformação gradual).\n• 〜ようにする: Ter o hábito consciente de se esforçar para fazer algo.',
    keyRulePt: 'Muito cobrado na interpretação de textos do JLPT N4.',
    examples: [
      {
        jp: '日本語の新聞が読めるようになりました。',
        reading: 'にほんご の しんぶん が よめる よう に なりました。',
        romaji: 'Nihongo no shinbun ga yomeru you ni narimashita.',
        meaningPt: 'Passei a conseguir ler jornais em japonês.'
      },
      {
        jp: '毎日野菜をたくさん食べるようにしています。',
        reading: 'まいにち やさい を たくさん たべる よう に しています。',
        romaji: 'Mainichi yasai o takusan taberu you ni shite imasu.',
        meaningPt: 'Estou me esforçando para comer bastante verduras todos os dias.'
      }
    ]
  },
  {
    id: 'g_n4_15',
    pattern: '〜かもしれない (~kamoshirenai)',
    titlePt: 'Possibilidade / Hipótese: "Talvez / É possível que..."',
    jlpt: 'N4',
    category: 'Probabilidade & Suposição',
    formationFormula: '[Forma Simples (sem だ para Adj-NA e Substantivo)] + かもしれません',
    explanationPt: 'Expressa uma probabilidade de aproximadamente 50% ou menos de algo ocorrer. Menos certo que でしょう / だろう.',
    keyRulePt: 'Na fala casual vira かも (kamo). Ex: 雨かも (Talvez chova).',
    examples: [
      {
        jp: '午後から雨が降るかもしれません。',
        reading: 'ごご から あめ が ふる かもしれません。',
        romaji: 'Gogo kara ame ga furu kamoshiremasen.',
        meaningPt: 'Talvez chova a partir da tarde.'
      }
    ]
  }
];
