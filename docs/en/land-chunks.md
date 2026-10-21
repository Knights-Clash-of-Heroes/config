# Kingdom Land Chunks

Land chunks are the divisions of the kingdom's terrain. The kingdom map is made up of a grid of these chunks, which can be starting terrain or purchasable expansions.

## Kingdom land chunk size

The size of each land chunk is defined globally in the configuration and determines how many building "squares" fit in each chunk.

| Property | Type | Description                  |
| -------- | ---- | ---------------------------- |
| width    | int  | Chunk width in squares       |
| height   | int  | Chunk height in squares      |

## Kingdom land chunk structure

| Property     | Value type                                             | Description                                              | Example value                                              |
| ------------ | ------------------------------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------- |
| id           | int                                                    | Unique identifier of the land chunk                      | 1                                                          |
| is_expansion | boolean                                                | If true, the player must purchase it to use it           | true                                                       |
| position     | [interface:Position](./interfaces/position.md)         | Position (column and row) of the chunk on the kingdom map | [Definition](./interfaces/position.md#definition-example) |
| price        | [array:interface:Price](./interfaces/price.md) \| null | Cost required to unlock the expansion                    | [Definition](./interfaces/price.md#definition-example)     |

## Definition example

```json
{
    "id": 10,
    "is_expansion": true,
    "position": {
        "x": 0,
        "y": 0
    },
    "price": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 1000
        }
    ]
}
```
