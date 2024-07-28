# flex-basis

Define o tamanho padrão para um elemento antes que o espaço remanescente do container seja distribuído. Pode ser um comprimento (por exemplo, 20%, 5rem, etc) ou uma palavra-chave. A palavra-chave `auto` significa "observe minhas propriedades de altura ou largura" (o que era feito pela palavra-chave `main-size`, que foi depreciada). A palavra-chave `content` significa "estabeleça o tamanho com base no conteúdo interno do ítem" - essa palavra-chave ainda não tem muito suporte, então não é fácil de ser testada, assim como suas relacionadas: `max-content`, `min-content` e `fit-content`.

```
.flex-item {
    flex-basis: flex-basis:  | auto; /* o valor padrão é auto */
}
```

Com o valor de 0, o espaço extra ao redor do conteúdo não é considerado. Com o valor de auto, o espaço extra é distribuído com base no valor de flex-grow do ítem.


### [Voltar ao README principal](../README.md)