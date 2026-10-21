# Dragon Shop Researches

Dragon Shop researches (`dragon_shop_researches`) are special, luxurious or globally advantageous (elite) improvements for buildings and units. Since it is the game's premium shop, the cost is paid exclusively with **Crystals** (premium resource).

| Property            | Type                                           | Description                                                          | Example value     |
| ------------------- | ---------------------------------------------- | -------------------------------------------------------------------- | ----------------- |
| id                  | int                                            | Unique identifier of the upgrade.                                    | 1                 |
| name                | string                                         | Research name.                                                       | "Ancient Lore"    |
| name_key            | string                                         | Translation key for the name.                                        | "dragon_1_name"   |
| price               | [array:interface:Price](./interfaces/price.md) | Upgrade cost. **Must be charged in Crystals.**                       | [...]             |
| research_time       | int                                            | Duration of the process in seconds.                                  | 3600              |
| building_upgrade_id | int \| null                                    | Activates a super-upgrade for the referenced specific building.      | 1                 |
| unit_upgrade_id     | int \| null                                    | Activates a super-upgrade for the referenced unit.                   | null              |

## Definition example

```json
{
    "id": 1,
    "name_key": "dragon_research_1_name",
    "name": "Ancient Lore",
    "price": [
        {
            "type": "resource",
            "resource_id": 2,
            "quantity": 300
        }
    ],
    "research_time": 3600,
    "building_upgrade_id": 5,
    "unit_upgrade_id": null
}
```
