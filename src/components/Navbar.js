import '../App.css';
import React from 'react';
import { CustomNavLink  } from './CustomNavLink';
import moon from '../image/Moon.svg'
import PixelButtonSignup  from '../components/Pixel-Button/Signup-button';

const Navbar = () => (

     <nav className=" h-[80px] shrink-0 relative flex items-center px-6 py-4 bg-[rgba(2,6,23,1)] border-b-2 border-[rgba(51,65,85,1)] ">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="flex items-center space-x-6 pointer-events-auto tracking-[2px]">
            <CustomNavLink to="/" active={true}> HOME</CustomNavLink>
            <CustomNavLink to="/blog">BLOG</CustomNavLink>
            <CustomNavLink to="learn" >LEARN</CustomNavLink>
            <CustomNavLink to="/games">GAMES</CustomNavLink>
            <CustomNavLink to="/coding">CODING</CustomNavLink>
            <CustomNavLink to="/event">EVENTS</CustomNavLink>
          </div>
        </div>

        <div className="ml-auto   mb-[10px] h-full flex items-center space-x-6 z-10">
             <img src={moon} alt="Chevron"className="w-19 h-19"/>
           <PixelButtonSignup > SIGNUP </PixelButtonSignup>
        </div>
     </nav>

);

export default Navbar;
