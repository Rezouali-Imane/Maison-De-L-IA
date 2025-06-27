

//ce code concerne la partie "Quizze" dans la tache "Inside each lesson (interactive ones)""



import { useState } from "react";

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

const quizQuestions = [
  {
    id: 1,
    type: "mcq",
    text: "Quelle méthode React est utilisée pour créer un composant?",
    options: [
      { id: 1, text: "React.createComponent()" },
      { id: 2, text: "React.makeComponent()" },
      { id: 3, text: "React.Component()", correct: true },
      { id: 4, text: "new ReactComponent()" },
    ],
  },
  {
    id: 2,
    type: "truefalse",
    text: "JSX est obligatoire pour utiliser React.",
    correctAnswer: false,
  },
  {
    id: 3,
    type: "code",
    text: "Créez un composant Button qui affiche 'Cliquez-moi'",
    template: `function Button() {
  return (
    <button>
      {/* Votre code ici */}
    </button>
  );
}`,
  },
  {
    id: 4,
    type: "mcq",
    text: "Quel hook React est utilisé pour gérer l'état?",
    options: [
      { id: 1, text: "useEffect()" },
      { id: 2, text: "useContext()" },
      { id: 3, text: "useState()", correct: true },
      { id: 4, text: "useReducer()" },
    ],
  },
];

export default function QuizContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const question = quizQuestions[currentIndex];
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;

  const handleAnswer = (answer) => {
    setAnswers(prev => ({ ...prev, [question.id]: answer }));
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      const newScore = quizQuestions.reduce((acc, q) => {
        if (q.type === "mcq" && answers[q.id]?.correct) return acc + 1;
        if (q.type === "truefalse" && answers[q.id] === q.correctAnswer) return acc + 1;
        if (q.type === "code" && answers[q.id]?.submitted) return acc + 1;
        return acc;
      }, 0);
      
      setScore(newScore);
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const renderQuestion = () => {
    switch (question.type) {
      case "mcq":
        return (
          <div className="mb-4">
            <div className="px-2 py-3 bg-[#1a2b55] border-2 border-[#3a5aaa] mb-4 min-h-[80px] flex items-center">
              <p className="text-xs md:text-sm">{question.text}</p>
            </div>
            <div className="space-y-3">
              {question.options.map(option => (
                <div key={option.id} className="flex items-center">
                  <input
                    type="radio"
                    id={`opt-${option.id}`}
                    name={`q-${question.id}`}
                    checked={answers[question.id]?.id === option.id}
                    onChange={() => handleAnswer({ ...option })}
                    className="mr-2 w-4 h-4 accent-[#4fd1e0]"
                  />
                  <label 
                    htmlFor={`opt-${option.id}`} 
                    className={`text-xs cursor-pointer py-2 px-3 w-full border-2 ${
                      answers[question.id]?.id === option.id
                        ? "border-[#4fd1e0] bg-[#1a3b75]"
                        : "border-[#3a5aaa] bg-[#1a2b55]"
                    }`}
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "truefalse":
        return (
          <div className="mb-4 ">
            <div className="px-2 py-3 bg-[#1a2b55] border-2 border-[#3a5aaa] mb-4 min-h-[80px] flex items-center">
              <p className="text-xs md:text-sm">{question.text}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleAnswer(true)}
                className={`py-3 border-4 text-xs ${
                  answers[question.id] === true 
                    ? "bg-[#00a000] border-[#008000]" 
                    : "bg-[#1a2b55] border-[#3a5aaa] hover:border-[#4fd1e0]"
                }`}
              >
                VRAI
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className={`py-3 border-4 text-xs ${
                  answers[question.id] === false 
                    ? "bg-[#00a000] border-[#008000]" 
                    : "bg-[#1a2b55] border-[#3a5aaa] hover:border-[#4fd1e0]"
                }`}
              >
                FAUX
              </button>
            </div>
          </div>
        );
      
      case "code":
        return (
          <div className="mb-4">
            <div className="px-2 py-3 bg-[#1a2b55] border-2 border-[#3a5aaa] mb-4 min-h-[80px] flex items-center">
              <p className="text-xs md:text-sm">{question.text}</p>
            </div>
            <textarea
              value={answers[question.id]?.code || question.template}
              onChange={(e) => handleAnswer({ 
                ...answers[question.id], 
                code: e.target.value 
              })}
              rows={8}
              className="w-full bg-[#0a1120] border-2 border-[#3a5aaa] text-xs font-mono p-2 mb-2"
            />
            <button
              onClick={() => handleAnswer({ 
                ...answers[question.id], 
                submitted: true 
              })}
              className={`w-full py-2 border-4 text-xs ${
                answers[question.id]?.submitted 
                  ? "bg-[#00a000] border-[#008000]"
                  : "bg-[#1a2b55] border-[#3a5aaa] hover:border-[#4fd1e0]"
              }`}
            >
              {answers[question.id]?.submitted ? "CODE SOUMIS ✓" : "SOUMETTRE LE CODE"}
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (showResults) {
    return (
      <div className="max-w-xl mx-auto p-4 font-['Press_Start_2P'] text-white  bg-[#0a1a35]">
        <div className="w-full bg-[#1a2b55] mb-4 h-4 border-2 border-[#3a5aaa]">
          <div 
            className="bg-[#4fd1e0] h-full transition-all duration-500 ease-out" 
            style={{ width: `100%` }}
          ></div>
        </div>
        
        <PixelBorder>
          <div className="text-center py-4 bg-[#0a1a35]">
            <div className="flex justify-center mb-3">
              <img src="/fdc465faa1cb383593a969d6357b4cc9064e7cb8.png" alt="Illustration" className="w-16 h-16 mb-4 mx-auto" />
            </div>
            <h2 className="text-base text-[#ffd700] mb-4">QUIZ TERMINÉ!</h2>
            <div className="text-xl mb-6">
              <span className="text-[#4fd1e0]">{score}</span>
              <span className="text-white">/{quizQuestions.length}</span>
            </div>
            
            <div className="mb-6">
              <p className="text-xs md:text-sm">
                {score === quizQuestions.length
                  ? "EXCELLENT! PARFAIT!"
                  : score >= quizQuestions.length / 2
                  ? "BIEN JOUÉ! CONTINUE COMME ÇA!"
                  : "ENCORE UN EFFORT! REVOIS LES BASES."}
              </p>
            </div>
            
            <button
              onClick={resetQuiz}
              className="mt-2 px-6 py-3 bg-[#2a4a8a] hover:bg-[#3a5aaa] border-2 border-[#4fd1e0] text-xs w-full max-w-[200px]"
            >
              REJOUER
            </button>
          </div>
        </PixelBorder>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4 font-['Press_Start_2P'] text-white bg-[#0a1a35]">
      {/* Barre de progression pixelisée */}
      <div className="w-full bg-[#1a2b55] mb-4 h-4 border-2 border-[#3a5aaa]">
        <div 
          className="bg-[#4fd1e0] h-full transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <PixelBorder>
        <div className="flex flex-col">
          {/* En-tête */}
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-[10px] text-[#4fd1e0] uppercase">
              Question {currentIndex + 1}/{quizQuestions.length}
            </h2>
          </div>

          {/*  question */}
          {renderQuestion()}

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`py-3 border-4 text-xs ${
                currentIndex === 0
                  ? "bg-[#1a2b55] border-[#3a5aaa] opacity-50"
                  : "bg-[#1a2b55] border-[#3a5aaa] hover:border-[#4fd1e0]"
              }`}
            >
              ← PRÉCÉDENT
            </button>
            
            <button
              onClick={handleNext}
              className="py-3 border-4 bg-[#1a2b55] border-[#3a5aaa] hover:border-[#4fd1e0] text-xs"
            >
              {currentIndex === quizQuestions.length - 1 
                ? "TERMINER →" 
                : "SUIVANT →"}
            </button>
          </div>
        </div>
      </PixelBorder>
    </div>
  );
}