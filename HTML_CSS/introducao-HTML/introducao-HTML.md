# Introção ao HTML

*HTML (Hypertext Markup Language)* é a linguagem de marcação usada para estruturar e apresentar conteúdo na web. Ele é composto por uma série de elementos que definem a semântica e a formatação do conteúdo. Vamos explorar algumas das principais tags utilizadas no HTML:

### Títulos

Os títulos são fundamentais para organizar o conteúdo de uma página. O HTML oferece seis níveis de títulos, do `<h1>` ao `<h6>`, onde `<h1>` representa o título mais importante e `<h6>` o menos importante:

```
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Sub-subtítulo</h3>
<!-- até h6 -->
```

### Destaques em Texto

Para enfatizar ou destacar partes do texto, utilizamos as seguintes tags:

- `<i>`: Usada para texto em itálico, geralmente para enfatizar.
- `<b>`: Usada para texto em negrito, sem um significado semântico forte.
- `<em>`: Semelhante ao `<i>`, mas tem um significado semântico de ênfase.
- `<strong>`: Semelhante ao `<b>`, mas indica uma ênfase mais forte.

```
<p>Este é um texto <i>itálico</i>, enquanto este é <b>negrito</b>. Aqui temos <em>ênfase</em> e <strong>forte ênfase</strong>.</p>
```

### Listas

As listas são úteis para organizar informações. Existem dois tipos principais:

- **Lista não ordenada** (`<ul>`): Apresenta itens em uma lista com marcadores.

```
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

- **Lista ordenada** (`<ol>`): Apresenta itens em uma lista numerada.

```
<ol>
  <li>Primeiro Item</li>
  <li>Segundo Item</li>
  <li>Terceiro Item</li>
</ol>
```

### Links

Os links são essenciais para a navegação na web. A tag `<a>` é utilizada para criar hyperlinks, permitindo que os usuários cliquem e sejam redirecionados para outra página ou recurso.

```
<a href="https://www.exemplo.com">Visite o Exemplo!</a>
```

### Quebras de Linha e Linhas Horizontais

Para controlar a apresentação do texto, podemos usar:

- `<br>`: Insere uma quebra de linha.

```
<p>Esta linha termina aqui.<br>E esta começa na linha seguinte.</p>
```

- `<hr>`: Insere uma linha horizontal, geralmente usada para separar conteúdos.

```
<hr>
<p>Isto está abaixo da linha horizontal.</p>
```

---

Essas tags formam a base da estruturação de páginas web em HTML, permitindo que desenvolvedores criem conteúdos ricos e bem organizados. 

### [Voltar ao Menu Introdução ao HTML](menu_introducao-html.md)
