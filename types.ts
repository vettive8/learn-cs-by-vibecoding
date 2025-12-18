
export enum LessonId {
  NEURAL_STRUCTURES = '71-neural-structures',
  BACKPROPAGATION = '72-backprop',
  GLOBAL_OPTIMIZATION = '74-evo-algos',
  HEURISTIC_SEARCH = '75-heuristic-search'
}

export interface Lesson {
  id: LessonId;
  title: string;
  subtitle: string;
  analogy: string;
  description: string;
}

export interface Neuron {
  id: string;
  layerIndex: number;
}

export interface NetworkConfig {
  layers: number[];
}
