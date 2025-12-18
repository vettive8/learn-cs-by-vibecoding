
import React, { useState } from 'react';
import VibecodingPrompt from '../components/VibecodingPrompt';
import { Language } from '../types';

interface Props { lang: Language }

const HeuristicLesson: React.FC<Props> = ({ lang }) => {
  const [gridSize] = useState(10);
  const [start] = useState({x: 1, y: 1});
  const [goal] = useState({x: 8, y: 8});

  const content = {
    en: {
      title: "Heuristic Search: The Educated Guess",
      desc: "In a massive maze, you could walk every single path, or you could simply keep walking towards the exit sign. A Heuristic is just a rule of thumb that says 'this way looks better'.",
      intuition: "The A* Intuition",
      formula: "A* calculates: cost so far + estimated cost to goal.",
      start: "Start", goal: "Goal", bias: "Heuristic Bias"
    },
    pl: {
      title: "Przeszukiwanie heurystyczne: Wykształcona intuicja",
      desc: "W ogromnym labiryncie możesz sprawdzić każdą ścieżkę lub po prostu iść w stronę wyjścia. Heurystyka to zasada kciuka, która mówi: 'ta droga wygląda lepiej'.",
      intuition: "Intuicja A*",
      formula: "A* oblicza: dotychczasowy koszt + szacowany koszt do celu.",
      start: "Początek", goal: "Cel", bias: "Błąd heurystyczny"
    }
  }[lang];

  return (
    <div className="space-y-12 pb-20">
      <section className="prose prose-invert max-w-none">
        <h3 className="text-3xl font-bold mb-6 text-indigo-400">{content.title}</h3>
        <p className="text-zinc-400 text-lg leading-relaxed">{content.desc}</p>
      </section>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center">
        <div className="mb-8 text-center">
          <h4 className="text-xl font-bold">{content.intuition}</h4>
          <p className="text-sm text-zinc-500 max-w-md mx-auto">
            <span className="text-indigo-400 font-mono">f(n) = g(n) + h(n)</span>. {content.formula}
          </p>
        </div>
        <div className="grid gap-1 bg-zinc-950 p-4 rounded-xl border border-zinc-800" style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
          {Array.from({ length: gridSize * gridSize }).map((_, i) => {
            const x = i % gridSize;
            const y = Math.floor(i / gridSize);
            const isStart = x === start.x && y === start.y;
            const isGoal = x === goal.x && y === goal.y;
            const isPath = x >= start.x && x <= goal.x && y >= start.y && y <= goal.y && (x === y || x === y+1);
            return (
              <div key={i} className={`w-6 h-6 md:w-10 md:h-10 rounded flex items-center justify-center text-[8px] border ${isStart ? 'bg-indigo-500 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : isGoal ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : isPath ? 'bg-indigo-500/20 border-indigo-500/20' : 'bg-zinc-900 border-zinc-800/50'}`}>
                {isStart ? 'S' : isGoal ? 'G' : ''}
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex gap-4">
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-indigo-500 rounded"></div><span className="text-xs text-zinc-400">{content.start}</span></div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500 rounded"></div><span className="text-xs text-zinc-400">{content.goal}</span></div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-indigo-500/20 rounded"></div><span className="text-xs text-zinc-400">{content.bias}</span></div>
        </div>
      </div>

      <VibecodingPrompt 
        lang={lang}
        topic={lang === 'en' ? "75 Heuristic A* Search" : "75 Przeszukiwanie heurystyczne A*"} 
        context="I want to implement the A* algorithm in Python to navigate a 2D grid with obstacles."
      />
    </div>
  );
};

export default HeuristicLesson;
