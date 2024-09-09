# A função `attr()` em CSS: Uma ferramenta poderosa para estilos dinâmicos

Ferramenta bastante útil para criar estilos dinâmicos, permitindo que você utilize o valor de um atributo HTML diretamente em suas propriedades CSS.

O que ela faz?

A função `attr()` permite que você acesse o valor de um atributo de um elemento e o utilize como valor para uma propriedade CSS. Isso é especialmente útil quando você precisa criar estilos personalizados com base em dados que estão diretamente no seu HTML.

Sintaxe:

```
property: attr(attribute-name, type-or-unit);
```
- **property**: A propriedade CSS que você deseja definir.
- **attribute-name**: O nome do atributo HTML cujo valor você quer utilizar.
- **type-or-unit**: (Opcional) Um tipo ou unidade para o valor do atributo. Isso pode ser útil para converter o valor para um tipo específico (por exemplo, um número ou uma medida).

### Exemplo:

```
a::after {
    content: attr(href);
    display: inline-block;
    margin-left: .5em;
}
```

<img src="img/attr.jpg">

#### O atributo `href` do elemento `a`, será impresso na tela: 

### [Menu Responsividade](Introducao-menu.md)