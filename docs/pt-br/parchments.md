# Pergaminhos

Os pergaminhos são itens consumíveis que permitem que um jogador lance um feitiço específico sem a necessidade de gastar runas. Cada pergaminho está vinculado a um único feitiço e é consumido após o uso.

| Propriedade | Tipo | Descrição |
| --- | --- | --- |
| id | int | Identificador único do pergaminho. |
| spell_id | int | Identificador do feitiço que este pergaminho contém. |
| name | string | Nome do pergaminho. |
| name_key | string | Chave do nome do pergaminho (i18n). |

## Exemplo de definição

```json
{
    "id": 1,
    "spell_id": 1,
    "name": "Pergaminho de Terremoto",
    "name_key": "parchment_1_name"
}
```
