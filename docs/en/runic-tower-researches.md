# Runic Tower Researches

Runic Tower researches (`runic_tower_researches`) focus on improving the active ability system (Spells) and on upgrades to the game's Runes. They are paid for with resources and magic items collected by the player.

| Property        | Type                                           | Description                                                | Example value  |
| --------------- | ---------------------------------------------- | ---------------------------------------------------------- | -------------- |
| id              | int                                            | Unique identifier of the research.                         | 1              |
| name            | string                                         | Research name.                                             | "Fire Magic"   |
| name_key        | string                                         | Translation key for the name.                              | "runic_1_name" |
| price           | [array:interface:Price](./interfaces/price.md) | Cost required in resources and items.                      | [...]          |
| research_time   | int                                            | Duration of the research process, in seconds.              | 3600           |
| unlock_spell_id | int \| null                                    | ID of the spell (`spells`) being unlocked.                 | 1              |
| unlock_rune_id  | int \| null                                    | ID of the rune type (`runes`) being unlocked or improved.  | null           |

## Definition example

```json
{
    "id": 1,
    "name_key": "runic_research_1_name",
    "name": "Arcanist Magic",
    "price": [
        {
            "type": "resource",
            "resource_id": 2,
            "quantity": 50
        }
    ],
    "research_time": 1800,
    "unlock_spell_id": 2,
    "unlock_rune_id": null
}
```
