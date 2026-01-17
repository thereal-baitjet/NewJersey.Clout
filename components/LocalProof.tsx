
import React from 'react';

export const LocalProof: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
             <i className="fa-solid fa-location-dot text-9xl text-blue-500"></i>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                Born in Union City, Built for NJ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Hyper-Local Social Proof: <br/>
                NJ Case Studies
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                As a team rooted in <span className="text-white font-semibold">Hudson County</span>, we don't just know AI; we know the NJ market. We apply the Principle of Liking—we are your neighbors. We understand the specific nuances of North Jersey competition.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="text-2xl font-bold text-blue-400 mb-1">94%</div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">AI Recommendation Rate</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="text-2xl font-bold text-purple-400 mb-1">-20%</div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Search Traffic Leakage Saved</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
               <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white">
                      <i className="fa-solid fa-building"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">The Hoboken Real Estate Group</h4>
                      <p className="text-slate-500 text-xs">Page 1 of Google → The Only Source in ChatGPT</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm italic">"We were terrified when AI overviews launched. NewJersey.Clout optimized our 'Fact-Density' and now we are the ONLY recommendation when someone asks about NJ waterfront property."</p>
               </div>
               
               <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm ml-6 md:ml-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white">
                      <i className="fa-solid fa-gavel"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Union City Legal Associates</h4>
                      <p className="text-slate-500 text-xs">Invisible to AI → Primary Citation for Local Law</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm italic">"Our semantic footprint was non-existent. Within 30 days, we became the primary source for local NJ housing law queries across all major LLMs."</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
