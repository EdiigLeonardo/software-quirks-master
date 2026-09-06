import fs from 'fs';

// Script to generate TS questions objects for all topics in questions/
const qText = fs.readFileSync('questions/01-perguntas-por-topico.md', 'utf-8');
const rText = fs.readFileSync('questions/02-respostas-por-topico.md', 'utf-8');
const siemensText = fs.readFileSync('questions/prep-entrevista-siemens.md', 'utf-8');

// We will build clean Question entries
console.log("Reading sources finished.");
