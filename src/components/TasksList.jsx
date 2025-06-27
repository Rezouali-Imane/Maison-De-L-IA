




// ce code et cette inetrafce est faite juste pour facilité l'accès a chaque tache que j'ai réaliser
//  et comprendre bien chaque partie , cette interface ne sera pas inclus dans le site MIA 





import React from "react";
import { Link } from "react-router-dom";

export default function TaskList() {
  const tasks = [
    { path: "/mcq", label: "→  Code for multi questions answer " },
    { path: "/code", label: " →  For a coding answer" },
    { path: "/tf", label: "→  True/false answer" },
     { path: "/qz", label: "→  Quizze" },
    { path: "/final", label: "→  Final course exam " },
  ];

  return (
    <div className="flex bg-[#020E1E]">
                   <div className="flow bg-[#020E1E]">
                      <img src="/6187bd52ae65dca93b058e43a66fe59a1be2ba06.png" alt="Illustration" className="w-16 h-16 mb-4 mx-auto" />
      <h1 className="text-lg mr-10 font-pixel text-white-300 mb-2"> Tasks of  <br/> "Inside each lesson interactive ones" </h1>
      </div>
      <ul className="space-y-2">
        {tasks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
               className="
                block text-center
                bg-transparent
                text-white
                hover:text-[#9c76f5]
                text-xs
                font-pixel
                px-6 py-2
                border-2 border-[#9c76f5]
                rounded-full
                transition-colors duration-200
                hover:bg-[#9c76f5]/20
              "
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
