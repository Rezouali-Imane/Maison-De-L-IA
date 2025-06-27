


//ce code concerne la partie "Code for multi questions answer" dans la tache "Inside each lesson (interactive ones)""




import { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    text: "Quels langages sont utilisés pour le développement frontend ?",
    options: [
      { id: 1, text: "HTML", isCorrect: true },
      { id: 2, text: "Python", isCorrect: false },
      { id: 3, text: "CSS", isCorrect: true },
      { id: 4, text: "C++", isCorrect: false },
      { id: 5, text: "JavaScript", isCorrect: true },
    ],
  },
  {
    id: 2,
    text: "Lequel de ces frameworks est basé sur React ?",
    options: [
      { id: 1, text: "Vue.js", isCorrect: false },
      { id: 2, text: "Next.js", isCorrect: true },
      { id: 3, text: "Django", isCorrect: false },
      { id: 4, text: "Laravel", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "Quelles sont les caractéristiques principales de React ?",
    options: [
      { id: 1, text: "Virtual DOM", isCorrect: true },
      { id: 2, text: "Two-way data binding", isCorrect: false },
      { id: 3, text: "Composants réutilisables", isCorrect: true },
      { id: 4, text: "Programmation orientée objet", isCorrect: false },
      { id: 5, text: "JSX", isCorrect: true },
    ],
  },
];

const MultipleChoiceQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = questions[currentIndex];

  useEffect(() => {
    setSelected([]);
    setResult(null);
    setIsAnswered(false);
  }, [currentIndex]);

  const toggleSelect = (id) => {
    if (!isAnswered) {
      setSelected((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    }
  };

  const handleSubmit = () => {
    const correctAnswers = question.options
      .filter((opt) => opt.isCorrect)
      .map((opt) => opt.id)
      .sort()
      .join(",");
    const userAnswers = [...selected].sort().join(",");

    const isCorrect = userAnswers === correctAnswers;
    setResult(
      isCorrect
        ? "✅ Bonne réponse !"
        : "❌ Mauvaise réponse. Réessaye !"
    );
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setIsAnswered(true);
  };

  const handleContinue = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      
      setCurrentIndex(0);
      setScore(0);
    }
  };

  // Calcul du score en pourcentage
  const scorePercentage = Math.round((score / questions.length) * 100);
  
  // Calcul de la progression
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
      <div className="relative max-w-2xl mx-auto bg-[#08122c] border-4 border-[#4fd1e0] font-pixel text-white shadow-[8px_8px_0px_0px_rgba(79,209,224,0.5)]">
      {/* En-tête avec progression */}
      <div className="bg-[#0a1a36] px-6 py-4 border-b-4 border-[#4fd1e0]">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-[#4fd1e0] shadow-[0_0_0_2px_#0a1a36,0_0_0_4px_#4fd1e0]"></div>
            <h2 className="font-pixel text-[#4fd1e0] text-sm tracking-wider">
              QUIZ MULTI-CHOIX
            </h2>
          </div>
          <div className="text-[#ffcc00] text-sm font-semibold">
            Score: {score}/{questions.length}
          </div>
        </div>
        
        {/* Barre de progression */}
        <div className="mt-2">
          <div className="h-2 bg-[#17314f] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#4fd1e0] transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-[#9cb3d9] mt-1">
            <span>Question {currentIndex + 1}/{questions.length}</span>
            <span>{progress}% complété</span>
          </div>
        </div>
      </div>
      
      {/*  quiz */}
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-[#e2eaf8] mb-1">
            {question.text}
          </h3>
          <div className="w-12 h-1 bg-[#4fd1e0] mb-4"></div>
        </div>

        {/* Options de réponse */}
        <ul className="space-y-3 mb-6">
          {question.options.map((opt) => (
            <li 
              key={opt.id} 
              onClick={() => toggleSelect(opt.id)}
              className={`
                cursor-pointer p-4 rounded-lg transition-all
                ${selected.includes(opt.id) 
                  ? "bg-[#1a2a4a] border border-[#4fd1e0]" 
                  : "bg-[#0f1c35] hover:bg-[#1a2a4a]"}
                ${isAnswered && opt.isCorrect ? "bg-green-900/30 border-green-500" : ""}
                ${isAnswered && selected.includes(opt.id) && !opt.isCorrect ? "bg-red-900/30 border-red-500" : ""}
              `}
            >
              <div className="flex items-center">
                <div className={`
                  w-6 h-6 flex items-center justify-center mr-4 rounded
                  ${selected.includes(opt.id) 
                    ? "bg-[#4fd1e0] text-[#08122c]" 
                    : "bg-[#0a1a36] border border-[#2a4a7a]"}
                `}>
                  {selected.includes(opt.id) && "✓"}
                </div>
                <span className="text-sm">{opt.text}</span>
                
                {/* Indiquer la bonne réponse après validation */}
                {isAnswered && opt.isCorrect && (
                  <span className="ml-auto text-green-400 text-xs font-semibold">✓ Correct</span>
                )}
                {isAnswered && selected.includes(opt.id) && !opt.isCorrect && (
                  <span className="ml-auto text-red-400 text-xs font-semibold">✗ Incorrect</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Boutons d'action */}
        <div className="flex justify-center">
          {!isAnswered ? (
            <button
              onClick={handleSubmit}
              disabled={selected.length === 0}
              className={`
                px-5 py-3 rounded font-pixel font-bold text-sm
                transition-all active:translate-y-0.5 
                ${selected.length === 0 
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
                  : "bg-[#4fd1e0] hover:bg-[#ffd633] text-[#08122c]"}
              `}
            >
              VALIDER
            </button>
          ) : (
            <button
              onClick={handleContinue}
              className="px-5 py-3 rounded font-pixel font-bold text-sm bg-[#4fd1e0] hover:bg-[#63d6e4] text-[#08122c] transition-all active:translate-y-0.5"
            >
              {currentIndex < questions.length - 1 ? "SUIVANT →" : "TERMINER"}
            </button>
          )}
        </div>

        {/* Affichage des résultats */}
        {result && (
          <div className={`mt-4 p-3 rounded-lg ${
            result.includes("✅") 
              ? "bg-green-900/20 border border-green-500" 
              : "bg-red-900/20 border border-red-500"
          }`}>
            <div className="flex items-center">
              <p className="font-medium">{result}</p>
            </div>
          </div>
        )}
      </div>
      
    
      
      {/* Écran de résultats final */}
      {isAnswered && currentIndex === questions.length - 1 && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#08122c] border-2 border-[#ffcc00] max-w-md w-full p-6 rounded-xl relative">
          
            
            <h2 className="font-pixel text-2xl text-center text-[#ffcc00] mb-2">QUIZ TERMINÉ!</h2>
            <div className="w-16 h-1 bg-[#4fd1e0] mx-auto mb-6"></div>
            
            <div className="text-center mb-6">
              <div className="text-5xl font-bold mb-2 text-white">{score}<span className="text-xl">/{questions.length}</span></div>
              <div className="text-3xl mb-4 text-white">{scorePercentage}%</div>
              
              <div className="mb-6 relative">
                <div className="h-4 bg-[#17314f] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#4fd1e0] transition-all duration-1000"
                    style={{ width: `${scorePercentage}%` }}
                  ></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                  VOTRE SCORE
                </div>
              </div>
              
              <p className="text-lg mb-4">
                {scorePercentage >= 80
                  ? "🎉 Excellent! Maîtrise parfaite!"
                  : scorePercentage >= 60
                  ? "👍 Bien joué! Continue comme ça!"
                  : "✏️ Encore un effort! Revois les bases."}
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setCurrentIndex(0);
                  setSelected([]);
                  setResult(null);
                  setIsAnswered(false);
                  setScore(0);
                }}
                className="flex-1 py-3 bg-[#ffcc00] text-[#08122c] rounded font-pixel font-bold hover:bg-[#ffd633] transition-all active:translate-y-0.5"
              >
                RECOMMENCER
              </button>
              
              <button
                onClick={() => {
                  setCurrentIndex(0);
                  setSelected([]);
                  setResult(null);
                  setIsAnswered(false);
                }}
                className="flex-1 py-3 bg-[#4fd1e0] text-[#08122c] rounded font-pixel font-bold hover:bg-[#63d6e4] transition-all active:translate-y-0.5"
              >
                ACCUEIL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceQuiz;