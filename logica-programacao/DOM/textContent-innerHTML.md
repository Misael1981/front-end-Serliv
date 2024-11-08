# `textContent` e `innerHTML`

`textContent` e `innerHTML` são propriedades usadas em JavaScript para manipular o conteúdo de elementos HTML. A principal diferença está em como elas interpretam esse conteúdo:


## `innerHTML`

-  Pega ou define o conteúdo completo de um elemento HTML, incluindo tags e formatação. É como se você copiasse todo o código HTML dentro daquela tag. No mesmo exemplo anterior:

- No HTML

```
<h1><b>This is bold</b></h1>
```

  - No JavaScript

```
const title = document.queryselector('h1')
title.innerHTML = 'New text"
```

- Teremos o retorno teremos a tag HTML completa

```
<h1><b>New text</b></h1>
```

- Caso seja necessário criar uma tag inteira

```
const div = document.querySeletor('.content')
const numbers = [1, 2, 3]

numbers.forEach(number => {
    div.innerHTML += `<p>${number}</p>`
})
```

- No retorno teremos:

```
<div class="content">
   <p>1</p>
   <p>2</p>
   <p>3</p>
</div>
```

Aqui está uma tabela resumindo as diferenças:

| Propriedade | Valor retornado | Valor definido |
|-------------|-----------------|----------------|
| texto interno | Texto puro dentro do elemento | Substituir o conteúdo do elemento por texto puro |
| HTML interno | Todo o conteúdo HTML dentro do elemento (incluindo tags) | Substituir o conteúdo do elemento por HTML |

## `textContent`

## Análise de como `textContent` funciona:

- **Obtém conteúdo de texto**: quando você usa `element.textContent`, ele retorna uma string contendo todo o texto dentro do elemento, incluindo quaisquer elementos filhos.
- **Inclui nós de texto**: incorpora o conteúdo dos nós de texto (`<text>elementos`), bem como o conteúdo de texto de outros elementos filhos.
- **Ignora formatação**: foca no texto real e desconsidera quaisquer tags HTML ou formatação aplicada ao elemento.

Aqui está um exemplo para ilustrar isso:

```
<div id="myElement">This is some <b>bold</b> text with a <span>paragraph</span>.</div>
```

Se você usar:

```
const element = document.getElementById("myElement");
const textContent = element.textContent;
console.log(textContent);
```

Isso produzirá:

```
This is some bold text with a paragraph.
```

### Pontos-chave a serem lembrados:

- `textContent` é diferente de `innerText`. Enquanto `textContent` recupera todo o conteúdo de texto, considera apenas o texto diretamente visível dentro do elemento, excluindo texto em elementos ocultos ou formatados de forma diferente com CSS. innerText
- O uso `textContent` é geralmente preferido por razões de segurança, pois evita possíveis vulnerabilidades associadas à injeção de HTML.

### Casos de uso comuns:

- Atualizar dinamicamente o conteúdo de texto de um elemento com base na entrada do usuário ou outros eventos.
- Extrair o conteúdo textual de um elemento para processamento posterior.
- Simplificando o processo de captura do conteúdo geral do texto dentro de um elemento.

### [Menu DOM](menu-dom.md)