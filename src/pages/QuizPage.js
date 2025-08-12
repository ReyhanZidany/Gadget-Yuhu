import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { quizQuestions } from '../data/quizQuestions';

// List lagu, urut sesuai soal (ulang jika jumlah lagu < jumlah soal)
const MUSIC_LIST = [
  "/music/quiz1.mp3",
  "/music/quiz2.mp3",
  "/music/quiz3.mp3",
  "/music/quiz4.mp3",
  "/music/quiz5.mp3",
  "/music/quiz6.mp3",
  "/music/quiz7.mp3",
  "/music/quiz8.mp3",
  "/music/quiz9.mp3",
  "/music/quiz10.mp3"
];

const QuizPage = ({ isMusicPlaying: initialMusicPlaying = true }) => {
  const [showStart, setShowStart] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [answerStatus, setAnswerStatus] = useState(null); // 'correct' | 'incorrect' | null
  const audioRef = useRef(null);

  // Ganti lagu tiap soal
  useEffect(() => {
    if (!quizCompleted && !showStart) {
      if (audioRef.current) {
        audioRef.current.src = MUSIC_LIST[currentQuestion % MUSIC_LIST.length];
        if (isMusicPlaying) {
          audioRef.current.play().catch(() => {});
        }
      }
    }
    setAnswerStatus(null); // reset feedback saat soal berubah
  }, [currentQuestion, quizCompleted, showStart, isMusicPlaying]);

  // Otomatis play musik di awal quiz
  useEffect(() => {
    if (!showStart && isMusicPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [showStart, isMusicPlaying]);

  // Pause musik saat selesai quiz
  useEffect(() => {
    if (quizCompleted && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [quizCompleted]);

  const handleQuizAnswer = (answerIndex) => {
    if (quizAnswers[currentQuestion] !== undefined) return; // prevent double click
    const correct = quizQuestions[currentQuestion].correct;
    const isCorrect = answerIndex === correct;
    setQuizAnswers({ ...quizAnswers, [currentQuestion]: answerIndex });
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) setQuizScore((s) => s + 1);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        submitQuiz({ ...quizAnswers, [currentQuestion]: answerIndex }, isCorrect);
      }
    }, 850);
  };

  const submitQuiz = (answers = quizAnswers, isLastCorrect = false) => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (answers[index] === question.correct) score++;
    });
    setQuizScore(score);
    setQuizCompleted(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizCompleted(false);
    setQuizScore(0);
    setCurrentQuestion(0);
    setShowStart(true);
    setAnswerStatus(null);
  };

  const getScoreMessage = () => {
    if (quizScore >= 8) {
      return {
        emoji: '🏆',
        message: '🌟 Luar Biasa! Kamu sudah memahami cara menggunakan gadget dengan sehat!',
        color: 'bg-green-100 text-green-800'
      };
    } else if (quizScore >= 6) {
      retur {
        emoji: '🥈',
        message: '👍 goblok! Tapi masih bisa belajar lebih banyak lagi!',
        color: 'bg-yellow-100 text-yellow-800'
      };
    } else {
      return {
        emoji: '🥉',
        message: '💪 Semangat goblok! rehan ngancurin github',
        color: 'bg-red-100 text-red-800'
      };
    }
  };

  // Render halaman start
  if (showStart) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-200 to-orange-200">
        <div className="bg-white rounded-3xl shadow-2xl px-12 py-16 text-center w-full max-w-6xl">
          <h2 className="text-5xl font-extrabold text-orange-600 mb-8 drop-shadow-lg">
            🏆 Kuis Gadget Sehat 🏆
          </h2>
          <p className="text-3xl font-bold mb-8 text-gray-700">
            AYO MULAI ANJENGGGGG!
          </p>
          <button
            onClick={() => {
              setShowStart(false);
              setIsMusicPlaying(true);
            }}
            className="mt-4 px-16 py-8 rounded-full bg-green-500 hover:bg-green-600 text-white text-4xl font-bold shadow-lg transition-all"
          >
            🚀 Mulai Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-orange-200 flex flex-col items-center justify-start py-8">
      <div className="bg-white rounded-3xl shadow-2xl px-16 py-16 w-full max-w-6xl">
        {/* Musik di atas quiz */}
        <div className="flex flex-col items-center mb-8 gap-3">
          <audio
            ref={audioRef}
            src={MUSIC_LIST[currentQuestion % MUSIC_LIST.length]}
            autoPlay
            loop
            controls
            className="w-[480px] max-w-full"
            style={{ outline: 0 }}
            onPlay={() => setIsMusicPlaying(true)}
            onPause={() => setIsMusicPlaying(false)}
          />
          <button
            onClick={() => {
              if (audioRef.current) {
                if (isMusicPlaying) {
                  audioRef.current.pause();
                } else {
                  audioRef.current.play().catch(() => {});
                }
              }
            }}
            className={`px-7 py-2 rounded-full font-bold text-2xl transition-all ${
              isMusicPlaying
                ? 'bg-orange-500 text-white'
                : 'bg-gray-300 text-gray-700'
            }`}
          >
            {isMusicPlaying ? "Matikan Musik" : "Nyalakan Musik"}
          </button>
        </div>
        <h2 className="text-5xl font-extrabold text-center text-orange-600 mb-10 drop-shadow-lg">
          🏆 Kuis Gadget Sehat 🏆
        </h2>
        {!quizCompleted ? (
          <div>
            <div className="mb-10">
              <div className="flex justify-between items-center mb-8 text-3xl">
                <span className="font-bold text-gray-700">
                  Pertanyaan {currentQuestion + 1} dari {quizQuestions.length}
                </span>
                <div className="bg-orange-500 text-white px-7 py-3 rounded-full font-bold text-2xl">
                  🎵 {isMusicPlaying ? "Musik Menyala" : "Musik Mati"}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-7">
                <div
                  className="bg-orange-500 h-7 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="pb-10">
                <h3 className="text-4xl font-bold text-gray-800 mb-10">
                  {currentQuestion + 1}. {quizQuestions[currentQuestion].question}
                </h3>
                <div className="grid md:grid-cols-2 gap-7">
                  {quizQuestions[currentQuestion].options.map((option, oIndex) => {
                    let btnStatus = "";
                    if (quizAnswers[currentQuestion] !== undefined) {
                      if (oIndex === quizQuestions[currentQuestion].correct) {
                        btnStatus = "border-green-500 bg-green-100 text-green-800";
                      } else if (oIndex === quizAnswers[currentQuestion]) {
                        btnStatus = "border-red-500 bg-red-100 text-red-800";
                      } else {
                        btnStatus = "border-gray-200";
                      }
                    }
                    return (
                      <button
                        key={oIndex}
                        onClick={() => handleQuizAnswer(oIndex)}
                        className={`
                          p-8 text-3xl rounded-2xl border-2 text-left transition-all font-semibold shadow-sm
                          ${btnStatus || 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'}
                        `}
                        disabled={quizAnswers[currentQuestion] !== undefined}
                      >
                        <span className="font-extrabold mr-5">
                          {String.fromCharCode(65 + oIndex)}.
                        </span>
                        {option}
                        {quizAnswers[currentQuestion] !== undefined && oIndex === quizQuestions[currentQuestion].correct && (
                          <CheckCircle className="inline-block ml-4 text-green-500" size={32} />
                        )}
                        {quizAnswers[currentQuestion] !== undefined && oIndex === quizAnswers[currentQuestion]
                          && oIndex !== quizQuestions[currentQuestion].correct && (
                          <XCircle className="inline-block ml-4 text-red-500" size={32} />
                        )}
                      </button>
                    );
                  })}
                </div>
                {/* Feedback benar/salah */}
                {quizAnswers[currentQuestion] !== undefined && (
                  <div className="mt-8">
                    {answerStatus === 'correct' ? (
                      <div className="text-green-700 text-4xl font-bold flex items-center justify-center gap-3">
                        <CheckCircle size={40} className="text-green-500" />
                        Benar!
                      </div>
                    ) : (
                      <div className="text-red-700 text-4xl font-bold flex items-center justify-center gap-3">
                        <XCircle size={40} className="text-red-500" />
                        Salah!
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-12 text-center space-x-6">
              {/* Tidak perlu tombol next, otomatis */}
            </div>
          </div>
        ) : (
          <QuizResult
            quizScore={quizScore}
            quizQuestions={quizQuestions}
            quizAnswers={quizAnswers}
            resetQuiz={resetQuiz}
            getScoreMessage={getScoreMessage}
          />
        )}
      </div>
    </div>
  );
};

const QuizResult = ({ quizScore, quizQuestions, quizAnswers, resetQuiz, getScoreMessage }) => {
  const scoreData = getScoreMessage();

  return (
    <div className="text-center px-6">
      <div className="text-[8rem] mb-12">{scoreData.emoji}</div>
      <h3 className="text-5xl font-extrabold text-gray-800 mb-7">Kuis Selesai!</h3>
      <p className="text-4xl text-gray-600 mb-10">
        Skor kamu: <b>{quizScore}</b> dari <b>{quizQuestions.length}</b>
      </p>
      <div className="mb-12">
        <div className={`${scoreData.color} p-10 rounded-2xl`}>
          <p className="text-3xl font-bold">{scoreData.message}</p>
        </div>
      </div>
      <div className="space-y-8 mb-10">
        <h4 className="text-3xl font-bold text-gray-800 mb-4">Jawaban yang Benar:</h4>
        {quizQuestions.map((question, index) => (
          <div key={index} className="text-left bg-gray-50 p-8 rounded-xl text-2xl">
            <p className="font-semibold mb-2">{question.question}</p>
            <div className="flex items-center space-x-2">
              {quizAnswers[index] === question.correct ? (
                <CheckCircle className="text-green-500" size={32} />
              ) : (
                <XCircle className="text-red-500" size={32} />
              )}
              <span className={
                quizAnswers[index] === question.correct ? 'text-green-600' : 'text-red-600'
              }>
                Jawaban: {question.options[question.correct]}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={resetQuiz}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-16 py-7 rounded-full font-bold text-3xl transition-all"
      >
        🔄 Ulangi Kuis
      </button>
    </div>
  );
};

export default QuizPage;