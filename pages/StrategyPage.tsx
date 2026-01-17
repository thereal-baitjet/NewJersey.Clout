
import React, { useEffect } from 'react';

export const StrategyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <a href="#" className="text-blue-400 hover:text-blue-300 font-bold text-sm uppercase tracking-widest mb-8 inline-block transition transform hover:-translate-x-1">
            <i className="fa-solid fa-arrow-left mr-2"></i> Back to Home
          </a>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">The 2025 GEO Strategy Manifesto</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            How New Jersey businesses are securing their place in the Generative Search era. A blueprint for dominating RAG (Retrieval-Augmented Generation) systems.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-20 prose prose-slate lg:prose-xl">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 underline decoration-blue-500 decoration-4 underline-offset-8">Phase 1: Ontological Mapping</h2>
          <p className="text-gray-600 mb-4 font-medium leading-relaxed">
            Generative AI doesn't just index your site—it maps your business into a massive <strong>semantic web</strong>. If you are a plumber in Union City, the LLM needs to see you not just for the keyword "plumber," but as an authority on "Hudson County historic home piping."
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 my-8">
            <p className="text-blue-900 font-bold mb-2">Agency Insight:</p>
            <p className="text-blue-800 italic">"We expand your semantic footprint by creating clusters of high-value local data that cross-reference your expertise across 50+ high-authority citation sources."</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 underline decoration-purple-500 decoration-4 underline-offset-8">Phase 2: RAG Source Injection</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            LLMs use <strong>Retrieval-Augmented Generation (RAG)</strong> to pull facts. They trust third-party sources more than your own website. We target the specific directories, news outlets, and industry maps that provide the "grounding" data.
          </p>
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex items-center"><i className="fa-solid fa-check-circle text-green-500 mr-3"></i> Google Maps & Business Profile optimization</li>
            <li className="flex items-center"><i className="fa-solid fa-check-circle text-green-500 mr-3"></i> Local news PR placement for freshness signals</li>
            <li className="flex items-center"><i className="fa-solid fa-check-circle text-green-500 mr-3"></i> Structured JSON-LD schema injection</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 underline decoration-red-500 decoration-4 underline-offset-8">Phase 3: Sentiment & Verification</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            AI models avoid low-quality businesses. We use our <strong>Sentiment Control</strong> framework to ensure that user reviews and public mentions reflect a high degree of trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50/50">
              <h4 className="font-bold text-slate-900 mb-2">Trust Anchoring</h4>
              <p className="text-sm text-gray-500">Securing citations from local governmental or educational institutions (.gov / .edu).</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50/50">
              <h4 className="font-bold text-slate-900 mb-2">Freshness Engine</h4>
              <p className="text-sm text-gray-500">Continuous content updates that signal to LLMs that your business is currently relevant.</p>
            </div>
          </div>
        </section>

        <div className="text-center bg-blue-600 p-12 rounded-[2rem] shadow-2xl shadow-blue-200">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to implement this framework?</h3>
          <p className="text-blue-100 mb-8">Stop letting the competition take your AI search traffic. Secure your NJ GEO lead today.</p>
          <button 
            onClick={() => window.location.hash = ''} 
            className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:bg-gray-50 transition transform hover:scale-105"
          >
            Claim My Free Audit
          </button>
        </div>
      </article>
    </div>
  );
};
