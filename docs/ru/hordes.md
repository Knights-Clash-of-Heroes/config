# Орды

Орды — это появления групп юнитов, которые могут быть мирными или враждебными. Они встречаются на этапах кампании и событий; запускаются при победе над боссом, после хода босса или после диалога между персонажами.

## Определение орды

| Свойство        | Тип значения                                            | Описание                                                                                                                                                                   | Пример значения                                              |
| --------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| id              | int                                                     | Идентификатор орды                                                                                                                                                         | 1                                                            |
| type            | [enum:HordeType](./enums/horde-type.md)                 | Тип орды (мирная или враждебная)                                                                                                                                           | hostile                                                      |
| trigger         | [enum:HordeTrigger](./enums/horde-trigger.md)           | Триггер, вызывающий появление орды                                                                                                                                         | after_boss_turn                                              |
| trigger_value   | int \| string \| null                                   | Дополнительное значение триггера (например, ID босса, номер хода, ID диалога)                                                                                              | 3                                                            |
| center_position | [interface:Position](./interfaces/position.md)          | Центральная позиция (x, y) орды. Координаты x и y должны быть от 0 до 7. Если значение координаты равно `"random"`, оно будет сгенерировано случайно от 0 до 7.            | [Определение](./interfaces/position.md#definition-example)   |
| units           | [array:interface:HordeUnit](./interfaces/horde-unit.md) | Список юнитов, составляющих орду, и их позиции относительно центральной точки                                                                                              | [Определение](./interfaces/horde-unit.md#definition-example) |

### Пример определения

```json
{
    "id": 1,
    "type": "hostile",
    "trigger": "after_boss_turn",
    "trigger_value": 3,
    "center_position": {
        "x": 0,
        "y": 0
    },
    "units": [
        {
            "unit_id": 5,
            "initial_position": {
                "x": 0,
                "y": 2
            },
            "target_position": {
                "x": 2,
                "y": 5
            },
            "custom_stats": {
                "health": 150,
                "attack": 25,
                "initiative": 5,
                "speed": 3,
                "range": 1
            },
            "custom_attributes": [
                {
                    "attribute_id": 1,
                    "value": 15
                }
            ],
            "level_factor": 1.5
        },
        {
            "unit_id": 6,
            "position": {
                "x": 1,
                "y": 4
            }
        }
    ]
}
```
