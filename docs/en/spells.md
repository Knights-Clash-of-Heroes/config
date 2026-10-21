# Spells

Spells are abilities that can be cast during combat. They are divided by elements; however, a spell can combine more than one element. Spells can also be cast if the player has parchments of that spell instead of runes. A spell is defined with the following properties:

| Property        | Type   | Description                                                            |
| --------------- | ------ | ---------------------------------------------------------------------- |
| id              | int    | Unique identifier of the spell.                                        |
| name            | string | Spell name.                                                            |
| name_key        | string | Spell name key.                                                        |
| description     | string | Spell description.                                                     |
| description_key | string | Spell description key.                                                 |
| parchment_id    | int    | Identifier of the spell's parchment.                                   |
| price           | array  | List of runes required to cast the spell.                              |
| target_type     | string | Spell target type.                                                     |
| range           | int    | Spell range.                                                           |
| effects         | array  | List of [effects](interfaces/effect.md) applied by the spell.          |

## Definition example

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
