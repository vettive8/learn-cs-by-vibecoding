
import React from 'react';
import VibecodingPrompt from '../components/VibecodingPrompt';
import { Language } from '../types';

interface Props { lang: Language }

const BackpropLesson: React.FC<Props> = ({ lang }) => {
  const content = {
    en: {
      title: "Backpropagation: The Art of Retelling",
      desc: "Imagine a game of 'Telephone' where the message gets garbled. At the end, the teacher shows you the correct message. Backpropagation is the process of going backwards through the line and telling each person how much they messed up.",
      dance: "The Three-Step Dance",
      step1T: "The Forward Pass", step1D: "Calculate the output. Usually wrong at first!",
      step2T: "The Loss Calculation", step2D: "How wrong were we? (Target - Prediction)²",
      step3T: "The Backward Pass", step3D: "Use the chain rule to blame specific weights for the error.",
      whyT: "Why the Chain Rule?",
      whyD: "In a network, the output depends on the last layer, which depends on the middle layer, which depends on the first. To change the output, we must understand how a tiny change at the beginning ripples through the chain."
    },
    pl: {
      title: "Propagacja wsteczna: Sztuka korygowania",
      desc: "Wyobraź sobie grę w 'Głuchy telefon', w której wiadomość zostaje zniekształcona. Na końcu nauczyciel pokazuje poprawną treść. Propagacja wsteczna to proces cofania się wzdłuż linii i mówienia każdemu, jak bardzo się pomylił.",
      dance: "Taniec w trzech krokach",
      step1T: "Krok w przód (Forward Pass)", step1D: "Oblicz wynik. Na początku zazwyczaj błędny!",
      step2T: "Obliczanie straty (Loss)", step2D: "Jak bardzo się pomyliliśmy? (Cel - Wynik)²",
      step3T: "Krok w tył (Backward Pass)", step3D: "Użyj reguły łańcuchowej, aby obarczyć winą konkretne wagi.",
      whyT: "Dlaczego reguła łańcuchowa?",
      whyD: "W sieci wynik zależy od ostatniej warstwy, która zależy od środkowej, która zależy od pierwszej. Aby zmienić wynik, musimy zrozumieć, jak mała zmiana na początku wpływa na całość."
    }
  }[lang];

  return (
    <div className="space-y-12 pb-20">
      <section className="prose prose-invert max-w-none">
        <h3 className="text-3xl font-bold mb-6 text-orange-400">{content.title}</h3>
        <p className="text-zinc-400 text-lg leading-relaxed">{content.desc}</p>

        <div className="my-10 p-8 bg-zinc-900 rounded-3xl border border-zinc-800 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-4">
            <h4 className="text-xl font-bold text-white">{content.dance}</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold border border-orange-500/30">1</span>
                <div>
                  <p className="font-bold text-zinc-200">{content.step1T}</p>
                  <p className="text-xs text-zinc-500">{content.step1D}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold border border-orange-500/30">2</span>
                <div>
                  <p className="font-bold text-zinc-200">{content.step2T}</p>
                  <p className="text-xs text-zinc-500">{content.step2D}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold border border-orange-500/30">3</span>
                <div>
                  <p className="font-bold text-zinc-200">{content.step3T}</p>
                  <p className="text-xs text-zinc-500">{content.step3D}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-64 h-64 relative flex items-center justify-center">
             <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
             <div className="relative z-10 space-y-4 text-center">
                <div className="font-mono text-3xl font-bold text-orange-400">∂Loss / ∂w</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-tighter">{lang === 'en' ? 'The Gradient' : 'Gradient'}</div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-500/5 border border-orange-500/20 p-8 rounded-3xl">
        <h5 className="text-xl font-bold text-orange-300 mb-4">{content.whyT}</h5>
        <p className="text-zinc-400 mb-6">{content.whyD}</p>
        <div className="p-4 bg-black/40 rounded-xl font-mono text-xs text-orange-200/60 border border-orange-500/10">
          new_weight = current_weight - (learning_rate * gradient)
        </div>
      </section>

      <VibecodingPrompt 
        lang={lang}
        topic={lang === 'en' ? "72 Backpropagation from Scratch" : "72 Wsteczna propagacja błędów od podstaw"} 
        context="I want a Python script that implements backpropagation on a tiny 2-3-1 network to solve the XOR problem."
      />
    </div>
  );
};

export default BackpropLesson;
