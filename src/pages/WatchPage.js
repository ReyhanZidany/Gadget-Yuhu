// src/pages/WatchPage.js
import React from 'react';
import { educationVideos } from '../data/videos';

const WatchPage = () => {
  const watchingTips = [
    { text: "Jaga jarak mata dari layar minimal 30 cm", color: "bg-blue-100 text-blue-800" },
    { text: "Istirahat setiap 20 menit sekali", color: "bg-green-100 text-green-800" },
    { text: "Pastikan ruangan cukup terang", color: "bg-yellow-100 text-yellow-800" },
    { text: "Duduk dengan posisi tegak", color: "bg-purple-100 text-purple-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-400 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          🎥 Video Edukatif Gadget Sehat 🎥
        </h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {educationVideos.map((video, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-3xl"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Tips Menonton Video</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {watchingTips.map((tip, index) => (
                <div key={index} className={`${tip.color} p-4 rounded-xl`}>
                  <p>✅ {tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;