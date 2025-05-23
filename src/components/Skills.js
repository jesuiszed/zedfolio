import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker,
  FaHtml5, FaCss3Alt, FaJs, FaFigma, FaPhp, FaJava
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, 
  SiPostgresql, SiExpress, SiRedis, SiGraphql,
  SiDotnet, SiSpring, SiDjango
} from 'react-icons/si';

const Skills = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      ]
    },
    {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PHP", icon: FaPhp, color: "#777BB4" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "C#", icon: FaDatabase, color: "#239120" },
        { name: ".NET", icon: SiDotnet, color: "#512BD4" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      ]
    },
    {
      title: "Frameworks & Tools",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
      ]
    }
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

  const categoryVariants = {
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
      id="skills"
      className={`relative py-20 ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900' 
               : 'bg-gradient-to-br from-white via-gray-50 to-blue-50'
      } overflow-hidden`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full 
            ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} blur-3xl`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={categoryVariants} className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className={`p-8 rounded-3xl ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
              } backdrop-blur-sm shadow-2xl`}
            >
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className={`flex items-center space-x-4 p-4 rounded-xl ${
                        isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                      } transition-all duration-300`}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon 
                          className="text-3xl"
                          style={{ color: skill.color }}
                        />
                      </motion.div>
                      <span className={`font-medium text-lg ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;