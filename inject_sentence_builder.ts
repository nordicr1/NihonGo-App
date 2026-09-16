import fs from 'fs';

let content = fs.readFileSync('./src/components/JlptTestsHub.tsx', 'utf8');

// Add selectedBlocks state
content = content.replace(
  /const \[selectedOption, setSelectedOption\] = useState<number \| null>\(null\);/,
  "const [selectedOption, setSelectedOption] = useState<number | null>(null);\n  const [selectedBlocks, setSelectedBlocks] = useState<number[]>([]);"
);

// Update prepareTest
content = content.replace(
  /setSelectedOption\(null\);\n    setShowResult\(false\);/g,
  "setSelectedOption(null);\n    setSelectedBlocks([]);\n    setShowResult(false);"
);

// Update nextQuestion
content = content.replace(
  /setCurrentQuestionIdx\(prev => prev \+ 1\);\n      setSelectedOption\(null\);\n      setShowResult\(false\);/,
  "setCurrentQuestionIdx(prev => prev + 1);\n      setSelectedOption(null);\n      setSelectedBlocks([]);\n      setShowResult(false);"
);

// Add verifySentenceBuilder and handleBlockSelect before handleOptionSelect
content = content.replace(
  /const handleOptionSelect = \(idx: number\) => {/,
  `const handleBlockSelect = (idx: number) => {
    if (showResult) return;
    if (selectedBlocks.includes(idx)) {
      setSelectedBlocks(prev => prev.filter(i => i !== idx));
    } else {
      setSelectedBlocks(prev => [...prev, idx]);
    }
  };

  const verifySentenceBuilder = () => {
    if (showResult) return;
    setShowResult(true);
    
    const question = testQuestions[currentQuestionIdx];
    const userSentence = selectedBlocks.map(idx => question.options[idx]).join('');
    const isCorrect = userSentence === question.correctSentence?.replace(/\\s/g, '');

    if (isCorrect) {
      soundFX.playSuccess();
      setScore(prev => prev + 1);
      onGainXp(20, \`Montou a frase corretamente (\${selectedJlpt})!\`);
    } else {
      soundFX.playError();
      onLoseHeart();
    }
  };

  const handleOptionSelect = (idx: number) => {`
);

// Replace the render of the options to support sentence_builder
const multipleChoiceRegex = /<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">[\s\S]*?<\/div>/;

const replacement = `{testQuestions[currentQuestionIdx].type === 'sentence_builder' ? (
                <div className="space-y-6">
                  {/* Drop zone / Constructed sentence */}
                  <div className="min-h-[80px] p-4 bg-white rounded-2xl border-2 border-dashed border-stone-300 flex flex-wrap gap-2 items-center justify-center cursor-pointer"
                       onClick={() => { if(!showResult) setSelectedBlocks([]) }}
                       title={!showResult ? "Clique para limpar tudo" : ""}
                  >
                    {selectedBlocks.length === 0 && !showResult && (
                       <span className="text-stone-400 font-medium">Selecione os blocos na ordem correta...</span>
                    )}
                    {selectedBlocks.map((blockIdx, i) => (
                      <div key={i} className={\`px-4 py-2 text-lg font-bold rounded-xl shadow-sm border-2 \${showResult ? (testQuestions[currentQuestionIdx].correctSentence?.replace(/\\s/g, '') === selectedBlocks.map(idx => testQuestions[currentQuestionIdx].options[idx]).join('') ? 'bg-teal-100 border-teal-400 text-teal-800' : 'bg-rose-100 border-rose-400 text-rose-800') : 'bg-indigo-100 border-indigo-300 text-indigo-900'}\`}>
                        {testQuestions[currentQuestionIdx].options[blockIdx]}
                      </div>
                    ))}
                  </div>

                  {/* Available blocks */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    {testQuestions[currentQuestionIdx].options.map((opt, idx) => {
                      const isUsed = selectedBlocks.includes(idx);
                      return (
                        <button
                          key={idx}
                          onClick={() => handleBlockSelect(idx)}
                          disabled={showResult || isUsed}
                          className={\`px-5 py-3 text-lg font-bold rounded-xl shadow-sm border-2 transition-all active:scale-95 \${
                            isUsed 
                              ? 'bg-stone-100 border-stone-200 text-stone-300 scale-95 opacity-50 cursor-not-allowed'
                              : 'bg-white border-stone-300 text-stone-700 hover:border-indigo-400 hover:text-indigo-700 cursor-pointer'
                          }\`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {!showResult && (
                    <div className="flex justify-center mt-6">
                      <button 
                        onClick={verifySentenceBuilder}
                        disabled={selectedBlocks.length === 0}
                        className={\`px-8 py-3 rounded-xl font-black text-lg shadow-md transition-all \${
                          selectedBlocks.length > 0 
                            ? 'bg-teal-500 hover:bg-teal-400 text-teal-950 cursor-pointer hover:scale-105 active:scale-95' 
                            : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                        }\`}
                      >
                        Verificar
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {testQuestions[currentQuestionIdx].options.map((opt, idx) => {
                    const isCorrect = testQuestions[currentQuestionIdx].correctAnswer === idx;
                    const isSelected = selectedOption === idx;
                    
                    let btnClass = "bg-white border-2 border-stone-200 hover:border-teal-400 text-stone-700";
                    if (showResult) {
                      if (isCorrect) {
                        btnClass = "bg-teal-50 border-2 border-teal-500 text-teal-800";
                      } else if (isSelected && !isCorrect) {
                        btnClass = "bg-rose-50 border-2 border-rose-500 text-rose-800";
                      } else {
                        btnClass = "bg-stone-50 border-2 border-stone-200 text-stone-400 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        disabled={showResult}
                        className={\`p-4 rounded-xl text-lg sm:text-xl font-bold transition-all shadow-sm active:scale-95 flex items-center justify-start sm:justify-center gap-3 text-left \${btnClass}\`}
                      >
                        <span className="text-sm font-bold opacity-50 bg-stone-200/50 w-6 h-6 rounded-full flex items-center justify-center shrink-0">{idx + 1}</span>
                        <span className="leading-tight">{opt}</span>
                        {showResult && isCorrect && <CheckCircle size={20} className="text-teal-500 ml-auto shrink-0" />}
                        {showResult && isSelected && !isCorrect && <XCircle size={20} className="text-rose-500 ml-auto shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}`;

content = content.replace(multipleChoiceRegex, replacement);

// Fix the audio/translation block for sentence_builder
content = content.replace(
  /<div className="flex items-center justify-between bg-stone-700\/50 p-4 rounded-xl border border-stone-600 mb-4">[\s\S]*?<\/div>/,
  `<div className="flex items-center justify-between bg-stone-700/50 p-4 rounded-xl border border-stone-600 mb-4">
                    <span className="font-bold text-lg text-teal-300">
                      {testQuestions[currentQuestionIdx].type === 'sentence_builder' 
                        ? testQuestions[currentQuestionIdx].correctSentence 
                        : (testQuestions[currentQuestionIdx].highlight 
                          ? testQuestions[currentQuestionIdx].question.replace(testQuestions[currentQuestionIdx].highlight || '', testQuestions[currentQuestionIdx].options[testQuestions[currentQuestionIdx].correctAnswer]) 
                          : testQuestions[currentQuestionIdx].question)}
                    </span>
                    <AudioButton 
                      text={testQuestions[currentQuestionIdx].type === 'sentence_builder' 
                        ? (testQuestions[currentQuestionIdx].correctSentence || '') 
                        : (testQuestions[currentQuestionIdx].highlight 
                          ? testQuestions[currentQuestionIdx].question.replace(testQuestions[currentQuestionIdx].highlight || '', testQuestions[currentQuestionIdx].options[testQuestions[currentQuestionIdx].correctAnswer]) 
                          : testQuestions[currentQuestionIdx].question)} 
                      size="lg" 
                    />
                  </div>`
);

// Fix question top label
content = content.replace(
  /testQuestions\[currentQuestionIdx\]\.type === 'grammar' \? '文法 \(Gramática\)' :/g,
  "testQuestions[currentQuestionIdx].type === 'grammar' ? '文法 (Gramática)' :\n                   testQuestions[currentQuestionIdx].type === 'sentence_builder' ? '文脈配列 (Monte a Frase)' :"
);

fs.writeFileSync('./src/components/JlptTestsHub.tsx', content, 'utf8');
