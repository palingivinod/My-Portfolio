import { AcademicCapIcon, BookOpenIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Education = () => {
  return (
    <div className="h-[91vh] bg-gradient-to-br from-gray-900 via-indigo-950 to-black p-6 ">
      <h1
        className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent "
        style={{ WebkitTextStroke: '1px white' }}
      >
        Educational Details
      </h1>

      <div className="flex flex-col md:flex-row gap-7 justify-center items-stretch ">
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-2xl border border-white/20 hover:border-green-400  flex-1 max-w-md transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-yellow-400
">
          <div className="flex items-center mb-4">
            <AcademicCapIcon className="h-8 w-8 text-yellow-400 mr-3" />
            <h2 className="text-xl font-semibold text-white">Bachelor of CSE (AIML)</h2>
          </div>
          <p className="text-gray-300 mb-2">MVGR College of Engineering, Vizianagaram</p>
          <p className="text-gray-200 font-medium">
            CGPA: <span className="text-yellow-400">8.34</span> (Pursuing)
          </p>
          <div className="mt-4 pt-4 border-t border-gray-600">
            <p className="text-sm text-gray-400">2022 - Present</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-2xl hover:shadow-green-400 border border-white/20 hover:border-blue-400 transition-all duration-300 flex-1 max-w-md  ease-in-out hover:scale-110 
">
          <div className="flex items-center mb-4">
            <BookOpenIcon className="h-8 w-8 text-green-400 mr-3" />
            <h2 className="text-xl font-semibold text-white">Intermediate (MPC)</h2>
          </div>
          <p className="text-gray-300 mb-2">MPS Junior College, Mandapeta</p>
          <p className="text-gray-200 font-medium">
            CGPA: <span className="text-green-400">9.2</span>
          </p>
          <div className="mt-4 pt-4 border-t border-gray-600">
            <p className="text-sm text-gray-400">2020 - 2022</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-2xl hover:shadow-amber-400 border border-white/20  ease-in-out hover:scale-110  transition-all duration-300 flex-1 max-w-md">
          <div className="flex items-center mb-4">
            <TrophyIcon className="h-8 w-8 text-amber-400 mr-3" />
            <h2 className="text-xl font-semibold text-white">SSC (10th Grade)</h2>
          </div>
          <p className="text-gray-300 mb-2">Sri Santhi Convent [E.M] High School, Mandapeta</p>
          <p className="text-gray-200 font-medium">
            CGPA: <span className="text-amber-400">9.1</span>
          </p>
          <div className="mt-4 pt-4 border-t border-gray-600">
            <p className="text-sm text-gray-400">2020</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
