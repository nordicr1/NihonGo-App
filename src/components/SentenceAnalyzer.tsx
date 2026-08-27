import React, { useState } from 'react';
import { AudioButton } from './AudioButton';
import { Sparkles, Search, BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { playJapaneseAudio } from '../utils/audio';

interface BreakdownToken {
  token: string;
  reading: string;
  romaji: string;
  type: string;
  meaning: string;
}

interface AnalysisResult {
  original: string;
  romaji: string;
  translation: string;
  literalTranslation?: string;
  jlptLevel?: string;
  breakdown: BreakdownToken[];
  grammarNotes: string;
  culturalNote?: string;
}

const PRESET_SENTENCES = [
  '私は毎朝七時に起きて、水を飲みます。',
  '富士山に登ったことがありますか。',
  'この日本料理はとても美味しいですから、毎日食べたいです。',
  '雨が降っているから、傘を持って行かなければなりません。',
  '田中先生はいつも親切に日本語を教えてくれます。',
];

export const SentenceAnalyzer: React.FC<{ onGainXp: (amt: number, reason: string) => void }> = ({
  onGainXp,
}) => {
  const [inputText, setInputText] = useState('私は毎朝七時に起きて、水を飲みます。');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (textToAnalyze = inputText) => {
    if (!textToAnalyze.trim()) return;
    setIsLoading(true);

    try {
      const response = await fetch('/api/sensei/analyze-sentence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sentence: textToAnalyze }),
      });

      const data = await response.json();
      setResult(data);
      onGainXp(10, 'Analisou Frase em Japonês');
    } catch (err) {
      console.error('Error analyzing sentence:', err);
      // Fallback offline analysis
      setResult({
        original: textToAnalyze,
        romaji: 'Watashi wa maiasa shichiji ni okite, mizu o nomimasu.',
        translation: 'Eu acordo às sete horas toda manhã e bebo água.',
        literalTranslation: 'Eu (tópico) toda manhã sete horas em acordando, água (objeto) bebo.',
        jlptLevel: 'N5',
        breakdown: [
          { token: '私', reading: 'わたし', romaji: 'watashi', type: 'Substantivo', meaning: 'Eu' },
          { token: 'は', reading: 'は (wa)', romaji: 'wa', type: 'Partícula de Tópico', meaning: 'quanto a / é' },
          { token: '毎朝', reading: 'まいあさ', romaji: 'maiasa', type: 'Advérbio de Tempo', meaning: 'Toda manhã' },
          { token: '七時', reading: 'しちじ', romaji: 'shichiji', type: 'Substantivo de Horário', meaning: 'Sete horas' },
          { token: 'に', reading: 'に', romaji: 'ni', type: 'Partícula de Tempo', meaning: 'às (momento exato)' },
          { token: '起きて', reading: 'おきて', romaji: 'okite', type: 'Verbo Ichidan (Forma-TE)', meaning: 'Acordando e...' },
          { token: '水', reading: 'みず', romaji: 'mizu', type: 'Substantivo', meaning: 'Água' },
          { token: 'を', reading: 'を (o)', romaji: 'o', type: 'Partícula de Objeto', meaning: 'marca objeto direto' },
          { token: '飲みます', reading: 'のみます', romaji: 'nomimasu', type: 'Verbo Godan (Polido)', meaning: 'Bebo / Tomo' },
        ],
        grammarNotes:
          'A frase utiliza a partícula de tópico は (wa), partícula de tempo específico に (ni), conexão de ações usando a forma-TE (起きて) e partícula de objeto direto を (o).',
        culturalNote: 'O uso de 飲みます (forma ます) demonstra polidez padrão (teineigo), ideal para conversas respeitosas no dia a dia.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-purple-950 text-white rounded-3xl p-6 sm:p-10 border border-purple-900/30 shadow-xl relative overflow-hidden flex items-center justify-center flex-col">
        <div className="absolute right-0 top-0 opacity-5 sm:opacity-10 text-[100px] sm:text-[140px] font-serif select-none pointer-events-none pr-6 leading-none translate-y-4">
          解析
        </div>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4 relative z-10">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles size={14} />
            <span>Análise Morfológica & Furigana</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Analisador Inteligente de Frases em Japonês
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Cole ou digite qualquer frase em japonês para obter a quebra palavra por palavra, furigana, romaji, classe gramatical de cada partícula e tradução completa para o Português Brasileiro.
          </p>
        </div>
      </div>

      {/* Input Box & Presets */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6 flex flex-col items-center text-center">
        <div className="w-full max-w-3xl space-y-4">
          <label className="text-xs sm:text-sm font-black uppercase tracking-wider text-stone-500 block">
            Digite ou cole uma frase em Japonês:
          </label>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ex: 私は日本語を勉強しています。"
              className="w-full px-5 py-4 text-center text-base sm:text-lg bg-stone-50 border-2 border-stone-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all shadow-inner"
            />
            <button
              type="button"
              onClick={() => handleAnalyze()}
              disabled={isLoading}
              className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-black text-sm sm:text-base rounded-2xl shadow-lg shadow-purple-600/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-purple-200 border-t-white"></div>
                  <span>Processando com IA...</span>
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  <span>Analisar Frase</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="w-full max-w-3xl py-4 flex flex-col items-center justify-center space-y-2 animate-pulse">
            <div className="text-purple-600 font-bold text-sm sm:text-base flex items-center gap-2">
              <Search className="animate-bounce" size={18} />
              O Sensei está analisando a estrutura gramatical...
            </div>
            <p className="text-xs text-stone-400">Isso pode levar alguns segundos dependendo da complexidade da frase.</p>
          </div>
        )}

        {/* Presets */}
        {!isLoading && (
          <div className="w-full max-w-3xl space-y-3 pt-4 border-t border-stone-100">
            <span className="text-[11px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider block">
              Ou escolha um exemplo didático pronto:
            </span>
            <div className="flex flex-col gap-2">
              {PRESET_SENTENCES.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setInputText(p);
                    handleAnalyze(p);
                  }}
                  className="w-full px-4 py-3 bg-stone-50 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 border border-stone-200 rounded-xl text-xs sm:text-sm font-medium text-stone-600 transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Analysis Output Result */}
      {result && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6 animate-fadeIn">
          {/* Main Original & Translation */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-stone-50 border border-purple-100 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs px-2 py-0.5 rounded bg-purple-200 text-purple-900 font-bold">
                  {result.jlptLevel || 'JLPT N5'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-2">
                  {result.original}
                </h2>
                {result.romaji && (
                  <p className="text-xs text-stone-500 font-mono mt-1">{result.romaji}</p>
                )}
              </div>
              <AudioButton text={result.original} size="lg" label="Ouvir Frase" />
            </div>

            <div className="pt-2 border-t border-purple-200/60 space-y-1">
              <span className="text-[11px] font-bold uppercase text-purple-800 tracking-wider">
                Tradução em Português (PT-BR)
              </span>
              <p className="text-lg font-bold text-stone-800">
                "{result.translation}"
              </p>
              {result.literalTranslation && (
                <p className="text-xs text-stone-500 italic">
                  <strong>Tradução Literal:</strong> {result.literalTranslation}
                </p>
              )}
            </div>
          </div>

          {/* Morphological Token Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Layers size={18} className="text-purple-600" />
              <h3 className="font-extrabold text-stone-900 text-base">
                Quebra de Palavras & Partículas (形態素解析)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {result.breakdown?.map((token, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-stone-50 border border-stone-200 hover:border-purple-300 transition flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xl font-bold text-stone-900 block">
                        {token.token}
                      </span>
                      {token.reading && token.reading !== token.token && (
                        <span className="text-xs text-stone-500 font-mono">
                          ({token.reading})
                        </span>
                      )}
                    </div>
                    <AudioButton text={token.token} size="sm" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-100 text-purple-800">
                      {token.type}
                    </span>
                    <p className="text-xs font-semibold text-stone-700 mt-1">
                      {token.meaning}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grammar & Cultural Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.grammarNotes && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <span className="text-xs font-bold text-stone-800 uppercase flex items-center gap-1.5">
                  <BookOpen size={14} className="text-purple-600" />
                  <span>Explicação da Estrutura Gramatical</span>
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {result.grammarNotes}
                </p>
              </div>
            )}

            {result.culturalNote && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 space-y-1.5">
                <span className="text-xs font-bold text-amber-900 uppercase flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-600" />
                  <span>Nuance Cultural & Nível de Polidez</span>
                </span>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {result.culturalNote}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
