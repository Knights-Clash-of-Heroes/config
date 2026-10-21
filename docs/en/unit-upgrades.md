# Unit Upgrades

Unit upgrades are made to improve the units of the game. They can be done through a few means: the Arsenal, the Dragon Shop and the upgrades tab of the Shop. The properties are the following:

| Property            | Value type                                                     | Description                                                                                                                       | Example value                                              |
| ------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| id                  | int                                                            | Upgrade identifier                                                                                                                | 1                                                          |
| unit_id             | int                                                            | Unit identifier                                                                                                                   | 1                                                          |
| arsenal_research_id | int \| null                                                    | Identifier of the research that can be performed on this unit                                                                     | 1                                                          |
| stats               | [interface:Stats](./interfaces/stats.md) \| null               | Increase in the unit's combat properties, such as health, damage, initiative, speed and range                                     | [Definition](./interfaces/stats.md#definition-example)     |
| attributes          | [array:interface:Attribute](./interfaces/attribute.md) \| null | Increase in the unit's special attributes. If multiple attributes of the same type are applied, their values accumulate.          | [Definition](./interfaces/attribute.md#definition-example) |

## Definition example

```json
{
    "id": 1,
    "unit_id": 1,
    "arsenal_research_id": 1,
    "stats": {
        "health": 10,
        "attack": 5,
        "initiative": 2,
        "speed": 3,
        "range": null
    },
    "attributes": [
        {
            "attribute_id": 1,
            "value": 10
        }
    ]
}
```
