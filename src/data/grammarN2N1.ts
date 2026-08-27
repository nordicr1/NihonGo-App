import { GrammarItem } from '../types';

export const GRAMMAR_N2_N1: GrammarItem[] = [
  // ===================== N2 GRAMMAR =====================
  {
    id: 'g_n2_1',
    pattern: '〜に違いない (~ni chigainai)',
    titlePt: 'Certeza e Convicção: "Com certeza é / Sem dúvidas"',
    jlpt: 'N2',
    category: 'Certeza & Dedução',
    formationFormula: '[Forma Simples (Verbo / Adj / Substantivo direto)] + に違いない',
    explanationPt: 'Expressa forte convicção do falante baseada em evidências sólidas ou raciocínio lógico claro ("não pode ser de outro jeito").',
    keyRulePt: 'Frequentemente usado com advérbios de certeza como きっと (kitto) ou かならず (kanarazu).',
    examples: [
      {
        jp: '彼は毎日夜遅くまで勉強していたから、合格するに違いない。',
        reading: 'かれ は まいにち よるおそく まで べんきょう していた から、ごうかく する に ちがいない。',
        romaji: 'Kare wa mainichi yoru osoku made benkyou shite ita kara, goukaku suru ni chigainai.',
        meaningPt: 'Como ele estudava até tarde da noite todo dia, com certeza passará no exame.'
      }
    ]
  },
  {
    id: 'g_n2_2',
    pattern: '〜に基づいて (~ni motozuite)',
    titlePt: 'Fundamentação: "Com base em / Fundamentado em"',
    jlpt: 'N2',
    category: 'Critério & Base',
    formationFormula: '[Substantivo] + に基づいて / に基づく [Substantivo]',
    explanationPt: 'Indica que uma ação, plano, decisão ou obra foi criada tendo dados, fatos, leis ou pesquisas como alicerce fundamental.',
    keyRulePt: 'Como modificador de substantivo posterior usa-se に基づく (ex: 事実に基づく映画 = filme baseado em fatos reais).',
    examples: [
      {
        jp: 'アンケート調査の結果に基づいて、新商品を開発しました。',
        reading: 'アンケート ちょうさ の けっか に もとづいて、しんしょうひん を かいはつ しました。',
        romaji: 'Ankeeto chousa no kekka ni motozuite, shinshouhin o kaihatsu shimashita.',
        meaningPt: 'Desenvolvemos o novo produto com base nos resultados da pesquisa de questionário.'
      }
    ]
  },
  {
    id: 'g_n2_3',
    pattern: '〜にしたがって / 〜につれて (~ni shitagatte / ~ni tsurete)',
    titlePt: 'Proporção e Acompanhamento: "À medida que... / Conforme..."',
    jlpt: 'N2',
    category: 'Proporção & Mudança',
    formationFormula: '[Verbo Forma Dicionário / Substantivo de ação] + にしたがって / につれて',
    explanationPt: 'Descreve que à medida que uma mudança avança em A, uma transformação correspondente ocorre em B de forma contínua e natural.',
    keyRulePt: 'につれて foca na evolução natural com o tempo; にしたがって pode ser usado também para seguir regras ou ordens.',
    examples: [
      {
        jp: '標高が高くなるにしたがって、気温が下がります。',
        reading: 'ひょうこう が たかく なる に したがって、きおん が さがります。',
        romaji: 'Hyoukou ga takaku naru ni shitagatte, kion ga sagarimasu.',
        meaningPt: 'À medida que a altitude aumenta, a temperatura cai.'
      },
      {
        jp: '台風が近づくにつれて、風雨が強くなってきた。',
        reading: 'たいふう が ちかづく に つれて、ふうう が つよく なってきた。',
        romaji: 'Taifuu ga chikazuku ni tsurete, fuuu ga tsuyoku natte kita.',
        meaningPt: 'Conforme o tufão se aproximava, o vento e a chuva foram ficando mais intensos.'
      }
    ]
  },
  {
    id: 'g_n2_4',
    pattern: '〜わけにはいかない (~wake ni wa ikanai)',
    titlePt: 'Impossibilidade Moral/Social: "Não posso me dar ao luxo de..."',
    jlpt: 'N2',
    category: 'Dever & Restrição Social',
    formationFormula: '[Verbo Forma Dicionário] + わけにはいかない (Não posso fazer) / [Verbo Forma Nai] + ないわけにはいかない (Não posso deixar de fazer = sou obrigado a fazer)',
    explanationPt: 'Indica que, por motivos éticos, de dever profissional ou consideração social, a pessoa não pode realizar determinada ação, embora fisicamente fosse possível.',
    keyRulePt: 'Diferente de できない (habilidade física), aqui o motivo é bom senso, responsabilidade ou vergonha.',
    examples: [
      {
        jp: '明日は大事な会議があるから、休むわけにはいかない。',
        reading: 'あした は だいじ な かいぎ が ある から、やすむ わけ に は いかない。',
        romaji: 'Ashita wa daiji na kaigi ga aru kara, yasumu wake ni wa ikanai.',
        meaningPt: 'Como amanhã tem uma reunião importante, não posso simplesmente faltar.'
      },
      {
        jp: 'お世話になった先生の頼みだから、引き受けないわけにはいかない。',
        reading: 'おせわ に なった せんせい の たのみ だから、ひきうけない わけ に は いかない。',
        romaji: 'Osewa ni natta sensei no tanomi dakara, hikiukenai wake ni wa ikanai.',
        meaningPt: 'Por ser um pedido do professor que tanto me ajudou, não posso deixar de aceitar.'
      }
    ]
  },
  {
    id: 'g_n2_5',
    pattern: '〜にすぎない (~ni suginai)',
    titlePt: 'Limitação e Modéstia: "Não passa de... / Apenas..."',
    jlpt: 'N2',
    category: 'Limitação & Ênfase',
    formationFormula: '[Forma Simples (Verbo / Adj / Substantivo)] + にすぎない',
    explanationPt: 'Enfatiza que algo não ultrapassa certo limite pequeno, insignificante ou simples ("não é mais do que isso").',
    keyRulePt: 'Usado frequentemente para minimizar algo ou enfatizar uma realidade modesta.',
    examples: [
      {
        jp: '私は単なる一社員にすぎません。決定権はありません。',
        reading: 'わたし は たんなる いっ しゃいん に すぎません。けっていけん は ありません。',
        romaji: 'Watashi wa tannaru isshain ni sugimasen. Ketteiken wa arimasen.',
        meaningPt: 'Eu não passo de um simples funcionário. Não tenho poder de decisão.'
      }
    ]
  },
  {
    id: 'g_n2_6',
    pattern: '〜にほかならない (~ni hokanaranai)',
    titlePt: 'Certeza Enfática: "Não é nada mais nada menos que..."',
    jlpt: 'N2',
    category: 'Causa & Convicção Absoluta',
    formationFormula: '[Substantivo] + (から / ため) + にほかならない',
    explanationPt: 'Expressa com veemência que aquela é a ÚNICA e verdadeira razão ou natureza de um fato.',
    keyRulePt: 'Tom formal e assertivo, comum em dissertações e discursos formais.',
    examples: [
      {
        jp: '彼の成功は、長年の努力の結果にほかならない。',
        reading: 'かれ の せいこう は、ながねん の どりょく の けっか に ほかならない。',
        romaji: 'Kare no seikou wa, naganen no doryoku no kekka ni hokanaranai.',
        meaningPt: 'O sucesso dele nada mais é do que o resultado de longos anos de esforço.'
      }
    ]
  },
  {
    id: 'g_n2_7',
    pattern: '〜ざるを得ない (~zaru o enai)',
    titlePt: 'Inescapabilidade: "Sou forçado a / Não tenho outra escolha senão..."',
    jlpt: 'N2',
    category: 'Obrigação Inevitável',
    formationFormula: '[Verbo Forma Nai sem ない] + ざるを得ない (exceção: する ➔ せざるを得ない)',
    explanationPt: 'Significa que, contra a sua própria vontade ou preferência pessoal, as circunstâncias o forçam inevitavelmente a tomar tal atitude.',
    keyRulePt: 'Atenção especial à irregularidade do verbo する: vira せざるを得ない (sezaru o enai).',
    examples: [
      {
        jp: '証拠がこれだけ揃っていれば、彼の主張を認めざるを得ない。',
        reading: 'しょうこ が これだけ そろっていれば、かれ の しゅちょう を みとめざる を えない。',
        romaji: 'Shouko ga koredake sorotte ireba, kare no shuchou o mitomezaru o enai.',
        meaningPt: 'Com tantas evidências reunidas, não temos outra escolha senão aceitar a alegação dele.'
      }
    ]
  },
  {
    id: 'g_n2_8',
    pattern: '〜を通じて / 〜を通して (~o tsuujite / ~o tooshite)',
    titlePt: 'Intermediação e Duração: "Por meio de / Ao longo de todo o..."',
    jlpt: 'N2',
    category: 'Meio & Período Contínuo',
    formationFormula: '[Substantivo] + を通じて / を通して',
    explanationPt: 'Tem dois sentidos principais: 1) Utilizar alguém ou um canal como mediador; 2) Um estado contínuo durante todo o período (ex: ao longo do ano).',
    keyRulePt: 'Quando significa "período inteiro", é comum com 四季 (quatro estações), 一年 (o ano todo).',
    examples: [
      {
        jp: '友人の紹介を通じて、現在の妻と知り合いました。',
        reading: 'ゆうじん の しょうかい を つうじて、げんざい の つま と しりあいました。',
        romaji: 'Yuujin no shoukai o tsuujite, genzai no tsuma to shiriai mashita.',
        meaningPt: 'Conheci minha atual esposa por intermédio da apresentação de um amigo.'
      },
      {
        jp: 'この地域は一年を通じて温暖な気候です。',
        reading: 'この ちいき は いちねん を つうじて おんだんな きこう です。',
        romaji: 'Kono chiiki wa ichinen o tsuujite ondanna kikou desu.',
        meaningPt: 'Esta região desfruta de um clima ameno ao longo de todo o ano.'
      }
    ]
  },
  {
    id: 'g_n2_9',
    pattern: '〜げ (~ge)',
    titlePt: 'Aparência Emocional: "Com ar de... / Parecendo..."',
    jlpt: 'N2',
    category: 'Impressão & Nuance',
    formationFormula: '[Raiz do Adj-I (sem い) / Adj-NA] + げ (ex: 嬉しげ, 寂しげ, 自信ありげ)',
    explanationPt: 'Expressa a sensação visual de que alguém parece estar sentindo determinada emoção ou condição psicológica.',
    keyRulePt: 'Usado para observar os sentimentos de terceiros.',
    examples: [
      {
        jp: '彼女は寂しげな表情で遠くを見つめていた。',
        reading: 'かのじょ は さびしげ な ひょうじょう で とおく を みつめて いた。',
        romaji: 'Kanojo wa sabishige na hyoujou de tooku o mitsumete ita.',
        meaningPt: 'Ela olhava para longe com uma expressão visivelmente melancólica.'
      }
    ]
  },
  {
    id: 'g_n2_10',
    pattern: '〜つつある (~tsutsu aru)',
    titlePt: 'Transformação Contínua: "Estar em pleno processo de..."',
    jlpt: 'N2',
    category: 'Mudança em Andamento',
    formationFormula: '[Raiz do Verbo (Forma Masu sem ます)] + つつある',
    explanationPt: 'Indica uma mudança contínua e gradual que está em pleno andamento rumo a uma nova direção.',
    keyRulePt: 'Estilo formal, muito comum em notícias de economia, clima e relatórios.',
    examples: [
      {
        jp: '景気は少しずつ回復しつつある。',
        reading: 'けいき は すこしずつ かいふく しつつある。',
        romaji: 'Keiki wa sukoshizutsu kaifuku shitsutsu aru.',
        meaningPt: 'A economia está se recuperando gradativamente.'
      }
    ]
  },
  {
    id: 'g_n2_11',
    pattern: '〜かねる / 〜かねない (~kaneru / ~kanenai)',
    titlePt: 'Hesitação e Risco: "Não consigo / Há o perigo de..."',
    jlpt: 'N2',
    category: 'Possibilidade & Sentimentos',
    formationFormula: '[Raiz do Verbo (sem "masu")] + かねる (não conseguir) / かねない (poder acontecer algo ruim)',
    explanationPt: 'Muito usado em negócios. "Kaneru" é uma forma polida de dizer que você não pode fazer algo (por motivos psicológicos ou de posição). "Kanenai" expressa o temor de que o pior cenário pode acabar acontecendo.',
    keyRulePt: '• わかりかねます (Não sei lhe informar - muito formal).\n• 事故を起こしかねない (Temo que possa causar um acidente).',
    examples: [
      {
        jp: 'その件については、私からはお答えしかねます。',
        reading: 'その けん に ついて は、わたし から は おこたえ しかねます。',
        romaji: 'Sono ken ni tsuite wa, watashi kara wa okotae shikanemasu.',
        meaningPt: 'Sobre este assunto, eu infelizmente não posso responder (hesito/não tenho autoridade).'
      },
      {
        jp: 'あんな運転をしていたら、いつか事故を起こしかねない。',
        reading: 'あんな うんてん を していたら、いつか じこ を おこしかねない。',
        romaji: 'Anna unten o shite itara, itsuka jiko o okoshikanenai.',
        meaningPt: 'Dirigindo daquele jeito, ele pode acabar causando um acidente qualquer dia.'
      }
    ]
  },
  {
    id: 'g_n2_12',
    pattern: '〜がち (~gachi)',
    titlePt: 'Tendência Frequente: "Tende a / Costuma acontecer..."',
    jlpt: 'N2',
    category: 'Tendência & Frequência',
    formationFormula: '[Raiz do Verbo / Substantivo] + がち (gachi)',
    explanationPt: 'Expressa que algo acontece com muita frequência ou que há uma forte propensão de algo ocorrer, geralmente com conotação negativa (um mau hábito).',
    keyRulePt: 'Funciona como Substantivo/Adjetivo-NA na frase: 〜がちな人 (uma pessoa que costuma...).',
    examples: [
      {
        jp: '雪の日は、電車が遅れがちだ。',
        reading: 'ゆき の ひ は、でんしゃ が おくれがち だ。',
        romaji: 'Yuki no hi wa, densha ga okuregachi da.',
        meaningPt: 'Em dias de neve, os trens costumam/tendem a atrasar.'
      },
      {
        jp: '彼は最近、学校を休みがちです。',
        reading: 'かれ は さいきん、がっこう を やすみがち です。',
        romaji: 'Kare wa saikin, gakkou o yasumigachi desu.',
        meaningPt: 'Recentemente, ele tem faltado muito à escola (criou essa tendência).'
      }
    ]
  },
  {
    id: 'g_n2_13',
    pattern: '〜気味 (~gimi)',
    titlePt: 'Ligeira Sensação: "Meio que... / Com um toque de..."',
    jlpt: 'N2',
    category: 'Sensação & Sintomas',
    formationFormula: '[Raiz do Verbo / Substantivo] + 気味 (gimi)',
    explanationPt: 'Diferente de "gachi" (frequência), "gimi" expressa que você está sentindo um leve sintoma, sensação ou estado no presente momento.',
    keyRulePt: 'Geralmente usado para indisposições de saúde ou pequenas quedas de desempenho.',
    examples: [
      {
        jp: '今日は少し風邪気味なので、早く寝ます。',
        reading: 'きょう は すこし かぜぎみ な ので、はやく ねます。',
        romaji: 'Kyou wa sukoshi kazegimi na node, hayaku nemasu.',
        meaningPt: 'Hoje estou me sentindo meio resfriado, por isso vou dormir cedo.'
      },
      {
        jp: '最近、太り気味です。',
        reading: 'さいきん、ふとりぎみ です。',
        romaji: 'Saikin, futorigimi desu.',
        meaningPt: 'Ultimamente, sinto que estou engordando um pouco.'
      }
    ]
  },
  {
    id: 'g_n2_14',
    pattern: '〜だらけ (~darake)',
    titlePt: 'Coberto de Aspectos Negativos: "Cheio de / Coberto de..."',
    jlpt: 'N2',
    category: 'Excesso de Coisas Negativas',
    formationFormula: '[Substantivo] + だらけ (darake)',
    explanationPt: 'Indica que um lugar ou objeto está completamente preenchido ou coberto por coisas indesejáveis, sujas ou ruins.',
    keyRulePt: 'Nunca se usa para coisas boas. (Certo: 泥だらけ - coberto de lama. Errado: お金だらけ - usar "ippai" para dinheiro).',
    examples: [
      {
        jp: '彼の部屋はゴミだらけだ。',
        reading: 'かれ の へや は ゴミ だらけ だ。',
        romaji: 'Kare no heya wa gomi darake da.',
        meaningPt: 'O quarto dele está cheio de (coberto de) lixo.'
      },
      {
        jp: 'このテストは間違いだらけですね。',
        reading: 'この テスト は まちがい だらけ です ね。',
        romaji: 'Kono tesuto wa machigai darake desu ne.',
        meaningPt: 'Este teste está repleto de erros, né.'
      }
    ]
  },
  {
    id: 'g_n2_15',
    pattern: '〜っぽい (~ppoi)',
    titlePt: 'Aparência e Personalidade: "Com jeito de / Tem cara de..."',
    jlpt: 'N2',
    category: 'Aparência & Caráter',
    formationFormula: '[Raiz do Verbo / Substantivo / Adj-I (sem い)] + っぽい',
    explanationPt: 'Transmite a ideia de que algo ou alguém se assemelha fortemente àquela característica, comportando-se gramaticalmente como um Adjetivo-I.',
    keyRulePt: 'Muitas vezes usado para personalidades (怒りっぽい - irritadiço / 忘れっぽい - esquecido) ou texturas (水っぽい - aguado).',
    examples: [
      {
        jp: 'あの人は大人なのに、子供っぽいところがある。',
        reading: 'あの ひと は おとな なのに、こどもっぽい ところ が ある。',
        romaji: 'Ano hito wa otona na noni, kodomoppoi tokoro ga aru.',
        meaningPt: 'Aquela pessoa, apesar de adulta, tem um lado meio infantil.'
      },
      {
        jp: '祖父は最近、忘れっぽくなりました。',
        reading: 'そふ は さいきん、わすれっぽく なりました。',
        romaji: 'Sofu wa saikin, wasureppoku narimashita.',
        meaningPt: 'Meu avô ultimamente ficou esquecido.'
      }
    ]
  },
  {
    id: 'g_n2_16',
    pattern: '〜を問わず (~o towazu)',
    titlePt: 'Universalidade: "Independentemente de / Sem importar..."',
    jlpt: 'N2',
    category: 'Condição Irrelevante',
    formationFormula: '[Substantivo com opostos lógicos (ex: 男女, 昼夜, 年齢)] + を問わず (o towazu)',
    explanationPt: 'Indica que uma condição se aplica universalmente a todos os espectros mencionados, não importando a classe ou categoria.',
    keyRulePt: 'Muitíssimo comum em anúncios de vagas de emprego ou placas de regras.',
    examples: [
      {
        jp: 'この仕事は、年齢や性別を問わず誰でも応募できます。',
        reading: 'この しごと は、ねんれい や せいべつ を とわず だれ でも おうぼ できます。',
        romaji: 'Kono shigoto wa, nenrei ya seibetsu o towazu dare demo oubo dekimasu.',
        meaningPt: 'Independentemente de idade ou sexo, qualquer um pode se candidatar a este trabalho.'
      }
    ]
  },
  {
    id: 'g_n2_17',
    pattern: '〜からして (~kara shite)',
    titlePt: 'Julgamento pelo Básico: "A começar pelo(a)... já se vê que..."',
    jlpt: 'N2',
    category: 'Dedução',
    formationFormula: '[Substantivo (geralmente uma característica superficial)] + からして',
    explanationPt: 'Expressa que baseando-se apenas num único pequeno detalhe já dá pra deduzir que todo o resto segue o mesmo (geralmente ruim) padrão.',
    keyRulePt: 'Frequentemente carrega uma avaliação crítica ou negativa do falante.',
    examples: [
      {
        jp: 'このレストランは、店員の態度からして良くない。味も期待できないだろう。',
        reading: 'この レストラン は、てんいん の たいど からして よく ない。あじ も きたい できない だろう。',
        romaji: 'Kono resutoran wa, ten\'in no taido karashite yoku nai. Aji mo kitai dekinai darou.',
        meaningPt: 'A começar pela atitude dos funcionários, este restaurante já é ruim. O sabor também não deve ser lá essas coisas.'
      }
    ]
  },
  {
    id: 'g_n2_18',
    pattern: '〜っこない (~kkonai)',
    titlePt: 'Negação Veemente: "Não tem como / É totalmente impossível"',
    jlpt: 'N2',
    category: 'Impossibilidade Absoluta',
    formationFormula: '[Raiz do Verbo (Forma Masu sem ます)] + っこない',
    explanationPt: 'É a versão hiper coloquial e enfática de "waka ga nai / hazu ga nai". Usado casualmente entre amigos para refutar uma possibilidade de forma absoluta.',
    keyRulePt: 'Usado exclusivamente na língua falada (conversas).',
    examples: [
      {
        jp: 'こんなにたくさん、一人で食べられっこないよ！',
        reading: 'こんなに たくさん、ひとりで たべられっこない よ！',
        romaji: 'Konna ni takusan, hitori de taberarekkonai yo!',
        meaningPt: 'É humanamente impossível eu conseguir comer tudo isso sozinho!'
      }
    ]
  },

  // ===================== N1 GRAMMAR =====================
  {
    id: 'g_n1_1',
    pattern: '〜まじき (~majiki)',
    titlePt: 'Inadmissível para a Posição: "Não condiz com / Inaceitável"',
    jlpt: 'N1',
    category: 'Linguagem Formal & Crítica Moral',
    formationFormula: '[Verbo na Forma Dicionário] + まじき + [Substantivo]',
    explanationPt: 'Expressão literária e de alto nível que condena veementemente um comportamento, afirmando que é inaceitável dada a postura ou função de quem o cometeu.',
    keyRulePt: 'Geralmente combinado com: 許すまじき (imperdoável) ou あるまじき (inaceitável de existir). O verbo する vira "すまじき".',
    examples: [
      {
        jp: 'プロのスポーツ選手としてあるまじき行為だ。',
        reading: 'プロ の スポーツせんしゅ として あるまじき こうい だ。',
        romaji: 'Puro no supootsu senshu to shite arumajiki koui da.',
        meaningPt: 'É uma atitude completamente inaceitável para quem é um atleta profissional.'
      }
    ]
  },
  {
    id: 'g_n1_2',
    pattern: '〜極まりない / 〜極まる (~kiwamarinai / ~kiwamaru)',
    titlePt: 'Grau Máximo e Extremo: "Extremamente / Nada mais do que..."',
    jlpt: 'N1',
    category: 'Grau Máximo',
    formationFormula: '[Adj-NA (sem な)] + 極まりない / 極まる / [Adj-I (sem い)] + こと極まりない',
    explanationPt: 'Expressa que um estado atingiu o ápice absoluto, geralmente com conotação de indignação, perigo ou surpresa.',
    keyRulePt: 'Ex: 危険極まりない (extremamente perigoso), 失礼極まりない (da mais profunda grosseria).',
    examples: [
      {
        jp: '彼の態度は失礼極まりない。二度と会いたくない。',
        reading: 'かれ の たいど は しつれい きわまりない。にどと あいたくない。',
        romaji: 'Kare no taido wa shitsurei kiwamarinai. Nidoto aitakunai.',
        meaningPt: 'A atitude dele é da mais extrema falta de educação. Não quero vê-lo nunca mais.'
      }
    ]
  },
  {
    id: 'g_n1_3',
    pattern: '〜を皮切りに (~o kawakiri ni)',
    titlePt: 'Marco Inicial em Cadeia: "A começar por... / Tendo como pontapé inicial..."',
    jlpt: 'N1',
    category: 'Início & Sequência de Sucessos',
    formationFormula: '[Substantivo] + を皮切りに(して) / を皮切りとして',
    explanationPt: 'Indica que uma ação inicial serviu de estopim ou pontapé de partida para uma série consecutiva de eventos similares em escala crescente.',
    keyRulePt: 'Muito usado em notícias sobre turnês de shows, lançamentos de filiais e eventos comemorativos.',
    examples: [
      {
        jp: '東京公演を皮切りに、全国１０都市でコンサートが開催される。',
        reading: 'とうきょう こうえん を かわきり に、ぜんこく じゅっ とし で コンサート が かいさい される。',
        romaji: 'Toukyou kouen o kawakiri ni, zenkoku juttoshi de konsaato ga kaisai sareru.',
        meaningPt: 'A começar pela apresentação em Tóquio, concertos serão realizados em 10 cidades por todo o país.'
      }
    ]
  },
  {
    id: 'g_n1_4',
    pattern: '〜であれ / 〜であろうと (~de are / ~de arou to)',
    titlePt: 'Universalidade Absoluta: "Mesmo que seja... / Não importa se..."',
    jlpt: 'N1',
    category: 'Condição Irrelevante & Igualdade',
    formationFormula: '[Substantivo / Pronome interrogativo] + であれ / であろうと (ou AであれBであれ)',
    explanationPt: 'Enfatiza que sob qualquer circunstância, status ou identidade, o resultado ou a regra permanece estritamente invariável.',
    keyRulePt: 'Frequentemente expressa princípios legais, éticos e universais.',
    examples: [
      {
        jp: '理由が何であれ、暴力を振るうことは許されない。',
        reading: 'りゆう が なに であれ、ぼうりょく を ふるう こと は ゆるされない。',
        romaji: 'Riyuu ga nani de are, bouryoku o furuu koto wa yurusarenai.',
        meaningPt: 'Não importa qual seja a razão, cometer violência é imperdoável.'
      }
    ]
  },
  {
    id: 'g_n1_5',
    pattern: '〜余儀なくされる (~yogi naku sareru)',
    titlePt: 'Imposição Forçada: "Ser forçado pelas circunstâncias a..."',
    jlpt: 'N1',
    category: 'Causa Inevitável & Força Maior',
    formationFormula: '[Substantivo de ação] + を余儀なくされる / [Verbo] + ことを余儀なくされる',
    explanationPt: 'Expressa que, devido a uma situação externa incontrolável (como desastres, crises financeiras ou doenças), a pessoa/instituição não tem escolha senão cancelar, adiar ou mudar seus planos.',
    keyRulePt: '〜余儀なくさせる (ativo) significa "a situação forçou alguém a..."; 〜余儀なくされる (passivo) significa "o sujeito foi forçado a...".',
    examples: [
      {
        jp: '大型台風の影響で、イベントは中止を余儀なくされた。',
        reading: 'おおがた たいふう の えいきょう で、イベント は ちゅうし を よぎ なく された。',
        romaji: 'Oogata taifuu no eikyou de, ibento wa chuushi o yogi naku sareta.',
        meaningPt: 'Devido ao impacto do grande tufão, fomos inevitavelmente forçados a cancelar o evento.'
      }
    ]
  },
  {
    id: 'g_n1_6',
    pattern: '〜んばかりに (~n bakari ni)',
    titlePt: 'Prestes / Quase como se: "Como se estivesse a ponto de..."',
    jlpt: 'N1',
    category: 'Grau & Aparência Quase Real',
    formationFormula: '[Verbo Forma Nai sem ない] + んばかりに (exceção: する ➔ せんばかりに)',
    explanationPt: 'Descreve metaforicamente que o estado ou a expressão de alguém está tão intensa que parece que vai realizar aquela ação a qualquer segundo.',
    keyRulePt: 'Ex: 泣き出さんばかり (quase chorando), 飛び上がらんばかり (quase pulando de alegria).',
    examples: [
      {
        jp: '彼は「早く帰れ」と言わんばかりの態度をとった。',
        reading: 'かれ は 「はやく かえれ」 と いわんばかり の たいど を とった。',
        romaji: 'Kare wa "hayaku kaere" to iwan bakari no taido o totta.',
        meaningPt: 'Ele agiu com uma atitude que praticamente dizia "vá logo para casa".'
      }
    ]
  },
  {
    id: 'g_n1_7',
    pattern: '〜ごとき / 〜ごとく (~gotoki / ~gotoku)',
    titlePt: 'Semelhança Literária ou Desdém: "Assim como... / Feito um..."',
    jlpt: 'N1',
    category: 'Comparação & Retórica Clássica',
    formationFormula: '[Substantivo / Verbo] + の + ごとき [Substantivo] / ごとく [Verbo/Adj]',
    explanationPt: 'Uso literário clássico similar a 〜のようだ. Pode indicar também modéstia humilde (私ごとき = alguém insignificante como eu) ou desdém.',
    keyRulePt: 'ごとき modifica substantivos; ごとく funciona como advérbio modificando verbos.',
    examples: [
      {
        jp: '光陰矢のごとし。時間は矢のように早く過ぎ去る。',
        reading: 'こういん や の ごとし。じかん は や の ように はやく すぎさる。',
        romaji: 'Kouin ya no gotoshi. Jikan wa ya no you ni hayaku sugisaru.',
        meaningPt: 'O tempo voa como uma flecha (provérbio clássico japonês).'
      },
      {
        jp: '私ごときにそのような大役は務まりません。',
        reading: 'わたくし ごとき に そのような たいやく は つとまりません。',
        romaji: 'Watakushi gotoki ni sono you na taiyaku wa tsutomarimasen.',
        meaningPt: 'Alguém humilde e simples como eu não é capaz de desempenhar papel tão nobre.'
      }
    ]
  },
  {
    id: 'g_n1_8',
    pattern: '〜ずにはおかない (~zu ni wa okanai)',
    titlePt: 'Inevitabilidade Provocada: "Certamente provocará / Não deixará de..."',
    jlpt: 'N1',
    category: 'Impacto Inevitável',
    formationFormula: '[Verbo Forma Nai sem ない] + ずにはおかない (exceção: する ➔ せずにはおかない)',
    explanationPt: 'Expressa forte convicção de que algo inevitavelmente terá uma influência profunda ou provocará uma reação emocional inevitável em todos.',
    keyRulePt: 'Geralmente combinado com verbos de comoção, como 感動させる (emocionar), 怒らせる (enfurecer).',
    examples: [
      {
        jp: '彼の感動的なスピーチは、聴衆を泣かせずにはおかなかった。',
        reading: 'かれ の かんどうてき な スピーチ は、ちょうしゅう を なかせず に は おかなかった。',
        romaji: 'Kare no kandouteki na supiichi wa, choushuu o nakasezu ni wa okanakatta.',
        meaningPt: 'O discurso emocionante dele inevitavelmente levou toda a plateia às lágrimas.'
      }
    ]
  }
];
