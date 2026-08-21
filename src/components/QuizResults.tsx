import { categoryLabels } from "@/data/questions";
import { useQuizStore } from "@/store/quizStore";

export function QuizResults() {
  const { filteredQuestions, answers, restartQuiz } = useQuizStore();

  const total = filteredQuestions.length;
  const correct = filteredQuestions.filter(
    (q) => answers[q.id] === q.correctIndex,
  ).length;
  const percentage = Math.round((correct / total) * 100);

  const categories = [...new Set(filteredQuestions.map((q) => q.category))];
  const statsByCategory = categories.map((cat) => {
    const catQuestions = filteredQuestions.filter((q) => q.category === cat);
    const catCorrect = catQuestions.filter(
      (q) => answers[q.id] === q.correctIndex,
    ).length;
    return {
      category: cat,
      total: catQuestions.length,
      correct: catCorrect,
      pct: Math.round((catCorrect / catQuestions.length) * 100),
    };
  });

  const getMessage = () => {
    if (percentage >= 90) return "🏆 Mestre do JavaScript!";
    if (percentage >= 70) return "🔥 Muito bom!";
    if (percentage >= 50) return "💪 Nada mal!";
    return "📚 Hora de estudar mais!";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg animate-fade-in">
        <div className="text-center mb-8">
          <p className="text-4xl mb-4">{getMessage().split(" ")[0]}</p>
          <h2 className="text-2xl font-bold font-mono glow-text mb-2">
            {correct} / {total}
          </h2>
          <p className="text-muted-foreground text-sm">
            {percentage}% corretas
          </p>
        </div>

        <div className="w-full h-3 bg-secondary rounded-full overflow-hidden mb-8">
          <div
            className="h-full rounded-full progress-fill"
            style={{
              width: `${percentage}%`,
              background:
                percentage >= 70
                  ? "hsl(var(--correct))"
                  : percentage >= 50
                    ? "hsl(var(--warning))"
                    : "hsl(var(--incorrect))",
            }}
          />
        </div>

        <div className="space-y-3 mb-8">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            // Por categoria
          </p>
          {statsByCategory.map(({ category, total, correct, pct }) => (
            <div
              key={category}
              className="flex items-center justify-between p-3 rounded-lg bg-card border border-border"
            >
              <span className="text-sm font-mono">
                {categoryLabels[category]}
              </span>
              <div className="flex items-center gap-3">
                <div className="w-24 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary progress-fill"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-muted-foreground min-w-[50px] text-right">
                  {correct}/{total}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredQuestions.some((q) => answers[q.id] !== q.correctIndex) && (
          <div className="mb-8">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
              // Revise os erros
            </p>
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {filteredQuestions
                .filter((q) => answers[q.id] !== q.correctIndex)
                .map((q) => (
                  <div
                    key={q.id}
                    className="p-3 rounded-lg bg-card border border-incorrect/20"
                  >
                    <pre className="code-block text-xs mb-2 !p-2">{q.code}</pre>
                    <p className="text-xs text-muted-foreground mb-1">
                      Sua resposta:{" "}
                      <span className="text-incorrect">
                        {q.options[answers[q.id]]}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Correto:{" "}
                      <span className="text-correct">
                        {q.options[q.correctIndex]}
                      </span>
                    </p>
                    <p className="text-xs text-secondary-foreground mt-2 leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}

        <button
          onClick={restartQuiz}
          className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-mono font-bold text-sm tracking-wide hover:opacity-90 transition-opacity glow-green"
        >
          Jogar Novamente
        </button>
      </div>
    </div>
  );
}
