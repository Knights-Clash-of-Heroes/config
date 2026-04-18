# ⚔️ Knights: Clash of Heroes — Game Configuration

Este repositório contém o arquivo mestre de configuração para o **Knights: Clash of Heroes**, um projeto voltado para o equilíbrio e estruturação técnica de sistemas de jogo, incluindo economia, combate, progressão e narrativa.

## 📜 Visão Geral

O arquivo [`config.json`](./config.json) é o coração do jogo, o [`initial_state.json`](./initial_state.json) define as condições de início para novos jogadores, enquanto o [`en.json`](./en.json) provê a localização em inglês para todas as chaves de texto. Eles definem o comportamento de todas as entidades, desde a inteligência de combate das tropas até os diálogos épicos da campanha principal.

---

## 🏗️ Sistemas Principais

### 💎 Economia & Recursos
O sistema econômico agora conta com recursos diversificados que sustentam o crescimento e o gameplay:
- **Fundamentais:** Gold, Wood, Stone, Iron, Crystal e XP.
- **Sustentabilidade:** **Energy**, recurso essencial para a realização de ações no jogo.
- **Colecionáveis de Elite:** Dragoons (Bronze, Silver e Gold), unidades especiais tratadas como recursos de alta raridade.

### ⚔️ Mecânicas de Combate & Tripas
O sistema de combate evoluiu para incluir tipos de dano e atributos específicos:
- **Tipos de Ataque:** As unidades agora são classificadas em categorias como **Melee**, **Arrow**, **Magic** e **Siege**.
- **Atributos & Resistências:** Sistema dinâmico de buffs e debuffs (ex: redução de dano de flechas, aumento de dano mágico).
- **Estatísticas Base:** Health, Attack, Initiative, Speed e Range.

### 💂 Treinamento de Unidades
As unidades (Militiaman, Hireling, Ranger, etc.) possuem requisitos específicos:
- **Custo de Treinamento:** Definido em `training_cost` (unidades agora usam custo de treinamento em vez de preço simples).
- **Dependência de Construção:** Cada unidade exige um edifício específico (`training_building_id`) e um nível mínimo de construção.

### 🏰 Gestão do Reino (Kingdom)
Gerencia o layout e a infraestrutura:
- **Edifícios de Produção:** Farm, Mine, Timber Hut, Quarry, Smithy.
- **Edifícios de Utilidade:** Sanctuary (Cura/Espiritual), Vault (Armazenamento), Pavillion (Habitação), **Market** (Comércio).
- **Edifícios Especiais:** **Altar of Heroes**, o local sagrado para ressuscitar e gerenciar seus heróis.
- **Defesa & Militar:** Watchtower, Barracks, Archery Range.
- **Centro do Poder:** Castle, o coração do reino.
- **Sistema de Terrenos (Chunks):** Grade 5x5 de chunks (12x12 tiles cada). O jogador começa com o centro 3x3 e deve expandir para as extremidades.
- **Reconstrução:** Sistema de `kingdom_buildings` para edifícios que já existem no mapa (ruínas) e exigem um custo de reconstrução para serem ativados.
- **Tempo de Construção:** Gerenciamento de progressão técnica de obras via `construction_time`.

### 📚 Tecnologia & Pesquisa
Expandindo o poder do reino através de estudos:
- **Castle Researches:** Pesquisas focadas em desbloquear novos edifícios e melhorias de infraestrutura.
- **Arsenal Researches:** Melhorias tecnológicas para fortalecer as unidades e desbloquear tropas de elite.

### 📦 Itens & Recompensas
O sistema de loot e inventário:
- **Items:** Recursos processados e materiais (ex: pedras de carvão, barras de aço) que podem ser vendidos ou usados em construções.
- **Chests & Rewards:** Sistema de baús com recompensas probabilísticas (`chest_rewards`), podendo conter unidades, itens ou recursos.

### 🗺️ Campanha & Missões
- **Quests & Tasks:** Sistema de objetivos encadeados com recompensas por nível.
- **Narrativa Interativa:** Diálogos e citações (`campaign_quotes`) entre personagens como Roland e o Necromancer que guiam a história.
- **Nós de Campanha:** Fases progressivas com recompensas e restrições de unidades.

---

## 🛠️ Estrutura do Config

A configuração está organizada para suportar a complexidade crescente do motor do jogo:

```json
// Estrutura Principal: config.json e initial_state.json
{
  "resources": [],           // Definição de recursos e unidades de elite
  "shop_categories": [],    // Categorias da loja (Defense, Production, etc)
  "shop_items": [],         // Itens disponíveis para compra
  "levels": [],             // Progressão, IDs de nível e recompensas
  "attack_types": [],       // Tipos de dano (Melee, Magic, etc)
  "attribute_types": [],    // Modificadores de combate e resistências
  "units": [],              // Dados das tropas e requisitos de treino
  "buildings": [],          // Dados das construções e tempos de obra
  "kingdom_land_chunks": [], // Grade 5x5 de terrenos (Default vs Expansion)
  "kingdom_buildings": [],   // Edifícios pré-instalados para reconstrução
  "campaign_nodes": [],     // Fases da campanha
  "quests": [],             // Missões e tarefas
  "castle_researches": [],  // Pesquisas do Castelo (desbloqueios/melhorias)
  "arsenal_researches": [], // Pesquisas do Arsenal (melhorias de unidades)
  "items": [],              // Itens de inventário e materiais
  "chests": []              // Baús de recompensas e tabelas de drop
}
```

---

## 📖 Documentação de Entidades

Este guia detalha como registrar cada objeto no `config.json`. Todas as entidades devem seguir as [Diretrizes de Estilo](AGENTS.md).

### 🛠️ Estruturas Reutilizáveis

#### **1. Matriz de Custo/Preço (`Price[]`)**
Usado em construções, pesquisas, treinamento e expansões.

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `type` | `string` | Tipo de custo (`resource`). | `"resource"` |
| `resource_id` | `number` | ID do recurso (se type for resource). | `1` |
| `quantity` | `number \| string` | Quantidade (número) ou `"maximum"`. | `500` |

```json
"price": [
  { "type": "resource", "resource_id": 1, "quantity": 1000 },
  { "type": "resource", "resource_id": 2, "quantity": 50 }
]
```

#### **2. Atributos de Status (`Stats`)**
Define o poder de combate de unidades e edifícios.

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `health` | `number` | Pontos de vida da entidade. | `100` |
| `attack` | `number \| null` | Poder de ataque básico. | `25` |
| `initiative` | `number \| null`| Ordem de turno (maior age primeiro). | `100` |
| `speed` | `number \| null` | Alcance de movimento/ação. | `3` |
| `range` | `number \| null` | Alcance do ataque de projéteis. | `null` |

```json
"stats": {
  "health": 100,
  "attack": 25,
  "initiative": 100,
  "speed": 3,
  "range": null
}
```

---

### 🗂️ Registro de Entidades

#### **0. Estado Inicial (`initial_state.json`)**
Configurações de início de um novo jogador. Localizado em um arquivo separado para facilitar a criação de diferentes cenários iniciais.

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `resources` | `array` | Recursos iniciais `{ resource_id, quantity }`. | `[...]` |
| `buildings` | `array` | Prédios iniciais `{ building_id, chunk_id, x, y }`. | `[...]` |

```json
// initial_state.json
{
  "resources": [ { "resource_id": 1, "quantity": 5000 } ],
  "buildings": [ { "building_id": 1, "chunk_id": 4, "x": 0, "y": 0 } ]
}
```

#### **1. Recursos (`resources`)**

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `id` | `number` | ID único incremental do recurso. | `1` |
| `name` | `string` | Nome de referência interno. | `"Gold"` |
| `name_key` | `string` | Chave p/ localização do nome. | `"resource_1_name"` |
| `description_key` | `string` | Chave p/ localização da descrição. | `"resource_1_desc"` |

#### **2. Unidades (`units`)**

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `training_time` | `number` | Tempo de fila em segundos. | `600` |
| `training_cost` | `Price[]` | Custo total de recursos. | `[...]` |
| `type` | `string` | `"on_foot"` ou `"mounted"`. | `"on_foot"` |
| `attack_type` | `string` | `melee`, `arrow`, `magic` ou `siege`. | `"melee"` |
| `training_building_id` | `number` | Edifício que produz a unidade. | `2` |
| `stats` | `Stats` | Objeto de atributos militares. | `{...}` |
| `attributes` | `array \| null`| Lista de modificadores `{ attribute_id, value }`. | `[...]` |

```json
{
  "id": 1,
  "name": "Militiaman",
  "training_time": 15,
  "training_cost": [ { "type": "resource", "resource_id": 1, "quantity": 380 } ],
  "attack_type": "melee",
  "stats": { "health": 100, "attack": 25, "initiative": 100, "speed": 3, "range": null }
}
```

#### **3. Edifícios (`buildings`)**

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `price` | `Price[]` | Preço de compra (se disponível). | `[...]` |
| `construction_time` | `number` | Tempo de obra em segundos. | `300` |
| `size` | `object` | `{ width, height }` da base do prédio. | `{"width": 4}` |
| `stats` | `Stats` | Geralmente contém apenas `health`. | `{...}` |
| `attributes` | `array \| null`| Modificadores aplicados ao prédio. | `null` |

#### **4. Terrenos (`kingdom_land_chunks`)**

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `is_expansion` | `boolean` | Se o chunk inicia trancado. | `true` |
| `position` | `object` | Coordenadas na matriz 5x5 do reino. | `{"x": 2, "y": 2}` |
| `price` | `Price[]` | Recursos para desbloquear o chunk. | `[...]` |

#### **5. Edifícios de Mapa (`kingdom_buildings`)**

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `building_id` | `number` | Referência ao edifício no catálogo. | `13` |
| `chunk_id` | `number` | Referência ao chunk de terreno. | `1` |
| `is_built` | `boolean` | Se o prédio já inicia operante. | `false` |
| `reconstruction_price`| `Price[]` | Custo p/ ativar o prédio (ruína). | `[...]` |

#### **6. Missões (`quests`)**

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `required_level_id` | `number` | Gatilho de nível para a missão. | `2` |
| `task_ids` | `array` | Conjunto de tarefas a cumprir. | `[1, 2, 3]` |
| `rewards` | `Price[]` | Itens ganhos ao finalizar. | `[...]` |

#### **7. Pesquisas (`researches`)**

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `research_time` | `number` | Duração da pesquisa em segundos. | `7200` |
| `unlock_building_id` | `number` | Libera um prédio após o término. | `5` |
| `unlock_unit_id` | `number` | Libera uma unidade após o término. | `8` |
| `building_upgrade_id`| `number` | ID da melhoria de construção vinculada. | `1` |
| `unit_upgrade_id` | `number` | ID da melhoria de unidade vinculada. | `1` |

#### **8. Itens (`items`)**
Define materiais e objetos que podem ser estocados ou vendidos.

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `id` | `number` | ID único do item. | `1` |
| `sell_price` | `Price[]` | Valor de venda no mercado. | `[...]` |

#### **9. Sistema de Baús (`chests`)**
Lógica de loot e probabilidades de drop.

**Chest Rewards (`chest_rewards`):**
| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `type` | `string` | Categoria: `unit`, `item`, `chest`, `resource`. | `"unit"` |
| `unit_id` | `number` | ID da unidade se o tipo for unit. | `1` |
| `quantity` | `number` | Quantidade entregue na recompensa. | `5` |

**Baús (`chests`):**
| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `rewards` | `array` | Lista de `{ chest_reward_id, chance }`. | `[...]` |

#### **10. Divisão de Pesquisas**
As pesquisas são segmentadas por edifícios de alta especialização:

- **Castle Researches**: Desbloqueios de infraestrutura e prédios avançados.
- **Arsenal Researches**: Melhorias tecnológicas para tropas (Soldados). Interfere no `unit_upgrade_id`.
- **Altar of Heroes Researches**: Aprimoramento das estatísticas dos Heróis.
    - **Diferencial**: Heróis funcionam como unidades de elite; diferente dos soldados, eles **não precisam ser ressuscitados** se caírem em batalha (recuperam-se automaticamente), mas suas melhorias permanentes são feitas aqui.
- **Runic Tower Researches**: Melhorias voltadas a habilidades mágicas e místicas.

#### **11. Tipos de Atributos (`attribute_types`)**
Define a lógica de bônus e resistências que podem ser aplicados a unidades e prédios.

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `id` | `number` | ID único do modificador. | `1` |
| `name` | `string` | Template de nome (suporta `{percentage}`). | `"{percentage}% de Dano"` |
| `attack_type`| `string` | Vincula a um tipo de dano específico. | `"melee"` |

```json
{
  "id": 1,
  "attack_type": "arrow",
  "name": "-{percentage}% of Arrow Damage",
  "description": "Reduces arrow damage by {percentage}%"
}
```

---

## 🚀 Como Contribuir

1. **Validação:** Sempre verifique se o JSON é válido após edição.
2. **Localização:** Utilize as chaves `name_key` e `description_key` para compatibilidade multilíngue.
3. **Equilíbrio:**
   - Para **Unidades**, ajuste o `training_cost`.
   - Para **Construções**, ajuste o `price` e o `construction_time`.
   - Lembre-se de vincular novas unidades ao seu respectivo `attack_type_id`.

---

<p align="center">
Desenvolvido com foco em fidelidade, estratégia e expansibilidade.
</p>