# Efeito

A interface de efeito define um modificador temporário com duração específica que sempre possui um impacto mecânico. Todo efeito deve possuir nome e descrição para exibição na interface.

| Propriedade     | Tipo   | Descrição                                |
| --------------- | ------ | ---------------------------------------- |
| effect_id       | int    | Identificador do efeito (tipo)           |
| name            | string | Nome do efeito                           |
| name_key        | string | Chave de tradução do nome                 |
| description     | string | Descrição do efeito                      |
| description_key | string | Chave de tradução da descrição            |
| value           | int    | Valor do impacto mecânico do efeito      |
| duration        | int    | Quantidade de turnos que o efeito durará |

## Exemplo de definição

```json
{
    "effect_id": 1,
    "name": "Fúria",
    "name_key": "effect_fury_name",
    "description": "Aumenta o dano causado temporariamente.",
    "description_key": "effect_fury_desc",
    "value": 50,
    "duration": 3
}
```
