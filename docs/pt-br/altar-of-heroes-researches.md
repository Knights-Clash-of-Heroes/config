# Pesquisas do Altar dos Heróis

As pesquisas do Altar dos Heróis (`altar_of_heroes_researches`) são utilizadas para aperfeiçoar os Heróis, melhorando suas estatísticas e fortalecendo-os para as batalhas, ou até mesmo para o desbloqueio de novos Heróis. Elas custam recursos do jogo e itens, de forma semelhante ao Arsenal.

| Propriedade       | Tipo                                           | Descrição                                                                            | Exemplo de valor |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------- |
| id                | int                                            | Identificador único da pesquisa.                                                     | 1                |
| name              | string                                         | Nome da pesquisa.                                                                    | "Treino Majestoso"|
| name_key          | string                                         | Chave de tradução do nome.                                                           | "altar_1_name"   |
| price             | [array:interface:Price](./interfaces/price.md) | Custo exigido em recursos e itens.                                                   | [...]            |
| research_time     | int                                            | Tempo de conclusão da pesquisa, em segundos.                                         | 3600             |
| hero_upgrade_id   | int \| null                                    | O ID do upgrade de herói (`hero_upgrades`) ativado por esta pesquisa.                | 1                |
| unlock_hero_id    | int \| null                                    | O ID do novo herói habilitado (`heroes`), caso esta pesquisa recrute/desbloqueie um. | null             |

## Exemplo de definição

```json
{
    "id": 1,
    "name_key": "altar_research_1_name",
    "name": "Treinamento Real",
    "price": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 500
        }
    ],
    "research_time": 3600,
    "hero_upgrade_id": 1,
    "unlock_hero_id": null
}
```
