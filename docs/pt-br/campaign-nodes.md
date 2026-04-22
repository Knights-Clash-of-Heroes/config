# Nós de Campanha

Os nós (ou fases) da Campanha - o modo história do jogo - definem o que acontece em cada batalha, suas recompensas e as restrições para as tropas do jogador.

| Propriedade | Tipo de valor | Descrição | Exemplo de valor |
| ----------- | ------------- | --------- | ---------------- |
| id | int | Identificador único do nó | 1 |
| name | string | Nome do nó | "Patrol" |
| name_key | string | Chave de tradução para o nome | "campaign_node_1_name" |
| map_position | [interface:Position](./interfaces/position.md) | Posição (x, y) do nó no mapa da campanha | [Definição](./interfaces/position.md) |
| recommended_level | int | Nível recomendado do jogador para completar o nó | 5 |
| min_level | int \| null | Nível mínimo exigido para iniciar o nó (opcional) | 3 |
| required_node_id | int \| null | ID do nó que precisa ser completado antes deste ser liberado | 1 |
| rewards | [array:interface:Price](./interfaces/price.md) | Lista de recompensas ao completar o nó | [Definição](./interfaces/price.md) |
| allowed_unit_occupation | int | Quantidade máxima de ocupação de unidades permitidas | 2 |
| allowed_unit_squares | [array:interface:Position](./interfaces/position.md) | Posições permitidas para posicionar as unidades | [Definição](./interfaces/position.md) |

## Exemplo de definição

```json
{
    "id": 1,
    "name": "Patrol",
    "name_key": "campaign_node_1_name",
    "map_position": {
        "x": 150,
        "y": 200
    },
    "recommended_level": 1,
    "min_level": null,
    "required_node_id": null,
    "rewards": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 1000
        }
    ],
    "allowed_unit_occupation": 2,
    "allowed_unit_squares": [
        { "x": 0, "y": 0 },
        { "x": 1, "y": 0 }
    ]
}
```
