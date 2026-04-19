# Tarefas de Missão (Quest Tasks)

Cada missão possui uma lista de tarefas (objetivos) que o jogador deve realizar para progredir. Essas tarefas variam desde iniciar uma batalha até construir edifícios específicos.

| Propriedade | Tipo de valor | Descrição | Exemplo de valor |
| ----------- | ------------- | --------- | ---------------- |
| id | int | Identificador único da tarefa | 1 |
| name | string | Nome/Objetivo da tarefa | "Start the battle \"Patrol\"" |
| name_key | string | Chave de tradução para o nome | "quest_task_1" |
| description | string | Descrição ou dica de como completar a tarefa | "Select battle \"Patrol\" on the map of Greenmeere" |
| description_key | string | Chave de tradução para a descrição | "quest_task_1_description" |

## Exemplo de definição

```json
{
    "id": 1,
    "name": "Start the battle \"Patrol\"",
    "name_key": "quest_task_1",
    "description": "Select battle \"Patrol\" on the map of Greenmeere",
    "description_key": "quest_task_1_description"
}
```
