# @kcoh/config

Este repositório contém as configurações fundamentais do jogo **Knights: Clash of Heroes (KCOH)**. Ele funciona como a "fonte da verdade" (source of truth) para todos os dados estáticos do jogo, permitindo que servidores e clientes operem sob o mesmo conjunto de regras e definições.

## 🎯 Propósito

O projeto é focado em dados. O arquivo principal é o `config.json`, que deve ser fornecido aos servidores de jogo para que estes, por sua vez, distribuam as configurações para seus respectivos clientes.

- **Para o Jogo**: Define atributos de unidades, custos de construção, níveis, recompensas e muito mais.
- **Para Servidores**: Atua como um contrato de dados, permitindo que servidores customizados criem suas próprias versões da configuração respeitando o mesmo esquema.
- **Para Mantenedores**: Oferece ferramentas de validação e documentação para garantir que novas entidades e mudanças de balanceamento não quebrem a integridade do sistema.

## 🏗️ Estrutura do Repositório

- **`config.json`**: Contém todos os dados reais do jogo.
- **`src/`**: Contém o código TypeScript (utilizando **Zod**) responsável por validar o `config.json`. Este código não faz parte da lógica de execução do jogo, apenas garante a integridade dos dados.
- **`docs/`**: Documentação detalhada que descreve cada interface, enum e estrutura presente na configuração.

## 🛠️ Como Contribuir e Alterar

1. **Alteração de Dados**: As mudanças de balanceamento e novas entidades devem ser adicionadas diretamente no `config.json`.
2. **Validação**: Após alterar o JSON, execute os scripts de validação (definidos no `package.json`) para garantir que o arquivo ainda respeita os esquemas definidos em `src/schemas`.
3. **Documentação**: Sempre que uma nova propriedade for adicionada ou uma interface for alterada, a documentação em `docs/pt-br` deve ser atualizada para refletir a mudança.

## 📄 Documentação Técnica

A documentação detalhada das tabelas e módulos pode ser acessada em:
👉 [**Página Principal da Documentação em Português**](./docs/pt-br/config.md)

## ⚠️ Disclaimer

Este projeto é um trabalho independente e não tem afiliação com a Playkot. Ele é totalmente **open-source** e **não visa o lucro**.

Este repositório foi criado por fãs com o objetivo de manter um legado e aprofundar conhecimentos em desenvolvimento de jogos. O projeto explora desafios técnicos reais de arquitetura, design patterns, WebSockets e sistemas orientados a dados. Não existe nenhuma intenção de prejudicar a Playkot ou os detentores originais dos direitos; trata-se de um tributo tecnológico e educacional.
