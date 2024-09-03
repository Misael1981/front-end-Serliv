# Pseudo-classes e Pseudo-elementos

**Pseudoclasses e pseudoelementos** são ferramentas poderosas no arsenal do desenvolvedor web, permitindo que você aplique estilos a elementos HTML com base em estados ou partes específicas desses elementos, sem precisar alterar o HTML em si. Isso oferece uma grande flexibilidade na criação de interfaces dinâmicas e responsivas.

## Pseudo-classes

### O que são:

- **Representam estados ou condições de um elemento.**
- **São adicionados após o nome do elemento, precedidas por dois pontos (`:`).**
- **Exemplo: `a:hover` , `input:focus`, `p:first-child`.**

### Para que servem:

- **Estilizar elementos em estados específicos**:
  - `:hover`: Quando o mouse passa por cima.
  - `:active`: Quando o elemento está sendo clicado.
  - `:focus`: Quando o elemento está com o foco (geralmente após o usuário iniciar Tab).

- **Selecionar elementos com base em sua posição**:
  - `:first-child`: O primeiro filho de um elemento pai.
  - `:last-child`: O último filho de um elemento pai.
  - `:nth-child(n)`: O n-ésimo filho de um elemento pai.

- **Selecionar elementos com base em seu estado**:
  - `:enabled`, `:disabled`: Para elementos de formulário.
  - `:checked`: Para elementos de formulário marcados.

### Exemplo:

```
h1::before {
  content: "⭐ ";
  color: gold;
}
```

## Pseudo-elementos

### O que são:

- **Representam partes específicas de um elemento.**
- **São adicionados após o nome do elemento, precedidos por dois pontos (`::`).**
**Exemplo: `p::first-line` , `a::before`.**

### Para que servem:

- **Estilizar partes de um elemento:**
  - `::before`: Insira o conteúdo antes do conteúdo do elemento.
  - `::after`: Insira o conteúdo após o conteúdo do elemento.
  - `::first-line`: Estiliza a primeira linha de um bloco de texto.

- **Criar elementos visuais:**
  - `:marker`: Estiliza marcadores de listas.

### Exemplo:

```
h1::before {
  content: "⭐ ";
  color: gold;
}
```

### Em resumo:

- **Pseudo-classes** estilizaram elementos com base em seus estados ou posições.
- **Pseudo-elementos** estilizados foram partes específicas de um elemento ou inserir conteúdo antes ou depois dele.

### Quando usar:

- **Pseudoclasses**: Para criar interações com o usuário, como hover, foco e cliques.
- **Pseudo-elementos**: Para criar elementos visuais personalizados, como marcadores, ícones ou elementos decorativos.

### Exemplo prático:

```
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
```
ul li::marker {
  content: "✅ ";
}
ul li:hover {
  background-color: lightgray;
}
```

### Resultado:

- Uma lista com marcadores personalizados (✅).
- Ao passar o mouse sobre um item da lista, ele fica com um fundo cinza.