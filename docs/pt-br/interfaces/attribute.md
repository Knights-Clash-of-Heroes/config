# Atributo

A interface de atributo define uma característica ativa ou passiva de uma unidade ou construção. Todo atributo deve possuir nome e descrição para exibição na interface.

| Propriedade     | Tipo   | Descrição                                         |
| --------------- | ------ | ------------------------------------------------- |
| attribute_id    | int    | Identificador do atributo (tipo)                  |
| name            | string | Nome do atributo                                  |
| name_key        | string | Chave de tradução do nome                          |
| description     | string | Descrição do atributo                             |
| description_key | string | Chave de tradução da descrição                     |
| value           | int?   | Valor do atributo (opcional para puramente descritivos) |

## Exemplo de definição (com valor)

```json
{
    "attribute_id": 1,
    "name": "Armadura de Placas",
    "name_key": "attr_plate_armor_name",
    "description": "Reduz o dano físico recebido.",
    "description_key": "attr_plate_armor_desc",
    "value": 50
}
```

## Exemplo de definição (puramente descritivo)

```json
{
    "attribute_id": 99,
    "name": "Veterano de Guerra",
    "name_key": "attr_veteran_name",
    "description": "Esta unidade serviu em muitas campanhas.",
    "description_key": "attr_veteran_desc"
}
```