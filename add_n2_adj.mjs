import fs from 'fs';
import path from 'path';

const naAdjectivesN2 = [
  { word: '意地悪', romaji: 'ijiwaru', reading: 'いじわる', meaningPt: 'Maldoso, cruel', exJp: '彼は意地悪な人です。', exReading: 'かれ は いじわるな ひと です。', exRomaji: 'Kare wa ijiwaru na hito desu.', exPt: 'Ele é uma pessoa maldosa.' },
  { word: '真っ青', romaji: 'massao', reading: 'まっさお', meaningPt: 'Azul escuro, pálido', exJp: '顔が真っ青ですよ。', exReading: 'かお が まっさお です よ。', exRomaji: 'Kao ga massao desu yo.', exPt: 'O seu rosto está completamente pálido.' },
  { word: '真っ白', romaji: 'masshiro', reading: 'まっしろ', meaningPt: 'Branco puro, em branco', exJp: '雪で山が真っ白です。', exReading: 'ゆき で やま が まっしろ です。', exRomaji: 'Yuki de yama ga masshiro desu.', exPt: 'A montanha está branca de neve.' },
  { word: '透明', romaji: 'toumei', reading: 'とうめい', meaningPt: 'Transparente, claro', exJp: '透明なガラスのコップ。', exReading: 'とうめいな ガラス の コップ。', exRomaji: 'Toumei na garasu no koppu.', exPt: 'Um copo de vidro transparente.' }
];

const iAdjectivesN2 = [
  { word: '青白い', romaji: 'aojiroi', reading: 'あおじろい', meaningPt: 'Pálido', exJp: '彼女は青白い顔をしています。', exReading: 'かのじょ は あおじろい かお を しています。', exRomaji: 'Kanojo wa aojiroi kao o shite imasu.', exPt: 'Ela está com o rosto pálido.' }
];

function appendToFile(filePath, items, categoryId, categoryLabel) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\];?\s*$/, '');
  
  if (content.trim().length > 100 && !content.trim().endsWith(',')) {
     content += ',\n';
  }

  items.forEach((item, index) => {
    let idPrefix = categoryId === 'adjetivo_na' ? 'v_adj_na_n2_' : 'v_adj_i_n2_';
    
    let obj = `  {
    id: '${idPrefix}${index + 1}',
    word: '${item.word}',
    reading: '${item.reading}',
    romaji: '${item.romaji}',
    meaningPt: '${item.meaningPt}',
    category: '${categoryId}',
    jlpt: 'N2',
    categoryLabelPt: '${categoryLabel}',
    exampleSentence: {
      jp: '${item.exJp}',
      reading: '${item.exReading}',
      romaji: '${item.exRomaji}',
      meaningPt: '${item.exPt}'
    }
  }`;
    if (index < items.length - 1) {
      obj += ',';
    }
    content += obj + '\n';
  });
  
  content += `];\n`;
  fs.writeFileSync(filePath, content, 'utf8');
}

const naPath = path.join(process.cwd(), 'src', 'data', 'vocabAdjetivosNa.ts');
appendToFile(naPath, naAdjectivesN2, 'adjetivo_na', 'Adjetivo Na');

const iPath = path.join(process.cwd(), 'src', 'data', 'vocabAdjetivosI.ts');
appendToFile(iPath, iAdjectivesN2, 'adjetivo_i', 'Adjetivo I');

console.log("Appended Na and I adjectives N2 to files!");
