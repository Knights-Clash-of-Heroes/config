# Upgrade for Other Buildings (UpgradeForOtherBuilding)

The `UpgradeForOtherBuilding` interface is a simplified version of the building upgrade, used when an upgrade affects buildings other than the main one. It has the same basic structure, but does not contain cost, upgrade time or recursion properties.

| Property    | Value type                                  | Description                                                                                                        | Example value                                    |
| ----------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| building_id | int                                         | Identifier of the building that will receive the upgrade                                                           | 1                                                |
| stats       | [interface:Stats](./stats.md)               | Combat attributes applied to the building                                                                          | [Definition](./stats.md#definition-example)      |
| attributes  | [array:interface:Attribute](./attribute.md) | Additional attributes (passives). If multiple attributes of the same type are applied, their values accumulate.    | [Definition](./attribute.md#definition-example)  |

## Definition example

```json
{
    "building_id": 1,
    "stats": {
        "health": 10,
        "attack": null,
        "initiative": null,
        "speed": null,
        "range": null
    },
    "attributes": [
        {
            "attribute_id": 1,
            "value": 5
        }
    ]
}
```
