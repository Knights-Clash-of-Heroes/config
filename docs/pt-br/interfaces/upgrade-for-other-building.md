# Melhoria para outras construções (UpgradeForOtherBuilding)

A interface `UpgradeForOtherBuilding` é uma versão simplificada da melhoria de construção, utilizada quando uma melhoria afeta outros edifícios além do principal. Ela possui a mesma estrutura básica, mas não contém propriedades de custo, tempo de melhoria ou recursão.

| Propriedade | Tipo de valor | Descrição | Exemplo de valor |
| ----------- | ------------- | --------- | ---------------- |
| building_id | int | Identificador da construção que receberá a melhoria | 1 |
| stats | [interface:Stats](./stats.md) | Atributos de combate aplicados à construção | [Definição](./stats.md#exemplo-de-definição) |
| attributes | [array:interface:Attribute](./attribute.md) | Atributos adicionais (passivas). Se múltiplos atributos do mesmo tipo forem aplicados, seus valores são acumulativos. | [Definição](./attribute.md#exemplo-de-definição) |

## Exemplo de definição

```json
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
            "value": 5
        }
    ]
}
```
