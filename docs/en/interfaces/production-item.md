# Production Item

The Production Item interface is used to define the production of an item in a building.

| Property    | Value type | Description                    | Example value |
| ----------- | ---------- | ------------------------------ | ------------- |
| type        | string     | Production type                | "resource"    |
| resource_id | int        | Resource identifier            | 1             |
| quantity    | int        | Quantity produced              | 1             |
| time        | int        | Production time in seconds     | 1             |
| limit       | int        | Limit of items produced        | 100           |

## Definition example

```json
{
    "type": "resource",
    "resource_id": 1,
    "quantity": 1,
    "time": 1,
    "limit": 100
}
```
