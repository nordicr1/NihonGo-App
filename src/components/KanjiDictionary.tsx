import React, { useState } from 'react';
import { KANJI_DATA } from '../data/kanjiData';
import { JLPTLevel, KanjiItem } from '../types';
import { AudioButton } from './AudioButton';
import { KanjiDrawCanvas } from './KanjiDrawCanvas';
import { Search, Sparkles, BookOpen, Layers, Edit3, Volume2 } from 'lucide-react';
import { playJapaneseAudio } from '../utils/audio';

interface KanjiDictionaryProps {
  selectedJlpt: JLPTLevel;
  onSelectJlpt: (lvl: JLPTLevel) => void;
  onGainXp: (amount: number, reason: string) => void;
}

export const KanjiDictionary: React.FC<KanjiDictionaryProps> = ({
  selectedJlpt,
  onSelectJlpt,
  onGainXp,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);
  const [showDrawCanvas, setShowDrawCanvas] = useState(false);

  const jlptList: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

  const filteredKanjis = KANJI_DATA.filter((k) => {
    const matchesLevel = k.jlpt === selectedJlpt;
    const matchesSearch =
      k.kanji.includes(searchQuery) ||
      k.meaningPt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.radical.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.onyomi.some((o) => o.toLowerCase().includes(searchQuery.toLowerCase())) ||
      k.kunyomi.some((ku) => ku.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesLevel && matchesSearch;
  });

  const handleSelectKanji = (kanji: KanjiItem) => {
    setSelectedKanji(kanji);
    setShowDrawCanvas(false);
    playJapaneseAudio(kanji.kanji);
    onGainXp(3, 'Consultou Kanji');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white rounded-2xl p-6 sm:p-8 border border-amber-900/30 shadow-lg relative overflow-hidden">
        <div className="absolute right-4 top-2 opacity-10 text-9xl font-serif select-none pointer-events-none">
          漢字
        </div>
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Sparkles size={14} />
            <span>Ideogramas Japoneses (漢字 - Kanji)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Dicionário de Kanjis por Nível JLPT ({selectedJlpt})
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Cada Kanji possui uma essência de significado (Significado em Português), leituras de origem chinesa (<strong>On'yomi</strong>) usadas em palavras compostas, e leituras nativas japonesas (<strong>Kun'yomi</strong>).
          </p>

          {/* Level Switcher */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-semibold text-stone-400 mr-1">Filtrar por Nível:</span>
            {jlptList.map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => {
                  onSelectJlpt(lvl);
                  setSelectedKanji(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedJlpt === lvl
                    ? 'bg-amber-500 text-stone-950 shadow-md font-extrabold scale-105'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {lvl} {lvl === 'N5' ? '(Básico)' : lvl === 'N1' ? '(Avançado)' : ''}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kanji Grid & Search */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder={`Pesquisar kanji de nível ${selectedJlpt}, leitura ou significado...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
              />
            </div>
            <span className="text-xs font-semibold text-stone-500 whitespace-nowrap">
              {filteredKanjis.length} kanjis encontrados
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredKanjis.map((item) => {
              const isSelected = selectedKanji?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectKanji(item)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-400 shadow-md scale-105'
                      : 'bg-white border-stone-200 hover:border-amber-300 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-serif font-black text-stone-900 group-hover:text-amber-700 transition">
                      {item.kanji}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-bold border border-stone-200">
                      {item.strokes} traços
                    </span>
                  </div>

                  <div className="mt-3 space-y-1">
                    <p className="text-xs font-bold text-stone-800 line-clamp-1">
                      {item.meaningPt}
                    </p>
                    <div className="text-[11px] text-stone-500 flex flex-col gap-0.5 font-mono">
                      {item.kunyomi.length > 0 && (
                        <span className="text-rose-600 line-clamp-1">
                          KUN: {item.kunyomi.join(', ')}
                        </span>
                      )}
                      {item.onyomi.length > 0 && (
                        <span className="text-sky-700 line-clamp-1">
                          ON: {item.onyomi.join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredKanjis.length === 0 && (
            <div className="p-12 text-center text-stone-500 bg-white rounded-2xl border border-stone-200">
              Nenhum kanji encontrado para "{searchQuery}" no nível {selectedJlpt}.
            </div>
          )}
        </div>

        {/* Kanji Detailed Inspection Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm sticky top-28 space-y-5">
            {selectedKanji ? (
              <>
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-serif font-black text-stone-900">
                      {selectedKanji.kanji}
                    </span>
                    <div>
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                        JLPT {selectedKanji.jlpt}
                      </span>
                      <p className="text-xs text-stone-500 mt-1">
                        {selectedKanji.strokes} traços • Radical: {selectedKanji.radical}
                      </p>
                    </div>
                  </div>
                  <AudioButton text={selectedKanji.kanji} size="lg" />
                </div>

                <div className="space-y-4 text-sm">
                  {/* Portuguese Meaning */}
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-100">
                    <span className="text-xs text-stone-400 font-semibold block uppercase">
                      Significado em Português
                    </span>
                    <span className="text-base font-bold text-stone-900">
                      {selectedKanji.meaningPt}
                    </span>
                  </div>

                  {/* Readings */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-rose-50/70 p-3 rounded-xl border border-rose-200/50">
                      <span className="text-[10px] font-bold text-rose-700 uppercase block">
                        Kun'yomi (訓読み - Japonesa)
                      </span>
                      <span className="text-xs font-semibold text-rose-950 block mt-1">
                        {selectedKanji.kunyomi.length > 0
                          ? selectedKanji.kunyomi.join(' / ')
                          : '—'}
                      </span>
                    </div>

                    <div className="bg-sky-50/70 p-3 rounded-xl border border-sky-200/50">
                      <span className="text-[10px] font-bold text-sky-700 uppercase block">
                        On'yomi (音読み - Chinesa)
                      </span>
                      <span className="text-xs font-semibold text-sky-950 block mt-1">
                        {selectedKanji.onyomi.length > 0
                          ? selectedKanji.onyomi.join(' / ')
                          : '—'}
                      </span>
                    </div>
                  </div>

                  {/* Compound vocabulary examples */}
                  <div className="space-y-2">
                    <span className="text-xs text-stone-400 font-semibold uppercase block">
                      Palavras Compostas com este Kanji
                    </span>
                    <div className="space-y-2">
                      {selectedKanji.examples.map((ex, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-100 hover:bg-stone-100/70 transition"
                        >
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-bold text-stone-900 text-sm">
                                {ex.word}
                              </span>
                              <span className="text-xs text-stone-500 font-mono">
                                ({ex.reading})
                              </span>
                            </div>
                            <p className="text-xs text-stone-600 font-medium">
                              {ex.meaningPt}
                            </p>
                          </div>
                          <AudioButton text={ex.word} size="sm" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Toggle Writing Practice Canvas */}
                  <button
                    type="button"
                    onClick={() => setShowDrawCanvas(!showDrawCanvas)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-stone-900 text-white font-bold text-xs rounded-xl hover:bg-stone-800 transition cursor-pointer"
                  >
                    <Edit3 size={15} />
                    <span>
                      {showDrawCanvas ? 'Fechar Prática de Escrita' : 'Praticar Desenho do Kanji'}
                    </span>
                  </button>

                  {/* Practice Canvas Embed */}
                  {showDrawCanvas && (
                    <div className="pt-2 animate-fadeIn">
                      <KanjiDrawCanvas
                        kanji={selectedKanji.kanji}
                        onSuccess={() => {
                          onGainXp(5, `Praticou o Kanji ${selectedKanji.kanji}`);
                        }}
                      />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto text-2xl font-bold font-serif">
                  漢
                </div>
                <h4 className="font-bold text-stone-800 text-sm">Selecione um Kanji</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Clique em qualquer kanji para inspecionar suas leituras On/Kun, palavras compostas e abrir a área de prática de caligrafia.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
