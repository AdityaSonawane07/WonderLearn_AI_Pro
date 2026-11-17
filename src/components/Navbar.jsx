import { Sparkles, Coins, Bell, User } from 'lucide-react';

const Navbar = ({ childName = "Alex", stars = 12, coins = 150 }) => {
  return (
    <header className="bg-white border-b-4 border-indigo-100 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      {/* App Branding / Mascot area */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-md animate-bounce">
          <span className="text-white text-xl font-black">W</span>
        </div>
        <div>
          <h1 className="text-lg font-black text-indigo-900 tracking-wide">WonderLearn</h1>
          <p className="text-xs text-slate-400 font-medium">Hello, {childName}! Ready to play?</p>
        </div>
      </div>

      {/* Gamified Stats & Badges */}
      <div className="flex items-center space-x-4">
        {/* Stars Counter */}
        <div className="flex items-center bg-amber-50 border-2 border-amber-200 px-3 py-1.5 rounded-full shadow-inner">
          <Sparkles className="w-5 h-5 text-amber-500 mr-1.5 animate-spin-slow" />
          <span className="font-extrabold text-amber-700 text-sm">{stars}</span>
        </div>

        {/* Coins Counter */}
        <div className="flex items-center bg-yellow-50 border-2 border-yellow-200 px-3 py-1.5 rounded-full shadow-inner">
          <Coins className="w-5 h-5 text-yellow-500 mr-1.5" />
          <span className="font-extrabold text-yellow-700 text-sm">{coins}</span>
        </div>

        {/* Notifications */}
        <button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping"></span>
        </button>

        {/* User Profile Avatar */}
        {/* User Profile Avatar */}
<button
  onClick={() => console.log("Profile clicked")}
  className="w-10 h-10 rounded-2xl bg-indigo-500 border-2 border-indigo-300 flex items-center justify-center text-white font-bold shadow-md cursor-pointer hover:scale-105 hover:bg-indigo-600 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400"
  aria-label="Open user profile"
>
  <User className="w-5 h-5" />
</button>
      </div>
    </header>
  );
};

export default Navbar;