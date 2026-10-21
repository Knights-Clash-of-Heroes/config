# @kcoh/config

🇺🇸 English · 🇧🇷 [Português](./README.pt-br.md)

This repository contains the core configuration of the game **Knights: Clash of Heroes (KCOH)**. It works as the "source of truth" for all the static data of the game, allowing servers and clients to operate under the same set of rules and definitions.

## 🎯 Purpose

The project is data-focused. The main file is `config.json`, which must be provided to the game servers so that they, in turn, distribute the configuration to their respective clients.

- **For the Game**: Defines unit attributes, construction costs, levels, rewards and much more.
- **For Servers**: Acts as a data contract, allowing custom servers to create their own versions of the configuration while respecting the same schema.
- **For Maintainers**: Provides validation tools and documentation to make sure that new entities and balance changes do not break the integrity of the system.

## 🏗️ Repository Structure

- **`config.json`**: Contains all the actual game data.
- **`initial_state.json`**: The initial kingdom state of a new player (resources, buildings, land chunks and units).
- **`src/schemas/`**: [Zod](https://zod.dev) schemas describing the format of `config.json` and `initial_state.json`.
- **`src/validation.ts`**: Schema validation and referential integrity checks (ids pointing to entities that do not exist).
- **`src/validate.ts`**: Command-line entry point that validates both JSON files.
- **`docs/`**: Detailed documentation describing every interface, enum and structure present in the configuration, in [English](./docs/en/config.md) and [Portuguese](./docs/pt-br/config.md).

## 🛠️ How to Contribute and Change

1. **Changing Data**: Balance changes and new entities must be added directly to `config.json` (or `initial_state.json`).
2. **Validation**: After changing the JSON, run `npm run validate`. The command checks that the files respect the schemas in `src/schemas` and that every referenced id exists.
3. **Documentation**: Whenever a new property is added or an interface is changed, the documentation in `docs/en` and `docs/pt-br` must be updated to reflect the change.

### Scripts

| Command                | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `npm run validate`     | Validates `config.json` and `initial_state.json`             |
| `npm run lint`         | Runs ESLint and fixes what it can                            |
| `npm run lint:check`   | Runs ESLint without modifying files                          |
| `npm run format`       | Formats the code with Prettier                               |
| `npm run format:check` | Checks formatting without modifying files                    |
| `npm run typecheck`    | Type-checks the code with TypeScript                         |
| `npm test`             | Runs the tests (Vitest)                                      |

### Automation

- **Pre-commit** ([Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/lint-staged/lint-staged)): formats and lints the staged `.ts` files and validates the JSON files before every commit.
- **GitHub Actions** (`.github/workflows/validate.yml`): on every push to `main` and on every pull request, validates the JSON files and runs formatting, lint, typecheck and tests.
- **Dependabot** (`.github/dependabot.yml`): checks weekly for updates to npm dependencies and GitHub Actions.

## 📄 Technical Documentation

The detailed documentation of the tables and modules can be found at:

- 👉 [**Main Documentation Page in English**](./docs/en/config.md)
- 👉 [**Página Principal da Documentação em Português**](./docs/pt-br/config.md)

## ⚠️ Disclaimer

This project is an independent work and has no affiliation with Playkot. It is fully **open-source** and **not-for-profit**.

This repository was created by fans with the goal of preserving a legacy and deepening knowledge of game development. The project explores real technical challenges of architecture, design patterns, WebSockets and data-driven systems. There is no intention whatsoever of harming Playkot or the original rights holders; it is a technological and educational tribute.
