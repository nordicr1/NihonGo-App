import fs from 'fs';
import path from 'path';

const nouns = [
  { w: 'ワイシャツ', r: 'ワイシャツ', rom: 'wai shatsu', m: 'camisa social' },
  { w: '山', r: 'やま', rom: 'yama', m: 'montanha' },
  { w: '八百屋', r: 'やおや', rom: 'yaoya', m: 'quitanda; vendedor de verduras' },
  { w: '野菜', r: 'やさい', rom: 'yasai', m: 'legumes; verduras' },
  { w: '休み', r: 'やすみ', rom: 'yasumi', m: 'descanso; folga; feriado' },
  { w: '八つ', r: 'やっつ', rom: 'yattsu', m: 'oito (objetos)' },
  { w: '四日', r: 'よっか', rom: 'yokka', m: 'dia 4 (do mês); quatro dias' },
  { w: '横', r: 'よこ', rom: 'yoko', m: 'lado; largura' },
  { w: '夜', r: 'よる', rom: 'yoru', m: 'noite' },
  { w: '四つ', r: 'よっつ', rom: 'yottsu', m: 'quatro (objetos)' },
  { w: '洋服', r: 'ようふく', rom: 'youfuku', m: 'roupas ocidentais' },
  { w: '八日', r: 'ようか', rom: 'youka', m: 'dia 8 (do mês); oito dias' },
  { w: '雪', r: 'ゆき', rom: 'yuki', m: 'neve' },
  { w: '昨夜', r: 'ゆうべ', rom: 'yuube', m: 'ontem à noite' },
  { w: '郵便局', r: 'ゆうびんきょく', rom: 'yuubinkyoku', m: 'correios' },
  { w: '夕方', r: 'ゆうがた', rom: 'yuugata', m: 'tarde; anoitecer' },
  { w: '夕飯', r: 'ゆうはん', rom: 'yuuhan', m: 'jantar' },
  { w: '有名', r: 'ゆうめい', rom: 'yuumei', m: 'famoso' },
  { w: '雑誌', r: 'ざっし', rom: 'zasshi', m: 'revista' },
  { w: '全部', r: 'ぜんぶ', rom: 'zenbu', m: 'tudo; todo' },
  { w: 'ゼロ', r: 'ゼロ', rom: 'zero', m: 'zero' },
  { w: 'ズボン', r: 'ズボン', rom: 'zubon', m: 'calça' }
];

const examples = {
  'ワイシャツ': { jp: '白いワイシャツを着ます。', r: 'しろい ワイシャツを きます。', rom: 'shiroi wai shatsu o kimasu.', pt: 'Visto uma camisa social branca.' },
  '山': { jp: '山に登ります。', r: 'やまに のぼります。', rom: 'yama ni noborimasu.', pt: 'Subo a montanha.' },
  '八百屋': { jp: '八百屋で野菜を買います。', r: 'やおやで やさいを かいます。', rom: 'yaoya de yasai o kaimasu.', pt: 'Compro vegetais na quitanda.' },
  '野菜': { jp: '毎日野菜を食べます。', r: 'まいにち やさいを たべます。', rom: 'mainichi yasai o tabemasu.', pt: 'Como vegetais todos os dias.' },
  '休み': { jp: '明日は学校が休みです。', r: 'あしたは がっこうが やすみです。', rom: 'ashita wa gakkou ga yasumi desu.', pt: 'Amanhã não tem escola (é folga/feriado).' },
  '八つ': { jp: 'りんごが八つあります。', r: 'りんごが やっつ あります。', rom: 'ringo ga yattsu arimasu.', pt: 'Há oito maçãs.' },
  '四日': { jp: '三月四日に旅行します。', r: 'さんがつ よっかに りょこうします。', rom: 'sangatsu yokka ni ryokoushimasu.', pt: 'Vou viajar no dia quatro de março.' },
  '横': { jp: '私の横に座ってください。', r: 'わたしの よこに すわってください。', rom: 'watashi no yoko ni suwatte kudasai.', pt: 'Sente-se ao meu lado, por favor.' },
  '夜': { jp: '夜はよく寝ます。', r: 'よるは よく ねます。', rom: 'yoru wa yoku nemasu.', pt: 'Durmo bem à noite.' },
  '四つ': { jp: 'みかんを四つ買いました。', r: 'みかんを よっつ かいました。', rom: 'mikan o yottsu kaimashita.', pt: 'Comprei quatro tangerinas.' },
  '洋服': { jp: '新しい洋服を買いたいです。', r: 'あたらしい ようふくを かいたいです。', rom: 'atarashii youfuku o kaitai desu.', pt: 'Quero comprar roupas novas.' },
  '八日': { jp: '八日後に帰ります。', r: 'ようかごに かえります。', rom: 'youkago ni kaerimasu.', pt: 'Voltarei daqui a oito dias.' },
  '雪': { jp: '冬は雪が降ります。', r: 'ふゆは ゆきが ふります。', rom: 'fuyu wa yuki ga furimasu.', pt: 'No inverno neva (cai neve).' },
  '昨夜': { jp: '昨夜、友達と食事しました。', r: 'ゆうべ、ともだちと しょくじしました。', rom: 'yuube, tomodachi to shokujishimashita.', pt: 'Ontem à noite, comi com um amigo.' },
  '郵便局': { jp: '郵便局で手紙を出します。', r: 'ゆうびんきょくで てがみを だします。', rom: 'yuubinkyoku de tegami o dashimasu.', pt: 'Envio a carta nos correios.' },
  '夕方': { jp: '夕方に雨が降りました。', r: 'ゆうがたに あめが ふりました。', rom: 'yuugata ni ame ga furimashita.', pt: 'Choveu à tarde (ao anoitecer).' },
  '夕飯': { jp: '今日の夕飯は何ですか。', r: 'きょうの ゆうはんは なんですか。', rom: 'kyou no yuuhan wa nan desu ka.', pt: 'O que tem para o jantar de hoje?' },
  '有名': { jp: '彼は有名な歌手です。', r: 'かれは ゆうめいな かしゅです。', rom: 'kare wa yuumei na kashu desu.', pt: 'Ele é um cantor famoso.' },
  '雑誌': { jp: '本屋で雑誌を買いました。', r: 'ほんやで ざっしを かいました。', rom: 'honya de zasshi o kaimashita.', pt: 'Comprei uma revista na livraria.' },
  '全部': { jp: 'ケーキを全部食べました。', r: 'ケーキを ぜんぶ たべました。', rom: 'keeki o zenbu tabemashita.', pt: 'Comi o bolo todo.' },
  'ゼロ': { jp: 'テストの点数はゼロでした。', r: 'テストの てんすうは ゼロでした。', rom: 'tesuto no tensuu wa zero deshita.', pt: 'A nota da prova foi zero.' },
  'ズボン': { jp: '黒いズボンを履いています。', r: 'くろい ズボンを はいています。', rom: 'kuroi zubon o haiteimasu.', pt: 'Estou vestindo uma calça preta.' }
};

const filePath = path.join(process.cwd(), 'src/data/vocabN5.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

const newObjects = nouns.map((n, i) => {
  const ex = examples[n.w] || {
    jp: "Exemplo",
    reading: "...",
    rom: "...",
    pt: "..."
  };
  
  const safePt = ex.pt.replace(/'/g, "\\'");

  return "  {\n" +
    "    id: 'n5_noun_batch5_" + Date.now() + "_" + i + "',\n" +
    "    word: '" + n.w + "',\n" +
    "    reading: '" + n.r + "',\n" +
    "    romaji: '" + n.rom + "',\n" +
    "    meaningPt: '" + n.m + "',\n" +
    "    category: 'substantivo',\n" +
    "    jlpt: 'N5',\n" +
    "    categoryLabelPt: 'Substantivo N5',\n" +
    "    exampleSentence: {\n" +
    "      jp: '" + ex.jp + "',\n" +
    "      reading: '" + ex.r + "',\n" +
    "      romaji: '" + ex.rom + "',\n" +
    "      meaningPt: '" + safePt + "'\n" +
    "    }\n" +
    "  }";
}).join(',\n');

fileContent = fileContent.replace(
  /export const VOCAB_N5: VocabItem\[\] = \[/,
  "export const VOCAB_N5: VocabItem[] = [\n" + newObjects + ",\n"
);

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('Added final N5 Nouns to vocabN5.ts successfully!');
