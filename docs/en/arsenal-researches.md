# Arsenal Researches

Arsenal researches (`arsenal_researches`) focus on improving regular units, granting passive bonuses (stronger units) or unlocking new units in the game. They are paid for with regular resources and game items.

| Property        | Type                                           | Description                                                     | Example value    |
| --------------- | ---------------------------------------------- | --------------------------------------------------------------- | ---------------- |
| id              | int                                            | Unique identifier of the research.                              | 1                |
| name            | string                                         | Research name.                                                  | "Iron Weapons"   |
| name_key        | string                                         | Translation key for the name.                                   | "arsenal_1_name" |
| price           | [array:interface:Price](./interfaces/price.md) | Research cost in resources and items.                           | [...]            |
| research_time   | int                                            | Time required to complete the research, in seconds.             | 3600             |
| unit_upgrade_id | int \| null                                    | The ID of the unit upgrade (`unit_upgrades`) that will be applied. | 1             |
| unlock_unit_id  | int \| null                                    | The ID of the new unit enabled (`units`), if applicable.        | null             |

## Definition example

```json
{
    "id": 1,
    "name_key": "arsenal_research_1_name",
    "name": "Dark Iron",
    "price": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 100
        },
        {
            "type": "item",
            "item_id": 12,
            "quantity": 5
        }
    ],
    "research_time": 3600,
    "unit_upgrade_id": 1,
    "unlock_unit_id": null
}
```
