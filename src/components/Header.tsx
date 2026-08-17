import React from 'react';
import { JLPTLevel, UserStats } from '../types';
import { getLevelTitle } from '../utils/storage';
import { Sparkles, Flame, Trophy, Bot, BookOpen, Compass, Gamepad2, Layers } from 'lucide-react';

interface HeaderProps {
  currentTab: 'hub' | 'kana' | 'kanji' | 'grammar' | 'games' | 'analyzer' | 'sensei';
  onTabChange: (tab: 'hub' | 'kana' | 'kanji' | 'grammar' | 'games' | 'analyzer' | 'sensei') => void;
  selectedJlpt: JLPTLevel;
  onJlptChange: (level: JLPTLevel) => void;
  userStats: UserStats;
  onOpenStats: () => void;
  onOpenSensei: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  selectedJlpt,
  onJlptChange,
  userStats,
  onOpenStats,
  onOpenSensei,
}) => {
  const jlptLevels: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 text-stone-100 backdrop-blur border-b border-stone-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top bar: Brand & Stats */}
        <div className="flex items-center justify-between py-3 border-b border-stone-800/80 gap-4">
          <div className="flex items-center gap-3">
            <div 
              onClick={() => onTabChange('hub')} 
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-rose-900/30 group-hover:scale-105 transition-transform">
                日
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight text-white">NihonGo!</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30">
                    JLPT N5-N1
                  </span>
                </div>
                <p className="text-xs text-stone-400 font-normal">Aprender Japonês Didático</p>
              </div>
            </div>
          </div>

          {/* Quick JLPT Level Selector */}
          <div className="hidden md:flex items-center bg-stone-800/90 p-1 rounded-xl border border-stone-700/60">
            <span className="text-xs font-semibold px-2.5 text-stone-400">Nível JLPT:</span>
            <div className="flex gap-1">
              {jlptLevels.map((lvl) => {
                const isActive = selectedJlpt === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => onJlptChange(lvl)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'text-stone-300 hover:text-white hover:bg-stone-700/70'
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stats & Sensei AI Shortcut */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Streak */}
            <div 
              onClick={onOpenStats}
              title={`Sequência de estudo: ${userStats.streakDays} dias!`}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700/60 text-amber-400 text-xs font-semibold cursor-pointer hover:bg-stone-700/60 transition"
            >
              <Flame size={15} className="fill-amber-400 text-amber-500 animate-bounce" />
              <span>{userStats.streakDays}d</span>
            </div>

            {/* XP & Level */}
            <div 
              onClick={onOpenStats}
              title={`Nível ${userStats.level} - ${getLevelTitle(userStats.level)}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700/60 text-rose-400 text-xs font-semibold cursor-pointer hover:bg-stone-700/60 transition"
            >
              <Trophy size={14} className="text-amber-400" />
              <span className="text-stone-200 font-bold">{userStats.xp} <span className="text-[10px] text-stone-400 font-normal">XP</span></span>
            </div>

            {/* Sensei Kenji AI Button */}
            <button
              type="button"
              onClick={onOpenSensei}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-600 to-red-500 text-white text-xs font-bold hover:brightness-110 shadow-sm transition active:scale-95 cursor-pointer"
            >
              <Bot size={15} />
              <span className="hidden sm:inline">Sensei IA</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-none text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={() => onTabChange('hub')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              currentTab === 'hub'
                ? 'bg-rose-600 text-white font-semibold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Compass size={16} />
            <span>Início & Guia</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('kana')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              currentTab === 'kana'
                ? 'bg-rose-600 text-white font-semibold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <span className="font-bold text-rose-300">あア</span>
            <span>Hiragana & Katakana</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('kanji')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              currentTab === 'kanji'
                ? 'bg-rose-600 text-white font-semibold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <span className="font-bold text-amber-300">漢</span>
            <span>Kanjis ({selectedJlpt})</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('grammar')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              currentTab === 'grammar'
                ? 'bg-rose-600 text-white font-semibold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <BookOpen size={16} />
            <span>Gramática & Vocabulário</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('games')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              currentTab === 'games'
                ? 'bg-rose-600 text-white font-semibold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Gamepad2 size={16} className="text-emerald-400" />
            <span className="font-bold text-emerald-300">Minigames & Memória</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('analyzer')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              currentTab === 'analyzer'
                ? 'bg-rose-600 text-white font-semibold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Sparkles size={16} className="text-purple-400" />
            <span>Analisador de Frases</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
