# Horde Unit

The horde unit interface is used to define a part of a horde's composition, indicating which unit should spawn and at which position on the map.

| Property          | Type                                                | Description                                                                                                                                                             |
| ----------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| unit_id           | int                                                 | Identifier of the unit that is part of the horde                                                                                                                        |
| initial_position  | [interface:Position](./position.md) \| "random"     | Initial position (x, y) of the unit. If the coordinate value is `"random"`, the position is randomly generated within a radius of 7 squares from the horde's center.   |
| target_position   | [interface:Position](./position.md) \| null         | Destination position (x, y) the unit will automatically march to after spawning. If null, it acts normally.                                                             |
| custom_stats      | [interface:Stats](./stats.md) \| null               | Combat properties of the unit (health, damage, initiative, etc.) that override the original values of the base unit                                                     |
| custom_attributes | [array:interface:Attribute](./attribute.md) \| null | Passive and active abilities that override the original unit's attributes                                                                                               |
| level_factor      | float \| null                                       | Multiplier of attributes (such as health and damage) according to the player's current level, so that the horde progressively scales its difficulty                     |

## Definition example

```json
{
    "unit_id": 5,
    "initial_position": {
        "x": 10,
        "y": 12
    },
    "target_position": {
        "x": 15,
        "y": 15
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
}
```
