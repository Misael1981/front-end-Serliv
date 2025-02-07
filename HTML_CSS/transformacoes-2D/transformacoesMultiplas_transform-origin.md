# Transformações Múltiplas e o `transform-origin`

## Transformações Múltiplas com `transform`

A propriedade `transform` no CSS permite aplicar diversas transformações a um elemento HTML, como rotação, escala, translação e inclinação. O mais bacana é que você pode combinar várias dessas transformações em uma única declaração `transform`.

### Sintaxe

```
transform: translate(x, y) rotate(ângulo) scale(x, y);
```

### Ordem das Transformações

A ordem em que você define as transformações é crucial, pois afeta o resultado final. As transformações são aplicadas da esquerda para a direita. No exemplo acima, o elemento seria primeiro transladado e depois rotacionado.

### Exemplo

```
.elemento {
  transform: translate(100px, 50px) rotate(30deg);
}
```

Neste caso, o elemento será movido 100px para a direita e 50px para baixo e, em seguida, rotacionado em 30 graus no sentido horário.

## `transform-origin`

A propriedade `transform-origin` define o ponto de origem para as transformações. Por padrão, o ponto de origem é o centro do elemento (50% 50%).

### Sintaxe

```
transform-origin: valor-x valor-y;
```

Você pode usar valores em pixels, porcentagens ou palavras-chave como `top`, `bottom`, `left` e `right`.

### Exemplo

```
.elemento {
  transform: rotate(45deg);
  transform-origin: top left;
}
```

Aqui, o elemento será rotacionado em 45 graus tendo como ponto de origem o canto superior esquerdo.

Dicas

- **Experimente**: Brinque com diferentes valores para transform e transform-origin para ver os resultados.
- **Use ferramentas de desenvolvedor**: As ferramentas de desenvolvedor do seu navegador podem te ajudar a visualizar as transformações e ajustá-las interativamente.
- **Cuidado com a ordem**: A ordem das transformações importa!

## Bora praticar!

Que tal criar um exemplo prático? Vamos fazer um quadrado que se move e rotaciona ao passar o mouse por cima:

### HTML:

```
<div class="quadrado"></div>
```

### CSS

```
.quadrado {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: transform 0.3s ease;
}

.quadrado:hover {
  transform: translate(50px, 20px) rotate(15deg);
  transform-origin: bottom right;
}
```

Neste exemplo, o quadrado se move 50px para a direita e 20px para baixo e rotaciona 15 graus quando o mouse passa por cima, com o ponto de origem no canto inferior direito.


### [Voltar ao Menu - Transformações 2D](./menu.md)