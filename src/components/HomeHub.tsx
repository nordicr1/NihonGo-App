import { MessageSquare } from 'lucide-react';
import React from 'react';
import { JLPTLevel, UserStats } from '../types';
import {
  Sparkles,
  BookOpen,
  Gamepad2,
  Layers,
  ArrowRight,
  Bot,
  Flame,
  Trophy,
  CheckCircle,
  HelpCircle,
  Volume2,
  PenTool
} from 'lucide-react';
import { AudioButton } from './AudioButton';

const JAPANESE_TIPS = [
  {
    title: 'A ordem da frase em Japonês: SOV (Sujeito - Objeto - Verbo)',
    content: 'Em português dizemos "Eu [Sujeito] bebo [Verbo] água [Objeto]". Em japonês, o <strong>Verbo sempre vai no final</strong> da oração: "わたし [Eu] みず [água] のみます [bebo]". Fixe essa regra e nunca mais errará uma frase!',
    buttonText: 'Experimentar no Analisador de Frases ➔',
    tab: 'analyzer' as const
  },
  {
    title: 'Partícula は (wa) vs が (ga)',
    content: 'A partícula <strong>は (wa)</strong> marca o tópico (sobre o que estamos falando), enquanto <strong>が (ga)</strong> foca no sujeito (quem executa a ação) e introduz informações novas. Se alguém perguntar "Quem é o professor?", responda com が. Se perguntar "O que o professor é?", responda com は.',
    buttonText: 'Estudar Partículas ➔',
    tab: 'grammar' as const
  },
  {
    title: 'Testes de Proficiência JLPT',
    content: 'Para se acostumar com o estilo da prova, pratique com os <strong>Testes JLPT</strong>. Resolva questões focadas no nível que você está estudando (N5 ao N1).',
    buttonText: 'Acessar Testes ➔',
    tab: 'tests' as const
  },
  {
    title: 'Não existe som de L nem V no japonês',
    content: 'O alfabeto japonês (Kana) possui o som de <strong>R (ra, ri, ru, re, ro)</strong> que soa como uma mistura entre R, L e D. E para o V, costuma-se usar o som de B ou adaptações mais recentes com o U (ヴ).',
    buttonText: 'Praticar o Kana ➔',
    tab: 'kana' as const
  },
  {
    title: 'Kanjis têm várias leituras',
    content: 'A maioria dos Kanjis possui a leitura chinesa <strong>(On\'yomi)</strong> e a leitura japonesa <strong>(Kun\'yomi)</strong>. Geralmente, Kanjis juntos em uma palavra usam On\'yomi, enquanto Kanjis isolados (com hiragana) usam Kun\'yomi.',
    buttonText: 'Dicionário de Kanjis ➔',
    tab: 'kanji' as const
  }
];

const CHANGELOG = [
  {
    date: '28 Ago 2026',
    title: 'Quase 1.000 Novos Kanjis do N1 Adicionados! 🐉',
    desc: 'O banco de Kanjis do JLPT N1 passou por uma atualização massiva e ininterrupta! Injetamos quase 1.000 novos Kanjis avançados de uma só vez. Cada um com leituras On/Kun-yomi, significados e exemplos práticos. Tudo inserido com filtro inteligente global para evitar Kanjis repetidos de outros níveis. O dicionário N1 está fenomenal!',
  },
  {
    date: '27 Ago 2026',
    title: 'Simulado JLPT N5 Oficial Adicionado! 🎯',
    desc: 'O módulo de Testes JLPT N5 agora conta com 52 questões baseadas em provas oficiais reais, focando em vocabulário, kanji, gramática (partículas, sentenças em estrela ★) e textos de leitura e interpretação, tudo com explicações completas.',
  },
  {
    date: '26 Ago 2026',
    title: 'Super Expansão da Gramática (N5 ao N1) 📖',
    desc: 'Adicionamos dezenas de novos tópicos gramaticais aprofundados para todos os níveis do JLPT! Desde explicações detalhadas sobre as partículas do N5 até as estruturas complexas e literárias do N1. Cada regra vem acompanhada de fórmulas, explicações, regras cruciais e exemplos práticos.',
  },
  {
    date: '25 Ago 2026',
    title: 'Módulo de Conversação & Prática de Fala 🎙️',
    desc: 'Lançamos a aba de Conversação! Pratique centenas de frases reais (do N5 ao N1) e use o novo Validador de Pronúncia com Microfone para checar se sua fala está correta. Incluímos mais de 90 frases exclusivas focadas em gramática, adjetivos e estruturas de todos os níveis do JLPT.',
  },
  {
    date: '22 Ago 2026',
    title: 'Validador de Ordem e Traços de Kanji',
    desc: 'Adicionamos um validador de escrita (caligrafia) rigoroso que verifica a quantidade correta de traços, guiando você a escrever Kanjis e Letras da forma correta.',
  },
  {
    date: '22 Ago 2026',
    title: 'Mais de 1.415 Palavras Adicionadas!',
    desc: 'Adicionamos 120 verbos no N5, 212 verbos no N4, 55 verbos no N3 e 32 verbos no N2 categorizados por tipo (Godan, Ichidan e Irregulares), além de mais de 1.000 substantivos divididos entre N5, N4, N3 e N2, com traduções, frases de exemplo exclusivas e áudio.',
  },
  {
    date: '22 Ago 2026',
    title: 'Nova Categoria de Testes JLPT!',
    desc: 'O hub de verbos e adjetivos foi reformulado para "Testes JLPT". Adicionamos suporte do N5 ao N1 para simular testes oficiais.',
  },
  {
    date: '22 Ago 2026',
    title: 'Mais de 170 Advérbios Adicionados!',
    desc: 'Expandimos a categoria de advérbios com mais de 170 novas palavras e expressões (N5, N4, N3 e N2), todas com tradução e exemplos práticos com áudio.',
  },
  {
    date: '22 Ago 2026',
    title: 'Adjetivos N2 e N3 Adicionados!',
    desc: 'Atualizamos nossa base com dezenas de Adjetivos Na e I para os níveis intermediário e avançado (N3 e N2).',
  },
  {
    date: '22 Ago 2026',
    title: 'Adjetivos Na (N4) Adicionados!',
    desc: 'Adicionamos 24 novos Adjetivos Na do nível N4, com exemplos práticos.',
  },
  {
    date: '20 Ago 2026',
    title: 'Mais de 100 Kanjis no N2!',
    desc: 'Adicionado um grande lote com 117 novos Kanjis ao JLPT N2, completando mais uma etapa dos seus estudos.',
  },
  {
    date: '20 Ago 2026',
    title: 'Novos Kanjis no JLPT N2',
    desc: 'Foram incluídos novos lotes (Batch 7 a 11) totalizando centenas de Kanjis cruciais para o nível N2, com suas respectivas leituras e traduções.',
  },
  {
    date: '19 Ago 2026',
    title: 'Vocabulários e Adjetivos Expandidos',
    desc: 'Adicionados novos conjuntos de adjetivos-I e adjetivos-NA aos dicionários, cobrindo níveis essenciais para a fluência.',
  },
  {
    date: '18 Ago 2026',
    title: 'Expansão do Banco de Dados Kana',
    desc: 'Alfabetos Hiragana e Katakana aprimorados com mais tabelas, áudios e recursos visuais para prática e memorização.',
  },
];

interface HomeHubProps {
  onTabChange: (tab: 'hub' | 'kana' | 'kanji' | 'grammar' | 'tests' | 'games' | 'analyzer' | 'sensei' | 'drawing' | 'conversation') => void;
  selectedJlpt: JLPTLevel;
  onJlptChange: (level: JLPTLevel) => void;
  userStats: UserStats;
  onOpenSensei: () => void;
}

export const HomeHub: React.FC<HomeHubProps> = ({
  onTabChange,
  selectedJlpt,
  onJlptChange,
  userStats,
  onOpenSensei,
}) => {
  const currentTip = React.useMemo(() => JAPANESE_TIPS[Math.floor(Math.random() * JAPANESE_TIPS.length)], []);

  const jlptLevels: { level: JLPTLevel; title: string; desc: string; color: string }[] = [
    {
      level: 'N5',
      title: 'JLPT N5 (Básico / Iniciante)',
      desc: 'Hiragana, Katakana, ~100 Kanjis fundamentais, partículas は/が/を/に/で, frases básicas do cotidiano e verbos nos tempos presente/passado.',
      color: 'border-emerald-500 bg-emerald-50/40 text-emerald-950',
    },
    {
      level: 'N4',
      title: 'JLPT N4 (Elementar)',
      desc: '~300 Kanjis, 1.500 palavras, Forma-TE (〜てください), obrigação (~nakereba narimasen), potencial e permissão.',
      color: 'border-sky-500 bg-sky-50/40 text-sky-950',
    },
    {
      level: 'N3',
      title: 'JLPT N3 (Intermediário)',
      desc: 'A ponte para a fluência. ~650 Kanjis, voz passiva, causativa, estruturas 〜わけではない, 〜ために, conversação natural.',
      color: 'border-indigo-500 bg-indigo-50/40 text-indigo-950',
    },
    {
      level: 'N2',
      title: 'JLPT N2 (Pré-Avançado / Profissional)',
      desc: '~1.000 Kanjis, 6.000 palavras, expressões formais de negócios, notícias, artigos e nuances avançadas de polidez (Keigo).',
      color: 'border-amber-500 bg-amber-50/40 text-amber-950',
    },
    {
      level: 'N1',
      title: 'JLPT N1 (Avançado / Maestria)',
      desc: '~2.000+ Kanjis, 10.000+ palavras, gramática literária complexa, jornais, ensaios acadêmicos e debates aprofundados.',
      color: 'border-rose-500 bg-rose-50/40 text-rose-950',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Hero Welcome Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-rose-950 text-white rounded-3xl p-6 sm:p-12 border border-rose-900/30 shadow-2xl relative overflow-hidden flex items-center justify-center">
        <div className="absolute right-0 top-0 opacity-5 sm:opacity-10 text-[120px] sm:text-[180px] font-serif select-none pointer-events-none pr-6 leading-none translate-y-4">
          日本語
        </div>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-semibold shadow-sm">
            <Sparkles size={14} />
            <span>Guia Completo de Japonês Didático em Português</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight md:leading-[1.1]">
            Aprenda Japonês do Zero<br className="hidden md:block" /> até o JLPT N1 com Jogos & IA
          </h1>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            Bem-vindo ao <strong className="text-white">NihonGo!</strong> Estude os alfabetos Hiragana e Katakana, domine os ideogramas Kanji, compreenda a gramática explicada com clareza em Português e divirta-se com jogos de memória e montagem de frases.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onTabChange('games')}
              className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-950/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Gamepad2 size={18} />
              <span>Jogar Minigames & Memória</span>
            </button>

            <button
              type="button"
              onClick={() => onTabChange('kana')}
              className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-950/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explorar Hiragana & Katakana</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={onOpenSensei}
              className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-3.5 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700 font-bold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Bot size={18} className="text-rose-400" />
              <span>Tirar Dúvida com o Sensei Kenji</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 6 Learning Modules Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Module 1: Kana */}
        <div
          onClick={() => onTabChange('kana')}
          className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-rose-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
              あア
            </div>
            <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-rose-600 transition-colors">
              Hiragana & Katakana
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tabelas completas com áudio de nativos, dicas mnemônicas em português e modo quiz para memorizar rápido.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-rose-600">
            <span>46 Sons Básicos + Combos</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Module 2: Kanji */}
        <div
          onClick={() => onTabChange('kanji')}
          className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-amber-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform font-serif">
              漢字
            </div>
            <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-amber-700 transition-colors">
              Dicionário de Kanjis
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Leituras On'yomi, Kun'yomi, radicais, número de traços e tela para desenhar e praticar a caligrafia.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700">
            <span>Níveis N5 até N1</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Module 3: Grammar & Vocab */}
        <div
          onClick={() => onTabChange('grammar')}
          className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-indigo-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
              <BookOpen size={22} />
            </div>
            <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-indigo-700 transition-colors">
              Gramática & Vocabulário
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Regras de conjugação (Verbos Godan, Ichidan, Irregulares; Adjetivos い e な) e fórmulas passo a passo.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-indigo-700">
            <span>Explicações PT-BR</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Module 4: Games */}
        <div
          onClick={() => onTabChange('games')}
          className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
              <Gamepad2 size={22} />
            </div>
            <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
              Minigames & Memória
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Jogo da memória com Kanjis/Vocabulário, montador de frases, Kana Rush e simulados de questões JLPT.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700">
            <span>Ganhe XP & Emblemas</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Module 5: Testes JLPT */}
        <div
          onClick={() => onTabChange('tests')}
          className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-teal-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
              <Layers size={22} />
            </div>
            <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-teal-700 transition-colors">
              Testes JLPT
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pratique para os exames oficiais de proficiência em japonês do N5 ao N1.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-teal-700">
            <span>Simulados Oficiais</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        {/* Module 6: Caligrafia */}
        <div
          onClick={() => onTabChange('drawing')}
          className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-fuchsia-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-100 text-fuchsia-700 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
              <PenTool size={22} />
            </div>
            <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-fuchsia-700 transition-colors">
              Estúdio de Caligrafia
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pratique a escrita desenhando Hiragana, Katakana e Kanjis diretamente na tela do seu celular.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-fuchsia-700">
            <span>Trace e Memorize</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* JLPT Levels Progression Track */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
        <div className="flex flex-col items-center text-center gap-3 border-b border-stone-100 pb-6 mb-2">
          <div className="space-y-2">
            <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
              Estrutura Oficial de Exames
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
              Trilha de Proficiência JLPT <br className="sm:hidden" />
              <span className="text-stone-500 whitespace-nowrap text-xl sm:text-2xl">(日本語能力試験)</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-lg leading-relaxed">
            Clique em qualquer nível abaixo para selecionar e começar a estudar seus <strong>Kanjis</strong> e <strong>Gramática</strong> instantaneamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jlptLevels.map((lvl) => {
            const isSelected = selectedJlpt === lvl.level;

            return (
              <div
                key={lvl.level}
                onClick={() => {
                  onJlptChange(lvl.level);
                  onTabChange('grammar');
                }}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'border-rose-600 bg-rose-50/50 shadow-md ring-2 ring-rose-300'
                    : 'border-stone-200 bg-white hover:border-stone-400 hover:shadow'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-black bg-stone-900 text-white">
                      {lvl.level}
                    </span>
                    {isSelected && (
                      <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                        <CheckCircle size={14} />
                        <span>Selecionado</span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-extrabold text-base text-stone-900 mt-2">
                    {lvl.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mt-1">
                    {lvl.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-rose-600">
                  <span>Estudar Conteúdo {lvl.level}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Didactic Tip of the Day */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-6 sm:p-10 flex flex-col items-center text-center justify-center gap-5 shadow-sm">
        <div className="space-y-4 max-w-3xl flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-200/70 border border-amber-300 text-amber-900 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles size={14} />
            <span>Dica de Ouro de Japonês <span className="opacity-75 hidden sm:inline">(日本語のヒント)</span></span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-amber-950 leading-tight">
            {currentTip.title}
          </h3>
          <p 
            className="text-sm sm:text-base text-amber-900/90 leading-relaxed max-w-2xl"
            dangerouslySetInnerHTML={{ __html: currentTip.content }}
          />
        </div>

        <button
          type="button"
          onClick={() => onTabChange(currentTip.tab)}
          className="mt-2 w-full sm:w-auto px-8 py-3.5 bg-amber-900 text-white font-bold text-sm sm:text-base rounded-2xl hover:bg-amber-800 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-amber-900/20"
        >
          {currentTip.buttonText}
        </button>
      </div>

      {/* Changelog / Atualizações Recentes */}
      <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <Sparkles size={16} />
          </div>
          <h3 className="text-xl font-black text-stone-900">Novidades e Atualizações</h3>
        </div>
        
        <div className="max-h-64 overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-transparent">
          {CHANGELOG.map((log, i) => (
             <div key={i} className="bg-white border border-stone-100 rounded-xl p-4 flex flex-col sm:flex-row gap-2 sm:gap-4 items-start shadow-sm hover:shadow transition-shadow">
               <div className="text-xs font-bold text-stone-400 whitespace-nowrap pt-1 sm:w-24 shrink-0">
                 {log.date}
               </div>
               <div>
                 <h4 className="text-sm font-bold text-stone-800">{log.title}</h4>
                 <p className="text-xs text-stone-600 mt-1 leading-relaxed">{log.desc}</p>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};
