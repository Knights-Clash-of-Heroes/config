# Estado Inicial

> [!WARNING]
> **O formato de `initial_state.json` neste repositório é incompatível com o jogo original.**
>
> Ele foi desenhado do zero, antes de os arquivos originais do jogo estarem disponíveis, seguindo o modelo do `config.json` (ids apontando para as tabelas da config, posicionamento por `chunk_id` + `position`). Os desenvolvedores só agora encontraram os arquivos originais do jogo, quase 5 anos depois do fim dele, e o cliente original **não** consome este formato. O cliente original é alimentado pela resposta `initialize` do servidor, que tem outro formato, baseado em blocos (veja [Formato original](#formato-original-encontrado-no-cliente)).
>
> Até que o arquivo seja migrado, trate-o como um **rascunho de projeto do reino de um jogador novo**, não como um substituto direto do que o cliente original espera. Um servidor que fale com o cliente original precisa traduzi-lo para os blocos do `initialize` descritos abaixo.

## Formato atual (rascunho legado)

É o que `initial_state.json` e o `initialStateSchema` em `src/schemas/initial-state.ts` descrevem hoje. Todos os objetos são estritos: propriedades desconhecidas falham na validação.

| Propriedade               | Tipo             | Descrição                                                           |
| ------------------------- | ---------------- | ------------------------------------------------------------------- |
| kingdom.resources         | Resource[]       | Quantidade inicial por recurso (`resource_id`, `quantity`).         |
| kingdom.buildings         | PlacedBuilding[] | Construções posicionadas no reino (`building_id` + posicionamento). |
| kingdom.kingdom_chunk_ids | int[]            | Pedaços de terra do reino. O posicionamento só pode usar estes.     |
| kingdom.units             | PlacedUnit[]     | Unidades posicionadas no reino (`unit_id` + posicionamento).        |

O posicionamento é `chunk_id`, `direction` (veja [Direção](./enums/direction.md)) e `position` (veja [Posição](./interfaces/position.md)). `quantity` é um número ou a string `"maximum"`.

```json
{
    "kingdom": {
        "resources": [{ "resource_id": 1, "quantity": 5000 }],
        "buildings": [{ "building_id": 1, "chunk_id": 5, "direction": "north", "position": { "x": 0, "y": 0 } }],
        "kingdom_chunk_ids": [1, 2, 3],
        "units": [{ "unit_id": 1, "chunk_id": 8, "direction": "north", "position": { "x": 3, "y": 4 } }]
    }
}
```

O `npm run validate` ainda confere este formato, inclusive se todo id referenciado existe no `config.json`.

## Formato original (encontrado no cliente)

O cliente original nunca lê um documento "kingdom". Ele recebe do servidor um **objeto JSON parcial, organizado em blocos**, e mescla cada bloco no estado local (`economics/GlobalResponseParser.as` no cliente decompilado). A resposta do `initialize` pode trazer todos os blocos abaixo; as respostas seguintes trazem só os blocos que mudaram.

| Bloco                     | Formato (como o cliente lê)                                                        | Observações                                                       |
| ------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `player`                  | `{ player_id, sync, level, energy, energyRestore, adInfo, ...campos de recursos }` | `player_id` é obrigatório e vira o id do jogo (`gid`).            |
| `storage`                 | `{ wood, stone, iron, population }`                                                | Armazenamento de recursos, números simples.                       |
| `playerStats`             | objeto livre; só as chaves que existem na classe do cliente são aplicadas          | Campos como `day` e `dayHourReset` são usados (`PlayerStats.as`). |
| `inventory`               | `{ "<id do item>": quantidade }`                                                   | Quantidade `0` remove o item.                                     |
| `recipes`                 | mapa indexado por id                                                               | Receitas do jogador.                                              |
| `unlocks`                 | mapa indexado por id                                                               | Id presente no mapa significa desbloqueado.                       |
| `researches`              | mapa indexado por id                                                               |                                                                   |
| `missions`, `pveMissions` | mapa indexado por id                                                               |                                                                   |
| `heroes`                  | `{ "<id do herói>": { ... } }`                                                     | Cada entrada é carregada em um objeto de informações do herói.    |
| `entityModified`          | patch aplicado sobre o banco local de entidades do cliente                         |                                                                   |

Os blocos `deadUnits`, `interaction`, `globalRecipes`, `payments`, `paymentsLog`, `modules`, `corovan`, `itemParts`, `clan`, `boosters`, `gwmap`, `mercenaries` e `runes` também existem, mas ainda não foram mapeados neste repositório.

Blocos que só aparecem na resposta do `initialize`: `clientVars`, `settings`, `dailyBonus.day`, `new_player`, `maintenance`, `quests`, `obstacles`.

Principais diferenças em relação ao rascunho legado:

- Os recursos são **campos nomeados** (`money`, `cash`, `wood`, `stone`, `iron`, `energy`, `population`), não entradas com `resource_id`.
- As coleções são **mapas indexados por id**, não arrays de objetos.
- A cidade é montada a partir do mapa local do cliente mesclado com os dados do `initialize`, não de listas de `chunk_id` + `position` na resposta.
- Nada é expresso como `"maximum"`; o servidor envia números concretos.

### O que ainda é desconhecido

O esquema interno da maioria dos blocos e a forma como as entidades da cidade (construções, unidades) são posicionadas dentro do `initialize` **ainda não foram mapeados**. Estão nos métodos `loadFromObject` / `load` das classes do cliente decompilado. Os valores iniciais (nível, recursos, população) nunca foram encontrados; os usados pelo servidor de referência são estimativas. Não presuma que os números de `initial_state.json` sejam os originais.

## Plano de migração

1. Mapear o esquema de cada bloco a partir do cliente decompilado e criar um schema Zod por bloco.
2. Substituir o `initial_state.json` pelo formato em blocos (ou adicionar um conversor do rascunho legado para os blocos).
3. Atualizar o `src/validation.ts` para que as checagens de integridade referencial sigam o novo formato.
4. Remover o aviso acima quando o arquivo corresponder ao formato original.
