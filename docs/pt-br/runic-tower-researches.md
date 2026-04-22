# Pesquisas da Torre Rúnica

As pesquisas da Torre Rúnica (`runic_tower_researches`) têm como foco aprimorar o sistema de habilidades ativas (Feitiços) e melhorias nas Runas do jogo. São custeadas via recursos e itens mágicos recolhidos pelo jogador.

| Propriedade       | Tipo                                           | Descrição                                                                            | Exemplo de valor |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------- |
| id                | int                                            | Identificador único da pesquisa.                                                     | 1                |
| name              | string                                         | Nome da pesquisa.                                                                    | "Magia do Fogo"  |
| name_key          | string                                         | Chave de tradução do nome.                                                           | "runic_1_name"   |
| price             | [array:interface:Price](./interfaces/price.md) | Custo exigido em recursos e itens.                                                   | [...]            |
| research_time     | int                                            | Duração do processo da pesquisa, em segundos.                                        | 3600             |
| unlock_spell_id   | int \| null                                    | ID do feitiço (`spells`) sendo desbloqueado.                                         | 1                |
| unlock_rune_id    | int \| null                                    | ID do tipo de runa (`runes`) sendo desbloqueada ou melhorada.                        | null             |

## Exemplo de definição

```json
{
    "id": 1,
    "name_key": "runic_research_1_name",
    "name": "Magia Arcanista",
    "price": [
        {
            "type": "resource",
            "resource_id": 2,
            "quantity": 50
        }
    ],
    "research_time": 1800,
    "unlock_spell_id": 2,
    "unlock_rune_id": null
}
```
