# ⚔️ Knights: Clash of Heroes — Game Configuration

Este repositório contém o arquivo mestre de configuração para o **Knights: Clash of Heroes**, um projeto voltado para o equilíbrio e estruturação técnica de sistemas de jogo, incluindo economia, combate, progressão e narrativa.

## 📜 Visão Geral

O arquivo [`config.json`](./config.json) é o coração do jogo. Ele define o comportamento de todas as entidades, desde a quantidade de ouro necessária para treinar um combatente até os diálogos épicos da campanha principal.

---

## 🏗️ Sistemas Principais

### 💎 Economia & Recursos
O sistema econômico é baseado em 6 recursos fundamentais que sustentam o crescimento do reino:
- **Ouro (Gold):** Moeda principal para transações e treinamento.
- **Madeira (Wood):** Essencial para construção de infraestrutura.
- **Pedra (Stone):** Utilizada em edificações defensivas e avançadas.
- **Ferro (Iron):** Vital para a forja de armas e equipamentos.
- **Cristal (Crystal):** Recurso premium para itens e acelerações raras.
- **XP:** Motor de progressão de nível do jogador.

### 💂 Unidades & Combate
Define as estatísticas base para o exército. Cada unidade possui atributos únicos:
- **Health:** Pontos de vida totais.
- **Attack:** Poder de dano por golpe.
- **Initiative:** Ordem de ação no turno.
- **Speed:** Alcance de movimento no grid.
- **Range:** Alcance de ataque (exclusivo para unidades à distância).

### 🏰 Gestão do Reino (Kingdom)
Gerencia o layout e a expansão do território:
- **Chunks de Terra:** Layout de grade 5x5 com áreas de expansão.
- **Edifícios:** Castle (Centro), Barracks (Unidades), Pavillion (Habitação).
- **Pesquisas:** Sistemas de árvore tecnológica (Castle & Arsenal Researches) em desenvolvimento.

### 🗺️ Campanha & Missões
O jogo conta com um sistema de narrativa dinâmica:
- **Quests:** Objetivos guiados por personagens (ex: Roland) com recompensas específicas.
- **Diálogos:** Sistema de citações (`campaign_quotes`) que dão vida à história.
- **Campaign Nodes:** Nós de progressão no mapa com restrições de unidades e recompensas de conclusão.

---

## 🛠️ Estrutura do Config

A configuração está organizada em blocos semânticos para facilitar a manutenção:

```json
{
  "resources": [],           // Definição de recursos
  "shop_categories": [],    // Categorias da loja
  "shop_items": [],         // Vínculo entre loja e itens
  "levels": [],             // Progressão e recompensas por nível
  "units": [],              // Dados das tropas
  "buildings": [],          // Dados das construções
  "kingdom_land_chunks": [], // Dados de terreno/expansão
  "campaign_nodes": [],     // Fases da campanha
  "characters": [],         // Personagens da trama
  "quests": []              // Missões e tarefas
}
```

## 🚀 Como Contribuir

1. **Validação:** Sempre verifique se o JSON é válido após edição.
2. **Localização:** Utilize as chaves `name_key` e `description_key` para manter a compatibilidade com sistemas multilíngues.
3. **Equilíbrio:** Ao alterar estatísticas (`stats`), lembre-se de ajustar o `price` proporcionalmente para manter o balanceamento do jogo.

---

<p align="center">
Desenvolvido com foco em fidelidade e estratégia.
</p>