# Atributo

A interface de atributo define uma característica ativa ou passiva de uma unidade ou construção. Todo atributo deve possuir nome e descrição para exibição na interface.

O campo `type` determina o comportamento do atributo (veja [Tipo de Atributo](../enums/attribute-type.md)):

- **`mechanical`**: afeta diretamente uma stat da unidade via `value`
- **`aura`**: emite uma [Aura](aura.md) passiva e contínua ao redor da unidade via `aura_id`
- **`descriptive`**: sem impacto mecânico; apenas informativo

| Propriedade     | Tipo   | Descrição                                                        |
| --------------- | ------ | ---------------------------------------------------------------- |
| attribute_id    | int    | Identificador do atributo (tipo)                                 |
| type            | [enum:AttributeType](../enums/attribute-type.md) | Tipo do atributo: `mechanical`, `aura` ou `descriptive` |
| name            | string | Nome do atributo                                                 |
| name_key        | string | Chave de tradução do nome                                        |
| description     | string | Descrição do atributo                                            |
| description_key | string | Chave de tradução da descrição                                   |
| value           | int?   | Valor do impacto mecânico — obrigatório se `type = mechanical`   |
| aura_id         | int?   | Identificador da [Aura](aura.md) — obrigatório se `type = aura` |

## Exemplo — `mechanical`

```json
{
    "attribute_id": 1,
    "type": "mechanical",
    "name": "Armadura de Placas",
    "name_key": "attribute_1_name",
    "description": "Reduz o dano físico recebido.",
    "description_key": "attribute_1_desc",
    "value": 50
}
```

## Exemplo — `aura`

```json
{
    "attribute_id": 2,
    "type": "aura",
    "name": "Presença de Líder",
    "name_key": "attribute_2_name",
    "description": "A presença do herói inspira os soldados próximos continuamente.",
    "description_key": "attribute_2_desc",
    "aura_id": 1
}
```

## Exemplo — `descriptive`

```json
{
    "attribute_id": 3,
    "type": "descriptive",
    "name": "Veterano de Guerra",
    "name_key": "attribute_3_name",
    "description": "Esta unidade serviu em muitas campanhas.",
    "description_key": "attribute_3_desc"
}
```