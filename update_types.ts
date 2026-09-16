import fs from 'fs';

['N5', 'N4', 'N3'].forEach(lvl => {
  const file = './src/data/jlpt' + lvl + 'TestData.ts';
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /type: 'vocab_reading' \| 'vocab_kanji' \| 'grammar' \| 'reading';/g,
    "type: 'vocab_reading' | 'vocab_kanji' | 'grammar' | 'reading' | 'sentence_builder';\n  correctSentence?: string;"
  );
  fs.writeFileSync(file, content, 'utf8');
});
