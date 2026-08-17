import { SentenceChallenge } from '../types';

export const SENTENCE_CHALLENGES: SentenceChallenge[] = [
  // ===================== N5 SENTENCES =====================
  {
    id: 's_1',
    jlpt: 'N5',
    meaningPt: 'Eu bebo água todos os dias.',
    fullJp: '私は毎日水を飲みます。',
    fullReading: 'わたしは まいにち みずを のみます。',
    fullRomaji: 'Watashi wa mainichi mizu o nomimasu.',
    parts: ['私は', '毎日', '水を', '飲みます'],
    correctOrder: ['私は', '毎日', '水を', '飲みます'],
    grammarHintPt: 'Tópico (私 + は) ➔ Advérbio de tempo (毎日) ➔ Objeto (水 + を) ➔ Verbo no final (飲みます)'
  },
  {
    id: 's_2',
    jlpt: 'N5',
    meaningPt: 'Por favor, espere um pouco.',
    fullJp: 'ちょっと待ってください。',
    fullReading: 'ちょっと まってください。',
    fullRomaji: 'Chotto matte kudasai.',
    parts: ['ちょっと', '待って', 'ください'],
    correctOrder: ['ちょっと', '待って', 'ください'],
    grammarHintPt: 'Advérbio (ちょっと) ➔ Verbo na forma-te (待って) ➔ ください'
  },
  {
    id: 's_3',
    jlpt: 'N5',
    meaningPt: 'Eu vou para o Japão amanhã.',
    fullJp: '明日日本へ行きます。',
    fullReading: 'あした にほんへ いきます。',
    fullRomaji: 'Ashita nihon e ikimasu.',
    parts: ['明日', '日本へ', '行きます'],
    correctOrder: ['明日', '日本へ', '行きます'],
    grammarHintPt: 'Tempo (明日) ➔ Destino (日本 + へ) ➔ Verbo de deslocamento (行きます)'
  },
  {
    id: 's_n5_4',
    jlpt: 'N5',
    meaningPt: 'Posso tirar uma foto aqui?',
    fullJp: 'ここで写真を撮ってもいいですか。',
    fullReading: 'ここで しゃしんを とっても いいですか。',
    fullRomaji: 'Koko de shashin o totte mo ii desu ka.',
    parts: ['ここで', '写真を', '撮っても', 'いいですか'],
    correctOrder: ['ここで', '写真を', '撮っても', 'いいですか'],
    grammarHintPt: 'Local de ação (ここで) ➔ Objeto (写真を) ➔ Permissão (Forma-TE + もいいですか)'
  },

  // ===================== N4 SENTENCES =====================
  {
    id: 's_4',
    jlpt: 'N4',
    meaningPt: 'Eu tenho que estudar kanji.',
    fullJp: '漢字を勉強しなければなりません。',
    fullReading: 'かんじを べんきょう しなければ なりません。',
    fullRomaji: 'Kanji o benkyou shinakereba narimasen.',
    parts: ['漢字を', '勉強', 'しなければ', 'なりません'],
    correctOrder: ['漢字を', '勉強', 'しなければ', 'なりません'],
    grammarHintPt: 'Objeto (漢字を) ➔ Verbo Suru na forma de obrigação (~shinakereba narimasen)'
  },
  {
    id: 's_5',
    jlpt: 'N4',
    meaningPt: 'Você já comeu sushi?',
    fullJp: '寿司を食べたことがありますか。',
    fullReading: 'すしを たべた ことが ありますか。',
    fullRomaji: 'Sushi o tabeta koto ga arimasu ka.',
    parts: ['寿司を', '食べた', 'ことが', 'ありますか'],
    correctOrder: ['寿司を', '食べた', 'ことが', 'ありますか'],
    grammarHintPt: 'Objeto (寿司を) ➔ Passado informal (食べた) ➔ koto ga arimasu ka'
  },
  {
    id: 's_n4_6',
    jlpt: 'N4',
    meaningPt: 'Pretendo fazer intercâmbio no Japão no ano que vem.',
    fullJp: '来年日本へ留学するつもりです。',
    fullReading: 'らいねん にほんへ りゅうがくする つもりです。',
    fullRomaji: 'Rainen nihon e ryuugaku suru tsumori desu.',
    parts: ['来年', '日本へ', '留学する', 'つもりです'],
    correctOrder: ['来年', '日本へ', '留学する', 'つもりです'],
    grammarHintPt: 'Tempo (来年) ➔ Destino (日本へ) ➔ Verbo Dicionário (留学する) ➔ つもりです'
  },

  // ===================== N3 SENTENCES =====================
  {
    id: 's_6',
    jlpt: 'N3',
    meaningPt: 'Para resolver o problema, é preciso informação.',
    fullJp: '問題を解決するために情報が必要です。',
    fullReading: 'もんだいを かいけつするために じょうほうが ひつようです。',
    fullRomaji: 'Mondai o kaiketsu suru tame ni jouhou ga hitsuyou desu.',
    parts: ['問題を', '解決するために', '情報が', '必要です'],
    correctOrder: ['問題を', '解決するために', '情報が', '必要です'],
    grammarHintPt: 'Objetivo (~tame ni) ➔ Sujeito com partícula ga ➔ Hitsuyou desu'
  },
  {
    id: 's_n3_7',
    jlpt: 'N3',
    meaningPt: 'Graças ao professor, passei no exame.',
    fullJp: '先生のおかげで試験に合格できました。',
    fullReading: 'せんせいの おかげで しけんに ごうかく できました。',
    fullRomaji: 'Sensei no okage de shiken ni goukaku dekimashita.',
    parts: ['先生の', 'おかげで', '試験に', '合格できました'],
    correctOrder: ['先生の', 'おかげで', '試験に', '合格できました'],
    grammarHintPt: 'Gratidão por causa benéfica (~no okage de) ➔ Alvo do exame (試験に) ➔ Forma potencial passada'
  },
  {
    id: 's_n3_8',
    jlpt: 'N3',
    meaningPt: 'Por favor, coma enquanto a comida ainda está quente.',
    fullJp: '料理が温かいうちに食べてください。',
    fullReading: 'りょうりが あたたかいうちに たべてください。',
    fullRomaji: 'Ryouri ga atatakai uchi ni tabete kudasai.',
    parts: ['料理が', '温かい', 'うちに', '食べてください'],
    correctOrder: ['料理が', '温かい', 'うちに', '食べてください'],
    grammarHintPt: 'Sujeito (料理が) ➔ Estado favorável com Adjetivo-I + うちに ➔ Pedido (食べてください)'
  },

  // ===================== N2 SENTENCES =====================
  {
    id: 's_n2_1',
    jlpt: 'N2',
    meaningPt: 'Como amanhã é a prova, não posso faltar de jeito nenhum.',
    fullJp: '明日は試験があるから休むわけにはいかない。',
    fullReading: 'あしたは しけんが あるから やすむ わけには いかない。',
    fullRomaji: 'Ashita wa shiken ga aru kara yasumu wake ni wa ikanai.',
    parts: ['明日は', '試験があるから', '休む', 'わけには', 'いかない'],
    correctOrder: ['明日は', '試験があるから', '休む', 'わけには', 'いかない'],
    grammarHintPt: 'Tópico + Justificativa ➔ Verbo forma dicionário + わけにはいかない (impossibilidade social/moral)'
  },
  {
    id: 's_n2_2',
    jlpt: 'N2',
    meaningPt: 'Desenvolvemos a estratégia com base na pesquisa de dados.',
    fullJp: 'データ調査に基づいて戦略を開発しました。',
    fullReading: 'データちょうさに もとづいて せんりゃくを かいはつ しました。',
    fullRomaji: 'Deeta chousa ni motozuite senryaku o kaihatsu shimashita.',
    parts: ['データ調査に', '基づいて', '戦略を', '開発しました'],
    correctOrder: ['データ調査に', '基づいて', '戦略を', '開発しました'],
    grammarHintPt: 'Base ou alicerce (~ni motozuite) ➔ Objeto da estratégia ➔ Verbo de criação'
  },
  {
    id: 's_n2_3',
    jlpt: 'N2',
    meaningPt: 'A economia está melhorando gradualmente.',
    fullJp: '景気は少しずつ回復しつつある。',
    fullReading: 'けいきは すこしずつ かいふく しつつある。',
    fullRomaji: 'Keiki wa sukoshizutsu kaifuku shitsutsu aru.',
    parts: ['景気は', '少しずつ', '回復', 'しつつある'],
    correctOrder: ['景気は', '少しずつ', '回復', 'しつつある'],
    grammarHintPt: 'Tópico econômico ➔ Advérbio gradual ➔ Raiz verbal + 〜つつある (mudança em andamento contínuo)'
  },

  // ===================== N1 SENTENCES =====================
  {
    id: 's_n1_1',
    jlpt: 'N1',
    meaningPt: 'Não importa qual seja o motivo, a violência é imperdoável.',
    fullJp: '理由が何であれ暴力は許されない。',
    fullReading: 'りゆうが なにであれ ぼうりょくは ゆるされない。',
    fullRomaji: 'Riyuu ga nani de are bouryoku wa yurusarenai.',
    parts: ['理由が', '何であれ', '暴力は', '許されない'],
    correctOrder: ['理由が', '何であれ', '暴力は', '許されない'],
    grammarHintPt: 'Interrogativo + であれ (seja o que for / não importa o que) ➔ Tópico + Verbo na voz passiva negativa'
  },
  {
    id: 's_n1_2',
    jlpt: 'N1',
    meaningPt: 'Devido ao grande tufão, o evento foi forçado ao cancelamento.',
    fullJp: '大型台風のためイベントは中止を余儀なくされた。',
    fullReading: 'おおがたたいふうのため イベントは ちゅうしを よぎなくされた。',
    fullRomaji: 'Oogata taifuu no tame ibento wa chuushi o yogi naku sareta.',
    parts: ['大型台風のため', 'イベントは', '中止を', '余儀なくされた'],
    correctOrder: ['大型台風のため', 'イベントは', '中止を', '余儀なくされた'],
    grammarHintPt: 'Causa inevitável ➔ Tópico ➔ Substantivo de ação + を余儀なくされた (forçado pelas circunstâncias)'
  },
  {
    id: 's_n1_3',
    jlpt: 'N1',
    meaningPt: 'É uma atitude inaceitável para alguém que é profissional.',
    fullJp: 'プロとしてあるまじき行為だ。',
    fullReading: 'プロとして あるまじき こういだ。',
    fullRomaji: 'Puro to shite arumajiki koui da.',
    parts: ['プロとして', 'あるまじき', '行為だ'],
    correctOrder: ['プロとして', 'あるまじき', '行為だ'],
    grammarHintPt: 'Posição/papel (〜として) ➔ あるまじき (inadmissível para quem ocupa tal posição) ➔ Substantivo'
  }
];
