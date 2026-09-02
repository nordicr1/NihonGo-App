import React, { useState, useEffect } from 'react';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { LoginScreen } from './components/LoginScreen';
import { Loader2 } from 'lucide-react';

import { JLPTLevel, UserStats } from './types';
import { loadUserStats, saveUserStats, calculateLevel, getLevelTitle } from './utils/storage';
import { generateDailyQuests } from './utils/quests';
import { Header } from './components/Header';
import { HomeHub } from './components/HomeHub';
import { KanaExplorer } from './components/KanaExplorer';
import { KanjiDictionary } from './components/KanjiDictionary';
import { VocabGrammarHub } from './components/VocabGrammarHub';
import { JlptTestsHub } from './components/JlptTestsHub';
import { GamesHub } from './components/GamesHub';
import { SentenceAnalyzer } from './components/SentenceAnalyzer';
import { SenseiChat } from './components/SenseiChat';
import { UserProgressModal } from './components/UserProgressModal';
import { CalligraphyHub } from './components/CalligraphyHub';
import { ConversationHub } from './components/ConversationHub';
import { Sparkles, Bot, Zap } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const [currentTab, setCurrentTab] = useState<
    'hub' | 'kana' | 'kanji' | 'grammar' | 'tests' | 'games' | 'analyzer' | 'sensei' | 'drawing' | 'conversation'
  >('hub');
  const [selectedJlpt, setSelectedJlpt] = useState<JLPTLevel>('N5');
  const [userStats, setUserStats] = useState<UserStats>(loadUserStats);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isSenseiOpen, setIsSenseiOpen] = useState(false);
  const [xpToast, setXpToast] = useState<{ amount: number; reason: string } | null>(null);
  const [levelUpToast, setLevelUpToast] = useState<{ level: number; title: string } | null>(null);
  const prevLevelRef = React.useRef(userStats.level);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        import('./services/progressService').then(async ({ fetchUserStatsFromCloud, saveUserStatsToCloud }) => {
          const cloudStats = await fetchUserStatsFromCloud(currentUser.uid);
          if (cloudStats) {
            setUserStats(cloudStats);
          } else {
            // Se não existe na nuvem, salva o localStorage atual lá
            const localStats = loadUserStats();
            await saveUserStatsToCloud(currentUser.uid, localStats);
          }
        }).catch(err => console.error(err));
      }
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  // Save stats on update
  useEffect(() => {
    saveUserStats(userStats);
    if (user) {
      import('./services/progressService').then(({ saveUserStatsToCloud }) => {
        saveUserStatsToCloud(user.uid, userStats);
      }).catch(err => console.error(err));
    }
  }, [userStats, user]);

  // Check for Level Up
  useEffect(() => {
    if (userStats.level > prevLevelRef.current) {
      const title = getLevelTitle(userStats.level);
      setLevelUpToast({ level: userStats.level, title });
      setTimeout(() => {
        setLevelUpToast(null);
      }, 5000);
    }
    prevLevelRef.current = userStats.level;
  }, [userStats.level]);
  const [achievementToast, setAchievementToast] = useState<{ title: string; icon: string } | null>(null);

  // Heart Regeneration Timer (1 per hour)
  useEffect(() => {
    if (userStats.hearts < 5) {
      const interval = setInterval(() => {
        const now = Date.now();
        const timePassed = now - userStats.lastHeartRegenTime;
        if (timePassed > 60 * 60 * 1000) { // 1 hora
          setUserStats(prev => ({
            ...prev,
            hearts: Math.min(5, prev.hearts + 1),
            lastHeartRegenTime: now
          }));
        }
      }, 60000); // Check every minute
      return () => clearInterval(interval);
    }
  }, [userStats.hearts, userStats.lastHeartRegenTime]);

  // Daily Quests Generation
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (userStats.lastQuestDate !== today) {
      setUserStats(prev => ({
        ...prev,
        dailyQuests: generateDailyQuests(),
        lastQuestDate: today
      }));
    }
  }, [userStats.lastQuestDate]);

  if (loadingAuth) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center">
        <Loader2 size={48} className="text-rose-500 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  const handleLoseHeart = () => {
    setUserStats(prev => ({
      ...prev,
      hearts: Math.max(0, prev.hearts - 1),
      lastHeartRegenTime: prev.hearts === 5 ? Date.now() : prev.lastHeartRegenTime
    }));
  };

  const handleGainXp = (amount: number, reason: string) => {
    setUserStats((prev) => {
      const newXp = prev.xp + amount;
      const newLevel = calculateLevel(newXp);
      const unlocked = [...prev.unlockedBadges];
      let newHearts = prev.hearts;

      // Heart recovery by studying theory (Grammar, Vocab, Kanji Read)
      const isKana = reason.includes('Kana') && !reason.toLowerCase().includes('quiz');
      const isOtherTheory = reason.includes('Gramática') || reason.includes('Vocabulário') || reason.includes('Kanji');
      
      let newKanaForHeart = prev.kanaForHeartProgress || 0;

      if (isOtherTheory && newHearts < 5 && amount > 0) {
        newHearts = Math.min(5, newHearts + 1);
        if (!unlocked.includes('heart_recovery')) unlocked.push('heart_recovery');
      } else if (isKana && newHearts < 5 && amount > 0) {
        newKanaForHeart += 1;
        if (newKanaForHeart >= 15) {
          newHearts = Math.min(5, newHearts + 1);
          newKanaForHeart = 0;
          if (!unlocked.includes('heart_recovery')) unlocked.push('heart_recovery');
        }
      }

      // Check Badges
      const checkBadge = (id: string, cond: boolean, title: string, icon: string) => {
        if (!unlocked.includes(id) && cond) {
          unlocked.push(id);
          setAchievementToast({ title, icon });
          setTimeout(() => setAchievementToast(null), 5000);
        }
      };

      checkBadge('kana_novice', reason.includes('Kana'), 'Iniciante do Kana', '🌸');
      checkBadge('kanji_hunter', reason.includes('Kanji'), 'Caçador de Kanjis', '⛩️');
      checkBadge('memory_master', reason.includes('Memória'), 'Mestre da Memória', '🧠');
      checkBadge('jlpt_challenger', reason.includes('JLPT'), 'Aspirante ao JLPT', '🏆');
      checkBadge('sentence_builder', reason.includes('Frase'), 'Arquiteto de Frases', '📜');
      checkBadge('streak_3', prev.streakDays >= 3, 'Dedicação Contínua', '🔥');
      checkBadge('streak_7', prev.streakDays >= 7, 'Estudioso Implacável', '☄️');
      checkBadge('xp_1000', newXp >= 1000, 'Despertar do Poder', '✨');
      checkBadge('xp_5000', newXp >= 5000, 'Super Saiyajin', '⚡');
      checkBadge('sensei_friend', reason.includes('Sensei'), 'Discípulo do Sensei Kenji', '🤖');

      // Update Daily Quests Progress
      const updatedQuests = prev.dailyQuests.map(q => {
        if (q.isRedeemed || q.progress >= q.target) return q;
        let increment = 0;
        if (q.type === 'gain_xp') increment = amount;
        else if (q.type === 'study_grammar' && reason.includes('Gramática')) increment = 1;
        else if (q.type === 'study_vocab' && reason.includes('Vocabulário')) increment = 1;
        else if (q.type === 'talk_sensei' && reason.includes('Sensei')) increment = 1;
        else if (q.type === 'play_memory' && reason.includes('Memória')) increment = 1;
        else if (q.type === 'play_jlpt' && reason.includes('JLPT') && !reason.includes('Concluiu')) increment = 1; // 1 per question answered correctly

        if (increment > 0) {
          return { ...q, progress: Math.min(q.target, q.progress + increment) };
        }
        return q;
      });

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        hearts: newHearts,
        unlockedBadges: unlocked,
        dailyQuests: updatedQuests,
        kanaForHeartProgress: newKanaForHeart,
        lastHeartRegenTime: (prev.hearts < 5 && newHearts === 5) ? Date.now() : prev.lastHeartRegenTime
      };
    });

    setXpToast({ amount, reason });
    setTimeout(() => {
      setXpToast(null);
    }, 2800);
  };

  const handleRedeemQuest = (questId: string) => {
    const quest = userStats.dailyQuests.find(q => q.id === questId);
    if (!quest || quest.isRedeemed || quest.progress < quest.target) return;

    setUserStats(prev => ({
      ...prev,
      dailyQuests: prev.dailyQuests.map(q => q.id === questId ? { ...q, isRedeemed: true } : q)
    }));
    
    // Add XP
    handleGainXp(quest.xpReward, 'Recompensa de Missão Diária');

    // Check if all quests are now redeemed
    const allRedeemed = userStats.dailyQuests.every(q => q.id === questId ? true : q.isRedeemed);
    if (allRedeemed) {
      setTimeout(() => {
        handleGainXp(100, 'Bônus Baú Diário! 🎁');
      }, 1000);
    }
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
      hearts: 5,
      lastHeartRegenTime: Date.now(),
      dailyQuests: [],
      lastQuestDate: ''
    };
    setUserStats(fresh);
    saveUserStats(fresh);
    setIsStatsOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans flex flex-col selection:bg-rose-200 selection:text-rose-900">
      {/* Header */}
      <Header
        currentTab={currentTab}
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
        onOpenStats={() => setIsStatsOpen(true)}
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
            onRedeemQuest={handleRedeemQuest}
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

        {currentTab === 'conversation' && (
          <ConversationHub
            selectedJlpt={selectedJlpt}
            onGainXp={handleGainXp}
          />
        )}

        {currentTab === 'drawing' && (
          <CalligraphyHub
            selectedJlpt={selectedJlpt}
            onGainXp={handleGainXp}
          />
        )}

        {currentTab === 'tests' && (
          <JlptTestsHub
            selectedJlpt={selectedJlpt}
            onSelectJlpt={setSelectedJlpt}
            onGainXp={handleGainXp}
            userStats={userStats}
            onLoseHeart={handleLoseHeart}
          />
        )}

        {currentTab === 'games' && (
          <GamesHub 
            selectedJlpt={selectedJlpt} 
            onGainXp={handleGainXp} 
            userStats={userStats}
            onLoseHeart={handleLoseHeart}
          />
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

      {/* Achievement Toast */}
      {achievementToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 bg-indigo-950 text-white rounded-2xl shadow-2xl border border-indigo-500/50 animate-bounce">
          <div className="text-3xl drop-shadow-md">{achievementToast.icon}</div>
          <div className="flex flex-col">
            <span className="text-xs text-indigo-300 font-bold uppercase tracking-wider">Conquista Desbloqueada!</span>
            <span className="font-black text-white text-base">{achievementToast.title}</span>
          </div>
        </div>
      )}

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

      {/* Level Up Toast Notification */}
      {levelUpToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 px-8 py-5 bg-gradient-to-br from-amber-500 to-rose-600 text-white rounded-2xl shadow-2xl border-2 border-white/20 animate-bounce">
          <div className="flex items-center gap-2">
            <Sparkles size={28} className="text-yellow-200 fill-yellow-200" />
            <span className="text-2xl font-black tracking-widest text-yellow-100 uppercase drop-shadow-md">
              Nível {levelUpToast.level}!
            </span>
            <Sparkles size={28} className="text-yellow-200 fill-yellow-200" />
          </div>
          <div className="text-sm font-bold text-white drop-shadow mt-1">
            Novo Rank: <span className="text-yellow-200 text-base">{levelUpToast.title}</span>
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
