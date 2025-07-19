import React from "react";
import { Clock, Star, ChevronRight } from "lucide-react";
import boock from '../image/module.png';


const CourseCard= ({ course, onEnroll }) => {
  return (
    <div
                       
                       className=" p-6 bg-[rgba(2,14,30,1)] text-white  relative transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
                        style={{
                         width: 405,
                        }}
                     >
   
                           <div className="absolute top-0 left-4 right-4 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-0 left-4 right-4 h-1 bg-gray-500"></div>
                           <div className="absolute left-0 top-4 bottom-4 w-1 bg-gray-500"></div>
                           <div className="absolute right-0 top-4 bottom-4 w-1 bg-gray-500"></div>
   
                           {/* Coin supérieur gauche */}
                           <div className="absolute top-0 left-3 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute top-0 left-2 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute top-1 left-2 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute top-1 left-1 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute top-2 left-1 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute top-2 left-0 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute top-3 left-0 w-1 h-1 bg-gray-500"></div>
   
                           {/* Coin supérieur droit - escaliers connectés */}
                           <div className="absolute top-0 right-3 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute top-0 right-2 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute top-1 right-2 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute top-1 right-1 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute top-2 right-1 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute top-2 right-0 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute top-3 right-0 w-1 h-1 bg-gray-500"></div>
   
                           {/* Coin inférieur gauche - escaliers connectés */}
                           <div className="absolute bottom-0 left-3 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-0 left-2 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-1 left-2 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-1 left-1 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-2 left-1 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-2 left-0 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-3 left-0 w-1 h-1 bg-gray-500"></div>
   
                           {/* Coin inférieur droit - escaliers connectés */}
                           <div className="absolute bottom-0 right-3 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-0 right-2 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-1 right-2 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-1 right-1 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-2 right-1 w-1 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-2 right-0 w-2 h-1 bg-gray-500"></div>
                           <div className="absolute bottom-3 right-0 w-1 h-1 bg-gray-500"></div>
   
                       {/* Title and rating */}
                       <div className="flex justify-between items-start">
                         <h3 className="text-lg tracking-widest font-['Press_Start_2P']">{course.title}</h3>
   
                         <div className="flex flex-col items-end">
                           <div className="flex items-center space-x-1">
                                 <Star className="w-4 h-4 fill-[rgba(255,251,44,1)] text-[rgba(255,251,44,1)]" />
                                 <span className="text-[rgba(255,251,44,1)] text-sm">{course.rating.toFixed(1)}</span>
                           </div>
                               <p className="text-gray-400 text-sm font-mulish">{course.students} students</p>
                         </div>
                         
                       </div>
   
          
   
                       {/* Duration & modules */}
                       <div className="flex items-center justify-between text-gray-400 text-sm mt-5 font-mulish">
                         <div className="flex items-center gap-1">
                           <Clock className="w-4 h-4" />
                           <span>{course.weeks} weeks</span>
                         </div>
                         <div className="flex items-center gap-1">
                           <img src={boock} alt="module icon" />
                           <span>{course.modules} modules</span>
                         </div>
                       </div>
   
                       {/* Level badge */}
                       <div className="mt-4">
                         <span className="border border-[rgba(128,91,178,1)] text-[rgba(128,91,178,1)] text-xs px-3 py-2 rounded-full font-mulish">
                           {course.level}
                         </span>
                       </div>
   
                       {/* CTA Button */}
                       <button
                         className="mt-8 px-6 py-3 
                           bg-[#165173] 
                           text-[10px] leading-5 text-center 
                           text-cyan-400 
                           border border-cyan-300/30 
                           rounded-2xl 
                           flex items-center justify-center gap-2
                           tracking-[2px]
                           mx-auto w-[247px] h-[42px]
                           transition-all duration-300 ease-in-out
                           hover:bg-cyan-400 hover:text-[#165173] hover:border-cyan-400
                           group"
                            onClick={onEnroll}
                       >
                         ENROLL NOW <ChevronRight className="w-6 h-6" />
                       </button>
                     </div>
  );
};

export default CourseCard;