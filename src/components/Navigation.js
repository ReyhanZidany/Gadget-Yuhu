import React from 'react';
import { Home, Book, Play, Trophy, Volume2, VolumeX, Info } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, isMusicPlaying, playBackgroundMusic }) => {
  const navigationItems = [
    { 
      page: 'home', 
      icon: Home,
      label: 'Beranda',
      activeColor: 'bg-blue-600 text-white font-bold',
      inactiveColor: 'bg-blue-600 text-white hover:bg-blue-500 font-bold'
    },
    { 
      page: 'books', 
      icon: Book, 
      label: 'Belajar',
      activeColor: 'bg-green-600 text-white font-bold',
      inactiveColor: 'bg-green-600 text-white hover:bg-green-500 font-bold'
    },
    { 
      page: 'watch', 
      icon: Play, 
      label: 'Video',
      activeColor: 'bg-red-600 text-white font-bold',
      inactiveColor: 'bg-red-600 text-white hover:bg-red-500 font-bold'
    },
    { 
      page: 'quiz', 
      icon: Trophy, 
      label: 'Kuis',
      activeColor: 'bg-amber-600 text-white font-bold',
      inactiveColor: 'bg-amber-600 text-white hover:bg-amber-500 font-bold'
    },
    { 
      page: 'about', 
      icon: Info, 
      label: 'Tentang',
      activeColor: 'bg-pink-600 text-white font-bold',
      inactiveColor: 'bg-pink-600 text-white hover:bg-pink-500 font-bold'
    }
  ];

  const handleLogoClick = () => {
    setCurrentPage('home');
  };

  const handleImageError = (e) => {
    console.log('Image failed to load:', e.target.src);
    // Fallback ke emoji jika gambar gagal load
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'block';
  };

  return (
    <nav className="bg-white p-6 shadow-lg border-b border-gray-200 sticky top-0 z-50 font-heading">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        >
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors overflow-hidden">
            <img 
              src={`${process.env.PUBLIC_URL}/sehatsari.png`}
              alt="Sehat Sari Logo" 
              className="w-full h-full object-contain"
              onError={handleImageError}
              onLoad={() => console.log('Logo loaded successfully')}
            />
            {/* Fallback emoji jika gambar gagal load */}
            <span className="text-2xl hidden">🏥</span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex space-x-2">
          {navigationItems.map(({ page, icon: Icon, label, activeColor, inactiveColor }) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all shadow-md ${
                currentPage === page ? activeColor : inactiveColor
              }`}
            >
              <Icon size={20} />
              <span className="hidden md:inline">{label}</span>
            </button>
          ))}
          <button
            onClick={playBackgroundMusic}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-400 text-white hover:bg-purple-500 transition-all shadow-md font-bold"
          >
            {isMusicPlaying ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;