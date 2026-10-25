# Estado Inicial

O `initial_state.json` descreve o reino de um jogador totalmente novo. Ele agora segue o **formato do jogo original**: o mesmo formato que o servidor original enviava na resposta do `initialize` (JSON, como o resto dos dados originais; os únicos arquivos XML do jogo original são `client_config`, `server_config`, `levels` e `billing`, e nenhum deles guarda o estado inicial).

> [!WARNING]
> **Os ids deste arquivo são ids do jogo original, que não existem no `config.json`.**
>
> O `config.json` foi escrito antes de os arquivos originais do jogo serem encontrados (os desenvolvedores só os encontraram agora, quase 5 anos depois do fim do jogo) e usa ids sequenciais próprios. O jogo original identifica cada construção e unidade por um id do seu próprio banco de dados (por exemplo `490400668` para o Castelo). Os dois espaços de ids são incompatíveis. Este repositório faz a ponte com uma pequena tabela de mapeamento, [`originalEntityIds`](../../src/original-ids.ts), só para as entidades da cidade inicial. Tudo que está fora dessa tabela ainda não pode ser conferido.

O formato anterior (`kingdom.resources`, `kingdom.buildings`, `kingdom.units` com `chunk_id` + `position`) era um rascunho de projeto e foi removido; continua no histórico do git.

## Formato

| Propriedade | Tipo                       | Origem                | Descrição                                                         |
| ----------- | -------------------------- | --------------------- | ----------------------------------------------------------------- |
| player      | Player                     | estimada              | Nível e recursos iniciais.                                        |
| entities    | mapa `sceneId` → Entity    | **original (`map`)**  | A cidade inicial: construções e unidades já posicionadas.         |
| options     | `{ landLimit }`            | **original (`map`)**  | `landLimit` é o número de pedaços de terra que o jogador pode ter. |

### Player

| Propriedade | Tipo | Descrição                      |
| ----------- | ---- | ------------------------------ |
| level       | int  | Nível inicial.                 |
| experience  | int  | Experiência inicial.           |
| money       | int  | Ouro.                          |
| cash        | int  | Cristais (moeda premium).      |
| wood        | int  | Madeira.                       |
| stone       | int  | Pedra.                         |
| iron        | int  | Ferro.                         |

A energia não é armazenada: o jogo original a inicia no máximo, e o servidor calcula isso.

### Entity

Exatamente o objeto que o cliente original mescla no seu mundo (`WorldManageUtils.mergeMapData`).

| Propriedade | Tipo | Descrição                                                                                           |
| ----------- | ---- | --------------------------------------------------------------------------------------------------- |
| id          | int  | Id da entidade no banco de dados **original**. Veja [o mapeamento](#mapeamento-de-ids-originais).   |
| sceneId     | int  | Id único deste objeto posicionado. Deve ser igual à chave da entrada em `entities`.                 |
| owner       | int  | Código de dono usado pelo mapa original (`1` para os objetos do jogador, `3` para o Altar e o Mercado). O significado do `3` não foi confirmado. |
| x, y        | num  | Posição na grade da cidade.                                                                         |
| dir         | int  | Código de orientação do cliente original (`0` ou `6` na cidade inicial).                            |

## Mapeamento de ids originais

| Id original  | Nome original (russo) | Nome            | Entidade da config        | Certeza |
| ------------ | --------------------- | --------------- | ------------------------- | ------- |
| `490400668`  | Замок                 | Castelo         | construção `1` (Citadel)  | sim     |
| `335153735`  | Казарма               | Quartel         | construção `2`            | sim     |
| `482206421`  | Палатка               | Tenda           | construção `3` (Pavillion) | **não**, só pelo nome |
| `965182906`  | Ферма                 | Fazenda         | construção `5`            | sim     |
| `1212037112` | Алтарь героев         | Altar de Heróis | construção `13`           | sim     |
| `1095215970` | Рынок                 | Mercado         | construção `14`           | sim     |
| `793331619`  | Grunt: Копейщик 1     | Lanceiro        | unidade `1` (Militiaman)  | sim     |

O `npm run validate` falha se uma entidade usar um id original que não está nesta tabela, ou se a entidade da config para a qual ele aponta não existir no `config.json`.

## O que está verificado e o que não está

- **Verificado (lido do arquivo `map` recuperado):** as 9 entidades da cidade inicial (Altar, Castelo, Fazenda, três Lanceiros, Quartel, Mercado, Tenda), suas posições e o `landLimit` `10`.
- **Estimado:** tudo em `player`. Os valores vêm do rascunho anterior deste arquivo; os valores iniciais originais ficam no `server_config`, que **não foi recuperado**. Não os trate como originais.
- **Ainda não coberto:** os demais blocos da resposta original do `initialize` (`storage`, `playerStats`, `inventory`, `unlocks`, `heroes`, `quests`, ...). O cliente os lê do servidor; veja `recovery/PROTOCOLO.md` no workspace principal. São estado de execução de um jogador, não parte de um arquivo estático de início, e o servidor os monta.

## Exemplo

```json
{
    "player": { "level": 1, "experience": 0, "money": 5000, "cash": 10, "wood": 50, "stone": 0, "iron": 0 },
    "entities": {
        "828": { "id": 490400668, "sceneId": 828, "owner": 1, "x": 15, "y": -4, "dir": 0 }
    },
    "options": { "landLimit": 10 }
}
```
