# Characters

The character system defines the story figures who interact with the player through quests and dialogues.

## Properties

| Property        | Value type     | Description                          | Example value                            |
| --------------- | -------------- | ------------------------------------ | ---------------------------------------- |
| id              | int            | Unique identifier of the character   | 1                                        |
| name            | string         | Character name                       | "Roland"                                 |
| name_key        | string         | Translation key for the name         | "character_1_name"                       |
| description     | string \| null | Biographical description of the character | "Head of the Knights of the Round Table" |
| description_key | string         | Translation key for the description  | "character_1_description"                |

## Definition example

```json
{
    "id": 1,
    "name": "Roland",
    "name_key": "character_1_name",
    "description": "Head of the Knights of the Round Table",
    "description_key": "character_1_description"
}
```
