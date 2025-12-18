
import React from 'react';
import VibecodingPrompt from '../components/VibecodingPrompt';

const BackpropLesson: React.FC = () => {
  return (
    <div className="space-y-12 pb-20">
      <section className="prose prose-invert max-w-none">
        <h3 className="text-3xl font-bold mb-6 text-orange-400">Backpropagation: The Art of Retelling</h3>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Imagine a game of "Telephone" where the message gets garbled. At the end, the teacher shows you the 
          correct message. Backpropagation is the process of going <strong>backwards</strong> through the line 
          and telling each person how much they messed up, so they can do better next time.
        </p>

        <div className="my-10 p-8 bg-zinc-900 rounded-3xl border border-zinc-800 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-4">
            <h4 className="text-xl font-bold text-white">The Three-Step Dance</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold border border-orange-500/30">1</span>
                <div>
                  <p className="font-bold text-zinc-200">The Forward Pass</p>
                  <p className="text-xs text-zinc-500">Calculate the output. Usually wrong at first!</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold border border-orange-500/30">2</span>
                <div>
                  <p className="font-bold text-zinc-200">The Loss Calculation</p>
                  <p className="text-xs text-zinc-500">How wrong were we? (Target - Prediction)²</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold border border-orange-500/30">3</span>
                <div>
                  <p className="font-bold text-zinc-200">The Backward Pass</p>
                  <p className="text-xs text-zinc-500">Use the chain rule to blame specific weights for the error.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-64 h-64 relative flex items-center justify-center">
             <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
             <div className="relative z-10 space-y-4 text-center">
                <div className="font-mono text-3xl font-bold text-orange-400">∂Loss / ∂w</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-tighter">The Gradient</div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-500/5 border border-orange-500/20 p-8 rounded-3xl">
        <h5 className="text-xl font-bold text-orange-300 mb-4">Why the Chain Rule?</h5>
        <p className="text-zinc-400 mb-6">
          In a network, the output depends on the last layer, which depends on the middle layer, which depends on the first. 
          To change the output, we must understand how a tiny change at the <strong>beginning</strong> ripples through the chain.
          It's like adjusting the knobs on a series of nested machines.
        </p>
        <div className="p-4 bg-black/40 rounded-xl font-mono text-xs text-orange-200/60 border border-orange-500/10">
          new_weight = current_weight - (learning_rate * gradient)
        </div>
      </section>

      <VibecodingPrompt 
        topic="72 Backpropagation from Scratch" 
        context="I want a Python script that implements backpropagation on a tiny 2-3-1 network to solve the XOR problem. Show the derivatives explicitly. Use a simple 'train' function that loops 10,000 times and prints the loss dropping. Explain the Gradient Descent step in terms of 'walking down a hill'."
      />
    </div>
  );
};

export default BackpropLesson;
