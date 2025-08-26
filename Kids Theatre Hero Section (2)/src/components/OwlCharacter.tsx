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
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
        <defs>
          <filter id="owlShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.3)"/>
          </filter>
          <linearGradient id="owlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A0522D" />
            <stop offset="100%" stopColor="#8B4513" />
          </linearGradient>
        </defs>
        
        {/* Owl body */}
        <ellipse cx="60" cy="65" rx="20" ry="25" fill="url(#owlGradient)" filter="url(#owlShadow)" />
        
        {/* Wing details */}
        <ellipse cx="45" cy="65" rx="8" ry="18" fill="#CD853F" />
        <ellipse cx="75" cy="65" rx="8" ry="18" fill="#CD853F" />
        
        {/* Head */}
        <circle cx="60" cy="45" r="18" fill="url(#owlGradient)" filter="url(#owlShadow)" />
        
        {/* Ear tufts */}
        <ellipse cx="50" cy="30" rx="3" ry="8" fill="url(#owlGradient)" />
        <ellipse cx="70" cy="30" rx="3" ry="8" fill="url(#owlGradient)" />
        
        {/* Eyes with better highlights */}
        <circle cx="54" cy="45" r="7" fill="white" filter="url(#owlShadow)" />
        <circle cx="66" cy="45" r="7" fill="white" filter="url(#owlShadow)" />
        <circle cx="54" cy="45" r="5" fill="#FFD700" />
        <circle cx="66" cy="45" r="5" fill="#FFD700" />
        
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
          <circle cx="54" cy="45" r="2.5" fill="#2C1810" />
          <circle cx="66" cy="45" r="2.5" fill="#2C1810" />
        </motion.g>
        
        {/* Eye highlights */}
        <circle cx="55" cy="43" r="1" fill="white" />
        <circle cx="67" cy="43" r="1" fill="white" />
        
        {/* Beak */}
        <path d="M 60 50 L 57 56 L 63 56 Z" fill="#FFA500" filter="url(#owlShadow)" />
        
        {/* Enhanced book in talons */}
        <rect x="50" y="85" width="20" height="15" fill="#8B0000" rx="2" filter="url(#owlShadow)" />
        <rect x="51" y="86" width="18" height="13" fill="#DC143C" rx="1" />
        <line x1="53" y1="89" x2="67" y2="89" stroke="white" strokeWidth="0.8" />
        <line x1="53" y1="92" x2="65" y2="92" stroke="white" strokeWidth="0.8" />
        <line x1="53" y1="95" x2="67" y2="95" stroke="white" strokeWidth="0.8" />
        <text x="60" y="98" textAnchor="middle" fill="gold" fontSize="4" fontFamily="serif">THÉÂTRE</text>
      </svg>
    </motion.div>
  );
}