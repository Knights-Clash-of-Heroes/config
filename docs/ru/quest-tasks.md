# Задания квестов

У каждого квеста есть список заданий (целей), которые игрок должен выполнить для продвижения. Это могут быть как начало боя, так и постройка определённых зданий.

| Свойство        | Тип значения | Описание                                          | Пример значения                                     |
| --------------- | ------------ | ------------------------------------------------- | --------------------------------------------------- |
| id              | int          | Уникальный идентификатор задания                  | 1                                                   |
| name            | string       | Название задания / цель                           | "Start the battle \"Patrol\""                       |
| name_key        | string       | Ключ перевода названия                            | "quest_task_1"                                      |
| description     | string       | Описание или подсказка, как выполнить задание     | "Select battle \"Patrol\" on the map of Greenmeere" |
| description_key | string       | Ключ перевода описания                            | "quest_task_1_description"                          |

## Пример определения

```json
{
    "id": 1,
    "name": "Start the battle \"Patrol\"",
    "name_key": "quest_task_1",
    "description": "Select battle \"Patrol\" on the map of Greenmeere",
    "description_key": "quest_task_1_description"
}
```
