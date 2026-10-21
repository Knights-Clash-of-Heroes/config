# Campaign Quotes

Dialogues that happen during the campaign progress. They are linked to specific characters and serve to tell the story of the game.

| Property              | Value type                                             | Description                                                                                        | Example value                          |
| --------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | -------------------------------------- |
| id                    | int                                                    | Unique identifier of the quote                                                                     | 1                                      |
| character_id          | int                                                    | ID of the character who is speaking                                                                | 1                                      |
| quote                 | string                                                 | The dialogue text                                                                                  | "It's quiet as the grave..."           |
| quote_key             | string                                                 | Translation key for the dialogue                                                                   | "campaign_quote_1_quote"               |
| requires_confirmation | boolean                                                | If true, the game waits for the player's confirmation (clicking the dialogue) to proceed           | true                                   |
| camera_position       | [interface:Position](./interfaces/position.md) \| null | Optional position (x, y) the game camera should move to and focus on during this dialogue          | [Definition](./interfaces/position.md) |

## Definition example

```json
{
    "id": 1,
    "character_id": 1,
    "quote": "It's quiet as the grave - no birdsong, no voices... Something is wrong here... Keep alert!",
    "quote_key": "campaign_quote_1_quote",
    "requires_confirmation": true,
    "camera_position": {
        "x": 10,
        "y": 15
    }
}
```
