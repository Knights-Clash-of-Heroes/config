# Aperfeiçoamentos de unidades

Aperfeiçoamentos ou melhorias de unidades são feitas para aprimorar as unidades do jogo. Elas podem ser feitas por alguns meios: Arsenal, Loja do Dragãozinho e na aba de melhorias da Loja. Os atributos são os seguintes:

| Propriedade         | Tipo de valor                                                    | Descrição                                                                                           | Exemplo de valor                                             |
| ------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| id                  | int                                                              | Identificador do aperfeiçoamento                                                                    | 1                                                            |
| unit_id             | int                                                              | Identificador da unidade                                                                            | 1                                                            |
| arsenal_research_id | int \| null                                                      | Identificador da pesquisa que pode ser realizada nesta unidade                                      | 1                                                            |
| stats               | [interface:Stats](./interfaces/stats.md) \| null                 | Acréscimo nas propriedades de combate da unidade, como vida, dano, iniciativa, velocidade e alcance | [Definição](./interfaces/stats.md#exemplo-de-definição)      |
| attributes          | [array:interface:Attributes](./interfaces/attributes.md) \| null | Acréscimo de atributos especiais da unidade                                                         | [Definição](./interfaces/attributes.md#exemplo-de-definição) |

## Exemplo de definição

```json
{
    "id": 1,
    "unit_id": 1,
    "arsenal_research_id": 1,
    "stats": {
        "hp": 10,
        "damage": 5,
        "initiative": 2,
        "speed": 3,
        "range": null
    },
    "attributes": [
        {
            "attribute_id": 1,
            "value": 10
        }
    ]
}
```