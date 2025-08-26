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
      <svg viewBox="0 0 100 120" className="w-full h-full">
        {/* Bunny body */}
        <ellipse cx="50" cy="75" rx="18" ry="22" fill="#FFB6C1" />
        
        {/* Head */}
        <circle cx="50" cy="50" r="16" fill="#FFB6C1" />
        
        {/* Ears */}
        <ellipse cx="43" cy="30" rx="4" ry="15" fill="#FFB6C1" />
        <ellipse cx="57" cy="30" rx="4" ry="15" fill="#FFB6C1" />
        <ellipse cx="43" cy="32" rx="2" ry="8" fill="#FF69B4" />
        <ellipse cx="57" cy="32" rx="2" ry="8" fill="#FF69B4" />
        
        {/* Eyes */}
        <circle cx="46" cy="47" r="2" fill="#2C1810" />
        <circle cx="54" cy="47" r="2" fill="#2C1810" />
        <circle cx="47" cy="46" r="0.5" fill="white" />
        <circle cx="55" cy="46" r="0.5" fill="white" />
        
        {/* Nose */}
        <ellipse cx="50" cy="52" rx="1" ry="0.5" fill="#FF1493" />
        
        {/* Mouth */}
        <path d="M 50 53 Q 48 55 46 53" stroke="#2C1810" strokeWidth="0.5" fill="none" />
        <path d="M 50 53 Q 52 55 54 53" stroke="#2C1810" strokeWidth="0.5" fill="none" />
        
        {/* Balloons */}
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
          <line x1="65" y1="20" x2="68" y2="65" stroke="#8B4513" strokeWidth="0.5" />
          <line x1="72" y1="15" x2="68" y2="65" stroke="#8B4513" strokeWidth="0.5" />
          <line x1="79" y1="18" x2="68" y2="65" stroke="#8B4513" strokeWidth="0.5" />
          
          {/* Balloons */}
          <circle cx="65" cy="20" r="4" fill="#FF6B6B" />
          <circle cx="72" cy="15" r="4" fill="#4ECDC4" />
          <circle cx="79" cy="18" r="4" fill="#FFE66D" />
          
          {/* Balloon highlights */}
          <circle cx="66" cy="18" r="1" fill="rgba(255,255,255,0.6)" />
          <circle cx="73" cy="13" r="1" fill="rgba(255,255,255,0.6)" />
          <circle cx="80" cy="16" r="1" fill="rgba(255,255,255,0.6)" />
        </motion.g>
        
        {/* Paws holding strings */}
        <ellipse cx="68" cy="65" rx="3" ry="4" fill="#FFB6C1" />
      </svg>
    </motion.div>
  );
}