# Recursos

Recursos são os ativos fundamentais do jogo, utilizados para construir edifícios, treinar unidades, realizar pesquisas e progredir no jogo. Eles abrangem desde moedas e materiais de construção até experiência e energia.

| Propriedade              | Tipo                  | Descrição                                                  | Exemplo de valor         |
| ------------------------ | --------------------- | ---------------------------------------------------------- | ------------------------ |
| id                       | int                   | Identificador único do recurso                             | 1                        |
| name                     | string                | Nome amigável do recurso (em inglês por padrão)            | "Gold"                   |
| name_key                 | string                | Chave de tradução para o nome do recurso                   | "resource_1_name"        |
| description              | string                | Descrição amigável do recurso                              | "Money: the more..."     |
| description_key          | string                | Chave de tradução para a descrição do recurso              | "resource_1_description" |
| initial_storage_capacity | int \| "unlimited"    | Capacidade global de armazenamento inicial. Se "unlimited", o recurso não possui limite de estoque. | 5000 |
| can_overflow             | boolean               | Se verdadeiro, permite que recompensas (ex: baús) excedam a capacidade máxima de estoque sem perder o recurso. | true |
| regeneration_time        | int \| null           | Tempo em segundos necessário para o recurso regenerar a quantidade definida. Se for nulo, o recurso não regenera sozinho. | 3600 |
| regeneration_quantity    | int \| null           | Quantidade de recurso gerada automaticamente a cada ciclo definido em `regeneration_time`. | 1 |

## Exemplo de definição

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
