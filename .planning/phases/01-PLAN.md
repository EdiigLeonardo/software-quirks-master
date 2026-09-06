# Phase 1 Plan: Extração, Formatação Caveman e Integração de Perguntas

## Overview
Parse de todos os ficheiros de perguntas/respostas em `questions/`, conversão para formato caveman (curto, sem palha), e estruturação direta no formato da aplicação `src/data/questions.ts`.

## Steps
1. Ler `questions/01-perguntas-por-topico.md` e `questions/02-respostas-por-topico.md`.
2. Ler `questions/prep-entrevista-siemens.md`.
3. Criar script / gerador para resumir respostas no estilo Caveman (ex: "Java passa referência de objeto por VALOR da referência", "== compara endereço, .equals() compara valor").
4. Atualizar `src/data/questions.ts` adicionando todas as perguntas com IDs incrementais únicos e categorias ajustadas.
