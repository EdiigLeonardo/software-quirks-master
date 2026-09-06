import fs from 'fs';
import path from 'path';

// Script to parse markdown files and produce Caveman style TS question objects

const qFile = fs.readFileSync('questions/01-perguntas-por-topico.md', 'utf-8');
const rFile = fs.readFileSync('questions/02-respostas-por-topico.md', 'utf-8');
const siemensFile = fs.readFileSync('questions/prep-entrevista-siemens.md', 'utf-8');

console.log("Q length:", qFile.length, "R length:", rFile.length, "Siemens length:", siemensFile.length);
