# Building Upgrades

Building upgrades are made to improve the buildings of the game. They can be done through a few means: the Castle (to upgrade most buildings) and the Dragon Shop (to upgrade some special buildings). The properties are the following:

| Property                     | Value type                                                                            | Description                                                                                          | Example value                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| id                           | int                                                                                   | Upgrade identifier                                                                                   | 1                                                                       |
| price                        | [array:interface:Price](./interfaces/price.md)                                        | Upgrade cost                                                                                         | [Definition](./interfaces/price.md#definition-example)                  |
| stats                        | [interface:Stats](./interfaces/stats.md)                                              | Combat properties of the upgrade                                                                     | [Definition](./interfaces/stats.md#definition-example)                  |
| attributes                   | [array:interface:Attribute](./interfaces/attribute.md)                                | Additional attributes. If multiple attributes of the same type are applied, their values accumulate. | [Definition](./interfaces/attribute.md#definition-example)              |
| upgrades_for_other_buildings | [array:interface:UpgradeForOtherBuilding](./interfaces/upgrade-for-other-building.md) | Properties of the upgrade for other buildings, usually used for castle upgrades                      | [Definition](./interfaces/upgrade-for-other-building.md#definition-example) |
| upgrade_time                 | int                                                                                   | Upgrade time in seconds                                                                              | 10                                                                      |
| building_id                  | int                                                                                   | Identifier of the building being upgraded                                                            | 1                                                                       |

## Definition example

Note: if we upgrade the castle, some buildings automatically improve their stats, for example, their health.

```json
{
    "id": 1,
    "price": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 10
        }
    ],
    "stats": {
        "health": 10,
        "attack": null,
        "initiative": null,
        "speed": null,
        "range": null
    },
    "attributes": [
        {
            "attribute_id": 1,
            "value": 5
        }
    ],
    "upgrades_for_other_buildings": [
        {
            "building_id": 1,
            "stats": {
                "health": 10,
                "attack": null,
                "initiative": null,
                "speed": null,
                "range": null
            },
            "attributes": [
                {
                    "attribute_id": 1,
                    "value": 2
                }
            ]
        }
    ],
    "upgrade_time": 10,
    "building_id": 1
}
```
