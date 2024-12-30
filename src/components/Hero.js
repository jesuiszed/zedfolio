import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';

const Hero = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const count = 0;
  
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Creator'],
    loop: true,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after ${count} runs`),
  });

  const techIcons = [
    { Icon: FaReact, top: '15%', left: '10%', delay: 0 },
    { Icon: FaNodeJs, top: '25%', right: '10%', delay: 0.1 },
    { Icon: SiJavascript, bottom: '20%', left: '15%', delay: 0.2 },
    { Icon: FaPython, top: '40%', left: '5%', delay: 0.3 },
    { Icon: FaDatabase, bottom: '30%', right: '15%', delay: 0.4 },
    { Icon: SiTypescript, top: '20%', right: '20%', delay: 0.5 },
    { Icon: FaGitAlt, bottom: '15%', right: '10%', delay: 0.6 },
    { Icon: FaDocker, top: '35%', left: '20%', delay: 0.7 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="home" 
      className={`relative min-h-screen pt-16 flex items-center justify-center 
        ${isDark ? 'bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900' 
                : 'bg-gradient-to-br from-blue-100 via-white to-purple-100'
        } overflow-hidden`}
    >

      {/* Background pattern */}
      <div 
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full ${
          isDark 
            ? 'bg-[radial-gradient(#ffffff33_1px,transparent_1px)]'
            : 'bg-[radial-gradient(#00000033_1px,transparent_1px)]'
        } bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]`} 
      />
      
      {/* Floating Tech Icons */}
      {techIcons.map(({ Icon, top, left, right, bottom, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.7],
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay,
            ease: "linear"
          }}
          style={{ position: 'absolute', top, left, right, bottom }}
          whileHover={{ scale: 1.2 }}
        >
          <Icon className={`${isDark ? 'text-white/30' : 'text-gray-900/20'} text-3xl sm:text-4xl`} />
        </motion.div>
      ))}

      <motion.div 
        variants={itemVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.h1 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {t('hero.greeting')} <span className="text-blue-500">Florian Zed</span>
        </motion.h1>

        <h2 className={`text-xl sm:text-2xl md:text-4xl ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        } mb-4`}>
          {t('hero.iAm')} <span className="text-blue-500">{text}</span>
          <Cursor cursorStyle="_" />
        </h2>

        <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        } mb-8`}>
          {t('hero.subtitle')}
        </p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              isDark ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
            } text-white px-8 py-3 rounded-full text-lg font-semibold`}
          > Drop me a message
            {t('hero.contactMe')}
          </motion.a>
          <motion.a
            href="https://github.com/jesuiszed"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            } text-white px-8 py-3 rounded-full text-lg font-semibold`}
          > View GitHub
            {t('hero.viewGithub')}
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;