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
          width: 112px; 
          height: 36px; 
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
          bottom: -6px;
          background: #3C3A4F;
          transition: background 0.1s ease-in-out;
          clip-path: polygon(
            0% 8px, 
            2px 8px, 
            2px 6px, 
            6px 6px, 
            6px 2px,
            8px 2px, 
            8px 0%,
            calc(100% - 8px) 0%,
            calc(100% - 8px) 2px,
            calc(100% - 6px) 2px,
            calc(100% - 6px) 6px,
            calc(100% - 2px) 6px,
            calc(100% - 2px) 8px,
            100% 8px,
            
            100% calc(100% - 8px),
            calc(100% - 2px) calc(100% - 8px),
            calc(100% - 2px) calc(100% - 6px),
            calc(100% - 6px) calc(100% - 6px),
            calc(100% - 6px) calc(100% - 2px),
            calc(100% - 8px) calc(100% - 2px),
            calc(100% - 8px) 100%,
            
            calc(100% - 2px) 100%,
            calc(100% - 2px) calc(100% + 6px),
            
            calc(100% - 6px) calc(100% + 6px),
            calc(100% - 6px) calc(100% + 2px),
            calc(100% - 2px) calc(100% + 2px),
            
            2px calc(100% + 2px),
            2px calc(100% + 6px),
            
            6px calc(100% + 6px),
            6px calc(100% + 2px),
            2px calc(100% + 2px),
            2px 100%,
            
            8px 100%,
            8px calc(100% - 2px),
            6px calc(100% - 2px),
            6px calc(100% - 6px),
            2px calc(100% - 6px),
            2px calc(100% - 8px),
            0% calc(100% - 8px)
          );
        }

        .pixel-frame-button::after {
          content: '';
          position: absolute;
          top: 6px; 
          left: 6px;
          right: 6px;
          bottom: 0.3px;
          background: #9947EB;
          transition: background 0.1s ease-in-out;
        }

        .frame-content-button {
          position: absolute;
          top: 11px; 
          left: 11px; 
          right: 11px; 
          bottom: 11px; 
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border-radius: 2px;
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
          font-size: 11px; /* Réduction proportionnelle */
          color: #FFFFFF;
          text-align: center;
          line-height: 1;
          letter-spacing: 1.6px; /* Ajusté */
          user-select: none;
          pointer-events: none;
          position: relative;
          z-index: 10;
          font-weight: normal;
          top: 5px; /* Ajusté */
        }

        .internal-shadow {
          position: absolute;
          bottom: -4px; /* Ajusté */
          left: 50%;
          transform: translateX(-50%);
          width: 96px; /* Ajusté */
          height: 10px; /* Ajusté */
          display: flex;
          align-items: flex-end;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow .bar {
          flex: 1;
          height: 5px; /* Ajusté */
          background: #7239AB;
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }

        .internal-shadow-top {
          position: absolute;
          top: 2px; /* Ajusté */
          left: 50%;
          transform: translateX(-50%);
          width: 96px; /* Ajusté */
          height: 6px; /* Ajusté */
          display: flex;
          align-items: flex-start;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow-top .bar {
          flex: 1;
          height: 4px; /* Ajusté */
          background: #4D2476;
          margin-top: 0;
          position: relative;
          z-index: 1;
        }

        .internal-shadow-left {
          position: absolute;
          left: 2px; /* Ajusté */
          top: 21px; /* Ajusté */
          transform: translateY(-50%);
          width: 8px; /* Ajusté */
          height: 24px; /* Ajusté */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow-left .bar {
          flex: 1;
          width: 4px; /* Ajusté */
          background: #7239AB;
          margin-left: 0;
          position: relative;
          z-index: 1;
        }

        .internal-shadow-right {
          position: absolute;
          right: 6px; /* Ajusté */
          top: 21px; /* Ajusté */
          transform: translateY(-50%);
          width: 9px; /* Ajusté */
          height: 29px; /* Ajusté */
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow-right .bar {
          flex: 1;
          width: 4px; /* Ajusté */
          background: #7239AB;
          margin-right: 0;
          position: relative;
          z-index: 1;
        }

        .internal-shadow-right-extra {
          position: absolute;
          right: 2px; /* Ajusté */
          top: 21px; /* Ajusté */
          transform: translateY(-50%);
          width: 9px; /* Ajusté */
          height: 24px; /* Ajusté */
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          z-index: 2;
          transition: all 0.1s ease-in-out;
        }

        .internal-shadow-right-extra .bar {
          flex: 1;
          width: 3px; /* Ajusté */
          background: #4D2476;
          margin-right: 0;
          position: relative;
          z-index: 1;
        }

        .internal-shadow .pixel-corner,
        .internal-shadow-top .pixel-corner {
          width: 0;
          height: 6px; /* Ajusté */
        }

        .internal-shadow-left .pixel-corner,
        .internal-shadow-right .pixel-corner,
        .internal-shadow-right-extra .pixel-corner {
          width: 6px; /* Ajusté */
          height: 0;
        }

        .internal-shadow .bar::before {
          left: 0;
        }

        .internal-shadow .bar::after {
          right: 0;
        }

        .pixel-frame-button:active::after {
          transform: translateY(3px); /* Ajusté */
          background: #7239AB;
        }

        .pixel-frame-button:active::before {
          background: #2A2A3A;
        }

        .pixel-frame-button:active .frame-content-button {
          background: transparent;
          transform: translateY(4px); /* Ajusté */
        }

        .pixel-frame-button:active .button-text {
           transform: translateY(2px); 
        }

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

        .pixel-frame-button:hover::after {
          background: #A855F7;
        }

        .pixel-frame-button:hover::before {
          background: #4A4A5F;
        }

        .btn {
          position: absolute;
          width: 3px; /* Ajusté */
          height: 3px; /* Ajusté */
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

        .btn1 {
          top: -2px;
          left: 2px;
        }

        .btn2 {
          top: -5px; /* Ajusté */
          left: 2px;
        }

        .btn3 {
          top: -2px;
          left: -2px;
        }

        .btn4 {
          top: 2px;
          left: -2px;
        }

        .btn5 {
          top: 2px;
          left: -5px; /* Ajusté */
        }
      `}</style>
    </div>
  )
}