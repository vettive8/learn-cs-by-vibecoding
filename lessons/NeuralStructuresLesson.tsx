
import React, { useState } from 'react';
import VibecodingPrompt from '../components/VibecodingPrompt';
import { Language } from '../types';

interface Props { lang: Language }

const NeuralStructuresLesson: React.FC<Props> = ({ lang }) => {
  const [layers, setLayers] = useState<number[]>([2, 3, 1]);

  const content = {
    en: {
      title: "The Anatomy of a Brain",
      desc: "Before we code, we build. A neural network isn't magic; it's just a stack of simple Neurons. Think of a neuron as a tiny accountant.",
      w: "Weights", wd: "How much do we trust each input? Higher weight = higher trust.",
      b: "Biases", bd: "The baseline inclination. Are we naturally skeptical or optimistic?",
      a: "Activation", ad: "The filter. 'Squashing' the math into a useful signal (0 to 1).",
      ic: "Interactive Constructor", addL: "+ Add Layer", remL: "- Remove Layer",
      noteT: "Mentor's Note: Why this structure?",
      noteD: "A single neuron can only separate things with a straight line. Stacking them in layers allows for complex pattern recognition."
    },
    pl: {
      title: "Anatomia mózgu",
      desc: "Zanim zaczniemy kodować, musimy zbudować. Sieć neuronowa to nie magia; to po prostu stos prostych Neuronów. Pomyśl o neuronie jak o małym księgowym.",
      w: "Wagi", wd: "Jak bardzo ufamy każdemu wejściu? Wyższa waga = większe zaufanie.",
      b: "Biasy", bd: "Skłonność bazowa. Czy jesteśmy naturalnie sceptyczni czy optymistyczni?",
      a: "Aktywacja", ad: "Filtr. 'Zgniatanie' matematyki w użyteczny sygnał (od 0 do 1).",
      ic: "Interaktywny Konstruktor", addL: "+ Dodaj Warstwę", remL: "- Usuń Warstwę",
      noteT: "Notatka Mentora: Dlaczego taka struktura?",
      noteD: "Pojedynczy neuron potrafi oddzielać rzeczy tylko linią prostą. Układanie ich w warstwy pozwala na rozpoznawanie złożonych wzorców."
    }
  }[lang];

  const addNeuron = (layerIndex: number) => {
    const newLayers = [...layers];
    if (newLayers[layerIndex] < 8) newLayers[layerIndex]++;
    setLayers(newLayers);
  };

  const removeNeuron = (layerIndex: number) => {
    const newLayers = [...layers];
    if (newLayers[layerIndex] > 1) newLayers[layerIndex]--;
    setLayers(newLayers);
  };

  const addLayer = () => {
    if (layers.length < 5) setLayers([...layers, 2]);
  };

  const removeLayer = () => {
    if (layers.length > 2) setLayers(layers.slice(0, -1));
  };

  return (
    <div className="space-y-12 pb-20">
      <section className="prose prose-invert max-w-none">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">{content.title}</h3>
        <p className="text-zinc-400 text-lg leading-relaxed">{content.desc}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h4 className="font-bold text-white mb-2">{content.w}</h4>
            <p className="text-xs text-zinc-500">{content.wd}</p>
          </div>
          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h4 className="font-bold text-white mb-2">{content.b}</h4>
            <p className="text-xs text-zinc-500">{content.bd}</p>
          </div>
          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h4 className="font-bold text-white mb-2">{content.a}</h4>
            <p className="text-xs text-zinc-500">{content.ad}</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-zinc-200">{content.ic}</h4>
          <div className="flex gap-2">
            <button onClick={addLayer} className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors">{content.addL}</button>
            <button onClick={removeLayer} className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-white text-xs font-bold rounded-lg transition-colors">{content.remL}</button>
          </div>
        </div>

        <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-3xl min-h-[400px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="relative flex gap-20 items-center">
            {layers.map((neuronCount, lIndex) => (
              <div key={lIndex} className="flex flex-col gap-6 items-center">
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                  {lIndex === 0 ? (lang === 'en' ? 'Input' : 'Wejście') : lIndex === layers.length - 1 ? (lang === 'en' ? 'Output' : 'Wyjście') : `${lang === 'en' ? 'Hidden' : 'Ukryta'} ${lIndex}`}
                </div>
                {Array.from({ length: neuronCount }).map((_, nIndex) => (
                  <div key={nIndex} className="relative group">
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                      lIndex === 0 ? 'border-emerald-500/50 bg-emerald-500/10' :
                      lIndex === layers.length - 1 ? 'border-purple-500/50 bg-purple-500/10' :
                      'border-blue-500/50 bg-blue-500/10'
                    }`}>
                      <div className="w-2 h-2 rounded-full bg-current opacity-50"></div>
                    </div>
                    {lIndex < layers.length - 1 && (
                      <div className="absolute top-1/2 left-full pointer-events-none">
                        <svg className="overflow-visible" style={{ width: 80, height: 1 }}>
                          {Array.from({ length: layers[lIndex + 1] }).map((__, nextIndex) => {
                            const yOffset = (nextIndex - (layers[lIndex+1]-1)/2) * 54;
                            return <line key={nextIndex} x1="0" y1="0" x2="80" y2={yOffset} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />;
                          })}
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex gap-1 mt-4">
                  <button onClick={() => addNeuron(lIndex)} className="w-6 h-6 flex items-center justify-center bg-zinc-800 rounded text-zinc-400 hover:text-white">+</button>
                  <button onClick={() => removeNeuron(lIndex)} className="w-6 h-6 flex items-center justify-center bg-zinc-800 rounded text-zinc-400 hover:text-white">-</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl">
          <h5 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            {content.noteT}
          </h5>
          <p className="text-sm text-zinc-400">{content.noteD}</p>
        </div>
      </section>

      <VibecodingPrompt 
        lang={lang}
        topic={lang === 'en' ? "71 Neural Network Structure" : "71 Struktura Sieci Neuronowej"} 
        context={`I want to build a simple MLP (Multi-Layer Perceptron) in pure Python. No NumPy. No TensorFlow. Just lists and math. Structure: ${layers.join('-')}.`}
      />
    </div>
  );
};

export default NeuralStructuresLesson;
