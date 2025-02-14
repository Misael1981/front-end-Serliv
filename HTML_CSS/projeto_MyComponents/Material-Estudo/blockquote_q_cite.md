# Tags HTML para citações:

## `<blockquote>`

- **Função**: Cria uma citação em bloco, ou seja, um texto que se destaca visualmente do restante do conteúdo, geralmente com recuo e/ou tipografia diferenciada.
- **Uso**: Ideal para citações longas, como trechos de artigos, poemas ou discursos.

### Exemplo:

```
<blockquote>
<p>“A única coisa que precisamos temer é o próprio medo.”</p>
<cite>Franklin D. Roosevelt</cite>
</blockquote>
```

## `<q>`

- **Função**: Cria uma citação curta, geralmente inserida dentro de um parágrafo.
- **Uso**: Perfeito para citações curtas, como frases ou palavras específicas.

### Exemplo:

```
<p>Como disse Einstein, “A energia não pode ser criada nem destruída, apenas transformada”.</p>
```

## `<cite>`

- **Função**: Indica o título de uma obra (livro, artigo, música, filme, etc.) ou o nome de um criador.
- **Uso**: Normalmente utilizada dentro de um elemento blockquote ou q para atribuir a autoria da citação. Também pode ser usada como elemento por si só para indicar um título.

### Exemplo:

```
<p>Em seu livro “O Pequeno Príncipe”, Antoine de Saint-Exupéry nos convida a olhar para o mundo com os olhos de uma criança.</p>
```

### Resumo:

|Marcação	|Descrição	|Uso|
|------------|---------|----|
|`<blockquote>`|Citação longa em bloco	|Trechos de artigos, poemas, discursos|
|`<q>`|Citação curta dentro de um parágrafo|	Frases, palavras específicas|
|`<cite>`|Título de uma obra ou nome de um criador|	Atribuição de autoria em citações|

### Observações:

- **Atributo cite**: As tags `blockquote` e `q` possuem o atributo opcional `cite` para indicar a URL da fonte da citação. Isso é útil para SEO e acessibilidade.
- **Semântica**: O uso correto dessas tags melhora a semântica do seu HTML, facilitando a compreensão tanto para os navegadores quanto para os mecanismos de busca.
- **Estilo**: Você pode personalizar a aparência dessas tags usando CSS.

#### Quando usar cada uma:

- **blockquote**: Para citações longas que merecem destaque visual.
- **q**: Para citações curtas que fazem parte do fluxo do texto.
- **cite**: Para atribuir a autoria de citações e indicar títulos de obras.

### Exemplo completo:

```
<p>Albert Einstein disse: <q>A imaginação é mais importante que o conhecimento.</q> Essa frase, encontrada em seu livro <cite>O Mundo Como Eu o Vejo</cite>, reflete a importância da criatividade no processo de descoberta.</p>
```