import React from 'react';
import { UserStats } from '../types';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { LogOut } from 'lucide-react';
import { INITIAL_BADGES, getLevelTitle } from '../utils/storage';
import { Trophy, Flame, Zap, Award, CheckCircle2, Lock, X, RotateCcw } from 'lucide-react';

interface UserProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  onResetStats: () => void;
}

export const UserProgressModal: React.FC<UserProgressModalProps> = ({
  isOpen,
  onClose,
  stats,
  onResetStats,
}) => {
  if (!isOpen) return null;

  // XP to next level formula
  const currentLevelXpFloor = (stats.level - 1) * (stats.level - 1) * 100;
  const nextLevelXpCeil = stats.level * stats.level * 100;
  const xpNeeded = nextLevelXpCeil - currentLevelXpFloor;
  const xpProgress = Math.max(0, stats.xp - currentLevelXpFloor);
  const percent = Math.min(100, Math.round((xpProgress / (xpNeeded || 1)) * 100));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-stone-900 via-stone-800 to-rose-950 text-white flex items-center justify-between border-b border-rose-900/40">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center font-black text-xl shadow-lg">
              {stats.level}
            </div>
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Nível do Aluno
              </span>
              <h3 className="font-extrabold text-lg text-white">
                {getLevelTitle(stats.level)}
              </h3>
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* XP Progression Bar */}
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-stone-700">
              <span className="flex items-center gap-1.5 text-rose-600">
                <Zap size={14} className="fill-rose-500 text-rose-500" />
                <span>Progresso para Nível {stats.level + 1}</span>
              </span>
              <span>
                {stats.xp} / {nextLevelXpCeil} XP ({percent}%)
              </span>
            </div>

            <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/50">
              <Flame size={22} className="text-amber-500 mx-auto fill-amber-400 mb-1" />
              <span className="text-2xl font-black text-stone-900">{stats.streakDays}</span>
              <span className="text-[11px] text-stone-500 font-semibold block">
                Dias Consecutivos
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/50">
              <Trophy size={22} className="text-rose-500 mx-auto mb-1" />
              <span className="text-2xl font-black text-stone-900">{stats.xp}</span>
              <span className="text-[11px] text-stone-500 font-semibold block">Total de XP</span>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/50 col-span-2 sm:col-span-1">
              <Award size={22} className="text-emerald-500 mx-auto mb-1" />
              <span className="text-2xl font-black text-stone-900">
                {stats.unlockedBadges.length} / {INITIAL_BADGES.length}
              </span>
              <span className="text-[11px] text-stone-500 font-semibold block">
                Conquistas
              </span>
            </div>
          </div>

          {/* Badges / Conquistas */}
          <div className="space-y-6">
            {/* Unlocked Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-amber-600" />
                <h4 className="font-extrabold text-stone-900 text-sm">
                  Conquistas Desbloqueadas
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INITIAL_BADGES.filter(b => stats.unlockedBadges.includes(b.id)).map((b) => (
                  <div
                    key={b.id}
                    className="p-3.5 rounded-2xl bg-white border border-amber-300 shadow-sm flex items-start gap-3 transition hover:scale-[1.02]"
                  >
                    <div className="text-3xl select-none">{b.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-900 truncate">
                          {b.title}
                        </span>
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      </div>
                      <p className="text-[11px] text-stone-600 leading-tight mt-0.5">
                        {b.description}
                      </p>
                    </div>
                  </div>
                ))}
                {INITIAL_BADGES.filter(b => stats.unlockedBadges.includes(b.id)).length === 0 && (
                  <p className="text-sm text-stone-500 italic col-span-2">Nenhuma conquista desbloqueada ainda.</p>
                )}
              </div>
            </div>

            {/* Locked Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-stone-400" />
                <h4 className="font-extrabold text-stone-500 text-sm">
                  Conquistas a Desbloquear
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INITIAL_BADGES.filter(b => !stats.unlockedBadges.includes(b.id)).map((b) => (
                  <div
                    key={b.id}
                    className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 opacity-60 flex items-start gap-3"
                  >
                    <div className="text-3xl select-none grayscale">{b.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-600 truncate">
                          {b.title}
                        </span>
                      </div>
                      <p className="text-[10px] font-semibold text-rose-500 uppercase mt-1">
                        Desafio: {b.condition}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
                <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onResetStats}
              className="flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 font-semibold cursor-pointer"
            >
              <RotateCcw size={13} />
              <span>Resetar Progresso</span>
            </button>
            <button
              type="button"
              onClick={() => signOut(auth)}
              className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 font-semibold cursor-pointer"
            >
              <LogOut size={13} />
              <span>Sair da Conta</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-white font-bold text-xs rounded-xl hover:bg-stone-800 transition cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
