# Heróis

Heróis são personagens poderosos e únicos que lideram suas tropas no campo de batalha. Diferente das unidades comuns, os heróis possuem atributos superiores e podem ser aprimorados através do Altar de Heróis e heróis, mesmo que sejam derrotados durante batalhas, não morrem, logo, não precisam ser ressuscitados.

## Definição de herói

| Propriedade                 | Tipo de valor                             | Descrição                                                                                            | Exemplo de valor                                            |
| --------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| id                          | int                                       | Identificador do herói                                                                               | 1                                                           |
| name                        | string                                    | Nome do herói                                                                                        | Sir Crashton                                                |
| name_key                    | string                                    | Chave que aponta para o nome traduzido do herói na localização                                       | hero_1_name                                                 |
| description                 | string                                    | Descrição do herói                                                                                   | Um cavaleiro experiente conhecido por sua defesa inabalável.|
| description_key             | string                                    | Chave que aponta para a descrição traduzida do herói na localização                                  | hero_1_description                                          |
| type                        | [enum:UnitType](./enums/unit-type.md)     | Tipo do herói, implica no uso de habilidades passivas e ativas contra ele                            | on_foot                                                     |
| attack_type                 | [enum:AttackType](./enums/attack-type.md) | Tipo do ataque do herói                                                                              | melee                                                       |
| target_type                 | [enum:TargetType](./enums/target-type.md) | Tipo do alvo do herói                                                                                | single                                                      |
| target_range                | int \| null                               | Alcance do alvo (se aplicável)                                                                       | null                                                        |
| training_building_id        | int \| null                               | Identificador que aponta para a construção onde o herói é invocado (geralmente Altar de Heróis)      | 13                                                          |
| training_building_min_level | int \| null                               | Nível mínimo da construção de invocação                                                              | 1                                                           |
| training_cost               | [interface:Price](./interfaces/price.md)  | Custo de invocação do herói                                                                          | null                                                        |
| training_time               | int \| null                               | Tempo de invocação em segundos                                                                       | null                                                        |
| size                        | [interface:Size](./interfaces/size.md)    | Tamanho em quadrados do herói                                                                        | [Definição](./interfaces/size.md#exemplo-de-definição)      |
| stats                       | [interface:Stats](./interfaces/stats.md)  | Propriedades de combate, como vida, dano, iniciativa, velocidade e alcance                           | [Definição](./interfaces/stats.md#exemplo-de-definição)     |
| attributes                  | [array:interface:Attribute](./interfaces/attribute.md) | Habilidades passivas e ativas do herói                                                  | [Definição](./interfaces/attribute.md#exemplo-de-definição) |
| upgrade_ids                 | [array:int] \| null                       | Identificadores das melhorias aplicáveis a este herói                                                | []                                                          |

### Exemplo de definição

```json
{
    "id": 1,
    "name": "Sir Crashton",
    "name_key": "hero_1_name",
    "description_key": "hero_1_description",
    "description": "Heavily armadured infrontry leader",
    "type": "on_foot",
    "attack_type": "melee",
    "target_type": "single",
    "target_range": null,
    "size": {
        "width": 1,
        "height": 1
    },
    "stats": {
        "health": 500,
        "attack": 75,
        "initiative": 110,
        "speed": 4,
        "range": null
    },
    "attributes": null,
    "upgrade_ids": []
}
```
