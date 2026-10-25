# Реплики кампании

Диалоги, происходящие по ходу кампании. Они привязаны к конкретным персонажам и служат для рассказа истории игры.

| Свойство              | Тип значения                                           | Описание                                                                                           | Пример значения                        |
| --------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | -------------------------------------- |
| id                    | int                                                    | Уникальный идентификатор реплики                                                                   | 1                                      |
| character_id          | int                                                    | ID говорящего персонажа                                                                            | 1                                      |
| quote                 | string                                                 | Текст диалога                                                                                      | "It's quiet as the grave..."           |
| quote_key             | string                                                 | Ключ перевода диалога                                                                              | "campaign_quote_1_quote"               |
| requires_confirmation | boolean                                                | Если true, игра ждёт подтверждения игрока (нажатия на диалог) для продолжения                      | true                                   |
| camera_position       | [interface:Position](./interfaces/position.md) \| null | Необязательная позиция (x, y), к которой должна переместиться и на которой сфокусироваться камера во время этого диалога | [Определение](./interfaces/position.md) |

## Пример определения

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
