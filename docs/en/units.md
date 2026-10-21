# Units

Units (or soldiers, troops) are playable characters that are part of the game's combat system. They can be people on foot, people mounted on animals, people with siege machines and monsters.

They can be used both in invasions (attacks, tournaments and campaign) and in the defense of your kingdom.

## Unit definition

| Property                      | Value type                                             | Description                                                                                           | Example value                                              |
| ----------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| id                            | int                                                    | Unit identifier                                                                                       | 1                                                          |
| name                          | string                                                 | Unit name                                                                                             | Militiaman                                                 |
| name_key                      | string                                                 | Key pointing to the translated unit name in the localization                                          | unit_1_name                                                |
| description                   | string                                                 | Unit description                                                                                      | Just a peasant with a pike                                 |
| description_key               | string                                                 | Key pointing to the translated unit description in the localization                                   | unit_1_description                                         |
| type                          | [enum:UnitType](./enums/unit-type.md)                  | Unit type, implies the use of passive and active abilities against the unit                           | on_foot                                                    |
| attack_type                   | [enum:AttackType](./enums/attack-type.md)              | Unit attack type, implies the use of passive and active abilities against the attacked unit           | melee                                                      |
| target_type                   | [enum:TargetType](./enums/target-type.md)              | Unit target type, determines which enemies are hit by the attack                                      | single                                                     |
| training_building_id          | int \| null                                            | Identifier pointing to the building where the unit is trained, if trainable                           | 2                                                          |
| training_building_min_level   | int \| null                                            | Minimum level the training building must have, if trainable, to train this unit                       | 1                                                          |
| training_cost                 | [interface:Price](./interfaces/price.md)               | Unit training cost: an object if trainable; null if not trainable                                     | [Definition](./interfaces/price.md#definition-example)     |
| training_time                 | int \| null                                            | Training time in seconds: an integer if trainable; null if not trainable                              | 15                                                         |
| size                          | [interface:Size](./interfaces/size.md)                 | Size of the unit in squares                                                                           | [Definition](./interfaces/size.md#definition-example)      |
| occupation                    | int                                                    | Housing space occupied by the unit                                                                    | 1                                                          |
| stats                         | [interface:Stats](./interfaces/stats.md)               | Unit combat properties, such as health, damage, initiative, speed and range                           | [Definition](./interfaces/stats.md#definition-example)     |
| attributes                    | [array:interface:Attribute](./interfaces/attribute.md) | Passive and active abilities of the unit                                                              | [Definition](./interfaces/attribute.md#definition-example) |
| upgrade_ids                   | [array:int] \| null                                    | Identifiers of the units that are upgrades of this unit                                               | [1, 2, 3]                                                  |
| arsenal_research_ids          | [array:int] \| null                                    | Identifiers of the researches that can be performed on this unit                                      | [1, 2, 3]                                                  |
| resurrection_time             | int                                                    | Resurrection time in seconds (0 if instant)                                                           | 0                                                          |
| resurrection_timeout          | int                                                    | Time limit to resurrect the unit before it is permanently removed from the kingdom                    | 3600                                                       |
| resurrection_cost             | [array:interface:Price](./interfaces/price.md) \| null | Cost to resurrect the unit                                                                            | [Definition](./interfaces/price.md#definition-example)     |
| inherit_upgrades_from_unit_id | int \| null                                            | Identifier of another unit to inherit the same upgrades applied to it. Used for special units or variations that share the upgrades of the base unit. | 1                          |

### Definition example

```json
{
    "id": 1,
    "name": "Militiaman",
    "name_key": "unit_1_name",
    "description": "Just a peasant with a pike",
    "description_key": "unit_1_description",
    "type": "on_foot",
    "attack_type": "melee",
    "target_type": "single",
    "training_building_id": 2,
    "training_building_min_level": 1,
    "training_cost": {
        "resource_id": 1,
        "quantity": 380
    },
    "training_time": 15,
    "size": {
        "width": 1,
        "height": 1
    },
    "occupation": 1,
    "stats": {
        "health": 10,
        "attack": 1,
        "initiative": 1,
        "speed": 1,
        "range": 1
    },
    "attributes": [
        {
            "attribute_id": 1,
            "value": 10
        }
    ],
    "upgrade_ids": [...],
    "arsenal_research_ids": [...],
    "inherit_upgrades_from_unit_id": null
}
```
