# Quests

Quests guide the player through the game's progress, offering rewards for completing specific tasks.

## Properties

| Property          | Value type                                     | Description                                        | Example value                      |
| ----------------- | ---------------------------------------------- | -------------------------------------------------- | ---------------------------------- |
| id                | int                                            | Unique identifier of the quest                     | 1                                  |
| required_level_id | int                                            | Level required to unlock the quest                 | 1                                  |
| name              | string                                         | Quest name                                         | "Patrol"                           |
| name_key          | string                                         | Translation key for the name                       | "quest_1"                          |
| description       | string                                         | Descriptive text of the quest                      | "Milord, messengers..."            |
| description_key   | string                                         | Translation key for the description                | "quest_1_description"              |
| character_id      | int                                            | ID of the character who gives the quest            | 1                                  |
| task_ids          | array:int                                      | List of required [Quest Task](./quest-tasks.md) IDs | [1, 2]                            |
| rewards           | [array:interface:Price](./interfaces/price.md) | List of rewards for completing the quest           | [Definition](./interfaces/price.md) |

## Definition example

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
