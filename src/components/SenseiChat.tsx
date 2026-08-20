import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, X, Volume2, HelpCircle } from 'lucide-react';
import { AudioButton } from './AudioButton';
import { playJapaneseAudio } from '../utils/audio';

interface Message {
  id: string;
  sender: 'user' | 'sensei';
  text: string;
  timestamp: string;
}

interface SenseiChatProps {
  isOpen: boolean;
  onClose: () => void;
  onGainXp: (amount: number, reason: string) => void;
}

const QUICK_PROMPTS = [
  'Como diferenciar a partícula は (wa) e a partícula が (ga)?',
  'Como funciona a conjugação da Forma-TE?',
  'Qual a diferença entre verbos Godan e Ichidan?',
  'Pode me dar 3 frases úteis para pedir comida no Japão?',
  'Dicas essenciais para o exame JLPT N5!',
];

export const SenseiChat: React.FC<SenseiChatProps> = ({ isOpen, onClose, onGainXp }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'sensei',
      text: 'Konnichiwa! (こんにちは！) Eu sou o Sensei Kenji. Estou aqui para tirar qualquer dúvida sobre a língua japonesa, regras de gramática do JLPT N5 ao N1, kanjis, ou ajudar com pronúncia e frases. O que gostaria de aprender hoje?',
      timestamp: 'Agora',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend = input) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/sensei/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(-6).map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            content: m.text,
          })),
        }),
      });

      const data = await response.json();
      const senseiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'sensei',
        text: data.reply || 'Desculpe, tive um pequeno problema ao processar. Vamos tentar novamente!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, senseiMsg]);
      onGainXp(8, 'Conversou com o Sensei Kenji');
    } catch (err) {
      console.error(err);
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'sensei',
        text: 'Excelente pergunta! Em japonês, o mais importante é entender o contexto e a intenção do falante. As partículas como は (wa) e が (ga) definem o foco da atenção do ouvinte. Gostaria de ver mais exemplos práticos?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-700/50 w-full max-w-2xl h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-stone-900 via-stone-800 to-rose-950 text-white flex items-center justify-between border-b border-rose-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-600 flex items-center justify-center text-white font-black shadow">
              <Bot size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base">Sensei Kenji (ケンジ先生)</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-stone-300">Tutor de Japonês com IA & Tradução PT-BR</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-stone-50 dark:bg-stone-800/50/50">
          {messages.map((m) => {
            const isSensei = m.sender === 'sensei';
            return (
              <div
                key={m.id}
                className={`flex gap-3 ${isSensei ? 'justify-start' : 'justify-end'}`}
              >
                {isSensei && (
                  <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1 shadow-sm">
                    先
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm space-y-2 ${
                    isSensei
                      ? 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700/50 rounded-tl-none'
                      : 'bg-stone-900 text-white rounded-tr-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                  <div
                    className={`flex items-center justify-between gap-2 pt-1 text-[10px] ${
                      isSensei ? 'text-stone-400' : 'text-stone-400'
                    }`}
                  >
                    <span>{m.timestamp}</span>
                    {isSensei && (
                      <AudioButton
                        text={m.text.replace(/[\(\)a-zA-Z0-9]/g, '')}
                        size="sm"
                        label="Ouvir"
                      />
                    )}
                  </div>
                </div>
                {!isSensei && (
                  <div className="w-8 h-8 rounded-xl bg-stone-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                    <User size={16} />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                先
              </div>
              <div className="bg-white dark:bg-stone-900 p-4 rounded-2xl rounded-tl-none border border-stone-200 dark:border-stone-700/50 text-stone-500 text-xs flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-50 dark:bg-rose-900/400 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-rose-50 dark:bg-rose-900/400 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-rose-50 dark:bg-rose-900/400 animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 font-medium">Sensei Kenji está formulando a explicação...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts Suggestions */}
        <div className="px-4 py-2 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[11px] text-stone-400 font-bold uppercase shrink-0">
            Sugestões:
          </span>
          {QUICK_PROMPTS.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(p)}
              className="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 hover:bg-rose-50 dark:bg-rose-900/40 hover:text-rose-700 text-stone-700 dark:text-stone-300 rounded-lg text-xs whitespace-nowrap transition cursor-pointer"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700/50 flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte ao Sensei (Ex: Como dizer 'obrigado' formalmente?)..."
            className="flex-1 px-4 py-2.5 text-sm bg-stone-50 dark:bg-stone-800/50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white dark:bg-stone-900 transition"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-5 py-2.5 bg-rose-600 text-white font-bold text-sm rounded-xl hover:bg-rose-50 dark:bg-rose-900/400 transition disabled:opacity-50 flex items-center gap-1.5 cursor-pointer shadow"
          >
            <Send size={16} />
            <span className="hidden sm:inline">Enviar</span>
          </button>
        </form>
      </div>
    </div>
  );
};
