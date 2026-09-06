import fs from 'fs';

// Node script to generate new TS questions array entries in caveman Portuguese

const questions = [
  // ========== JAVA SENIOR (50) ==========
  {
    category: "java",
    code: `// Stack vs Heap / Identity vs Value\nString s1 = new String("test");\nString s2 = new String("test");\nSystem.out.println(s1 == s2);\nSystem.out.println(s1.equals(s2));`,
    question: "Diferença entre == e .equals() em Objetos?",
    options: [
      "== compara conteúdo; .equals() compara memória",
      "== compara endereço de memória; .equals() compara conteúdo/valor",
      "São totalmente idênticos em Java",
      "equals() é só para primitivos"
    ],
    correctIndex: 1,
    explanation: "`==` checa se apontam para mesmo endereço RAM. `.equals()` checa valor do objeto. Em objetos use `.equals()`."
  },
  {
    category: "java",
    code: `Integer sum = 0;\nfor (int i = 0; i < 1000; i++) {\n  sum += i; // autoboxing/unboxing no loop\n}`,
    question: "O que é autoboxing/unboxing e qual o perigo?",
    options: [
      "Conversão manual entre tipos",
      "Conversão automática primitivo <-> Wrapper (int <-> Integer). Perigo: aloca objetos em loop e perde performance",
      "Mecanismo de Garbage Collection",
      "Erro de compilação em loops"
    ],
    correctIndex: 1,
    explanation: "Autoboxing converte `int` em `Integer` automático. Em loops grandes cria milhares de objetos à toa no Heap."
  },
  {
    category: "java",
    code: `String s = "a" + "b";\nStringBuilder sb = new StringBuilder("a").append("b");\nStringBuffer sbf = new StringBuffer("a").append("b");`,
    question: "String vs StringBuilder vs StringBuffer?",
    options: [
      "String mutável; StringBuilder imutável; StringBuffer apenas para threads",
      "String imutável; StringBuilder mutável (não thread-safe, rápido); StringBuffer mutável (thread-safe, mais lento)",
      "Todos são mutáveis e com mesma performance",
      "StringBuilder é obsoleto"
    ],
    correctIndex: 1,
    explanation: "String imutável (cria novo objeto). StringBuilder mutável rápido (single thread). StringBuffer usa synchronized (multi thread)."
  },
  {
    category: "java",
    code: `@FunctionalInterface\ninterface Calculator {\n  int compute(int a, int b);\n}`,
    question: "O que é Interface Funcional?",
    options: [
      "Interface sem métodos",
      "Interface com exatamente 1 método abstrato. Permite usar Lambdas",
      "Interface com apenas métodos static",
      "Interface padrão do Spring Boot"
    ],
    correctIndex: 1,
    explanation: "Interface com 1 único método abstrato (SAM - Single Abstract Method). Base para lambdas e `::` method references."
  },
  {
    category: "java",
    code: `abstract class Animal { String name; abstract void sound(); }\ninterface Flyable { void fly(); }`,
    question: "Classe Abstrata vs Interface em Java?",
    options: [
      "Sem diferenças no Java 17",
      "Abstrata: tem estado (campos) e construtor, herança única. Interface: contratos sem estado, múltipla implementação",
      "Interface pode ter construtores",
      "Classe abstrata não aceita métodos concretos"
    ],
    correctIndex: 1,
    explanation: "Classe abstrata tem estado/campos + herança única (`extends`). Interface tem comportamentos + múltipla implementação (`implements`)."
  },

  // SPRING BOOT (50)
  {
    category: "java",
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
    category: "java",
    code: `@Service\npublic class UserService {\n  @Autowired private UserRepository repo; // Injeção por campo\n}`,
    question: "Por que injeção por campo (@Autowired no atributo) é má prática?",
    options: [
      "Impossibilita uso de campos final, dificulta testes unitários (exige reflection/Mockito Annotations) e oculta dependências",
      "É mais lento a arrancar",
      "Não funciona no Spring Boot 3",
      "Cria memory leaks"
    ],
    correctIndex: 0,
    explanation: "Injeção por construtor é melhor: permite imutabilidade (`final`), falha em compile-time se faltar bean e facilita testes isolados sem Spring."
  },
  {
    category: "java",
    code: `@Transactional\npublic void parentMethod() {\n  this.childMethod(); // chamada interna na mesma classe\n}\n\n@Transactional(propagation = Propagation.REQUIRES_NEW)\npublic void childMethod() { ... }`,
    question: "Por que @Transactional falha em chamada interna (this.childMethod())?",
    options: [
      "Spring ignora propagation REQUIRES_NEW",
      "O proxy do Spring Security bloqueia",
      "Spring usa proxies AOP; chamadas diretas 'this' ignoram o proxy, contornando a transação",
      "Transações não funcionam em métodos public"
    ],
    correctIndex: 2,
    explanation: "Spring cria objeto Proxy em redor da classe. Se chamas `this.metodo()`, estás a chamar o objeto interno sem passar pelo Proxy AOP."
  },

  // ANGULAR / FRONTEND
  {
    category: "reactjs", // Mapped to web/frontend in quiz context or we use existing typescript/reactjs/java category
    code: `@Component({\n  selector: 'app-user',\n  template: \`<p>{{ user.name }}</p>\`,\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class UserComponent {\n  @Input() user!: User;\n}`,
    question: "Como funciona ChangeDetectionStrategy.OnPush no Angular?",
    options: [
      "Verifica alterações a cada milissegundo",
      "Só re-renderiza componente se a referência dos @Input mudar ou evento do componente disparar",
      "Desativa change detection por completo",
      "Funciona igual ao Default"
    ],
    correctIndex: 1,
    explanation: "OnPush reduz verificações no DOM. Mutações internas de objetos/arrays sem trocar referência NÃO disparam render no OnPush."
  },
  {
    category: "reactjs",
    code: `// RxJS Operators\nsearchTerm$.pipe(\n  debounceTime(300),\n  switchMap(term => this.service.search(term))\n).subscribe();`,
    question: "RxJS: Por que usar switchMap num Typeahead/Busca?",
    options: [
      "Executa todos os pedidos em paralelo",
      "Cancela o pedido HTTP anterior em andamento se novo valor for emitido",
      "Guarda resultados em cache",
      "Concatena pedidos por ordem de chegada"
    ],
    correctIndex: 1,
    explanation: "switchMap cancela subscrição/pedido anterior quando entra novo termo. Evita race conditions de respostas antigas chegarem depois."
  }
];

console.log("Total sample questions ready:", questions.length);
