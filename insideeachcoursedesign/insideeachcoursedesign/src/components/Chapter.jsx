import React from 'react';
import '../style.css';
const  Chapter = ({namechapter,description,lessons})=> {
return(
 <section >
<div className='relative  top-[14px] left-[89px]'>
<div className='font-Silkscreen text-[#FFFB2C] text-[24px] font-normal  tracking-[0.72px] leading-[36px]'>
{namechapter}</div>
<div className=' w-[709px] h-[372px] relative  top-[20px]   '>
<div className=' font-Mulish absolute text-[#F8FAFC] text-[16px] top-[26px] left-[24px]  '>
{description}</div>
<ul className='absolute   space-y-[17px] top-[75px] left-[24px]   '>
{lessons.map((lesson, index) => (
          <li key={index} className="flex items-center justify-between w-full" >

            <div className="flex gap-12">
         <span className="font-normal font-Silkscreen text-[#CBD5E1] leading-[24px] text-[16px]">LESSON {index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
         <span className='font-Mulish text-[#F8FAFC] text-[16px] font-Medium leading-[24px]'>{lesson.name}</span>
         </div>


          {lesson.status === 'start' ? (
         <div className='ml-[345px]'>
          <div className="pixel-frame-small">
            <div className="frame-content-small">
              <span className="button-text">START</span>
            </div>
            <div className="internal-shadow-bar">
              <span className="pixel-corner left"></span>
              <span className="bar"></span>
              <span className="pixel-corner right"></span>
            </div>
      <style jsx>{`
        .pixel-frame-small-container {
          position: relative;
        }

        .pixel-frame-small {
          position: relative;
          width: 100px;
          height: 38px;
          background: transparent;
          z-index: 1;
          cursor: pointer;
          transition: transform 0.1s ease-in-out;
        }

        /* Bordure bleue foncée */
        .pixel-frame-small::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: -3px;
          background: #011F72;
          transition: background 0.1s ease-in-out;
          clip-path: polygon(
            0% 4px,
            2px 4px,
            3px 3px,
            4px 2px,
            4px 0%,
            calc(100% - 4px) 0%,
            calc(100% - 4px) 2px,
            calc(100% - 2px) 4px,
            calc(100% - 2px) 4px,
            100% 4px,
            
            /* Côté droit étendu vers le bas */
            100% calc(100% - 4px),
            calc(100% - 4px) calc(100% - 4px),
            calc(100% - 4px) calc(100% - 4px),
            calc(100% - 4px) 100%,
            
            /* Extension 3D droite */
            calc(100% - 2px) 100%,
            calc(100% - 2px) calc(100% + 4px),
            
            /* Coin externe bas droit  */
            calc(100% - 4px) calc(100% + 4px),
            calc(100% - 4px) calc(100% + 2px),
            calc(100% - 2px) calc(100% + 2px),
            
            /* Bordure du bas 3D */
            2px calc(100% + 2px),
            2px calc(100% + 4px),
            
            /* Coin externe bas gauche  */
            4px calc(100% + 4px),
            4px calc(100% + 2px),
            2px calc(100% + 2px),
            2px 100%,
            
            2px 100%,
            2px calc(100% - 2px),
            2px calc(100% - 2px),
            0% calc(100% - 2px)
          );
        }

       
        .pixel-frame-small::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background: #3F5FB7;
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
        .frame-content-small {
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
          font-size: 16px;
          color: #FFFFFF;
          text-align: center;
          line-height: 24px;
          letter-spacing: 0px;
          user-select: none;
          pointer-events: none;
          position: relative;
          z-index: 10;
          font-weight: normal;
          font-family : 'Silkscreen';          
        }

        /* Barre d'ombre intégrée */
        .internal-shadow-bar {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 64px;
          height: 10px;
          display: flex;
          align-items: flex-end;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow-bar .pixel-corner {
          width: 0;
          height: 7px;
          display: inline-block;
          position: relative;
        }

        .internal-shadow-bar .pixel-corner.left::before,
        .internal-shadow-bar .pixel-corner.right::before {
          content: '';
          display: block;
          position: absolute;
          width: 5px;
          height: 3px;
          background: transparent;
        }

        .internal-shadow-bar .pixel-corner.left::before {
          left: -4px;
          top: 0;
          background: 
            linear-gradient(to bottom, #2F438C 0 4px, transparent 4px 12px),
            linear-gradient(to right, #2F438C 0 4px, transparent 4px 12px);
        }

        .internal-shadow-bar .pixel-corner.right::before {
          right: -4px;
          top: 0;
          background: 
            linear-gradient(to bottom, #2F438C 0 4px, transparent 4px 12px),
            linear-gradient(to left, #2F438C 0 4px, transparent 4px 12px);
        }

        .internal-shadow-bar .bar {
          flex: 1;
          height: 4.5px;
          background: #2F438C;
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }

        .internal-shadow-bar .bar::before,
        .internal-shadow-bar .bar::after {
          content: '';
          position: absolute;
          width: 0px;
          height: 0px;
          background: #001A5C;
          bottom: -3px;
        }

        .internal-shadow-bar .bar::before {
          left: 0;
        }

        .internal-shadow-bar .bar::after {
          right: 0;
        }

        

        /* Changement au clic */
        .pixel-frame-small:active::after {
          transform: translateY(4px); 
          background: #2A4A9F;
        }
          .button-text:active::after {
          transform: translateY(4px);
          }

        .pixel-frame-small:active::before {
          background: #001A5C;
        }

        .pixel-frame-small:active .frame-content-small {
          background: transparent;
          transform: translateY(4px);
        }
          .frame-content-small {
            transition: transform 0.1s ease-in-out;
        }

        .pixel-frame-small:active .button-text {
           transform: translateY(1px); 
        }

        .pixel-frame-small:active .internal-shadow-bar {
          opacity: 0;
          transform: translateX(-50%) scale(0.8);
        }

        /* Effet hover pour feedback visuel */
        .pixel-frame-small:hover::after {
          background: #4A6BC7;
        }

        .pixel-frame-small:hover::before {
          background: #0A2A8A;
        }
          .pixel-frame-disabled {
  filter: grayscale(100%);
  cursor: not-allowed;
  opacity: 0.6;
}

      `}</style>
         </div>
         </div> 
       ) : (
      
  <div className="pixel-frame-small pixel-frame-disabled pointer-events-none">
  <div className="frame-content-small bg-[#4C505B]">
    <span className="text-[16px] text-[#FFFFFF] font-Silkscreen filter:none">???</span>
  </div>
  <div className="internal-shadow-bar opacity-40">
    <span className="pixel-corner left"></span>
    <span className="bar"></span>
    <span className="pixel-corner right"></span>
  </div>
</div>

  )}
          </li>
        ))}
      </ul>

<img src="/borderChapter/border.png" alt="" className='bg-[#0F172A] flex' />

</div>
</div>
</section>
);


}
export default Chapter;