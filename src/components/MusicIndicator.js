// src/components/MusicIndicator.js
import React from 'react';

const MusicIndicator = ({ isMusicPlaying }) => {
  if (!isMusicPlaying) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-400 text-white p-3 rounded-full shadow-lg animate-pulse">
      🎵 Musik Bermain
    </div>
  );
};

export default MusicIndicator;
