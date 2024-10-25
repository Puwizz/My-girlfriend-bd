import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Image as ImageIcon, Send } from 'lucide-react';

interface Wish {
  message: string;
  image?: string;
}

const CelebrationPage = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newWish, setNewWish] = useState('');
  const [newImage, setNewImage] = useState('');

  const addWish = () => {
    if (newWish.trim() || newImage.trim()) {
      setWishes([...wishes, { message: newWish, image: newImage }]);
      setNewWish('');
      setNewImage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-3 sm:mb-4">Our Celebration Wall</h1>
          <p className="text-gray-600 text-sm sm:text-base">Add your wishes and memories below</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm sm:text-base mb-2">Your Message</label>
            <textarea
              value={newWish}
              onChange={(e) => setNewWish(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base"
              rows={3}
              placeholder="Write your birthday wish here..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm sm:text-base mb-2">Image URL</label>
            <input
              type="text"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base"
              placeholder="Paste an image URL here..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={addWish}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 mx-auto text-sm sm:text-base"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Add to Wall</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {wish.image && (
                <img
                  src={wish.image}
                  alt="Celebration memory"
                  className="w-full h-40 sm:h-48 object-cover"
                />
              )}
              <div className="p-3 sm:p-4">
                <p className="text-gray-700 text-sm sm:text-base">{wish.message}</p>
                <div className="mt-3 sm:mt-4 flex justify-end">
                  <Heart className="text-red-500 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {wishes.length === 0 && (
          <div className="text-center text-gray-500 mt-6 sm:mt-8">
            <ImageIcon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
            <p className="text-sm sm:text-base">Add your first wish to start the celebration!</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CelebrationPage;