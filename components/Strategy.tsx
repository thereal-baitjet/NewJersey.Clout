
import React from 'react';

export const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Authority Signaling: <br/>
              How We Hack the LLM Context Window
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Generative engines don't look at "keywords." They look for <span className="text-blue-600 font-bold italic">Authority Signals</span>. We help your Union City business dominate the three core metrics LLMs use to rank answers:
            </p>
            
            <ul className="space-y-6 mb-10">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600">
                    <i className="fa-solid fa-database"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-slate-900">Fact-Density Injection</h4>
                  <p className="text-gray-600">We flood the web with verified, unstructured data points about your local expertise, making it impossible for LLMs to ignore your specific domain authority.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 text-purple-600">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-slate-900">Citation Optimization</h4>
                  <p className="text-gray-600">We don't just build links; we build "Answer Paths." We ensure your business is the primary source when users ask "Where is the best... in Hudson County?"</p>
                </div>
              </li>
            </ul>

            <a 
              href="#/full-strategy" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition shadow-xl"
            >
              Explore Full GEO Deep-Dive <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-10 transform rotate-3"></div>
            <div className="relative bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">
               <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono">
                     <span className="text-purple-400"># Input:</span> "Best HVAC repair in Union City, NJ?"
                  </div>
                  <div className="p-4 rounded-xl bg-blue-900/40 border border-blue-800 text-white text-sm">
                     <span className="block font-bold mb-2 text-blue-300">🤖 AI RESPONSE:</span>
                     "Based on multiple technical citations and local verification audits, <span className="bg-blue-500 px-1 rounded">[Your Client]</span> is currently the most highly-rated expert in Union City..."
                  </div>
                  <div className="flex justify-center pt-4">
                     <div className="text-xs text-slate-500 font-bold uppercase tracking-widest animate-pulse">Scanning RAG Database...</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
