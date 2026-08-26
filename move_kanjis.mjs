import fs from 'fs';
import path from 'path';

const kanjisToMove = ["腕", "湾", "和", "論", "録", "老", "労", "路", "連", "練", "恋", "列", "歴", "齢", "零", "礼", "冷", "例", "令", "類", "涙", "輪", "緑", "領", "量", "良", "療", "涼", "両", "了"];

const dataPathN3 = path.join(process.cwd(), 'src/data/kanjiN3.ts');
const dataPathN4 = path.join(process.cwd(), 'src/data/kanjiN4.ts');
const dataPathN2 = path.join(process.cwd(), 'src/data/kanjiN2N1.ts');

let n3Content = fs.readFileSync(dataPathN3, 'utf-8');
let n4Content = fs.readFileSync(dataPathN4, 'utf-8');
let n2Content = fs.readFileSync(dataPathN2, 'utf-8');

// Regex to match kanji object blocks
const extractRegex = /\{\s*id:\s*'[^']+',\s*kanji:\s*'([^']+)'[\s\S]*?\},?\n?/g;

let extractedBlocks = [];

function processFile(content) {
  let newContent = content.replace(extractRegex, (match, kanjiChar) => {
    if (kanjisToMove.includes(kanjiChar)) {
      // Save it
      let fixedBlock = match.replace(/,?$/, ''); // remove trailing comma/newline
      fixedBlock = fixedBlock.replace(/jlpt:\s*'N[34]'/, "jlpt: 'N2'");
      extractedBlocks.push(fixedBlock);
      return ''; // remove from file
    }
    return match; // keep as is
  });
  return newContent;
}

n3Content = processFile(n3Content);
n4Content = processFile(n4Content);

// Append to N2
if (extractedBlocks.length > 0) {
  const blocksStr = extractedBlocks.join(',\n');
  n2Content = n2Content.replace('];', `,\n${blocksStr}\n];`);
}

// Fix commas that might have been broken (e.g. trailing commas before array end)
n3Content = n3Content.replace(/,\s*\];/g, '\n];');
n4Content = n4Content.replace(/,\s*\];/g, '\n];');
n2Content = n2Content.replace(/,\s*\];/g, '\n];');

fs.writeFileSync(dataPathN3, n3Content, 'utf-8');
fs.writeFileSync(dataPathN4, n4Content, 'utf-8');
fs.writeFileSync(dataPathN2, n2Content, 'utf-8');

console.log(`Moved ${extractedBlocks.length} kanjis to N2!`);
