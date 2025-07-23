import './App.css';
import NextPrevButton  from './components/Pixel-Button/Next-prev-buttom';
import PixelButtonSignup  from './components/Pixel-Button/Signup-button';
import CompletButton from './components/Pixel-Button/Complet-Button';
import { NavLink } from './components/NavLink';
import chevronRight from './image/chevron-right.png';
import mascot from './image/mascot7.png'
import moon from './image/Moon.svg'
import { Star } from 'react-feather';
import {Lesson} from './components/lesson';

function App() {

  return (
    
     <div className="h-screen flex flex-col overflow-hidden bg-slate-900 text-white font-pixel">
     
      <nav className=" h-[80px] shrink-0 relative flex items-center px-6 py-4 bg-custom-darker border-b border-slate-700">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="flex items-center space-x-6 pointer-events-auto">
            <NavLink href="#" > HOME</NavLink>
            <NavLink href="#">BLOG</NavLink>
            <NavLink href="#" active={true}>LEARN</NavLink>
            <NavLink href="#">GAMES</NavLink>
            <NavLink href="#">CODING</NavLink>
            <NavLink href="#">EVENTS</NavLink>
          </div>
        </div>

        <div className="ml-auto   mb-[10px] h-full flex items-center space-x-6 z-10">
             <img src={moon} alt="Chevron"className="w-19 h-19"/>
           <PixelButtonSignup > SIGNUP </PixelButtonSignup>
        </div>
        </nav>

  
           <main className="flex-1 flex overflow-hidden bg-[rgba(2,14,30,0.5)]">

        <div className="w-80 flex-shrink-0  p-6">
          {/* Course Header */}
          <div className="bg-gradient-to-r text-white p-4 rounded-lg border-2 border-purple-400 mb-6">
            <div className="text-lg font-bold mb-2">JAVASCRIPT</div>
            <div className="text-sm opacity-90">Introduction</div>
            <div className="text-xs opacity-75 mt-1">Lorem</div>
          </div>

          {/* Lesson Details */}
          <div className="space-y-4">
            <div className="bg-slate-900 border-2 border-slate-600 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-400 mb-3 text-sm">LESSON INFO</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-xs font-bold">DURATION</div>
                    <div className="text-xs text-gray-400">15 minutes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-xs font-bold">LEVEL</div>
                    <div className="text-xs text-gray-400">Beginner</div>
                  </div>
                </div>
               
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-slate-900 border-2 border-slate-600 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-400 mb-3 text-sm">OBJECTIVES</h3>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Understand JavaScript variables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Learn let, const, and var</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Practice with examples</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col p-8 overflow-hidden">
          <Lesson/>
        </div>

        
        <div className="w-80 flex-shrink-0 mt-40 p-6 flex flex-col">

          <div className="flex items-center  mb-8"> 
            <div className="flex items-center justify-center">
                <img src={mascot} alt="Chevron"className="w-15 h-11"/>
            </div>
            <div >
               <div className='flex mb-2'>
                    <div className="text-sm font-bold text-white mr-10">LESSON</div>
                    <div className="text-xs text-gray-400">1/5</div>
                </div>
              
                <div className="w-[220px] h-5 bg-slate-700 border rounded-2xl border-slate-600 "> 
                  <div className="bg-gradient-to-r from-indigo-900 to-blue-950 h-full w-1/5 rounded-2xl"></div>
                </div>
            </div>
         
          </div>
          {/* Overall Progress */}
          <div className="bg-slate-900 border-2 border-yellow-500 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-yellow-500 rounded border-2 border-yellow-300 flex items-center justify-center">
                <Star size={16} className="text-black" />
              </div>
              <div>
                <div className="text-sm font-bold text-yellow-300">PROGRESS</div>
                <div className="text-xs text-gray-400">25% Complete</div>
              </div>
            </div>
            <div className="w-full bg-slate-700 border border-slate-600 h-2 rounded">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full w-1/4 rounded"></div>
            </div>
          </div>

      
        </div>
      </main>
      
      <div className="h-[60px] shrink-0 relative flex items-center bg-[rgba(15, 21, 36, 1)] border-t border-slate-700 px-6 py-4">
        
          <div className=" mr-auto flex items-center z-10 ">
            <img src={mascot} alt="Chevron"className="w-15 h-11"/>
            <div className='flex flex-col'>
             <span className="text-sm font-bold text-gray-300 font-silkscreen">LESSON 01</span>
             <span className="mt-2 text-xs text-yellow-400 font-silkscreen">10 XP</span>
            </div>
          </div>

        <div className="absolute inset-0 flex justify-center items-center ">
          <div className=" flex items-center space-x-6 ">
            <NextPrevButton  >PREV</NextPrevButton>
             <CompletButton>
              <div className="flex items-center gap-2">
                <img
                  src={chevronRight}
                  alt="Chevron"
                  className="w-3 h-3"
                />
                  <span>Complet</span>
               </div>
            </CompletButton>
            <NextPrevButton onClick={() => console.log('Next lecon')}>NEXT</NextPrevButton>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default App;
