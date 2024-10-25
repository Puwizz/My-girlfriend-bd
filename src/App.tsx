import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './components/IntroPage';
import MessagePage from './components/MessagePage';
import CelebrationPage from './components/CelebrationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/celebrate" element={<CelebrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;