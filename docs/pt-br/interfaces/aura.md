# Aura

A interface de aura define um modificador contínuo de área que não possui duração em turnos — ela é ativa enquanto a unidade que a emite estiver em campo. Uma aura afeta todas as unidades aliadas dentro do seu raio. Ela sempre possui um impacto mecânico.

> **Nota:** Uma aura pode ser emitida de forma temporária por um [Efeito](effect.md) de tipo `aura`, que define por quantos turnos a aura ficará ativa.

| Propriedade     | Tipo   | Descrição                                         |
| --------------- | ------ | ------------------------------------------------- |
| aura_id         | int    | Identificador da aura (tipo)                      |
| name            | string | Nome da aura                                      |
| name_key        | string | Chave de tradução do nome                          |
| description     | string | Descrição da aura                                 |
| description_key | string | Chave de tradução da descrição                     |
| value           | int    | Valor do impacto mecânico da aura                 |
| radius          | int    | Raio em células ao redor da unidade emissora      |

## Exemplo de definição

```json
{
    "aura_id": 1,
    "name": "Aura de Coragem",
    "name_key": "aura_1_name",
    "description": "Aumenta o ataque das unidades aliadas próximas.",
    "description_key": "aura_1_desc",
    "value": 15,
    "radius": 2
}
```
