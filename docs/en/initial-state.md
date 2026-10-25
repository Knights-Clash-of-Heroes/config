# Initial State

> [!WARNING]
> **The format of `initial_state.json` in this repository is incompatible with the original game.**
>
> It was designed from scratch, before the original game files were available, and is modeled after `config.json` (ids pointing into the config tables, `chunk_id` + `position` placement). The developers have only now found the original game files, almost 5 years after the game shut down, and the original client does **not** consume this format. The original client is fed by the server's `initialize` response, which has a different, block-based shape (see [Original format](#original-format-found-in-the-client)).
>
> Until the file is migrated, treat it as a **design draft of a new player's kingdom**, not as a drop-in replacement for what the original client expects. A server that talks to the original client must translate it into the `initialize` blocks described below.

## Current format (legacy draft)

This is what `initial_state.json` and the `initialStateSchema` in `src/schemas/initial-state.ts` currently describe. All objects are strict: unknown properties fail validation.

| Property                   | Type                 | Description                                                            |
| -------------------------- | -------------------- | ---------------------------------------------------------------------- |
| kingdom.resources          | Resource[]           | Starting quantity per resource (`resource_id`, `quantity`).            |
| kingdom.buildings          | PlacedBuilding[]     | Buildings placed in the kingdom (`building_id` + placement).           |
| kingdom.kingdom_chunk_ids  | int[]                | Land chunks owned by the kingdom. Placements may only use these.       |
| kingdom.units              | PlacedUnit[]         | Units placed in the kingdom (`unit_id` + placement).                   |

Placement is `chunk_id`, `direction` (see [Direction](./enums/direction.md)) and `position` (see [Position](./interfaces/position.md)). `quantity` is a number or the string `"maximum"`.

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

`npm run validate` still checks this format, including that every referenced id exists in `config.json`.

## Original format (found in the client)

The original client never reads a "kingdom" document. It receives a **partial, block-based JSON object** from the server and merges each block into its local state (`economics/GlobalResponseParser.as` in the decompiled client). The response to `initialize` can carry every block below; later responses carry only the blocks that changed.

| Block                | Shape (as read by the client)                                                      | Notes                                                           |
| -------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `player`             | `{ player_id, sync, level, energy, energyRestore, adInfo, ...resource fields }` | `player_id` is required and becomes the game id (`gid`).        |
| `storage`            | `{ wood, stone, iron, population }`                                                | Resource storage, flat numbers.                                 |
| `playerStats`        | free-form object; only keys that exist on the client class are applied             | Fields such as `day` and `dayHourReset` are used by the client (see `PlayerStats.as`).  |
| `inventory`          | `{ "<item id>": quantity }`                                                        | A quantity of `0` removes the item.                             |
| `recipes`            | map keyed by id                                                                    | Player recipes.                                                 |
| `unlocks`            | map keyed by id                                                                    | An id present in the map means unlocked.                        |
| `researches`         | map keyed by id                                                                    |                                                                 |
| `missions`, `pveMissions` | map keyed by id                                                               |                                                                 |
| `heroes`             | `{ "<hero id>": { ... } }`                                                         | Each entry is loaded into a hero info object.                   |
| `deadUnits`, `interaction`, `globalRecipes`, `payments`, `paymentsLog`, `modules`, `corovan`, `itemParts`, `clan`, `boosters`, `gwmap`, `mercenaries`, `runes` | block-specific | Not yet mapped in this repository.       |
| `entityModified`     | patch applied over the client's local entity database                              |                                                                 |

Blocks that only appear in the `initialize` response: `clientVars`, `settings`, `dailyBonus.day`, `new_player`, `maintenance`, `quests`, `obstacles`.

Key differences from the legacy draft:

- Resources are **named fields** (`money`, `cash`, `wood`, `stone`, `iron`, `energy`, `population`), not `resource_id` entries.
- Collections are **maps keyed by id**, not arrays of objects.
- The city is built from the client's local map data merged with the `initialize` data, not from `chunk_id` + `position` lists in the response.
- Nothing is expressed as `"maximum"`; the server sends concrete numbers.

### What is still unknown

The internal schema of most blocks and how city entities (buildings, units) are placed inside `initialize` are **not yet mapped**. They live in the `loadFromObject` / `load` methods of the decompiled client classes. Starting values (level, resources, population) were never found; the ones used by the reference server are estimates. Do not assume the numbers in `initial_state.json` are original.

## Migration plan

1. Map each block's schema from the decompiled client and add a Zod schema per block.
2. Replace `initial_state.json` with the block-based format (or add a converter from the legacy draft to the blocks).
3. Update `src/validation.ts` so referential integrity checks follow the new shape.
4. Remove the warning above once the file matches the original format.
