# Unidade da horda

A interface de unidade da horda é usada para definir uma parte da composição de uma horda, indicando qual unidade deve surgir e em qual posição no mapa.

| Propriedade        | Tipo                                                | Descrição                                                                                                                                                                                       |
| ------------------ | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| unit_id            | int                                                 | Identificador da unidade que faz parte da horda                                                                                                                                                 |
| position           | [interface:Position](./position.md) \| "random"     | Posição relativa ao centro (x, y) que a unidade irá surgir no mapa. Se o valor de coordenada for `"random"`, a posição será gerada aleatoriamente em um raio de 7 quadrados do centro da horda. |
| custom_stats       | [interface:Stats](./stats.md) \| null               | Propriedades de combate da unidade (vida, dano, iniciativa, etc.) que sobrescrevem os valores originais da unidade base                                                                         |
| custom_attributes  | [array:interface:Attribute](./attribute.md) \| null | Habilidades passivas e ativas que sobrescrevem os atributos da unidade original                                                                                                                 |
| level_factor       | float \| null                                       | Fator multiplicador de atributos (como vida e dano) de acordo com o nível atual do jogador, para que a horda escale sua dificuldade progressivamente                                            |

## Exemplo de definição

```json
{
    "unit_id": 5,
    "position": {
        "x": 10,
        "y": 12
    },
    "custom_stats": {
        "health": 150,
        "attack": 25,
        "initiative": 5,
        "speed": 3,
        "range": 1
    },
    "custom_attributes": [
        {
            "attribute_id": 1,
            "value": 15
        }
    ],
    "level_factor": 1.5
}
```
