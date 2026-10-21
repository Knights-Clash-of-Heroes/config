# Campaign Nodes

The nodes (or stages) of the Campaign - the story mode of the game - define what happens in each battle, its rewards and the restrictions on the player's troops.

| Property                | Value type                                           | Description                                                     | Example value                                  |
| ----------------------- | ---------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------- |
| id                      | int                                                  | Unique identifier of the node                                   | 1                                              |
| name                    | string                                               | Node name                                                       | "Patrol"                                       |
| name_key                | string                                               | Translation key for the name                                    | "campaign_node_1_name"                         |
| map_position            | [interface:Position](./interfaces/position.md)       | Position (x, y) of the node on the campaign map                 | [Definition](./interfaces/position.md)         |
| recommended_level       | int                                                  | Recommended player level to complete the node                   | 5                                              |
| min_level               | int \| null                                          | Minimum level required to start the node (optional)             | 3                                              |
| required_node_id        | int \| null                                          | ID of the node that must be completed before this one is unlocked | 1                                            |
| rewards                 | [array:interface:Price](./interfaces/price.md)       | List of rewards for completing the node                         | [Definition](./interfaces/price.md)            |
| allowed_unit_occupation | int                                                  | Maximum unit occupation allowed                                 | 2                                              |
| allowed_unit_squares    | [array:interface:Position](./interfaces/position.md) | Positions where units are allowed to be placed                  | [Definition](./interfaces/position.md)         |

## Definition example

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
