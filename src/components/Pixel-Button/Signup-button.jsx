export default function PixelButtonSignup({ children, label }) {
 return (
    <div className="flex items-center justify-center ">
      <div className="space-y-8">
        <div className="flex flex-col items-center space-y-6">
         
          <div className="pixel-frame-button">
            <div className="frame-content-button">
              <div className="button-content">
                
                <div className="button-structure">

                  <div className="btn btn5"></div>
                  <div className="btn btn4"></div>
                  <div className="btn btn3"></div>
                  <div className="btn btn1"></div>
                  <div className="btn btn2"></div>
                </div>


                <span className="button-label">{children || label || "Button"}</span>
              </div>
            </div>

            
            <div className="internal-shadow">
              <span className="pixel-corner left"></span>
              <span className="bar"></span>
              <span className="pixel-corner right"></span>
            </div>

          
            <div className="internal-shadow-top">
              <span className="pixel-corner left"></span>
              <span className="bar"></span>
              <span className="pixel-corner right"></span>
            </div>

           
            <div className="internal-shadow-left">
              <span className="pixel-corner top"></span>
              <span className="bar"></span>
              <span className="pixel-corner bottom"></span>
            </div>

           
            <div className="internal-shadow-right">
              <span className="pixel-corner top"></span>
              <span className="bar"></span>
              <span className="pixel-corner bottom"></span>
            </div>

            <div className="internal-shadow-right-extra">
              <span className="pixel-corner top"></span>
              <span className="bar"></span>
              <span className="pixel-corner bottom"></span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
        
        
        .pixel-frame-button-container {
          position: relative;
        }

        .pixel-frame-button {
          position: relative;
          width: 170px; 
          height: 55px; 
          background: transparent;
          z-index: 1;
          cursor: pointer;
          transition: transform 0.1s ease-in-out;
        }

      
        .pixel-frame-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: -9px; 
          background: #3C3A4F;
          transition: background 0.1s ease-in-out;
          clip-path: polygon(
            0% 13px, 
            4px 13px, 
            4px 9px, 
            9px 9px, 
            9px 4px,
            13px 4px, 
            13px 0%,
            calc(100% - 13px) 0%,
            calc(100% - 13px) 4px,
            calc(100% - 9px) 4px,
            calc(100% - 9px) 9px,
            calc(100% - 4px) 9px,
            calc(100% - 4px) 13px,
            100% 13px,
            
           
              100% calc(100% - 13px),
              calc(100% - 4px) calc(100% - 13px),
              calc(100% - 4px) calc(100% - 9px),
              calc(100% - 9px) calc(100% - 9px),
              calc(100% - 9px) calc(100% - 4px),
              calc(100% - 13px) calc(100% - 4px),
              calc(100% - 13px) 100%,
            
           
            calc(100% - 4px) 100%,
            calc(100% - 4px) calc(100% + 9px),
            
            
            calc(100% - 9px) calc(100% + 9px),
            calc(100% - 9px) calc(100% + 4px),
            calc(100% - 4px) calc(100% + 4px),
            
            
            4px calc(100% + 4px),
            4px calc(100% + 9px),
            
            
            9px calc(100% + 9px),
            9px calc(100% + 4px),
            4px calc(100% + 4px),
            4px 100%,
            
             13px 100%,
            13px calc(100% - 4px),
            9px calc(100% - 4px),
            9px calc(100% - 9px),
            4px calc(100% - 9px),
            4px calc(100% - 13px),
            0% calc(100% - 13px)
          );
        }

     
        .pixel-frame-button::after {
          content: '';
          position: absolute;
          top: 9px; 
          left: 9px;
          right: 9px;
          bottom: 0.3px;
          background: #9947EB;
          transition: background 0.1s ease-in-out;
        }

        .frame-content-button {
          position: absolute;
          top: 18px; 
          left: 18px;
          right: 18px;
          bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border-radius: 3px;
          transition: transform 0.1s ease-in-out;
          z-index: 5;
        }

        
        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
           
        }
        
        .button-label {
          font-family: "Press Start 2P";
          font-size: 18px; 
          color: #FFFFFF;
          text-align: center;
          line-height: 1;
          letter-spacing: 4px;
          user-select: none;
          pointer-events: none;
          position: relative;
          z-index: 10;
          font-weight: normal;
          top: 8px;
        }

      
        .internal-shadow {
          position: absolute;
          bottom: -6px; 
          left: 50%;
          transform: translateX(-50%);
          width: 144px; 
          height: 14px; 
          display: flex;
          align-items: flex-end;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow .bar {
          flex: 1;
          height: 8px; 
          background: #7239AB;
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }

       
        .internal-shadow-top {
          position: absolute;
          top: 4px; 
          left: 50%;
          transform: translateX(-50%);
          width: 145px;
          height: 10px;
          display: flex;
          align-items: flex-start;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow-top .bar {
          flex: 1;
          height: 6px; 
          background: #4D2476;
          margin-top: 0;
          position: relative;
          z-index: 1;
        }

        /* Barre d'ombre de gauche  */
        .internal-shadow-left {
          position: absolute;
          left: 4px; 
          top: 32px; 
          transform: translateY(-50%);
          width: 13px;
          height: 38px; 
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow-left .bar {
          flex: 1;
          width: 6px; 
          background: #7239AB;
          margin-left: 0;
          position: relative;
          z-index: 1;
        }

        /* Barre d'ombre de droite  */
        .internal-shadow-right {
          position: absolute;
          right: 9px; 
          top:32px; 
          transform: translateY(-50%);
          width: 14px;
          height: 46px; 
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow-right .bar {
          flex: 1;
          width: 6px; 
          background: #7239AB;
          margin-right: 0;
          position: relative;
          z-index: 1;
        }

       
        .internal-shadow-right-extra {
          position: absolute;
          right: 4px; 
          top: 32px; 
          transform: translateY(-50%);
          width: 14px;
          height: 38px; 
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow-right-extra .bar {
          flex: 1;
          width: 5px; 
          background: #4D2476;
          margin-right: 0;
          position: relative;
          z-index: 1;
        }

      
        .internal-shadow .pixel-corner,
        .internal-shadow-top .pixel-corner {
          width: 0;
          height: 10px; 
        }

        .internal-shadow-left .pixel-corner,
        .internal-shadow-right .pixel-corner,
        .internal-shadow-right-extra .pixel-corner {
          width: 10px;
          height: 0;
        }

        .internal-shadow .bar::before {
          left: 0;
        }

        .internal-shadow .bar::after {
          right: 0;
        }

        /* Changement au clic */
        .pixel-frame-button:active::after {
          transform: translateY(5px);
          background: #7239AB;
        }

        .pixel-frame-button:active::before {
          background: #2A2A3A;
        }

        .pixel-frame-button:active .frame-content-button {
          background: transparent;
          transform: translateY(6px); 
        }

        .pixel-frame-button:active .button-text {
           transform: translateY(2px); 
        }

        /* Toutes les barres d'ombre disparaissent quand le bouton est pressé */
        .pixel-frame-button:active .internal-shadow,
        .pixel-frame-button:active .internal-shadow-top,
        .pixel-frame-button:active .internal-shadow-left,
        .pixel-frame-button:active .internal-shadow-right,
        .pixel-frame-button:active .internal-shadow-right-extra {
          opacity: 0;
          transform: translateX(-50%) scale(0.8);
        }

        .pixel-frame-button:active .internal-shadow-left,
        .pixel-frame-button:active .internal-shadow-right,
        .pixel-frame-button:active .internal-shadow-right-extra {
          transform: translateY(-50%) scale(0.8);
        }

        /* Effet hover pour feedback visuel */
        .pixel-frame-button:hover::after {
          background: #A855F7;
        }

        .pixel-frame-button:hover::before {
          background: #4A4A5F;
        }


        /*shadow*/
          

          .btn {
            position: absolute;
            width: 5px;
            height: 5px;
            background-color: #FFFFFF;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .btn:hover {
            background-color: #B1B1B1B1;
          }

          .btn:active {
            background-color: #1D4ED8;
          }

          /* btn 1  */
          .btn1 {
            top: -3px;
            left: 2px;
          }

          /* btn 2 */
          .btn2 {
            top: -8px;
            left:2px;
          }

          /* btn 3 */
          .btn3 {
            top: -3px;
            left: -3px;
          }

          /* btn 4  */
          .btn4 {
            top: 2px;
            left: -3px;
          }

          /* btn 5  */
          .btn5 {
            top: 2px;
            left: -8px;
          }

      `}</style>
    </div>
  )
}
