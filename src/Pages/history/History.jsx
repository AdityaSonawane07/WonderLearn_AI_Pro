import { History as HistoryIcon, Play, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const History = () => {
  const eras = [
    { id: 1, title: "Stage 1: Age of Dinosaurs", description: "Travel back 65 million years to meet T-Rex!", status: "unlocked" },
    { id: 2, title: "Stage 2: Ancient Pyramids", description: "Uncover secrets of the Great Pyramids.", status: "locked" },
    { id: 3, title: "Stage 3: First Moon Landing", description: "Blast off with astronauts to the Moon!", status: "locked" },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-8 text-white shadow-xl flex items-center space-x-6">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
          <HistoryIcon className="w-8 h-8 text-yellow-200" />
        </div>
        <div>
          <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-2">
            Subject: Time Machine
          </span>
          <h2 className="text-3xl font-black">History Adventures</h2>
          <p className="text-amber-100 text-sm font-medium mt-1">
            Step into interactive stories from the past!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {eras.map((era) => (
          <div
            key={era.id}
            className={`bg-white p-6 rounded-3xl border-3 flex flex-col justify-between ${
              era.status === 'unlocked' ? 'border-amber-300 shadow-sm' : 'border-slate-200 opacity-60'
            }`}
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-black uppercase px-3 py-1 rounded-xl bg-amber-50 text-amber-700">
                  {era.status}
                </span>
                {era.status === 'locked' && <Lock className="w-4 h-4 text-slate-400" />}
              </div>
              <h4 className="font-black text-slate-800 mb-1">{era.title}</h4>
              <p className="text-xs text-slate-500 font-medium mb-4">{era.description}</p>
            </div>
            {era.status === 'unlocked' ? (
              <Link
                to="/quiz"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold py-2.5 rounded-xl flex items-center justify-center space-x-2"
              >
                <span>Time Travel</span>
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

export default History;