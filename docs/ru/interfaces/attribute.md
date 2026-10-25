# Атрибут

Интерфейс атрибута определяет активную или пассивную черту юнита или здания. Каждый атрибут должен иметь название и описание для отображения в интерфейсе.

Поле `type` определяет поведение атрибута (см. [Тип атрибута](../enums/attribute-type.md)):

- **`mechanical`**: напрямую влияет на характеристику юнита через `value`
- **`aura`**: излучает постоянную пассивную [ауру](aura.md) вокруг юнита через `aura_id`
- **`descriptive`**: не влияет на механику; только информационный

| Свойство        | Тип    | Описание                                                                         |
| --------------- | ------ | -------------------------------------------------------------------------------- |
| attribute_id    | int    | Идентификатор атрибута (тип)                                                     |
| type            | [enum:AttributeType](../enums/attribute-type.md) | Тип атрибута: `mechanical`, `aura` или `descriptive`  |
| name            | string | Название атрибута                                                                |
| name_key        | string | Ключ перевода названия                                                           |
| description     | string | Описание атрибута                                                                |
| description_key | string | Ключ перевода описания                                                           |
| value           | int?   | Значение механического воздействия — обязательно, если `type = mechanical`       |
| aura_id         | int?   | Идентификатор [ауры](aura.md) — обязателен, если `type = aura`                   |

## Пример — `mechanical`

```json
{
    "attribute_id": 1,
    "type": "mechanical",
    "name": "Plate Armor",
    "name_key": "attribute_1_name",
    "description": "Reduces the physical damage taken.",
    "description_key": "attribute_1_desc",
    "value": 50
}
```

## Пример — `aura`

```json
{
    "attribute_id": 2,
    "type": "aura",
    "name": "Leader's Presence",
    "name_key": "attribute_2_name",
    "description": "The hero's presence continuously inspires nearby soldiers.",
    "description_key": "attribute_2_desc",
    "aura_id": 1
}
```

## Пример — `descriptive`

```json
{
    "attribute_id": 3,
    "type": "descriptive",
    "name": "War Veteran",
    "name_key": "attribute_3_name",
    "description": "This unit has served in many campaigns.",
    "description_key": "attribute_3_desc"
}
```
