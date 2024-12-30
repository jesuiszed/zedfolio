import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsPerPage = 6;

  const projects = [
    {
      title: "ZED EVENTS",
      description: "A comprehensive event management web application",
      image: "/images/flozed.png",
      tech: ["Django", "Python", "PostgreSQL", "REST API"],
      github: "https://github.com/jesuiszed/zed-events",
      demo: "#"
    },
    {
      title: "PLAY PARK MANAGER",
      description: "Platform for managing entertainment facilities",
      image: "/images/flozed.png",
      tech: ["Django", "React", "PostgreSQL", "Docker"],
      github: "https://github.com/jesuiszed/playpark-manager",
      demo: "#"
    },
    {
      title: "WATCHAPP",
      description: "Mobile application for smartwatch integration",
      image: "/images/flozed.png",
      tech: ["Kotlin", "Android SDK", "Firebase"],
      github: "https://github.com/jesuiszed/watchapp",
      demo: "#"
    },
    {
      title: "WEARWATCH",
      description: "Spring Boot backend for wearable devices",
      image: "/images/flozed.png",
      tech: ["Spring Boot", "Java", "MySQL", "REST API"],
      github: "https://github.com/jesuiszed/wearwatch",
      demo: "#"
    },
    {
      title: "WEARWATCH",
      description: "Spring Boot backend for wearable devices",
      image: "/images/flozed.png",
      tech: ["Spring Boot", "Java", "MySQL", "REST API"],
      github: "https://github.com/jesuiszed/wearwatch",
      demo: "#"
    },
    {
      title: "WEARWATCH",
      description: "Spring Boot backend for wearable devices",
      image: "/images/flozed.png",
      tech: ["Spring Boot", "Java", "MySQL", "REST API"],
      github: "https://github.com/jesuiszed/wearwatch",
      demo: "#"
    },
    {
      title: "WEARWATCH",
      description: "Spring Boot backend for wearable devices",
      image: "/images/flozed.png",
      tech: ["Spring Boot", "Java", "MySQL", "REST API"],
      github: "https://github.com/jesuiszed/wearwatch",
      demo: "#"
    },
    {
      title: "WEARWATCH",
      description: "Spring Boot backend for wearable devices",
      image: "/images/flozed.png",
      tech: ["Spring Boot", "Java", "MySQL", "REST API"],
      github: "https://github.com/jesuiszed/wearwatch",
      demo: "#"
    },
    {
      title: "WEARWATCH",
      description: "Spring Boot backend for wearable devices",
      image: "/images/flozed.png",
      tech: ["Spring Boot", "Java", "MySQL", "REST API"],
      github: "https://github.com/jesuiszed/wearwatch",
      demo: "#"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, projectsPerPage);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="space-x-4">
                    <a href={project.github} className="btn-primary">View Code</a>
                    <a href={project.demo} className="btn-secondary">Live Demo</a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-blue-500 hover:text-blue-400">
                    GitHub
                  </a>
                  <a href={project.demo} className="text-blue-500 hover:text-blue-400">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {projects.length > projectsPerPage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;