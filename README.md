# ⚔️ Knights: Clash of Heroes — Game Configuration

Este repositório contém o arquivo mestre de configuração para o **Knights: Clash of Heroes**, um projeto voltado para o equilíbrio e estruturação técnica de sistemas de jogo, incluindo economia, combate, progressão e narrativa.

## 📜 Visão Geral

O arquivo [`config.json`](./config.json) é o coração do jogo, enquanto o [`en.json`](./en.json) provê a localização em inglês para todas as chaves de texto. Ele define o comportamento de todas as entidades, desde a inteligência de combate das tropas até os diálogos épicos da campanha principal.

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