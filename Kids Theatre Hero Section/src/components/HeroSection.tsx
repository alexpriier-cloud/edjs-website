import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Star, Sparkles } from 'lucide-react';
import { FoxCharacter } from './FoxCharacter';
import { OwlCharacter } from './OwlCharacter';
import { BunnyCharacter } from './BunnyCharacter';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [curtainsOpen, setCurtainsOpen] = useState(false);

  useEffect(() => {
    // Open curtains after component mounts
    const timer = setTimeout(() => setCurtainsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const cloudAnimation = {
    x: [-10, 10, -10],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const starTwinkle = {
    scale: [1, 1.3, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#87CEEB] to-white">
      
      {/* Floating Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-12 w-24 h-14 bg-white rounded-full opacity-90 shadow-sm"
          animate={cloudAnimation}
        />
        <motion.div
          className="absolute top-32 right-20 w-32 h-18 bg-white rounded-full opacity-80 shadow-sm"
          animate={{
            x: [10, -10, 10],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute top-8 left-1/3 w-20 h-12 bg-white rounded-full opacity-85 shadow-sm"
          animate={cloudAnimation}
        />
        <motion.div
          className="absolute top-24 right-1/3 w-28 h-16 bg-white rounded-full opacity-75 shadow-sm"
          animate={{
            x: [-8, 8, -8],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-16 w-26 h-15 bg-white rounded-full opacity-70 shadow-sm"
          animate={cloudAnimation}
        />
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 text-[#BDCF00]"
          animate={starTwinkle}
        >
          <Star size={16} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-1/4 text-[#BDCF00]"
          animate={{
            ...starTwinkle,
            transition: {
              ...starTwinkle.transition,
              delay: 1
            }
          }}
        >
          <Star size={20} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 left-1/5 text-[#BDCF00]"
          animate={{
            ...starTwinkle,
            transition: {
              ...starTwinkle.transition,
              delay: 0.5
            }
          }}
        >
          <Star size={14} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/5 text-[#BDCF00]"
          animate={{
            ...starTwinkle,
            transition: {
              ...starTwinkle.transition,
              delay: 1.5
            }
          }}
        >
          <Sparkles size={18} />
        </motion.div>
      </div>

      {/* Corner Doodles */}
      <div className="absolute top-4 left-4 text-[#F8BBD0] opacity-60">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20 5 L25 15 L35 15 L27 22 L30 32 L20 26 L10 32 L13 22 L5 15 L15 15 Z" 
                fill="currentColor" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute top-4 right-4 text-[#FFF176] opacity-60">
        <svg width="35" height="35" viewBox="0 0 35 35">
          <circle cx="17.5" cy="17.5" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="17.5" r="6" fill="currentColor" />
        </svg>
      </div>

      {/* Theatre Curtains */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#C62828] via-[#D32F2F] to-[#B71C1C] z-20"
        initial={{ x: 0 }}
        animate={{ x: curtainsOpen ? "-100%" : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-r from-transparent to-black opacity-20" />
        {/* Curtain texture */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-black absolute" style={{ left: `${i * 5}%` }} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C62828] via-[#D32F2F] to-[#B71C1C] z-20"
        initial={{ x: 0 }}
        animate={{ x: curtainsOpen ? "100%" : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-l from-transparent to-black opacity-20" />
        {/* Curtain texture */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-black absolute" style={{ right: `${i * 5}%` }} />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: curtainsOpen ? 1 : 0, scale: curtainsOpen ? 1 : 0.8 }}
          transition={{ duration: 1, delay: curtainsOpen ? 1 : 0 }}
        >
          
          {/* Characters */}
          <div className="absolute -top-16 -left-32 hidden lg:block">
            <FoxCharacter />
          </div>
          
          <div className="absolute -top-20 -right-20 hidden lg:block">
            <OwlCharacter />
          </div>

          {/* Central Chalkboard */}
          <div className="relative bg-[#212121] rounded-lg p-8 lg:p-12 shadow-2xl border-8 border-[#8B4513] mx-4">
            {/* Chalk dust effect */}
            <div className="absolute inset-0 bg-white opacity-5 rounded-lg"></div>
            
            {/* Corner brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white opacity-30"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white opacity-30"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white opacity-30"></div>

            {/* Owl perched on top */}
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 lg:hidden">
              <OwlCharacter />
            </div>

            <motion.h1
              className="font-amatic text-4xl md:text-6xl lg:text-7xl text-white mb-4 transform -rotate-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              style={{
                textShadow: '2px 2px 0px rgba(189, 207, 0, 0.3)',
              }}
            >
              Bienvenue à L'École du<br />
              Jeune Spectateur ✨
            </motion.h1>

            <motion.p
              className="font-raleway text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.3 }}
            >
              Le théâtre pour les enfants, les écoles et les familles
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.6 }}
            >
              <Button 
                size="lg" 
                className="font-raleway bg-[#BDCF00] hover:bg-[#A4B800] text-[#212121] px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-white/20"
              >
                🎭 Découvrir les spectacles
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-raleway bg-[#FFF176] hover:bg-[#FFEB3B] text-[#212121] border-2 border-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{
                  background: 'linear-gradient(45deg, #FFF176, #FFEB3B)',
                  boxShadow: '0 0 0 2px white, 0 4px 8px rgba(0,0,0,0.2)'
                }}
              >
                ⭐ Réserver maintenant
              </Button>
            </motion.div>

            {/* Bunny with balloons */}
            <div className="absolute -bottom-8 -right-8 hidden sm:block">
              <BunnyCharacter />
            </div>

            {/* Mobile bunny */}
            <div className="sm:hidden mt-6">
              <BunnyCharacter />
            </div>
          </div>

          {/* Fox for mobile */}
          <div className="lg:hidden mt-8">
            <FoxCharacter />
          </div>
        </motion.div>
      </div>

      {/* Kids Silhouettes Audience */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent">
        <div className="absolute bottom-0 left-0 w-full h-16 flex items-end justify-center space-x-4 px-4">
          {/* Kid silhouettes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-8 h-12 bg-black/40 rounded-t-full"
              style={{ height: `${40 + Math.random() * 20}px` }}
              animate={{
                y: [-2, 2, -2],
                transition: {
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 60L50 55C100 50 200 40 300 35C400 30 500 30 600 32.5C700 35 800 40 900 42.5C1000 45 1100 45 1150 45L1200 45V60H1150C1100 60 1000 60 900 60C800 60 700 60 600 60C500 60 400 60 300 60C200 60 100 60 50 60H0Z" 
            fill="#F8BBD0" 
            opacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
}