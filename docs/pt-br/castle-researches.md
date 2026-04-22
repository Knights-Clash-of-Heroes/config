# Pesquisas do Castelo

As pesquisas do Castelo (`castle_researches`) são responsáveis pelos aperfeiçoamentos e atualizações globais das construções do seu reino. Geralmente custeadas utilizando vários tipos de recursos básicos e itens. Estas pesquisas permitem que suas defesas e produtividade aumentem de forma permanente.

| Propriedade          | Tipo                                           | Descrição                                                                            | Exemplo de valor |
| -------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------- |
| id                   | int                                            | Identificador único da pesquisa.                                                     | 1                |
| name                 | string                                         | Nome da pesquisa.                                                                    | "Muros Reforçados"|
| name_key             | string                                         | Chave de tradução do nome.                                                           | "castle_1_name"  |
| price                | [array:interface:Price](./interfaces/price.md) | Custo exigido em recursos e/ou itens gerais.                                         | [...]            |
| research_time        | int                                            | Duração do progresso da pesquisa, medido em segundos.                                | 7200             |
| building_upgrade_id  | int \| null                                    | Se não-nulo, ativa a melhoria para a construção referenciada (`building_upgrades`).| 1                |
| unlock_building_id   | int \| null                                    | Se não-nulo, habilita que determinada nova construção (`buildings`) seja comprada.   | null             |

## Exemplo de definição

```json
{
    "id": 1,
    "name_key": "castle_research_1_name",
    "name": "Reforçar Muros",
    "price": [
        {
            "type": "resource",
            "resource_id": 3,
            "quantity": 300
        }
    ],
    "research_time": 3600,
    "building_upgrade_id": 2,
    "unlock_building_id": null
}
```
