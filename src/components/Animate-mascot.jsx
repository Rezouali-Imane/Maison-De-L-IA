import { useState } from "react"
import { Sparkles, Zap} from "lucide-react"

const mascots = [
  { src: "/mascot/mascot1.png", name: "", description: "Robot amical qui vous salue" },
  { src: "/mascot/mascot2.png", name: "", description: "Robot avec écran technologique" },
  { src: "/mascot/mascot3.png", name: "", description: "Robot en position de célébration" },
  { src: "/mascot/mascot4.png", name: "", description: "Robot qui vous accueille" },
  { src: "/mascot/mascot5.png", name: "", description: "Robot curieux et interrogateur" },
  { src: "/mascot/mascot6.png", name: "", description: "Robot en mode résolution de problème" },
]

export default function AnimatedMascot() {
  const [currentMascot, setCurrentMascot] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  

  const nextMascot = () => {
    if (isAnimating) return

    setIsAnimating(true)

    
   

    setTimeout(() => {
      setCurrentMascot((prev) => (prev + 1) % mascots.length)
      setTimeout(() => {
        setIsAnimating(false)
        
      }, 500)
    }, 300)
  }



  return (
    <div className="relative flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* Mascotte */}
      <div
        className={`relative transition-all duration-500 ${
          isAnimating ? "scale-110 rotate-12 opacity-50" : "scale-100 rotate-0 opacity-100"
        }`}
      >
        <div className="animate-float">
          <img
            src={mascots[currentMascot].src}
            alt={mascots[currentMascot].name}
            className="w-48 h-48 mx-auto drop-shadow-xl"
            style={{
              filter: "drop-shadow(0 0 20px rgba(34, 211, 238, 0.5))",
            }}
          />
        </div>
      </div>


      {/* Boutons */}
      <div className="flex mt-4 space-x-3">
        <button
          onClick={nextMascot}
          disabled={isAnimating}
          className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg text-sm disabled:opacity-50"
        >
          {isAnimating ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>clic</span>
              <Zap className="w-4 h-4" />
            </>
          )}
        </button>

        
      </div>
    </div>
  )
}
