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
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
            <Layers size={22} />
          </div>
          <h2 className="text-2xl font-black text-stone-900">Testes de Proficiência JLPT</h2>
        </div>
        <p className="text-stone-600 text-sm max-w-2xl">
          Selecione o nível que deseja praticar. Os testes simulam questões reais focadas em vocabulário, gramática e leitura (Em breve).
        </p>

        {/* Level Selector */}
        <div className="flex flex-wrap gap-2 mt-6">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => onSelectJlpt(level)}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-sm active:scale-95 ${
                selectedJlpt === level 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {level}
            </button>
          ))}
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
