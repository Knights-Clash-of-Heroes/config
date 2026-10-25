# Здания

Здания — это игровые элементы, которые можно построить в королевстве игрока. Они могут использоваться для обучения юнитов, защиты королевства, проведения исследований, производства ресурсов и т. д.

| Свойство                          | Тип значения                                                                | Описание                                                                                                                                                     | Пример значения                                                  |
| --------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| id                                | int                                                                         | Идентификатор здания                                                                                                                                         | 4                                                                |
| name                              | string                                                                      | Название здания                                                                                                                                              | Archery Range                                                    |
| name_key                          | string                                                                      | Ключ, указывающий на переведённое название здания в локализации                                                                                              | building_4_name                                                  |
| description                       | string                                                                      | Описание здания                                                                                                                                              | Archers are trained here                                         |
| description_key                   | string                                                                      | Ключ, указывающий на переведённое описание здания в локализации                                                                                              | building_4_description                                           |
| target_type                       | [enum:TargetType](./enums/target-type.md)                                   | Тип цели здания, определяет, каких врагов поражает атака                                                                                                     | single                                                           |
| attack_type                       | [enum:AttackType](./enums/attack-type.md)                                   | Тип атаки здания, подразумевает использование пассивных и активных способностей против атакованного юнита                                                    | melee                                                            |
| size                              | [interface:Size](./interfaces/size.md)                                      | Размер здания в клетках                                                                                                                                      | [Определение](./interfaces/size.md#definition-example)           |
| stats                             | [interface:Stats](./interfaces/stats.md)                                    | Боевые характеристики здания, такие как здоровье, урон, инициатива, скорость и дальность                                                                     | [Определение](./interfaces/stats.md#definition-example)          |
| attributes                        | [array:interface:Attribute](./interfaces/attribute.md)                      | Пассивные и активные способности здания                                                                                                                      | [Определение](./interfaces/attribute.md#definition-example)      |
| castle_research_ids               | array:int                                                                   | Идентификаторы исследований, которые можно проводить в этом здании                                                                                           | [1, 2, 3]                                                        |
| price                             | [array:interface:Price](./interfaces/price.md)                              | Стоимость строительства здания                                                                                                                               | [Определение](./interfaces/price.md#definition-example)          |
| construction_time                 | int                                                                         | Время строительства в секундах                                                                                                                               | 300                                                              |
| upgrade_ids                       | array:int                                                                   | Идентификаторы зданий, являющихся улучшениями этого здания                                                                                                   | [1, 2, 3]                                                        |
| passive_production                | [array:interface:ProductionItem](./interfaces/production-item.md) \| null   | Пассивное производство здания                                                                                                                                | [Определение](./interfaces/production-item.md#definition-example) |
| storage_increases                 | [array:interface:StorageIncrease](./interfaces/storage-increase.md) \| null | Увеличения вместимости хранилища, предоставляемые этим зданием                                                                                               | [Определение](./interfaces/storage-increase.md#definition-example) |
| occupation_increase               | int \| null                                                                 | Дополнительное место занятости (жилья), предоставляемое королевству за владение этим зданием                                                                 | 5                                                                |
| inherit_upgrades_from_building_id | int \| null                                                                 | Идентификатор другого здания, улучшения которого наследуются. Используется для особых зданий, разделяющих улучшения с базовым зданием.                        | 1                                                                |

## Пример определения

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
