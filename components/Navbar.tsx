
import React from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <span className="text-2xl font-bold tracking-tighter text-blue-700 transition group-hover:opacity-80">
                NewJersey.<span className="text-purple-600">Clout</span>
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#strategy" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">GEO Strategy</a>
            <a href="#framework" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Our Process</a>
            <a href="#results" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Case Studies</a>
            <a href="#/full-strategy" className="text-sm font-bold text-purple-600 hover:text-purple-700 transition flex items-center">
              Manifesto <i className="fa-solid fa-file-lines ml-1.5 text-xs"></i>
            </a>
            <button 
              onClick={onContactClick}
              className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              Dominate AI Search
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
             <a href="#/full-strategy" className="text-xs font-bold text-purple-600">Manifesto</a>
            <button onClick={onContactClick} className="p-2 text-blue-600">
              <i className="fa-solid fa-bolt text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
