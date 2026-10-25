# Заклинания

Заклинания — способности, которые можно применять в бою. Они разделены по стихиям, однако заклинание может сочетать несколько стихий. Заклинания также можно применять, если у игрока есть свитки этого заклинания вместо рун. Заклинание определяется следующими свойствами:

| Свойство        | Тип    | Описание                                                               |
| --------------- | ------ | ---------------------------------------------------------------------- |
| id              | int    | Уникальный идентификатор заклинания.                                   |
| name            | string | Название заклинания.                                                   |
| name_key        | string | Ключ названия заклинания.                                              |
| description     | string | Описание заклинания.                                                   |
| description_key | string | Ключ описания заклинания.                                              |
| parchment_id    | int    | Идентификатор свитка заклинания.                                       |
| price           | array  | Список рун, необходимых для применения заклинания.                     |
| target_type     | string | Тип цели заклинания.                                                   |
| range           | int    | Дальность заклинания.                                                  |
| effects         | array  | Список [эффектов](interfaces/effect.md), накладываемых заклинанием.    |

## Пример определения

```json
{
    "id": 1,
    "name": "Earthquake",
    "name_key": "spell_1_name",
    "description": "Causes area damage around the target",
    "description_key": "spell_1_description",
    "parchment_id": 1,
    "price": [
        {
            "type": "rune",
            "rune_id": 1,
            "quantity": 1
        },
        {
            "type": "rune",
            "rune_id": 2,
            "quantity": 2
        }
    ],
    "target_type": "area",
    "range": 3,
    "damage": 90,
    "effects": [
        {
            "effect_id": 1,
            "name": "Tremor",
            "name_key": "effect_1_name",
            "description": "Hinders movement and reduces agility.",
            "description_key": "effect_1_desc",
            "value": 20,
            "duration": 2
        },
        {
            "effect_id": 2,
            "name": "Raised Dust",
            "name_key": "effect_2_name",
            "description": "Visibility in the area is reduced, decreasing accuracy.",
            "description_key": "effect_2_desc",
            "value": -10,
            "duration": 3
        }
    ]
}
```
