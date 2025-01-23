import React from 'react';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "IntelliDocs: AI-Powered Document Query System",
    description: "An AI-powered Document QA System using Google Gemini API and ChromaDB, achieving 95%+ query accuracy and efficient text retrieval for 50,000+ documents.",
    image: "https://images.unsplash.com/photo-1518976024611-28bf4b48222e?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/baljinder/intellidocs",
    github: "https://github.com/baljinder/intellidocs",
    tech: ["Python", "Gemini API", "ChromaDB", "Streamlit"]
  },
  {
    title: "ML-Powered SCADA System",
    description: "Developed predictive models for BEL's SUPER SCADA system, achieving 85%+ accuracy in equipment failure prediction and operational efficiency optimization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/baljinder/scada-ml",
    github: "https://github.com/baljinder/scada-ml",
    tech: ["Python", "TensorFlow", "RabbitMQ", "Grafana"]
  },
  {
    title: "Inventory Management AI",
    description: "ML-powered inventory management system that reduced errors by 30% using advanced regression and anomaly detection techniques.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/baljinder/inventory-ai",
    github: "https://github.com/baljinder/inventory-ai",
    tech: ["Python", "Scikit-learn", "Pandas", "FastAPI"]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index}>
              <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-gray-100"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;