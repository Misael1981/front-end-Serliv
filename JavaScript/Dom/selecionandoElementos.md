# Selecionando Elementos HTML com getElements e Queries

## Introdução

O Document Object Model (DOM) é uma interface que o JavaScript utiliza para interagir com os elementos de uma página HTML. Ao dominar os métodos de seleção, você poderá manipular esses elementos dinamicamente, tornando suas páginas mais interativas e responsivas.

Neste tutorial, vamos explorar os principais métodos para selecionar elementos HTML: os métodos `getElementsBy` e as `queries`.

## Métodos `getElementsBy`

Os métodos `getElementsBy` são uma forma mais antiga de selecionar elementos, mas ainda são muito utilizados. Eles retornam uma coleção de elementos que são específicos para seleção.

- `getElementsByTagName()`: Seleciona todos os elementos com uma determinada tag.

```
const paragraphs = document.getElementsByTagName('p');
```

- `getElementsByClassName()`: Seleciona todos os elementos com uma determinada classe.


```
const divsComClasseVermelha = document.getElementsByClassName('vermelho');
```


- `getElementById()`: Seleciona um único elemento pelo seu ID (único em toda a página).

```
const meuParagrafo = document.getElementById('meuParagrafo');
```

**Observação**: Os métodos `getElementsBy` retornam um `HTMLCollecton`, mesmo que haja apenas um elemento correspondente. Para acessar um elemento específico da coleção, você pode usar um índice:

```
const primeiroParagrafo = paragraphs[0];
```

## `queries`

Como `queries` são uma forma mais moderna e flexível de seleção de elementos, utilizando sintaxes semelhantes às de CSS.

- `querySelector()`: Selecione o primeiro elemento que representa o seletor CSS.

```
const primeiroElementoComIdMeuParagrafo = document.querySelector('#meuParagrafo');
```

- `querySelectorAll()`: Seleciona todos os elementos que representam ao seletor CSS.

```
const todosOsElementosComClasseVermelha = document.querySelectorAll('.vermelho');
```

### Exemplo:

```
<div id="container">
  <p class="vermelho">Parágrafo vermelho</p>
  <p>Outro parágrafo</p>
  <div class="vermelho">Div vermelha</div>
</div>
```

```
// Selecionando o primeiro parágrafo com a classe "vermelho"
const primeiroParagrafoVermelho = document.querySelector('.vermelho');

// Selecionando todos os elementos com a classe "vermelho"
const todosOsElementosVermelhos = document.querySelectorAll('.vermelho');

// Alterando o texto do primeiro parágrafo vermelho
primeiroParagrafoVermelho.textContent = 'Texto alterado';
```

## Qual método escolher?

- `getElementsBy`: Ideal para opções simples e quando você não precisa de todos os elementos de uma vez.
- `Queries`: Mais flexível e poderoso, permitindo opções complexas com a sintaxe do CSS. É recomendado para a maioria dos casos.

### Quando usar `getElementById()`:

- Quando você tiver certeza de que o ID é único na página.
- Para acessar um elemento específico com alta performance.

### Manipulando elementos selecionados

Após selecionar um elemento, você pode manipular suas propriedades, como:

- `textContent`: Altera o texto dentro do elemento.
- `innerHTML`: Altera o conteúdo HTML dentro do elemento.
- `style`: Altere o estilo CSS do elemento.
- `classList`: Adiciona, remove ou verifica classes CSS.

### Exemplo:

```
// Adicionando uma classe ao primeiro parágrafo vermelho
primeiroParagrafoVermelho.classList.add('destaque');
```

### Conclusão

Dominar os métodos de seleção é fundamental para qualquer desenvolvedor web que queira criar páginas dinâmicas e interativas. Ao entender as diferenças entre os métodos getElementsBye as queries, você poderá escolher a ferramenta mais adequada para cada situação e criar aplicações web mais eficientes.


### [Voltar ao Menu DOM](./menu.md)