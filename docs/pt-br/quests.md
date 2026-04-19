# Missões (Quests)

As Missões guiam o jogador através do progresso do jogo, oferecendo recompensas por completar tarefas específicas.

## Propriedades

| Propriedade | Tipo de valor | Descrição | Exemplo de valor |
| ----------- | ------------- | --------- | ---------------- |
| id | int | Identificador único da missão | 1 |
| required_level_id | int | Nível necessário para desbloquear a missão | 1 |
| name | string | Nome da missão | "Patrol" |
| name_key | string | Chave de tradução para o nome | "quest_1" |
| description | string | Texto descritivo da missão | "Milord, messengers..." |
| description_key | string | Chave de tradução para a descrição | "quest_1_description" |
| character_id | int | ID do personagem que entrega a missão | 1 |
| task_ids | array:int | Lista de IDs de [Tarefas de Missão](./quest-tasks.md) necessárias | [1, 2] |
| rewards | [array:interface:Price](./interfaces/price.md) | Lista de recompensas ao completar a missão | [Definição](./interfaces/price.md) |

## Exemplo de definição

```json
{
    "id": 1,
    "required_level_id": 1,
    "name": "Patrol",
    "name_key": "quest_1",
    "description": "Milord, messengers bring disturbing news...",
    "description_key": "quest_1_description",
    "character_id": 1,
    "task_ids": [1, 2],
    "rewards": [
        {
            "type": "resource",
            "resource_id": 1,
            "quantity": 750
        }
    ]
}
```
