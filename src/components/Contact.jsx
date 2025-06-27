import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-8 px-4 sm:px-6 lg:px-8">
  
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: 0
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [0, Math.random() * 1.5 + 0.5, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Details
        </motion.h1>
        
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Name Card */}
            <motion.div 
              className="bg-gradient-to-br from-blue-900/80 to-blue-700/80 rounded-lg p-4 sm:p-6 shadow-lg border border-blue-400/20 hover:border-blue-300 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-blue-500/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-blue-100 mb-1">Name</h2>
                  <p className="text-sm sm:text-base md:text-lg text-white font-medium truncate">Palingi Vinod</p>
                </div>
              </div>
            </motion.div>


            <motion.div 
              className="bg-gradient-to-br from-purple-900/80 to-purple-700/80 rounded-lg p-4 sm:p-6 shadow-lg border border-purple-400/20 hover:border-purple-300 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-purple-500/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-purple-100 mb-1">Email</h2>
                  <a 
                    href="mailto:palingivinod2004@gmail.com" 
                    className="text-sm sm:text-base md:text-lg text-white hover:underline font-medium truncate block"
                  >
                    palingivinod2004@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-emerald-900/80 to-emerald-700/80 rounded-lg p-4 sm:p-6 shadow-lg border border-emerald-400/20 hover:border-emerald-300 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-emerald-500/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-emerald-100 mb-1">Phone</h2>
                  <a 
                    href="tel:+917793976177" 
                    className="text-sm sm:text-base md:text-lg text-white hover:underline font-medium truncate block"
                  >
                    +91 7793976177
                  </a>
                </div>
              </div>
            </motion.div>

    
            <motion.div 
              className="bg-gradient-to-br from-cyan-900/80 to-cyan-700/80 rounded-lg p-4 sm:p-6 shadow-lg border border-cyan-400/20 hover:border-cyan-300 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-cyan-500/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-cyan-100 mb-1">LinkedIn</h2>
                  <a 
                    href="https://linkedin.com/in/palingi-vinod" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm sm:text-base md:text-lg text-white hover:underline font-medium truncate block"
                  >
                    linkedin.com/in/palingi-vinod
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-gray-900/80 to-gray-700/80 rounded-lg p-4 sm:p-6 shadow-lg border border-gray-400/20 hover:border-gray-300 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-gray-500/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-100 mb-1">GitHub</h2>
                  <a 
                    href="https://github.com/palingivinod" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm sm:text-base md:text-lg text-white hover:underline font-medium truncate block"
                  >
                    github.com/palingivinod
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
