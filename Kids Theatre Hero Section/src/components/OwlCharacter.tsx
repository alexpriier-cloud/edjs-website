import { motion } from 'motion/react';

export function OwlCharacter() {
  return (
    <motion.div 
      className="relative w-28 h-28"
      animate={{
        y: [-3, 7, -3],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Owl body */}
        <ellipse cx="60" cy="65" rx="20" ry="25" fill="#8B4513" />
        
        {/* Wing details */}
        <ellipse cx="45" cy="65" rx="8" ry="18" fill="#A0522D" />
        <ellipse cx="75" cy="65" rx="8" ry="18" fill="#A0522D" />
        
        {/* Head */}
        <circle cx="60" cy="45" r="18" fill="#8B4513" />
        
        {/* Ear tufts */}
        <ellipse cx="50" cy="30" rx="3" ry="8" fill="#8B4513" />
        <ellipse cx="70" cy="30" rx="3" ry="8" fill="#8B4513" />
        
        {/* Eyes */}
        <circle cx="54" cy="45" r="6" fill="white" />
        <circle cx="66" cy="45" r="6" fill="white" />
        <circle cx="54" cy="45" r="4" fill="#FFD700" />
        <circle cx="66" cy="45" r="4" fill="#FFD700" />
        
        {/* Animated blinking */}
        <motion.g
          animate={{
            scaleY: [1, 0.1, 1],
            transition: {
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }
          }}
        >
          <circle cx="54" cy="45" r="2" fill="#2C1810" />
          <circle cx="66" cy="45" r="2" fill="#2C1810" />
        </motion.g>
        
        {/* Beak */}
        <path d="M 60 50 L 58 55 L 62 55 Z" fill="#FFA500" />
        
        {/* Book in talons */}
        <rect x="52" y="85" width="16" height="12" fill="#8B0000" rx="1" />
        <rect x="53" y="86" width="14" height="10" fill="#DC143C" rx="1" />
        <line x1="55" y1="88" x2="65" y2="88" stroke="white" strokeWidth="0.5" />
        <line x1="55" y1="90" x2="63" y2="90" stroke="white" strokeWidth="0.5" />
        <line x1="55" y1="92" x2="65" y2="92" stroke="white" strokeWidth="0.5" />
      </svg>
    </motion.div>
  );
}