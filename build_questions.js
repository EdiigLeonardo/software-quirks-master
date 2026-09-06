import fs from 'fs';

// Helper to parse question block
function parseMarkdown() {
  const qText = fs.readFileSync('questions/01-perguntas-por-topico.md', 'utf-8');
  const rText = fs.readFileSync('questions/02-respostas-por-topico.md', 'utf-8');

  // Let's create structured list of items
  // We can write a JS array of Question items directly!
  console.log("Parsing questions and answers...");
}

parseMarkdown();
