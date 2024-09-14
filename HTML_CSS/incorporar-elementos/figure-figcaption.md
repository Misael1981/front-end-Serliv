# Tags HTML `<figure>` e `<figcaption>`

As tags `<figure>` e `<figcaption>`são elementos semânticos do HTML5 que servem para estruturar e descrever o conteúdo que se destaca do fluxo principal de um documento.

## `<figure>`:

- **O que é**: Representa uma unidade de conteúdo autocontida, como uma imagem, diagrama, código, etc. É um elemento que pode ser movido para outro lugar do documento sem alterar o significado do texto principal.
- **Para que serve**: Serve para agrupar um elemento (como uma imagem) com sua legenda ou descrição.
- **Como usar**:
    - Envolva o elemento que você deseja destacar (ex: uma imagem).
    - Opcionalmente, adicione uma legenda usando a tag `<figcaption>`.

## `<figcaption>`:

- **O que é**: Representa a legenda ou descrição de um elemento dentro de um `<figure>`.
- **Para que serve**: Forneçe um título ou explicação para o conteúdo do `<figure>`, tornando o conteúdo mais acessível e compreensível.
- **Como usar**:
    - Deve ser colocado dentro da etiqueta `<figure>`.
    - Pode ser colocado antes ou depois do conteúdo principal do `<figure>`.

### Exemplo:

```
<figure>
  <img src="minha-imagem.jpg" alt="Uma bela paisagem">
  <figcaption>Uma vista deslumbrante do pôr do sol.</figcaption>
</figure>
```

### Por que usar `<figure>`e `<figcaption>`?

- **Semântica**: Torna o código mais semântico e fácil de entender para os motores de busca e outros softwares.
- **Acessibilidade**: Aumenta a acessibilidade do conteúdo para pessoas com deficiência visual, pois os leitores de tela podem interpretar a relação entre a imagem e sua legenda.
- **SEO**: Melhore o SEO do seu site, pois os motores de busca podem entender melhor o conteúdo da sua página.

### Outros exemplos de uso:

- **Código**:

```
<figure>
  <code>
    function saudacao(nome) {
      console.log("Olá, " + nome + "!");
    }
  </code>
  <figcaption>Exemplo de uma função em JavaScript.</figcaption>
</figure>
```

- **Diagrama:**

```
<figure>
  <img src="meu-diagrama.svg" alt="Diagrama de fluxo">
  <figcaption>Diagrama de fluxo do processo de compra.</figcaption>
</figure>
```

### Em resumo:

As tags `<figure>` e `<figcaption>` são ferramentas poderosas para organizar e descrever o conteúdo visual em suas páginas HTML. Ao utilizar essas tags, você criará um código mais semântico, acessível e otimizado para SEO.

### [Menu Incorparar Elementos](menu_incorporar-elementos.md)