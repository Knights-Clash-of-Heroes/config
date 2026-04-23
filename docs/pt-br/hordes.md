# Hordas

As hordas são surgimentos de unidades que podem ser pacíficas ou hostís. Elas surgem em fases da campanha e de eventos; são disparadas quando algum chefe é derrotado, após o turno de um chefe ou após um diálogo entre personagens.

## Definição de horda
  
| Propriedade     | Tipo de valor                                           | Descrição                                                                                                       | Exemplo de valor                                                |
| --------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| id              | int                                                     | Identificador da horda                                                                                          | 1                                                               |
| type            | [enum:HordeType](./enums/horde-type.md)                 | Tipo da horda (pacífica ou hostil)                                                                              | hostile                                                         |
| trigger         | [enum:HordeTrigger](./enums/horde-trigger.md)           | Gatilho que dispara o surgimento da horda                                                                       | after_boss_turn                                                 |
| trigger_value   | int \| string \| null                                   | Valor complementar do gatilho (ex: ID do chefe, número do turno, ID do diálogo)                                 | 3                                                               |
| center_position | [interface:Position](./position.md)                     | Posição central (x, y) da horda. As coordenadas x e y devem estar entre 0 e 7. Se um valor de coordenada for `"random"`, o valor será gerado aleatoriamente entre 0 e 7. | [Definição](./position.md#exemplo-de-definição)                 |
| units           | [array:interface:HordeUnit](./interfaces/horde-unit.md) | Lista de unidades que compõem a horda e suas respectivas posições relativas ao ponto central                                              | [Definição](./interfaces/horde-unit.md#exemplo-de-definição)    |

### Exemplo de definição

```json
{
    "id": 1,
    "type": "hostile",
    "trigger": "after_boss_turn",
    "trigger_value": 3,
    "center_position": {
        "x": 0,
        "y": 0
    },
    "units": [
        {
            "unit_id": 5,
            "initial_position": {
                "x": 0,
                "y": 2
            },
            "target_position": {
                "x": 2,
                "y": 5
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
        },
        {
            "unit_id": 6,
            "position": {
                "x": 1,
                "y": 4
            }
        }
    ]
}
```
