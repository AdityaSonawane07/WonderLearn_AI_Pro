import { Atom, Star, Play, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Science = () => {
  const levels = [
    { id: 1, title: "Level 1: Solar System Explorer", description: "Meet the planets orbiting our Sun!", status: "unlocked", stars: 0 },
    { id: 2, title: "Level 2: Plant Magic", description: "Discover how seeds grow into giant trees.", status: "locked", stars: 0 },
    { id: 3, title: "Level 3: Animal Habitats", description: "Match animals to oceans, jungles, and deserts.", status: "locked", stars: 0 },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 rounded-3xl p-8 text-white shadow-xl flex items-center space-x-6">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
          <Atom className="w-8 h-8 text-yellow-300" />
        </div>
        <div>
          <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-2">
            Subject: Science Lab
          </span>
          <h2 className="text-3xl font-black">Science Discovery</h2>
          <p className="text-emerald-100 text-sm font-medium mt-1">
            Explore space, nature, and fun experiments with WonderBuddy!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {levels.map((lvl) => (
          <div
            key={lvl.id}
            className={`bg-white p-6 rounded-3xl border-3 flex flex-col justify-between ${
              lvl.status === 'unlocked' ? 'border-emerald-300 shadow-sm' : 'border-slate-200 opacity-60'
            }`}
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-black uppercase px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700">
                  {lvl.status}
                </span>
                {lvl.status === 'locked' ? (
                  <Lock className="w-4 h-4 text-slate-400" />
                ) : (
                  <Star className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <h4 className="font-black text-slate-800 mb-1">{lvl.title}</h4>
              <p className="text-xs text-slate-500 font-medium mb-4">{lvl.description}</p>
            </div>
            {lvl.status === 'unlocked' ? (
              <Link
                to="/quiz"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-2.5 rounded-xl flex items-center justify-center space-x-2"
              >
                <span>Start Mission</span>
                <Play className="w-4 h-4 fill-white" />
              </Link>
            ) : (
              <button disabled className="w-full bg-slate-200 text-slate-400 font-extrabold py-2.5 rounded-xl">
                Locked
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Science;