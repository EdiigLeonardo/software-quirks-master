import { Question, categoryLabels } from "@/data/questions";

interface Props {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: number | undefined;
  showExplanation: boolean;
  onAnswer: (index: number) => void;
  onNext: () => void;
}

export function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  showExplanation,
  onAnswer,
  onNext,
}: Props) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const isCorrect = selectedAnswer === question.correctIndex;
  const hasAnswered = selectedAnswer !== undefined;

  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* Header */}
      <div className="max-w-2xl mx-auto w-full pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-muted-foreground">
            {categoryLabels[question.category]}
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            {currentIndex + 1} / {totalQuestions}
          </span>
        </div>
        <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl animate-fade-in" key={question.id}>
          {/* Code block */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2 px-1">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-correct/70" />
              <span className="text-[10px] font-mono text-muted-foreground ml-2">
                script.js
              </span>
            </div>
            <pre className="code-block text-foreground">{question.code}</pre>
          </div>

          {/* Question */}
          <p className="font-semibold text-sm mb-4 font-mono">
            <span className="text-primary">{">"}</span> {question.question}
          </p>

          {/* Options */}
          <div className="space-y-2 mb-6">
            {question.options.map((option, i) => {
              let borderClass = "border-border";
              let bgClass = "bg-card";

              if (hasAnswered) {
                if (i === question.correctIndex) {
                  borderClass = "border-correct";
                  bgClass = "bg-correct/10";
                } else if (i === selectedAnswer && !isCorrect) {
                  borderClass = "border-incorrect";
                  bgClass = "bg-incorrect/10";
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => onAnswer(i)}
                  disabled={hasAnswered}
                  className={`quiz-option w-full text-left p-3 rounded-lg border text-sm font-mono flex items-center gap-3 ${borderClass} ${bgClass} disabled:cursor-default`}
                >
                  <span className="text-muted-foreground text-xs min-w-[20px]">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <span>{option}</span>
                  {hasAnswered && i === question.correctIndex && (
                    <span className="ml-auto text-correct">✓</span>
                  )}
                  {hasAnswered &&
                    i === selectedAnswer &&
                    !isCorrect &&
                    i !== question.correctIndex && (
                      <span className="ml-auto text-incorrect">✗</span>
                    )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="animate-fade-in mb-6">
              <div
                className={`p-4 rounded-lg border text-sm ${
                  isCorrect
                    ? "border-correct/30 bg-correct/5"
                    : "border-incorrect/30 bg-incorrect/5"
                }`}
              >
                <p className="font-mono text-xs mb-1 text-muted-foreground">
                  {isCorrect ? "✅ Correto!" : "❌ Incorreto"}
                </p>
                <p className="text-secondary-foreground leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </div>
          )}

          {/* Next button */}
          {hasAnswered && (
            <button
              onClick={onNext}
              className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-mono font-bold text-sm tracking-wide hover:opacity-90 transition-opacity glow-green animate-fade-in"
            >
              {currentIndex < totalQuestions - 1
                ? "Próxima →"
                : "Ver Resultados →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
