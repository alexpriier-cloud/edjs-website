import { motion } from 'motion/react';

export function BunnyCharacter() {
  return (
    <motion.div 
      className="relative w-24 h-32"
      animate={{
        y: [-8, 0, -8],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-lg">
        <defs>
          <filter id="bunnyShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.3)"/>
          </filter>
          <linearGradient id="bunnyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD0DC" />
            <stop offset="100%" stopColor="#FFB6C1" />
          </linearGradient>
        </defs>
        
        {/* Bunny body */}
        <ellipse cx="50" cy="75" rx="18" ry="22" fill="url(#bunnyGradient)" filter="url(#bunnyShadow)" />
        
        {/* Head */}
        <circle cx="50" cy="50" r="16" fill="url(#bunnyGradient)" filter="url(#bunnyShadow)" />
        
        {/* Ears */}
        <ellipse cx="43" cy="30" rx="4" ry="15" fill="url(#bunnyGradient)" filter="url(#bunnyShadow)" />
        <ellipse cx="57" cy="30" rx="4" ry="15" fill="url(#bunnyGradient)" filter="url(#bunnyShadow)" />
        <ellipse cx="43" cy="32" rx="2" ry="8" fill="#FF69B4" />
        <ellipse cx="57" cy="32" rx="2" ry="8" fill="#FF69B4" />
        
        {/* Eyes with better highlights */}
        <circle cx="46" cy="47" r="3" fill="white" />
        <circle cx="54" cy="47" r="3" fill="white" />
        <circle cx="46" cy="47" r="2" fill="#2C1810" />
        <circle cx="54" cy="47" r="2" fill="#2C1810" />
        <circle cx="47" cy="46" r="0.8" fill="white" />
        <circle cx="55" cy="46" r="0.8" fill="white" />
        
        {/* Nose */}
        <ellipse cx="50" cy="52" rx="1.5" ry="1" fill="#FF1493" />
        
        {/* Mouth */}
        <path d="M 50 53 Q 48 55 46 53" stroke="#2C1810" strokeWidth="0.8" fill="none" />
        <path d="M 50 53 Q 52 55 54 53" stroke="#2C1810" strokeWidth="0.8" fill="none" />
        
        {/* Enhanced Balloons */}
        <motion.g
          animate={{
            x: [-2, 2, -2],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Balloon strings */}
          <line x1="65" y1="20" x2="68" y2="65" stroke="#8B4513" strokeWidth="0.8" />
          <line x1="72" y1="15" x2="68" y2="65" stroke="#8B4513" strokeWidth="0.8" />
          <line x1="79" y1="18" x2="68" y2="65" stroke="#8B4513" strokeWidth="0.8" />
          
          {/* Balloons with gradients */}
          <circle cx="65" cy="20" r="5" fill="#FF6B6B" filter="url(#bunnyShadow)" />
          <circle cx="72" cy="15" r="5" fill="#4ECDC4" filter="url(#bunnyShadow)" />
          <circle cx="79" cy="18" r="5" fill="#FFE66D" filter="url(#bunnyShadow)" />
          
          {/* Balloon highlights */}
          <circle cx="66" cy="18" r="1.5" fill="rgba(255,255,255,0.8)" />
          <circle cx="73" cy="13" r="1.5" fill="rgba(255,255,255,0.8)" />
          <circle cx="80" cy="16" r="1.5" fill="rgba(255,255,255,0.8)" />
          
          {/* Balloon knots */}
          <ellipse cx="65" cy="24" rx="0.8" ry="1.5" fill="#8B4513" />
          <ellipse cx="72" cy="19" rx="0.8" ry="1.5" fill="#8B4513" />
          <ellipse cx="79" cy="22" rx="0.8" ry="1.5" fill="#8B4513" />
        </motion.g>
        
        {/* Paws holding strings */}
        <ellipse cx="68" cy="65" rx="4" ry="5" fill="url(#bunnyGradient)" filter="url(#bunnyShadow)" />
        
        {/* Cute cheek blushes */}
        <ellipse cx="40" cy="52" rx="2" ry="1.5" fill="#FF69B4" opacity="0.4" />
        <ellipse cx="60" cy="52" rx="2" ry="1.5" fill="#FF69B4" opacity="0.4" />
      </svg>
    </motion.div>
  );
}