import { create } from "zustand";
import { Category, Question, allCategories, questions } from "@/data/questions";

type QuizState = "start" | "playing" | "results";

const shuffle = <T>(items: T[]) => [...items].sort(() => Math.random() - 0.5);

const buildFilteredQuestions = (
  selectedCategories: Category[],
  questionsPerCategory: number,
): Question[] => {
  if (selectedCategories.length === 0) return [];

  const result: Question[] = [];

  selectedCategories.forEach((cat) => {
    const catQuestions = questions.filter((q) => q.category === cat);
    result.push(...shuffle(catQuestions).slice(0, questionsPerCategory));
  });

  return shuffle(result);
};

interface QuizStore {
  state: QuizState;
  selectedCategories: Category[];
  questionsPerCategory: number;
  currentIndex: number;
  answers: Record<number, number>;
  showExplanation: boolean;
  filteredQuestions: Question[];

  setSelectedCategories: (categories: Category[]) => void;
  toggleCategory: (category: Category) => void;
  toggleAllCategories: () => void;
  addQuestions: () => void;
  startQuiz: () => void;
  answerQuestion: (optionIndex: number) => void;
  nextQuestion: () => void;
  restartQuiz: () => void;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  state: "start",
  selectedCategories: allCategories,
  questionsPerCategory: 5,
  currentIndex: 0,
  answers: {},
  showExplanation: false,
  filteredQuestions: buildFilteredQuestions(allCategories, 5),

  setSelectedCategories: (categories) => {
    set({
      selectedCategories: categories,
      currentIndex: 0,
      answers: {},
      showExplanation: false,
      state: "start",
      filteredQuestions: buildFilteredQuestions(
        categories,
        get().questionsPerCategory,
      ),
    });
  },

  toggleCategory: (category) => {
    set((state) => {
      const nextCategories = state.selectedCategories.includes(category)
        ? state.selectedCategories.filter((cat) => cat !== category)
        : [...state.selectedCategories, category];

      return {
        selectedCategories: nextCategories,
        currentIndex: 0,
        answers: {},
        showExplanation: false,
        state: "start",
        filteredQuestions: buildFilteredQuestions(
          nextCategories,
          state.questionsPerCategory,
        ),
      };
    });
  },

  toggleAllCategories: () => {
    set((state) => {
      const nextCategories =
        state.selectedCategories.length === allCategories.length
          ? []
          : allCategories;

      return {
        selectedCategories: nextCategories,
        currentIndex: 0,
        answers: {},
        showExplanation: false,
        state: "start",
        filteredQuestions: buildFilteredQuestions(
          nextCategories,
          state.questionsPerCategory,
        ),
      };
    });
  },

  addQuestions: () => {
    set((state) => {
      const nextQuestionsPerCategory = Math.min(
        state.questionsPerCategory + 5,
        150,
      );
      return {
        questionsPerCategory: nextQuestionsPerCategory,
        filteredQuestions: buildFilteredQuestions(
          state.selectedCategories,
          nextQuestionsPerCategory,
        ),
      };
    });
  },

  startQuiz: () => {
    const { selectedCategories, questionsPerCategory } = get();
    if (selectedCategories.length === 0) return;

    set({
      state: "playing",
      currentIndex: 0,
      answers: {},
      showExplanation: false,
      filteredQuestions: buildFilteredQuestions(
        selectedCategories,
        questionsPerCategory,
      ),
    });
  },

  answerQuestion: (optionIndex) => {
    const { filteredQuestions, currentIndex, answers } = get();
    const currentQuestion = filteredQuestions[currentIndex];

    if (!currentQuestion || answers[currentQuestion.id] !== undefined) return;

    set({
      answers: {
        ...answers,
        [currentQuestion.id]: optionIndex,
      },
      showExplanation: true,
    });
  },

  nextQuestion: () => {
    const { filteredQuestions, currentIndex } = get();

    if (currentIndex < filteredQuestions.length - 1) {
      set({
        currentIndex: currentIndex + 1,
        showExplanation: false,
      });
      return;
    }

    set({ state: "results" });
  },

  restartQuiz: () => {
    set({
      state: "start",
      currentIndex: 0,
      answers: {},
      showExplanation: false,
      filteredQuestions: buildFilteredQuestions(
        get().selectedCategories,
        get().questionsPerCategory,
      ),
    });
  },
}));
