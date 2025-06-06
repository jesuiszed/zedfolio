import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Gestion du scroll et section active
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'education', label: t('nav.education') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? `${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-lg shadow-lg` 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <h1 className={`text-2xl font-bold bg-gradient-to-r ${
              isDark 
                ? 'from-blue-400 to-purple-400' 
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Flo.Zed
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200
                  ${activeSection === item.id 
                    ? `${isDark ? 'text-blue-400' : 'text-blue-600'}` 
                    : `${isDark ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500`
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isDark ? 'bg-blue-400' : 'bg-blue-600'
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-800/20 backdrop-blur-sm"
          >
            <svg 
              className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${
              isDark ? 'bg-gray-900/95' : 'bg-white/95'
            } backdrop-blur-lg`}
          >
            <div className="px-4 pt-2 pb-3 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-lg ${
                    activeSection === item.id
                      ? `${isDark ? 'text-blue-400 bg-blue-500/10' : 'text-blue-600 bg-blue-500/10'}`
                      : `${isDark ? 'text-gray-300' : 'text-gray-600'} hover:bg-gray-700/10`
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 pb-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
