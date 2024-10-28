import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 6 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ 
            y: "110vh",
            x: `${Math.random() * 90 + 5}vw`, // Keep hearts within 5-95% of viewport width
            scale: 0
          }}
          animate={{ 
            y: "-10vh",
            scale: [0, 1, 0.5, 1],
            rotate: [0, 45, -45, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: index * 2,
            ease: "easeOut"
          }}
        >
          <Heart className="text-pink-500 w-4 h-4 sm:w-6 sm:h-6 fill-current" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;