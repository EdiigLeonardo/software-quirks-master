import {
  Category,
  allCategories,
  categoryDescriptions,
  categoryLabels,
} from "@/data/questions";
import { useQuizStore } from "@/store/quizStore";

const categoryIcons: Record<Category, string> = {
  "js-fundamentals": "⚡",
  "js-weird": "🤯",
  typescript: "🔷",
  nodejs: "🟢",
  reactjs: "⚛️",
  java: "☕",
  python: "🐍",
  aws: "☁️",
  "github-actions": "⚙️",
  gcp: "🌐",
  azure: "💠",
  "azure-devops": "♾️",
  terraform: "🏗️",
};

export function QuizStart() {
  const {
    selectedCategories,
    questionsPerCategory,
    toggleCategory,
    toggleAllCategories,
    startQuiz,
    addQuestions,
  } = useQuizStore();

  const isAllSelected = selectedCategories.length === allCategories.length;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg animate-fade-in">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 glow-text font-mono">
            Software Engineer Quiz
          </h1>
          <p className="text-muted-foreground text-sm">
            Teste os seus conhecimentos de JavaScript, TypeScript, Java & Python
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
              // Categorias
            </p>
            <p className="text-[10px] text-primary/70 font-mono mt-1">
              {questionsPerCategory} QUESTÕES POR CATEGORIA
            </p>
          </div>
          <div className="flex gap-2">
            {questionsPerCategory < 30 && (
              <button
                onClick={addQuestions}
                className="text-[10px] uppercase tracking-tighter font-mono px-2 py-1 rounded border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-primary animate-pulse"
              >
                [ +5 Questões ]
              </button>
            )}
            <button
              onClick={toggleAllCategories}
              className="text-[10px] uppercase tracking-tighter font-mono px-2 py-1 rounded border border-border hover:bg-primary/5 transition-colors text-muted-foreground hover:text-primary"
            >
              {isAllSelected ? "[ Desselecionar Tudo ]" : "[ Selecionar Tudo ]"}
            </button>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-mono">
              // Desenvolvimento
            </p>
            <div className="space-y-2">
              {allCategories.map((cat) => {
                const isSelected = selectedCategories.includes(cat);

                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                      isSelected
                        ? "border-primary/50 bg-primary/10 glow-green"
                        : "border-border bg-card hover:border-muted-foreground/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{categoryIcons[cat]}</span>
                        <div>
                          <p className="font-semibold text-sm">
                            {categoryLabels[cat]}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {categoryDescriptions[cat]}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          isSelected
                            ? "border-primary bg-primary"
                            : "border-muted-foreground/40"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            className="w-2.5 h-2.5 text-primary-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={4}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <button
          onClick={startQuiz}
          disabled={selectedCategories.length === 0}
          className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-mono font-bold text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed glow-green"
        >
          Iniciar Quiz — {selectedCategories.length * questionsPerCategory}{" "}
          perguntas
        </button>
      </div>
    </div>
  );
}
