import React, { useState, useEffect } from 'react';
import { UserStats } from '../types';
import { VOCAB_N5 } from '../data/vocabN5';
import { Swords, Shield, Heart, Zap, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface RpgBattleHubProps {
  userStats: UserStats;
  onGainXp: (amount: number, reason: string) => void;
  onLoseHeart: () => void;
}

const MONSTERS = [
  { id: 1, name: 'Slime de Tinta', emoji: '👾', maxHp: 3, color: 'text-indigo-500', size: 'text-7xl' },
  { id: 2, name: 'Goblin do Vocabulário', emoji: '👺', maxHp: 5, color: 'text-red-500', size: 'text-8xl' },
  { id: 3, name: 'Fantasma do Esquecimento', emoji: '👻', maxHp: 7, color: 'text-stone-300', size: 'text-[9rem]' },
  { id: 4, name: 'Ogro dos Kanjis', emoji: '👹', maxHp: 10, color: 'text-rose-600', size: 'text-[10rem]' },
  { id: 5, name: 'Dragão Ancião JLPT', emoji: '🐉', maxHp: 15, color: 'text-emerald-500', size: 'text-[12rem]' },
];

export const RpgBattleHub: React.FC<RpgBattleHubProps> = ({ userStats, onGainXp, onLoseHeart }) => {
  const [currentMonsterIdx, setCurrentMonsterIdx] = useState(0);
  const [monsterHp, setMonsterHp] = useState(MONSTERS[0].maxHp);
  const [heroHp, setHeroHp] = useState(3); // Temporary combat HP, distinct from global hearts
  
  const [question, setQuestion] = useState<any>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  
  // Animation States
  const [heroAnim, setHeroAnim] = useState('');
  const [monsterAnim, setMonsterAnim] = useState('');
  const [damageNumber, setDamageNumber] = useState<{value: number, type: 'hero' | 'monster'} | null>(null);

  // Generate a random question
  const generateQuestion = () => {
    // Pick 4 random vocab words
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
    setHeroHp(3);
  }, [currentMonsterIdx]);

  const handleAttack = (selectedOpt: string) => {
    if (heroAnim || monsterAnim) return; // Prevent spam

    if (selectedOpt === correctAnswer) {
      // Success! Hero attacks
      setHeroAnim('animate-dash-right');
      soundFX.playSuccess(); // We will use a standard sound for now

      setTimeout(() => {
        setMonsterAnim('animate-shake');
        setDamageNumber({ value: -1, type: 'monster' });
        setMonsterHp(prev => prev - 1);
        onGainXp(5, 'Ataque bem sucedido no RPG!');
      }, 200);

      setTimeout(() => {
        setHeroAnim('');
        setMonsterAnim('');
        setDamageNumber(null);
        
        if (monsterHp - 1 <= 0) {
           // Monster killed
           onGainXp(50, `Derrotou o ${MONSTERS[currentMonsterIdx].name}!`);
           if (currentMonsterIdx < MONSTERS.length - 1) {
             setCurrentMonsterIdx(prev => prev + 1);
           } else {
             // Beat the game loop
             setCurrentMonsterIdx(0);
           }
        } else {
           generateQuestion();
        }
      }, 1000);

    } else {
      // Miss! Monster attacks
      setMonsterAnim('animate-shake');
      
      setTimeout(() => {
        setHeroAnim('animate-shake');
        setDamageNumber({ value: -1, type: 'hero' });
        setHeroHp(prev => prev - 1);
        soundFX.playError();
        onLoseHeart();
      }, 200);

      setTimeout(() => {
        setHeroAnim('');
        setMonsterAnim('');
        setDamageNumber(null);
        
        if (heroHp - 1 <= 0) {
           // Hero died - reset monster
           setHeroHp(3);
           setMonsterHp(MONSTERS[currentMonsterIdx].maxHp);
           generateQuestion();
        }
      }, 1000);
    }
  };

  const monster = MONSTERS[currentMonsterIdx];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="bg-gradient-to-b from-indigo-900 to-stone-900 rounded-3xl p-6 sm:p-8 border border-indigo-500/30 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col">
        
        {/* Battle Header */}
        <div className="flex justify-between items-center bg-black/40 p-4 rounded-2xl border border-white/10 mb-8 backdrop-blur-md">
           <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg border-2 border-indigo-400">
               <Shield className="text-white" size={24} />
             </div>
             <div>
               <h3 className="text-white font-black text-xl tracking-wide">HERÓI</h3>
               <div className="flex gap-1 mt-1">
                 {[...Array(3)].map((_, i) => (
                   <Heart key={i} size={16} className={i < heroHp ? 'text-rose-500 fill-rose-500' : 'text-stone-600'} />
                 ))}
               </div>
             </div>
           </div>

           <div className="flex flex-col items-end">
             <h3 className="text-white font-black text-xl tracking-wide text-right">{monster.name}</h3>
             <div className="w-40 h-4 bg-stone-800 rounded-full mt-2 overflow-hidden border border-white/10">
               <div 
                 className="h-full bg-rose-500 transition-all duration-300"
                 style={{ width: `${(monsterHp / monster.maxHp) * 100}%` }}
               />
             </div>
           </div>
        </div>

        {/* Battle Arena */}
        <div className="flex-1 flex items-center justify-between px-4 sm:px-12 relative">
          
          {/* Hero */}
          <div className={`relative transition-transform ${heroAnim}`}>
            <div className="text-8xl sm:text-9xl filter drop-shadow-2xl">
              🧙‍♂️
            </div>
            {damageNumber?.type === 'hero' && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-3xl font-black text-rose-500 animate-float-up pointer-events-none drop-shadow-md">
                {damageNumber.value}
              </div>
            )}
          </div>

          {/* Spell / Question Box in the middle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center max-w-sm shadow-2xl">
             <span className="text-indigo-300 font-black tracking-widest uppercase text-xs mb-2 flex items-center gap-1">
               <Sparkles size={12}/> Ataque do Inimigo
             </span>
             {question && (
               <>
                 <span className="text-5xl font-black text-white drop-shadow-lg mb-2">{question.word}</span>
                 <span className="text-lg text-indigo-200 font-mono">{question.reading}</span>
               </>
             )}
          </div>

          {/* Monster */}
          <div className={`relative transition-transform ${monsterAnim}`}>
            {monsterAnim === 'animate-shake' && damageNumber?.type === 'monster' && (
               <div className="absolute inset-0 flex items-center justify-center z-10 animate-slash">
                  <div className="w-40 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] transform rotate-45" />
               </div>
            )}
            <div className={`${monster.size} filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]`}>
              {monster.emoji}
            </div>
            {damageNumber?.type === 'monster' && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl font-black text-white animate-float-up pointer-events-none drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                {damageNumber.value}
              </div>
            )}
          </div>

        </div>

        {/* Action Menu */}
        <div className="mt-8 bg-black/40 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <div className="flex items-center gap-2 mb-4 text-white/50 text-sm font-black uppercase tracking-widest">
            <Swords size={16} />
            <span>Escolha seu Ataque</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAttack(opt)}
                disabled={!!heroAnim || !!monsterAnim}
                className="bg-white/10 hover:bg-indigo-600 border border-white/20 hover:border-indigo-400 p-4 rounded-2xl text-left transition-all active:scale-95 group text-white font-bold text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between"
              >
                <span>{opt}</span>
                <Zap size={20} className="opacity-0 group-hover:opacity-100 text-yellow-300 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
