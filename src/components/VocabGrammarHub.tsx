import React, { useState } from 'react';
import { GRAMMAR_DATA } from '../data/grammarData';
import { VOCAB_DATA } from '../data/vocabData';
import { GrammarItem, JLPTLevel, VocabCategory, VocabItem } from '../types';
import { AudioButton } from './AudioButton';
import { BookOpen, Search, Sparkles, Filter, ChevronRight, Layers, Bookmark } from 'lucide-react';
import { playJapaneseAudio } from '../utils/audio';

const GrammarDetailContent = ({ selectedGrammar, isMobile = false }: { selectedGrammar: GrammarItem, isMobile?: boolean }) => (
  <>
    {!isMobile && (
      <div className="border-b border-stone-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">
            JLPT {selectedGrammar.jlpt}
          </span>
          <span className="text-xs text-stone-500">{selectedGrammar.category}</span>
        </div>
        <h2 className="text-xl font-extrabold text-stone-900 mt-2">
          {selectedGrammar.pattern}
        </h2>
        <p className="text-sm font-semibold text-indigo-600">
          {selectedGrammar.titlePt}
        </p>
      </div>
    )}

    <div className={`space-y-4 text-sm ${isMobile ? 'mt-0' : 'mt-4'}`}>
      {/* Formula */}
      {!isMobile && (
        <div className="bg-indigo-50/70 p-3.5 rounded-xl border border-indigo-100">
          <span className="text-xs font-bold text-indigo-900 block uppercase mb-1">
            Estrutura / Fórmula de Formação
          </span>
          <p className="text-xs font-mono font-bold text-indigo-950">
            {selectedGrammar.formationFormula}
          </p>
        </div>
      )}

      {/* Explanation */}
      {!isMobile && (
        <div className="space-y-1">
          <span className="text-xs text-stone-400 font-bold uppercase block">
            Explicação Didática
          </span>
          <p className="text-xs text-stone-700 leading-relaxed">
            {selectedGrammar.explanationPt}
          </p>
        </div>
      )}

      {/* Key Rules */}
      {selectedGrammar.keyRulePt && (
        <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200/60 text-amber-900 text-xs leading-relaxed whitespace-pre-line font-medium">
          <strong>Dicas & Regras de Ouro:</strong>
          <div className="mt-1">{selectedGrammar.keyRulePt}</div>
        </div>
      )}

      {/* Examples */}
      <div className="space-y-2">
        <span className="text-xs text-stone-400 font-bold uppercase block">
          Frases de Exemplo com Áudio
        </span>
        <div className="space-y-2.5">
          {selectedGrammar.examples.map((ex, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-stone-50 border border-stone-100 space-y-1"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-stone-900 text-sm block">
                    {ex.jp}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">
                    {ex.reading}
                  </span>
                </div>
                <AudioButton text={ex.jp} size="sm" />
              </div>
              <p className="text-xs font-medium text-indigo-700">
                {ex.meaningPt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

interface VocabGrammarHubProps {
  selectedJlpt: JLPTLevel;
  onSelectJlpt: (lvl: JLPTLevel) => void;
  onGainXp: (amount: number, reason: string) => void;
}

export const VocabGrammarHub: React.FC<VocabGrammarHubProps> = ({
  selectedJlpt,
  onSelectJlpt,
  onGainXp,
}) => {
  const [subTab, setSubTab] = useState<'grammar' | 'vocab'>('grammar');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrammar, setSelectedGrammar] = useState<GrammarItem | null>(null);
  const [vocabCategoryFilter, setVocabCategoryFilter] = useState<string>('all');

  const jlptLevels: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

  // Filter grammar items
  const filteredGrammar = GRAMMAR_DATA.filter((g) => {
    const matchesLevel = g.jlpt === selectedJlpt;
    const matchesSearch =
      g.pattern.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.titlePt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.explanationPt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  // Filter vocab items
  const filteredVocab = VOCAB_DATA.filter((v) => {
    const matchesLevel = v.jlpt === selectedJlpt;
    const matchesCategory =
      vocabCategoryFilter === 'all' || v.category === vocabCategoryFilter;
    const matchesSearch =
      v.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.reading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.romaji.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.meaningPt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesCategory && matchesSearch;
  });

  const handleSelectGrammar = (g: GrammarItem) => {
    setSelectedGrammar(g);
    onGainXp(3, 'Estudou Ponto Gramatical');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-indigo-900/30 shadow-xl relative overflow-hidden flex items-center justify-center">
        <div className="absolute right-0 top-0 opacity-5 sm:opacity-10 text-[100px] sm:text-[140px] font-serif select-none pointer-events-none pr-6 leading-none translate-y-4">
          文法
        </div>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4 relative z-10">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles size={14} />
            <span>Gramática & Vocabulário JLPT ({selectedJlpt})</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Termos da Gramática & Dicionário com Frases Reais
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Domine as estruturas gramaticais, regras de conjugação (Verbos Godan, Ichidan e Irregulares; Adjetivos い e な) e vocabulário com pronúncia nativa e exemplos traduzidos para Português do Brasil.
          </p>

          {/* Level Switcher */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            <span className="text-xs font-semibold text-stone-400 mr-1 w-full sm:w-auto mb-2 sm:mb-0">Nível JLPT:</span>
            {jlptLevels.map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => {
                  onSelectJlpt(lvl);
                  setSelectedGrammar(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-md ${
                  selectedJlpt === lvl
                    ? 'bg-indigo-500 text-white font-extrabold scale-105 ring-2 ring-indigo-400/50'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Switcher: Gramática vs Vocabulário */}
      <div className="flex items-center justify-between flex-wrap gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
        <div className="flex items-center bg-stone-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setSubTab('grammar')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition cursor-pointer ${
              subTab === 'grammar'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen size={16} />
            <span>Pontos Gramaticais (文法)</span>
          </button>
          <button
            type="button"
            onClick={() => setSubTab('vocab')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition cursor-pointer ${
              subTab === 'vocab'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layers size={16} />
            <span>Banco de Vocabulário (単語)</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px] flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder={
              subTab === 'grammar'
                ? 'Buscar regra, partícula, padrão...'
                : 'Buscar palavra, romaji, tradução...'
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
          />
        </div>
      </div>

      {/* Sub-tab 1: Grammar Modules */}
      {subTab === 'grammar' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Grammar List */}
          <div className="lg:col-span-2 space-y-3">
            {filteredGrammar.map((item) => {
              const isSelected = selectedGrammar?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectGrammar(item)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer group ${
                    isSelected
                      ? 'bg-indigo-50/80 border-indigo-500 ring-2 ring-indigo-400 shadow-md'
                      : 'bg-white border-stone-200 hover:border-indigo-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">
                          {item.jlpt}
                        </span>
                        <span className="text-xs text-stone-500 font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-stone-900 mt-1.5 group-hover:text-indigo-600 transition">
                        {item.pattern}
                      </h3>
                      <p className="text-sm font-semibold text-stone-700 mt-0.5">
                        {item.titlePt}
                      </p>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`transition-transform text-stone-400 ${
                        isSelected ? 'rotate-90 text-indigo-600' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </div>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.explanationPt}
                  </p>

                  <div className="mt-3 p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-xs font-mono text-stone-700">
                    <span className="font-bold text-indigo-700">Fórmula: </span>
                    {item.formationFormula}
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-stone-200 lg:hidden block cursor-default animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
                      <GrammarDetailContent selectedGrammar={item} isMobile={true} />
                    </div>
                  )}
                </div>
              );
            })}

            {filteredGrammar.length === 0 && (
              <div className="p-12 text-center text-stone-500 bg-white rounded-2xl border border-stone-200">
                Nenhum ponto gramatical encontrado para "{searchQuery}" no nível {selectedJlpt}.
              </div>
            )}
          </div>

          {/* Grammar Detail & Example Sentences */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm sticky top-28 space-y-5">
              {selectedGrammar ? (
                <GrammarDetailContent selectedGrammar={selectedGrammar} />
              ) : (
                <div className="text-center py-16 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto text-xl font-bold">
                    文
                  </div>
                  <h4 className="font-bold text-stone-800 text-sm">Selecione uma Regra</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Clique em um ponto gramatical ao lado para ver o detalhamento completo, fórmula e frases práticas com áudio.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sub-tab 2: Vocabulary Bank */}
      {subTab === 'vocab' && (
        <div className="space-y-4">
          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'Todas as Categorias' },
              { id: 'substantivo', label: 'Substantivos' },
              { id: 'verbo_godan', label: 'Verbos Godan (Grupo 1)' },
              { id: 'verbo_ichidan', label: 'Verbos Ichidan (Grupo 2)' },
              { id: 'verbo_irregular', label: 'Verbos Irregulares (Grupo 3)' },
              { id: 'adjetivo_i', label: 'Adjetivos-I (い)' },
              { id: 'adjetivo_na', label: 'Adjetivos-Na (な)' },
              { id: 'adverbio', label: 'Advérbios' },
              { id: 'expressao', label: 'Expressões' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setVocabCategoryFilter(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  vocabCategoryFilter === cat.id
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Vocab Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVocab.map((v) => (
              <div
                key={v.id}
                className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-bold border border-stone-200">
                        {v.categoryLabelPt}
                      </span>
                      <h3 className="text-2xl font-bold text-stone-900 mt-2">{v.word}</h3>
                      <div className="flex items-center gap-2 text-xs text-stone-500 font-mono mt-0.5">
                        <span>{v.reading}</span>
                        <span>•</span>
                        <span>{v.romaji}</span>
                      </div>
                    </div>
                    <AudioButton text={v.word} size="md" />
                  </div>

                  <div className="mt-3 p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100">
                    <span className="text-[10px] font-bold text-indigo-800 uppercase block">
                      Significado em Português
                    </span>
                    <span className="text-sm font-bold text-indigo-950">{v.meaningPt}</span>
                  </div>
                </div>

                {/* Example sentence */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-800">{v.exampleSentence.jp}</span>
                    <AudioButton text={v.exampleSentence.jp} size="sm" />
                  </div>
                  <p className="text-stone-500 font-mono">{v.exampleSentence.reading}</p>
                  <p className="text-indigo-700 font-medium">{v.exampleSentence.meaningPt}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredVocab.length === 0 && (
            <div className="p-12 text-center text-stone-500 bg-white rounded-2xl border border-stone-200">
              Nenhuma palavra encontrada para o filtro atual.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
