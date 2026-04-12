import { useState, useMemo } from "react";
import { questions, Category, categoryLabels, categoryDescriptions, allCategories } from "@/data/questions";
import { QuizStart } from "@/components/QuizStart";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizResults } from "@/components/QuizResults";

type QuizState = "start" | "playing" | "results";

const Index = () => {
  const [state, setState] = useState<QuizState>("start");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(allCategories);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [questionsPerCategory, setQuestionsPerCategory] = useState(5);

  const filteredQuestions = useMemo(() => {
    const result: typeof questions = [];
    selectedCategories.forEach((cat) => {
      const catQuestions = questions.filter((q) => q.category === cat);
      // Shuffle within the category and pick the first N
      const shuffled = [...catQuestions].sort(() => Math.random() - 0.5);
      result.push(...shuffled.slice(0, questionsPerCategory));
    });
    // Final shuffle to mix categories
    return result.sort(() => Math.random() - 0.5);
  }, [selectedCategories, state, questionsPerCategory]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleStart = () => {
    if (selectedCategories.length === 0) return;
    setAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
    setState("playing");
  };

  const handleAnswer = (optionIndex: number) => {
    if (answers[currentQuestion.id] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setShowExplanation(false);
    } else {
      setState("results");
    }
  };

  const handleRestart = () => {
    setState("start");
    setAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
  };

  const toggleCategory = (cat: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleAllCategories = () => {
    if (selectedCategories.length === allCategories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(allCategories);
    }
  };

  const handleAddQuestions = () => {
    setQuestionsPerCategory((prev) => Math.min(prev + 5, 30));
  };

  if (state === "start") {
    return (
      <QuizStart
        selectedCategories={selectedCategories}
        onToggleCategory={toggleCategory}
        onToggleAll={toggleAllCategories}
        onStart={handleStart}
        totalQuestions={filteredQuestions.length}
        questionsPerCategory={questionsPerCategory}
        onAddQuestions={handleAddQuestions}
      />
    );
  }

  if (state === "results") {
    return (
      <QuizResults
        questions={filteredQuestions}
        answers={answers}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      currentIndex={currentIndex}
      totalQuestions={filteredQuestions.length}
      selectedAnswer={answers[currentQuestion.id]}
      showExplanation={showExplanation}
      onAnswer={handleAnswer}
      onNext={handleNext}
    />
  );
};

export default Index;
