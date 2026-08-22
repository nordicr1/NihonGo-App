import React, { useState } from 'react';
import { VOCAB_DATA } from '../data/vocabData';
import { JLPTLevel, VocabCategory, VocabItem } from '../types';
import { AudioButton } from './AudioButton';
import { BookOpen, Search, Sparkles, Filter, ChevronRight, Layers, Bookmark } from 'lucide-react';
import { playJapaneseAudio } from '../utils/audio';

interface VerbsAdjectivesHubProps {
  selectedJlpt: JLPTLevel;
  onSelectJlpt: (lvl: JLPTLevel) => void;
  onGainXp: (amount: number, reason: string) => void;
}

export const VerbsAdjectivesHub: React.FC<VerbsAdjectivesHubProps> = ({
  selectedJlpt,
  onSelectJlpt,
  onGainXp,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [vocabCategoryFilter, setVocabCategoryFilter] = useState<string>('all');

  const jlptLevels: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

  // Filter vocab items (only verbs and adjectives)
  const allowedCategories = ['verbo_godan', 'verbo_ichidan', 'verbo_irregular', 'adjetivo_i', 'adjetivo_na'];
  const filteredVocab = VOCAB_DATA.filter((v) => {
    if (!v) return false;
    const matchesLevel = v.jlpt === selectedJlpt;
    const matchesType = allowedCategories.includes(v.category);
    const matchesCategory =
      vocabCategoryFilter === 'all' || v.category === vocabCategoryFilter;
    const matchesSearch =
      v.word?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.reading?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.romaji?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.meaningPt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesType && matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 border border-indigo-900/30 shadow-lg relative overflow-hidden">
        <div className="absolute right-4 top-2 opacity-10 text-9xl font-serif select-none pointer-events-none">
          文法
        </div>
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
            <Sparkles size={14} />
            <span>Central de Verbos e Adjetivos ({selectedJlpt})</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Treinamento Intensivo: Verbos e Adjetivos
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Mergulhe no estudo dedicado exclusivamente às ações (Verbos Godan, Ichidan, Irregulares) e descrições (Adjetivos い e な).
          </p>

          {/* Level Switcher */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-semibold text-stone-400 mr-1">Nível JLPT:</span>
            {jlptLevels.map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => {
                  onSelectJlpt(lvl);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedJlpt === lvl
                    ? 'bg-indigo-500 text-white shadow-md font-extrabold scale-105'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Switcher: Vocabulário */}
      <div className="flex items-center justify-between flex-wrap gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
        <div className="flex items-center bg-stone-100 p-1 rounded-xl">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition cursor-default bg-emerald-600 text-white shadow-sm"
          >
            <Layers size={16} />
            <span>Banco de Verbos e Adjetivos (動詞・形容詞)</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px] flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Buscar palavra, romaji, tradução..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
          />
        </div>
      </div>

      {/* Vocabulary Bank */}
      <div className="space-y-4">
        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'Todos os Verbos/Adjetivos' },
            { id: 'verbo_godan', label: 'Verbos Godan (Grupo 1)' },
            { id: 'verbo_ichidan', label: 'Verbos Ichidan (Grupo 2)' },
            { id: 'verbo_irregular', label: 'Verbos Irregulares (Grupo 3)' },
            { id: 'adjetivo_i', label: 'Adjetivos-I (い)' },
            { id: 'adjetivo_na', label: 'Adjetivos-Na (な)' },
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
                {v.exampleSentence && (
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-800">{v.exampleSentence.jp}</span>
                      <AudioButton text={v.exampleSentence.jp} size="sm" />
                    </div>
                    <p className="text-stone-500 font-mono">{v.exampleSentence.reading}</p>
                    <p className="text-indigo-700 font-medium">{v.exampleSentence.meaningPt}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredVocab.length === 0 && (
            <div className="p-12 text-center text-stone-500 bg-white rounded-2xl border border-stone-200">
              Nenhuma palavra encontrada para o filtro atual.
            </div>
          )}
      </div>
    </div>
  );
};
