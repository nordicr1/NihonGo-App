import React, { useState } from 'react';
import { HIRAGANA_DATA, KATAKANA_DATA } from '../data/kanaData';
import { KanaCategory, KanaItem, KanaType } from '../types';
import { AudioButton } from './AudioButton';
import { Search, Volume2, Sparkles, BookOpen, CheckCircle, HelpCircle } from 'lucide-react';
import { playJapaneseAudio, soundFX } from '../utils/audio';

interface KanaExplorerProps {
  onGainXp: (amount: number, reason: string) => void;
}

export const KanaExplorer: React.FC<KanaExplorerProps> = ({ onGainXp }) => {
  const [activeType, setActiveType] = useState<KanaType>('hiragana');
  const [activeCategory, setActiveCategory] = useState<KanaCategory>('gojuon');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKana, setSelectedKana] = useState<KanaItem | null>(null);

  // Quick Practice Quiz mode
  const [quizMode, setQuizMode] = useState(false);
  const [quizQuestion, setQuizQuestion] = useState<{
    target: KanaItem;
    options: string[];
    answered: boolean;
    selectedOption: string | null;
  } | null>(null);

  const currentDataset = activeType === 'hiragana' ? HIRAGANA_DATA : KATAKANA_DATA;

  const filteredKanas = currentDataset.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch =
      item.char.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.romaji.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.exampleWord.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.exampleMeaningPt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectKana = (item: KanaItem) => {
    setSelectedKana(item);
    playJapaneseAudio(item.char);
    onGainXp(2, 'Estudou Kana');
  };

  const startKanaQuiz = () => {
    setQuizMode(true);
    generateQuizQuestion();
  };

  const generateQuizQuestion = () => {
    const list = currentDataset;
    const randomIndex = Math.floor(Math.random() * list.length);
    const target = list[randomIndex];

    // Generate 3 wrong options
    const others = list.filter((k) => k.id !== target.id);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [target.romaji, ...shuffledOthers.map((o) => o.romaji)].sort(() => 0.5 - Math.random());

    setQuizQuestion({
      target,
      options,
      answered: false,
      selectedOption: null,
    });
    playJapaneseAudio(target.char);
  };

  const handleQuizAnswer = (option: string) => {
    if (!quizQuestion || quizQuestion.answered) return;
    const isCorrect = option === quizQuestion.target.romaji;
    setQuizQuestion({
      ...quizQuestion,
      answered: true,
      selectedOption: option,
    });

    if (isCorrect) {
      soundFX.playSuccess();
      onGainXp(10, 'Acertou Kana no Quiz');
    } else {
      soundFX.playError();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Title & Introduction */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-rose-950 text-white rounded-2xl p-6 sm:p-8 border border-rose-900/30 shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 text-9xl font-serif select-none pointer-events-none pr-4">
          あア
        </div>
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-900/400/20 border border-rose-500/40 text-rose-300 text-xs font-semibold">
            <Sparkles size={14} />
            <span>Fundamentos da Escrita Japonesa (かな)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Alfabetos Silábicos: Hiragana & Katakana
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            O Japonês possui dois alfabetos fonéticos com 46 sons fundamentais cada. O <strong>Hiragana (ひらがな)</strong> é usado para palavras nativas e gramática; o <strong>Katakana (カタカナ)</strong> é usado para palavras de origem estrangeira, onomatopeias e nomes internacionais.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                if (quizMode) {
                  setQuizMode(false);
                } else {
                  startKanaQuiz();
                }
              }}
              className={`px-4 py-2 rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer flex items-center gap-2 ${
                quizMode
                  ? 'bg-amber-50 dark:bg-amber-900/400 text-stone-950 hover:bg-amber-400'
                  : 'bg-rose-600 text-white hover:bg-rose-50 dark:bg-rose-900/400'
              }`}
            >
              <HelpCircle size={16} />
              <span>{quizMode ? 'Voltar para Tabela' : 'Treinar Reconhecimento (Mini-Quiz)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Container */}
      {quizMode ? (
        /* Quick Quiz View */
        <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-700/50 shadow-sm max-w-xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Desafio de Reconhecimento
            </span>
            <span className="text-xs text-stone-500">
              {activeType === 'hiragana' ? 'Hiragana' : 'Katakana'}
            </span>
          </div>

          {quizQuestion && (
            <div className="space-y-6">
              <div className="p-8 bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-200 dark:border-stone-700/50 flex flex-col items-center justify-center relative">
                <span className="text-7xl sm:text-8xl font-black text-stone-900 dark:text-stone-100 tracking-wider">
                  {quizQuestion.target.char}
                </span>
                <button
                  type="button"
                  onClick={() => playJapaneseAudio(quizQuestion.target.char)}
                  className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold hover:bg-rose-200 transition cursor-pointer"
                >
                  <Volume2 size={15} />
                  <span>Ouvir som</span>
                </button>
              </div>

              <div className="text-sm font-medium text-stone-600 dark:text-stone-400">
                Qual é a leitura em Romaji deste caractere?
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quizQuestion.options.map((option, idx) => {
                  const isSelected = quizQuestion.selectedOption === option;
                  const isCorrect = option === quizQuestion.target.romaji;
                  let btnColor = 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200';

                  if (quizQuestion.answered) {
                    if (isCorrect) {
                      btnColor = 'bg-emerald-600 text-white font-bold ring-2 ring-emerald-400';
                    } else if (isSelected) {
                      btnColor = 'bg-rose-600 text-white font-bold';
                    } else {
                      btnColor = 'bg-stone-100 dark:bg-stone-800 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={quizQuestion.answered}
                      onClick={() => handleQuizAnswer(option)}
                      className={`p-4 rounded-xl text-lg font-bold transition-all shadow-sm cursor-pointer ${btnColor}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {quizQuestion.answered && (
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700/50 text-left space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-emerald-600" size={18} />
                    <span className="font-bold text-stone-800 dark:text-stone-200 text-sm">
                      {quizQuestion.target.char} = {quizQuestion.target.romaji}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    <strong>Dica Mnemônica:</strong> {quizQuestion.target.mnemonicPt}
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    <strong>Exemplo:</strong> {quizQuestion.target.exampleWord} ({quizQuestion.target.exampleReading}) — {quizQuestion.target.exampleMeaningPt}
                  </p>

                  <button
                    type="button"
                    onClick={generateQuizQuestion}
                    className="w-full mt-3 py-2.5 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition cursor-pointer text-sm"
                  >
                    Próximo Caractere →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* Standard Kana Chart View */
        <div className="space-y-6">
          {/* Controls: Hiragana vs Katakana & Sub-Categories */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-700/50 shadow-sm">
            {/* Type selector */}
            <div className="flex items-center bg-stone-100 dark:bg-stone-800 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => {
                  setActiveType('hiragana');
                  setSelectedKana(null);
                }}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeType === 'hiragana'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:text-stone-100'
                }`}
              >
                Hiragana (ひらがな)
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveType('katakana');
                  setSelectedKana(null);
                }}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeType === 'katakana'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:text-stone-100'
                }`}
              >
                Katakana (カタカナ)
              </button>
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {(
                [
                  { id: 'gojuon', label: 'Básico (46 Sons)' },
                  { id: 'dakuon', label: 'Dakuon (GA, ZA, DA, BA)' },
                  { id: 'handakuon', label: 'Handakuon (PA)' },
                  { id: 'yoon', label: 'Combos (KYA, SHA...)' },
                ] as const
              ).map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedKana(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[200px]">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Buscar som, romaji, tradução..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white dark:bg-stone-900 transition"
              />
            </div>
          </div>

          {/* Grid of Kana Cards + Detail Drawer */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
                {filteredKanas.map((item) => {
                  const isSelected = selectedKana?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectKana(item)}
                      className={`relative p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center text-center group ${
                        isSelected
                          ? 'bg-rose-50 dark:bg-rose-900/40 border-rose-500 ring-2 ring-rose-400 shadow-md scale-105'
                          : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-700/50 hover:border-rose-300 hover:shadow-md hover:-translate-y-0.5'
                      }`}
                    >
                      <span className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-rose-600 transition-colors">
                        {item.char}
                      </span>
                      <span className="text-xs font-semibold text-stone-500 mt-1 uppercase tracking-wider">
                        {item.romaji}
                      </span>

                      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <AudioButton text={item.char} size="sm" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredKanas.length === 0 && (
                <div className="p-12 text-center text-stone-500 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-700/50">
                  Nenhum caractere encontrado para "{searchQuery}".
                </div>
              )}
            </div>

            {/* Detail / Mnemonic Side Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-700/50 shadow-sm sticky top-28 space-y-5">
                {selectedKana ? (
                  <>
                    <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                          Detalhe do Caractere
                        </span>
                        <h3 className="text-2xl font-black text-stone-900 dark:text-stone-100">
                          {selectedKana.char}
                        </h3>
                      </div>
                      <AudioButton text={selectedKana.char} size="lg" label="Ouvir som" />
                    </div>

                    <div className="space-y-4 text-sm">
                      <div className="bg-stone-50 dark:bg-stone-800/50 p-3.5 rounded-xl border border-stone-100 dark:border-stone-800">
                        <span className="text-xs text-stone-400 font-semibold block uppercase">
                          Pronúncia / Romaji
                        </span>
                        <span className="text-lg font-bold text-stone-800 dark:text-stone-200">
                          "{selectedKana.romaji}"
                        </span>
                      </div>

                      <div className="bg-amber-50 dark:bg-amber-900/40/80 p-3.5 rounded-xl border border-amber-200/60 text-amber-900">
                        <div className="flex items-center gap-1.5 font-bold text-xs uppercase mb-1">
                          <Sparkles size={14} className="text-amber-600" />
                          <span>Dica Mnemônica Didática</span>
                        </div>
                        <p className="text-xs leading-relaxed text-amber-800">
                          {selectedKana.mnemonicPt}
                        </p>
                      </div>

                      <div className="bg-stone-50 dark:bg-stone-800/50 p-3.5 rounded-xl border border-stone-100 dark:border-stone-800 space-y-2">
                        <span className="text-xs text-stone-400 font-semibold block uppercase">
                          Palavra de Exemplo
                        </span>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-bold text-stone-900 dark:text-stone-100 text-base">
                              {selectedKana.exampleWord}
                            </span>
                            <span className="text-xs text-stone-500 ml-2">
                              ({selectedKana.exampleReading})
                            </span>
                            <p className="text-xs font-medium text-rose-600">
                              {selectedKana.exampleMeaningPt}
                            </p>
                          </div>
                          <AudioButton text={selectedKana.exampleWord} size="sm" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-900/40 text-rose-600 flex items-center justify-center mx-auto text-xl font-bold">
                      あ
                    </div>
                    <h4 className="font-bold text-stone-800 dark:text-stone-200 text-sm">
                      Selecione um caractere
                    </h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Clique em qualquer card da tabela para ouvir a pronúncia em áudio nativo e ver a dica mnemônica em Português.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
