import fs from 'fs';

let content = fs.readFileSync('./src/components/HomeHub.tsx', 'utf8');

content = content.replace(
  /\| 'conversation'\) => void;/,
  "| 'conversation' | 'rpg') => void;"
);

// We need to inject the RPG card. Let's find GamesHub or ConversationHub card.
const rpgCard = `
            {/* RPG Battle */}
            <button
              onClick={() => onTabChange('rpg')}
              className="bg-indigo-600 hover:bg-indigo-500 p-6 rounded-2xl flex items-center justify-between group transition-all hover:scale-105 shadow-xl text-left"
            >
              <div>
                <h3 className="font-black text-xl text-white flex items-center gap-2">
                  <span className="text-2xl">⚔️</span> Batalha RPG
                </h3>
                <p className="text-indigo-200 text-sm mt-1">Lute contra monstros usando Kanjis</p>
              </div>
            </button>
`;

content = content.replace(
  /\{\/\* Jogos \*\/\}/,
  rpgCard + '\n            {/* Jogos */}'
);

fs.writeFileSync('./src/components/HomeHub.tsx', content, 'utf8');
