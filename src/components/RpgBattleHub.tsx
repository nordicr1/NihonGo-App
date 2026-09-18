import React, { useState, useEffect } from 'react';
import { UserStats } from '../types';
import { VOCAB_N5 } from '../data/vocabN5';
import { Swords, Shield, Zap, Sparkles, Droplet } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface RpgBattleHubProps {
  userStats: UserStats;
  onGainXp: (amount: number, reason: string) => void;
  onLoseHeart: () => void;
}

const MONSTERS = [
  { id: 1, name: 'Slime de Tinta', emoji: '👾', maxHp: 150, color: 'text-indigo-500', size: 'text-7xl' },
  { id: 2, name: 'Goblin do Vocabulário', emoji: '👺', maxHp: 300, color: 'text-red-500', size: 'text-8xl' },
  { id: 3, name: 'Fantasma do Esquecimento', emoji: '👻', maxHp: 450, color: 'text-stone-300', size: 'text-[9rem]' },
  { id: 4, name: 'Ogro dos Kanjis', emoji: '👹', maxHp: 700, color: 'text-rose-600', size: 'text-[10rem]' },
  { id: 5, name: 'Dragão Ancião JLPT', emoji: '🐉', maxHp: 1500, color: 'text-emerald-500', size: 'text-[12rem]' },
];

const HERO_MAX_HP = 500;

export const RpgBattleHub: React.FC<RpgBattleHubProps> = ({ userStats, onGainXp, onLoseHeart }) => {
  const [currentMonsterIdx, setCurrentMonsterIdx] = useState(0);
  const [monsterHp, setMonsterHp] = useState(MONSTERS[0].maxHp);
  const [heroHp, setHeroHp] = useState(HERO_MAX_HP);
  
  const [question, setQuestion] = useState<any>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  
  // Animation States
  const [heroAnim, setHeroAnim] = useState('');
  const [monsterAnim, setMonsterAnim] = useState('');
  const [damageNumber, setDamageNumber] = useState<{value: number, type: 'hero' | 'monster'} | null>(null);

  // Generate a random question
  const generateQuestion = () => {
    const shuffled = [...VOCAB_N5].sort(() => 0.5 - Math.random());
    const target = shuffled[0];
    const wrongOptions = shuffled.slice(1, 4).map(v => v.meaningPt);
    
    const allOptions = [target.meaningPt, ...wrongOptions].sort(() => 0.5 - Math.random());
    
    setQuestion(target);
    setCorrectAnswer(target.meaningPt);
    setOptions(allOptions);
  };

  useEffect(() => {
    generateQuestion();
    setMonsterHp(MONSTERS[currentMonsterIdx].maxHp);
    setHeroHp(HERO_MAX_HP);
  }, [currentMonsterIdx]);

  const handleAttack = (selectedOpt: string) => {
    if (heroAnim || monsterAnim) return;

    if (selectedOpt === correctAnswer) {
      // Success! Hero attacks
      const damage = Math.floor(Math.random() * 30) + 40; // 40-70 dmg
      const isCritical = damage > 60;
      
      setHeroAnim('animate-dash-right');
      soundFX.playSuccess();

      setTimeout(() => {
        setMonsterAnim('animate-shake');
        setDamageNumber({ value: -damage, type: 'monster' });
        setMonsterHp(prev => Math.max(0, prev - damage));
        onGainXp(isCritical ? 10 : 5, isCritical ? 'Ataque Crítico!' : 'Ataque bem sucedido no RPG!');
      }, 200);

      setTimeout(() => {
        setHeroAnim('');
        setMonsterAnim('');
        setDamageNumber(null);
        
        setMonsterHp(currentHp => {
          if (currentHp <= 0) {
             onGainXp(50, `Derrotou o ${MONSTERS[currentMonsterIdx].name}!`);
             if (currentMonsterIdx < MONSTERS.length - 1) {
               setCurrentMonsterIdx(prev => prev + 1);
             } else {
               setCurrentMonsterIdx(0);
             }
             return MONSTERS[currentMonsterIdx < MONSTERS.length - 1 ? currentMonsterIdx + 1 : 0].maxHp;
          } else {
             generateQuestion();
             return currentHp;
          }
        });
      }, 1000);

    } else {
      // Miss! Monster attacks
      const damage = Math.floor(Math.random() * 40) + 50; // 50-90 dmg
      
      setMonsterAnim('animate-shake');
      
      setTimeout(() => {
        setHeroAnim('animate-shake');
        setDamageNumber({ value: -damage, type: 'hero' });
        setHeroHp(prev => Math.max(0, prev - damage));
        soundFX.playError();
        // Removed global onLoseHeart() per user request!
      }, 200);

      setTimeout(() => {
        setHeroAnim('');
        setMonsterAnim('');
        setDamageNumber(null);
        
        setHeroHp(currentHp => {
          if (currentHp <= 0) {
             // Hero died - reset
             setMonsterHp(MONSTERS[currentMonsterIdx].maxHp);
             generateQuestion();
             return HERO_MAX_HP;
          }
          return currentHp;
        });
      }, 1000);
    }
  };

  const monster = MONSTERS[currentMonsterIdx];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="bg-gradient-to-b from-indigo-900 to-stone-900 rounded-3xl p-6 sm:p-8 border border-indigo-500/30 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col">
        
        {/* Battle Header */}
        <div className="flex justify-between items-center bg-black/40 p-4 rounded-2xl border border-white/10 mb-8 backdrop-blur-md">
           
           {/* Hero HUD */}
           <div className="flex items-center gap-4">
             <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)] border-2 border-indigo-400">
               <Shield className="text-white" size={28} />
             </div>
             <div>
               <h3 className="text-white font-black text-xl tracking-wide flex items-center gap-2">
                 HERÓI <span className="text-xs font-medium text-indigo-300">HP: {heroHp}/{HERO_MAX_HP}</span>
               </h3>
               <div className="w-40 sm:w-48 h-4 bg-stone-800 rounded-full mt-1 overflow-hidden border border-white/10">
                 <div 
                   className="h-full bg-indigo-500 transition-all duration-300"
                   style={{ width: `${(heroHp / HERO_MAX_HP) * 100}%` }}
                 />
               </div>
             </div>
           </div>

           {/* Monster HUD */}
           <div className="flex flex-col items-end">
             <h3 className="text-white font-black text-xl tracking-wide text-right flex items-center gap-2">
               <span className="text-xs font-medium text-rose-300">HP: {monsterHp}/{monster.maxHp}</span> {monster.name}
             </h3>
             <div className="w-40 sm:w-48 h-4 bg-stone-800 rounded-full mt-1 overflow-hidden border border-white/10">
               <div 
                 className="h-full bg-rose-500 transition-all duration-300 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                 style={{ width: `${(monsterHp / monster.maxHp) * 100}%` }}
               />
             </div>
           </div>
        </div>

        {/* Battle Arena */}
        <div className="flex-1 flex items-center justify-between px-4 sm:px-12 relative">
          
          {/* Hero Sprite */}
          <div className={`relative transition-transform ${heroAnim}`}>
            <div className="text-8xl sm:text-9xl filter drop-shadow-2xl">
              🧙‍♂️
            </div>
            {damageNumber?.type === 'hero' && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl font-black text-rose-500 animate-float-up pointer-events-none drop-shadow-md">
                {damageNumber.value}
              </div>
            )}
          </div>

          {/* Spell / Question Box */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center w-full max-w-sm shadow-2xl">
             <span className="text-indigo-300 font-black tracking-widest uppercase text-xs mb-2 flex items-center gap-1">
               <Sparkles size={12}/> Ataque Inimigo
             </span>
             {question && (
               <>
                 <span className="text-5xl font-black text-white drop-shadow-lg mb-2">{question.word}</span>
                 <span className="text-xl text-indigo-200 font-mono font-bold tracking-widest">{question.reading}</span>
               </>
             )}
          </div>

          {/* Monster Sprite */}
          <div className={`relative transition-transform ${monsterAnim}`}>
            {monsterAnim === 'animate-shake' && damageNumber?.type === 'monster' && (
               <div className="absolute inset-0 flex items-center justify-center z-10 animate-slash pointer-events-none">
                  <div className="w-48 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] transform rotate-45" />
               </div>
            )}
            <div className={`${monster.size} filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]`}>
              {monster.emoji}
            </div>
            {damageNumber?.type === 'monster' && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-5xl font-black text-white animate-float-up pointer-events-none drop-shadow-[0_0_15px_rgba(220,38,38,0.9)]">
                {damageNumber.value}
              </div>
            )}
          </div>

        </div>

        {/* Action Menu */}
        <div className="mt-8 bg-black/40 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <div className="flex items-center gap-2 mb-4 text-white/50 text-sm font-black uppercase tracking-widest">
            <Swords size={16} />
            <span>Escolha a Magia de Contra-Ataque</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAttack(opt)}
                disabled={!!heroAnim || !!monsterAnim}
                className="bg-white/10 hover:bg-indigo-600 border border-white/20 hover:border-indigo-400 p-5 rounded-2xl text-left transition-all active:scale-95 group text-white font-bold text-lg sm:text-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between"
              >
                <span>{opt}</span>
                <Droplet size={20} className="opacity-0 group-hover:opacity-100 text-indigo-300 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
