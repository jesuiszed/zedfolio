import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            onClick={toggleLanguage}
            whileHover={{ rotateY: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative px-4 py-2 rounded-lg font-bold text-lg
                      bg-gradient-to-r from-pink-500 to-purple-500
                      hover:from-pink-600 hover:to-purple-600
                      text-white shadow-lg transform perspective-1000
                      hover:shadow-pink-500/25 hover:shadow-xl"
        >
            <span className={`transition-transform duration-300 ${language === 'en' ? 'block' : 'hidden'}`}>
                🇫🇷 FR
            </span>
            <span className={`transition-transform duration-300 ${language === 'fr' ? 'block' : 'hidden'}`}>
                🇬🇧 EN
            </span>
        </motion.button>
    );
};

export default LanguageToggle;
