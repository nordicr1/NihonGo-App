import React, { useState } from 'react';
import { Store, User, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { AudioButton } from './AudioButton';
import { soundFX } from '../utils/audio';

interface Option {
  textJp: string;
  textPt: string;
  nextScene: string;
  isCorrect?: boolean;
}

interface Scene {
  id: string;
  speaker: string;
  speakerRole: 'clerk' | 'narrator' | 'player';
  textJp: string;
  textRomaji?: string;
  textPt: string;
  options: Option[];
}

const KONBINI_SCENES: Record<string, Scene> = {
  start: {
    id: 'start',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'いらっしゃいませ！',
    textRomaji: 'Irasshaimase!',
    textPt: 'Bem-vindo(a)!',
    options: [
      { textJp: 'おにぎりとお茶を買う', textPt: 'Comprar um onigiri e um chá', nextScene: 'buy_items' },
      { textJp: 'ただ見ているだけです', textPt: 'Só estou olhando (Sair)', nextScene: 'end_looking' }
    ]
  },
  buy_items: {
    id: 'buy_items',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'お弁当、温めますか？',
    textRomaji: 'Obentou, atatamemasu ka?',
    textPt: 'Gostaria de aquecer a marmita?',
    options: [
      { textJp: 'はい、お願いします。', textPt: 'Sim, por favor.', nextScene: 'bags' },
      { textJp: '大丈夫です。', textPt: 'Não precisa, está tudo bem.', nextScene: 'bags' },
      { textJp: '熱いです。', textPt: 'Está quente.', nextScene: 'bags' }
    ]
  },
  bags: {
    id: 'bags',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'レジ袋はご利用ですか？',
    textRomaji: 'Rejibukuro wa goriyou desu ka?',
    textPt: 'Vai precisar de sacola plástica?',
    options: [
      { textJp: 'はい、一枚お願いします。', textPt: 'Sim, uma por favor.', nextScene: 'pay' },
      { textJp: '袋はいらないです。', textPt: 'Não preciso de sacola.', nextScene: 'pay' }
    ]
  },
  pay: {
    id: 'pay',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'お会計、500円になります。',
    textRomaji: 'Okaikei, go-hyaku en ni narimasu.',
    textPt: 'O total dá 500 ienes.',
    options: [
      { textJp: 'Suicaでお願いします。', textPt: 'Com cartão Suica (Transporte), por favor.', nextScene: 'success' },
      { textJp: '現金で。', textPt: 'Em dinheiro.', nextScene: 'success' }
    ]
  },
  success: {
    id: 'success',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'ありがとうございました。またお越しくださいませ！',
    textRomaji: 'Arigatou gozaimashita. Mata okoshi kudasaimase!',
    textPt: 'Muito obrigado. Volte sempre!',
    options: [
      { textJp: 'Jogar Novamente', textPt: 'Voltar ao início', nextScene: 'start' }
    ]
  },
  end_looking: {
    id: 'end_looking',
    speaker: 'Narrador',
    speakerRole: 'narrator',
    textJp: 'あなたは何も買わずに店を出ました。',
    textRomaji: 'Anata wa nani mo kawazu ni mise o demashita.',
    textPt: 'Você saiu da loja sem comprar nada.',
    options: [
      { textJp: 'Jogar Novamente', textPt: 'Voltar ao início', nextScene: 'start' }
    ]
  }
};

interface Props {
  onGainXp: (amount: number, reason: string) => void;
}

export const KonbiniSimulator: React.FC<Props> = ({ onGainXp }) => {
  const [currentSceneId, setCurrentSceneId] = useState<string>('start');
  const [history, setHistory] = useState<{scene: Scene, choice?: Option}[]>([]);
  
  const scene = KONBINI_SCENES[currentSceneId];

  const handleChoice = (option: Option) => {
    soundFX.playSuccess();
    
    // If returning to start, reset history
    if (option.nextScene === 'start') {
      setHistory([]);
      setCurrentSceneId('start');
      return;
    }

    setHistory(prev => [...prev, { scene, choice: option }]);
    setCurrentSceneId(option.nextScene);
    
    if (option.nextScene === 'success') {
      onGainXp(30, 'Sobreviveu à Loja de Conveniência (Konbini)!');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="bg-gradient-to-b from-stone-900 to-indigo-950 rounded-3xl overflow-hidden shadow-2xl border border-stone-700/50 flex flex-col min-h-[600px] relative">
        
        {/* Background Visual (Abstract Konbini) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex flex-col justify-end pb-40">
           <div className="w-full h-40 bg-gradient-to-t from-emerald-500/20 to-transparent" />
        </div>

        {/* Header */}
        <div className="bg-black/40 backdrop-blur-md p-4 sm:p-6 flex items-center justify-between border-b border-white/10 z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
              <Store className="text-emerald-400" size={24} />
            </div>
            <div>
              <h2 className="text-white font-black text-xl tracking-wider">KONBINI SIM</h2>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Visual Novel Training</p>
            </div>
          </div>
        </div>

        {/* Scene Area */}
        <div className="flex-1 p-4 sm:p-8 flex flex-col justify-end z-10 relative">
          
          {/* Character Sprite Placeholder */}
          {scene.speakerRole === 'clerk' && (
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2 text-[12rem] filter drop-shadow-2xl animate-fadeIn">
              💁🏻‍♀️
            </div>
          )}

          {/* Dialog Box */}
          <div className="bg-stone-900/90 backdrop-blur-xl p-6 rounded-2xl border-2 border-stone-600 shadow-2xl relative mb-6">
             <div className="absolute -top-4 left-6 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest shadow-md border border-emerald-400">
               {scene.speaker}
             </div>
             
             <div className="mt-2 flex items-start justify-between gap-4">
               <div>
                 <p className="text-white text-2xl sm:text-3xl font-black mb-2">{scene.textJp}</p>
                 {scene.textRomaji && <p className="text-emerald-200 font-mono text-sm mb-1">{scene.textRomaji}</p>}
                 <p className="text-stone-400 text-sm">{scene.textPt}</p>
               </div>
               
               {scene.speakerRole === 'clerk' && (
                 <div className="mt-2">
                   <AudioButton text={scene.textJp} size="lg" />
                 </div>
               )}
             </div>
          </div>

          {/* Player Options */}
          <div className="space-y-3">
            {scene.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(opt)}
                className="w-full bg-stone-800/80 hover:bg-emerald-700/80 backdrop-blur-md border border-stone-600 hover:border-emerald-400 p-4 rounded-xl text-left transition-all active:scale-95 group flex items-center justify-between shadow-md cursor-pointer"
              >
                <div>
                  <p className="text-white font-bold text-lg">{opt.textJp}</p>
                  <p className="text-stone-400 group-hover:text-emerald-200 text-sm transition-colors">{opt.textPt}</p>
                </div>
                <ChevronRight className="text-stone-500 group-hover:text-emerald-300 transition-colors" />
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
