
import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider">Union City's GEO Authority</span>
        </div>
        
        {/* PAS Framework Implementation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          <span className="block text-red-500 text-lg md:text-xl font-bold mb-4 uppercase tracking-[0.2em]">[The Problem]</span>
          Traditional SEO is Dead. <br/>
          <span className="gradient-text">AI Just Stole Your Traffic.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
          <span className="font-semibold text-slate-900">[The Agitation]</span> AI Overviews have caused a <span className="text-red-600 font-bold">20% drop</span> in click-through rates. If ChatGPT or Gemini isn't citing your business as the <span className="italic">only</span> answer, you don't exist.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-2xl shadow-blue-300 transform hover:-translate-y-1"
          >
            [The Solution] Secure Your GEO Lead
          </button>
          <a href="#strategy" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition shadow-sm">
            See the LLM Framework
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 grayscale opacity-60">
          <div className="flex items-center space-x-2 text-sm font-semibold uppercase tracking-widest text-slate-400">
             <span>Optimized For:</span>
             <span className="px-2 py-1 bg-slate-100 rounded">ChatGPT</span>
             <span className="px-2 py-1 bg-slate-100 rounded">Gemini</span>
             <span className="px-2 py-1 bg-slate-100 rounded">Claude</span>
             <span className="px-2 py-1 bg-slate-100 rounded">Perplexity</span>
          </div>
        </div>
      </div>
    </section>
  );
};
