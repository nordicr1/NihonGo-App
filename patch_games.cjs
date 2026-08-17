const fs = require('fs');

let content = fs.readFileSync('src/components/GamesHub.tsx', 'utf-8');

// 1. Update GameType
content = content.replace(
    "type GameType = 'memory' | 'sentence' | 'quiz' | 'rush';",
    "type GameType = 'memory' | 'sentence' | 'quiz' | 'rush' | 'missing-char' | 'spot-diff';"
);

// 2. Add Lookalikes constant
const lookalikes = `
const KANJI_LOOKALIKES = [
  { base: '待', diff: '特' }, { base: '日', diff: '曰' }, { base: '人', diff: '入' },
  { base: '千', diff: '干' }, { base: '右', diff: '石' }, { base: '牛', diff: '午' },
  { base: '土', diff: '士' }, { base: '王', diff: '玉' }, { base: '白', diff: '百' },
  { base: '大', diff: '犬' }, { base: '木', diff: '本' }, { base: '微', diff: '徴' },
  { base: '験', diff: '険' }, { base: '感', diff: '惑' }, { base: '鳥', diff: '烏' },
  { base: '未', diff: '末' }, { base: '瓜', diff: '爪' }, { base: '免', diff: '兎' },
  { base: '幸', diff: '辛' }, { base: '水', diff: '氷' }
];
`;
content = content.replace("export const GamesHub: React.FC<GamesHubProps> = ({ selectedJlpt: globalJlpt, onGainXp }) => {", lookalikes + "\nexport const GamesHub: React.FC<GamesHubProps> = ({ selectedJlpt: globalJlpt, onGainXp }) => {");

// 3. Add states
const states_to_add = `
  // ==================== 5. COMPLETAR PALAVRA STATE ====================
  const [wcTarget, setWcTarget] = useState<{ word: string, hiddenIdx: number, hiddenChar: string, options: string[], meaning: string, reading: string } | null>(null);
  const [wcScore, setWcScore] = useState(0);

  // ==================== 6. JOGO DOS 7 ERROS (KANJI) STATE ====================
  const [sdGrid, setSdGrid] = useState<{ char: string, isDiff: boolean }[]>([]);
  const [sdScore, setSdScore] = useState(0);
  const [sdTimer, setSdTimer] = useState(15);
  const [sdActive, setSdActive] = useState(false);
`;
content = content.replace(
  "// Initialize and filter games when localJlpt or activeGame changes",
  states_to_add + "\n  // Initialize and filter games when localJlpt or activeGame changes"
);

// 4. Add initializations in the useEffect
const init_hooks = `
    // 5. Completar Palavra
    generateWordCompletion();
    setWcScore(0);

    // 6. Spot the difference
    generateSpotDiff();
    setSdScore(0);
`;
content = content.replace(
  "generateRushQuestion();\n  }, [localJlpt, memoryCategory, rushMode]);",
  "generateRushQuestion();\n" + init_hooks + "\n  }, [localJlpt, memoryCategory, rushMode, activeGame]);"
);

// 5. Timer for Spot Diff
const sd_timer = `
  // Spot Diff timer ticker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (sdActive && sdTimer > 0) {
      interval = setInterval(() => {
        setSdTimer((prev) => {
          if (prev <= 1) {
            soundFX.playError();
            setSdActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [sdActive, sdTimer]);
`;
content = content.replace(
  "// ==================== MEMORY GAME LOGIC ====================",
  sd_timer + "\n  // ==================== MEMORY GAME LOGIC ===================="
);

// 6. Functions for the games
const game_funcs = `
  // ==================== COMPLETAR PALAVRA LOGIC ====================
  const generateWordCompletion = () => {
    const pool = localJlpt === 'ALL' ? VOCAB_DATA : VOCAB_DATA.filter(v => v.jlpt === localJlpt);
    const validPool = pool.filter(v => v.word.length > 1);
    const sourcePool = validPool.length > 0 ? validPool : VOCAB_DATA.filter(v => v.word.length > 1);

    if (sourcePool.length === 0) return;

    const target = sourcePool[Math.floor(Math.random() * sourcePool.length)];
    const hiddenIdx = Math.floor(Math.random() * target.word.length);
    const hiddenChar = target.word[hiddenIdx];

    // get 3 wrong options
    let wrongOptions = [];
    let attempts = 0;
    while(wrongOptions.length < 3 && attempts < 50) {
      attempts++;
      const randWord = VOCAB_DATA[Math.floor(Math.random() * VOCAB_DATA.length)].word;
      if(randWord.length > 0) {
         const randChar = randWord[Math.floor(Math.random() * randWord.length)];
         if(randChar !== hiddenChar && !wrongOptions.includes(randChar)) {
           wrongOptions.push(randChar);
         }
      }
    }

    const options = [hiddenChar, ...wrongOptions].sort(() => 0.5 - Math.random());
    setWcTarget({ word: target.word, hiddenIdx, hiddenChar, options, meaning: target.meaningPt, reading: target.reading });
  };

  const handleWcAnswer = (opt: string) => {
    if(!wcTarget) return;
    if(opt === wcTarget.hiddenChar) {
      soundFX.playSuccess();
      setWcScore(prev => prev + 10);
      onGainXp(10, \`Palavra Completa: \${wcTarget.word}\`);
      generateWordCompletion();
    } else {
      soundFX.playError();
      setWcScore(0);
      generateWordCompletion();
    }
  };

  // ==================== SPOT THE DIFFERENCE LOGIC ====================
  const generateSpotDiff = () => {
    const pair = KANJI_LOOKALIKES[Math.floor(Math.random() * KANJI_LOOKALIKES.length)];
    const size = 25; // 5x5 grid
    const diffIdx = Math.floor(Math.random() * size);
    const grid = Array.from({length: size}).map((_, i) => ({
      char: i === diffIdx ? pair.diff : pair.base,
      isDiff: i === diffIdx
    }));
    setSdGrid(grid);
    setSdTimer(10);
    setSdActive(true);
  };

  const handleSdAnswer = (isDiff: boolean) => {
    if(!sdActive) return;
    if(isDiff) {
      soundFX.playSuccess();
      setSdScore(prev => prev + 15);
      onGainXp(15, 'Encontrou o Kanji Diferente!');
      generateSpotDiff();
    } else {
      soundFX.playError();
      setSdActive(false);
    }
  };
`;
content = content.replace(
  "  return (",
  game_funcs + "\n  return ("
);

// 7. Update Tabs
const new_tabs = `[
              { id: 'memory', label: '🧠 Jogo da Memória' },
              { id: 'sentence', label: '📜 Montador de Frases' },
              { id: 'quiz', label: '🏆 Quiz JLPT' },
              { id: 'rush', label: '⚡ Rush' },
              { id: 'missing-char', label: '🔤 Palavra Oculta' },
              { id: 'spot-diff', label: '🕵️ 7 Erros Kanji' },
            ]`;
content = content.replace(/\[\s*\{\s*id:\s*'memory'[\s\S]*?\]/, new_tabs);

// 8. Render UI
const ui_missing_char = `
      {/* ========================================================================= */}
      {/* 5. COMPLETAR PALAVRA                                                      */}
      {/* ========================================================================= */}
      {activeGame === 'missing-char' && wcTarget && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-xl mx-auto text-center space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
             <h3 className="text-lg font-bold text-stone-800">Completar a Palavra</h3>
             <span className="text-emerald-600 font-bold text-sm">Score: {wcScore} XP</span>
          </div>

          <div className="py-6 space-y-4">
            <div className="text-xs text-stone-500 uppercase tracking-wider font-bold">Qual kanji/kana está faltando?</div>
            <div className="text-4xl sm:text-6xl font-black text-stone-900 tracking-widest font-serif flex justify-center gap-2">
              {wcTarget.word.split('').map((char, i) => (
                <span key={i} className={i === wcTarget.hiddenIdx ? "text-rose-500 border-b-4 border-rose-500 px-2" : ""}>
                  {i === wcTarget.hiddenIdx ? '?' : char}
                </span>
              ))}
            </div>
            <div className="text-sm text-stone-500 font-medium">
              Significado: <strong className="text-stone-700">{wcTarget.meaning.split('/')[0]}</strong>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {wcTarget.options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleWcAnswer(opt)}
                className="p-4 rounded-xl bg-stone-100 text-stone-900 text-2xl font-serif font-bold hover:bg-emerald-500 hover:text-white transition cursor-pointer shadow-sm active:scale-95"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
`;

const ui_spot_diff = `
      {/* ========================================================================= */}
      {/* 6. JOGO DOS 7 ERROS KANJI                                                */}
      {/* ========================================================================= */}
      {activeGame === 'spot-diff' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-xl mx-auto text-center space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h3 className="text-lg font-bold text-stone-800">Encontre o Kanji Diferente</h3>
            <div className="flex items-center gap-4 text-xs font-bold">
              <span className="text-rose-600 font-mono text-sm">⏳ {sdTimer}s</span>
              <span className="text-emerald-600">Acertos: {Math.floor(sdScore / 15)}</span>
            </div>
          </div>

          {sdActive ? (
            <div className="py-4">
              <p className="text-sm text-stone-500 mb-6 font-medium">Apenas 1 kanji é diferente. Encontre-o rápido!</p>
              <div className="grid grid-cols-5 gap-2 sm:gap-3 max-w-sm mx-auto">
                {sdGrid.map((cell, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSdAnswer(cell.isDiff)}
                    className="aspect-square rounded-lg bg-stone-100 border border-stone-200 text-stone-900 text-2xl sm:text-3xl font-serif font-bold hover:bg-rose-50 hover:border-rose-300 transition cursor-pointer flex items-center justify-center active:scale-90"
                  >
                    {cell.char}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-8">
              <h3 className="text-2xl font-bold text-stone-900">Tempo Esgotado!</h3>
              <p className="text-sm text-stone-600">
                Você sobreviveu tempo suficiente para marcar <strong>{sdScore} XP</strong>!
              </p>
              <button
                type="button"
                onClick={generateSpotDiff}
                className="px-6 py-2.5 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition cursor-pointer shadow"
              >
                Tentar Novamente
              </button>
            </div>
          )}
        </div>
      )}
`;

content = content.replace(
  "    </div>\n  );\n};",
  ui_missing_char + ui_spot_diff + "\n    </div>\n  );\n};"
);

fs.writeFileSync('src/components/GamesHub.tsx', content, 'utf-8');
console.log("Success");
