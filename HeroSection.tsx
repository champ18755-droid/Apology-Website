import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-16 px-4"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="inline-block mb-6"
      >
        <Sparkles className="text-purple-400" size={48} />
      </motion.div>
      
      <h1 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
        Dear Disha,
      </h1>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        className="inline-flex items-center gap-2 mb-6"
      >
        <Star className="text-yellow-400" size={32} fill="currentColor" />
        <Heart className="text-pink-400" size={40} fill="currentColor" />
        <Star className="text-blue-400" size={32} fill="currentColor" />
      </motion.div>
      
      <p className="text-purple-200 max-w-2xl mx-auto">
        I know you're not feeling your best right now, and I'm so sorry I made things worse. 
        You mean the universe to me, and seeing you upset breaks my heart.
      </p>
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mt-8 text-purple-300"
      >
        <p>✨ You're my whole galaxy ✨</p>
      </motion.div>
    </motion.div>
  );
}
