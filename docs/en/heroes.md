# Heroes

Heroes are powerful, unique characters who lead their troops on the battlefield. Unlike regular units, heroes have superior attributes and can be improved through the Altar of Heroes. Even if they are defeated during battles, heroes do not die, so they do not need to be resurrected.

## Hero definition

| Property                    | Value type                                             | Description                                                                                       | Example value                                                |
| --------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| id                          | int                                                    | Hero identifier                                                                                   | 1                                                            |
| name                        | string                                                 | Hero name                                                                                         | Sir Crashton                                                 |
| name_key                    | string                                                 | Key pointing to the translated hero name in the localization                                      | hero_1_name                                                  |
| description                 | string                                                 | Hero description                                                                                  | An experienced knight known for his unshakable defense.      |
| description_key             | string                                                 | Key pointing to the translated hero description in the localization                               | hero_1_description                                           |
| type                        | [enum:UnitType](./enums/unit-type.md)                  | Hero type, implies the use of passive and active abilities against the hero                       | on_foot                                                      |
| attack_type                 | [enum:AttackType](./enums/attack-type.md)              | Hero attack type                                                                                  | melee                                                        |
| target_type                 | [enum:TargetType](./enums/target-type.md)              | Hero target type                                                                                  | single                                                       |
| target_range                | int \| null                                            | Target range (if applicable)                                                                      | null                                                         |
| training_building_id        | int \| null                                            | Identifier pointing to the building where the hero is summoned (usually the Altar of Heroes)      | 13                                                           |
| training_building_min_level | int \| null                                            | Minimum level of the summoning building                                                           | 1                                                            |
| training_cost               | [interface:Price](./interfaces/price.md)               | Hero summoning cost                                                                               | null                                                         |
| training_time               | int \| null                                            | Summoning time in seconds                                                                         | null                                                         |
| size                        | [interface:Size](./interfaces/size.md)                 | Size of the hero in squares                                                                       | [Definition](./interfaces/size.md#definition-example)        |
| stats                       | [interface:Stats](./interfaces/stats.md)               | Combat properties, such as health, damage, initiative, speed and range                            | [Definition](./interfaces/stats.md#definition-example)       |
| attributes                  | [array:interface:Attribute](./interfaces/attribute.md) | Passive and active abilities of the hero                                                          | [Definition](./interfaces/attribute.md#definition-example)   |
| upgrade_ids                 | [array:int] \| null                                    | Identifiers of the upgrades applicable to this hero                                               | []                                                           |

### Definition example

```json
{
    "id": 1,
    "name": "Sir Crashton",
    "name_key": "hero_1_name",
    "description_key": "hero_1_description",
    "description": "Heavily armadured infrontry leader",
    "type": "on_foot",
    "attack_type": "melee",
    "target_type": "single",
    "target_range": null,
    "size": {
        "width": 1,
        "height": 1
    },
    "stats": {
        "health": 500,
        "attack": 75,
        "initiative": 110,
        "speed": 4,
        "range": null
    },
    "attributes": null,
    "upgrade_ids": []
}
```
