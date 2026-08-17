import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ===================== N5 QUESTIONS =====================
  {
    id: 'q_1',
    jlpt: 'N5',
    category: 'Partículas',
    question: 'わたし ____ 田中 です。',
    questionRomaji: 'Watashi ___ Tanaka desu.',
    questionPt: 'Escolha a partícula de tópico correta para completar: "Eu sou Tanaka."',
    options: ['は (wa)', 'を (o)', 'で (de)', 'へ (e)'],
    correctIndex: 0,
    explanationPt: 'A partícula は (pronunciada "wa") é a marcadora de Tópico da frase ("Quanto a mim, sou o Tanaka").'
  },
  {
    id: 'q_2',
    jlpt: 'N5',
    category: 'Partículas',
    question: 'レストラン ____ 寿司を食べます。',
    questionRomaji: 'Resutoran ___ sushi o tabemasu.',
    questionPt: 'Escolha a partícula que indica o LOCAL onde uma ação dinâmica acontece: "Como sushi no restaurante."',
    options: ['に (ni)', 'で (de)', 'へ (e)', 'と (to)'],
    correctIndex: 1,
    explanationPt: 'A partícula で (de) indica o local onde uma ação ativa ou dinâmica ocorre.'
  },
  {
    id: 'q_3',
    jlpt: 'N5',
    category: 'Kanji',
    question: 'Qual é o significado em Português do Kanji 「水」?',
    questionRomaji: 'Mizu (sui)',
    questionPt: 'Identifique o elemento e significado correto:',
    options: ['Fogo', 'Árvore', 'Água', 'Ouro / Dinheiro'],
    correctIndex: 2,
    explanationPt: '「水」 lê-se "mizu" (leitura kun) ou "sui" (leitura on) e significa Água.'
  },
  {
    id: 'q_n5_k1',
    jlpt: 'N5',
    category: 'Kanji',
    question: 'Como se lê a palavra em kanji 「日本」?',
    questionRomaji: 'Kanji: 日本',
    questionPt: 'Identifique a leitura correta do país Japão:',
    options: ['にほん (nihon)', 'まいちに (mainichi)', 'にちよう (nichiyou)', 'ほんじん (honjin)'],
    correctIndex: 0,
    explanationPt: '「日本」 combina 日 (sol) e 本 (origem), lendo-se "Nihon" ou "Nippon" (Origem do Sol / Japão).'
  },
  {
    id: 'q_n5_k2',
    jlpt: 'N5',
    category: 'Kanji',
    question: 'Qual kanji representa "Grande" em japonês?',
    questionRomaji: 'Grande / Ookii',
    questionPt: 'Selecione o ideograma correspondente a Grande:',
    options: ['小 (chii)', '大 (oo / dai)', '中 (naka)', '高 (taka)'],
    correctIndex: 1,
    explanationPt: '「大」 significa Grande (ex: 大きい ookii, 大学 daigaku).'
  },
  {
    id: 'q_4',
    jlpt: 'N5',
    category: 'Vocabulário',
    question: 'Como se diz "Gostoso / Delicioso" em japonês?',
    questionRomaji: 'Delicioso / Saboroso',
    questionPt: 'Selecione o adjetivo correspondente:',
    options: ['たかい (takai)', 'おいしい (oishii)', 'あたらしい (atarashii)', 'しずか (shizuka)'],
    correctIndex: 1,
    explanationPt: '「おいしい (美味しい)」 significa gostoso, delicioso.'
  },

  // ===================== N4 QUESTIONS =====================
  {
    id: 'q_5',
    jlpt: 'N4',
    category: 'Gramática',
    question: '日本へ行った ____ があります。',
    questionRomaji: 'Nihon e itta ___ ga arimasu.',
    questionPt: 'Complete a estrutura que indica EXPERIÊNCIA PASSADA ("Já estive no Japão"):',
    options: ['こと (koto)', 'もの (mono)', 'とき (toki)', 'ため (tame)'],
    correctIndex: 0,
    explanationPt: 'A estrutura 〜たことがある (forma ta + koto ga aru) é usada para expressar experiências passadas.'
  },
  {
    id: 'q_n4_k1',
    jlpt: 'N4',
    category: 'Kanji',
    question: 'Qual é a leitura da palavra em kanji 「家族」?',
    questionRomaji: 'Kanji: 家族',
    questionPt: 'Identifique a leitura correspondente a "Família":',
    options: ['かぞく (kazoku)', 'きょうだい (kyoudai)', 'ごしゅじん (goshujin)', 'ともだち (tomodachi)'],
    correctIndex: 0,
    explanationPt: '「家族」 combina 家 (casa) e 族 (família/clã), lendo-se "Kazoku" (Família).'
  },
  {
    id: 'q_n4_k2',
    jlpt: 'N4',
    category: 'Kanji',
    question: 'O kanji 「写」 em 「写真 (shashin)」 significa:',
    questionRomaji: 'Kanji: 写 (sha / utsu.su)',
    questionPt: 'Identifique o conceito base do ideograma:',
    options: ['Comer', 'Copiar / Fotografar / Refletir', 'Viajar', 'Ensinar'],
    correctIndex: 1,
    explanationPt: '「写」 significa copiar/fotografar. Junto com 真 (verdade), forma 写真 (fotografia = cópia da verdade).'
  },
  {
    id: 'q_6',
    jlpt: 'N4',
    category: 'Gramática',
    question: '薬を ____ なければなりません。',
    questionRomaji: 'Kusuri o ___ nakereba narimasen.',
    questionPt: 'Complete com a forma correta do verbo 飲む (beber/tomar remédio) para indicar obrigação ("Tenho que tomar remédio"):',
    options: ['飲ま (noma)', '飲み (nomi)', '飲んで (nonde)', '飲む (nomu)'],
    correctIndex: 0,
    explanationPt: 'A fórmula de obrigação utiliza a raiz negativa sem o い (forma nai: 飲まない ➔ 飲ま + なければなりません).'
  },

  // ===================== N3 QUESTIONS =====================
  {
    id: 'q_n3_k1',
    jlpt: 'N3',
    category: 'Kanji',
    question: 'Qual é o significado da palavra em kanji 「経済」?',
    questionRomaji: 'Keizai (経済)',
    questionPt: 'Selecione o significado correto deste vocábulo N3:',
    options: ['Economia', 'Política', 'Casamento', 'Tecnologia'],
    correctIndex: 0,
    explanationPt: '「経済 (けいざい - keizai)」 significa Economia.'
  },
  {
    id: 'q_n3_k2',
    jlpt: 'N3',
    category: 'Kanji',
    question: 'O que significa a palavra 「確認」 no dia a dia japonês?',
    questionRomaji: 'Kakunin (確認)',
    questionPt: 'Identifique a ação:',
    options: ['Confirmação / Checagem', 'Cancelamento', 'Atraso de trem', 'Demissão'],
    correctIndex: 0,
    explanationPt: '「確認 (かくにん - kakunin)」 significa Confirmação, verificação ou checagem.'
  },
  {
    id: 'q_7',
    jlpt: 'N3',
    category: 'Gramática',
    question: '辛い料理が嫌いな ____ ではないが、あまり食べない。',
    questionRomaji: 'Karai ryouri ga kirai na ___ dewa nai ga, amari tabenai.',
    questionPt: 'Selecione o termo que expressa negação parcial ("Não é que eu não goste..."):',
    options: ['わけ (wake)', 'はず (hazu)', 'つもり (tsumori)', 'ところ (tokoro)'],
    correctIndex: 0,
    explanationPt: '〜わけではない (wake dewa nai) expressa negação parcial: "Não significa que..." ou "Não é que...".'
  },

  // ===================== N2 QUESTIONS =====================
  {
    id: 'q_n2_1',
    jlpt: 'N2',
    category: 'Gramática',
    question: '彼は毎日勉強していたから、試験に合格するに ____。',
    questionRomaji: 'Kare wa mainichi benkyou shite ita kara, shiken ni goukaku suru ni ___.',
    questionPt: 'Complete com a expressão que indica forte convicção / certeza absoluta ("Sem dúvida passará no exame"):',
    options: ['違いない (chigainai)', '限らない (kagiranai)', 'ほかならない (hokanaranai)', 'すぎない (suginai)'],
    correctIndex: 0,
    explanationPt: '〜に違いない (ni chigainai) expressa forte certeza e convicção do falante baseada em fatos.'
  },
  {
    id: 'q_n2_2',
    jlpt: 'N2',
    category: 'Kanji',
    question: 'O kanji 「憲」 na palavra 「憲法 (kenpou)」 significa:',
    questionRomaji: 'Kenpou (憲法)',
    questionPt: 'Qual o significado deste kanji formal de nível N2?',
    options: ['Constituição / Lei Fundamental', 'Trânsito', 'Agricultura', 'Clima'],
    correctIndex: 0,
    explanationPt: '「憲」 refere-se à Constituição e leis fundamentais do Estado (憲法 - kenpou).'
  },
  {
    id: 'q_n2_3',
    jlpt: 'N2',
    category: 'Gramática',
    question: 'アンケート調査の結果に ____ 新製品を開発した。',
    questionRomaji: 'Ankeeto chousa no kekka ni ___ shinseihin o kaihatsu shita.',
    questionPt: 'Complete indicando fundamentação ("Com base nos resultados da pesquisa"):',
    options: ['基づいて (motozuite)', 'したがって (shitagatte)', 'つれて (tsurete)', 'こたえて (kotaete)'],
    correctIndex: 0,
    explanationPt: '〜に基づいて (ni motozuite) expressa que algo foi construído ou decidido tendo dados e fatos como base.'
  },
  {
    id: 'q_n2_4',
    jlpt: 'N2',
    category: 'Kanji',
    question: 'Como se lê e o que significa o kanji 「貿易」?',
    questionRomaji: 'Kanji: 貿易',
    questionPt: 'Identifique a leitura e o significado:',
    options: [
      'ぼうえき (boueki) - Comércio exterior',
      'とうきょう (toukyou) - Capital',
      'りょこう (ryokou) - Viagem turística',
      'きぎょう (kigyou) - Empresa privada'
    ],
    correctIndex: 0,
    explanationPt: '「貿易 (ぼうえき - boueki)」 é a palavra para Comércio Exterior / Importação e Exportação.'
  },
  {
    id: 'q_n2_5',
    jlpt: 'N2',
    category: 'Gramática',
    question: '明日は大事なプレゼンがあるから、休む ____ にはいかない。',
    questionRomaji: 'Ashita wa daiji na purezen ga aru kara, yasumu ___ ni wa ikanai.',
    questionPt: 'Complete indicando restrição moral/profissional ("Não posso me dar ao luxo de faltar"):',
    options: ['わけ (wake)', 'こと (koto)', 'もの (mono)', 'はず (hazu)'],
    correctIndex: 0,
    explanationPt: '〜わけにはいかない (wake ni wa ikanai) indica impossibilidade por razões éticas, profissionais ou sociais.'
  },

  // ===================== N1 QUESTIONS =====================
  {
    id: 'q_n1_1',
    jlpt: 'N1',
    category: 'Gramática',
    question: 'プロの教育者としてある ____ 行為だ。',
    questionRomaji: 'Puro no kyouikusha to shite aru ___ koui da.',
    questionPt: 'Complete com o padrão literário que expressa indignação por postura inaceitável ("Inadmissível para quem ocupa tal cargo"):',
    options: ['まじき (majiki)', 'べき (beki)', 'ざる (zaru)', 'ごとき (gotoki)'],
    correctIndex: 0,
    explanationPt: '〜まじき (majiki) é uma estrutura formal N1 que condena uma conduta como inaceitável para a posição de alguém.'
  },
  {
    id: 'q_n1_2',
    jlpt: 'N1',
    category: 'Kanji',
    question: 'Qual é o kanji de 29 traços que significa "Melancolia / Depressão clínica" na palavra 「憂鬱 (yuuutsu)」?',
    questionRomaji: 'Yuuutsu / Utsubyou',
    questionPt: 'Identifique o ideograma célebre do JLPT N1:',
    options: ['鬱 (utsu)', '鑑 (kan)', '覇 (ha)', '匿 (toku)'],
    correctIndex: 0,
    explanationPt: '「鬱 (ウツ - utsu)」 é o kanji de 29 traços que representa melancolia e depressão (憂鬱 / 鬱病).'
  },
  {
    id: 'q_n1_3',
    jlpt: 'N1',
    category: 'Gramática',
    question: '理由が何 ____、他人に危害を加えることは許されない。',
    questionRomaji: 'Riyuu ga nani ___, tanin ni kigai o kuwaeru koto wa yurusarenai.',
    questionPt: 'Complete expressando universalidade categórica ("Não importa qual seja a razão..."):',
    options: ['であれ (de are)', 'にして (ni shite)', 'とあって (to atte)', 'をおいて (o oite)'],
    correctIndex: 0,
    explanationPt: '〜であれ (de are) significa "seja o que for / não importa a condição", enfatizando uma verdade inegociável.'
  },
  {
    id: 'q_n1_4',
    jlpt: 'N1',
    category: 'Kanji',
    question: 'O kanji 「鑑」 na palavra 「鑑賞 (kanshou)」 e 「鑑定 (kantei)」 significa:',
    questionRomaji: 'Kanshou / Kantei',
    questionPt: 'Identifique o conceito N1:',
    options: ['Apreciação artística / Perícia avaliativa', 'Venda ilegal', 'Prisão em flagrante', 'Construção civil'],
    correctIndex: 0,
    explanationPt: '「鑑」 tem o sentido de avaliar com perícia, apreciar arte e servir de espelho exemplar (鑑賞 / 鑑定).'
  },
  {
    id: 'q_n1_5',
    jlpt: 'N1',
    category: 'Gramática',
    question: '台風の接近により、野外フェスは中止を ____ された。',
    questionRomaji: 'Taifuu no sekkin ni yori, yagai fesu wa chuushi o ___ sareta.',
    questionPt: 'Complete indicando ação forçada por circunstâncias externas inevitáveis:',
    options: ['余儀なく (yogi naku)', '禁じ得なく (kinji enaku)', '堪えなく (taenaku)', '至らなく (itaranaku)'],
    correctIndex: 0,
    explanationPt: '〜を余儀なくされる (o yogi naku sareru) significa ser inevitavelmente forçado por forças maiores a cancelar ou alterar algo.'
  }
];
