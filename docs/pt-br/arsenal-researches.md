# Pesquisas do Arsenal

As pesquisas do Arsenal (`arsenal_researches`) são focadas no aperfeiçoamento de unidades regulares, concedendo bônus passivos (unidades mais fortes) ou desbloqueando novas unidades no jogo. Elas são custeadas utilizando recursos normais e itens do jogo.

| Propriedade       | Tipo                                           | Descrição                                                          | Exemplo de valor |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------ | ---------------- |
| id                | int                                            | Identificador único da pesquisa.                                   | 1                |
| name              | string                                         | Nome da pesquisa.                                                  | "Armas de ferro" |
| name_key          | string                                         | Chave de tradução do nome.                                         | "arsenal_1_name" |
| price             | [array:interface:Price](./interfaces/price.md) | Custo da pesquisa em recursos e itens.                             | [...]            |
| research_time     | int                                            | Tempo exigido para a conclusão da pesquisa, em segundos.           | 3600             |
| unit_upgrade_id   | int \| null                                    | O ID do upgrade de unidade (`unit_upgrades`) que será aplicado.    | 1                |
| unlock_unit_id    | int \| null                                    | O ID da nova unidade habilitada (`units`), caso aplicável.         | null             |

## Exemplo de definição

```json
{
    "id": 1,
    "name_key": "arsenal_research_1_name",
    "name": "Ferro Escuro",
    "price": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 100
        },
        {
            "type": "item",
            "item_id": 12,
            "quantity": 5
        }
    ],
    "research_time": 3600,
    "unit_upgrade_id": 1,
    "unlock_unit_id": null
}
```
