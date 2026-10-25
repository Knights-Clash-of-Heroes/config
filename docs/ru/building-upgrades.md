# Улучшения зданий

Улучшения зданий предназначены для совершенствования зданий игры. Их можно выполнять несколькими способами: через Замок (для улучшения большинства зданий) и Магазин драконов (для улучшения некоторых особых зданий). Свойства следующие:

| Свойство                     | Тип значения                                                                          | Описание                                                                                             | Пример значения                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| id                           | int                                                                                   | Идентификатор улучшения                                                                              | 1                                                                       |
| price                        | [array:interface:Price](./interfaces/price.md)                                        | Стоимость улучшения                                                                                  | [Определение](./interfaces/price.md#definition-example)                 |
| stats                        | [interface:Stats](./interfaces/stats.md)                                              | Боевые характеристики улучшения                                                                      | [Определение](./interfaces/stats.md#definition-example)                 |
| attributes                   | [array:interface:Attribute](./interfaces/attribute.md)                                | Дополнительные атрибуты. Если применяется несколько атрибутов одного типа, их значения суммируются.  | [Определение](./interfaces/attribute.md#definition-example)             |
| upgrades_for_other_buildings | [array:interface:UpgradeForOtherBuilding](./interfaces/upgrade-for-other-building.md) | Свойства улучшения для других зданий, обычно используются для улучшений замка                        | [Определение](./interfaces/upgrade-for-other-building.md#definition-example) |
| upgrade_time                 | int                                                                                   | Время улучшения в секундах                                                                           | 10                                                                      |
| building_id                  | int                                                                                   | Идентификатор улучшаемого здания                                                                     | 1                                                                       |

## Пример определения

Примечание: при улучшении замка некоторые здания автоматически улучшают свои характеристики, например здоровье.

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
