# Atributos da Lista HTML: start, type e reversed

- **start**: Esse atributo serve para você definir por qual número a lista vai começar. Por exemplo, se você quiser que sua lista comece com o número 3, você coloca `start="3"` dentro da tag `<ol>`. Isso é útil quando você deseja continuar uma numeração já existente ou criar listas com sequências específicas.

- **type**: Esse atributo define o tipo de marcador que a lista vai ter. Você pode escolher entre números (1), letras minúsculas (a), letras guardadas (A), números romanos minúsculos (i) ou números romanos guardas (I). Basta colocar o tipo desejado dentro do atributo `type`. Por exemplo, para uma lista com letras guardadas, você usaria `type="A"`.

- **invertido**: Esse atributo é bem simples: ele inverte a ordem da lista. Se você colocar `reversed` dentro da tag `<ol>`, os itens da lista aparecerão em ordem decrescente.

### Exemplo:

```
<ol start="5" type="A" reversed>
  <li>Item 5</li>
  <li>Item 4</li>
  <li>Item 3</li>
</ol>
```

Essa lista vai começar com a letra E (pois está invertida e o `start` é 5), depois D, C e assim por diante.

## Incluindo Emojis no HTML via freeCodeCamp

Uma maneira de incluir emojis no código de maneira simples é ultizando o [freeCodeCamp](https://www.freecodecamp.org/news/all-emojis-emoji-list-for-copy-and-paste/#heading-smiley-face-emojis)

Basta selecionar o código do emoji desejado e incluir no tercho de código através do `list-style-type`.

### Exemplo:

```
.list-emoji {
    list-style-type: "\1F60E";
}
```