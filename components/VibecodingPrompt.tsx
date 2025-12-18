
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

interface VibecodingPromptProps {
  topic: string;
  context: string;
  lang: Language;
}

const VibecodingPrompt: React.FC<VibecodingPromptProps> = ({ topic, context, lang }) => {
  const [prompt, setPrompt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const t = {
    en: {
      title: "AI Studio Vibecoding Prompt",
      subtitle: "Generate a prompt for Google AI Studio",
      btn: "Generate Magic Prompt",
      loading: "Thinking...",
      error: "Error connecting to Gemini. Please try again.",
      footer: "Paste this into Google AI Studio to start your vibecoding session",
      sys: "Act as a creative coding mentor. I want to 'vibecode' a project about: "
    },
    pl: {
      title: "Prompt do AI Studio",
      subtitle: "Wygeneruj prompt dla Google AI Studio",
      btn: "Generuj Magiczny Prompt",
      loading: "Myślę...",
      error: "Błąd połączenia z Gemini. Spróbuj ponownie.",
      footer: "Wklej to do Google AI Studio, aby rozpocząć sesję vibecodingu",
      sys: "Działaj jako kreatywny mentor kodowania. Chcę uprawiać 'vibecoding' projektu o: "
    }
  }[lang];

  const generatePrompt = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `${t.sys} ${topic}.
        Context: ${context}
        Provide a detailed, atmospheric, and technically instructive prompt that I can paste into an AI assistant to get a high-quality Python implementation from scratch. 
        Focus on the 'Lego bricks' vibe—explaining weights, biases, and structures intuitively.
        Respond in ${lang === 'en' ? 'English' : 'Polish'}.`,
      });
      setPrompt(response.text || "Failed to generate prompt.");
    } catch (error) {
      console.error(error);
      setPrompt(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
      <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
        <div>
          <h4 className="text-lg font-bold flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.464 15.05a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM15.657 14.243a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0z"></path></svg>
            {t.title}
          </h4>
          <p className="text-xs text-zinc-500 font-mono">{t.subtitle}</p>
        </div>
        <button 
          onClick={generatePrompt}
          disabled={loading}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-purple-500/20"
        >
          {loading ? t.loading : t.btn}
        </button>
      </div>
      
      {prompt && (
        <div className="p-6 space-y-4 animate-in slide-in-from-bottom-2 duration-300">
          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl font-mono text-sm text-zinc-400 relative group">
            <pre className="whitespace-pre-wrap">{prompt}</pre>
            <button 
              onClick={() => navigator.clipboard.writeText(prompt)}
              className="absolute top-2 right-2 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
            </button>
          </div>
          <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest font-bold">{t.footer}</p>
        </div>
      )}
    </div>
  );
};

export default VibecodingPrompt;
