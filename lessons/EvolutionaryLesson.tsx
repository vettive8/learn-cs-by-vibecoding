
import React, { useState, useEffect } from 'react';
import VibecodingPrompt from '../components/VibecodingPrompt';
import { Language } from '../types';

interface Props { lang: Language }

const EvolutionaryLesson: React.FC<Props> = ({ lang }) => {
  const [generation, setGeneration] = useState(0);
  const [population, setPopulation] = useState<{x: number, fitness: number}[]>([]);

  const content = {
    en: {
      title: "Survival of the Fittest Code",
      desc: "Sometimes, gradients don't exist. When calculus fails, we turn to Biology.",
      pool: "The Evolution Pool", poolD: "Goal: All dots should cluster at the center (50)",
      gen: "Generation", btn: "Evolve Next Gen",
      crossT: "Crossover", crossD: "Mixing two good solutions to find a better one.",
      mutT: "Mutation", mutD: "Random changes to prevent stagnation and explore new territory.",
      selT: "Selection", selD: "Killing the weak. Only the best survive to breed."
    },
    pl: {
      title: "Przetrwanie najlepiej dopasowanego kodu",
      desc: "Czasami gradienty nie istnieją. Gdy zawodzi rachunek różniczkowy, zwracamy się ku Biologii.",
      pool: "Pula ewolucyjna", poolD: "Cel: Wszystkie kropki powinny skupić się w centrum (50)",
      gen: "Generacja", btn: "Ewoluuj następną",
      crossT: "Krzyżowanie", crossD: "Mieszanie dwóch dobrych rozwiązań, aby znaleźć lepsze.",
      mutT: "Mutacja", mutD: "Losowe zmiany zapobiegające stagnacji i eksplorujące nowe obszary.",
      selT: "Selekcja", selD: "Eliminacja słabych. Tylko najlepsi przetrwają, by się rozmnażać."
    }
  }[lang];

  useEffect(() => {
    const initial = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      fitness: 0
    }));
    setPopulation(initial);
  }, []);

  const nextGen = () => {
    const scored = population.map(p => ({
      ...p,
      fitness: 100 - Math.abs(50 - p.x)
    }));
    const sorted = [...scored].sort((a, b) => b.fitness - a.fitness);
    const parents = sorted.slice(0, 5);
    const next: {x: number, fitness: number}[] = [];
    for (let i = 0; i < 15; i++) {
      const p1 = parents[Math.floor(Math.random() * parents.length)];
      const p2 = parents[Math.floor(Math.random() * parents.length)];
      let childX = (p1.x + p2.x) / 2;
      childX += (Math.random() - 0.5) * 10;
      next.push({ x: Math.max(0, Math.min(100, childX)), fitness: 0 });
    }
    setPopulation(next);
    setGeneration(g => g + 1);
  };

  return (
    <div className="space-y-12 pb-20">
      <section className="prose prose-invert max-w-none">
        <h3 className="text-3xl font-bold mb-6 text-emerald-400">{content.title}</h3>
        <p className="text-zinc-400 text-lg leading-relaxed">{content.desc}</p>
      </section>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-bold">{content.pool}</h4>
            <p className="text-xs text-zinc-500">{content.poolD}</p>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-xs font-mono text-zinc-500">{content.gen}: {generation}</span>
             <button onClick={nextGen} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold transition-all">{content.btn}</button>
          </div>
        </div>
        <div className="h-20 bg-black/40 rounded-2xl relative flex items-center border border-zinc-800 px-4">
          {population.map((p, i) => (
            <div key={i} className="absolute w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-500" style={{ left: `${p.x}%` }} />
          ))}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
             <p className="text-emerald-400 font-bold text-xs uppercase mb-1">{content.crossT}</p>
             <p className="text-[10px] text-zinc-500 leading-tight">{content.crossD}</p>
          </div>
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
             <p className="text-emerald-400 font-bold text-xs uppercase mb-1">{content.mutT}</p>
             <p className="text-[10px] text-zinc-500 leading-tight">{content.mutD}</p>
          </div>
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
             <p className="text-emerald-400 font-bold text-xs uppercase mb-1">{content.selT}</p>
             <p className="text-[10px] text-zinc-500 leading-tight">{content.selD}</p>
          </div>
        </div>
      </div>

      <VibecodingPrompt 
        lang={lang}
        topic={lang === 'en' ? "74 Evolutionary Optimization" : "74 Optymalizacja ewolucyjna"} 
        context="I want to solve the 'Knapsack Problem' using a Genetic Algorithm in Python."
      />
    </div>
  );
};

export default EvolutionaryLesson;
