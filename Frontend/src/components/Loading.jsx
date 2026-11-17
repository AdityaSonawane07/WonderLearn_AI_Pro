import { Sparkles } from 'lucide-react';

const Loading = ({ message = "Loading wonder world..." }) => {
  return (
    <div className="min-h-screen bg-indigo-50/50 flex flex-col items-center justify-center p-6">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <div className="absolute w-24 h-24 bg-indigo-300 rounded-full animate-ping opacity-75"></div>
        
        {/* Inner bouncy icon container */}
        <div className="relative w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl animate-bounce">
          <Sparkles className="w-8 h-8 text-yellow-300 animate-spin-slow" />
        </div>
      </div>
      <h2 className="mt-6 text-lg font-black text-indigo-900 tracking-wide animate-pulse">
        {message}
      </h2>
      <p className="text-sm text-slate-400 font-medium mt-1">Preparing your fun levels...</p>
    </div>
  );
};

export default Loading;