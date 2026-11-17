import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Plus, Star, Coins } from 'lucide-react';
import { childService } from './chiledService'; // Use '../../services/chiledService' if moved to Pages/auth/

const ChildSelection = () => {
  const [children, setChildren] = useState([
    { id: 1, name: "Alex", age: 8, avatar: "🦁", stars: 15, coins: 120 },
    { id: 2, name: "Maya", age: 6, avatar: "🦄", stars: 22, coins: 180 },
  ]);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch children from Spring Boot backend when ready
    const fetchChildren = async () => {
      try {
        const data = await childService.getChildren();
        if (data && data.length > 0) setChildren(data);
      } catch {
        // Fallback to mock data if backend isn't connected yet
      }
    };
    fetchChildren();
  }, []);

  const handleSelectChild = (child) => {
    localStorage.setItem('activeChild', JSON.stringify(child));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl border-4 border-indigo-100 text-center relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-200 rounded-full blur-3xl pointer-events-none"></div>

        <div className="mb-8 relative z-10">
          <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-3 animate-bounce">
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <h2 className="text-3xl font-black text-indigo-900 tracking-wide">Who is playing today?</h2>
          <p className="text-xs text-slate-400 font-medium mt-1">Select your profile to continue your learning adventure</p>
        </div>

        {/* Child Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 relative z-10">
          {children.map((child) => (
            <motion.div
              key={child.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelectChild(child)}
              className="bg-indigo-50/50 hover:bg-indigo-100/60 border-3 border-indigo-200 rounded-3xl p-6 cursor-pointer transition-all shadow-sm flex flex-col items-center group"
            >
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center text-4xl mb-3 group-hover:scale-110 transition-transform">
                {child.avatar || "🦁"}
              </div>
              <h3 className="text-lg font-black text-indigo-900">{child.name}</h3>
              <p className="text-xs text-slate-500 font-medium mb-3">Age {child.age || 7} • Explorer</p>

              <div className="flex items-center space-x-4 bg-white px-4 py-2 rounded-2xl shadow-inner border border-indigo-100">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-extrabold text-amber-700">{child.stars || 0}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Coins className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-extrabold text-yellow-700">{child.coins || 0}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add New Child Button */}
        <button
          onClick={() => alert("Add child modal popup can be added here!")}
          className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold px-6 py-3 rounded-2xl transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Profile</span>
        </button>
      </div>
    </div>
  );
};

export default ChildSelection;