import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaTimes, FaPython, FaJs, FaJava, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiPython, SiMongodb, SiExpress, SiHtml5, SiCss3, SiDart, SiFlutter, SiDotnet, SiDjango, SiBootstrap, SiSpring, SiKotlin } from 'react-icons/si';

const Projects = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [showModal, setShowModal] = useState(false);

  const featuredProjects = [
    {
      title: "Zedfolio Portfolio",
      description: "Portfolio personnel développé avec React et TailwindCSS, présentant mes projets et compétences avec une interface moderne et responsive.",
      githubUrl: "https://github.com/jesuiszed/zedfolio",
      liveUrl: "https://zedfolio-florian-zeds-projects.vercel.app",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" }
      ],
      featured: true,
      isFreelance: false
    },
    {
      title: "TwoFA",
      description: "Système d'authentification à double facteur (2FA) développé en C# avec .NET, offrant une couche de sécurité supplémentaire pour les applications web.",
      githubUrl: "https://github.com/jesuiszed/2faDotnet",
      liveUrl: null,
      technologies: [
        { name: "C#", icon: FaCode, color: "#239120" },
        { name: ".NET", icon: SiDotnet, color: "#512BD4" }
      ],
      featured: true,
      isFreelance: true
    },
    {
      title: "GStock API",
      description: "API de gestion de stock développée en C# avec .NET, permettant la gestion complète des articles et des mouvements de stock.",
      githubUrl: "https://github.com/jesuiszed/gstockApi",
      liveUrl: null,
      technologies: [
        { name: "C#", icon: FaCode, color: "#239120" },
        { name: ".NET", icon: SiDotnet, color: "#512BD4" }
      ],
      featured: true,
      isFreelance: false
    },
    {
      title: "Voyager",
      description: "Site vitrine d'une agence de voyage développé avec Python et Django, présentant des destinations et offres de voyage avec un design élégant en TailwindCSS.",
      githubUrl: "https://github.com/jesuiszed/voyager",
      liveUrl: null,
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" }
      ],
      featured: true,
      isFreelance: true
    }
  ];

  const moreProjects = [
    {
      title: "gestVoyage",
      description: "Application de gestion de voyages développée avec Python et Django, facilitant l'organisation et le suivi des voyages avec une interface utilisateur intuitive.",
      githubUrl: "https://github.com/jesuiszed/GestionVoyage0",
      liveUrl: null,
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" }
      ],
      isFreelance: false
    },
    {
      title: "Kouty Medical Service",
      description: "Plateforme de services médicaux développée avec Python, Django et Bootstrap, offrant une solution complète pour la gestion des rendez-vous et dossiers médicaux.",
      githubUrl: "https://github.com/jesuiszed/kouty-medical",
      liveUrl: null,
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" }
      ],
      isFreelance: true
    },
    {
      title: "PPM (PlayPark Manager)",
      description: "Système de gestion pour parcs de loisirs, développé avec Python et Django, permettant d'optimiser les opérations et l'expérience client.",
      githubUrl: "https://github.com/jesuiszed/ppm",
      liveUrl: null,
      technologies: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" }
      ],
      isFreelance: false
    },
    {
      title: "Budget Visualiser",
      description: "Application de visualisation budgétaire développée en Java avec Spring Boot, permettant une gestion claire et interactive des finances personnelles.",
      githubUrl: "https://github.com/jesuiszed/budget-visualiser",
      liveUrl: null,
      technologies: [
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" }
      ],
      isFreelance: false
    },
    {
      title: "WatchApp",
      description: "Application mobile pour amateurs de montres, développée avec Java et Kotlin, offrant un catalogue, des critiques et des recommandations.",
      githubUrl: "https://github.com/jesuiszed/watchapp",
      liveUrl: null,
      technologies: [
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" }
      ],
      isFreelance: true
    },
    {
      title: "VOD Service",
      description: "Service backend pour plateforme de vidéo à la demande, développé en Java avec Spring Boot, gérant le streaming, les utilisateurs et les abonnements.",
      githubUrl: "https://github.com/jesuiszed/vod_service",
      liveUrl: null,
      technologies: [
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" }
      ],
      isFreelance: true
    }
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

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  // Composant de carte projet réutilisable
  const ProjectCard = ({ project, index }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-2xl ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'
      } hover:shadow-lg transition-all duration-300 h-full`}
    >
      <div className="flex flex-col h-full">
        <h4 className={`text-xl font-bold mb-3 ${
          isDark ? 'text-white' : 'text-gray-900'
        } flex items-center`}>
          {project.title}
          {project.isFreelance && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="ml-3 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full shadow-lg"
            >
              Freelance
            </motion.span>
          )}
        </h4>
        
        <p className={`text-sm mb-4 flex-grow ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        } leading-relaxed`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => {
            const Icon = tech.icon;
            return (
              <div
                key={techIndex}
                className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                  isDark ? 'bg-white/10' : 'bg-white'
                }`}
              >
                <Icon style={{ color: tech.color }} className="text-sm" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex space-x-3 mt-auto">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium ${
              isDark ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            } transition-colors`}
          >
            <FaGithub className="text-sm" />
            <span>Code</span>
          </motion.a>
          
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-shadow"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        id="projects"
        className={`relative py-20 ${
          isDark ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' 
                 : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
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
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full 
              ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'} blur-3xl`}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={projectVariants} className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Featured <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full`}></div>
          </motion.div>

          {/* Projects Grid - 2 columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* View More Button */}
          <motion.div 
            variants={projectVariants}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ 
                y: -5, 
                scale: 1.05,
                boxShadow: isDark ? "0 20px 40px rgba(59, 130, 246, 0.4)" : "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 ${
                isDark ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                       : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'
              }`}
            >
              Voir plus de projets
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal Dialog */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl ${
                isDark ? 'bg-gray-900 border border-white/10' : 'bg-white border border-gray-200'
              } shadow-2xl`}
            >
              {/* Modal Header */}
              <div className={`sticky top-0 z-10 p-6 border-b ${
                isDark ? 'border-white/10 bg-gray-900/95' : 'border-gray-200 bg-white/95'
              } backdrop-blur-sm`}>
                <div className="flex items-center justify-between">
                  <h3 className={`text-3xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Plus de projets
                  </h3>
                  <motion.button
                    onClick={() => setShowModal(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full ${
                      isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-gray-900'
                    } transition-colors`}
                  >
                    <FaTimes className="text-xl" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {moreProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
