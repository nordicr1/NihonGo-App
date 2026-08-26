import fs from 'fs';
import path from 'path';

const files = [
  'vocabN5.ts',
  'vocabN4.ts',
  'vocabN3.ts',
  'vocabN2N1.ts',
  'vocabAdjetivosI.ts',
  'vocabAdjetivosNa.ts'
];

for (const f of files) {
  const p = path.join(process.cwd(), 'src', 'data', f);
  if (!fs.existsSync(p)) continue;

  let content = fs.readFileSync(p, 'utf8');

  // Simple string-based object extraction
  // Assuming each object starts with "  {" or "  {" and ends with "  }," or "  }"
  // This might be tricky because of nested braces in exampleSentence.
  
  // A better way: replace block by block using a regex that handles one level of nested braces for exampleSentence
  // { ... exampleSentence: { ... } ... }
  
  // We can use a regex that matches the object structure:
  // \{\s*(?:[^{}]|\{[^{}]*\})*\s*\}
  // Let's refine it:
  // const regex = /\{\s*id\s*:\s*['"]?[^'"]+['"]?[\s\S]*?(?:adjetivo_i|adjetivo_na)[\s\S]*?\exampleSentence\s*:\s*\{[\s\S]*?\}\s*\}(?:,)?/g;

  // Let's test this logic.
  let matches = 0;
  let newContent = content.replace(/\{\s*id\s*:\s*['"]?[^'"]+['"]?[\s\S]*?category\s*:\s*['"](?:adjetivo_i|adjetivo_na)['"][\s\S]*?exampleSentence\s*:\s*\{[^{}]*\}\s*\}(?:,\s*)?/g, (match) => {
    matches++;
    return ''; // remove it
  });

  // For JSON formatted vocabAdjetivos (using quotes for keys):
  newContent = newContent.replace(/\{\s*"id"\s*:\s*['"]?[^'"]+['"]?[\s\S]*?"category"\s*:\s*['"](?:adjetivo_i|adjetivo_na)['"][\s\S]*?"exampleSentence"\s*:\s*\{[^{}]*\}\s*\}(?:,\s*)?/g, (match) => {
    matches++;
    return ''; // remove it
  });

  // Clean up trailing commas before ];
  newContent = newContent.replace(/,\s*\];/g, '\n];');
  
  // If it's empty, format correctly
  if (newContent.includes('export const VOCAB_ADJ_NA: VocabItem[] = \n[\n\n];')) {
     newContent = newContent.replace('export const VOCAB_ADJ_NA: VocabItem[] = \n[\n\n];', 'export const VOCAB_ADJ_NA: VocabItem[] = [];');
  }

  fs.writeFileSync(p, newContent, 'utf8');
  console.log(`Processed ${f} - removed ${matches} adjectives`);
}
