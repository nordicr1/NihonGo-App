import { GrammarItem } from '../types';

export const GRAMMAR_N3: GrammarItem[] = [
  {
    id: 'g_n3_1',
    pattern: '〜わけではない (~wake dewa nai)',
    titlePt: 'Negação Parcial: "Não é que... / Não quer dizer necessariamente que..."',
    jlpt: 'N3',
    category: 'Nuance & Negação Parcial',
    formationFormula: '[Forma Simples (Verbo / Adj-I / Adj-NA+な / Substantivo+である/の)] + わけではない',
    explanationPt: 'Utilizado para evitar generalizações exageradas ou amenizar uma afirmação, esclarecendo que embora uma impressão possa existir, a realidade não é tão extrema.',
    keyRulePt: '• Comparação: 嫌いではない (Não odeio) vs. 嫌いなわけではない (Não é que eu odeie... há circunstâncias).',
    examples: [
      {
        jp: '辛い料理が嫌いなわけではないが、あまり食べない。',
        reading: 'からい りょうり が きらいな わけではない が、あまり たべない。',
        romaji: 'Karai ryouri ga kirai na wake dewa nai ga, amari tabenai.',
        meaningPt: 'Não é que eu não goste de comida apimentada, mas não como com frequência.'
      },
      {
        jp: '日本語が全く話せないわけではありません。',
        reading: 'にほんご が まったく はなせない わけではありません。',
        romaji: 'Nihongo ga mattaku hanasenai wake dewa arimasen.',
        meaningPt: 'Não quer dizer que eu não fale absolutamente nada de japonês.'
      }
    ]
  },
  {
    id: 'g_n3_2',
    pattern: '〜わけがない / 〜はずがない (~wake ga nai / hazu ga nai)',
    titlePt: 'Impossibilidade Absoluta: "Não há como ser... / É impossível que..."',
    jlpt: 'N3',
    category: 'Impossibilidade & Certeza',
    formationFormula: '[Forma Simples (Adj-NA+な / Substantivo+の)] + わけがない / はずがない',
    explanationPt: 'Expressa convicção total de que algo é completamente inconcebível ou ilógico segundo os fatos conhecidos.',
    keyRulePt: 'Equivale enfaticamente a "絶対に〜ない" (Com certeza não é verdade).',
    examples: [
      {
        jp: '彼が嘘をつくわけがありません。',
        reading: 'かれ が うそ を つく わけ が ありません。',
        romaji: 'Kare ga uso o tsuku wake ga arimasen.',
        meaningPt: 'Não há a menor possibilidade de ele mentir (Ele jamais mentiria).'
      },
      {
        jp: 'こんなに簡単な問題がわからないはずがない。',
        reading: 'こんなに かんたんな もんだい が わからない はずがない。',
        romaji: 'Konna ni kantan na mondai ga wakaranai hazu ga nai.',
        meaningPt: 'É impossível que você não entenda uma questão tão simples como esta.'
      }
    ]
  },
  {
    id: 'g_n3_3',
    pattern: '〜うちに / 〜ないうちに (~uchi ni / nai uchi ni)',
    titlePt: 'Janela de Oportunidade: "Enquanto ainda... / Antes que mude..."',
    jlpt: 'N3',
    category: 'Tempo & Limite',
    formationFormula: '[Verbo na forma Dicionário / Forma-TE いる / Forma-NAI / Adj-I / Adj-NA+な / Substantivo+の] + うちに',
    explanationPt: 'Indica que uma ação deve ser realizada enquanto um determinado estado favorável permanece, antes que uma mudança inevitável aconteça.',
    keyRulePt: '• 〜ないうちに significa literalmente "antes que aconteça X": 暗くならないうちに (antes que escureça).',
    examples: [
      {
        jp: '温かいうちに召し上がってください。',
        reading: 'あたたかい うち に めしあがってください。',
        romaji: 'Atatakai uchi ni meshagatte kudasai.',
        meaningPt: 'Por favor, coma enquanto a comida ainda está quentinha.'
      },
      {
        jp: '忘れないうちにメモをしておきます。',
        reading: 'わすれない うち に メモ を して おきます。',
        romaji: 'Wasurenai uchi ni memo o shite okimasu.',
        meaningPt: 'Vou anotar antes que eu me esqueça.'
      }
    ]
  },
  {
    id: 'g_n3_4',
    pattern: '〜間に (〜aida ni) vs 〜間 (〜aida)',
    titlePt: 'Duração Contínua vs Ação Pontual no Intervalo',
    jlpt: 'N3',
    category: 'Tempo & Duração',
    formationFormula: '[Verbo no Contínuo 〜ている / Substantivo+の] + 間 (contínuo simultâneo) / 間に (ação pontual)',
    explanationPt: 'Distinção clássica de prova JLPT N3:\n• 〜間: Ambas as ações ocorreram ininterruptamente durante todo o intervalo.\n• 〜間に: Uma ação momentânea aconteceu em algum instante dentro daquele intervalo.',
    keyRulePt: '• Exemplo de 間 (contínuo): 夏休みの間、ずっとアルバイトをしていた (Durante todas as férias trabalhei).\n• Exemplo de 間に (pontual): 留守の間に、荷物が届いた (A encomenda chegou enquanto eu estava fora).',
    examples: [
      {
        jp: '子供が寝ている間に、家事を済ませました。',
        reading: 'こども が ねている あいだ に、かじ を すませました。',
        romaji: 'Kodomo ga nete iru aida ni, kaji o sumasemashita.',
        meaningPt: 'Terminei os afazeres domésticos enquanto a criança estava dormindo.'
      }
    ]
  },
  {
    id: 'g_n3_5',
    pattern: '〜おかげで (Positivo) vs 〜せいで (Negativo)',
    titlePt: 'Causa e Efeito: "Graças a..." vs "Por culpa de..."',
    jlpt: 'N3',
    category: 'Causa & Consequência',
    formationFormula: '[Forma Simples (Adj-NA+な / Substantivo+の)] + おかげで (resultado bom) / せいで (resultado ruim)',
    explanationPt: 'Ambas explicam o motivo de algo, porém com forte carga emocional do falante:\n• おかげで: Expressa agradecimento pelo resultado próspero ou positivo.\n• せいで: Atribui culpa ou responsabilidade por um revés ou prejuízo.',
    keyRulePt: 'Cuidado com o uso irônico de おかげで em alguns contextos conversacionais.',
    examples: [
      {
        jp: '先生のおかげで、試験に合格できました。',
        reading: 'せんせい の おかげ で、しけん に ごうかく できました。',
        romaji: 'Sensei no okage de, shiken ni goukaku dekimashita.',
        meaningPt: 'Graças ao professor, consegui ser aprovado no exame.'
      },
      {
        jp: '大雨のせいで、電車が遅れました。',
        reading: 'おおあめ の せい で、でんしゃ が おくれました。',
        romaji: 'Ooame no sei de, densha ga okuremashita.',
        meaningPt: 'Por culpa da tempestade, o trem atrasou.'
      }
    ]
  },
  {
    id: 'g_n3_6',
    pattern: '〜代わりに (~kawari ni)',
    titlePt: 'Substituição & Compensação: "Em vez de / Em troca de"',
    jlpt: 'N3',
    category: 'Troca & Substituição',
    formationFormula: '[Verbo na Forma Dicionário / Substantivo+の] + 代わりに',
    explanationPt: 'Expressa que uma pessoa, coisa ou ação substituiu outra, ou que se oferece uma contrapartida como compensação por um favor.',
    keyRulePt: 'Muito comum em acordos e trocas de trabalho ou funções.',
    examples: [
      {
        jp: '英語を教えてもらう代わりに、日本語を教えます。',
        reading: 'えいご を おしえて もらう かわり に、にほんご を おしえます。',
        romaji: 'Eigo o oshiete morau kawari ni, nihongo o oshiemasu.',
        meaningPt: 'Em troca de você me ensinar inglês, eu lhe ensino japonês.'
      },
      {
        jp: '病気の部長の代わりに、私が会議に出席します。',
        reading: 'びょうき の ぶちょう の かわり に、わたし が かいぎ に しゅっせき します。',
        romaji: 'Byouki no buchou no kawari ni, watashi ga kaigi ni shusseki shimasu.',
        meaningPt: 'No lugar do gerente que adoeceu, eu participarei da reunião.'
      }
    ]
  },
  {
    id: 'g_n3_7',
    pattern: '〜に対して (~ni taishite)',
    titlePt: 'Contraste & Postura: "Em contraste com / Em relação a"',
    jlpt: 'N3',
    category: 'Contraste & Alvo',
    formationFormula: '[Substantivo] + に対して | [Forma Simples + の] + に対して',
    explanationPt: 'Tem dois usos principais: 1) Traçar um contraste nítido entre duas pessoas ou situações, 2) Indicar a postura ou atitude direcionada a um destinatário.',
    keyRulePt: 'Para modificar um substantivo seguinte: 〜に対する + [Substantivo] (ex: お客様に対する態度 - a atitude perante os clientes).',
    examples: [
      {
        jp: '兄が外交的なのに対して、弟はとても内気です。',
        reading: 'あに が がいこうてき な の に たいして、おとうと は とても うちき です。',
        romaji: 'Ani ga gaikouteki na no ni taishite, otouto wa totemo uchiki desu.',
        meaningPt: 'Enquanto o irmão mais velho é extrovertido, o mais novo é muito tímido.'
      },
      {
        jp: 'お客様に対して、いつも丁寧な言葉を使います。',
        reading: 'おきゃくさま に たいして、いつも ていねいな ことば を つかいます。',
        romaji: 'Okyakusama ni taishite, itsumo teinei na kotoba o tsukai masu.',
        meaningPt: 'Sempre uso linguagem polida para com os clientes.'
      }
    ]
  },
  {
    id: 'g_n3_8',
    pattern: '〜について / 〜に関して (~ni tsuite / ~ni kanshite)',
    titlePt: 'Tópico de Discussão: "A respeito de / Relativo a..."',
    jlpt: 'N3',
    category: 'Tema & Assunto',
    formationFormula: '[Substantivo] + について / に関して',
    explanationPt: 'Usado para introduzir o assunto, tema ou objeto de estudo, pesquisa ou debate. に関して é mais formal que について.',
    keyRulePt: 'Para ligar a um substantivo: 〜についての + [Substantivo] ou 〜に関する + [Substantivo].',
    examples: [
      {
        jp: '日本の歴史について調べています。',
        reading: 'にほん の れきし に ついて しらべて います。',
        romaji: 'Nihon no rekishi ni tsuite shirabete imasu.',
        meaningPt: 'Estou pesquisando a respeito da história do Japão.'
      },
      {
        jp: 'この問題に関する意見を聞かせてください。',
        reading: 'この もんだい に かんする いけん を きかせて ください。',
        romaji: 'Kono mondai ni kansuru iken o kikasete kudasai.',
        meaningPt: 'Por favor, deixe-me ouvir sua opinião relativa a esta questão.'
      }
    ]
  },
  {
    id: 'g_n3_9',
    pattern: '〜によって / 〜による (~ni yotte / ~ni yoru)',
    titlePt: 'Meio, Causa, Autoria & Diversidade: "Através de / Dependendo de"',
    jlpt: 'N3',
    category: 'Causa, Meio & Variação',
    formationFormula: '[Substantivo] + によって / によると / による',
    explanationPt: 'Estrutura extremamente frequente no JLPT N3 com 4 facetas:\n1) Meio ou método: インターネットによって (através da internet)\n2) Causa: 地震によって (devido ao terremoto)\n3) Variação / Dependência: 人によって違う (varia de pessoa para pessoa)\n4) Autoria passiva: シェイクスピアによって書かれた (escrito por Shakespeare).',
    keyRulePt: 'Como modificador de substantivo vira による (ex: 台風による被害 = danos causados pelo tufão).',
    examples: [
      {
        jp: '文化は国によって大きく異なります。',
        reading: 'ぶんか は くに に よって おおきく ことなります。',
        romaji: 'Bunka wa kuni ni yotte ookiku kotonarimasu.',
        meaningPt: 'A cultura varia grandemente dependendo do país.'
      },
      {
        jp: 'この絵は有名な画家によって描かれました。',
        reading: 'この え は ゆうめいな がか に よって えがかれました。',
        romaji: 'Kono e wa yuumei na gaka ni yotte egakaremashita.',
        meaningPt: 'Este quadro foi pintado por um pintor renomado.'
      }
    ]
  },
  {
    id: 'g_n3_10',
    pattern: 'Verbo (Forma-TA) + とたん / とたんに (~totan / totan ni)',
    titlePt: 'Sucessão Imediata: "No exato instante em que... / Assim que"',
    jlpt: 'N3',
    category: 'Tempo & Sucessão',
    formationFormula: '[Verbo na forma-TA] + とたんに',
    explanationPt: 'Descreve que uma segunda ação ou acontecimento inesperado e surpreendente ocorreu no mesmíssimo segundo em que a primeira ação terminou.',
    keyRulePt: 'A oração seguinte geralmente traz algo que surpreendeu o falante, não podendo ser uma ordem ou volição planejada.',
    examples: [
      {
        jp: 'ドアを開けたとたん、猫が飛び出してきた。',
        reading: 'ドア を あけた とたん、ねこ が とびだしてきた。',
        romaji: 'Doa o aketa totan, neko ga tobidashite kita.',
        meaningPt: 'No exato instante em que abri a porta, um gato saltou para fora.'
      }
    ]
  },
  {
    id: 'g_n3_11',
    pattern: 'Raiz MASU + 切る / 切れない (~kiru / ~kirenai)',
    titlePt: 'Completude Extrema: "Fazer tudo até o fim / Esgotar totalmente"',
    jlpt: 'N3',
    category: 'Completude & Limite',
    formationFormula: '[Raiz do Verbo (sem "masu")] + 切る (kiru) / 切れない (kirenai)',
    explanationPt: 'Expressa que uma ação foi executada até a última gota, sem sobrar nada. Na negativa (~kirenai), indica que a quantidade é tão vasta que é impossível concluir tudo.',
    keyRulePt: '• 使い切る (gastar tudo até o último centavo)\n• 食べ切れない (tanta comida que não cabe aguentar comer tudo)\n• 疲れ切った (completamente exausto/esgotado).',
    examples: [
      {
        jp: '長い小説を一日で読み切りました。',
        reading: 'ながい しょうせつ を いちにち で よみきりました。',
        romaji: 'Nagai shousetsu o ichinichi de yomikirimashita.',
        meaningPt: 'Li o longo romance até o fim em apenas um dia.'
      },
      {
        jp: '料理が多すぎて、とても食べ切れません。',
        reading: 'りょうり が おおすぎて、とても たべきれません。',
        romaji: 'Ryouri ga oosugite, totemo tabekiremasen.',
        meaningPt: 'Tem comida demais, é impossível comer tudo.'
      }
    ]
  },
  {
    id: 'g_n3_12',
    pattern: 'Raiz MASU + かけ / かける (~kake / ~kakeru)',
    titlePt: 'Ação Inacabada: "No meio do caminho / Prestes a..."',
    jlpt: 'N3',
    category: 'Aspecto & Interrupção',
    formationFormula: '[Raiz do Verbo (sem "masu")] + かける (forma verbal) / かけの [Substantivo] (como modificador)',
    explanationPt: 'Indica uma ação que começou mas foi interrompida no meio, ficando incompleta.',
    keyRulePt: '• 食べかけのパン (pão que foi mordido/comido pela metade)\n• 読みかけの本 (livro que comecei a ler e ainda não terminei).',
    examples: [
      {
        jp: '机の上に飲みかけのコーヒーが置いてあります。',
        reading: 'つくえ の うえ に のみかけ の コーヒー が おいて あります。',
        romaji: 'Tsukue no ue ni nomikake no koohii ga oite arimasu.',
        meaningPt: 'Tem um café tomado pela metade em cima da mesa.'
      }
    ]
  },
  {
    id: 'g_n3_13',
    pattern: 'Verbo (Forma Dicionário / Substantivo) + たびに (~tabi ni)',
    titlePt: 'Frequência Recorrente: "Toda vez que... / Sempre que..."',
    jlpt: 'N3',
    category: 'Repetição & Regularidade',
    formationFormula: '[Verbo na Forma Dicionário] + たびに | [Substantivo] + の + たびに',
    explanationPt: 'Expressa que invariavelmente, sempre que a ação A ocorre, o resultado B também acontece ao mesmo tempo.',
    keyRulePt: 'Não é usado para fatos cotidianos óbvios (como "toda vez que acordo"), mas para eventos que despertam sentimentos ou consequências marcantes.',
    examples: [
      {
        jp: 'この写真を見るたびに、故郷の家族を思い出します。',
        reading: 'この しゃしん を みる たび に、ふるさと の かぞく を おもいだします。',
        romaji: 'Kono shashin o miru tabi ni, furusato no kazoku o omoidashimasu.',
        meaningPt: 'Toda vez que vejo esta fotografia, lembro-me da minha família na minha terra natal.'
      }
    ]
  },
  {
    id: 'g_n3_14',
    pattern: '〜をはじめ / 〜をはじめとする (~o hajime)',
    titlePt: 'Representante Principal: "A começar por... / Principalmente..."',
    jlpt: 'N3',
    category: 'Exemplificação Formal',
    formationFormula: '[Substantivo] + をはじめ / をはじめとして / をはじめとする [Substantivo]',
    explanationPt: 'Apresenta o exemplo mais notável ou representativo de um grupo maior para introduzir todos os demais.',
    keyRulePt: 'Estrutura formal comum em apresentações, discursos e redações acadêmicas.',
    examples: [
      {
        jp: '富士山をはじめ、日本には美しい山がたくさんあります。',
        reading: 'ふじさん を はじめ、にほん に は うつくしい やま が たくさん あります。',
        romaji: 'Fujisan o hajime, nihon ni wa utsukushii yama ga takusan arimasu.',
        meaningPt: 'A começar pelo Monte Fuji, o Japão possui muitas montanhas belíssimas.'
      }
    ]
  },
  {
    id: 'g_n3_15',
    pattern: '〜さえ (~sae)',
    titlePt: 'Ênfase Extrema: "Até mesmo... / Nem sequer..."',
    jlpt: 'N3',
    category: 'Ênfase & Extremos',
    formationFormula: '[Substantivo] + (で)さえ | [Forma Condicional] + さえ + すれば (contanto que apenas faça)',
    explanationPt: '1) Cita o caso mais evidente ou básico para sugerir que o resto é ainda mais óbvio ("até mesmo uma criança saberia"). 2) Em combinação com condicional (〜さえ〜ば), significa "bastando apenas que...".',
    keyRulePt: '• ひらがなさえ読めない (Não sabe ler nem sequer hiragana).\n• 薬を飲みさえすれば治ります (Basta tomar o remédio que você se cura).',
    examples: [
      {
        jp: 'この漢字は子供でさえ読めます。',
        reading: 'この かんじ は こども でさえ よめます。',
        romaji: 'Kono kanji wa kodomo desae yomemasu.',
        meaningPt: 'Até mesmo crianças conseguem ler este kanji.'
      },
      {
        jp: '健康でさえあれば、何でもできます。',
        reading: 'けんこう でさえ あれば、なんでも できます。',
        romaji: 'Kenkou desae areba, nan demo dekimasu.',
        meaningPt: 'Contanto que você tenha saúde, você pode fazer qualquer coisa.'
      }
    ]
  }
];
