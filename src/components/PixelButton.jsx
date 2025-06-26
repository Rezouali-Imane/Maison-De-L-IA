import React from 'react';

const PixelButton = ({ children, onClick }) => {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      {/* Shadow layers */}
      <div className="absolute top-1 left-1 w-full h-full bg-purple-900 z-0"></div>
      <div className="absolute top-2 left-2 w-full h-full bg-purple-800 z-0"></div>
      <div className="absolute top-3 left-3 w-full h-full bg-purple-700 z-0"></div>

<div className="absolute top-1 right-1 w-full h-full bg-purple-900 z-0"></div>
      <div className="absolute top-2 right-2 w-full h-full bg-purple-800 z-0"></div>
      <div className="absolute top-3 right-3 w-full h-full bg-purple-700 z-0"></div>


      {/* Main button */}
      <div className="relative z-10 bg-purple-500 text-white font-pixel text-2xl px-6 py-4 border-4 border-purple-700 leading-none select-none">
        {children}
      </div>
    </div>
  );
};

export default PixelButton;
