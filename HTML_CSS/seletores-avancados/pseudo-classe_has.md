# Pseudoclasse `:has()`

## O que é uma pseudoclasse `:has()`?

Em poucas palavras, a pseudo-classe `:has()`é uma ferramenta poderosa no CSS que permite selecionar um elemento com base na existência de outros elementos dentro dele. Isso significa que você pode aplicar estilos a um elemento dependendo do que ele contém, tornando suas opções mais precisas e flexíveis.

## Por que usar `:has()`?

- **Seleções mais específicas**: Antes de fazer `:has()`, para selecionar um elemento com base em seu conteúdo, precisávamos de JavaScript ou soluções mais complexas com CSS. Agora, com `:has()`, podemos fazer isso de forma mais direta e elegante.
- **Estilos condicionais**: Você pode aplicar estilos diferentes a um elemento dependendo se ele contém ou não determinados elementos filhos.
- **Melhorando a organização do CSS**: Ao usar `:has()`, você pode criar estilos mais modularizados e reutilizáveis.

### Como funciona na prática?

Imagine que você quer aplicar um estilo diferente a um `<div>`se ele contiver um `<p>`. Com `:has()`, você faria assim:

```
div:has(p) {
  background-color: lightblue;
}
```

Neste exemplo, todos os divs que possuem um parágrafo dentro deles terão um fundo azul claro.

### Exemplos mais complexos:

- #### Selecionando elementos irmãos:

```
div:has(+ p) {
  /* Estilo para divs que têm um parágrafo como irmão seguinte */
}
```

- #### Combinando com outras seleções:

```
div:has(.special-class) {
  /* Estilo para divs que contêm elementos com a classe "special-class" */
}
```

- #### Negando a existência:

```
div:not(:has(img)) {
  /* Estilo para divs que NÃO contêm imagens */
}
```

### Um exemplo prático:

Vamos criar um menu responsivo que esconde os submenus quando a tela é pequena.

```
<nav>
  <ul>
    <li>Item 1
      <ul class="submenu">
        <li>Subitem 1</li>
        <li>Subitem 2</li>
      </ul>
    </li>
    <li>Item 2</li>
  </ul>
</nav>
```
```
.submenu {
  display: none;
}

@media (min-width: 768px) {
  li:has(.submenu) {
    /* Estilo para itens de menu que têm um submenu */
  }
  .submenu {
    display: block;
  }
}
```
Neste exemplo, os submenus estão inicialmente escondidos. Quando a tela é maior que 768px, os itens de menu que possuem submenus recebem um estilo específico (por exemplo, um indicador visual) e os submenus são exibidos.

### [Voltar ao menu de Seletores Avançados](Menu.md)