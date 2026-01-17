
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold tracking-tighter text-white">
              NewJersey.<span className="text-blue-500">Clout</span>
            </span>
            <p className="mt-2 text-sm">Becoming the only answer for NJ businesses.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">NJ GEO Report</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs opacity-50">
          © {new Date().getFullYear()} NewJersey.Clout. Roots in Union City, Vision in AI.
        </div>
      </div>
    </footer>
  );
};
