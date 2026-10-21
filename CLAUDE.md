# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A data-first repository: `config.json` (all static game data for Knights: Clash of Heroes) and `initial_state.json` (a new player's starting kingdom) are the source of truth. The TypeScript in `src/` only validates those files; it is not game runtime logic. The package is published as `@kcoh/config` (CommonJS, `dist/`).

## Commands

- `npm run validate` — validate `config.json` and `initial_state.json` (run this after any data edit; also runs in the pre-commit hook and CI)
- `npm test` (watch) / `npx vitest run` (once) / `npx vitest run -t "<test name>"` (single test); tests live in `__tests__/`
- `npm run lint` / `npm run lint:check`, `npm run format` / `npm run format:check`, `npm run typecheck`, `npm run build`

Pre-commit (Husky + lint-staged) runs `eslint --fix` and `prettier --write` on staged `.ts` files, then `npm run validate`. ESLint uses the flat config `eslint.config.mjs`; Prettier uses 4 spaces, no semicolons, 120 columns.

## Architecture

- `src/schemas/` — Zod schemas. `common.ts` has shared primitives and enums; `config.ts` has one schema per `config.json` table, combined in `configSchema`; `initial-state.ts` has `initialStateSchema`. All objects are `z.strictObject`, so any new JSON property must be added to the schema, or validation fails. Every table array also enforces unique `id`s.
- `src/validation.ts` — `validateConfig` / `validateInitialState` run the schema, then referential-integrity checks (every referenced id must exist; the initial state may only place things in chunks listed in `kingdom_chunk_ids`). Dangling `attribute_id`s are deliberately only warnings, because `attribute_types` is incomplete.
- `src/validate.ts` — the CLI behind `npm run validate`; validates the config first, then the initial state against it.
- `src/index.ts` — public exports (schemas + validators).

## Conventions

- The schemas follow the actual JSON, not the docs; the docs describe some fields that the JSON does not have yet (e.g. `allowed_unit_quanty` in the data vs `allowed_unit_occupation` in the docs).
- Documentation is bilingual and must stay in sync: `docs/pt-br/` is the original, `docs/en/` mirrors it file for file. Update both when a property or interface changes. READMEs: `README.md` (English) and `README.pt-br.md`.
- TypeScript 6 does not auto-include `@types`; `tsconfig.json` sets `"types": ["node"]` explicitly.
