import React from "react";
import { Clock, Star, ChevronRight } from "lucide-react";
import boock from '../image/module.png';

const CourseCard = ({ course, onEnroll }) => {
  return (
    <div
      className="p-6 bg-[#1E293B70] text-white rounded-lg relative transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
      style={{ width: 405 }}
    >
      {/* Title and rating */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg tracking-widest font-['Press_Start_2P']">{course.title}</h3>
        <div className="flex flex-col items-end">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-[rgba(255,251,44,1)] text-[rgba(255,251,44,1)]" />
            <span className="text-[rgba(255,251,44,1)] text-xs">{course.rating.toFixed(1)}</span>
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
          <img src={boock} alt="module icon" className="w-4 h-4" />
          <span>{course.modules} modules</span>
        </div>
      </div>

      {/* Level badge */}
      <div className="mt-4">
        <span className="border border-[#C084FC] text-[#C084FC] text-xs px-3 py-1 rounded-full font-mulish">
          {course.level}
        </span>
      </div>

      {/* Progress section - Nouvel élément ajouté */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-400 text-sm font-mulish">Your Progress</span>
          <span className="text-cyan-400 text-sm font-mulish">{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-tr from-[#0E3761] to-[#165173] h-2 rounded-full" 
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>

      {/* CTA Button */}
  <button
  className="mt-8 px-6 py-3 
    bg-[#165173] 
    text-[10px] leading-5 text-center 
    text-cyan-400 
    border border-cyan-300/30 
    rounded-lg 
    flex items-center justify-center gap-2
    tracking-[2px]
    mx-auto w-[350px] h-[42px]
    transition-all duration-300 ease-in-out
    hover:bg-cyan-400 hover:text-[#165173] hover:border-cyan-400
    group"
  onClick={onEnroll}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
  >
    <polygon points="6,4 20,12 6,20" />
  </svg>
  KEEP LEARNING
</button>

    </div>
  );
};

export default CourseCard;