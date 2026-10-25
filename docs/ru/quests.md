# Квесты

Квесты направляют игрока по ходу игры и дают награды за выполнение определённых заданий.

## Свойства

| Свойство          | Тип значения                                   | Описание                                              | Пример значения                     |
| ----------------- | ---------------------------------------------- | ----------------------------------------------------- | ----------------------------------- |
| id                | int                                            | Уникальный идентификатор квеста                       | 1                                   |
| required_level_id | int                                            | Уровень, необходимый для открытия квеста              | 1                                   |
| name              | string                                         | Название квеста                                       | "Patrol"                            |
| name_key          | string                                         | Ключ перевода названия                                | "quest_1"                           |
| description       | string                                         | Текстовое описание квеста                             | "Milord, messengers..."             |
| description_key   | string                                         | Ключ перевода описания                                | "quest_1_description"               |
| character_id      | int                                            | ID персонажа, выдающего квест                         | 1                                   |
| task_ids          | array:int                                      | Список ID необходимых [заданий квеста](./quest-tasks.md) | [1, 2]                           |
| rewards           | [array:interface:Price](./interfaces/price.md) | Список наград за выполнение квеста                    | [Definition](./interfaces/price.md) |

## Пример определения

```json
{
    "id": 1,
    "required_level_id": 1,
    "name": "Patrol",
    "name_key": "quest_1",
    "description": "Milord, messengers bring disturbing news...",
    "description_key": "quest_1_description",
    "character_id": 1,
    "task_ids": [1, 2],
    "rewards": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 750
        }
    ]
}
```
