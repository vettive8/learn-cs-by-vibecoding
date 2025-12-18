
import React, { useState } from 'react';
import VibecodingPrompt from '../components/VibecodingPrompt';

const NeuralStructuresLesson: React.FC = () => {
  const [layers, setLayers] = useState<number[]>([2, 3, 1]);

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
        <h3 className="text-3xl font-bold mb-6 text-blue-400">The Anatomy of a Brain</h3>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Before we code, we build. A neural network isn't magic; it's just a stack of simple <strong>Neurons</strong>. 
          Think of a neuron as a tiny accountant. It takes inputs, multiplies them by their importance (Weights), 
          adds them together with a starting baseline (Bias), and then decides if the result is worth yelling about (Activation Function).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h4 className="font-bold text-white mb-2">Weights</h4>
            <p className="text-xs text-zinc-500">How much do we trust each input? Higher weight = higher trust.</p>
          </div>
          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h4 className="font-bold text-white mb-2">Biases</h4>
            <p className="text-xs text-zinc-500">The baseline inclination. Are we naturally skeptical or optimistic?</p>
          </div>
          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h4 className="font-bold text-white mb-2">Activation</h4>
            <p className="text-xs text-zinc-500">The filter. 'Squashing' the math into a useful signal (0 to 1).</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-zinc-200">Interactive Constructor</h4>
          <div className="flex gap-2">
            <button onClick={addLayer} className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors">+ Add Layer</button>
            <button onClick={removeLayer} className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-white text-xs font-bold rounded-lg transition-colors">- Remove Layer</button>
          </div>
        </div>

        <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-3xl min-h-[400px] flex items-center justify-center relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

          <div className="relative flex gap-20 items-center">
            {layers.map((neuronCount, lIndex) => (
              <div key={lIndex} className="flex flex-col gap-6 items-center">
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                  {lIndex === 0 ? 'Input' : lIndex === layers.length - 1 ? 'Output' : `Hidden ${lIndex}`}
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
                    {/* SVG Connections to next layer */}
                    {lIndex < layers.length - 1 && (
                      <div className="absolute top-1/2 left-full pointer-events-none">
                        <svg className="overflow-visible" style={{ width: 80, height: 1 }}>
                          {Array.from({ length: layers[lIndex + 1] }).map((__, nextIndex) => {
                            const yOffset = (nextIndex - (layers[lIndex+1]-1)/2) * 54;
                            return (
                              <line 
                                key={nextIndex}
                                x1="0" y1="0" 
                                x2="80" y2={yOffset} 
                                stroke="rgba(255,255,255,0.05)" 
                                strokeWidth="1"
                              />
                            );
                          })}
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
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
            Mentor's Note: Why this structure?
          </h5>
          <p className="text-sm text-zinc-400">
            A single neuron can only separate things with a straight line. But when we stack them in <strong>Layers</strong>, 
            the first layer finds simple patterns (like edges), the second layer finds shapes (like circles), 
            and the final layer makes the big decision (it's a car!). The more layers, the deeper the reasoning.
          </p>
        </div>
      </section>

      <VibecodingPrompt 
        topic="71 Neural Network Structure" 
        context={`I want to build a simple MLP (Multi-Layer Perceptron) in pure Python. No NumPy. No TensorFlow. Just lists and math. 
        Structure: ${layers.join('-')}. 
        I need classes for Neuron, Layer, and Network. Explain weight initialization clearly.`}
      />
    </div>
  );
};

export default NeuralStructuresLesson;
