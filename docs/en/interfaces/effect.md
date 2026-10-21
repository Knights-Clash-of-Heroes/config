# Effect

The effect interface defines a modifier with a guaranteed mechanical impact applied to a unit. Every effect must have a name and description to be displayed in the interface.

There are two effect types, defined by the `type` field:

- **`temporary`**: Lasts a set number of turns and affects only the target unit.
- **`aura`**: Does not last turns by itself — it activates an [Aura](aura.md) around the emitting unit for a number of turns. It is the nearby allied units (within the aura's radius) that receive the benefit.

## Common properties (all types)

| Property        | Type   | Description                                |
| --------------- | ------ | ------------------------------------------ |
| effect_id       | int    | Effect identifier (type)                   |
| type            | [enum:EffectType](../enums/effect-type.md) | Effect type: `temporary` or `aura` |
| name            | string | Effect name                                |
| name_key        | string | Translation key for the name               |
| description     | string | Effect description                         |
| description_key | string | Translation key for the description        |

## Properties exclusive to the `temporary` type

| Property | Type | Description                                  |
| -------- | ---- | -------------------------------------------- |
| value    | int  | Mechanical impact value on the target        |
| duration | int  | Number of turns the effect will last         |

## Properties exclusive to the `aura` type

| Property | Type | Description                                                   |
| -------- | ---- | ------------------------------------------------------------- |
| aura_id  | int  | Identifier of the [Aura](aura.md) that will be emitted        |
| duration | int  | Number of turns the aura stays active around the emitter      |

## Example — `temporary` type

```json
{
    "effect_id": 1,
    "type": "temporary",
    "name": "Fury",
    "name_key": "effect_1_name",
    "description": "Temporarily increases the damage dealt.",
    "description_key": "effect_1_desc",
    "value": 50,
    "duration": 3
}
```

## Example — `aura` type

```json
{
    "effect_id": 3,
    "type": "aura",
    "name": "Battle Cry",
    "name_key": "effect_3_name",
    "description": "The hero inspires nearby soldiers, activating an aura of courage for 2 turns.",
    "description_key": "effect_3_desc",
    "aura_id": 1,
    "duration": 2
}
```
