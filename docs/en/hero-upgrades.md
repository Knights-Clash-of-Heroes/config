# Hero Upgrades

Hero upgrades are permanent improvements applied to heroes through researches performed at the **Altar of Heroes**. Each upgrade increases the stats of, or grants new attributes to, the linked hero.

## Hero upgrade definition

| Property                    | Value type                                                     | Description                                                                                | Example value                                              |
| --------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| id                          | int                                                            | Upgrade identifier                                                                         | 1                                                          |
| hero_id                     | int                                                            | Identifier of the hero that receives the upgrade                                           | 1                                                          |
| altar_of_heroes_research_id | int                                                            | Identifier of the Altar of Heroes research that unlocks this upgrade                       | 1                                                          |
| stats                       | [interface:Stats](./interfaces/stats.md) \| null               | Bonus to combat properties (health, attack, etc.)                                          | [Definition](./interfaces/stats.md#definition-example)     |
| attributes                  | [array:interface:Attribute](./interfaces/attribute.md) \| null | Bonus to special attributes. Values accumulate if there are multiple upgrades of the same type. | [Definition](./interfaces/attribute.md#definition-example) |

## Definition example

```json
{
    "id": 1,
    "hero_id": 1,
    "altar_of_heroes_research_id": 1,
    "stats": {
        "health": 500,
        "attack": 75,
        "initiative": 110,
        "speed": 4,
        "range": null
    },
    "attributes": null
}
```
