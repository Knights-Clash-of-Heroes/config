# Feitiços
 
Os feitiços são habilidades que podem ser lançadas durante o combate, eles são divididos por elementos; entretanto, um feitiço pode combinar mais de um elemento, feitiços também podem ser usados se tiver pergaminhos daquele feitiço ao invés de runas. Um feitiço é definido com as seguintes propriedades:

| Propriedade | Tipo | Descrição |
| --- | --- | --- |
| id | int | Identificador único do feitiço. |
| name | string | Nome do feitiço. |
| name_key | string | Chave do nome do feitiço. |
| description | string | Descrição do feitiço. |
| description_key | string | Chave da descrição do feitiço. |
| parchment_id | int | Identificador do pergaminho do feitiço. |
| price | array | Lista de runas necessárias para lançar o feitiço. |
| target_type | string | Tipo de alvo do feitiço. |
| range | int | Alcance do feitiço. |
| effects | array | Lista de [efeitos](interfaces/effect.md) aplicados pelo feitiço. |

## Exemplo de definição

```json
{
    "id": 1,
    "name": "Earthquake",
    "name_key": "spell_1_name",
    "description": "Causes area damage around the target",
    "description_key": "spell_1_description",
    "parchment_id": 1,
    "price": [
        {
            "type": "rune",
            "rune_id": 1,
            "quantity": 1
        },
        {
            "type": "rune",
            "rune_id": 2,
            "quantity": 2
        }
    ],
    "target_type": "area",
    "range": 3,
    "damage": 90,
    "effects": [
        {
            "effect_id": 1,
            "name": "Tremor",
            "name_key": "effect_1_name",
            "description": "Dificulta a movimentação e reduz a agilidade.",
            "description_key": "effect_1_desc",
            "value": 20,
            "duration": 2
        },
        {
            "effect_id": 2,
            "name": "Poeira Levantada",
            "name_key": "effect_2_name",
            "description": "A visibilidade na área está reduzida, diminuindo a precisão.",
            "description_key": "effect_2_desc",
            "value": -10,
            "duration": 3
        }
    ]
}
```