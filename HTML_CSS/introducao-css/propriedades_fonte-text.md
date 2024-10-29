# Propriedades de `font` e `text` em CSS

## Introdução

As propriedades `font` e `text`em CSS são ferramentas poderosas para personalizar a aparência do texto em suas páginas da web. Eles permitem o controle desde a família da fonte, o tamanho, o estilo até o espaçamento entre letras e linhas. Neste tutorial, vamos explorar as principais propriedades e como utilizá-las de forma eficaz.

## Propriedades da Fonte (`font`)

A propriedade `font`é uma abreviação que combina várias propriedades individuais para definir a fonte de um elemento.

### Sintaxe:

```
font: font-style font-weight font-size/line-height font-family;
```

### Propriedades individuais:

- **`font-family`**: Especifica a família da fonte que será utilizada. Ex:font-family: Arial, sans-serif;
- **`font-size`**: Define o tamanho da fonte. Ex:font-size: 16px;
- **`font-style`**: Define o estilo da fonte (normal, itálico, obliquo). Ex:font-style: italic;
- **`font-weight`**: Define a espessura da fonte (normal, negrito, etc.). Ex:font-weight: bold;
- **`line-height`**: Define a altura da linha, ou seja, o espaço entre as linhas de texto. Ex:line-height: 1.5;

### Exemplo:

```
p {
  font: italic bold 16px/1.5 Arial, sans-serif;
}
```

## Propriedades de Texto (`text`)

As propriedades do texto permitem controlar a aparência e o alinhamento do texto dentro de um elemento.

### Principais propriedades:

- **`text-align`**: Alinha o texto horizontalmente (esquerda, direita, centro, justificar). `text-align: center;`
- **`text-decoration`**: Adicionais decorações ao texto (sublinhado, sobreposto, line-through). `text-decoration: underline;`
- **`text-transform`**: Altera o formato das letras (maiúsculas, minúsculas, maiúsculas). `text-transform: uppercase;`
- **`text-indent`**: recuo da primeira linha de um parágrafo. `text-indent: 2em;`
- **`letter-spacing`**: Aumenta ou diminui o espaço entre as letras. `letter-spacing: 2px;`
- **`word-spacing`**: Aumenta ou diminui o espaço entre as palavras. `word-spacing: 5px;`

### Exemplo:


```
h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}
```

### Outros recursos úteis

- **`font-variant`**: Permite aplicar variações na fonte, como letras minúsculas ou números antigos.
- **`text-shadow`**: Adiciona uma sombra ao texto.
- **`text-overflow`**: Defina como o texto deve ser tratado quando exceder o tamanho do container.

### Exemplo completo

```
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
    }

    h1 {
      font-size: 36px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    p {
      text-indent: 2em;
    }
  </style>
</head>
<body>
  <h1>Título Principal</h1>
  <p>Este é um parágrafo com a primeira linha indentada.</p>
</body>
</html>
```

### Conclusão

As propriedades fonte textsão essenciais para criar designs web personalizados e interessantes. Ao essas propriedades, você poderá ajustar a aparência do texto de forma precisa e eficiente.


### [Menu Introdução ao CSS](menu_introducao-CSS.md)