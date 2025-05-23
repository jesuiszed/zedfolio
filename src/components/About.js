import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

const About = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    { icon: FaCode, number: "2+", label: "Years Experience", color: "#3B82F6" },
    { icon: FaRocket, number: "20+", label: "Projects Completed", color: "#10B981" },
    { icon: FaUsers, number: "10+", label: "Happy Clients", color: "#F59E0B" },
    { icon: FaLightbulb, number: "50+", label: "Ideas Realized", color: "#8B5CF6" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      id="about"
      className={`relative py-20 ${
        isDark ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' 
               : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
      } overflow-hidden`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-0 right-0 w-96 h-96 rounded-full 
            ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'} blur-3xl`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.p 
              variants={itemVariants}
              className={`text-lg sm:text-xl leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {t('about.description')}
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className={`text-2xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                What I Love Doing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['AI Development', 'Prompt Engineering', 'Full Stack Solutions', 'Machine Learning'].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={`p-4 rounded-lg ${
                      isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'
                    } backdrop-blur-sm`}
                  >
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: isDark ? "0 20px 40px rgba(0,0,0,0.3)" : "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className={`p-6 rounded-2xl text-center ${
                    isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
                  } backdrop-blur-sm shadow-xl`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <Icon 
                      className="text-4xl mx-auto"
                      style={{ color: stat.color }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                    className={`text-3xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {stat.number}
                  </motion.div>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
