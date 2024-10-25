import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Heart } from 'lucide-react';

const WelcomePage = () => {
  const navigate = useNavigate();
  const audio = new Audio('https://orangefreesounds.com/wp-content/uploads/2020/09/Sweet-happy-birthday-music-box.mp3');

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleEnter = () => {
    audio.play();
    setTimeout(() => {
      navigate('/celebrate');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-yellow-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="flex justify-center mb-8">
          <Sun className="text-yellow-400 w-16 h-16 animate-spin-slow" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-600 mb-6">
          Happy Birthday, My Love!
        </h1>
        
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504567961542-e24d9439a724?auto=format&fit=crop&w=800&q=80"
            alt="Sunflowers"
            className="rounded-lg shadow-2xl mb-8 w-full max-w-md mx-auto"
          />
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4"
          >
            <Heart className="text-red-500 w-8 h-8 fill-current" />
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleEnter}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <span>Begin the Celebration</span>
          <Heart className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WelcomePage;