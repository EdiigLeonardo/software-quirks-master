import { useState, useMemo } from "react";
import { questions, Category, categoryLabels, categoryDescriptions } from "@/data/questions";
import { QuizStart } from "@/components/QuizStart";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizResults } from "@/components/QuizResults";

type QuizState = "start" | "playing" | "results";

const Index = () => {
  const [state, setState] = useState<QuizState>("start");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([
    "js-fundamentals",
    "js-weird",
    "typescript",
    "cloud-devops",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  const filteredQuestions = useMemo(() => {
    const filtered = questions.filter((q) =>
      selectedCategories.includes(q.category)
    );
    // Shuffle
    return [...filtered].sort(() => Math.random() - 0.5);
  }, [selectedCategories, state]);

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

  if (state === "start") {
    return (
      <QuizStart
        selectedCategories={selectedCategories}
        onToggleCategory={toggleCategory}
        onStart={handleStart}
        totalQuestions={
          questions.filter((q) => selectedCategories.includes(q.category)).length
        }
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
