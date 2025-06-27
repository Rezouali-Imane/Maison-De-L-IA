


//ce code concerne la partie "coding answer" dans la tache "Inside each lesson (interactive ones)""

import { useState, useEffect } from "react";

const questions = [
  {
    text: "Écris une fonction `sum(a, b)` qui retourne la somme de `a` et `b`.",
    template: 
`// Complète la fonction ci-dessous
function sum(a, b) {
  // ton code ici
}`,
    tests: [
      { args: [1, 2], expected: 3 },
      { args: [5, 7], expected: 12 },
    ]
  },
  {
    text: "Écris une fonction `isEven(n)` qui retourne `true` si `n` est pair.",
    template:
`// Complète la fonction ci-dessous
function isEven(n) {
  // ton code ici
}`,
    tests: [
      { args: [2], expected: true },
      { args: [3], expected: false },
    ]
  },
  {
    text: "Écris une fonction `reverseString(str)` qui inverse une chaîne de caractères.",
    template:
`function reverseString(str) {
  // ton code ici
}`,
    tests: [
      { args: ["hello"], expected: "olleh" },
      { args: ["react"], expected: "tcaer" },
    ]
  }
];

export default function CodeAnswerQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null); 
  const [log, setLog] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [progress, setProgress] = useState(0);

  const question = questions[currentIndex];

 
  useEffect(() => {
    setCode(question.template);
    setResult(null);
    setLog("");
    setIsTyping(false);
    setProgress(0);
  }, [question]);

  //typing animation 
  useEffect(() => {
    if (!isTyping && code === question.template) {
      setIsTyping(true);
      let i = 0;
      const template = question.template;
      setCode("");
      
      const typingInterval = setInterval(() => {
        if (i < template.length) {
          setCode(prev => prev + template.charAt(i));
          i++;
          setProgress(Math.floor((i / template.length) * 100));
        } else {
          clearInterval(typingInterval);
        }
      }, 20);
    }
  }, [question, isTyping, code]);

  const runTests = () => {
    try {
     
      const functionName = question.template.match(/function (\w+)/)[1];
     
      const fn = new Function(code + `\nreturn ${functionName};`)();

      let passed = true;
      let output = "";

      question.tests.forEach(({ args, expected }) => {
        const res = fn(...args);
        output += `Test ${functionName}(${args.map(JSON.stringify).join(", ")}):\n`;
        output += `→ Résultat: ${JSON.stringify(res)}\n`;
        output += `→ Attendu: ${JSON.stringify(expected)}\n`;
        output += `→ Status: ${res === expected ? "✅ PASS" : "❌ FAIL"}\n\n`;
        if (res !== expected) passed = false;
      });

      setLog(output);
      setResult(passed ? "success" : "failure");
    } catch (err) {
      setLog(`💥 Erreur: ${err.toString()}\n\n🔍 Vérifiez votre syntaxe et les variables non définies.`);
      setResult("error");
    }
  };

  const handleSubmit = () => runTests();

  const handleContinue = () => {
    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleReset = () => {
    setCode(question.template);
    setResult(null);
    setLog("");
  };

  return (
      <div className="relative max-w-3xl mx-auto bg-[#08122c] border-4 border-[#4fd1e0] font-pixel text-white shadow-[8px_8px_0px_0px_rgba(79,209,224,0.5)]">
    
      {/* Header  */}
      <div className="bg-[#12274a] px-6 py-4 border-b border-[#2a4a7a]">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-[#4fd1e0] w-3 h-3 rounded-full"></div>
            <h2 className="text-[#9cb3d9] text-sm font-pixel">
              Exercice de Code • Question {currentIndex + 1}/{questions.length}
            </h2>
          </div>
          <div className="flex space-x-2">
           <button 
              onClick={handleReset}
              title="Réinitialiser le code"
              className="p-2 bg-[#1a3a6b] rounded-full hover:bg-[#2a4a7a] transition-transform transform hover:scale-110 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9cb3d9]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={handleContinue}
              className="text-xs bg-[#4fd1e0] text-[#0d1b34] px-3 py-1 rounded font-medium font-pixel hover:bg-[#63d6e4] transition"
            >
              {currentIndex < questions.length - 1 ? "Suivant →" : "Recommencer"}
            </button>
          </div>
        </div>
        
        {/* Barre de progression */}
        <div className="mt-3">
          <div className="h-1 bg-[#1a3a6b] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#4fd1e0] transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* questions */}
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-6">
          <div className="bg-[#4fd1e0] text-[#0d1b34] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            <span className="font-bold">Q</span>
          </div>
          <h3 className="text-[#e2eaf8] font-pixel text-lg leading-relaxed">
            {question.text}
          </h3>
        </div>

        {/* code Editor*/}
        <div className="relative mb-6 rounded-lg overflow-hidden border-2 border-[#1e3a6b] shadow-lg">
          <div className="bg-[#0a1429] px-4 py-2 text-xs text-[#6b8cbc] border-b border-[#1e3a6b] flex justify-between">
            <span>script.js</span>
            <span>JavaScript</span>
          </div>
          <div className="relative">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={10}
              className="w-full bg-[#081428] text-[#cbe0ff] font-mono text-sm p-4 pb-10 focus:outline-none resize-y min-h-[200px]"
              spellCheck="false"
            />
            <div className="absolute bottom-0 right-0 bg-[#12274a] px-3 py-1 text-xs text-[#6b8cbc]">
              {code.length} caractères
            </div>
          </div>
        </div>

        {/* Bouton Exécuter */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleSubmit}
            disabled={result === "success"}
            className={`px-8 py-3 rounded-lg font-pixel text-sm flex items-center space-x-2 transition-all ${
              result === "success" 
                ? "bg-green-500/20 text-green-400 cursor-not-allowed"
                : "bg-[#4fd1e0] hover:bg-[#63d6e4] text-[#0d1b34] hover:scale-[1.03]"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span>{result === "success" ? "Tests réussis!" : "Exécuter le code"}</span>
          </button>
        </div>

        {/* Résultats  */}
        {result && (
          <div className={`rounded-xl overflow-hidden border-2 transition-all ${
            result === "success" 
              ? "border-green-500/30 bg-green-500/10" 
              : result === "failure" 
                ? "border-amber-500/30 bg-amber-500/10" 
                : "border-red-500/30 bg-red-500/10"
          }`}>
            <div className={`px-5 py-3 flex items-center space-x-2 ${
              result === "success" 
                ? "bg-green-500/20 text-green-300" 
                : result === "failure" 
                  ? "bg-amber-500/20 text-amber-300" 
                  : "bg-red-500/20 text-red-300"
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                result === "success" 
                  ? "bg-green-500" 
                  : result === "failure" 
                    ? "bg-amber-500" 
                    : "bg-red-500"
              }`}>
                {result === "success" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : result === "failure" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <h3 className="font-pixel">
                {result === "success" && "Tous les tests sont passés avec succès!"}
                {result === "failure" && "Certains tests ont échoué"}
                {result === "error" && "Erreur d'exécution"}
              </h3>
            </div>
            
            <div className="p-5">
              <pre className="whitespace-pre-wrap text-sm bg-[#0a1429]/50 p-4 rounded-lg border border-[#1e3a6b]">
                {log || "Aucun résultat à afficher"}
              </pre>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleContinue}
                  className="flex items-center font-pixel space-x-1 text-[#9cb3d9] hover:text-[#cbe0ff] text-xs"
                >
                  <span>{currentIndex < questions.length - 1 ? "Question suivante" : "Recommencer"}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
    
    </div>
  );
}