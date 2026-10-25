# Initial State

`initial_state.json` describes the kingdom of a brand-new player. It now follows the **format of the original game**: the same shape the original server sent in its `initialize` response (JSON, like the rest of the original data; the only XML files of the original game are `client_config`, `server_config`, `levels` and `billing`, none of which holds the initial state).

> [!WARNING]
> **The ids in this file are original game ids, which do not exist in `config.json`.**
>
> `config.json` was written before the original game files were found (the developers only found them now, almost 5 years after the game shut down) and uses its own sequential ids. The original game identifies every building and unit by an id of its own database (for example `490400668` for the Castle). The two id spaces are incompatible. This repository bridges them with a small mapping table, [`originalEntityIds`](../../src/original-ids.ts), for the entities of the initial city only. Everything outside that table cannot be cross-checked yet.

The previous format (`kingdom.resources`, `kingdom.buildings`, `kingdom.units` with `chunk_id` + `position`) was a design draft and was removed; it is still in the git history.

## Format

| Property  | Type                       | Source               | Description                                                  |
| --------- | -------------------------- | -------------------- | ------------------------------------------------------------ |
| player    | Player                     | estimated            | Starting level and resources.                                |
| entities  | map `sceneId` → Entity     | **original (`map`)** | The initial city: buildings and units already placed.        |
| options   | `{ landLimit }`            | **original (`map`)** | `landLimit` is the number of land chunks the player can own. |

### Player

| Property   | Type | Description                  |
| ---------- | ---- | ---------------------------- |
| level      | int  | Starting level.              |
| experience | int  | Starting experience.         |
| money      | int  | Gold.                        |
| cash       | int  | Crystals (premium currency). |
| wood       | int  | Wood.                        |
| stone      | int  | Stone.                       |
| iron       | int  | Iron.                        |

Energy is not stored: the original game starts it at its maximum, which the server computes.

### Entity

Exactly the object the original client merges into its world (`WorldManageUtils.mergeMapData`).

| Property | Type | Description                                                                                       |
| -------- | ---- | ------------------------------------------------------------------------------------------------- |
| id       | int  | Id of the entity in the **original** database. See [the mapping](#original-id-mapping).           |
| sceneId  | int  | Unique id of this placed object. It must equal the key of the entry in `entities`.                |
| owner    | int  | Owner code used by the original map (`1` for the player's own objects, `3` for the Altar and Market). The meaning of `3` is not confirmed. |
| x, y     | num  | Position on the city grid.                                                                        |
| dir      | int  | Orientation code of the original client (`0` or `6` in the initial city).                         |

## Original id mapping

| Original id  | Original name (Russian) | Name        | Config entity            | Certain |
| ------------ | ----------------------- | ----------- | ------------------------ | ------- |
| `490400668`  | Замок                   | Castle      | building `1` (Citadel)   | yes     |
| `335153735`  | Казарма                 | Barracks    | building `2`             | yes     |
| `482206421`  | Палатка                 | Tent        | building `3` (Pavillion) | **no**, matched by name only |
| `965182906`  | Ферма                   | Farm        | building `5`             | yes     |
| `1212037112` | Алтарь героев           | Altar of Heroes | building `13`        | yes     |
| `1095215970` | Рынок                   | Market      | building `14`            | yes     |
| `793331619`  | Grunt: Копейщик 1       | Pikeman     | unit `1` (Militiaman)    | yes     |

`npm run validate` fails if an entity uses an original id that is not in this table, or if the config entity it maps to does not exist in `config.json`.

## What is verified and what is not

- **Verified (read from the recovered `map` file):** the 9 entities of the initial city (Altar, Castle, Farm, three Pikemen, Barracks, Market, Tent), their positions and `landLimit` `10`.
- **Estimated:** everything in `player`. The values come from the previous draft of this file; the original starting values live in `server_config`, which was **not recovered**. Do not treat them as original.
- **Not covered yet:** the other blocks of the original `initialize` response (`storage`, `playerStats`, `inventory`, `unlocks`, `heroes`, `quests`, ...). The client reads them from the server; see `recovery/PROTOCOLO.md` in the main workspace. They are runtime state of a player, not part of a static starting file, and the server builds them.

## Example

```json
{
    "player": { "level": 1, "experience": 0, "money": 5000, "cash": 10, "wood": 50, "stone": 0, "iron": 0 },
    "entities": {
        "828": { "id": 490400668, "sceneId": 828, "owner": 1, "x": 15, "y": -4, "dir": 0 }
    },
    "options": { "landLimit": 10 }
}
```
