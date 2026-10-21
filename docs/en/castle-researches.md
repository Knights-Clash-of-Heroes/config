# Castle Researches

Castle researches (`castle_researches`) are responsible for the global improvements and updates of the buildings in your kingdom. They are usually paid for with several types of basic resources and items. These researches permanently increase your defenses and productivity.

| Property            | Type                                           | Description                                                                          | Example value      |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------ |
| id                  | int                                            | Unique identifier of the research.                                                   | 1                  |
| name                | string                                         | Research name.                                                                       | "Reinforced Walls" |
| name_key            | string                                         | Translation key for the name.                                                        | "castle_1_name"    |
| price               | [array:interface:Price](./interfaces/price.md) | Cost required in resources and/or general items.                                     | [...]              |
| research_time       | int                                            | Duration of the research progress, measured in seconds.                              | 7200               |
| building_upgrade_id | int \| null                                    | If non-null, activates the upgrade for the referenced building (`building_upgrades`). | 1                  |
| unlock_building_id  | int \| null                                    | If non-null, allows a given new building (`buildings`) to be purchased.              | null               |

## Definition example

```json
{
    "id": 1,
    "name_key": "castle_research_1_name",
    "name": "Reinforce Walls",
    "price": [
        {
            "type": "resource",
            "resource_id": 3,
            "quantity": 300
        }
    ],
    "research_time": 3600,
    "building_upgrade_id": 2,
    "unlock_building_id": null
}
```
