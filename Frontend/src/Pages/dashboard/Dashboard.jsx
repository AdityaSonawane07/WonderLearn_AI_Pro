import {
  Sparkles,
  Calculator,
  FlaskConical,
  Palette,
  BookOpen,
  Landmark,
  Bot,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const adventures = [
  {
    title: "Math Kingdom",
    description:
      "Solve puzzles to rescue the Number Dragon from the Fraction Forest! Interactive games make addition, subtraction, and multiplication fun.",
    button: "Enter Kingdom",
    icon: Calculator,
    color: "from-[#0ea5e9] to-[#0284c7]",
    glow: "bg-sky-200",
    to: "/mathematics",
  },
  {
    title: "Science Lab",
    description:
      "Become a junior scientist! Conduct safe virtual experiments, explore ecosystems, and discover the wonders of physics and chemistry.",
    button: "Start Experiment",
    icon: FlaskConical,
    color: "from-[#10b981] to-[#059669]",
    glow: "bg-emerald-200",
    to: "/science",
  },
  {
    title: "Creative Studio",
    description:
      "Unleash your creativity! Digital drawing, music creation, storytelling, and collaborative art projects with friends.",
    button: "Create Now",
    icon: Palette,
    color: "from-[#8b5cf6] to-[#7c3aed]",
    glow: "bg-purple-200",
    to: "/creative-studio",
  },
  {
    title: "Story World",
    description:
      "Step into magical stories, meet amazing characters, build your reading skills, and create your own adventures.",
    button: "Read a Story",
    icon: BookOpen,
    color: "from-[#ec4899] to-[#db2777]",
    glow: "bg-pink-200",
    to: "/stories",
  },
  {
    title: "History Explorer",
    description:
      "Travel through time, discover fascinating places, and meet inspiring people from the past through fun activities.",
    button: "Explore History",
    icon: Landmark,
    color: "from-[#f59e0b] to-[#d97706]",
    glow: "bg-amber-200",
    to: "/history",
  },
  {
    title: "WonderBuddy AI",
    description:
      "Ask questions, get simple explanations, and learn step by step with your friendly AI learning companion.",
    button: "Meet WonderBuddy",
    icon: Bot,
    color: "from-[#6366f1] to-[#4f46e5]",
    glow: "bg-indigo-200",
    to: "/wonderbuddy",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fafc] text-[#0f172a]">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 shadow-[0_5px_20px_rgba(15,23,42,0.06)] backdrop-blur">
        <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <Sparkles className="h-9 w-9 text-[#0ea5e9]" strokeWidth={2.5} />
            <span className="text-2xl font-black tracking-tight text-[#0284c7]">
              WonderLearn
            </span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            <a
              href="#home"
              className="rounded-full px-5 py-3 text-[15px] font-semibold transition hover:bg-slate-100"
            >
              Home
            </a>
            <a
              href="#adventures"
              className="rounded-full bg-[#0ea5e9] px-5 py-3 text-[15px] font-semibold text-white shadow-sm"
            >
              Adventures
            </a>
            <a
              href="#how-it-works"
              className="rounded-full px-5 py-3 text-[15px] font-semibold transition hover:bg-slate-100"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="rounded-full px-5 py-3 text-[15px] font-semibold transition hover:bg-slate-100"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="rounded-full px-5 py-3 text-[15px] font-semibold transition hover:bg-slate-100"
            >
              About
            </a>
          </nav>

          <a
            href="#adventures"
            className="shrink-0 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:px-7"
          >
            Start Free Trial
          </a>
        </div>

        {/* Compact navigation for mobile */}
        <nav className="flex justify-center gap-1 overflow-x-auto px-3 pb-3 lg:hidden">
          <a href="#home" className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold hover:bg-slate-100">Home</a>
          <a href="#adventures" className="whitespace-nowrap rounded-full bg-[#0ea5e9] px-3 py-2 text-xs font-semibold text-white">Adventures</a>
          <a href="#how-it-works" className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold hover:bg-slate-100">How It Works</a>
          <a href="#about" className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold hover:bg-slate-100">About</a>
        </nav>
      </header>

      {/* Adventure page */}
      <main id="home" className="relative isolate mx-auto min-h-[calc(100vh-82px)] max-w-[1500px] px-5 pb-20 pt-7 sm:px-8 sm:pt-9 lg:px-12">
        {/* Decorative background bubbles */}
        <div className="pointer-events-none absolute -left-28 top-[-105px] -z-10 h-80 w-80 rounded-full bg-[#e0f2fe] opacity-80" />
        <div className="pointer-events-none absolute right-[-95px] top-[380px] -z-10 h-52 w-52 rounded-full bg-[#fce7f3] opacity-75" />
        <div className="pointer-events-none absolute left-[26%] top-[430px] -z-10 h-36 w-36 rounded-full bg-[#d1fae5] opacity-70" />

        <section id="adventures">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0ea5e9] shadow-sm">
              <Sparkles className="h-4 w-4 text-[#0ea5e9]" />
              LEARN • PLAY • DISCOVER
            </div>
            <h1 className="bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl lg:text-[50px]">
              All Learning Adventures
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#475569] sm:text-lg">
              Choose your adventure! Each world offers unique quests, characters,
              and rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {adventures.map((adventure, index) => {
              const Icon = adventure.icon;

              return (
                <article
                  key={adventure.title}
                  className="group relative flex min-h-[330px] flex-col items-center overflow-hidden rounded-[2.15rem] border border-slate-100 bg-white px-6 pb-6 pt-7 text-center shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(15,23,42,0.1)] sm:px-7"
                  style={{ animation: `wonderCardIn .55s ease-out ${index * 90}ms both` }}
                >
                  <div className={`pointer-events-none absolute -right-8 top-2 h-32 w-32 rounded-full ${adventure.glow} opacity-20 blur-[1px] transition duration-500 group-hover:scale-125`} />
                  <div className={`relative mb-5 flex h-[86px] w-[86px] items-center justify-center rounded-full bg-gradient-to-br ${adventure.color} text-white shadow-lg transition duration-300 group-hover:rotate-[-7deg] group-hover:scale-110`}>
                    <Icon className="h-10 w-10" strokeWidth={2.2} />
                  </div>

                  <h2 className="relative text-xl font-black tracking-tight text-[#0f172a]">
                    {adventure.title}
                  </h2>
                  <p className="relative mt-3 flex-1 text-[15px] leading-[1.7] text-[#475569]">
                    {adventure.description}
                  </p>

                  <Link
                    to={adventure.to}
                    className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${adventure.color} px-5 py-3.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:brightness-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-100`}
                  >
                    {adventure.button}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="how-it-works"
          className="mt-14 rounded-3xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm sm:p-8"
        >
          <h2 className="text-2xl font-black text-[#0f172a]">Learning is an adventure!</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#475569]">
            Pick a world, complete fun activities, earn rewards, and unlock new
            challenges as you learn.
          </p>
        </section>
        <div id="pricing" />
        <div id="about" />
      </main>

      <style>{`
        @keyframes wonderCardIn {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;