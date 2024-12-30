import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.2 }}
            whileTap={{ rotate: 360 }}
            transition={{ duration: 0.4 }}
            className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500
                       dark:from-blue-800 dark:to-purple-800 shadow-lg
                       hover:shadow-xl transform transition-all duration-300"
            aria-label="Toggle Theme"
        >
            {isDark ? 
                <FaSun className="text-yellow-200 text-xl animate-spin-slow" /> : 
                <FaMoon className="text-gray-800 text-xl animate-bounce-slow" />
            }
        </motion.button>
    );
};

export default ThemeToggle;
