import { VocabItem } from '../types';

export const VOCAB_N3: VocabItem[] = [
  // ================= VERBOS GODAN & ICHIDAN N3 =================
  {
    id: 'v_n3_1',
    word: '断る',
    reading: 'ことわる',
    romaji: 'kotowaru',
    meaningPt: 'Recusar / Rejeitar / Pedir dispensa prévia',
    category: 'verbo_godan',
    jlpt: 'N3',
    categoryLabelPt: 'Verbo Godan (Grupo 1)',
    exampleSentence: {
      jp: '誘いを丁寧に断りました。',
      reading: 'さそい を ていねい に ことわりました。',
      romaji: 'Sasoi o teinei ni kotowarimashita.',
      meaningPt: 'Recusei educadamente o convite.'
    }
  },
  {
    id: 'v_n3_2',
    word: '頼る',
    reading: 'たよる',
    romaji: 'tayoru',
    meaningPt: 'Depender de / Confiar em / Apoiar-se em',
    category: 'verbo_godan',
    jlpt: 'N3',
    categoryLabelPt: 'Verbo Godan (Grupo 1)',
    exampleSentence: {
      jp: '困ったときは、遠慮なく友達を頼ってください。',
      reading: 'こまった とき は、えんりょ なく ともだち を たよって ください。',
      romaji: 'Komatta toki wa, enryo naku tomodachi o tayotte kudasai.',
      meaningPt: 'Quando estiver em apuros, conte com os amigos sem hesitar.'
    }
  },
  {
    id: 'v_n3_3',
    word: '確かめる',
    reading: 'たしかめる',
    romaji: 'tashikameru',
    meaningPt: 'Verificar / Checar / Assegurar-se',
    category: 'verbo_ichidan',
    jlpt: 'N3',
    categoryLabelPt: 'Verbo Ichidan (Grupo 2)',
    exampleSentence: {
      jp: '書類に間違いがないか確かめました。',
      reading: 'しょるい に まちがい が ない か たしかめました。',
      romaji: 'Shorui ni machigai ga nai ka tashikamemashita.',
      meaningPt: 'Verifiquei se não havia erros nos documentos.'
    }
  },
  {
    id: 'v_n3_4',
    word: '認める',
    reading: 'みとめる',
    romaji: 'mitomeru',
    meaningPt: 'Reconhecer / Admitir / Aprovar',
    category: 'verbo_ichidan',
    jlpt: 'N3',
    categoryLabelPt: 'Verbo Ichidan (Grupo 2)',
    exampleSentence: {
      jp: '自分のミスを素直に認めました。',
      reading: 'じぶん の ミス を すなお に みとめました。',
      romaji: 'Jibun no misu o sunao ni mitomemashita.',
      meaningPt: 'Admiti meu próprio erro com sinceridade.'
    }
  },
  {
    id: 'v_n3_5',
    word: '申し込む',
    reading: 'もうしこむ',
    romaji: 'moushikomu',
    meaningPt: 'Inscrever-se / Solicitar formalmente',
    category: 'verbo_godan',
    jlpt: 'N3',
    categoryLabelPt: 'Verbo Godan (Grupo 1)',
    exampleSentence: {
      jp: '日本語能力試験に申し込みました。',
      reading: 'にほんご のうりょく しけん に もうしこみました。',
      romaji: 'Nihongo nouryoku shiken ni moushikomimashita.',
      meaningPt: 'Inscrevi-me para o Exame de Proficiência em Língua Japonesa (JLPT).'
    }
  },

  // ================= VERBOS IRREGULARES (SURU) =================
  {
    id: 'v_n3_6',
    word: '確認する',
    reading: 'かくにんする',
    romaji: 'kakunin suru',
    meaningPt: 'Confirmar / Fazer checagem',
    category: 'verbo_irregular',
    jlpt: 'N3',
    categoryLabelPt: 'Verbo Irregular (Grupo 3)',
    exampleSentence: {
      jp: 'メールの内容をもう一度確認してください。',
      reading: 'メール の ないよう を もういちど かくにん して ください。',
      romaji: 'Meeru no naiyou o mou ichido kakunin shite kudasai.',
      meaningPt: 'Por favor, confirme mais uma vez o conteúdo do e-mail.'
    }
  },
  {
    id: 'v_n3_7',
    word: '解決する',
    reading: 'かいけつする',
    romaji: 'kaiketsu suru',
    meaningPt: 'Resolver / Solucionar um problema',
    category: 'verbo_irregular',
    jlpt: 'N3',
    categoryLabelPt: 'Verbo Irregular (Grupo 3)',
    exampleSentence: {
      jp: 'みんなで話し合って、問題を解決しました。',
      reading: 'みんな で はなしあって、もんだい を かいけつ しました。',
      romaji: 'Minna de hanashiatte, mondai o kaiketsu shimashita.',
      meaningPt: 'Conversamos todos juntos e solucionamos o problema.'
    }
  },

  // ================= ADJETIVOS-I (い) & ADJETIVOS-NA (な) =================
  {
    id: 'v_n3_8',
    word: '惜しい',
    reading: 'おしい',
    romaji: 'oshii',
    meaningPt: 'Quase! / Uma pena / Lamentável perder por pouco',
    category: 'adjetivo_i',
    jlpt: 'N3',
    categoryLabelPt: 'Adjetivo-I (い)',
    exampleSentence: {
      jp: 'あと一歩のところで負けてしまい、とても惜しかったです。',
      reading: 'あと いっぽ の ところ で まけて しまい、とても おしかった です。',
      romaji: 'Ato ippo no tokoro de makete shimai, totemo oshikatta desu.',
      meaningPt: 'Perdemos por apenas um passo de diferença; foi por muito pouco!'
    }
  },
  {
    id: 'v_n3_9',
    word: '怪しい',
    reading: 'あやしい',
    romaji: 'ayashii',
    meaningPt: 'Suspeito / Duvidoso',
    category: 'adjetivo_i',
    jlpt: 'N3',
    categoryLabelPt: 'Adjetivo-I (い)',
    exampleSentence: {
      jp: '夜中に怪しい人を見かけました。',
      reading: 'よなか に あやしい ひと を みかけました。',
      romaji: 'Yonaka ni ayashii hito o mikakemashita.',
      meaningPt: 'Vi uma pessoa suspeita no meio da noite.'
    }
  },
  {
    id: 'v_n3_10',
    word: '適当',
    reading: 'てきとう',
    romaji: 'tekitou',
    meaningPt: 'Apropriado / Adequado (ou informalmente: feito de qualquer jeito)',
    category: 'adjetivo_na',
    jlpt: 'N3',
    categoryLabelPt: 'Adjetivo-Na (な)',
    exampleSentence: {
      jp: '料理に適当な量の塩を加えます。',
      reading: 'りょうり に てきとう な りょう の しお を くわえます。',
      romaji: 'Ryouri ni tekitou na ryou no shio o kuwaemasu.',
      meaningPt: 'Adicione uma quantidade adequada de sal à comida.'
    }
  },

  // ================= SUBSTANTIVOS SOCIAIS & PROFISSIONAIS =================
  {
    id: 'v_n3_11',
    word: '経済',
    reading: 'けいざい',
    romaji: 'keizai',
    meaningPt: 'Economia / Finanças',
    category: 'substantivo',
    jlpt: 'N3',
    categoryLabelPt: 'Substantivo',
    exampleSentence: {
      jp: '世界の経済情勢について議論しました。',
      reading: 'せかい の けいざい じょうせい に ついて ぎろん しました。',
      romaji: 'Sekai no keizai jousei ni tsuite giron shimashita.',
      meaningPt: 'Debatemos sobre o cenário econômico mundial.'
    }
  },
  {
    id: 'v_n3_12',
    word: '環境',
    reading: 'かんきょう',
    romaji: 'kankyou',
    meaningPt: 'Meio ambiente / Entorno',
    category: 'substantivo',
    jlpt: 'N3',
    categoryLabelPt: 'Substantivo',
    exampleSentence: {
      jp: '地球環境を守るための活動に参加しています。',
      reading: 'ちきゅう かんきょう を まもる ため の かつどう に さんか しています。',
      romaji: 'Chikyuu kankyou o mamoru tame no katsudou ni sanka shite imasu.',
      meaningPt: 'Participo de atividades voltadas à preservação do meio ambiente do planeta.'
    }
  },
  {
    id: 'v_n3_13',
    word: '技術',
    reading: 'ぎじゅつ',
    romaji: 'gijutsu',
    meaningPt: 'Tecnologia / Técnica / Engenharia',
    category: 'substantivo',
    jlpt: 'N3',
    categoryLabelPt: 'Substantivo',
    exampleSentence: {
      jp: '日本の先端技術は世界中で高く評価されています。',
      reading: 'にほん の せんたん ぎじゅつ は せかいじゅう で たかく ひょうか されています。',
      romaji: 'Nihon no sentan gijutsu wa sekaijuu de takaku hyouka sarete imasu.',
      meaningPt: 'A tecnologia de ponta japonesa é altamente valorizada no mundo inteiro.'
    }
  },
  {
    id: 'v_n3_14',
    word: '責任',
    reading: 'せきにん',
    romaji: 'sekinin',
    meaningPt: 'Responsabilidade / Dever',
    category: 'substantivo',
    jlpt: 'N3',
    categoryLabelPt: 'Substantivo',
    exampleSentence: {
      jp: 'リーダーとして結果に責任を持ちます。',
      reading: 'リーダー として けっか に せきにん を もちます。',
      romaji: 'Riidaa to shite kekka ni sekinin o mochimasu.',
      meaningPt: 'Como líder, assumo a responsabilidade pelos resultados.'
    }
  },

  // ================= ADVÉRBIOS & CONECTIVOS DE TEXTO =================
  {
    id: 'v_n3_15',
    word: '偶然',
    reading: 'ぐうぜん',
    romaji: 'guuzen',
    meaningPt: 'Por coincidência / Por acaso',
    category: 'adverbio',
    jlpt: 'N3',
    categoryLabelPt: 'Advérbio',
    exampleSentence: {
      jp: '駅で偶然、昔の同級生に会いました。',
      reading: 'えき で ぐうぜん、むかし の どうきゅうせい に あいました。',
      romaji: 'Eki de guuzen, mukashi no doukyuusei ni aimashita.',
      meaningPt: 'Por coincidência encontrei um antigo colega de classe na estação.'
    }
  },
  {
    id: 'v_n3_16',
    word: 'ぜひ',
    reading: 'ぜひ',
    romaji: 'zehi',
    meaningPt: 'Com certeza / Sem falta / Faça questão de...',
    category: 'adverbio',
    jlpt: 'N3',
    categoryLabelPt: 'Advérbio',
    exampleSentence: {
      jp: '日本に来たら、ぜひ我が家に遊びに来てください。',
      reading: 'にほん に きたら、ぜひ わがや に あそび に きて ください。',
      romaji: 'Nihon ni kitara, zehi wagaya ni asobi ni kite kudasai.',
      meaningPt: 'Quando vier ao Japão, faça absoluta questão de vir nos visitar em nossa casa.'
    }
  }
];
