# Nós de Campanha

Os nós (ou fases) da Campanha - o modo história do jogo - definem o que acontece em cada batalha, suas recompensas e as restrições para as tropas do jogador.

| Propriedade | Tipo de valor | Descrição | Exemplo de valor |
| ----------- | ------------- | --------- | ---------------- |
| id | int | Identificador único do nó | 1 |
| name | string | Nome do nó | "Patrol" |
| name_key | string | Chave de tradução para o nome | "campaign_node_1_name" |
| rewards | [array:interface:Price](./interfaces/price.md) | Lista de recompensas ao completar o nó | [Definição](./interfaces/price.md) |
| allowed_unit_occupation | int | Quantidade máxima de ocupação de unidades permitidas | 2 |
| allowed_unit_squares | [array:interface:Position](./interfaces/position.md) | Posições permitidas para posicionar as unidades | [Definição](./interfaces/position.md) |

## Exemplo de definição

```json
{
    "id": 1,
    "name": "Patrol",
    "name_key": "campaign_node_1_name",
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
