# Узлы кампании

Узлы (или этапы) Кампании — сюжетного режима игры — определяют, что происходит в каждом сражении, его награды и ограничения на войска игрока.

| Свойство                | Тип значения                                         | Описание                                                        | Пример значения                                |
| ----------------------- | ---------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------- |
| id                      | int                                                  | Уникальный идентификатор узла                                   | 1                                              |
| name                    | string                                               | Название узла                                                   | "Patrol"                                       |
| name_key                | string                                               | Ключ перевода названия                                          | "campaign_node_1_name"                         |
| map_position            | [interface:Position](./interfaces/position.md)       | Позиция (x, y) узла на карте кампании                           | [Определение](./interfaces/position.md)        |
| recommended_level       | int                                                  | Рекомендуемый уровень игрока для прохождения узла               | 5                                              |
| min_level               | int \| null                                          | Минимальный уровень, необходимый для начала узла (необязательно) | 3                                             |
| required_node_id        | int \| null                                          | ID узла, который необходимо пройти, чтобы разблокировать этот   | 1                                              |
| rewards                 | [array:interface:Price](./interfaces/price.md)       | Список наград за прохождение узла                               | [Определение](./interfaces/price.md)           |
| allowed_unit_occupation | int                                                  | Максимально допустимая занятость юнитов                         | 2                                              |
| allowed_unit_squares    | [array:interface:Position](./interfaces/position.md) | Позиции, в которых разрешено размещать юнитов                   | [Определение](./interfaces/position.md)        |

## Пример определения

```json
{
    "id": 1,
    "name": "Patrol",
    "name_key": "campaign_node_1_name",
    "map_position": {
        "x": 150,
        "y": 200
    },
    "recommended_level": 1,
    "min_level": null,
    "required_node_id": null,
    "rewards": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 1000
        }
    ],
    "allowed_unit_occupation": 2,
    "allowed_unit_squares": [
        { "x": 0, "y": 0 },
        { "x": 1, "y": 0 }
    ]
}
```
