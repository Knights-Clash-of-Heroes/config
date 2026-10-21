# Attribute

The attribute interface defines an active or passive trait of a unit or building. Every attribute must have a name and description to be displayed in the interface.

The `type` field determines the attribute's behavior (see [Attribute Type](../enums/attribute-type.md)):

- **`mechanical`**: directly affects a stat of the unit via `value`
- **`aura`**: emits a continuous passive [Aura](aura.md) around the unit via `aura_id`
- **`descriptive`**: no mechanical impact; informational only

| Property        | Type   | Description                                                                      |
| --------------- | ------ | -------------------------------------------------------------------------------- |
| attribute_id    | int    | Attribute identifier (type)                                                      |
| type            | [enum:AttributeType](../enums/attribute-type.md) | Attribute type: `mechanical`, `aura` or `descriptive`  |
| name            | string | Attribute name                                                                   |
| name_key        | string | Translation key for the name                                                     |
| description     | string | Attribute description                                                            |
| description_key | string | Translation key for the description                                              |
| value           | int?   | Mechanical impact value — required if `type = mechanical`                        |
| aura_id         | int?   | Identifier of the [Aura](aura.md) — required if `type = aura`                    |

## Example — `mechanical`

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

## Example — `aura`

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

## Example — `descriptive`

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
