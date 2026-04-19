# Recursos

Recursos são os ativos fundamentais do jogo, utilizados para construir edifícios, treinar unidades, realizar pesquisas e progredir no jogo. Eles abrangem desde moedas e materiais de construção até experiência e energia.

| Propriedade     | Tipo de valor | Descrição                                                  | Exemplo de valor         |
| --------------- | ------------- | ---------------------------------------------------------- | ------------------------ |
| id              | int           | Identificador único do recurso                             | 1                        |
| name            | string        | Nome amigável do recurso (em inglês por padrão)            | "Gold"                   |
| name_key        | string        | Chave de tradução para o nome do recurso                   | "resource_1_name"        |
| description     | string        | Descrição amigável do recurso                              | "Money: the more..."     |
| description_key | string        | Chave de tradução para a descrição do recurso              | "resource_1_description" |

## Exemplo de definição

```json
{
    "id": 1,
    "name": "Gold",
    "name_key": "resource_1_name",
    "description_key": "resource_1_description",
    "description": "Money: the more you have, the better!"
}
```
