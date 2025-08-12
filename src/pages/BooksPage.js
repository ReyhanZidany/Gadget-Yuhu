import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Eye, Zap, Heart, Brain } from 'lucide-react';

// Enhanced education slides with comprehensive content
const educationSlides = [
  {
    id: 1,
    title: "rehan ganteng tapi boong",
    image: "📱",
    content: "Gadget adalah perangkat elektronik pintar yang membantu kita sehari-hari. Seperti HP untuk komunikasi, tablet untuk belajar, dan laptop untuk mengerjakan tugas. Gadget memang canggih, tapi harus digunakan dengan bijak!",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    icon: "📱",
    funFact: "Tahukah kamu? Rata-rata anak menggunakan gadget 7-10 jam per hari!"
  },
  {
    id: 2,
    title: "Manfaat Gadget untuk Belajar",
    image: "🎓",
    content: "Gadget punya banyak manfaat! Kita bisa belajar online, main game edukatif, video call dengan keluarga, dan mencari informasi. Tapi ingat, gunakan untuk hal-hal positif ya!",
    bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
    icon: "🎓",
    funFact: "🎮 Game edukatif bisa meningkatkan kemampuan berpikir hingga 30%!"
  },
  {
    id: 3,
    title: "Apa itu Sinar Blue Light?",
    image: "💙",
    content: "Blue Light adalah cahaya biru dari layar gadget yang tidak terlihat mata. Sinar ini punya energi tinggi dan bisa menembus mata sampai ke retina. Seperti sinar matahari mini di layar HP kamu!",
    bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
    icon: "👁️",
    funFact: "💡 Cahaya biru 5x lebih kuat dari cahaya lampu biasa!"
  },
  {
    id: 4,
    title: "Dampak Sinar Blue Light pada Mata",
    image: "😵",
    content: "Terlalu lama terpapar blue light membuat mata kering, berair, perih, dan pandangan kabur. Ini disebut 'Computer Vision Syndrome'. Mata kita jadi cepat lelah seperti habis lari marathon!",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
    icon: "😵",
    funFact: "⚠️ 60% anak mengalami mata lelah karena gadget!"
  },
  {
    id: 5,
    title: "Blue Light vs Tidur",
    image: "😴",
    content: "Cahaya biru 'menipu' otak kita! Otak mengira masih siang hari sehingga tidak memproduksi hormon melatonin (hormon tidur). Akibatnya kita susah tidur dan tidak bisa istirahat dengan baik.",
    bgColor: "bg-gradient-to-br from-purple-600 to-indigo-700",
    icon: "🌙",
    funFact: "🦉 Blue light bisa menunda tidur sampai 3 jam!"
  },
  {
    id: 6,
    title: "Radiasi Elektromagnetik HP",
    image: "📡",
    content: "HP memancarkan gelombang radio untuk berkomunikasi. Radiasi ini bisa membuat tubuh hangat jika HP terlalu dekat. Makanya HP jadi panas saat digunakan lama. Jaga jarak ya!",
    bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
    icon: "🌡️",
    funFact: "🔥 HP bisa mengeluarkan panas sampai 40°C saat digunakan!"
  },
  {
    id: 7,
    title: "Postur Tubuh & Text Neck",
    image: "🦴",
    content: "Sering menunduk saat main HP menyebabkan 'Text Neck' - leher jadi sakit dan bungkuk. Tulang belakang jadi tidak sejajar. Posisi duduk yang salah juga bisa bikin punggung bungkuk!",
    bgColor: "bg-gradient-to-br from-yellow-600 to-orange-600",
    icon: "🏥",
    funFact: "📐 Menunduk 60° sama dengan beban 27kg di leher!"
  },
  {
    id: 8,
    title: "Gadget & Kesehatan Mental",
    image: "🧠",
    content: "Kecanduan gadget bisa membuat kita kurang berinteraksi dengan orang lain, mudah marah jika HP habis baterai, dan sulit konsentrasi belajar. Otak butuh istirahat dari stimulasi digital!",
    bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
    icon: "🧠",
    funFact: "🎭 Kecanduan gadget sama seperti kecanduan makanan manis!"
  },
  {
    id: 9,
    title: "Aturan 20-20-20",
    image: "👀",
    content: "Aturan emas untuk mata sehat: Setiap 20 menit, istirahatkan mata dengan melihat objek sejauh 20 kaki (6 meter) selama 20 detik. Ini membantu otot mata rileks dan tidak tegang!",
    bgColor: "bg-gradient-to-br from-green-600 to-emerald-700",
    icon: "✨",
    funFact: "🎯 Aturan ini mengurangi mata lelah sampai 70%!"
  },
  {
    id: 10,
    title: "Jarak Aman Menggunakan Gadget",
    image: "📏",
    content: "Jaga jarak minimal 30cm (panjang penggaris) dari layar. Untuk TV, minimal 2-3 meter. Posisi layar sedikit di bawah mata agar leher tidak tegang. Cahaya ruangan juga harus cukup!",
    bgColor: "bg-gradient-to-br from-blue-600 to-cyan-600",
    icon: "📐",
    funFact: "📏 Jarak ideal = panjang lengan orang dewasa!"
  },
  {
    id: 11,
    title: "Waktu Screen Time yang Sehat",
    image: "⏱️",
    content: "Anak usia 6-12 tahun: maksimal 1-2 jam per hari. Remaja: maksimal 3 jam. Sisanya untuk bermain di luar, belajar, dan berinteraksi dengan keluarga. Quality time > screen time!",
    bgColor: "bg-gradient-to-br from-purple-600 to-violet-700",
    icon: "⏰",
    funFact: "⌚ WHO merekomendasikan screen time minimal 50% dari waktu bangun!"
  },
  {
    id: 12,
    title: "Digital Sunset & Night Mode",
    image: "🌅",
    content: "1 jam sebelum tidur = zona bebas gadget! Gunakan night mode atau filter blue light di sore hari. Cahaya hangat (kuning/orange) lebih ramah untuk mata dan tidak mengganggu tidur.",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    icon: "🌙",
    funFact: "🌅 Night mode mengurangi blue light sampai 90%!"
  },
  {
    id: 13,
    title: "Aktivitas Seru Tanpa Gadget",
    image: "🎨",
    content: "Ada banyak kegiatan menyenangkan selain gadget: bermain di taman, menggambar, membaca buku, olahraga, memasak bersama keluarga, atau bermain musik. Kreativitas tanpa batas!",
    bgColor: "bg-gradient-to-br from-yellow-500 to-orange-600",
    icon: "🎈",
    funFact: "🎭 Bermain di luar meningkatkan kreativitas 3x lipat!"
  },
  {
    id: 14,
    title: "Tips Gadget Sehat di Sekolah",
    image: "🎒",
    content: "Di sekolah: gunakan gadget hanya saat pelajaran yang memerlukan. Istirahat: main dengan teman, jangan scroll HP. Simpan HP di tas saat belajar agar tidak terganggu dan bisa fokus.",
    bgColor: "bg-gradient-to-br from-green-500 to-blue-500",
    icon: "📚",
    funFact: "📖 Siswa tanpa HP di kelas nilainya 10% lebih tinggi!"
  },
  {
    id: 15,
    title: "Makanan untuk Mata Sehat",
    image: "🥕",
    content: "Konsumsi makanan kaya vitamin A (wortel, bayam), omega-3 (ikan), dan antioksidan (blueberry, tomat). Minum air putih cukup agar mata tidak kering. Mata sehat = penglihatan jernih!",
    bgColor: "bg-gradient-to-br from-green-600 to-lime-600",
    icon: "🍎",
    funFact: "🥕 Wortel mengandung beta-karoten yang baik untuk retina mata!"
  },
  {
    id: 16,
    title: "Gadget Sebagai Alat, Bukan Tuan",
    image: "🤝",
    content: "Ingat! Kita yang mengontrol gadget, bukan sebaliknya. Gunakan gadget untuk hal positif: belajar, berkreasi, dan berkomunikasi. Jangan sampai gadget mengontrol hidup kita!",
    bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    icon: "👑",
    funFact: "🎯 Pengguna bijak gadget 2x lebih produktif dan bahagia!"
  }
];

const BooksPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextSlide = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % educationSlides.length);
      setIsFlipping(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + educationSlides.length) % educationSlides.length);
      setIsFlipping(false);
    }, 300);
  };

  const currentSlideData = educationSlides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 p-4">
      <div className="container mx-auto max-w-5xl">
        {/* Book Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="text-amber-700" size={40} />
            <h1 className="text-4xl md:text-6xl font-bold text-amber-800 font-serif">
              📖 Ensiklopedia Gadget Sehat 📖
            </h1>
            <BookOpen className="text-amber-700" size={40} />
          </div>
          <p className="text-xl text-amber-700 font-medium">
            🌟 Panduan Lengkap Menggunakan Gadget dengan Bijak dan Sehat! 🌟
          </p>
        </div>
        
        {/* Book Container */}
        <div className="relative">
          {/* Book Shadow */}
          <div className="absolute top-6 left-6 w-full h-full bg-black opacity-20 rounded-3xl"></div>
          
          {/* Main Book */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-amber-200">
            {/* Book Spine Effect */}
            <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-amber-600 to-amber-500">
              <div className="absolute left-2 top-4 w-1 h-6 bg-amber-300 opacity-70"></div>
              <div className="absolute left-2 top-12 w-1 h-6 bg-amber-300 opacity-70"></div>
              <div className="absolute left-2 top-20 w-1 h-6 bg-amber-300 opacity-70"></div>
            </div>
            <div className="absolute left-3 top-0 w-1 h-full bg-amber-400 opacity-50"></div>
            
            {/* Page Content */}
            <div className={`ml-12 transition-all duration-300 ${isFlipping ? 'transform scale-95 opacity-50' : ''}`}>
              {/* Page Header */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 border-b-2 border-amber-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                      {currentSlideData.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-800 font-serif">
                        {currentSlideData.title}
                      </h3>
                      <p className="text-lg text-amber-600 flex items-center gap-2">
                        📄 Halaman {currentSlide + 1} dari {educationSlides.length}
                        <span className="text-sm bg-amber-100 px-2 py-1 rounded-full">
                          Bab {Math.ceil((currentSlide + 1) / 4)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="text-8xl opacity-20 text-amber-300">
                    {currentSlideData.image}
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className={`${currentSlideData.bgColor} p-8 md:p-12 relative overflow-hidden min-h-96`}>
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 text-9xl opacity-10 text-white">
                  {currentSlideData.image}
                </div>
                <div className="absolute bottom-6 left-6 text-5xl opacity-20 text-white">
                  ✨
                </div>
                <div className="absolute top-1/2 left-6 text-3xl opacity-15 text-white">
                  🌟
                </div>
                <div className="absolute bottom-20 right-20 text-4xl opacity-15 text-white">
                  💫
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center text-white">
                  <div className="text-8xl md:text-9xl mb-8 drop-shadow-lg animate-bounce">
                    {currentSlideData.image}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-md font-serif">
                    {currentSlideData.title}
                  </h3>
                  <div className="bg-white bg-opacity-20 rounded-3xl p-8 backdrop-blur-sm border border-white border-opacity-30 mb-6">
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
                      {currentSlideData.content}
                    </p>
                  </div>
                  
                  {/* Fun Fact Box */}
                  <div className="bg-yellow-400 bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm border border-yellow-300 border-opacity-50">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl">🤓</span>
                      <h4 className="text-xl font-bold">Fakta Menarik!</h4>
                      <span className="text-2xl">🎉</span>
                    </div>
                    <p className="text-lg font-medium">{currentSlideData.funFact}</p>
                  </div>
                </div>
              </div>
              
              {/* Page Footer with Navigation */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={prevSlide}
                    disabled={isFlipping}
                    className="flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold"
                  >
                    <ChevronLeft size={28} />
                    <span>Sebelumnya</span>
                  </button>
                  
                  {/* Chapter Indicator */}
                  <div className="text-center">
                    <div className="text-2xl mb-2">📚</div>
                    <div className="text-sm text-amber-600 font-medium">
                      Bab {Math.ceil((currentSlide + 1) / 4)} dari {Math.ceil(educationSlides.length / 4)}
                    </div>
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    disabled={isFlipping}
                    className="flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold"
                  >
                    <span>Selanjutnya</span>
                    <ChevronRight size={28} />
                  </button>
                </div>
                
                {/* Page Indicator */}
                <div className="flex justify-center space-x-2 mb-6">
                  {educationSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isFlipping) {
                          setCurrentSlide(index);
                        }
                      }}
                      className={`w-4 h-4 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'bg-amber-500 scale-125' 
                          : 'bg-amber-200 hover:bg-amber-300'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Page Counter & Progress */}
                <div className="text-center mb-4">
                  <span className="text-amber-700 font-bold bg-amber-100 px-6 py-3 rounded-full text-lg">
                    📄 Halaman {currentSlide + 1} dari {educationSlides.length} 📄
                  </span>
                  <div className="mt-3 w-full bg-amber-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${((currentSlide + 1) / educationSlides.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-amber-600 mt-2">
                    {Math.round(((currentSlide + 1) / educationSlides.length) * 100)}% selesai
                  </p>
                </div>
                
                {/* Health Tips Footer */}
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-amber-600 text-sm bg-amber-100 rounded-lg p-3">
                    <Eye size={16} />
                    <span>Jaga jarak 30cm dari layar</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-amber-600 text-sm bg-amber-100 rounded-lg p-3">
                    <Heart size={16} />
                    <span>Istirahat setiap 20 menit</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-amber-600 text-sm bg-amber-100 rounded-lg p-3">
                    <Brain size={16} />
                    <span>Gadget bijak, masa depan cerah</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Book Closing Message */}
        <div className="text-center mt-8 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-amber-800 mb-4">🎓 Selamat! Kamu sudah belajar banyak! 🎓</h3>
          <p className="text-amber-700 font-medium text-lg">
            🌟 Sekarang yuk terapkan ilmu yang sudah dipelajari untuk hidup yang lebih sehat! 🌟
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-bold">
              ✅ Materi Lengkap
            </span>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold">
              🧠 Mudah Dipahami
            </span>
            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-bold">
              🎯 Praktis Diterapkan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;