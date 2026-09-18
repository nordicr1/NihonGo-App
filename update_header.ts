import fs from 'fs';

let content = fs.readFileSync('./src/components/Header.tsx', 'utf8');

content = content.replace(
  /\| 'conversation';/g,
  "| 'conversation' | 'rpg';"
);

content = content.replace(
  /\| 'conversation'\) => void;/g,
  "| 'conversation' | 'rpg') => void;"
);

// Check if we need to add a tab link in Header.tsx (like Home, Kana, Kanji)
// Let's see if the Header contains a nav for the tabs.
// Just to be safe we will let it be. Wait, the tabs are dynamically rendered or hardcoded?
// In the current file `Header.tsx`, there are usually buttons for the tabs. Let's inspect it.
fs.writeFileSync('./src/components/Header.tsx', content, 'utf8');
