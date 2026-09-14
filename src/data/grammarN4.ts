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
    id: 'g_n4_5_1',
    pattern: 'Condicional: 〜たら (~tara)',
    titlePt: 'Se / Quando (Foco Temporal)',
    jlpt: 'N4',
    category: 'Condicionais',
    formationFormula: '[Verbo/Adjetivo no Passado] + ら',
    explanationPt: 'A condicional mais comum. Indica que se/quando a ação A acontecer, a ação B ocorrerá em seguida.',
    keyRulePt: '• Muito usado para sequências (quando terminar X, farei Y).\n• Pode expressar descobertas inesperadas (fui até lá e vi que...).',
    examples: [
      {
        jp: '時間が合ったら、映画を見に行きましょう。',
        reading: 'じかん が あったら、えいが を み に いきましょう。',
        romaji: 'Jikan ga attara, eiga o mi ni ikimashou.',
        meaningPt: 'Se tivermos tempo, vamos ao cinema.'
      },
      {
        jp: '日本に着いたら、電話します。',
        reading: 'にほん に ついたら、でんわ します。',
        romaji: 'Nihon ni tsuitara, denwa shimasu.',
        meaningPt: 'Quando eu chegar no Japão, ligarei.'
      }
    ]
  },
  {
    id: 'g_n4_5_2',
    pattern: 'Condicional: 〜ば (~ba)',
    titlePt: 'Condicional Lógica (Se e somente se)',
    jlpt: 'N4',
    category: 'Condicionais',
    formationFormula: 'Verbos: troca o último "u" por "eba" (行く → 行けば).',
    explanationPt: 'Foca estritamente na condição. "Para que B aconteça, A é obrigatório". Não se preocupa com o fator tempo.',
    keyRulePt: '• Frequentemente usado para expressar conselhos: "O que eu deveria fazer?" (どうすればいいですか).',
    examples: [
      {
        jp: '安ければ、買います。',
        reading: 'やすければ、かいます。',
        romaji: 'Yasukereba, kaimasu.',
        meaningPt: 'Se for barato, eu compro.'
      },
      {
        jp: '練習すれば、上手になりますよ。',
        reading: 'れんしゅう すれば、じょうず に なります よ。',
        romaji: 'Renshuu sureba, jouzu ni narimasu yo.',
        meaningPt: 'Se você praticar, ficará bom nisso.'
      }
    ]
  },
  {
    id: 'g_n4_5_3',
    pattern: 'Condicional: 〜なら (~nara)',
    titlePt: 'Condicional Contextual (Caso seja...)',
    jlpt: 'N4',
    category: 'Condicionais',
    formationFormula: '[Substantivo / Adjetivo / Forma Simples] + なら',
    explanationPt: 'Usado para responder ou reagir a uma informação que o ouvinte acabou de trazer (ou que já é conhecida no contexto).',
    keyRulePt: '• Exemplo: "Estou indo para Tóquio". A pessoa responde: "Se é para Tóquio que você vai (なら), visite a Tokyo Tower".',
    examples: [
      {
        jp: '京都に行くなら、金閣寺がおすすめです。',
        reading: 'きょうと に いく なら、きんかくじ が おすすめ です。',
        romaji: 'Kyouto ni iku nara, kinkakuji ga osusume desu.',
        meaningPt: 'Se você vai para Kyoto, o Templo Kinkakuji é a minha recomendação.'
      },
      {
        jp: '嫌なら、やらなくてもいいです。',
        reading: 'いや なら、やらなくても いい です。',
        romaji: 'Iya nara, yaranakute mo ii desu.',
        meaningPt: 'Se não quiser (se achar desagradável), não precisa fazer.'
      }
    ]
  },
  {
    id: 'g_n4_5_4',
    pattern: 'Condicional: 〜と (~to)',
    titlePt: 'Condicional Natural (Sempre que...)',
    jlpt: 'N4',
    category: 'Condicionais',
    formationFormula: '[Verbo na Forma Dicionário] + と',
    explanationPt: 'Expressa um resultado natural, inevitável ou mecânico. "Sempre que A acontece, B inevitavelmente ocorre".',
    keyRulePt: '• Muito usado para direções (Vire à direita e a escola estará lá), máquinas e fenômenos da natureza.\n• Não pode ser seguido de pedidos ou vontades do falante.',
    examples: [
      {
        jp: 'このボタンを押すと、ドアが開きます。',
        reading: 'この ボタン を おす と、ドア が あきます。',
        romaji: 'Kono botan o osu to, doa ga akimasu.',
        meaningPt: 'Ao apertar este botão, a porta se abre.'
      },
      {
        jp: '春になると、桜が咲きます。',
        reading: 'はる に なる と、さくら が さきます。',
        romaji: 'Haru ni naru to, sakura ga sakimasu.',
        meaningPt: 'Quando chega a primavera, as cerejeiras florescem.'
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
    id: 'g_n4_11_1',
    pattern: 'Ação de Fazer Favor: 〜てあげる (~te ageru)',
    titlePt: 'Favores: Fazer por Alguém',
    jlpt: 'N4',
    category: 'Dar & Receber',
    formationFormula: '[Verbo na forma-TE] + あげる / あげます',
    explanationPt: 'Usado quando eu (ou alguém do meu grupo) realiza uma ação benéfica para outra pessoa.',
    keyRulePt: '• Nunca use para seus superiores diretos (parece arrogante).\n• Eu [wa] Pessoa [ni] Ação [te ageru].',
    examples: [
      {
        jp: '妹に本を読んであげました。',
        reading: 'いもうと に ほん を よんで あげました。',
        romaji: 'Imouto ni hon o yonde agemashita.',
        meaningPt: 'Eu li o livro para a minha irmã mais nova.'
      }
    ]
  },
  {
    id: 'g_n4_11_2',
    pattern: 'Ação de Receber Favor Espontâneo: 〜てくれる (~te kureru)',
    titlePt: 'Favores: Alguém faz por mim',
    jlpt: 'N4',
    category: 'Dar & Receber',
    formationFormula: '[Verbo na forma-TE] + くれる / くれます',
    explanationPt: 'Usado quando outra pessoa faz um favor para mim (ou para minha família) espontaneamente. A pessoa que fez a ação é o sujeito.',
    keyRulePt: '• O recebedor quase sempre sou eu (私に), então frequentemente o "watashi ni" é omitido.',
    examples: [
      {
        jp: '友達が日本語を教えてくれました。',
        reading: 'ともだち が にほんご を おしえて くれました。',
        romaji: 'Tomodachi ga nihongo o oshiete kuremashita.',
        meaningPt: 'Meu amigo me ensinou japonês (fez esse favor para mim).'
      }
    ]
  },
  {
    id: 'g_n4_11_3',
    pattern: 'Ação de Receber Favor Solicitado: 〜てもらう (~te morau)',
    titlePt: 'Favores: Receber a Gentileza',
    jlpt: 'N4',
    category: 'Dar & Receber',
    formationFormula: '[Verbo na forma-TE] + もらう / もらいます',
    explanationPt: 'Significa "receber a ação". Eu (sujeito) recebo o favor de alguém (marcado com に). Mostra profunda gratidão.',
    keyRulePt: '• Eu [wa] Pessoa [ni] Ação [te morau].\n• Diferente de "kureru", aqui EU sou o sujeito da frase.',
    examples: [
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
  },
  {
    id: 'g_n4_16',
    pattern: '〜んです / 〜んだ (~n desu / ~n da)',
    titlePt: 'Ênfase e Explicação: "É que..."',
    jlpt: 'N4',
    category: 'Expressões de Explicação',
    formationFormula: '[Forma Simples] + んです (Subst/Adj-NA adicionam な antes do んです)',
    explanationPt: 'Muito usado na fala para dar explicações, pedir justificativas, demonstrar curiosidade ou conectar fatos de maneira emocional.',
    keyRulePt: '• Pergunta (どうしたんですか): "O que aconteceu?" (Demonstra preocupação/curiosidade).\n• Resposta (頭が痛いんです): "É que estou com dor de cabeça" (Dá o contexto/explicação).',
    examples: [
      {
        jp: 'どうして遅れたんですか。',
        reading: 'どうして おくれた ん です か。',
        romaji: 'Doushite okureta n desu ka.',
        meaningPt: 'Por que (diabos) você se atrasou? (ênfase na curiosidade)'
      },
      {
        jp: 'バスが来なかったんです。',
        reading: 'バス が こなかった ん です。',
        romaji: 'Basu ga konakatta n desu.',
        meaningPt: 'É que o ônibus não veio. (ênfase na explicação)'
      }
    ]
  },
  {
    id: 'g_n4_17',
    pattern: '〜のに (~noni)',
    titlePt: 'Contraste e Frustração: "Apesar de / Mesmo que"',
    jlpt: 'N4',
    category: 'Causa & Efeito',
    formationFormula: '[Forma Simples] + のに (Subst/Adj-NA adicionam な antes)',
    explanationPt: 'Diferente de "ga" ou "keredomo", "noni" carrega um sentimento de surpresa, insatisfação, pena ou frustração com o resultado inesperado.',
    keyRulePt: 'Não pode ser usado com pedidos, ordens ou sugestões na segunda metade da frase.',
    examples: [
      {
        jp: 'たくさん勉強したのに、テストに落ちました。',
        reading: 'たくさん べんきょう した のに、テスト に おちました。',
        romaji: 'Takusan benkyou shita noni, tesuto ni ochimashita.',
        meaningPt: 'Apesar de ter estudado muito, reprovei no teste.'
      },
      {
        jp: '日曜日なのに、仕事をしなければなりません。',
        reading: 'にちようび なのに、しごと を しなければ なりません。',
        romaji: 'Nichiyoubi na noni, shigoto o shinakereba narimasen.',
        meaningPt: 'Mesmo sendo domingo, tenho que trabalhar.'
      }
    ]
  },
  {
    id: 'g_n4_18',
    pattern: '〜はずです (~hazu desu)',
    titlePt: 'Expectativa Lógica: "Deve ser / É de se esperar que"',
    jlpt: 'N4',
    category: 'Suposição',
    formationFormula: '[Forma Simples] + はずです (Subst + のはず / Adj-NA + なはず)',
    explanationPt: 'Expressa uma forte convicção ou expectativa baseada em fatos objetivos ou lógica. Não é apenas um "eu acho".',
    keyRulePt: '• Negativa: 〜はずがありません (É impossível que... / Não deve ser...).',
    examples: [
      {
        jp: '田中さんは今、会社にいるはずです。',
        reading: 'たなかさん は いま、かいしゃ に いる はず です。',
        romaji: 'Tanaka-san wa ima, kaisha ni iru hazu desu.',
        meaningPt: 'O Sr. Tanaka deve estar na empresa agora (porque é o horário de expediente dele).'
      },
      {
        jp: 'あんな高い車、買えるはずがありません。',
        reading: 'あんな たかい くるま、かえる はず が ありません。',
        romaji: 'Anna takai kuruma, kaeru hazu ga arimasen.',
        meaningPt: 'É impossível que eu consiga comprar um carro caro daquele.'
      }
    ]
  },
  {
    id: 'g_n4_19',
    pattern: '〜ながら (~nagara)',
    titlePt: 'Ações Simultâneas: "Fazendo A enquanto faz B"',
    jlpt: 'N4',
    category: 'Listagem de Ações',
    formationFormula: '[Raiz do Verbo (sem "masu")] + ながら + [Verbo Secundário]',
    explanationPt: 'Usado para descrever duas ações acontecendo ao mesmo tempo pela mesma pessoa.',
    keyRulePt: 'A ação principal (a mais importante) é o verbo que vem DEPOIS do "nagara".',
    examples: [
      {
        jp: '音楽を聴きながら、勉強します。',
        reading: 'おんがく を ききながら、べんきょう します。',
        romaji: 'Ongaku o kikinagara, benkyou shimasu.',
        meaningPt: 'Estudo enquanto ouço música. (A ação principal é estudar)'
      },
      {
        jp: '歩きながらスマホを見ないでください。',
        reading: 'あるきながら スマホ を みないで ください。',
        romaji: 'Arukinagara sumaho o minaide kudasai.',
        meaningPt: 'Por favor, não olhe o celular enquanto caminha.'
      }
    ]
  },
  {
    id: 'g_n4_20_1',
    pattern: 'Aparência Visual: 〜そうです (~sou desu)',
    titlePt: 'Aparência: "Parece (baseado no que vejo)"',
    jlpt: 'N4',
    category: 'Probabilidade & Hearsay',
    formationFormula: '[Raiz do Verbo / Adj sem い] + そうです',
    explanationPt: 'Usado quando você olha para algo e tira uma conclusão visual (parece gostoso, parece que vai chover).',
    keyRulePt: '• Adjetivos: 美味しい (oishii) → 美味しそう (oishisou = parece gostoso).\n• Verbos: 降る (furu) → 降りそう (furisou = parece que vai chover).\n• Exceção: いい (ii) vira よさそう (yosasou).',
    examples: [
      {
        jp: 'このケーキは美味しそうです。',
        reading: 'この ケーキ は おいしそう です。',
        romaji: 'Kono keeki wa oishisou desu.',
        meaningPt: 'Este bolo parece estar delicioso. (Estou olhando pra ele)'
      }
    ]
  },
  {
    id: 'g_n4_20_2',
    pattern: 'Boatos / Hearsay: 〜そうです (~sou desu)',
    titlePt: 'Fofoca / Notícia: "Ouvi dizer que..."',
    jlpt: 'N4',
    category: 'Probabilidade & Hearsay',
    formationFormula: '[Forma Simples da frase inteira] + そうです',
    explanationPt: 'Usado para repassar uma informação que você ouviu, leu ou ficou sabendo através de terceiros.',
    keyRulePt: '• Diferente da aparência visual, a palavra fica inteira na forma simples: 美味しいそうです (Ouvi dizer que é gostoso) em vez de 美味しそう (Parece gostoso).',
    examples: [
      {
        jp: '天気予報によると、明日は雨が降るそうです。',
        reading: 'てんきよほう に よると、あした は あめ が ふる そう です。',
        romaji: 'Tenkiyohou ni yoru to, ashita wa ame ga furu sou desu.',
        meaningPt: 'De acordo com a previsão do tempo, ouvi dizer que amanhã choverá.'
      }
    ]
  },
  {
    id: 'g_n4_21_1',
    pattern: 'Suposição Subjetiva: 〜ようです (~you desu)',
    titlePt: 'Suposição Lógica: "Aparenta / Tudo indica que..."',
    jlpt: 'N4',
    category: 'Suposição',
    formationFormula: '[Forma Simples] + ようです (Substantivo pede の)',
    explanationPt: 'Suposição formal baseada nos 5 sentidos ou em evidências concretas. É um pouco mais objetivo.',
    keyRulePt: 'Com substantivos: 病気のようです (Parece que é doença).',
    examples: [
      {
        jp: '誰もいないようです。',
        reading: 'だれも いない よう です。',
        romaji: 'Daremo inai you desu.',
        meaningPt: 'Parece que não tem ninguém (as luzes estão apagadas e está silêncio).'
      }
    ]
  },
  {
    id: 'g_n4_21_2',
    pattern: 'Suposição Coloquial: 〜みたいです (~mitai desu)',
    titlePt: 'Suposição / Metáfora: "Parece / Tipo..."',
    jlpt: 'N4',
    category: 'Suposição',
    formationFormula: '[Substantivo / Forma Simples] + みたいです',
    explanationPt: 'A versão mais coloquial e falada do "you desu". Também muito usada para metáforas (dizer que algo parece com outra coisa, mesmo não sendo).',
    keyRulePt: 'Age gramaticalmente como um Adjetivo-NA.',
    examples: [
      {
        jp: '彼は日本人みたいに話します。',
        reading: 'かれ は にほんじん みたい に はなします。',
        romaji: 'Kare wa nihonjin mitai ni hanashimasu.',
        meaningPt: 'Ele fala como se fosse um japonês (mas não é).'
      }
    ]
  },
  {
    id: 'g_n4_21_3',
    pattern: 'Características: 〜らしいです (~rashii desu)',
    titlePt: 'Essência / Hearsay Forte: "Típico de / Pelo visto"',
    jlpt: 'N4',
    category: 'Suposição',
    formationFormula: '[Substantivo / Forma Simples] + らしいです',
    explanationPt: 'Tem 2 grandes usos: 1) Expressar que algo tem as qualidades esperadas ("típico de..."). 2) Uma suposição baseada em fortes boatos objetivos.',
    keyRulePt: '男らしい (otoko-rashii) = típico de um homem autêntico. (Diferente de 男みたい = parece um homem, mas não é).',
    examples: [
      {
        jp: '今日は春らしい天気ですね。',
        reading: 'きょう は はる らしい てんき です ね。',
        romaji: 'Kyou wa harurashii tenki desu ne.',
        meaningPt: 'O tempo hoje está típico de primavera, não acha?'
      }
    ]
  },
  {
    id: 'g_n4_22',
    pattern: '〜し、〜し (~shi, ~shi)',
    titlePt: 'Listando Múltiplas Razões: "Além disso / E também"',
    jlpt: 'N4',
    category: 'Causa & Efeito',
    formationFormula: '[Forma Simples] + し、[Forma Simples] + し、',
    explanationPt: 'Usado para enumerar duas ou mais razões ou fatos que suportam uma conclusão, num tom um pouco mais empático e abrangente que apenas "kara".',
    keyRulePt: 'Muitas vezes, a conclusão (o motivo principal) fica implícita. É comum vir acompanhado da partícula も (também).',
    examples: [
      {
        jp: 'この店は安いし、美味しいし、よく来ます。',
        reading: 'この みせ は やすい し、おいしい し、よく きます。',
        romaji: 'Kono mise wa yasui shi, oishii shi, yoku kimasu.',
        meaningPt: 'Este restaurante é barato, é gostoso, (além disso...) por isso venho muito aqui.'
      },
      {
        jp: '雨も降っているし、今日は出かけません。',
        reading: 'あめ も ふっている し、きょう は でかけません。',
        romaji: 'Ame mo futte iru shi, kyou wa dekakemasen.',
        meaningPt: 'Além de estar chovendo (entre outros motivos), hoje não vou sair.'
      }
    ]
  },
  {
    id: 'g_n4_23',
    pattern: '〜てよかった (~te yokatta)',
    titlePt: 'Alívio e Gratidão: "Ainda bem que / Que bom que..."',
    jlpt: 'N4',
    category: 'Aspecto Verbal & Emoção',
    formationFormula: '[Verbo na Forma-TE] + よかった | Negativo: [Forma-NAI sem o "i"] + なくてよかった',
    explanationPt: 'Expressa forte alívio do falante por uma ação ter acontecido ou não ter acontecido. Literalmente: "Foi bom ter feito X".',
    keyRulePt: 'Diferente do português, usa-se a forma "te" e não uma condicional "se".',
    examples: [
      {
        jp: '傘を持ってきてよかったです。',
        reading: 'かさ を もってきて よかった です。',
        romaji: 'Kasa o motte kite yokatta desu.',
        meaningPt: 'Ainda bem que eu trouxe o guarda-chuva.'
      },
      {
        jp: '事故にならなくてよかったです。',
        reading: 'じこ に ならなくて よかった です。',
        romaji: 'Jiko ni naranakute yokatta desu.',
        meaningPt: 'Que bom que não sofremos um acidente.'
      }
    ]
  }
];
