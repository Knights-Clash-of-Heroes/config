# Pedaços de terra do Reino

Pedaços de terra são as divisões do terreno do reino. O mapa do reino é composto por uma grade desses pedaços, que podem ser terreno inicial ou expansões compráveis.

## Tamanho dos peçados de terra do Reino

O tamanho de cada pedaço de terra é definido globalmente na configuração e determina quantos "quadrados" de construção cabem em cada chunk.

| Propriedade | Tipo | Descrição |
| ----------- | ---- | --------- |
| width       | int  | Largura do chunk em quadrados |
| height      | int  | Altura do chunk em quadrados |

## Estrutura do Pedaço de terra do Reino

| Propriedade | Tipo de valor | Descrição | Exemplo de valor |
| ----------- | ------------- | --------- | ---------------- |
| id | int | Identificador único do pedaço de terra | 1 |
| is_expansion | boolean | Se verdadeiro, o jogador precisa comprar para utilizar | true |
| position | [interface:Position](./interfaces/position.md) | Posição (coluna e linha) do chunk no mapa do reino | [Definição](./interfaces/position.md#exemplo-de-definição) |
| price | [array:interface:Price](./interfaces/price.md) \| null | Custo necessário para desbloquear a expansão | [Definição](./interfaces/price.md#exemplo-de-definição) |

## Exemplo de definição

```json
{
    "id": 10,
    "is_expansion": true,
    "position": {
        "x": 0,
        "y": 0
    },
    "price": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 1000
        }
    ]
}
```
