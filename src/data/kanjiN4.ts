import { KanjiItem } from '../types';

export const KANJI_N4: KanjiItem[] = [
  // Família e Relações Pessoais
  {
    id: 'k_n4_1',
    kanji: '兄',
    onyomi: ['ケイ (kei)', 'キョウ (kyou)'],
    kunyomi: ['あに (ani)', 'おにい (onii)'],
    meaningPt: 'Irmão mais velho',
    strokes: 5,
    radical: '儿 (pernas)',
    jlpt: 'N4',
    examples: [
      { word: '兄', reading: 'あに (ani)', meaningPt: 'Meu irmão mais velho' },
      { word: 'お兄さん', reading: 'おにいさん (oniisan)', meaningPt: 'Irmão mais velho (respeitoso)' },
      { word: '兄弟', reading: 'きょうだい (kyoudai)', meaningPt: 'Irmãos / Irmandade' }
    ]
  },
  {
    id: 'k_n4_2',
    kanji: '弟',
    onyomi: ['テイ (tei)', 'ダイ (dai)'],
    kunyomi: ['おとうと (otouto)'],
    meaningPt: 'Irmão mais novo',
    strokes: 7,
    radical: '弓 (arco)',
    jlpt: 'N4',
    examples: [
      { word: '弟', reading: 'おとうと (otouto)', meaningPt: 'Meu irmão mais novo' },
      { word: '弟さん', reading: 'おとうとさん (otoutosan)', meaningPt: 'Irmão mais novo (respeitoso)' },
      { word: '弟子', reading: 'でし (deshi)', meaningPt: 'Discípulo / Aprendiz' }
    ]
  },
  {
    id: 'k_n4_3',
    kanji: '姉',
    onyomi: ['シ (shi)'],
    kunyomi: ['あね (ane)', 'おねえ (onee)'],
    meaningPt: 'Irmã mais velha',
    strokes: 8,
    radical: '女 (mulher)',
    jlpt: 'N4',
    examples: [
      { word: '姉', reading: 'あね (ane)', meaningPt: 'Minha irmã mais velha' },
      { word: 'お姉さん', reading: 'おねえさん (oneesan)', meaningPt: 'Irmã mais velha (respeitoso)' },
      { word: '姉妹', reading: 'しまい (shimai)', meaningPt: 'Irmãs' }
    ]
  },
  {
    id: 'k_n4_4',
    kanji: '妹',
    onyomi: ['マイ (mai)'],
    kunyomi: ['いもうと (imouto)'],
    meaningPt: 'Irmã mais nova',
    strokes: 8,
    radical: '女 (mulher)',
    jlpt: 'N4',
    examples: [
      { word: '妹', reading: 'いもうと (imouto)', meaningPt: 'Minha irmã mais nova' },
      { word: '妹さん', reading: 'いもうとさん (imoutosan)', meaningPt: 'Irmã mais nova (respeitoso)' }
    ]
  },
  {
    id: 'k_n4_5',
    kanji: '親',
    onyomi: ['シン (shin)'],
    kunyomi: ['おや (oya)', 'した.しい (shita.shii)'],
    meaningPt: 'Pais, Parente, Íntimo, Gentil',
    strokes: 16,
    radical: '見 (ver)',
    jlpt: 'N4',
    examples: [
      { word: '両親', reading: 'りょうしん (ryoushin)', meaningPt: 'Pais / Ambos os pais' },
      { word: '親切', reading: 'しんせつ (shinsetsu)', meaningPt: 'Gentil / Atencioso' },
      { word: '親友', reading: 'しんゆう (shinyuu)', meaningPt: 'Melhor amigo' }
    ]
  },
  {
    id: 'k_n4_6',
    kanji: '族',
    onyomi: ['ゾク (zoku)'],
    kunyomi: [],
    meaningPt: 'Família, Tribo, Clã',
    strokes: 11,
    radical: '方 (direção)',
    jlpt: 'N4',
    examples: [
      { word: '家族', reading: 'かぞく (kazoku)', meaningPt: 'Família' },
      { word: '民族', reading: 'みんぞく (minzoku)', meaningPt: 'Etnia / Povo' },
      { word: '水族館', reading: 'すいぞくかん (suizokukan)', meaningPt: 'Aquário público' }
    ]
  },
  {
    id: 'k_n4_7',
    kanji: '夫',
    onyomi: ['フ (fu)', 'フウ (fuu)'],
    kunyomi: ['おっと (otto)'],
    meaningPt: 'Marido, Esposo',
    strokes: 4,
    radical: '大 (grande)',
    jlpt: 'N4',
    examples: [
      { word: '夫', reading: 'おっと (otto)', meaningPt: 'Meu marido' },
      { word: '夫婦', reading: 'ふうふ (fuufu)', meaningPt: 'Casal / Marido e mulher' },
      { word: '丈夫', reading: 'じょうぶ (joubu)', meaningPt: 'Forte / Durável' }
    ]
  },
  {
    id: 'k_n4_8',
    kanji: '妻',
    onyomi: ['サイ (sai)'],
    kunyomi: ['つま (tsuma)'],
    meaningPt: 'Esposa',
    strokes: 8,
    radical: '女 (mulher)',
    jlpt: 'N4',
    examples: [
      { word: '妻', reading: 'つま (tsuma)', meaningPt: 'Minha esposa' },
      { word: '奥さん', reading: 'おくさん (okusan)', meaningPt: 'Esposa (respeitoso)' },
      { word: '夫妻', reading: 'ふさい (fusai)', meaningPt: 'Senhor e senhora / Casal' }
    ]
  },
  {
    id: 'k_n4_9',
    kanji: '主',
    onyomi: ['シュ (shu)', 'ス (su)'],
    kunyomi: ['おも (omo)', 'ぬし (nushi)'],
    meaningPt: 'Principal, Senhor, Mestre',
    strokes: 5,
    radical: '丶 (ponto)',
    jlpt: 'N4',
    examples: [
      { word: '主に', reading: 'おもに (omoni)', meaningPt: 'Principalmente' },
      { word: 'ご主人', reading: 'ごしゅじん (goshujin)', meaningPt: 'Seu marido / Patrão' },
      { word: '持ち主', reading: 'もちぬし (mochinushi)', meaningPt: 'Proprietário' }
    ]
  },

  // Escola, Estudos e Comunicação
  {
    id: 'k_n4_10',
    kanji: '漢',
    onyomi: ['カン (kan)'],
    kunyomi: [],
    meaningPt: 'China, Dinastia Han',
    strokes: 13,
    radical: '氵 (água)',
    jlpt: 'N4',
    examples: [
      { word: '漢字', reading: 'かんじ (kanji)', meaningPt: 'Ideograma chinês / Kanji' },
      { word: '漢方薬', reading: 'かんぽうやく (kanpouyaku)', meaningPt: 'Remédio fitoterápico chinês' }
    ]
  },
  {
    id: 'k_n4_11',
    kanji: '字',
    onyomi: ['ジ (ji)'],
    kunyomi: ['あざ (aza)'],
    meaningPt: 'Caractere, Letra, Escrita',
    strokes: 6,
    radical: '子 (criança)',
    jlpt: 'N4',
    examples: [
      { word: '漢字', reading: 'かんじ (kanji)', meaningPt: 'Kanji' },
      { word: '文字', reading: 'もじ (moji)', meaningPt: 'Letra / Caractere' },
      { word: '数字', reading: 'すうじ (suuji)', meaningPt: 'Número / Algarismo' }
    ]
  },
  {
    id: 'k_n4_12',
    kanji: '勉',
    onyomi: ['ベン (ben)'],
    kunyomi: ['つと.める (tsuto.meru)'],
    meaningPt: 'Esforço, Diligência',
    strokes: 10,
    radical: '力 (força)',
    jlpt: 'N4',
    examples: [
      { word: '勉強', reading: 'べんきょう (benkyou)', meaningPt: 'Estudo / Estudar' },
      { word: '勤勉', reading: 'きんべん (kinben)', meaningPt: 'Diligente / Esforçado' }
    ]
  },
  {
    id: 'k_n4_13',
    kanji: '強',
    onyomi: ['キョウ (kyou)', 'ゴウ (gou)'],
    kunyomi: ['つよ.い (tsuyo.i)', 'つよ.まる (tsuyo.maru)', 'し.いる (shi.iru)'],
    meaningPt: 'Forte, Fortalecer, Forçar',
    strokes: 11,
    radical: '弓 (arco)',
    jlpt: 'N4',
    examples: [
      { word: '強い', reading: 'つよい (tsuyoi)', meaningPt: 'Forte' },
      { word: '勉強', reading: 'べんきょう (benkyou)', meaningPt: 'Estudo' },
      { word: '強調', reading: 'きょうちょう (kyouchou)', meaningPt: 'Ênfase / Destaque' }
    ]
  },
  {
    id: 'k_n4_14',
    kanji: '教',
    onyomi: ['キョウ (kyou)'],
    kunyomi: ['おし.える (oshi.eru)', 'おそわ.る (osowa.ru)'],
    meaningPt: 'Ensinar, Religião, Doutrina',
    strokes: 11,
    radical: '攵 (ação)',
    jlpt: 'N4',
    examples: [
      { word: '教える', reading: 'おしえる (oshieru)', meaningPt: 'Ensinar / Informar' },
      { word: '教室', reading: 'きょうしつ (kyoushitsu)', meaningPt: 'Sala de aula' },
      { word: '教科書', reading: 'きょうかしょ (kyoukasho)', meaningPt: 'Livro didático' }
    ]
  },
  {
    id: 'k_n4_15',
    kanji: '習',
    onyomi: ['シュウ (shuu)'],
    kunyomi: ['なら.う (nara.u)'],
    meaningPt: 'Aprender, Costume, Prática',
    strokes: 11,
    radical: '羽 (penas)',
    jlpt: 'N4',
    examples: [
      { word: '習う', reading: 'ならう (narau)', meaningPt: 'Aprender (com instrutor)' },
      { word: '練習', reading: 'れんしゅう (renshuu)', meaningPt: 'Treino / Prática' },
      { word: '予習', reading: 'よしゅう (yoshuu)', meaningPt: 'Preparação prévia da aula' },
      { word: '復習', reading: 'ふくしゅう (fukushuu)', meaningPt: 'Revisão da matéria' }
    ]
  },
  {
    id: 'k_n4_16',
    kanji: '研',
    onyomi: ['ケン (ken)'],
    kunyomi: ['と.ぐ (to.gu)'],
    meaningPt: 'Polir, Investigar, Pesquisar',
    strokes: 9,
    radical: '石 (pedra)',
    jlpt: 'N4',
    examples: [
      { word: '研究', reading: 'けんきゅう (kenkyuu)', meaningPt: 'Pesquisa acadêmica' },
      { word: '研修', reading: 'けんしゅう (kenshuu)', meaningPt: 'Treinamento profissional' }
    ]
  },
  {
    id: 'k_n4_17',
    kanji: '究',
    onyomi: ['キュウ (kyuu)'],
    kunyomi: ['きわ.める (kiwa.meru)'],
    meaningPt: 'Aprofundar, Investigar a fundo',
    strokes: 7,
    radical: '穴 (buraco)',
    jlpt: 'N4',
    examples: [
      { word: '研究', reading: 'けんきゅう (kenkyuu)', meaningPt: 'Pesquisa' },
      { word: '研究室', reading: 'けんきゅうしつ (kenkyuushitsu)', meaningPt: 'Laboratório / Gabinete' }
    ]
  },
  {
    id: 'k_n4_18',
    kanji: '問',
    onyomi: ['モン (mon)'],
    kunyomi: ['と.う (to.u)', 'と.い (to.i)'],
    meaningPt: 'Pergunta, Problema, Questionar',
    strokes: 11,
    radical: '門 (portão)',
    jlpt: 'N4',
    examples: [
      { word: '質問', reading: 'しつもん (shitsumon)', meaningPt: 'Pergunta / Dúvida' },
      { word: '問題', reading: 'もんだい (mondai)', meaningPt: 'Problema / Questão de prova' },
      { word: '問い合わせ', reading: 'といあわせ (toiawase)', meaningPt: 'Consulta / Informações' }
    ]
  },
  {
    id: 'k_n4_19',
    kanji: '題',
    onyomi: ['ダイ (dai)'],
    kunyomi: [],
    meaningPt: 'Tópico, Título, Assunto',
    strokes: 18,
    radical: '頁 (página)',
    jlpt: 'N4',
    examples: [
      { word: '問題', reading: 'もんだい (mondai)', meaningPt: 'Problema / Exercício' },
      { word: '宿題', reading: 'しゅくだい (shukudai)', meaningPt: 'Lição de casa' },
      { word: '話題', reading: 'わだい (wadai)', meaningPt: 'Tópico de conversa' }
    ]
  },
  {
    id: 'k_n4_20',
    kanji: '答',
    onyomi: ['トウ (tou)'],
    kunyomi: ['こた.える (kota.eru)', 'こた.え (kota.e)'],
    meaningPt: 'Resposta, Responder',
    strokes: 12,
    radical: '竹 (bambu)',
    jlpt: 'N4',
    examples: [
      { word: '答える', reading: 'こたえる (kotaeru)', meaningPt: 'Responder' },
      { word: '答え', reading: 'こたえ (kotae)', meaningPt: 'Resposta' },
      { word: '回答', reading: 'かいとう (kaitou)', meaningPt: 'Resposta oficial' }
    ]
  },
  {
    id: 'k_n4_21',
    kanji: '試',
    onyomi: ['シ (shi)'],
    kunyomi: ['こころ.みる (kokoro.miru)', 'ため.す (tame.su)'],
    meaningPt: 'Testar, Tentar, Prova',
    strokes: 13,
    radical: '言 (palavra)',
    jlpt: 'N4',
    examples: [
      { word: '試験', reading: 'しけん (shiken)', meaningPt: 'Exame / Prova' },
      { word: '試す', reading: 'ためす (tamesu)', meaningPt: 'Experimentar / Testar' },
      { word: '試着', reading: 'しちゃく (shichaku)', meaningPt: 'Provar roupa' }
    ]
  },
  {
    id: 'k_n4_22',
    kanji: '験',
    onyomi: ['ケン (ken)', 'ゲン (gen)'],
    kunyomi: [],
    meaningPt: 'Verificar, Experiência, Teste',
    strokes: 18,
    radical: '馬 (cavalo)',
    jlpt: 'N4',
    examples: [
      { word: '試験', reading: 'しけん (shiken)', meaningPt: 'Exame' },
      { word: '経験', reading: 'けいけん (keiken)', meaningPt: 'Experiência de vida' },
      { word: '実験', reading: 'じっけん (jikken)', meaningPt: 'Experimento científico' }
    ]
  },
  {
    id: 'k_n4_23',
    kanji: '考',
    onyomi: ['コウ (kou)'],
    kunyomi: ['かんが.える (kanga.eru)'],
    meaningPt: 'Pensar, Considerar',
    strokes: 6,
    radical: '老 (velho)',
    jlpt: 'N4',
    examples: [
      { word: '考える', reading: 'かんがえる (kangaeru)', meaningPt: 'Pensar / Refletir' },
      { word: '考え', reading: 'かんがえ (kangae)', meaningPt: 'Ideia / Pensamento' },
      { word: '参考', reading: 'さんこう (sankou)', meaningPt: 'Referência / Consulta' }
    ]
  },
  {
    id: 'k_n4_24',
    kanji: '知',
    onyomi: ['チ (chi)'],
    kunyomi: ['し.る (shi.ru)'],
    meaningPt: 'Saber, Conhecer, Sabedoria',
    strokes: 8,
    radical: '矢 (flecha)',
    jlpt: 'N4',
    examples: [
      { word: '知る', reading: 'しる (shiru)', meaningPt: 'Saber / Conhecer' },
      { word: '知らせる', reading: 'しらせる (shiraseru)', meaningPt: 'Informar / Notificar' },
      { word: '知識', reading: 'ちしき (chishiki)', meaningPt: 'Conhecimento' }
    ]
  },

  // Verbos de Movimento e Cotidiano
  {
    id: 'k_n4_25',
    kanji: '始',
    onyomi: ['シ (shi)'],
    kunyomi: ['はじ.める (haji.meru)', 'はじ.まる (haji.maru)'],
    meaningPt: 'Começar, Início',
    strokes: 8,
    radical: '女 (mulher)',
    jlpt: 'N4',
    examples: [
      { word: '始める', reading: 'はじめる (hajimeru)', meaningPt: 'Começar (transitivo)' },
      { word: '始まる', reading: 'はじまる (hajimaru)', meaningPt: 'Começar (intransitivo)' },
      { word: '年始', reading: 'ねんし (nenshi)', meaningPt: 'Início de ano' }
    ]
  },
  {
    id: 'k_n4_26',
    kanji: '終',
    onyomi: ['シュウ (shuu)'],
    kunyomi: ['お.わる (o.waru)', 'お.える (o.eru)'],
    meaningPt: 'Terminar, Fim',
    strokes: 11,
    radical: '糸 (fio)',
    jlpt: 'N4',
    examples: [
      { word: '終わる', reading: 'おわる (owaru)', meaningPt: 'Terminar / Acabar' },
      { word: '終電', reading: 'しゅうでん (shuuden)', meaningPt: 'Último trem da noite' },
      { word: '終点', reading: 'しゅうてん (shuuten)', meaningPt: 'Ponto final / Terminal' }
    ]
  },
  {
    id: 'k_n4_27',
    kanji: '開',
    onyomi: ['カイ (kai)'],
    kunyomi: ['あ.ける (a.keru)', 'あ.く (a.ku)', 'ひら.く (hira.ku)'],
    meaningPt: 'Abrir, Inaugurar',
    strokes: 12,
    radical: '門 (portão)',
    jlpt: 'N4',
    examples: [
      { word: '開ける', reading: 'あける (akeru)', meaningPt: 'Abrir (a porta/janela)' },
      { word: '開く', reading: 'あく / ひらく', meaningPt: 'Abrir-se' },
      { word: '開店', reading: 'かいてん (kaiten)', meaningPt: 'Abertura da loja' }
    ]
  },
  {
    id: 'k_n4_28',
    kanji: '閉',
    onyomi: ['ヘイ (hei)'],
    kunyomi: ['し.める (shi.meru)', 'し.まる (shi.maru)', 'と.じる (to.jiru)'],
    meaningPt: 'Fechar, Encerrar',
    strokes: 11,
    radical: '門 (portão)',
    jlpt: 'N4',
    examples: [
      { word: '閉める', reading: 'しめる (shimeru)', meaningPt: 'Fechar' },
      { word: '閉まる', reading: 'しまる (shimaru)', meaningPt: 'Fechar-se' },
      { word: '閉店', reading: 'へいてん (heiten)', meaningPt: 'Fechamento da loja' }
    ]
  },
  {
    id: 'k_n4_29',
    kanji: '送',
    onyomi: ['ソウ (sou)'],
    kunyomi: ['おく.る (oku.ru)'],
    meaningPt: 'Enviar, Acompanhar, Despedir',
    strokes: 9,
    radical: '辶 (movimento)',
    jlpt: 'N4',
    examples: [
      { word: '送る', reading: 'おくる (okuru)', meaningPt: 'Enviar / Acompanhar alguém' },
      { word: '見送る', reading: 'みおくる (miokuru)', meaningPt: 'Despedir-se na estação' },
      { word: '送料', reading: 'そうりょう (souryou)', meaningPt: 'Frete de envio' }
    ]
  },
  {
    id: 'k_n4_30',
    kanji: '思',
    onyomi: ['シ (shi)'],
    kunyomi: ['おも.う (omo.u)'],
    meaningPt: 'Pensar, Achar, Sentir',
    strokes: 9,
    radical: '心 (coração)',
    jlpt: 'N4',
    examples: [
      { word: '思う', reading: 'おもう (omou)', meaningPt: 'Pensar / Achar que' },
      { word: '思い出', reading: 'おもいで (omoide)', meaningPt: 'Lembrança' },
      { word: '思い出す', reading: 'おもいだす (omoidasu)', meaningPt: 'Recordar-se' }
    ]
  },
  {
    id: 'k_n4_31',
    kanji: '意',
    onyomi: ['イ (i)'],
    kunyomi: [],
    meaningPt: 'Intenção, Vontade, Mente, Significado',
    strokes: 13,
    radical: '心 (coração)',
    jlpt: 'N4',
    examples: [
      { word: '意味', reading: 'いみ (imi)', meaningPt: 'Significado / Sentido' },
      { word: '注意', reading: 'ちゅうい (chuui)', meaningPt: 'Cuidado / Atenção' },
      { word: '意見', reading: 'いけん (iken)', meaningPt: 'Opinião' }
    ]
  },
  {
    id: 'k_n4_32',
    kanji: '味',
    onyomi: ['ミ (mi)'],
    kunyomi: ['あじ (aji)', 'あじ.わう (aji.wau)'],
    meaningPt: 'Sabor, Gosto, Degustar',
    strokes: 8,
    radical: '口 (boca)',
    jlpt: 'N4',
    examples: [
      { word: '味', reading: 'あじ (aji)', meaningPt: 'Sabor' },
      { word: '意味', reading: 'いみ (imi)', meaningPt: 'Significado' },
      { word: '興味', reading: 'きょうみ (kyoumi)', meaningPt: 'Interesse / Curiosidade' }
    ]
  },
  {
    id: 'k_n4_33',
    kanji: '運',
    onyomi: ['ウン (un)'],
    kunyomi: ['はこ.ぶ (hako.bu)'],
    meaningPt: 'Sorte, Transportar, Destino',
    strokes: 12,
    radical: '辶 (movimento)',
    jlpt: 'N4',
    examples: [
      { word: '運動', reading: 'うんどう (undou)', meaningPt: 'Exercício físico' },
      { word: '運転', reading: 'うんてん (unten)', meaningPt: 'Dirigir automóvel' },
      { word: '運ぶ', reading: 'はこぶ (hakobu)', meaningPt: 'Transportar / Carregar' },
      { word: '運がいい', reading: 'うんがいい (unga ii)', meaningPt: 'Ter sorte' }
    ]
  },
  {
    id: 'k_n4_34',
    kanji: '転',
    onyomi: ['テン (ten)'],
    kunyomi: ['ころ.がる (koro.garu)', 'ころ.ぶ (koro.bu)'],
    meaningPt: 'Rolar, Mudar, Cair',
    strokes: 11,
    radical: '車 (carro)',
    jlpt: 'N4',
    examples: [
      { word: '自転車', reading: 'じてんしゃ (jitensha)', meaningPt: 'Bicicleta' },
      { word: '運転', reading: 'うんてん (unten)', meaningPt: 'Direção veicular' },
      { word: '転ぶ', reading: 'ころぶ (korobu)', meaningPt: 'Tropeçar e cair' }
    ]
  },
  {
    id: 'k_n4_35',
    kanji: '動',
    onyomi: ['ドウ (dou)'],
    kunyomi: ['うご.く (ugo.ku)', 'うご.かす (ugo.kasu)'],
    meaningPt: 'Mover, Ação, Movimento',
    strokes: 11,
    radical: '力 (força)',
    jlpt: 'N4',
    examples: [
      { word: '動く', reading: 'うごく (ugoku)', meaningPt: 'Mover-se / Funcionar' },
      { word: '動物', reading: 'どうぶつ (doubutsu)', meaningPt: 'Animal (criatura que se move)' },
      { word: '自動車', reading: 'じどうしゃ (jidousha)', meaningPt: 'Automóvel' },
      { word: '運動', reading: 'うんどう (undou)', meaningPt: 'Exercício físico' }
    ]
  },
  {
    id: 'k_n4_36',
    kanji: '止',
    onyomi: ['シ (shi)'],
    kunyomi: ['と.まる (to.maru)', 'と.める (to.meru)'],
    meaningPt: 'Parar, Interromper',
    strokes: 4,
    radical: '止 (parar)',
    jlpt: 'N4',
    examples: [
      { word: '止まる', reading: 'とまる (tomaru)', meaningPt: 'Parar (intransitivo)' },
      { word: '止める', reading: 'とめる (tomeru)', meaningPt: 'Parar / Estacionar' },
      { word: '中止', reading: 'ちゅうし (chuushi)', meaningPt: 'Cancelamento / Interrupção' }
    ]
  },
  {
    id: 'k_n4_37',
    kanji: '歩',
    onyomi: ['ホ (ho)', 'ポ (po)'],
    kunyomi: ['ある.く (aru.ku)', 'あゆ.む (ayu.mu)'],
    meaningPt: 'Andar, Caminhar, Passo',
    strokes: 8,
    radical: '止 (parar)',
    jlpt: 'N4',
    examples: [
      { word: '歩く', reading: 'あるく (aruku)', meaningPt: 'Caminhar / Andar a pé' },
      { word: '散歩', reading: 'さんぽ (sanpo)', meaningPt: 'Passeio / Caminhada' },
      { word: '歩道', reading: 'ほどう (hodou)', meaningPt: 'Calçada' }
    ]
  },
  {
    id: 'k_n4_38',
    kanji: '走',
    onyomi: ['ソウ (sou)'],
    kunyomi: ['はし.る (hashi.ru)'],
    meaningPt: 'Correr',
    strokes: 7,
    radical: '走 (correr)',
    jlpt: 'N4',
    examples: [
      { word: '走る', reading: 'はしる (hashiru)', meaningPt: 'Correr' },
      { word: 'ごちそうさま', reading: 'ご馳走様', meaningPt: 'Agradecimento após a refeição' }
    ]
  },
  {
    id: 'k_n4_39',
    kanji: '帰',
    onyomi: ['キ (ki)'],
    kunyomi: ['かえ.る (kae.ru)', 'かえ.す (kae.su)'],
    meaningPt: 'Voltar para casa, Retornar',
    strokes: 10,
    radical: '巾 (pano)',
    jlpt: 'N4',
    examples: [
      { word: '帰る', reading: 'かえる (kaeru)', meaningPt: 'Voltar para casa' },
      { word: '帰国', reading: 'きこく (kikoku)', meaningPt: 'Retorno ao país de origem' },
      { word: '日帰り', reading: 'ひがえり (higaeri)', meaningPt: 'Bate-e-volta (viagem de 1 dia)' }
    ]
  },
  {
    id: 'k_n4_40',
    kanji: '急',
    onyomi: ['キュウ (kyuu)'],
    kunyomi: ['いそ.ぐ (iso.gu)'],
    meaningPt: 'Apressar, Urgente, Repentino',
    strokes: 9,
    radical: '心 (coração)',
    jlpt: 'N4',
    examples: [
      { word: '急ぐ', reading: 'いそぐ (isogu)', meaningPt: 'Apressar-se' },
      { word: '急行', reading: 'きゅうこう (kyuukou)', meaningPt: 'Trem expresso' },
      { word: '救急車', reading: 'きゅうきゅうしゃ (kyuukyuusha)', meaningPt: 'Ambulância' },
      { word: '急に', reading: 'きゅうに (kyuuni)', meaningPt: 'De repente' }
    ]
  },
  {
    id: 'k_n4_41',
    kanji: '持',
    onyomi: ['ジ (ji)'],
    kunyomi: ['も.つ (mo.tsu)'],
    meaningPt: 'Segurar, Ter, Possuir',
    strokes: 9,
    radical: '扌 (mão)',
    jlpt: 'N4',
    examples: [
      { word: '持つ', reading: 'もつ (motsu)', meaningPt: 'Segurar / Ter' },
      { word: '持参', reading: 'じさん (jisan)', meaningPt: 'Trazer consigo' },
      { word: '気持ち', reading: 'きもち (kimochi)', meaningPt: 'Sentimento / Disposição' }
    ]
  },
  {
    id: 'k_n4_42',
    kanji: '借',
    onyomi: ['シャク (shaku)'],
    kunyomi: ['か.りる (ka.riru)'],
    meaningPt: 'Pegar emprestado, Alugar',
    strokes: 10,
    radical: '人 (pessoa)',
    jlpt: 'N4',
    examples: [
      { word: '借りる', reading: 'かりる (kariru)', meaningPt: 'Pegar emprestado / Alugar' },
      { word: '借金', reading: 'しゃっきん (shakkin)', meaningPt: 'Dívida financeira' }
    ]
  },
  {
    id: 'k_n4_43',
    kanji: '貸',
    onyomi: ['タイ (tai)'],
    kunyomi: ['か.す (ka.su)'],
    meaningPt: 'Emprestar, Alugar para outros',
    strokes: 12,
    radical: '貝 (concha/dinheiro)',
    jlpt: 'N4',
    examples: [
      { word: '貸す', reading: 'かす (kasu)', meaningPt: 'Emprestar / Locar' },
      { word: '賃貸', reading: 'ちんたい (chintai)', meaningPt: 'Locação imobiliária' }
    ]
  },
  {
    id: 'k_n4_44',
    kanji: '使',
    onyomi: ['シ (shi)'],
    kunyomi: ['つか.う (tsuka.u)'],
    meaningPt: 'Usar, Empregar, Mensageiro',
    strokes: 8,
    radical: '人 (pessoa)',
    jlpt: 'N4',
    examples: [
      { word: '使う', reading: 'つかう (tsukau)', meaningPt: 'Usar / Utilizar' },
      { word: '大使館', reading: 'たいしかん (taishikan)', meaningPt: 'Embaixada' },
      { word: '使い方', reading: 'つかいかた (tsukaikata)', meaningPt: 'Modo de usar' }
    ]
  },
  {
    id: 'k_n4_45',
    kanji: '作',
    onyomi: ['サク (saku)', 'サ (sa)'],
    kunyomi: ['つく.る (tsuku.ru)'],
    meaningPt: 'Fazer, Criar, Produzir, Obra',
    strokes: 7,
    radical: '人 (pessoa)',
    jlpt: 'N4',
    examples: [
      { word: '作る', reading: 'つくる (tsukuru)', meaningPt: 'Fazer / Cozinhar / Produzir' },
      { word: '作品', reading: 'さくひん (sakuhin)', meaningPt: 'Obra de arte / Trabalho' },
      { word: '作文', reading: 'さくぶん (sakubun)', meaningPt: 'Redação escolar' }
    ]
  },
  {
    id: 'k_n4_46',
    kanji: '売',
    onyomi: ['バイ (bai)'],
    kunyomi: ['う.る (u.ru)', 'う.れる (u.reru)'],
    meaningPt: 'Vender',
    strokes: 7,
    radical: '士 (samurai)',
    jlpt: 'N4',
    examples: [
      { word: '売る', reading: 'うる (uru)', meaningPt: 'Vender' },
      { word: '売店', reading: 'ばいてん (baiten)', meaningPt: 'Quiosque / Cantina' },
      { word: '自動販売機', reading: 'じどうはんばいき', meaningPt: 'Máquina de venda automática' }
    ]
  },
  {
    id: 'k_n4_47',
    kanji: '着',
    onyomi: ['チャク (chaku)', 'ジャク (jaku)'],
    kunyomi: ['き.る (ki.ru)', 'つ.く (tsu.ku)'],
    meaningPt: 'Vestir roupa, Chegar ao destino',
    strokes: 12,
    radical: '目 (olho)',
    jlpt: 'N4',
    examples: [
      { word: '着る', reading: 'きる (kiru)', meaningPt: 'Vestir (blusa/casaco)' },
      { word: '着く', reading: 'つく (tsuku)', meaningPt: 'Chegar ao destino' },
      { word: '着物', reading: 'きもの (kimono)', meaningPt: 'Kimono tradicional' },
      { word: '到着', reading: 'とうちゃく (touchaku)', meaningPt: 'Chegada' }
    ]
  },
  {
    id: 'k_n4_48',
    kanji: '切',
    onyomi: ['セツ (setsu)', 'サイ (sai)'],
    kunyomi: ['き.る (ki.ru)', 'き.れる (ki.reru)'],
    meaningPt: 'Cortar, Selo, Urgente',
    strokes: 4,
    radical: '刀 (espada)',
    jlpt: 'N4',
    examples: [
      { word: '切る', reading: 'きる (kiru)', meaningPt: 'Cortar / Desligar chamada' },
      { word: '切手', reading: 'きって (kitte)', meaningPt: 'Selo postal' },
      { word: '大切', reading: 'たいせつ (taisetsu)', meaningPt: 'Importante / Precioso' },
      { word: '親切', reading: 'しんせつ (shinsetsu)', meaningPt: 'Gentil' }
    ]
  },
  {
    id: 'k_n4_49',
    kanji: '引',
    onyomi: ['イン (in)'],
    kunyomi: ['ひ.く (hi.ku)', 'ひ.ける (hi.keru)'],
    meaningPt: 'Puxar, Subtrair, Consultar dicionário',
    strokes: 4,
    radical: '弓 (arco)',
    jlpt: 'N4',
    examples: [
      { word: '引く', reading: 'ひく (hiku)', meaningPt: 'Puxar / Consultar dicionário' },
      { word: '引き出し', reading: 'ひきだし (hikidashi)', meaningPt: 'Gaveta / Saque de dinheiro' },
      { word: '引っ越し', reading: 'ひっこし (hikkoshi)', meaningPt: 'Mudança de residência' }
    ]
  },
  {
    id: 'k_n4_50',
    kanji: '押',
    onyomi: ['オウ (ou)'],
    kunyomi: ['お.す (o.su)', 'お.さえる (o.saeru)'],
    meaningPt: 'Empurrar, Pressionar botão/carimbo',
    strokes: 8,
    radical: '扌 (mão)',
    jlpt: 'N4',
    examples: [
      { word: '押す', reading: 'おす (osu)', meaningPt: 'Empurrar / Pressionar botão' },
      { word: '押し入れ', reading: 'おしいれ (oshiire)', meaningPt: 'Armário embutido japonês' }
    ]
  },
  {
    id: 'k_n4_51',
    kanji: '洗',
    onyomi: ['セン (sen)'],
    kunyomi: ['あら.う (ara.u)'],
    meaningPt: 'Lavar, Purificar',
    strokes: 9,
    radical: '氵 (água)',
    jlpt: 'N4',
    examples: [
      { word: '洗う', reading: 'あらう (arau)', meaningPt: 'Lavar' },
      { word: '洗濯', reading: 'せんたく (sentaku)', meaningPt: 'Lavar roupa' },
      { word: 'お手洗い', reading: 'おてあらい (otearai)', meaningPt: 'Banheiro / Lavabo' }
    ]
  },
  {
    id: 'k_n4_52',
    kanji: '払',
    onyomi: ['ヒツ (hitsu)', 'フツ (futsu)'],
    kunyomi: ['はら.う (hara.u)'],
    meaningPt: 'Pagar, Limpar varrendo',
    strokes: 5,
    radical: '扌 (mão)',
    jlpt: 'N4',
    examples: [
      { word: '払う', reading: 'はらう (harau)', meaningPt: 'Pagar conta' },
      { word: '支払い', reading: 'しはらい (shiharai)', meaningPt: 'Pagamento' }
    ]
  },
  {
    id: 'k_n4_53',
    kanji: '降',
    onyomi: ['コウ (kou)'],
    kunyomi: ['お.りる (o.riru)', 'ふ.る (fu.ru)'],
    meaningPt: 'Descer de veículo, Cair chuva/neve',
    strokes: 10,
    radical: '阝 (colina)',
    jlpt: 'N4',
    examples: [
      { word: '降りる', reading: 'おりる (oriru)', meaningPt: 'Descer do trem/ônibus' },
      { word: '降る', reading: 'ふる (furu)', meaningPt: 'Cair chuva ou neve' },
      { word: '以降', reading: 'いこう (ikou)', meaningPt: 'Dali em diante' }
    ]
  },
  {
    id: 'k_n4_54',
    kanji: '登',
    onyomi: ['トウ (tou)', 'ト (to)'],
    kunyomi: ['のぼ.る (nobo.ru)'],
    meaningPt: 'Escalar, Subir montanha, Registrar',
    strokes: 12,
    radical: '癶 (passos)',
    jlpt: 'N4',
    examples: [
      { word: '登る', reading: 'のぼる (noboru)', meaningPt: 'Escalar montanha' },
      { word: '登山', reading: 'とざん (tozan)', meaningPt: 'Montanhismo' },
      { word: '登録', reading: 'とうろく (touroku)', meaningPt: 'Registro / Cadastro' }
    ]
  },
  {
    id: 'k_n4_55',
    kanji: '泳',
    onyomi: ['エイ (ei)'],
    kunyomi: ['およ.ぐ (oyo.gu)'],
    meaningPt: 'Nadar, Natação',
    strokes: 8,
    radical: '氵 (água)',
    jlpt: 'N4',
    examples: [
      { word: '泳ぐ', reading: 'およぐ (oyogu)', meaningPt: 'Nadar' },
      { word: '水泳', reading: 'すいえい (suiei)', meaningPt: 'Natação' }
    ]
  },
  {
    id: 'k_n4_56',
    kanji: '旅',
    onyomi: ['リョ (ryo)'],
    kunyomi: ['たび (tabi)'],
    meaningPt: 'Viagem, Viajar',
    strokes: 10,
    radical: '方 (direção)',
    jlpt: 'N4',
    examples: [
      { word: '旅行', reading: 'りょこう (ryokou)', meaningPt: 'Viagem / Viajar' },
      { word: '旅', reading: 'たび (tabi)', meaningPt: 'Jornada / Viagem poética' },
      { word: '旅館', reading: 'りょかん (ryokan)', meaningPt: 'Pousada tradicional japonesa' }
    ]
  },

  // Natureza, Estações do Ano e Tempo
  {
    id: 'k_n4_57',
    kanji: '春',
    onyomi: ['シュン (shun)'],
    kunyomi: ['はる (haru)'],
    meaningPt: 'Primavera',
    strokes: 9,
    radical: '日 (sol/dia)',
    jlpt: 'N4',
    examples: [
      { word: '春', reading: 'はる (haru)', meaningPt: 'Primavera' },
      { word: '春休み', reading: 'はるやすみ (haruyasumi)', meaningPt: 'Férias de primavera' },
      { word: '青春', reading: 'せいしゅん (seishun)', meaningPt: 'Juventude' }
    ]
  },
  {
    id: 'k_n4_58',
    kanji: '夏',
    onyomi: ['カ (ka)', 'ゲ (ge)'],
    kunyomi: ['なつ (natsu)'],
    meaningPt: 'Verão',
    strokes: 10,
    radical: '夂 (seguir)',
    jlpt: 'N4',
    examples: [
      { word: '夏', reading: 'なつ (natsu)', meaningPt: 'Verão' },
      { word: '夏休み', reading: 'なつやすみ (natsuyasumi)', meaningPt: 'Férias de verão' },
      { word: '初夏', reading: 'しょか (shoka)', meaningPt: 'Início do verão' }
    ]
  },
  {
    id: 'k_n4_59',
    kanji: '秋',
    onyomi: ['シュウ (shuu)'],
    kunyomi: ['あき (aki)'],
    meaningPt: 'Outono',
    strokes: 9,
    radical: '禾 (grão)',
    jlpt: 'N4',
    examples: [
      { word: '秋', reading: 'あき (aki)', meaningPt: 'Outono' },
      { word: '秋分の日', reading: 'しゅうぶんのひ', meaningPt: 'Equinócio de outono' }
    ]
  },
  {
    id: 'k_n4_60',
    kanji: '冬',
    onyomi: ['トウ (tou)'],
    kunyomi: ['ふゆ (fuyu)'],
    meaningPt: 'Inverno',
    strokes: 5,
    radical: '冫 (gelo)',
    jlpt: 'N4',
    examples: [
      { word: '冬', reading: 'ふゆ (fuyu)', meaningPt: 'Inverno' },
      { word: '冬休み', reading: 'ふゆやすみ (fuyuyasumi)', meaningPt: 'Férias de inverno' },
      { word: '春夏秋冬', reading: 'しゅんかしゅうとう', meaningPt: 'As quatro estações' }
    ]
  },
  {
    id: 'k_n4_61',
    kanji: '朝',
    onyomi: ['チョウ (chou)'],
    kunyomi: ['あさ (asa)'],
    meaningPt: 'Manhã, Dinastia',
    strokes: 12,
    radical: '月 (lua)',
    jlpt: 'N4',
    examples: [
      { word: '朝', reading: 'あさ (asa)', meaningPt: 'Manhã' },
      { word: '今朝', reading: 'けさ (kesa)', meaningPt: 'Hoje de manhã' },
      { word: '朝食', reading: 'ちょうしょく (choushoku)', meaningPt: 'Café da manhã' },
      { word: '毎朝', reading: 'まいあさ (maiasa)', meaningPt: 'Todas as manhãs' }
    ]
  },
  {
    id: 'k_n4_62',
    kanji: '昼',
    onyomi: ['チュウ (chuu)'],
    kunyomi: ['ひる (hiru)'],
    meaningPt: 'Meio-dia, Tarde diurna',
    strokes: 9,
    radical: '日 (sol/dia)',
    jlpt: 'N4',
    examples: [
      { word: '昼', reading: 'ひる (hiru)', meaningPt: 'Dia / Meio-dia' },
      { word: '昼ご飯', reading: 'ひるごはん (hirugohan)', meaningPt: 'Almoço' },
      { word: '昼休み', reading: 'ひるやすみ (hiruyasumi)', meaningPt: 'Intervalo de almoço' }
    ]
  },
  {
    id: 'k_n4_63',
    kanji: '夕',
    onyomi: ['セキ (seki)'],
    kunyomi: ['ゆう (yuu)'],
    meaningPt: 'Entardecer, Noite inicial',
    strokes: 3,
    radical: '夕 (tarde)',
    jlpt: 'N4',
    examples: [
      { word: '夕方', reading: 'ゆうがた (yuugata)', meaningPt: 'Fim de tarde / Entardecer' },
      { word: '夕食', reading: 'ゆうしょく (yuushoku)', meaningPt: 'Jantar' },
      { word: '夕日', reading: 'ゆうひ (yuuhi)', meaningPt: 'Sol poente' },
      { word: '七夕', reading: 'たなばた (tanabata)', meaningPt: 'Festival das Estrelas' }
    ]
  },
  {
    id: 'k_n4_64',
    kanji: '夜',
    onyomi: ['ヤ (ya)'],
    kunyomi: ['よ (yo)', 'よる (yoru)'],
    meaningPt: 'Noite',
    strokes: 8,
    radical: '夕 (tarde)',
    jlpt: 'N4',
    examples: [
      { word: '夜', reading: 'よる (yoru)', meaningPt: 'Noite' },
      { word: '今夜', reading: 'こんや (konya)', meaningPt: 'Esta noite' },
      { word: '夜中', reading: 'よなか (yonaka)', meaningPt: 'Madrugada / Meio da noite' }
    ]
  },
  {
    id: 'k_n4_65',
    kanji: '晴',
    onyomi: ['セイ (sei)'],
    kunyomi: ['は.れる (ha.reru)', 'は.らす (ha.rasu)'],
    meaningPt: 'Ensolarado, Céu limpo',
    strokes: 12,
    radical: '日 (sol/dia)',
    jlpt: 'N4',
    examples: [
      { word: '晴れ', reading: 'はれ (hare)', meaningPt: 'Ensolarado / Tempo bom' },
      { word: '晴れる', reading: 'はれる (hareru)', meaningPt: 'O céu clarear' }
    ]
  },
  {
    id: 'k_n4_66',
    kanji: '曇',
    onyomi: ['ドン (don)'],
    kunyomi: ['くも.る (kumo.ru)', 'くもり (kumori)'],
    meaningPt: 'Nublado',
    strokes: 16,
    radical: '日 (sol/dia)',
    jlpt: 'N4',
    examples: [
      { word: '曇り', reading: 'くもり (kumori)', meaningPt: 'Nublado' },
      { word: '曇る', reading: 'くもる (kumoru)', meaningPt: 'Ficar nublado' }
    ]
  },
  {
    id: 'k_n4_67',
    kanji: '風',
    onyomi: ['フウ (fuu)', 'フ (fu)'],
    kunyomi: ['かぜ (kaze)'],
    meaningPt: 'Vento, Estilo, Resfriado',
    strokes: 9,
    radical: '風 (vento)',
    jlpt: 'N4',
    examples: [
      { word: '風', reading: 'かぜ (kaze)', meaningPt: 'Vento' },
      { word: '風邪', reading: 'かぜ (kaze)', meaningPt: 'Resfriado' },
      { word: '台風', reading: 'たいふう (taifuu)', meaningPt: 'Tufão' },
      { word: '和風', reading: 'わふう (wafuu)', meaningPt: 'Estilo tradicional japonês' }
    ]
  },
  {
    id: 'k_n4_68',
    kanji: '雪',
    onyomi: ['セツ (setsu)'],
    kunyomi: ['ゆき (yuki)'],
    meaningPt: 'Neve',
    strokes: 11,
    radical: '雨 (chuva)',
    jlpt: 'N4',
    examples: [
      { word: '雪', reading: 'ゆき (yuki)', meaningPt: 'Neve' },
      { word: '大雪', reading: 'おおゆき (ooyuki)', meaningPt: 'Nevasca' },
      { word: '雪だるま', reading: 'ゆきだるま (yukidaruma)', meaningPt: 'Boneco de neve' }
    ]
  },
  {
    id: 'k_n4_69',
    kanji: '海',
    onyomi: ['カイ (kai)'],
    kunyomi: ['うみ (umi)'],
    meaningPt: 'Mar, Oceano',
    strokes: 9,
    radical: '氵 (água)',
    jlpt: 'N4',
    examples: [
      { word: '海', reading: 'うみ (umi)', meaningPt: 'Mar' },
      { word: '海外', reading: 'かいがい (kaigai)', meaningPt: 'Exterior / Além-mar' },
      { word: '海岸', reading: 'かいがん (kaigan)', meaningPt: 'Costa litorânea / Praia' }
    ]
  },
  {
    id: 'k_n4_70',
    kanji: '地',
    onyomi: ['チ (chi)', 'ジ (ji)'],
    kunyomi: [],
    meaningPt: 'Terra, Solo, Lugar',
    strokes: 6,
    radical: '土 (terra)',
    jlpt: 'N4',
    examples: [
      { word: '地図', reading: 'ちず (chizu)', meaningPt: 'Mapa' },
      { word: '地下鉄', reading: 'ちかてつ (chikatetsu)', meaningPt: 'Metrô' },
      { word: '地震', reading: 'じしん (jishin)', meaningPt: 'Terremoto' }
    ]
  },
  {
    id: 'k_n4_71',
    kanji: '界',
    onyomi: ['カイ (kai)'],
    kunyomi: [],
    meaningPt: 'Mundo, Fronteira, Limite',
    strokes: 9,
    radical: '田 (campo)',
    jlpt: 'N4',
    examples: [
      { word: '世界', reading: 'せかい (sekai)', meaningPt: 'Mundo' },
      { word: '限界', reading: 'げんかい (genkai)', meaningPt: 'Limite' }
    ]
  },

  // Corpo, Saúde e Vida
  {
    id: 'k_n4_72',
    kanji: '体',
    onyomi: ['タイ (tai)', 'テイ (tei)'],
    kunyomi: ['からだ (karada)'],
    meaningPt: 'Corpo, Físico, Saúde',
    strokes: 7,
    radical: '人 (pessoa)',
    jlpt: 'N4',
    examples: [
      { word: '体', reading: 'からだ (karada)', meaningPt: 'Corpo' },
      { word: '体重', reading: 'たいじゅう (taijuu)', meaningPt: 'Peso corporal' },
      { word: '体操', reading: 'たいそう (taisou)', meaningPt: 'Ginástica' }
    ]
  },
  {
    id: 'k_n4_73',
    kanji: '心',
    onyomi: ['シン (shin)'],
    kunyomi: ['こころ (kokoro)'],
    meaningPt: 'Coração, Mente, Alma',
    strokes: 4,
    radical: '心 (coração)',
    jlpt: 'N4',
    examples: [
      { word: '心', reading: 'こころ (kokoro)', meaningPt: 'Coração / Sentimento' },
      { word: '安心', reading: 'あんしん (anshin)', meaningPt: 'Alívio / Tranquilidade' },
      { word: '心配', reading: 'しんぱい (shinpai)', meaningPt: 'Preocupação' },
      { word: '中心', reading: 'ちゅうしん (chuushin)', meaningPt: 'Centro' }
    ]
  },
  {
    id: 'k_n4_74',
    kanji: '顔',
    onyomi: ['ガン (gan)'],
    kunyomi: ['かお (kao)'],
    meaningPt: 'Rosto, Face, Expressão',
    strokes: 18,
    radical: '頁 (página)',
    jlpt: 'N4',
    examples: [
      { word: '顔', reading: 'かお (kao)', meaningPt: 'Rosto' },
      { word: '笑顔', reading: 'えがお (egao)', meaningPt: 'Sorriso / Rosto sorridente' },
      { word: '洗顔', reading: 'せんがん (sengan)', meaningPt: 'Lavar o rosto' }
    ]
  },
  {
    id: 'k_n4_75',
    kanji: '頭',
    onyomi: ['トウ (tou)', 'ズ (zu)'],
    kunyomi: ['あたま (atama)', 'かしら (kashira)'],
    meaningPt: 'Cabeça, Líder',
    strokes: 16,
    radical: '頁 (página)',
    jlpt: 'N4',
    examples: [
      { word: '頭', reading: 'あたま (atama)', meaningPt: 'Cabeça' },
      { word: '頭痛', reading: 'ずつう (zutsuu)', meaningPt: 'Dor de cabeça' },
      { word: '頭がいい', reading: 'あたまがいい', meaningPt: 'Inteligente' }
    ]
  },
  {
    id: 'k_n4_76',
    kanji: '声',
    onyomi: ['セイ (sei)', 'ショウ (shou)'],
    kunyomi: ['こえ (koe)'],
    meaningPt: 'Voz',
    strokes: 7,
    radical: '士 (samurai)',
    jlpt: 'N4',
    examples: [
      { word: '声', reading: 'こえ (koe)', meaningPt: 'Voz' },
      { word: '大声', reading: 'おおごえ (oogoe)', meaningPt: 'Voz alta / Grito' },
      { word: '声優', reading: 'せいゆう (seiyuu)', meaningPt: 'Dublador(a)' }
    ]
  },
  {
    id: 'k_n4_77',
    kanji: '病',
    onyomi: ['ビョウ (byou)', 'ヘイ (hei)'],
    kunyomi: ['や.む (ya.mu)'],
    meaningPt: 'Doença, Enfermidade',
    strokes: 10,
    radical: '疒 (doença)',
    jlpt: 'N4',
    examples: [
      { word: '病気', reading: 'びょうき (byouki)', meaningPt: 'Doença' },
      { word: '病院', reading: 'びょういん (byouin)', meaningPt: 'Hospital' },
      { word: '急病', reading: 'きゅうびょう (kyuubyou)', meaningPt: 'Doença repentina' }
    ]
  },
  {
    id: 'k_n4_78',
    kanji: '院',
    onyomi: ['イン (in)'],
    kunyomi: [],
    meaningPt: 'Instituição, Edifício oficial',
    strokes: 10,
    radical: '阝 (colina)',
    jlpt: 'N4',
    examples: [
      { word: '病院', reading: 'びょういん (byouin)', meaningPt: 'Hospital' },
      { word: '大学院', reading: 'だいがくいん (daigakuin)', meaningPt: 'Pós-graduação' },
      { word: '退院', reading: 'たいいん (taiin)', meaningPt: 'Alta hospitalar' }
    ]
  },
  {
    id: 'k_n4_79',
    kanji: '医',
    onyomi: ['イ (i)'],
    kunyomi: [],
    meaningPt: 'Medicina, Doutor',
    strokes: 7,
    radical: '匚 (caixa)',
    jlpt: 'N4',
    examples: [
      { word: '医者', reading: 'いしゃ (isha)', meaningPt: 'Médico / Doutor' },
      { word: '医学', reading: 'いがく (igaku)', meaningPt: 'Medicina (estudo)' },
      { word: '医院', reading: 'いいん (iin)', meaningPt: 'Clínica médica' }
    ]
  },
  {
    id: 'k_n4_80',
    kanji: '者',
    onyomi: ['シャ (sha)'],
    kunyomi: ['もの (mono)'],
    meaningPt: 'Pessoa, Especialista',
    strokes: 8,
    radical: '老 (velho)',
    jlpt: 'N4',
    examples: [
      { word: '医者', reading: 'いしゃ (isha)', meaningPt: 'Médico' },
      { word: '若者', reading: 'わかもの (wakamono)', meaningPt: 'Jovem' },
      { word: '学者', reading: 'がくしゃ (gakusha)', meaningPt: 'Erudito / Estudioso' }
    ]
  },
  {
    id: 'k_n4_81',
    kanji: '薬',
    onyomi: ['ヤク (yaku)'],
    kunyomi: ['くすり (kusuri)'],
    meaningPt: 'Remédio, Medicamento',
    strokes: 16,
    radical: '艹 (erva)',
    jlpt: 'N4',
    examples: [
      { word: '薬', reading: 'くすり (kusuri)', meaningPt: 'Remédio' },
      { word: '薬局', reading: 'やっきょく (yakkyoku)', meaningPt: 'Farmácia' },
      { word: '目薬', reading: 'めぐすり (megusuri)', meaningPt: 'Colírio' }
    ]
  },
  {
    id: 'k_n4_82',
    kanji: '死',
    onyomi: ['シ (shi)'],
    kunyomi: ['し.ぬ (shi.nu)'],
    meaningPt: 'Morte, Morrer',
    strokes: 6,
    radical: '歹 (osso/morte)',
    jlpt: 'N4',
    examples: [
      { word: '死ぬ', reading: 'しぬ (shinu)', meaningPt: 'Morrer' },
      { word: '死者', reading: 'ししゃ (shisha)', meaningPt: 'Falecido / Morto' }
    ]
  },

  // Alimentos, Cotidiano e Casa
  {
    id: 'k_n4_83',
    kanji: '飯',
    onyomi: ['ハン (han)'],
    kunyomi: ['めし (meshi)'],
    meaningPt: 'Arroz cozido, Refeição',
    strokes: 12,
    radical: '食 (comida)',
    jlpt: 'N4',
    examples: [
      { word: 'ご飯', reading: 'ごはん (gohan)', meaningPt: 'Arroz cozido / Refeição' },
      { word: '朝ご飯', reading: 'あさごはん (asagohan)', meaningPt: 'Café da manhã' },
      { word: '晩ご飯', reading: 'ばんごはん (bangohan)', meaningPt: 'Jantar' }
    ]
  },
  {
    id: 'k_n4_84',
    kanji: '茶',
    onyomi: ['チャ (cha)', 'サ (sa)'],
    kunyomi: [],
    meaningPt: 'Chá, Verde-oliva',
    strokes: 9,
    radical: '艹 (erva)',
    jlpt: 'N4',
    examples: [
      { word: 'お茶', reading: 'おちゃ (ocha)', meaningPt: 'Chá verde' },
      { word: '紅茶', reading: 'こうちゃ (koucha)', meaningPt: 'Chá preto' },
      { word: '喫茶店', reading: 'きっさてん (kissaten)', meaningPt: 'Cafeteria' },
      { word: '茶色', reading: 'ちゃいろ (chairo)', meaningPt: 'Marrom (cor de chá)' }
    ]
  },
  {
    id: 'k_n4_85',
    kanji: '肉',
    onyomi: ['ニク (niku)'],
    kunyomi: [],
    meaningPt: 'Carne',
    strokes: 6,
    radical: '肉 (carne)',
    jlpt: 'N4',
    examples: [
      { word: '肉', reading: 'にく (niku)', meaningPt: 'Carne' },
      { word: '牛肉', reading: 'ぎゅうにく (gyuuniku)', meaningPt: 'Carne bovina' },
      { word: '豚肉', reading: 'ぶたにく (butaniku)', meaningPt: 'Carne de porco' },
      { word: '鳥肉', reading: 'とりにく (toriniku)', meaningPt: 'Carne de frango' }
    ]
  },
  {
    id: 'k_n4_86',
    kanji: '牛',
    onyomi: ['ギュウ (gyuu)'],
    kunyomi: ['うし (ushi)'],
    meaningPt: 'Boi, Vaca, Gado',
    strokes: 4,
    radical: '牛 (boi)',
    jlpt: 'N4',
    examples: [
      { word: '牛', reading: 'うし (ushi)', meaningPt: 'Boi / Vaca' },
      { word: '牛乳', reading: 'ぎゅうにゅう (gyuunyuu)', meaningPt: 'Leite de vaca' },
      { word: '牛肉', reading: 'ぎゅうにく (gyuuniku)', meaningPt: 'Carne bovina' },
      { word: '牛丼', reading: 'ぎゅうどん (gyuudon)', meaningPt: 'Gyudon (tigela de arroz com carne)' }
    ]
  },
  {
    id: 'k_n4_87',
    kanji: '鳥',
    onyomi: ['チョウ (chou)'],
    kunyomi: ['とり (tori)'],
    meaningPt: 'Pássaro, Ave',
    strokes: 11,
    radical: '鳥 (pássaro)',
    jlpt: 'N4',
    examples: [
      { word: '鳥', reading: 'とり (tori)', meaningPt: 'Pássaro / Frango' },
      { word: '焼き鳥', reading: 'やきとり (yakitori)', meaningPt: 'Espetinho de frango grelhado' },
      { word: '小鳥', reading: 'ことり (kotori)', meaningPt: 'Passarinho' }
    ]
  },
  {
    id: 'k_n4_88',
    kanji: '卵',
    onyomi: ['ラン (ran)'],
    kunyomi: ['たまご (tamago)'],
    meaningPt: 'Ovo',
    strokes: 7,
    radical: '卩 (selo)',
    jlpt: 'N4',
    examples: [
      { word: '卵', reading: 'たまご (tamago)', meaningPt: 'Ovo' },
      { word: '卵焼き', reading: 'たまごやき (tamagoyaki)', meaningPt: 'Omelete japonês enrolado' }
    ]
  },
  {
    id: 'k_n4_89',
    kanji: '屋',
    onyomi: ['オク (oku)'],
    kunyomi: ['や (ya)'],
    meaningPt: 'Telhado, Loja, Casa',
    strokes: 9,
    radical: '尸 (corpo)',
    jlpt: 'N4',
    examples: [
      { word: '部屋', reading: 'へや (heya)', meaningPt: 'Quarto / Cômodo' },
      { word: '本屋', reading: 'ほんや (hon\'ya)', meaningPt: 'Livraria' },
      { word: '屋上', reading: 'おくじょう (okujou)', meaningPt: 'Terraço da cobertura' }
    ]
  },
  {
    id: 'k_n4_90',
    kanji: '室',
    onyomi: ['シツ (shitsu)'],
    kunyomi: ['むろ (muro)'],
    meaningPt: 'Sala, Quarto',
    strokes: 9,
    radical: '宀 (teto)',
    jlpt: 'N4',
    examples: [
      { word: '教室', reading: 'きょうしつ (kyoushitsu)', meaningPt: 'Sala de aula' },
      { word: '研究室', reading: 'けんきゅうしつ', meaningPt: 'Laboratório / Gabinete' },
      { word: '地下室', reading: 'ちかしつ (chikashitsu)', meaningPt: 'Porão' }
    ]
  },
  {
    id: 'k_n4_91',
    kanji: '堂',
    onyomi: ['ドウ (dou)'],
    kunyomi: [],
    meaningPt: 'Salão público, Templo',
    strokes: 11,
    radical: '土 (terra)',
    jlpt: 'N4',
    examples: [
      { word: '食堂', reading: 'しょくどう (shokudou)', meaningPt: 'Refeitório / Cantina' },
      { word: '講堂', reading: 'こうどう (koudou)', meaningPt: 'Auditório' }
    ]
  },
  {
    id: 'k_n4_92',
    kanji: '門',
    onyomi: ['モン (mon)'],
    kunyomi: ['かど (kado)'],
    meaningPt: 'Portão, Portal',
    strokes: 8,
    radical: '門 (portão)',
    jlpt: 'N4',
    examples: [
      { word: '門', reading: 'もん (mon)', meaningPt: 'Portão' },
      { word: '正門', reading: 'せいもん (seimon)', meaningPt: 'Portão principal' },
      { word: '専門', reading: 'せんもん (senmon)', meaningPt: 'Especialidade / Área' }
    ]
  },
  {
    id: 'k_n4_93',
    kanji: '紙',
    onyomi: ['シ (shi)'],
    kunyomi: ['かみ (kami)'],
    meaningPt: 'Papel',
    strokes: 10,
    radical: '糸 (fio)',
    jlpt: 'N4',
    examples: [
      { word: '紙', reading: 'かみ (kami)', meaningPt: 'Papel' },
      { word: '手紙', reading: 'てがみ (tegami)', meaningPt: 'Carta' },
      { word: '折り紙', reading: 'おりがみ (origami)', meaningPt: 'Origami' }
    ]
  },
  {
    id: 'k_n4_94',
    kanji: '服',
    onyomi: ['フク (fuku)'],
    kunyomi: [],
    meaningPt: 'Roupa, Vestimenta, Obedecer',
    strokes: 8,
    radical: '月 (lua)',
    jlpt: 'N4',
    examples: [
      { word: '服', reading: 'ふく (fuku)', meaningPt: 'Roupa' },
      { word: '洋服', reading: 'ようふく (youfuku)', meaningPt: 'Roupas ocidentais' },
      { word: '和服', reading: 'わふく (wafuku)', meaningPt: 'Roupa tradicional japonesa' }
    ]
  },

  // Cidade, Sociedade e Estruturas
  {
    id: 'k_n4_95',
    kanji: '町',
    onyomi: ['チョウ (chou)'],
    kunyomi: ['まち (machi)'],
    meaningPt: 'Cidade pequena, Bairro, Vila',
    strokes: 7,
    radical: '田 (campo)',
    jlpt: 'N4',
    examples: [
      { word: '町', reading: 'まち (machi)', meaningPt: 'Cidade / Bairro' },
      { word: '下町', reading: 'したまち (shitamachi)', meaningPt: 'Bairro tradicional antigo' }
    ]
  },
  {
    id: 'k_n4_96',
    kanji: '村',
    onyomi: ['ソン (son)'],
    kunyomi: ['むら (mura)'],
    meaningPt: 'Vila, Aldeia rural',
    strokes: 7,
    radical: '木 (árvore)',
    jlpt: 'N4',
    examples: [
      { word: '村', reading: 'むら (mura)', meaningPt: 'Vila / Povoado' },
      { word: '農村', reading: 'のうそん (nouson)', meaningPt: 'Vila agrícola' }
    ]
  },
  {
    id: 'k_n4_97',
    kanji: '市',
    onyomi: ['シ (shi)'],
    kunyomi: ['いち (ichi)'],
    meaningPt: 'Cidade, Município, Mercado',
    strokes: 5,
    radical: '巾 (pano)',
    jlpt: 'N4',
    examples: [
      { word: '市民', reading: 'しみん (shimin)', meaningPt: 'Cidadão' },
      { word: '市場', reading: 'いちば / しじょう', meaningPt: 'Mercado / Feira' },
      { word: '京都市', reading: 'きょうとし (kyoutoshi)', meaningPt: 'Cidade de Quioto' }
    ]
  },
  {
    id: 'k_n4_98',
    kanji: '区',
    onyomi: ['ク (ku)'],
    kunyomi: [],
    meaningPt: 'Distrito, Bairro administrativo',
    strokes: 4,
    radical: '匚 (caixa)',
    jlpt: 'N4',
    examples: [
      { word: '区役所', reading: 'くやくしょ (kuyakusho)', meaningPt: 'Prefeitura regional do bairro' },
      { word: '新宿区', reading: 'しんじゅくく (shinjukuku)', meaningPt: 'Distrito de Shinjuku' }
    ]
  },
  {
    id: 'k_n4_99',
    kanji: '都',
    onyomi: ['ト (to)', 'ツ (tsu)'],
    kunyomi: ['みやこ (miyako)'],
    meaningPt: 'Metrópole, Capital',
    strokes: 11,
    radical: '阝 (colina)',
    jlpt: 'N4',
    examples: [
      { word: '東京都', reading: 'とうきょうと (toukyouto)', meaningPt: 'Metrópole de Tóquio' },
      { word: '京都', reading: 'きょうと (kyouto)', meaningPt: 'Quioto' },
      { word: '都合', reading: 'つごう (tsugou)', meaningPt: 'Conveniência de horário' }
    ]
  },
  {
    id: 'k_n4_100',
    kanji: '京',
    onyomi: ['キョウ (kyou)', 'ケイ (kei)'],
    kunyomi: ['みやこ (miyako)'],
    meaningPt: 'Capital imperial',
    strokes: 8,
    radical: '亠 (tampa)',
    jlpt: 'N4',
    examples: [
      { word: '東京', reading: 'とうきょう (toukyou)', meaningPt: 'Tóquio' },
      { word: '京都', reading: 'きょうと (kyouto)', meaningPt: 'Quioto' },
      { word: '上京', reading: 'じょうきょう (joukyou)', meaningPt: 'Ir para a capital Tóquio' }
    ]
  },
  {
    id: 'k_n4_101',
    kanji: '府',
    onyomi: ['フ (fu)'],
    kunyomi: [],
    meaningPt: 'Prefeitura metropolitana (Osaka/Quioto), Governo',
    strokes: 8,
    radical: '广 (abrigo)',
    jlpt: 'N4',
    examples: [
      { word: '大阪府', reading: 'おおさかふ (oosakafu)', meaningPt: 'Prefeitura de Osaka' },
      { word: '京都府', reading: 'きょうとふ (kyoutofu)', meaningPt: 'Prefeitura de Quioto' },
      { word: '政府', reading: 'せいふ (seifu)', meaningPt: 'Governo' }
    ]
  },
  {
    id: 'k_n4_102',
    kanji: '県',
    onyomi: ['ケン (ken)'],
    kunyomi: [],
    meaningPt: 'Província, Estado (no Japão)',
    strokes: 9,
    radical: '目 (olho)',
    jlpt: 'N4',
    examples: [
      { word: '県庁', reading: 'けんちょう (kenchou)', meaningPt: 'Governo provincial' },
      { word: '青森県', reading: 'あおもりけん (aomoriken)', meaningPt: 'Província de Aomori' }
    ]
  },
  {
    id: 'k_n4_103',
    kanji: '所',
    onyomi: ['ショ (sho)'],
    kunyomi: ['ところ (tokoro)'],
    meaningPt: 'Lugar, Local',
    strokes: 8,
    radical: '戶 (porta)',
    jlpt: 'N4',
    examples: [
      { word: '場所', reading: 'ばしょ (basho)', meaningPt: 'Lugar / Local' },
      { word: '住所', reading: 'じゅうしょ (juusho)', meaningPt: 'Endereço' },
      { word: '台所', reading: 'だいどこ (daidokoro)', meaningPt: 'Cozinha' },
      { word: '長所', reading: 'ちょうしょ (chousho)', meaningPt: 'Ponto forte / Qualidade' }
    ]
  },
  {
    id: 'k_n4_104',
    kanji: '場',
    onyomi: ['ジョウ (jou)'],
    kunyomi: ['ば (ba)'],
    meaningPt: 'Local, Espaço, Praça',
    strokes: 12,
    radical: '土 (terra)',
    jlpt: 'N4',
    examples: [
      { word: '場所', reading: 'ばしょ (basho)', meaningPt: 'Lugar' },
      { word: '広場', reading: 'ひろば (hiroba)', meaningPt: 'Praça pública' },
      { word: '駐車場', reading: 'ちゅうしゃじょう (chuushajou)', meaningPt: 'Estacionamento' },
      { word: '場合', reading: 'ばあい (baai)', meaningPt: 'Caso / Ocasião' }
    ]
  },
  {
    id: 'k_n4_105',
    kanji: '図',
    onyomi: ['ズ (zu)', 'ト (to)'],
    kunyomi: ['はか.る (haka.ru)'],
    meaningPt: 'Desenho, Diagrama, Mapa, Planejar',
    strokes: 7,
    radical: '囗 (cercado)',
    jlpt: 'N4',
    examples: [
      { word: '地図', reading: 'ちず (chizu)', meaningPt: 'Mapa' },
      { word: '図書館', reading: 'としょかん (toshokan)', meaningPt: 'Biblioteca' },
      { word: '合図', reading: 'あいず (aizu)', meaningPt: 'Sinal / Pista' }
    ]
  },
  {
    id: 'k_n4_106',
    kanji: '館',
    onyomi: ['カン (kan)'],
    kunyomi: ['やかた (yakata)'],
    meaningPt: 'Edifício público, Mansão',
    strokes: 16,
    radical: '食 (comida)',
    jlpt: 'N4',
    examples: [
      { word: '図書館', reading: 'としょかん (toshokan)', meaningPt: 'Biblioteca' },
      { word: '映画館', reading: 'えいがかん (eigakan)', meaningPt: 'Cinema' },
      { word: '大使館', reading: 'たいしかん (taishikan)', meaningPt: 'Embaixada' },
      { word: '美術館', reading: 'びじゅつかん (bijutsukan)', meaningPt: 'Museu de arte' }
    ]
  },
  {
    id: 'k_n4_107',
    kanji: '銀',
    onyomi: ['ギン (gin)'],
    kunyomi: ['しろがね (shirogane)'],
    meaningPt: 'Prata, Banco',
    strokes: 14,
    radical: '金 (metal)',
    jlpt: 'N4',
    examples: [
      { word: '銀行', reading: 'ぎんこう (ginkou)', meaningPt: 'Banco' },
      { word: '銀メダル', reading: 'ぎんメダル (ginmedaru)', meaningPt: 'Medalha de prata' },
      { word: '銀世界', reading: 'ぎんせかい (ginsekai)', meaningPt: 'Mundo coberto de neve' }
    ]
  },
  {
    id: 'k_n4_108',
    kanji: '駅',
    onyomi: ['エキ (eki)'],
    kunyomi: [],
    meaningPt: 'Estação de trem',
    strokes: 14,
    radical: '馬 (cavalo)',
    jlpt: 'N4',
    examples: [
      { word: '駅', reading: 'えき (eki)', meaningPt: 'Estação' },
      { word: '駅員', reading: 'えきいん (ekiin)', meaningPt: 'Funcionário da estação' },
      { word: '駅前', reading: 'えきまえ (ekimae)', meaningPt: 'Em frente à estação' }
    ]
  },
  {
    id: 'k_n4_109',
    kanji: '社',
    onyomi: ['シャ (sha)'],
    kunyomi: ['やしろ (yashiro)'],
    meaningPt: 'Empresa, Santuário, Sociedade',
    strokes: 7,
    radical: '礻 (altar)',
    jlpt: 'N4',
    examples: [
      { word: '会社', reading: 'かいしゃ (kaisha)', meaningPt: 'Empresa' },
      { word: '社長', reading: 'しゃちょう (shachou)', meaningPt: 'Presidente da empresa' },
      { word: '社会', reading: 'しゃかい (shakai)', meaningPt: 'Sociedade' },
      { word: '神社', reading: 'じんじゃ (jinja)', meaningPt: 'Santuário xintoísta' }
    ]
  },
  {
    id: 'k_n4_110',
    kanji: '神',
    onyomi: ['シン (shin)', 'ジン (jin)'],
    kunyomi: ['かみ (kami)'],
    meaningPt: 'Deus, Divindade (Kami), Mente',
    strokes: 9,
    radical: '礻 (altar)',
    jlpt: 'N4',
    examples: [
      { word: '神様', reading: 'かみさま (kamisama)', meaningPt: 'Deus / Divindade' },
      { word: '神社', reading: 'じんじゃ (jinja)', meaningPt: 'Santuário' },
      { word: '精神', reading: 'せいしん (seishin)', meaningPt: 'Espírito / Mente' }
    ]
  },
  {
    id: 'k_n4_111',
    kanji: '寺',
    onyomi: ['ジ (ji)'],
    kunyomi: ['てら (tera)'],
    meaningPt: 'Templo budista',
    strokes: 6,
    radical: '寸 (polegada)',
    jlpt: 'N4',
    examples: [
      { word: 'お寺', reading: 'おてら (otera)', meaningPt: 'Templo budista' },
      { word: '金閣寺', reading: 'きんかくじ (kinkakuji)', meaningPt: 'Pavilhão Dourado (Templo)' }
    ]
  },
  {
    id: 'k_n4_112',
    kanji: '鉄',
    onyomi: ['テツ (tetsu)'],
    kunyomi: ['くろがね (kurogane)'],
    meaningPt: 'Ferro, Ferrovia',
    strokes: 13,
    radical: '金 (metal)',
    jlpt: 'N4',
    examples: [
      { word: '地下鉄', reading: 'ちかてつ (chikatetsu)', meaningPt: 'Metrô' },
      { word: '鉄道', reading: 'てつどう (tetsudou)', meaningPt: 'Ferrovia' },
      { word: '私鉄', reading: 'してつ (shitetsu)', meaningPt: 'Ferrovia privada' }
    ]
  },
  {
    id: 'k_n4_113',
    kanji: '船',
    onyomi: ['セン (sen)'],
    kunyomi: ['ふね (fune)', 'ふな- (funa-)'],
    meaningPt: 'Navio, Barco',
    strokes: 11,
    radical: '舟 (barco)',
    jlpt: 'N4',
    examples: [
      { word: '船', reading: 'ふね (fune)', meaningPt: 'Navio / Barco' },
      { word: '船便', reading: 'ふなびん (funabin)', meaningPt: 'Correio marítimo' },
      { word: '風船', reading: 'ふうせん (fuusen)', meaningPt: 'Balão de ar' }
    ]
  },
  {
    id: 'k_n4_114',
    kanji: '港',
    onyomi: ['コウ (kou)'],
    kunyomi: ['みなと (minato)'],
    meaningPt: 'Porto',
    strokes: 12,
    radical: '氵 (água)',
    jlpt: 'N4',
    examples: [
      { word: '港', reading: 'みなと (minato)', meaningPt: 'Porto' },
      { word: '空港', reading: 'くうこう (kuukou)', meaningPt: 'Aeroporto' }
    ]
  },
  {
    id: 'k_n4_115',
    kanji: '員',
    onyomi: ['イン (in)'],
    kunyomi: [],
    meaningPt: 'Membro, Funcionário',
    strokes: 10,
    radical: '口 (boca)',
    jlpt: 'N4',
    examples: [
      { word: '会社員', reading: 'かいしゃいん (kaishain)', meaningPt: 'Funcionário de empresa' },
      { word: '店員', reading: 'てんいん (ten\'in)', meaningPt: 'Atendente de loja' },
      { word: '全員', reading: 'ぜんいん (zen\'in)', meaningPt: 'Todos os membros' }
    ]
  },

  // Adjetivos, Qualidades e Estados
  {
    id: 'k_n4_116',
    kanji: '明',
    onyomi: ['メイ (mei)', 'ミョウ (myou)'],
    kunyomi: ['あか.るい (aka.rui)', 'あき.らか (aki.raka)'],
    meaningPt: 'Claro, Iluminado, Alegre, Amanhã',
    strokes: 8,
    radical: '日 (sol/dia)',
    jlpt: 'N4',
    examples: [
      { word: '明るい', reading: 'あかるい (akarui)', meaningPt: 'Claro / Alegre / Brilhante' },
      { word: '明日', reading: 'あした / みょうにち', meaningPt: 'Amanhã' },
      { word: '説明', reading: 'せつめい (setsumei)', meaningPt: 'Explicação' }
    ]
  },
  {
    id: 'k_n4_117',
    kanji: '暗',
    onyomi: ['アン (an)'],
    kunyomi: ['くら.い (kura.i)'],
    meaningPt: 'Escuro, Sombrio',
    strokes: 13,
    radical: '日 (sol/dia)',
    jlpt: 'N4',
    examples: [
      { word: '暗い', reading: 'くらい (kurai)', meaningPt: 'Escuro / Sombrio' },
      { word: '暗記', reading: 'あんき (anki)', meaningPt: 'Memorização' },
      { word: '真っ暗', reading: 'まっくら (makkura)', meaningPt: 'Escuridão total' }
    ]
  },
  {
    id: 'k_n4_118',
    kanji: '寒',
    onyomi: ['カン (kan)'],
    kunyomi: ['さむ.い (samu.i)'],
    meaningPt: 'Frio (clima/ar)',
    strokes: 12,
    radical: '宀 (teto)',
    jlpt: 'N4',
    examples: [
      { word: '寒い', reading: 'さむい (samui)', meaningPt: 'Frio (clima)' },
      { word: '寒気', reading: 'さむけ / かんき', meaningPt: 'Calafrio / Frente fria' }
    ]
  },
  {
    id: 'k_n4_119',
    kanji: '暑',
    onyomi: ['ショ (sho)'],
    kunyomi: ['あつ.い (atsu.i)'],
    meaningPt: 'Quente (clima)',
    strokes: 12,
    radical: '日 (sol/dia)',
    jlpt: 'N4',
    examples: [
      { word: '暑い', reading: 'あつい (atsui)', meaningPt: 'Quente (clima)' },
      { word: '猛暑', reading: 'もうしょ (mousho)', meaningPt: 'Calor extremo' }
    ]
  },
  {
    id: 'k_n4_120',
    kanji: '温',
    onyomi: ['オン (on)'],
    kunyomi: ['あたた.かい (atata.kai)', 'ぬる.い (nuru.i)'],
    meaningPt: 'Morno, Agradavelmente quente',
    strokes: 12,
    radical: '氵 (água)',
    jlpt: 'N4',
    examples: [
      { word: '温かい', reading: 'あたたかい (atatakai)', meaningPt: 'Quentinho / Agradável' },
      { word: '温度', reading: 'おんど (ondo)', meaningPt: 'Temperatura' },
      { word: '温泉', reading: 'おんせん (onsen)', meaningPt: 'Fonte termal (Onsen)' }
    ]
  },
  {
    id: 'k_n4_121',
    kanji: '軽',
    onyomi: ['ケイ (kei)'],
    kunyomi: ['かる.い (karu.i)'],
    meaningPt: 'Leve, Ágil, Superficial',
    strokes: 12,
    radical: '車 (carro)',
    jlpt: 'N4',
    examples: [
      { word: '軽い', reading: 'かるい (karui)', meaningPt: 'Leve (peso)' },
      { word: '手軽', reading: 'てがる (tegaru)', meaningPt: 'Fácil / Prático' },
      { word: '軽食', reading: 'けいしょく (keishoku)', meaningPt: 'Lanche leve' }
    ]
  },
  {
    id: 'k_n4_122',
    kanji: '重',
    onyomi: ['ジュウ (juu)', 'チョウ (chou)'],
    kunyomi: ['おも.い (omo.i)', 'かさ.なる (kasa.naru)'],
    meaningPt: 'Pesado, Grave, Empilhar',
    strokes: 9,
    radical: '里 (vila)',
    jlpt: 'N4',
    examples: [
      { word: '重い', reading: 'おもい (omoi)', meaningPt: 'Pesado' },
      { word: '体重', reading: 'たいじゅう (taijuu)', meaningPt: 'Peso corporal' },
      { word: '重要', reading: 'じゅうよう (juuyou)', meaningPt: 'Importante / Essencial' }
    ]
  },
  {
    id: 'k_n4_123',
    kanji: '広',
    onyomi: ['コウ (kou)'],
    kunyomi: ['ひろ.い (hiro.i)', 'ひろ.がる (hiro.garu)'],
    meaningPt: 'Amplo, Espaçoso, Espalhar',
    strokes: 5,
    radical: '广 (abrigo)',
    jlpt: 'N4',
    examples: [
      { word: '広い', reading: 'ひろい (hiroi)', meaningPt: 'Amplo / Espaçoso' },
      { word: '広場', reading: 'ひろば (hiroba)', meaningPt: 'Praça' },
      { word: '広告', reading: 'こうこく (koukoku)', meaningPt: 'Propaganda / Anúncio' }
    ]
  },
  {
    id: 'k_n4_124',
    kanji: '近',
    onyomi: ['キン (kin)'],
    kunyomi: ['ちか.い (chika.i)'],
    meaningPt: 'Perto, Próximo',
    strokes: 7,
    radical: '辶 (movimento)',
    jlpt: 'N4',
    examples: [
      { word: '近い', reading: 'ちかい (chikai)', meaningPt: 'Perto / Próximo' },
      { word: '近く', reading: 'ちかく (chikaku)', meaningPt: 'Por perto' },
      { word: '最近', reading: 'さいきん (saikin)', meaningPt: 'Recentemente' }
    ]
  },
  {
    id: 'k_n4_125',
    kanji: '遠',
    onyomi: ['エン (en)', 'オン (on)'],
    kunyomi: ['とお.い (too.i)'],
    meaningPt: 'Longe, Distante',
    strokes: 13,
    radical: '辶 (movimento)',
    jlpt: 'N4',
    examples: [
      { word: '遠い', reading: 'とおい (tooi)', meaningPt: 'Longe' },
      { word: '遠慮', reading: 'えんりょ (enryo)', meaningPt: 'Hesitação / Modéstia' },
      { word: '永遠', reading: 'えいえん (eien)', meaningPt: 'Eternidade' }
    ]
  },
  {
    id: 'k_n4_126',
    kanji: '低',
    onyomi: ['テイ (tei)'],
    kunyomi: ['ひく.い (hiku.i)'],
    meaningPt: 'Baixo, Humilde',
    strokes: 7,
    radical: '人 (pessoa)',
    jlpt: 'N4',
    examples: [
      { word: '低い', reading: 'ひくい (hikui)', meaningPt: 'Baixo (altura/preço)' },
      { word: '最低', reading: 'さいてい (saitei)', meaningPt: 'O mais baixo / O pior' }
    ]
  },
  {
    id: 'k_n4_127',
    kanji: '短',
    onyomi: ['タン (tan)'],
    kunyomi: ['みじか.い (mijika.i)'],
    meaningPt: 'Curto, Breve, Defeito',
    strokes: 12,
    radical: '矢 (flecha)',
    jlpt: 'N4',
    examples: [
      { word: '短い', reading: 'みじかい (mijikai)', meaningPt: 'Curto' },
      { word: '短所', reading: 'たんしょ (tansho)', meaningPt: 'Defeito / Ponto fraco' },
      { word: '短歌', reading: 'たんか (tanka)', meaningPt: 'Poema tradicional Tanka' }
    ]
  },
  {
    id: 'k_n4_128',
    kanji: '悪',
    onyomi: ['アク (aku)', 'オ (o)'],
    kunyomi: ['わる.い (waru.i)'],
    meaningPt: 'Mau, Ruim, Mal',
    strokes: 11,
    radical: '心 (coração)',
    jlpt: 'N4',
    examples: [
      { word: '悪い', reading: 'わるい (warui)', meaningPt: 'Mau / Ruim' },
      { word: '悪魔', reading: 'あくま (akuma)', meaningPt: 'Demônio' },
      { word: '最悪', reading: 'さいあく (saiaku)', meaningPt: 'O pior caso possível' }
    ]
  },
  {
    id: 'k_n4_129',
    kanji: '正',
    onyomi: ['セイ (sei)', 'ショウ (shou)'],
    kunyomi: ['ただ.しい (tada.shii)', 'まさ (masa)'],
    meaningPt: 'Correto, Justo, Exato',
    strokes: 5,
    radical: '止 (parar)',
    jlpt: 'N4',
    examples: [
      { word: '正しい', reading: 'ただしい (tadashii)', meaningPt: 'Correto / Certo' },
      { word: 'お正月', reading: 'おしょうがつ (oshougatsu)', meaningPt: 'Ano Novo japonês' },
      { word: '正直', reading: 'しょうじき (shoujiki)', meaningPt: 'Honesto' }
    ]
  },
  {
    id: 'k_n4_130',
    kanji: '有',
    onyomi: ['ユウ (yuu)', 'ウ (u)'],
    kunyomi: ['あ.る (a.ru)'],
    meaningPt: 'Ter, Existir, Possuir',
    strokes: 6,
    radical: '月 (lua)',
    jlpt: 'N4',
    examples: [
      { word: '有名', reading: 'ゆうめい (yuumei)', meaningPt: 'Famoso' },
      { word: '有料', reading: 'ゆうりょう (yuuryou)', meaningPt: 'Cobrado / Pago' },
      { word: '有効', reading: 'ゆうこう (yuukou)', meaningPt: 'Válido / Eficaz' }
    ]
  },
  {
    id: 'k_n4_131',
    kanji: '忙',
    onyomi: ['ボウ (bou)'],
    kunyomi: ['いそが.しい (isoga.shii)'],
    meaningPt: 'Ocupado, Atarefado',
    strokes: 6,
    radical: '忄 (coração)',
    jlpt: 'N4',
    examples: [
      { word: '忙しい', reading: 'いそがしい (isogashii)', meaningPt: 'Ocupado / Sem tempo' },
      { word: '多忙', reading: 'たぼう (tabou)', meaningPt: 'Muito atarefado' }
    ]
  },
  {
    id: 'k_n4_132',
    kanji: '便',
    onyomi: ['ベン (ben)', 'ビン (bin)'],
    kunyomi: ['たよ.り (tayo.ri)'],
    meaningPt: 'Conveniente, Correio, Notícia',
    strokes: 9,
    radical: '人 (pessoa)',
    jlpt: 'N4',
    examples: [
      { word: '便利', reading: 'べんり (benri)', meaningPt: 'Prático / Conveniente' },
      { word: '航空便', reading: 'こうくうびん (koukuubin)', meaningPt: 'Correio aéreo' },
      { word: '郵便局', reading: 'ゆうびんきょく (yuubinkyoku)', meaningPt: 'Agência dos correios' }
    ]
  },
  {
    id: 'k_n4_133',
    kanji: '利',
    onyomi: ['リ (ri)'],
    kunyomi: ['き.く (ki.ku)'],
    meaningPt: 'Lucro, Vantagem, Eficácia',
    strokes: 7,
    radical: '刀 (espada)',
    jlpt: 'N4',
    examples: [
      { word: '便利', reading: 'べんり (benri)', meaningPt: 'Conveniente' },
      { word: '利用', reading: 'りよう (riyou)', meaningPt: 'Utilização / Uso' },
      { word: '利子', reading: 'りし (rishi)', meaningPt: 'Juros bancários' }
    ]
  },
  {
    id: 'k_n4_134',
    kanji: '別',
    onyomi: ['ベツ (betsu)'],
    kunyomi: ['わか.れる (waka.reru)'],
    meaningPt: 'Separar, Diferente, Despedida',
    strokes: 7,
    radical: '刀 (espada)',
    jlpt: 'N4',
    examples: [
      { word: '別れる', reading: 'わかれる (wakareru)', meaningPt: 'Separar-se / Despedir-se' },
      { word: '特別', reading: 'とくべつ (tokubetsu)', meaningPt: 'Especial' },
      { word: '別に', reading: 'べつに (betsuni)', meaningPt: 'Não particularmente / Nada' }
    ]
  },
  {
    id: 'k_n4_135',
    kanji: '特',
    onyomi: ['トク (toku)'],
    kunyomi: [],
    meaningPt: 'Especial, Particular',
    strokes: 10,
    radical: '牛 (boi)',
    jlpt: 'N4',
    examples: [
      { word: '特に', reading: 'とくに (tokuni)', meaningPt: 'Especialmente' },
      { word: '特別', reading: 'とくべつ (tokubetsu)', meaningPt: 'Especial' },
      { word: '特急', reading: 'とっきゅう (tokkyuu)', meaningPt: 'Trem super expresso' }
    ]
  },
  {
    id: 'k_n4_136',
    kanji: '予',
    onyomi: ['ヨ (yo)'],
    kunyomi: ['あらかじ.め (arakaji.me)'],
    meaningPt: 'Prévio, Antecipado, Reservar',
    strokes: 4,
    radical: '亅 (gancho)',
    jlpt: 'N4',
    examples: [
      { word: '予定', reading: 'よてい (yotei)', meaningPt: 'Plano / Agendamento' },
      { word: '予約', reading: 'よやく (yoyaku)', meaningPt: 'Reserva' },
      { word: '天気予報', reading: 'てんきよほう (tenkiyohou)', meaningPt: 'Previsão do tempo' }
    ]
  },
  {
    id: 'k_n4_137',
    kanji: '私',
    onyomi: ['シ (shi)'],
    kunyomi: ['わたし (watashi)', 'わたくし (watakushi)'],
    meaningPt: 'Eu, Privado',
    strokes: 7,
    radical: '禾 (grão)',
    jlpt: 'N4',
    examples: [
      { word: '私', reading: 'わたし (watashi)', meaningPt: 'Eu' },
      { word: '私立', reading: 'しりつ (shiritsu)', meaningPt: 'Privado / Particular' }
    ]
  },
  {
    id: 'k_n4_138',
    kanji: '映',
    onyomi: ['エイ (ei)'],
    kunyomi: ['うつ.る (utsu.ru)', 'うつ.す (utsu.su)', 'は.える (ha.eru)'],
    meaningPt: 'Projetar, Refletir, Filme',
    strokes: 9,
    radical: '日 (sol/dia)',
    jlpt: 'N4',
    examples: [
      { word: '映画', reading: 'えいが (eiga)', meaningPt: 'Filme' },
      { word: '映画館', reading: 'えいがかん (eigakan)', meaningPt: 'Cinema' }
    ]
  },
  {
    id: 'k_n4_139',
    kanji: '画',
    onyomi: ['ガ (ga)', 'カク (kaku)'],
    kunyomi: ['えが.く (ega.ku)'],
    meaningPt: 'Pintura, Quadro, Traço',
    strokes: 8,
    radical: '田 (campo)',
    jlpt: 'N4',
    examples: [
      { word: '映画', reading: 'えいが (eiga)', meaningPt: 'Filme' },
      { word: '画家', reading: 'がか (gaka)', meaningPt: 'Pintor / Artista plástico' },
      { word: '計画', reading: 'けいかく (keikaku)', meaningPt: 'Plano / Projeto' }
    ]
  },
  {
    id: 'k_n4_140',
    kanji: '写',
    onyomi: ['シャ (sha)'],
    kunyomi: ['うつ.す (utsu.su)', 'うつ.る (utsu.ru)'],
    meaningPt: 'Copiar, Fotografar, Refletir',
    strokes: 5,
    radical: '冖 (coroa)',
    jlpt: 'N4',
    examples: [
      { word: '写真', reading: 'しゃしん (shashin)', meaningPt: 'Fotografia' },
      { word: '写す', reading: 'うつす (utsusu)', meaningPt: 'Copiar / Tirar foto' }
    ]
  },
  {
    id: 'k_n4_141',
    kanji: '真',
    onyomi: ['シン (shin)'],
    kunyomi: ['ま (ma)', 'まこと (makoto)'],
    meaningPt: 'Verdadeiro, Puro, Real',
    strokes: 10,
    radical: '目 (olho)',
    jlpt: 'N4',
    examples: [
      { word: '写真', reading: 'しゃしん (shashin)', meaningPt: 'Fotografia (cópia da verdade)' },
      { word: '真ん中', reading: 'まんなか (mannaka)', meaningPt: 'Bem no meio' },
      { word: '真実', reading: 'しんじつ (shinjitsu)', meaningPt: 'Verdade' }
    ]
  },
  {
    id: 'k_n4_142',
    kanji: '音',
    onyomi: ['オン (on)', 'イン (in)'],
    kunyomi: ['おと (oto)', 'ね (ne)'],
    meaningPt: 'Som, Ruído, Nota musical',
    strokes: 9,
    radical: '音 (som)',
    jlpt: 'N4',
    examples: [
      { word: '音', reading: 'おと (oto)', meaningPt: 'Som / Barulho' },
      { word: '音楽', reading: 'おんがく (ongaku)', meaningPt: 'Música' },
      { word: '本音', reading: 'ほんね (honne)', meaningPt: 'Sentimento verdadeiro / Opinião real' }
    ]
  },
  {
    id: 'k_n4_143',
    kanji: '楽',
    onyomi: ['ガク (gaku)', 'ラク (raku)'],
    kunyomi: ['たの.しい (tano.shii)', 'たの.しむ (tano.shimu)'],
    meaningPt: 'Música, Divertido, Confortável',
    strokes: 13,
    radical: '木 (árvore)',
    jlpt: 'N4',
    examples: [
      { word: '楽しい', reading: 'たのしい (tanoshii)', meaningPt: 'Divertido / Alegre' },
      { word: '音楽', reading: 'おんがく (ongaku)', meaningPt: 'Música' },
      { word: '楽な', reading: 'らくな (rakuna)', meaningPt: 'Fácil / Confortável' }
    ]
  },
  {
    id: 'k_n4_144',
    kanji: '歌',
    onyomi: ['カ (ka)'],
    kunyomi: ['うた (uta)', 'うた.う (uta.u)'],
    meaningPt: 'Cantar, Canção, Poema',
    strokes: 14,
    radical: '欠 (bocejo)',
    jlpt: 'N4',
    examples: [
      { word: '歌', reading: 'うた (uta)', meaningPt: 'Música / Canção' },
      { word: '歌う', reading: 'うたう (utau)', meaningPt: 'Cantar' },
      { word: '歌手', reading: 'かしゅ (kashu)', meaningPt: 'Cantor(a)' }
    ]
  }
];
