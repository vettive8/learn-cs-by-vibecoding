
import React, { useState } from 'react';
import { LessonId, Language } from './types';
import { LESSONS } from './constants';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import NeuralStructuresLesson from './lessons/NeuralStructuresLesson';
import BackpropLesson from './lessons/BackpropLesson';
import FuzzyLogicLesson from './lessons/FuzzyLogicLesson';
import EvolutionaryLesson from './lessons/EvolutionaryLesson';
import HeuristicLesson from './lessons/HeuristicLesson';

const App: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState<LessonId | null>(null);
  const [lang, setLang] = useState<Language>('en');

  const renderActiveLesson = () => {
    switch (activeLessonId) {
      case LessonId.NEURAL_STRUCTURES:
        return <NeuralStructuresLesson lang={lang} />;
      case LessonId.BACKPROPAGATION:
        return <BackpropLesson lang={lang} />;
      case LessonId.FUZZY_LOGIC:
        return <FuzzyLogicLesson lang={lang} />;
      case LessonId.GLOBAL_OPTIMIZATION:
        return <EvolutionaryLesson lang={lang} />;
      case LessonId.HEURISTIC_SEARCH:
        return <HeuristicLesson lang={lang} />;
      default:
        return <Dashboard lang={lang} onSelectLesson={setActiveLessonId} />;
    }
  };

  const activeLesson = LESSONS.find(l => l.id === activeLessonId);

  return (
    <div className="flex min-h-screen bg-[#0a0a0c] text-zinc-100 overflow-hidden">
      <Sidebar 
        lessons={LESSONS} 
        activeLessonId={activeLessonId} 
        onSelectLesson={setActiveLessonId} 
        onHome={() => setActiveLessonId(null)}
        lang={lang}
      />
      
      <div className="flex-1 flex flex-col relative overflow-y-auto">
        <Header 
          activeLesson={activeLesson} 
          onHome={() => setActiveLessonId(null)} 
          lang={lang}
          onToggleLang={() => setLang(l => l === 'en' ? 'pl' : 'en')}
        />
        <main className="p-6 md:p-12 max-w-6xl mx-auto w-full">
          {renderActiveLesson()}
        </main>
      </div>
    </div>
  );
};

export default App;
