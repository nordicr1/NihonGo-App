import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { playJapaneseAudio } from '../utils/audio';

interface Props {
  targetPhraseJp: string;
  onGainXp: (amount: number, reason: string) => void;
}

export function SpeechPractice({ targetPhraseJp, onGainXp }: Props) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [result, setResult] = useState<'idle' | 'success' | 'fail' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Speech Recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'ja-JP';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setResult('idle');
        setTranscript('');
      };

      recognition.onresult = (event: any) => {
        const spokenText = event.results[0][0].transcript;
        setTranscript(spokenText);
        
        // Clean both target and spoken text for comparison (remove spaces, punctuation)
        const cleanTarget = targetPhraseJp.replace(/[\s、。！？,.!?]/g, '');
        const cleanSpoken = spokenText.replace(/[\s、。！？,.!?]/g, '');

        // Check if spoken text matches target (or is included/includes for leniency)
        if (cleanTarget === cleanSpoken || cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken)) {
          setResult('success');
          onGainXp(10, 'Pronúncia Correta');
        } else {
          setResult('fail');
        }
      };

      recognition.onerror = (event: any) => {
        setResult('error');
        setErrorMessage(event.error === 'not-allowed' 
          ? 'Acesso ao microfone negado.' 
          : 'Erro ao ouvir a voz.');
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [targetPhraseJp, onGainXp]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      setResult('error');
      setErrorMessage('Navegador não suporta reconhecimento de voz.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  return (
    <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase font-bold text-stone-400">Pratique sua Pronúncia</span>
        <button
          onClick={toggleListening}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            isListening 
              ? 'bg-rose-100 text-rose-700 animate-pulse' 
              : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-md active:scale-95'
          }`}
        >
          {isListening ? (
            <>
              <MicOff size={14} />
              <span>Ouvindo...</span>
            </>
          ) : (
            <>
              <Mic size={14} />
              <span>Falar</span>
            </>
          )}
        </button>
      </div>

      {transcript && (
        <div className={`p-3 rounded-xl border text-sm flex flex-col gap-1 ${
          result === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' :
          result === 'fail' ? 'bg-rose-50 border-rose-200 text-rose-800' :
          'bg-stone-50 border-stone-200 text-stone-700'
        }`}>
          <div className="flex items-center gap-2 font-bold mb-1">
            {result === 'success' && <CheckCircle2 size={16} className="text-emerald-500" />}
            {result === 'fail' && <XCircle size={16} className="text-rose-500" />}
            <span>Você disse:</span>
          </div>
          <p className="font-medium text-lg leading-snug">{transcript}</p>
          
          {result === 'success' && (
            <p className="text-xs font-bold text-emerald-600 mt-1">+10 XP • Pronúncia Perfeita!</p>
          )}
          {result === 'fail' && (
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-xs text-rose-600">Não foi bem isso. Tente novamente ou ouça o áudio original.</p>
              <button 
                onClick={() => playJapaneseAudio(targetPhraseJp)}
                className="self-start text-[10px] uppercase font-bold px-3 py-1.5 bg-white border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors"
              >
                Ouvir original
              </button>
            </div>
          )}
        </div>
      )}

      {result === 'error' && (
        <div className="flex items-center gap-2 text-xs font-bold text-rose-600 bg-rose-50 p-3 rounded-xl">
          <AlertCircle size={14} />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
