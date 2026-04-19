# Melhorias de construções

Melhorias de construções são fietas para aprimorar os edifícios do jogo. Elas podem ser feitas por alguns meios: Castelo (para melhorar a maioria dos edifícios) e Loja do Dragãozinho (para melhorar alguns edifícios especiais). Os atributos são os seguintes:

| Propriedade         | Tipo de valor                                                    | Descrição                                                                                           | Exemplo de valor                                            |
| ------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| id                  | int                                                              | Identificador da melhoria                                                                           | 1                                                           |
| price               | [array:interface:Price](./interfaces/price.md)                   | Custo da melhoria                                                                                   | [Definição](./interfaces/price.md#exemplo-de-definição)     |
| stats               | [interface:Stats](./interfaces/stats.md)                         | Propriedades de combate da melhoria                                                                 | [Definição](./interfaces/stats.md#exemplo-de-definição)     |
| attributes          | [array:interface:Attribute](./interfaces/attribute.md)           | Atributos adicionais. Se múltiplos atributos do mesmo tipo forem aplicados, seus valores são acumulativos. | [Definição](./interfaces/attribute.md#exemplo-de-definição) |
| upgrades_for_other_buildings | [array:interface:UpgradeForOtherBuilding](./interfaces/upgrade-for-other-building.md)             | Propriedades da melhoria para outras construções, é usada geralmente para melhorias de castelos     | [Definição](./interfaces/upgrade-for-other-building.md#exemplo-de-definição)     |
| upgrade_time        | int                                                              | Tempo de melhoria em segundos                                                                       | 10                                                          |
| building_id         | int                                                              | Identificador da construção que está sendo melhorada                                                | 1                                                           |


## Exemplo de definição

comentário: se a gente melhorar o castelo, automaticamente, algumas construções vão melhorar seus stats, por exemplo, a vida.

```json
{
    "id": 1,
    "price": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 10
        }
    ],
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
    ],
    "upgrades_for_other_buildings": [
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
                    "value": 2
                }
            ]
        }
    ],
    "upgrade_time": 10,
    "building_id": 1
}
```