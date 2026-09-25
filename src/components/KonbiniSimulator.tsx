import React, { useState, useEffect } from 'react';
import { Store, HeartCrack, Sparkles, ChevronRight, AlertTriangle, Smile } from 'lucide-react';
import { AudioButton } from './AudioButton';
import { soundFX } from '../utils/audio';

interface Option {
  textJp: string;
  textPt: string;
  nextScene: string;
  moodImpact: number;
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
      { textJp: 'こんにちは。', textPt: 'Dizer "Olá" (Educado)', nextScene: 'ask_help', moodImpact: 10 },
      { textJp: '（無言で弁当をレジに置く）', textPt: 'Ignorar e colocar a marmita no caixa', nextScene: 'bento_checkout', moodImpact: -10 },
      { textJp: '俺は海賊王になる男だ！', textPt: '"Eu serei o Rei dos Piratas!"', nextScene: 'weird_customer', moodImpact: -40 }
    ]
  },
  weird_customer: {
    id: 'weird_customer',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'えっ…すみません、何かお困りですか？',
    textRomaji: 'Eッ... sumimasen, nani ka okomari desu ka?',
    textPt: 'Eh... com licença, posso ajudá-lo(a) em algo?',
    options: [
      { textJp: 'お弁当をください。', textPt: 'Voltar ao normal: "Uma marmita, por favor."', nextScene: 'bento_checkout', moodImpact: 15 },
      { textJp: '君のことが好きだ！', textPt: '"Eu gosto de você!" (Cantar a atendente)', nextScene: 'kicked_out', moodImpact: -100 }
    ]
  },
  ask_help: {
    id: 'ask_help',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: '何かお探しですか？',
    textRomaji: 'Nani ka osagashi desu ka?',
    textPt: 'Está procurando alguma coisa?',
    options: [
      { textJp: 'からあげクンレッドを一つください。', textPt: 'Quero um frango frito (Karaage Red), por favor.', nextScene: 'karaage_checkout', moodImpact: 5 },
      { textJp: 'お弁当を買いたいです。', textPt: 'Quero comprar uma marmita (Bento).', nextScene: 'bento_checkout', moodImpact: 5 },
      { textJp: 'ただ見ているだけです。', textPt: 'Só estou olhando.', nextScene: 'end_looking', moodImpact: 0 }
    ]
  },
  karaage_checkout: {
    id: 'karaage_checkout',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'かしこまりました。以上でよろしいですか？',
    textRomaji: 'Kashikomarimashita. Ijou de yoroshii desu ka?',
    textPt: 'Entendido. Seria apenas isso?',
    options: [
      { textJp: 'はい、大丈夫です。', textPt: 'Sim, está ótimo.', nextScene: 'ask_bag', moodImpact: 5 },
      { textJp: 'お弁当もください。', textPt: 'Me dê uma marmita também.', nextScene: 'bento_checkout', moodImpact: 0 }
    ]
  },
  bento_checkout: {
    id: 'bento_checkout',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'お弁当、温めますか？',
    textRomaji: 'Obentou, atatamemasu ka?',
    textPt: 'Gostaria de aquecer a marmita?',
    options: [
      { textJp: 'はい、お願いします。', textPt: 'Sim, por favor.', nextScene: 'ask_bag', moodImpact: 5 },
      { textJp: '大丈夫です。', textPt: 'Não precisa, estou bem assim.', nextScene: 'ask_bag', moodImpact: 0 },
      { textJp: '冷たいのが好きです。', textPt: 'Gosto dela gelada.', nextScene: 'ask_bag', moodImpact: -5 },
      { textJp: '水でやってください。', textPt: 'Esquente com água (?) (Frase sem sentido)', nextScene: 'clerk_confused', moodImpact: -30 }
    ]
  },
  clerk_confused: {
    id: 'clerk_confused',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'えっ？水ですか？あの…電子レンジで温めますが…',
    textRomaji: 'Eッ? Mizu desu ka? Ano... denshirenji de atatamemasu ga...',
    textPt: 'Hã? Água? Humm... nós aquecemos no micro-ondas, senhor(a)...',
    options: [
      { textJp: 'すみません、普通に温めてください。', textPt: 'Desculpe, aqueça normalmente.', nextScene: 'ask_bag', moodImpact: 10 },
      { textJp: '（そのまま無視する）', textPt: 'Ignorar a atendente em silêncio', nextScene: 'ask_bag', moodImpact: -20 }
    ]
  },
  ask_bag: {
    id: 'ask_bag',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'レジ袋はご利用ですか？',
    textRomaji: 'Rejibukuro wa goriyou desu ka?',
    textPt: 'Vai precisar de sacola plástica?',
    options: [
      { textJp: 'はい、一枚お願いします。', textPt: 'Sim, uma por favor.', nextScene: 'pay', moodImpact: 5 },
      { textJp: '袋はいらないです。', textPt: 'Não preciso de sacola (Ecológico).', nextScene: 'pay', moodImpact: 10 },
      { textJp: '手で持ちます！', textPt: 'Vou levar na mão! (Gritando)', nextScene: 'pay', moodImpact: -15 }
    ]
  },
  pay: {
    id: 'pay',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'お会計、750円になります。',
    textRomaji: 'Okaikei, nana-hyaku go-juu en ni narimasu.',
    textPt: 'O total dá 750 ienes.',
    options: [
      { textJp: 'Suicaでお願いします。', textPt: 'Com cartão Suica (Transporte), por favor.', nextScene: 'success', moodImpact: 10 },
      { textJp: '現金で。', textPt: 'Em dinheiro.', nextScene: 'success', moodImpact: 0 },
      { textJp: 'お金がないです…', textPt: 'Eu não tenho dinheiro...', nextScene: 'kicked_out_poor', moodImpact: -100 }
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
      { textJp: 'Jogar Novamente', textPt: 'Voltar ao início', nextScene: 'start', moodImpact: 0 }
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
      { textJp: 'Jogar Novamente', textPt: 'Voltar ao início', nextScene: 'start', moodImpact: 0 }
    ]
  },
  kicked_out: {
    id: 'kicked_out',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'きっ、気持ち悪い！警察を呼びますよ！出て行って！',
    textRomaji: 'Ki, kimochi warui! Keisatsu o yobimasu yo! Dete itte!',
    textPt: 'Q-que nojo! Eu vou chamar a polícia! Saia daqui!',
    options: [
      { textJp: 'Tentar Novamente (-1 Vida)', textPt: 'Voltar ao início de forma mais respeitosa', nextScene: 'start', moodImpact: 0 }
    ]
  },
  kicked_out_poor: {
    id: 'kicked_out_poor',
    speaker: 'Atendente',
    speakerRole: 'clerk',
    textJp: 'はあ？ふざけないでください。さっさと帰れ！',
    textRomaji: 'Haa? Fuzakenaide kudasai. Sassato kaere!',
    textPt: 'Hã? Não brinque comigo. Vá embora logo!',
    options: [
      { textJp: 'Tentar Novamente (-1 Vida)', textPt: 'Voltar ao início com dinheiro', nextScene: 'start', moodImpact: 0 }
    ]
  }
};

interface Props {
  onGainXp: (amount: number, reason: string) => void;
  onLoseHeart: () => void;
}

export const KonbiniSimulator: React.FC<Props> = ({ onGainXp, onLoseHeart }) => {
  const [currentSceneId, setCurrentSceneId] = useState<string>('start');
  const [clerkMood, setClerkMood] = useState<number>(80); // 0 to 100
  
  const scene = KONBINI_SCENES[currentSceneId];

  // Derive sprite from mood
  const getSprite = () => {
    if (scene.speakerRole === 'narrator') return '';
    if (clerkMood >= 80) return '💁🏻‍♀️✨'; // Happy
    if (clerkMood >= 50) return '💁🏻‍♀️';   // Neutral
    if (clerkMood >= 20) return '🙍🏻‍♀️💧'; // Confused / Stressed
    return '🙅🏻‍♀️💢';                      // Angry
  };

  const getMoodColor = () => {
    if (clerkMood >= 80) return 'bg-emerald-500';
    if (clerkMood >= 50) return 'bg-yellow-400';
    if (clerkMood >= 20) return 'bg-orange-500';
    return 'bg-rose-600';
  };

  const handleChoice = (option: Option) => {
    // If returning to start, reset everything
    if (option.nextScene === 'start') {
      setClerkMood(80);
      setCurrentSceneId('start');
      soundFX.playCardFlip();
      return;
    }

    // Apply Mood Impact
    setClerkMood(prev => Math.max(0, Math.min(100, prev + option.moodImpact)));
    
    setCurrentSceneId(option.nextScene);
    
    // Check if the choice leads to failure
    if (option.nextScene === 'kicked_out' || option.nextScene === 'kicked_out_poor') {
      soundFX.playError();
      onLoseHeart();
      return;
    }

    soundFX.playSuccess();
    
    // Check if success
    if (option.nextScene === 'success') {
      // Bonus XP if mood is very high
      if (clerkMood + option.moodImpact >= 90) {
        onGainXp(50, 'Cliente Perfeito! Konbini Finalizado (Com Excelência)');
      } else {
        onGainXp(30, 'Sobreviveu ao Konbini!');
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="bg-gradient-to-b from-stone-900 to-indigo-950 rounded-3xl overflow-hidden shadow-2xl border border-stone-700/50 flex flex-col min-h-[600px] sm:min-h-[700px] relative">
        
        {/* Background Ambient */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex flex-col justify-end pb-40">
           <div className="w-full h-40 bg-gradient-to-t from-teal-500/20 to-transparent" />
        </div>

        {/* Header HUD */}
        <div className="bg-black/40 backdrop-blur-md p-4 flex items-center justify-between border-b border-white/10 z-10 relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/50">
              <Store className="text-teal-400" size={24} />
            </div>
            <div>
              <h2 className="text-white font-black text-xl tracking-wider">KONBINI SIM</h2>
              <p className="text-teal-400 text-xs font-bold uppercase tracking-widest">Vida Real Japonesa</p>
            </div>
          </div>

          {/* Mood Meter */}
          <div className="flex flex-col items-end gap-1">
             <div className="flex items-center gap-2">
               <span className="text-xs font-bold uppercase tracking-widest text-stone-300">Humor do Caixa</span>
               {clerkMood >= 80 ? <Smile size={16} className="text-emerald-400" /> : <AlertTriangle size={16} className={clerkMood <= 20 ? 'text-rose-500 animate-pulse' : 'text-orange-400'} />}
             </div>
             <div className="w-32 sm:w-48 h-3 bg-stone-800 rounded-full overflow-hidden border border-white/10 relative">
                <div 
                  className={`h-full transition-all duration-500 ${getMoodColor()}`} 
                  style={{ width: `${clerkMood}%` }}
                />
             </div>
          </div>
        </div>

        {/* Scene Area */}
        <div className="flex-1 p-4 sm:p-8 flex flex-col justify-end z-10 relative mt-10">
          
          {/* Character Sprite */}
          {scene.speakerRole === 'clerk' && (
            <div className={`absolute bottom-40 left-1/2 -translate-x-1/2 text-[10rem] sm:text-[13rem] filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-all duration-300 ${clerkMood <= 20 ? 'animate-shake' : 'animate-fadeIn'}`}>
              {getSprite()}
            </div>
          )}

          {/* Dialog Box */}
          <div className={`bg-stone-900/95 backdrop-blur-xl p-5 sm:p-7 rounded-2xl border-2 shadow-2xl relative mb-6 transition-colors duration-300 ${scene.speakerRole === 'narrator' ? 'border-indigo-500/50' : clerkMood <= 20 ? 'border-rose-500/80' : 'border-stone-600'}`}>
             <div className={`absolute -top-4 left-6 text-white px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest shadow-md border ${scene.speakerRole === 'narrator' ? 'bg-indigo-600 border-indigo-400' : clerkMood <= 20 ? 'bg-rose-600 border-rose-400' : 'bg-teal-600 border-teal-400'}`}>
               {scene.speaker}
             </div>
             
             <div className="mt-2 flex items-start justify-between gap-4">
               <div>
                 <p className={`text-2xl sm:text-3xl font-black mb-2 leading-tight ${clerkMood <= 20 && scene.speakerRole === 'clerk' ? 'text-rose-100' : 'text-white'}`}>{scene.textJp}</p>
                 {scene.textRomaji && <p className="text-teal-200 font-mono text-sm sm:text-base mb-1">{scene.textRomaji}</p>}
                 <p className="text-stone-400 text-sm sm:text-base">{scene.textPt}</p>
               </div>
               
               {scene.speakerRole === 'clerk' && (
                 <div className="mt-2 shrink-0">
                   <AudioButton text={scene.textJp} size="lg" />
                 </div>
               )}
             </div>
          </div>

          {/* Player Options */}
          <div className="space-y-3 max-h-[300px] overflow-y-auto scrollbar-hide">
            {scene.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(opt)}
                className="w-full bg-stone-800/90 hover:bg-teal-700/90 backdrop-blur-md border border-stone-600 hover:border-teal-400 p-4 sm:p-5 rounded-xl text-left transition-all active:scale-95 group flex items-center justify-between shadow-md cursor-pointer"
              >
                <div className="pr-4">
                  <p className="text-white font-bold text-lg sm:text-xl leading-snug">{opt.textJp}</p>
                  <p className="text-stone-400 group-hover:text-teal-100 text-sm sm:text-base transition-colors mt-1">{opt.textPt}</p>
                </div>
                {opt.nextScene.includes('kicked_out') ? (
                   <HeartCrack className="text-stone-500 group-hover:text-rose-400 transition-colors shrink-0" size={24} />
                ) : (
                   <ChevronRight className="text-stone-500 group-hover:text-teal-300 transition-colors shrink-0" size={24} />
                )}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
