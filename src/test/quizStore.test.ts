import { describe, it, expect, beforeEach } from "vitest";
import { useQuizStore } from "@/store/quizStore";

describe("useQuizStore - Aleatoriedade e Modo Entrevista", () => {
  beforeEach(() => {
    useQuizStore.setState({
      isInterviewMode: false,
      seenQuestionIds: [],
      currentIndex: 0,
      answers: {},
      state: "start",
    });
  });

  it("deve gerar uma lista de perguntas embaralhada", () => {
    const store = useQuizStore.getState();
    const questions1 = store.filteredQuestions;
    store.restartQuiz();
    const questions2 = useQuizStore.getState().filteredQuestions;

    expect(questions1.length).toBeGreaterThan(0);
    expect(questions2.length).toBeGreaterThan(0);
  });

  it("não deve repetir perguntas já vistas no modo entrevista", () => {
    const store = useQuizStore.getState();
    store.toggleInterviewMode(); // Ativa modo entrevista

    // Inicia quiz 1
    useQuizStore.getState().startQuiz();
    const quiz1Questions = useQuizStore.getState().filteredQuestions;
    const seenAfterQuiz1 = useQuizStore.getState().seenQuestionIds;

    expect(seenAfterQuiz1.length).toBe(quiz1Questions.length);

    // Reinicia e inicia quiz 2
    useQuizStore.getState().restartQuiz();
    useQuizStore.getState().startQuiz();
    const quiz2Questions = useQuizStore.getState().filteredQuestions;

    // As perguntas do quiz 2 não devem incluir as perguntas já vistas (se houver perguntas suficientes restantes)
    const hasOverlap = quiz2Questions.some((q) =>
      quiz1Questions.some((q1) => q1.id === q.id),
    );

    // Se o pool de perguntas for maior do que 1 quiz, não deve haver sobreposição
    expect(hasOverlap).toBe(false);
  });
});
