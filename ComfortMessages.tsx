import React from 'react';
import { motion } from 'motion/react';
import { Heart, Coffee, Sparkles, Gift, Star, Moon, Rocket, Satellite } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ComfortMessages() {
  const messages = [
    {
      icon: Coffee,
      title: "Let me pamper you",
      text: "Hot chocolate, your favorite snacks, warm hugs - whatever you need, I'm here for you.",
      color: "bg-orange-500/20 border-orange-400/40 text-orange-100",
      iconColor: "text-orange-400"
    },
    {
      icon: Heart,
      title: "You're so strong",
      text: "I admire how you handle everything with such grace. You're incredible, Disha.",
      color: "bg-pink-500/20 border-pink-400/40 text-pink-100",
      iconColor: "text-pink-400"
    },
    {
      icon: Sparkles,
      title: "You deserve the universe",
      text: "And I want to give it to you. Starting with this heartfelt apology and all my love.",
      color: "bg-purple-500/20 border-purple-400/40 text-purple-100",
      iconColor: "text-purple-400"
    },
    {
      icon: Gift,
      title: "Special treats coming",
      text: "Your comfort is my priority. Movies, cuddles, and anything that makes you smile.",
      color: "bg-blue-500/20 border-blue-400/40 text-blue-100",
      iconColor: "text-blue-400"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
      >
        Things I Want You to Know 💝
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.2 }}
            className={`${message.color} border-2 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all backdrop-blur-sm`}
          >
            <message.icon className={`${message.iconColor} mb-4`} size={32} />
            <h3 className="mb-2">{message.title}</h3>
            <p>{message.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-purple-500/30"
      >
        <div className="p-8 order-2 md:order-1">
          <h3 className="mb-4 text-purple-200">Rest & Relax</h3>
          <p className="text-purple-100 mb-4">
            Take all the time you need to feel better. I'll be right here, ready to bring you 
            anything you need - a heating pad, your favorite comfort food, or just someone to 
            hold your hand.
          </p>
          <p className="text-purple-100">
            Your well-being is what matters most to me. Let me take care of you the way you deserve. ❤️
          </p>
        </div>
        <div className="h-64 md:h-full order-1 md:order-2">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1727363584291-433dcd86a0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc2NDI3NDEzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Earth from space"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
