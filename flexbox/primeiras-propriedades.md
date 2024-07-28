# flex-direction

<img src="../flexbox/img/flex-direction.svg">

Estabelece o eixo principal, definindo assim a direção em que os *flex items* são alinhados no *flex container*. O Flexbox é (com exceção de um wrapping opcional) um conceito de leiaute de uma só direção. Pense nos flex items inicialmente posicionais ou em linhas horizontais ou em colunas verticais.

```
.flex-container {
    flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row` (padrão): esquerda para a direita em `ltr` (`left to right`), direita para a esquerda em `rtl` (`right to left`)
- `row-reverse`: direita para a esquerda em `ltr`, esquerda para a direita em `rtl`
- `column`: mesmo que row, mas de cima para baixo
- `column-reverse`: mesmo que row-reverse mas de baixo para cima

# justify-content

<img src="../flexbox/img/justify-content.svg">

Esta propriedade define o alinhamento dos ítens ao longo do eixo principal. Ajuda a distribuir o espaço livre que sobrar no container tanto se todos os flex items em uma linha são inflexíveis, ou são flexíveis mas já atingiram seu tamanho máximo. Também exerce algum controle sobre o alinhamento de ítens quando eles ultrapassam o limite da linha.

```
.flex-container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

- `flex-start (padrão):` os ítens são alinhados junto à borda de início (*star*) de acordo com qual for a flex-direction do container.
- `flex-end:` os ítens são alinhados junto à borda final (end) de acordo com qual for a flex-direction do container.
- ` start:` os ítens são alinhados junto à borda de início da direção do writing-mode (modo de escrita).
- `end:` os ítens são alinhados junto à borda final da direção do writing-mode (modo de escrita).
- `left:` os ítens são alinhados junto à borda esquerda do container, a não ser que isso não faça sentido com o flex-direction que estiver sendo utilizado. Nesse caso, se comporta como *start*.
- `right:` os ítens são alinhados junto à borda direita do container, a não ser que isso não faça sentido com o flex-direction que estiver sendo utilizado. Nesse caso, se comporta como *start*.
- `center:` os ítens são centralizados na linha.
- `space-between:` os ítens são distribuídos de forma igual ao longo da linha; o primeiro ítem junto à borda inicial da linha, o último junto à borda final da linha.
- `space-around:` os ítens são distribuídos na linha com o mesmo espaçamento entre eles. Note que, visualmente, o espaço pode não ser igual, uma vez que todos os ítens tem a mesma quantidade de espaço dos dois lados: o primeiro item vai ter somente uma unidade de espaço junto à borda do container, mas duas unidades de espaço entre ele e o próximo ítem, pois o próximo ítem também tem seu próprio espaçamento que está sendo aplicado.
- `space-evenly:` os ítens são distribuídos de forma que o espaçamento entre quaisquer dois itens da linha (incluindo entre os ítens e as bordas) seja igual.

Também existem duas palavras-chave adicionais que você pode usar em conjunto com estes valores: `safe` e `unsafe`. Safe garante que, independente da forma que você faça esse tipo de posicionamento, não seja possível "empurrar" um elemento e fazer com que ele seja renderizado para fora da tela (por exemplo, acima do topo), de uma forma que faça com que o conteúdo seja impossível de movimentar com a rolagem da tela (o CSS chama isso de "perda de dados").

# align-items

<img src="../flexbox/img/align-items.svg">

Define o comportamento padrão de como *flex items* são alinhados de acordo com o eixo transversal (cross axis). De certa forma, funciona de forma similar ao `justify-content`, porém no eixo transversal (perpendicular ao eixo principal).

```
.flex-container {
    align-items: stretch | flex-start | flex-end | center | baseline;
}
```

- `stretch (padrão)`: estica os ítens para preencher o container, respeitando o min-width/max-width.
- `flex-start/ start / self-start`: ítens são posicionados no início do eixo transversal. A diferença entre eles é sutil e diz respeito às regras de flex-direction ou writing-mode.
- `center`: ítens são centralizados no eixo transversal.
- `baseline`: ítens são alinhados de acordo com suas baselines.

Os modificadores safe e unsafe pode ser usados em conjunto com todas essas palavras-chave (favor conferir o suporte de cada navegador) e servem para prevenir qualquer alinhamento de elementos que faça com que o conteúdo fique inacessível (por exemplo, para fora da tela).

# align-content

<img src="../flexbox/img/align-content.svg">

Organiza as linhas dentro de um flex container quando há espaço extra no eixo transversal, similar ao modo como `justify-content` alinha ítens individuais dentro do eixo principal.

**Importante**: Esta propriedade não tem efeito quando há somente uma linha de flex items no container.

```
.flex-container {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- `flex-start / start`: ítens alinhados com o início do container. O valor (com maior suporte dos navegadores) `flex-start` se guia pela `flex-direction`, enquanto `start` se guia pela direção do *writing-mode*.
- `flex-end / end`: ítens alinhados com o final do container. O valor (com maior suporte dos navegadores) flex-end se guia pela `flex-direction`, enquanto end se guia pela direção do *writing-mode*.
center: ítens centralizados no container.
- `space-between`: ítens distribuídos igualmente; a primeira linha junto ao início do container e a última linha junto ao final do container.
- `space-around`: ítens distribuídos igualmente com o mesmo espaçamento entre cada linha.
space-evenly`: ítens distribuídos igualmente com o mesmo espaçamento entre eles.
- `stretch (padrão)`: ítens em cada linha esticam para ocupar o espaço remanescente entre elas.

Os modificadores `safe` e `unsafe` pode ser usados em conjunto com todas essas palavras-chave (favor conferir o suporte de cada navegador) e servem para prevenir qualquer alinhamento de elementos que faça com que o conteúdo fique inacessível (por exemplo, para fora da tela).

# flex-wrap

<img src="../flexbox/img/flex-wrap.svg">

Por padrão, os *flex items* vão todos tentar se encaixar em uma só linha. Com esta propriedade você pode modificar esse comportamento e permitir que os ítens quebrem para uma linha seguinte conforme for necessário.

```
.flex-container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap` (padrão): todos os *flex items* ficarão em uma só linha
- `wrap`: os *flex items* vão quebrar em múltiplas linhas, de cima para baixo
- `wrap-reverse`: os *flex items* vão quebrar em múltiplas linhas de baixo para cima

# flex-flow

A propriedade **flex-flow** é uma propriedade shorthand (uma mesma declaração inclui vários valores relacionados a mais de uma propriedade) que inclui `flex-direction` e `flex-wrap`. Determina quais serão os eixos pricipal e transversal do container. O valor padrão é `row nowrap`.

```
.flex-container {
    flex-flow: row nowrap | row wrap | column nowrap | column wrap;
}
```

### [Voltar ao README principal](../README.md)


