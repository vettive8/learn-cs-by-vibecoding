
import React from 'react';
import { LessonId, Lesson, Language } from '../types';

interface SidebarProps {
  lessons: Lesson[];
  activeLessonId: LessonId | null;
  onSelectLesson: (id: LessonId) => void;
  onHome: () => void;
  lang: Language;
}

const Sidebar: React.FC<SidebarProps> = ({ lessons, activeLessonId, onSelectLesson, onHome, lang }) => {
  return (
    <aside className="w-64 bg-[#121214] border-r border-zinc-800 hidden md:flex flex-col">
      <button 
        onClick={onHome}
        className="p-6 border-b border-zinc-800 text-left hover:bg-zinc-800/30 transition-colors group"
      >
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-indigo-400 transition-all">
          Vibecoding Lab
        </h1>
        <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-semibold">
          {lang === 'en' ? 'Creative Mentor' : 'Kreatywny Mentor'}
        </p>
      </button>
      
      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="px-4 mb-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">
          {lang === 'en' ? 'The Curriculum' : 'Program Nauczania'}
        </div>
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(lesson.id)}
            className={`w-full text-left px-6 py-3 transition-colors flex items-center gap-3 border-l-2 ${
              activeLessonId === lesson.id 
                ? 'bg-zinc-800/50 text-blue-400 border-blue-500' 
                : 'text-zinc-400 border-transparent hover:bg-zinc-800/30 hover:text-zinc-200'
            }`}
          >
            <span className="font-mono text-xs opacity-50">{lesson.id.split('-')[0]}</span>
            <span className="text-sm font-medium truncate">
              {lesson.content[lang].title.split(' ').slice(1).join(' ')}
            </span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-zinc-800">
        <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <p className="text-[10px] text-blue-300 uppercase tracking-tighter font-bold">
            {lang === 'en' ? 'Mentor Ready' : 'Mentor Gotowy'}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
