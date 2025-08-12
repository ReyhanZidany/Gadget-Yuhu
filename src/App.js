import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import MusicIndicator from './components/MusicIndicator';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import WatchPage from './pages/WatchPage';
import QuizPage from './pages/QuizPage';
import AboutPage from './pages/AboutPage';
import StarCursor from './components/StarCursor';
import { useStarCursor } from './hooks/useStarCursor';

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'home';
  });
  
  const [isMusicPlaying, setIsMusicPlaying] = useState(() => {
    return localStorage.getItem('isMusicPlaying') === 'true';
  });
  
  useStarCursor();

  // Simpan state ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('isMusicPlaying', isMusicPlaying.toString());
  }, [isMusicPlaying]);

  const playBackgroundMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'books':
        return <BooksPage />;
      case 'watch':
        return <WatchPage />;
      case 'quiz':
        return <QuizPage isMusicPlaying={isMusicPlaying} />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <StarCursor />
      
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMusicPlaying={isMusicPlaying}
        playBackgroundMusic={playBackgroundMusic}
      />
      
      {renderCurrentPage()}
      
      <MusicIndicator isMusicPlaying={isMusicPlaying} />
    </div>
  );
};

export default App;