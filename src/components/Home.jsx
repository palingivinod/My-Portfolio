import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Home = () => {
  const containerRef = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    });
    return controls.stop;
  }, []);

  // Particle component with improved motion
  const Particle = ({ size, left, top, delay }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const opacity = useMotionValue(0);

    useEffect(() => {
      const sequence = async () => {
        await animate(opacity, 0.8, { duration: 0.5, delay });
        animate(x, [0, 50, -30, 20, 0], {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        });
        animate(y, [0, -80, 40, -20, 0], {
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        });
        animate(opacity, [0.8, 0], {
          duration: 3,
          delay: 17,
          repeat: Infinity,
          repeatType: "reverse",
        });
      };
      sequence();
    }, []);

    return (
      <motion.div
        className="absolute rounded-full bg-white"
        style={{
          width: size,
          height: size,
          left: `${left}%`,
          top: `${top}%`,
          x,
          y,
          opacity,
        }}
      />
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white py-16 min-h-[91vh] flex mb-0"
    >
      {/* Enhanced Particle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating particles */}
        {[...Array(15)].map((_, i) => (
          <Particle
            key={`large-${i}`}
            size={`${Math.random() * 4 + 2}px`}
            left={Math.random() * 100}
            top={Math.random() * 100}
            delay={i * 0.2}
          />
        ))}

        {/* Small twinkling stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating cosmic dust */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at ${rounded}% ${rounded}%, rgba(192, 132, 252, 0.1) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center mb-0">
        {/* Profile Picture with Enhanced Glow */}
        <motion.div 
          className="relative mb-8 group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-48 h-48">
            {/* Animated glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-purple-300/10"
              animate={{
                boxShadow: [
                  '0 0 15px rgba(192, 132, 252, 0.3)',
                  '0 0 30px rgba(192, 132, 252, 0.5)',
                  '0 0 15px rgba(192, 132, 252, 0.3)',
                ],
                borderColor: [
                  'rgba(192, 132, 252, 0.1)',
                  'rgba(192, 132, 252, 0.4)',
                  'rgba(192, 132, 252, 0.1)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Profile Image */}
            <motion.div 
              className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/12.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating particles around profile */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`profile-particle-${i}`}
                className="absolute rounded-full bg-white/80"
                style={{
                  width: `${Math.random() * 3 + 2}px`,
                  height: `${Math.random() * 3 + 2}px`,
                  left: `${Math.random() * 30 + 35}%`,
                  top: `${Math.random() * 30 + 35}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 15, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Rest of your content... */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Palingi Vinod
        </motion.h1>

        <motion.h2 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent font-bold">
            MERN Stack Developer
          </span>
          <span className="mx-3 text-white/50">|</span>
          <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent font-bold">
            AI/ML Engineer
          </span>
        </motion.h2>
        <p className="text-lg mb-4">
            I'm a passionate B.Tech student from the CSE (AI & ML) branch, exploring the world of technology with a focus on Artificial Intelligence, Machine Learning, and Full-Stack Web Development. I enjoy building projects, continuously learning new skills, and developing web applications using the MERN stack.
        </p>
      </div>
    </div>
  );
};

export default Home;