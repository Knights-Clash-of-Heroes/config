# Unidades

Unidades (ou soldados, tropas) são personagens jogáveis que fazem parte do sistema de combate do jogo, eles podem ser pessoas a pé, pessoas montas em animais, pessoas com máquinas de cerco e monstros.

Eles podem ser usados tanto nas invasões (ataques, torneios e campanha), quanto na defesa do seu reino.

## Definição de unidade
  
| Propriedade                 | Tipo de valor                             | Descrição                                                                                            | Exemplo de valor                                            |
| --------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| id                          | int                                       | Identificador da unidade                                                                             | 1                                                           |
| name                        | string                                    | Nome da unidade                                                                                      | Homem da milícia                                            |
| name_key                    | string                                    | Chave que aponta para o nome traduzido da unidade na localização                                     | unit_1_name                                                 |
| description                 | string                                    | Descrição da unidade                                                                                 | Apenas um camponês com uma lança                            |
| description_key             | string                                    | Chave que aponta para a descrição traduzida da unidade na localização                                | unit_1_description                                          |
| type                        | [enum:UnitType](./enums/unit-type.md)     | Tipo da unidade, implica no uso de habilidades passivas e ativas contra a unidade                    | on_foot                                                     |
| attack_type                 | [enum:AttackType](./enums/attack-type.md) | Tipo do ataque da unidade, implica no uso de habilidades pasivas e ativas contra a unidade atacada   | melee                                                       |
| target_type                 | [enum:TargetType](./enums/target-type.md) | Tipo do alvo da unidade, serve para determinar os inimigos atingidos pelo ataque                     | single                                                       |
| training_building_id        | int \| null                               | Identificador que aponta para a construção que se realiza o treinamento da unidade se for treinável  |  2                                                          |
| training_building_min_level | int \| null                               | Nível mínimo que a construção de treino precisa estar, se for treinável, para treinar essa unidade   | 1                                                           |
| training_cost               | [interface:Price](./interfaces/price.md)  | Custo de treinamento da unidade, se for treinável, um objeto; se não for treinável, null             | [Definição](./interfaces/price.md#exemplo-de-definição)     |
| training_time               | int \| null                               | Tempo de treinamento em segundos, se for treinável, um número inteiro; se não for treinável, null    | 15                                                          |
| size                        | [interface:Size](./interfaces/size.md)    | Tamanho em quadrados da unidade                                                                      | [Definição](./interfaces/size.md#exemplo-de-definição)      |
| occupation                  | int                                       | Espaço de habitação ocupado pela unidade                                                             | 1                                                           |
| stats                       | [interface:Stats](./interfaces/stats.md)  | Propriedades de combate da unidade, como vida, dano, iniciativa, velocidade e alcance                | [Definição](./interfaces/stats.md#exemplo-de-definição)     |
| attributes                  | [array:interface:Attribute](./interfaces/attribute.md) | Habilidades passivas e ativas da unidade                                                | [Definição](./interfaces/attribute.md#exemplo-de-definição) |
| upgrade_ids                 | [array:int] \| null                       | Identificadores das unidades que são upgrades desta unidade                                          | [1, 2, 3]                                                   |
| arsenal_research_ids        | [array:int] \| null                       | Identificadores das pesquisas que podem ser realizadas nesta unidade                                 | [1, 2, 3]                                                   |
| resurrection_time           | int                                       | Tempo de ressurreição em segundos (0 se instantâneo)                                                 | 0                                                           |
| resurrection_timeout        | int                                       | Tempo limite para ressuscitar a unidade antes que ela seja apagada definitivamente do reino          | 3600                                                        |
| resurrection_cost           | [array:interface:Price](./interfaces/price.md) \| null | Custo para ressuscitar a unidade                                                                    | [Definição](./interfaces/price.md#exemplo-de-definição)     |
| inherit_upgrades_from_unit_id | int \| null                             | Identificador de outra unidade para herdar as mesmas melhorias aplicadas a ela. Usado para unidades especiais ou variações que compartilham as melhorias da unidade base. | 1                                                           |

### Exemplo de definição

```json
{
    "id": 1,
    "name": "Homem da milícia",
    "name_key": "unit_1_name",
    "description": "Apenas um camponês com uma lança",
    "description_key": "unit_1_description",
    "type": "on_foot",
    "attack_type": "melee",
    "target_type": "single",
    "training_building_id": 2,
    "training_building_min_level": 1,
    "training_cost": {
        "resource_id": 1,
        "quantity": 380
    },
    "training_time": 15,
    "size": {
        "width": 1,
        "height": 1
    },
    "occupation": 1,
    "stats": {
        "health": 10,
        "attack": 1,
        "initiative": 1,
        "speed": 1,
        "range": 1
    },
    "attributes": [
        {
            "attribute_id": 1,
            "value": 10
        }
    ],
    "upgrade_ids": [...],
    "arsenal_research_ids": [...],
    "inherit_upgrades_from_unit_id": null
}
```