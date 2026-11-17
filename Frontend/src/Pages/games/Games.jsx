import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, RotateCcw, Sparkles } from 'lucide-react';

const initialCards = ['🦁', '🚀', '🦉', '🍎', '🦁', '🚀', '🦉', '🍎']
  .sort(() => Math.random() - 0.5)
  .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }));

const Games = () => {
  const [cards, setCards] = useState(initialCards);
  const [flippedIds, setFlippedIds] = useState([]);
  const [moves, setMoves] = useState(0);

  const handleCardClick = (id) => {
    const clicked = cards.find((c) => c.id === id);
    if (!clicked || clicked.flipped || clicked.matched || flippedIds.length === 2) return;

    const updated = cards.map((c) => (c.id === id ? { ...c, flipped: true } : c));
    const nextFlipped = [...flippedIds, id];
    setCards(updated);
    setFlippedIds(nextFlipped);

    if (nextFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [firstId, secondId] = nextFlipped;
      const firstCard = updated.find((c) => c.id === firstId);
      const secondCard = updated.find((c) => c.id === secondId);

      if (firstCard.emoji === secondCard.emoji) {
        setCards((prev) =>
          prev.map((c) => (c.id === firstId || c.id === secondId ? { ...c, matched: true } : c))
        );
        setFlippedIds([]);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => (c.id === firstId || c.id === secondId ? { ...c, flipped: false } : c))
          );
          setFlippedIds([]);
        }, 700);
      }
    }
  };

  const resetGame = () => {
    setCards(
      ['🦁', '🚀', '🦉', '🍎', '🦁', '🚀', '🦉', '🍎']
        .sort(() => Math.random() - 0.5)
        .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }))
    );
    setFlippedIds([]);
    setMoves(0);
  };

  const allMatched = cards.every((c) => c.matched);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Gamepad2 className="w-8 h-8 text-yellow-300" />
          </div>
          <div>
            <h2 className="text-3xl font-black">Wonder Arcade</h2>
            <p className="text-pink-100 text-sm font-medium mt-1">
              Flip cards to match pairs and boost your memory!
            </p>
          </div>
        </div>
        <button
          onClick={resetGame}
          className="bg-white text-rose-600 font-extrabold px-4 py-2.5 rounded-2xl shadow flex items-center space-x-2 hover:scale-105 transition-transform"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl p-8 border-4 border-indigo-50 shadow-sm text-center space-y-6">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <span className="text-xs font-black uppercase text-slate-400">Moves: {moves}</span>
          {allMatched && (
            <span className="inline-flex items-center space-x-1 text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>You Won! +50 Coins!</span>
            </span>
          )}
        </div>

        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {cards.map((card) => (
            <motion.button
              key={card.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCardClick(card.id)}
              className={`h-24 rounded-2xl text-4xl font-black flex items-center justify-center shadow-md border-3 transition-all ${
                card.flipped || card.matched
                  ? 'bg-amber-50 border-amber-300'
                  : 'bg-indigo-600 border-indigo-700 text-white'
              }`}
            >
              {card.flipped || card.matched ? card.emoji : '?'}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;