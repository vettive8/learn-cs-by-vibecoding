
import { LessonId, Lesson } from './types';

export const LESSONS: Lesson[] = [
  {
    id: LessonId.NEURAL_STRUCTURES,
    title: "71 Neural Network Structures",
    subtitle: "Lego bricks of intelligence",
    analogy: "Think of a neuron like a panel of friends you ask for advice. Some friends you trust more (Weights), and you might have a baseline bias regardless of what they say (Bias).",
    description: "Learn how simple mathematical units stack together to form complex decision-making architectures."
  },
  {
    id: LessonId.BACKPROPAGATION,
    title: "72 Backpropagation Algorithm",
    subtitle: "Learning from mistakes",
    analogy: "It's like playing a game of 'Hot and Cold'. When the network is 'Cold' (wrong), we trace back the error to find which specific connection led us astray and nudge it to be 'Hotter'.",
    description: "The engine that drives deep learning: calculating gradients to minimize error."
  },
  {
    id: LessonId.GLOBAL_OPTIMIZATION,
    title: "74 Evolutionary Algorithms",
    subtitle: "Digital Darwinism",
    analogy: "Imagine a kitchen with 100 chefs trying to cook the perfect soup. Only the top 10 get to keep their recipe, and they mix their ingredients together for the next generation.",
    description: "Using nature's strategy—survival of the fittest—to find optimal solutions in vast search spaces."
  },
  {
    id: LessonId.HEURISTIC_SEARCH,
    title: "75 Heuristic Search",
    subtitle: "Finding the path with a compass",
    analogy: "Instead of wandering randomly in a forest, you always walk in the direction of the smell of your grandma's baking. The 'smell' is your heuristic.",
    description: "Smart pathfinding using A* and other algorithms that prioritize 'promising' paths over blind ones."
  }
];
