import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, Lock, Mail, ArrowRight, Star, Rocket, Smile } from 'lucide-react';
import { authService } from "../../services/authServices";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields to start the adventure!');
      return;
    }

    try {
      setLoading(true);
      // Calls your Spring Boot backend via authService
      await authService.login({ email, password });
      // If successful, navigate to the home dashboard
      navigate('/');
    } catch (err) {
      // Catch real backend authentication errors or connection issues
      const backendMessage = err.response?.data?.message || err.message;
      setError(backendMessage || 'Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
      
      {/* Playful Floating Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-60 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-purple-400 rounded-full blur-3xl opacity-60 animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-pink-300 rounded-full blur-xl opacity-50 pointer-events-none"></div>

      <div className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full shadow-2xl border-4 border-amber-200 overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative z-10">
        
        {/* Left Side: Cartoon Illustration & Branding Panel */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute top-5 right-5 flex space-x-1">
            <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
            <Sparkles className="w-6 h-6 text-pink-300 animate-bounce" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-6">
              <Rocket className="w-4 h-4 text-yellow-300" />
              <span>WonderLearn Kids Academy</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3">
              Ready for your next learning quest?
            </h1>
            <p className="text-indigo-100 text-sm font-medium leading-relaxed">
              Log back in to pick up where you left off, collect badges, and unlock new adventures!
            </p>
          </div>

          {/* Cartoon Character / Illustration Spot */}
          <div className="my-8 relative flex justify-center items-center">
            <div className="w-48 h-48 bg-white/10 rounded-3xl backdrop-blur-sm border-2 border-white/20 flex flex-col items-center justify-center p-4 text-center shadow-inner group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg mb-3 transform group-hover:rotate-6 transition-transform">
                <Smile className="w-12 h-12 text-indigo-900" />
              </div>
              <span className="text-xs font-bold text-indigo-100">"Learning is fun when you play!"</span>
            </div>
          </div>

          <div className="relative z-10 text-xs text-indigo-200 font-semibold flex items-center justify-between">
            <span>Trusted by 10,000+ parents</span>
            <span className="flex items-center gap-1">🌟 4.9 / 5.0 Rating</span>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
          <div className="text-center lg:text-left mb-6">
            <h2 className="text-2xl font-black text-slate-900 tracking-wide">Welcome Back!</h2>
            <p className="text-xs text-slate-400 font-semibold mt-1">Please enter your login credentials below</p>
          </div>

          {error && (
            <div className="bg-rose-50 border-2 border-rose-200 text-rose-600 text-xs font-bold p-3 rounded-2xl mb-4 text-center animate-shake">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-black text-slate-600 uppercase mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="parent@example.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-600 uppercase mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold">
              <label className="flex items-center text-slate-500 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400 mr-2" />
                Remember me
              </label>
              <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-amber-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-orange-200 flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{loading ? 'Logging in...' : "Let's Play & Learn"}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-xs text-slate-500 font-semibold">
              Don't have an account yet?{' '}
              <Link to="/register" className="text-orange-600 font-black hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;