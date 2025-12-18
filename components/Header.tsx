
import React from 'react';
import { Lesson, Language } from '../types';

interface HeaderProps {
  activeLesson?: Lesson;
  onHome: () => void;
  lang: Language;
  onToggleLang: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeLesson, onHome, lang, onToggleLang }) => {
  return (
    <header className="sticky top-0 z-20 w-full bg-[#0a0a0c]/80 backdrop-blur-md border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={onHome}
          className={`p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 transition-colors ${!activeLesson ? 'md:hidden' : ''}`}
          title={lang === 'en' ? 'Back to Dashboard' : 'Wróć do Panelu'}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
        </button>
        <div className="cursor-pointer group" onClick={onHome}>
          {activeLesson ? (
            <div>
              <h2 className="text-lg font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">{activeLesson.content[lang].title}</h2>
              <p className="text-xs text-zinc-500">{activeLesson.content[lang].subtitle}</p>
            </div>
          ) : (
            <h2 className="text-lg font-bold text-zinc-100">
              {lang === 'en' ? 'Welcome, Student' : 'Witaj, Studencie'}
            </h2>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={onToggleLang}
          className="px-3 py-1 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded-full text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-all"
        >
          {lang === 'en' ? 'PL' : 'EN'}
        </button>
        <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded hidden sm:inline">VIBECODE v1.1</span>
      </div>
    </header>
  );
};

export default Header;
