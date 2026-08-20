import fs from "fs";
import path from "path";

const extraHiraganaYoon = [
  { id: 'h_gya', char: 'ぎゃ', romaji: 'gya', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'ぎゃく', exampleReading: 'gyaku', exampleMeaningPt: 'Inverso' },
  { id: 'h_gyu', char: 'ぎゅ', romaji: 'gyu', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'ぎゅうにゅう', exampleReading: 'gyuunyuu', exampleMeaningPt: 'Leite' },
  { id: 'h_gyo', char: 'ぎょ', romaji: 'gyo', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'きんぎょ', exampleReading: 'kingyo', exampleMeaningPt: 'Peixinho dourado' },
  { id: 'h_ja', char: 'じゃ', romaji: 'ja', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'じゃま', exampleReading: 'jama', exampleMeaningPt: 'Obstáculo' },
  { id: 'h_ju', char: 'じゅ', romaji: 'ju', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'じゅぎょう', exampleReading: 'jugyou', exampleMeaningPt: 'Aula' },
  { id: 'h_jo', char: 'じょ', romaji: 'jo', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'じょせい', exampleReading: 'josei', exampleMeaningPt: 'Mulher' },
  { id: 'h_nya', char: 'にゃ', romaji: 'nya', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'にゃんこ', exampleReading: 'nyanko', exampleMeaningPt: 'Gatinho' },
  { id: 'h_nyu', char: 'にゅ', romaji: 'nyu', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'にゅうがく', exampleReading: 'nyuugaku', exampleMeaningPt: 'Ingresso na escola' },
  { id: 'h_nyo', char: 'にょ', romaji: 'nyo', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'にょうぼう', exampleReading: 'nyoubou', exampleMeaningPt: 'Esposa' },
  { id: 'h_hya', char: 'ひゃ', romaji: 'hya', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'ひゃく', exampleReading: 'hyaku', exampleMeaningPt: 'Cem' },
  { id: 'h_hyu', char: 'ひゅ', romaji: 'hyu', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'ひゅうひゅう', exampleReading: 'hyuuhyuu', exampleMeaningPt: 'Zumbido (vento)' },
  { id: 'h_hyo', char: 'ひょ', romaji: 'hyo', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'ひょう', exampleReading: 'hyou', exampleMeaningPt: 'Tabela / Leopardo' },
  { id: 'h_bya', char: 'びゃ', romaji: 'bya', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'びゃくや', exampleReading: 'byakuya', exampleMeaningPt: 'Sol da meia-noite' },
  { id: 'h_byu', char: 'びゅ', romaji: 'byu', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'びゅんびゅん', exampleReading: 'byunbyun', exampleMeaningPt: 'Velozmente' },
  { id: 'h_byo', char: 'びょ', romaji: 'byo', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'びょういん', exampleReading: 'byouin', exampleMeaningPt: 'Hospital' },
  { id: 'h_pya', char: 'ぴゃ', romaji: 'pya', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'ぴゃ', exampleReading: 'pya', exampleMeaningPt: '(onomatopeia)' },
  { id: 'h_pyu', char: 'ぴゅ', romaji: 'pyu', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'ぴゅーぴゅー', exampleReading: 'pyuupyuu', exampleMeaningPt: '(som do vento)' },
  { id: 'h_pyo', char: 'ぴょ', romaji: 'pyo', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'はっぴょう', exampleReading: 'happyou', exampleMeaningPt: 'Apresentação' },
  { id: 'h_mya', char: 'みゃ', romaji: 'mya', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'みゃく', exampleReading: 'myaku', exampleMeaningPt: 'Pulso' },
  { id: 'h_myu', char: 'みゅ', romaji: 'myu', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'みゅーじしゃん', exampleReading: 'myuujishan', exampleMeaningPt: 'Músico' },
  { id: 'h_myo', char: 'みょ', romaji: 'myo', type: 'hiragana', category: 'yoon', mnemonicPt: '', exampleWord: 'みょうじ', exampleReading: 'myouji', exampleMeaningPt: 'Sobrenome' },
];

const extraKatakanaYoon = [
  { id: 'k_kya', char: 'キャ', romaji: 'kya', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'キャベツ', exampleReading: 'kyabetsu', exampleMeaningPt: 'Repolho' },
  { id: 'k_kyu', char: 'キュ', romaji: 'kyu', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'キュウリ', exampleReading: 'kyuuri', exampleMeaningPt: 'Pepino' },
  { id: 'k_kyo', char: 'キョ', romaji: 'kyo', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'キョロキョロ', exampleReading: 'kyorokyoro', exampleMeaningPt: 'Olhar ao redor' },
  { id: 'k_gya', char: 'ギャ', romaji: 'gya', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ギャグ', exampleReading: 'gyagu', exampleMeaningPt: 'Piada' },
  { id: 'k_gyu', char: 'ギュ', romaji: 'gyu', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ギュッと', exampleReading: 'gyutto', exampleMeaningPt: 'Apertado' },
  { id: 'k_gyo', char: 'ギョ', romaji: 'gyo', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ギョーザ', exampleReading: 'gyooza', exampleMeaningPt: 'Guioza' },
  { id: 'k_sha', char: 'シャ', romaji: 'sha', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'シャツ', exampleReading: 'shatsu', exampleMeaningPt: 'Camisa' },
  { id: 'k_shu', char: 'シュ', romaji: 'shu', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'シューズ', exampleReading: 'shuuzu', exampleMeaningPt: 'Sapatos' },
  { id: 'k_sho', char: 'ショ', romaji: 'sho', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ショップ', exampleReading: 'shoppu', exampleMeaningPt: 'Loja' },
  { id: 'k_ja', char: 'ジャ', romaji: 'ja', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ジャム', exampleReading: 'jamu', exampleMeaningPt: 'Geleia' },
  { id: 'k_ju', char: 'ジュ', romaji: 'ju', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ジュース', exampleReading: 'juusu', exampleMeaningPt: 'Suco' },
  { id: 'k_jo', char: 'ジョ', romaji: 'jo', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ジョギング', exampleReading: 'jogingu', exampleMeaningPt: 'Caminhada/Jogging' },
  { id: 'k_cha', char: 'チャ', romaji: 'cha', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'チャンス', exampleReading: 'chansu', exampleMeaningPt: 'Chance' },
  { id: 'k_chu', char: 'チュ', romaji: 'chu', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'チューリップ', exampleReading: 'chuurrippu', exampleMeaningPt: 'Tulipa' },
  { id: 'k_cho', char: 'チョ', romaji: 'cho', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'チョコ', exampleReading: 'choko', exampleMeaningPt: 'Chocolate' },
  { id: 'k_nya', char: 'ニャ', romaji: 'nya', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ニャー', exampleReading: 'nyaa', exampleMeaningPt: 'Miau' },
  { id: 'k_nyu', char: 'ニュ', romaji: 'nyu', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ニュース', exampleReading: 'nyuusu', exampleMeaningPt: 'Notícia' },
  { id: 'k_nyo', char: 'ニョ', romaji: 'nyo', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ニョッキ', exampleReading: 'nyokki', exampleMeaningPt: 'Nhoque' },
  { id: 'k_hya', char: 'ヒャ', romaji: 'hya', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ヒャッホー', exampleReading: 'hyahhoo', exampleMeaningPt: 'Ihuuu (Grito)' },
  { id: 'k_hyu', char: 'ヒュ', romaji: 'hyu', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ヒューズ', exampleReading: 'hyuuzu', exampleMeaningPt: 'Fusível' },
  { id: 'k_hyo', char: 'ヒョ', romaji: 'hyo', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ヒョウ', exampleReading: 'hyou', exampleMeaningPt: 'Leopardo' },
  { id: 'k_bya', char: 'ビャ', romaji: 'bya', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ビャクシン', exampleReading: 'byakushin', exampleMeaningPt: 'Zimbro (planta)' },
  { id: 'k_byu', char: 'ビュ', romaji: 'byu', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ビュッフェ', exampleReading: 'byuffe', exampleMeaningPt: 'Buffet' },
  { id: 'k_byo', char: 'ビョ', romaji: 'byo', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ビョーク', exampleReading: 'byooku', exampleMeaningPt: 'Björk' },
  { id: 'k_pya', char: 'ピャ', romaji: 'pya', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ピャー', exampleReading: 'pyaa', exampleMeaningPt: '(Som de surpresa)' },
  { id: 'k_pyu', char: 'ピュ', romaji: 'pyu', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ピューレ', exampleReading: 'pyuure', exampleMeaningPt: 'Purê' },
  { id: 'k_pyo', char: 'ピョ', romaji: 'pyo', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ピョンピョン', exampleReading: 'pyonpyon', exampleMeaningPt: 'Pular (Coelho)' },
  { id: 'k_mya', char: 'ミャ', romaji: 'mya', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ミャンマー', exampleReading: 'myanmaa', exampleMeaningPt: 'Mianmar' },
  { id: 'k_myu', char: 'ミュ', romaji: 'myu', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ミュージック', exampleReading: 'myuujikku', exampleMeaningPt: 'Música' },
  { id: 'k_myo', char: 'ミョ', romaji: 'myo', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'ミョウバン', exampleReading: 'myouban', exampleMeaningPt: 'Alume' },
  { id: 'k_rya', char: 'リャ', romaji: 'rya', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'リャマ', exampleReading: 'ryama', exampleMeaningPt: 'Lhama' },
  { id: 'k_ryu', char: 'リュ', romaji: 'ryu', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'リュック', exampleReading: 'ryukku', exampleMeaningPt: 'Mochila' },
  { id: 'k_ryo', char: 'リョ', romaji: 'ryo', type: 'katakana', category: 'yoon', mnemonicPt: '', exampleWord: 'リョーシカ', exampleReading: 'ryooshika', exampleMeaningPt: '(Mat)ryoshka' },
];

let content = fs.readFileSync(path.join(process.cwd(), "src/data/kanaData.ts"), "utf-8");

const kataIndex = content.indexOf("export const KATAKANA_DATA");
if (kataIndex === -1) {
  console.error("Could not find KATAKANA_DATA");
  process.exit(1);
}

const hiraEndIndex = content.lastIndexOf("];", kataIndex);
let hiraToInsert = "";
for (let i = 0; i < extraHiraganaYoon.length; i++) {
  hiraToInsert += ",\n  " + JSON.stringify(extraHiraganaYoon[i]);
}

content = content.slice(0, hiraEndIndex) + hiraToInsert + "\n" + content.slice(hiraEndIndex);

const kataEndIndex = content.lastIndexOf("];");
let kataToInsert = "";
for (let i = 0; i < extraKatakanaYoon.length; i++) {
  kataToInsert += ",\n  " + JSON.stringify(extraKatakanaYoon[i]);
}

content = content.slice(0, kataEndIndex) + kataToInsert + "\n" + content.slice(kataEndIndex);

fs.writeFileSync(path.join(process.cwd(), "src/data/kanaData.ts"), content, "utf-8");
console.log("Appended missing Yoon to Hiragana and Katakana!");
