export type Category =
  | "js-fundamentals"
  | "js-weird"
  | "typescript"
  | "nodejs"
  | "reactjs"
  | "java"
  | "springboot"
  | "angular"
  | "git"
  | "kubernetes-docker"
  | "postgresql"
  | "windows-server"
  | "siemens-prep"
  | "python"
  | "aws"
  | "github-actions"
  | "gcp"
  | "azure"
  | "azure-devops"
  | "terraform";

export const allCategories: Category[] = [
  "js-fundamentals",
  "js-weird",
  "typescript",
  "nodejs",
  "reactjs",
  "java",
  "springboot",
  "angular",
  "git",
  "kubernetes-docker",
  "postgresql",
  "windows-server",
  "siemens-prep",
  "python",
  "aws",
  "github-actions",
  "gcp",
  "azure",
  "azure-devops",
  "terraform",
];

export interface Question {
  id: number;
  category: Category;
  code: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const categoryLabels: Record<Category, string> = {
  "js-fundamentals": "JS Fundamentals",
  "js-weird": "JS Is Weird",
  typescript: "TypeScript",
  nodejs: "Node.js",
  reactjs: "React.js",
  java: "Java",
  springboot: "Spring Boot",
  angular: "Angular",
  git: "Git",
  "kubernetes-docker": "Kubernetes & Docker",
  postgresql: "PostgreSQL & Migrations",
  "windows-server": "Windows Server & IIS",
  "siemens-prep": "Siemens Interview Prep",
  python: "Python",
  aws: "AWS",
  "github-actions": "GitHub Actions",
  gcp: "Google Cloud (GCP)",
  azure: "Azure",
  "azure-devops": "Azure DevOps",
  terraform: "Terraform",
};

export const categoryDescriptions: Record<Category, string> = {
  "js-fundamentals": "Closures, prototypes, async, scope e mais",
  "js-weird": "Type coercion, quirks e comportamentos inesperados",
  typescript: "Tipos, generics, utility types e type system",
  nodejs: "Event loop, streams, modules, APIs do Node.js",
  reactjs: "Hooks, state, lifecycle, patterns do React",
  java: "OOP, JVM, streams, generics, rasteiras e cenários hipotéticos",
  springboot: "Auto-config, DI, JPA, Security, REST e rasteiras Spring",
  angular: "Components, RxJS, OnPush, Signals, Forms e rasteiras Angular",
  git: "Fetch vs Pull, Rebase, Reset, Cherry-pick e resolução de conflitos",
  "kubernetes-docker": "Pods, Containers, Probes, Volumes, Multi-stage builds",
  postgresql: "SQL, Joins, N+1, Transações, Migrations e Indexação",
  "windows-server": "IIS, Active Directory, NTFS, Event Viewer e deployment",
  "siemens-prep": "Perguntas de entrevista Siemens (Beginner & Avançado)",
  python: "OOP, decorators, generators, async e mais",
  aws: "Lambda, Step Functions, API Gateway, S3, EC2 e mais",
  "github-actions": "Workflows, jobs, actions, CI/CD no GitHub",
  gcp: "Cloud Run, Pub/Sub, GKE, BigQuery e mais",
  azure: "App Service, Functions, Resource Groups e mais",
  "azure-devops": "Pipelines, Repos, Boards, Artifacts e mais",
  terraform: "HCL, providers, state, modules e IaC",
};

export const questions: Question[] = [
  // ========== JS FUNDAMENTALS (30) ==========
  {
    id: 1,
    category: "js-fundamentals",
    code: `var a = 1;\nfunction foo() {\n  console.log(a);\n  var a = 2;\n}\nfoo();`,
    question: "Qual é o output?",
    options: ["1", "2", "undefined", "ReferenceError"],
    correctIndex: 2,
    explanation:
      "Hoisting move a declaração `var a` para o topo da função, mas não a atribuição. Então `a` é `undefined` quando o `console.log` é chamado.",
  },
  {
    id: 2,
    category: "js-fundamentals",
    code: `for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}`,
    question: "Qual é o output?",
    options: ["0 1 2", "3 3 3", "undefined undefined undefined", "0 0 0"],
    correctIndex: 1,
    explanation:
      "`var` não tem block scope. Quando os callbacks executam, o loop já terminou e `i` vale 3.",
  },
  {
    id: 3,
    category: "js-fundamentals",
    code: `const obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2;\nconsole.log(obj.a);`,
    question: "Qual é o output?",
    options: ["1", "2", "undefined", "TypeError"],
    correctIndex: 0,
    explanation:
      "`Object.freeze` impede modificações. Em modo não-strict, a atribuição falha silenciosamente.",
  },
  {
    id: 4,
    category: "js-fundamentals",
    code: `function foo() {\n  return\n  {\n    bar: 'hello'\n  }\n}\nconsole.log(foo());`,
    question: "Qual é o output?",
    options: ["{ bar: 'hello' }", "undefined", "SyntaxError", "null"],
    correctIndex: 1,
    explanation:
      "ASI (Automatic Semicolon Insertion) adiciona um `;` após `return`, fazendo a função retornar `undefined`.",
  },
  {
    id: 5,
    category: "js-fundamentals",
    code: `let x = 1;\n{\n  let x = 2;\n}\nconsole.log(x);`,
    question: "Qual é o output?",
    options: ["1", "2", "undefined", "ReferenceError"],
    correctIndex: 0,
    explanation:
      "`let` tem block scope. O `x = 2` existe apenas dentro do bloco.",
  },
  {
    id: 6,
    category: "js-fundamentals",
    code: `const arr = [1, 2, 3];\narr[10] = 11;\nconsole.log(arr.length);`,
    question: "Qual é o output?",
    options: ["3", "4", "11", "10"],
    correctIndex: 2,
    explanation:
      "Arrays em JS são esparsos. Definir um index 10 cria 'buracos' e o length se torna 11.",
  },
  {
    id: 7,
    category: "js-fundamentals",
    code: `const a = {};\nconst b = { key: 'b' };\nconst c = { key: 'c' };\na[b] = 123;\na[c] = 456;\nconsole.log(a[b]);`,
    question: "Qual é o output?",
    options: ["123", "456", "undefined", "TypeError"],
    correctIndex: 1,
    explanation:
      "Objetos como chaves são convertidos para `[object Object]`. Ambos `b` e `c` se tornam a mesma chave.",
  },
  {
    id: 8,
    category: "js-fundamentals",
    code: `console.log(typeof null);`,
    question: "Qual é o output?",
    options: ['"null"', '"undefined"', '"object"', '"boolean"'],
    correctIndex: 2,
    explanation:
      'Bug histórico do JS. `typeof null` retorna `"object"` desde a primeira versão da linguagem.',
  },
  {
    id: 9,
    category: "js-fundamentals",
    code: `function Person(name) {\n  this.name = name;\n}\nPerson.prototype.greet = function() {\n  return 'Hi ' + this.name;\n};\nconst p = new Person('Ana');\nconsole.log(p.greet());`,
    question: "Qual é o output?",
    options: ['"Hi Ana"', '"Hi undefined"', "TypeError", '"undefined"'],
    correctIndex: 0,
    explanation:
      "`new` cria um objeto com `this` apontando para a instância. O método no prototype acessa `this.name` corretamente.",
  },
  {
    id: 10,
    category: "js-fundamentals",
    code: `const promise = new Promise((resolve) => {\n  console.log(1);\n  resolve(2);\n  console.log(3);\n});\npromise.then(console.log);\nconsole.log(4);`,
    question: "Qual é a ordem do output?",
    options: ["1 2 3 4", "1 3 4 2", "1 3 2 4", "4 1 3 2"],
    correctIndex: 1,
    explanation:
      "O executor da Promise é síncrono (1, 3). `.then` é microtask (executado depois do código síncrono). Então: 1, 3, 4, 2.",
  },
  {
    id: 11,
    category: "js-fundamentals",
    code: `console.log(0.1 + 0.2 === 0.3);`,
    question: "Qual é o output?",
    options: ["true", "false", "TypeError", "NaN"],
    correctIndex: 1,
    explanation:
      "Floating point arithmetic: `0.1 + 0.2` resulta em `0.30000000000000004`, que não é igual a `0.3`.",
  },
  {
    id: 12,
    category: "js-fundamentals",
    code: `const fn = () => arguments;\nconsole.log(fn(1, 2));`,
    question: "Qual é o output?",
    options: ["[1, 2]", "{ 0: 1, 1: 2 }", "ReferenceError", "undefined"],
    correctIndex: 2,
    explanation:
      "Arrow functions não têm seu próprio `arguments`. Se não houver `arguments` no escopo externo, ocorre ReferenceError.",
  },
  {
    id: 13,
    category: "js-fundamentals",
    code: `let a = { n: 1 };\nlet b = a;\na = { n: 2 };\nconsole.log(b.n);`,
    question: "Qual é o output?",
    options: ["1", "2", "undefined", "ReferenceError"],
    correctIndex: 0,
    explanation:
      "`b` ainda aponta para o objeto original `{ n: 1 }`. Reatribuir `a` não muda a referência de `b`.",
  },
  {
    id: 14,
    category: "js-fundamentals",
    code: `console.log([] == ![]);`,
    question: "Qual é o output?",
    options: ["true", "false", "TypeError", "undefined"],
    correctIndex: 0,
    explanation:
      "`![]` é `false`. `[] == false` → ambos são convertidos para número: `0 == 0` → `true`.",
  },
  {
    id: 15,
    category: "js-fundamentals",
    code: `const set = new Set([1, 1, 2, 3, 3]);\nconsole.log(set.size);`,
    question: "Qual é o output?",
    options: ["5", "3", "2", "TypeError"],
    correctIndex: 1,
    explanation:
      "Set remove duplicatas automaticamente. Restam 3 valores únicos: 1, 2, 3.",
  },
  {
    id: 16,
    category: "js-fundamentals",
    code: `async function foo() {\n  return 42;\n}\nconsole.log(foo());`,
    question: "Qual é o output?",
    options: [
      "42",
      "Promise {<fulfilled>: 42}",
      "undefined",
      "Promise {<pending>}",
    ],
    correctIndex: 3,
    explanation:
      "Funções async sempre retornam uma Promise. `console.log` mostra o Promise antes de ser resolvido.",
  },
  {
    id: 17,
    category: "js-fundamentals",
    code: `const obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconst { getX } = obj;\nconsole.log(getX());`,
    question: "Qual é o output?",
    options: ["42", "undefined", "TypeError", "null"],
    correctIndex: 1,
    explanation:
      "Destructuring extrai a função sem o contexto do objeto. `this` vira `undefined` (strict) ou `window` (sloppy), que não tem `.x`.",
  },
  {
    id: 18,
    category: "js-fundamentals",
    code: `const foo = () => {\n  let a = b = 0;\n};\nfoo();\nconsole.log(typeof a, typeof b);`,
    question: "Qual é o output?",
    options: [
      '"undefined" "undefined"',
      '"undefined" "number"',
      '"number" "number"',
      "ReferenceError",
    ],
    correctIndex: 1,
    explanation:
      '`b = 0` sem `let/var/const` cria uma variável global. `a` fica dentro do escopo da função. `typeof` de variável inexistente retorna `"undefined"`.',
  },
  {
    id: 19,
    category: "js-fundamentals",
    code: `console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nPromise.resolve().then(() => console.log('Promise'));\nconsole.log('End');`,
    question: "Qual é a ordem?",
    options: [
      "Start End Promise Timeout",
      "Start End Timeout Promise",
      "Start Promise End Timeout",
      "Start Timeout Promise End",
    ],
    correctIndex: 0,
    explanation:
      "Microtasks (Promises) executam antes de macrotasks (setTimeout), ambos após o código síncrono.",
  },
  {
    id: 20,
    category: "js-fundamentals",
    code: `const arr = [1, 2, 3];\ndelete arr[1];\nconsole.log(arr.length, arr[1]);`,
    question: "Qual é o output?",
    options: ["2 undefined", "3 undefined", "3 2", "2 3"],
    correctIndex: 1,
    explanation:
      "`delete` remove o elemento mas não muda o length. Cria um 'buraco' no array — `arr[1]` passa a ser `undefined`.",
  },
  {
    id: 21,
    category: "js-fundamentals",
    code: `const sym1 = Symbol('foo');\nconst sym2 = Symbol('foo');\nconsole.log(sym1 === sym2);`,
    question: "Qual é o output?",
    options: ["true", "false", "TypeError", "undefined"],
    correctIndex: 1,
    explanation:
      "Cada chamada a `Symbol()` cria um valor único. A descrição 'foo' é apenas um label de debug.",
  },
  {
    id: 22,
    category: "js-fundamentals",
    code: `function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value);\nconsole.log(g.next().value);`,
    question: "Qual é o output?",
    options: ["1 2", "1 1", "undefined undefined", "3 3"],
    correctIndex: 0,
    explanation:
      "Generators pausam em cada `yield`. A primeira chamada `.next()` retorna `{value: 1}`, a segunda `{value: 2}`.",
  },
  {
    id: 23,
    category: "js-fundamentals",
    code: `const p1 = Promise.resolve(1);\nconst p2 = Promise.reject(2);\nconst p3 = Promise.resolve(3);\nPromise.allSettled([p1, p2, p3])\n  .then(r => console.log(r.length));`,
    question: "Qual é o output?",
    options: ["1", "2", "3", "Error"],
    correctIndex: 2,
    explanation:
      "`Promise.allSettled` espera TODAS as promises, independente de sucesso ou falha. Retorna array com status de cada uma.",
  },
  {
    id: 24,
    category: "js-fundamentals",
    code: `const proxy = new Proxy({}, {\n  get(target, prop) {\n    return prop in target ? target[prop] : 42;\n  }\n});\nconsole.log(proxy.anything);`,
    question: "Qual é o output?",
    options: ["undefined", "42", "TypeError", "null"],
    correctIndex: 1,
    explanation:
      "O Proxy intercepta o acesso a propriedades. O handler `get` retorna 42 para qualquer propriedade não existente.",
  },
  {
    id: 25,
    category: "js-fundamentals",
    code: `const map = new WeakMap();\nlet obj = { key: 'val' };\nmap.set(obj, 'data');\nobj = null;\n// Após garbage collection...`,
    question: "O que acontece ao entry no WeakMap?",
    options: [
      "Permanece para sempre",
      "É garbage collected junto com o obj",
      "Lança erro",
      "Torna-se undefined",
    ],
    correctIndex: 1,
    explanation:
      "WeakMap tem referências fracas. Quando a única referência ao objeto (key) é removida, tanto a key como o value são elegíveis para garbage collection.",
  },
  {
    id: 26,
    category: "js-fundamentals",
    code: `console.log(1);\nqueueMicrotask(() => console.log(2));\nsetTimeout(() => console.log(3), 0);\nqueueMicrotask(() => console.log(4));\nconsole.log(5);`,
    question: "Qual é a ordem do output?",
    options: ["1 5 2 4 3", "1 2 4 5 3", "1 5 3 2 4", "1 2 3 4 5"],
    correctIndex: 0,
    explanation:
      "Síncrono primeiro (1, 5), depois microtasks em ordem (2, 4), depois macrotasks (3).",
  },
  {
    id: 27,
    category: "js-fundamentals",
    code: `const target = { a: 1, b: 2 };\nconst source = { b: 3, c: 4 };\nconst result = Object.assign(target, source);\nconsole.log(target.b, result === target);`,
    question: "Qual é o output?",
    options: ["2 false", "3 true", "3 false", "2 true"],
    correctIndex: 1,
    explanation:
      "`Object.assign` modifica e retorna o target. `b` é sobrescrito para 3. `result` é o mesmo objeto que `target`.",
  },
  {
    id: 28,
    category: "js-fundamentals",
    code: `try {\n  throw new Error('oops');\n} catch (e) {\n  console.log(1);\n} finally {\n  console.log(2);\n}`,
    question: "Qual é o output?",
    options: ["1", "2", "1 2", "Error: oops"],
    correctIndex: 2,
    explanation:
      "`catch` executa porque há um erro (log 1). `finally` SEMPRE executa, com ou sem erro (log 2).",
  },
  {
    id: 29,
    category: "js-fundamentals",
    code: `const a = [1, 2, 3];\nconst b = [...a];\nb.push(4);\nconsole.log(a.length);`,
    question: "Qual é o output?",
    options: ["3", "4", "undefined", "TypeError"],
    correctIndex: 0,
    explanation:
      "Spread operator cria uma cópia shallow do array. Modificar `b` não afeta `a`.",
  },
  {
    id: 30,
    category: "js-fundamentals",
    code: `const obj = {\n  name: 'JS',\n  getName: function() { return this.name; },\n  getNameArrow: () => this.name\n};\nconsole.log(obj.getNameArrow());`,
    question: "Qual é o output?",
    options: ['"JS"', "undefined", "TypeError", '"window"'],
    correctIndex: 1,
    explanation:
      "Arrow functions capturam `this` do escopo léxico onde são definidas (neste caso, o escopo global), não do objeto.",
  },

  // ========== JS IS WEIRD (30) ==========
  {
    id: 31,
    category: "js-weird",
    code: `true + true + true`,
    question: "Qual é o resultado?",
    options: ["3", "true", '"truetruetrue"', "NaN"],
    correctIndex: 0,
    explanation:
      "`true` é convertido para `1` em operações aritméticas. `1 + 1 + 1 = 3`.",
  },
  {
    id: 32,
    category: "js-weird",
    code: `+[] + +[] + +![]`,
    question: "Qual é o resultado?",
    options: ["0", '"000"', "NaN", "1"],
    correctIndex: 0,
    explanation:
      "`+[]` é `0`, `+![]` é `+false` que é `0`. Total: `0 + 0 + 0 = 0`.",
  },
  {
    id: 33,
    category: "js-weird",
    code: `"b" + "a" + +"a" + "a"`,
    question: "Qual é o resultado?",
    options: ['"baa"', '"banana"', '"baNaNa"', "NaN"],
    correctIndex: 2,
    explanation:
      '`+"a"` é `NaN`. String concatenation: `"b" + "a" + NaN + "a"` → `"baNaNa"`.',
  },
  {
    id: 34,
    category: "js-weird",
    code: `[] + []`,
    question: "Qual é o resultado?",
    options: ["[]", '""', "0", "NaN"],
    correctIndex: 1,
    explanation:
      'Arrays são convertidos para strings vazias com `.toString()`. `"" + ""` = `""`.',
  },
  {
    id: 35,
    category: "js-weird",
    code: `[] + {}`,
    question: "Qual é o resultado?",
    options: ['"[object Object]"', "0", "NaN", '"{}"'],
    correctIndex: 0,
    explanation:
      '`[].toString()` é `""`, `{}.toString()` é `"[object Object]"`. Concatenados: `"[object Object]"`.',
  },
  {
    id: 36,
    category: "js-weird",
    code: `{} + []`,
    question: "Qual é o resultado? (no console do browser)",
    options: ['"[object Object]"', "0", '""', "NaN"],
    correctIndex: 1,
    explanation:
      "O `{}` é interpretado como bloco vazio, não objeto. Fica `+[]` que é `0`.",
  },
  {
    id: 37,
    category: "js-weird",
    code: `typeof NaN`,
    question: "Qual é o resultado?",
    options: ['"NaN"', '"undefined"', '"number"', '"object"'],
    correctIndex: 2,
    explanation:
      '`NaN` é tecnicamente um valor numérico inválido. `typeof NaN` é `"number"` — irônico mas correto pelo spec.',
  },
  {
    id: 38,
    category: "js-weird",
    code: `NaN === NaN`,
    question: "Qual é o resultado?",
    options: ["true", "false", "TypeError", "undefined"],
    correctIndex: 1,
    explanation:
      "`NaN` é o único valor em JS que não é igual a si mesmo. Use `Number.isNaN()` para verificar.",
  },
  {
    id: 39,
    category: "js-weird",
    code: `9999999999999999`,
    question: "Qual é o resultado?",
    options: ["9999999999999999", "10000000000000000", "Infinity", "NaN"],
    correctIndex: 1,
    explanation:
      "Este número excede `Number.MAX_SAFE_INTEGER` (2^53 - 1). O JS arredonda para `10000000000000000`.",
  },
  {
    id: 40,
    category: "js-weird",
    code: `0.5 + 0.1 == 0.6`,
    question: "Qual é o resultado?",
    options: ["true", "false"],
    correctIndex: 0,
    explanation:
      "Ao contrário de `0.1 + 0.2`, `0.5 + 0.1` produz exatamente `0.6` em floating point.",
  },
  {
    id: 41,
    category: "js-weird",
    code: `Math.max()`,
    question: "Qual é o resultado?",
    options: ["0", "Infinity", "-Infinity", "NaN"],
    correctIndex: 2,
    explanation:
      "`Math.max()` sem argumentos retorna `-Infinity` — o valor identidade para a operação de máximo.",
  },
  {
    id: 42,
    category: "js-weird",
    code: `Math.min()`,
    question: "Qual é o resultado?",
    options: ["0", "Infinity", "-Infinity", "NaN"],
    correctIndex: 1,
    explanation:
      "`Math.min()` sem argumentos retorna `Infinity` — o valor identidade para a operação de mínimo.",
  },
  {
    id: 43,
    category: "js-weird",
    code: `[1, 2, 3] + [4, 5, 6]`,
    question: "Qual é o resultado?",
    options: ["[1,2,3,4,5,6]", '"1,2,34,5,6"', "NaN", "[1,2,3,4,5,6]"],
    correctIndex: 1,
    explanation:
      'O operador `+` converte arrays para strings: `"1,2,3" + "4,5,6"` = `"1,2,34,5,6"`.',
  },
  {
    id: 44,
    category: "js-weird",
    code: `!!""`,
    question: "Qual é o resultado?",
    options: ["true", "false", '""', "undefined"],
    correctIndex: 1,
    explanation: 'String vazia é falsy. `!""` é `true`, `!!""` é `false`.',
  },
  {
    id: 45,
    category: "js-weird",
    code: `+""`,
    question: "Qual é o resultado?",
    options: ["0", "NaN", '""', "undefined"],
    correctIndex: 0,
    explanation: "O operador unário `+` converte string vazia para `0`.",
  },
  {
    id: 46,
    category: "js-weird",
    code: `null == undefined`,
    question: "Qual é o resultado?",
    options: ["true", "false"],
    correctIndex: 0,
    explanation:
      "`null` e `undefined` são considerados iguais com `==` (Abstract Equality). Mas `null === undefined` é `false`.",
  },
  {
    id: 47,
    category: "js-weird",
    code: `1 < 2 < 3`,
    question: "Qual é o resultado?",
    options: ["true", "false"],
    correctIndex: 0,
    explanation:
      "`1 < 2` → `true`. `true < 3` → `1 < 3` → `true`. Resultado correto por acidente!",
  },
  {
    id: 48,
    category: "js-weird",
    code: `3 > 2 > 1`,
    question: "Qual é o resultado?",
    options: ["true", "false"],
    correctIndex: 1,
    explanation:
      "`3 > 2` → `true`. `true > 1` → `1 > 1` → `false`. A associatividade à esquerda engana!",
  },
  {
    id: 49,
    category: "js-weird",
    code: `typeof undefined == typeof NULL`,
    question: "Qual é o resultado?",
    options: ["true", "false", "ReferenceError", "TypeError"],
    correctIndex: 0,
    explanation:
      '`NULL` (maiúsculo) não existe, `typeof` de variável inexistente retorna `"undefined"`. Ambos são `"undefined"`.',
  },
  {
    id: 50,
    category: "js-weird",
    code: `[10, 1, 3].sort()`,
    question: "Qual é o resultado?",
    options: ["[1, 3, 10]", "[10, 1, 3]", "[1, 10, 3]", "[3, 10, 1]"],
    correctIndex: 2,
    explanation:
      '`.sort()` sem comparador ordena como strings: `"1" < "10" < "3"`. Use `.sort((a,b) => a-b)` para números.',
  },
  {
    id: 51,
    category: "js-weird",
    code: `parseInt("08")`,
    question: "Qual é o resultado nos engines modernos?",
    options: ["8", "0", "NaN", "10"],
    correctIndex: 0,
    explanation:
      "Em engines modernos, `parseInt` assume base 10. Em engines antigos, o prefixo `0` causava interpretação octal.",
  },
  {
    id: 52,
    category: "js-weird",
    code: `parseInt("f*ck")`,
    question: "Qual é o resultado?",
    options: ["NaN", "0", "15", "undefined"],
    correctIndex: 0,
    explanation:
      "`parseInt` tenta parsear do início. `'f'` não é dígito válido em base 10, então retorna `NaN`.",
  },
  {
    id: 53,
    category: "js-weird",
    code: `parseInt("Infinity", 10)`,
    question: "Qual é o resultado?",
    options: ["Infinity", "NaN", "0", "undefined"],
    correctIndex: 1,
    explanation:
      "`parseInt` tenta parsear caractere a caractere. `'I'` não é um dígito decimal válido, retorna `NaN`.",
  },
  {
    id: 54,
    category: "js-weird",
    code: `null > 0\nnull == 0\nnull >= 0`,
    question: "Quais são os resultados?",
    options: [
      "false, false, true",
      "false, true, true",
      "true, false, true",
      "false, false, false",
    ],
    correctIndex: 0,
    explanation:
      "Comparações `>` e `>=` convertem `null` para `0`. Mas `==` tem regras especiais: `null` só é igual a `undefined`.",
  },
  {
    id: 55,
    category: "js-weird",
    code: `const a = [1, 2, 3];\nconst b = [1, 2, 3];\nconsole.log(a == b);`,
    question: "Qual é o output?",
    options: ["true", "false", "TypeError", "undefined"],
    correctIndex: 1,
    explanation:
      "Arrays são objetos. `==` compara referências, não conteúdo. São dois objetos diferentes na memória.",
  },
  {
    id: 56,
    category: "js-weird",
    code: `"" == false`,
    question: "Qual é o resultado?",
    options: ["true", "false"],
    correctIndex: 0,
    explanation:
      'Ambos são convertidos para `0` na comparação abstrata. `""` → `0`, `false` → `0`.',
  },
  {
    id: 57,
    category: "js-weird",
    code: `(![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]`,
    question: "Qual é o resultado?",
    options: ['"fail"', '"true"', '"false"', '"null"'],
    correctIndex: 0,
    explanation:
      'Este é JSFuck-style. `![]+[]` é `"false"`. Extraindo caracteres por index: `f`, `a`, `i`, `l` = `"fail"`.',
  },
  {
    id: 58,
    category: "js-weird",
    code: `void 0 === undefined`,
    question: "Qual é o resultado?",
    options: ["true", "false", "TypeError", "ReferenceError"],
    correctIndex: 0,
    explanation:
      "`void` sempre retorna `undefined`. `void 0` é uma forma segura de obter `undefined`.",
  },
  {
    id: 59,
    category: "js-weird",
    code: `typeof typeof 1`,
    question: "Qual é o resultado?",
    options: ['"number"', '"string"', '"typeof"', "undefined"],
    correctIndex: 1,
    explanation:
      '`typeof 1` é `"number"` (uma string). `typeof "number"` é `"string"`.',
  },
  {
    id: 60,
    category: "js-weird",
    code: `[] == ![]`,
    question: "Qual é o resultado?",
    options: ["true", "false", "TypeError", "undefined"],
    correctIndex: 0,
    explanation:
      '`![]` é `false`. `[] == false` → `"" == 0` → `0 == 0` → `true`. Type coercion em ação!',
  },

  // ========== TYPESCRIPT (30) ==========
  {
    id: 61,
    category: "typescript",
    code: `type A = string & number;`,
    question: "Qual é o tipo resultante?",
    options: ["string | number", "never", "any", "unknown"],
    correctIndex: 1,
    explanation:
      "A interseção de `string` e `number` é `never` — não existe valor que seja ambos ao mesmo tempo.",
  },
  {
    id: 62,
    category: "typescript",
    code: `type T = Exclude<'a' | 'b' | 'c', 'a'>;`,
    question: "Qual é o tipo resultante?",
    options: ['"a"', '"b" | "c"', '"a" | "b" | "c"', "never"],
    correctIndex: 1,
    explanation:
      "`Exclude` remove de uma union os membros que são assignable ao segundo argumento.",
  },
  {
    id: 63,
    category: "typescript",
    code: `function foo(x: unknown) {\n  return x.toString();\n}`,
    question: "O que acontece?",
    options: [
      "Compila normalmente",
      "Erro: 'x' is of type 'unknown'",
      "Runtime error",
      "Retorna undefined",
    ],
    correctIndex: 1,
    explanation:
      "`unknown` requer type narrowing antes de usar. Diferente de `any`, não permite operações arbitrárias.",
  },
  {
    id: 64,
    category: "typescript",
    code: `interface A {\n  x: number;\n}\ninterface A {\n  y: string;\n}\nconst a: A = ???`,
    question: "Qual é a shape de A?",
    options: [
      "{ x: number }",
      "{ y: string }",
      "{ x: number; y: string }",
      "Erro de compilação",
    ],
    correctIndex: 2,
    explanation:
      "Interfaces em TS fazem declaration merging — as propriedades são combinadas automaticamente.",
  },
  {
    id: 65,
    category: "typescript",
    code: `type IsString<T> = T extends string\n  ? true\n  : false;\ntype R = IsString<'hello'>;`,
    question: "Qual é o tipo de R?",
    options: ["true", "false", "boolean", "string"],
    correctIndex: 0,
    explanation:
      '`"hello"` extends `string`, então o conditional type resolve para `true`.',
  },
  {
    id: 66,
    category: "typescript",
    code: `const arr = [1, 'two', true] as const;\ntype T = typeof arr;`,
    question: "Qual é o tipo T?",
    options: [
      "(number | string | boolean)[]",
      "readonly [1, 'two', true]",
      "[number, string, boolean]",
      "any[]",
    ],
    correctIndex: 1,
    explanation:
      "`as const` cria um readonly tuple com tipos literais exatos, não tipos primitivos.",
  },
  {
    id: 67,
    category: "typescript",
    code: `type Keys = keyof { a: 1; b: 2; c: 3 };`,
    question: "Qual é o tipo Keys?",
    options: ['"a"', '"a" | "b" | "c"', "string", "number"],
    correctIndex: 1,
    explanation:
      "`keyof` retorna uma union de todas as chaves do objeto como string literals.",
  },
  {
    id: 68,
    category: "typescript",
    code: `type Fn = (...args: any[]) => any;\ntype Params = Parameters<Fn>;`,
    question: "Qual é o tipo Params?",
    options: ["any", "any[]", "never", "unknown[]"],
    correctIndex: 1,
    explanation:
      "`Parameters` extrai os tipos dos parâmetros como um tuple. Para `...args: any[]`, o resultado é `any[]`.",
  },
  {
    id: 69,
    category: "typescript",
    code: `enum Direction {\n  Up,\n  Down,\n  Left,\n  Right\n}\nconsole.log(Direction[0]);`,
    question: "Qual é o output?",
    options: ['"Up"', "0", "undefined", "TypeError"],
    correctIndex: 0,
    explanation:
      'Numeric enums em TS têm reverse mapping. `Direction[0]` retorna o nome do membro: `"Up"`.',
  },
  {
    id: 70,
    category: "typescript",
    code: `type Deep = {\n  a: { b: { c: string } }\n};\ntype T = Deep['a']['b']['c'];`,
    question: "Qual é o tipo T?",
    options: ["{ c: string }", "{ b: { c: string } }", "string", "never"],
    correctIndex: 2,
    explanation:
      "Indexed access types permitem navegar tipos aninhados. `Deep['a']['b']['c']` resolve para `string`.",
  },
  {
    id: 71,
    category: "typescript",
    code: `type T = Readonly<{ x: number; y: number }>;`,
    question: "O que T permite?",
    options: [
      "Leitura e escrita",
      "Apenas leitura",
      "Apenas escrita",
      "Nenhum acesso",
    ],
    correctIndex: 1,
    explanation:
      "`Readonly` marca todas as propriedades como `readonly`, impedindo reatribuição.",
  },
  {
    id: 72,
    category: "typescript",
    code: `function id<T>(x: T): T { return x; }\nconst r = id(42);`,
    question: "Qual é o tipo inferido de r?",
    options: ["number", "42", "T", "any"],
    correctIndex: 1,
    explanation:
      "O TS infere o tipo literal `42` quando possível em contextos genéricos simples (a partir do TS 5.0+).",
  },
  {
    id: 73,
    category: "typescript",
    code: `type A = { a: string } | { b: number };\nconst x: A = { a: 'hi', b: 42 };`,
    question: "Isto compila?",
    options: [
      "Sim",
      "Não, erro de tipo",
      "Depende do strict mode",
      "Runtime error",
    ],
    correctIndex: 0,
    explanation:
      "Union types em TS são inclusivos. Um valor pode ter propriedades de qualquer membro, desde que satisfaça pelo menos um.",
  },
  {
    id: 74,
    category: "typescript",
    code: `type Nullable<T> = T | null | undefined;\ntype X = NonNullable<Nullable<string>>;`,
    question: "Qual é o tipo X?",
    options: ["string | null | undefined", "string | null", "string", "never"],
    correctIndex: 2,
    explanation:
      "`NonNullable` remove `null` e `undefined` de uma union, restando apenas `string`.",
  },
  {
    id: 75,
    category: "typescript",
    code: `type T = string extends any ? 'yes' : 'no';`,
    question: "Qual é o tipo T?",
    options: ['"yes"', '"no"', '"yes" | "no"', "never"],
    correctIndex: 0,
    explanation:
      "Todo tipo extends `any`, então o conditional resolve para `'yes'`.",
  },
  {
    id: 76,
    category: "typescript",
    code: `type T = never extends any ? 'yes' : 'no';`,
    question: "Qual é o tipo T?",
    options: ['"yes"', '"no"', "never", '"yes" | "no"'],
    correctIndex: 0,
    explanation:
      "`never` extends qualquer tipo (é o bottom type). Mas nota: em distributive conditional types com `never` o comportamento é diferente.",
  },
  {
    id: 77,
    category: "typescript",
    code: `type Flatten<T> = T extends Array<infer U> ? U : T;\ntype R = Flatten<string[]>;`,
    question: "Qual é o tipo R?",
    options: ["string[]", "string", "Array<string>", "never"],
    correctIndex: 1,
    explanation:
      "`infer U` captura o tipo dentro do Array. `string[]` extends `Array<infer U>`, logo U = string.",
  },
  {
    id: 78,
    category: "typescript",
    code: `type T = Pick<{ a: 1; b: 2; c: 3 }, 'a' | 'c'>;`,
    question: "Qual é o tipo T?",
    options: [
      "{ a: 1; b: 2; c: 3 }",
      "{ a: 1; c: 3 }",
      "{ b: 2 }",
      "'a' | 'c'",
    ],
    correctIndex: 1,
    explanation:
      "`Pick` seleciona apenas as propriedades especificadas do tipo original.",
  },
  {
    id: 79,
    category: "typescript",
    code: `type T = Omit<{ a: 1; b: 2; c: 3 }, 'b'>;`,
    question: "Qual é o tipo T?",
    options: ["{ b: 2 }", "{ a: 1; c: 3 }", "{ a: 1; b: 2; c: 3 }", "never"],
    correctIndex: 1,
    explanation:
      "`Omit` remove as propriedades especificadas, mantendo as restantes.",
  },
  {
    id: 80,
    category: "typescript",
    code: `type T = Record<'a' | 'b', number>;`,
    question: "Qual é o tipo T?",
    options: [
      "{ a: number; b: number }",
      "{ a: string; b: string }",
      "Map<string, number>",
      "number[]",
    ],
    correctIndex: 0,
    explanation: "`Record<K, V>` cria um tipo com keys K e valores do tipo V.",
  },
  {
    id: 81,
    category: "typescript",
    code: `declare const brand: unique symbol;\ntype USD = number & { [brand]: 'USD' };\ntype EUR = number & { [brand]: 'EUR' };\nconst usd = 10 as USD;\nconst eur: EUR = usd;`,
    question: "Isto compila?",
    options: [
      "Sim",
      "Não, tipos incompatíveis",
      "Depende do strict",
      "Runtime error",
    ],
    correctIndex: 1,
    explanation:
      "Branded types usam interseção com propriedades únicas para criar tipos nominais. USD e EUR são incompatíveis apesar de ambos serem numbers.",
  },
  {
    id: 82,
    category: "typescript",
    code: `type T = { a: string } & { a: number };`,
    question: "Qual é o tipo de T['a']?",
    options: ["string", "number", "string | number", "never"],
    correctIndex: 3,
    explanation:
      "Na interseção, `a` precisaria ser `string & number`, que é `never`. O tipo inteiro torna-se efetivamente impossível de instanciar.",
  },
  {
    id: 83,
    category: "typescript",
    code: `type Foo = {\n  readonly bar: string;\n};\nconst foo: Foo = { bar: 'hello' };\nfoo.bar = 'world';`,
    question: "O que acontece?",
    options: [
      "Compila e executa normalmente",
      "Erro de compilação: readonly",
      "Runtime error",
      "bar fica undefined",
    ],
    correctIndex: 1,
    explanation:
      "`readonly` impede reatribuição em compile-time. O TypeScript dá erro, mas em runtime (JS puro) funcionaria.",
  },
  {
    id: 84,
    category: "typescript",
    code: `function assert(val: unknown): asserts val is string {\n  if (typeof val !== 'string') throw new Error();\n}\nconst x: unknown = 'hello';\nassert(x);\nx.toUpperCase();`,
    question: "O que faz 'asserts val is string'?",
    options: [
      "Nada, é decorativo",
      "Narrowing automático — após a chamada, x é string",
      "Converte x para string em runtime",
      "Erro de compilação",
    ],
    correctIndex: 1,
    explanation:
      "Assertion functions fazem type narrowing. Após `assert(x)`, o TS sabe que `x` é `string`.",
  },
  {
    id: 85,
    category: "typescript",
    code: `type EventMap = {\n  click: MouseEvent;\n  keydown: KeyboardEvent;\n};\ntype Handler<K extends keyof EventMap> = (e: EventMap[K]) => void;\ntype T = Handler<'click'>;`,
    question: "Qual é o tipo T?",
    options: [
      "(e: Event) => void",
      "(e: MouseEvent) => void",
      "(e: KeyboardEvent) => void",
      "(e: MouseEvent | KeyboardEvent) => void",
    ],
    correctIndex: 1,
    explanation:
      "O generic K é `'click'`, então `EventMap['click']` resolve para `MouseEvent`.",
  },
  {
    id: 86,
    category: "typescript",
    code: `type Partial<T> = {\n  [K in keyof T]?: T[K];\n};`,
    question: "O que é [K in keyof T]?",
    options: [
      "Um for loop",
      "Um mapped type que itera sobre as keys de T",
      "Uma indexed access type",
      "Um conditional type",
    ],
    correctIndex: 1,
    explanation:
      "Mapped types usam `in keyof` para iterar sobre todas as keys de um tipo e transformar cada propriedade.",
  },
  {
    id: 87,
    category: "typescript",
    code: `const tuple = ['hello', 42] as const;\ntype First = (typeof tuple)[0];\ntype Length = (typeof tuple)['length'];`,
    question: "Quais são os tipos First e Length?",
    options: [
      "string e number",
      '"hello" e 2',
      '"hello" e number',
      "string e 2",
    ],
    correctIndex: 1,
    explanation:
      "Com `as const`, os tipos são literais. `[0]` é `\"hello\"` (não string), e `['length']` é `2` (não number).",
  },
  {
    id: 88,
    category: "typescript",
    code: `type ToArray<T> = T extends any ? T[] : never;\ntype R = ToArray<string | number>;`,
    question: "Qual é o tipo R?",
    options: ["(string | number)[]", "string[] | number[]", "never", "any[]"],
    correctIndex: 1,
    explanation:
      "Conditional types são distributivos sobre unions. Cada membro é processado separadamente: `string[] | number[]`.",
  },
  {
    id: 89,
    category: "typescript",
    code: `type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T;\ntype R = Awaited<Promise<Promise<string>>>;`,
    question: "Qual é o tipo R?",
    options: ["Promise<string>", "Promise<Promise<string>>", "string", "never"],
    correctIndex: 2,
    explanation:
      "`Awaited` recursivamente 'desembrulha' Promises. `Promise<Promise<string>>` → `Promise<string>` → `string`.",
  },
  {
    id: 90,
    category: "typescript",
    code: `type X = {} extends { a: string } ? 'yes' : 'no';`,
    question: "Qual é o tipo X?",
    options: ['"yes"', '"no"', "never", '"yes" | "no"'],
    correctIndex: 1,
    explanation:
      "`{}` não tem a propriedade `a`, logo não extends `{ a: string }`. O resultado é `'no'`.",
  },

  // ========== NODE.JS (30) ==========
  {
    id: 101,
    category: "nodejs",
    code: `const fs = require('fs');\nconsole.log('A');\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  console.log('B');\n});\nconsole.log('C');`,
    question: "Qual é a ordem do output?",
    options: ["A B C", "A C B", "B A C", "C A B"],
    correctIndex: 1,
    explanation:
      "`readFile` é assíncrono. O callback executa quando o I/O completa, após o código síncrono (A, C).",
  },
  {
    id: 102,
    category: "nodejs",
    code: `process.nextTick(() => console.log('A'));\nsetImmediate(() => console.log('B'));\nconsole.log('C');`,
    question: "Qual é a ordem do output?",
    options: ["A B C", "C A B", "C B A", "B C A"],
    correctIndex: 1,
    explanation:
      "Síncrono primeiro (C), depois `process.nextTick` (microtask, A), depois `setImmediate` (macrotask, B).",
  },
  {
    id: 103,
    category: "nodejs",
    code: `const EventEmitter = require('events');\nconst emitter = new EventEmitter();\nemitter.on('data', (msg) => console.log(msg));\nemitter.emit('data', 'hello');\nemitter.emit('data', 'world');`,
    question: "Qual é o output?",
    options: ["hello", "world", "hello world", "hello\\nworld"],
    correctIndex: 3,
    explanation:
      "Cada `emit` dispara o listener registado com `on`. Ambas as emissões produzem output: 'hello' e depois 'world'.",
  },
  {
    id: 104,
    category: "nodejs",
    code: `const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200);\n  res.end('OK');\n});\nserver.listen(3000);`,
    question: "O que faz este código?",
    options: [
      "Cria um ficheiro",
      "Cria um servidor HTTP na porta 3000",
      "Faz um request HTTP",
      "Cria um WebSocket server",
    ],
    correctIndex: 1,
    explanation:
      "`http.createServer` cria um servidor HTTP. O callback é chamado para cada request recebido. `listen(3000)` inicia o servidor na porta 3000.",
  },
  {
    id: 105,
    category: "nodejs",
    code: `// moduleA.js\nlet count = 0;\nmodule.exports = { increment: () => ++count, getCount: () => count };\n\n// main.js\nconst a = require('./moduleA');\nconst b = require('./moduleA');\na.increment();\nconsole.log(b.getCount());`,
    question: "Qual é o output?",
    options: ["0", "1", "undefined", "Error"],
    correctIndex: 1,
    explanation:
      "Módulos CommonJS são cached após o primeiro `require`. `a` e `b` referenciam o mesmo módulo, partilhando o state.",
  },
  {
    id: 106,
    category: "nodejs",
    code: `const { Transform } = require('stream');\nconst upper = new Transform({\n  transform(chunk, enc, cb) {\n    this.push(chunk.toString().toUpperCase());\n    cb();\n  }\n});\nprocess.stdin.pipe(upper).pipe(process.stdout);`,
    question: "O que faz este código?",
    options: [
      "Lê e escreve ficheiros",
      "Converte stdin para uppercase e envia para stdout",
      "Cria um servidor HTTP",
      "Comprime dados",
    ],
    correctIndex: 1,
    explanation:
      "Usa streams e pipes: stdin → Transform (uppercase) → stdout. O padrão pipe encadeia streams de forma eficiente.",
  },
  {
    id: 107,
    category: "nodejs",
    code: `const cluster = require('cluster');\nconst os = require('os');\n\nif (cluster.isPrimary) {\n  for (let i = 0; i < os.cpus().length; i++) {\n    cluster.fork();\n  }\n} else {\n  require('./server.js');\n}`,
    question: "O que faz o módulo cluster?",
    options: [
      "Cria threads",
      "Cria processos worker para aproveitar múltiplos CPUs",
      "Conecta a um cluster de base de dados",
      "Faz load balancing entre servidores",
    ],
    correctIndex: 1,
    explanation:
      "O módulo `cluster` cria processos filhos (workers) que partilham a mesma porta. Permite usar todos os cores do CPU para escalar a aplicação Node.js.",
  },
  {
    id: 108,
    category: "nodejs",
    code: `const { Worker } = require('worker_threads');\nconst worker = new Worker('./heavy-task.js');\nworker.on('message', (result) => {\n  console.log('Result:', result);\n});\nworker.postMessage({ data: [1, 2, 3] });`,
    question: "Para que servem Worker Threads?",
    options: [
      "Fazer HTTP requests",
      "Executar código CPU-intensive sem bloquear o event loop",
      "Gerir base de dados",
      "Servir ficheiros estáticos",
    ],
    correctIndex: 1,
    explanation:
      "Worker Threads permitem executar JavaScript em threads separadas, ideal para tarefas CPU-intensive que bloqueariam o event loop principal.",
  },
  {
    id: 109,
    category: "nodejs",
    code: `const path = require('path');\nconsole.log(path.join('/users', 'docs', '..', 'pics', 'photo.jpg'));`,
    question: "Qual é o output?",
    options: [
      "/users/docs/../pics/photo.jpg",
      "/users/pics/photo.jpg",
      "/users/docs/pics/photo.jpg",
      "users/pics/photo.jpg",
    ],
    correctIndex: 1,
    explanation:
      "`path.join` resolve segmentos incluindo `..` (parent dir). `/users/docs/..` resolve para `/users`, depois junta `pics/photo.jpg`.",
  },
  {
    id: 110,
    category: "nodejs",
    code: `const buf = Buffer.from('Hello');\nconsole.log(buf.length);\nconsole.log(buf.toString('hex'));`,
    question: "O que é um Buffer no Node.js?",
    options: [
      "Um tipo de Array",
      "Uma representação de dados binários em memória",
      "Um tipo de String",
      "Um stream de dados",
    ],
    correctIndex: 1,
    explanation:
      "Buffer é uma representação de dados binários de tamanho fixo em memória. Essencial para trabalhar com I/O, ficheiros, rede e dados binários no Node.js.",
  },
  {
    id: 111,
    category: "nodejs",
    code: `// package.json\n{\n  "type": "module"\n}\n\n// app.js\nimport { readFile } from 'fs/promises';\nconst data = await readFile('config.json', 'utf8');`,
    question: "O que permite 'type: module' no package.json?",
    options: [
      "Usar CommonJS",
      "Usar ES Modules (import/export) nativamente",
      "Usar TypeScript",
      "Compilar para browser",
    ],
    correctIndex: 1,
    explanation:
      "`type: module` permite usar ES Modules (import/export) em ficheiros .js. Sem ele, o Node.js assume CommonJS (require/module.exports).",
  },
  {
    id: 112,
    category: "nodejs",
    code: `process.env.NODE_ENV = 'production';\nconsole.log(process.env.NODE_ENV);\nconsole.log(process.pid);\nconsole.log(process.version);`,
    question: "O que é o objeto 'process' no Node.js?",
    options: [
      "Uma classe para criar processos",
      "Um global que fornece info e controle sobre o processo Node.js atual",
      "Um módulo de filesystem",
      "Um event emitter de rede",
    ],
    correctIndex: 1,
    explanation:
      "`process` é um objeto global que fornece informações sobre o processo Node.js atual: variáveis de ambiente, PID, versão, argv, stdin/stdout, e métodos como exit().",
  },
  {
    id: 113,
    category: "nodejs",
    code: `const express = require('express');\nconst app = express();\n\napp.use((req, res, next) => {\n  console.log(req.method, req.url);\n  next();\n});\n\napp.get('/api', (req, res) => res.json({ ok: true }));`,
    question: "O que faz a função passada a app.use()?",
    options: [
      "Define uma rota GET",
      "É um middleware que executa em TODOS os requests",
      "Configura CORS",
      "Inicia o servidor",
    ],
    correctIndex: 1,
    explanation:
      "`app.use()` regista middleware que executa em todos os requests. `next()` passa o controle para o próximo middleware/rota. Sem `next()`, o request ficaria pendurado.",
  },
  {
    id: 114,
    category: "nodejs",
    code: `const fs = require('fs');\nconst readStream = fs.createReadStream('bigfile.txt');\nlet chunks = 0;\nreadStream.on('data', (chunk) => chunks++);\nreadStream.on('end', () => console.log('Chunks:', chunks));`,
    question: "Porque usar streams em vez de readFile para ficheiros grandes?",
    options: [
      "É mais rápido",
      "Processa dados em pedaços sem carregar tudo para memória",
      "Suporta mais formatos",
      "É mais seguro",
    ],
    correctIndex: 1,
    explanation:
      "Streams processam dados em chunks, permitindo trabalhar com ficheiros maiores que a memória disponível. `readFile` carrega o ficheiro inteiro para memória de uma vez.",
  },
  {
    id: 115,
    category: "nodejs",
    code: `const crypto = require('crypto');\nconst hash = crypto.createHash('sha256')\n  .update('password123')\n  .digest('hex');\nconsole.log(hash);`,
    question: "O que faz o módulo crypto aqui?",
    options: [
      "Encripta a password de forma reversível",
      "Gera um hash SHA-256 irreversível da string",
      "Cria um certificado SSL",
      "Gera um número aleatório",
    ],
    correctIndex: 1,
    explanation:
      "`crypto.createHash` cria um hash unidirecional (irreversível). SHA-256 produz sempre o mesmo output para o mesmo input, mas não se pode reverter para obter o original.",
  },
  {
    id: 116,
    category: "nodejs",
    code: `// Error handling patterns\nprocess.on('uncaughtException', (err) => {\n  console.error('Uncaught:', err);\n  process.exit(1);\n});\n\nprocess.on('unhandledRejection', (reason) => {\n  console.error('Unhandled:', reason);\n  process.exit(1);\n});`,
    question: "O que acontece se um 'uncaughtException' não for tratado?",
    options: [
      "Nada, é ignorado",
      "O processo Node.js crasha",
      "O erro é logado automaticamente",
      "O evento é re-emitido",
    ],
    correctIndex: 1,
    explanation:
      "Exceções não capturadas terminam o processo Node.js. É boa prática capturá-las para logging graceful, mas o processo deve terminar — o state pode estar inconsistente.",
  },
  {
    id: 117,
    category: "nodejs",
    code: `const { promisify } = require('util');\nconst sleep = promisify(setTimeout);\n\nasync function main() {\n  console.log('Start');\n  await sleep(1000);\n  console.log('End');\n}\nmain();`,
    question: "O que faz promisify?",
    options: [
      "Cria uma Promise nova",
      "Converte funções callback-style para retornar Promises",
      "Cancela uma Promise",
      "Faz polling de um valor",
    ],
    correctIndex: 1,
    explanation:
      "`promisify` converte funções que seguem o padrão callback Node.js `(err, result)` em funções que retornam Promises, permitindo usar async/await.",
  },
  {
    id: 118,
    category: "nodejs",
    code: `// package.json\n{\n  "engines": { "node": ">=18" },\n  "scripts": {\n    "start": "node server.js",\n    "dev": "node --watch server.js",\n    "test": "node --test"\n  }\n}`,
    question: "O que faz a flag --watch no Node.js 18+?",
    options: [
      "Monitoriza performance",
      "Reinicia automaticamente quando ficheiros mudam",
      "Observa network requests",
      "Ativa debug mode",
    ],
    correctIndex: 1,
    explanation:
      "A flag `--watch` (Node 18+) reinicia automaticamente o processo quando ficheiros mudam. É uma alternativa nativa ao nodemon para desenvolvimento.",
  },
  {
    id: 119,
    category: "nodejs",
    code: `const { AsyncLocalStorage } = require('async_hooks');\nconst als = new AsyncLocalStorage();\n\nfunction getRequestId() {\n  return als.getStore()?.requestId;\n}\n\nserver.on('request', (req, res) => {\n  als.run({ requestId: crypto.randomUUID() }, () => {\n    handleRequest(req, res);\n  });\n});`,
    question: "O que faz AsyncLocalStorage?",
    options: [
      "Armazena dados no disco",
      "Mantém contexto ao longo de uma cadeia async sem passar parâmetros",
      "Cache de dados em memória",
      "Armazenamento local do browser",
    ],
    correctIndex: 1,
    explanation:
      "AsyncLocalStorage permite manter contexto (como request IDs) ao longo de toda a cadeia de calls async, sem necessidade de passar parâmetros explicitamente — essencial para logging e tracing.",
  },
  {
    id: 120,
    category: "nodejs",
    code: `const net = require('net');\nconst server = net.createServer((socket) => {\n  socket.write('Hello!\\n');\n  socket.on('data', (data) => {\n    socket.write(data.toString().toUpperCase());\n  });\n});\nserver.listen(8080);`,
    question: "Qual a diferença entre net e http no Node.js?",
    options: [
      "São iguais",
      "net trabalha com TCP raw, http é uma abstração sobre TCP para o protocolo HTTP",
      "net é mais recente",
      "http é mais rápido",
    ],
    correctIndex: 1,
    explanation:
      "O módulo `net` trabalha com sockets TCP raw, sem conhecimento de HTTP. O módulo `http` é construído sobre `net` e adiciona parsing de headers, methods, status codes, etc.",
  },
  {
    id: 121,
    category: "nodejs",
    code: `// Node.js Event Loop Phases\n\n// 1. Timers: setTimeout, setInterval\n// 2. Pending callbacks: I/O callbacks\n// 3. Idle/Prepare: internal\n// 4. Poll: new I/O events\n// 5. Check: setImmediate\n// 6. Close: socket.on('close')`,
    question: "Quantas fases tem o Event Loop do Node.js?",
    options: ["2", "4", "6", "8"],
    correctIndex: 2,
    explanation:
      "O Event Loop do Node.js (libuv) tem 6 fases. Cada fase tem uma queue FIFO de callbacks. O loop percorre todas as fases sequencialmente, processando callbacks de cada uma.",
  },
  {
    id: 122,
    category: "nodejs",
    code: `const { createServer } = require('http');\nconst { cpus } = require('os');\nconst { availableParallelism } = require('os');\n\nconsole.log('CPUs:', cpus().length);\nconsole.log('Parallelism:', availableParallelism());`,
    question: "O Node.js é single-threaded?",
    options: [
      "Sim, completamente",
      "O JS é single-threaded mas I/O usa thread pool (libuv)",
      "Não, é multi-threaded",
      "Depende do OS",
    ],
    correctIndex: 1,
    explanation:
      "O código JavaScript executa numa única thread, mas o Node.js usa um thread pool (libuv, default 4 threads) para operações I/O bloqueantes (filesystem, DNS, etc.). Worker threads permitem JS multi-threaded.",
  },
  {
    id: 123,
    category: "nodejs",
    code: `const assert = require('assert');\nconst { describe, it } = require('node:test');\n\ndescribe('math', () => {\n  it('adds numbers', () => {\n    assert.strictEqual(1 + 1, 2);\n  });\n});`,
    question: "O que é node:test?",
    options: [
      "Um framework de testes externo",
      "O test runner nativo do Node.js (v18+)",
      "Um módulo de assertions",
      "Um debugger",
    ],
    correctIndex: 1,
    explanation:
      "`node:test` é o test runner nativo introduzido no Node.js 18. Permite escrever e correr testes sem dependências externas como Jest ou Mocha.",
  },
  {
    id: 124,
    category: "nodejs",
    code: `const { Readable } = require('stream');\n\nasync function* generate() {\n  yield 'hello';\n  yield 'world';\n}\n\nconst readable = Readable.from(generate());\nreadable.on('data', console.log);`,
    question: "O que faz Readable.from()?",
    options: [
      "Lê um ficheiro",
      "Cria um Readable stream a partir de um iterable ou async generator",
      "Converte string para stream",
      "Faz download de um URL",
    ],
    correctIndex: 1,
    explanation:
      "`Readable.from()` cria um Readable stream a partir de qualquer iterable (arrays, generators, async generators). Permite integrar facilmente diferentes fontes de dados com a API de streams.",
  },
  {
    id: 125,
    category: "nodejs",
    code: `const { setTimeout: delay } = require('timers/promises');\nconst controller = new AbortController();\n\nsetTimeout(() => controller.abort(), 100);\n\ntry {\n  await delay(5000, null, { signal: controller.signal });\n} catch (e) {\n  console.log(e.code); // ABORT_ERR\n}`,
    question: "O que é o AbortController no Node.js?",
    options: [
      "Um error handler",
      "Um mecanismo para cancelar operações assíncronas",
      "Um controlador de processos",
      "Um gestor de memória",
    ],
    correctIndex: 1,
    explanation:
      "AbortController permite cancelar operações async (fetch, timers, streams) via AbortSignal. Quando `abort()` é chamado, operações pendentes são rejeitadas com AbortError.",
  },
  {
    id: 126,
    category: "nodejs",
    code: `// .env\nDATABASE_URL=postgres://localhost:5432/mydb\nAPI_KEY=secret123\n\n// app.js (Node 20+)\n// Sem dotenv!\nconsole.log(process.env.DATABASE_URL);`,
    question: "Como carregar .env nativamente no Node.js 20+?",
    options: [
      "Não é possível sem dotenv",
      "node --env-file=.env app.js",
      "node --dotenv app.js",
      "node --load-env app.js",
    ],
    correctIndex: 1,
    explanation:
      "Node.js 20+ suporta `--env-file=.env` nativamente, eliminando a necessidade do package `dotenv` para carregar variáveis de ambiente de ficheiros .env.",
  },
  {
    id: 127,
    category: "nodejs",
    code: `const { pipeline } = require('stream/promises');\nconst { createReadStream, createWriteStream } = require('fs');\nconst { createGzip } = require('zlib');\n\nawait pipeline(\n  createReadStream('input.txt'),\n  createGzip(),\n  createWriteStream('input.txt.gz')\n);`,
    question: "Qual a vantagem de pipeline sobre pipe()?",
    options: [
      "É mais rápido",
      "Trata erros e cleanup automaticamente em toda a chain",
      "Suporta mais formatos",
      "É síncrono",
    ],
    correctIndex: 1,
    explanation:
      "`pipeline` (vs `.pipe()`) propaga erros corretamente e faz cleanup de todos os streams na chain quando um falha. A versão de `stream/promises` retorna uma Promise.",
  },
  {
    id: 128,
    category: "nodejs",
    code: `// Performance measurement\nconst { performance, PerformanceObserver } = require('perf_hooks');\n\nconst obs = new PerformanceObserver((list) => {\n  console.log(list.getEntries()[0].duration);\n});\nobs.observe({ entryTypes: ['measure'] });\n\nperformance.mark('start');\n// ... work ...\nperformance.mark('end');\nperformance.measure('work', 'start', 'end');`,
    question: "Para que serve perf_hooks?",
    options: [
      "Monitorizar rede",
      "Medir performance de código com alta precisão",
      "Otimizar memória",
      "Fazer profiling de CPU",
    ],
    correctIndex: 1,
    explanation:
      "`perf_hooks` fornece APIs de alta resolução para medir performance. `performance.mark()` e `performance.measure()` são equivalentes à Performance API do browser.",
  },
  {
    id: 129,
    category: "nodejs",
    code: `const v8 = require('v8');\nconst heapStats = v8.getHeapStatistics();\nconsole.log('Heap used:', heapStats.used_heap_size);\nconsole.log('Heap limit:', heapStats.heap_size_limit);`,
    question: "Qual é o limite default de memória heap do Node.js?",
    options: [
      "256 MB",
      "512 MB",
      "~1.5 GB (varia por versão/plataforma)",
      "Ilimitado",
    ],
    correctIndex: 2,
    explanation:
      "O V8 tem um limite default de heap de ~1.5 GB (pode variar). Pode ser aumentado com `--max-old-space-size=4096` (em MB). Monitorizar heap é essencial para prevenir memory leaks.",
  },
  {
    id: 130,
    category: "nodejs",
    code: `// Graceful shutdown\nconst server = app.listen(3000);\n\nprocess.on('SIGTERM', async () => {\n  console.log('Shutting down...');\n  server.close(() => {\n    db.disconnect();\n    process.exit(0);\n  });\n  setTimeout(() => process.exit(1), 10000);\n});`,
    question: "Porque é importante o graceful shutdown?",
    options: [
      "Para o servidor iniciar mais rápido",
      "Para terminar requests em curso e limpar recursos antes de sair",
      "Para evitar erros de compilação",
      "Para reduzir uso de CPU",
    ],
    correctIndex: 1,
    explanation:
      "Graceful shutdown permite terminar requests em curso, fechar conexões a DBs, e limpar recursos antes do processo terminar. Essencial em containers (Kubernetes envia SIGTERM antes de matar o pod).",
  },

  // ========== REACT.JS (30) ==========
  {
    id: 201,
    category: "reactjs",
    code: `function Counter() {\n  const [count, setCount] = useState(0);\n  \n  const handleClick = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n  \n  return <button onClick={handleClick}>{count}</button>;\n}`,
    question: "Após um click, qual é o valor de count?",
    options: ["3", "1", "0", "2"],
    correctIndex: 1,
    explanation:
      "State updates são batched. Cada `setCount(count + 1)` usa o mesmo valor de `count` (0). Resultado: 0 + 1 = 1. Use `setCount(c => c + 1)` para incrementos sequenciais.",
  },
  {
    id: 202,
    category: "reactjs",
    code: `function App() {\n  const [items, setItems] = useState([1, 2, 3]);\n  \n  return (\n    <ul>\n      {items.map(item => <li>{item}</li>)}\n    </ul>\n  );\n}`,
    question: "Qual é o problema com este código?",
    options: [
      "Falta return no map",
      "Falta a prop 'key' nos elementos <li>",
      "useState não aceita arrays",
      "Não há problema",
    ],
    correctIndex: 1,
    explanation:
      "React precisa de uma prop `key` única em listas para identificar elementos e otimizar re-renders. Sem key, o React não consegue rastrear mudanças eficientemente.",
  },
  {
    id: 203,
    category: "reactjs",
    code: `useEffect(() => {\n  const interval = setInterval(() => {\n    console.log('tick');\n  }, 1000);\n  \n  return () => clearInterval(interval);\n}, []);`,
    question: "O que faz a função retornada pelo useEffect?",
    options: [
      "É o valor do effect",
      "É a cleanup function — executa ao desmontar o componente",
      "É um error handler",
      "É chamada antes do effect",
    ],
    correctIndex: 1,
    explanation:
      "A função retornada pelo useEffect é a cleanup function. Executa quando o componente desmonta ou antes do effect re-executar. Essencial para limpar intervals, subscriptions, event listeners.",
  },
  {
    id: 204,
    category: "reactjs",
    code: `const MemoChild = React.memo(({ data }) => {\n  console.log('render');\n  return <div>{data.value}</div>;\n});\n\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  const data = { value: 'hello' };\n  return <MemoChild data={data} />;\n}`,
    question: "O MemoChild re-renderiza quando count muda?",
    options: [
      "Não, está memoizado",
      "Sim, porque data é um novo objeto a cada render",
      "Depende do valor de count",
      "Só na primeira vez",
    ],
    correctIndex: 1,
    explanation:
      "`React.memo` faz shallow comparison. `data` é um novo objeto criado a cada render do Parent (referência diferente). Use `useMemo` para estabilizar a referência.",
  },
  {
    id: 205,
    category: "reactjs",
    code: `function Form() {\n  const inputRef = useRef(null);\n  \n  useEffect(() => {\n    inputRef.current.focus();\n  }, []);\n  \n  return <input ref={inputRef} />;\n}`,
    question: "O que faz useRef neste contexto?",
    options: [
      "Cria state",
      "Dá acesso direto ao elemento DOM sem causar re-render",
      "Memoriza um valor",
      "Cria um event listener",
    ],
    correctIndex: 1,
    explanation:
      "`useRef` cria uma referência mutável que persiste entre renders. Quando usada com `ref`, permite acesso direto ao DOM node. Alterar `.current` NÃO causa re-render.",
  },
  {
    id: 206,
    category: "reactjs",
    code: `const ThemeContext = createContext('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <DeepChild />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction DeepChild() {\n  const theme = useContext(ThemeContext);\n  return <div>{theme}</div>;\n}`,
    question: "Qual é o valor de theme no DeepChild?",
    options: ['"light"', '"dark"', "undefined", "null"],
    correctIndex: 1,
    explanation:
      "`useContext` lê o valor do Provider mais próximo na árvore. O Provider dá `value=\"dark\"`, que sobrescreve o default `'light'`.",
  },
  {
    id: 207,
    category: "reactjs",
    code: `function App() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    setCount(1);\n  });\n  \n  return <div>{count}</div>;\n}`,
    question: "O que acontece com este código?",
    options: [
      "Mostra 0",
      "Mostra 1",
      "Loop infinito de re-renders",
      "Erro de compilação",
    ],
    correctIndex: 2,
    explanation:
      "useEffect sem array de dependências executa após CADA render. `setCount(1)` causa re-render → useEffect executa → setCount → re-render → loop infinito.",
  },
  {
    id: 208,
    category: "reactjs",
    code: `function useDebounce(value, delay) {\n  const [debounced, setDebounced] = useState(value);\n  \n  useEffect(() => {\n    const timer = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n  \n  return debounced;\n}`,
    question: "O que faz este custom hook?",
    options: [
      "Atualiza o valor imediatamente",
      "Atrasa a atualização do valor até parar de mudar por 'delay' ms",
      "Cancela o valor",
      "Repete o valor N vezes",
    ],
    correctIndex: 1,
    explanation:
      "O hook debounce espera que o valor pare de mudar por `delay` milissegundos antes de atualizar. Cada mudança limpa o timer anterior. Útil para search inputs.",
  },
  {
    id: 209,
    category: "reactjs",
    code: `function Parent() {\n  const [count, setCount] = useState(0);\n  \n  const increment = useCallback(() => {\n    setCount(c => c + 1);\n  }, []);\n  \n  return <Child onClick={increment} />;\n}`,
    question: "Porque usar useCallback aqui?",
    options: [
      "Para o callback ser mais rápido",
      "Para manter a mesma referência da função entre renders",
      "Para evitar erros",
      "Não há razão, é desnecessário",
    ],
    correctIndex: 1,
    explanation:
      "`useCallback` memoriza a função, mantendo a mesma referência entre renders. Sem ele, `increment` seria uma nova função a cada render, causando re-renders desnecessários do `Child` (se usar React.memo).",
  },
  {
    id: 210,
    category: "reactjs",
    code: `function App() {\n  return (\n    <ErrorBoundary fallback={<h1>Erro!</h1>}>\n      <ComponentQuePodeFalhar />\n    </ErrorBoundary>\n  );\n}`,
    question: "O que captura um Error Boundary?",
    options: [
      "Todos os erros JavaScript",
      "Erros durante rendering, lifecycle e constructors de filhos",
      "Erros assíncronos e em event handlers",
      "Erros de rede",
    ],
    correctIndex: 1,
    explanation:
      "Error Boundaries capturam erros durante rendering e lifecycle methods dos componentes filhos. NÃO capturam erros em event handlers, código async, SSR, ou no próprio boundary.",
  },
  {
    id: 211,
    category: "reactjs",
    code: `const LazyComponent = React.lazy(() => import('./HeavyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <LazyComponent />\n    </Suspense>\n  );\n}`,
    question: "O que faz React.lazy?",
    options: [
      "Torna o componente mais lento",
      "Code-splitting: carrega o componente apenas quando necessário",
      "Memoriza o componente",
      "Atrasa o render por performance",
    ],
    correctIndex: 1,
    explanation:
      "`React.lazy` permite code-splitting ao nível do componente. O bundle do componente só é carregado quando o componente é renderizado pela primeira vez. `Suspense` mostra um fallback enquanto carrega.",
  },
  {
    id: 212,
    category: "reactjs",
    code: `function Counter() {\n  const [state, dispatch] = useReducer(\n    (state, action) => {\n      switch (action.type) {\n        case 'increment': return { count: state.count + 1 };\n        case 'decrement': return { count: state.count - 1 };\n        default: return state;\n      }\n    },\n    { count: 0 }\n  );\n}`,
    question: "Quando usar useReducer em vez de useState?",
    options: [
      "Sempre",
      "Quando o state é complexo ou as atualizações dependem do state anterior",
      "Apenas com forms",
      "Quando não há re-renders",
    ],
    correctIndex: 1,
    explanation:
      "`useReducer` é preferível quando: state é um objeto complexo, múltiplas ações alteram o state, ou atualizações dependem do state anterior. Centraliza a lógica de atualização no reducer.",
  },
  {
    id: 213,
    category: "reactjs",
    code: `// React 18\nfunction App() {\n  const [count, setCount] = useState(0);\n  const [flag, setFlag] = useState(false);\n  \n  function handleClick() {\n    setCount(c => c + 1); // Não re-renderiza ainda\n    setFlag(f => !f);      // Não re-renderiza ainda\n    // React faz batch e re-renderiza uma vez\n  }\n}`,
    question: "O que é Automatic Batching no React 18?",
    options: [
      "Agrupar components automaticamente",
      "Agrupar múltiplas atualizações de state num único re-render",
      "Processar events em batch",
      "Lazy loading automático",
    ],
    correctIndex: 1,
    explanation:
      "React 18 agrupa automaticamente múltiplas atualizações de state num único re-render, mesmo em setTimeout, promises e event handlers nativos. Antes do React 18, o batching só funcionava em event handlers do React.",
  },
  {
    id: 214,
    category: "reactjs",
    code: `function Search() {\n  const [query, setQuery] = useState('');\n  const [deferredQuery, setDeferredQuery] = useState('');\n  const deferredValue = useDeferredValue(query);\n  \n  return (\n    <>\n      <input value={query} onChange={e => setQuery(e.target.value)} />\n      <Results query={deferredValue} />\n    </>\n  );\n}`,
    question: "O que faz useDeferredValue?",
    options: [
      "Atrasa o render do input",
      "Permite que o UI responda ao input enquanto adia atualizações pesadas",
      "Cancela renders anteriores",
      "Faz debounce do valor",
    ],
    correctIndex: 1,
    explanation:
      "`useDeferredValue` mantém o UI responsivo ao input do utilizador, adiando a atualização do valor derivado. O React renderiza primeiro com o valor antigo (urgent update) e depois com o novo (deferred).",
  },
  {
    id: 215,
    category: "reactjs",
    code: `function Form() {\n  const [isPending, startTransition] = useTransition();\n  const [tab, setTab] = useState('home');\n  \n  function selectTab(nextTab) {\n    startTransition(() => {\n      setTab(nextTab);\n    });\n  }\n}`,
    question: "O que faz useTransition?",
    options: [
      "Anima transições CSS",
      "Marca state updates como não-urgentes para manter o UI responsivo",
      "Faz transição entre páginas",
      "Atrasa o mounting do componente",
    ],
    correctIndex: 1,
    explanation:
      "`useTransition` marca state updates como transições (non-urgent). O React pode interromper o render da transição se houver updates mais urgentes (como input do utilizador), mantendo o UI responsivo.",
  },
  {
    id: 216,
    category: "reactjs",
    code: `function TodoList({ todos, filter }) {\n  const filtered = useMemo(() => {\n    return todos.filter(t => t.status === filter);\n  }, [todos, filter]);\n  \n  return <ul>{filtered.map(t => <li key={t.id}>{t.text}</li>)}</ul>;\n}`,
    question: "Quando NÃO usar useMemo?",
    options: [
      "Nunca, use sempre",
      "Quando o cálculo é barato e o array de deps muda frequentemente",
      "Quando o componente é grande",
      "Quando há muitos re-renders",
    ],
    correctIndex: 1,
    explanation:
      "`useMemo` tem overhead (comparação de deps, armazenamento). Só vale a pena quando o cálculo é caro OU quando se precisa de referência estável. Para operações baratas, o overhead do memo pode ser maior que o cálculo.",
  },
  {
    id: 217,
    category: "reactjs",
    code: `// Controlled vs Uncontrolled\n\n// Controlled\nfunction Controlled() {\n  const [val, setVal] = useState('');\n  return <input value={val} onChange={e => setVal(e.target.value)} />;\n}\n\n// Uncontrolled\nfunction Uncontrolled() {\n  const ref = useRef();\n  const submit = () => console.log(ref.current.value);\n  return <input ref={ref} />;\n}`,
    question: "Qual a diferença entre controlled e uncontrolled components?",
    options: [
      "Não há diferença",
      "Controlled: React gere o valor. Uncontrolled: o DOM gere o valor",
      "Controlled é mais lento",
      "Uncontrolled não funciona com forms",
    ],
    correctIndex: 1,
    explanation:
      "Em controlled components, o React é a 'source of truth' (valor via state). Em uncontrolled, o DOM mantém o estado internamente e acedemos via ref. Controlled é preferível para validação e lógica complexa.",
  },
  {
    id: 218,
    category: "reactjs",
    code: `function App() {\n  const [count, setCount] = useState(0);\n  \n  console.log('render');\n  \n  return (\n    <>\n      <p>{count}</p>\n      <button onClick={() => setCount(0)}>Reset</button>\n    </>\n  );\n}`,
    question: "Se count já é 0 e clicamos Reset, o componente re-renderiza?",
    options: [
      "Sim, sempre",
      "Não, React faz bailout quando o state é o mesmo",
      "Depende do browser",
      "Erro",
    ],
    correctIndex: 1,
    explanation:
      "React faz bailout optimization: se o novo state é igual ao anterior (por Object.is), não re-renderiza o componente. Pode fazer um render extra para verificar, mas não atualiza o DOM.",
  },
  {
    id: 219,
    category: "reactjs",
    code: `function Parent() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>+</button>\n      {children}\n    </div>\n  );\n}`,
    question: "Os children re-renderizam quando count muda?",
    options: [
      "Sim, sempre",
      "Não, children são passados como props e já estão criados",
      "Depende do tipo de children",
      "Só se tiverem state",
    ],
    correctIndex: 1,
    explanation:
      "O pattern `children` é uma otimização natural. Os children são criados pelo parent do Parent e passados como props — a sua referência não muda quando count muda, então não re-renderizam.",
  },
  {
    id: 220,
    category: "reactjs",
    code: `// Custom hook\nfunction useLocalStorage(key, initial) {\n  const [value, setValue] = useState(() => {\n    const stored = localStorage.getItem(key);\n    return stored ? JSON.parse(stored) : initial;\n  });\n  \n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n  \n  return [value, setValue];\n}`,
    question: "Porque usar uma função em useState(() => ...)?",
    options: [
      "É obrigatório",
      "Lazy initialization — o cálculo só executa no primeiro render",
      "Para evitar erros",
      "Para fazer o state async",
    ],
    correctIndex: 1,
    explanation:
      "Lazy initialization garante que o cálculo caro (localStorage.getItem + JSON.parse) só executa no primeiro render, não em cada re-render. Sem a função, seria chamado a cada render (e o resultado ignorado).",
  },
  {
    id: 221,
    category: "reactjs",
    code: `// React.forwardRef\nconst FancyInput = React.forwardRef((props, ref) => {\n  return <input ref={ref} className="fancy" {...props} />;\n});\n\nfunction Parent() {\n  const inputRef = useRef();\n  return <FancyInput ref={inputRef} />;\n}`,
    question: "Porque é necessário forwardRef?",
    options: [
      "Para performance",
      "Porque ref não é passada como prop normal — precisa de forwarding explícito",
      "Para evitar re-renders",
      "Para usar TypeScript",
    ],
    correctIndex: 1,
    explanation:
      "`ref` é tratada especialmente pelo React e não é passada como prop normal aos function components. `forwardRef` permite que um componente 'encaminhe' a ref para um elemento DOM interno.",
  },
  {
    id: 222,
    category: "reactjs",
    code: `function App() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    document.title = \`Count: \${count}\`;\n  });\n  \n  useLayoutEffect(() => {\n    // Medir DOM, ajustar layout\n  });\n}`,
    question: "Qual a diferença entre useEffect e useLayoutEffect?",
    options: [
      "São iguais",
      "useLayoutEffect executa sincronamente ANTES do browser pintar",
      "useEffect é mais rápido",
      "useLayoutEffect é para animações",
    ],
    correctIndex: 1,
    explanation:
      "`useLayoutEffect` executa sincronamente após o DOM mutar mas ANTES do browser pintar. Útil para medir/modificar o DOM antes do utilizador ver. `useEffect` executa após o paint.",
  },
  {
    id: 223,
    category: "reactjs",
    code: `// Server Components vs Client Components (React 19 / Next.js)\n\n// server component (default)\nasync function Posts() {\n  const posts = await db.query('SELECT * FROM posts');\n  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;\n}\n\n// client component\n'use client';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c+1)}>{count}</button>;\n}`,
    question: "Qual a diferença principal entre Server e Client Components?",
    options: [
      "Server Components são mais rápidos",
      "Server Components renderizam no servidor e não enviam JS ao cliente",
      "Client Components não podem usar HTML",
      "São iguais mas com nomes diferentes",
    ],
    correctIndex: 1,
    explanation:
      "Server Components renderizam no servidor, não enviam JavaScript ao browser, e podem aceder diretamente à DB/filesystem. Client Components ('use client') renderizam no browser e podem usar hooks/interatividade.",
  },
  {
    id: 224,
    category: "reactjs",
    code: `function useOnlineStatus() {\n  const [isOnline, setIsOnline] = useState(true);\n  \n  useSyncExternalStore(\n    (callback) => {\n      window.addEventListener('online', callback);\n      window.addEventListener('offline', callback);\n      return () => {\n        window.removeEventListener('online', callback);\n        window.removeEventListener('offline', callback);\n      };\n    },\n    () => navigator.onLine\n  );\n  \n  return isOnline;\n}`,
    question: "Para que serve useSyncExternalStore?",
    options: [
      "Sincronizar state entre componentes",
      "Subscrever a external stores de forma segura com concurrent rendering",
      "Armazenar dados offline",
      "Sincronizar com localStorage",
    ],
    correctIndex: 1,
    explanation:
      "`useSyncExternalStore` é o hook recomendado para subscrever a fontes de dados externas (browser APIs, stores third-party). Garante consistência com concurrent rendering do React 18.",
  },
  {
    id: 225,
    category: "reactjs",
    code: `// Render props pattern\nfunction MouseTracker({ render }) {\n  const [pos, setPos] = useState({ x: 0, y: 0 });\n  \n  useEffect(() => {\n    const handler = (e) => setPos({ x: e.clientX, y: e.clientY });\n    window.addEventListener('mousemove', handler);\n    return () => window.removeEventListener('mousemove', handler);\n  }, []);\n  \n  return render(pos);\n}\n\n// Usage\n<MouseTracker render={({ x, y }) => <p>{x}, {y}</p>} />`,
    question: "O que é o pattern 'render props'?",
    options: [
      "Props que fazem render automático",
      "Partilhar lógica entre componentes via prop que é uma função de render",
      "Props obrigatórias para render",
      "Um hook especial",
    ],
    correctIndex: 1,
    explanation:
      "Render props é um pattern onde um componente recebe uma função como prop que retorna JSX. Permite partilhar lógica (mouse tracking, data fetching) entre componentes. Hoje em dia, custom hooks são geralmente preferidos.",
  },
  {
    id: 226,
    category: "reactjs",
    code: `// React.StrictMode\nfunction App() {\n  return (\n    <React.StrictMode>\n      <MyComponent />\n    </React.StrictMode>\n  );\n}`,
    question: "O que faz StrictMode em desenvolvimento?",
    options: [
      "Otimiza performance",
      "Renderiza componentes duas vezes para detetar side effects impuros",
      "Ativa TypeScript strict",
      "Bloqueia erros em produção",
    ],
    correctIndex: 1,
    explanation:
      "Em dev, StrictMode renderiza componentes duas vezes, re-executa effects, e mostra warnings para ajudar a detetar bugs como side effects impuros, APIs deprecated, e problemas com cleanup.",
  },
  {
    id: 227,
    category: "reactjs",
    code: `const id = useId();\n\nreturn (\n  <>\n    <label htmlFor={id}>Email:</label>\n    <input id={id} type="email" />\n  </>\n);`,
    question: "Para que serve useId?",
    options: [
      "Gerar chaves para listas",
      "Gerar IDs únicos estáveis para acessibilidade (label/input)",
      "Criar IDs para database",
      "Gerar UUIDs",
    ],
    correctIndex: 1,
    explanation:
      "`useId` gera IDs estáveis e únicos que são consistentes entre server e client rendering. Ideal para associar labels a inputs, aria-describedby, etc. NÃO deve ser usado como key em listas.",
  },
  {
    id: 228,
    category: "reactjs",
    code: `function App() {\n  const [count, setCount] = useState(0);\n  \n  function handleClick() {\n    setCount(count + 1);\n    console.log(count); // ???\n  }\n}`,
    question: "O que loga console.log(count) após setCount?",
    options: [
      "O valor atualizado",
      "O valor anterior (0)",
      "undefined",
      "Error",
    ],
    correctIndex: 1,
    explanation:
      "State updates no React são assíncronos. `count` é uma const no closure atual — `setCount` agenda um re-render mas não muda o valor da variável `count` no scope atual.",
  },
  {
    id: 229,
    category: "reactjs",
    code: `// Compound components pattern\nfunction Tabs({ children }) {\n  const [active, setActive] = useState(0);\n  return (\n    <TabsContext.Provider value={{ active, setActive }}>\n      {children}\n    </TabsContext.Provider>\n  );\n}\n\nTabs.Tab = function Tab({ index, children }) {\n  const { active, setActive } = useContext(TabsContext);\n  return <button onClick={() => setActive(index)}>{children}</button>;\n};\n\nTabs.Panel = function Panel({ index, children }) {\n  const { active } = useContext(TabsContext);\n  return active === index ? <div>{children}</div> : null;\n};`,
    question: "O que é o pattern 'compound components'?",
    options: [
      "Componentes com muitas props",
      "Componentes que partilham state implícito via Context para uma API declarativa",
      "Componentes dentro de componentes",
      "HOC pattern",
    ],
    correctIndex: 1,
    explanation:
      "Compound components trabalham juntos partilhando state implícito (via Context). O utilizador compõe a UI de forma declarativa sem passar props manualmente entre sub-componentes. Ex: `<Tabs><Tabs.Tab>...</Tabs.Tab></Tabs>`.",
  },
  {
    id: 230,
    category: "reactjs",
    code: `// React 19 - use() hook\nfunction Comments({ commentsPromise }) {\n  const comments = use(commentsPromise);\n  return comments.map(c => <p key={c.id}>{c.text}</p>);\n}\n\nfunction Page() {\n  return (\n    <Suspense fallback={<Spinner />}>\n      <Comments commentsPromise={fetchComments()} />\n    </Suspense>\n  );\n}`,
    question: "O que faz o hook use() do React 19?",
    options: [
      "É igual a useState",
      "Lê valores de Promises e Contexts, pode ser chamado condicionalmente",
      "Substitui todos os hooks",
      "Cria side effects",
    ],
    correctIndex: 1,
    explanation:
      "O hook `use()` do React 19 pode ler Promises (com Suspense) e Contexts. Ao contrário de outros hooks, pode ser chamado condicionalmente e dentro de loops. Simplifica data fetching e leitura de context.",
  },

  // ========== JAVA (30) ==========
  {
    id: 231,
    category: "java",
    code: `Integer a = 127;\nInteger b = 127;\nInteger c = 128;\nInteger d = 128;\nSystem.out.print((a == b) + " " + (c == d));`,
    question: "Qual é o output?",
    options: ["true true", "true false", "false true", "false false"],
    correctIndex: 1,
    explanation:
      "A JVM faz cache de objetos Integer para valores entre -128 e 127. Para 128, novos objetos são instanciados, tornando as referências de 'c' e 'd' diferentes.",
  },
  {
    id: 232,
    category: "java",
    code: `String s1 = "java";\nString s2 = new String("java");\nSystem.out.print((s1 == s2) + " " + s1.equals(s2));`,
    question: "Qual é o output?",
    options: ["true true", "false true", "true false", "false false"],
    correctIndex: 1,
    explanation:
      "'s1' aponta para a String no String Pool. 'new String()' força a criação de um novo objeto no Heap. '==' compara referências, 'equals' compara conteúdo.",
  },
  {
    id: 233,
    category: "java",
    code: `try {\n  System.out.print("A");\n  throw new RuntimeException();\n} catch (Exception e) {\n  System.out.print("B");\n} finally {\n  System.out.print("C");\n}`,
    question: "Qual é a sequência impressa?",
    options: ["AB", "AC", "ABC", "BC"],
    correctIndex: 2,
    explanation:
      "O bloco 'try' executa primeiro, a exceção é capturada pelo 'catch', e o bloco 'finally' sempre executa após o try/catch.",
  },
  {
    id: 234,
    category: "java",
    code: `class Parent {\n  void show() { System.out.print("Parent"); }\n}\nclass Child extends Parent {\n  void show() { System.out.print("Child"); }\n}\nParent p = new Child();\np.show();`,
    question: "Qual é o output?",
    options: ["Parent", "Child", "Compilação falha", "RuntimeError"],
    correctIndex: 1,
    explanation:
      "Java suporta polimorfismo em tempo de execução. O método é chamado com base no tipo real do objeto instanciado (Child), não no tipo de referência (Parent).",
  },
  {
    id: 235,
    category: "java",
    code: `public static void modify(int x, int[] arr) {\n  x = 10;\n  arr[0] = 10;\n}\nint n = 5;\nint[] a = {5};\nmodify(n, a);\nSystem.out.print(n + " " + a[0]);`,
    question: "Qual é o output?",
    options: ["5 5", "10 10", "5 10", "10 5"],
    correctIndex: 2,
    explanation:
      "Java passa tudo por valor. Para tipos primitivos, uma cópia do valor é passada. Para arrays/objetos, uma cópia da referência é passada, permitindo alterar o conteúdo do objeto original.",
  },
  {
    id: 236,
    category: "java",
    code: `class Test {\n  static int x = 10;\n  public static void main(String[] args) {\n    Test t = null;\n    System.out.print(t.x);\n  }\n}`,
    question: "O que acontece ao executar o código?",
    options: [
      "Imprime 10",
      "NullPointerException",
      "Compilação falha",
      "Imprime 0",
    ],
    correctIndex: 0,
    explanation:
      "Variáveis estáticas pertencem à classe, não à instância. O compilador ignora a referência nula e acessa 'Test.x' diretamente.",
  },
  {
    id: 237,
    category: "java",
    code: `String s = "a" + "b";\ns.concat("c");\nSystem.out.print(s);`,
    question: "Qual é o output?",
    options: ["abc", "ab", "a", "c"],
    correctIndex: 1,
    explanation:
      "Objetos String são imutáveis em Java. O método 'concat' retorna uma nova String, mas não altera a variável 's' original.",
  },
  {
    id: 238,
    category: "java",
    code: `int i = 1;\ni = i++;\nSystem.out.print(i);`,
    question: "Qual é o output?",
    options: ["1", "2", "0", "Compilação falha"],
    correctIndex: 0,
    explanation:
      "O operador pós-incremento avalia o valor original antes de incrementar. Durante a atribuição 'i = i++', o valor original (1) é salvo e depois reatribuído a 'i', sobrescrevendo o incremento.",
  },
  {
    id: 239,
    category: "java",
    code: `double a = 0.1;\ndouble b = 0.2;\nSystem.out.print(a + b == 0.3);`,
    question: "Qual é o output?",
    options: ["true", "false", "Compilação falha", "RuntimeError"],
    correctIndex: 1,
    explanation:
      "Assim como no JS, Java usa aritmética de ponto flutuante IEEE 754. '0.1 + 0.2' resulta em '0.30000000000000004', que não é igual a '0.3'.",
  },
  {
    id: 240,
    category: "java",
    code: `short x = 10;\nx = x + 1;\nSystem.out.print(x);`,
    question: "O que acontece ao compilar e rodar o código?",
    options: [
      "Imprime 11",
      "Erro de compilação por perda de precisão",
      "RuntimeError",
      "Imprime 10",
    ],
    correctIndex: 1,
    explanation:
      "A expressão 'x + 1' promove automaticamente o resultado para o tipo 'int'. Tentar atribuir um 'int' de volta para um 'short' sem cast explícito causa erro de compilação.",
  },
  {
    id: 241,
    category: "java",
    code: `List<Integer> list = new ArrayList<>(List.of(1, 2, 3));\nlist.remove(1);\nSystem.out.print(list);`,
    question: "Qual é o output?",
    options: ["[2, 3]", "[1, 3]", "[1, 2]", "IndexOutOfBoundsException"],
    correctIndex: 1,
    explanation:
      "O método 'remove(int index)' tem prioridade sobre 'remove(Object o)'. Portanto, o elemento no índice 1 (o valor 2) é removido.",
  },
  {
    id: 242,
    category: "java",
    code: `interface A { default void msg() { System.out.print("A"); } }\ninterface B { default void msg() { System.out.print("B"); } }\nclass C implements A, B {}`,
    question: "O que acontece ao compilar a classe C?",
    options: [
      "Compila com sucesso",
      "Erro de compilação devido ao conflito de herança múltipla",
      "Compila e adota o método de A",
      "Compila e adota o método de B",
    ],
    correctIndex: 1,
    explanation:
      "O Java proíbe a herança múltipla de implementações conflitantes. Se duas interfaces possuem o mesmo método padrão, a classe filha deve sobrescrevê-lo explicitamente para resolver o conflito.",
  },
  {
    id: 243,
    category: "java",
    code: `StringBuilder sb1 = new StringBuilder("Java");\nStringBuilder sb2 = new StringBuilder("Java");\nSystem.out.print(sb1.equals(sb2));`,
    question: "Qual é o output?",
    options: ["true", "false", "Compilação falha", "ClassCastException"],
    correctIndex: 1,
    explanation:
      "A classe 'StringBuilder' não sobrescreve o método 'equals()' da classe Object. Portanto, ela compara referências de memória, que são diferentes.",
  },
  {
    id: 244,
    category: "java",
    code: `try {\n  return 1;\n} finally {\n  return 2;\n}`,
    question:
      "Qual é o valor retornado se esse bloco for executado dentro de um método?",
    options: ["1", "2", "Erro de compilação", "Ambos são retornados"],
    correctIndex: 1,
    explanation:
      "O bloco 'finally' sempre executa antes de o controle sair do método. Um comando 'return' dentro do 'finally' descarta e substitui qualquer 'return' ou exceção disparada no 'try'.",
  },
  {
    id: 245,
    category: "java",
    code: `System.out.print(Math.min(Double.MIN_VALUE, 0.0));`,
    question: "Qual é o output?",
    options: ["0.0", "Double.MIN_VALUE", "Erro de compilação", "-4.9E-324"],
    correctIndex: 0,
    explanation:
      "Ao contrário de 'Integer.MIN_VALUE', 'Double.MIN_VALUE' representa o menor valor numérico real POSITIVO estritamente maior que zero. Logo, 0.0 é menor que ele.",
  },
  {
    id: 246,
    category: "java",
    code: `int x = 5;\nboolean b = (x < 4) && (++x > 5);\nSystem.out.print(x);`,
    question: "Qual é o output?",
    options: ["5", "6", "false", "true"],
    correctIndex: 0,
    explanation:
      "O operador '&&' é um operador de curto-circuito. Como a primeira expressão '(x < 4)' é falsa, a segunda parte nunca é avaliada e 'x' não sofre incremento.",
  },
  {
    id: 247,
    category: "java",
    code: `class Base {\n  private void print() { System.out.print("Base"); }\n}\nclass Derived extends Base {\n  public void print() { System.out.print("Derived"); }\n}\nBase obj = new Derived();\nobj.print();`,
    question: "O que acontece?",
    options: [
      "Imprime 'Derived'",
      "Imprime 'Base'",
      "Erro de compilação",
      "RuntimeError",
    ],
    correctIndex: 2,
    explanation:
      "Métodos privados na classe Base não são visíveis para herança ou polimorfismo. O compilador tenta validar a chamada 'obj.print()' pelo tipo da classe Base, disparando erro de compilação por acesso privado.",
  },
  {
    id: 248,
    category: "java",
    code: `System.out.print("A" + 'B' + 5);`,
    question: "Qual é o output?",
    options: ["AB5", "A675", "137", "Compilação falha"],
    correctIndex: 0,
    explanation:
      "A concatenação começa da esquerda para a direita. 'String + char' resulta em String ('AB'). Em seguida, 'String + int' concatena como String ('AB5').",
  },
  {
    id: 249,
    category: "java",
    code: `System.out.print('A' + 'B');`,
    question: "Qual é o output?",
    options: ["AB", "131", "6566", "Erro de compilação"],
    correctIndex: 1,
    explanation:
      "Quando caracteres binários ('char') são somados usando o operador '+', eles sofrem promoção numérica para 'int'. Seus valores ASCII (65 + 66) são somados.",
  },
  {
    id: 250,
    category: "java",
    code: `float f = 3.14;\nSystem.out.print(f);`,
    question: "O que acontece ao compilar o código?",
    options: [
      "Imprime 3.14",
      "Erro de compilação por conversão de tipos",
      "Imprime 3",
      "RuntimeError",
    ],
    correctIndex: 1,
    explanation:
      "Literais numéricos com ponto decimal são tratados nativamente como 'double' em Java. Atribuir um double a um float exige um sufixo 'f' (3.14f) ou cast explícito.",
  },
  {
    id: 251,
    category: "java",
    code: `int[] arr = new int[5];\nSystem.out.print(arr[4]);`,
    question: "Qual é o output?",
    options: ["0", "null", "undefined", "ArrayIndexOutOfBoundsException"],
    correctIndex: 0,
    explanation:
      "Arrays em Java inicializam seus elementos com valores padrão de fábrica. Para inteiros primitivos ('int'), o valor inicial padrão é 0.",
  },
  {
    id: 252,
    category: "java",
    code: `String s = null;\nswitch (s) {\n  case "null" -> System.out.print("1");\n  default -> System.out.print("2");\n}`,
    question: "O que acontece ao rodar o bloco?",
    options: [
      "Imprime '1'",
      "Imprime '2'",
      "NullPointerException",
      "Erro de compilação",
    ],
    correctIndex: 2,
    explanation:
      "A estrutura de controle 'switch' avalia a expressão interna chamando o método de desreferenciamento. Avaliar uma String nula lança NullPointerException em tempo de execução.",
  },
  {
    id: 253,
    category: "java",
    code: `Thread t = new Thread(() -> System.out.print("Run"));\nt.run();`,
    question: "O que acontece ao chamar o método run() diretamente?",
    options: [
      "Inicia uma nova thread paralela",
      "Executa sincronamente na thread atual",
      "Gera uma IllegalThreadStateException",
      "Erro de compilação",
    ],
    correctIndex: 1,
    explanation:
      "Para iniciar uma nova thread de processamento paralela em segundo plano, deve-se chamar o método 'start()'. Invocar 'run()' funciona como uma chamada síncrona ordinária de método comum.",
  },
  {
    id: 254,
    category: "java",
    code: `final List<String> list = new ArrayList<>();\nlist.add("Java");\nSystem.out.print(list.size());`,
    question: "Qual é o comportamento esperado?",
    options: [
      "Imprime 1",
      "Erro de compilação por modificar variável final",
      "UnsupportedOperationException",
      "Imprime 0",
    ],
    correctIndex: 0,
    explanation:
      "A palavra-chave 'final' impede a reatribuição da variável para outra referência de objeto. Ela não impede a modificação do estado interno ou do conteúdo mutável do próprio objeto referenciado.",
  },
  {
    id: 255,
    category: "java",
    code: `int x = 010;\nSystem.out.print(x);`,
    question: "Qual é o output?",
    options: ["10", "8", "0", "Erro de compilação"],
    correctIndex: 1,
    explanation:
      "Em Java, literais inteiros iniciados com o dígito zero '0' são interpretados nativamente como números no sistema numérico Octal (base 8). Logo, '010' em octal equivale a 8 em decimal.",
  },
  {
    id: 256,
    category: "java",
    code: `Map<String, String> map = new HashMap<>();\nmap.put(null, "A");\nmap.put(null, "B");\nSystem.out.print(map.get(null));`,
    question: "Qual é o output?",
    options: ["A", "B", "NullPointerException", "null"],
    correctIndex: 1,
    explanation:
      "Diferente de estruturas como Hashtable ou TreeMap, 'HashMap' aceita chaves nulas ('null'). Inserir uma nova entrada sob a mesma chave sobrescreve o valor armazenado anteriormente.",
  },
  {
    id: 257,
    category: "java",
    code: `class A {}\nclass B extends A {}\nA[] array = new B[3];\narray[0] = new A();`,
    question: "O que acontece na última linha em tempo de execução?",
    options: [
      "Funciona normalmente",
      "ArrayStoreException",
      "ClassCastException",
      "Erro de compilação",
    ],
    correctIndex: 1,
    explanation:
      "Embora o tipo da referência em tempo de compilação permita ('A'), o array real alocado em memória é do tipo 'B[]'. Inserir uma instância da classe pai em um array de subclasse viola a tipagem de segurança e lança ArrayStoreException.",
  },
  {
    id: 258,
    category: "java",
    code: `System.out.print(1 / 0.0);`,
    question: "Qual é o output?",
    options: ["ArithmeticException", "Infinity", "NaN", "Erro de compilação"],
    correctIndex: 1,
    explanation:
      "A divisão inteira por zero lança ArithmeticException. No entanto, operações matemáticas envolvendo números reais em ponto flutuante divididos por zero retornam infinito positivo ou negativo.",
  },
  {
    id: 259,
    category: "java",
    code: `int a = 10, b = 20;\nSystem.out.print(a > b ? 10.0 : 20);`,
    question: "Qual é o tipo e valor impresso?",
    options: [
      "20 (int)",
      "20.0 (double)",
      "10.0 (double)",
      "Erro de compilação",
    ],
    correctIndex: 1,
    explanation:
      "O operador ternário unifica o tipo dos operandos de retorno para evitar incompatibilidades. Como um operando é 'double' (10.0) e o outro é 'int' (20), o int sofre promoção para double.",
  },
  {
    id: 260,
    category: "java",
    code: `String s = "Hello";\ns.replace('l', 'w');\nSystem.out.print(s);`,
    question: "Qual é o output?",
    options: ["Hewwo", "Hello", "Hewlo", "Erro de compilação"],
    correctIndex: 1,
    explanation:
      "Strings são imutáveis. O método 'replace' produz uma nova string tratada e modificada, mas não substitui ou altera o conteúdo da referência original 's'.",
  },

  // ========== PYTHON (30) ==========
  {
    id: 261,
    category: "python",
    code: `def func(x, l=[]):\n    l.append(x)\n    return l\nprint(func(1))\nprint(func(2))`,
    question: "Qual é o output final?",
    options: ["[1] [2]", "[1] [1, 2]", "[1, 2] [1, 2]", "[1] []"],
    correctIndex: 1,
    explanation:
      "Argumentos opcionais mutáveis (como listas) são avaliados apenas uma vez, na definição da função. Chamadas subsequentes compartilham e modificam a mesma lista em memória.",
  },
  {
    id: 262,
    category: "python",
    code: `a = [1, 2, 3]\nb = a\na.append(4)\nprint(b)`,
    question: "Qual é o output?",
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "AttributeError", "[4]"],
    correctIndex: 1,
    explanation:
      "A atribuição 'b = a' não faz uma cópia da lista, apenas copia a referência ao objeto. Modificações em 'a' refletem diretamente em 'b'.",
  },
  {
    id: 263,
    category: "python",
    code: `a = (1, 2, [3, 4])\na[2].append(5)\nprint(a)`,
    question: "O que acontece?",
    options: [
      "TypeError (tupla imutável)",
      "(1, 2, [3, 4, 5])",
      "(1, 2, [3, 4], 5)",
      "ValueError",
    ],
    correctIndex: 1,
    explanation:
      "Tuplas são imutáveis quanto às suas referências de dados internas, mas os objetos mutáveis armazenados dentro de uma tupla (como uma lista) podem ser alterados livremente.",
  },
  {
    id: 264,
    category: "python",
    code: `x = 10\ndef foo():\n    x += 1\nfoo()`,
    question: "O que acontece ao chamar a função foo()?",
    options: ["x vira 11", "UnboundLocalError", "TypeError", "SyntaxError"],
    correctIndex: 1,
    explanation:
      "Como há uma atribuição ('x += 1') no escopo da função, o Python trata 'x' como variável local. Tentar ler seu valor antes da inicialização dispara UnboundLocalError.",
  },
  {
    id: 265,
    category: "python",
    code: `print(type(1 / 1))`,
    question: "Qual é a classe retornada?",
    options: [
      "<class 'int'>",
      "<class 'float'>",
      "<class 'double'>",
      "SyntaxError",
    ],
    correctIndex: 1,
    explanation:
      "Em Python 3, o operador de divisão única '/' sempre realiza uma divisão decimal (float), mesmo quando os operandos dividem-se de forma exata.",
  },
  {
    id: 266,
    category: "python",
    code: `a = [1, 2, 3]\nb = a[:]\nprint(a is b, a == b)`,
    question: "Qual é o output?",
    options: ["True True", "False False", "False True", "True False"],
    correctIndex: 2,
    explanation:
      "O operador de fatiamento '[:]' cria uma cópia rasa (shallow copy) da lista original. Logo, referências mudam ('is' falso), mas os elementos internos são iguais ('==' verdadeiro).",
  },
  {
    id: 267,
    category: "python",
    code: `l = [lambda x: x * i for i in range(3)]\nprint([m(2) for m in l])`,
    question: "Qual é o output?",
    options: ["[0, 2, 4]", "[4, 4, 4]", "[0, 0, 0]", "[2, 2, 2]"],
    correctIndex: 1,
    explanation:
      "Closures em Python usam 'late binding' (ligação tardia). A variável 'i' é procurada em tempo de execução. Quando as funções rodam, o loop já terminou e 'i' vale 2. Então 2 * 2 = 4 para todas.",
  },
  {
    id: 268,
    category: "python",
    code: `d = {(1, 2): "A", [3, 4]: "B"}`,
    question: "O que acontece ao tentar instanciar o dicionário?",
    options: [
      "Cria com sucesso",
      "TypeError: unhashable type: 'list'",
      "KeyError",
      "ValueError",
    ],
    correctIndex: 1,
    explanation:
      "As chaves de um dicionário em Python precisam ser hasháveis (imutáveis). Uma lista ('list') é mutável e não pode ser usada como chave, ao contrário de uma tupla.",
  },
  {
    id: 269,
    category: "python",
    code: `print(True == 1, True is 1)`,
    question: "Qual é o output?",
    options: ["True True", "False False", "True False", "False True"],
    correctIndex: 2,
    explanation:
      "A classe 'bool' herda diretamente de 'int' em Python, logo 'True == 1' avalia como verdadeiro. Contudo, são objetos distintos em memória, o que torna o teste de identidade 'is' falso.",
  },
  {
    id: 270,
    category: "python",
    code: `a = 256\nb = 256\nc = 257\nd = 257\nprint(a is b, c is d)`,
    question: "Qual é o output?",
    options: ["True True", "True False", "False False", "False True"],
    correctIndex: 1,
    explanation:
      "O Python otimiza o uso de memória pré-alocando pequenos inteiros no intervalo entre -5 e 256. Fora dessa faixa, novos objetos com IDs diferentes são gerados a cada atribuição.",
  },
  {
    id: 271,
    category: "python",
    code: `def test():\n    try:\n        return 1\n    finally:\n        return 2\nprint(test())`,
    question: "Qual é o valor retornado?",
    options: ["1", "2", "None", "SyntaxError"],
    correctIndex: 1,
    explanation:
      "Assim como em outras linguagens, a cláusula 'finally' garante execução prioritária imediata. Caso inclua uma instrução de retorno ('return'), ela substitui a do bloco 'try'.",
  },
  {
    id: 272,
    category: "python",
    code: `x = [1, 2, 3]\nx.extend([4, 5])\nprint(len(x))`,
    question: "Qual é o tamanho final de x?",
    options: ["4", "5", "3", "AttributeError"],
    correctIndex: 1,
    explanation:
      "O método 'extend' desestrutura o iterável passado por argumento e anexa cada um de seus elementos individualmente à lista alvo, aumentando o tamanho para 5.",
  },
  {
    id: 273,
    category: "python",
    code: `x = [1, 2, 3]\nx.append([4, 5])\nprint(len(x))`,
    question: "Qual é o tamanho final de x?",
    options: ["5", "4", "3", "2"],
    correctIndex: 1,
    explanation:
      "O método 'append' anexa o objeto passado de forma íntegra e literal como um único e novo elemento no final da lista, totalizando 4 itens.",
  },
  {
    id: 274,
    category: "python",
    code: `print("ab".join(["1", "2"]))`,
    question: "Qual é o output?",
    options: ["1ab2", "ab1ab2", "12ab", "ab12"],
    correctIndex: 0,
    explanation:
      "O método 'join' é invocado a partir do caractere delimitador. Ele insere a string base de conexão ENTRE os elementos contidos no iterável alvo.",
  },
  {
    id: 275,
    category: "python",
    code: `print(round(2.5), round(3.5))`,
    question: "Qual é o output?",
    options: ["3 4", "2 4", "2 3", "3 3"],
    correctIndex: 1,
    explanation:
      "O Python adota o arredondamento bancário (IEEE 754), onde valores terminados exatamente em .5 são arredondados para o número PAR inteiro mais próximo.",
  },
  {
    id: 276,
    category: "python",
    code: `s = {1, 2, 3}\nprint(s[0])`,
    question: "O que acontece?",
    options: [
      "Imprime 1",
      "TypeError: 'set' object is not subscriptable",
      "KeyError",
      "IndexError",
    ],
    correctIndex: 1,
    explanation:
      "Conjuntos ('set') em Python representam coleções não ordenadas de elementos únicos. Eles não dão suporte a indexação posicional ou fatiamento de dados.",
  },
  {
    id: 277,
    category: "python",
    code: `print(bool([]), bool([0]))`,
    question: "Qual é o output?",
    options: ["False False", "True True", "False True", "True False"],
    correctIndex: 2,
    explanation:
      "Coleções vazias (como listas, strings ou dicionários sem elementos) possuem valor booleano 'False'. Uma lista contendo um elemento (mesmo que seja zero) avalia como 'True'.",
  },
  {
    id: 278,
    category: "python",
    code: `a = 1\nexec("a = 2")\nprint(a)`,
    question: "Qual é o output?",
    options: ["1", "2", "SyntaxError", "None"],
    correctIndex: 1,
    explanation:
      "A função nativa 'exec' interpreta e executa dinamicamente blocos de código Python contidos em strings no escopo local corrente.",
  },
  {
    id: 279,
    category: "python",
    code: `x = 1 or 2\ny = 1 and 2\nprint(x, y)`,
    question: "Qual é o output?",
    options: ["True True", "1 2", "1 1", "2 1"],
    correctIndex: 1,
    explanation:
      "Operadores lógicos em Python avaliam em curto-circuito e retornam o próprio valor do objeto avaliado, não apenas um booleano. '1 or 2' para no 1; '1 and 2' precisa avaliar e retornar o 2.",
  },
  {
    id: 280,
    category: "python",
    code: `l = [1, 2, 3]\nprint(l[5:])`,
    question: "Qual é o output?",
    options: ["IndexError", "[]", "None", "Null"],
    correctIndex: 1,
    explanation:
      "Tentar acessar um índice isolado inexistente causa IndexError. No entanto, o fatiamento de strings e listas (slicing) falha de forma graciosa retornando uma lista vazia.",
  },
  {
    id: 281,
    category: "python",
    code: `class A:\n    val = 1\nclass B(A):\n    pass\nB.val = 2\nprint(A.val)`,
    question: "Qual é o output?",
    options: ["1", "2", "AttributeError", "None"],
    correctIndex: 0,
    explanation:
      "Modificar um atributo de classe diretamente na subclasse 'B' cria um novo atributo exclusivo no escopo dela, sem afetar o atributo correspondente da classe pai 'A'.",
  },
  {
    id: 282,
    category: "python",
    code: `print(any([]), all([]))`,
    question: "Qual é o output?",
    options: ["False True", "False False", "True True", "True False"],
    correctIndex: 0,
    explanation:
      "A função 'any()' em um iterável vazio retorna 'False' por não encontrar itens verdadeiros. Já 'all()' retorna 'True' de forma vazia (vacuous truth) por não haver itens falsos.",
  },
  {
    id: 283,
    category: "python",
    code: `x = [1, 2, 3]\ny = x\nx = x + [4]\nprint(y)`,
    question: "Qual é o conteúdo de y?",
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "TypeError", "[]"],
    correctIndex: 0,
    explanation:
      "O operador '+' cria e aloca uma NOVA lista resultante em memória, associando-a à variável 'x'. A referência mantida em 'y' permanece intocada apontando para a lista antiga.",
  },
  {
    id: 284,
    category: "python",
    code: `x = [1, 2, 3]\ny = x\nx += [4]\nprint(y)`,
    question: "Qual é o conteúdo de y?",
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "TypeError", "[]"],
    correctIndex: 1,
    explanation:
      "Diferente do operador '+', o operador '+=' em listas estende a lista existente 'in-place' (equivalente a rodar .extend()). Assim, as mudanças refletem em 'y'.",
  },
  {
    id: 285,
    category: "python",
    code: `print(type((1)))`,
    question: "Qual é o tipo retornado?",
    options: [
      "<class 'tuple'>",
      "<class 'int'>",
      "<class 'tuple_int'>",
      "SyntaxError",
    ],
    correctIndex: 1,
    explanation:
      "Parênteses isolados servem apenas para agrupamento de expressões matemáticas. Para criar uma tupla de elemento único, é obrigatório inserir uma vírgula final: '(1,)'.",
  },
  {
    id: 286,
    category: "python",
    code: `a = "Python"\nprint(a[::-1])`,
    question: "Qual é o output?",
    options: ["Python", "P", "nohtyP", "IndexError"],
    correctIndex: 2,
    explanation:
      "Passar o passo (step) negativo igual a '-1' instrui o mecanismo de fatiamento a ler a sequência de caracteres ao contrário, invertendo a string.",
  },
  {
    id: 287,
    category: "python",
    code: `def f(*args, **kwargs):\n    print(len(args), len(kwargs))\nf(1, 2, a=3)`,
    question: "Qual é o output?",
    options: ["3 0", "2 1", "1 2", "AttributeError"],
    correctIndex: 1,
    explanation:
      "'*args' captura argumentos posicionais avulsos em uma tupla (1, 2). '**kwargs' mapeia argumentos nomeados estruturando um dicionário {'a': 3}.",
  },
  {
    id: 288,
    category: "python",
    code: `a = {1, 2}\nb = {2, 3}\nprint(a & b)`,
    question: "Qual é o output?",
    options: ["{1, 2, 3}", "{2}", "set()", "TypeError"],
    correctIndex: 1,
    explanation:
      "O operador '&' calcula a interseção matemática entre dois conjuntos ('set'), gerando um novo conjunto composto apenas por elementos presentes em ambos simultaneamente.",
  },
  {
    id: 289,
    category: "python",
    code: `x = 5\nprint(10 > x > 2)`,
    question: "Qual é o output?",
    options: ["True", "False", "TypeError", "SyntaxError"],
    correctIndex: 0,
    explanation:
      "O Python aceita encadeamento comparativo direto de operadores. A expressão equivale de forma implícita a avaliar '(10 > x) and (x > 2)'.",
  },
  {
    id: 290,
    category: "python",
    code: `print(list("abc"))`,
    question: "Qual é o output?",
    options: ["['abc']", "['a', 'b', 'c']", "AttributeError", "[]"],
    correctIndex: 1,
    explanation:
      "O construtor 'list()' recebe um iterável e desmembra cada um de seus elementos lógicos. Como strings são iteráveis caractere por caractere, gera uma lista de letras isoladas.",
  },

  // ========== AWS (30) ==========
  {
    id: 301,
    category: "aws",
    code: `// AWS Lambda Handler\nexports.handler = async (event) => {\n  const body = JSON.parse(event.body);\n  return {\n    statusCode: 200,\n    body: JSON.stringify({ message: 'OK' })\n  };\n};`,
    question: "Qual é o modelo de cobrança do AWS Lambda?",
    options: [
      "Por hora de servidor ativo",
      "Por número de requests + duração de execução",
      "Taxa fixa mensal",
      "Por quantidade de código deployed",
    ],
    correctIndex: 1,
    explanation:
      "AWS Lambda cobra por número de invocações e pela duração de execução (em ms) × memória alocada. Inclui 1M requests gratuitos/mês no free tier.",
  },
  {
    id: 302,
    category: "aws",
    code: `// API Gateway + Lambda integration\n# serverless.yml\nfunctions:\n  getUsers:\n    handler: handler.getUsers\n    events:\n      - http:\n          path: /users\n          method: get\n          cors: true`,
    question: "Qual o papel do API Gateway na AWS?",
    options: [
      "Base de dados",
      "Proxy que expõe endpoints HTTP e roteia para Lambda/serviços",
      "CDN",
      "Container runtime",
    ],
    correctIndex: 1,
    explanation:
      "API Gateway é um serviço managed que cria, publica e gere APIs REST/WebSocket. Roteia requests para Lambda, EC2, ou outros serviços, com features como throttling, auth, e caching.",
  },
  {
    id: 303,
    category: "aws",
    code: `// AWS Step Functions - State Machine\n{\n  "StartAt": "ValidateOrder",\n  "States": {\n    "ValidateOrder": {\n      "Type": "Task",\n      "Resource": "arn:aws:lambda:...:validateOrder",\n      "Next": "ProcessPayment"\n    },\n    "ProcessPayment": {\n      "Type": "Task",\n      "Resource": "arn:aws:lambda:...:processPayment",\n      "Next": "SendConfirmation",\n      "Catch": [{\n        "ErrorEquals": ["PaymentError"],\n        "Next": "HandlePaymentError"\n      }]\n    }\n  }\n}`,
    question: "O que são AWS Step Functions?",
    options: [
      "Funções Lambda encadeadas",
      "Um serviço de orquestração de workflows com state machines visuais",
      "Um task scheduler",
      "Um message queue",
    ],
    correctIndex: 1,
    explanation:
      "Step Functions orquestram workflows complexos como state machines. Permitem sequenciar, paralelizar, e tratar erros entre múltiplos serviços AWS com retry automático e visibilidade do estado.",
  },
  {
    id: 304,
    category: "aws",
    code: `// Step Functions - Parallel execution\n{\n  "Type": "Parallel",\n  "Branches": [\n    {\n      "StartAt": "SendEmail",\n      "States": { "SendEmail": { "Type": "Task", "Resource": "...", "End": true } }\n    },\n    {\n      "StartAt": "SendSMS",\n      "States": { "SendSMS": { "Type": "Task", "Resource": "...", "End": true } }\n    }\n  ],\n  "Next": "Done"\n}`,
    question: "O que faz o estado 'Parallel' em Step Functions?",
    options: [
      "Executa branches uma a uma",
      "Executa múltiplas branches simultaneamente e espera todas",
      "Escolhe uma branch aleatoriamente",
      "Repete a mesma branch N vezes",
    ],
    correctIndex: 1,
    explanation:
      "O estado Parallel executa múltiplas branches em paralelo. Só avança para o próximo estado quando TODAS as branches completam. Se uma falhar, todas são canceladas (a menos que haja Catch).",
  },
  {
    id: 305,
    category: "aws",
    code: `// Step Functions - Choice State\n{\n  "Type": "Choice",\n  "Choices": [\n    {\n      "Variable": "$.orderTotal",\n      "NumericGreaterThan": 100,\n      "Next": "ApplyDiscount"\n    },\n    {\n      "Variable": "$.isPrime",\n      "BooleanEquals": true,\n      "Next": "PrimeShipping"\n    }\n  ],\n  "Default": "StandardProcessing"\n}`,
    question: "O que faz o estado 'Choice' em Step Functions?",
    options: [
      "Pede input ao utilizador",
      "Branching condicional baseado nos dados de input",
      "Escolha aleatória",
      "Loop condicional",
    ],
    correctIndex: 1,
    explanation:
      "Choice é o equivalente a if/else em Step Functions. Avalia condições sobre os dados do workflow e roteia para diferentes estados. O campo Default é o fallback se nenhuma condição for verdadeira.",
  },
  {
    id: 306,
    category: "aws",
    code: `// Lambda Layers\naws lambda publish-layer-version \\\n  --layer-name shared-utils \\\n  --zip-file fileb://layer.zip \\\n  --compatible-runtimes nodejs18.x\n\n# Usar num Lambda:\naws lambda update-function-configuration \\\n  --function-name myFunc \\\n  --layers arn:aws:lambda:...:shared-utils:1`,
    question: "Para que servem Lambda Layers?",
    options: [
      "Segurança adicional",
      "Partilhar código/dependências entre múltiplas funções Lambda",
      "Aumentar o timeout",
      "Reduzir o cold start",
    ],
    correctIndex: 1,
    explanation:
      "Lambda Layers permitem empacotar bibliotecas, runtimes customizados, ou código partilhado que pode ser reutilizado por múltiplas funções Lambda sem duplicar em cada deployment package.",
  },
  {
    id: 307,
    category: "aws",
    code: `// S3 Event → Lambda\n{\n  "Records": [{\n    "eventSource": "aws:s3",\n    "eventName": "ObjectCreated:Put",\n    "s3": {\n      "bucket": { "name": "my-uploads" },\n      "object": { "key": "photos/image.jpg", "size": 1024 }\n    }\n  }]\n}`,
    question: "O que demonstra este event?",
    options: [
      "Um request HTTP",
      "Lambda triggered por upload de ficheiro no S3",
      "Uma mensagem SQS",
      "Um alarm do CloudWatch",
    ],
    correctIndex: 1,
    explanation:
      "S3 pode trigger Lambda automaticamente quando objetos são criados, modificados ou eliminados. O event contém metadata sobre o bucket e o objeto. Útil para processamento de imagens, ETL, etc.",
  },
  {
    id: 308,
    category: "aws",
    code: `// SQS → Lambda\naws sqs create-queue --queue-name orders\n\n// Lambda event source mapping\naws lambda create-event-source-mapping \\\n  --function-name processOrder \\\n  --event-source-arn arn:aws:sqs:...:orders \\\n  --batch-size 10`,
    question: "Qual a vantagem de usar SQS entre serviços?",
    options: [
      "É mais rápido que chamadas diretas",
      "Desacopla serviços e fornece retry, dead-letter queue e buffering",
      "Reduz custos",
      "Melhora a segurança",
    ],
    correctIndex: 1,
    explanation:
      "SQS (Simple Queue Service) desacopla produtores de consumidores. Fornece: retry automático, dead-letter queues para mensagens falhadas, buffering durante picos, e garante que mensagens não são perdidas.",
  },
  {
    id: 309,
    category: "aws",
    code: `// DynamoDB\nconst params = {\n  TableName: 'Users',\n  Key: { userId: { S: '123' } },\n  ProjectionExpression: 'username, email'\n};\nconst result = await dynamodb.getItem(params).promise();`,
    question: "O que é o DynamoDB?",
    options: [
      "Base de dados relacional",
      "Base de dados NoSQL key-value e document, fully managed",
      "Cache in-memory",
      "Data warehouse",
    ],
    correctIndex: 1,
    explanation:
      "DynamoDB é uma DB NoSQL serverless com latência de single-digit milliseconds. Escala automaticamente e suporta modelos key-value e document. Ideal para workloads de alta performance e serverless.",
  },
  {
    id: 310,
    category: "aws",
    code: `// CloudFormation template\nAWSTemplateFormatVersion: '2010-09-09'\nResources:\n  MyBucket:\n    Type: AWS::S3::Bucket\n    Properties:\n      BucketName: my-app-uploads\n      VersioningConfiguration:\n        Status: Enabled`,
    question: "O que é o AWS CloudFormation?",
    options: [
      "Um CDN",
      "Infrastructure as Code nativo da AWS",
      "Um serviço de monitoring",
      "Um container registry",
    ],
    correctIndex: 1,
    explanation:
      "CloudFormation é o serviço IaC nativo da AWS. Define infraestrutura em templates YAML/JSON que podem ser versionados, replicados e automatizados. Alternativa AWS-native ao Terraform.",
  },
  {
    id: 311,
    category: "aws",
    code: `// Lambda Provisioned Concurrency\naws lambda put-provisioned-concurrency-config \\\n  --function-name myFunc \\\n  --qualifier prod \\\n  --provisioned-concurrent-executions 10`,
    question: "O que resolve Provisioned Concurrency?",
    options: [
      "Limita o número de execuções",
      "Elimina cold starts mantendo instâncias pre-aquecidas",
      "Aumenta a memória",
      "Reduz custos",
    ],
    correctIndex: 1,
    explanation:
      "Provisioned Concurrency mantém N instâncias da função Lambda sempre inicializadas e prontas. Elimina cold starts mas tem custo fixo. Ideal para funções latency-sensitive.",
  },
  {
    id: 312,
    category: "aws",
    code: `// API Gateway - Authorizer\n{\n  "type": "TOKEN",\n  "authorizerUri": "arn:aws:lambda:...:jwtAuthorizer",\n  "identitySource": "method.request.header.Authorization"\n}`,
    question: "O que é um API Gateway Authorizer?",
    options: [
      "Um firewall",
      "Uma função que valida tokens/credenciais antes do request chegar ao backend",
      "Um rate limiter",
      "Um logger",
    ],
    correctIndex: 1,
    explanation:
      "Authorizers são funções Lambda que validam tokens JWT, API keys ou custom auth antes do request ser passado ao backend. Suporta caching para evitar chamar o authorizer em cada request.",
  },
  {
    id: 313,
    category: "aws",
    code: `// EventBridge Rule\n{\n  "source": ["my-app"],\n  "detail-type": ["OrderPlaced"],\n  "detail": {\n    "total": [{ "numeric": [">", 100] }]\n  }\n}`,
    question: "O que é o Amazon EventBridge?",
    options: [
      "Um load balancer",
      "Um event bus serverless para routing de eventos entre serviços",
      "Um message queue",
      "Um serviço de notificações push",
    ],
    correctIndex: 1,
    explanation:
      "EventBridge é um event bus serverless que conecta aplicações usando eventos. Suporta rules para filtrar e rotear eventos para targets (Lambda, SQS, Step Functions, etc.). Mais flexível que SNS para event-driven architectures.",
  },
  {
    id: 314,
    category: "aws",
    code: `// Cognito User Pool\nconst auth = new CognitoUserPool({\n  UserPoolId: 'us-east-1_xxxxx',\n  ClientId: 'xxxxxxxx'\n});\n\n// Sign up\nauth.signUp('user@email.com', 'Password1!', attributes, null, callback);`,
    question: "O que é o Amazon Cognito?",
    options: [
      "Um serviço de AI",
      "Um serviço managed de autenticação e autorização",
      "Um serviço de DNS",
      "Um cache distribuído",
    ],
    correctIndex: 1,
    explanation:
      "Cognito fornece sign-up, sign-in, e access control. User Pools gerem utilizadores e auth. Identity Pools fornecem credenciais AWS temporárias. Suporta OAuth, SAML, e social login (Google, Facebook, Apple).",
  },
  {
    id: 315,
    category: "aws",
    code: `// AWS CDK (Cloud Development Kit)\nconst api = new apigateway.RestApi(this, 'MyApi');\nconst fn = new lambda.Function(this, 'Handler', {\n  runtime: lambda.Runtime.NODEJS_18_X,\n  handler: 'index.handler',\n  code: lambda.Code.fromAsset('lambda'),\n});\napi.root.addMethod('GET', new apigateway.LambdaIntegration(fn));`,
    question: "O que é o AWS CDK?",
    options: [
      "Um CLI para AWS",
      "IaC usando linguagens de programação reais (TS, Python, etc.)",
      "Um SDK para chamar APIs AWS",
      "Um framework de testing",
    ],
    correctIndex: 1,
    explanation:
      "O CDK permite definir infraestrutura AWS usando TypeScript, Python, Java, etc. em vez de YAML/JSON. Gera CloudFormation templates. Oferece abstrações de alto nível (Constructs) e type safety.",
  },
  {
    id: 316,
    category: "aws",
    code: `aws s3 cp ./build s3://my-bucket/ --recursive\naws cloudfront create-invalidation \\\n  --distribution-id E1234 \\\n  --paths "/*"`,
    question: "Porque é necessário invalidar o CloudFront após deploy?",
    options: [
      "Para iniciar o servidor",
      "Para limpar o cache CDN e servir ficheiros novos",
      "Para configurar DNS",
      "Para ativar HTTPS",
    ],
    correctIndex: 1,
    explanation:
      "CloudFront faz cache na edge. Invalidação força a CDN a buscar ficheiros atualizados do S3.",
  },
  {
    id: 317,
    category: "aws",
    code: `// Lambda@Edge\nexports.handler = async (event) => {\n  const request = event.Records[0].cf.request;\n  const headers = request.headers;\n  \n  // A/B testing\n  if (Math.random() < 0.5) {\n    request.uri = '/variant-a.html';\n  } else {\n    request.uri = '/variant-b.html';\n  }\n  return request;\n};`,
    question: "O que é Lambda@Edge?",
    options: [
      "Lambda com mais memória",
      "Lambda que executa nas edge locations do CloudFront",
      "Lambda para IoT",
      "Lambda com GPU",
    ],
    correctIndex: 1,
    explanation:
      "Lambda@Edge executa código nas edge locations do CloudFront, perto do utilizador. Pode modificar requests/responses no CDN. Útil para A/B testing, auth, redirects, e personalização por geo.",
  },
  {
    id: 318,
    category: "aws",
    code: `// Step Functions - Map State\n{\n  "Type": "Map",\n  "ItemsPath": "$.orders",\n  "MaxConcurrency": 5,\n  "Iterator": {\n    "StartAt": "ProcessOrder",\n    "States": {\n      "ProcessOrder": {\n        "Type": "Task",\n        "Resource": "arn:aws:lambda:...:processOrder",\n        "End": true\n      }\n    }\n  },\n  "Next": "Done"\n}`,
    question: "O que faz o estado 'Map' em Step Functions?",
    options: [
      "Mapeia dados para um formato diferente",
      "Executa o mesmo workflow para cada item de um array em paralelo",
      "Cria um mapa de serviços",
      "Roteia entre regiões",
    ],
    correctIndex: 1,
    explanation:
      "O estado Map itera sobre um array e executa o sub-workflow (Iterator) para cada item. `MaxConcurrency` controla quantas execuções paralelas. Ideal para batch processing.",
  },
  {
    id: 319,
    category: "aws",
    code: `// IAM Policy\n{\n  "Effect": "Allow",\n  "Action": [\n    "s3:GetObject",\n    "s3:PutObject"\n  ],\n  "Resource": "arn:aws:s3:::my-bucket/*",\n  "Condition": {\n    "IpAddress": { "aws:SourceIp": "10.0.0.0/8" }\n  }\n}`,
    question: "O que é o princípio de Least Privilege no IAM?",
    options: [
      "Dar acesso admin a todos",
      "Conceder apenas as permissões mínimas necessárias",
      "Usar apenas root account",
      "Não usar policies",
    ],
    correctIndex: 1,
    explanation:
      "Least Privilege significa dar apenas as permissões estritamente necessárias. Esta policy permite apenas GetObject e PutObject num bucket específico, e apenas de IPs internos. Nunca usar `*` em Action e Resource em produção.",
  },
  {
    id: 320,
    category: "aws",
    code: `// ECS Task Definition\n{\n  "family": "web-app",\n  "containerDefinitions": [{\n    "name": "app",\n    "image": "123456.dkr.ecr.us-east-1.amazonaws.com/myapp:latest",\n    "portMappings": [{ "containerPort": 3000 }],\n    "memory": 512,\n    "cpu": 256\n  }]\n}`,
    question: "O que é o AWS ECS?",
    options: [
      "Um serviço de email",
      "Um serviço managed para correr containers Docker",
      "Um serviço de storage",
      "Um serviço de DNS",
    ],
    correctIndex: 1,
    explanation:
      "ECS (Elastic Container Service) é o serviço managed da AWS para correr containers. Suporta launch types EC2 (seus servidores) e Fargate (serverless). Integra com ALB, ECR, CloudWatch, etc.",
  },
  {
    id: 321,
    category: "aws",
    code: `// SNS + SQS Fan-out pattern\n\n// 1 SNS Topic → multiple SQS Queues\nTopic: order-events\n  → SQS: email-queue (→ Lambda: sendEmail)\n  → SQS: analytics-queue (→ Lambda: trackAnalytics)\n  → SQS: inventory-queue (→ Lambda: updateInventory)`,
    question: "O que é o pattern SNS + SQS Fan-out?",
    options: [
      "Load balancing",
      "Uma mensagem SNS é distribuída para múltiplas SQS queues em paralelo",
      "Compressão de dados",
      "Autenticação multi-factor",
    ],
    correctIndex: 1,
    explanation:
      "Fan-out usa SNS para publicar um evento que é entregue a múltiplas SQS queues simultaneamente. Cada queue tem o seu consumidor independente. Desacopla e permite processamento paralelo de eventos.",
  },
  {
    id: 322,
    category: "aws",
    code: `// VPC Basics\nVPC: 10.0.0.0/16\n  Public Subnet: 10.0.1.0/24 (has Internet Gateway)\n  Private Subnet: 10.0.2.0/24 (has NAT Gateway)\n  \n  Lambda → Private Subnet → NAT → Internet`,
    question: "Porque colocar Lambda numa VPC com subnet privada?",
    options: [
      "Para ser mais rápida",
      "Para aceder a recursos privados (RDS, ElastiCache) de forma segura",
      "Para reduzir custos",
      "É obrigatório",
    ],
    correctIndex: 1,
    explanation:
      "Colocar Lambda numa VPC permite aceder a recursos na rede privada (RDS, ElastiCache, etc.) sem os expor à internet. O NAT Gateway permite que a Lambda aceda à internet de saída.",
  },
  {
    id: 323,
    category: "aws",
    code: `// Secrets Manager\nconst secret = await secretsManager.getSecretValue({\n  SecretId: 'prod/myapp/db-credentials'\n}).promise();\nconst credentials = JSON.parse(secret.SecretString);\n\n// Rotation\naws secretsmanager rotate-secret \\\n  --secret-id prod/myapp/db-credentials \\\n  --rotation-lambda-arn arn:aws:lambda:...:rotateSecret`,
    question: "O que oferece o AWS Secrets Manager vs variáveis de ambiente?",
    options: [
      "São iguais",
      "Rotação automática, encriptação, auditoria e acesso controlado via IAM",
      "Apenas encriptação",
      "Apenas logging",
    ],
    correctIndex: 1,
    explanation:
      "Secrets Manager vai além de env vars: rotação automática de secrets, encriptação com KMS, audit trail via CloudTrail, acesso controlado por IAM, e versionamento. Essencial para credenciais de DB e API keys em produção.",
  },
  {
    id: 324,
    category: "aws",
    code: `// X-Ray Tracing\nconst AWSXRay = require('aws-xray-sdk');\nconst AWS = AWSXRay.captureAWS(require('aws-sdk'));\n\nexports.handler = async (event) => {\n  const segment = AWSXRay.getSegment();\n  const subsegment = segment.addNewSubsegment('processData');\n  // ... work ...\n  subsegment.close();\n};`,
    question: "Para que serve o AWS X-Ray?",
    options: [
      "Scanning de segurança",
      "Distributed tracing — rastrear requests entre serviços AWS",
      "Machine learning",
      "Backup de dados",
    ],
    correctIndex: 1,
    explanation:
      "X-Ray fornece distributed tracing para rastrear requests à medida que atravessam serviços AWS (Lambda, API Gateway, DynamoDB, SQS). Ajuda a identificar bottlenecks, erros e latência em arquiteturas serverless.",
  },
  {
    id: 325,
    category: "aws",
    code: `// Step Functions - Wait State\n{\n  "States": {\n    "WaitForApproval": {\n      "Type": "Wait",\n      "TimestampPath": "$.approvalDeadline",\n      "Next": "CheckApproval"\n    },\n    "WaitFixed": {\n      "Type": "Wait",\n      "Seconds": 300,\n      "Next": "Retry"\n    }\n  }\n}`,
    question: "O que faz o estado Wait em Step Functions?",
    options: [
      "Espera por input do utilizador",
      "Pausa a execução por um tempo fixo ou até um timestamp",
      "Espera por uma mensagem SQS",
      "Espera por uma resposta HTTP",
    ],
    correctIndex: 1,
    explanation:
      "O estado Wait pausa a execução do workflow por um tempo definido (Seconds) ou até um timestamp (TimestampPath). Útil para delays, polling patterns, e scheduling. Não consome recursos durante a espera.",
  },
  {
    id: 326,
    category: "aws",
    code: `// Lambda Destinations\naws lambda put-function-event-invoke-config \\\n  --function-name processOrder \\\n  --on-success '{"Destination": "arn:aws:sqs:...:success-queue"}' \\\n  --on-failure '{"Destination": "arn:aws:sqs:...:failure-queue"}'`,
    question: "O que são Lambda Destinations?",
    options: [
      "Endpoints de deploy",
      "Routing automático do resultado (sucesso/falha) para outros serviços",
      "Regiões de deploy",
      "Aliases da função",
    ],
    correctIndex: 1,
    explanation:
      "Lambda Destinations enviam automaticamente o resultado de invocações async para outros serviços (SQS, SNS, Lambda, EventBridge) baseado em sucesso ou falha. Simplifica error handling sem código extra.",
  },
  {
    id: 327,
    category: "aws",
    code: `// AWS Services\n\nEC2 - Virtual servers\nS3 - Object storage\nRDS - Managed databases\nLambda - Serverless functions\nCloudFront - CDN\nRoute 53 - DNS`,
    question: "Qual serviço AWS permite correr código sem gerir servidores?",
    options: ["EC2", "S3", "Lambda", "RDS"],
    correctIndex: 2,
    explanation:
      "AWS Lambda é serverless — executa código em resposta a eventos sem provisionar servidores. Paga-se apenas pelo tempo de execução.",
  },
  {
    id: 328,
    category: "aws",
    code: `// Cold Start em Serverless\n\nRequest 1 (cold): \n  Provisionar container → Carregar runtime → Init → Executar\n  Latência: ~500ms - 3s\n\nRequest 2 (warm):\n  Executar (container reutilizado)\n  Latência: ~5-50ms`,
    question: "O que é um 'cold start' em Lambda?",
    options: [
      "Quando o servidor reinicia",
      "Latência extra na primeira invocação por provisionar o ambiente",
      "Um erro de timeout",
      "Quando a função fica sem memória",
    ],
    correctIndex: 1,
    explanation:
      "Cold start ocorre quando não há container warm disponível. O provider provisiona container, carrega runtime e inicializa código. Mitigação: Provisioned Concurrency, funções leves, minimizar dependências.",
  },
  {
    id: 329,
    category: "aws",
    code: `// Step Functions Express vs Standard\n\nStandard Workflow:\n  - Até 1 ano de duração\n  - Exactly-once execution\n  - $0.025 per 1000 state transitions\n\nExpress Workflow:\n  - Até 5 minutos\n  - At-least-once execution\n  - Baseado em duração e execuções`,
    question: "Quando usar Express vs Standard Step Functions?",
    options: [
      "Express é sempre melhor",
      "Express para high-volume/short-lived, Standard para long-running/exactly-once",
      "Standard é deprecated",
      "São iguais",
    ],
    correctIndex: 1,
    explanation:
      "Express Workflows são para workloads de alto volume e curta duração (IoT, streaming). Standard para processos longos que precisam de exactly-once execution e auditoria (order processing, approvals).",
  },
  {
    id: 330,
    category: "aws",
    code: `// CloudWatch Alarms + Auto Scaling\naws cloudwatch put-metric-alarm \\\n  --alarm-name high-cpu \\\n  --metric-name CPUUtilization \\\n  --namespace AWS/EC2 \\\n  --threshold 80 \\\n  --comparison-operator GreaterThanThreshold \\\n  --evaluation-periods 2 \\\n  --alarm-actions arn:aws:autoscaling:...:scale-up-policy`,
    question: "O que faz este alarm do CloudWatch?",
    options: [
      "Monitoriza o código",
      "Escala automaticamente quando CPU > 80% por 2 períodos",
      "Envia um email",
      "Para a instância",
    ],
    correctIndex: 1,
    explanation:
      "Este alarm monitoriza CPU e, quando ultrapassa 80% por 2 períodos consecutivos, dispara uma ação de Auto Scaling para adicionar mais instâncias. CloudWatch + Auto Scaling permitem infraestrutura elástica.",
  },

  // ========== GITHUB ACTIONS (30) ==========
  {
    id: 401,
    category: "github-actions",
    code: `# .github/workflows/ci.yml\nname: CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npm test`,
    question: "Quando este workflow é executado?",
    options: [
      "Apenas em push para main",
      "Em push para main E pull requests para main",
      "Em qualquer push",
      "Manualmente",
    ],
    correctIndex: 1,
    explanation:
      "O trigger `on` define dois eventos: push para main e pull requests para main. O workflow executa em ambos os casos.",
  },
  {
    id: 402,
    category: "github-actions",
    code: `jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo "Building..."\n  \n  test:\n    needs: build\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo "Testing..."\n  \n  deploy:\n    needs: [build, test]\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo "Deploying..."`,
    question: "O que faz a keyword 'needs'?",
    options: [
      "Instala dependências",
      "Define que o job depende de outro(s) e só executa após conclusão",
      "Requisita aprovação",
      "Define variáveis necessárias",
    ],
    correctIndex: 1,
    explanation:
      "`needs` define dependências entre jobs. `deploy` só executa quando `build` E `test` completam com sucesso. Sem `needs`, jobs executam em paralelo por defeito.",
  },
  {
    id: 403,
    category: "github-actions",
    code: `jobs:\n  test:\n    strategy:\n      matrix:\n        node-version: [16, 18, 20]\n        os: [ubuntu-latest, windows-latest]\n    runs-on: \${{ matrix.os }}\n    steps:\n      - uses: actions/setup-node@v4\n        with:\n          node-version: \${{ matrix.node-version }}`,
    question: "Quantos jobs são criados por esta matrix?",
    options: ["2", "3", "5", "6"],
    correctIndex: 3,
    explanation:
      "Matrix cria o produto cartesiano: 3 versões de Node × 2 OS = 6 jobs. Cada combinação é um job separado que executa em paralelo.",
  },
  {
    id: 404,
    category: "github-actions",
    code: `steps:\n  - uses: actions/cache@v4\n    with:\n      path: ~/.npm\n      key: npm-\${{ runner.os }}-\${{ hashFiles('**/package-lock.json') }}\n      restore-keys: |\n        npm-\${{ runner.os }}-`,
    question: "O que faz actions/cache?",
    options: [
      "Cache de resultados de testes",
      "Cache de ficheiros entre workflow runs para acelerar builds",
      "Cache de Docker images",
      "Cache de secrets",
    ],
    correctIndex: 1,
    explanation:
      "actions/cache armazena ficheiros (node_modules, .npm, etc.) entre runs. A key é baseada no hash do lockfile — se mudar, o cache é invalidado. `restore-keys` é um fallback para cache parcial.",
  },
  {
    id: 405,
    category: "github-actions",
    code: `jobs:\n  deploy:\n    runs-on: ubuntu-latest\n    environment: production\n    steps:\n      - run: echo "Deploying to prod"\n    env:\n      API_KEY: \${{ secrets.PROD_API_KEY }}`,
    question: "O que é um 'environment' em GitHub Actions?",
    options: [
      "Uma variável de ambiente",
      "Um ambiente de deploy com protection rules, secrets e reviewers",
      "Um container Docker",
      "Um branch protegido",
    ],
    correctIndex: 1,
    explanation:
      "Environments permitem definir protection rules (required reviewers, wait timer), secrets específicos do ambiente, e deployment branches. Útil para separar staging/production.",
  },
  {
    id: 406,
    category: "github-actions",
    code: `on:\n  workflow_dispatch:\n    inputs:\n      environment:\n        description: 'Deploy environment'\n        required: true\n        type: choice\n        options:\n          - staging\n          - production\n      dry_run:\n        description: 'Dry run?'\n        type: boolean\n        default: true`,
    question: "O que faz workflow_dispatch?",
    options: [
      "Dispara em push",
      "Permite executar o workflow manualmente com inputs customizáveis",
      "Agenda o workflow",
      "Dispara em PR",
    ],
    correctIndex: 1,
    explanation:
      "`workflow_dispatch` permite trigger manual via UI do GitHub ou API, com inputs configuráveis (text, choice, boolean). Os valores estão disponíveis via `${{ github.event.inputs.environment }}`.",
  },
  {
    id: 407,
    category: "github-actions",
    code: `steps:\n  - name: Build\n    id: build\n    run: echo "version=1.2.3" >> $GITHUB_OUTPUT\n  \n  - name: Deploy\n    if: steps.build.outcome == 'success'\n    run: echo "Deploying v\${{ steps.build.outputs.version }}"`,
    question: "Como se passa dados entre steps?",
    options: [
      "Variáveis globais",
      "Via $GITHUB_OUTPUT e referência com steps.<id>.outputs",
      "Ficheiros temporários",
      "Environment variables",
    ],
    correctIndex: 1,
    explanation:
      "Steps comunicam via outputs: escrever em `$GITHUB_OUTPUT` e ler com `steps.<step_id>.outputs.<name>`. Isto substituiu o deprecated `::set-output` command.",
  },
  {
    id: 408,
    category: "github-actions",
    code: `jobs:\n  build:\n    runs-on: ubuntu-latest\n    outputs:\n      version: \${{ steps.ver.outputs.version }}\n    steps:\n      - id: ver\n        run: echo "version=1.0.0" >> $GITHUB_OUTPUT\n  \n  deploy:\n    needs: build\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo \${{ needs.build.outputs.version }}`,
    question: "Como se passa dados entre jobs?",
    options: [
      "Variáveis globais",
      "Via job outputs e needs.<job>.outputs",
      "Ficheiros partilhados",
      "Não é possível",
    ],
    correctIndex: 1,
    explanation:
      "Jobs executam em runners diferentes. Para passar dados, define-se outputs no job e acede-se via `needs.<job>.outputs.<name>` no job dependente.",
  },
  {
    id: 409,
    category: "github-actions",
    code: `steps:\n  - uses: actions/upload-artifact@v4\n    with:\n      name: build-output\n      path: dist/\n\n# Noutro job:\n  - uses: actions/download-artifact@v4\n    with:\n      name: build-output`,
    question: "Para que servem artifacts em GitHub Actions?",
    options: [
      "Armazenar secrets",
      "Partilhar ficheiros entre jobs ou preservar outputs do workflow",
      "Cache de dependências",
      "Deploy automático",
    ],
    correctIndex: 1,
    explanation:
      "Artifacts permitem upload/download de ficheiros entre jobs (que correm em runners diferentes) e preservar outputs (logs, binários, reports) após o workflow terminar. Diferente de cache, são para outputs, não dependências.",
  },
  {
    id: 410,
    category: "github-actions",
    code: `on:\n  schedule:\n    - cron: '0 9 * * 1-5'\n    - cron: '0 0 1 * *'`,
    question: "Quando executa este workflow?",
    options: [
      "Todos os dias às 9h",
      "Dias úteis às 9h UTC E no primeiro dia de cada mês à meia-noite",
      "Apenas segunda-feira",
      "A cada hora",
    ],
    correctIndex: 1,
    explanation:
      "Suporta múltiplos schedules cron. `0 9 * * 1-5` = 9h UTC de segunda a sexta. `0 0 1 * *` = meia-noite do dia 1 de cada mês. Schedules usam UTC.",
  },
  {
    id: 411,
    category: "github-actions",
    code: `steps:\n  - name: Login to Docker Hub\n    uses: docker/login-action@v3\n    with:\n      username: \${{ secrets.DOCKER_USERNAME }}\n      password: \${{ secrets.DOCKER_PASSWORD }}\n  \n  - name: Build and push\n    uses: docker/build-push-action@v5\n    with:\n      push: true\n      tags: myapp:latest,myapp:\${{ github.sha }}`,
    question: "Porque usar github.sha como tag da imagem Docker?",
    options: [
      "É mais curto",
      "Identifica univocamente o commit, permitindo rastreabilidade",
      "É mais seguro",
      "Docker exige",
    ],
    correctIndex: 1,
    explanation:
      "Usar o SHA do commit como tag permite saber exatamente que código está em cada imagem. `latest` é a tag mais recente, mas o SHA permite rollback para qualquer versão específica.",
  },
  {
    id: 412,
    category: "github-actions",
    code: `permissions:\n  contents: read\n  pull-requests: write\n  issues: write\n\nsteps:\n  - uses: actions/github-script@v7\n    with:\n      script: |\n        github.rest.issues.createComment({\n          owner: context.repo.owner,\n          repo: context.repo.repo,\n          issue_number: context.issue.number,\n          body: 'Tests passed! ✅'\n        })`,
    question: "O que faz github-script?",
    options: [
      "Compila JavaScript",
      "Permite usar a API do GitHub com JavaScript diretamente no workflow",
      "Corre testes",
      "Gera documentação",
    ],
    correctIndex: 1,
    explanation:
      "github-script permite executar JavaScript que usa o Octokit (GitHub API client). Útil para automações como comentar PRs, criar issues, labels, etc. O objeto `github` é o Octokit client autenticado.",
  },
  {
    id: 413,
    category: "github-actions",
    code: `# Reusable workflow\n# .github/workflows/deploy.yml\non:\n  workflow_call:\n    inputs:\n      environment:\n        type: string\n        required: true\n    secrets:\n      deploy_key:\n        required: true\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo "Deploying to \${{ inputs.environment }}"`,
    question: "O que é um reusable workflow?",
    options: [
      "Um workflow copiado",
      "Um workflow que pode ser chamado por outros workflows como um módulo",
      "Um template",
      "Um workflow agendado",
    ],
    correctIndex: 1,
    explanation:
      "Reusable workflows (`workflow_call`) são módulos reutilizáveis. Outros workflows chamam-nos via `uses: ./.github/workflows/deploy.yml`. Aceitam inputs e secrets. Reduzem duplicação e centralizam lógica.",
  },
  {
    id: 414,
    category: "github-actions",
    code: `steps:\n  - name: Run tests\n    id: tests\n    run: npm test\n    continue-on-error: true\n  \n  - name: Report\n    if: steps.tests.outcome == 'failure'\n    run: echo "Tests failed but workflow continues"`,
    question: "O que faz continue-on-error?",
    options: [
      "Ignora todos os erros do workflow",
      "Permite que o workflow continue mesmo se este step falhar",
      "Repete o step em caso de erro",
      "Envia notificação de erro",
    ],
    correctIndex: 1,
    explanation:
      "`continue-on-error: true` permite que o workflow continue se o step falhar. O outcome fica 'failure' mas o workflow não é marcado como falhado. Útil para steps opcionais ou reporting.",
  },
  {
    id: 415,
    category: "github-actions",
    code: `services:\n  postgres:\n    image: postgres:15\n    env:\n      POSTGRES_PASSWORD: test\n    ports:\n      - 5432:5432\n    options: >-\n      --health-cmd pg_isready\n      --health-interval 10s\n      --health-timeout 5s\n      --health-retries 5`,
    question: "O que são 'services' em GitHub Actions?",
    options: [
      "Microservices da aplicação",
      "Containers Docker que correm junto do job (DBs, caches, etc.)",
      "APIs externas",
      "GitHub Apps",
    ],
    correctIndex: 1,
    explanation:
      "Services são containers Docker que correm durante o job. Típicos para bases de dados (PostgreSQL, MySQL), caches (Redis), ou outros serviços necessários para testes de integração.",
  },
  {
    id: 416,
    category: "github-actions",
    code: `on:\n  push:\n    paths:\n      - 'src/**'\n      - 'package.json'\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'`,
    question: "O que fazem paths e paths-ignore?",
    options: [
      "Definem que ficheiros são deployed",
      "Filtram quando o workflow executa baseado nos ficheiros alterados",
      "Definem ficheiros a testar",
      "Excluem ficheiros do build",
    ],
    correctIndex: 1,
    explanation:
      "`paths` restringe o trigger apenas quando ficheiros nestes paths são alterados. `paths-ignore` exclui ficheiros. Evita executar CI desnecessariamente quando só docs ou readmes mudam.",
  },
  {
    id: 417,
    category: "github-actions",
    code: `concurrency:\n  group: deploy-\${{ github.ref }}\n  cancel-in-progress: true\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo "Deploying..."`,
    question: "O que faz 'concurrency' com cancel-in-progress?",
    options: [
      "Permite execuções paralelas",
      "Cancela runs anteriores do mesmo grupo quando um novo inicia",
      "Limita o número de jobs",
      "Agenda execuções sequenciais",
    ],
    correctIndex: 1,
    explanation:
      "`concurrency` agrupa workflows. `cancel-in-progress: true` cancela automaticamente runs anteriores quando um novo push chega. Evita deploys desatualizados e poupa minutos de CI.",
  },
  {
    id: 418,
    category: "github-actions",
    code: `# Creating a custom composite action\n# .github/actions/setup-project/action.yml\nname: 'Setup Project'\ndescription: 'Install deps and build'\nruns:\n  using: composite\n  steps:\n    - uses: actions/setup-node@v4\n      with:\n        node-version: 20\n    - run: npm ci\n      shell: bash\n    - run: npm run build\n      shell: bash`,
    question: "O que é uma composite action?",
    options: [
      "Uma action em Docker",
      "Uma action que agrupa múltiplos steps reutilizáveis num só",
      "Uma action JavaScript",
      "Uma action com múltiplos triggers",
    ],
    correctIndex: 1,
    explanation:
      "Composite actions agrupam múltiplos steps num action reutilizável. Útil para abstrair setup repetitivo (install, build, config). Usa-se com `uses: ./.github/actions/setup-project`.",
  },
  {
    id: 419,
    category: "github-actions",
    code: `steps:\n  - name: Create Release\n    uses: softprops/action-gh-release@v1\n    if: startsWith(github.ref, 'refs/tags/')\n    with:\n      files: |\n        dist/*.zip\n        CHANGELOG.md\n      generate_release_notes: true`,
    question: "Quando este step executa?",
    options: [
      "Em qualquer push",
      "Apenas quando uma tag é pushed (refs/tags/*)",
      "Em pull requests",
      "Manualmente",
    ],
    correctIndex: 1,
    explanation:
      "A condição `if: startsWith(github.ref, 'refs/tags/')` garante que o release só é criado quando uma tag Git é pushed. `generate_release_notes: true` gera notas baseadas em commits/PRs desde a última release.",
  },
  {
    id: 420,
    category: "github-actions",
    code: `# OIDC for cloud authentication\npermissions:\n  id-token: write\n  contents: read\n\nsteps:\n  - uses: aws-actions/configure-aws-credentials@v4\n    with:\n      role-to-assume: arn:aws:iam::123456:role/GitHubActions\n      aws-region: eu-west-1`,
    question: "Qual a vantagem de OIDC vs secrets para auth com AWS?",
    options: [
      "É mais rápido",
      "Usa tokens temporários em vez de credentials estáticas de longa duração",
      "Não precisa de configuração",
      "São iguais",
    ],
    correctIndex: 1,
    explanation:
      "OIDC (OpenID Connect) permite que GitHub Actions assume uma IAM role com credenciais temporárias, eliminando a necessidade de armazenar AWS access keys como secrets. Mais seguro e sem rotação manual.",
  },
  {
    id: 421,
    category: "github-actions",
    code: `# Branch protection + required status checks\non:\n  pull_request:\n    types: [opened, synchronize, reopened]\n\njobs:\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - run: npm run lint\n  \n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - run: npm test\n  \n  typecheck:\n    runs-on: ubuntu-latest\n    steps:\n      - run: npx tsc --noEmit`,
    question: "Como garantir que PRs passam todos os checks antes de merge?",
    options: [
      "Apenas com CI",
      "Configurar branch protection com required status checks no GitHub",
      "Code review é suficiente",
      "Não é possível automatizar",
    ],
    correctIndex: 1,
    explanation:
      "Branch protection rules com 'required status checks' impedem merge de PRs até que os jobs do CI (lint, test, typecheck) passem. Configurado nas Settings do repositório, não no workflow.",
  },
  {
    id: 422,
    category: "github-actions",
    code: `# Self-hosted runner\njobs:\n  build:\n    runs-on: [self-hosted, linux, x64]\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci\n      - run: npm test`,
    question: "O que é um self-hosted runner?",
    options: [
      "Um runner mais rápido do GitHub",
      "Uma máquina própria que executa GitHub Actions workflows",
      "Um container Docker no GitHub",
      "Um runner gratuito",
    ],
    correctIndex: 1,
    explanation:
      "Self-hosted runners são máquinas que tu controlas (on-premise ou cloud). Vantagens: hardware customizado, acesso a rede privada, sem limites de minutos. Desvantagem: gestão e segurança são responsabilidade tua.",
  },
  {
    id: 423,
    category: "github-actions",
    code: `steps:\n  - name: Check PR size\n    uses: actions/github-script@v7\n    with:\n      script: |\n        const { data: files } = await github.rest.pulls.listFiles({\n          owner: context.repo.owner,\n          repo: context.repo.repo,\n          pull_number: context.issue.number,\n        });\n        const changes = files.reduce((sum, f) => sum + f.changes, 0);\n        if (changes > 500) {\n          core.setFailed(\`PR too large: \${changes} changes\`);  \n        }`,
    question: "O que faz este workflow?",
    options: [
      "Conta linhas de código",
      "Falha o CI se o PR tiver mais de 500 linhas alteradas",
      "Aprova PRs automaticamente",
      "Merge PRs pequenos",
    ],
    correctIndex: 1,
    explanation:
      "Usa a GitHub API para contar o total de changes no PR. Se ultrapassar 500, falha o check com `core.setFailed()`. Encoraja PRs pequenos e focados, mais fáceis de review.",
  },
  {
    id: 424,
    category: "github-actions",
    code: `env:\n  NODE_ENV: production\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    env:\n      CI: true\n    steps:\n      - run: echo $NODE_ENV $CI $STEP_VAR\n        env:\n          STEP_VAR: hello`,
    question: "Em que níveis se podem definir variáveis de ambiente?",
    options: [
      "Apenas no workflow",
      "Workflow, job e step — com precedência crescente",
      "Apenas no step",
      "Workflow e job apenas",
    ],
    correctIndex: 1,
    explanation:
      "Env vars podem ser definidas em 3 níveis: workflow (top-level), job, e step. Níveis mais específicos sobrescrevem os mais gerais. Step env > Job env > Workflow env.",
  },
  {
    id: 425,
    category: "github-actions",
    code: `# Dependabot + auto-merge\n# .github/dependabot.yml\nversion: 2\nupdates:\n  - package-ecosystem: npm\n    directory: /\n    schedule:\n      interval: weekly\n    open-pull-requests-limit: 10`,
    question: "O que faz o Dependabot?",
    options: [
      "Compila dependências",
      "Cria PRs automaticamente para atualizar dependências",
      "Remove dependências não usadas",
      "Audita segurança do código",
    ],
    correctIndex: 1,
    explanation:
      "Dependabot monitora dependências e cria PRs automaticamente quando há novas versões ou vulnerabilidades. Configurável por ecosistema (npm, pip, Docker), frequência, e limites.",
  },
  {
    id: 426,
    category: "github-actions",
    code: `jobs:\n  deploy:\n    runs-on: ubuntu-latest\n    timeout-minutes: 30\n    steps:\n      - name: Deploy\n        timeout-minutes: 10\n        run: ./deploy.sh`,
    question: "O que acontece se um job exceder o timeout?",
    options: [
      "Continua a executar",
      "É cancelado automaticamente pelo GitHub Actions",
      "Envia um warning",
      "Reinicia o job",
    ],
    correctIndex: 1,
    explanation:
      "Quando o timeout é atingido, o GitHub Actions cancela o job/step. O default é 360 minutos. Definir timeouts razoáveis previne jobs stuck que consomem minutos de CI.",
  },
  {
    id: 427,
    category: "github-actions",
    code: `# Matrix with include/exclude\nstrategy:\n  matrix:\n    os: [ubuntu-latest, windows-latest]\n    node: [18, 20]\n    exclude:\n      - os: windows-latest\n        node: 18\n    include:\n      - os: ubuntu-latest\n        node: 21\n        experimental: true`,
    question: "O que fazem include e exclude na matrix?",
    options: [
      "Nada, são ignorados",
      "exclude remove combinações, include adiciona combinações extras",
      "include substitui exclude",
      "Definem variáveis",
    ],
    correctIndex: 1,
    explanation:
      "`exclude` remove combinações específicas da matrix. `include` adiciona combinações extras (ou propriedades a combinações existentes). Permite fine-tuning da matrix sem listar todas as combinações.",
  },
  {
    id: 428,
    category: "github-actions",
    code: `# GitHub Actions context objects\n\ngithub.sha          # commit SHA\ngithub.ref          # branch/tag ref\ngithub.actor        # user that triggered\ngithub.event_name   # push, pull_request, etc.\ngithub.run_number   # sequential run number\ngithub.repository   # owner/repo`,
    question: "O que é o objeto 'github' context?",
    options: [
      "A GitHub API",
      "Informação sobre o evento e repositório disponível em expressions",
      "Configuração do repositório",
      "Secrets do GitHub",
    ],
    correctIndex: 1,
    explanation:
      "O github context fornece informação sobre o workflow run: commit SHA, branch, quem triggou, tipo de evento, etc. Acessível via `${{ github.* }}` em qualquer parte do workflow.",
  },
  {
    id: 429,
    category: "github-actions",
    code: `# Conditional deployment\njobs:\n  deploy-staging:\n    if: github.ref == 'refs/heads/develop'\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo "Deploy to staging"\n  \n  deploy-prod:\n    if: github.ref == 'refs/heads/main' && github.event_name == 'push'\n    runs-on: ubuntu-latest\n    environment: production\n    steps:\n      - run: echo "Deploy to production"`,
    question: "Como se controla em que ambiente fazer deploy?",
    options: [
      "Só por variáveis de ambiente",
      "Via condições 'if' baseadas no branch e tipo de evento",
      "Manualmente",
      "Pelo nome do workflow",
    ],
    correctIndex: 1,
    explanation:
      "Condições `if` com expressões sobre o context (branch, evento, etc.) permitem routing condicional. develop → staging, main + push → production. Combined with environments para approval gates.",
  },
  {
    id: 430,
    category: "github-actions",
    code: `# Security scanning in CI\nsteps:\n  - name: Run Trivy vulnerability scanner\n    uses: aquasecurity/trivy-action@master\n    with:\n      scan-type: 'fs'\n      severity: 'CRITICAL,HIGH'\n      exit-code: '1'\n  \n  - name: Run CodeQL Analysis\n    uses: github/codeql-action/analyze@v3`,
    question: "Porque integrar security scanning no CI?",
    options: [
      "Para cumprir regulações",
      "Para detetar vulnerabilidades automaticamente antes do código chegar a produção",
      "Para substituir code review",
      "Para acelerar o build",
    ],
    correctIndex: 1,
    explanation:
      "Security scanning no CI deteta vulnerabilidades (dependências, código, containers) automaticamente em cada PR. Shift-left security: quanto mais cedo se encontram problemas, mais barato é corrigi-los. Trivy para deps/containers, CodeQL para código.",
  },

  // ========== GCP (30) ==========
  {
    id: 501,
    category: "gcp",
    code: `gcloud run deploy my-service \\\n  --image gcr.io/my-project/my-app \\\n  --platform managed \\\n  --allow-unauthenticated \\\n  --region us-central1`,
    question: "O que é o Google Cloud Run?",
    options: [
      "Um serviço de gestão de máquinas virtuais tradicionais",
      "Uma plataforma serverless para execução de containers",
      "Um serviço de resolução de nomes e gestão de domínios",
      "Um sistema de filas e processamento de mensagens",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Run é serverless para containers. Escala automaticamente de zero, cobra pelo tempo de execução, e suporta qualquer linguagem/runtime que caiba num container.",
  },
  {
    id: 502,
    category: "gcp",
    code: `# Cloud Functions (2nd gen)\nconst functions = require('@google-cloud/functions-framework');\n\nfunctions.http('helloWorld', (req, res) => {\n  res.send('Hello, World!');\n});\n\n# Deploy\ngcloud functions deploy helloWorld \\\n  --gen2 \\\n  --runtime nodejs20 \\\n  --trigger-http \\\n  --allow-unauthenticated`,
    question: "Qual a diferença entre Cloud Functions e Cloud Run?",
    options: [
      "São serviços idênticos com apenas nomes comerciais distintos",
      "Functions é para funções event-driven, Run para containers completos",
      "Run é um serviço legado substituído totalmente pelo Functions",
      "Functions exige o pagamento de taxas fixas por infraestrutura",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Functions é ideal para funções simples event-driven (HTTP, Pub/Sub). Cloud Run executa containers completos with mais controle. Gen2 Functions são na verdade construídas sobre Cloud Run.",
  },
  {
    id: 503,
    category: "gcp",
    code: `# Pub/Sub\ngcloud pubsub topics create orders\ngcloud pubsub subscriptions create order-sub \\\n  --topic orders \\\n  --push-endpoint https://my-service.run.app/process`,
    question: "O que é o Cloud Pub/Sub?",
    options: [
      "Um serviço de hospedagem de websites estáticos",
      "Um serviço de messaging assíncrono para desacoplar sistemas",
      "Um serviço de gestão de certificados e domínios DNS",
      "Um serviço de distribuição de conteúdo em cache",
    ],
    correctIndex: 1,
    explanation:
      "Pub/Sub é um serviço de messaging global e durável. Publishers enviam mensagens para topics, subscribers recebem-nas via push or pull. Garante at-least-once delivery e escala automaticamente.",
  },
  {
    id: 504,
    category: "gcp",
    code: `# BigQuery\nSELECT\n  DATE(created_at) as day,\n  COUNT(*) as orders,\n  SUM(total) as revenue\nFROM \`project.dataset.orders\`\nWHERE created_at >= '2024-01-01'\nGROUP BY day\nORDER BY day;`,
    question: "O que é o BigQuery?",
    options: [
      "Uma base de dados relacional para transações de alta frequência",
      "Um data warehouse serverless para análise de grandes volumes",
      "Um serviço de cache distribuída para baixa latência",
      "Um motor de busca para indexação de documentos",
    ],
    correctIndex: 1,
    explanation:
      "BigQuery é um data warehouse serverless que analisa petabytes de dados usando SQL. Cobra por queries executadas (dados processados) e armazenamento. Ideal para analytics, reporting e ML.",
  },
  {
    id: 505,
    category: "gcp",
    code: `# GKE (Google Kubernetes Engine)\ngcloud container clusters create my-cluster \\\n  --zone us-central1-a \\\n  --num-nodes 3 \\\n  --enable-autoscaling \\\n  --min-nodes 1 \\\n  --max-nodes 10`,
    question: "O que é o GKE?",
    options: [
      "Um serviço de criação e gestão de máquinas virtuais",
      "O serviço managed de Kubernetes da plataforma Google Cloud",
      "Um repositório privado para armazenamento de imagens",
      "Um serviço de automação de integração e entrega contínua",
    ],
    correctIndex: 1,
    explanation:
      "GKE é o Kubernetes managed da Google. Gere o control plane, auto-scaling, upgrades e segurança. Suporta Autopilot mode (totalmente managed) e Standard mode (mais controle).",
  },
  {
    id: 506,
    category: "gcp",
    code: `# Cloud Storage\ngsutil mb gs://my-app-data\ngsutil cp -r ./uploads gs://my-app-data/\ngsutil iam ch allUsers:objectViewer gs://my-app-data`,
    question: "O que é o Cloud Storage?",
    options: [
      "Um file system",
      "Object storage durável e escalável (equivalente ao S3)",
      "Block storage",
      "Uma base de dados",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Storage é object storage com classes (Standard, Nearline, Coldline, Archive) para diferentes frequências de acesso. 99.999999999% durabilidade. Equivalente ao AWS S3.",
  },
  {
    id: 507,
    category: "gcp",
    code: `# Firestore\nconst db = admin.firestore();\n\n// Add document\nawait db.collection('users').doc('user1').set({\n  name: 'Ana',\n  email: 'ana@email.com',\n  createdAt: admin.firestore.FieldValue.serverTimestamp()\n});\n\n// Real-time listener\ndb.collection('users').onSnapshot(snapshot => {\n  snapshot.docChanges().forEach(change => {\n    console.log(change.type, change.doc.data());\n  });\n});`,
    question: "Qual feature distingue o Firestore de outras DBs?",
    options: [
      "É relacional",
      "Real-time listeners para sincronização automática de dados",
      "Suporta SQL",
      "É graph-based",
    ],
    correctIndex: 1,
    explanation:
      "Firestore é uma DB NoSQL document com real-time listeners que sincronizam dados automaticamente entre server e clients. Ideal para apps com atualizações em tempo real (chat, dashboards).",
  },
  {
    id: 508,
    category: "gcp",
    code: `# Cloud Build\n# cloudbuild.yaml\nsteps:\n  - name: 'node:20'\n    entrypoint: 'npm'\n    args: ['ci']\n  - name: 'node:20'\n    entrypoint: 'npm'\n    args: ['test']\n  - name: 'gcr.io/cloud-builders/docker'\n    args: ['build', '-t', 'gcr.io/$PROJECT_ID/myapp', '.']\nimages:\n  - 'gcr.io/$PROJECT_ID/myapp'`,
    question: "O que é o Cloud Build?",
    options: [
      "Um IDE",
      "O serviço de CI/CD serverless da Google Cloud",
      "Um compilador",
      "Um package manager",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Build é o serviço CI/CD serverless da GCP. Executa builds em containers, suporta triggers (push, PR, Pub/Sub) e integra nativamente com GCR, Cloud Run e GKE para deploy automático.",
  },
  {
    id: 509,
    category: "gcp",
    code: `# IAM - Identity and Access Management\ngcloud projects add-iam-policy-binding my-project \\\n  --member="serviceAccount:my-sa@my-project.iam.gserviceaccount.com" \\\n  --role="roles/storage.objectViewer"`,
    question: "O que é um Service Account na GCP?",
    options: [
      "Uma conta de utilizador",
      "Uma identidade para aplicações e serviços (não humanos)",
      "Uma conta de billing",
      "Uma conta admin",
    ],
    correctIndex: 1,
    explanation:
      "Service Accounts são identidades para aplicações, VMs e serviços. Permitem autenticação máquina-a-máquina sem credenciais de utilizador. Seguem o princípio de least privilege via IAM roles.",
  },
  {
    id: 510,
    category: "gcp",
    code: `# Cloud SQL\ngcloud sql instances create mydb \\\n  --database-version=POSTGRES_15 \\\n  --tier=db-f1-micro \\\n  --region=europe-west1\n\n# Cloud SQL Proxy for local development\ncloud-sql-proxy my-project:europe-west1:mydb`,
    question: "O que é o Cloud SQL?",
    options: [
      "Uma DB NoSQL",
      "Bases de dados relacionais managed (MySQL, PostgreSQL, SQL Server)",
      "Um query engine",
      "Um data lake",
    ],
    correctIndex: 1,
    explanation:
      "Cloud SQL é o serviço managed para DBs relacionais. Gere backups, patches, replication e failover. O Cloud SQL Proxy fornece conexão segura sem precisar de whitelisting de IPs.",
  },
  {
    id: 511,
    category: "gcp",
    code: `# Cloud Scheduler + Pub/Sub\ngcloud scheduler jobs create pubsub daily-report \\\n  --schedule="0 8 * * *" \\\n  --topic=daily-reports \\\n  --message-body='{"type": "daily"}' \\\n  --time-zone="Europe/Lisbon"`,
    question: "O que é o Cloud Scheduler?",
    options: [
      "Um calendar app",
      "Um cron job managed que dispara targets (Pub/Sub, HTTP, App Engine)",
      "Um task queue",
      "Um workflow engine",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Scheduler é um cron-as-a-service fully managed. Dispara targets em schedule: Pub/Sub topics, HTTP endpoints, ou App Engine. Suporta retry config e time zones.",
  },
  {
    id: 512,
    category: "gcp",
    code: `# Cloud CDN com Load Balancer\ngcloud compute backend-services update my-backend \\\n  --enable-cdn \\\n  --cache-mode=CACHE_ALL_STATIC`,
    question: "Como funciona o Cloud CDN na GCP?",
    options: [
      "É um serviço standalone",
      "Integra com o Cloud Load Balancer para cache na edge da Google",
      "É igual ao Cloud Storage",
      "Substitui o DNS",
    ],
    correctIndex: 1,
    explanation:
      "Cloud CDN integra com o Global HTTP(S) Load Balancer para cachear conteúdo nos edge locations da Google. Diferente de CloudFront (AWS), está integrado no load balancer, não é um serviço separado.",
  },
  {
    id: 513,
    category: "gcp",
    code: `# Secret Manager\ngcloud secrets create api-key \\\n  --data-file=./secret.txt\n\n# Access in code\nconst {SecretManagerServiceClient} = require('@google-cloud/secret-manager');\nconst client = new SecretManagerServiceClient();\nconst [version] = await client.accessSecretVersion({\n  name: 'projects/my-project/secrets/api-key/versions/latest'\n});`,
    question: "O que é o Secret Manager?",
    options: [
      "Um password manager pessoal",
      "Um serviço para armazenar, gerir e aceder a secrets de forma segura",
      "Um serviço de encriptação",
      "Um IAM service",
    ],
    correctIndex: 1,
    explanation:
      "Secret Manager armazena API keys, passwords e certificados de forma segura. Suporta versionamento, rotation, e acesso controlado via IAM. Integra nativamente com Cloud Run e Cloud Functions.",
  },
  {
    id: 514,
    category: "gcp",
    code: `# Cloud Armor (WAF)\ngcloud compute security-policies create my-policy\ngcloud compute security-policies rules create 1000 \\\n  --security-policy my-policy \\\n  --expression "origin.region_code == 'CN'" \\\n  --action deny-403`,
    question: "O que é o Cloud Armor?",
    options: [
      "Antivírus",
      "WAF e proteção DDoS para aplicações web na GCP",
      "Encriptação de dados",
      "VPN service",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Armor é o Web Application Firewall (WAF) da GCP. Protege contra DDoS, SQL injection, XSS. Integra com o Load Balancer para filtrar tráfego por geo, IP, ou expressões customizadas.",
  },
  {
    id: 515,
    category: "gcp",
    code: `# Cloud Workflows (equivalent to Step Functions)\nmain:\n  steps:\n    - validate:\n        call: http.post\n        args:\n          url: https://validate.run.app\n          body: \${input}\n        result: validation\n    - check:\n        switch:\n          - condition: \${validation.body.valid}\n            next: process\n          - condition: true\n            next: reject\n    - process:\n        call: http.post\n        args:\n          url: https://process.run.app`,
    question: "O que é o Cloud Workflows?",
    options: [
      "Um CI/CD service",
      "Orquestração serverless de serviços (equivalente a Step Functions)",
      "Um task scheduler",
      "Um workflow de aprovação",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Workflows orquestra serviços GCP e HTTP endpoints em workflows serverless. Suporta condicionais, loops, error handling e parallel steps. Equivalente GCP ao AWS Step Functions.",
  },
  {
    id: 516,
    category: "gcp",
    code: `# Memorystore (Redis)\ngcloud redis instances create my-cache \\\n  --size=1 \\\n  --region=europe-west1 \\\n  --redis-version=redis_7_0`,
    question: "O que é o Memorystore?",
    options: [
      "Object storage",
      "Cache in-memory managed (Redis/Memcached)",
      "Uma base de dados",
      "Um serviço de logging",
    ],
    correctIndex: 1,
    explanation:
      "Memorystore é o serviço managed de cache in-memory da GCP. Suporta Redis e Memcached. Reduz latência de leituras frequentes e alivia carga em bases de dados. Fully managed: patching, failover, monitoring.",
  },
  {
    id: 517,
    category: "gcp",
    code: `# Cloud Spanner\nCREATE TABLE Users (\n  UserId STRING(36) NOT NULL,\n  Name STRING(100),\n  Email STRING(255),\n) PRIMARY KEY (UserId);\n\n# Globally distributed, strongly consistent`,
    question: "O que distingue o Cloud Spanner de outras DBs?",
    options: [
      "É NoSQL",
      "DB relacional globalmente distribuída com strong consistency",
      "É in-memory",
      "É mais barata",
    ],
    correctIndex: 1,
    explanation:
      "Spanner combina o melhor dos mundos: SQL + strong consistency + distribuição global horizontal. Único DB que oferece transações ACID distribuídas globalmente. Usado para financial systems e gaming.",
  },
  {
    id: 518,
    category: "gcp",
    code: `# Cloud Tasks\nconst {CloudTasksClient} = require('@google-cloud/tasks');\nconst client = new CloudTasksClient();\n\nawait client.createTask({\n  parent: 'projects/my-project/locations/europe-west1/queues/my-queue',\n  task: {\n    httpRequest: {\n      url: 'https://my-service.run.app/process',\n      httpMethod: 'POST',\n      body: Buffer.from(JSON.stringify({orderId: 123})),\n    },\n    scheduleTime: { seconds: Date.now()/1000 + 300 } // 5min delay\n  }\n});`,
    question: "Qual a diferença entre Cloud Tasks e Pub/Sub?",
    options: [
      "São iguais",
      "Tasks é para delivery garantida a UM handler com retry; Pub/Sub para fan-out a MÚLTIPLOS subscribers",
      "Pub/Sub é mais rápido",
      "Tasks é deprecated",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Tasks garante que cada task é processada por exatamente um handler, com retry, rate limiting e scheduling. Pub/Sub distribui mensagens para múltiplos subscribers. Tasks = task queue, Pub/Sub = event bus.",
  },
  {
    id: 519,
    category: "gcp",
    code: `# Artifact Registry\ngcloud artifacts repositories create my-repo \\\n  --repository-format=docker \\\n  --location=europe-west1\n\ndocker tag myapp europe-west1-docker.pkg.dev/my-project/my-repo/myapp\ndocker push europe-west1-docker.pkg.dev/my-project/my-repo/myapp`,
    question: "O que é o Artifact Registry?",
    options: [
      "Um CDN",
      "Registry managed para Docker images, npm packages, Maven, etc.",
      "Um file storage",
      "Um serviço de CI/CD",
    ],
    correctIndex: 1,
    explanation:
      "Artifact Registry é o registry universal da GCP para artefactos: Docker images, npm packages, Python packages, Maven/Gradle, etc. Substitui o Container Registry (GCR) com mais features e multi-format support.",
  },
  {
    id: 520,
    category: "gcp",
    code: `# Cloud Monitoring + Alerting\ngcloud monitoring policies create \\\n  --notification-channels=projects/my-project/notificationChannels/123 \\\n  --condition-display-name="High Error Rate" \\\n  --condition-filter='resource.type="cloud_run_revision" AND metric.type="run.googleapis.com/request_count" AND metric.labels.response_code_class="5xx"'`,
    question: "O que é o Cloud Monitoring (Stackdriver)?",
    options: [
      "Um debugger",
      "Plataforma de observability: métricas, dashboards, alertas e uptime checks",
      "Um logger",
      "Um profiler",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Monitoring (antes Stackdriver) fornece métricas, dashboards, alerting e uptime checks. Integra nativamente com todos os serviços GCP e suporta métricas customizadas. Parte da suite de Operations.",
  },
  {
    id: 521,
    category: "gcp",
    code: `# VPC Network\ngcloud compute networks create my-vpc --subnet-mode=custom\ngcloud compute networks subnets create my-subnet \\\n  --network=my-vpc \\\n  --region=europe-west1 \\\n  --range=10.0.0.0/24\n\n# VPC Connector for serverless\ngcloud compute networks vpc-access connectors create my-connector \\\n  --network=my-vpc \\\n  --region=europe-west1 \\\n  --range=10.8.0.0/28`,
    question: "Para que serve um VPC Connector em serverless?",
    options: [
      "Para internet access",
      "Para conectar Cloud Run/Functions a recursos na VPC privada",
      "Para DNS",
      "Para load balancing",
    ],
    correctIndex: 1,
    explanation:
      "Serverless VPC Access Connector permite que Cloud Run e Cloud Functions acedam a recursos na VPC privada (Cloud SQL, Memorystore, VMs) sem os expor publicamente.",
  },
  {
    id: 522,
    category: "gcp",
    code: `# Cloud Logging\ngcloud logging read \\\n  'resource.type="cloud_run_revision" AND severity>=ERROR' \\\n  --limit=50 \\\n  --format=json\n\n# Log-based metrics\ngcloud logging metrics create error-rate \\\n  --description="Error rate" \\\n  --log-filter='severity>=ERROR'`,
    question: "O que são log-based metrics na GCP?",
    options: [
      "Logs convertidos em ficheiros",
      "Métricas criadas automaticamente a partir de padrões nos logs",
      "Métricas de performance dos logs",
      "Logs com timestamps",
    ],
    correctIndex: 1,
    explanation:
      "Log-based metrics permitem criar métricas personalizadas baseadas em padrões nos logs (contagem de erros, latência extraída de logs, etc.). Podem ser usadas em dashboards e alertas do Cloud Monitoring.",
  },
  {
    id: 523,
    category: "gcp",
    code: `# Cloud Run - Min instances\ngcloud run deploy my-service \\\n  --image gcr.io/my-project/myapp \\\n  --min-instances 1 \\\n  --max-instances 100 \\\n  --concurrency 80 \\\n  --cpu 2 \\\n  --memory 1Gi`,
    question: "O que faz --min-instances 1 no Cloud Run?",
    options: [
      "Garante pelo menos 1 replica",
      "Mantém 1 instância sempre warm para evitar cold starts",
      "Define o mínimo de CPU",
      "Define replicas de base de dados",
    ],
    correctIndex: 1,
    explanation:
      "min-instances mantém pelo menos N instâncias sempre ativas, eliminando cold starts. Tem custo fixo mesmo sem tráfego. Equivalente ao Provisioned Concurrency do Lambda.",
  },
  {
    id: 524,
    category: "gcp",
    code: `# Identity Platform (Auth)\nconst { getAuth } = require('firebase-admin/auth');\n\n// Create user\nawait getAuth().createUser({\n  email: 'user@email.com',\n  password: 'securePassword'\n});\n\n// Verify token\nconst decoded = await getAuth().verifyIdToken(idToken);`,
    question: "O que é o Identity Platform/Firebase Auth?",
    options: [
      "Um IAM service",
      "Serviço managed de autenticação de utilizadores com OAuth, SAML e mais",
      "Um password manager",
      "Um serviço de SSO empresarial",
    ],
    correctIndex: 1,
    explanation:
      "Identity Platform (Firebase Auth) é o serviço managed de autenticação. Suporta email/password, OAuth (Google, Facebook, Apple), SAML, phone auth, e anonymous auth. Integra com Cloud Run e Cloud Functions.",
  },
  {
    id: 525,
    category: "gcp",
    code: `# Dataflow (Apache Beam)\nimport apache_beam as beam\n\nwith beam.Pipeline() as p:\n  (p\n   | 'Read' >> beam.io.ReadFromPubSub(topic='projects/p/topics/events')\n   | 'Parse' >> beam.Map(json.loads)\n   | 'Filter' >> beam.Filter(lambda x: x['type'] == 'purchase')\n   | 'Window' >> beam.WindowInto(beam.window.FixedWindows(60))\n   | 'Count' >> beam.combiners.Count.Globally()\n   | 'Write' >> beam.io.WriteToBigQuery('project:dataset.table'))`,
    question: "O que é o Cloud Dataflow?",
    options: [
      "Um ETL tool",
      "Serviço managed para processamento de dados em batch e streaming (Apache Beam)",
      "Um data warehouse",
      "Um message queue",
    ],
    correctIndex: 1,
    explanation:
      "Dataflow é o serviço managed para Apache Beam pipelines. Processa dados em batch ou real-time streaming com auto-scaling. Ideal para ETL, analytics em streaming, e transformações de dados complexas.",
  },
  {
    id: 526,
    category: "gcp",
    code: `# Cloud Run Jobs\ngcloud run jobs create process-data \\\n  --image gcr.io/my-project/batch-processor \\\n  --tasks 10 \\\n  --parallelism 5 \\\n  --task-timeout 3600\n\n# Execute\ngcloud run jobs execute process-data`,
    question: "Qual a diferença entre Cloud Run services e Cloud Run jobs?",
    options: [
      "São iguais",
      "Services respondem a requests HTTP; Jobs executam tarefas até conclusão",
      "Jobs são mais rápidos",
      "Services são deprecated",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Run Services são para workloads HTTP (sempre a escutar). Cloud Run Jobs executam containers até conclusão (batch processing, migrations, ETL). Jobs suportam parallelismo e divisão em tasks.",
  },
  {
    id: 527,
    category: "gcp",
    code: `# Cloud Deploy (CD pipeline)\napiVersion: deploy.cloud.google.com/v1\nkind: DeliveryPipeline\nmetadata:\n  name: my-app-pipeline\nserialPipeline:\n  stages:\n    - targetId: staging\n      profiles: [staging]\n    - targetId: production\n      profiles: [production]\n      strategy:\n        canary:\n          runtimeConfig:\n            cloudRun:\n              automaticTrafficControl: true\n          canaryDeployment:\n            percentages: [10, 50]\n            verify: true`,
    question: "O que é uma canary deployment?",
    options: [
      "Deploy completo de uma vez",
      "Rollout gradual enviando tráfego progressivamente para a nova versão",
      "Deploy para um ambiente de test",
      "Rollback automático",
    ],
    correctIndex: 1,
    explanation:
      "Canary deployment envia uma percentagem progressiva de tráfego para a nova versão (10% → 50% → 100%). Permite detetar problemas com impacto limitado antes do rollout completo.",
  },
  {
    id: 528,
    category: "gcp",
    code: `# Cloud Trace\nconst {TraceExporter} = require('@google-cloud/opentelemetry-cloud-trace-exporter');\nconst {NodeTracerProvider} = require('@opentelemetry/sdk-trace-node');\n\nconst provider = new NodeTracerProvider();\nprovider.addSpanProcessor(\n  new BatchSpanProcessor(new TraceExporter())\n);\nprovider.register();`,
    question: "O que é o Cloud Trace?",
    options: [
      "Um debugger",
      "Distributed tracing managed para rastrear latência entre serviços",
      "Um logger",
      "Um profiler de CPU",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Trace recolhe dados de latência distribuída para rastrear requests entre serviços GCP. Integra com OpenTelemetry e mostra trace waterfall, distribuição de latência e análise automática.",
  },
  {
    id: 529,
    category: "gcp",
    code: `# Compute Engine vs Cloud Run vs GKE\n\nCompute Engine:\n  → VMs completas, controle total\n  → Paga por uptime da VM\n\nCloud Run:\n  → Containers serverless\n  → Paga por request + tempo\n\nGKE:\n  → Kubernetes managed\n  → Paga por nodes do cluster`,
    question: "Quando escolher Cloud Run vs GKE?",
    options: [
      "Cloud Run é sempre melhor",
      "Cloud Run para workloads simples e stateless; GKE para orquestração complexa multi-container",
      "GKE é mais barato",
      "São iguais",
    ],
    correctIndex: 1,
    explanation:
      "Cloud Run é ideal para serviços stateless HTTP/gRPC sem complexidade de orquestração. GKE para cenários que precisam de networking complexo, stateful workloads, sidecar containers, ou service mesh.",
  },
  {
    id: 530,
    category: "gcp",
    code: `# Cloud Endpoints / API Gateway\nopenapi: 3.0.0\ninfo:\n  title: My API\n  version: 1.0.0\npaths:\n  /users:\n    get:\n      x-google-backend:\n        address: https://my-service.run.app\n      security:\n        - api_key: []\n      x-google-quota:\n        metricCosts:\n          read-requests: 1`,
    question: "O que é o API Gateway da GCP?",
    options: [
      "Um load balancer",
      "Managed API gateway com auth, rate limiting e monitoring baseado em OpenAPI",
      "Um DNS service",
      "Um CDN",
    ],
    correctIndex: 1,
    explanation:
      "API Gateway da GCP gere APIs baseado em specs OpenAPI. Fornece API key validation, JWT auth, rate limiting, monitoring e logging. Roteia para Cloud Run, Cloud Functions ou outros backends.",
  },

  // ========== AZURE (30) ==========
  {
    id: 601,
    category: "azure",
    code: `az group create --name myApp --location westeurope\naz webapp create --resource-group myApp \\\n  --plan myPlan --name myWebApp \\\n  --runtime "NODE:18-lts"`,
    question: "O que é um Resource Group no Azure?",
    options: [
      "Um tipo de VM",
      "Um container lógico para agrupar recursos relacionados",
      "Um serviço de base de dados",
      "Um load balancer",
    ],
    correctIndex: 1,
    explanation:
      "Resource Group agrupa recursos relacionados para gestão, controle de acesso e faturação. Eliminar o grupo elimina todos os recursos dentro dele.",
  },
  {
    id: 602,
    category: "azure",
    code: `// Azure Functions - HTTP Trigger\nmodule.exports = async function (context, req) {\n  const name = req.query.name || req.body?.name;\n  context.res = {\n    body: \`Hello, \${name}!\`\n  };\n};`,
    question: "O que são Azure Functions?",
    options: [
      "Métodos de uma classe",
      "Serverless compute event-driven (equivalente a AWS Lambda)",
      "APIs REST",
      "Stored procedures",
    ],
    correctIndex: 1,
    explanation:
      "Azure Functions é o serviço serverless do Azure. Suporta múltiplos triggers (HTTP, Timer, Queue, Blob) e bindings. Escala automaticamente e cobra por execução. Consumption plan escala a zero.",
  },
  {
    id: 603,
    category: "azure",
    code: `# Azure App Service\naz webapp up --name myapp \\\n  --resource-group myRG \\\n  --runtime "NODE:20-lts" \\\n  --sku B1`,
    question: "Qual a diferença entre App Service e Azure Functions?",
    options: [
      "São iguais",
      "App Service é PaaS always-on; Functions é serverless event-driven",
      "Functions é mais caro",
      "App Service não suporta Node.js",
    ],
    correctIndex: 1,
    explanation:
      "App Service é PaaS para web apps com instâncias always-on, ideal para aplicações web tradicionais. Functions é serverless, escala a zero, ideal para event-driven workloads. App Service tem custo fixo; Functions cobra por execução.",
  },
  {
    id: 604,
    category: "azure",
    code: `# Azure Cosmos DB\nconst { CosmosClient } = require('@azure/cosmos');\nconst client = new CosmosClient(endpoint, key);\n\nconst { resource } = await client\n  .database('mydb')\n  .container('users')\n  .items.create({\n    id: '1',\n    name: 'Ana',\n    partition: 'EU'\n  });`,
    question: "O que é o Cosmos DB?",
    options: [
      "DB relacional",
      "DB NoSQL globally distributed com múltiplos modelos de dados",
      "Cache service",
      "Data warehouse",
    ],
    correctIndex: 1,
    explanation:
      "Cosmos DB é uma DB NoSQL distribuída globalmente com latência <10ms. Suporta múltiplas APIs: SQL, MongoDB, Cassandra, Gremlin, Table. Oferece 5 níveis de consistency (strong a eventual).",
  },
  {
    id: 605,
    category: "azure",
    code: `# Azure Blob Storage\naz storage account create --name mystorage \\\n  --resource-group myRG \\\n  --sku Standard_LRS\n\n# Tiers: Hot, Cool, Cold, Archive\naz storage blob upload --account-name mystorage \\\n  --container-name uploads \\\n  --file ./photo.jpg \\\n  --name photos/photo.jpg`,
    question: "O que é o Azure Blob Storage?",
    options: [
      "File system",
      "Object storage com access tiers (Hot/Cool/Cold/Archive)",
      "Block storage",
      "Database",
    ],
    correctIndex: 1,
    explanation:
      "Blob Storage é object storage com tiers para otimizar custo: Hot (acesso frequente), Cool (30+ dias), Cold (90+ dias), Archive (180+ dias). Equivalente ao S3 da AWS.",
  },
  {
    id: 606,
    category: "azure",
    code: `# Azure SQL Database\naz sql server create --name myserver \\\n  --resource-group myRG \\\n  --admin-user admin \\\n  --admin-password SecurePass123!\n\naz sql db create --resource-group myRG \\\n  --server myserver \\\n  --name mydb \\\n  --service-objective S0 \\\n  --zone-redundant true`,
    question: "O que significa zone-redundant no Azure SQL?",
    options: [
      "Backup diário",
      "Replicas em múltiplas availability zones para alta disponibilidade",
      "Multi-region deployment",
      "Encriptação extra",
    ],
    correctIndex: 1,
    explanation:
      "Zone-redundant coloca replicas em diferentes Availability Zones na mesma região. Se uma zona falhar, o failover é automático sem perda de dados. Essencial para workloads de produção.",
  },
  {
    id: 607,
    category: "azure",
    code: `# Azure Key Vault\naz keyvault create --name myVault \\\n  --resource-group myRG\n\naz keyvault secret set --vault-name myVault \\\n  --name "DbPassword" \\\n  --value "SuperSecret123"\n\n// In code\nconst { SecretClient } = require('@azure/keyvault-secrets');\nconst secret = await client.getSecret('DbPassword');`,
    question: "O que é o Azure Key Vault?",
    options: [
      "Um password manager pessoal",
      "Serviço managed para secrets, chaves de encriptação e certificados",
      "Um IAM service",
      "Um cofre físico",
    ],
    correctIndex: 1,
    explanation:
      "Key Vault armazena e gere secrets, chaves criptográficas e certificados. Integra com Azure AD para controle de acesso. Suporta HSM (Hardware Security Module) para chaves de encriptação de alta segurança.",
  },
  {
    id: 608,
    category: "azure",
    code: `# Azure Container Apps\naz containerapp create \\\n  --name my-api \\\n  --resource-group myRG \\\n  --environment my-env \\\n  --image myregistry.azurecr.io/myapi:latest \\\n  --target-port 3000 \\\n  --ingress external \\\n  --min-replicas 0 \\\n  --max-replicas 10`,
    question: "O que são Azure Container Apps?",
    options: [
      "Kubernetes completo",
      "Plataforma serverless para containers com auto-scaling (baseada em Kubernetes/KEDA)",
      "Docker Compose no cloud",
      "VM com Docker",
    ],
    correctIndex: 1,
    explanation:
      "Container Apps é serverless para containers, construído sobre Kubernetes e KEDA. Escala de zero, suporta microservices, jobs e event-driven scaling. Mais simples que AKS, mais flexível que Functions.",
  },
  {
    id: 609,
    category: "azure",
    code: `# Azure Service Bus\nconst { ServiceBusClient } = require('@azure/service-bus');\nconst client = new ServiceBusClient(connectionString);\n\n// Send\nconst sender = client.createSender('orders');\nawait sender.sendMessages({ body: { orderId: 123 } });\n\n// Receive\nconst receiver = client.createReceiver('orders');\nconst messages = await receiver.receiveMessages(10);`,
    question: "Qual a diferença entre Service Bus e Storage Queue?",
    options: [
      "São iguais",
      "Service Bus é enterprise: ordering, sessions, dead-letter, topics. Storage Queue é simples e barato",
      "Storage Queue é mais rápido",
      "Service Bus é deprecated",
    ],
    correctIndex: 1,
    explanation:
      "Service Bus é messaging enterprise com FIFO ordering, sessions, duplicate detection, transactions e topics (pub/sub). Storage Queue é mais simples e barato para cenários básicos de queue.",
  },
  {
    id: 610,
    category: "azure",
    code: `# Azure Front Door\naz afd profile create --profile-name myFrontDoor \\\n  --resource-group myRG \\\n  --sku Standard_AzureFrontDoor\n\n# Features:\n# - Global load balancing\n# - CDN\n# - WAF\n# - SSL offloading\n# - URL rewriting`,
    question: "O que é o Azure Front Door?",
    options: [
      "Um firewall",
      "CDN + Global load balancer + WAF numa plataforma integrada",
      "Um DNS service",
      "Um reverse proxy simples",
    ],
    correctIndex: 1,
    explanation:
      "Front Door combina CDN global, load balancing, WAF e acceleration numa plataforma edge. Roteia tráfego para o backend mais próximo/saudável. Inclui SSL termination e caching.",
  },
  {
    id: 611,
    category: "azure",
    code: `# Azure Monitor + Application Insights\nconst appInsights = require('applicationinsights');\nappInsights.setup('<instrumentation-key>')\n  .setAutoCollectRequests(true)\n  .setAutoCollectPerformance(true)\n  .setAutoCollectExceptions(true)\n  .start();\n\n// Custom metric\nappInsights.defaultClient.trackMetric({\n  name: 'OrderProcessed',\n  value: 1\n});`,
    question: "O que é o Application Insights?",
    options: [
      "Um debugger",
      "APM (Application Performance Monitoring) com auto-instrumentation",
      "Um logger simples",
      "Um profiler",
    ],
    correctIndex: 1,
    explanation:
      "Application Insights é o serviço de APM do Azure. Coleta automaticamente requests, dependências, exceptions e performance. Suporta distributed tracing, live metrics, smart detection de anomalias e analytics.",
  },
  {
    id: 612,
    category: "azure",
    code: `# AKS (Azure Kubernetes Service)\naz aks create --resource-group myRG \\\n  --name myAKS \\\n  --node-count 3 \\\n  --enable-managed-identity \\\n  --enable-addons monitoring\n\naz aks get-credentials --resource-group myRG --name myAKS\nkubectl get nodes`,
    question: "O que é o AKS?",
    options: [
      "Um serviço de VMs",
      "O Kubernetes managed service do Azure",
      "Um container registry",
      "Um serviço de CI/CD",
    ],
    correctIndex: 1,
    explanation:
      "AKS é o Kubernetes managed do Azure. Gere o control plane gratuitamente, suporta auto-scaling, Azure AD integration, monitoring com Azure Monitor, e integra com ACR (Container Registry).",
  },
  {
    id: 613,
    category: "azure",
    code: `# Azure AD B2C (Auth)\n{\n  "authority": "https://myb2c.b2clogin.com/myb2c.onmicrosoft.com/B2C_1_signupsignin",\n  "clientId": "xxx-xxx-xxx",\n  "scopes": ["openid", "profile"]\n}`,
    question: "O que é o Azure AD B2C?",
    options: [
      "Active Directory para empresas",
      "Identity service para aplicações consumer (sign-up, login, social auth)",
      "Um VPN service",
      "Um SSO service interno",
    ],
    correctIndex: 1,
    explanation:
      "Azure AD B2C é um serviço de identidade para aplicações consumer. Suporta sign-up/login customizável, social identity providers (Google, Facebook), MFA, e políticas de acesso configuráveis.",
  },
  {
    id: 614,
    category: "azure",
    code: `# Azure Logic Apps\n{\n  "definition": {\n    "triggers": {\n      "When_a_new_email_arrives": {\n        "type": "ApiConnection",\n        "inputs": { "host": { "connection": { "name": "@parameters('$connections')['office365']" } } }\n      }\n    },\n    "actions": {\n      "Send_Teams_message": { ... },\n      "Create_Trello_card": { ... }\n    }\n  }\n}`,
    question: "O que são Azure Logic Apps?",
    options: [
      "Funções serverless",
      "Workflows de integração low-code com 400+ connectors",
      "Apps mobile",
      "Web apps",
    ],
    correctIndex: 1,
    explanation:
      "Logic Apps são workflows visuais low-code para integrar serviços. 400+ connectors (Office 365, Salesforce, SAP, etc.). Ideal para automação de processos empresariais sem código. Equivalente a AWS Step Functions + EventBridge.",
  },
  {
    id: 615,
    category: "azure",
    code: `# Azure Virtual Network\naz network vnet create --name myVNet \\\n  --resource-group myRG \\\n  --address-prefix 10.0.0.0/16\n\naz network vnet subnet create --name webSubnet \\\n  --vnet-name myVNet \\\n  --address-prefix 10.0.1.0/24\n\naz network vnet subnet create --name dbSubnet \\\n  --vnet-name myVNet \\\n  --address-prefix 10.0.2.0/24 \\\n  --service-endpoints Microsoft.Sql`,
    question: "O que são Service Endpoints no Azure VNet?",
    options: [
      "APIs públicas",
      "Conexões privadas da VNet a serviços Azure (SQL, Storage, etc.)",
      "DNS endpoints",
      "Load balancer endpoints",
    ],
    correctIndex: 1,
    explanation:
      "Service Endpoints permitem aceder a serviços Azure (SQL DB, Storage, Key Vault) via rede privada do Azure, sem tráfego passar pela internet pública. Melhor segurança e menor latência.",
  },
  {
    id: 616,
    category: "azure",
    code: `# Azure Cache for Redis\naz redis create --name myCache \\\n  --resource-group myRG \\\n  --sku Standard \\\n  --vm-size C1\n\n// In code\nconst redis = require('redis');\nconst client = redis.createClient({ url: 'rediss://myCache.redis.cache.windows.net:6380' });\nawait client.set('session:123', JSON.stringify(data), { EX: 3600 });`,
    question: "Quando usar Azure Cache for Redis?",
    options: [
      "Como base de dados principal",
      "Para caching, session storage e real-time messaging para reduzir latência",
      "Para file storage",
      "Para backup",
    ],
    correctIndex: 1,
    explanation:
      "Azure Cache for Redis é usado para: caching (reduzir carga na DB), session storage (state partilhado entre instâncias), pub/sub messaging, e rate limiting. Latência sub-millisecond.",
  },
  {
    id: 617,
    category: "azure",
    code: `# Azure Event Grid\naz eventgrid event-subscription create \\\n  --name blob-events \\\n  --source-resource-id /subscriptions/.../storageAccounts/myStorage \\\n  --endpoint https://my-function.azurewebsites.net/api/processBlob \\\n  --included-event-types Microsoft.Storage.BlobCreated`,
    question: "O que é o Azure Event Grid?",
    options: [
      "Um scheduler",
      "Event routing service que conecta event sources a handlers",
      "Um message queue",
      "Um data pipeline",
    ],
    correctIndex: 1,
    explanation:
      "Event Grid é um serviço de routing de eventos fully managed. Conecta fontes de eventos (Blob Storage, Resource Groups, custom) a handlers (Functions, Logic Apps, WebHooks). Near real-time delivery com retry.",
  },
  {
    id: 618,
    category: "azure",
    code: `# Azure Regions and Availability Zones\n\nRegion: West Europe (Amsterdam)\n  AZ 1: Data center cluster A\n  AZ 2: Data center cluster B\n  AZ 3: Data center cluster C\n\n# Paired Region: North Europe (Dublin)\n# For disaster recovery`,
    question: "O que são Paired Regions no Azure?",
    options: [
      "Regiões mais baratas",
      "Duas regiões emparelhadas para disaster recovery com replicação prioritária",
      "Regiões com o mesmo preço",
      "Regiões no mesmo continente",
    ],
    correctIndex: 1,
    explanation:
      "Paired Regions são duas regiões Azure emparelhadas para DR. Atualizações são sequenciais (não simultâneas), failover é prioritário, e alguns serviços têm geo-replicação automática para a região paired.",
  },
  {
    id: 619,
    category: "azure",
    code: `# Azure Policy\n{\n  "if": {\n    "allOf": [\n      { "field": "type", "equals": "Microsoft.Storage/storageAccounts" },\n      { "field": "Microsoft.Storage/storageAccounts/allowBlobPublicAccess", "equals": true }\n    ]\n  },\n  "then": {\n    "effect": "deny"\n  }\n}`,
    question: "O que é o Azure Policy?",
    options: [
      "Política de passwords",
      "Governance: define e enforce regras para recursos Azure",
      "IAM roles",
      "Network rules",
    ],
    correctIndex: 1,
    explanation:
      "Azure Policy permite definir e enforce regras (policies) nos recursos. Pode deny criação de recursos não conformes, audit compliance, ou remediar automaticamente. Essencial para governance e compliance.",
  },
  {
    id: 620,
    category: "azure",
    code: `# Managed Identity\naz webapp identity assign --name myApp --resource-group myRG\n\n// No code - sem secrets!\nconst { DefaultAzureCredential } = require('@azure/identity');\nconst credential = new DefaultAzureCredential();\nconst client = new SecretClient(vaultUrl, credential);`,
    question: "O que é uma Managed Identity?",
    options: [
      "Uma conta de utilizador",
      "Identidade gerida pelo Azure que elimina a necessidade de secrets no código",
      "Um service principal manual",
      "Uma API key",
    ],
    correctIndex: 1,
    explanation:
      "Managed Identity é uma identidade automática para recursos Azure. Elimina secrets no código — o Azure gere as credenciais automaticamente. System-assigned (ligada ao recurso) ou User-assigned (reutilizável).",
  },
  {
    id: 621,
    category: "azure",
    code: `# Azure Functions - Durable Functions (Orchestration)\nconst df = require('durable-functions');\n\nmodule.exports = df.orchestrator(function* (context) {\n  const order = context.df.getInput();\n  \n  yield context.df.callActivity('ValidateOrder', order);\n  yield context.df.callActivity('ProcessPayment', order);\n  yield context.df.callActivity('SendConfirmation', order);\n  \n  return 'Order completed';\n});`,
    question: "O que são Durable Functions?",
    options: [
      "Functions que duram mais tempo",
      "Extensão para orquestrar workflows stateful em Azure Functions",
      "Functions com persistent storage",
      "Functions com retry automático",
    ],
    correctIndex: 1,
    explanation:
      "Durable Functions permitem escrever workflows stateful em Azure Functions usando patterns como chaining, fan-out/fan-in, human interaction e monitoring. Equivalente a Step Functions mas dentro do código.",
  },
  {
    id: 622,
    category: "azure",
    code: `# Azure Static Web Apps\naz staticwebapp create \\\n  --name myStaticApp \\\n  --resource-group myRG \\\n  --source https://github.com/user/repo \\\n  --branch main \\\n  --app-location "/" \\\n  --api-location "api" \\\n  --output-location "dist"`,
    question: "O que são Azure Static Web Apps?",
    options: [
      "Um file hosting",
      "Hosting managed para SPAs com API serverless integrada e CI/CD automático",
      "Um CMS",
      "Um CDN simples",
    ],
    correctIndex: 1,
    explanation:
      "Static Web Apps hospeda frontends estáticos (React, Vue, Angular) com Azure Functions como API backend. Inclui CI/CD automático do GitHub, staging environments por PR, e auth integrada.",
  },
  {
    id: 623,
    category: "azure",
    code: `# Azure Traffic Manager\naz network traffic-manager profile create \\\n  --name myTM \\\n  --resource-group myRG \\\n  --routing-method Performance\n\n# Routing methods:\n# - Priority: failover\n# - Weighted: % distribution\n# - Performance: nearest region\n# - Geographic: by user location\n# - Subnet: by client IP range`,
    question: "O que é o Azure Traffic Manager?",
    options: [
      "Um firewall",
      "DNS-based global load balancer com múltiplos routing methods",
      "Um CDN",
      "Um VPN",
    ],
    correctIndex: 1,
    explanation:
      "Traffic Manager é um load balancer DNS-based que distribui tráfego entre regiões. Performance routing envia utilizadores para o endpoint mais próximo. Priority para failover ativo/passivo.",
  },
  {
    id: 624,
    category: "azure",
    code: `# Azure Bicep (IaC native)\nresource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {\n  name: 'mystorage'\n  location: resourceGroup().location\n  sku: { name: 'Standard_LRS' }\n  kind: 'StorageV2'\n}\n\nresource functionApp 'Microsoft.Web/sites@2023-01-01' = {\n  name: 'myfuncapp'\n  location: resourceGroup().location\n  kind: 'functionapp'\n}`,
    question: "O que é o Azure Bicep?",
    options: [
      "Um CLI",
      "Linguagem declarativa IaC nativa do Azure (substitui ARM templates JSON)",
      "Um SDK",
      "Um framework de testes",
    ],
    correctIndex: 1,
    explanation:
      "Bicep é a linguagem IaC nativa do Azure. Mais legível e concisa que ARM JSON templates, com type safety, modules e compilação para ARM. Equivalente Azure-native ao Terraform.",
  },
  {
    id: 625,
    category: "azure",
    code: `# Azure Functions - Timer Trigger\nmodule.exports = async function (context, myTimer) {\n  if (myTimer.isPastDue) {\n    context.log('Timer is past due!');\n  }\n  await generateDailyReport();\n};\n\n// function.json\n{\n  "bindings": [{\n    "type": "timerTrigger",\n    "direction": "in",\n    "schedule": "0 0 8 * * *"\n  }]\n}`,
    question: "O que faz o schedule '0 0 8 * * *'?",
    options: [
      "A cada 8 horas",
      "Todos os dias às 8:00 UTC",
      "Ao 8º dia do mês",
      "A cada 8 minutos",
    ],
    correctIndex: 1,
    explanation:
      "Azure Functions usa cron com 6 campos (inclui segundos). `0 0 8 * * *` = segundo 0, minuto 0, hora 8, todos os dias. Executa diariamente às 8:00 UTC.",
  },
  {
    id: 626,
    category: "azure",
    code: `# Azure Container Registry (ACR)\naz acr create --name myRegistry \\\n  --resource-group myRG \\\n  --sku Standard\n\naz acr build --registry myRegistry \\\n  --image myapp:latest .`,
    question: "O que diferencia 'az acr build' de 'docker build'?",
    options: [
      "São iguais",
      "ACR build compila a imagem na cloud sem precisar de Docker local",
      "ACR build é mais lento",
      "ACR build não suporta Dockerfile",
    ],
    correctIndex: 1,
    explanation:
      "`az acr build` faz o build na cloud (ACR Tasks), eliminando a necessidade de ter Docker instalado localmente. Envia o contexto de build para a cloud, compila e armazena a imagem diretamente no registry.",
  },
  {
    id: 627,
    category: "azure",
    code: `# Azure Cost Management\naz consumption budget create \\\n  --budget-name monthly-limit \\\n  --amount 500 \\\n  --time-grain Monthly \\\n  --start-date 2024-01-01 \\\n  --end-date 2024-12-31 \\\n  --resource-group myRG`,
    question: "O que é o Azure Cost Management?",
    options: [
      "Um pricing calculator",
      "Ferramenta para monitorizar, analisar e otimizar custos cloud",
      "Um billing portal",
      "Um serviço de descontos",
    ],
    correctIndex: 1,
    explanation:
      "Cost Management fornece cost analysis, budgets com alertas, recommendations de otimização e cost allocation por tags/resource groups. Essencial para governar gastos e evitar surpresas na fatura.",
  },
  {
    id: 628,
    category: "azure",
    code: `# Azure Network Security Group (NSG)\naz network nsg rule create \\\n  --resource-group myRG \\\n  --nsg-name myNSG \\\n  --name AllowHTTPS \\\n  --priority 100 \\\n  --source-address-prefixes '*' \\\n  --destination-port-ranges 443 \\\n  --access Allow \\\n  --protocol Tcp`,
    question: "O que é um NSG no Azure?",
    options: [
      "Um load balancer",
      "Firewall de rede que filtra tráfego com regras de allow/deny",
      "Um DNS resolver",
      "Um proxy",
    ],
    correctIndex: 1,
    explanation:
      "NSG (Network Security Group) é um firewall stateful que filtra tráfego de rede com regras baseadas em source, destination, port e protocol. Associado a subnets ou NICs para controlar tráfego inbound/outbound.",
  },
  {
    id: 629,
    category: "azure",
    code: `# Azure Subscription hierarchy\n\nManagement Group\n  └── Subscription (billing boundary)\n      └── Resource Group\n          └── Resources (VMs, DBs, Functions, etc.)\n\n# Multiple subscriptions for:\n# - Dev/Staging/Production isolation\n# - Department billing\n# - Compliance boundaries`,
    question: "O que é uma Azure Subscription?",
    options: [
      "Uma licença de software",
      "Uma fronteira de billing e acesso que contém resource groups",
      "Um plano de suporte",
      "Uma região",
    ],
    correctIndex: 1,
    explanation:
      "Uma Subscription é a unidade de billing e gestão de acesso no Azure. Contém Resource Groups e recursos. Organizações usam múltiplas subscriptions para separar ambientes, departamentos e compliance boundaries.",
  },
  {
    id: 630,
    category: "azure",
    code: `# Azure Availability Sets vs Availability Zones\n\nAvailability Set:\n  - VMs distribuídas por fault/update domains DENTRO de um datacenter\n  - 99.95% SLA\n\nAvailability Zones:\n  - VMs distribuídas por datacenters DIFERENTES na mesma região\n  - 99.99% SLA\n\nRegion Pairs:\n  - VMs em regiões diferentes\n  - Disaster recovery`,
    question: "Qual oferece maior disponibilidade?",
    options: [
      "Availability Sets",
      "Availability Zones (datacenters separados, 99.99% SLA)",
      "São iguais",
      "Region Pairs",
    ],
    correctIndex: 1,
    explanation:
      "Availability Zones distribuem recursos por datacenters fisicamente separados (com energia, rede e cooling independentes) na mesma região. Protegem contra falha de um datacenter inteiro, com 99.99% SLA.",
  },

  // ========== AZURE DEVOPS (30) ==========
  {
    id: 701,
    category: "azure-devops",
    code: `# azure-pipelines.yml\ntrigger:\n  branches:\n    include:\n      - main\n      - develop\n\npool:\n  vmImage: 'ubuntu-latest'\n\nsteps:\n  - task: NodeTool@0\n    inputs:\n      versionSpec: '20.x'\n  - script: npm ci\n  - script: npm test\n  - script: npm run build`,
    question: "O que é um Azure Pipeline?",
    options: [
      "Um data pipeline",
      "CI/CD automation que compila, testa e deploya código",
      "Um network pipeline",
      "Um log pipeline",
    ],
    correctIndex: 1,
    explanation:
      "Azure Pipelines é o serviço de CI/CD do Azure DevOps. Suporta YAML e UI clássica, múltiplos OS (Linux, Windows, Mac), e integra com Azure, AWS, GCP e qualquer cloud.",
  },
  {
    id: 702,
    category: "azure-devops",
    code: `# Multi-stage pipeline\nstages:\n  - stage: Build\n    jobs:\n      - job: BuildJob\n        steps:\n          - script: npm ci && npm run build\n  \n  - stage: Test\n    dependsOn: Build\n    jobs:\n      - job: UnitTests\n        steps:\n          - script: npm test\n      - job: E2ETests\n        steps:\n          - script: npm run test:e2e\n  \n  - stage: Deploy\n    dependsOn: Test\n    condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))`,
    question: "O que são stages num Azure Pipeline?",
    options: [
      "Branches do repositório",
      "Fases lógicas do pipeline (Build → Test → Deploy) com dependências",
      "Ambientes de deploy",
      "Tipos de testes",
    ],
    correctIndex: 1,
    explanation:
      "Stages organizam o pipeline em fases lógicas. Cada stage pode ter múltiplos jobs. `dependsOn` define a ordem. `condition` permite execução condicional (ex: deploy só na branch main).",
  },
  {
    id: 703,
    category: "azure-devops",
    code: `# Variable groups and templates\nvariables:\n  - group: 'production-secrets'\n  - name: NODE_ENV\n    value: production\n\nsteps:\n  - script: echo $(NODE_ENV)\n  - script: echo $(API_KEY)  # from variable group`,
    question: "O que são Variable Groups no Azure DevOps?",
    options: [
      "Variáveis de ambiente do OS",
      "Conjuntos de variáveis reutilizáveis entre pipelines, podendo incluir secrets",
      "Grupos de recursos",
      "Tags de build",
    ],
    correctIndex: 1,
    explanation:
      "Variable Groups são coleções de variáveis (incluindo secrets) que podem ser partilhadas entre múltiplos pipelines. Podem ser ligadas ao Azure Key Vault para secrets managed. Referenciadas como `- group: 'name'`.",
  },
  {
    id: 704,
    category: "azure-devops",
    code: `# Azure Boards - Work Items\n\nEpic: User Authentication\n  ├── Feature: Login/Register\n  │   ├── User Story: As a user, I want to login with email\n  │   │   ├── Task: Create login form UI\n  │   │   ├── Task: Implement auth API\n  │   │   └── Task: Add validation\n  │   └── User Story: As a user, I want to login with Google\n  └── Feature: Password Reset\n      └── User Story: As a user, I want to reset my password`,
    question: "Qual é a hierarquia de work items no Azure Boards?",
    options: [
      "Task → Story → Feature",
      "Epic → Feature → User Story → Task/Bug",
      "Story → Epic → Task",
      "Bug → Feature → Epic",
    ],
    correctIndex: 1,
    explanation:
      "Azure Boards usa: Epic (iniciativa grande) → Feature (funcionalidade) → User Story (requisito do utilizador) → Task (trabalho técnico) / Bug. Esta hierarquia permite planear desde estratégia até execução.",
  },
  {
    id: 705,
    category: "azure-devops",
    code: "# Pipeline Templates\n# templates/build.yml\nparameters:\n  - name: nodeVersion\n    type: string\n    default: '20'\n\nsteps:\n  - task: NodeTool@0\n    inputs:\n      versionSpec: '${{ parameters.nodeVersion }}'\n  - script: npm ci\n  - script: npm run build\n\n# main pipeline\nstages:\n  - stage: Build\n    jobs:\n      - job: Build\n        steps:\n          - template: templates/build.yml\n            parameters:\n              nodeVersion: '20'",
    question: "Para que servem Pipeline Templates?",
    options: [
      "Gerar código automaticamente",
      "Reutilizar configurações de pipeline entre múltiplos projetos/pipelines",
      "Criar templates de email",
      "Definir templates de work items",
    ],
    correctIndex: 1,
    explanation:
      "Templates permitem definir steps, jobs ou stages reutilizáveis com parâmetros. Reduzem duplicação, standardizam pipelines e facilitam manutenção. Podem ser referenciados do mesmo repo ou de repos externos.",
  },
  {
    id: 706,
    category: "azure-devops",
    code: `# Service Connections\n# Settings → Service connections → New\n\n# Types:\n# - Azure Resource Manager (deploy to Azure)\n# - Docker Registry (push images)\n# - Kubernetes (deploy to K8s)\n# - GitHub (source code)\n# - npm (publish packages)\n# - SSH (remote servers)`,
    question: "O que são Service Connections no Azure DevOps?",
    options: [
      "Conexões de rede",
      "Credenciais seguras para conectar pipelines a serviços externos",
      "APIs internas",
      "Webhooks",
    ],
    correctIndex: 1,
    explanation:
      "Service Connections armazenam credenciais de forma segura para conectar pipelines a serviços externos (Azure, Docker Hub, K8s, GitHub). Configuradas na UI e referenciadas por nome nos pipelines YAML.",
  },
  {
    id: 707,
    category: "azure-devops",
    code: `# Environments with approvals\nstages:\n  - stage: DeployProd\n    jobs:\n      - deployment: DeployWeb\n        environment: 'production'\n        strategy:\n          runOnce:\n            deploy:\n              steps:\n                - script: echo "Deploying to production"`,
    question: "O que são Environments no Azure DevOps?",
    options: [
      "Variáveis de ambiente",
      "Targets de deployment com approval gates, checks e histórico",
      "VMs para build",
      "Branches protegidas",
    ],
    correctIndex: 1,
    explanation:
      "Environments representam targets de deployment (production, staging). Suportam approval gates (manual approval antes do deploy), checks automáticos, e mantêm histórico de deployments. Configurados na UI.",
  },
  {
    id: 708,
    category: "azure-devops",
    code: `# Azure Artifacts - npm feed\n# .npmrc\nregistry=https://pkgs.dev.azure.com/myOrg/_packaging/myFeed/npm/registry/\nalways-auth=true\n\n# Publish\nnpm publish --registry https://pkgs.dev.azure.com/myOrg/_packaging/myFeed/npm/registry/`,
    question: "O que é o Azure Artifacts?",
    options: [
      "Build outputs",
      "Package management: feeds privados para npm, NuGet, Maven, Python, etc.",
      "File storage",
      "Container registry",
    ],
    correctIndex: 1,
    explanation:
      "Azure Artifacts hospeda feeds privados de packages (npm, NuGet, Maven, Python, Universal). Permite partilhar packages internamente entre equipas, com versionamento, upstream sources e retention policies.",
  },
  {
    id: 709,
    category: "azure-devops",
    code: `# Pull Request Policies\n# Branch policies for 'main':\n\n# 1. Require minimum reviewers: 2\n# 2. Check for linked work items\n# 3. Check for comment resolution\n# 4. Build validation: CI pipeline must pass\n# 5. Automatically include reviewers: team-leads`,
    question: "O que são Branch Policies no Azure Repos?",
    options: [
      "Regras de naming para branches",
      "Regras enforced para proteger branches (reviews, builds, work items)",
      "Políticas de merge",
      "Regras de commit message",
    ],
    correctIndex: 1,
    explanation:
      "Branch Policies protegem branches importantes. Podem exigir: mínimo de reviewers, CI pipeline verde, work items ligados, resolução de comentários, e reviewers automáticos. PRs para branches protegidas devem cumprir todas as policies.",
  },
  {
    id: 710,
    category: "azure-devops",
    code: `# Azure Repos - Git\naz repos create --name my-service \\\n  --org https://dev.azure.com/myOrg \\\n  --project myProject\n\n# Multiple repos per project\n# - frontend-app\n# - backend-api\n# - shared-libs\n# - infrastructure`,
    question: "Como organiza o Azure Repos os repositórios?",
    options: [
      "Um repo por organização",
      "Múltiplos repos Git (ou TFVC) dentro de cada projeto",
      "Um repo por pipeline",
      "Repos são externos",
    ],
    correctIndex: 1,
    explanation:
      "Azure Repos suporta múltiplos repositórios Git dentro de cada projeto. Permite organizar por serviço/componente. Também suporta TFVC (centralizado) para projetos legacy. Integra nativamente com Pipelines e Boards.",
  },
  {
    id: 711,
    category: "azure-devops",
    code: `# Sprint Planning in Azure Boards\n\nSprint 1 (2 weeks):\n  Capacity: 3 devs × 6h/day × 10 days = 180h\n  \n  Committed:\n  ├── Story: Login (8 pts) - 24h\n  ├── Story: Dashboard (13 pts) - 40h\n  ├── Story: API Auth (5 pts) - 16h\n  └── Bug: Fix crash (3 pts) - 8h\n  \n  Velocity: ~30 story points/sprint`,
    question: "O que é Velocity no Azure Boards?",
    options: [
      "Velocidade do pipeline",
      "Média de story points completados por sprint (capacidade da equipa)",
      "Tempo de deploy",
      "Número de bugs",
    ],
    correctIndex: 1,
    explanation:
      "Velocity é a média de story points (ou work items) completados por sprint. Ajuda a prever quanto trabalho a equipa consegue fazer em sprints futuros. Azure Boards calcula e mostra gráficos de velocity automaticamente.",
  },
  {
    id: 712,
    category: "azure-devops",
    code: `# Deployment strategies\njobs:\n  - deployment: DeployWeb\n    environment: 'production'\n    strategy:\n      canary:\n        increments: [10, 50]\n        deploy:\n          steps:\n            - script: echo "Deploy canary"\n        on:\n          success:\n            steps:\n              - script: echo "Canary successful"\n          failure:\n            steps:\n              - script: echo "Rollback!"`,
    question: "Que estratégias de deployment suporta Azure Pipelines?",
    options: [
      "Apenas runOnce",
      "runOnce, rolling, canary — com hooks para sucesso e falha",
      "Apenas blue-green",
      "Apenas manual",
    ],
    correctIndex: 1,
    explanation:
      "Azure Pipelines suporta: runOnce (deploy simples), rolling (atualiza instâncias gradualmente), e canary (percentagem progressiva). Cada estratégia tem hooks: preDeploy, deploy, routeTraffic, postRouteTraffic, on:success/failure.",
  },
  {
    id: 713,
    category: "azure-devops",
    code: `# Test Plans - Manual + Automated\n\n# Test Suite:\n#   Test Case 1: Verify login with valid credentials\n#     Steps:\n#       1. Navigate to login page\n#       2. Enter valid email and password\n#       3. Click 'Login'\n#     Expected: User is redirected to dashboard\n#   \n#   Test Case 2: Verify login with invalid credentials\n#   Test Case 3: Verify password reset flow`,
    question: "O que é o Azure Test Plans?",
    options: [
      "Um test runner",
      "Ferramenta para gestão de testes manuais e exploratórios com rastreabilidade",
      "Um framework de unit tests",
      "Um load testing tool",
    ],
    correctIndex: 1,
    explanation:
      "Test Plans permite criar, gerir e executar testes manuais e exploratórios. Oferece test suites, test cases com steps, rastreabilidade para work items, e relatórios de cobertura de testes. Complementa testes automatizados.",
  },
  {
    id: 714,
    category: "azure-devops",
    code: `# Wiki in Azure DevOps\n# Types:\n# 1. Project Wiki (built-in)\n# 2. Code Wiki (from Git repo)\n\n# Wiki structure:\n/wiki\n  ├── Home.md\n  ├── Architecture\n  │   ├── Overview.md\n  │   ├── API-Design.md\n  │   └── Database-Schema.md\n  ├── Onboarding\n  │   ├── Setup.md\n  │   └── Coding-Standards.md\n  └── Runbooks\n      ├── Deploy.md\n      └── Incident-Response.md`,
    question: "Que tipos de Wiki suporta o Azure DevOps?",
    options: [
      "Apenas Markdown files",
      "Project Wiki (built-in) e Code Wiki (diretamente de um repo Git)",
      "Apenas external wikis",
      "SharePoint integration",
    ],
    correctIndex: 1,
    explanation:
      "Azure DevOps suporta dois tipos de wiki: Project Wiki (criada na UI, versionada internamente) e Code Wiki (publica markdown diretamente de uma pasta de um repo Git). Ambas suportam Markdown, Mermaid diagrams e TOC.",
  },
  {
    id: 715,
    category: "azure-devops",
    code: `# Secure files and library\n# Library → Secure files\n# Upload: certificates, SSH keys, provisioning profiles\n\nsteps:\n  - task: DownloadSecureFile@1\n    inputs:\n      secureFile: 'deploy-key.pem'\n  - script: |\n      chmod 600 $(Agent.TempDirectory)/deploy-key.pem\n      ssh -i $(Agent.TempDirectory)/deploy-key.pem user@server`,
    question: "O que são Secure Files no Azure DevOps?",
    options: [
      "Ficheiros encriptados no repo",
      "Ficheiros sensíveis (certificados, keys) armazenados de forma segura na Library",
      "Ficheiros de configuração",
      "Build artifacts",
    ],
    correctIndex: 1,
    explanation:
      "Secure Files armazenam ficheiros sensíveis (certificados, SSH keys, provisioning profiles) na Library do Azure DevOps. São encriptados, com controle de acesso, e disponibilizados aos pipelines via task DownloadSecureFile.",
  },
  {
    id: 716,
    category: "azure-devops",
    code: `# Agent pools\n\n# Microsoft-hosted agents:\npool:\n  vmImage: 'ubuntu-latest'  # or windows-latest, macos-latest\n\n# Self-hosted agents:\npool:\n  name: 'my-custom-pool'\n  demands:\n    - docker\n    - Agent.OS -equals Linux`,
    question: "Qual a diferença entre hosted e self-hosted agents?",
    options: [
      "São iguais",
      "Hosted: managed pela Microsoft, fresh cada run. Self-hosted: máquinas próprias, persistentes",
      "Self-hosted é gratuito",
      "Hosted é mais rápido",
    ],
    correctIndex: 1,
    explanation:
      "Microsoft-hosted agents são VMs geridas pela MS, criadas fresh para cada job (clean environment). Self-hosted agents são máquinas que tu geres — podem ter ferramentas pré-instaladas, acesso a rede privada, e são persistentes entre runs.",
  },
  {
    id: 717,
    category: "azure-devops",
    code: `# Pipeline triggers\ntrigger:\n  branches:\n    include: ['main', 'release/*']\n    exclude: ['release/old*']\n  paths:\n    include: ['src/*']\n    exclude: ['src/docs/*']\n\npr:\n  branches:\n    include: ['main']\n  autoCancel: true\n  drafts: false`,
    question: "O que faz autoCancel em PR triggers?",
    options: [
      "Cancela o PR",
      "Cancela runs anteriores do mesmo PR quando novo commit é pushed",
      "Auto-merge do PR",
      "Cancela o pipeline após timeout",
    ],
    correctIndex: 1,
    explanation:
      "`autoCancel: true` cancela automaticamente runs de validação anteriores quando um novo commit é pushed ao mesmo PR. Poupa recursos e mostra apenas o resultado do código mais recente. `drafts: false` ignora draft PRs.",
  },
  {
    id: 718,
    category: "azure-devops",
    code: `# Dashboards in Azure DevOps\n\n# Widgets available:\n# - Burndown chart (sprint progress)\n# - Velocity (points/sprint)\n# - Build history (pass/fail trend)\n# - Test results trend\n# - Pull request metrics\n# - Work item query results\n# - Deployment frequency\n# - Code coverage trend`,
    question: "O que são Dashboards no Azure DevOps?",
    options: [
      "Páginas de configuração",
      "Painéis customizáveis com widgets para visualizar métricas de projeto",
      "Relatórios de custos",
      "Logs de pipeline",
    ],
    correctIndex: 1,
    explanation:
      "Dashboards são painéis configuráveis com widgets que mostram métricas em tempo real: burndown, velocity, build/test trends, deployment frequency, etc. Cada equipa pode ter os seus dashboards personalizados.",
  },
  {
    id: 719,
    category: "azure-devops",
    code: `# Release Gates (automated checks)\n\n# Pre-deployment gates:\n# 1. Azure Monitor alerts (no active alerts)\n# 2. Work item query (no blocking bugs)\n# 3. REST API call (health check)\n# 4. Azure Policy compliance\n\n# Evaluation:\n# - Check every 5 minutes\n# - Timeout: 1 hour\n# - Minimum duration: 15 minutes`,
    question: "O que são Release Gates?",
    options: [
      "Aprovações manuais",
      "Checks automáticos que devem passar antes/após deployment",
      "Feature flags",
      "Branch protections",
    ],
    correctIndex: 1,
    explanation:
      "Gates são validações automáticas que devem passar antes (pre-deployment) ou após (post-deployment) um deploy. Verificam alerts, bugs, APIs de saúde, compliance. Avaliados periodicamente até passar ou timeout.",
  },
  {
    id: 720,
    category: "azure-devops",
    code: `# Azure DevOps REST API\ncurl -u :$(PAT) \\\n  "https://dev.azure.com/myOrg/myProject/_apis/wit/workitems?ids=1,2,3&api-version=7.0"\n\n# Create work item\ncurl -X POST \\\n  -H "Content-Type: application/json-patch+json" \\\n  -d '[{"op":"add","path":"/fields/System.Title","value":"New Bug"}]' \\\n  "https://dev.azure.com/myOrg/myProject/_apis/wit/workitems/$Bug?api-version=7.0"`,
    question: "O que permite a REST API do Azure DevOps?",
    options: [
      "Apenas leitura",
      "Automação completa: criar/ler/atualizar work items, pipelines, repos, etc.",
      "Apenas gestão de utilizadores",
      "Apenas triggers de pipeline",
    ],
    correctIndex: 1,
    explanation:
      "A REST API permite automação completa do Azure DevOps: CRUD de work items, trigger de pipelines, gestão de repos, queries, dashboards, etc. Autenticação via PAT (Personal Access Token) ou OAuth.",
  },
  {
    id: 721,
    category: "azure-devops",
    code: `# YAML pipeline conditions\nsteps:\n  - script: npm run deploy:staging\n    condition: eq(variables['Build.SourceBranch'], 'refs/heads/develop')\n  \n  - script: npm run deploy:prod\n    condition: |\n      and(\n        succeeded(),\n        eq(variables['Build.SourceBranch'], 'refs/heads/main'),\n        ne(variables['Build.Reason'], 'PullRequest')\n      )`,
    question: "Como funcionam conditions em Azure Pipelines?",
    options: [
      "São if/else de programação",
      "Expressões que controlam se um step/job/stage executa baseado em variáveis",
      "Filtros de ficheiros",
      "Branch protections",
    ],
    correctIndex: 1,
    explanation:
      "Conditions usam funções como `eq()`, `ne()`, `and()`, `or()`, `succeeded()`, `failed()` sobre variáveis de sistema e custom. Controlam execução condicional em qualquer nível (step, job, stage).",
  },
  {
    id: 722,
    category: "azure-devops",
    code: `# Task groups vs Templates\n\n# Task Group (Classic UI):\n# - Created from existing tasks in classic editor\n# - Parameterized\n# - Versioned\n# - Shared within project\n\n# YAML Templates:\n# - Defined in code (YAML files)\n# - Can be in separate repos\n# - More flexible (steps, jobs, stages)\n# - Cross-project sharing`,
    question: "Qual a diferença entre Task Groups e YAML Templates?",
    options: [
      "São iguais",
      "Task Groups são para classic pipelines (UI); Templates são YAML-based e mais flexíveis",
      "Templates são deprecated",
      "Task Groups são mais modernos",
    ],
    correctIndex: 1,
    explanation:
      "Task Groups são a forma de reutilizar no classic (UI) editor. YAML Templates são mais poderosos: podem definir steps, jobs ou stages completos, suportam parâmetros tipados, e podem viver em repos separados para cross-project sharing.",
  },
  {
    id: 723,
    category: "azure-devops",
    code: `# Azure DevOps Extensions\n# Marketplace: marketplace.visualstudio.com\n\n# Popular extensions:\n# - SonarQube/SonarCloud (code quality)\n# - Snyk (security scanning)\n# - Terraform tasks\n# - Slack integration\n# - AWS Toolkit\n# - Docker tasks\n# - Test reporting`,
    question: "O que são Extensions no Azure DevOps?",
    options: [
      "Plugins de IDE",
      "Add-ons do marketplace que adicionam funcionalidades (tasks, widgets, hubs)",
      "APIs externas",
      "Templates de projetos",
    ],
    correctIndex: 1,
    explanation:
      "Extensions são add-ons do Azure DevOps Marketplace que estendem a plataforma: novas pipeline tasks, widgets de dashboard, hubs customizados, integrações com terceiros. Podem ser instaladas por admins da organização.",
  },
  {
    id: 724,
    category: "azure-devops",
    code: `# Queries in Azure Boards\n\n# Flat query: Simple list\n# Tree query: Parent-child hierarchy\n# Direct links: Related work items\n\n# Example query:\n# Work Item Type = Bug\n# AND State = Active\n# AND Area Path = MyProject\\Backend\n# AND Priority <= 2\n# AND Assigned To = @Me`,
    question: "Para que servem Queries no Azure Boards?",
    options: [
      "Queries SQL à base de dados",
      "Filtrar e pesquisar work items com critérios avançados",
      "Queries a APIs",
      "Pesquisa de código",
    ],
    correctIndex: 1,
    explanation:
      "Queries permitem filtrar work items por critérios (tipo, estado, sprint, assignee, tags, etc.). Podem ser flat (lista), tree (hierarquia) ou direct links (relações). Resultados podem alimentar dashboards e notificações.",
  },
  {
    id: 725,
    category: "azure-devops",
    code: `# Retention policies\n\n# Pipeline runs:\n# - Keep last 30 days of runs\n# - Keep last 10 runs per pipeline\n# - Always keep runs tagged as 'release'\n\n# Artifacts:\n# - Default retention: 30 days\n# - Can be extended per artifact\n# - Attached to release: kept with release\n\n# Test results:\n# - Default: 365 days\n# - Can be configured per project`,
    question: "O que são Retention Policies no Azure DevOps?",
    options: [
      "Políticas de segurança",
      "Regras para quanto tempo manter runs, artifacts e dados de test",
      "Políticas de acesso",
      "Regras de branching",
    ],
    correctIndex: 1,
    explanation:
      "Retention Policies definem quanto tempo o Azure DevOps mantém pipeline runs, build artifacts e test results. Ajudam a gerir armazenamento e custos. Runs importantes podem ser marcadas para retenção indefinida.",
  },
  {
    id: 726,
    category: "azure-devops",
    code: `# Azure DevOps CLI\naz devops configure --defaults organization=https://dev.azure.com/myOrg project=myProject\n\naz boards work-item create --type Bug --title "Login fails on mobile"\naz pipelines run --name "CI" --branch main\naz repos pr create --title "Fix login" --source-branch feature/fix --target-branch main`,
    question: "O que permite o Azure DevOps CLI?",
    options: [
      "Apenas gestão de repos",
      "Automação completa via terminal: work items, pipelines, PRs, repos, etc.",
      "Apenas builds",
      "Apenas gestão de utilizadores",
    ],
    correctIndex: 1,
    explanation:
      "O Azure DevOps CLI (extensão do az CLI) permite gerir tudo via terminal: criar work items, trigger pipelines, criar PRs, gerir repos, configurar policies. Ideal para automação e scripting.",
  },
  {
    id: 727,
    category: "azure-devops",
    code: `# Container Jobs\njobs:\n  - job: BuildInContainer\n    container:\n      image: node:20-alpine\n    steps:\n      - script: node --version\n      - script: npm ci\n      - script: npm test\n\n  - job: BuildMultiContainer\n    container: node:20\n    services:\n      postgres:\n        image: postgres:15\n        ports:\n          - 5432:5432`,
    question: "O que são Container Jobs no Azure Pipelines?",
    options: [
      "Jobs que criam containers",
      "Jobs que executam dentro de containers Docker com serviços auxiliares",
      "Jobs para Kubernetes",
      "Jobs de Docker Hub",
    ],
    correctIndex: 1,
    explanation:
      "Container Jobs executam os steps dentro de um container Docker especificado, garantindo ambiente consistente. `services` permitem correr containers auxiliares (DBs, caches) junto do job, similar ao Docker Compose.",
  },
  {
    id: 728,
    category: "azure-devops",
    code: `# Azure DevOps - Notifications\n\n# Subscription types:\n# - Build completes (success/failure)\n# - PR created/updated\n# - Work item assigned to me\n# - Code pushed to branch\n# - Release deployment completed\n\n# Channels:\n# - Email\n# - Teams (via Service Hook)\n# - Slack (via Service Hook)\n# - Webhook (custom)`,
    question: "O que são Service Hooks no Azure DevOps?",
    options: [
      "Git hooks",
      "Integrações que enviam eventos para serviços externos (Teams, Slack, webhooks)",
      "Pipeline hooks",
      "Build triggers",
    ],
    correctIndex: 1,
    explanation:
      "Service Hooks permitem subscrever eventos do Azure DevOps e notificar serviços externos. Suportam Teams, Slack, Trello, Jenkins, webhooks genéricos, etc. Configuráveis por tipo de evento e filtros.",
  },
  {
    id: 729,
    category: "azure-devops",
    code: `# Permissions and Security\n\n# Levels:\n# Organization → Project → Team → Area/Iteration\n\n# Groups:\n# - Project Administrators\n# - Build Administrators\n# - Contributors\n# - Readers\n# - Stakeholders (free, limited access)\n\n# Granular permissions:\n# - Repos: branch policies, push permissions\n# - Pipelines: edit, queue, manage\n# - Boards: create/edit work items`,
    question: "O que é o nível 'Stakeholder' no Azure DevOps?",
    options: [
      "Admin completo",
      "Acesso gratuito e limitado: boards, dashboards, wiki (sem repos/pipelines completos)",
      "Sem acesso",
      "Acesso temporário",
    ],
    correctIndex: 1,
    explanation:
      "Stakeholders têm acesso gratuito e ilimitado. Podem usar Boards (criar/editar work items), ver dashboards e wiki. Acesso limitado a Repos, Pipelines e Test Plans. Ideal para PMs, designers e stakeholders não-técnicos.",
  },
  {
    id: 730,
    category: "azure-devops",
    code: `# Process customization\n\n# Built-in processes:\n# - Basic (simplest)\n# - Agile (user stories, features)\n# - Scrum (product backlog items, sprints)\n# - CMMI (requirements, change requests)\n\n# Inherited process:\n# 1. Create inherited process from Agile\n# 2. Add custom fields (e.g., "Business Value")\n# 3. Add custom work item types\n# 4. Customize states and transitions\n# 5. Apply to project`,
    question: "O que são processos (process templates) no Azure DevOps?",
    options: [
      "Templates de pipeline",
      "Frameworks de trabalho que definem work item types, states e campos",
      "Templates de código",
      "Configurações de build",
    ],
    correctIndex: 1,
    explanation:
      "Processos definem como os work items funcionam: tipos (Epic, Story, Bug), estados (New, Active, Closed), campos e regras. Azure DevOps inclui Agile, Scrum, CMMI e Basic. Podem ser customizados com inherited processes.",
  },

  // ========== TERRAFORM (30) ==========
  {
    id: 801,
    category: "terraform",
    code: `# main.tf\nterraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 5.0"\n    }\n  }\n  required_version = ">= 1.5"\n}\n\nprovider "aws" {\n  region = "eu-west-1"\n}`,
    question: "O que é um Provider no Terraform?",
    options: [
      "Um cloud provider",
      "Plugin que permite ao Terraform interagir com APIs de serviços (AWS, Azure, GCP, etc.)",
      "Um módulo de código",
      "Um backend de state",
    ],
    correctIndex: 1,
    explanation:
      "Providers são plugins que traduzem a configuração HCL em API calls para serviços específicos. `~> 5.0` significa >=5.0 e <6.0 (pessimistic constraint). Cada provider gere resources de um serviço.",
  },
  {
    id: 802,
    category: "terraform",
    code: `# terraform workflow\nterraform init      # download providers, init backend\nterraform plan      # preview changes\nterraform apply     # execute changes\nterraform destroy   # remove all resources`,
    question: "O que faz 'terraform plan'?",
    options: [
      "Aplica as mudanças",
      "Mostra um preview das mudanças sem executar nada",
      "Inicializa o projeto",
      "Destrói os recursos",
    ],
    correctIndex: 1,
    explanation:
      "`terraform plan` compara o state atual com a configuração desejada e mostra o que será criado (+), alterado (~) ou destruído (-). É um dry-run que não faz mudanças reais. Essencial para review antes de apply.",
  },
  {
    id: 803,
    category: "terraform",
    code: `# State file\nterraform {\n  backend "s3" {\n    bucket         = "my-terraform-state"\n    key            = "prod/terraform.tfstate"\n    region         = "eu-west-1"\n    dynamodb_table = "terraform-locks"\n    encrypt        = true\n  }\n}`,
    question: "Porque usar remote state com locking?",
    options: [
      "É mais rápido",
      "Partilhar state entre equipa e prevenir mudanças concorrentes",
      "É obrigatório",
      "Para backup",
    ],
    correctIndex: 1,
    explanation:
      "Remote state (S3, Azure Blob, GCS) permite que toda a equipa trabalhe com o mesmo state. DynamoDB/locking previne que duas pessoas façam apply simultaneamente (race conditions). Encrypt protege dados sensíveis no state.",
  },
  {
    id: 804,
    category: "terraform",
    code: `# Variables\nvariable "instance_type" {\n  description = "EC2 instance type"\n  type        = string\n  default     = "t3.micro"\n  \n  validation {\n    condition     = can(regex("^t3\\.", var.instance_type))\n    error_message = "Must be a t3 instance type."\n  }\n}`,
    question: "O que faz o bloco 'validation' numa variable?",
    options: [
      "Valida o Terraform version",
      "Define regras customizadas que o valor da variável deve cumprir",
      "Valida o provider",
      "Verifica permissões",
    ],
    correctIndex: 1,
    explanation:
      "Validation blocks definem regras customizadas para valores de variáveis. Se a condição falhar, o Terraform mostra a error_message e impede o plan/apply. Previne configurações inválidas antecipadamente.",
  },
  {
    id: 805,
    category: "terraform",
    code: `# Modules\nmodule "vpc" {\n  source  = "terraform-aws-modules/vpc/aws"\n  version = "5.0.0"\n\n  name = "my-vpc"\n  cidr = "10.0.0.0/16"\n  azs  = ["eu-west-1a", "eu-west-1b"]\n  \n  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]\n  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]\n  \n  enable_nat_gateway = true\n}`,
    question: "O que são Modules no Terraform?",
    options: [
      "Funções JavaScript",
      "Packages reutilizáveis de configuração Terraform",
      "Plugins de provider",
      "Templates de variáveis",
    ],
    correctIndex: 1,
    explanation:
      "Modules são coleções reutilizáveis de recursos Terraform. Podem vir do Terraform Registry (community modules), Git repos, ou pastas locais. Aceitam inputs (variables) e produzem outputs. DRY principle para infra.",
  },
  {
    id: 806,
    category: "terraform",
    code: `# Outputs\noutput "vpc_id" {\n  description = "The ID of the VPC"\n  value       = aws_vpc.main.id\n}\n\noutput "db_endpoint" {\n  description = "Database endpoint"\n  value       = aws_db_instance.main.endpoint\n  sensitive   = true\n}`,
    question: "O que faz 'sensitive = true' num output?",
    options: [
      "Encripta o valor",
      "Oculta o valor no output do terminal (mas mantém no state)",
      "Remove do state",
      "Requer aprovação",
    ],
    correctIndex: 1,
    explanation:
      "Sensitive outputs são ocultos no output do terminal (mostram `<sensitive>`) mas permanecem no state file. O state deve ser encriptado e protegido. Útil para passwords, endpoints de DB, API keys.",
  },
  {
    id: 807,
    category: "terraform",
    code: `# Data sources\ndata "aws_ami" "ubuntu" {\n  most_recent = true\n  owners      = ["099720109477"] # Canonical\n\n  filter {\n    name   = "name"\n    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]\n  }\n}\n\nresource "aws_instance" "web" {\n  ami           = data.aws_ami.ubuntu.id\n  instance_type = "t3.micro"\n}`,
    question: "O que são Data Sources no Terraform?",
    options: [
      "Bases de dados",
      "Queries read-only para buscar informação de recursos existentes",
      "Outputs de módulos",
      "State files",
    ],
    correctIndex: 1,
    explanation:
      "Data sources fazem queries read-only a APIs para obter informação de recursos que já existem ou informações dinâmicas (AMI mais recente, AZs disponíveis, etc.). Não criam nem modificam recursos.",
  },
  {
    id: 808,
    category: "terraform",
    code: `# Lifecycle rules\nresource "aws_instance" "web" {\n  ami           = var.ami_id\n  instance_type = var.instance_type\n\n  lifecycle {\n    create_before_destroy = true\n    prevent_destroy       = true\n    ignore_changes        = [tags]\n  }\n}`,
    question: "O que faz 'create_before_destroy'?",
    options: [
      "Cria o recurso sem destruir nada",
      "Cria o novo recurso antes de destruir o antigo (zero-downtime)",
      "Destrói e depois cria",
      "Impede destruição",
    ],
    correctIndex: 1,
    explanation:
      "`create_before_destroy` garante que o novo recurso é criado antes do antigo ser destruído. Essencial para zero-downtime updates. `prevent_destroy` impede destruição acidental. `ignore_changes` ignora alterações em atributos específicos.",
  },
  {
    id: 809,
    category: "terraform",
    code: `# Count vs for_each\n\n# Count (index-based)\nresource "aws_instance" "web" {\n  count         = 3\n  ami           = var.ami_id\n  instance_type = "t3.micro"\n  tags = { Name = "web-\${count.index}" }\n}\n\n# For_each (key-based)\nresource "aws_instance" "web" {\n  for_each      = toset(["web", "api", "worker"])\n  ami           = var.ami_id\n  instance_type = "t3.micro"\n  tags = { Name = each.key }\n}`,
    question: "Porque preferir for_each a count?",
    options: [
      "É mais rápido",
      "for_each usa keys estáveis; count re-cria recursos quando a ordem muda",
      "count é deprecated",
      "São iguais",
    ],
    correctIndex: 1,
    explanation:
      "`count` identifica recursos por índice. Se remover o item 0, todos os seguintes são re-criados (shift). `for_each` usa keys estáveis (nomes). Remover um item não afeta os outros. Preferir for_each para coleções.",
  },
  {
    id: 810,
    category: "terraform",
    code: `# Workspaces\nterraform workspace new staging\nterraform workspace new production\nterraform workspace select staging\n\n# Usage in config\nresource "aws_instance" "web" {\n  instance_type = terraform.workspace == "production" ? "t3.large" : "t3.micro"\n  tags = {\n    Environment = terraform.workspace\n  }\n}`,
    question: "O que são Terraform Workspaces?",
    options: [
      "Diretórios de trabalho",
      "Ambientes isolados com state files separados para a mesma configuração",
      "Branches do Git",
      "Providers diferentes",
    ],
    correctIndex: 1,
    explanation:
      "Workspaces permitem usar a mesma configuração com state files separados (ex: staging, production). `terraform.workspace` permite variar configuração por ambiente. Para projetos grandes, diretórios separados podem ser mais claros.",
  },
  {
    id: 811,
    category: "terraform",
    code: `# Import existing resource\nterraform import aws_instance.web i-1234567890abcdef0\n\n# Terraform 1.5+ - Import block\nimport {\n  to = aws_instance.web\n  id = "i-1234567890abcdef0"\n}\n\n# Generate config\nterraform plan -generate-config-out=generated.tf`,
    question: "Para que serve 'terraform import'?",
    options: [
      "Importar módulos",
      "Trazer recursos existentes (criados manualmente) para gestão do Terraform",
      "Importar variáveis",
      "Importar state de outro projeto",
    ],
    correctIndex: 1,
    explanation:
      "Import permite adoptar recursos existentes (criados manualmente ou por outras ferramentas) para o state do Terraform. A partir do 1.5+, import blocks podem gerar configuração automaticamente com `-generate-config-out`.",
  },
  {
    id: 812,
    category: "terraform",
    code: `# Locals\nlocals {\n  environment = terraform.workspace\n  common_tags = {\n    Project     = var.project_name\n    Environment = local.environment\n    ManagedBy   = "terraform"\n    Team        = var.team\n  }\n}\n\nresource "aws_instance" "web" {\n  ami           = var.ami_id\n  instance_type = var.instance_type\n  tags = merge(local.common_tags, { Name = "web-server" })\n}`,
    question: "Para que servem Locals no Terraform?",
    options: [
      "Variáveis locais de provider",
      "Valores computados reutilizáveis dentro da configuração",
      "Secrets locais",
      "Outputs locais",
    ],
    correctIndex: 1,
    explanation:
      "Locals são valores computados que evitam repetição. Podem usar variáveis, funções e expressões. Ideais para tags comuns, naming conventions e valores derivados. Diferente de variables: locals são internos, variables são inputs.",
  },
  {
    id: 813,
    category: "terraform",
    code: `# Provisioners (use sparingly!)\nresource "aws_instance" "web" {\n  ami           = var.ami_id\n  instance_type = "t3.micro"\n\n  provisioner "remote-exec" {\n    inline = [\n      "sudo apt update",\n      "sudo apt install -y nginx"\n    ]\n  }\n\n  provisioner "local-exec" {\n    command = "echo \${self.public_ip} >> inventory.txt"\n  }\n}`,
    question: "Porque devem os provisioners ser usados com moderação?",
    options: [
      "São lentos",
      "Não são declarativos, podem falhar e criar state inconsistente",
      "São deprecated",
      "Custam mais",
    ],
    correctIndex: 1,
    explanation:
      "Provisioners são imperativos num mundo declarativo. Se falharem, o recurso fica tainted. Preferir: user_data (cloud-init), Packer para AMIs, Ansible para config management. Provisioners são last resort.",
  },
  {
    id: 814,
    category: "terraform",
    code: `# Terraform Cloud / Enterprise\nterraform {\n  cloud {\n    organization = "my-org"\n    workspaces {\n      name = "my-app-prod"\n    }\n  }\n}\n\n# Features:\n# - Remote state (automatic)\n# - Remote plan/apply\n# - VCS integration (GitOps)\n# - Policy as Code (Sentinel)\n# - Private registry\n# - Cost estimation`,
    question: "O que oferece o Terraform Cloud?",
    options: [
      "Hosting de aplicações",
      "Plataforma SaaS para colaboração: remote state, runs, policies e governance",
      "Apenas remote state",
      "Um provider cloud",
    ],
    correctIndex: 1,
    explanation:
      "Terraform Cloud é SaaS para equipas: remote state & locking automáticos, remote plan/apply com UI, VCS integration (trigger em push), Sentinel policies, cost estimation, e private module registry.",
  },
  {
    id: 815,
    category: "terraform",
    code: `# Dynamic blocks\nresource "aws_security_group" "web" {\n  name = "web-sg"\n\n  dynamic "ingress" {\n    for_each = var.ingress_rules\n    content {\n      from_port   = ingress.value.port\n      to_port     = ingress.value.port\n      protocol    = "tcp"\n      cidr_blocks = ingress.value.cidrs\n    }\n  }\n}\n\nvariable "ingress_rules" {\n  default = [\n    { port = 80,  cidrs = ["0.0.0.0/0"] },\n    { port = 443, cidrs = ["0.0.0.0/0"] }\n  ]\n}`,
    question: "O que são Dynamic blocks?",
    options: [
      "Blocos que mudam de provider",
      "Geram múltiplos blocos repetidos dentro de um resource baseado em dados",
      "Blocos condicionais",
      "Blocos de teste",
    ],
    correctIndex: 1,
    explanation:
      "Dynamic blocks geram blocos nested repetidos (ingress, egress, setting, etc.) a partir de listas/maps. Evitam repetição manual. `for_each` itera e `content` define o template de cada bloco gerado.",
  },
  {
    id: 816,
    category: "terraform",
    code: `# State commands\nterraform state list                    # list resources\nterraform state show aws_instance.web   # show resource details\nterraform state mv aws_instance.web aws_instance.api  # rename\nterraform state rm aws_instance.web     # remove from state`,
    question: "O que faz 'terraform state rm'?",
    options: [
      "Destrói o recurso",
      "Remove o recurso do state SEM destruí-lo na cloud",
      "Remove o state file",
      "Limpa o cache",
    ],
    correctIndex: 1,
    explanation:
      "`state rm` remove um recurso do tracking do Terraform sem destruí-lo na cloud. O recurso continua a existir mas o Terraform 'esquece-se' dele. Útil para migrar recursos entre configurations ou parar de gerir algo.",
  },
  {
    id: 817,
    category: "terraform",
    code: `# Moved block (refactoring)\nmoved {\n  from = aws_instance.web\n  to   = module.compute.aws_instance.web\n}\n\nmoved {\n  from = aws_instance.web[0]\n  to   = aws_instance.web["primary"]\n}`,
    question: "Para que serve o bloco 'moved'?",
    options: [
      "Mover recursos entre clouds",
      "Refatorar configuração sem destruir e recriar recursos",
      "Migrar state files",
      "Mover ficheiros",
    ],
    correctIndex: 1,
    explanation:
      "Moved blocks (Terraform 1.1+) permitem renomear recursos, mover para módulos, ou mudar de count para for_each sem que o Terraform destrua e recrie os recursos. O plan mostra 'move' em vez de 'destroy + create'.",
  },
  {
    id: 818,
    category: "terraform",
    code: `# Custom module structure\n# modules/web-app/\n#   ├── main.tf      (resources)\n#   ├── variables.tf (inputs)\n#   ├── outputs.tf   (outputs)\n#   ├── versions.tf  (provider requirements)\n#   └── README.md    (documentation)\n\nmodule "web_app" {\n  source = "./modules/web-app"\n  \n  app_name    = "my-api"\n  environment = "production"\n  instance_count = 3\n}`,
    question: "Qual é a estrutura recomendada de um módulo Terraform?",
    options: [
      "Tudo num ficheiro",
      "main.tf (resources), variables.tf (inputs), outputs.tf (outputs), versions.tf",
      "Um ficheiro por recurso",
      "Não há convenção",
    ],
    correctIndex: 1,
    explanation:
      "A convenção standard é: main.tf (resources), variables.tf (inputs), outputs.tf (outputs), versions.tf (provider/terraform requirements). README.md para documentação. Módulos devem ser genéricos e reutilizáveis.",
  },
  {
    id: 819,
    category: "terraform",
    code: `# Terraform functions\nlocals {\n  # String\n  upper_name = upper(var.name)\n  \n  # Collection\n  flattened = flatten([var.public_subnets, var.private_subnets])\n  \n  # Map\n  merged = merge(var.default_tags, var.extra_tags)\n  \n  # Conditional\n  instance_type = var.environment == "prod" ? "t3.large" : "t3.micro"\n  \n  # Encoding\n  user_data = base64encode(file("startup.sh"))\n}`,
    question: "O Terraform suporta funções?",
    options: [
      "Não",
      "Sim, built-in functions para strings, collections, encoding, math, etc.",
      "Apenas com plugins",
      "Apenas em modules",
    ],
    correctIndex: 1,
    explanation:
      "Terraform tem 100+ built-in functions: string (upper, lower, format), collection (merge, flatten, lookup), numeric (min, max), filesystem (file, templatefile), encoding (base64, json), IP (cidrsubnet), e mais.",
  },
  {
    id: 820,
    category: "terraform",
    code: `# Terraform Testing (1.6+)\n# tests/main.tftest.hcl\n\nrun "create_vpc" {\n  command = plan\n  \n  assert {\n    condition     = aws_vpc.main.cidr_block == "10.0.0.0/16"\n    error_message = "VPC CIDR block is incorrect"\n  }\n}\n\nrun "integration_test" {\n  command = apply\n  \n  assert {\n    condition     = output.vpc_id != ""\n    error_message = "VPC was not created"\n  }\n}`,
    question: "O que é o Terraform Test framework?",
    options: [
      "Testes de código Go",
      "Framework nativo (1.6+) para testar configurações com assertions",
      "Unit tests de providers",
      "Load tests de infra",
    ],
    correctIndex: 1,
    explanation:
      "Terraform Test (1.6+) permite escrever testes nativos em ficheiros .tftest.hcl. Suporta plan (sem criar recursos) e apply (cria e destrói automaticamente). Assertions validam atributos de recursos e outputs.",
  },
  {
    id: 821,
    category: "terraform",
    code: `# taint and replace\n\n# Legacy (deprecated)\nterraform taint aws_instance.web\nterraform apply  # recreates the instance\n\n# Modern approach\nterraform apply -replace="aws_instance.web"`,
    question: "O que faz '-replace' no Terraform?",
    options: [
      "Substitui o provider",
      "Força a destruição e recriação de um recurso específico",
      "Substitui o state file",
      "Substitui variáveis",
    ],
    correctIndex: 1,
    explanation:
      "`-replace` (substitui o deprecated `taint`) marca um recurso para ser destruído e recriado no próximo apply. Útil quando um recurso está num estado indesejado que o Terraform não detecta (ex: configuração manual).",
  },
  {
    id: 822,
    category: "terraform",
    code: `# depends_on\nresource "aws_iam_role_policy" "s3_access" {\n  role   = aws_iam_role.lambda_role.id\n  policy = data.aws_iam_policy_document.s3.json\n}\n\nresource "aws_lambda_function" "processor" {\n  function_name = "processor"\n  role          = aws_iam_role.lambda_role.arn\n  \n  depends_on = [aws_iam_role_policy.s3_access]\n}`,
    question: "Quando usar depends_on?",
    options: [
      "Sempre entre recursos",
      "Apenas quando há dependências implícitas que o Terraform não detecta automaticamente",
      "Para ordenar outputs",
      "Para ordenar providers",
    ],
    correctIndex: 1,
    explanation:
      "O Terraform infere dependências automaticamente via referências (ex: `aws_iam_role.lambda_role.arn`). `depends_on` é para dependências implícitas que não são visíveis nas referências. Usar com moderação — geralmente indica que algo pode ser refatorado.",
  },
  {
    id: 823,
    category: "terraform",
    code: `# Terraform Cloud - Policy as Code (Sentinel)\npolicy "restrict-instance-type" {\n  source = "./policies/restrict-instance-type.sentinel"\n  enforcement_level = "hard-mandatory"\n}\n\n# restrict-instance-type.sentinel\nimport "tfplan/v2" as tfplan\n\nallowed_types = ["t3.micro", "t3.small", "t3.medium"]\n\nmain = rule {\n  all tfplan.resource_changes as _, rc {\n    rc.type is "aws_instance" implies\n    rc.change.after.instance_type in allowed_types\n  }\n}`,
    question: "O que é Sentinel no Terraform?",
    options: [
      "Um monitoring tool",
      "Policy as Code: define e enforce regras de compliance na infraestrutura",
      "Um security scanner",
      "Um cost optimizer",
    ],
    correctIndex: 1,
    explanation:
      "Sentinel é o framework Policy as Code da HashiCorp. Define regras que o plan deve cumprir antes do apply (ex: tipos de instância permitidos, regiões, tags obrigatórias). Enforcement: advisory, soft-mandatory, hard-mandatory.",
  },
  {
    id: 824,
    category: "terraform",
    code: `# Terraform State Locking\n\n# Without locking:\n# Dev A: terraform apply (reading state...)\n# Dev B: terraform apply (reading same state...)\n# Both apply → CONFLICT → corrupted state!\n\n# With locking (DynamoDB/Azure Blob/GCS):\n# Dev A: terraform apply → acquires lock ✅\n# Dev B: terraform apply → "Error: state locked" ❌\n# Dev A: apply completes → releases lock\n# Dev B: terraform apply → acquires lock ✅`,
    question: "O que previne o state locking?",
    options: [
      "Acesso não autorizado",
      "Applies concorrentes que podem corromper o state",
      "Perda de state",
      "Mudanças de configuração",
    ],
    correctIndex: 1,
    explanation:
      "State locking previne que dois terraform apply corram simultaneamente. Sem locking, ambos leem o mesmo state, aplicam mudanças, e o último a escrever sobrescreve as mudanças do primeiro — causando state corruption e drift.",
  },
  {
    id: 825,
    category: "terraform",
    code: `# Terraform with CI/CD (GitHub Actions)\njobs:\n  terraform:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: hashicorp/setup-terraform@v3\n      - run: terraform init\n      - run: terraform fmt -check\n      - run: terraform validate\n      - run: terraform plan -out=tfplan\n      - run: terraform apply tfplan\n        if: github.ref == 'refs/heads/main'`,
    question: "Porque salvar o plan com -out=tfplan?",
    options: [
      "Para backup",
      "Para garantir que o apply executa exatamente o que foi reviewed no plan",
      "Para logs",
      "É obrigatório",
    ],
    correctIndex: 1,
    explanation:
      "Salvar o plan garante que o apply executa exatamente as mudanças mostradas no plan, mesmo que o state ou código mude entre o plan e o apply. Sem `-out`, o apply faz um novo plan que pode ser diferente.",
  },
  {
    id: 826,
    category: "terraform",
    code: `# Terraform vs alternatives\n\n# Terraform (HCL)\n#  + Multi-cloud, mature ecosystem\n#  + Huge provider library\n#  - State management complexity\n\n# Pulumi (TypeScript/Python/Go)\n#  + Real programming languages\n#  + Testing with standard tools\n#  - Smaller ecosystem\n\n# AWS CDK (TypeScript/Python)\n#  + Type safety, IDE support\n#  - AWS only (CDK for Terraform exists)\n\n# OpenTofu (HCL)\n#  + Open-source fork of Terraform\n#  + Compatible with Terraform`,
    question: "O que é o OpenTofu?",
    options: [
      "Uma nova linguagem",
      "Um fork open-source do Terraform mantido pela Linux Foundation",
      "Um cloud provider",
      "Um módulo do Terraform",
    ],
    correctIndex: 1,
    explanation:
      "OpenTofu é um fork open-source do Terraform, criado após a HashiCorp mudar a licença para BSL. Mantido pela Linux Foundation, é compatível com Terraform e continua sob licença MPL 2.0 (verdadeiramente open-source).",
  },
  {
    id: 827,
    category: "terraform",
    code: `# Conditional resource creation\nresource "aws_cloudwatch_metric_alarm" "high_cpu" {\n  count = var.enable_monitoring ? 1 : 0\n\n  alarm_name          = "high-cpu"\n  comparison_operator = "GreaterThanThreshold"\n  evaluation_periods  = 2\n  metric_name         = "CPUUtilization"\n  namespace           = "AWS/EC2"\n  period              = 300\n  threshold           = 80\n}`,
    question: "Como criar um recurso condicionalmente no Terraform?",
    options: [
      "Com if/else",
      "Usando count = condition ? 1 : 0",
      "Com dynamic blocks",
      "Não é possível",
    ],
    correctIndex: 1,
    explanation:
      '`count = condition ? 1 : 0` é o idiom para recursos condicionais. Quando count é 0, o recurso não é criado. Pode-se também usar `for_each = var.enabled ? toset(["one"]) : toset([])` para o mesmo efeito.',
  },
  {
    id: 828,
    category: "terraform",
    code: `# terraform fmt & validate\n\n# Format all files\nterraform fmt -recursive\n\n# Check formatting (CI)\nterraform fmt -check -recursive\n\n# Validate configuration\nterraform validate\n\n# Additional tools:\n# tflint - linter with provider-specific rules\n# tfsec / trivy - security scanning\n# infracost - cost estimation\n# terraform-docs - generate documentation`,
    question: "Que ferramentas complementam o Terraform em CI?",
    options: [
      "Apenas fmt e validate",
      "tflint (linting), tfsec/trivy (security), infracost (custos), terraform-docs (docs)",
      "Apenas testes manuais",
      "Apenas plan e apply",
    ],
    correctIndex: 1,
    explanation:
      "Um pipeline Terraform completo inclui: fmt (formatação), validate (sintaxe), tflint (linting + best practices), tfsec/trivy (vulnerabilidades de segurança), infracost (estimativa de custos), e terraform-docs (documentação automática).",
  },
  {
    id: 829,
    category: "terraform",
    code: `# Provider aliases for multi-region\nprovider "aws" {\n  region = "eu-west-1"\n}\n\nprovider "aws" {\n  alias  = "us"\n  region = "us-east-1"\n}\n\nresource "aws_s3_bucket" "eu_bucket" {\n  bucket = "my-app-eu"\n}\n\nresource "aws_s3_bucket" "us_bucket" {\n  provider = aws.us\n  bucket   = "my-app-us"\n}`,
    question: "Para que servem Provider aliases?",
    options: [
      "Renomear providers",
      "Usar o mesmo provider com configurações diferentes (multi-region, multi-account)",
      "Criar aliases de recursos",
      "Usar providers alternativos",
    ],
    correctIndex: 1,
    explanation:
      "Provider aliases permitem usar o mesmo provider com configurações diferentes. Comum para: multi-region (criar recursos em regiões diferentes), multi-account (cross-account access), ou diferentes credentials.",
  },
  {
    id: 830,
    category: "terraform",
    code: `# Drift detection\n\n# Someone manually changed a resource in the cloud console!\n\n# Detect drift:\nterraform plan\n# Shows: ~ update in-place (diff between state and reality)\n\n# Fix drift option 1: Apply to restore desired state\nterraform apply\n\n# Fix drift option 2: Accept current state\nterraform apply -refresh-only\n\n# Fix drift option 3: Import + update config`,
    question: "O que é 'drift' no Terraform?",
    options: [
      "Um bug no Terraform",
      "Diferença entre o state e a realidade na cloud (mudanças manuais/externas)",
      "Mudanças no código",
      "Diferenças entre ambientes",
    ],
    correctIndex: 1,
    explanation:
      "Drift ocorre quando alguém modifica recursos diretamente na cloud (console, CLI) fora do Terraform. O state fica desatualizado. `terraform plan` detecta drift, `apply` corrige-o para o desejado, `apply -refresh-only` aceita o estado atual.",
  },
  // ========== SPRING BOOT (SENIOR / SIEMENS) ==========
  {
    id: 1001,
    category: "springboot",
    code: `@SpringBootApplication\npublic class App {\n  public static void main(String[] args) {\n    SpringApplication.run(App.class, args);\n  }\n}`,
    question: "O que faz @SpringBootApplication?",
    options: [
      "Inicia apenas a base de dados",
      "Combina @Configuration, @EnableAutoConfiguration e @ComponentScan",
      "Cria endpoints REST automaticamente",
      "Apenas ativa logs"
    ],
    correctIndex: 1,
    explanation: "Anotação 3-em-1: define classe de config, ativa auto-configuração mágica do Spring e faz scan de beans no pacote."
  },
  {
    id: 1002,
    category: "springboot",
    code: `@Service\npublic class UserService {\n  @Autowired private UserRepository repo; // Field injection\n}`,
    question: "Por que injeção por campo (@Autowired no atributo) é má prática?",
    options: [
      "Impossibilita campos final, dificulta testes unitários e esconde dependências",
      "É mais lento a arrancar",
      "Não funciona no Spring Boot 3",
      "Cria memory leaks"
    ],
    correctIndex: 0,
    explanation: "Injeção por construtor é recomendada: permite imutabilidade (final), falha em compile-time se faltar bean e facilita testes isolados sem Spring."
  },
  {
    id: 1003,
    category: "springboot",
    code: `@Transactional\npublic void parentMethod() {\n  this.childMethod(); // chamada interna\n}\n\n@Transactional(propagation = Propagation.REQUIRES_NEW)\npublic void childMethod() { ... }`,
    question: "Por que @Transactional falha em chamada interna (this.childMethod())?",
    options: [
      "Spring ignora propagation REQUIRES_NEW",
      "O proxy do Spring Security bloqueia",
      "Spring usa proxies AOP; chamadas 'this' ignoram o proxy, contornando a transação",
      "Transações não funcionam em métodos public"
    ],
    correctIndex: 2,
    explanation: "Spring cria um objeto Proxy em redor do bean. Chamadas `this.metodo()` operam no objeto interno ignorando o Proxy AOP."
  },
  {
    id: 1004,
    category: "springboot",
    code: `@RestController\npublic class UserController {\n  @GetMapping("/users/{id}")\n  public User getUser(@PathVariable Long id) { ... }\n}`,
    question: "@RestController vs @Controller?",
    options: [
      "@RestController é igual a @Controller + @ResponseBody (devolve JSON direto)",
      "@Controller é exclusivo para APIs REST",
      "@RestController necessita de suporte a JSP",
      "Não há diferença funcional"
    ],
    correctIndex: 0,
    explanation: "@RestController anota automaticamente a resposta com `@ResponseBody`, serializando o retorno direto em JSON/XML."
  },
  {
    id: 1005,
    category: "springboot",
    code: `@Entity\npublic class Order {\n  @ManyToOne(fetch = FetchType.LAZY)\n  private Customer customer;\n}`,
    question: "O que causa a exceção LazyInitializationException no JPA?",
    options: [
      "Aceder a uma relação LAZY fora de uma sessão/transação ativa",
      "Falta de anotação @Entity",
      "Usar @ManyToOne com EAGER",
      "Chave primária nula"
    ],
    correctIndex: 0,
    explanation: "Tentar carregar campo LAZY quando a Session/EntityManager do Hibernate já fechou causa `LazyInitializationException`."
  },

  // ========== ANGULAR (SENIOR / SIEMENS) ==========
  {
    id: 1101,
    category: "angular",
    code: `@Component({\n  selector: 'app-card',\n  template: \`<h2>{{ title }}</h2>\`,\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class CardComponent {\n  @Input() title!: string;\n}`,
    question: "Como funciona ChangeDetectionStrategy.OnPush?",
    options: [
      "Verifica alterações em cada ciclo do timer",
      "Só re-renderiza componente se a referência dos @Input mudar ou evento do componente disparar",
      "Desativa completamente a verificação",
      "Não tem impacto no desempenho"
    ],
    correctIndex: 1,
    explanation: "OnPush reduz verificações no DOM. Mutações internas num objeto/array sem trocar a referência NÃO disparam render."
  },
  {
    id: 1102,
    category: "angular",
    code: `searchTerm$.pipe(\n  debounceTime(300),\n  switchMap(term => this.api.search(term))\n).subscribe();`,
    question: "RxJS: Por que usar switchMap num campo de busca (Typeahead)?",
    options: [
      "Executa todos os pedidos em paralelo",
      "Cancela o pedido HTTP anterior se novo valor for emitido",
      "Guarda resultados em cache automaticamente",
      "Bloqueia novas emissões"
    ],
    correctIndex: 1,
    explanation: "switchMap cancela a subscrição/pedido anterior quando entra novo termo, evitando race conditions de requisições antigas."
  },
  {
    id: 1103,
    category: "angular",
    code: `const count = signal(0);\ncount.set(5);\nconsole.log(count());`,
    question: "O que são Signals em Angular (17+)?",
    options: [
      "Substitutos de módulos NgModule",
      "Primitiva reativa granular que notifica dependências ao mudar sem depender de zone.js",
      "Uma biblioteca externa de animações",
      "Apenas um wrapper sobre Promises"
    ],
    correctIndex: 1,
    explanation: "Signals reagem a alterações de valor diretamente na árvore de componentes sem necessitar da monitorização global do zone.js."
  },

  // ========== GIT ==========
  {
    id: 1201,
    category: "git",
    code: `git pull origin main\nvs\ngit fetch origin main`,
    question: "git pull vs git fetch?",
    options: [
      "git pull apenas transfere; git fetch aplica alterações",
      "git pull = git fetch + git merge automático",
      "Ambos são exatamente idênticos",
      "git fetch apaga o branch local"
    ],
    correctIndex: 1,
    explanation: "git fetch baixa histórico do remoto sem alterar seu working directory. git pull baixa e faz o merge imediatamente."
  },
  {
    id: 1202,
    category: "git",
    code: `git rebase main\nvs\ngit merge main`,
    question: "git rebase vs git merge?",
    options: [
      "Merge reescreve histórico; rebase cria commit de junção",
      "Rebase reescreve o histórico tornando-o linear; merge cria commit de junção preservando histórico real",
      "Rebase apaga alterações locais",
      "Nenhuma das anteriores"
    ],
    correctIndex: 1,
    explanation: "Rebase reaplica seus commits no topo do branch destino (histórico limpo/linear). Merge mantém a estrutura de branches."
  },

  // ========== KUBERNETES & DOCKER ==========
  {
    id: 1301,
    category: "kubernetes-docker",
    code: `FROM node:18 AS builder\nWORKDIR /app\nRUN npm run build\n\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html`,
    question: "Qual a vantagem de Multi-stage Build no Docker?",
    options: [
      "Executa múltiplos containers em simultâneo",
      "Reduz drasticamente o tamanho da imagem final deixando ferramentas de build para trás",
      "Acelera a placa gráfica do container",
      "Cria réplicas do container automaticamente"
    ],
    correctIndex: 1,
    explanation: "Multi-stage permite compilar na primeira etapa e copiar apenas os artefatos finais para a imagem final leve."
  },

  // ========== POSTGRESQL ==========
  {
    id: 1401,
    category: "postgresql",
    code: `EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 42;`,
    question: "Para que serve EXPLAIN ANALYZE no PostgreSQL?",
    options: [
      "Executa a query e mostra o plano de execução real com tempos medidos por nó",
      "Apenas verifica erros de sintaxe",
      "Formata o código SQL",
      "Apaga dados duplicados"
    ],
    correctIndex: 0,
    explanation: "EXPLAIN ANALYZE executa a query e retorna o tempo exato e custo de cada operação (Seq Scan, Index Scan, etc)."
  },

  // ========== WINDOWS SERVER & SIEMENS PREP ==========
  {
    id: 1501,
    category: "windows-server",
    code: `IIS -> Application Pool -> Advanced Settings -> Identity`,
    question: "Serviço no IIS falha a aceder a ficheiro/BD. Qual causa mais provável?",
    options: [
      "Erro de compilação em C#",
      "A conta de identidade do Application Pool não tem permissões no sistema/BD",
      "Falta de espaço no disco",
      "Placa de rede desativada"
    ],
    correctIndex: 1,
    explanation: "Em IIS, o Application Pool corre com uma conta específica (ex: ApplicationPoolIdentity). Sem permissões NTFS/BD a app falha."
  },
  {
    id: 1601,
    category: "siemens-prep",
    code: `REST API + Angular SPA + Windows Server / K8s`,
    question: "O que é um DTO e por que deve ser usado entre Backend e Frontend?",
    options: [
      "Data Transfer Object: isola a API do modelo interno do banco, evita expor dados sensíveis e previne ciclos de serialização",
      "Database Tool Object: classe de conexão com o banco",
      "Direct Text Output: formato para logs",
      "Não há vantagem em usar DTOs"
    ],
    correctIndex: 0,
    explanation: "DTO desconecta o contrato público da API da estrutura interna de tabelas/entidades JPA/EF Core."
  }
];
