# SOLID & Clean Code Practice

A Vanilla TypeScript + Vite playground with exercises on **Clean Code**, **code smells (STUPID)**, and the **SOLID principles**. Each topic has a "before" and "after" version so you can compare the smelly code with its refactored solution.

## Contents

| Folder | Topics |
| --- | --- |
| [`src/clean-code`](src/clean-code) | Meaningful names, naming by type, functions, DRY, classes, and a refactoring homework |
| [`src/code-smells`](src/code-smells) | Singleton, high vs. low coupling |
| [`src/solid`](src/solid) | One file per principle (see below) |

### SOLID exercises

| Principle | Files |
| --- | --- |
| **S** — Single Responsibility | `01-srp.ts` |
| **O** — Open/Closed | `02-open-close-a.ts`, `02-open-close-b.ts`, `02-open-close-c.ts` |
| **L** — Liskov Substitution | `03-liskov-a.ts`, `03-liskov-b.ts` |
| **I** — Interface Segregation | `04-segregation.ts` |
| **D** — Dependency Inversion | `05-dependency-a.ts`, `05-dependency-b.ts`, `05-dependency-c.ts` |

### Notes and slides

- [`SOLID.md`](SOLID.md) — study notes covering technical debt, refactoring, clean code, STUPID, other code smells (bloaters, couplers), and SOLID. *(Written in Spanish.)*
- [`Presentaciones.pdf`](Presentaciones.pdf) — course slides.

## Getting started

```sh
yarn install      # or: npm install
yarn dev          # or: npm run dev
```

Open the URL printed by Vite and check the browser console for the exercise output. To run a different exercise, change the import in `src/main.ts`:

```ts
import './solid/05-dependency-a';
```

## Scripts

| Script | Description |
| --- | --- |
| `yarn dev` | Start the Vite dev server |
| `yarn build` | Type-check and build |
| `yarn preview` | Preview the production build |
