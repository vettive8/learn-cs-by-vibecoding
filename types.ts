
export enum LessonId {
  NEURAL_STRUCTURES = '71-neural-structures',
  BACKPROPAGATION = '72-backprop',
  FUZZY_LOGIC = '73-fuzzy-logic',
  GLOBAL_OPTIMIZATION = '74-evo-algos',
  HEURISTIC_SEARCH = '75-heuristic-search'
}

export type Language = 'en' | 'pl';

export interface LessonContent {
  title: string;
  subtitle: string;
  analogy: string;
  description: string;
}

export interface Lesson {
  id: LessonId;
  content: Record<Language, LessonContent>;
}

export interface Neuron {
  id: string;
  layerIndex: number;
}

export interface NetworkConfig {
  layers: number[];
}
