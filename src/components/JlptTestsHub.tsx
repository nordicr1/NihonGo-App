import React from 'react';
import { JLPTLevel } from '../types';
import { Layers, HelpCircle } from 'lucide-react';

interface JlptTestsHubProps {
  selectedJlpt: JLPTLevel;
  onSelectJlpt: (level: JLPTLevel) => void;
  onGainXp: (amount: number, reason: string) => void;
}

export const JlptTestsHub: React.FC<JlptTestsHubProps> = ({
  selectedJlpt,
  onSelectJlpt
}) => {
  const levels: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-white to-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm relative overflow-hidden flex items-center justify-center">
        <div className="absolute right-0 top-0 p-8 opacity-5 pointer-events-none translate-x-4 -translate-y-4">
          <Layers size={160} />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-100/50 border border-teal-200/50 text-teal-700 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
            <Layers size={14} />
            <span>Simulados Oficiais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Testes de Proficiência JLPT
          </h2>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            Selecione o nível que deseja praticar. Os testes simulam questões reais focadas em vocabulário, gramática e leitura (Em breve).
          </p>

          {/* Level Selector */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            {levels.map(level => (
              <button
                key={level}
                onClick={() => onSelectJlpt(level)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer ${
                  selectedJlpt === level 
                    ? 'bg-teal-600 text-white ring-2 ring-teal-500/50 scale-105' 
                    : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-stone-50 rounded-3xl p-8 border border-dashed border-stone-300 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
        <HelpCircle size={40} className="text-stone-300" />
        <h3 className="text-lg font-bold text-stone-800">Testes {selectedJlpt} em Desenvolvimento</h3>
        <p className="text-sm text-stone-500 max-w-md">
          Os simulados oficais e baterias de testes para o nível {selectedJlpt} estão sendo preparados e serão adicionados em breve. Continue acompanhando as atualizações!
        </p>
      </div>
    </div>
  );
};
