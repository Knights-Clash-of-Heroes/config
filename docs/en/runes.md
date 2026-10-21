# Runes

Runes are magic items that can be used to cast spells without having parchments of that spell. They are crafted at the Dwarven Forge, and the limit of runes per type is defined. They are divided by elements, which are registered in the configuration with the following properties:

| Property | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| id       | int    | Unique identifier of the rune. |
| limit    | int    | Limit of runes per type.     |
| name     | string | Rune name.                   |
| name_key | string | Rune name key.               |

## Definition example

```json
{
    "id": 1,
    "limit": 6,
    "name": "Flame Rune",
    "name_key": "rune_1_name"
}
```
