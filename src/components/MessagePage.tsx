import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Heart, Stars } from 'lucide-react';

const MessagePage = () => {
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-yellow-50 flex items-center justify-center p-4">
      <motion.div
        className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 mx-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="relative mb-6 sm:mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src="src/components/img/gf3.png"
            
            alt="Birthday "
            className="rounded-lg shadow-xl w-full h-49 sm:h-70 object-cover"
          />
          <motion.div 
            className="absolute -right-2 sm:-right-4 -bottom-2 sm:-bottom-4 flex items-center gap-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sun className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400" />
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 fill-current" />
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-4 sm:space-y-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-600 leading-tight">
            Happy Birthday, My Love!
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed px-2 sm:px-4">
            [วันนี้เป็นวันที่อ้วนโตขึ้นอีกปีละน้าาา ขอให้อ้วนมีฟามสุขมั่กๆกินอิ่มนอนหลับบ สมหวังทุกๆเรื่องเลย อ้วนมีอะไรไม่สบายใจเค้าพร้อมอยู่ข้างๆตะเหมออ 
            ขอให้เราคบกันนานๆในทุกช่วงของชีวิต ทั้งสุขเเละทุกข์เราจะผ่านไปด้วยกันน อยู่กับเค้าไปนานๆนะะ ]
          </p>

          <div className="pt-4 sm:pt-6">
            <p className="text-base sm:text-lg text-pink-500 font-semibold">
              เค้ารักอ้วนน้าา
            </p>
            <p className="text-lg sm:text-xl text-yellow-600 font-bold">
              [ภูววว]
            </p>
          </div>

          <AnimatePresence>
            {!showFinalMessage ? (
              <motion.button
                onClick={() => setShowFinalMessage(true)}
                className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <span>Make a Birthday Wish</span>
                <Stars className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 space-y-4"
              >
                <div className="flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    >
                      <Heart className="w-6 h-6 text-pink-500 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-pink-600 font-medium italic">
                  "May all your wishes come true..."
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MessagePage;