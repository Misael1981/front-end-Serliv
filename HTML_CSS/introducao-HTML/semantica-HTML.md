# HTML Semântico: Conheça os elementos semânticos da HTML5

Atualmente o papel da HTML não é apenas estruturar documentos para a web, mas também descrever o significado do conteúdo presente nesses documentos por meio de tags semânticas. O HTML semântico tem como objetivo descrever o significado do conteúdo presente em documentos HTML, tornando-o mais claro tanto para programadores quanto para browsers e outras engines que processam essa informação.

<img src="../introducao-HTML/img/img-01.jpg">

Neste documento apresentamos as principais tags semânticas incorporadas à linguagem HTML.

## header

O `<header>` é utilizado para representar o cabeçalho de um documento ou seção declarado no HTML. Nele podemos inserir elementos de `<h1>` a `<h6>`, até elementos para representar imagens, parágrafos ou mesmo listas de navegação.

Exemplo de uso de `<header>`:

```
<header>
     <h1>Título da página</h1>
     <h2>Subtítulo da página</h2>
</header>
```

## section

O elemento `<section>` representa uma seção dentro de um documento e geralmente contém um título, o qual é definido por meio de um dos elementos entre `<h1>` e `<h6>`. Podemos utilizar o `<section>`, por exemplo, para descrever as seções/tópicos de um documento.

Exemplo de uso de `<section>`:

```
<section>
    <h3>Seção 1</h3>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ...</p>
</section>
```

## article

Utilizamos o elemento `<article>` quando precisamos declarar um conteúdo que não precisa de outro para fazer sentido em um documento HTML, por exemplo, um artigo em um blog. É recomendado identificar cada `<article>` com um título.

Exemplo de uso de `<article>`:

```
<article>
    <h3>Título do artigo 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ...</p>
</article>
<article>
    <h3>Título do artigo 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ...</p>
</article>
```

## nav

O elemento `<nav>` é utilizado quando precisamos representar um agrupamento de links de navegação, que, por sua vez, são criados com os elementos `<ul>`, `<li>` e `<a>`.

Exemplo de uso de `<nav>`:

```
<nav>
 <ul>
 <li><a href=”#”>pagina 1</a></li>
 <li><a href=”#”>pagina 2</a></li>
 <li><a href=”#”>pagina 3</a></li>
 <li><a href=”#”>pagina 4</a></li>
 </ul>
</nav>
```

## aside

O elemento `<aside>` é utilizado quando precisamos criar um conteúdo de apoio/adicional ao conteúdo principal. Por exemplo, ao falar de HTML semântico, podemos indicar ao leitor outros conteúdos sobre a linguagem HTML como sugestão de leitura complementar.

Exemplo de uso de `<aside>`:

```
<aside>
  <nav>
    <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
     </ul>
  </nav>
</aside>
```

## main

O elemento `<main>` especifica o conteúdo principal e, consequentemente, de maior relevância dentro da página. Para ser considerada bem construída, uma página deve apresentar apenas um conteúdo principal.

Exemplo de uso de `<main>`:

```
<main>
  <h2>Titulo</h2>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ...</p>

  <article>
     <h3>Subtítulo</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
   </article>
</main>
```

## footer

O elemento `<footer>` representa um rodapé de um documento, como a área presente no final de uma página web. Normalmente é utilizado para descrever informações de autoria, como nome e contato do autor, e data de criação do conteúdo.

Exemplo de uso de `<footer>`:

```
<footer>
     <p>Escrito por Estevão Dias</p>
     <p>Publicado em 25/03/2017 </p>
</footer>
```

## figure

O elemento `<figure>` é uma marcação de uso específico para a inserção de uma figura. Para incluir a descrição dessa figura, podemos utilizar o elemento `<figcaption>`.

Exemplo de uso de `<figure>`:

```
<figure>
  <img src=”http://meusite.com.br/assets/imagem.jpg” alt=”Imagem”>
</figure>
```

### [Voltar ao Menu Introdução ao HTML](menu_introducao-html.md)