import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ApologyCard() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-purple-500/30"
      >
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBjb3NtaWMlMjBwdXJwbGV8ZW58MXx8fHwxNzY0MzE0MjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cosmic nebula"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-white">I'm Really Sorry 💕</h2>
          </div>
        </div>
        
        <div className="p-8">
          <p className="text-purple-100 mb-4">
            I know this time of the month is already tough enough, and I should have been more understanding 
            and supportive. Instead, I messed up and made you feel worse. That was never my intention, 
            and I feel terrible about it.
          </p>
          
          <p className="text-purple-100 mb-4">
            You deserve nothing but love, care, and patience - especially right now. I promise to be better, 
            to listen more, and to be the support system you need.
          </p>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border-2 border-purple-400/40 backdrop-blur-sm">
            <p className="text-purple-100 text-center">
              "You're not just my girl, you're my best friend, my happiness, and my everything. 
              Please forgive me. I love you so much. 💗"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
