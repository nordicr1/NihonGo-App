import fs from "fs";
import path from "path";

const extraKatakana = [
  // Dakuon (Ga, Za, Da, Ba)
  { id: 'k_ga', char: 'ガ', romaji: 'ga', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ガラス', exampleReading: 'garasu', exampleMeaningPt: 'Vidro' },
  { id: 'k_gi', char: 'ギ', romaji: 'gi', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ギター', exampleReading: 'gitaa', exampleMeaningPt: 'Guitarra' },
  { id: 'k_gu', char: 'グ', romaji: 'gu', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'グラス', exampleReading: 'gurasu', exampleMeaningPt: 'Copo' },
  { id: 'k_ge', char: 'ゲ', romaji: 'ge', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ゲーム', exampleReading: 'geemu', exampleMeaningPt: 'Jogo' },
  { id: 'k_go', char: 'ゴ', romaji: 'go', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ゴルフ', exampleReading: 'gorufu', exampleMeaningPt: 'Golfe' },

  { id: 'k_za', char: 'ザ', romaji: 'za', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'デザイン', exampleReading: 'dezain', exampleMeaningPt: 'Design' },
  { id: 'k_ji', char: 'ジ', romaji: 'ji', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ジュース', exampleReading: 'juusu', exampleMeaningPt: 'Suco' },
  { id: 'k_zu', char: 'ズ', romaji: 'zu', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ズボン', exampleReading: 'zubon', exampleMeaningPt: 'Calça' },
  { id: 'k_ze', char: 'ゼ', romaji: 'ze', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ゼロ', exampleReading: 'zero', exampleMeaningPt: 'Zero' },
  { id: 'k_zo', char: 'ゾ', romaji: 'zo', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ゾンビ', exampleReading: 'zonbi', exampleMeaningPt: 'Zumbi' },

  { id: 'k_da', char: 'ダ', romaji: 'da', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ダンス', exampleReading: 'dansu', exampleMeaningPt: 'Dança' },
  { id: 'k_dji', char: 'ヂ', romaji: 'ji', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ヂ', exampleReading: 'ji', exampleMeaningPt: '(raro)' },
  { id: 'k_dzu', char: 'ヅ', romaji: 'zu', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ヅ', exampleReading: 'zu', exampleMeaningPt: '(raro)' },
  { id: 'k_de', char: 'デ', romaji: 'de', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'デパート', exampleReading: 'depaato', exampleMeaningPt: 'Loja de departamento' },
  { id: 'k_do', char: 'ド', romaji: 'do', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ドア', exampleReading: 'doa', exampleMeaningPt: 'Porta' },

  { id: 'k_ba', char: 'バ', romaji: 'ba', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'バス', exampleReading: 'basu', exampleMeaningPt: 'Ônibus' },
  { id: 'k_bi', char: 'ビ', romaji: 'bi', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ビール', exampleReading: 'biiru', exampleMeaningPt: 'Cerveja' },
  { id: 'k_bu', char: 'ブ', romaji: 'bu', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ブログ', exampleReading: 'burogu', exampleMeaningPt: 'Blog' },
  { id: 'k_be', char: 'ベ', romaji: 'be', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ベッド', exampleReading: 'beddo', exampleMeaningPt: 'Cama' },
  { id: 'k_bo', char: 'ボ', romaji: 'bo', type: 'katakana', category: 'dakuon', mnemonicPt: '', exampleWord: 'ボタン', exampleReading: 'botan', exampleMeaningPt: 'Botão' },

  // Handakuon (Pa)
  { id: 'k_pa', char: 'パ', romaji: 'pa', type: 'katakana', category: 'handakuon', mnemonicPt: '', exampleWord: 'パン', exampleReading: 'pan', exampleMeaningPt: 'Pão' },
  { id: 'k_pi', char: 'ピ', romaji: 'pi', type: 'katakana', category: 'handakuon', mnemonicPt: '', exampleWord: 'ピアノ', exampleReading: 'piano', exampleMeaningPt: 'Piano' },
  { id: 'k_pu', char: 'プ', romaji: 'pu', type: 'katakana', category: 'handakuon', mnemonicPt: '', exampleWord: 'プール', exampleReading: 'puuru', exampleMeaningPt: 'Piscina' },
  { id: 'k_pe', char: 'ペ', romaji: 'pe', type: 'katakana', category: 'handakuon', mnemonicPt: '', exampleWord: 'ペン', exampleReading: 'pen', exampleMeaningPt: 'Caneta' },
  { id: 'k_po', char: 'ポ', romaji: 'po', type: 'katakana', category: 'handakuon', mnemonicPt: '', exampleWord: 'ポケット', exampleReading: 'poketto', exampleMeaningPt: 'Bolso' },
];

let content = fs.readFileSync(path.join(process.cwd(), "src/data/kanaData.ts"), "utf-8");

// Append extraKatakana to KATAKANA_DATA array
const targetIndex = content.lastIndexOf("];");
let toInsert = "";
for (let i = 0; i < extraKatakana.length; i++) {
  toInsert += ",\n  " + JSON.stringify(extraKatakana[i]);
}

const newContent = content.slice(0, targetIndex) + toInsert + "\n" + content.slice(targetIndex);
fs.writeFileSync(path.join(process.cwd(), "src/data/kanaData.ts"), newContent, "utf-8");
console.log("Appended Katakana Dakuon/Handakuon!");
