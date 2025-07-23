import React from 'react';

const Footer = () => (
  <footer className="bg-[rgba(15,23,42,1)] border-t border-[rgba(51,65,85,1)] px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

           <div className='h-[200] w-[200] content-center' > <h3>LoGo</h3></div>

            <div className="space-y-4">
              <h3 className="text-[rgba(255,251,44,1)] font-bold text-xs">LEARNING</h3>
              <ul className="space-y-2 text-gray-400 font-mulish">
                <li>
                  <button className="hover:text-white transition-colors">
                    Courses
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Challenges
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Games
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Certifications
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[rgba(255,251,44,1)] font-bold text-xs">COMMUNITY</h3>
              <ul className="space-y-2 text-gray-400 font-mulish">
                <li>
                  <button className="hover:text-white transition-colors">
                    Events
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Forum
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Discord
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Mentorship
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[rgba(255,251,44,1)] font-bold text-xs">CONTACT</h3>
              <ul className="space-y-2 text-gray-400 font-mulish">
                <li>University of Bejaia</li>
                <li>06000 Béjaia, Algeria</li>
                <li>contact@maisonai-bejaia.dz</li>
                <li>+213 43 XX XX XX</li>
              </ul>
            </div>

           
          </div>

          
        </div>
      </footer>
);

export default Footer;
