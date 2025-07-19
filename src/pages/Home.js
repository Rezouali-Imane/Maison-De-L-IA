import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
   const navigate = useNavigate();
   const handleGoToNews = () => {
    navigate('/lesson'); 
  };

return ( 
  <div className='h-screen p-10'>
    <h1 className="text-3xl font-bold">Home</h1>
    <p>Home page...</p>

     <button
        onClick={handleGoToNews}
        className="
        bg-[#165173] 
        text-[10px] leading-5 text-center 
        text-cyan-400 
        border border-cyan-300/30 
        rounded-2xl 
        flex items-center justify-center
        tracking-[2px]
         w-[180px] h-[42px] mt-16"
        >
        Raw lesson
      </button>
      <p className='text-base font-mulish mt-2'>Click here to view "raw lesson"</p>
  </div>

);}

export default Home;
