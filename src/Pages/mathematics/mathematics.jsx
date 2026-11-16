import { Calculator, Star, Play, CheckCircle2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mathematics = () => {
  const mathLevels = [
    { id: 1, title: "Level 1: Counting Apples", description: "Learn basic counting with fun animations.", status: "completed", stars: 3 },
    { id: 2, title: "Level 2: Jungle Addition", description: "Add numbers to help animals cross the river.", status: "unlocked", stars: 0 },
    { id: 3, title: "Level 3: Subtraction Space", description: "Subtract stars as your rocket travels.", status: "locked", stars: 0 },
    { id: 4, title: "Level 4: Multiplication Kingdom", description: "Unlock castle gates with multiplication tables.", status: "locked", stars: 0 },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Subject Header Banner */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex items-center space-x-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner">
            <Calculator className="w-8 h-8 text-yellow-300" />
          </div>
          <div>
            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-2 backdrop-blur-md">
              Subject: Math Adventure
            </div>
            <h2 className="text-3xl font-black">Math Wonderland</h2>
            <p className="text-blue-100 text-sm font-medium mt-1">
              Solve puzzles, collect stars, and master numbers with WonderBuddy!
            </p>
          </div>
        </div>
      </div>

      {/* Levels Grid / Path */}
      <div className="bg-white rounded-3xl p-6 border-4 border-indigo-50 shadow-sm">
        <h3 className="text-lg font-black text-indigo-900 mb-6 flex items-center">
          <Calculator className="w-5 h-5 text-blue-500 mr-2" />
          Choose Your Math Challenge
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mathLevels.map((lvl) => (
            <div
              key={lvl.id}
              className={`p-6 rounded-3xl border-3 transition-all flex flex-col justify-between ${
                lvl.status === 'completed'
                  ? 'border-emerald-200 bg-emerald-50/30'
                  : lvl.status === 'unlocked'
                  ? 'border-indigo-300 bg-indigo-50/40 hover:shadow-lg'
                  : 'border-slate-200 bg-slate-50 opacity-60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-black px-3 py-1 rounded-xl uppercase tracking-wider ${
                    lvl.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                    lvl.status === 'unlocked' ? 'bg-indigo-100 text-indigo-700' :
                    'bg-slate-200 text-slate-500'
                  }`}>
                    {lvl.status}
                  </span>
                  {lvl.status === 'completed' && (
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  )}
                  {lvl.status === 'locked' && (
                    <Lock className="w-5 h-5 text-slate-400" />
                  )}
                </div>

                <h4 className="text-base font-black text-slate-800 mb-1">{lvl.title}</h4>
                <p className="text-xs text-slate-500 font-medium mb-4">{lvl.description}</p>
              </div>

              <div>
                {lvl.status === 'unlocked' ? (
                  <Link
                    to="/quiz"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-2.5 px-4 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all hover:scale-[1.02]"
                  >
                    <span>Start Level</span>
                    <Play className="w-4 h-4 fill-white" />
                  </Link>
                ) : lvl.status === 'completed' ? (
                  <Link
                    to="/quiz"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-2.5 px-4 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all"
                  >
                    <span>Play Again</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </Link>
                ) : (
                  <button 
                    disabled 
                    className="w-full bg-slate-200 text-slate-400 font-extrabold py-2.5 px-4 rounded-xl cursor-not-allowed"
                  >
                    Locked Level
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mathematics;