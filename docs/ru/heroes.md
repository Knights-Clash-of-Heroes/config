# Герои

Герои — это могущественные уникальные персонажи, которые ведут свои войска на поле боя. В отличие от обычных юнитов, герои обладают превосходными атрибутами и могут улучшаться через Алтарь героев. Даже если героев побеждают в сражениях, они не погибают, поэтому их не нужно воскрешать.

## Определение героя

| Свойство                    | Тип значения                                           | Описание                                                                                          | Пример значения                                              |
| --------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| id                          | int                                                    | Идентификатор героя                                                                               | 1                                                            |
| name                        | string                                                 | Имя героя                                                                                         | Sir Crashton                                                 |
| name_key                    | string                                                 | Ключ, указывающий на переведённое имя героя в локализации                                         | hero_1_name                                                  |
| description                 | string                                                 | Описание героя                                                                                    | An experienced knight known for his unshakable defense.      |
| description_key             | string                                                 | Ключ, указывающий на переведённое описание героя в локализации                                    | hero_1_description                                           |
| type                        | [enum:UnitType](./enums/unit-type.md)                  | Тип героя, подразумевает использование пассивных и активных способностей против героя             | on_foot                                                      |
| attack_type                 | [enum:AttackType](./enums/attack-type.md)              | Тип атаки героя                                                                                   | melee                                                        |
| target_type                 | [enum:TargetType](./enums/target-type.md)              | Тип цели героя                                                                                    | single                                                       |
| target_range                | int \| null                                            | Дальность цели (если применимо)                                                                   | null                                                         |
| training_building_id        | int \| null                                            | Идентификатор здания, в котором призывается герой (обычно Алтарь героев)                          | 13                                                           |
| training_building_min_level | int \| null                                            | Минимальный уровень призывающего здания                                                           | 1                                                            |
| training_cost               | [interface:Price](./interfaces/price.md)               | Стоимость призыва героя                                                                           | null                                                         |
| training_time               | int \| null                                            | Время призыва в секундах                                                                          | null                                                         |
| size                        | [interface:Size](./interfaces/size.md)                 | Размер героя в клетках                                                                            | [Определение](./interfaces/size.md#definition-example)       |
| stats                       | [interface:Stats](./interfaces/stats.md)               | Боевые характеристики, такие как здоровье, урон, инициатива, скорость и дальность                 | [Определение](./interfaces/stats.md#definition-example)      |
| attributes                  | [array:interface:Attribute](./interfaces/attribute.md) | Пассивные и активные способности героя                                                            | [Определение](./interfaces/attribute.md#definition-example)  |
| upgrade_ids                 | [array:int] \| null                                    | Идентификаторы улучшений, применимых к этому герою                                                | []                                                           |

### Пример определения

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
