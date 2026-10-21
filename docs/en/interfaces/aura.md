# Aura

The aura interface defines a continuous area modifier that has no duration in turns — it is active as long as the unit that emits it is on the field. An aura affects all allied units within its radius. It always has a mechanical impact.

> **Note:** An aura can be emitted temporarily by an [Effect](effect.md) of type `aura`, which defines for how many turns the aura stays active.

| Property        | Type   | Description                                        |
| --------------- | ------ | -------------------------------------------------- |
| aura_id         | int    | Aura identifier (type)                             |
| name            | string | Aura name                                          |
| name_key        | string | Translation key for the name                       |
| description     | string | Aura description                                   |
| description_key | string | Translation key for the description                |
| value           | int    | Mechanical impact value of the aura                |
| radius          | int    | Radius in cells around the emitting unit           |

## Definition example

```json
{
    "aura_id": 1,
    "name": "Aura of Courage",
    "name_key": "aura_1_name",
    "description": "Increases the attack of nearby allied units.",
    "description_key": "aura_1_desc",
    "value": 15,
    "radius": 2
}
```
