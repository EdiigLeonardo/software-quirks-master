import fs from 'fs';
import path from 'path';

// Parse 01 & 02 files to generate caveman Q&A entries
const qContent = fs.readFileSync('questions/01-perguntas-por-topico.md', 'utf-8');
const rContent = fs.readFileSync('questions/02-respostas-por-topico.md', 'utf-8');

// Quick analysis of topics & questions
console.log("Q lines:", qContent.split('\n').length);
console.log("R lines:", rContent.split('\n').length);
