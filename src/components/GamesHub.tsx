import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { HIRAGANA_DATA } from '../data/kanaData';
import { KANJI_DATA } from '../data/kanjiData';
import { VOCAB_DATA } from '../data/vocabData';
import { SENTENCE_CHALLENGES } from '../data/sentenceData';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { JLPTLevel, QuizQuestion, SentenceChallenge, UserStats } from '../types';
import { AudioButton } from './AudioButton';
import { playJapaneseAudio, soundFX } from '../utils/audio';
import {
  Gamepad2,
  Sparkles,
  Trophy,
  RotateCcw,
  CheckCircle,
  XCircle,
  HelpCircle,
  Timer,
  Flame,
  ArrowRight,
  Bot,
  Layers,
  Zap,
  HeartCrack
} from 'lucide-react';

interface GamesHubProps {
  selectedJlpt: JLPTLevel;
  onGainXp: (amount: number, reason: string) => void;
  userStats: UserStats;
  onLoseHeart: () => void;
}

type GameType = 'memory' | 'sentence' | 'quiz' | 'rush' | 'missing-char' | 'spot-diff';

interface MemoryCard {
  id: string;
  uniqueId: number;
  content: string;
  subContent?: string;
  matchKey: string;
  type: 'jp' | 'pt';
  isFlipped: boolean;
  isMatched: boolean;
}


const KANJI_LOOKALIKES = [
  { base: '待', diff: '特' }, { base: '日', diff: '曰' }, { base: '人', diff: '入' },
  { base: '千', diff: '干' }, { base: '右', diff: '石' }, { base: '牛', diff: '午' },
  { base: '土', diff: '士' }, { base: '王', diff: '玉' }, { base: '白', diff: '百' },
  { base: '大', diff: '犬' }, { base: '木', diff: '本' }, { base: '微', diff: '徴' },
  { base: '験', diff: '険' }, { base: '感', diff: '惑' }, { base: '鳥', diff: '烏' },
  { base: '未', diff: '末' }, { base: '瓜', diff: '爪' }, { base: '免', diff: '兎' },
  { base: '幸', diff: '辛' }, { base: '水', diff: '氷' }
];

export const GamesHub: React.FC<GamesHubProps> = ({ selectedJlpt: globalJlpt, onGainXp, userStats, onLoseHeart }) => {
  const [activeGame, setActiveGame] = useState<GameType>('memory');
  const [localJlpt, setLocalJlpt] = useState<JLPTLevel | 'ALL'>(globalJlpt);

  // Sync when global changes if user hasn't explicitly picked a different one
  useEffect(() => {
    setLocalJlpt(globalJlpt);
  }, [globalJlpt]);

  // ==================== 1. JOGO DA MEMÓRIA STATE ====================
  const [memoryCategory, setMemoryCategory] = useState<'kanji' | 'vocab' | 'kana'>('kanji');
  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [memoryTimer, setMemoryTimer] = useState(0);
  const [isMemoryPlaying, setIsMemoryPlaying] = useState(false);
  const [memoryWon, setMemoryWon] = useState(false);

  // ==================== 2. MONTADOR DE FRASES STATE ====================
  const [filteredSentences, setFilteredSentences] = useState<SentenceChallenge[]>([]);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<string[]>([]);
  const [sentenceResult, setSentenceResult] = useState<'correct' | 'wrong' | null>(null);

  // ==================== 3. QUIZ JLPT STATE ====================
  const [filteredQuestions, setFilteredQuestions] = useState<QuizQuestion[]>([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizSelectedOpt, setQuizSelectedOpt] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizStreak, setQuizStreak] = useState(0);
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  // ==================== 4. RUSH (VELOCIDADE: KANA OU KANJI) ====================
  const [rushMode, setRushMode] = useState<'kanji' | 'kana'>('kanji');
  const [rushScore, setRushScore] = useState(0);
  const [rushTarget, setRushTarget] = useState<{ char: string; answer: string; sub?: string; options: string[] } | null>(null);
  const [rushTimer, setRushTimer] = useState(10);
  const [rushActive, setRushActive] = useState(false);

  
  // ==================== 5. COMPLETAR PALAVRA STATE ====================
  const [wcTarget, setWcTarget] = useState<{ word: string, hiddenIdx: number, hiddenChar: string, options: string[], meaning: string, reading: string } | null>(null);
  const [wcScore, setWcScore] = useState(0);

  // ==================== 6. JOGO DOS 7 ERROS (KANJI) STATE ====================
  const [sdGrid, setSdGrid] = useState<{ char: string, isDiff: boolean }[]>([]);
  const [sdScore, setSdScore] = useState(0);
  const [sdTimer, setSdTimer] = useState(15);
  const [sdActive, setSdActive] = useState(false);

  // ==================== COMPLETAR PALAVRA LOGIC ====================
  function generateWordCompletion() {
    const pool = localJlpt === 'ALL' ? VOCAB_DATA : VOCAB_DATA.filter(v => v.jlpt === localJlpt);
    const validPool = pool.filter(v => v.word.length > 1);
    const sourcePool = validPool.length > 0 ? validPool : VOCAB_DATA.filter(v => v.word.length > 1);

    if (sourcePool.length === 0) return;

    const target = sourcePool[Math.floor(Math.random() * sourcePool.length)];
    const hiddenIdx = Math.floor(Math.random() * target.word.length);
    const hiddenChar = target.word[hiddenIdx];

    // get 3 wrong options
    let wrongOptions = [];
    let attempts = 0;
    while(wrongOptions.length < 3 && attempts < 50) {
      attempts++;
      const randWord = VOCAB_DATA[Math.floor(Math.random() * VOCAB_DATA.length)].word;
      if(randWord.length > 0) {
         const randChar = randWord[Math.floor(Math.random() * randWord.length)];
         if(randChar !== hiddenChar && !wrongOptions.includes(randChar)) {
           wrongOptions.push(randChar);
         }
      }
    }

    const options = [hiddenChar, ...wrongOptions].sort(() => 0.5 - Math.random());
    setWcTarget({ word: target.word, hiddenIdx, hiddenChar, options, meaning: target.meaningPt, reading: target.reading });
  };

  function handleWcAnswer(opt: string) {
    if(!wcTarget) return;
    if(opt === wcTarget.hiddenChar) {
      soundFX.playSuccess();
      setWcScore(prev => prev + 10);
      onGainXp(10, `Palavra Completa: ${wcTarget.word}`);
      generateWordCompletion();
    } else {
      soundFX.playError(); onLoseHeart();
      setWcScore(0);
      generateWordCompletion();
    }
  };

  // ==================== SPOT THE DIFFERENCE LOGIC ====================
  function generateSpotDiff() {
    const pair = KANJI_LOOKALIKES[Math.floor(Math.random() * KANJI_LOOKALIKES.length)];
    const size = 25; // 5x5 grid
    const diffIdx = Math.floor(Math.random() * size);
    const grid = Array.from({length: size}).map((_, i) => ({
      char: i === diffIdx ? pair.diff : pair.base,
      isDiff: i === diffIdx
    }));
    setSdGrid(grid);
    setSdTimer(10);
    setSdActive(true);
  };

  function handleSdAnswer(isDiff: boolean) {
    if(!sdActive) return;
    if(isDiff) {
      soundFX.playSuccess();
      setSdScore(prev => prev + 15);
      onGainXp(15, 'Encontrou o Kanji Diferente!');
      generateSpotDiff();
    } else {
      soundFX.playError(); onLoseHeart();
      setSdActive(false);
    }
  };


  // Initialize and filter games when localJlpt or activeGame changes
  useEffect(() => {
    // 1. Memory Game
    initMemoryGame();

    // 2. Sentences Filter
    const sPool = localJlpt === 'ALL'
      ? SENTENCE_CHALLENGES
      : SENTENCE_CHALLENGES.filter((s) => s.jlpt === localJlpt);
    const validSentences = sPool.length > 0 ? sPool : SENTENCE_CHALLENGES;
    setFilteredSentences(validSentences);
    setSentenceIndex(0);
    initSentenceBuilder(0, validSentences);

    // 3. Quiz Filter
    const qPool = localJlpt === 'ALL'
      ? QUIZ_QUESTIONS
      : QUIZ_QUESTIONS.filter((q) => q.jlpt === localJlpt);
    const validQuestions = qPool.length > 0 ? qPool : QUIZ_QUESTIONS;
    setFilteredQuestions(validQuestions);
    setQuizIdx(0);
    setQuizSelectedOpt(null);

    // 4. Rush
    generateRushQuestion();

    // 5. Completar Palavra
    generateWordCompletion();
    setWcScore(0);

    // 6. Spot the difference
    generateSpotDiff();
    setSdScore(0);

  }, [localJlpt, memoryCategory, rushMode, activeGame]);

  // Memory Timer ticker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isMemoryPlaying && !memoryWon) {
      interval = setInterval(() => {
        setMemoryTimer((prev) => prev + 1);
      }, 1000);
    }
  
  return () => clearInterval(interval);
  }, [isMemoryPlaying, memoryWon]);

  // Rush timer ticker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (rushActive && rushTimer > 0) {
      interval = setInterval(() => {
        setRushTimer((prev) => {
          if (prev <= 1) {
            soundFX.playError(); onLoseHeart();
            setRushActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [rushActive, rushTimer]);

  
  // Spot Diff timer ticker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (sdActive && sdTimer > 0) {
      interval = setInterval(() => {
        setSdTimer((prev) => {
          if (prev <= 1) {
            soundFX.playError(); onLoseHeart();
            setSdActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [sdActive, sdTimer]);

  // ==================== MEMORY GAME LOGIC ====================
  const initMemoryGame = () => {
    let pairs: { id: string; jp: string; pt: string; sub?: string }[] = [];

    if (memoryCategory === 'kana') {
      const items = [...HIRAGANA_DATA].sort(() => 0.5 - Math.random()).slice(0, 6);
      pairs = items.map((k) => ({ id: k.id, jp: k.char, pt: k.romaji.toUpperCase(), sub: k.mnemonicPt }));
    } else if (memoryCategory === 'kanji') {
      const pool = localJlpt === 'ALL'
        ? KANJI_DATA
        : KANJI_DATA.filter((k) => k.jlpt === localJlpt);
      const chosenPool = pool.length >= 6 ? pool : KANJI_DATA;
      const items = [...chosenPool].sort(() => 0.5 - Math.random()).slice(0, 6);
      pairs = items.map((k) => ({
        id: k.id,
        jp: k.kanji,
        pt: k.meaningPt.split(',')[0],
        sub: k.onyomi[0] || k.kunyomi[0]
      }));
    } else {
      const pool = localJlpt === 'ALL'
        ? VOCAB_DATA
        : VOCAB_DATA.filter((v) => v.jlpt === localJlpt);
      const chosenPool = pool.length >= 6 ? pool : VOCAB_DATA;
      const items = [...chosenPool].sort(() => 0.5 - Math.random()).slice(0, 6);
      pairs = items.map((v) => ({ id: v.id, jp: v.word, pt: v.meaningPt.split('/')[0], sub: v.reading }));
    }

    const cards: MemoryCard[] = [];
    let counter = 0;

    pairs.forEach((p) => {
      // Japanese Card
      cards.push({
        id: `${p.id}_jp`,
        uniqueId: counter++,
        content: p.jp,
        subContent: p.sub,
        matchKey: p.id,
        type: 'jp',
        isFlipped: false,
        isMatched: false,
      });

      // Portuguese / Meaning Card
      cards.push({
        id: `${p.id}_pt`,
        uniqueId: counter++,
        content: p.pt,
        matchKey: p.id,
        type: 'pt',
        isFlipped: false,
        isMatched: false,
      });
    });

    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    setMemoryCards(shuffled);
    setFlippedIndices([]);
    setMoves(0);
    setMatches(0);
    setMemoryTimer(0);
    setIsMemoryPlaying(true);
    setMemoryWon(false);
  };

  const handleCardClick = (index: number) => {
    if (
      flippedIndices.length === 2 ||
      memoryCards[index].isFlipped ||
      memoryCards[index].isMatched
    ) {
      return;
    }

    soundFX.playCardFlip();

    const newCards = [...memoryCards];
    newCards[index].isFlipped = true;
    setMemoryCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      const [firstIdx, secondIdx] = newFlipped;
      const firstCard = memoryCards[firstIdx];
      const secondCard = memoryCards[secondIdx];

      if (firstCard.matchKey === secondCard.matchKey) {
        // MATCH
        soundFX.playSuccess();
        setTimeout(() => {
          setMemoryCards((prev) => {
            const updated = [...prev];
            updated[firstIdx].isMatched = true;
            updated[secondIdx].isMatched = true;
            return updated;
          });
          setFlippedIndices([]);
          setMatches((prev) => {
            const nextMatches = prev + 1;
            if (nextMatches === 6) {
              setMemoryWon(true);
              setIsMemoryPlaying(false);
              confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
              onGainXp(35, `Vitória no Jogo da Memória (${localJlpt})!`);
            }
            return nextMatches;
          });
        }, 500);
      } else {
        // MISMATCH
        soundFX.playError();
        setTimeout(() => {
          setMemoryCards((prev) => {
            const updated = [...prev];
            updated[firstIdx].isFlipped = false;
            updated[secondIdx].isFlipped = false;
            return updated;
          });
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  // ==================== SENTENCE BUILDER LOGIC ====================
  const initSentenceBuilder = (idx: number, list: SentenceChallenge[] = filteredSentences) => {
    if (list.length === 0) return;
    const s = list[idx % list.length];
    setSelectedTokens([]);
    setAvailableTokens([...s.parts].sort(() => 0.5 - Math.random()));
    setSentenceResult(null);
  };

  const currentSentence = filteredSentences[sentenceIndex % (filteredSentences.length || 1)] || SENTENCE_CHALLENGES[0];

  const handlePickToken = (token: string, tokenIdx: number) => {
    setSelectedTokens([...selectedTokens, token]);
    const newAvail = [...availableTokens];
    newAvail.splice(tokenIdx, 1);
    setAvailableTokens(newAvail);
    soundFX.playCardFlip();
  };

  const handleRemoveToken = (token: string, tokenIdx: number) => {
    const newSel = [...selectedTokens];
    newSel.splice(tokenIdx, 1);
    setSelectedTokens(newSel);
    setAvailableTokens([...availableTokens, token]);
  };

  const handleCheckSentence = () => {
    const isMatch =
      selectedTokens.length === currentSentence.correctOrder.length &&
      selectedTokens.every((t, i) => t === currentSentence.correctOrder[i]);

    if (isMatch) {
      soundFX.playSuccess();
      setSentenceResult('correct');
      playJapaneseAudio(currentSentence.fullJp);
      onGainXp(25, `Montou frase ${currentSentence.jlpt} com perfeição!`);
    } else {
      soundFX.playError(); onLoseHeart();
      setSentenceResult('wrong');
    }
  };

  const nextSentence = () => {
    const nextIdx = (sentenceIndex + 1) % filteredSentences.length;
    setSentenceIndex(nextIdx);
    initSentenceBuilder(nextIdx, filteredSentences);
  };

  // ==================== QUIZ LOGIC ====================
  const currentQuizQ = filteredQuestions[quizIdx % (filteredQuestions.length || 1)] || QUIZ_QUESTIONS[0];

  const handleQuizAnswer = (optIndex: number) => {
    if (quizSelectedOpt !== null) return;
    setQuizSelectedOpt(optIndex);

    if (optIndex === currentQuizQ.correctIndex) {
      soundFX.playSuccess();
      const bonus = (quizStreak + 1) * 10;
      setQuizScore((prev) => prev + bonus);
      setQuizStreak((prev) => prev + 1);
      onGainXp(bonus, `Acertou questão JLPT ${currentQuizQ.jlpt}!`);
    } else {
      soundFX.playError(); onLoseHeart();
      setQuizStreak(0);
    }
  };

  const nextQuizQuestion = () => {
    setQuizSelectedOpt(null);
    setQuizIdx((prev) => (prev + 1) % filteredQuestions.length);
  };

  const generateAiQuestions = async () => {
    try {
      setIsAiGenerating(true);
      const targetLevel = localJlpt === 'ALL' ? 'N2' : localJlpt;
      const res = await fetch('/api/sensei/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level: targetLevel, topic: 'Kanji e Gramática JLPT', count: 3 }),
      });
      const data = await res.json();
      if (data.questions && data.questions.length > 0) {
        setFilteredQuestions((prev) => [...data.questions, ...prev]);
        setQuizIdx(0);
        setQuizSelectedOpt(null);
        soundFX.playSuccess();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsAiGenerating(false);
    }
  };

  // ==================== RUSH (KANA / KANJI VELOCIDADE) LOGIC ====================
  const generateRushQuestion = () => {
    if (rushMode === 'kana') {
      const pool = HIRAGANA_DATA;
      const target = pool[Math.floor(Math.random() * pool.length)];
      const others = pool.filter((k) => k.id !== target.id);
      const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
      const options = [target.romaji, ...shuffledOthers.map((o) => o.romaji)].sort(() => 0.5 - Math.random());

      setRushTarget({
        char: target.char,
        answer: target.romaji,
        sub: 'Hiragana',
        options,
      });
    } else {
      // Kanji Rush
      const pool = localJlpt === 'ALL'
        ? KANJI_DATA
        : KANJI_DATA.filter((k) => k.jlpt === localJlpt);
      const validPool = pool.length >= 4 ? pool : KANJI_DATA;
      const target = validPool[Math.floor(Math.random() * validPool.length)];
      const others = validPool.filter((k) => k.id !== target.id);
      const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);

      const targetMeaning = target.meaningPt.split(',')[0].trim();
      const options = [
        targetMeaning,
        ...shuffledOthers.map((o) => o.meaningPt.split(',')[0].trim()),
      ].sort(() => 0.5 - Math.random());

      setRushTarget({
        char: target.kanji,
        answer: targetMeaning,
        sub: `JLPT ${target.jlpt} • ${target.onyomi[0] || target.kunyomi[0] || ''}`,
        options,
      });
    }

    setRushTimer(8);
    setRushActive(true);
  };

  const handleRushAnswer = (opt: string) => {
    if (!rushActive || !rushTarget) return;
    if (opt === rushTarget.answer) {
      soundFX.playSuccess();
      setRushScore((prev) => prev + 1);
      onGainXp(6, `Rush Acerto Rápido (${rushTarget.char})!`);
      generateRushQuestion();
    } else {
      soundFX.playError(); onLoseHeart();
      setRushActive(false);
    }
  };

  if (userStats.hearts === 0) {
    return (
      <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn">
        <div className="bg-stone-900 border border-rose-900/40 rounded-3xl p-10 text-center shadow-2xl flex flex-col items-center justify-center min-h-[50vh]">
          <HeartCrack size={64} className="text-rose-500 mb-6 animate-pulse" />
          <h2 className="text-3xl font-black text-white mb-4">Você está sem Vidas!</h2>
          <p className="text-stone-400 mb-8 max-w-md">
            Você perdeu todos os seus ❤️ jogando e errando. 
            Para recuperar vidas e continuar jogando, você precisa <strong>Estudar Gramática, Vocabulário ou Kana</strong>, ou esperar até 1 hora.
          </p>
          <button
            onClick={() => window.location.reload()} // Quick hack or can just tell them to navigate using tabs
            className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl shadow-lg transition"
          >
            Estudar Teoria agora
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-900/30 shadow-xl relative overflow-hidden flex items-center justify-center flex-col">
        <div className="absolute right-0 top-0 opacity-5 sm:opacity-10 text-[100px] sm:text-[140px] font-serif select-none pointer-events-none pr-6 leading-none translate-y-4">
          遊
        </div>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4 relative z-10">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles size={14} />
            <span>Aprendizado Gamificado & Prática Interativa N5 ao N1</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Jogos & Minigames Didáticos de Japonês
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Fixe a escrita, memorize kanjis e domine a gramática do N5 ao N1 jogando. Escolha um minigame e filtre pelo nível do exame!
          </p>

          {/* Level Filter Selector in Minigames */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider w-full sm:w-auto mb-2 sm:mb-0">
              Filtrar Nível do Jogo:
            </span>
            {(['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setLocalJlpt(lvl)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-md ${
                  localJlpt === lvl
                    ? 'bg-rose-600 text-white font-extrabold scale-105 ring-2 ring-rose-400/50'
                    : 'bg-stone-800/90 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {lvl === 'ALL' ? 'Todos os Níveis' : lvl}
              </button>
            ))}
          </div>

          {/* Game Selector Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-6 w-full border-t border-stone-700/40 mt-6">
            {[
              { id: 'memory', label: '🧠 Jogo da Memória' },
              { id: 'sentence', label: '📜 Montador de Frases' },
              { id: 'quiz', label: '🏆 Quiz JLPT' },
              { id: 'rush', label: '⚡ Rush' },
              { id: 'missing-char', label: '🔤 Palavra Oculta' },
              { id: 'spot-diff', label: '🕵️ 7 Erros Kanji' },
            ].map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveGame(g.id as GameType)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-md ${
                  activeGame === g.id
                    ? 'bg-emerald-500 text-stone-950 font-black scale-105 ring-2 ring-emerald-400/30'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. JOGO DA MEMÓRIA                                                        */}
      {/* ========================================================================= */}
      {activeGame === 'memory' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          {/* Controls & Stats Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-stone-500 uppercase">Tipo de Peça:</span>
              <div className="flex bg-stone-100 p-1 rounded-xl">
                {(['kanji', 'vocab', 'kana'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setMemoryCategory(cat)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition cursor-pointer ${
                      memoryCategory === cat
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {cat === 'kanji' ? `Kanjis (${localJlpt})` : cat === 'vocab' ? `Vocabulário (${localJlpt})` : 'Kanas'}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-stone-600">
              <div className="flex items-center gap-1.5">
                <Timer size={16} className="text-emerald-600" />
                <span>Tempo: <strong>{memoryTimer}s</strong></span>
              </div>
              <div>
                Jogadas: <strong>{moves}</strong>
              </div>
              <div>
                Pares: <strong className="text-emerald-600">{matches}/6</strong>
              </div>
              <button
                type="button"
                onClick={initMemoryGame}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-bold hover:bg-stone-200 transition cursor-pointer"
              >
                <RotateCcw size={14} />
                <span>Reiniciar</span>
              </button>
            </div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {memoryCards.map((card, idx) => {
              const isShown = card.isFlipped || card.isMatched;

              return (
                <div
                  key={card.uniqueId}
                  onClick={() => handleCardClick(idx)}
                  className={`aspect-square rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer select-none relative ${
                    card.isMatched
                      ? 'bg-emerald-50 border-emerald-400 opacity-80 scale-95 shadow-sm'
                      : isShown
                      ? 'bg-white border-rose-500 shadow-md scale-105 ring-2 ring-rose-300'
                      : 'bg-gradient-to-br from-stone-800 to-stone-900 border-stone-700 hover:border-emerald-500 hover:shadow-md hover:scale-102'
                  }`}
                >
                  {isShown ? (
                    <div className="flex flex-col items-center justify-center h-full animate-fadeIn">
                      <span
                        className={`font-black ${
                          card.type === 'jp'
                            ? 'text-2xl sm:text-4xl text-stone-900 font-serif'
                            : 'text-xs sm:text-base text-rose-700 font-bold'
                        }`}
                      >
                        {card.content}
                      </span>
                      {card.subContent && (
                        <span className="text-[10px] text-stone-400 font-mono mt-1 line-clamp-1">
                          {card.subContent}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-stone-400">
                      <span className="text-2xl font-serif opacity-30 text-white">日</span>
                      <span className="text-[9px] uppercase tracking-wider font-bold mt-1 text-stone-400">
                        NihonGo
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Victory Modal */}
          {memoryWon && (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center max-w-md mx-auto space-y-3 animate-fadeIn">
              <Trophy size={40} className="text-amber-500 mx-auto animate-bounce" />
              <h3 className="text-xl font-black text-emerald-950">
                Parabéns! Memória Ninja! (おめでとう)
              </h3>
              <p className="text-xs text-emerald-800">
                Você completou todos os 6 pares em <strong>{memoryTimer} segundos</strong> e <strong>{moves} tentativas</strong>!
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={initMemoryGame}
                  className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-500 transition cursor-pointer shadow"
                >
                  Jogar Novamente (+35 XP)
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. MONTADOR DE FRASES                                                     */}
      {/* ========================================================================= */}
      {activeGame === 'sentence' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Desafio de Ordenação Gramatical
              </span>
              <h3 className="text-lg font-bold text-stone-900">
                Frase #{sentenceIndex + 1} ({currentSentence.jlpt})
              </h3>
            </div>
            <span className="text-xs px-2.5 py-1 bg-stone-100 rounded-full text-stone-600 font-bold">
              {sentenceIndex + 1} de {filteredSentences.length}
            </span>
          </div>

          {/* Translation in Portuguese Target */}
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-center space-y-2">
            <span className="text-xs text-stone-400 font-bold uppercase block">
              Traduza para o Japonês:
            </span>
            <p className="text-xl font-extrabold text-stone-900">
              "{currentSentence.meaningPt}"
            </p>
            <p className="text-xs text-stone-500 font-medium">
              💡 Dica de Estrutura: {currentSentence.grammarHintPt}
            </p>
          </div>

          {/* Drop/Assemble Area */}
          <div className="p-4 bg-stone-900 rounded-2xl border-2 border-stone-700 min-h-[90px] flex flex-wrap items-center gap-2">
            {selectedTokens.length === 0 ? (
              <span className="text-xs text-stone-400 italic mx-auto">
                Clique nos blocos abaixo na ordem correta para montar a frase...
              </span>
            ) : (
              selectedTokens.map((token, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleRemoveToken(token, idx)}
                  className="px-3.5 py-2 bg-rose-600 text-white font-bold text-base rounded-xl shadow hover:bg-rose-500 transition cursor-pointer flex items-center gap-1.5 animate-fadeIn"
                >
                  <span>{token}</span>
                  <span className="text-xs opacity-75 font-normal">×</span>
                </button>
              ))
            )}
          </div>

          {/* Available Word Tokens */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-stone-500 uppercase block">
              Blocos Disponíveis:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {availableTokens.map((token, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handlePickToken(token, idx)}
                  className="px-4 py-2.5 bg-stone-100 text-stone-800 font-bold text-base rounded-xl border border-stone-300 hover:bg-stone-200 hover:border-stone-400 transition cursor-pointer shadow-sm active:scale-95"
                >
                  {token}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback & Actions */}
          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCheckSentence}
                disabled={selectedTokens.length === 0}
                className="px-6 py-2.5 bg-emerald-600 text-white font-bold text-sm rounded-xl hover:bg-emerald-500 disabled:opacity-50 transition cursor-pointer shadow"
              >
                Verificar Resposta
              </button>
              <button
                type="button"
                onClick={() => initSentenceBuilder(sentenceIndex, filteredSentences)}
                className="px-3 py-2.5 bg-stone-100 text-stone-600 text-xs font-bold rounded-xl hover:bg-stone-200 transition cursor-pointer"
              >
                Limpar
              </button>
            </div>

            {sentenceResult === 'correct' && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <CheckCircle size={18} />
                  <span>Correto! (+25 XP)</span>
                  <AudioButton text={currentSentence.fullJp} size="sm" />
                </div>
                <button
                  type="button"
                  onClick={nextSentence}
                  className="px-4 py-2 bg-stone-900 text-white font-bold text-xs rounded-xl hover:bg-stone-800 transition cursor-pointer"
                >
                  Próxima Frase →
                </button>
              </div>
            )}

            {sentenceResult === 'wrong' && (
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <XCircle size={18} />
                <span>A ordem ainda não está certa. Tente novamente!</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. QUIZ JLPT SHOWDOWN                                                     */}
      {/* ========================================================================= */}
      {activeGame === 'quiz' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-bold">
                JLPT {currentQuizQ.jlpt}
              </span>
              <span className="text-xs text-stone-500 font-semibold">
                {currentQuizQ.category}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold">
              <div className="flex items-center gap-1 text-amber-600">
                <Flame size={15} className="fill-amber-500 text-amber-500" />
                <span>Combo: {quizStreak}x</span>
              </div>
              <div className="text-stone-800">
                Score: <span className="text-rose-600 font-black">{quizScore} XP</span>
              </div>
            </div>
          </div>

          {/* Question Text */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 text-center space-y-2">
            <h3 className="text-2xl font-black text-stone-900 tracking-wide">
              {currentQuizQ.question}
            </h3>
            {currentQuizQ.questionRomaji && (
              <p className="text-xs text-stone-400 font-mono">
                {currentQuizQ.questionRomaji}
              </p>
            )}
            <p className="text-sm font-medium text-stone-700 pt-1">
              {currentQuizQ.questionPt}
            </p>
          </div>

          {/* Multiple Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuizQ.options.map((opt, idx) => {
              const isSelected = quizSelectedOpt === idx;
              const isCorrect = idx === currentQuizQ.correctIndex;
              let btnStyle = 'bg-stone-100 text-stone-800 hover:bg-stone-200 border-stone-200';

              if (quizSelectedOpt !== null) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-600 text-white font-bold ring-2 ring-emerald-400 border-emerald-500';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-600 text-white font-bold border-rose-500';
                } else {
                  btnStyle = 'bg-stone-50 text-stone-400 border-stone-100 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={quizSelectedOpt !== null}
                  onClick={() => handleQuizAnswer(idx)}
                  className={`p-4 rounded-xl text-base font-bold transition-all border shadow-sm cursor-pointer text-left ${btnStyle}`}
                >
                  <span className="mr-2 text-xs opacity-75 font-mono">
                    {String.fromCharCode(65 + idx)})
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {quizSelectedOpt !== null && (
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2">
                {quizSelectedOpt === currentQuizQ.correctIndex ? (
                  <CheckCircle className="text-emerald-600" size={18} />
                ) : (
                  <XCircle className="text-rose-600" size={18} />
                )}
                <span className="font-bold text-stone-900 text-sm">
                  {quizSelectedOpt === currentQuizQ.correctIndex
                    ? 'Excelente! Resposta Correta'
                    : 'Incorreto. Veja a explicação:'}
                </span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {currentQuizQ.explanationPt}
              </p>

              <div className="pt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={generateAiQuestions}
                  disabled={isAiGenerating}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold rounded-lg hover:bg-rose-100 transition cursor-pointer"
                >
                  <Bot size={14} />
                  <span>{isAiGenerating ? 'Gerando...' : '+ Novas Questões com IA'}</span>
                </button>

                <button
                  type="button"
                  onClick={nextQuizQuestion}
                  className="px-4 py-2 bg-stone-900 text-white font-bold text-xs rounded-xl hover:bg-stone-800 transition cursor-pointer"
                >
                  Próxima Pergunta →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. RUSH DE VELOCIDADE (KANJI & KANA)                                     */}
      {/* ========================================================================= */}
      {activeGame === 'rush' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="flex bg-stone-100 p-1 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setRushMode('kanji')}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                    rushMode === 'kanji' ? 'bg-amber-500 text-stone-950 font-black' : 'text-stone-600'
                  }`}
                >
                  Kanji Rush ({localJlpt})
                </button>
                <button
                  type="button"
                  onClick={() => setRushMode('kana')}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                    rushMode === 'kana' ? 'bg-amber-500 text-stone-950 font-black' : 'text-stone-600'
                  }`}
                >
                  Kana Rush
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-bold">
              <span className="text-rose-600 font-mono text-sm">⏳ {rushTimer}s</span>
              <span className="text-stone-800">Acertos: {rushScore}</span>
            </div>
          </div>

          {rushTarget && rushActive ? (
            <div className="space-y-6">
              <div className="p-8 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col items-center justify-center">
                <span className="text-6xl sm:text-8xl font-black text-stone-900 font-serif">
                  {rushTarget.char}
                </span>
                {rushTarget.sub && (
                  <span className="text-xs text-amber-800 font-bold uppercase tracking-wider mt-2">
                    {rushTarget.sub}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {rushTarget.options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleRushAnswer(opt)}
                    className="p-4 rounded-xl bg-stone-100 text-stone-900 text-base font-bold hover:bg-amber-500 hover:text-stone-950 transition cursor-pointer shadow-sm active:scale-95 text-center line-clamp-2"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-8">
              <h3 className="text-xl font-bold text-stone-900">Fim da Rodada!</h3>
              <p className="text-sm text-stone-600">
                Você acertou <strong>{rushScore}</strong> em sequência rápida!
              </p>
              <button
                type="button"
                onClick={() => {
                  setRushScore(0);
                  generateRushQuestion();
                }}
                className="px-6 py-2.5 bg-amber-500 text-stone-950 font-bold rounded-xl hover:bg-amber-400 transition cursor-pointer shadow"
              >
                Começar Nova Corrida!
              </button>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. COMPLETAR PALAVRA                                                      */}
      {/* ========================================================================= */}
      {activeGame === 'missing-char' && wcTarget && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-xl mx-auto text-center space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
             <h3 className="text-lg font-bold text-stone-800">Completar a Palavra</h3>
             <span className="text-emerald-600 font-bold text-sm">Score: {wcScore} XP</span>
          </div>

          <div className="py-6 space-y-4">
            <div className="text-xs text-stone-500 uppercase tracking-wider font-bold">Qual kanji/kana está faltando?</div>
            <div className="text-4xl sm:text-6xl font-black text-stone-900 tracking-widest font-serif flex justify-center gap-2">
              {wcTarget.word.split('').map((char, i) => (
                <span key={i} className={i === wcTarget.hiddenIdx ? "text-rose-500 border-b-4 border-rose-500 px-2" : ""}>
                  {i === wcTarget.hiddenIdx ? '?' : char}
                </span>
              ))}
            </div>
            <div className="text-sm text-stone-500 font-medium">
              Significado: <strong className="text-stone-700">{wcTarget.meaning.split('/')[0]}</strong>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {wcTarget.options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleWcAnswer(opt)}
                className="p-4 rounded-xl bg-stone-100 text-stone-900 text-2xl font-serif font-bold hover:bg-emerald-500 hover:text-white transition cursor-pointer shadow-sm active:scale-95"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. JOGO DOS 7 ERROS KANJI                                                */}
      {/* ========================================================================= */}
      {activeGame === 'spot-diff' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-xl mx-auto text-center space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h3 className="text-lg font-bold text-stone-800">Encontre o Kanji Diferente</h3>
            <div className="flex items-center gap-4 text-xs font-bold">
              <span className="text-rose-600 font-mono text-sm">⏳ {sdTimer}s</span>
              <span className="text-emerald-600">Acertos: {Math.floor(sdScore / 15)}</span>
            </div>
          </div>

          {sdActive ? (
            <div className="py-4">
              <p className="text-sm text-stone-500 mb-6 font-medium">Apenas 1 kanji é diferente. Encontre-o rápido!</p>
              <div className="grid grid-cols-5 gap-2 sm:gap-3 max-w-sm mx-auto">
                {sdGrid.map((cell, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSdAnswer(cell.isDiff)}
                    className="aspect-square rounded-lg bg-stone-100 border border-stone-200 text-stone-900 text-2xl sm:text-3xl font-serif font-bold hover:bg-rose-50 hover:border-rose-300 transition cursor-pointer flex items-center justify-center active:scale-90"
                  >
                    {cell.char}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-8">
              <h3 className="text-2xl font-bold text-stone-900">Tempo Esgotado!</h3>
              <p className="text-sm text-stone-600">
                Você sobreviveu tempo suficiente para marcar <strong>{sdScore} XP</strong>!
              </p>
              <button
                type="button"
                onClick={generateSpotDiff}
                className="px-6 py-2.5 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition cursor-pointer shadow"
              >
                Tentar Novamente
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
