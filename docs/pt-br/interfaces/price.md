# Preços e custos

| Propriedade | Tipo                                   | Descrição                                             |
| ----------- | -------------------------------------- | ----------------------------------------------------- |
| type        | [enum:CostType](../enums/cost-type.md) | Tipo do preço                                         |
| resource_id | int \| null                            | Identificador do recurso, caso o tipo seja `resource` |
| item_id     | int \| null                            | Identificador do item, caso o tipo seja `item`        |