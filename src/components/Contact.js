import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const Contact = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "joinz3d@gmail.com",
      link: "mailto:joinz3d@gmail.com",
      color: "#3B82F6"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+212 620438362",
      link: "tel:+212 620438362",
      color: "#10B981"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Marrakesh, Maroc",
      link: "#",
      color: "#F59E0B"
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/florianzougou/", color: "#0A66C2" },
    { icon: FaGithub, url: "https://github.com/jesuiszed", color: isDark ? "#FFFFFF" : "#000000" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation des champs
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    if (!formData.email.includes('@')) newErrors.email = 'Email invalide';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Vérification de la configuration EmailJS
    console.log('Configuration EmailJS:', {
      serviceId: emailjsConfig.serviceId,
      templateId: emailjsConfig.templateId,
      publicKey: emailjsConfig.publicKey ? 'Configuré' : 'NON CONFIGURÉ'
    });

    if (emailjsConfig.publicKey === 'your_public_key' || emailjsConfig.publicKey === 'VOTRE_VRAIE_PUBLIC_KEY_ICI') {
      setSubmitStatus('error');
      console.error('❌ EmailJS pas configuré! Veuillez mettre à jour le fichier .env avec vos vraies clés.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Préparer les données pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact depuis le portfolio',
        message: formData.message,
        to_name: 'Florian Zed', // Votre nom
      };

      console.log('Envoi du message avec les paramètres:', templateParams);

      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('✅ Email envoyé avec succès!', response.status, response.text);
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus('success');
      
      // Effacer le message de succès après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
      
      // Messages d'erreur spécifiques
      if (error.text && error.text.includes('Public Key is invalid')) {
        console.error('🔑 Clé publique EmailJS invalide! Vérifiez votre .env');
      } else if (error.text && error.text.includes('Template ID')) {
        console.error('📄 Template ID invalide! Vérifiez votre template EmailJS');
      } else if (error.text && error.text.includes('Service ID')) {
        console.error('🔧 Service ID invalide! Vérifiez votre service EmailJS');
      }
      
      setSubmitStatus('error');
      
      // Effacer le message d'erreur après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Effacer l'erreur du champ quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      id="contact"
      className={`relative py-20 ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
               : 'bg-gradient-to-br from-purple-50 via-white to-blue-50'
      } overflow-hidden`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full 
            ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/30'} blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full 
            ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/30'} blur-3xl`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Get In <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full`}></div>
          <p className={`text-xl mt-6 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className={`text-3xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Talk
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className={`flex items-center space-x-4 p-6 rounded-2xl ${
                        isDark ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                               : 'bg-white border border-gray-200 hover:bg-gray-50'
                      } backdrop-blur-sm transition-all duration-300 shadow-lg`}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                      >
                        <Icon className="text-white text-xl" />
                      </motion.div>
                      <div>
                        <h4 className={`font-semibold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {info.title}
                        </h4>
                        <p className={`${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-xl font-semibold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 rounded-full ${
                        isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
                      } transition-colors`}
                    >
                      <Icon 
                        className="text-2xl"
                        style={{ color: social.color }}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            {/* Status Messages */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mb-6 p-4 rounded-2xl flex items-center space-x-3 ${
                  submitStatus === 'success'
                    ? isDark ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                             : 'bg-green-50 border border-green-200 text-green-700'
                    : isDark ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                             : 'bg-red-50 border border-red-200 text-red-700'
                }`}
              >
                {submitStatus === 'success' ? (
                  <FaCheckCircle className="text-xl" />
                ) : (
                  <FaExclamationTriangle className="text-xl" />
                )}
                <span className="font-medium">
                  {submitStatus === 'success' 
                    ? 'Message envoyé avec succès ! Je vous répondrai bientôt.' 
                    : 'Erreur lors de l\'envoi. Vérifiez la configuration EmailJS dans la console.'}
                </span>
              </motion.div>
            )}

            <motion.form
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
              } backdrop-blur-sm shadow-2xl space-y-6`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : isDark ? 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-500' 
                                 : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all`}
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>
                
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : isDark ? 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-500' 
                                 : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all`}
                    placeholder="votre.email@exemple.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDark ? 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-500' 
                           : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all`}
                  placeholder="Discussion de projet"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : isDark ? 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-500' 
                               : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none`}
                  placeholder="Parlez-moi de votre projet..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: isSubmitting ? undefined : "0 20px 40px rgba(147, 51, 234, 0.4)"
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full font-semibold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-2xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  'Envoyer le message'
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
