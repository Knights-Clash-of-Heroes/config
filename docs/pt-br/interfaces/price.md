# Preços e custos

A interface de preço é usada para definir o custo de uma coisa, seja ela uma construção, um item, uma unidade, uma pesquisa, etc.

| Propriedade | Tipo                                   | Descrição                                             |
| ----------- | -------------------------------------- | ----------------------------------------------------- |
| type        | [enum:CostType](../enums/cost-type.md) | Tipo do preço                                         |
| resource_id | int \| null                            | Identificador do recurso, caso o tipo seja `resource` |
| item_id     | int \| null                            | Identificador do item, caso o tipo seja `item`        |

## Exemplo de definição

```json
{
    "type": "resource",
    "resource_id": 1,
    "quantity": 10
}
```