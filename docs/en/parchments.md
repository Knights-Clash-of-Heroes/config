# Parchments

Parchments are consumable items that allow a player to cast a specific spell without having to spend runes. Each parchment is linked to a single spell and is consumed after use.

| Property | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| id       | int    | Unique identifier of the parchment.               |
| spell_id | int    | Identifier of the spell this parchment contains.  |
| name     | string | Parchment name.                                   |
| name_key | string | Parchment name key (i18n).                        |

## Definition example

```json
{
    "id": 1,
    "spell_id": 1,
    "name": "Earthquake Parchment",
    "name_key": "parchment_1_name"
}
```
