# Efeito

A interface de efeito define um modificador com impacto mecânico garantido aplicado sobre uma unidade. Todo efeito deve possuir nome e descrição para exibição na interface.

Existem dois tipos de efeito, definidos pelo campo `type`:

- **`temporary`**: Dura um número determinado de turnos e afeta somente a unidade-alvo.
- **`aura`**: Não dura turnos por si só — ele ativa uma [Aura](aura.md) ao redor da unidade emissora durante um número de turnos. As unidades aliadas próximas (dentro do raio da aura) é que recebem o benefício.

## Propriedades comuns (todos os tipos)

| Propriedade     | Tipo   | Descrição                              |
| --------------- | ------ | -------------------------------------- |
| effect_id       | int    | Identificador do efeito (tipo)         |
| type            | [enum:EffectType](../enums/effect-type.md) | Tipo do efeito: `temporary` ou `aura` |
| name            | string | Nome do efeito                         |
| name_key        | string | Chave de tradução do nome               |
| description     | string | Descrição do efeito                    |
| description_key | string | Chave de tradução da descrição          |

## Propriedades exclusivas do tipo `temporary`

| Propriedade | Tipo | Descrição                                |
| ----------- | ---- | ---------------------------------------- |
| value       | int  | Valor do impacto mecânico sobre o alvo   |
| duration    | int  | Quantidade de turnos que o efeito durará |

## Propriedades exclusivas do tipo `aura`

| Propriedade | Tipo | Descrição                                                          |
| ----------- | ---- | ------------------------------------------------------------------ |
| aura_id     | int  | Identificador da [Aura](aura.md) que será emitida                 |
| duration    | int  | Quantidade de turnos que a aura ficará ativa ao redor do emissor   |

## Exemplo — tipo `temporary`

```json
{
    "effect_id": 1,
    "type": "temporary",
    "name": "Fúria",
    "name_key": "effect_1_name",
    "description": "Aumenta o dano causado temporariamente.",
    "description_key": "effect_1_desc",
    "value": 50,
    "duration": 3
}
```

## Exemplo — tipo `aura`

```json
{
    "effect_id": 3,
    "type": "aura",
    "name": "Grito de Guerra",
    "name_key": "effect_3_name",
    "description": "O herói inspira os soldados próximos, ativando uma aura de coragem por 2 turnos.",
    "description_key": "effect_3_desc",
    "aura_id": 1,
    "duration": 2
}
```
