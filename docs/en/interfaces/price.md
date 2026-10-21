# Prices and costs

The price interface is used to define the cost of something, whether it is a building, an item, a unit, a research, etc.

| Property    | Type                                   | Description                                         |
| ----------- | -------------------------------------- | --------------------------------------------------- |
| type        | [enum:CostType](../enums/cost-type.md) | Price type                                          |
| resource_id | int \| null                            | Resource identifier, if the type is `resource`      |
| item_id     | int \| null                            | Item identifier, if the type is `item`              |

## Definition example

```json
{
    "type": "resource",
    "resource_id": 1,
    "quantity": 10
}
```
