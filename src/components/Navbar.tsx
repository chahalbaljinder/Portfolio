import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm dark:border-b dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Baljinder Singh
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>About</NavLink>
            <NavLink to="/projects" current={location.pathname === "/projects"}>Projects</NavLink>
            <NavLink to="/resume" current={location.pathname === "/resume"}>Resume</NavLink>
            <NavLink to="/contact" current={location.pathname === "/contact"}>Contact</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <SocialLink href="https://github.com/baljinder" icon={<Github />} />
            <SocialLink href="https://linkedin.com/in/baljinder" icon={<Linkedin />} />
            <SocialLink href="mailto:balliji913@gmail.com" icon={<Mail />} />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, current }: { to: string; children: React.ReactNode; current: boolean }) => (
  <Link
    to={to}
    className={`${
      current
        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
    } px-3 py-2 text-sm font-medium transition-colors duration-200`}
  >
    {children}
  </Link>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
  >
    {icon}
  </a>
);

export default Navbar;