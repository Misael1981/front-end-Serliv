# Flexbox CSS

O Flexbox tem como meta ser um modo mais eficiente para criar leiautes, alinhar e distribuir espaços entre itens em um container, mesmo quando as dimensões destes itens são desconhecidas e/ou dinâmicas (daí o termo "flex").

Vamos aprender os fundamentos do CSS Flexbox para alinhamento e posicionamento, e como utilizar suas funcionalidades corretamente.

<img src="../flexbox/img/css-flexbox-poster.png">

## O que é o Flexbox

Por muito tempo, as únicas ferramentas disponíveis para criar leiautes em CSS e posicionar elementos com boa compatibilidade entre browsers eram float e position. Porém, essas ferramentas possuem algumas limitações muito frustrantes, especialmente no que diz respeito à responsividade. Algumas tarefas que consideramos básicas em um leiaute, como centralização vertical de um elemento-filho com relação a um elemento-pai ou fazer com que elementos-filhos ocupem a mesma quantidade de espaço, ou colunas terem o mesmo tamanho independente da quantidade de conteúdo interno, eram impossíveis ou muito difíceis de serem manejadas com floats ou position, ao menos de forma prática e flexível.

A ferramenta Flexbox (de Flexible Box) foi criada para tornar essas tarefas mais simples e funcionais: os filhos de um elemento com Flexbox podem se posicionar em qualquer direção e pode ter dimensões flexíveis para se adaptar.

## Elementos

O Flexbox é um módulo completo e não uma única propriedade; algumas delas devem ser declaradas no container (o elemento-pai, que chamamos de **flex container**), enquanto outras devem ser declaradas nos elementos-filhos (os **flex itens**).

Se o leiaute "padrão" é baseado nas direções block e inline, o leiaute Flex é baseado em direções "flex flow". Veja abaixo um diagrama da especificação, explicando a ideia central por trás do leiaute Flex.

<img src="../flexbox/img/img-01.svg">

Os ítens serão dispostos no leiaute seguindo ou o eixo principal ou o transversal.

- **Eixo principal**: o eixo principal de um flex container é o eixo primário e ao longo dele são inseridos os flex items. **Cuidado**: O eixo principal não é necessariamente horizontal; vai depender da propriedade `flex-direction` (veja abaixo).

- **main-start | main-end**: os flex items são inseridos dentro do container começando pelo lado *start*, indo em direção ao lado *end*.

- **Tamanho principal**: A largura ou altura de um *flex item*, dependendo da direção do container, é o tamanho principal do ítem. A propriedade de tamanho principal de um *flex item* pode ser tanto `width` quanto `height`, dependendo de qual delas estiver na direção principal.

- **Eixo transversal**: O eixo perpendicular ao eixo principal é chamado de eixo transversal. Sua direção depende da direção do eixo principal.

- **cross-start | cross-end**: Linhas *flex* são preenchidas com ítens e adicionadas ao container, começando pelo lado cross start do *flex* container em direção ao lado cross end.

- **cross size**: A largura ou altura de um flex item, dependendo do que estiver na dimensão transversal, é o cross size do íten. A propriedade cross size pode ser tanto a largura quanto a altura do ítem, o que estiver na transversal.

### Flex container é o elemento que envolve sua estrutura. Você define que um elemento é um Flex Container com a propriedade ``display`` e valores `flex` ou `inline-flex`.

HTML
```
  <div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
```

CSS

```
.flex-container {
    display: flex;
  }
```

### Flex Item são elementos-filhos do flex container.

**Eixos ou Axes** são as duas direções básicas que existem em um Flex Container: *main axis*, ou *eixo principal*, e *cross axis*, ou *eixo transversal*.

## Propriedades para o elemento-pai

<img src="../flexbox/img/01-container.svg">

Quando utilizamos o Flexbox, é muito importante saber quais propriedades são declaradas no elemento-pai (por exemplo, uma `div` que irá conter os elementos a serem alinhados) e quais serão declaradas nos elementos-filhos. Abaixo, seguem propriedades que devem ser declaradas utilizando o elemento-pai como seletor (para alinhar elementos-filhos):

### display

Esta propriedade define um *flex container*; inline ou block dependendo dos valores passados. Coloca todos os elementos-filhos diretos num contexto Flex.

```
.container {
  display: flex; /* or inline-flex */
}
```

Note que a propriedade de CSS `columns` não tem efeito em um *flex container*.

### [Menu Flexbox](menu-flexbox.md)

### [Fonte: Artigo de Juliana Amoasei para a ALURA](https://www.alura.com.br/artigos/css-guia-do-flexbox)


