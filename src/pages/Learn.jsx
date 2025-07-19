import { useEffect, useState, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import imagec from '../image/course1_1.png';
import studentImage from '../image/student.png';
import studentImage2 from '../image/student2.jpg';
import studentImage3 from '../image/student3.jpg';
import CourseCard from "../components/CourseCard";



const courses = [
  {
    title: "HTML",
    rating: 5,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 34,
    category: "webDev",
  },
  {
    title: "CSS",
    rating: 5,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 243,
    category: "webDev",
  },
  {
    title: "JAVASCRIPT",
    rating: 5,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 243,
    category: "webDev",
  },
  {
    title: "REACT",
    rating: 5,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 400,
    category: "webDev",
  },
  {
    title: "PHP",
    rating: 5,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 34,
    category: "webDev",
  },
  {
    title: "KOTLIN",
    rating: 5,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 34,
    category: "webDev",
  },
  {
    title: "GIT",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 403,
    category: "devOps",
  },

   {
    title: "GIT HUB",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 403,
    category: "devOps",
  },
   {
    title: "DOCKER",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 403,
    category: "devOps",
  },
   {
    title: "FIGMA",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 403,
    category: "devOps",
  },
   {
    title: "POSTMAN",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 403,
    category: "devOps",
  },
   {
    title: "KATALON",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 403,
    category: "devOps",
  },
 {
    title: "ANSIBLE",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 403,
    category: "devOps",
  },


   {
    title: "COMPUTER VISION PROJECTS",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 203,
    category: "IA",
  },
   {
    title: "HELLO WORLD",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 1003,
    category: "IA",
  },
   {
    title: "DATA PROCESSING",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 43,
    category: "IA",
  },
  {
    title: "COPUTER DATA",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 40,
    category: "IA",
  },
   {
    title: "MACHINE LEARNING",
    rating: 3,
    weeks: 5,
    modules: 10,
    level: "Advanced",
    students: 40,
    category: "IA",
  },
  
]

const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: studentImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat Lorem ipsum dolor sit amet,consectetur adipiscing elit. Quisque feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat.",
  },
  {
    id: 2,
    name: "Maria ABD",
    image: studentImage2,
    text: "I learned a lot in just a few weeks. The lessons are interactive and fun. I'm already applying what I learned!.",
  },
  {
    id: 3,
    name: "Ali Ahmed",
    image: studentImage,
    text: "Clear explanations,The content is well-structured and easy to follow, great support from the instructors, and a very engaging learning experience. Thank you!",
  },
   {
    id: 4,
    name: "Mina Maroua",
    image: studentImage3,
    text: "I learned a lot in just a few weeks. The lessons are interactive and fun. I'm already applying what I learned!.",
  },
]

const filters = ["All","Python", "Web Development", "Data Science", "Tools", "ML"]

export default function InteractiveCoursesPage() {

  const [activeFilter, setActiveFilter] = useState("All")

  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % reviews.length)
    }, 2100)
  }

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoScroll()
    return () => stopAutoScroll()
  }, [])

  const handlePrev = () => setIndex(index === 0 ? reviews.length - 1 : index - 1)
  const handleNext = () => setIndex((index + 1) % reviews.length)

  return (
    <div className="min-h-screen bg-[rgba(2,14,30,1)] text-white">
      {/* Hero Section */}
    
      <section
        className="relative bg-gradient-to-r from-[#030F1F] via-[#061B31] to-[#030E1D] h-auto md:h-[318px]"
     
      >
        <div className="flex h-full  md:flex-row gap-8 items-start">
          
          <div className="flex-none">
            <img
              src={imagec}
              alt="Robot mascot with laptop"
              className="object-contain w-[404px] h-[316px] sm:w-[300px] sm:h-[250px] md:w-[404px] md:h-[316px]"
            />
          </div>

          
          <div className="flex-1 space-y-6 mt-16 md:mt-16 text-center md:text-left">
            <div className="space-y-4">
               <h1 className=" text-[rgba(148,163,184,1)] sm:text-xl md:text-2xl tracking-[2px] font-normal text-lg  leading-tight mb-6">
                  Explore our
              </h1>
              <h1 className="text-4xl text-[rgba(255,251,44,1)] md:text-1xl  sm:text-xl tracking-[8px] sm:tracking-[4px] md:tracking-[6px]  font-extrabold leading-tight mb-10">
                INTERACTIVE COURSES
              </h1>
              <p className="font-sans text-[18px] sm:text-base md:text-[18px] font-medium  leading-[28px] tracking-[1px] font-secondary text-[rgba(115,128,149,1)] pr-32 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat
                turpis eget velit ullamcorper vestibulum. Duis sit amet gravida urna.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Courses Section */}
      <section className="px-16 py-16">
        <div className=" mx-auto">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-2xl font-medium text-[rgba(255,251,44,1)]  tracking-[6px]">ALL COURSES</h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 pb-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 font-semibold font-mulish text-[16px] ${
                    activeFilter === filter
                      ? "text-[rgba(255,251,44,1)] border-[rgba(255,251,44,1)]"
                      : "border-[rgba(128,91,178,1)] text-gray-300 hover:border-[rgba(255,251,44,1)] hover:text-[rgba(255,251,44,1)] font-normal"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Courses*/}

           <div className="overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex gap-6 w-max mt-12 md:mt-8 px-4">

                {courses
                      .filter((course) => course.category === "webDev")
                      .map((course, index) => (
                        <CourseCard key={index} course={course} onEnroll={""} />
                    ))}
              </div>
            </div>

            <div className="overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex gap-6 w-max mt-12 md:mt-8 px-4 ">

               {courses
                      .filter((course) => course.category === "devOps")
                      .map((course, index) => (
                        <CourseCard key={index} course={course} onEnroll={""} />
                    ))}
              </div>
            </div>

            <div className="overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex gap-6 w-max mt-12 md:mt-8 px-4">

                {courses
                      .filter((course) => course.category === "IA")
                      .map((course, index) => (
                        <CourseCard key={index} course={course} onEnroll={""} />
                    ))}
              </div>
            </div>
           

          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      
       <section
      className="px-4 py-16 bg-[rgba(2,14,30,1)] "
      
    >
      <div className="max-w-4xl h-96 mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-2xl text-[rgba(255,251,44,1)] tracking-[3px]">STUDENT'S REVIEWS</h2>

        <div className="space-y-6 transition-all duration-500"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}>
          <div className="w-20 h-20 mx-auto rounded-full bg-slate-800 flex items-center justify-center">
            <img src={reviews[index].image} alt="Student avatar" className="w-20 h-20 rounded-full object-cover" />
          </div>

          <div className="space-y-2 h-40">
            <h3 className="text-xl font-medium tracking-[3px]">{reviews[index].name.toUpperCase()}</h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg font-mulish">
              {reviews[index].text}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button onClick={handlePrev} className="text-[rgba(255,251,44,1)] hover:text-white transition">
              <ChevronLeft size={20} />
            </button>
            <span className="text-[rgba(255,251,44,1)] tracking-wide text-xs font-mulish ">
              {index + 1} / {reviews.length}
            </span>
            <button onClick={handleNext} className="text-[rgba(255,251,44,1)] hover:text-white transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
       </section>

      {/* Feedback Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-2xl text-[rgba(255,251,44,1)] tracking-[3px]">FEEDBACK AND SUGGESTIONS</h2>

            <div className="max-w-md mx-auto relative">
              <textarea
                placeholder="Tape here ..."
                className="w-full h-16 bg-transparent border-2 rounded-3xl border-[rgba(255,251,44,1)] text-white p-4 pr-24 focus:outline-none resize-none scrollbar-hide font-mulish"
              />

              {/* Send Button */}
              <button className="absolute bottom-11 right-2 w-20 h-12  bg-slate-800 content-center text-[10px] tracking-[3px] text-white rounded-full text-xs hover:bg-[rgba(63,95,183,1)] transition mx-auto ">
                SEND
              </button>

              <p className="text-[rgba(255,251,44,1)] text-[10px] mt-4 tracking-[2px]">YOUR OPINIONS AND SUGGESTIONS MATTER</p>
            </div>
          </div>
        </section>



      <style jsx> 
        {`.pixel-border {
            
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
            
            /* Côté droit */
             100% calc(100% - 3px),
              calc(100% - 3px) calc(100% - 3px),
              calc(100% - 2px) calc(100% - 3px),
              calc(100% - 3px) calc(100% - 3px),
              calc(100% - 3px) calc(100% - 2px),
              calc(100% - 3px) 100%,
            
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


          }`}
      </style>
    </div>
  )
}
