import { Category, categoryLabels, categoryDescriptions } from "@/data/questions";

interface Props {
  selectedCategories: Category[];
  onToggleCategory: (cat: Category) => void;
  onStart: () => void;
  totalQuestions: number;
}

const categories: Category[] = ["js-fundamentals", "js-weird", "typescript"];

const categoryIcons: Record<Category, string> = {
  "js-fundamentals": "⚡",
  "js-weird": "🤯",
  "typescript": "🔷",
};

export function QuizStart({
  selectedCategories,
  onToggleCategory,
  onStart,
  totalQuestions,
}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg animate-fade-in">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 glow-text font-mono">
            {">"} JS Quiz_
          </h1>
          <p className="text-muted-foreground text-sm">
            Teste os seus conhecimentos de JavaScript & TypeScript
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-mono">
            // Selecione as categorias
          </p>
          {categories.map((cat) => {
            const isSelected = selectedCategories.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => onToggleCategory(cat)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
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
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/40"
                    }`}
                  >
                    {isSelected && (
                      <svg
                        className="w-3 h-3 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
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

        <button
          onClick={onStart}
          disabled={selectedCategories.length === 0}
          className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-mono font-bold text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed glow-green"
        >
          Iniciar Quiz — {totalQuestions} perguntas
        </button>
      </div>
    </div>
  );
}
