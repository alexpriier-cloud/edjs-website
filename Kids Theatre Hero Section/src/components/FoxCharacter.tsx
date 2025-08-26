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
      {/* Fox body */}
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Fox face */}
        <ellipse cx="60" cy="55" rx="25" ry="20" fill="#FF8C42" />
        
        {/* Fox ears */}
        <ellipse cx="45" cy="40" rx="8" ry="12" fill="#FF8C42" />
        <ellipse cx="75" cy="40" rx="8" ry="12" fill="#FF8C42" />
        <ellipse cx="45" cy="42" rx="4" ry="6" fill="#2C1810" />
        <ellipse cx="75" cy="42" rx="4" ry="6" fill="#2C1810" />
        
        {/* Fox snout */}
        <ellipse cx="60" cy="60" rx="12" ry="8" fill="#FFB366" />
        
        {/* Eyes */}
        <circle cx="52" cy="50" r="3" fill="#2C1810" />
        <circle cx="68" cy="50" r="3" fill="#2C1810" />
        <circle cx="53" cy="49" r="1" fill="white" />
        <circle cx="69" cy="49" r="1" fill="white" />
        
        {/* Nose */}
        <ellipse cx="60" cy="58" rx="2" ry="1.5" fill="#2C1810" />
        
        {/* Mouth */}
        <path d="M 60 61 Q 57 63 54 61" stroke="#2C1810" strokeWidth="1" fill="none" />
        <path d="M 60 61 Q 63 63 66 61" stroke="#2C1810" strokeWidth="1" fill="none" />
        
        {/* Theatre mask in paw */}
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
          <ellipse cx="85" cy="70" rx="8" ry="10" fill="white" stroke="#2C1810" strokeWidth="1" />
          <circle cx="82" cy="67" r="2" fill="#2C1810" />
          <circle cx="88" cy="67" r="2" fill="#2C1810" />
          <path d="M 80 73 Q 85 76 90 73" stroke="#2C1810" strokeWidth="1" fill="none" />
        </motion.g>
      </svg>
    </motion.div>
  );
}