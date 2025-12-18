
import React from 'react';
import { LessonId, Language } from '../types';
import { LESSONS } from '../constants';

interface DashboardProps {
  onSelectLesson: (id: LessonId) => void;
  lang: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectLesson, lang }) => {
  const content = {
    en: {
      title: "Code with Intuition",
      desc: "Forget the black box. Let's rebuild computer science from the ground up, like tinkering with digital Lego bricks.",
      module: "Module",
      start: "START LEARNING"
    },
    pl: {
      title: "Koduj z Intuicją",
      desc: "Zapomnij o czarnej skrzynce. Odbudujmy informatykę od podstaw, jakbyśmy bawili się cyfrowymi klockami Lego.",
      module: "Moduł",
      start: "ZACZNIJ NAUKĘ"
    }
  }[lang];

  return (
    <div className="space-y-12 py-8 animate-in fade-in duration-700">
      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          {content.title}
        </h1>
        <p className="text-zinc-400 text-lg">
          {content.desc}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LESSONS.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(lesson.id)}
            className="group relative p-8 bg-[#121214] border border-zinc-800 rounded-3xl text-left hover:border-blue-500/50 hover:bg-zinc-800/40 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-8xl font-black">{lesson.id.split('-')[0]}</span>
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-semibold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                {content.module} {lesson.id.split('-')[0]}
              </span>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {lesson.content[lang].title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {lesson.content[lang].description}
              </p>
              <div className="flex items-center text-xs font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                {content.start} 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
