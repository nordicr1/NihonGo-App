import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { playJapaneseAudio } from '../utils/audio';

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  rate?: number;
  label?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  className = '',
  size = 'md',
  rate = 0.9,
  label
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;
    setIsPlaying(true);
    await playJapaneseAudio(text, rate);
    setIsPlaying(false);
  };

  const sizeClasses = {
    sm: 'p-1 text-xs',
    md: 'p-1.5 text-sm',
    lg: 'p-2.5 text-base'
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title={`Ouvir pronúncia: ${text}`}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full transition-all duration-200 cursor-pointer ${
        isPlaying
          ? 'bg-rose-100 text-rose-700 ring-2 ring-rose-300 scale-105'
          : 'bg-stone-100 text-stone-700 hover:bg-rose-50 hover:text-rose-600 hover:scale-105 active:scale-95'
      } ${sizeClasses[size]} ${className}`}
    >
      <Volume2 size={iconSizes[size]} className={isPlaying ? 'animate-pulse' : ''} />
      {label && <span className="font-medium">{label}</span>}
    </button>
  );
};
