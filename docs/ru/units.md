# Юниты

Юниты (они же солдаты, войска) — игровые персонажи, участвующие в боевой системе. Это могут быть пешие воины, всадники на животных, расчёты с осадными машинами и монстры.

Их можно использовать как во вторжениях (атаки, турниры и кампания), так и для защиты своего королевства.

## Определение юнита

| Свойство                      | Тип значения                                           | Описание                                                                                              | Пример значения                                            |
| ----------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| id                            | int                                                    | Идентификатор юнита                                                                                   | 1                                                          |
| name                          | string                                                 | Название юнита                                                                                        | Militiaman                                                 |
| name_key                      | string                                                 | Ключ, указывающий на переведённое название юнита в локализации                                         | unit_1_name                                                |
| description                   | string                                                 | Описание юнита                                                                                        | Just a peasant with a pike                                 |
| description_key               | string                                                 | Ключ, указывающий на переведённое описание юнита в локализации                                        | unit_1_description                                         |
| type                          | [enum:UnitType](./enums/unit-type.md)                  | Тип юнита; определяет, какие пассивные и активные способности применимы против него                   | on_foot                                                    |
| attack_type                   | [enum:AttackType](./enums/attack-type.md)              | Тип атаки юнита; определяет, какие пассивные и активные способности применимы против атакуемого юнита | melee                                                      |
| target_type                   | [enum:TargetType](./enums/target-type.md)              | Тип цели юнита; определяет, каких врагов поражает атака                                               | single                                                     |
| training_building_id          | int \| null                                            | Идентификатор здания, в котором обучается юнит, если его можно обучить                                | 2                                                          |
| training_building_min_level   | int \| null                                            | Минимальный уровень здания обучения, необходимый для обучения этого юнита, если его можно обучить     | 1                                                          |
| training_cost                 | [interface:Price](./interfaces/price.md)               | Стоимость обучения юнита: объект, если юнита можно обучить; null, если нельзя                         | [Definition](./interfaces/price.md#definition-example)     |
| training_time                 | int \| null                                            | Время обучения в секундах: целое число, если юнита можно обучить; null, если нельзя                   | 15                                                         |
| size                          | [interface:Size](./interfaces/size.md)                 | Размер юнита в клетках                                                                                | [Definition](./interfaces/size.md#definition-example)      |
| occupation                    | int                                                    | Жилое пространство, занимаемое юнитом                                                                 | 1                                                          |
| stats                         | [interface:Stats](./interfaces/stats.md)               | Боевые характеристики юнита: здоровье, урон, инициатива, скорость и дальность                         | [Definition](./interfaces/stats.md#definition-example)     |
| attributes                    | [array:interface:Attribute](./interfaces/attribute.md) | Пассивные и активные способности юнита                                                                | [Definition](./interfaces/attribute.md#definition-example) |
| upgrade_ids                   | [array:int] \| null                                    | Идентификаторы юнитов, являющихся улучшениями этого юнита                                             | [1, 2, 3]                                                  |
| arsenal_research_ids          | [array:int] \| null                                    | Идентификаторы исследований, которые можно провести для этого юнита                                   | [1, 2, 3]                                                  |
| resurrection_time             | int                                                    | Время воскрешения в секундах (0, если мгновенно)                                                      | 0                                                          |
| resurrection_timeout          | int                                                    | Лимит времени на воскрешение юнита, после которого он навсегда удаляется из королевства               | 3600                                                       |
| resurrection_cost             | [array:interface:Price](./interfaces/price.md) \| null | Стоимость воскрешения юнита                                                                           | [Definition](./interfaces/price.md#definition-example)     |
| inherit_upgrades_from_unit_id | int \| null                                            | Идентификатор другого юнита, улучшения которого наследуются этим юнитом. Используется для особых юнитов или вариаций, разделяющих улучшения базового юнита. | 1                          |

### Пример определения

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
