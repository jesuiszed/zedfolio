import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const { isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`px-3 py-2 rounded-lg ${
        isDark 
          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
      } transition-colors duration-200 font-medium`}
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      <motion.span
        initial={false}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 0.3 }}
      >
        {language === 'en' ? 'FR' : 'EN'}
      </motion.span>
    </motion.button>
  );
};

export default LanguageToggle;
