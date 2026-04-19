# Construções

| Propriedade         | Tipo de valor                                          | Descrição                                                                                | Exemplo de valor                                            |
| ------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| id                  | int                                                    | Identificador da construção                                                              | 4                                                           |
| name                | string                                                 | Nome da construção                                                                       | Campo de Arqueiros                                          |
| name_key            | string                                                 | Chave que aponta para o nome traduzido da construção na localização                      | building_4_name                                             |
| description         | string                                                 | Descrição da construção                                                                  | Arqueiros são treinados aqui                                | 
| description_key     | string                                                 | Chave que aponta para a descrição traduzida da construção na localização                 | building_4_description                                      |
| size                | [interface:Size](./interfaces/size.md)                 | Tamanho em quadrados da construção                                                       | [Definição](./interfaces/size.md#exemplo-de-definição)      |
| stats               | [interface:Stats](./interfaces/stats.md)               | Propriedades de combate da construção, como vida, dano, iniciativa, velocidade e alcance | [Definição](./interfaces/stats.md#exemplo-de-definição)     |
| attributes          | [array:interface:Attribute](./interfaces/attribute.md) | Habilidades passivas e ativas da construção                                              | [Definição](./interfaces/attribute.md#exemplo-de-definição) |
| castle_research_ids | array:int                                              | Identificadores das pesquisas que podem ser realizadas nesta construção                  | [1, 2, 3]                                                   |
| price               | [array:interface:Price](./interfaces/price.md)         | Custo de construção da construção                                                        | [Definição](./interfaces/price.md#exemplo-de-definição)     |
| construction_time   | int                                                    | Tempo de construção em segundos                                                          | 300                                                         |
| upgrade_ids         | array:int                                              | Identificadores das construções que são upgrades desta construção                        | [1, 2, 3]                                                   |
| passive_production  | [array:interface:ProductionItem](./interfaces/production-item.md) \| null | Produção passiva da construção                                          | [Definição](./interfaces/production-item.md#exemplo-de-definição) |

## Exemplo de definição

```json
{
    "id": 4,
    "name": "Archery Range",
    "name_key": "building_4_name",
    "description_key": "building_4_description",
    "description": "Archers are trained here",
    "price": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 1600
        },
        {
            "type": "resource",
            "resource_id": 2,
            "quantity": 60
        },
        {
            "type": "resource",
            "resource_id": 3,
            "quantity": 20
        }
    ],
    "construction_time": 300,
    "size": {
        "width": 4,
        "height": 4
    },
    "stats": {
        "health": 120,
        "attack": null,
        "initiative": null,
        "speed": null,
        "range": null
    },
    "attributes": null,
    "upgrade_ids": [...],
    "castle_research_ids": [...],
    "passive_production": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 1
        }
    ]
}
```