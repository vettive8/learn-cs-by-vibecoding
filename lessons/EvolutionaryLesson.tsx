
import React, { useState, useEffect } from 'react';
import VibecodingPrompt from '../components/VibecodingPrompt';

const EvolutionaryLesson: React.FC = () => {
  const [generation, setGeneration] = useState(0);
  const [population, setPopulation] = useState<{x: number, fitness: number}[]>([]);

  useEffect(() => {
    // Initial random population
    const initial = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      fitness: 0
    }));
    setPopulation(initial);
  }, []);

  const nextGen = () => {
    // 1. Calculate fitness (closer to center 50 is better)
    const scored = population.map(p => ({
      ...p,
      fitness: 100 - Math.abs(50 - p.x)
    }));

    // 2. Selection (Take top 5)
    const sorted = [...scored].sort((a, b) => b.fitness - a.fitness);
    const parents = sorted.slice(0, 5);

    // 3. New Gen (Crossover + Mutation)
    const next: {x: number, fitness: number}[] = [];
    for (let i = 0; i < 15; i++) {
      const p1 = parents[Math.floor(Math.random() * parents.length)];
      const p2 = parents[Math.floor(Math.random() * parents.length)];
      let childX = (p1.x + p2.x) / 2; // Simple crossover
      childX += (Math.random() - 0.5) * 10; // Mutation
      next.push({ x: Math.max(0, Math.min(100, childX)), fitness: 0 });
    }

    setPopulation(next);
    setGeneration(g => g + 1);
  };

  return (
    <div className="space-y-12 pb-20">
      <section className="prose prose-invert max-w-none">
        <h3 className="text-3xl font-bold mb-6 text-emerald-400">Survival of the Fittest Code</h3>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Sometimes, gradients don't exist. Sometimes the problem is so messy you can't use math to find the answer. 
          When calculus fails, we turn to <strong>Biology</strong>.
        </p>
      </section>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-bold">The Evolution Pool</h4>
            <p className="text-xs text-zinc-500">Goal: All dots should cluster at the center (50)</p>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-xs font-mono text-zinc-500">Generation: {generation}</span>
             <button 
                onClick={nextGen}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold transition-all"
             >
                Evolve Next Gen
             </button>
          </div>
        </div>

        <div className="h-20 bg-black/40 rounded-2xl relative flex items-center border border-zinc-800 px-4">
          {population.map((p, i) => (
            <div 
              key={i}
              className="absolute w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-500"
              style={{ left: `${p.x}%` }}
            />
          ))}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
             <p className="text-emerald-400 font-bold text-xs uppercase mb-1">Crossover</p>
             <p className="text-[10px] text-zinc-500 leading-tight">Mixing two good solutions to find a better one.</p>
          </div>
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
             <p className="text-emerald-400 font-bold text-xs uppercase mb-1">Mutation</p>
             <p className="text-[10px] text-zinc-500 leading-tight">Random changes to prevent stagnation and explore new territory.</p>
          </div>
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
             <p className="text-emerald-400 font-bold text-xs uppercase mb-1">Selection</p>
             <p className="text-[10px] text-zinc-500 leading-tight">Killing the weak. Only the best survive to breed.</p>
          </div>
        </div>
      </div>

      <VibecodingPrompt 
        topic="74 Evolutionary Optimization" 
        context="I want to solve the 'Knapsack Problem' using a Genetic Algorithm in Python. Explain Chromosomes, Population, and Fitness functions as if we're breeding digital creatures to solve a burglary heist."
      />
    </div>
  );
};

export default EvolutionaryLesson;
