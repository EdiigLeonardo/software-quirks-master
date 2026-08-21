import { useQuizStore } from "@/store/quizStore";
import { QuizStart } from "@/components/QuizStart";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizResults } from "@/components/QuizResults";

const Index = () => {
  const state = useQuizStore((store) => store.state);

  if (state === "start") {
    return <QuizStart />;
  }

  if (state === "results") {
    return <QuizResults />;
  }

  return <QuizQuestion />;
};

export default Index;
