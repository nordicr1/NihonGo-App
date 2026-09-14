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
    id: 'g_n3_5_1',
    pattern: 'Graças a: 〜おかげで (~okage de)',
    titlePt: 'Causa Positiva: "Graças a..."',
    jlpt: 'N3',
    category: 'Causa & Consequência',
    formationFormula: '[Forma Simples (Adj-NA+な / Substantivo+の)] + おかげで',
    explanationPt: 'Usado exclusivamente para razões que trouxeram um bom resultado. Expressa gratidão e mérito.',
    keyRulePt: 'Não pode ser usado para resultados ruins, a menos que seja com forte sarcasmo (raro).',
    examples: [
      {
        jp: '先生のおかげで、試験に合格しました。',
        reading: 'せんせい の おかげ で、しけん に ごうかく しました。',
        romaji: 'Sensei no okage de, shiken ni goukaku shimashita.',
        meaningPt: 'Graças ao professor, fui aprovado no exame.'
      }
    ]
  },
  {
    id: 'g_n3_5_2',
    pattern: 'Por culpa de: 〜せいで (~sei de)',
    titlePt: 'Causa Negativa: "Por culpa de..."',
    jlpt: 'N3',
    category: 'Causa & Consequência',
    formationFormula: '[Forma Simples (Adj-NA+な / Substantivo+の)] + せいで',
    explanationPt: 'Usado exclusivamente para razões que trouxeram um mau resultado. Expressa culpa ou aborrecimento.',
    keyRulePt: 'Não pode ser usado para resultados positivos.',
    examples: [
      {
        jp: '雨が降ったせいで、試合が中止になりました。',
        reading: 'あめ が ふった せい で、しあい が ちゅうし に なりました。',
        romaji: 'Ame ga futta sei de, shiai ga chuushi ni narimashita.',
        meaningPt: 'Por culpa da chuva, a partida foi cancelada.'
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
    id: 'g_n3_8_1',
    pattern: 'A respeito de: 〜について (~ni tsuite)',
    titlePt: 'Tema: "Sobre / A respeito de..."',
    jlpt: 'N3',
    category: 'Tema & Assunto',
    formationFormula: '[Substantivo] + について',
    explanationPt: 'Usado para indicar o tema sobre o qual se pensa, fala, pesquisa ou escreve. É o equivalente direto a "about" em inglês.',
    keyRulePt: 'Para modificar um substantivo logo em seguida, usa-se 〜についての [Subst]. Ex: 日本についての本 (Um livro sobre o Japão).',
    examples: [
      {
        jp: '日本の歴史について調べています。',
        reading: 'にほん の れきし に ついて しらべて います。',
        romaji: 'Nihon no rekishi ni tsuite shirabete imasu.',
        meaningPt: 'Estou pesquisando a respeito da história do Japão.'
      }
    ]
  },
  {
    id: 'g_n3_8_2',
    pattern: 'Com relação a: 〜に関して (~ni kanshite)',
    titlePt: 'Tema Formal: "Relacionado a..."',
    jlpt: 'N3',
    category: 'Tema & Assunto',
    formationFormula: '[Substantivo] + に関して (ni kanshite)',
    explanationPt: 'Significa "a respeito de" assim como について, mas é mais amplo e muito mais formal. Usado em discursos, notícias e e-mails profissionais.',
    keyRulePt: 'Para modificar um substantivo seguinte, usa-se 〜に関する [Subst].',
    examples: [
      {
        jp: 'この問題に関する意見を聞かせてください。',
        reading: 'この もんだい に かんする いけん を きかせて ください。',
        romaji: 'Kono mondai ni kansuru iken o kikasete kudasai.',
        meaningPt: 'Por favor, deixe-me ouvir sua opinião relativa (relacionada) a esta questão.'
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
  },
  {
    id: 'g_n3_16',
    pattern: '〜くせに (~kuse ni)',
    titlePt: 'Contraste com Crítica: "Apesar de / Mesmo..." (Tom de Censura)',
    jlpt: 'N3',
    category: 'Crítica & Sentimentos',
    formationFormula: '[Forma Simples (Substantivo+の / Adj-NA+な)] + くせに',
    explanationPt: 'Muito parecido com "noni" (apesar de), mas com um tom forte de crítica, desprezo ou acusação. Usado para apontar a hipocrisia ou falha de alguém.',
    keyRulePt: 'Só pode ser usado quando o sujeito das duas orações é a mesma pessoa (geralmente não você mesmo, a não ser que seja autodepreciação).',
    examples: [
      {
        jp: '彼は何も知らないくせに、偉そうに話す。',
        reading: 'かれ は なにも しらない くせに、えらそう に はなす。',
        romaji: 'Kare wa nani mo shiranai kuse ni, erasou ni hanasu.',
        meaningPt: 'Apesar de não saber de nada, ele fala com ar de superioridade.'
      },
      {
        jp: '男のくせに泣くな。',
        reading: 'おとこ の くせに なくな。',
        romaji: 'Otoko no kuse ni naku na.',
        meaningPt: 'Mesmo sendo homem, não chore. (Expressão antiquada de repreensão)'
      }
    ]
  },
  {
    id: 'g_n3_17',
    pattern: '〜にもかかわらず (~ni mo kakawarazu)',
    titlePt: 'Contraste Formal: "A despeito de / Não obstante"',
    jlpt: 'N3',
    category: 'Contraste & Formalidade',
    formationFormula: '[Forma Simples (Subst e Adj-NA dispensam o だ)] + にもかかわらず',
    explanationPt: 'Expressa forte surpresa de que um resultado ocorreu apesar das condições desfavoráveis. É a versão escrita e muito mais formal de "noni".',
    keyRulePt: 'Usado em notícias, avisos formais e discursos.',
    examples: [
      {
        jp: '大雨にもかかわらず、多くの人が集まった。',
        reading: 'おおあめ に も かかわらず、おおく の ひと が あつまった。',
        romaji: 'Ooame ni mo kakawarazu, ooku no hito ga atsumatta.',
        meaningPt: 'A despeito da forte chuva, muitas pessoas se reuniram.'
      }
    ]
  },
  {
    id: 'g_n3_18',
    pattern: '〜ば〜ほど (~ba ~hodo)',
    titlePt: 'Proporcionalidade: "Quanto mais... mais..."',
    jlpt: 'N3',
    category: 'Proporção & Grau',
    formationFormula: '[Verbo na Condicional 〜ば] + [Mesmo Verbo no Dicionário] + ほど',
    explanationPt: 'Indica que à medida que uma ação ou estado se intensifica, o resultado também aumenta na mesma proporção.',
    keyRulePt: 'O verbo ou adjetivo é repetido duas vezes. (Ex: 読めば 読むほど = Quanto mais leio, mais...)',
    examples: [
      {
        jp: '日本語は、勉強すればするほど面白くなります。',
        reading: 'にほんご は、べんきょう すれば する ほど おもしろく なります。',
        romaji: 'Nihongo wa, benkyou sureba suru hodo omoshiroku narimasu.',
        meaningPt: 'Quanto mais estudo japonês, mais interessante ele fica.'
      },
      {
        jp: 'スーパーは家から近ければ近いほど便利です。',
        reading: 'スーパー は いえ から ちかければ ちかい ほど べんり です。',
        romaji: 'Suupaa wa ie kara chikakereba chikai hodo benri desu.',
        meaningPt: 'Quanto mais perto de casa for o supermercado, mais conveniente é.'
      }
    ]
  },
  {
    id: 'g_n3_19',
    pattern: '〜ばよかった (~ba yokatta)',
    titlePt: 'Arrependimento: "Eu deveria ter... / Teria sido melhor se..."',
    jlpt: 'N3',
    category: 'Arrependimento & Emoção',
    formationFormula: '[Condicional 〜ば / 〜たら] + よかった',
    explanationPt: 'Expressa um forte remorso sobre algo no passado que você fez e não deveria, ou que não fez e deveria ter feito.',
    keyRulePt: 'Na negativa: 〜なければよかった (Eu não deveria ter feito isso).',
    examples: [
      {
        jp: 'あんなこと、言わなければよかった。',
        reading: 'あんな こと、いわなければ よかった。',
        romaji: 'Anna koto, iwanakereba yokatta.',
        meaningPt: 'Eu não deveria ter dito aquilo.'
      },
      {
        jp: 'もっと早く起きればよかったです。',
        reading: 'もっと はやく おきれば よかった です。',
        romaji: 'Motto hayaku okireba yokatta desu.',
        meaningPt: 'Eu deveria ter acordado mais cedo.'
      }
    ]
  },
  {
    id: 'g_n3_20',
    pattern: '〜ところ (~tokoro) [Passado, Presente, Futuro]',
    titlePt: 'Ponto Exato no Tempo: "Prestes a / No meio de / Acabou de"',
    jlpt: 'N3',
    category: 'Fases da Ação',
    formationFormula: '[Verbo (Dicionário / ている / た)] + ところ',
    explanationPt: 'Foca no momento exato em que uma ação se encontra. O tempo do verbo define o significado.',
    keyRulePt: '• Dicionário + ところ = Prestes a começar (これから食べるところ: Estou prestes a comer).\n• ている + ところ = Bem no meio da ação (今食べているところ: Estou no meio da refeição).\n• た + ところ = Acabou de acontecer neste segundo (今食べたところ: Acabei de comer agora).',
    examples: [
      {
        jp: '今、家を出るところです。',
        reading: 'いま、いえ を でる ところ です。',
        romaji: 'Ima, ie o deru tokoro desu.',
        meaningPt: 'Estou prestes a sair de casa agora mesmo.'
      }
    ]
  },
  {
    id: 'g_n3_21',
    pattern: '〜わけだ (~wake da)',
    titlePt: 'Conclusão Lógica: "Por isso que... / Com razão..."',
    jlpt: 'N3',
    category: 'Conclusão & Compreensão',
    formationFormula: '[Forma Simples (Subst+な / Adj-NA+な)] + わけだ',
    explanationPt: 'Usado quando o falante descobre uma razão e finalmente compreende porque algo é do jeito que é ("Ah, então é por isso!").',
    keyRulePt: 'Frequentemente acompanhado de 道理で (doori de - não é à toa).',
    examples: [
      {
        jp: '彼は10年も日本に住んでいたのか。日本語が上手なわけだ。',
        reading: 'かれ は じゅうねん も にほん に すんでいた の か。にほんご が じょうずな わけ だ。',
        romaji: 'Kare wa juunen mo nihon ni sunde ita no ka. Nihongo ga jouzu na wake da.',
        meaningPt: 'Ah, ele morou 10 anos no Japão? Com razão (então é por isso que) o japonês dele é tão bom.'
      }
    ]
  },
  {
    id: 'g_n3_22',
    pattern: '〜っけ (~kke)',
    titlePt: 'Tentando Lembrar: "Como era mesmo? / O que era mesmo?"',
    jlpt: 'N3',
    category: 'Dúvida & Memória',
    formationFormula: '[Passado Simples do Verbo / Subst+だ / Adj] + っけ',
    explanationPt: 'Sufixo coloquial muito comum na fala. O falante usa quando está tentando vasculhar a própria memória ou pede para alguém confirmar uma informação que ele esqueceu.',
    keyRulePt: 'Sempre tem uma nuance de "falha de memória momentânea".',
    examples: [
      {
        jp: '明日の会議は何時からだっけ？',
        reading: 'あした の かいぎ は なんじ から だっけ？',
        romaji: 'Ashita no kaigi wa nanji kara dakke?',
        meaningPt: 'A que horas é a reunião de amanhã mesmo?'
      },
      {
        jp: 'あの人の名前、何て言ったっけ。',
        reading: 'あの ひと の なまえ、なんて いった っけ。',
        romaji: 'Ano hito no namae, nan te ittakke.',
        meaningPt: 'Qual era mesmo o nome daquela pessoa?'
      }
    ]
  },
  {
    id: 'g_n3_23',
    pattern: '〜くらい / 〜ぐらい (~kurai / ~gurai)',
    titlePt: 'Nível Mínimo & Extensão: "Ao menos / A ponto de..."',
    jlpt: 'N3',
    category: 'Grau & Extensão',
    formationFormula: '[Forma Simples / Substantivo] + くらい / ぐらい',
    explanationPt: 'Tem dois usos principais: 1) Expressar que algo atingiu um nível absurdo ("Estava com tanta dor a ponto de chorar"), 2) Menosprezar algo como sendo o mínimo exigido ("Pelo menos isso você deveria saber").',
    keyRulePt: 'As formas "kurai" e "gurai" são intercambiáveis na maioria das situações.',
    examples: [
      {
        jp: '死ぬくらい疲れました。',
        reading: 'しぬ くらい つかれました。',
        romaji: 'Shinu kurai tsukaremashita.',
        meaningPt: 'Estou cansado a ponto de morrer.'
      },
      {
        jp: '自分の名前ぐらい漢字で書けるよ。',
        reading: 'じぶん の なまえ ぐらい かんじ で かける よ。',
        romaji: 'Jibun no namae gurai kanji de kakeru yo.',
        meaningPt: 'Eu consigo escrever pelo menos o meu próprio nome em kanji, né.'
      }
    ]
  },
  {
    id: 'g_n3_24',
    pattern: '〜にとって (~ni totte)',
    titlePt: 'Perspectiva: "Para (mim) / Do ponto de vista de..."',
    jlpt: 'N3',
    category: 'Perspectiva & Julgamento',
    formationFormula: '[Substantivo] + にとって',
    explanationPt: 'Usado para indicar de qual ponto de vista ou para quem algo tem valor, importância ou dificuldade.',
    keyRulePt: 'Normalmente, a frase que se segue a "ni totte" contém um julgamento ou avaliação (ex: "é importante", "é difícil", "é perigoso").',
    examples: [
      {
        jp: '私にとって、家族は一番大切なものです。',
        reading: 'わたし に とって、かぞく は いちばん たいせつな もの です。',
        romaji: 'Watashi ni totte, kazoku wa ichiban taisetsu na mono desu.',
        meaningPt: 'Para mim (do meu ponto de vista), a família é a coisa mais importante.'
      }
    ]
  },
  {
    id: 'g_n3_25',
    pattern: '〜として (~to shite)',
    titlePt: 'Papel ou Posição: "Como / Na qualidade de..."',
    jlpt: 'N3',
    category: 'Papel & Função',
    formationFormula: '[Substantivo] + として',
    explanationPt: 'Indica a posição, papel, qualificação ou título sob o qual alguém age ou algo é usado.',
    keyRulePt: 'Equivale ao "como" do português no sentido de função. Ex: Trabalhar "como" professor.',
    examples: [
      {
        jp: '彼は留学生として日本に来ました。',
        reading: 'かれ は りゅうがくせい として にほん に きました。',
        romaji: 'Kare wa ryuugakusei to shite nihon ni kimashita.',
        meaningPt: 'Ele veio ao Japão como (na qualidade de) estudante de intercâmbio.'
      }
    ]
  },
  {
    id: 'g_n3_26',
    pattern: '〜べきだ (~beki da)',
    titlePt: 'Dever Moral ou Conselho Forte: "Deveria..."',
    jlpt: 'N3',
    category: 'Obrigação & Dever',
    formationFormula: '[Verbo na Forma Dicionário] + べきだ',
    explanationPt: 'Expressa um dever baseado no senso comum, na moralidade ou uma forte recomendação do falante.',
    keyRulePt: '• O verbo する (fazer) frequentemente vira すべき (subeki) em vez de するべき (suru beki).\n• Para dizer que "não deveria", usa-se べきではない (beki dewa nai).',
    examples: [
      {
        jp: '学生はもっと勉強すべきだ。',
        reading: 'がくせい は もっと べんきょう すべき だ。',
        romaji: 'Gakusei wa motto benkyou subeki da.',
        meaningPt: 'Os estudantes deveriam estudar mais (é o dever deles).'
      },
      {
        jp: 'そんなことを言うべきではありません。',
        reading: 'そんな こと を いう べき ではありません。',
        romaji: 'Sonna koto o iu beki dewa arimasen.',
        meaningPt: 'Você não deveria dizer coisas desse tipo.'
      }
    ]
  },
  {
    id: 'g_n3_27',
    pattern: '〜に違いない (~ni chigainai)',
    titlePt: 'Certeza Absoluta: "Sem dúvida / Com certeza é..."',
    jlpt: 'N3',
    category: 'Impossibilidade & Certeza',
    formationFormula: '[Forma Simples (Substantivo/Adj-Na sem だ)] + に違いない',
    explanationPt: 'Expressa uma convicção fortíssima do falante baseada em dedução. Literalmente "não há como errar sobre..."',
    keyRulePt: 'É mais formal que 〜に決まっている. Muito comum em textos escritos e deduções lógicas.',
    examples: [
      {
        jp: '犯人はあの男に違いない。',
        reading: 'はんにん は あの おとこ に ちがいない。',
        romaji: 'Hannin wa ano otoko ni chigainai.',
        meaningPt: 'O culpado sem dúvida alguma é aquele homem.'
      }
    ]
  },
  {
    id: 'g_n3_28',
    pattern: '〜に決まっている (~ni kimatte iru)',
    titlePt: 'Certeza Óbvia: "É óbvio que / Está claro que..."',
    jlpt: 'N3',
    category: 'Impossibilidade & Certeza',
    formationFormula: '[Forma Simples (Substantivo/Adj-Na sem だ)] + に決まっている',
    explanationPt: 'Similar ao に違いない, mas com um tom muito mais subjetivo e coloquial. "Está decidido/óbvio para mim que é assim".',
    keyRulePt: 'Na fala casual, pode ser encurtado para に決まってる (ni kimatteru).',
    examples: [
      {
        jp: 'そんなの、嘘に決まっているよ。',
        reading: 'そんな の、うそ に きまっている よ。',
        romaji: 'Sonna no, uso ni kimatte iru yo.',
        meaningPt: 'Isso é óbvio que é mentira, né.'
      }
    ]
  },
  {
    id: 'g_n3_29',
    pattern: '〜っこない (~kkonai)',
    titlePt: 'Negação Absoluta Forte: "Não tem jeito de / Sem chance..."',
    jlpt: 'N3',
    category: 'Impossibilidade & Certeza',
    formationFormula: '[Raiz do Verbo (sem "masu")] + っこない',
    explanationPt: 'Uma forma extremamente coloquial e expressiva de dizer que algo é absolutamente impossível de acontecer.',
    keyRulePt: 'Pode substituir a forma potencial negativa para soar mais dramático ou teimoso (ex: できない → できっこない).',
    examples: [
      {
        jp: '今日中にこんなたくさんの仕事、終わりっこないよ。',
        reading: 'きょうじゅう に こんな たくさん の しごと、おわりっこない よ。',
        romaji: 'Kyoujuu ni konna takusan no shigoto, owarikkonai yo.',
        meaningPt: 'Sem chance de terminar esse monte de trabalho ainda hoje.'
      }
    ]
  },
  {
    id: 'g_n3_30',
    pattern: '〜最中に (~saichuu ni)',
    titlePt: 'No ápice / Bem no meio de...',
    jlpt: 'N3',
    category: 'Tempo & Interrupção',
    formationFormula: '[Verbo no Contínuo 〜ている / Substantivo+の] + 最中に',
    explanationPt: 'Enfatiza que uma ação estava no seu clímax, bem no meio da execução, quando geralmente algo (muitas vezes inconveniente) aconteceu e a interrompeu.',
    keyRulePt: 'Diferente do 間に (que é mais amplo), o 最中に foca no momento de maior intensidade. Ex: Bem no meio do discurso, a luz acabou.',
    examples: [
      {
        jp: '会議の最中に、携帯電話が鳴ってしまった。',
        reading: 'かいぎ の さいちゅう に、けいたいでんわ が なって しまった。',
        romaji: 'Kaigi no saichuu ni, keitai denwa ga natte shimatta.',
        meaningPt: 'Bem no meio da reunião, o celular tocou.'
      }
    ]
  },
  {
    id: 'g_n3_31',
    pattern: '〜てからでないと (~te kara de nai to)',
    titlePt: 'Pré-requisito: "A menos que faça X primeiro..."',
    jlpt: 'N3',
    category: 'Condição Restritiva',
    formationFormula: '[Verbo na Forma-TE] + からでないと / からでなければ',
    explanationPt: 'Indica que a ação A é um pré-requisito absoluto para que a ação B aconteça. Sem fazer A, B é impossível.',
    keyRulePt: 'A frase que se segue a essa estrutura (ação B) é sempre negativa ou indica impossibilidade.',
    examples: [
      {
        jp: '親に相談してからでないと、決められません。',
        reading: 'おや に そうだん して から でないと、きめられません。',
        romaji: 'Oya ni soudan shite kara de nai to, kimeraremasen.',
        meaningPt: 'A menos que eu converse com meus pais primeiro, não posso decidir.'
      }
    ]
  },
  {
    id: 'g_n3_32',
    pattern: '〜ことにしている (~koto ni shite iru)',
    titlePt: 'Hábito Pessoal: "Eu decidi / Tenho a regra de..."',
    jlpt: 'N3',
    category: 'Hábito & Decisão',
    formationFormula: '[Verbo Dicionário / Forma-NAI] + ことにしている',
    explanationPt: 'Expressa um hábito ou rotina que o próprio falante decidiu estabelecer para si mesmo (uma regra pessoal ativa).',
    keyRulePt: 'O verbo する (fazer) indica que é uma escolha/esforço individual.',
    examples: [
      {
        jp: '健康のため、毎朝走ることにしている。',
        reading: 'けんこう の ため、まいあさ はしる こと に している。',
        romaji: 'Kenkou no tame, maiasa hashiru koto ni shite iru.',
        meaningPt: 'Pela minha saúde, tenho a regra de (decidi) correr todas as manhãs.'
      }
    ]
  },
  {
    id: 'g_n3_33',
    pattern: '〜ことになっている (~koto ni natte iru)',
    titlePt: 'Regras e Leis: "Está determinado que..."',
    jlpt: 'N3',
    category: 'Hábito & Decisão',
    formationFormula: '[Verbo Dicionário / Forma-NAI] + ことになっている',
    explanationPt: 'Expressa uma regra, costume, lei ou cronograma que foi decidido por outras pessoas ou pela sociedade.',
    keyRulePt: 'O verbo なる (tornar-se/ser decidido) indica que o falante apenas segue a regra, ele não a criou.',
    examples: [
      {
        jp: '日本では、家の中で靴を脱ぐことになっています。',
        reading: 'にほん では、いえ の なか で くつ を ぬぐ こと に なっています。',
        romaji: 'Nihon dewa, ie no naka de kutsu o nugu koto ni natte imasu.',
        meaningPt: 'No Japão, é regra (costume) tirar os sapatos dentro de casa.'
      }
    ]
  },
  {
    id: 'g_n3_34',
    pattern: '〜ようにしている (~you ni shite iru)',
    titlePt: 'Esforço Contínuo: "Faço questão de / Esforço-me para..."',
    jlpt: 'N3',
    category: 'Hábito & Esforço',
    formationFormula: '[Verbo Dicionário / Forma-NAI] + ようにしている',
    explanationPt: 'Parecido com "koto ni shite iru", mas o foco aqui não é a criação de uma regra estrita, e sim o esforço diário para tentar cumprir um objetivo.',
    keyRulePt: 'Mostra uma tentativa contínua: "Tento ao máximo fazer X".',
    examples: [
      {
        jp: '野菜をたくさん食べるようにしています。',
        reading: 'やさい を たくさん たべる よう に しています。',
        romaji: 'Yasai o takusan taberu you ni shite imasu.',
        meaningPt: 'Estou me esforçando (fazendo questão) de comer bastantes vegetais.'
      }
    ]
  },
  {
    id: 'g_n3_35',
    pattern: '〜わりに (~wari ni)',
    titlePt: 'Quebra de Expectativa: "Para um(a)... / Considerando que..."',
    jlpt: 'N3',
    category: 'Contraste & Proporção',
    formationFormula: '[Forma Simples / Adj-NA+な / Substantivo+の] + わりに',
    explanationPt: 'Usado quando há um contraste entre o nível/status da pessoa e o que ela realmente faz ou aparenta. Expressa surpresa (positiva ou negativa).',
    keyRulePt: 'Diferente de にしては, o わりに pode ser usado com adjetivos que indicam níveis abstratos (ex: Para um lugar barato, é gostoso).',
    examples: [
      {
        jp: '彼はたくさん食べるわりに、太らない。',
        reading: 'かれ は たくさん たべる わりに、ふとらない。',
        romaji: 'Kare wa takusan taberu wari ni, futoranai.',
        meaningPt: 'Considerando o tanto que ele come, ele não engorda.'
      }
    ]
  },
  {
    id: 'g_n3_36',
    pattern: '〜にしては (~ni shite wa)',
    titlePt: 'Quebra de Expectativa Específica: "Para um..."',
    jlpt: 'N3',
    category: 'Contraste & Proporção',
    formationFormula: '[Forma Simples / Substantivo] + にしては',
    explanationPt: 'Muito parecido com o わりに, mas o にしては é usado quando você menciona um fato concreto, um número ou uma pessoa específica como parâmetro de comparação.',
    keyRulePt: 'Não pode ser usado com adjetivos gerais. Ex: "Para um estrangeiro (fato concreto), o japonês dele é bom" = 外国人にしては (Correto). "Para algo barato..." = 安いにしては (Incorreto, use わりに).',
    examples: [
      {
        jp: '初めてケーキを作ったにしては、上手にできました。',
        reading: 'はじめて ケーキ を つくった にしては、じょうず に できました。',
        romaji: 'Hajimete keeki o tsukutta ni shite wa, jouzu ni dekimashita.',
        meaningPt: 'Para (alguém que) fez um bolo pela primeira vez, ficou muito bom.'
      }
    ]
  },
  {
    id: 'g_n3_37',
    pattern: 'たとえ〜ても (tatoe ~te mo)',
    titlePt: 'Suposição Extrema: "Mesmo que..."',
    jlpt: 'N3',
    category: 'Condição Concessiva',
    formationFormula: 'たとえ + [Verbo-TEも / Adj-I くても / Adj-NA/Subst でも]',
    explanationPt: 'Enfatiza fortemente que não importa a condição extrema que aconteça, a resolução ou resultado não mudará.',
    keyRulePt: 'A palavra たとえ (tatoe) funciona como um sinalizador antecipado para o "ても" (te mo) que vem no final.',
    examples: [
      {
        jp: 'たとえ雨が降っても、試合は行います。',
        reading: 'たとえ あめ が ふっても、しあい は おこないます。',
        romaji: 'Tatoe ame ga futte mo, shiai wa okonaimasu.',
        meaningPt: 'Mesmo que chova, a partida será realizada.'
      }
    ]
  },
  {
    id: 'g_n3_38',
    pattern: '〜ばかりでなく (~bakari de naku)',
    titlePt: 'Adição: "Não apenas X, mas também..."',
    jlpt: 'N3',
    category: 'Adição',
    formationFormula: '[Forma Simples / Substantivo] + ばかりでなく / ばかりか',
    explanationPt: 'Expressa que há algo a mais, além daquilo que já era esperado. É uma variação formal de だけでなく.',
    keyRulePt: 'Frequentemente acompanhado por も (também) na segunda parte da frase.',
    examples: [
      {
        jp: '彼は英語ばかりでなく、フランス語も話せる。',
        reading: 'かれ は えいご ばかりでなく、フランスご も はなせる。',
        romaji: 'Kare wa eigo bakari de naku, furansugo mo hanaseru.',
        meaningPt: 'Ele consegue falar não apenas inglês, mas também francês.'
      }
    ]
  },
  {
    id: 'g_n3_39',
    pattern: '〜ついでに (~tsuide ni)',
    titlePt: 'Aproveitando a chance: "Já que estou fazendo..."',
    jlpt: 'N3',
    category: 'Ação Paralela',
    formationFormula: '[Verbo Dicionário / Verbo-TA / Subst+の] + ついでに',
    explanationPt: 'Indica que enquanto você está realizando uma ação principal A, você aproveita o momento/oportunidade para realizar a ação secundária B.',
    keyRulePt: 'A ação principal fica ANTES do tsuide ni.',
    examples: [
      {
        jp: '散歩のついでに、パンを買ってきます。',
        reading: 'さんぽ の ついで に、パン を かって きます。',
        romaji: 'Sanpo no tsuide ni, pan o katte kimasu.',
        meaningPt: 'Aproveitando a caminhada (o momento de passear), comprarei pão.'
      }
    ]
  },
  {
    id: 'g_n3_40',
    pattern: '〜とともに (~to tomo ni)',
    titlePt: 'Mudanças Conjuntas: "À medida que / Junto com"',
    jlpt: 'N3',
    category: 'Tempo & Mudança Simultânea',
    formationFormula: '[Verbo Dicionário / Substantivo] + とともに',
    explanationPt: 'Usado na escrita para expressar que duas coisas progridem simultaneamente. "À medida que X muda, Y muda também".',
    keyRulePt: 'Muito comum em jornais e artigos para descrever envelhecimento, crescimento populacional e economia.',
    examples: [
      {
        jp: '年をとるとともに、体力が落ちてきた。',
        reading: 'とし を とる と ともに、たいりょく が おちて きた。',
        romaji: 'Toshi o toru to tomo ni, tairyoku ga ochite kita.',
        meaningPt: 'À medida que envelheço, minha força física vem caindo.'
      }
    ]
  },
  {
    id: 'g_n3_41',
    pattern: '〜てたまらない (~te tamaranai)',
    titlePt: 'Sentimento Incontrolável: "Insuportavelmente..."',
    jlpt: 'N3',
    category: 'Emoção Forte',
    formationFormula: '[Verbo-TE / Adj-I くて / Adj-NA で] + たまらない / しょうがない',
    explanationPt: 'Expressa um sentimento (físico ou emocional) tão forte que o falante mal consegue suportar.',
    keyRulePt: 'É estritamente subjetivo e usado apenas para descrever os sentimentos da própria pessoa (eu).',
    examples: [
      {
        jp: '暑くてたまらない。',
        reading: 'あつくて たまらない。',
        romaji: 'Atsukute tamaranai.',
        meaningPt: 'Está quente de forma insuportável (Não aguento mais o calor).'
      }
    ]
  }
];
