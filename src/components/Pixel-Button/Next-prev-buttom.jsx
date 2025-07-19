export default function NextPrevButton({ children, label }) {
  return (
    <div className="flex items-center justify-center ">
      <div className="space-y-8">
        <div className="flex flex-col items-center space-y-6">
         
          <div className="pixel-frame-small">
            <div className="frame-content-small">
              <span className="button-text">{children || label || "Button"}</span>
            </div>

            
            <div className="internal-shadow-bar">
              <span className="pixel-corner left"></span>
              <span className="bar"></span>
              <span className="pixel-corner right"></span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        
      
        .pixel-frame-small-container {
          position: relative;
        }

        .pixel-frame-small {
          position: relative;
          width: 75px;
          height: 42px;
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
          bottom: -6px;
          background: #011F72;
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
            
            /* Coin externe bas gauche  */
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

        /* Contenu */
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
          font-size: 10px;
          color: #000000;
          text-align: center;
          line-height: 22.4px;
          letter-spacing: 1.5px;
          user-select: none;
          pointer-events: none;
          position: relative;
          z-index: 10;
          font-weight: normal;
          
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
      `}</style>
    </div>
  )
}
