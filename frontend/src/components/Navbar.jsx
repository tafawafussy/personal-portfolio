import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-500">Tafawa.dev</h1>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;