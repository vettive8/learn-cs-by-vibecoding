
import React, { useState } from 'react';
import { LessonId } from './types';
import { LESSONS } from './constants';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import NeuralStructuresLesson from './lessons/NeuralStructuresLesson';
import BackpropLesson from './lessons/BackpropLesson';
import EvolutionaryLesson from './lessons/EvolutionaryLesson';
import HeuristicLesson from './lessons/HeuristicLesson';

const App: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState<LessonId | null>(null);

  const renderActiveLesson = () => {
    switch (activeLessonId) {
      case LessonId.NEURAL_STRUCTURES:
        return <NeuralStructuresLesson />;
      case LessonId.BACKPROPAGATION:
        return <BackpropLesson />;
      case LessonId.GLOBAL_OPTIMIZATION:
        return <EvolutionaryLesson />;
      case LessonId.HEURISTIC_SEARCH:
        return <HeuristicLesson />;
      default:
        return <Dashboard onSelectLesson={setActiveLessonId} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0c] text-zinc-100 overflow-hidden">
      <Sidebar 
        lessons={LESSONS} 
        activeLessonId={activeLessonId} 
        onSelectLesson={setActiveLessonId} 
      />
      
      <div className="flex-1 flex flex-col relative overflow-y-auto">
        <Header activeLesson={LESSONS.find(l => l.id === activeLessonId)} onHome={() => setActiveLessonId(null)} />
        <main className="p-6 md:p-12 max-w-6xl mx-auto w-full">
          {renderActiveLesson()}
        </main>
      </div>
    </div>
  );
};

export default App;
