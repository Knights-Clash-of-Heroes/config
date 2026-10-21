# Altar of Heroes Researches

Altar of Heroes researches (`altar_of_heroes_researches`) are used to improve Heroes, enhancing their stats and strengthening them for battles, or even to unlock new Heroes. They cost game resources and items, similarly to the Arsenal.

| Property        | Type                                           | Description                                                                             | Example value      |
| --------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------ |
| id              | int                                            | Unique identifier of the research.                                                      | 1                  |
| name            | string                                         | Research name.                                                                          | "Majestic Training" |
| name_key        | string                                         | Translation key for the name.                                                           | "altar_1_name"     |
| price           | [array:interface:Price](./interfaces/price.md) | Cost required in resources and items.                                                   | [...]              |
| research_time   | int                                            | Research completion time, in seconds.                                                   | 3600               |
| hero_upgrade_id | int \| null                                    | The ID of the hero upgrade (`hero_upgrades`) activated by this research.                | 1                  |
| unlock_hero_id  | int \| null                                    | The ID of the new hero enabled (`heroes`), if this research recruits/unlocks one.       | null               |

## Definition example

```json
{
    "id": 1,
    "name_key": "altar_research_1_name",
    "name": "Royal Training",
    "price": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 500
        }
    ],
    "research_time": 3600,
    "hero_upgrade_id": 1,
    "unlock_hero_id": null
}
```
