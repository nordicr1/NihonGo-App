const fs = require('fs');
let text = fs.readFileSync('src/components/JlptTestsHub.tsx', 'utf-8');

text = text.replace('import React, { useState } from \'react\';', 'import React, { useState, useEffect } from \'react\';');

const stateInjection = `
  const [testQuestions, setTestQuestions] = useState<JLPTQuestion[]>([]);

  // Shuffle Helper
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const prepareTest = () => {
    // Randomize Questions
    const shuffledQuestions = shuffleArray(FULL_N5_TEST);
    
    // Randomize Options
    const preparedQuestions = shuffledQuestions.map(q => {
      const correctAnswerStr = q.options[q.correctAnswer];
      const shuffledOptions = shuffleArray(q.options);
      const newCorrectIdx = shuffledOptions.indexOf(correctAnswerStr);
      
      return {
        ...q,
        options: shuffledOptions,
        correctAnswer: newCorrectIdx
      };
    });
    
    setTestQuestions(preparedQuestions);
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setIsTestFinished(false);
  };

  useEffect(() => {
    if (selectedJlpt === 'N5') {
      prepareTest();
    }
  }, [selectedJlpt]);
`;

text = text.replace('  // Test State', stateInjection + '\n  // Test State');

text = text.replace(
/  const resetTest = \(\) => {[\s\S]*?  };/g,
`  const resetTest = () => {
    if (selectedJlpt === 'N5') {
      prepareTest();
    }
  };`);

text = text.replace(/FULL_N5_TEST/g, 'testQuestions');
// Revert the global constant name back to FULL_N5_TEST
text = text.replace(/const testQuestions = \[\.\.\.JLPT_N5_TEST, \.\.\.JLPT_N5_GRAMMAR_TEST\];/, 'const FULL_N5_TEST = [...JLPT_N5_TEST, ...JLPT_N5_GRAMMAR_TEST];');

const guardClause = `
  if (selectedJlpt === 'N5' && testQuestions.length === 0) {
    return <div className="p-10 text-center">Carregando simulado...</div>;
  }
`;
text = text.replace('  // Render question text with highlight', guardClause + '\n  // Render question text with highlight');

fs.writeFileSync('src/components/JlptTestsHub.tsx', text, 'utf-8');
console.log('Modified JlptTestsHub.tsx');
