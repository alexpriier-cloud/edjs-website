import { motion } from 'motion/react';

export function FoxCharacter() {
  return (
    <motion.div 
      className="relative w-32 h-32"
      animate={{
        y: [-5, 5, -5],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* Enhanced Fox body with better styling */}
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
        <defs>
          <filter id="foxShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.3)"/>
          </filter>
          <linearGradient id="foxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB366" />
            <stop offset="100%" stopColor="#FF8C42" />
          </linearGradient>
        </defs>
        
        {/* Fox face with gradient */}
        <ellipse cx="60" cy="55" rx="25" ry="20" fill="url(#foxGradient)" filter="url(#foxShadow)" />
        
        {/* Fox ears */}
        <ellipse cx="45" cy="40" rx="8" ry="12" fill="url(#foxGradient)" filter="url(#foxShadow)" />
        <ellipse cx="75" cy="40" rx="8" ry="12" fill="url(#foxGradient)" filter="url(#foxShadow)" />
        <ellipse cx="45" cy="42" rx="4" ry="6" fill="#2C1810" />
        <ellipse cx="75" cy="42" rx="4" ry="6" fill="#2C1810" />
        
        {/* Fox snout */}
        <ellipse cx="60" cy="60" rx="12" ry="8" fill="#FFD4AA" filter="url(#foxShadow)" />
        
        {/* Eyes with highlights */}
        <circle cx="52" cy="50" r="4" fill="white" />
        <circle cx="68" cy="50" r="4" fill="white" />
        <circle cx="52" cy="50" r="3" fill="#2C1810" />
        <circle cx="68" cy="50" r="3" fill="#2C1810" />
        <circle cx="53" cy="49" r="1.5" fill="white" />
        <circle cx="69" cy="49" r="1.5" fill="white" />
        
        {/* Nose */}
        <ellipse cx="60" cy="58" rx="2" ry="1.5" fill="#2C1810" />
        
        {/* Mouth */}
        <path d="M 60 61 Q 57 63 54 61" stroke="#2C1810" strokeWidth="1.5" fill="none" />
        <path d="M 60 61 Q 63 63 66 61" stroke="#2C1810" strokeWidth="1.5" fill="none" />
        
        {/* Enhanced Theatre mask in paw */}
        <motion.g
          animate={{
            rotate: [-5, 5, -5],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <ellipse cx="85" cy="70" rx="10" ry="12" fill="white" stroke="#2C1810" strokeWidth="1.5" filter="url(#foxShadow)" />
          <circle cx="82" cy="67" r="2.5" fill="#2C1810" />
          <circle cx="88" cy="67" r="2.5" fill="#2C1810" />
          <path d="M 79 74 Q 85 77 91 74" stroke="#2C1810" strokeWidth="1.5" fill="none" />
          {/* Mask strings */}
          <line x1="75" y1="70" x2="82" y2="68" stroke="#8B4513" strokeWidth="1" />
          <line x1="75" y1="72" x2="82" y2="72" stroke="#8B4513" strokeWidth="1" />
        </motion.g>
      </svg>
    </motion.div>
  );
}