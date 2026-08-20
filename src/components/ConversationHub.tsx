import React, { useState, useMemo } from 'react';
import { JLPTLevel } from '../types';
import { CONVERSATION_DATA, ConversationItem } from '../data/conversationData';
import { MessageSquare, Play, Sparkles, Filter, ChevronRight, Mic, Volume2 } from 'lucide-react';
import { playJapaneseAudio } from '../utils/audio';
import { SpeechPractice } from './SpeechPractice';

interface Props {
  selectedJlpt: JLPTLevel;
  onGainXp: (amount: number, reason: string) => void;
}

export function ConversationHub({ selectedJlpt, onGainXp }: Props) {
  const [selectedTopic, setSelectedTopic] = useState<string>('Todos');
  const [activePhraseId, setActivePhraseId] = useState<string | null>(null);

  // Filter conversations
  const filteredConversations = useMemo(() => {
    return CONVERSATION_DATA.filter(item => {
      const matchJlpt = item.jlpt === selectedJlpt;
      const matchTopic = selectedTopic === 'Todos' || item.topic === selectedTopic;
      return matchJlpt && matchTopic;
    });
  }, [selectedJlpt, selectedTopic]);

  const topics = ['Todos', 'Verbos', 'Adjetivos', 'Substantivos', 'Partículas', 'Frases Úteis', 'Situações Cotidianas'];

  const handlePlayAudio = (phrase: ConversationItem) => {
    playJapaneseAudio(phrase.jp);
    onGainXp(2, 'Ouvir Conversação');
  };

  const togglePhrase = (id: string) => {
    setActivePhraseId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header Info */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <MessageSquare size={120} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
              <MessageSquare size={24} className="text-emerald-50" />
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">Conversação & Frases</h1>
          </div>
          <p className="text-emerald-100 text-sm md:text-base max-w-xl font-medium leading-relaxed">
            Pratique estruturas reais do dia a dia japonês. Aprenda a usar verbos, partículas e adjetivos em contexto no nível {selectedJlpt}.
          </p>
        </div>
      </div>

      {/* Topics Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {topics.map(topic => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
              selectedTopic === topic
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 border border-stone-200'
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Conversations List */}
      {filteredConversations.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-stone-200 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4">
            <MessageSquare size={28} className="text-stone-400" />
          </div>
          <h3 className="text-lg font-bold text-stone-800">Nenhuma frase encontrada</h3>
          <p className="text-stone-500 text-sm mt-1">Ainda não adicionamos frases desta categoria para o nível {selectedJlpt}.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredConversations.map(phrase => {
            const isActive = activePhraseId === phrase.id;

            return (
              <div 
                key={phrase.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isActive ? 'border-emerald-400 shadow-md ring-2 ring-emerald-50' : 'border-stone-200 shadow-sm hover:border-emerald-200'
                }`}
              >
                {/* Main Visible Area */}
                <div 
                  className="p-5 cursor-pointer flex flex-col"
                  onClick={() => togglePhrase(phrase.id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      {phrase.topic}
                    </span>
                  </div>

                  <div className="mb-2">
                    <p className="text-xl font-bold text-stone-800 leading-snug">
                      {phrase.jp}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-2">
                    <p className="text-sm font-medium text-stone-600 truncate mr-2">
                      {phrase.meaningPt}
                    </p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayAudio(phrase);
                      }}
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                      title="Ouvir"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isActive && (
                  <div className="px-5 pb-5 pt-2 border-t border-stone-100 bg-stone-50/50 animate-fadeIn">
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 mb-1 block">Leitura & Romaji</span>
                        <p className="text-stone-700 font-medium">{phrase.reading}</p>
                        <p className="text-stone-500 font-mono text-xs mt-0.5">{phrase.romaji}</p>
                      </div>

                      {phrase.explanationPt && (
                        <div className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl relative">
                          <Sparkles size={14} className="absolute top-3 right-3 text-emerald-400" />
                          <span className="text-[10px] uppercase font-bold text-emerald-800 mb-1 block">Dica do Sensei</span>
                          <p className="text-stone-700 font-medium text-xs leading-relaxed pr-6">
                            {phrase.explanationPt}
                          </p>
                        </div>
                      )}
                    </div>

                    <SpeechPractice 
                      targetPhraseJp={phrase.jp} 
                      onGainXp={onGainXp} 
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
