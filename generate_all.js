import fs from 'fs';

// Complete questions generator for 01-perguntas & 02-respostas
const qText = fs.readFileSync('questions/01-perguntas-por-topico.md', 'utf-8');
const rText = fs.readFileSync('questions/02-respostas-por-topico.md', 'utf-8');
const siemensText = fs.readFileSync('questions/prep-entrevista-siemens.md', 'utf-8');

console.log("Q size:", qText.length, "R size:", rText.length);
