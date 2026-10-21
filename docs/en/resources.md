# Resources

Resources are the fundamental assets of the game, used to build buildings, train units, perform researches and progress through the game. They range from coins and building materials to experience and energy.

| Property                 | Type               | Description                                                                                                                  | Example value            |
| ------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                       | int                | Unique identifier of the resource                                                                                            | 1                        |
| name                     | string             | Friendly name of the resource (in English by default)                                                                        | "Gold"                   |
| name_key                 | string             | Translation key for the resource name                                                                                        | "resource_1_name"        |
| description              | string             | Friendly description of the resource                                                                                         | "Money: the more..."     |
| description_key          | string             | Translation key for the resource description                                                                                 | "resource_1_description" |
| initial_storage_capacity | int \| "unlimited" | Initial global storage capacity. If "unlimited", the resource has no stock limit.                                            | 5000                     |
| can_overflow             | boolean            | If true, allows rewards (e.g. chests) to exceed the maximum storage capacity without losing the resource.                    | true                     |
| regeneration_time        | int \| null        | Time in seconds needed for the resource to regenerate the defined quantity. If null, the resource does not regenerate itself. | 3600                     |
| regeneration_quantity    | int \| null        | Amount of resource generated automatically every cycle defined by `regeneration_time`.                                       | 1                        |

## Definition example

```json
{
    "id": 1,
    "name": "Gold",
    "name_key": "resource_1_name",
    "description_key": "resource_1_description",
    "description": "Money: the more you have, the better!",
    "initial_storage_capacity": 5000,
    "can_overflow": false,
    "regeneration_time": null,
    "regeneration_quantity": null
}
```
