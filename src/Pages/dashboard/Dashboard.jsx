import { Sparkles, Trophy, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const levels = [
    { id: 1, title: "Level 1: Number Safari", subject: "Math", status: "completed", stars: 3 },
    { id: 2, title: "Level 2: Space Addition", subject: "Math", status: "unlocked", stars: 0 },
    { id: 3, title: "Level 3: Jungle Fractions", subject: "Math", status: "locked", stars: 0 },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Daily Streak: 5 Days 🔥</span>
          </div>
          <h2 className="text-3xl font-black mb-2">Welcome back, Champion!</h2>
          <p className="text-indigo-100 max-w-xl text-sm font-medium">
            Your WonderBuddy is ready to help you conquer new math and science adventures today. Choose a level below to continue playing!
          </p>
        </div>
      </div>

      {/* Level Roadmap Section */}
      <div className="bg-white rounded-3xl p-6 border-4 border-indigo-50 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-black text-indigo-900 flex items-center">
            <Trophy className="w-5 h-5 text-amber-500 mr-2" />
            Your Learning Adventure Path
          </h3>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-xl">
            Stage 1: Explorer
          </span>
        </div>

        <div className="space-y-4">
          {levels.map((level) => (
            <div 
              key={level.id}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                level.status === 'unlocked' 
                  ? 'border-indigo-300 bg-indigo-50/50 hover:shadow-md cursor-pointer' 
                  : level.status === 'completed'
                  ? 'border-emerald-200 bg-emerald-50/30'
                  : 'border-slate-200 bg-slate-50 opacity-60'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg ${
                  level.status === 'completed' ? 'bg-emerald-500 text-white shadow-md' :
                  level.status === 'unlocked' ? 'bg-indigo-600 text-white shadow-md animate-bounce' :
                  'bg-slate-300 text-slate-600'
                }`}>
                  {level.id}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">{level.title}</h4>
                  <p className="text-xs text-slate-400 font-medium">Subject: {level.subject}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {level.status === 'completed' && (
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                )}
                {level.status === 'unlocked' && (
                  <Link 
                    to="/mathematics" 
                    className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition-all"
                  >
                    <span>Play Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {level.status === 'locked' && (
                  <span className="text-xs font-bold text-slate-400 bg-slate-200 px-3 py-1 rounded-xl">Locked</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;