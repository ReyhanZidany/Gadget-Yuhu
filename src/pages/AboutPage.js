import React, { useState } from 'react';
import { Heart, Users, Target, Award, Mail, Phone, MapPin, ArrowLeft, Star } from 'lucide-react';

const AboutPage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Data profil anggota KKN
  const kknMembers = [
    {
      id: 1,
      name: "Reyhan Zidany",
      character: "reyhan-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Project Leader & Full Stack Developer",
      university: "Universitas Diponegoro",
      major: "Teknik Informatika",
      bio: "Passionate developer dengan pengalaman dalam web development dan mobile app. Suka mengeksplorasi teknologi baru dan memimpin tim dalam menciptakan solusi digital yang inovatif.",
      skills: ["React", "Node.js", "Python", "UI/UX Design"],
      hobbies: ["Coding", "Gaming", "Photography", "Traveling"],
      contact: {
        email: "reyhan@sehatsari.com",
        phone: "+62 812-3456-7890",
        social: "@reyhanzidany"
      }
    },
    {
      id: 2,
      name: "Alken Alda",
      character: "alken-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Ketua Kalcer",
      university: "Universitas Diponegoro",
      major: "Ilmu Pemerintahan",
      bio: "Siap Membasmi Tikus - Tikus Kantor.",
      skills: ["Menembak", "Menerkam", "Meraung", "Bergoyang"],
      hobbies: ["Lari", "Lari", "Lari", "Lari"],
      contact: {
        email: "alken@ayahasib.com",
        phone: "+62 813-4567-8901",
        social: "@alken_13"
      }
    },
    {
      id: 3,
      name: "Ahmad Fajar",
      character: "ica-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "UI/UX Designer & Creative Director",
      university: "Universitas Diponegoro",
      major: "Desain Komunikasi Visual",
      bio: "Designer kreatif yang passionate dalam menciptakan pengalaman pengguna yang menarik dan intuitif. Berpengalaman dalam visual branding dan digital design.",
      skills: ["UI/UX Design", "Graphic Design", "Figma", "Adobe Creative Suite"],
      hobbies: ["Drawing", "Photography", "Music", "Art Exhibitions"],
      contact: {
        email: "ahmad@sehatsari.com",
        phone: "+62 814-5678-9012",
        social: "@ahmadfajar"
      }
    },
    {
      id: 4,
      name: "Dinda Putri",
      character: "manap-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Data Analyst & Marketing Strategist",
      university: "Universitas Diponegoro",
      major: "Statistika",
      bio: "Data enthusiast yang ahli dalam menganalisis perilaku pengguna dan merancang strategi marketing berbasis data. Passionate dalam digital marketing dan growth hacking.",
      skills: ["Data Analysis", "Digital Marketing", "Python", "Google Analytics"],
      hobbies: ["Data Visualization", "Reading", "Hiking", "Blogging"],
      contact: {
        email: "dinda@sehatsari.com",
        phone: "+62 815-6789-0123",
        social: "@dindaputri"
      }
    },
    {
      id: 5,
      name: "Rizki Pratama",
      character: "arum-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Content Creator & Video Producer",
      university: "Universitas Diponegoro",
      major: "Ilmu Komunikasi",
      bio: "Content creator berpengalaman dalam produksi video edukatif dan kampanye digital. Ahli dalam storytelling dan komunikasi visual untuk platform digital.",
      skills: ["Video Production", "Content Strategy", "Social Media", "Copywriting"],
      hobbies: ["Filmmaking", "Traveling", "Sports", "Music Production"],
      contact: {
        email: "rizki@sehatsari.com",
        phone: "+62 816-7890-1234",
        social: "@rizkipratama"
      }
    },
    {
      id: 6,
      name: "Rizki Pratama",
      character: "parel-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Content Creator & Video Producer",
      university: "Universitas Diponegoro",
      major: "Ilmu Komunikasi",
      bio: "Content creator berpengalaman dalam produksi video edukatif dan kampanye digital. Ahli dalam storytelling dan komunikasi visual untuk platform digital.",
      skills: ["Video Production", "Content Strategy", "Social Media", "Copywriting"],
      hobbies: ["Filmmaking", "Traveling", "Sports", "Music Production"],
      contact: {
        email: "rizki@sehatsari.com",
        phone: "+62 816-7890-1234",
        social: "@rizkipratama"
      }
    },
    {
      id: 7,
      name: "Rizki Pratama",
      character: "chris-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Content Creator & Video Producer",
      university: "Universitas Diponegoro",
      major: "Ilmu Komunikasi",
      bio: "Content creator berpengalaman dalam produksi video edukatif dan kampanye digital. Ahli dalam storytelling dan komunikasi visual untuk platform digital.",
      skills: ["Video Production", "Content Strategy", "Social Media", "Copywriting"],
      hobbies: ["Filmmaking", "Traveling", "Sports", "Music Production"],
      contact: {
        email: "rizki@sehatsari.com",
        phone: "+62 816-7890-1234",
        social: "@rizkipratama"
      }
    },
    {
      id: 8,
      name: "Rizki Pratama",
      character: "della-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Content Creator & Video Producer",
      university: "Universitas Diponegoro",
      major: "Ilmu Komunikasi",
      bio: "Content creator berpengalaman dalam produksi video edukatif dan kampanye digital. Ahli dalam storytelling dan komunikasi visual untuk platform digital.",
      skills: ["Video Production", "Content Strategy", "Social Media", "Copywriting"],
      hobbies: ["Filmmaking", "Traveling", "Sports", "Music Production"],
      contact: {
        email: "rizki@sehatsari.com",
        phone: "+62 816-7890-1234",
        social: "@rizkipratama"
      }
    },
    {
      id: 9,
      name: "Rizki Pratama",
      character: "ais-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Content Creator & Video Producer",
      university: "Universitas Diponegoro",
      major: "Ilmu Komunikasi",
      bio: "Content creator berpengalaman dalam produksi video edukatif dan kampanye digital. Ahli dalam storytelling dan komunikasi visual untuk platform digital.",
      skills: ["Video Production", "Content Strategy", "Social Media", "Copywriting"],
      hobbies: ["Filmmaking", "Traveling", "Sports", "Music Production"],
      contact: {
        email: "rizki@sehatsari.com",
        phone: "+62 816-7890-1234",
        social: "@rizkipratama"
      }
    },
    {
      id: 10,
      name: "Rizki Pratama",
      character: "awek-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Content Creator & Video Producer",
      university: "Universitas Diponegoro",
      major: "Ilmu Komunikasi",
      bio: "Content creator berpengalaman dalam produksi video edukatif dan kampanye digital. Ahli dalam storytelling dan komunikasi visual untuk platform digital.",
      skills: ["Video Production", "Content Strategy", "Social Media", "Copywriting"],
      hobbies: ["Filmmaking", "Traveling", "Sports", "Music Production"],
      contact: {
        email: "rizki@sehatsari.com",
        phone: "+62 816-7890-1234",
        social: "@rizkipratama"
      }
    },
    {
      id: 11,
      name: "Rizki Pratama",
      character: "cipa-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Content Creator & Video Producer",
      university: "Universitas Diponegoro",
      major: "Ilmu Komunikasi",
      bio: "Content creator berpengalaman dalam produksi video edukatif dan kampanye digital. Ahli dalam storytelling dan komunikasi visual untuk platform digital.",
      skills: ["Video Production", "Content Strategy", "Social Media", "Copywriting"],
      hobbies: ["Filmmaking", "Traveling", "Sports", "Music Production"],
      contact: {
        email: "rizki@sehatsari.com",
        phone: "+62 816-7890-1234",
        social: "@rizkipratama"
      }
    },
    {
      id: 12,
      name: "Rizki Pratama",
      character: "vivi-removebg-preview.png",
      bgColor: "from-blue-500 to-blue-600",
      role: "Content Creator & Video Producer",
      university: "Universitas Diponegoro",
      major: "Ilmu Komunikasi",
      bio: "Content creator berpengalaman dalam produksi video edukatif dan kampanye digital. Ahli dalam storytelling dan komunikasi visual untuk platform digital.",
      skills: ["Video Production", "Content Strategy", "Social Media", "Copywriting"],
      hobbies: ["Filmmaking", "Traveling", "Sports", "Music Production"],
      contact: {
        email: "rizki@sehatsari.com",
        phone: "+62 816-7890-1234",
        social: "@rizkipratama"
      }
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Kesehatan Prioritas",
      description: "Kami mengutamakan kesehatan fisik dan mental pengguna gadget"
    },
    {
      icon: Users,
      title: "Komunitas Peduli",
      description: "Membangun komunitas yang saling mendukung hidup sehat"
    },
    {
      icon: Target,
      title: "Edukasi Tepat Sasaran",
      description: "Menyediakan informasi yang mudah dipahami dan diterapkan"
    },
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Konten berkualitas tinggi yang telah diverifikasi ahli"
    }
  ];

  // Profile Detail Component
  const ProfileDetail = ({ profile, onBack }) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Kembali ke Tim
        </button>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className={`bg-gradient-to-r ${profile.bgColor} p-8 text-white text-center`}>
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={profile.character} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
            <p className="text-xl opacity-90">{profile.role}</p>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-300 fill-current" size={20} />
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Tentang Saya</h3>
                  <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Pendidikan</h3>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-purple-800">{profile.university}</p>
                    <p className="text-purple-600">{profile.major}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Keahlian</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Hobi & Minat</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {profile.hobbies.map((hobby, index) => (
                      <div key={index} className="bg-green-50 rounded-lg p-3 text-center">
                        <span className="text-green-700 font-medium">{hobby}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Kontak</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="text-purple-600" size={20} />
                      <span className="text-gray-700">{profile.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-purple-600" size={20} />
                      <span className="text-gray-700">{profile.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs">@</span>
                      </div>
                      <span className="text-gray-700">{profile.contact.social}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Jika ada profil yang dipilih, tampilkan detail profil
  if (selectedProfile) {
    return <ProfileDetail profile={selectedProfile} onBack={() => setSelectedProfile(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50"> 
    {/* Character Selection Section */}
    <div className="bg-gradient-to-r from-pink-500 to-rose-500 py-6">
        <div className="container mx-auto px-4">
          <h3 className="text-white text-xl font-bold text-center mb-6">Tim KKN-T IDBU Kelompok 3</h3>
          <div className="flex justify-center items-center gap-4 overflow-x-auto pb-2 mt-4">
            {kknMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedProfile(member)}
                className={`flex-shrink-0 bg-gradient-to-br ${member.bgColor} rounded-full w-16 h-16 overflow-hidden hover:shadow-lg transform hover:scale-110 transition-all duration-200 hover:ring-4 hover:ring-white/30 p-1`}
                title={member.name}
              >
                <div className="w-full h-full bg-white rounded-full overflow-hidden">
                  <img 
                    src={member.character} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
          <p className="text-center text-white/80 text-sm mt-3">
            Klik karakter untuk melihat profil lengkap
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
            Tentang Sehat Sari
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform edukasi kesehatan digital yang membantu Anda menjaga kesehatan 
            di era teknologi modern - Dikembangkan oleh Tim KKN Universitas Diponegoro
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-pink-600 mb-4">Misi Kami</h2>
              <p className="text-gray-600 mb-4">
                Sehat Sari adalah hasil kolaborasi mahasiswa KKN Universitas Diponegoro 
                yang peduli terhadap kesehatan digital masyarakat Indonesia.
              </p>
              <p className="text-gray-600">
                Kami percaya bahwa teknologi harus mendukung kesehatan, bukan 
                merugikannya. Melalui konten edukatif yang menarik dan interaktif, 
                kami membantu Anda menciptakan keseimbangan hidup yang sehat di era digital.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-64 h-64 rounded-full flex items-center justify-center mx-auto text-white text-6xl">
                🏥
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
            Nilai-Nilai Kami
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Preview Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-4">
            Tim Mahasiswa KKN
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Klik pada karakter di atas untuk mengenal lebih dekat tim kami!
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-6">
                {kknMembers.slice(0, 3).map((member) => (
                  <div key={member.id} className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={member.character} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Mahasiswa Universitas Diponegoro
              </h3>
              <p className="text-gray-600">
                Tim lintas disiplin ilmu yang bersatu untuk menciptakan solusi kesehatan digital
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-purple-100">
              Punya pertanyaan atau saran? Tim KKN kami siap membantu!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Mail className="mb-3" size={32} />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-purple-100">info@sehatsari.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="mb-3" size={32} />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-purple-100">+62 812 3456 7890</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="mb-3" size={32} />
              <h3 className="font-bold mb-2">Lokasi KKN</h3>
              <p className="text-purple-100">Semarang, Jawa Tengah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;