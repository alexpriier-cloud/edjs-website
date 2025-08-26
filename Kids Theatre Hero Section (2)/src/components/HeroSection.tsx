import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Star, Sparkles } from 'lucide-react';
import { FoxCharacter } from './FoxCharacter';
import { OwlCharacter } from './OwlCharacter';
import { BunnyCharacter } from './BunnyCharacter';
import { useState, useEffect } from 'react';
import theatreImage from 'figma:asset/eb1cc44826c01203ffa8d9b9c7d9a51acd31e1af.png';

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
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Theatre Background Image */}
      <div className="absolute inset-0">
        <img 
          src={theatreImage} 
          alt="Kids in theatre audience" 
          className="w-full h-full object-cover"
        />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-purple-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
      </div>

      {/* Floating Clouds - More subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-12 w-20 h-12 bg-white/20 rounded-full backdrop-blur-sm shadow-lg"
          animate={cloudAnimation}
        />
        <motion.div
          className="absolute top-32 right-20 w-28 h-16 bg-white/15 rounded-full backdrop-blur-sm shadow-lg"
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
          className="absolute top-8 left-1/3 w-16 h-10 bg-white/25 rounded-full backdrop-blur-sm shadow-lg"
          animate={cloudAnimation}
        />
        <motion.div
          className="absolute top-24 right-1/3 w-24 h-14 bg-white/20 rounded-full backdrop-blur-sm shadow-lg"
          animate={{
            x: [-8, 8, -8],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>

      {/* Enhanced Twinkling Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 text-[#BDCF00] drop-shadow-lg"
          animate={starTwinkle}
        >
          <Star size={20} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-1/4 text-[#BDCF00] drop-shadow-lg"
          animate={{
            ...starTwinkle,
            transition: {
              ...starTwinkle.transition,
              delay: 1
            }
          }}
        >
          <Star size={24} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 left-1/5 text-[#BDCF00] drop-shadow-lg"
          animate={{
            ...starTwinkle,
            transition: {
              ...starTwinkle.transition,
              delay: 0.5
            }
          }}
        >
          <Star size={18} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/5 text-[#BDCF00] drop-shadow-lg"
          animate={{
            ...starTwinkle,
            transition: {
              ...starTwinkle.transition,
              delay: 1.5
            }
          }}
        >
          <Sparkles size={22} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-12 text-[#FFF176] drop-shadow-lg"
          animate={{
            ...starTwinkle,
            transition: {
              ...starTwinkle.transition,
              delay: 2
            }
          }}
        >
          <Star size={16} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute top-16 right-12 text-[#F8BBD0] drop-shadow-lg"
          animate={{
            ...starTwinkle,
            transition: {
              ...starTwinkle.transition,
              delay: 0.8
            }
          }}
        >
          <Sparkles size={20} />
        </motion.div>
      </div>

      {/* Enhanced Corner Doodles */}
      <div className="absolute top-6 left-6 text-[#F8BBD0] opacity-80 drop-shadow-lg">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <path d="M24 6 L30 18 L42 18 L32.4 26.4 L36 38.4 L24 31.2 L12 38.4 L15.6 26.4 L6 18 L18 18 Z" 
                fill="currentColor" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="absolute top-6 right-6 text-[#FFF176] opacity-80 drop-shadow-lg">
        <svg width="42" height="42" viewBox="0 0 42 42">
          <circle cx="21" cy="21" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="21" cy="21" r="8" fill="currentColor" />
        </svg>
      </div>

      {/* Theatre Curtains - Enhanced */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#8B0000] via-[#C62828] to-[#B71C1C] z-20 shadow-2xl"
        initial={{ x: 0 }}
        animate={{ x: curtainsOpen ? "-100%" : 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      >
        <div className="absolute right-0 top-0 w-6 h-full bg-gradient-to-r from-transparent to-black opacity-30" />
        {/* Enhanced curtain texture */}
        <div className="absolute inset-0 opacity-15">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-black absolute" style={{ left: `${i * 4}%` }} />
          ))}
        </div>
        {/* Curtain folds */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-full w-2 bg-gradient-to-r from-transparent via-black to-transparent absolute" 
                 style={{ left: `${i * 12.5}%` }} />
          ))}
        </div>
        {/* Curtain rod */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#8B4513] to-[#654321]"></div>
      </motion.div>

      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8B0000] via-[#C62828] to-[#B71C1C] z-20 shadow-2xl"
        initial={{ x: 0 }}
        animate={{ x: curtainsOpen ? "100%" : 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      >
        <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-l from-transparent to-black opacity-30" />
        {/* Enhanced curtain texture */}
        <div className="absolute inset-0 opacity-15">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-black absolute" style={{ right: `${i * 4}%` }} />
          ))}
        </div>
        {/* Curtain folds */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-full w-2 bg-gradient-to-l from-transparent via-black to-transparent absolute" 
                 style={{ right: `${i * 12.5}%` }} />
          ))}
        </div>
        {/* Curtain rod */}
        <div className="absolute top-0 right-0 w-full h-4 bg-gradient-to-b from-[#8B4513] to-[#654321]"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: curtainsOpen ? 1 : 0, scale: curtainsOpen ? 1 : 0.8 }}
          transition={{ duration: 1.2, delay: curtainsOpen ? 0.8 : 0 }}
        >
          
          {/* Characters - Enhanced positioning */}
          <div className="absolute -top-20 -left-40 hidden xl:block">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm shadow-xl">
              <FoxCharacter />
            </div>
          </div>
          
          <div className="absolute -top-24 -right-32 hidden xl:block">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm shadow-xl">
              <OwlCharacter />
            </div>
          </div>

          {/* Enhanced Central Chalkboard */}
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#212121] rounded-2xl p-8 lg:p-14 shadow-2xl border-8 border-[#8B4513] mx-4 backdrop-blur-sm">
            {/* Enhanced chalk dust effect */}
            <div className="absolute inset-0 bg-white opacity-8 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-yellow-400/5 rounded-2xl"></div>
            
            {/* Enhanced corner brackets */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-3 border-t-3 border-white/40 rounded-tl-lg"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-r-3 border-t-3 border-white/40 rounded-tr-lg"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-3 border-b-3 border-white/40 rounded-bl-lg"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-3 border-b-3 border-white/40 rounded-br-lg"></div>

            {/* Owl perched on top for mobile */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 xl:hidden">
              <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm shadow-lg">
                <OwlCharacter />
              </div>
            </div>

            {/* Enhanced title with better chalk effect */}
            <motion.h1
              className="font-amatic text-5xl md:text-7xl lg:text-8xl text-white mb-6 transform -rotate-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2 }}
              style={{
                textShadow: '3px 3px 0px rgba(189, 207, 0, 0.4), 6px 6px 0px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 0 10px rgba(189, 207, 0, 0.3))'
              }}
            >
              Bienvenue à L'École du<br />
              Jeune Spectateur ✨
            </motion.h1>

            {/* Enhanced subtitle */}
            <motion.p
              className="font-raleway text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2.4 }}
            >
              Le théâtre pour les enfants, les écoles et les familles
            </motion.p>

            {/* Enhanced buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2.8 }}
            >
              <Button 
                size="lg" 
                className="font-raleway bg-gradient-to-r from-[#BDCF00] to-[#A4B800] hover:from-[#A4B800] hover:to-[#8FA600] text-[#212121] px-10 py-6 text-lg rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 border-3 border-white/30 backdrop-blur-sm"
                style={{
                  boxShadow: '0 8px 32px rgba(189, 207, 0, 0.4), inset 0 2px 4px rgba(255,255,255,0.3)'
                }}
              >
                🎭 Découvrir les spectacles
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-raleway text-[#212121] border-3 border-white px-10 py-6 text-lg rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(45deg, #FFF176, #FFEB3B)',
                  boxShadow: '0 8px 32px rgba(255, 241, 118, 0.4), 0 0 0 3px white, inset 0 2px 4px rgba(255,255,255,0.3)'
                }}
              >
                ⭐ Réserver maintenant
              </Button>
            </motion.div>

            {/* Enhanced bunny with balloons */}
            <div className="absolute -bottom-12 -right-12 hidden lg:block">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm shadow-xl">
                <BunnyCharacter />
              </div>
            </div>

            {/* Mobile bunny */}
            <div className="lg:hidden mt-8">
              <div className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm shadow-lg">
                <BunnyCharacter />
              </div>
            </div>
          </div>

          {/* Fox for mobile/tablet */}
          <div className="xl:hidden mt-10">
            <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm shadow-lg">
              <FoxCharacter />
            </div>
          </div>

          {/* Enhanced stats section */}
          <motion.div
            className="flex justify-center gap-12 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.2 }}
          >
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="text-3xl mb-2">🎭</div>
              <div className="text-white text-lg drop-shadow-lg">50+ Spectacles</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
              <div className="text-white text-lg drop-shadow-lg">10k+ Familles</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-white text-lg drop-shadow-lg">5 Étoiles</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F8BBD0" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#BDCF00" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFF176" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path 
            d="M0 80L50 70C100 60 200 40 300 35C400 30 500 40 600 45C700 50 800 60 900 65C1000 70 1100 70 1150 70L1200 70V80H1150C1100 80 1000 80 900 80C800 80 700 80 600 80C500 80 400 80 300 80C200 80 100 80 50 80H0Z" 
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </div>
  );
}