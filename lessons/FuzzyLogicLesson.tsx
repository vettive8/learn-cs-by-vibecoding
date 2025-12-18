
import React, { useState } from 'react';
import VibecodingPrompt from '../components/VibecodingPrompt';
import { Language } from '../types';

interface Props { lang: Language }

const FuzzyLogicLesson: React.FC<Props> = ({ lang }) => {
  const [val, setVal] = useState(50);

  const content = {
    en: {
      title: "Fuzzy Logic: Embracing Ambiguity",
      desc: "Computers love 1s and 0s. Humans love nuances. Fuzzy logic is the bridge. Instead of saying 'The water is Hot (True)', we say 'The water is 70% Hot and 30% Lukewarm'.",
      interactive: "Membership Visualization",
      sliderL: "Input Value (e.g. Temperature)",
      fuzzT: "Fuzzification", fuzzD: "Converting a crisp number into degrees of membership.",
      ruleT: "Inference Engine", ruleD: "Using 'If-Then' rules on fuzzy sets (e.g., If Hot, then fan speed = Fast).",
      defT: "Defuzzification", defD: "Converting the fuzzy result back into a single concrete action.",
      noteT: "Mentor's Note: Why Fuzzy?",
      noteD: "Traditional logic is brittle. Fuzzy logic allows for smooth control systems (like rice cookers or ABS brakes) that feel more 'human' and robust."
    },
    pl: {
      title: "Logika Rozmyta: Akceptacja niejednoznaczności",
      desc: "Komputery kochają 1 i 0. Ludzie kochają niuanse. Logika rozmyta jest mostem. Zamiast mówić 'Woda jest Gorąca (Prawda)', mówimy 'Woda jest w 70% Gorąca i w 30% Letnia'.",
      interactive: "Wizualizacja Przynależności",
      sliderL: "Wartość wejściowa (np. Temperatura)",
      fuzzT: "Fazyfikacja", fuzzD: "Zamiana konkretnej liczby na stopnie przynależności.",
      ruleT: "Wnioskowanie", ruleD: "Stosowanie reguł 'Jeśli-To' na zbiorach rozmytych.",
      defT: "Defazyfikacja", defD: "Zamiana rozmytego wyniku z powrotem na konkretne działanie.",
      noteT: "Notatka Mentora: Dlaczego logika rozmyta?",
      noteD: "Tradycyjna logika jest sztywna. Logika rozmyta pozwala na płynne systemy sterowania (jak ryżowary czy ABS), które wydają się bardziej 'ludzkie'."
    }
  }[lang];

  // Simple triangular membership calculation
  const getMembership = (x: number, start: number, peak: number, end: number) => {
    if (x <= start || x >= end) return 0;
    if (x <= peak) return (x - start) / (peak - start);
    return (end - x) / (end - peak);
  };

  const cold = getMembership(val, 0, 0, 50);
  const warm = getMembership(val, 25, 50, 75);
  const hot = getMembership(val, 50, 100, 100);

  return (
    <div className="space-y-12 pb-20">
      <section className="prose prose-invert max-w-none">
        <h3 className="text-3xl font-bold mb-6 text-yellow-400">{content.title}</h3>
        <p className="text-zinc-400 text-lg leading-relaxed">{content.desc}</p>
      </section>

      <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
           <div className="flex-1 space-y-6">
              <h4 className="text-xl font-bold">{content.interactive}</h4>
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 font-mono uppercase">{content.sliderL}: {val}</label>
                <input 
                  type="range" min="0" max="100" value={val} 
                  onChange={(e) => setVal(parseInt(e.target.value))}
                  className="w-full accent-yellow-400 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div className="w-24 text-xs font-bold text-blue-400 uppercase">Cold: {(cold * 100).toFixed(0)}%</div>
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 transition-all" style={{ width: `${cold * 100}%` }}></div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-24 text-xs font-bold text-green-400 uppercase">Warm: {(warm * 100).toFixed(0)}%</div>
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 transition-all" style={{ width: `${warm * 100}%` }}></div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-24 text-xs font-bold text-red-400 uppercase">Hot: {(hot * 100).toFixed(0)}%</div>
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                       <div className="h-full bg-red-500 transition-all" style={{ width: `${hot * 100}%` }}></div>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="w-full md:w-64 h-48 bg-black/40 rounded-xl border border-zinc-800 relative p-4 flex flex-col justify-end">
              {/* Membership Graph Sketch */}
              <div className="absolute inset-0 p-4 opacity-50">
                 <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline points="0,0 0,100 50,100" fill="none" stroke="#60a5fa" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <polyline points="25,100 50,0 75,100" fill="none" stroke="#4ade80" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <polyline points="50,100 100,0 100,100" fill="none" stroke="#f87171" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <line x1={val} y1="0" x2={val} y2="100" stroke="white" strokeWidth="1" strokeDasharray="2" />
                 </svg>
              </div>
              <div className="text-[10px] text-zinc-500 text-center font-mono">Membership Functions (µ)</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
             <p className="text-yellow-400 font-bold text-xs uppercase mb-1">{content.fuzzT}</p>
             <p className="text-[10px] text-zinc-500 leading-tight">{content.fuzzD}</p>
          </div>
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
             <p className="text-yellow-400 font-bold text-xs uppercase mb-1">{content.ruleT}</p>
             <p className="text-[10px] text-zinc-500 leading-tight">{content.ruleD}</p>
          </div>
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
             <p className="text-yellow-400 font-bold text-xs uppercase mb-1">{content.defT}</p>
             <p className="text-[10px] text-zinc-500 leading-tight">{content.defD}</p>
          </div>
        </div>
      </section>

      <div className="bg-yellow-500/5 border border-yellow-500/20 p-6 rounded-2xl">
          <h5 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            {content.noteT}
          </h5>
          <p className="text-sm text-zinc-400">{content.noteD}</p>
      </div>

      <VibecodingPrompt 
        lang={lang}
        topic={lang === 'en' ? "73 Fuzzy Logic Controller" : "73 Sterownik Logiki Rozmytej"} 
        context="I want to build a simple Mamdani-style Fuzzy Inference System in Python. Define triangular membership functions for temperature and output fan speed."
      />
    </div>
  );
};

export default FuzzyLogicLesson;
