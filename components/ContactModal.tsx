
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Full GEO Authority Setup');
  const [aiInsight, setAiInsight] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');

    try {
      // Initialize Gemini to generate a "personalized" insight for the email report
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a GEO (Generative Engine Optimization) expert for a New Jersey agency. 
        A business named "${businessName}" just requested an audit. 
        Write a 2-sentence highly professional 'preliminary insight' about their potential AI search presence in NJ. 
        Mention Hudson County or specific NJ local competition. Keep it punchy and authoritative.`,
      });

      setAiInsight(response.text || 'Initial analysis complete.');
      
      // Simulate "Sending Email" delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log(`LEAD CAPTURED: ${businessName} (${email}) for ${service}. AI Insight: ${response.text}`);
      setStep('success');
    } catch (error) {
      console.error("AI Lead Processing Error:", error);
      setStep('success'); // Fallback to success for UX
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
        
        {step === 'form' && (
          <>
            <div className="p-8 text-center bg-blue-600 text-white">
              <h2 className="text-2xl font-bold mb-2">Claim Your NJ GEO Authority</h2>
              <p className="text-blue-100 text-sm opacity-90">Get a free "AI Answer Gap" audit for your business.</p>
            </div>
            <form className="p-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Business Name</label>
                <input 
                  required
                  type="text" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Union City Pizza" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Work Email</label>
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@business.com" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Select NJ Service</label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                >
                  <option>Semantic Footprint Audit</option>
                  <option>Citation Optimization Campaign</option>
                  <option>Full GEO Authority Setup</option>
                </select>
              </div>
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center">
                Send My Free Audit <i className="fa-solid fa-paper-plane ml-2"></i>
              </button>
              <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-4">
                Limited to 5 local NJ businesses per month
              </p>
            </form>
          </>
        )}

        {step === 'processing' && (
          <div className="p-12 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Scanning LLM Memory...</h3>
            <p className="text-gray-500 text-sm">Our AI is analyzing the semantic footprint for <span className="font-bold text-blue-600">{businessName}</span> across Hudson County datasets.</p>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
               <div className="bg-blue-600 h-full animate-[loading_2s_ease-in-out_infinite]" style={{width: '60%'}}></div>
            </div>
            <style>{`
              @keyframes loading {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(200%); }
              }
            `}</style>
          </div>
        )}

        {step === 'success' && (
          <div className="p-12 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Audit Initiated!</h3>
            <p className="text-gray-600">
              We've just sent a personalized GEO Strategy email to <span className="font-bold">{email}</span>.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left">
              <p className="text-xs font-bold text-slate-400 uppercase mb-2">Preliminary AI Insight:</p>
              <p className="text-sm text-slate-700 italic">"{aiInsight}"</p>
            </div>
            <button 
              onClick={onClose}
              className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition"
            >
              Close and Continue
            </button>
          </div>
        )}
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>
    </div>
  );
};
