# Aumento de estoque (Storage Increase)

A interface de aumento de estoque é usada para definir a quantidade adicional de capacidade que uma construção, como um cofre, concede a um recurso específico no reino do jogador.

| Propriedade   | Tipo | Descrição                                                                               |
| ------------- | ---- | --------------------------------------------------------------------------------------- |
| resource_id   | int  | Identificador do recurso que terá sua capacidade aumentada                              |
| quantity      | int  | Quantidade que será somada à capacidade global de armazenamento deste recurso           |

## Exemplo de definição

```json
{
    "resource_id": 1,
    "quantity": 10000
}
```
