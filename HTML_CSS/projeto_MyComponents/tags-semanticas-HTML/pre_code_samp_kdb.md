# Tags HTML para Código e Texto Preformatado

## `<pre>`

- **Função**: Preserva os espaços em branco e a formatação exata do conteúdo, exibindo-o exatamente como foi digitado.
- **Uso**: Ideal para blocos de código, poemas, ou qualquer texto que exija uma formatação específica, como tabulações e quebras de linha.

### Exemplo:

```
<pre>
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
</pre>
```

## `<code>`

- **Função**: Indica um trecho de código.
- **Uso**: Geralmente usado dentro de um elemento <pre> para destacar o código dentro de um bloco de texto. Também pode ser usado inline para mostrar pequenos trechos de código.

### Exemplo:

```
<p>Para criar um alerta em JavaScript, você pode usar o seguinte código: <code>alert("Hello, world!");</code></p>
```

## `<samp>`

- **Função**: Representa a saída de um programa ou script.
- **Uso**: Para mostrar o resultado de uma operação ou comando, como a saída de um comando no terminal.

### Exemplo:

```
<p>Ao executar o comando "ls", obtive a seguinte saída: <samp>
    documento.txt  imagem.png  index.html
</samp></p>
```

## `<kbd>`

- **Função**: Indica texto que representa uma entrada do teclado.
- **Uso**: Para mostrar teclas ou sequências de teclas que o usuário deve pressionar.

### Exemplo:

```
<p>Para salvar um arquivo no Word, pressione <kbd>Ctrl+S</kbd>.</p>
```
|Marcação	|Descrição	|Uso|
|---------|----------|------|
|`<pre>`|	Preserva formatação	|Blocos de código, poemas, texto formatado|
|`<code>`|	Indica código|	Dentro de `<pre>` ou inline|
|`<samp>`|	Saída de programa|	Resultados do comando|
|`<kbd>`|	Entrada do teclado|	Teclas ou sequências de teclas|

### Quando usar cada uma:

- `<pre>`: Sempre que a formatação precisa ser preservada, como em blocos de código ou poemas.
- `<code>`: Para destacar trechos de código dentro de um texto.
- `<samp>`: Para mostrar a saída de um programa ou script.
- `<kbd>`: Para indicar teclas ou sequências de teclas que o usuário deve pressionar.

### Observações:

- **CSS**: Você pode personalizar a aparência dessas tags usando CSS, por exemplo, alterando a fonte, a cor e o fundo.
- **Semântica**: O uso correto dessas tags melhora a semântica do seu HTML, facilitando a compreensão tanto para os navegadores quanto para os mecanismos de busca.

### Exemplo completo:

```
<p>Para executar um programa em Python, você precisa abrir o terminal e digitar o seguinte comando: <kbd>python meu_programa.py</kbd>. Se tudo correr bem, você verá a seguinte saída: <samp>
    Hello, world!
</samp></p>
```
