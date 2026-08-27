import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Mail, Lock, Loader2, LogIn, UserPlus, Eye, EyeOff } from 'lucide-react';

export function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [error, setError] = useState<string | null>(null);
  const [resetMessage, setResetMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setError(null);
    setResetMessage(null);
    if (!email) {
      setError('Por favor, digite seu email no campo acima para recuperar a senha.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMessage('Email de recuperação enviado! Verifique sua caixa de entrada (e spam).');
    } catch (err: any) {
      if (err.code === 'auth/invalid-email') {
        setError('Formato de email inválido.');
      } else {
        setError('Ocorreu um erro. Verifique se o email está correto.');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Email ou senha incorretos.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Este email já está em uso.');
      } else if (err.code === 'auth/weak-password') {
        setError('A senha deve ter pelo menos 6 caracteres.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Formato de email inválido.');
      } else {
        setError('Ocorreu um erro: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Modern Blurred Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-800/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[800px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Card */}
      <div className="w-full max-w-md bg-white/[0.03] backdrop-blur-2xl border border-white/[0.05] rounded-[2rem] shadow-2xl relative z-10 overflow-hidden">
        
        {/* Top Highlight line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="p-10">
          {/* Header Section */}
          <div className="flex flex-col items-center mb-10">
            {/* Japanese Flag Icon */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl border border-white/10 ring-4 ring-white/5">
              <div className="w-7 h-7 bg-[#BC002D] rounded-full" />
            </div>
            
            <h1 className="text-3xl font-black text-white tracking-tight mb-2">NihonGo!</h1>
            <p className="text-stone-400 text-sm font-medium text-center">
              Domine o idioma japonês<br/>e alcance a fluência.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-stone-400 uppercase tracking-widest pl-1">Endereço de E-mail</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-stone-500 group-focus-within:text-rose-400 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/40 border border-white/[0.08] text-white rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-rose-500/50 focus:border-rose-500/50 transition-all placeholder:text-stone-600 font-medium text-sm"
                  placeholder="voce@exemplo.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-stone-400 uppercase tracking-widest pl-1">Sua Senha</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-stone-500 group-focus-within:text-rose-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/40 border border-white/[0.08] text-white rounded-2xl py-3.5 pl-12 pr-12 focus:outline-none focus:ring-1 focus:ring-rose-500/50 focus:border-rose-500/50 transition-all placeholder:text-stone-600 font-medium text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-500 hover:text-stone-300 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold animate-fadeIn flex items-center justify-center text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-white hover:bg-stone-200 text-black font-bold py-4 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98] text-sm cursor-pointer"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin text-stone-500" />
              ) : (
                <>
                  {isLogin ? <LogIn size={18} /> : <UserPlus size={18} />}
                  <span>{isLogin ? 'Entrar na Plataforma' : 'Criar minha Conta'}</span>
                </>
              )}
            </button>
          </form>

          {resetMessage && (
            <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold animate-fadeIn flex items-center justify-center text-center">
              {resetMessage}
            </div>
          )}

          {/* Additional Actions */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            {isLogin && (
              <button
                type="button"
                onClick={handleResetPassword}
                className="text-xs text-stone-500 hover:text-rose-400 font-medium transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Esqueci minha senha
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
                setResetMessage(null);
              }}
              className="text-sm text-stone-400 font-medium hover:text-white transition-colors cursor-pointer"
            >
              {isLogin ? (
                <>Não possui uma conta? <span className="text-rose-400 font-bold ml-1">Criar agora</span></>
              ) : (
                <>Já é aluno? <span className="text-rose-400 font-bold ml-1">Fazer login</span></>
              )}
            </button>
          </div>

        </div>
      </div>
      
      {/* Footer Branding */}
      <div className="absolute bottom-8 text-center text-stone-600 text-xs font-medium tracking-widest uppercase">
        NihonGo! Learning Platform
      </div>
    </div>
  );
}
