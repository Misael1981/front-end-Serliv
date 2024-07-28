# order

Determina a ordem em que os elementos aparecerão.

<img src="../flexbox/img/order.svg">

Por padrão os flex items são dispostos na tela na ordem do código. Mas a propriedade `order` controla a ordem em que aparecerão no container.

```
.flex-item {
    order: <número>; /* o valor padrão é 0 */
}
```

# align-self

<img src="../flexbox/img/align-self.svg">

Permite que o alinhamento padrão (ou o que estiver definido por *align-items*) seja sobrescrito para ítens individuais.

Por favor veja a explicação da propriedade *align-items* para entender quais são os possíveis valores.

```
.item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

# flex

Esta é a propriedade **shorthand** para `flex-grow`, `flex-shrink` e `flex-basis`, combinadas. O segundo e terceiro parâmetros (`flex-shrink` e `flex-basis`) são opcionais. O padrão é `0 1 auto`, mas se você definir com apenas um número, é equivalente a `0 1`.

```
.item {
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

**É recomendado que você utilize esta propriedade shorthand** ao invés de definir cada uma das propriedades em separado. O shorthand define os outros valores de forma inteligente.

### [Voltar ao README principal](../README.md)
