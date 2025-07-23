
//import { Play } from 'react-feather';
import { useRef } from "react";

export function LessonContent() {
  const contentRef = useRef(null);

  const handleFullScreen = () => {
    if (contentRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        contentRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <div ref={contentRef} className="w-full max-w-3xl">
        <div className="bg-slate-900 border-4 border-[rgba(63,95,183,1)] rounded-lg overflow-hidden shadow-2xl">
          {/* Title */}
          <div className="border-[rgba(63,95,183,1)] text-white px-6 py-3 font-bold text-lg flex items-center gap-3">
            📘 LESSON CONTENT
          </div>

          {/* Content */}
          <div className="aspect-video bg-slate-800 flex items-center justify-center border-b-2 border-[rgba(63,95,183,1)] p-4 text-white overflow-y-auto">
            <p className="text-sm leading-relaxed">
              Java Script is a good language BlaBla BLa Bla 
              <br /><br />
              Example: <code className="text-yellow-400">let me = 20 ;</code> — this stores 20 as a variable.
              <br /><br />
              This is just a temp ok (whatever)
            </p>
          </div>

          {/* Fullscreen Button */}
          <div className="flex justify-end p-4 bg-slate-900">
            <button
              onClick={handleFullScreen}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow transition"
            >
              Fullscreen 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}