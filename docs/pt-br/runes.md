# Runas

As runas são itens mágicos que podem ser usados para lançar feitiços sem ter pergaminhos daquele feitiço; são fabricadas na Ferraria de Anões e o limite de runas por tipo é definido. Elas são divididas por elementos, os quais serão registrados na configuração com as seguintes prorpiedades:

| Propriedade | Tipo | Descrição |
| --- | --- | --- |
| id | int | Identificador único da runa. |
| limit | int | Limite de runas por tipo. |
| name | string | Nome da runa. |
| name_key | string | Chave do nome da runa. |


## Exemplo de definição

```json
{
    "id": 1,
    "limit": 6,
    "name": "Flame Rune",
    "name_key": "rune_1_name"
}
```