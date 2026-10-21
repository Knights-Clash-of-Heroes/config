# Storage Increase

The storage increase interface is used to define the additional capacity that a building, such as a vault, grants to a specific resource in the player's kingdom.

| Property    | Type | Description                                                                    |
| ----------- | ---- | ------------------------------------------------------------------------------ |
| resource_id | int  | Identifier of the resource whose capacity will be increased                    |
| quantity    | int  | Amount that will be added to the global storage capacity of this resource      |

## Definition example

```json
{
    "resource_id": 1,
    "quantity": 10000
}
```
