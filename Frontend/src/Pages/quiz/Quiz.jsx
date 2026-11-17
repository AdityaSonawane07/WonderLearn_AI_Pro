import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Star,
  Coins,
  ArrowRight,
  RotateCcw,
  Trophy,
  CheckCircle2,
  XCircle
} from 'lucide-react';

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get selected level from Mathematics page
  const levelId = location.state?.levelId || 1;

  // Minimum marks required to unlock next level
  const PASS_MARK = 2;

  // Quiz questions
  const questions = [
    {
      id: 1,
      character: "🦁 Leo the Lion",
      storyText:
        "Leo found 4 mangoes on one tree and 3 mangoes on another tree! How many mangoes does Leo have altogether?",
      options: [
        "6 Mangoes",
        "7 Mangoes",
        "8 Mangoes",
        "5 Mangoes"
      ],
      correctAnswer: "7 Mangoes",
      hint: "Count 4 fingers on one hand, then add 3 more!"
    },
    {
      id: 2,
      character: "🦉 Ollie the Owl",
      storyText:
        "Ollie has 9 golden stars and gives 4 stars to his little brother. How many stars are left?",
      options: [
        "4 Stars",
        "6 Stars",
        "5 Stars",
        "3 Stars"
      ],
      correctAnswer: "5 Stars",
      hint: "Start at 9 and count backwards 4 steps."
    },
    {
      id: 3,
      character: "🐵 Milo the Monkey",
      storyText:
        "Milo swings across 2 vines every minute. How many vines will he swing across in 4 minutes?",
      options: [
        "6 Vines",
        "8 Vines",
        "10 Vines",
        "4 Vines"
      ],
      correctAnswer: "8 Vines",
      hint: "Add 2 + 2 + 2 + 2!"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progressPercent =
    ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100;

  // Check whether student passed
  const passed = score >= PASS_MARK;

  // Calculate rewards
  const earnedStars = score === 3 ? 3 : score === 2 ? 2 : 0;
  const earnedCoins = score * 25;

  // Select answer
  const handleOptionClick = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  // Save completed level
  const saveLevelProgress = () => {
    try {
      const saved = JSON.parse(
        localStorage.getItem('mathCompletedLevels') || '[]'
      );

      if (!Array.isArray(saved)) {
        throw new Error('Invalid saved progress');
      }

      if (!saved.includes(levelId)) {
        saved.push(levelId);
      }

      localStorage.setItem(
        'mathCompletedLevels',
        JSON.stringify(saved)
      );
    } catch (error) {
      console.error('Unable to save level progress:', error);
    }
  };

  // Move to next question
  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      if (score >= PASS_MARK) {
        saveLevelProgress();
      }
      setQuizCompleted(true);
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowHint(false);
    setQuizCompleted(false);
  };

  // Return to Mathematics ladder
  const handleBackToLadder = () => {
    navigate('/mathematics');
  };

  // ==============================
  // QUIZ COMPLETION SCREEN
  // ==============================
  if (quizCompleted) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-xl mx-auto bg-white rounded-3xl p-8 border-4 border-indigo-100 shadow-xl text-center space-y-6 mt-6"
      >
        <div className={`w-20 h-20 ${
          passed
            ? 'bg-gradient-to-tr from-amber-400 to-yellow-500'
            : 'bg-gradient-to-tr from-indigo-400 to-purple-500'
        } rounded-3xl mx-auto flex items-center justify-center shadow-lg animate-bounce`}>
          {passed ? (
            <Trophy className="w-10 h-10 text-white" />
          ) : (
            <Sparkles className="w-10 h-10 text-white" />
          )}
        </div>

        <div>
          <h2 className="text-3xl font-black text-indigo-900">
            {passed ? 'Level Complete!' : 'Keep Practicing!'}
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-2">
            You answered {score} out of {questions.length} questions correctly!
          </p>
          <p className="text-xs font-bold text-indigo-500 mt-2">
            Level {levelId} Adventure
          </p>
        </div>

        <div className={`p-4 rounded-2xl border-2 ${
          passed
            ? 'bg-emerald-50 border-emerald-200'
            : 'bg-rose-50 border-rose-200'
        }`}>
          {passed ? (
            <>
              <CheckCircle2 className="w-9 h-9 text-emerald-500 mx-auto mb-2" />
              <h3 className="font-black text-emerald-700">
                Amazing! You passed this level!
              </h3>
              <p className="text-sm text-emerald-600 mt-1">
                Your next adventure is now unlocked!
              </p>
            </>
          ) : (
            <>
              <XCircle className="w-9 h-9 text-rose-500 mx-auto mb-2" />
              <h3 className="font-black text-rose-700">
                Next Level is Still Locked!
              </h3>
              <p className="text-sm text-rose-600 mt-1">
                You need at least {PASS_MARK} correct answers to unlock the next level. Try again!
              </p>
            </>
          )}
        </div>

        {/* Earned Stars */}
        <div>
          <p className="text-xs font-black text-slate-500 uppercase mb-3">
            Your Star Rewards
          </p>
          <div className="flex justify-center space-x-3 py-2">
            {[1, 2, 3].map((starNum) => (
              <motion.div
                key={starNum}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: starNum * 0.2,
                  type: 'spring'
                }}
              >
                <Star
                  className={`w-12 h-12 ${
                    starNum <= earnedStars
                      ? 'fill-amber-400 text-amber-400 drop-shadow-md'
                      : 'text-slate-200 fill-slate-100'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coin Rewards */}
        <div className="inline-flex items-center space-x-2 bg-yellow-50 border-2 border-yellow-200 px-5 py-2.5 rounded-2xl">
          <Coins className="w-6 h-6 text-yellow-500" />
          <span className="font-black text-yellow-700">
            +{earnedCoins} Wonder Coins Earned!
          </span>
        </div>

        <p className="text-xs text-slate-400 font-medium">
          Passing score: {PASS_MARK}/{questions.length}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            onClick={handleRestart}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold py-3.5 px-4 rounded-2xl flex items-center justify-center space-x-2 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Try Again</span>
          </button>

          <button
            onClick={handleBackToLadder}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-center space-x-2 transition-all"
          >
            <span>Back to Adventure</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    );
  }

  // ==============================
  // MAIN QUIZ SCREEN
  // ==============================
  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* Progress Bar Header */}
      <div className="bg-white rounded-3xl p-5 border-4 border-indigo-50 shadow-sm flex items-center justify-between gap-4">
        <span className="text-xs font-black text-indigo-600 uppercase tracking-wider whitespace-nowrap">
          Level {levelId} • Stage {currentIndex + 1}/{questions.length}
        </span>

        <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden p-0.5">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div className="flex items-center space-x-1 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-xs font-black text-amber-700">
            {score}
          </span>
        </div>
      </div>

      {/* Animated Character Story Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-8 border-4 border-indigo-100 shadow-md space-y-6"
        >
          {/* Character Badge */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <span className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-2xl text-sm font-black">
              <span>{currentQuestion.character}</span>
            </span>

            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center space-x-1 text-xs font-extrabold text-amber-600 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-xl transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
            </button>
          </div>

          {/* Story Question */}
          <h3 className="text-xl font-black text-slate-800 leading-relaxed">
            {currentQuestion.storyText}
          </h3>

          {/* WonderBuddy Hint */}
          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 text-xs font-bold text-amber-800"
            >
              💡 WonderBuddy Tip: {currentQuestion.hint}
            </motion.div>
          )}

          {/* Answer Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {currentQuestion.options.map((option) => {
              const isCorrect = option === currentQuestion.correctAnswer;
              const isSelected = option === selectedOption;

              let buttonStyle =
                'border-slate-200 bg-slate-50 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700';

              if (isAnswered) {
                if (isCorrect) {
                  buttonStyle =
                    'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-md';
                } else if (isSelected) {
                  buttonStyle = 'border-rose-400 bg-rose-50 text-rose-700';
                } else {
                  buttonStyle =
                    'border-slate-100 bg-slate-50 text-slate-400 opacity-60';
                }
              }

              return (
                <motion.button
                  key={option}
                  whileHover={!isAnswered ? { scale: 1.02 } : {}}
                  whileTap={!isAnswered ? { scale: 0.98 } : {}}
                  onClick={() => handleOptionClick(option)}
                  disabled={isAnswered}
                  className={`p-4 rounded-2xl border-2 font-extrabold text-left flex items-center justify-between transition-all ${buttonStyle}`}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Feedback and Continue */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-slate-100"
            >
              <p className={`text-sm font-black ${
                selectedOption === currentQuestion.correctAnswer
                  ? 'text-emerald-600'
                  : 'text-rose-500'
              }`}>
                {selectedOption === currentQuestion.correctAnswer
                  ? '🎉 Awesome job! +25 Coins!'
                  : `Good try! The right answer is ${currentQuestion.correctAnswer}.`}
              </p>

              <button
                onClick={handleNext}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3 px-6 rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-center space-x-2 transition-all"
              >
                <span>
                  {currentIndex + 1 === questions.length
                    ? 'Finish Level'
                    : 'Continue'}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;