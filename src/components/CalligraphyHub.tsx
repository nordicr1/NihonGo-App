import React, { useState, useMemo } from 'react';
import { JLPTLevel, KanaItem, KanjiItem } from '../types';
import { HIRAGANA_DATA, KATAKANA_DATA } from '../data/kanaData';
import { KANJI_DATA } from '../data/kanjiData';
import { KanjiDrawCanvas } from './KanjiDrawCanvas';
import { PenTool, Search } from 'lucide-react';

interface CalligraphyHubProps {
  selectedJlpt: JLPTLevel;
  onGainXp: (amount: number, reason: string) => void;
}

type CharCategory = 'hiragana' | 'katakana' | 'kanji';

const KANA_STROKES: Record<string, number> = {
  // Hiragana
  'あ': 3, 'い': 2, 'う': 2, 'え': 2, 'お': 3,
  'か': 3, 'き': 4, 'く': 1, 'け': 3, 'こ': 2,
  'さ': 3, 'し': 1, 'す': 2, 'せ': 3, 'そ': 1,
  'た': 4, 'ち': 2, 'つ': 1, 'て': 1, 'と': 2,
  'な': 4, 'に': 3, 'ぬ': 2, 'ね': 2, 'の': 1,
  'は': 3, 'ひ': 1, 'ふ': 4, 'へ': 1, 'ほ': 4,
  'ま': 3, 'み': 2, 'む': 3, 'め': 2, 'も': 3,
  'や': 3, 'ゆ': 2, 'よ': 2,
  'ら': 2, 'り': 2, 'る': 1, 'れ': 2, 'ろ': 1,
  'わ': 2, 'を': 3, 'ん': 1,
  // Hiragana Dakuon / Handakuon (typically base + 2 strokes for dakuten or + 1 for handakuten)
  'が': 5, 'ぎ': 6, 'ぐ': 3, 'げ': 5, 'ご': 4,
  'ざ': 5, 'じ': 3, 'ず': 4, 'ぜ': 5, 'ぞ': 3,
  'だ': 6, 'ぢ': 4, 'づ': 3, 'で': 3, 'ど': 4,
  'ば': 5, 'び': 3, 'ぶ': 6, 'べ': 3, 'ぼ': 6,
  'ぱ': 4, 'ぴ': 2, 'ぷ': 5, 'ぺ': 2, 'ぽ': 5,
  // Katakana
  'ア': 2, 'イ': 2, 'ウ': 3, 'エ': 3, 'オ': 3,
  'カ': 2, 'キ': 3, 'ク': 2, 'ケ': 3, 'コ': 2,
  'サ': 3, 'シ': 3, 'ス': 2, 'セ': 2, 'ソ': 2,
  'タ': 3, 'チ': 3, 'ツ': 3, 'テ': 3, 'ト': 2,
  'ナ': 2, 'ニ': 2, 'ヌ': 2, 'ネ': 4, 'ノ': 1,
  'ハ': 2, 'ヒ': 2, 'フ': 1, 'ヘ': 1, 'ホ': 4,
  'マ': 2, 'ミ': 3, 'ム': 2, 'メ': 2, 'モ': 3,
  'ヤ': 2, 'ユ': 2, 'ヨ': 3,
  'ラ': 2, 'リ': 2, 'ル': 2, 'レ': 1, 'ロ': 3,
  'ワ': 2, 'ヲ': 3, 'ン': 2,
  // Katakana Dakuon / Handakuon
  'ガ': 4, 'ギ': 5, 'グ': 4, 'ゲ': 5, 'ゴ': 4,
  'ザ': 5, 'ジ': 5, 'ズ': 4, 'ゼ': 4, 'ゾ': 4,
  'ダ': 5, 'ヂ': 5, 'ヅ': 5, 'デ': 5, 'ド': 4,
  'バ': 4, 'ビ': 4, 'ブ': 3, 'ベ': 3, 'ボ': 6,
  'パ': 3, 'ピ': 3, 'プ': 2, 'ペ': 2, 'ポ': 5,
};

export const CalligraphyHub: React.FC<CalligraphyHubProps> = ({ selectedJlpt, onGainXp }) => {
  const [category, setCategory] = useState<CharCategory>('hiragana');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChar, setSelectedChar] = useState<string | null>('あ');
  const [localJlpt, setLocalJlpt] = useState<JLPTLevel>('N5');

  // Load and filter characters based on category
  const characters = useMemo(() => {
    if (category === 'hiragana') {
      return HIRAGANA_DATA.map(k => k.char);
    } else if (category === 'katakana') {
      return KATAKANA_DATA.map(k => k.char);
    } else {
      // For Kanji, filter by LOCAL JLPT level
      return KANJI_DATA.filter(k => k.jlpt === localJlpt).map(k => k.kanji);
    }
  }, [category, localJlpt]);

  // Filter by search
  const filteredChars = useMemo(() => {
    if (!searchQuery) return characters;
    return characters.filter(c => c.includes(searchQuery));
  }, [characters, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <PenTool size={120} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
            <PenTool size={14} />
            <span>Treino Prático</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 mb-4">
            Estúdio de Caligrafia
          </h1>
          <p className="text-stone-600 text-base sm:text-lg">
            Aprenda a desenhar Hiragana, Katakana e Kanjis (N5 ao N1) diretamente na tela do seu celular. A prática da escrita ajuda na memorização rápida!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Character Selection */}
        <div className="lg:col-span-1 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm flex flex-col h-[600px]">
          {/* Tabs */}
          <div className="flex bg-stone-100 p-1 rounded-2xl mb-4 shrink-0">
            {[
              { id: 'hiragana', label: 'Hiragana' },
              { id: 'katakana', label: 'Katakana' },
              { id: 'kanji', label: 'Kanji' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setCategory(tab.id as CharCategory);
                  setSelectedChar(
                    tab.id === 'hiragana' ? 'あ' :
                    tab.id === 'katakana' ? 'ア' :
                    (KANJI_DATA.find(k => k.jlpt === localJlpt)?.kanji || '一')
                  );
                }}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  category === tab.id
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative mb-4 shrink-0">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Buscar caractere..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition"
            />
          </div>

          {category === 'kanji' && (
            <div className="flex gap-1 mb-4 bg-stone-100 p-1 rounded-xl shrink-0">
              {(['N5', 'N4', 'N3', 'N2', 'N1'] as JLPTLevel[]).map(lvl => (
                <button
                  key={lvl}
                  onClick={() => {
                    setLocalJlpt(lvl);
                    setSelectedChar(KANJI_DATA.find(k => k.jlpt === lvl)?.kanji || '一');
                  }}
                  className={`flex-1 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    localJlpt === lvl ? 'bg-white shadow-sm text-rose-600' : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          )}

          {/* Grid */}
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 gap-2">
              {filteredChars.map((char, i) => (
                <button
                  key={`${char}-${i}`}
                  onClick={() => setSelectedChar(char)}
                  className={`aspect-square flex items-center justify-center text-xl sm:text-2xl font-serif rounded-xl transition-all cursor-pointer ${
                    selectedChar === char
                      ? 'bg-rose-600 text-white font-bold shadow-md scale-105'
                      : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {char}
                </button>
              ))}
            </div>
            {filteredChars.length === 0 && (
              <div className="text-center text-stone-500 py-8 text-sm">
                Nenhum caractere encontrado.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Canvas */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center bg-white rounded-3xl p-6 border border-stone-200 shadow-sm min-h-[500px]">
          {selectedChar ? (
            <div className="w-full max-w-sm flex flex-col gap-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-black text-stone-800">
                  Desenhe o caractere: <span className="text-rose-600 font-serif text-3xl">{selectedChar}</span>
                </h3>
                <p className="text-sm text-stone-500">
                  Use o dedo (no celular) ou o mouse para contornar o guia.
                </p>
              </div>

              <KanjiDrawCanvas
                kanji={selectedChar}
                expectedStrokes={
                  category === 'kanji' 
                    ? KANJI_DATA.find(k => k.kanji === selectedChar)?.strokes 
                    : KANA_STROKES[selectedChar]
                }
                onSuccess={() => onGainXp(5, 'Praticou Caligrafia')}
              />
            </div>
          ) : (
            <div className="text-center text-stone-400">
              <PenTool size={48} className="mx-auto mb-4 opacity-20" />
              <p>Selecione um caractere na lista para desenhar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
