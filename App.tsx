import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { HeroSection } from './components/HeroSection';
import { ApologyCard } from './components/ApologyCard';
import { ComfortMessages } from './components/ComfortMessages';
import { LoveNotes } from './components/LoveNotes';

export default function App() {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    setShowStars(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-black relative overflow-hidden">
      {/* Floating stars and hearts animation */}
      {showStars && (
        <div className="fixed inset-0 pointer-events-none">
          {/* Stars */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              initial={{ 
                y: Math.random() * window.innerHeight, 
                x: Math.random() * window.innerWidth, 
                opacity: 0,
                scale: 0 
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.8)',
              }}
            />
          ))}
          
          {/* Floating hearts */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`heart-${i}`}
              initial={{ y: '100vh', x: Math.random() * window.innerWidth, opacity: 0 }}
              animate={{
                y: '-100vh',
                opacity: [0, 0.6, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 8,
              }}
              className="absolute"
            >
              <Heart className="text-pink-400" size={Math.random() * 20 + 10} fill="currentColor" />
            </motion.div>
          ))}
          
          {/* Sparkles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{ 
                y: Math.random() * window.innerHeight, 
                x: Math.random() * window.innerWidth, 
                opacity: 0,
                rotate: 0
              }}
              animate={{
                opacity: [0, 1, 0],
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 6,
              }}
              className="absolute"
            >
              <Sparkles className="text-purple-300" size={Math.random() * 15 + 8} />
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative z-10">
        <HeroSection />
        <ApologyCard />
        <ComfortMessages />
        <LoveNotes />
      </div>
    </div>
  );
}
