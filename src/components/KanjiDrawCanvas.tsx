import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, Eye, EyeOff, Sparkles, Check, AlertTriangle } from 'lucide-react';

interface KanjiDrawCanvasProps {
  kanji: string;
  onSuccess?: () => void;
}

export const KanjiDrawCanvas: React.FC<KanjiDrawCanvasProps> = ({ kanji, onSuccess }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [strokeCount, setStrokeCount] = useState(0);
  const [accuracyMsg, setAccuracyMsg] = useState<{ text: string; type: 'success' | 'error' | null }>({ text: '', type: null });

  useEffect(() => {
    clearCanvas();
  }, [kanji]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setStrokeCount(0);
    setAccuracyMsg({ text: '', type: null });
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#e11d48'; // Rose-600
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      setStrokeCount((prev) => prev + 1);
    }
  };

  const evaluateDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Create offscreen canvas and draw the perfect character
    const offCanvas = document.createElement('canvas');
    offCanvas.width = canvas.width;
    offCanvas.height = canvas.height;
    const offCtx = offCanvas.getContext('2d');
    if (!offCtx) return;

    // Draw text in offscreen
    offCtx.fillStyle = 'black';
    offCtx.font = '900 160px serif';
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText(kanji, canvas.width / 2, canvas.height / 2);

    // 2. Get ImageData
    const userImg = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const targetImg = offCtx.getImageData(0, 0, canvas.width, canvas.height).data;

    let userPixels = 0;
    let targetPixels = 0;
    let overlapPixels = 0;

    // RGBA: every 4 values is one pixel
    for (let i = 0; i < userImg.length; i += 4) {
      const isUserDrawn = userImg[i + 3] > 0; // alpha > 0
      const isTargetDrawn = targetImg[i + 3] > 0; // alpha > 0

      if (isUserDrawn) userPixels++;
      if (isTargetDrawn) targetPixels++;
      if (isUserDrawn && isTargetDrawn) overlapPixels++;
    }

    if (userPixels === 0) {
      setAccuracyMsg({ text: 'Desenhe algo primeiro!', type: 'error' });
      return;
    }

    // Calculamos a proporção do quanto o usuário desenhou DENTRO do caractere alvo
    const precision = overlapPixels / userPixels;
    // Calculamos a proporção do quanto do caractere alvo foi COBERTO pelo usuário
    const coverage = overlapPixels / targetPixels;

    if (precision < 0.4) {
      setAccuracyMsg({ text: 'Muito fora do guia! Tente seguir os traços.', type: 'error' });
    } else if (coverage < 0.3) {
      setAccuracyMsg({ text: 'Incompleto! Desenhe todo o caractere.', type: 'error' });
    } else {
      setAccuracyMsg({ text: 'Excelente! Desenho validado.', type: 'success' });
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
            Área de Prática (Precisão)
          </span>
        </div>
        <span className="text-xs text-stone-400">
          Traços desenhados: <strong>{strokeCount}</strong>
        </span>
      </div>

      {accuracyMsg.text && (
        <div className={`p-3 rounded-lg flex items-center gap-2 text-sm font-bold ${accuracyMsg.type === 'error' ? 'bg-rose-900/50 text-rose-300' : 'bg-emerald-900/50 text-emerald-300'}`}>
          {accuracyMsg.type === 'error' ? <AlertTriangle size={16} /> : <Check size={16} />}
          <span>{accuracyMsg.text}</span>
        </div>
      )}

      {/* Drawing Pad with Grid lines */}
      <div className="relative w-full aspect-square max-w-[280px] mx-auto bg-stone-950 rounded-2xl border-2 border-stone-700 overflow-hidden select-none touch-none">
        {/* Traditional 4-quadrant guideline grid */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-2 grid-rows-2">
          <div className="border-r border-b border-stone-800/80 border-dashed" />
          <div className="border-b border-stone-800/80 border-dashed" />
          <div className="border-r border-stone-800/80 border-dashed" />
          <div />
        </div>

        {/* Kanji Watermark Guide */}
        {showGuide && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-stone-800 font-serif font-black select-none opacity-40" style={{ fontSize: '160px' }}>
            {kanji}
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={280}
          height={280}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
        />
      </div>

      {/* Canvas Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
        <button
          type="button"
          onClick={() => setShowGuide(!showGuide)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800 text-stone-300 text-xs font-semibold hover:bg-stone-700 hover:text-white transition cursor-pointer"
        >
          {showGuide ? <EyeOff size={14} /> : <Eye size={14} />}
          <span>{showGuide ? 'Ocultar' : 'Mostrar'} Guia</span>
        </button>

        <button
          type="button"
          onClick={clearCanvas}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800 text-rose-400 text-xs font-semibold hover:bg-stone-700 hover:text-rose-300 transition cursor-pointer"
        >
          <RotateCcw size={14} />
          <span>Limpar</span>
        </button>

        <button
          type="button"
          onClick={evaluateDrawing}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition cursor-pointer"
        >
          <Check size={14} />
          <span>Verificar Precisão</span>
        </button>
      </div>
    </div>
  );
};
