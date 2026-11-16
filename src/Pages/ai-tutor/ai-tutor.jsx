import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, Sparkles, Volume2, Lightbulb } from 'lucide-react';
import api from '../../services/api';

const AITutor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'buddy',
      text: "Hi there! I'm WonderBuddy! 🌟 Ask me anything about math, science, or stories—or click a fun question below!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "Why is the sky blue? 🌤️",
    "Help me with 7 × 8! 🔢",
    "Tell me a short dinosaur fact 🦖",
    "How do plants eat sunlight? 🌱",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Free browser-native Text-to-Speech so kids can listen to WonderBuddy
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 1.2;
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };
const handleSend = async (customText) => {
    const query = (customText || input).trim();
    if (!query || isTyping) return;

    // Use crypto.randomUUID() for a safe, pure unique ID
    const userMsg = { id: crypto.randomUUID(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInput('');
    setIsTyping(true);

    try {
      const response = await api.post('/buddy/chat', { message: query });
      const replyText =
        response.data?.reply ||
        response.data?.response ||
        "That's a super smart question! Let's break it down step by step together!";

      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), sender: 'buddy', text: replyText },
      ]);
    } catch {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            sender: 'buddy',
            text: `Great question about "${query}"! 🚀 Once your Spring Boot backend is running on port 8080, I'll answer this live with my AI brain!`,
          },
        ]);
        setIsTyping(false);
      }, 600);
      return;
    }

    setIsTyping(false);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-11rem)] bg-white rounded-3xl border-4 border-indigo-100 shadow-lg overflow-hidden">
      {/* WonderBuddy Header */}
      <div className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 p-5 text-white flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner"
          >
            <Bot className="w-7 h-7 text-yellow-300" />
          </motion.div>
          <div>
            <h2 className="text-lg font-black flex items-center gap-2">
              WonderBuddy AI
              <span className="text-xs bg-emerald-400 text-slate-900 font-black px-2.5 py-0.5 rounded-full">
                Online
              </span>
            </h2>
            <p className="text-xs text-indigo-100 font-medium">
              Your friendly study sidekick & homework helper
            </p>
          </div>
        </div>
        <Sparkles className="w-6 h-6 text-yellow-300 animate-spin-slow" />
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-indigo-50/20">
        {messages.map((msg) => {
          const isBuddy = msg.sender === 'buddy';
          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${isBuddy ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[78%] rounded-3xl px-5 py-3.5 shadow-sm text-sm font-semibold leading-relaxed ${
                  isBuddy
                    ? 'bg-white border-2 border-indigo-100 text-slate-800 rounded-bl-md'
                    : 'bg-indigo-600 text-white rounded-br-md'
                }`}
              >
                <p>{msg.text}</p>
                {isBuddy && (
                  <button
                    onClick={() => speakText(msg.text)}
                    title="Listen aloud"
                    className="mt-2 inline-flex items-center space-x-1 text-xs font-extrabold text-indigo-500 hover:text-indigo-700"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Read Aloud</span>
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border-2 border-indigo-100 rounded-3xl px-5 py-3 text-xs font-extrabold text-indigo-500 animate-pulse">
              WonderBuddy is thinking... ✨
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompt Chips */}
      <div className="px-5 py-2.5 bg-slate-50 border-t-2 border-indigo-50 flex items-center gap-2 overflow-x-auto">
        <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => handleSend(prompt)}
            className="text-xs font-bold bg-white hover:bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-4 bg-white border-t-2 border-indigo-50 flex items-center space-x-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask WonderBuddy a question..."
          className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-indigo-500 transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-extrabold px-5 py-3 rounded-2xl shadow-md flex items-center space-x-2 transition-all"
        >
          <span>Send</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default AITutor;