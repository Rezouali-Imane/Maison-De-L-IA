
import { Play } from 'react-feather';

export function LessonContent () {

    return (
        <div className="flex-1 flex items-center justify-center">
          {/* Video/Content Area */}
          <div className="w-full max-w-3xl">
              <div className="bg-slate-900 border-4  border-[rgba(63,95,183,1)] rounded-lg overflow-hidden shadow-2xl">
                  <div className=" border-[rgba(63,95,183,1)] text-white px-6 py-3 font-bold text-lg flex items-center gap-3">
                      <Play size={20} />
                      LESSON CONTENT
                  </div>
        
                    {/* Video Placeholder */}
                    <div className="aspect-video bg-slate-800 flex items-center justify-center  border-b-2 border-[rgba(63,95,183,1)]">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[rgba(63,95,183,1)] rounded-full flex items-center justify-center mb-4 mx-auto">
                              <Play size={32} className="text-black ml-1" />
                            </div>
                            <div className="text-xl font-bold text-[rgba(63, 95, 183, 1)] mb-2">JavaScript Variables</div>
                            <div className="text-sm text-gray-400">Click to start the lesson</div>
                          </div>
                     </div>      
              </div>
          </div>
       </div>
    )

}