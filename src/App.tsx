import React, { useState, useEffect } from 'react';
import { JLPTLevel, UserStats } from './types';
import { loadUserStats, saveUserStats, calculateLevel } from './utils/storage';
import { Header } from './components/Header';
import { HomeHub } from './components/HomeHub';
import { KanaExplorer } from './components/KanaExplorer';
import { KanjiDictionary } from './components/KanjiDictionary';
import { VocabGrammarHub } from './components/VocabGrammarHub';
import { VerbsAdjectivesHub } from './components/VerbsAdjectivesHub';
import { GamesHub } from './components/GamesHub';
import { SentenceAnalyzer } from './components/SentenceAnalyzer';
import { SenseiChat } from './components/SenseiChat';
import { UserProgressModal } from './components/UserProgressModal';
import { CalligraphyHub } from './components/CalligraphyHub';
import { Sparkles, Bot, Zap } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<
    'hub' | 'kana' | 'kanji' | 'grammar' | 'verbs' | 'games' | 'analyzer' | 'sensei' | 'drawing'
  >('hub');
  const [selectedJlpt, setSelectedJlpt] = useState<JLPTLevel>('N5');
  const [userStats, setUserStats] = useState<UserStats>(loadUserStats);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isSenseiOpen, setIsSenseiOpen] = useState(false);
  const [xpToast, setXpToast] = useState<{ amount: number; reason: string } | null>(null);

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nihongo-theme');
      if (saved === 'dark' || saved === 'light') return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply dark mode class to HTML
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('nihongo-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('nihongo-theme', 'light');
    }
  }, [isDarkMode]);

  // Save stats on update
  useEffect(() => {
    saveUserStats(userStats);
  }, [userStats]);

  const handleGainXp = (amount: number, reason: string) => {
    setUserStats((prev) => {
      const newXp = prev.xp + amount;
      const newLevel = calculateLevel(newXp);
      const unlocked = [...prev.unlockedBadges];

      // Badges triggers
      if (!unlocked.includes('kana_novice') && reason.includes('Kana')) {
        unlocked.push('kana_novice');
      }
      if (!unlocked.includes('kanji_hunter') && reason.includes('Kanji')) {
        unlocked.push('kanji_hunter');
      }
      if (!unlocked.includes('memory_master') && reason.includes('Memória')) {
        unlocked.push('memory_master');
      }
      if (!unlocked.includes('jlpt_challenger') && reason.includes('JLPT')) {
        unlocked.push('jlpt_challenger');
      }
      if (!unlocked.includes('sentence_builder') && reason.includes('Frase')) {
        unlocked.push('sentence_builder');
      }

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        unlockedBadges: unlocked,
      };
    });

    setXpToast({ amount, reason });
    setTimeout(() => {
      setXpToast(null);
    }, 2800);
  };

  const handleResetStats = () => {
    const fresh: UserStats = {
      xp: 0,
      level: 1,
      streakDays: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      gamesPlayed: 0,
      quizzesCompleted: 0,
      kanjisLearned: [],
      kanasMastered: [],
      unlockedBadges: ['first_step'],
    };
    setUserStats(fresh);
    saveUserStats(fresh);
    setIsStatsOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans flex flex-col selection:bg-rose-200 selection:text-rose-900 dark:selection:bg-rose-900 dark:selection:text-rose-100 transition-colors duration-200">
      {/* Header */}
      <Header
        currentTab={currentTab}
        onTabChange={(tab) => {
          if (tab === 'sensei') {
            setIsSenseiOpen(true);
          } else {
            setCurrentTab(tab as any);
          }
        }}
        selectedJlpt={selectedJlpt}
        onJlptChange={setSelectedJlpt}
        userStats={userStats}
        onOpenStats={() => setIsStatsOpen(true)}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenSensei={() => setIsSenseiOpen(true)}
      />

      {/* Main Tab Content */}
      <main className="flex-1 pb-16">
        {currentTab === 'hub' && (
          <HomeHub
            onTabChange={(tab) => {
              if (tab === 'sensei') {
                setIsSenseiOpen(true);
              } else {
                setCurrentTab(tab);
              }
            }}
            selectedJlpt={selectedJlpt}
            onJlptChange={setSelectedJlpt}
            userStats={userStats}
            onOpenSensei={() => setIsSenseiOpen(true)}
          />
        )}

        {currentTab === 'kana' && <KanaExplorer onGainXp={handleGainXp} />}

        {currentTab === 'kanji' && (
          <KanjiDictionary
            selectedJlpt={selectedJlpt}
            onSelectJlpt={setSelectedJlpt}
            onGainXp={handleGainXp}
          />
        )}

        {currentTab === 'grammar' && (
          <VocabGrammarHub
            selectedJlpt={selectedJlpt}
            onSelectJlpt={setSelectedJlpt}
            onGainXp={handleGainXp}
          />
        )}

        {currentTab === 'drawing' && (
          <CalligraphyHub
            selectedJlpt={selectedJlpt}
            onGainXp={handleGainXp}
          />
        )}

        {currentTab === 'verbs' && (
          <VerbsAdjectivesHub
            selectedJlpt={selectedJlpt}
            onSelectJlpt={setSelectedJlpt}
            onGainXp={handleGainXp}
          />
        )}

        {currentTab === 'games' && (
          <GamesHub selectedJlpt={selectedJlpt} onGainXp={handleGainXp} />
        )}

        {currentTab === 'analyzer' && <SentenceAnalyzer onGainXp={handleGainXp} />}
      </main>

      {/* Floating AI Sensei Quick Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          type="button"
          onClick={() => setIsSenseiOpen(true)}
          title="Falar com o Sensei Kenji (IA)"
          className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition cursor-pointer border-2 border-white/40"
        >
          <Bot size={20} className="animate-bounce" />
          <span className="font-bold text-sm hidden sm:inline">Sensei Kenji</span>
        </button>
      </div>

      {/* XP Toast Notification */}
      {xpToast && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-stone-900 text-white rounded-2xl shadow-xl border border-stone-700 animate-fadeIn">
          <div className="w-7 h-7 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center font-black text-xs">
            <Zap size={14} className="fill-stone-950" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-300">
              +{xpToast.amount} XP Ganho!
            </div>
            <div className="text-[11px] text-stone-300">{xpToast.reason}</div>
          </div>
        </div>
      )}

      {/* Sensei AI Chat Modal */}
      <SenseiChat
        isOpen={isSenseiOpen}
        onClose={() => setIsSenseiOpen(false)}
        onGainXp={handleGainXp}
      />

      {/* User Progress & Badges Modal */}
      <UserProgressModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        stats={userStats}
        onResetStats={handleResetStats}
      />
    </div>
  );
}
