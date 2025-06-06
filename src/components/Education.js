import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaUniversity, FaCog, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const educationData = [
    {
      icon: FaGraduationCap,
      title: "Baccalauréat Scientifique",
      institution: "Lycée prive le triomphe - Fondation Lewaï",
      year: "2020",
      description: "Formation scientifique générale avec spécialisation en mathématiques et biologie",
      color: "#10B981",
      duration: "Obtenu en 2020 avec mention"
    },
    {
      icon: FaUniversity,
      title: "Classes Préparatoires Intégrées",
      institution: "École Mrocaine des Sciences de l'Ingénieur (EMSI)",
      year: "2020-2022", 
      description: "Formation intensive en mathématiques, physique, infomatique et sciences de l'ingénieur",
      color: "#3B82F6",
      duration: "2 ans"
    },
    {
      icon: FaCog,
      title: "Cycle Ingénieur",
      institution: "École Mrocaine des Sciences de l'Ingénieur (EMSI)",
      year: "2022-2025",
      description: "Spécialisation en informatique, réseaux et systèmes d'information",
      color: "#8B5CF6",
      duration: "3 ans"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
      id="education"
      className={`relative py-16 md:py-20 ${
        isDark ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900'
               : 'bg-gradient-to-br from-purple-50 via-white to-blue-50'
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
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full 
            ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full 
            ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'} blur-3xl`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Parcours <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Académique</span>
          </h2>
          <div className={`w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full`}></div>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line - Responsive positioning */}
          <div className={`absolute w-1 h-full rounded-full
            ${isDark ? 'bg-gradient-to-b from-purple-500 to-blue-500' : 'bg-gradient-to-b from-purple-400 to-blue-400'}
            left-8 md:left-1/2 md:transform md:-translate-x-1/2`}></div>

          <div className="space-y-8 md:space-y-12">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center 
                    justify-start md:${isEven ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline Dot - Responsive positioning */}
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`absolute w-8 h-8 md:w-12 md:h-12 rounded-full 
                      ${isDark ? 'bg-gray-900 border-4' : 'bg-white border-4'}
                      shadow-lg z-10 flex items-center justify-center
                      left-4 md:left-1/2 md:transform md:-translate-x-1/2`}
                    style={{ borderColor: edu.color }}
                  >
                    <Icon 
                      className="text-sm md:text-xl"
                      style={{ color: edu.color }}
                    />
                  </motion.div>

                  {/* Content Card - Responsive design */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: isDark ? "0 20px 40px rgba(0,0,0,0.3)" : "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    className={`w-full p-4 md:p-6 rounded-2xl ${
                      isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
                    } backdrop-blur-sm shadow-xl
                    ml-16 md:ml-0 md:max-w-md 
                    ${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}
                  >
                    {/* Header - Responsive layout */}
                    <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0 mb-3">
                      <motion.h3 
                        className={`text-lg md:text-xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {edu.title}
                      </motion.h3>
                      <motion.div
                        className={`self-start md:self-auto flex items-center space-x-1 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                          isDark ? 'bg-white/10 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <FaCalendarAlt className="text-xs" />
                        <span>{edu.year}</span>
                      </motion.div>
                    </div>
                    
                    {/* Institution */}
                    <p className={`text-base md:text-lg font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {edu.institution}
                    </p>
                    
                    {/* Description */}
                    <p className={`text-sm mb-4 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    } leading-relaxed`}>
                      {edu.description}
                    </p>

                    {/* Duration Badge */}
                    <div className={`inline-flex items-center space-x-2 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium`}
                         style={{ backgroundColor: `${edu.color}20`, color: edu.color }}>
                      <span>Durée: {edu.duration}</span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats - Responsive grid */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            { number: "5+", label: "Années d'études", color: "#10B981" },
            { number: "1", label: "Diplômes obtenus", color: "#3B82F6" },
            { number: "2025", label: "Diplôme d'ingénieur", color: "#8B5CF6" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-4 md:p-6 rounded-2xl text-center ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
              } backdrop-blur-sm shadow-xl`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.2 + 1, type: "spring" }}
                className={`text-2xl md:text-3xl font-bold mb-2`}
                style={{ color: stat.color }}
              >
                {stat.number}
              </motion.div>
              <p className={`text-xs md:text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
