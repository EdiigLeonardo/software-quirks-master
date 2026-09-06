import fs from 'fs';

const existingFile = fs.readFileSync('src/data/questions.ts', 'utf-8');

// Sample generator for the new categories
const newQuestions = [
  // SPRING BOOT
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

  // ANGULAR
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
      "Primitiva reativa granurar que notifica dependências ao mudar sem depender de zone.js",
      "Uma biblioteca externa de animações",
      "Apenas um wrapper sobre Promises"
    ],
    correctIndex: 1,
    explanation: "Signals reagem a alterações de valor diretamente na árvore de componentes sem necessitar da monitorização global do zone.js."
  },

  // GIT
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

  // KUBERNETES & DOCKER
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

  // POSTGRESQL
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

  // WINDOWS SERVER & SIEMENS PREP
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

// Append new questions to src/data/questions.ts
const insertIndex = existingFile.lastIndexOf('];');
if (insertIndex !== -1) {
  const formattedQuestions = newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n');
  const updatedContent = existingFile.slice(0, insertIndex) + ',\n' + formattedQuestions + '\n' + existingFile.slice(insertIndex);
  fs.writeFileSync('src/data/questions.ts', updatedContent, 'utf-8');
  console.log("Perguntas adicionadas com sucesso!");
} else {
  console.error("Não foi possível encontrar o fim do array questions em questions.ts");
}
