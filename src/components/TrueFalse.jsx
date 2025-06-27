


//ce code concerne la partie "True/false answer" dans la tache "Inside each lesson (interactive ones)""


import { useState } from "react";

const questions = [
  {
    id: 1,
    text: "React utilise le Virtual DOM pour optimiser les performances.",
    correctAnswer: true,
  },
  {
    id: 2,
    text: "Tailwind CSS nécessite une configuration complexe pour être utilisé.",
    correctAnswer: false,
  },
  {
    id: 3,
    text: "Les hooks ne peuvent être utilisés que dans des composants fonctionnels.",
    correctAnswer: true,
  },
];

// Icônes SVG en style pixel
const CorrectIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" style={{ imageRendering: 'pixelated' }}>
    <rect x="3" y="9" width="3" height="3" fill="#0f0" />
    <rect x="6" y="6" width="3" height="3" fill="#0f0" />
    <rect x="9" y="3" width="3" height="3" fill="#0f0" />
    <rect x="12" y="6" width="3" height="3" fill="#0f0" />
    <rect x="15" y="9" width="3" height="3" fill="#0f0" />
    <rect x="12" y="12" width="3" height="3" fill="#0f0" />
    <rect x="9" y="15" width="3" height="3" fill="#0f0" />
    <rect x="6" y="12" width="3" height="3" fill="#0f0" />
  </svg>
);

const IncorrectIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" style={{ imageRendering: 'pixelated' }}>
    <rect x="3" y="3" width="3" height="3" fill="#f00" />
    <rect x="6" y="6" width="3" height="3" fill="#f00" />
    <rect x="9" y="9" width="3" height="3" fill="#f00" />
    <rect x="12" y="12" width="3" height="3" fill="#f00" />
    <rect x="15" y="15" width="3" height="3" fill="#f00" />
    <rect x="18" y="18" width="3" height="3" fill="#f00" />
    <rect x="15" y="3" width="3" height="3" fill="#f00" />
    <rect x="12" y="6" width="3" height="3" fill="#f00" />
    <rect x="9" y="9" width="3" height="3" fill="#f00" />
    <rect x="6" y="12" width="3" height="3" fill="#f00" />
    <rect x="3" y="15" width="3" height="3" fill="#f00" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" style={{ imageRendering: 'pixelated' }}>
    <rect x="6" y="3" width="12" height="3" fill="#ff0" />
    <rect x="9" y="6" width="6" height="3" fill="#ff0" />
    <rect x="6" y="9" width="3" height="3" fill="#ff0" />
    <rect x="15" y="9" width="3" height="3" fill="#ff0" />
    <rect x="9" y="12" width="6" height="6" fill="#ff0" />
    <rect x="3" y="18" width="18" height="3" fill="#ff0" />
    <rect x="4" y="21" width="3" height="3" fill="#ff0" />
    <rect x="17" y="21" width="3" height="3" fill="#ff0" />
  </svg>
);

const PixelBorder = ({ children }) => (
  <div className="relative border-4 border-[#2a4a8a] bg-[#0a1a35] p-4" style={{ imageRendering: 'pixelated' }}>
    {children}
    <div className="absolute top-1 left-1 w-1 h-1 bg-[#4fd1e0]"></div>
    <div className="absolute top-1 right-1 w-1 h-1 bg-[#4fd1e0]"></div>
    <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#4fd1e0]"></div>
    <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#4fd1e0]"></div>
  </div>
);

export default function TrueFalse() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = questions[currentIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === question.correctAnswer;
    setResult(isCorrect ? "correct" : "incorrect");
    if (isCorrect) setScore(prev => prev + 1);
  };

  const handleContinue = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      setResult(null);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setResult(null);
    setScore(0);
    setQuizFinished(false);
  };

  // Calcul du pourcentage 
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-xl bg-[#0a1a35]  mx-auto p-4 font-['Press_Start_2P'] text-white">
      {/* Barre de progression pixelisée */}
      <div className="w-full bg-[#1a2b55 mb-4 h-4 border-2 border-[#3a5aaa]">
        <div 
          className="bg-[#4fd1e0] h-full transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <PixelBorder>
        {quizFinished ? (
          <div className="text-center py-4">
            <div className="flex justify-center mb-3">
             <img src="/fdc465faa1cb383593a969d6357b4cc9064e7cb8.png" alt="Illustration" className="w-16 h-16 mb-4 mx-auto" />
            </div>
            <h2 className="text-base text-[#ffd700] mb-4">QUIZ Terminé!</h2>
            <div className="text-xl mb-6">
              <span className="text-[#4fd1e0]">{score}</span>
              <span className="text-white">/{questions.length}</span>
            </div>
            
            <button
              onClick={resetQuiz}
              className="mt-2 px-6 py-3 bg-[#2a4a8a] hover:bg-[#3a5aaa] border-2 border-[#4fd1e0] text-xs w-full max-w-[200px]"
            >
              REJOUER
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-[10px] text-[#4fd1e0] uppercase">
                  Question {currentIndex + 1}/{questions.length}
                </h2>
                <p className="text-xs md:text-sm mt-2 leading-tight">{question.text}</p>
              </div>
              
              {result && (
                <button
                  onClick={handleContinue}
                   className="text-xs bg-[#4fd1e0] text-[#0d1b34] px-3 py-1 rounded font-medium font-pixel hover:bg-[#63d6e4] transition"
                >
                   →
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                onClick={() => handleAnswer(true)}
                disabled={selectedAnswer !== null}
                className={`py-3 border-4 text-[10px] sm:text-xs ${
                  selectedAnswer === true
                    ? question.correctAnswer
                      ? "bg-[#00a000] border-[#008000]"
                      : "bg-[#a00000] border-[#800000]"
                  : "bg-[#1a2b55] border-[#3a5aaa] hover:border-[#4fd1e0]"
                } disabled:opacity-70`}
              >
                VRAI
              </button>
              
              <button
                onClick={() => handleAnswer(false)}
                disabled={selectedAnswer !== null}
                className={`py-3 border-4 text-[10px] sm:text-xs ${
                  selectedAnswer === false
                    ? !question.correctAnswer
                      ? "bg-[#00a000] border-[#008000]"
                      : "bg-[#a00000] border-[#800000]"
                  : "bg-[#1a2b55] border-[#3a5aaa] hover:border-[#4fd1e0]"
                } disabled:opacity-70`}
              >
                FAUX
              </button>
            </div>

            {result && (
              <div className={`mt-4 p-2 border-4 flex items-center justify-center ${
                result === "correct" 
                  ? "border-[#00a000] bg-[#002000]" 
                  : "border-[#a00000] bg-[#200000]"
              }`}>
                {result === "correct" ? (
                  <div className="flex items-center text-[#00ff00] text-xs">
                    <CorrectIcon />
                    <span className="ml-2">CORRECT!</span>
                  </div>
                ) : (
                  <div className="flex items-center text-[#ff0000] text-xs">
                    <IncorrectIcon />
                    <span className="ml-2">
                      INCORRECT! RÉPONSE: {question.correctAnswer ? "VRAI" : "FAUX"}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </PixelBorder>
    </div>
  );
}