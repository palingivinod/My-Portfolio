import { AcademicCapIcon, BookOpenIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-black p-4 sm:p-6">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent" style={{ WebkitTextStroke: '1px white' }}>
        Educational Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Bachelor's Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
          <div className="flex items-center mb-4">
            <AcademicCapIcon className="h-8 w-8 text-yellow-400 mr-3" />
            <h2 className="text-xl font-semibold text-white">Bachelor of CSE (AIML)</h2>
          </div>
          <p className="text-gray-300 mb-2">MVGR College of Engineering, Vizianagaram</p>
          <p className="text-gray-200 font-medium mt-4">
            CGPA: <span className="text-yellow-400">8.34</span> (Pursuing)
          </p>
          <div className="mt-auto pt-4 border-t border-gray-600"> 
            <p className="text-sm text-gray-200">2022 - Present</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
          <div className="flex items-center mb-4">
            <BookOpenIcon className="h-8 w-8 text-green-400 mr-3" />
            <h2 className="text-xl font-semibold text-white">Intermediate (MPC)</h2>
          </div>
          <p className="text-gray-300 mb-2">MPS Junior College, Mandapeta</p>
          <p className="text-gray-200 font-medium mt-4">
            Percentage: <span className="text-green-400">92</span>
          </p>
          <div className="mt-auto pt-4 border-t border-gray-600">
            <p className="text-sm text-gray-200">2020 - 2022</p>
          </div>
        </div>

     
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-amber-400/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
          <div className="flex items-center mb-4">
            <TrophyIcon className="h-8 w-8 text-amber-400 mr-3" />
            <h2 className="text-xl font-semibold text-white">SSC (10th Grade)</h2>
          </div>
          <p className="text-gray-300 mb-2">Sri Santhi Convent [E.M] High School, Mandapeta</p>
          <p className="text-gray-200 font-medium">
            Percentage: <span className="text-amber-400">91</span>
          </p>
          <div className="mt-auto pt-4 border-t border-gray-600">
            <p className="text-sm text-gray-200">2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
