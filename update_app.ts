import fs from 'fs';

let content = fs.readFileSync('./src/App.tsx', 'utf8');

content = content.replace(
  /\| 'conversation'/g, 
  "| 'conversation' | 'rpg'"
);

content = content.replace(
  /import { ConversationHub } from '\.\/components\/ConversationHub';/,
  "import { ConversationHub } from './components/ConversationHub';\nimport { RpgBattleHub } from './components/RpgBattleHub';"
);

content = content.replace(
  /\{currentTab === 'analyzer' && <SentenceAnalyzer onGainXp=\{handleGainXp\} \/>\}/,
  "{currentTab === 'analyzer' && <SentenceAnalyzer onGainXp={handleGainXp} />}\n        {currentTab === 'rpg' && <RpgBattleHub userStats={userStats} onGainXp={handleGainXp} onLoseHeart={handleLoseHeart} />}"
);

fs.writeFileSync('./src/App.tsx', content, 'utf8');
