# Propriedades de batalha (Stats)

| Propriedade  | Tipo         | Descrição                                    |
| ------------ | ------------ | -------------------------------------------- |
| health       | int          | Saúde da unidade                             |
| attack       | int \| null  | Dano de ataque da unidade                    |
| initiative   | int \| null  | Iniciativa da unidade                        |
| speed        | int \| null  | Raio de alcance de passos da unidade         |
| range        | int \| null  | Alcance de ataque via projéteis da unidade   |

## Exemplo de definição

```json
{
    "health": 100,
    "attack": 25,
    "initiative": 100,
    "speed": 3,
    "range": null
}
```