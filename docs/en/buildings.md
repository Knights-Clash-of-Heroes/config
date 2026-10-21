# Buildings

Buildings are game elements that can be built in the player's kingdom. They can be used to train units, defend the kingdom, perform researches, produce resources, etc.

| Property                          | Value type                                                                  | Description                                                                                                                                                  | Example value                                                    |
| --------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| id                                | int                                                                         | Building identifier                                                                                                                                          | 4                                                                |
| name                              | string                                                                      | Building name                                                                                                                                                | Archery Range                                                    |
| name_key                          | string                                                                      | Key pointing to the translated building name in the localization                                                                                             | building_4_name                                                  |
| description                       | string                                                                      | Building description                                                                                                                                         | Archers are trained here                                         |
| description_key                   | string                                                                      | Key pointing to the translated building description in the localization                                                                                      | building_4_description                                           |
| target_type                       | [enum:TargetType](./enums/target-type.md)                                   | Building target type, determines which enemies are hit by the attack                                                                                         | single                                                           |
| attack_type                       | [enum:AttackType](./enums/attack-type.md)                                   | Building attack type, implies the use of passive and active abilities against the attacked unit                                                              | melee                                                            |
| size                              | [interface:Size](./interfaces/size.md)                                      | Size of the building in squares                                                                                                                              | [Definition](./interfaces/size.md#definition-example)            |
| stats                             | [interface:Stats](./interfaces/stats.md)                                    | Building combat properties, such as health, damage, initiative, speed and range                                                                              | [Definition](./interfaces/stats.md#definition-example)           |
| attributes                        | [array:interface:Attribute](./interfaces/attribute.md)                      | Passive and active abilities of the building                                                                                                                 | [Definition](./interfaces/attribute.md#definition-example)       |
| castle_research_ids               | array:int                                                                   | Identifiers of the researches that can be performed in this building                                                                                         | [1, 2, 3]                                                        |
| price                             | [array:interface:Price](./interfaces/price.md)                              | Construction cost of the building                                                                                                                            | [Definition](./interfaces/price.md#definition-example)           |
| construction_time                 | int                                                                         | Construction time in seconds                                                                                                                                 | 300                                                              |
| upgrade_ids                       | array:int                                                                   | Identifiers of the buildings that are upgrades of this building                                                                                              | [1, 2, 3]                                                        |
| passive_production                | [array:interface:ProductionItem](./interfaces/production-item.md) \| null   | Passive production of the building                                                                                                                           | [Definition](./interfaces/production-item.md#definition-example) |
| storage_increases                 | [array:interface:StorageIncrease](./interfaces/storage-increase.md) \| null | Storage capacity increases granted by this building                                                                                                          | [Definition](./interfaces/storage-increase.md#definition-example) |
| occupation_increase               | int \| null                                                                 | Extra occupation (housing) space granted to the kingdom for owning this building                                                                             | 5                                                                |
| inherit_upgrades_from_building_id | int \| null                                                                 | Identifier of another building to inherit the same upgrades applied to it. Used for special buildings that share the upgrades of the base building.          | 1                                                                |

## Definition example

```json
{
    "id": 4,
    "name": "Archery Range",
    "name_key": "building_4_name",
    "description_key": "building_4_description",
    "description": "Archers are trained here",
    "target_type": null,
    "attack_type": null,
    "price": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 1600
        },
        {
            "type": "resource",
            "resource_id": 2,
            "quantity": 60
        },
        {
            "type": "resource",
            "resource_id": 3,
            "quantity": 20
        }
    ],
    "construction_time": 300,
    "size": {
        "width": 4,
        "height": 4
    },
    "stats": {
        "health": 120,
        "attack": null,
        "initiative": null,
        "speed": null,
        "range": null
    },
    "attributes": null,
    "upgrade_ids": [...],
    "castle_research_ids": [...],
    "passive_production": null,
    "storage_increases": null,
    "occupation_increase": null,
    "inherit_upgrades_from_building_id": null
}
```
