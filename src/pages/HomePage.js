import React, { useState, useEffect } from 'react';

const HomePage = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStats, setShowStats] = useState(false);

  // Data statistik dan fakta edukatif
  const educationalFacts = [
    {
      icon: "👀",
      title: "Rehan baik beli kebab",
      stat: "60%",
      desc: "anak mengalami mata lelah karena terlalu lama menatap layar gadget"
    },
    {
      icon: "😴",
      title: "Gangguan Tidur", 
      stat: "45%",
      desc: "anak sulit tidur karena cahaya biru dari gadget sebelum tidur"
    },
    {
      icon: "🏃‍♂️",
      title: "Kurang Aktivitas",
      stat: "70%",
      desc: "anak lebih sedikit bermain di luar karena kecanduan gadget"
    },
    {
      icon: "🧠",
      title: "Konsentrasi",
      stat: "55%",
      desc: "anak mengalami penurunan konsentrasi belajar"
    }
  ];

  const healthyTips = [
    {
      emoji: "⏰",
      title: "Aturan 20-20-20",
      desc: "Setiap 20 menit, lihat objek sejauh 20 kaki selama 20 detik"
    },
    {
      emoji: "🌙",
      title: "Digital Sunset",
      desc: "Matikan gadget 1 jam sebelum tidur untuk tidur yang berkualitas"
    },
    {
      emoji: "🏃",
      title: "Aktif Bergerak",
      desc: "Selingi waktu gadget dengan aktivitas fisik dan bermain di luar"
    },
    {
      emoji: "👨‍👩‍👧‍👦",
      title: "Family Time",
      desc: "Sisihkan waktu khusus bersama keluarga tanpa gadget"
    }
  ];

  const menuItems = [
    { 
      title: "📚 Belajar", 
      desc: "Pelajari bahaya gadget dengan slide menarik", 
      page: "books",
      color: "bg-green-400",
      completed: false
    },
    { 
      title: "🎥 Video", 
      desc: "Tonton video edukatif tentang gadget sehat", 
      page: "watch",
      color: "bg-red-400",
      completed: false
    },
    { 
      title: "🏆 Kuis", 
      desc: "Uji pengetahuanmu dengan kuis seru", 
      page: "quiz",
      color: "bg-yellow-400",
      completed: false
    }
  ];

  // Auto slide untuk tips
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % healthyTips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [healthyTips.length]);

  // Show stats animation
  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-300 p-8">
      <div className="container mx-auto text-center">
        
        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 ">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-pulse">
            🌟 Selamat Datang di Dunia Bokem! 🌟
          </h1>
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            Mari belajar cara menggunakan gadget dengan bijak dan sehat bersama Tim KKN!
          </p>
          
          {/* Tim KKN Photo */}
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-4xl h-80 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={`${process.env.PUBLIC_URL}/kkn-tim.png`}
                alt="Tim KKN Sehat Sari" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 filter brightness-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 hidden items-center justify-center text-white text-6xl">
                👥 Tim KKN Hebat! 🎓
              </div>
            </div>
          </div>
        </div>

        {/* Educational Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {educationalFacts.map((fact, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-xl transform transition-all duration-1000 ${
                showStats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-3">{fact.icon}</div>
              <div className="text-3xl font-bold text-red-500 mb-2">{fact.stat}</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{fact.title}</h4>
              <p className="text-sm text-gray-600">{fact.desc}</p>
            </div>
          ))}
        </div>

        {/* Tips Slider */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 mb-8 text-white">
          <h3 className="text-3xl font-bold mb-6">💡 Tips Gadget Sehat</h3>
          <div className="relative h-32 overflow-hidden">
            {healthyTips.map((tip, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="text-5xl mb-3">{tip.emoji}</div>
                <h4 className="text-2xl font-bold mb-2">{tip.title}</h4>
                <p className="text-lg">{tip.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {healthyTips.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interactive Progress Summary */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">📊 Ringkasan Pembelajaran</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
              <div className="text-4xl mb-3">📖</div>
              <h4 className="text-xl font-bold text-green-600 mb-2">Materi Utama</h4>
              <ul className="text-left text-gray-700 space-y-1 text-sm">
                <li>• Bahaya radiasi gadget</li>
                <li>• Dampak pada mata & tidur</li>
                <li>• Gangguan postur tubuh</li>
                <li>• Kecanduan digital</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-xl font-bold text-blue-600 mb-2">Target Pembelajaran</h4>
              <ul className="text-left text-gray-700 space-y-1 text-sm">
                <li>• Memahami risiko gadget</li>
                <li>• Menerapkan aturan sehat</li>
                <li>• Mengatur waktu screen time</li>
                <li>• Menjaga kesehatan mata</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-200">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="text-xl font-bold text-orange-600 mb-2">Hasil yang Diharapkan</h4>
              <ul className="text-left text-gray-700 space-y-1 text-sm">
                <li>• Penggunaan gadget bijak</li>
                <li>• Gaya hidup lebih sehat</li>
                <li>• Prestasi belajar meningkat</li>
                <li>• Interaksi sosial lebih baik</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 mb-8 text-white">
          <h3 className="text-3xl font-bold mb-4">🚀 Siap Memulai Perjalanan Gadget Sehat?</h3>
          <p className="text-xl mb-6">
            Ikuti 3 langkah mudah untuk menjadi ahli gadget sehat: Belajar → Tonton → Kuis!
          </p>
          <div className="flex justify-center space-x-2">
            <span className="bg-white text-orange-500 px-4 py-2 rounded-full font-bold">1️⃣ Belajar</span>
            <span className="text-white text-2xl">→</span>
            <span className="bg-white text-orange-500 px-4 py-2 rounded-full font-bold">2️⃣ Tonton</span>
            <span className="text-white text-2xl">→</span>
            <span className="bg-white text-orange-500 px-4 py-2 rounded-full font-bold">3️⃣ Kuis</span>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentPage(item.page)}
              className={`${item.color} text-white p-10 rounded-3xl shadow-2xl cursor-pointer transform hover:scale-110 hover:rotate-2 transition-all duration-500 relative overflow-hidden group`}
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-xl mb-4">{item.desc}</p>
                
                {/* Progress indicator */}
                <div className="mt-4">
                  <div className="bg-white/20 rounded-full h-2 mb-2">
                    <div className={`bg-white rounded-full h-2 transition-all duration-1000 ${item.completed ? 'w-full' : 'w-0'}`}></div>
                  </div>
                  <span className="text-sm opacity-80">
                    {item.completed ? "✅ Selesai" : "🎯 Mulai Sekarang"}
                  </span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                {item.title.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>

        {/* Footer motivational */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-xl">
          <p className="text-lg text-gray-600 italic">
            "Gadget adalah alat yang hebat jika digunakan dengan bijak. Mari belajar menggunakannya dengan sehat!" 
          </p>
          <p className="text-sm text-gray-500 mt-2">- Tim KKN Universitas Borobudur</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;