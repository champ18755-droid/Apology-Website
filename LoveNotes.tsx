import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LoveNotes() {
  const [currentNote, setCurrentNote] = useState(0);
  
  const notes = [
    "Your smile lights up my entire galaxy, even on the toughest days.",
    "I love how strong and resilient you are, Disha.",
    "Thank you for being patient with me when I mess up.",
    "You make every moment better just by being in it.",
    "I promise to be more thoughtful and caring from now on.",
    "You're beautiful, inside and out, always.",
    "I'm so lucky to have you in my universe.",
    "Your happiness means everything to me.",
  ];

  const nextNote = () => {
    setCurrentNote((prev) => (prev + 1) % notes.length);
  };

  const prevNote = () => {
    setCurrentNote((prev) => (prev - 1 + notes.length) % notes.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
        className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-500/30"
      >
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Star className="text-yellow-400 mx-auto mb-4" size={48} fill="currentColor" />
          </motion.div>
          <h2 className="text-purple-100 mb-2">Love Notes for You</h2>
          <p className="text-purple-300">Swipe through these reminders of how much you mean to me</p>
        </div>

        <div className="relative bg-gradient-to-br from-indigo-950/80 to-purple-950/80 backdrop-blur-sm rounded-2xl p-8 min-h-[200px] flex items-center justify-center border border-purple-400/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNote}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="text-purple-100 italic">
                "{notes[currentNote]}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prevNote}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-3 transition-all shadow-lg shadow-purple-500/30"
            aria-label="Previous note"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {notes.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentNote ? 'w-8 bg-gradient-to-r from-purple-400 to-pink-400' : 'w-2 bg-purple-400/40'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextNote}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-3 transition-all shadow-lg shadow-purple-500/30"
            aria-label="Next note"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="mt-12 text-center"
      >
        <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl mb-8 border border-purple-500/30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1500185497267-d635f9c5e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMHNwYWNlfGVufDF8fHx8MTc2NDMwNzU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Galaxy stars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-8">
            <div className="text-white max-w-2xl px-4">
              <h3 className="mb-3">Together Through Everything</h3>
              <p>
                Just like the stars shine through the darkness, I'll be by your side through 
                all of it, holding your hand, wiping your tears, and celebrating your smiles.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-purple-500/30">
          <Heart className="text-pink-400 mx-auto mb-4" size={56} fill="currentColor" />
          <h2 className="mb-4 text-purple-100">I Love You, Disha</h2>
          <p className="text-purple-200 mb-4">
            Please forgive me for being insensitive. You're the most important person in my universe, 
            and I never want to be the reason for your tears. I want to be your comfort, your support, 
            and your safe space.
          </p>
          <p className="text-purple-200">
            Let me make it up to you. I'm here for you, always and forever. 💕
          </p>
        </div>
      </motion.div>
    </div>
  );
}
