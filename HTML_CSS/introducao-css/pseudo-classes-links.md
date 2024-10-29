# Pseudo-classes CSS

## O que são pseudoclasses?

Uma **pseudoclasse CSS** é uma palavra-chave adicionada a um seletor que especifica um estado especial do(s) elemento(s) selecionado(s).

Por exemplo, pode ser usado para:

- Estilizar um elemento quando um usuário passa o mouse sobre ele
- Estilizar links visitados e não visitados de forma diferente
- Estilizar um elemento quando ele receber foco

## Sintaxe

A sintaxe das pseudoclasses:

```
selector:pseudo-class {
  property: value;
}
```

Uma pseudoclasse consiste em dois pontos (`:`) seguidos pelo nome da pseudoclasse (por exemplo, `:hover`). Uma pseudoclasse funcional também contém um par de parênteses para definir os argumentos (por exemplo, `:dir()`). O elemento ao qual uma pseudoclasse é anexada é definido como um elemento âncora (por exemplo,` button` no caso `button:hover`).

As pseudoclasses permitem que você aplique um estilo a um elemento não apenas em relação ao conteúdo da árvore do documento, mas também em relação a fatores externos, como o histórico do navegador ( `:visited`, por exemplo), o status do seu conteúdo (como `:checkedem` certos elementos de formulário) ou a posição do mouse (como `:hover`, que permite saber se o mouse está sobre um elemento ou não).

## Pseudo-classes em links

### :link

- **Significado**: Aplica estilos a um link que ainda não foi visitado.
- Exemplo:

```
a:link {
    color: blue;
    text-decoration: underline;
}
```

### :visited

- **Significado**: Aplica estilos a um link que já foi visitado.
- Exemplo:

```
a:visited {
    color: purple;
    text-decoration: none;
}
```

### :hover

- **Significado**: Aplica estilos quando o mouse está sobre o elemento.
- Exemplo:

```
a:hover {
    color: red;
    text-decoration: underline;
}
```

### :active

- **Significado**: Aplica estilos enquanto o elemento está sendo clicado ou ativado.
- Exemplo:

```
a:active {
    color: green;
    text-decoration: none;
}
```

### [Menu Introdução ao CSS](menu_introducao-CSS.md)