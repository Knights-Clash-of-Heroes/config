# Quest Tasks

Each quest has a list of tasks (objectives) the player must perform to progress. These tasks range from starting a battle to building specific buildings.

| Property        | Value type | Description                                   | Example value                                       |
| --------------- | ---------- | --------------------------------------------- | --------------------------------------------------- |
| id              | int        | Unique identifier of the task                 | 1                                                   |
| name            | string     | Task name/objective                           | "Start the battle \"Patrol\""                       |
| name_key        | string     | Translation key for the name                  | "quest_task_1"                                      |
| description     | string     | Description or hint on how to complete the task | "Select battle \"Patrol\" on the map of Greenmeere" |
| description_key | string     | Translation key for the description           | "quest_task_1_description"                          |

## Definition example

```json
{
    "id": 1,
    "name": "Start the battle \"Patrol\"",
    "name_key": "quest_task_1",
    "description": "Select battle \"Patrol\" on the map of Greenmeere",
    "description_key": "quest_task_1_description"
}
```
