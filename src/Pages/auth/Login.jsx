import  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Temporary simulation for frontend testing - replace with authService.js login call later
    if (email && password) {
      localStorage.setItem('token', 'mock-jwt-token-123');
      navigate('/');
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-4 border-indigo-100 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-8 relative z-10">
          <div className="w-14 h-14 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-3 animate-bounce">
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <h2 className="text-2xl font-black text-indigo-900 tracking-wide">Welcome Back!</h2>
          <p className="text-xs text-slate-400 font-medium mt-1">Log in to continue your WonderLearn adventure</p>
        </div>

        {error && (
          <div className="bg-rose-50 border-2 border-rose-200 text-rose-600 text-xs font-bold p-3 rounded-xl mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 relative z-10">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="parent@example.com"
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-sm font-semibold focus:outline-none focus:border-indigo-500 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-sm font-semibold focus:outline-none focus:border-indigo-500 transition-colors"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3.5 rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-center space-x-2 transition-all hover:scale-[1.02]"
          >
            <span>Let's Play</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="text-center mt-6 relative z-10">
          <p className="text-xs text-slate-500 font-medium">
            Don't have an account yet?{' '}
            <Link to="/register" className="text-indigo-600 font-bold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;