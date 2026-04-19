# Citações de Campanha (Campaign Quotes)

Diálogos que ocorrem durante o progresso da campanha. Elas são vinculadas a personagens específicos e servem para contar a história do jogo.

| Propriedade | Tipo de valor | Descrição | Exemplo de valor |
| ----------- | ------------- | --------- | ---------------- |
| id | int | Identificador único da citação | 1 |
| character_id | int | ID do personagem que está falando | 1 |
| quote | string | O texto do diálogo | "It's quiet as the grave..." |
| quote_key | string | Chave de tradução para o diálogo | "campaign_quote_1_quote" |

## Exemplo de definição

```json
{
    "id": 1,
    "character_id": 1,
    "quote": "It's quiet as the grave - no birdsong, no voices... Something is wrong here... Keep alert!",
    "quote_key": "campaign_quote_1_quote"
}
```
