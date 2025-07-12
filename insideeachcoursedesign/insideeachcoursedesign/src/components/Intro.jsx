import React from "react";
import '../style.css';

const Intro =({onStart,rating,namecourse,descriptionc,prerequisite})=>{
return(
    
    <section className="relative" >
        <img src='/picIntro/intro.jpg' alt=''  className="w-screen h-[474px]  relative object-cover"/> 
        <div className='absolute text-[#FFFB2C] text-[18px]  font-Silkscreen top-[31px] left-[53px] tracking-[1.68px] leading-[18px]'> Interactive course </div>
        <img src="/picIntro/star.png" alt=""  className=" absolute top-[18px] right-[90px] scale-[0.8] "/>
        <div className=' absolute text-[#FFFB2C] font-Silkscreen  top-[12px] right-[20px] text-[30px]  '>  {rating} </div> 
        <div className="absolute  font-Silkscreen  text-[#FFFFFF] top-[81px] left-[53px]  font-normal tracking-[4.8px] leading-[60px] text-[60px] w-[817px]  ">{namecourse}</div>
        <div className="absolute font-Mulish top-[233px] left-[53px] w-[397px] h-[63px]  text-[12px] ">
        <div className="text-[#FFFFFF] leading-full font-normal ">{descriptionc}</div>
        <div className="flex gap-1 leading-[27px]">
        <div className="text-[#FFFFFF] font-semibold" > Prerequisite :  </div>   
        <div className="text-[#0165d2] font-black ">  {prerequisite}</div>
        </div>
        </div>

         
         <div className="absolute top-[328px] left-[85px]">
          <div className="flex items-center justify-center ">
      <div className="space-y-8">
        <div className="flex flex-col items-center space-y-6">
         
          <div className="pixel-frame">
            <div className="frame-content">
              <span className="button-text flex"> Start learning </span>
            </div>

        
            <div className="shadow-bar">
              <span className="pixel-corner left"></span>
              <span className="bar"></span>
              <span className="pixel-corner right"></span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        
        
        .pixel-frame-container {
          position: relative;
        }

        .pixel-frame {
        transform:scale(1.6);
        
          width: 120px;
          height: 41px;
          background: transparent;
          z-index: 1;
          font-family:silkscreen;
          cursor: pointer;
          transition: transform 0.1s ease-in-out;
        }

        
        .pixel-frame::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: -6px;
          background: #4B3C00;
          transition: background 0.1s ease-in-out;
          clip-path: polygon(
            0% 6px,
            3px 6px,
            3px 3px,
            6px 3px,
            6px 0%,
            calc(100% - 6px) 0%,
            calc(100% - 6px) 3px,
            calc(100% - 3px) 3px,
            calc(100% - 3px) 6px,
            100% 6px,
            
            /* Côté droit étendu vers le bas */
            100% calc(100% - 4px),
            calc(100% - 6px) calc(100% - 4px),
            calc(100% - 4px) calc(100% - 6px),
            calc(100% - 4px) 100%,
            
            /* Extension 3D droite */
            calc(100% - 3px) 100%,
            calc(100% - 3px) calc(100% + 6px),
            
            /* Coin externe bas droit  */
            calc(100% - 6px) calc(100% + 6px),
            calc(100% - 6px) calc(100% + 3px),
            calc(100% - 3px) calc(100% + 3px),
            
            /* Bordure du bas 3D */
            3px calc(100% + 3px),
            3px calc(100% + 6px),
            
            /* Coin externe bas gauche */
            6px calc(100% + 6px),
            6px calc(100% + 3px),
            3px calc(100% + 3px),
            3px 100%,
            
            4px 100%,
            4px calc(100% - 4px),
            4px calc(100% - 4px),
            0% calc(100% - 4px)
          );
        }

        /* Surface supérieure bleue claire */
        .pixel-frame::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background: #FFFB2C;
          transition: background 0.1s ease-in-out;
          clip-path: polygon(
            0% 3.5px,
            3.5px 3.5px,
            3.5px 0%,
            calc(100% - 3.5px) 0%,
            calc(100% - 3.5px) 3.5px,
            100% 3.5px,
            100% calc(100% - 3.5px),
            calc(100% - 3.5px) calc(100% - 3.5px),
            calc(100% - 3.5px) 100%,
            3.5px 100%,
            3.5px calc(100% - 3.5px),
            0% calc(100% - 3.5px)
          );
        }

        /* Contenu - même couleur que la surface du bouton */
        .frame-content {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border-radius: 2px;
          transition: background 0.1s ease-in-out;
          z-index: 5;
        }

        /* Texte du bouton */
        .button-text {
          position:relative;
          font-size:8px;
          color: #000000;
          font-family:boldsilk;
          text-align: center;
          line-height: 22.4px;
          letter-spacing: 0px;
          user-select: none;
          pointer-events: none;
          position: relative;
          z-index: 10;
          width:fit-content;
        }

        /* Barre d'ombre intégrée */
        .shadow-bar {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 109px;
          height: 10px;
          display: flex;
          align-items: flex-end;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .shadow-bar .pixel-corner {
          width: 0;
          height: 7px;
          display: inline-block;
          position: relative;
        }

        .shadow-bar .pixel-corner.left::before,
        .shadow-bar .pixel-corner.right::before {
          content: '';
          display: block;
          position: absolute;
          width: 5px;
          height: 3px;
          background: transparent;
        }

        .shadow-bar .pixel-corner.left::before {
          left: -4px;
          top: 0;
          background: 
            linear-gradient(to bottom, #B39000 0 4px, transparent 4px 12px),
            linear-gradient(to right, #B39000 0 4px, transparent 4px 12px);
        }

        .shadow-bar .pixel-corner.right::before {
          right: -4px;
          top: 0;
          background: 
            linear-gradient(to bottom, #B39000 0 4px, transparent 4px 12px),
            linear-gradient(to left, #B39000 0 4px, transparent 4px 12px);
        }

        .shadow-bar .bar {
          flex: 1;
          height: 4.5px;
          background: #B39000;
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }

        .shadow-bar .bar::before,
        .shadow-bar .bar::after {
          content: '';
          position: absolute;
          width: 0px;
          height: 0px;
          background: #B39000;
          bottom: -3px;
        }

        .shadow-bar .bar::before {
          left: 0;
        }

        .shadow-bar .bar::after {
          right: 0;
        }  

        
        .pixel-frame:active::after {
        transform: translateY(4px);
          background: #E5D900;
        }

        .pixel-frame:active::before {
          background: #B39000;
        }

        .pixel-frame:active .frame-content {
          transform: translateY(4px);
          background: transparent;
        }
          .pixel-frame:active .button-text {
  transform: translateY(1px); 
}

.frame-content {
  transition: transform 0.1s ease-in-out;
}

        
        .pixel-frame:active .shadow-bar {
          opacity: 0;
          transform: translateX(-50%) scale(0.8);
        }

       
        .pixel-frame:hover::after {
          background: #FFF444;
        }

        .pixel-frame:hover::before {
          background: #4B3C00;
        }
      `}</style>
    </div>
    </div>
         
        </section>
    );


}
export default Intro;