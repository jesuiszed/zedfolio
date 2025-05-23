import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Prompt engineer', 'Creative Innovator', 'Problem Solver'],
    loop: true,
    delaySpeed: 3000,
    deleteSpeed: 50,
    typeSpeed: 100,
  });

  const techIcons = [
    { Icon: FaReact, top: '10%', left: '8%', delay: 0, color: '#61DAFB' },
    { Icon: FaNodeJs, top: '20%', right: '12%', delay: 0.2, color: '#339933' },
    { Icon: SiJavascript, bottom: '25%', left: '10%', delay: 0.4, color: '#F7DF1E' },
    { Icon: FaPython, top: '45%', left: '5%', delay: 0.6, color: '#3776AB' },
    { Icon: FaDatabase, bottom: '35%', right: '8%', delay: 0.8, color: '#336791' },
    { Icon: SiTypescript, top: '15%', right: '25%', delay: 1.0, color: '#3178C6' },
    { Icon: FaGitAlt, bottom: '18%', right: '20%', delay: 1.2, color: '#F05032' },
    { Icon: FaDocker, top: '38%', left: '15%', delay: 1.4, color: '#2496ED' },
    { Icon: SiNextdotjs, top: '55%', right: '15%', delay: 1.6, color: isDark ? '#FFFFFF' : '#000000' },
    { Icon: SiTailwindcss, bottom: '45%', left: '20%', delay: 1.8, color: '#06B6D4' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20],
      x: [-10, 10],
      rotate: [0, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="home" 
      className={`relative min-h-screen pt-16 flex items-center justify-center 
        ${isDark ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900' 
                : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        } overflow-hidden`}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full 
            ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/30'} blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full 
            ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/30'} blur-3xl`}
        />
      </div>

      {/* Dynamic grid pattern */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className={`absolute inset-0 w-full h-full ${
          isDark 
            ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)] bg-[size:50px_50px]'
            : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] bg-[size:50px_50px]'
        }`} 
      />
      
      {/* Enhanced Floating Tech Icons */}
      {techIcons.map(({ Icon, top, left, right, bottom, delay, color }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.1, 0.8],
          }}
          variants={floatingVariants}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay },
            scale: { duration: 4, repeat: Infinity, delay: delay + 1 },
            ...floatingVariants.animate.transition
          }}
          style={{ position: 'absolute', top, left, right, bottom }}
          whileHover={{ 
            scale: 1.4, 
            rotate: 180,
            transition: { duration: 0.3 }
          }}
          className="cursor-pointer"
        >
          <Icon 
            className="text-4xl sm:text-5xl drop-shadow-lg filter"
            style={{ color, filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))' }}
          />
        </motion.div>
      ))}

      <motion.div 
        variants={itemVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Enhanced main heading with gradient text */}
        <motion.h1 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className={`text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight`}
        >
          <span className={isDark ? 'text-white' : 'text-gray-900'}>
            {t('hero.greeting')}
          </span>{' '}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            Florian Zed
          </span>
        </motion.h1>

        {/* Enhanced typewriter section */}
        <motion.h2 
          variants={itemVariants}
          className={`text-2xl sm:text-3xl md:text-5xl mb-8 ${
            isDark ? 'text-gray-200' : 'text-gray-700'
          }`}
        >
          {t('hero.iAm')}{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent font-semibold">
            {text}
          </span>
          <Cursor cursorStyle="_" cursorColor={isDark ? '#60A5FA' : '#3B82F6'} />
        </motion.h2>

        {/* Enhanced subtitle */}
        <motion.p 
          variants={itemVariants}
          className={`text-xl sm:text-2xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          } mb-12 leading-relaxed`}
        >
          {t('hero.subtitle')}
        </motion.p>
        
        {/* Enhanced buttons with better animations */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              y: -8, 
              scale: 1.05,
              boxShadow: isDark ? "0 20px 40px rgba(59, 130, 246, 0.4)" : "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className={`group relative overflow-hidden ${
              isDark ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-blue-600 to-purple-700'
            } text-white px-10 py-4 rounded-full text-xl font-semibold shadow-xl transition-all duration-300`}
          >
            <span className="relative z-10">{t('hero.buttons.contact')}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            />
          </motion.a>
          
          <motion.a
            href="https://github.com/jesuiszed"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              y: -8, 
              scale: 1.05,
              boxShadow: isDark ? "0 20px 40px rgba(107, 114, 128, 0.3)" : "0 20px 40px rgba(107, 114, 128, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className={`group relative overflow-hidden backdrop-blur-sm border-2 ${
              isDark ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                     : 'bg-black/5 border-black/10 text-gray-900 hover:bg-black/10'
            } px-10 py-4 rounded-full text-xl font-semibold shadow-xl transition-all duration-300`}
          >
            <span className="relative z-10">{t('hero.buttons.github')}</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-6 h-10 border-2 ${
              isDark ? 'border-white/30' : 'border-gray-400'
            } rounded-full p-1`}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-1 h-3 ${
                isDark ? 'bg-white/50' : 'bg-gray-400'
              } rounded-full mx-auto`}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;