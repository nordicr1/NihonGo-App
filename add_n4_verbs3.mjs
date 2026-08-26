import fs from 'fs';
import path from 'path';

const items = [
  { w: '役に立つ', r: 'やくにたつ', rom: 'yaku ni tatsu', m: 'ser útil; servir para algo', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '約束する', r: 'やくそくする', rom: 'yakusokusuru', m: 'prometer', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '止む', r: 'やむ', rom: 'yamu', m: 'parar (chuva, neve, vento)', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '痩せる', r: 'やせる', rom: 'yaseru', m: 'emagrecer', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '汚れる', r: 'よごれる', rom: 'yogoreru', m: 'sujar-se', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '喜ぶ', r: 'よろこぶ', rom: 'yorokobu', m: 'alegrar-se; ficar feliz', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '寄る', r: 'よる', rom: 'yoru', m: 'dar uma passada; encostar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '予習する', r: 'よしゅうする', rom: 'yoshuusuru', m: 'preparar-se para a aula', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '予定する', r: 'よていする', rom: 'yoteisuru', m: 'planejar; programar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '用意する', r: 'よういする', rom: 'youisuru', m: 'preparar; providenciar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '予約する', r: 'よやくする', rom: 'yoyakusuru', m: 'reservar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '揺れる', r: 'ゆれる', rom: 'yureru', m: 'tremer; balançar', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' }
];

const examples = {
  '役に立つ': { jp: 'この本は役に立ちます。', r: 'この ほんは やくにたちます。', rom: 'kono hon wa yaku ni tachimasu.', pt: 'Este livro é útil.' },
  '約束する': { jp: '明日行くことを約束します。', r: 'あした いく ことを やくそくします。', rom: 'ashita iku koto o yakusokushimasu.', pt: 'Prometo que irei amanhã.' },
  '止む': { jp: '雨が止みました。', r: 'あめが やみました。', rom: 'ame ga yamimashita.', pt: 'A chuva parou.' },
  '痩せる': { jp: 'ダイエットをして痩せました。', r: 'ダイエットを して やせました。', rom: 'daietto o shite yasemashita.', pt: 'Fiz dieta e emagreci.' },
  '汚れる': { jp: '服が汚れました。', r: 'ふくが よごれました。', rom: 'fuku ga yogoremashita.', pt: 'A roupa sujou.' },
  '喜ぶ': { jp: 'プレゼントを喜んでくれました。', r: 'プレゼントを よろこんでくれました。', rom: 'purezento o yorokonde kuremashita.', pt: 'Ele ficou feliz com o presente.' },
  '寄る': { jp: '帰りにスーパーに寄ります。', r: 'かえりに スーパーに よります。', rom: 'kaeri ni suupaa ni yorimasu.', pt: 'Vou dar uma passada no supermercado na volta.' },
  '予習する': { jp: '明日の授業を予習します。', r: 'あしたの じゅぎょうを よしゅうします。', rom: 'ashita no jugyou o yoshuushimasu.', pt: 'Vou preparar a matéria da aula de amanhã.' },
  '予定する': { jp: '旅行を予定しています。', r: 'りょこうを よていしています。', rom: 'ryokou o yoteishiteimasu.', pt: 'Estou planejando uma viagem.' },
  '用意する': { jp: '食事を用意します。', r: 'しょくじを よういします。', rom: 'shokuji o youishimasu.', pt: 'Vou preparar a refeição.' },
  '予約する': { jp: 'レストランを予約します。', r: 'レストランを よやくします。', rom: 'resutoran o yoyakushimasu.', pt: 'Vou reservar o restaurante.' },
  '揺れる': { jp: '地震で家が揺れました。', r: 'じしんで いえが ゆれました。', rom: 'jishin de ie ga yuremashita.', pt: 'A casa tremeu com o terremoto.' }
};

const filePath = path.join(process.cwd(), 'src/data/vocabN4.ts');
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
    "    id: 'n4_verb_batch3_" + Date.now() + "_" + i + "',\n" +
    "    word: '" + n.w + "',\n" +
    "    reading: '" + n.r.replace(/'/g, "\\'") + "',\n" +
    "    romaji: '" + n.rom.replace(/'/g, "\\'") + "',\n" +
    "    meaningPt: '" + n.m.replace(/'/g, "\\'") + "',\n" +
    "    category: '" + n.cat + "',\n" +
    "    jlpt: 'N4',\n" +
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
  /export const VOCAB_N4: VocabItem\[\] = \[/,
  "export const VOCAB_N4: VocabItem[] = [\n" + newObjects + ",\n"
);

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('Added 12 more N4 Verbs to vocabN4.ts successfully!');
