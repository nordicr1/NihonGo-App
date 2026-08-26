import fs from 'fs';
import path from 'path';

const items = [
  { w: '明ける', r: 'あける', rom: 'akeru', m: 'amanhecer', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '暗記する', r: 'あんきする', rom: 'ankisuru', m: 'memorizar; decorar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '分析する', r: 'ぶんせきする', rom: 'bunsekisuru', m: 'analisar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '出会う', r: 'であう', rom: 'deau', m: 'encontrar por acaso', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '読書する', r: 'どくしょする', rom: 'dokushosuru', m: 'ler (leitura)', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '努力する', r: 'どりょくする', rom: 'doryokusuru', m: 'esforçar-se', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '不足する', r: 'ふそくする', rom: 'fusokusuru', m: 'faltar; ser insuficiente', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '外出する', r: 'がいしゅつする', rom: 'gaishutsusuru', m: 'sair (de casa/escritório)', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '学問', r: 'がくもん', rom: 'gakumon', m: 'estudo; bolsa de estudos; aprendizagem', cat: 'substantivo', catLabel: 'Substantivo N3' },
  { w: '学習する', r: 'がくしゅうする', rom: 'gakushuusuru', m: 'aprender; estudar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '販売する', r: 'はんばいする', rom: 'hanbaisuru', m: 'vender; comercializar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '発明する', r: 'はつめいする', rom: 'hatsumeisuru', m: 'inventar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '外す', r: 'はずす', rom: 'hazusu', m: 'remover; tirar; errar o alvo', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '一言', r: 'ひとこと', rom: 'hitokoto', m: 'uma palavra; breve comentário', cat: 'substantivo', catLabel: 'Substantivo N3' },
  { w: '一致する', r: 'いっちする', rom: 'icchisuru', m: 'coincidir; concordar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '邪魔する', r: 'じゃまする', rom: 'jamasuru', m: 'atrapalhar; incomodar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '会合する', r: 'かいごうする', rom: 'kaigousuru', m: 'reunir-se (assembleia)', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '開始する', r: 'かいしする', rom: 'kaishisuru', m: 'iniciar; começar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '記念する', r: 'きねんする', rom: 'kinensuru', m: 'comemorar; celebrar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '気に入る', r: 'きにいる', rom: 'kiniiru', m: 'gostar; agradar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '記入する', r: 'きにゅうする', rom: 'kinyuusuru', m: 'preencher (formulário)', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '記憶する', r: 'きおくする', rom: 'kiokusuru', m: 'lembrar; memorizar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '期待する', r: 'きたいする', rom: 'kitaisuru', m: 'ter expectativa; esperar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '転ぶ', r: 'ころぶ', rom: 'korobu', m: 'cair; tropeçar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '訓練する', r: 'くんれんする', rom: 'kunrensuru', m: 'treinar; praticar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '協力する', r: 'きょうりょくする', rom: 'kyouryokusuru', m: 'cooperar; colaborar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '吸収する', r: 'きゅうしゅうする', rom: 'kyuushuusuru', m: 'absorver', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '学ぶ', r: 'まなぶ', rom: 'manabu', m: 'aprender; estudar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '満足する', r: 'まんぞくする', rom: 'manzokusuru', m: 'satisfazer-se', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '味方する', r: 'みかたする', rom: 'mikatasuru', m: 'ficar do lado; apoiar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '入場する', r: 'にゅうじょうする', rom: 'nyuujousuru', m: 'entrar (em recinto/evento)', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '収める', r: 'おさめる', rom: 'osameru', m: 'dedicar; pagar; armazenar', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '連続する', r: 'れんぞくする', rom: 'renzokusuru', m: 'continuar; suceder-se', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '利益', r: 'りえき', rom: 'rieki', m: 'lucro; benefício', cat: 'substantivo', catLabel: 'Substantivo N3' },
  { w: '留学する', r: 'りゅうがくする', rom: 'ryuugakusuru', m: 'estudar no exterior', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '左右する', r: 'さゆうする', rom: 'sayuusuru', m: 'influenciar; controlar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '成長する', r: 'せいちょうする', rom: 'seichousuru', m: 'crescer; desenvolver-se', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '刺激する', r: 'しげきする', rom: 'shigekisuru', m: 'estimular; incentivar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '進学する', r: 'しんがくする', rom: 'shingakusuru', m: 'avançar nos estudos (ir para faculdade)', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '使用する', r: 'しようする', rom: 'shiyousuru', m: 'usar; utilizar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '証明する', r: 'しょうめいする', rom: 'shoumeisuru', m: 'provar; certificar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '招待する', r: 'しょうたいする', rom: 'shoutaisuru', m: 'convidar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '集中する', r: 'しゅうちゅうする', rom: 'shuuchuusuru', m: 'concentrar-se', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '収穫する', r: 'しゅうかくする', rom: 'shuukakusuru', m: 'colher (safra/frutos)', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '徹夜する', r: 'てつやする', rom: 'tetsuyasuru', m: 'passar a noite em claro', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '取れる', r: 'とれる', rom: 'toreru', m: 'soltar-se; ser obtido', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '取り上げる', r: 'とりあげる', rom: 'toriageru', m: 'pegar; adotar (uma ideia)', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '通学する', r: 'つうがくする', rom: 'tsuugakusuru', m: 'fazer trajeto à escola', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '受け取る', r: 'うけとる', rom: 'uketoru', m: 'receber; aceitar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '運転する', r: 'うんてんする', rom: 'untensuru', m: 'dirigir; operar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '売れる', r: 'うれる', rom: 'ureru', m: 'vender bem', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '分ける', r: 'わける', rom: 'wakeru', m: 'dividir; separar', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '悪口', r: 'わるぐち', rom: 'waruguchi', m: 'insulto; falar mal', cat: 'substantivo', catLabel: 'Substantivo N3' },
  { w: '輸入する', r: 'ゆにゅうする', rom: 'yunyuusuru', m: 'importar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '輸出する', r: 'ゆしゅつする', rom: 'yushutsusuru', m: 'exportar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' }
];

const examples = {
  '明ける': { jp: '夜が明けました。', r: 'よるが あけました。', rom: 'yoru ga akemashita.', pt: 'O dia amanheceu.' },
  '暗記する': { jp: '単語を暗記します。', r: 'たんごを あんきします。', rom: 'tango o ankishimasu.', pt: 'Vou memorizar o vocabulário.' },
  '分析する': { jp: 'データを分析します。', r: 'データを ぶんせきします。', rom: 'deeta o bunsekishimasu.', pt: 'Analiso os dados.' },
  '出会う': { jp: '駅で古い友達に出会いました。', r: 'えきで ふるい ともだちに であいました。', rom: 'eki de furui tomodachi ni deaimashita.', pt: 'Encontrei por acaso um velho amigo na estação.' },
  '読書する': { jp: '週末は家で読書します。', r: 'しゅうまつは いえで どくしょします。', rom: 'shuumatsu wa ie de dokushoshimasu.', pt: 'No fim de semana, leio em casa.' },
  '努力する': { jp: '合格のために努力します。', r: 'ごうかくの ために どりょくします。', rom: 'goukaku no tame ni doryokushimasu.', pt: 'Esforço-me para ser aprovado.' },
  '不足する': { jp: '運動が不足しています。', r: 'うんどうが ふそくしています。', rom: 'undou ga fusokushiteimasu.', pt: 'Falta exercício físico.' },
  '外出する': { jp: '休日はよく外出します。', r: 'きゅうじつは よく がいしゅつします。', rom: 'kyuujitsu wa yoku gaishutsushimasu.', pt: 'Nos dias de folga, eu costumo sair.' },
  '学問': { jp: '彼は学問に励んでいます。', r: 'かれは がくもんに はげんでいます。', rom: 'kare wa gakumon ni hagendeimasu.', pt: 'Ele está se dedicando aos estudos (à erudição).' },
  '学習する': { jp: '新しい言語を学習します。', r: 'あたらしい げんごを がくしゅうします。', rom: 'atarashii gengo o gakushuushimasu.', pt: 'Vou aprender um novo idioma.' },
  '販売する': { jp: '新しい商品を販売します。', r: 'あたらしい しょうひんを はんばいします。', rom: 'atarashii shouhin o hanbaishimasu.', pt: 'Venderemos os novos produtos.' },
  '発明する': { jp: 'エジソンは電球を発明しました。', r: 'エジソンは でんきゅうを はつめいしました。', rom: 'ejison wa denkyuu o hatsumeishimashita.', pt: 'Edison inventou a lâmpada incandescente.' },
  '外す': { jp: '眼鏡を外します。', r: 'めがねを はずします。', rom: 'megane o hazushimasu.', pt: 'Tiro os óculos.' },
  '一言': { jp: '最後に一言お願いします。', r: 'さいごに ひとこと おねがいします。', rom: 'saigo ni hitokoto onegaishimasu.', pt: 'Por favor, diga umas breves palavras no final.' },
  '一致する': { jp: '意見が一致しました。', r: 'いけんが いっちしました。', rom: 'iken ga icchishimashita.', pt: 'Nossas opiniões coincidiram.' },
  '邪魔する': { jp: '仕事を邪魔しないでください。', r: 'しごとを じゃましないでください。', rom: 'shigoto o jama shinaide kudasai.', pt: 'Por favor, não atrapalhe o meu trabalho.' },
  '会合する': { jp: '明日、みんなで会合します。', r: 'あした、みんなで かいごうします。', rom: 'ashita, minna de kaigoushimasu.', pt: 'Amanhã nos reuniremos.' },
  '開始する': { jp: '試合を開始します。', r: 'しあいを かいしします。', rom: 'shiai o kaishishimasu.', pt: 'Iniciaremos a partida.' },
  '記念する': { jp: '結婚を記念して写真を撮りました。', r: 'けっこんを きねんして しゃしんを とりました。', rom: 'kekkon o kinenshite shashin o torimashita.', pt: 'Tiramos uma foto para comemorar o casamento.' },
  '気に入る': { jp: 'この靴が気に入りました。', r: 'この くつが きにいりました。', rom: 'kono kutsu ga kiniirimashita.', pt: 'Eu gostei deste sapato.' },
  '記入する': { jp: '用紙に名前を記入してください。', r: 'ようしに なまえを きにゅうしてください。', rom: 'youshi ni namae o kinyuushite kudasai.', pt: 'Por favor, preencha seu nome no formulário.' },
  '記憶する': { jp: 'パスワードを記憶します。', r: 'パスワードを きおくします。', rom: 'pasuwaado o kiokushimasu.', pt: 'Vou memorizar a senha.' },
  '期待する': { jp: '彼の活躍を期待しています。', r: 'かれの かつやくを きたいしています。', rom: 'kare no katsuyaku o kitaishiteimasu.', pt: 'Estou com expectativas (esperando) pelo sucesso dele.' },
  '転ぶ': { jp: '道で転んでしまいました。', r: 'みちで ころんでしまいました。', rom: 'michi de koronde shimaimashita.', pt: 'Acabei tropeçando e caindo na rua.' },
  '訓練する': { jp: '毎日、犬を訓練します。', r: 'まいにち、いぬを くんれんします。', rom: 'mainichi, inu o kunrenshimasu.', pt: 'Treino o cachorro todos os dias.' },
  '協力する': { jp: 'みんなで協力しましょう。', r: 'みんなで きょうりょくしましょう。', rom: 'minna de kyouryokushimashou.', pt: 'Vamos cooperar juntos.' },
  '吸収する': { jp: '植物は水を吸収します。', r: 'しょくぶつは みずを きゅうしゅうします。', rom: 'shokubutsu wa mizu o kyuushuushimasu.', pt: 'As plantas absorvem a água.' },
  '学ぶ': { jp: '大学で経済を学びます。', r: 'だいがくで けいざいを まなびます。', rom: 'daigaku de keizai o manabimasu.', pt: 'Estudo economia na universidade.' },
  '満足する': { jp: '結果に満足しています。', r: 'けっかに まんぞくしています。', rom: 'kekka ni manzokushiteimasu.', pt: 'Estou satisfeito com o resultado.' },
  '味方する': { jp: '私はあなたの味方です。', r: 'わたしは あなたの みかたです。', rom: 'watashi wa anata no mikata desu.', pt: 'Eu estou do seu lado (A frase usa como substantivo).' },
  '入場する': { jp: '会場に入場します。', r: 'かいじょうに にゅうじょうします。', rom: 'kaijou ni nyuujoushimasu.', pt: 'Vou entrar no local do evento.' },
  '収める': { jp: '成功を収めました。', r: 'せいこうを おさめました。', rom: 'seikou o osamemashita.', pt: 'Obteve sucesso.' },
  '連続する': { jp: '三日連続で雨が降っています。', r: 'みっか れんぞくで あめが ふっています。', rom: 'mikka renzoku de ame ga futteimasu.', pt: 'Está chovendo por três dias consecutivos.' },
  '利益': { jp: '会社の利益が上がりました。', r: 'かいしゃの りえきが あがりました。', rom: 'kaisha no rieki ga agarimashita.', pt: 'O lucro da empresa aumentou.' },
  '留学する': { jp: '来年、日本へ留学します。', r: 'らいねん、にほんへ りゅうがくします。', rom: 'rainen, nihon e ryuugakushimasu.', pt: 'No ano que vem, estudarei no Japão.' },
  '左右する': { jp: '天気が結果を左右します。', r: 'てんきが けっかを さゆうします。', rom: 'tenki ga kekka o sayuushimasu.', pt: 'O clima influencia no resultado.' },
  '成長する': { jp: '子供が成長しました。', r: 'こどもが せいちょうしました。', rom: 'kodomo ga seichoushimashita.', pt: 'A criança cresceu.' },
  '刺激する': { jp: '脳を刺激します。', r: 'のうを しげきします。', rom: 'nou o shigekishimasu.', pt: 'Vou estimular o cérebro.' },
  '進学する': { jp: '大学に進学します。', r: 'だいがくに しんがくします。', rom: 'daigaku ni shingakushimasu.', pt: 'Vou ingressar na universidade.' },
  '使用する': { jp: '辞書を使用します。', r: 'じしょを しようします。', rom: 'jisho o shiyoushimasu.', pt: 'Vou utilizar o dicionário.' },
  '証明する': { jp: '私が正しいことを証明します。', r: 'わたしが ただしい ことを しょうめいします。', rom: 'watashi ga tadashii koto o shoumeishimasu.', pt: 'Vou provar que estou certo.' },
  '招待する': { jp: '友達をパーティーに招待します。', r: 'ともだちを パーティーに しょうたいします。', rom: 'tomodachi o paatii ni shoutaishimasu.', pt: 'Convido amigos para a festa.' },
  '集中する': { jp: '勉強に集中します。', r: 'べんきょうに しゅうちゅうします。', rom: 'benkyou ni shuuchuushimasu.', pt: 'Concentro-me nos estudos.' },
  '収穫する': { jp: '米を収穫します。', r: 'こめを しゅうかくします。', rom: 'kome o shuukakushimasu.', pt: 'Vou colher o arroz.' },
  '徹夜する': { jp: '徹夜で勉強しました。', r: 'てつやで べんきょうしました。', rom: 'tetsuya de benkyoushimashita.', pt: 'Estudei a noite toda (passei a noite em claro).' },
  '取れる': { jp: 'ボタンが取れました。', r: 'ボタンが とれました。', rom: 'botan ga toremashita.', pt: 'O botão soltou-se.' },
  '取り上げる': { jp: '先生に携帯を取り上げられました。', r: 'せんせいに けいたいを とりあげられました。', rom: 'sensei ni keitai o toriageraremashita.', pt: 'Meu celular foi confiscado pelo professor.' },
  '通学する': { jp: '電車で通学しています。', r: 'でんしゃで つうがくしています。', rom: 'densha de tsuugakushiteimasu.', pt: 'Faço o trajeto escolar de trem.' },
  '受け取る': { jp: '荷物を受け取りました。', r: 'にもつを うけとりました。', rom: 'nimotsu o uketorimashita.', pt: 'Recebi a encomenda.' },
  '運転する': { jp: '車を運転します。', r: 'くるまを うんてんします。', rom: 'kuruma o untenshimasu.', pt: 'Dirijo o carro.' },
  '売れる': { jp: 'この本はよく売れます。', r: 'この ほんは よく うれます。', rom: 'kono hon wa yoku uremasu.', pt: 'Este livro vende bem.' },
  '分ける': { jp: 'ケーキを半分に分けます。', r: 'ケーキを はんぶんに わけます。', rom: 'keeki o hanbun ni wakemasu.', pt: 'Divido o bolo na metade.' },
  '悪口': { jp: '人の悪口を言ってはいけません。', r: 'ひとの わるぐちを いっては いけません。', rom: 'hito no waruguchi o ittewa ikemasen.', pt: 'Não se deve falar mal das pessoas.' },
  '輸入する': { jp: '外国から車を輸入します。', r: 'がいこくから くるまを ゆにゅうします。', rom: 'gaikoku kara kuruma o yunyuushimasu.', pt: 'Importamos carros do exterior.' },
  '輸出する': { jp: '日本は車を輸出します。', r: 'にほんは くるまを ゆしゅつします。', rom: 'nihon wa kuruma o yushutsushimasu.', pt: 'O Japão exporta carros.' }
};

const filePath = path.join(process.cwd(), 'src/data/vocabN3.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

const newObjects = items.map((n, i) => {
  const ex = examples[n.w] || {
    jp: "Exemplo",
    reading: "...",
    rom: "...",
    pt: "..."
  };
  
  const safePt = ex.pt.replace(/'/g, "\\'");
  const safeRom = ex.rom.replace(/'/g, "\\'");

  return "  {\n" +
    "    id: 'n3_verb_batch1_" + Date.now() + "_" + i + "',\n" +
    "    word: '" + n.w + "',\n" +
    "    reading: '" + n.r.replace(/'/g, "\\'") + "',\n" +
    "    romaji: '" + n.rom.replace(/'/g, "\\'") + "',\n" +
    "    meaningPt: '" + n.m.replace(/'/g, "\\'") + "',\n" +
    "    category: '" + n.cat + "',\n" +
    "    jlpt: 'N3',\n" +
    "    categoryLabelPt: '" + n.catLabel + "',\n" +
    "    exampleSentence: {\n" +
    "      jp: '" + ex.jp + "',\n" +
    "      reading: '" + ex.r.replace(/'/g, "\\'") + "',\n" +
    "      romaji: '" + safeRom + "',\n" +
    "      meaningPt: '" + safePt + "'\n" +
    "    }\n" +
    "  }";
}).join(',\n');

fileContent = fileContent.replace(
  /export const VOCAB_N3: VocabItem\[\] = \[/,
  "export const VOCAB_N3: VocabItem[] = [\n" + newObjects + ",\n"
);

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('Added 55 N3 Verbs to vocabN3.ts successfully!');
