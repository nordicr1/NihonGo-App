import React, { useState, useEffect } from 'react';
import { JLPTLevel } from '../types';
import { Layers, HelpCircle, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { JLPT_N5_TEST, JLPTQuestion } from '../data/jlptN5TestData';
import { JLPT_N5_GRAMMAR_TEST } from '../data/jlptN5GrammarData';

const FULL_N5_TEST = [...JLPT_N5_TEST, ...JLPT_N5_GRAMMAR_TEST];

interface JlptTestsHubProps {
  selectedJlpt: JLPTLevel;
  onSelectJlpt: (level: JLPTLevel) => void;
  onGainXp: (amount: number, reason: string) => void;
}

export const JlptTestsHub: React.FC<JlptTestsHubProps> = ({
  selectedJlpt,
  onSelectJlpt,
  onGainXp
}) => {
  const levels: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];
  

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
    const shuffledQuestions = shuffleArray(testQuestions);
    
    // Randomize Options
    const preparedQuestions = shuffledQuestions.map((q: JLPTQuestion) => {
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

  // Test State
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isTestFinished, setIsTestFinished] = useState(false);

  const resetTest = () => {
    if (selectedJlpt === 'N5') {
      prepareTest();
    }
  };

  const handleOptionSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOption(idx);
    setShowResult(true);

    const question = testQuestions[currentQuestionIdx];
    if (idx === question.correctAnswer) {
      setScore(prev => prev + 1);
      onGainXp(15, 'Acertou questão do Simulado N5!');
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < testQuestions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsTestFinished(true);
      onGainXp(150, 'Concluiu o Simulado Oficial N5!');
    }
  };


  if (selectedJlpt === 'N5' && testQuestions.length === 0) {
    return <div className="p-10 text-center">Carregando simulado...</div>;
  }

  // Render question text with highlight
  const renderQuestion = (q: JLPTQuestion) => {
    if (!q.highlight) {
      return <p className="text-xl sm:text-2xl font-medium text-stone-900 whitespace-pre-wrap leading-relaxed">{q.question}</p>;
    }
    
    const parts = q.question.split(q.highlight);
    return (
      <p className="text-xl sm:text-2xl font-medium text-stone-900 whitespace-pre-wrap leading-relaxed">
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="font-bold underline decoration-rose-400 decoration-4 underline-offset-4 mx-1">
                {q.highlight}
              </span>
            )}
          </React.Fragment>
        ))}
      </p>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-white to-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm relative overflow-hidden flex items-center justify-center">
        <div className="absolute right-0 top-0 p-8 opacity-5 pointer-events-none translate-x-4 -translate-y-4">
          <Layers size={160} />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-100/50 border border-teal-200/50 text-teal-700 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
            <Layers size={14} />
            <span>Simulados Oficiais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Testes de Proficiência JLPT
          </h2>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            Selecione o nível que deseja praticar. Os testes simulam questões reais focadas em vocabulário, gramática e leitura.
          </p>

          {/* Level Selector */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            {levels.map(level => (
              <button
                key={level}
                onClick={() => {
                  onSelectJlpt(level);
                  resetTest();
                }}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer ${
                  selectedJlpt === level 
                    ? 'bg-teal-600 text-white ring-2 ring-teal-500/50 scale-105' 
                    : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedJlpt === 'N5' ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm animate-fadeIn">
          {isTestFinished ? (
            <div className="text-center space-y-6 py-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 text-teal-600 rounded-full mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-black text-stone-900">Simulado N5 Concluído!</h3>
              <p className="text-stone-600 text-lg">Você acertou <span className="font-bold text-teal-600">{score}</span> de {testQuestions.length} questões.</p>
              
              <button 
                onClick={resetTest}
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition shadow-md active:scale-95 cursor-pointer"
              >
                <RotateCcw size={18} />
                <span>Fazer Novamente</span>
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm font-bold text-stone-400">
                <span className="uppercase tracking-wider">Questão {currentQuestionIdx + 1} de {testQuestions.length}</span>
                <span className="bg-stone-100 px-3 py-1 rounded-full text-stone-600">
                  {testQuestions[currentQuestionIdx].type === 'vocab_reading' ? '文字・語彙 (Leitura)' :
                   testQuestions[currentQuestionIdx].type === 'vocab_kanji' ? '文字・語彙 (Kanji)' :
                   testQuestions[currentQuestionIdx].type === 'grammar' ? '文法 (Gramática)' :
                   '読解 (Interpretação)'}
                </span>
              </div>

              <div className="p-6 sm:p-8 bg-stone-50 rounded-2xl border border-stone-200 text-left sm:text-center shadow-inner">
                {renderQuestion(testQuestions[currentQuestionIdx])}
              </div>

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
                      className={`p-4 rounded-xl text-lg sm:text-xl font-bold transition-all shadow-sm active:scale-95 flex items-center justify-start sm:justify-center gap-3 text-left ${btnClass}`}
                    >
                      <span className="text-sm font-bold opacity-50 bg-stone-200/50 w-6 h-6 rounded-full flex items-center justify-center shrink-0">{idx + 1}</span>
                      <span className="leading-tight">{opt}</span>
                      {showResult && isCorrect && <CheckCircle size={20} className="text-teal-500 ml-auto shrink-0" />}
                      {showResult && isSelected && !isCorrect && <XCircle size={20} className="text-rose-500 ml-auto shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className="mt-8 p-6 bg-stone-800 text-white rounded-2xl animate-fadeIn space-y-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-stone-400 tracking-wider">Tradução</span>
                    <p className="text-stone-100 font-medium">{testQuestions[currentQuestionIdx].translation}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-stone-400 tracking-wider">Explicação</span>
                    <p className="text-stone-300 text-sm">{testQuestions[currentQuestionIdx].explanation}</p>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <button 
                      onClick={nextQuestion}
                      className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-teal-950 px-6 py-3 rounded-xl font-black transition-all active:scale-95 shadow-md"
                    >
                      <span>Próxima Questão</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-stone-50 rounded-3xl p-8 border border-dashed border-stone-300 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
          <HelpCircle size={40} className="text-stone-300" />
          <h3 className="text-lg font-bold text-stone-800">Testes {selectedJlpt} em Desenvolvimento</h3>
          <p className="text-sm text-stone-500 max-w-md">
            Os simulados oficais e baterias de testes para o nível {selectedJlpt} estão sendo preparados e serão adicionados em breve. Continue acompanhando as atualizações!
          </p>
        </div>
      )}
    </div>
  );
};
