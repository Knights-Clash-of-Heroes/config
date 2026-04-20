# Melhorias de Heróis

Melhorias de heróis são aprimoramentos permanentes aplicados aos heróis através de pesquisas realizadas no **Altar de Heróis**. Cada melhoria aumenta as estatísticas ou concede novos atributos ao herói vinculado.

## Definição de melhoria de herói

| Propriedade                   | Tipo de valor                                                  | Descrição                                                                                             | Exemplo de valor                                            |
| ----------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| id                            | int                                                            | Identificador da melhoria                                                                             | 1                                                           |
| hero_id                       | int                                                            | Identificador do herói que recebe a melhoria                                                          | 1                                                           |
| altar_of_heroes_research_id   | int                                                            | Identificador da pesquisa no Altar de Heróis que desbloqueia esta melhoria                            | 1                                                           |
| stats                         | [interface:Stats](./interfaces/stats.md) \| null               | Bônus nas propriedades de combate (vida, ataque, etc.)                                                | [Definição](./interfaces/stats.md#exemplo-de-definição)     |
| attributes                    | [array:interface:Attribute](./interfaces/attribute.md) \| null   | Bônus de atributos especiais. Valores são acumulativos se houver múltiplas melhorias do mesmo tipo.    | [Definição](./interfaces/attribute.md#exemplo-de-definição) |

## Exemplo de definição

```json
{
    "id": 1,
    "hero_id": 1,
    "altar_of_heroes_research_id": 1,
    "stats": {
        "health": 500,
        "attack": 75,
        "initiative": 110,
        "speed": 4,
        "range": null
    },
    "attributes": null
}
```
