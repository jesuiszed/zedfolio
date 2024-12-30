import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  // Initialisation de tsParticles
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Ici, vous pouvez ajouter votre logique d'envoi de formulaire
        console.log('Form submitted:', formData);
        setSubmitStatus('success');
        // Réinitialiser le formulaire après soumission
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 3000);
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = 'Name is required';
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: isDark ? "#ffffff" : "#1f2937"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      }
    }
  };

  return (
    <section id="contact" className={`relative min-h-screen flex items-center justify-center ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-b from-gray-100 via-gray-200 to-white'
    } py-20`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            number: { value: 20 },
            opacity: { value: isDark ? 0.2 : 0.4 }
          }
        }}
      />
      
      <div className="w-full max-w-3xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`backdrop-blur-lg ${
            isDark 
              ? 'bg-white/5 border-white/10' 
              : 'bg-black/5 border-black/10'
          } rounded-3xl p-8 md:p-12 shadow-2xl border`}
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-light ${
              isDark ? 'text-white' : 'text-gray-900'
            } text-center mb-12`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's <span className={`font-bold bg-gradient-to-r ${
              isDark 
                ? 'from-blue-400 to-purple-400' 
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>Connect</span>
          </motion.h2>

          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-green-500/10 backdrop-blur border border-green-300/30 text-green-200 px-4 py-3 rounded-lg mb-8 text-center"
              >
                Message sent successfully! ✨
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`block w-full px-4 pb-2 pt-3 bg-transparent border-b-2 ${
                      isDark 
                        ? 'border-gray-600 text-white focus:border-blue-400' 
                        : 'border-gray-300 text-gray-900 focus:border-blue-600'
                    } focus:outline-none transition-colors peer`}
                    placeholder=" "
                  />
                  <label 
                    htmlFor="name"
                    className={`absolute text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    } duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-4 ${
                      isDark ? 'peer-focus:text-blue-400' : 'peer-focus:text-blue-600'
                    }`}
                  >
                    Your Name
                  </label>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-0 top-full mt-1 text-red-400 text-xs"
                      >
                        {errors.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="relative">
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`block w-full px-4 pb-2 pt-3 bg-transparent border-b-2 ${
                      isDark 
                        ? 'border-gray-600 text-white focus:border-blue-400' 
                        : 'border-gray-300 text-gray-900 focus:border-blue-600'
                    } focus:outline-none transition-colors peer`}
                    placeholder=" "
                  />
                  <label 
                    htmlFor="email"
                    className={`absolute text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    } duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-4 ${
                      isDark ? 'peer-focus:text-blue-400' : 'peer-focus:text-blue-600'
                    }`}
                  >
                    Your Email
                  </label>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-0 top-full mt-1 text-red-400 text-xs"
                      >
                        {errors.email}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="relative group">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                className={`block w-full px-4 pb-2 pt-3 bg-transparent border-b-2 ${
                  isDark 
                    ? 'border-gray-600 text-white focus:border-blue-400' 
                    : 'border-gray-300 text-gray-900 focus:border-blue-600'
                } focus:outline-none transition-colors peer resize-none`}
                placeholder=" "
              />
              <label 
                htmlFor="message"
                className={`absolute text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-4 ${
                  isDark ? 'peer-focus:text-blue-400' : 'peer-focus:text-blue-600'
                }`}
              >
                Your Message
              </label>
              <AnimatePresence>
                {errors.message && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 top-full mt-1 text-red-400 text-xs"
                  >
                    {errors.message}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <motion.div 
              className="text-center pt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className={`bg-gradient-to-r ${
                  isDark 
                    ? 'from-blue-500 to-purple-500 shadow-blue-500/25 hover:shadow-blue-500/40' 
                    : 'from-blue-600 to-purple-600 shadow-blue-600/25 hover:shadow-blue-600/40'
                } text-white px-10 py-4 rounded-full 
                inline-flex items-center space-x-2 font-medium shadow-lg
                transition-all duration-300`}
              >
                <span>Send Message</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
