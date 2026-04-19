# Personagens

O sistema de personagens define as figuras da história que interagem com o jogador através de missões e diálogos.

## Propriedades

| Propriedade | Tipo de valor | Descrição | Exemplo de valor |
| ----------- | ------------- | --------- | ---------------- |
| id | int | Identificador único do personagem | 1 |
| name | string | Nome do personagem | "Roland" |
| name_key | string | Chave de tradução para o nome | "character_1_name" |
| description | string \| null | Descrição biográfica do personagem | "Head of the Knights of the Round Table" |
| description_key | string | Chave de tradução para a descrição | "character_1_description" |

## Exemplo de definição

```json
{
    "id": 1,
    "name": "Roland",
    "name_key": "character_1_name",
    "description": "Head of the Knights of the Round Table",
    "description_key": "character_1_description"
}
```
