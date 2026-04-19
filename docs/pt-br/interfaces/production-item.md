# Item de produção

A interface de Item de produção é usada para definir a produção de um item em um edifício.

| Propriedade | Tipo de valor | Descrição                     | Exemplo de valor |
| ----------- | ------------- | ----------------------------- | ---------------- |
| type        | string        | Tipo de produção              | "resource"       |
| resource_id | int           | Identificador do recurso      | 1                |
| quantity    | int           | Quantidade produzida          | 1                |
| time        | int           | Tempo de produção em segundos | 1                |
| limit       | int           | Limite de itens produzidos    | 100              |

## Exemplo de definição

```json
{
    "type": "resource",
    "resource_id": 1,
    "quantity": 1,
    "time": 1,
    "limit": 100
}
```
