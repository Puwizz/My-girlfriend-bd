import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import FloatingHearts from './FloatingHearts';

const IntroPage = () => {
  const [currentText, setCurrentText] = useState('Another year older');
  const [showEnvelope, setShowEnvelope] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentText('I have something to tell you');
      setTimeout(() => {
        setShowEnvelope(true);
      }, 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnvelopeClick = () => {
    navigate('/message');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-yellow-50 flex items-center justify-center p-4 sm:p-6">
      <FloatingHearts />
      
      <div className="text-center w-full max-w-lg mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-yellow-600 mb-8 leading-tight"
          >
            {currentText}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence>
          {showEnvelope && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="mt-8"
            >
              <motion.button
                className="bg-yellow-100 p-6 sm:p-8 rounded-lg shadow-xl flex flex-col items-center gap-4 mx-auto hover:bg-yellow-50 transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnvelopeClick}
              >
                <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 fill-current" />
                <span className="text-lg sm:text-xl text-yellow-700">Open My Heart</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default IntroPage;