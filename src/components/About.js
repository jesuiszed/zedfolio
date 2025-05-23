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
                {['Full Stack Development', 'AI Development', 'Problem Solving', 'Code Optimization'].map((item, index) => (
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

            {/* CV Download Button */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/cv_florian_zed.pdf"
                download="CV_Florian_Zed.pdf"
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: isDark ? "0 20px 40px rgba(59, 130, 246, 0.4)" : "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 ${
                  isDark ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                         : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('about.buttons.cv')}
              </motion.a>
              
              <motion.a
                href="https://github.com/jesuiszed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: isDark ? "0 20px 40px rgba(107, 114, 128, 0.3)" : "0 20px 40px rgba(107, 114, 128, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 backdrop-blur-sm border-2 ${
                  isDark ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                         : 'bg-black/5 border-black/10 text-gray-900 hover:bg-black/10'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {t('about.buttons.github')}
              </motion.a>
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
