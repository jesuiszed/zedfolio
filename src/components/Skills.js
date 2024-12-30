import { motion } from 'framer-motion';
import { FaReact, FaNode, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiKotlin, SiSpringboot, SiDjango, SiMongodb, 
         SiPostgresql, SiTailwindcss, SiDocker, SiKubernetes, 
         SiFlutter, SiAngular } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const Skills = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

    const skillCategories = [
        {
        title: "Frontend Development",
        color: "bg-blue-500",
        skills: [
            { name: "React", icon: <FaReact />, level: "Advanced", hoverColor: "text-[#61DAFB]" },
            { name: "Flutter", icon: <SiFlutter />, level: "Intermediate", hoverColor: "text-[#02569B]" },
            { name: "Angular", icon: <SiAngular />, level: "Intermediate", hoverColor: "text-[#DD0031]" },
            { name: "TypeScript", icon: <SiTypescript />, level: "Advanced", hoverColor: "text-[#3178C6]" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Advanced", hoverColor: "text-[#06B6D4]" }
        ]
        },
        {
        title: "Backend Development",
        color: "bg-green-500",
        skills: [
            { name: "Node.js", icon: <FaNode />, level: "Advanced", hoverColor: "text-[#339933]" },
            { name: "Python", icon: <FaPython />, level: "Advanced", hoverColor: "text-[#3776AB]" },
            { name: "Java", icon: <FaJava />, level: "Intermediate", hoverColor: "text-[#007396]" },
            { name: "Spring Boot", icon: <SiSpringboot />, level: "Intermediate", hoverColor: "text-[#6DB33F]" },
            { name: "Django", icon: <SiDjango />, level: "Advanced", hoverColor: "text-[#092E20]" }
        ]
        },
        {
        title: "Database & DevOps",
        color: "bg-purple-500",
        skills: [
            { name: "MongoDB", icon: <SiMongodb />, level: "Advanced", hoverColor: "text-[#47A248]" },
            { name: "PostgreSQL", icon: <SiPostgresql />, level: "Advanced", hoverColor: "text-[#336791]" },
            { name: "Docker", icon: <SiDocker />, level: "Intermediate", hoverColor: "text-[#2496ED]" },
            { name: "Kubernetes", icon: <SiKubernetes />, level: "Basic", hoverColor: "text-[#326CE5]" }
        ]
        }
    ];
  
  const [hoveredSkill, setHoveredSkill] = useState(null);


  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 8px rgb(255,255,255)",
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          {t('skills.title')}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: idx * 0.2,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: {
                  rotate: {
                    duration: 1
                  }
                }
              }}
              className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl 
                         transition-all duration-300 transform cursor-pointer`}
            >
              <motion.div 
                className={`inline-block px-4 py-2 rounded-lg ${category.color} mb-4`}
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => (
                    <motion.div
                        key={skillIdx}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{
                        scale: 1.15,
                        transition: {
                            duration: 0.3
                        }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg
                                transition-all duration-300 transform"
                    >
                        <div 
                            className={`text-3xl mb-2 transition-colors duration-300`}
                            style={{color: hoveredSkill === skill.name ? skill.hoverColor.replace('text-','') : 'rgb(156 163 175)'}}>
                            {skill.icon}
                        </div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            {skill.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                            {t(`skills.levels.${skill.level.toLowerCase()}`)}
                        </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          className="mt-12 text-center"
        >
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} cursor-pointer`}>
            And many more technologies in my learning journey...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;