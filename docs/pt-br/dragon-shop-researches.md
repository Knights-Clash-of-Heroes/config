# Pesquisas da Loja do Dragãozinho

As pesquisas da Loja do Dragãozinho (`dragon_shop_researches`) consistem em aperfeiçoamentos especiais, luxuosos ou globalmente vantajosos (elitizados) para as construções e unidades. Por ser a loja premium do jogo, o custo é unicamente pago com **Cristais** (recurso premium).

| Propriedade          | Tipo                                           | Descrição                                                                            | Exemplo de valor |
| -------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------- |
| id                   | int                                            | Identificador único do aperfeiçoamento.                                              | 1                |
| name                 | string                                         | Nome da pesquisa.                                                                    | "Saber Ancestral"|
| name_key             | string                                         | Chave de tradução do nome.                                                           | "dragon_1_name"  |
| price                | [array:interface:Price](./interfaces/price.md) | Custo do aperfeiçoamento. **Obrigatório ser cobrado em Cristais.**                   | [...]            |
| research_time        | int                                            | Duração do processo em segundos.                                                     | 3600             |
| building_upgrade_id  | int \| null                                    | Ativa uma super-melhoria de construção específica referenciada.                      | 1                |
| unit_upgrade_id      | int \| null                                    | Ativa uma super-melhoria para referenciada unidade.                                  | null             |

## Exemplo de definição

```json
{
    "id": 1,
    "name_key": "dragon_research_1_name",
    "name": "Saber Ancestral",
    "price": [
        {
            "type": "resource",
            "resource_id": 2,
            "quantity": 300
        }
    ],
    "research_time": 3600,
    "building_upgrade_id": 5,
    "unit_upgrade_id": null
}
```
