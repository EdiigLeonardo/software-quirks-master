import { create } from "zustand";
import { Category, Question, allCategories, questions } from "@/data/questions";

type QuizState = "start" | "playing" | "results";

const shuffle = <T>(items: T[]): T[] => {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const buildFilteredQuestions = (
  selectedCategories: Category[],
  questionsPerCategory: number,
  seenQuestionIds: number[] = [],
): Question[] => {
  if (selectedCategories.length === 0) return [];

  const result: Question[] = [];

  selectedCategories.forEach((cat) => {
    let catQuestions = questions.filter((q) => q.category === cat);
    if (seenQuestionIds.length > 0) {
      const unseen = catQuestions.filter((q) => !seenQuestionIds.includes(q.id));
      if (unseen.length > 0) {
        catQuestions = unseen;
      }
    }
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
  isInterviewMode: boolean;
  seenQuestionIds: number[];

  setSelectedCategories: (categories: Category[]) => void;
  toggleCategory: (category: Category) => void;
  toggleAllCategories: () => void;
  addQuestions: () => void;
  toggleInterviewMode: () => void;
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
  isInterviewMode: false,
  seenQuestionIds: [],
  filteredQuestions: buildFilteredQuestions(allCategories, 5, []),

  toggleInterviewMode: () => {
    set((state) => {
      const nextMode = !state.isInterviewMode;
      const nextSeen = nextMode ? state.seenQuestionIds : [];
      return {
        isInterviewMode: nextMode,
        seenQuestionIds: nextSeen,
        filteredQuestions: buildFilteredQuestions(
          state.selectedCategories,
          state.questionsPerCategory,
          nextSeen,
        ),
      };
    });
  },

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
        get().seenQuestionIds,
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
          state.seenQuestionIds,
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
          state.seenQuestionIds,
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
          state.seenQuestionIds,
        ),
      };
    });
  },

  startQuiz: () => {
    const { selectedCategories, questionsPerCategory, isInterviewMode, seenQuestionIds } = get();
    if (selectedCategories.length === 0) return;

    const newQuestions = buildFilteredQuestions(
      selectedCategories,
      questionsPerCategory,
      seenQuestionIds,
    );

    const newSeenIds = isInterviewMode
      ? Array.from(new Set([...seenQuestionIds, ...newQuestions.map((q) => q.id)]))
      : seenQuestionIds;

    set({
      state: "playing",
      currentIndex: 0,
      answers: {},
      showExplanation: false,
      filteredQuestions: newQuestions,
      seenQuestionIds: newSeenIds,
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
    const { selectedCategories, questionsPerCategory, seenQuestionIds } = get();
    set({
      state: "start",
      currentIndex: 0,
      answers: {},
      showExplanation: false,
      filteredQuestions: buildFilteredQuestions(
        selectedCategories,
        questionsPerCategory,
        seenQuestionIds,
      ),
    });
  },
}));
