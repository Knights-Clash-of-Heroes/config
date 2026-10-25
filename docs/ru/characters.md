# Персонажи

Система персонажей определяет сюжетных героев, взаимодействующих с игроком через задания и диалоги.

## Свойства

| Свойство        | Тип значения   | Описание                             | Пример значения                          |
| --------------- | -------------- | ------------------------------------ | ---------------------------------------- |
| id              | int            | Уникальный идентификатор персонажа   | 1                                        |
| name            | string         | Имя персонажа                        | "Roland"                                 |
| name_key        | string         | Ключ перевода имени                  | "character_1_name"                       |
| description     | string \| null | Биографическое описание персонажа    | "Head of the Knights of the Round Table" |
| description_key | string         | Ключ перевода описания               | "character_1_description"                |

## Пример определения

```json
{
    "id": 1,
    "name": "Roland",
    "name_key": "character_1_name",
    "description": "Head of the Knights of the Round Table",
    "description_key": "character_1_description"
}
```
