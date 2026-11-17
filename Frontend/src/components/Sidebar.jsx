import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calculator, Atom, History, Gamepad2, BrainCircuit, Bot, Sparkles } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard, color: 'text-indigo-500 bg-indigo-50' },
    { path: '/mathematics', label: 'Mathematics', icon: Calculator, color: 'text-blue-500 bg-blue-50' },
    { path: '/science', label: 'Science', icon: Atom, color: 'text-emerald-500 bg-emerald-50' },
    { path: '/history', label: 'History', icon: History, color: 'text-amber-500 bg-amber-50' },
    { path: '/games', label: 'Games', icon: Gamepad2, color: 'text-rose-500 bg-rose-50' },
    { path: '/quiz', label: 'Quiz', icon: BrainCircuit, color: 'text-purple-500 bg-purple-50' },
    { path: '/ai-tutor', label: 'AI Tutor', icon: Bot, color: 'text-cyan-500 bg-cyan-50' },
  ];

  return (
    <aside className="w-64 bg-white border-r-4 border-indigo-50 min-h-[calc(100vh-4rem)] p-4 flex flex-col justify-between shadow-sm">
      <div className="space-y-2">
        <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Learning Menu</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-2xl font-bold transition-all duration-200 group ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                    : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-white/20 text-white' : item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm tracking-wide">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Fun Mascot Banner at Bottom of Sidebar */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-4 text-white text-center relative overflow-hidden shadow-md">
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <Sparkles className="w-8 h-8 mx-auto mb-2 text-yellow-300 animate-bounce" />
        <h4 className="text-sm font-extrabold mb-1">WonderBuddy Active!</h4>
        <p className="text-xs text-indigo-100 opacity-90 mb-3">Ask me anything about your lessons.</p>
        <NavLink 
          to="/ai-tutor" 
          className="inline-block bg-white text-indigo-600 text-xs font-black px-4 py-2 rounded-xl shadow hover:bg-yellow-300 hover:text-slate-900 transition-all"
        >
          Chat Now
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;