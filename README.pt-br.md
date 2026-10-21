# @kcoh/config

🇺🇸 [English](./README.md) · 🇧🇷 Português

Este repositório contém as configurações fundamentais do jogo **Knights: Clash of Heroes (KCOH)**. Ele funciona como a "fonte da verdade" (source of truth) para todos os dados estáticos do jogo, permitindo que servidores e clientes operem sob o mesmo conjunto de regras e definições.

## 🎯 Propósito

O projeto é focado em dados. O arquivo principal é o `config.json`, que deve ser fornecido aos servidores de jogo para que estes, por sua vez, distribuam as configurações para seus respectivos clientes.

- **Para o Jogo**: Define atributos de unidades, custos de construção, níveis, recompensas e muito mais.
- **Para Servidores**: Atua como um contrato de dados, permitindo que servidores customizados criem suas próprias versões da configuração respeitando o mesmo esquema.
- **Para Mantenedores**: Oferece ferramentas de validação e documentação para garantir que novas entidades e mudanças de balanceamento não quebrem a integridade do sistema.

## 🏗️ Estrutura do Repositório

- **`config.json`**: Contém todos os dados reais do jogo.
- **`initial_state.json`**: Estado inicial do reino de um novo jogador (recursos, construções, terrenos e unidades).
- **`src/schemas/`**: Schemas [Zod](https://zod.dev) que descrevem o formato de `config.json` e `initial_state.json`.
- **`src/validation.ts`**: Validação dos schemas e checagem de integridade referencial (ids que apontam para entidades inexistentes).
- **`src/validate.ts`**: Comando de linha que valida os dois arquivos JSON.
- **`docs/`**: Documentação detalhada que descreve cada interface, enum e estrutura presente na configuração, em [português](./docs/pt-br/config.md) e [inglês](./docs/en/config.md).

## 🛠️ Como Contribuir e Alterar

1. **Alteração de Dados**: As mudanças de balanceamento e novas entidades devem ser adicionadas diretamente no `config.json` (ou no `initial_state.json`).
2. **Validação**: Após alterar o JSON, execute `npm run validate`. O comando verifica se os arquivos respeitam os schemas de `src/schemas` e se todos os ids referenciados existem.
3. **Documentação**: Sempre que uma nova propriedade for adicionada ou uma interface for alterada, a documentação em `docs/pt-br` e `docs/en` deve ser atualizada para refletir a mudança.

### Scripts

| Comando                | Descrição                                                         |
| ---------------------- | ----------------------------------------------------------------- |
| `npm run validate`     | Valida `config.json` e `initial_state.json`                       |
| `npm run lint`         | Executa o ESLint e corrige o que for possível                     |
| `npm run lint:check`   | Executa o ESLint sem alterar arquivos                             |
| `npm run format`       | Formata o código com o Prettier                                   |
| `npm run format:check` | Verifica a formatação sem alterar arquivos                        |
| `npm run typecheck`    | Verifica os tipos com o TypeScript                                |
| `npm test`             | Executa os testes (Vitest)                                        |

### Automações

- **Pre-commit** ([Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/lint-staged/lint-staged)): formata e aplica o lint nos arquivos `.ts` em stage e valida os arquivos JSON antes de cada commit.
- **GitHub Actions** (`.github/workflows/validate.yml`): a cada push na `main` e em todo pull request, valida os JSONs e executa formatação, lint, typecheck e testes.
- **Dependabot** (`.github/dependabot.yml`): verifica semanalmente atualizações das dependências npm e das GitHub Actions.

## 📄 Documentação Técnica

A documentação detalhada das tabelas e módulos pode ser acessada em:

- 👉 [**Página Principal da Documentação em Português**](./docs/pt-br/config.md)
- 👉 [**Main Documentation Page in English**](./docs/en/config.md)

## ⚠️ Disclaimer

Este projeto é um trabalho independente e não tem afiliação com a Playkot. Ele é totalmente **open-source** e **não visa o lucro**.

Este repositório foi criado por fãs com o objetivo de manter um legado e aprofundar conhecimentos em desenvolvimento de jogos. O projeto explora desafios técnicos reais de arquitetura, design patterns, WebSockets e sistemas orientados a dados. Não existe nenhuma intenção de prejudicar a Playkot ou os detentores originais dos direitos; trata-se de um tributo tecnológico e educacional.
