
import { AcademicCapIcon, BookOpenIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-black p-4 sm:p-6">
      
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent" style={{ WebkitTextStroke: '1px white' }}>
        Educational Details
      </h1>

  
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center items-center md:items-stretch">
       
        <div className="w-full sm:w-auto bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-yellow-400 border border-white/20 hover:border-green-400 transition-all duration-300 ease-in-out transform hover:scale-[1.02] max-w-md">
          <div className="flex items-center mb-3 sm:mb-4">
            <AcademicCapIcon className="h-7 w-7 sm:h-8 sm:w-8 text-yellow-400 mr-2 sm:mr-3" />
            <h2 className="text-lg sm:text-xl font-semibold text-white">Bachelor of CSE (AIML)</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 mb-2">MVGR College of Engineering, Vizianagaram</p>
          <p className="text-sm sm:text-base text-gray-200 font-medium">
            CGPA: <span className="text-yellow-400">8.34</span> (Pursuing)
          </p>
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-600">
            <p className="text-xs sm:text-sm text-gray-400">2022 - Present</p>
          </div>
        </div>

   
        <div className="w-full sm:w-auto bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-green-400 border border-white/20 hover:border-blue-400 transition-all duration-300 ease-in-out transform hover:scale-[1.02] max-w-md">
          <div className="flex items-center mb-3 sm:mb-4">
            <BookOpenIcon className="h-7 w-7 sm:h-8 sm:w-8 text-green-400 mr-2 sm:mr-3" />
            <h2 className="text-lg sm:text-xl font-semibold text-white">Intermediate (MPC)</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 mb-2">MPS Junior College, Mandapeta</p>
          <p className="text-sm sm:text-base text-gray-200 font-medium">
            CGPA: <span className="text-green-400">9.2</span>
          </p>
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-600">
            <p className="text-xs sm:text-sm text-gray-400">2020 - 2022</p>
          </div>
        </div>

  
        <div className="w-full sm:w-auto bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-amber-400 border border-white/20 hover:border-amber-400 transition-all duration-300 ease-in-out transform hover:scale-[1.02] max-w-md">
          <div className="flex items-center mb-3 sm:mb-4">
            <TrophyIcon className="h-7 w-7 sm:h-8 sm:w-8 text-amber-400 mr-2 sm:mr-3" />
            <h2 className="text-lg sm:text-xl font-semibold text-white">SSC (10th Grade)</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 mb-2">Sri Santhi Convent [E.M] High School, Mandapeta</p>
          <p className="text-sm sm:text-base text-gray-200 font-medium">
            CGPA: <span className="text-amber-400">9.1</span>
          </p>
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-600">
            <p className="text-xs sm:text-sm text-gray-400">2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
