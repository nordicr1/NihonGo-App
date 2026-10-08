import fs from 'fs';

let content = fs.readFileSync('./src/App.tsx', 'utf8');

content = content.replace(
  /\{currentTab === 'konbini' && <KonbiniSimulator onGainXp=\{handleGainXp\} \/>\}/,
  "{currentTab === 'konbini' && <KonbiniSimulator onGainXp={handleGainXp} onLoseHeart={handleLoseHeart} />}"
);

fs.writeFileSync('./src/App.tsx', content, 'utf8');
