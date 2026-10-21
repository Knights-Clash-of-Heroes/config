# Hordes

Hordes are spawns of units that can be peaceful or hostile. They appear in campaign and event stages; they are triggered when a boss is defeated, after a boss's turn, or after a dialogue between characters.

## Horde definition

| Property        | Value type                                              | Description                                                                                                                                                                | Example value                                                |
| --------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| id              | int                                                     | Horde identifier                                                                                                                                                           | 1                                                            |
| type            | [enum:HordeType](./enums/horde-type.md)                 | Horde type (peaceful or hostile)                                                                                                                                           | hostile                                                      |
| trigger         | [enum:HordeTrigger](./enums/horde-trigger.md)           | Trigger that causes the horde to spawn                                                                                                                                     | after_boss_turn                                              |
| trigger_value   | int \| string \| null                                   | Complementary trigger value (e.g. boss ID, turn number, dialogue ID)                                                                                                       | 3                                                            |
| center_position | [interface:Position](./position.md)                     | Center position (x, y) of the horde. The x and y coordinates must be between 0 and 7. If a coordinate value is `"random"`, the value will be randomly generated between 0 and 7. | [Definition](./position.md#definition-example)               |
| units           | [array:interface:HordeUnit](./interfaces/horde-unit.md) | List of units that make up the horde and their respective positions relative to the center point                                                                           | [Definition](./interfaces/horde-unit.md#definition-example)  |

### Definition example

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
