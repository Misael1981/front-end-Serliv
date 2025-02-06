# Adicionando Conteúdo - textContent, innerHTML e innerText em JavaScript

## Introdução

Quando lidamos com o DOM (Document Object Model) em JavaScript, frequentemente precisamos manipular o conteúdo de elementos HTML. As propriedades `textContent` são `innerHTML` ferramentas `innerText` essenciais para essa tarefa. Cada uma delas tem um comportamento específico e é utilizado em diferentes cenários.

## `textContent`

- **O que faz**: Retorna ou define o conteúdo textual de um nó, incluindo todos os seus descendentes, ignorando tags HTML.
- **Quando usar**:
    - **Ao lidar** com texto puro, sem formatação HTML.
    - **Ao obter o texto** de um elemento, mesmo que ele contenha outros elementos.
    - **Ao precisar modificar** o texto de um elemento sem alterar sua estrutura HTML.

```
const paragraph = document.getElementById('meuParagrafo');
console.log(paragraph.textContent); // Retorna todo o texto do parágrafo, incluindo tags HTML como texto puro

paragraph.textContent = 'Este é o novo texto do parágrafo.';
```

## `innerHTML`

- **O que faz**: Retorna ou define o conteúdo HTML de um elemento, incluindo todas as suas tags e atributos.
- **Quando usar**:
    - **Ao querer modificar** a estrutura HTML de um elemento.
    - **Ao inserir ou remover** elementos HTML dentro de um elemento pai.

```
const div = document.getElementById('minhaDiv');
console.log(div.innerHTML); // Retorna o HTML dentro da div

div.innerHTML = '<h1>Título</h1><p>Parágrafo</p>';
```

## `innerText`

- **O que faz**: Retorna ou define o conteúdo textual de um elemento, semelhante ao textContent, mas ignora os elementos que não são renderizados, como elementos com estilo display: none.
- **Quando usar**:
    - **Ao obter** o texto visível de um elemento, excluindo o texto de elementos ocultos.

```
const hiddenParagraph = document.getElementById('paragrafoOculto');
hiddenParagraph.style.display = 'none';

const div = document.getElementById('minhaDiv');
console.log(div.innerText); // Não inclui o texto do parágrafo oculto
```

## Comparação
|**Propriedade**|	**Retorna/Definir**|	**Incluir tags HTML**|	**Inclui texto de elementos ocultos**|
|-----|---------|----------|---------|
|`textContent`|	Texto puro|	Não	|Sim|
|`innerHTML`|	HTML completo|	Sim	|Sim|
|`innerText`|	Texto visível|	Não|	Não|

## Quando usar cada uma?

- **textContent**: Ideal para manipulação de texto puro e quando a estrutura HTML não precisa ser alterada.
- **innerHTML**: Perfeito para modificar a estrutura HTML de um elemento e inserir novo conteúdo HTML.
- **innerText**: Útil quando você precisa obter o texto visível de um elemento, ignorando elementos ocultos.

### Exemplo prático

```
const paragraph = document.getElementById('meuParagrafo');
const originalText = paragraph.textContent;

// Alterando o texto usando textContent
paragraph.textContent = 'Texto alterado usando textContent';

// Inserindo um link usando innerHTML
paragraph.innerHTML += '<br><a href="https://www.google.com">Link para o Google</a>';

// Obtendo o texto visível (innerText)
const divComElementoOculto = document.getElementById('minhaDiv');
console.log(divComElementoOculto.innerText);
```

### Em resumo:

- `textContent` é para texto puro.
- `innerHTML` é para HTML completo.
- `innerText` é para texto visível.

A escolha da propriedade correta depende de sua necessidade específica e da estrutura HTML do seu documento.

**Observação**: É importante lembrar que a manipulação do DOM com essas propriedades pode afetar o desempenho de sua aplicação, especialmente em grandes quantidades de dados. Utilize-as com moderação e considere otimizações se necessárias.

### [Voltar ao Menu DOM](./menu.md)