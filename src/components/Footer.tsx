import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Baljinder Singh</h3>
            <p className="text-gray-600 mb-4">Data Scientist & AI/ML Engineer</p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/baljinder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/baljinder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:balliji913@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 8810225755
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                balliji913@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Delhi, India 110092
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Baljinder Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;