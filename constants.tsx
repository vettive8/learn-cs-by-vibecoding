
import { LessonId, Lesson } from './types';

export const LESSONS: Lesson[] = [
  {
    id: LessonId.NEURAL_STRUCTURES,
    content: {
      en: {
        title: "71 Neural Network Structures",
        subtitle: "Lego bricks of intelligence",
        analogy: "Think of a neuron like a panel of friends you ask for advice. Some friends you trust more (Weights), and you might have a baseline bias regardless of what they say (Bias).",
        description: "Learn how simple mathematical units stack together to form complex decision-making architectures."
      },
      pl: {
        title: "71 Struktury sieci neuronowych",
        subtitle: "Klocki Lego inteligencji",
        analogy: "Pomyśl o neuronie jak o grupie przyjaciół, których pytasz o radę. Niektórym ufasz bardziej (Wagi), a do niektórych tematów masz własne uprzedzenia (Bias).",
        description: "Dowiedz się, jak proste jednostki matematyczne łączą się, tworząc złożone architektury decyzyjne."
      }
    }
  },
  {
    id: LessonId.BACKPROPAGATION,
    content: {
      en: {
        title: "72 Backpropagation Algorithm",
        subtitle: "Learning from mistakes",
        analogy: "It's like playing a game of 'Hot and Cold'. When the network is 'Cold' (wrong), we trace back the error to find which specific connection led us astray and nudge it to be 'Hotter'.",
        description: "The engine that drives deep learning: calculating gradients to minimize error."
      },
      pl: {
        title: "72 Algorytm wstecznej propagacji błędów",
        subtitle: "Nauka na błędach",
        analogy: "To jak gra w 'ciepło-zimno'. Gdy sieć jest 'zimna' (myli się), cofamy się, by sprawdzić, które połączenie nas zwiodło i korygujemy je, by było 'cieplej'.",
        description: "Silnik napędzający głębokie uczenie: obliczanie gradientów w celu minimalizacji błędu."
      }
    }
  },
  {
    id: LessonId.FUZZY_LOGIC,
    content: {
      en: {
        title: "73 Fuzzy Logic Systems",
        subtitle: "Shades of Grey",
        analogy: "Think of a shower knob. It's not just 'hot' or 'cold'; it can be 'warmish' or 'scalding'. Fuzzy logic handles categories with fuzzy boundaries.",
        description: "Moving beyond binary true/false to model the ambiguity of the real world."
      },
      pl: {
        title: "73 Logika rozmyta – struktura systemu",
        subtitle: "Odcienie szarości",
        analogy: "Pomyśl o pokrętle pod prysznicem. Woda nie jest tylko 'gorąca' lub 'zimna'; może być 'letnia' lub 'wrząca'. Logika rozmyta radzi sobie z rozmytymi granicami.",
        description: "Wyjście poza binarną prawdę i fałsz, by modelować niejednoznaczność świata rzeczywistego."
      }
    }
  },
  {
    id: LessonId.GLOBAL_OPTIMIZATION,
    content: {
      en: {
        title: "74 Evolutionary Algorithms",
        subtitle: "Digital Darwinism",
        analogy: "Imagine a kitchen with 100 chefs trying to cook the perfect soup. Only the top 10 get to keep their recipe, and they mix their ingredients together for the next generation.",
        description: "Using nature's strategy—survival of the fittest—to find optimal solutions in vast search spaces."
      },
      pl: {
        title: "74 Optymalizacja globalna – algorytmy ewolucyjne",
        subtitle: "Cyfrowy Darwinizm",
        analogy: "Wyobraź sobie kuchnię ze 100 kucharzami gotującymi zupę. Tylko 10 najlepszych zachowuje przepis, a ich receptury są mieszane dla następnego pokolenia.",
        description: "Wykorzystanie strategii natury — przetrwania najsilniejszych — do znajdowania optymalnych rozwiązań."
      }
    }
  },
  {
    id: LessonId.HEURISTIC_SEARCH,
    content: {
      en: {
        title: "75 Heuristic Search",
        subtitle: "Finding the path with a compass",
        analogy: "Instead of wandering randomly in a forest, you always walk in the direction of the smell of your grandma's baking. The 'smell' is your heuristic.",
        description: "Smart pathfinding using A* and other algorithms that prioritize 'promising' paths over blind ones."
      },
      pl: {
        title: "75 Algorytmy przeszukiwania heurystycznego",
        subtitle: "Szukanie drogi z kompasem",
        analogy: "Zamiast błądzić po lesie, idziesz w stronę zapachu pieczonego ciasta babci. Ten 'zapach' to Twoja heurystyka.",
        description: "Inteligentne wyznaczanie tras za pomocą A* i innych algorytmów priorytetyzujących obiecujące ścieżki."
      }
    }
  }
];
