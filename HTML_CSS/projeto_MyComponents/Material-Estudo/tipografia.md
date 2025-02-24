# Tipografia

Tags HTML que cuidam da tipografia de forma semântica, ou seja, que dão significado ao texto além da aparência.

## Tags de Ênfase e Importância:

- ### `<b>`(Negrito):
    - Usada para destacar o texto em negrito, mas sem transmitir importância semântica.
    - **Exemplo**:`<b>Texto em negrito</b>`
- ### `<strong>`(Forte):
    - Indica que o texto tem forte importância. Navegadores geralmente o exibem em preto.
    - **Exemplo**:`<strong>Texto importante</strong>`
- ### `<i>`(Itálico):
    - Apresenta o texto em itálico, mas sem ênfase semântica.
    - **Exemplo**:`<i>Texto em itálico</i>`
- ### `<em>`(Ênfase):
    - Enfatiza o texto, enfatiza ou estresse. Navegadores geralmente exibem em itálico.
    - **Exemplo**:`<em>Texto enfatizado</em>`

## Tags de Marcação e Alteração:

- ### `<u>`(Sublinhado):
    - Sublinha ou texto. Evite usá-la para sublinhar texto que não seja um link, pois pode confundir os usuários.
    - **Exemplo**: `<u>texto sublinhado</u>`
- ### `<del>`(Excluído):
    - Indica texto que foi excluído ou removido.
    - **Exemplo**:`<del>Texto deletado</del>`
- ### `<ins>`(Inserido):
    - Indica texto que foi inserido ou adicionado.
    - **Exemplo**:`<ins>Texto inserido</ins>`

## Tags de Citação e Definição:

- ### `<abbr>`(Abreviação):
    - Representa uma abreviação ou acrônimo. O atributo `title` fornece a expansão da abreviação.
    - **Exemplo**:`<abbr title="Hypertext Markup Language">HTML</abbr>`
- ### `<dfn>`(Definição):
    - Indica o termo que está sendo definido.
    - **Exemplo**: `<dfn>HTML</dfn>` é uma linguagem de marcação.
- ### `<blockquote>`(Citação em bloco):
    - Representa uma seção de texto que é citada de outra fonte. O atributo citefornece a URL da fonte.
    - **Exemplo**: `<blockquote cite="https://www.exemplo.com.br"> texto da citação </blockquote>`
- ### `<cite>`(Citação):
    - Defina o título de um trabalho criativo (livro, artigo, etc.).
    - **Exemplo**: `<cite>Dom Quixote</cite>` de Miguel de Cervantes.
- ### `<q>`(Cotação):
    - Representa uma citação curta embutida no texto.
    - **Exemplo**: `<q>ser ou não ser, eis a questão</q>`.

## Tags de Código e Formatação:

- ### `<code>` (Code):
    - Exibe trechos de código de computador.
    - **Exemplo:** `<code>console.log("Olá, mundo!");</code>`
- ### `<pre>` (Preformatted):
    - Preserva a formatação do texto, incluindo espaços e quebras de linha.
    - **Exemplo:**

```
<pre>
function minhaFuncao() {
  console.log("Olá!");
}
</pre>
```

- ### `<samp>` (Sample Output):
    - Representa a saída de um programa de computador.
    - **Exemplo**: `<samp>resultado</samp>`
- ### `<kbd>` (Keyboard Input):
    - Indica a entrada do usuário através do teclado.
    - **Exemplo**: `<kbd>ESC</kbd>`
- ### `<sub>` (Subscript):
    - Exibe o texto como subscrito.
    - **Exemplo**: `H<sub>2</sub>O`
- ### `<sup>` (Superscript):
    - exibe o texto como sobrescrito.
    - **Exemplo**: `<xsup>2</sup>`

## Tags de Tempo:

- ### `<time>` (Time):
    - Representa uma data e/ou hora específica. O atributo datetime fornece a data/hora em um formato legível por máquina.
    - **Exemplo**: `<time datetime="2024-03-15">15 de março de 2024</time>`

## Atributos Adicionais:

- **lang**:
    - Especifica o idioma do conteúdo do elemento.
    - **Exemplo**: `<p lang="pt-BR">texto em português</p>`

### Importância da Semântica:

- Melhora a acessibilidade para usuários com deficiências visuais, que utilizam leitores de tela.
- Facilita a indexação e o entendimento do conteúdo pelos mecanismos de busca (SEO).
- Torna o código mais organizado e legível para outros desenvolvedores.