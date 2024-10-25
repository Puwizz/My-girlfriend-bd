import React from 'react';
import { motion } from 'framer-motion';

const Sunflower = () => {
  const petalCount = 12;
  const petals = Array.from({ length: petalCount });

  return (
    <motion.div
      className="relative w-64 h-64"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {petals.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-20 h-48 left-[88px] -top-4 origin-bottom"
          style={{
            rotate: `${(360 / petalCount) * index}deg`,
          }}
        >
          <div className="w-full h-full bg-yellow-400 rounded-full" 
               style={{
                 clipPath: "ellipse(20% 50% at 50% 50%)",
               }}
          />
        </motion.div>
      ))}
      <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-yellow-800 rounded-full">
        <div className="absolute inset-2 bg-yellow-900 rounded-full" />
      </div>
    </motion.div>
  );
};

export default Sunflower;