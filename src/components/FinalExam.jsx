

//ce code concerne la partie "Final course exam " dans la tache "Inside each lesson (interactive ones)""


import { useState, useEffect } from "react";

const examQuestions = [
  {
    id: 1,
    type: "essay",
    text: "Quelle est la différence entre props et state dans React?",
    maxLength: 300,
    points: 10
  },
  {
    id: 2,
    type: "mcq",
    text: "Quelle méthode est utilisée pour rendre une liste d'éléments en React?",
    options: [
      { id: 1, text: "map()", correct: true },
      { id: 2, text: "forEach()" },
      { id: 3, text: "loop()" },
      { id: 4, text: "renderList()" }
    ],
    points: 5
  },
  {
    id: 3,
    type: "truefalse",
    text: "React utilise le Virtual DOM pour optimiser les performances.",
    correctAnswer: true,
    points: 3
  },
  {
    id: 4,
    type: "coding",
    text: "Écrivez une fonction qui inverse une chaîne de caractères",
    template: `function reverseString(str) {
  // Votre code ici
}`,
    tests: [
      { input: "'hello'", expected: "'olleh'" },
      { input: "'react'", expected: "'tcaer'" }
    ],
    points: 15
  },
  {
    id: 5,
    type: "mcq",
    text: "Quels sont les avantages de l'utilisation de Redux? (choix multiples)",
    options: [
      { id: 1, text: "Gestion centralisée de l'état", correct: true },
      { id: 2, text: "Meilleures performances par défaut" },
      { id: 3, text: "Facilite le débogage", correct: true },
      { id: 4, text: "Réduction de la quantité de code" }
    ],
    multiple: true,
    points: 8
  }
];

export default function FinalExam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes en secondes
  const [score, setScore] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [testResults, setTestResults] = useState({});

  const question = examQuestions[currentIndex];
  const isLastQuestion = currentIndex === examQuestions.length - 1;

  // Initialisation de total des points
  useEffect(() => {
    const total = examQuestions.reduce((sum, q) => sum + q.points, 0);
    setTotalPoints(total);
  }, []);

  // Timer 
  useEffect(() => {
    if (!isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [isSubmitted]);

  const handleAnswerChange = (value) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: {
        ...prev[question.id],
        answer: value
      }
    }));
  };

  const runCodeTests = (questionId, userCode) => {
    const question = examQuestions.find(q => q.id === questionId);
    if (!question || !question.tests) return false;
    
    try {
     
      const fnName = question.template.match(/function (\w+)/)[1];
    
      const fn = new Function(userCode + `\nreturn ${fnName};`)();
      
      let allPassed = true;
      const results = [];
      
      question.tests.forEach((test, index) => {
        const result = fn(...eval(`[${test.input}]`));
        const passed = result === eval(test.expected);
        results.push({
          test: index + 1,
          input: test.input,
          expected: test.expected,
          output: result,
          passed
        });
        if (!passed) allPassed = false;
      });
      
      setTestResults(prev => ({ ...prev, [questionId]: results }));
      return allPassed;
    } catch (err) {
      console.error("Erreur d'exécution:", err);
      setTestResults(prev => ({ ...prev, [questionId]: [{ error: err.message }] }));
      return false;
    }
  };

  const handleNext = () => {
    if (currentIndex < examQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Calculer le score
    let totalScore = 0;
    
    examQuestions.forEach(q => {
      const answer = answers[q.id];
      if (!answer) return;
      
      switch (q.type) {
        case "mcq":
          if (q.multiple) {
            
            const correctSelected = q.options
              .filter(opt => opt.correct)
              .every(opt => answer.answer.includes(opt.id));
            
            const incorrectSelected = q.options
              .filter(opt => !opt.correct)
              .some(opt => answer.answer.includes(opt.id));
            
            if (correctSelected && !incorrectSelected) {
              totalScore += q.points;
            }
          } else {
          
            if (answer.answer && q.options.find(opt => opt.id === answer.answer)?.correct) {
              totalScore += q.points;
            }
          }
          break;
          
        case "truefalse":
          if (answer.answer === q.correctAnswer) {
            totalScore += q.points;
          }
          break;
          
        case "coding":
          if (answer.answer && runCodeTests(q.id, answer.answer)) {
            totalScore += q.points;
          }
          break;
          
        case "essay":
          // donner des points pour toute réponse non vide
          if (answer.answer && answer.answer.trim().length > 10) {
            totalScore += q.points * 0.8; // 80% pour une réponse complète
          }
          break;
      }
    });
    
    setScore(totalScore);
    setIsSubmitted(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const renderQuestion = () => {
    switch (question.type) {
      case "essay":
        return (
          <div className="mb-6 border-4 border-[#0a1a36]  p-4 bg-[#0a1120]">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-[#ffcc00]">Points: {question.points}</span>
              <span className="text-[#4fd1e0]">{question.maxLength} caractères max</span>
            </div>
            <h3 className="text-lg mb-4 text-[#e2eaf8]">{question.text}</h3>
            <textarea
              value={answers[question.id]?.answer || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
              rows={8}
              className="w-full bg-[#0a1120] border-4 border-[#17314f] p-3 font-mono text-sm"
              placeholder="Votre réponse ici..."
              maxLength={question.maxLength}
            />
            <div className="text-right text-xs mt-1 text-[#9cb3d9]">
              {(answers[question.id]?.answer || "").length}/{question.maxLength} caractères
            </div>
          </div>
        );
        
      case "mcq":
        return (
          <div className="mb-6 border-4 border-[#4fd1e0] p-4 bg-[#0a1120]">
            <div className="text-sm mb-2 text-[#ffcc00]">Points: {question.points}</div>
            <h3 className="text-lg mb-4 text-[#e2eaf8]">{question.text}</h3>
            <div className="space-y-3">
              {question.options.map(option => (
                <div key={option.id} className="flex items-start">
                  {question.multiple ? (
                    <input
                      type="checkbox"
                      id={`opt-${option.id}`}
                      checked={(answers[question.id]?.answer || []).includes(option.id)}
                      onChange={() => {
                        const current = answers[question.id]?.answer || [];
                        const newValue = current.includes(option.id)
                          ? current.filter(id => id !== option.id)
                          : [...current, option.id];
                        handleAnswerChange(newValue);
                      }}
                      className="mt-1 mr-2 w-5 h-5 accent-[#ffcc00]"
                    />
                  ) : (
                    <input
                      type="radio"
                      id={`opt-${option.id}`}
                      name={`q-${question.id}`}
                      checked={answers[question.id]?.answer === option.id}
                      onChange={() => handleAnswerChange(option.id)}
                      className="mt-1 mr-2 w-5 h-5 accent-[#ffcc00]"
                    />
                  )}
                  <label htmlFor={`opt-${option.id}`} className="flex-1 text-[#e2eaf8]">
                    {option.text}
                    {option.correct && isSubmitted && (
                      <span className="ml-2 text-green-400 text-sm">✓ Correct</span>
                    )}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
        
      case "truefalse":
        return (
          <div className="mb-6 border-4 border-[#4fd1e0] p-4 bg-[#0a1120]">
            <div className="text-sm mb-2 text-[#ffcc00]">Points: {question.points}</div>
            <h3 className="text-lg mb-4 text-[#e2eaf8]">{question.text}</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswerChange(true)}
                className={`py-3 border-4 font-bold ${
                  answers[question.id]?.answer === true
                    ? "bg-[#4fd1e0] border-[#08122c] text-[#08122c]"
                    : "bg-[#17314f] border-[#4fd1e0] text-[#e2eaf8]"
                }`}
              >
                VRAI
              </button>
              <button
                onClick={() => handleAnswerChange(false)}
                className={`py-3 border-4 font-bold ${
                  answers[question.id]?.answer === false
                    ? "bg-[#4fd1e0] border-[#08122c] text-[#08122c]"
                    : "bg-[#17314f] border-[#4fd1e0] text-[#e2eaf8]"
                }`}
              >
                FAUX
              </button>
            </div>
            {isSubmitted && (
              <div className="mt-4 p-2 border-4 border-yellow-300">
                <p className={question.correctAnswer === answers[question.id]?.answer 
                  ? "text-green-400" 
                  : "text-red-400"}>
                  {question.correctAnswer === answers[question.id]?.answer
                    ? "✅ Bonne réponse!"
                    : `❌ Mauvaise réponse. La bonne réponse était: ${question.correctAnswer ? "VRAI" : "FAUX"}`}
                </p>
              </div>
            )}
          </div>
        );
        
      case "coding":
        return (
          <div className="mb-6 border-4 border-[#4fd1e0] p-4 bg-[#0a1120]">
            <div className="text-sm mb-2 text-[#ffcc00]">Points: {question.points}</div>
            <h3 className="text-lg mb-4 text-[#e2eaf8]">{question.text}</h3>
            <div className="bg-[#081428] border-4 border-[#17314f]">
              <div className="bg-[#0a1429] px-4 py-2 text-xs text-[#4fd1e0] border-b-4 border-[#17314f]">
                VOTRE CODE
              </div>
              <textarea
                value={answers[question.id]?.answer || question.template}
                onChange={(e) => handleAnswerChange(e.target.value)}
                rows={10}
                className="w-full bg-[#081428] text-[#cbe0ff] font-mono text-sm p-4 focus:outline-none"
              />
            </div>
            
            {isSubmitted && testResults[question.id] && (
              <div className="mt-4 p-3 bg-[#0a1120] border-4 border-[#4fd1e0]">
                <h4 className="text-[#ffcc00] mb-2 font-pixel">RÉSULTATS DES TESTS:</h4>
                {testResults[question.id].map((result, index) => (
                  <div key={index} className="mb-2 p-2 border-2 border-[#17314f]">
                    {result.error ? (
                      <p className="text-red-400">Erreur: {result.error}</p>
                    ) : (
                      <>
                        <p className="text-sm">Test {result.test}:</p>
                        <p className="text-sm">Entrée: {result.input}</p>
                        <p className="text-sm">Attendu: {result.expected}</p>
                        <p className="text-sm">Reçu: {String(result.output)}</p>
                        <p className={result.passed ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
                          {result.passed ? "✅ RÉUSSI" : "❌ ÉCHOUÉ"}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
        
      default:
        return null;
    }
  };

  if (isSubmitted) {
    const percentage = Math.round((score / totalPoints) * 100);
    let message = "";
    let messageClass = "";
    
    if (percentage >= 80) {
      message = "🎉 Excellent! Maîtrise exceptionnelle!";
      messageClass = "text-green-400";
    } else if (percentage >= 60) {
      message = "👍 Bien joué! Bonne compréhension des concepts.";
      messageClass = "text-blue-400";
    } else if (percentage >= 40) {
      message = "📚 Pas mal! Continuez à vous exercer.";
      messageClass = "text-yellow-400";
    } else {
      message = "✏️ Encore un effort! Revoir les bases serait bénéfique.";
      messageClass = "text-orange-400";
    }
    
    return (
      <div className="relative max-w-3xl mx-auto bg-[#08122c] border-4 border-[#ffcc00] font-pixel text-white shadow-[8px_8px_0px_0px_rgba(255,204,0,0.5)] p-6">
        {/* Éléments décoratifs pixel art */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-[#ff0055]"></div>
        <div className="absolute top-2 right-2 w-3 h-3 bg-[#ffcc00]"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#00cc99]"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#9966ff]"></div>
        
        <h2 className="text-2xl text-[#ffcc00] text-center mb-6 border-b-4 border-[#4fd1e0] pb-3">RÉSULTATS DE L'EXAMEN</h2>
        
        <div className="text-center mb-8">
          <div className="text-5xl font-bold mb-2 text-[#4fd1e0]">{score}<span className="text-xl">/{totalPoints}</span></div>
          <div className="text-3xl mb-4 text-[#ffcc00]">{percentage}%</div>
          <p className={`text-xl ${messageClass}`}>{message}</p>
        </div>
        
        <div className="border-t-4 border-[#4fd1e0] pt-4">
          <h3 className="text-lg text-[#ffcc00] mb-4 font-pixel">DÉTAIL DES RÉPONSES:</h3>
          
          {examQuestions.map((q, index) => (
            <div key={q.id} className="mb-6 p-4 bg-[#0a1120] border-4 border-[#4fd1e0]">
              <div className="flex justify-between mb-2">
                <h4 className="font-bold text-[#ffcc00]">Question {index + 1} - {q.type.toUpperCase()}</h4>
                <span className="text-[#4fd1e0]">{answers[q.id] ? `${q.points * (getQuestionScore(q) ? 1 : 0)}/${q.points}` : "0/"+q.points}</span>
              </div>
              
              <p className="mb-3 text-[#e2eaf8]">{q.text}</p>
              
              {answers[q.id] && (
                <div className="mt-2">
                  <p className="text-sm text-[#9cb3d9]">Votre réponse:</p>
                  {q.type === "coding" ? (
                    <pre className="bg-[#081428] p-3 text-xs overflow-x-auto border-4 border-[#17314f]">
                      {answers[q.id].answer}
                    </pre>
                  ) : (
                    <p className="bg-[#081428] p-3 border-4 border-[#17314f]">
                      {Array.isArray(answers[q.id].answer) 
                        ? answers[q.id].answer.map(id => {
                            const opt = q.options?.find(o => o.id === id);
                            return opt ? opt.text : null;
                          }).filter(Boolean).join(", ")
                        : (q.type === "truefalse" 
                            ? (answers[q.id].answer ? "VRAI" : "FAUX") 
                            : answers[q.id].answer)
                      }
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setCurrentIndex(0);
              setAnswers({});
              setIsSubmitted(false);
              setTimeLeft(90 * 60);
              setScore(0);
              setTestResults({});
            }}
            className="px-6 py-3 bg-[#ffcc00] text-[#08122c] border-4 border-[#08122c] font-bold hover:bg-[#ffd633] transition-all active:translate-y-1"
          >
            RECOMMENCER L'EXAMEN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-3xl mx-auto bg-[#08122c] border-4 border-[#4fd1e0] font-pixel text-white shadow-[8px_8px_0px_0px_rgba(79,209,224,0.5)]">
    
      {/* En-tête avec timer */}
      <div className="bg-[#0a1a36] px-6 py-4 border-b-4 border-[#4fd1e0]">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-[#ffcc00] shadow-[0_0_0_2px_#0a1a36,0_0_0_4px_#ffcc00]"></div>
            <h2 className="text-[#ffcc00] text-sm font-pixel">
              EXAMEN FINAL • {currentIndex + 1}/{examQuestions.length}
            </h2>
          </div>
          <div className="text-red-500 font-bold text-sm">
            ⏱️ {formatTime(timeLeft)}
          </div>
        </div>
      </div>
      
      {/* l'examen */}
      <div className="p-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#4fd1e0]">Question {currentIndex + 1}/{examQuestions.length}</span>
          <span className="text-[#ffcc00]">Points: {question.points}</span>
        </div>
        
        {renderQuestion()}
      </div>

      <div className="flex justify-between p-4 bg-[#0a1a36] border-t-4 border-[#0a1a36] ">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 border-4 font-bold ${
            currentIndex === 0 
              ? "bg-gray-600 border-gray-800 text-gray-400 cursor-not-allowed" 
              : "bg-[#4fd1e0] hover:bg-[#63d6e4] text-[#08122c] border-[#08122c]"
          } transition-all active:translate-y-1`}
        >
          ← PRÉCÉDENT
        </button>
        
        {isLastQuestion ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-red-600 text-white border-4 border-[#08122c] font-bold hover:bg-red-700 transition-all active:translate-y-1"
          >
            SOUMETTRE L'EXAMEN
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-[#4fd1e0] text-[#08122c] border-4 border-[#08122c] font-bold hover:bg-[#ffd633] transition-all active:translate-y-1"
          >
            SUIVANT →
          </button>
        )}
      </div>
    </div>
  );

  // Fonction qui calcule le score par question
  function getQuestionScore(q) {
    const answer = answers[q.id];
    if (!answer) return false;
    
    switch (q.type) {
      case "mcq":
        if (q.multiple) {
          
          const correctSelected = q.options
            .filter(opt => opt.correct)
            .every(opt => answer.answer.includes(opt.id));
          
          const incorrectSelected = q.options
            .filter(opt => !opt.correct)
            .some(opt => answer.answer.includes(opt.id));
          
          return correctSelected && !incorrectSelected;
        } else {
         
          return answer.answer && q.options.find(opt => opt.id === answer.answer)?.correct;
        }
        
      case "truefalse":
        return answer.answer === q.correctAnswer;
        
      case "coding":
        return runCodeTests(q.id, answer.answer);
        
      case "essay":
        return answer.answer && answer.answer.trim().length > 10;
        
      default:
        return false;
    }
  }
}