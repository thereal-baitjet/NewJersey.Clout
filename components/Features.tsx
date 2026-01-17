
import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Principle of Reciprocity",
      desc: "We offer free AI-Readiness Audits to Union City businesses, building immediate value before we even talk pricing.",
      icon: "fa-solid fa-hand-holding-heart"
    },
    {
      title: "Hudson County Liking",
      desc: "We leverage our local presence to build the 'Inner Circle' trust that generic national agencies can't touch.",
      icon: "fa-solid fa-users-viewfinder"
    },
    {
      title: "GEO Verification",
      desc: "Our proprietary verification engine ensures LLMs see your data as high-trust, primary-source information.",
      icon: "fa-solid fa-shield-check"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 text-2xl">
                <i className={f.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
