
import React from 'react';

export const Framework: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Semantic Footprint Expansion",
      desc: "We analyze how AI models perceive your business today and map out the 'Semantic Gaps' needed to dominate your local niche.",
      icon: "fa-solid fa-network-wired"
    },
    {
      number: "02",
      title: "Citation Injection",
      desc: "We inject fact-dense data into the RAG sources that Gemini and ChatGPT trust most, ensuring your name is the one that gets cited.",
      icon: "fa-solid fa-syringe"
    },
    {
      number: "03",
      title: "Freshness Audits",
      desc: "Generative Engines prioritize 'Freshness.' We provide weekly updates to your public profiles to keep you at the top of the LLM memory bank.",
      icon: "fa-solid fa-arrows-rotate"
    }
  ];

  return (
    <section id="framework" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The LLM-First Framework</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our exclusive 3-step process to transition your business from the old search world to the generative era.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors group">
              <div className="text-5xl font-black text-blue-50 mb-4 transition-colors group-hover:text-blue-100">{step.number}</div>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <i className={`${step.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
