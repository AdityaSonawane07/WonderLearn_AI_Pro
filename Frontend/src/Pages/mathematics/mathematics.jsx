import { useEffect, useState } from "react";
import {
  Calculator,
  Star,
  Play,
  CheckCircle2,
  Lock,
  Trophy,
  Crown,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const mathLevels = [
  {
    id: 1,
    title: "Counting Apples",
    description: "Learn to count with happy apples!",
    color: "from-green-400 to-emerald-500",
    icon: "🍎",
    theme: "apple",
  },
  {
    id: 2,
    title: "Jungle Addition",
    description: "Help the jungle animals add numbers.",
    color: "from-blue-400 to-indigo-500",
    icon: "🦁",
    theme: "jungle",
  },
  {
 id: 3,
    title: "Subtraction Space",
    description: "Take away stars on a space adventure.",
    color: "from-purple-400 to-pink-500",
    icon: "🚀",
    theme: "space",
  },
  {
    id: 4,
    title: "Multiplication Kingdom",
    description: "Solve sums and unlock the magic castle.",
    color: "from-orange-400 to-red-500",
    icon: "🏰",
    theme: "castle",
  },
];
const readProgress = () => {
  try {
    const saved = JSON.parse(localStorage.getItem("mathCompletedLevels") || "[]");
    return Array.isArray(saved)
      ? [...new Set(saved.filter((id) => Number.isInteger(id) && id >= 1 && id <= 4))]
      : [];
  } catch {
    return [];
  }
};

const Mathematics = () => {
  const [completedLevels, setCompletedLevels] = useState(readProgress);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "mathCompletedLevels") setCompletedLevels(readProgress());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const isUnlocked = (levelId) =>
    levelId === 1 || completedLevels.includes(levelId - 1);

  const getStatus = (levelId) => {
    if (completedLevels.includes(levelId)) return "completed";
    return isUnlocked(levelId) ? "unlocked" : "locked";
  };

  const totalLevels = mathLevels.length;
  const completedCount = completedLevels.length;
  const progressPercent = (completedCount / totalLevels) * 100;

  return (
    <main className="math-page relative mx-auto max-w-5xl space-y-7 overflow-hidden px-3 pb-14 sm:px-0">
      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-13px) rotate(5deg); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-7px) scale(1.04); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: .25; transform: scale(.7) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.25) rotate(18deg); }
        }   @keyframes progressGlow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(18px) scale(.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(-7deg); }
          75% { transform: rotate(7deg); }
        }
        .math-float { animation: floaty 4s ease-in-out infinite; }
        .math-bob { animation: bob 2.8s ease-in-out infinite; }
        .math-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .math-pop { animation: popIn .65s both; }
        .math-progress { animation: progressGlow 2.4s ease-in-out infinite; }
        .math-card:hover .math-level-icon { animation: wiggle .45s ease-in-out; }
        .math-card:hover { transform: translateY(-5px) scale(1.01); }
        @media (prefers-reduced-motion: reduce) {
          .math-page *, .math-page *::before, .math-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-600 p-6 text-white shadow-xl sm:p-9">
        <div className="pointer-events-none absolute -right-8 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-pink-300/20 blur-2xl" />
        <span className="math-twinkle absolute right-[18%] top-7 text-2xl">✦</span>
        <span className="math-twinkle absolute bottom-8 right-8 text-xl [animation-delay:.7s]">✧</span>
        <span className="math-float absolute bottom-5 right-24 hidden text-5xl sm:block">🪁</span>

        <div className="relative z-10 flex items-center gap-4 sm:gap-5">
          <div className="math-bob flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 shadow-inner backdrop-blur sm:h-20 sm:w-20">
            <Calculator className="h-9 w-9 text-yellow-300 sm:h-11 sm:w-11" />
          </div>
          <div>
            <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-black tracking-widest">
              ✨ MATH ADVENTURE
            </span>
            <h1 className="mt-2 text-3xl font-black sm:text-4xl">Math Wonderland!</h1>
            <p className="mt-2 max-w-xl text-sm font-medium text-blue-100 sm:text-base">
              Learn, play and have fun. Every little step makes you a math star!
            </p>
          </div>
           </div>
        <div className="relative z-10 mt-6 flex flex-wrap gap-2 text-sm font-bold">
          <span className="rounded-full bg-white/15 px-3 py-2">🧠 Think</span>
          <span className="rounded-full bg-white/15 px-3 py-2">🎮 Play</span>
          <span className="rounded-full bg-white/15 px-3 py-2">🏆 Win stars</span>
        </div>
      </section>

      {/* Progress */}
      <section className="rounded-3xl border-2 border-indigo-100 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h2 className="font-black text-indigo-950">Your adventure progress</h2>
            <p className="mt-1 text-xs text-slate-500">Keep going, superstar!</p>
          </div>
          <span className="whitespace-nowrap rounded-full bg-indigo-50 px-3 py-2 text-sm font-black text-indigo-700">
            {completedCount}/{totalLevels} levels
          </span>
        </div>
        <div
          className="h-5 overflow-hidden rounded-full bg-slate-100 p-1"
          role="progressbar"
          aria-valuenow={Math.round(progressPercent)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Math adventure progress"
        >
          <div
            className="math-progress h-full rounded-full bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 transition-all duration-1000 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <p className="text-xs font-medium text-slate-500">
            {completedCount === totalLevels
              ? "Amazing! You finished every adventure! 🎉"
              : "Finish a level to open the next one."}
          </p>
          <span className="text-sm font-black text-emerald-600">
            {Math.round(progressPercent)}%
          </span>
        </div>
      </section>
       <section className="relative overflow-hidden rounded-[2rem] border-2 border-indigo-100 bg-gradient-to-b from-sky-50 via-indigo-50 to-purple-50 p-5 sm:p-9">
        <span className="math-twinkle absolute left-8 top-24 text-2xl text-amber-400">✦</span>
        <span className="math-twinkle absolute bottom-20 right-8 text-3xl text-pink-400 [animation-delay:1s]">✧</span>

        <div className="relative z-10 mb-9 text-center">
          <div className="math-bob mb-3 inline-block text-5xl">🏆</div>
          <h2 className="text-xl font-black text-indigo-950 sm:text-2xl">
            Climb the Math Adventure Ladder!
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Complete each challenge to unlock your next adventure.
          </p>
        </div>
         <div className="relative mx-auto max-w-xl">
          <div className="absolute bottom-10 left-1/2 top-10 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-green-300 via-indigo-300 to-purple-300" />

          <div className="relative space-y-7 sm:space-y-9">
            {mathLevels.map((level, index) => {
              const status = getStatus(level.id);
              const isCompleted = status === "completed";
              const isActive = status === "unlocked";
              const isLocked = status === "locked";

              return (
                <div
                  key={level.id}
                  className="math-pop relative"
                  style={{ animationDelay: `${index * 130}ms` }}
                >
                  <article
                    className={`math-card relative z-10 rounded-3xl border-4 p-4 shadow-lg transition-all duration-300 sm:p-5 ${
                      isCompleted
                        ? "border-green-400 bg-green-50 shadow-green-100"
                        : isActive
                        ? "border-indigo-300 bg-white shadow-indigo-100"
                        : "border-slate-200 bg-slate-100/95 opacity-80"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`math-level-icon flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-3xl shadow-md transition-transform ${
                          isLocked ? "from-slate-300 to-slate-400 grayscale" :
                          isCompleted ? "from-green-400 to-emerald-600" : level.color
                        }`}
                      >
                        {isLocked ? (
                          <Lock className="h-7 w-7 text-white" />
                        ) : (
                          <span>{level.icon}</span>
                        )}
                      </div>
   <div className="min-w-0 flex-1">
                        <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-black uppercase tracking-wider text-indigo-500">
                            Level {level.id}
                          </span>
                          {isCompleted && (
                            <span className="rounded-lg bg-green-100 px-2 py-1 text-[10px] font-black text-green-700">
                              ✓ COMPLETED
                            </span>
                          )}
                          {isActive && (
                            <span className="rounded-lg bg-indigo-100 px-2 py-1 text-[10px] font-black text-indigo-700">
                              ⭐ AVAILABLE
                            </span>
                          )}
                          {isLocked && (
                            <span className="rounded-lg bg-slate-200 px-2 py-1 text-[10px] font-black text-slate-500">
                              🔒 LOCKED
                            </span>
                          )}
                        </div>
                          <h3 className="font-black text-slate-800">{level.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                          {level.description}
                        </p>
                        {isCompleted && (
                          <div className="mt-2 flex items-center gap-1 text-xs font-bold text-green-700">
                            {[1, 2, 3].map((star) => (
                              <Star key={star} size={15} className="fill-amber-400 text-amber-400" />
                            ))}
                            <span className="ml-1">You did it!</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      {isActive && (
                        <Link
                          to="/quiz"
                          state={{ levelId: level.id }}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-black text-white shadow-md transition hover:scale-[1.02] hover:from-indigo-700 hover:to-violet-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                        >
                          <Play size={17} fill="white" /> Start Adventure
                          <Sparkles size={16} />
                        </Link>
                      )}
                      {isCompleted && (
                        <Link
                          to="/quiz"
                          state={{ levelId: level.id }}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-3 font-black text-white shadow-md transition hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-200"
                        >
                          <CheckCircle2 size={18} /> Play Again
                        </Link>
                      )}
                      {isLocked && (
                        <div className="rounded-xl bg-slate-200 py-3 text-center text-xs font-bold text-slate-500 sm:text-sm">
                          <Lock size={14} className="mr-2 inline" />
                          Complete the previous level first
                        </div>
                      )}
                    </div>
                  </article>
    {index !== mathLevels.length - 1 && (
                    <div className="relative z-10 flex justify-center py-3">
                      <div className="math-bob rounded-full border-2 border-indigo-200 bg-white p-2 shadow">
                        <ArrowDown className="h-5 w-5 text-indigo-500" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {completedCount === totalLevels && (
            <section className="math-pop mt-10 rounded-3xl bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 p-7 text-center shadow-xl">
              <div className="math-bob inline-block">
                <Crown className="mx-auto mb-3 h-14 w-14 text-white" />
              </div>
              <h2 className="text-3xl font-black text-white">Math Champion!</h2>
              <p className="mt-2 font-bold text-white">
                Congratulations! You completed every level!
              </p>
              <div className="mt-4 flex justify-center gap-2">
                {[1, 2, 3].map((star) => (
                  <Star key={star} size={30} className="fill-white text-white" />
                ))}
              </div>
              <Trophy className="mx-auto mt-5 text-white" size={40} />
            </section>
          )}
        </div>
      </section>
    </main>
  );
};

export default Mathematics;